/******/ var __webpack_modules__ = ({

/***/ "./client/src/modules/auth/example/auth-provider.ts":
/*!**********************************************************!*\
  !*** ./client/src/modules/auth/example/auth-provider.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getUserInfo": () => (/* binding */ getUserInfo),
/* harmony export */   "initialize": () => (/* binding */ initialize),
/* harmony export */   "isAuthenticationRequired": () => (/* binding */ isAuthenticationRequired),
/* harmony export */   "login": () => (/* binding */ login),
/* harmony export */   "logout": () => (/* binding */ logout),
/* harmony export */   "subscribe": () => (/* binding */ subscribe),
/* harmony export */   "unsubscribe": () => (/* binding */ unsubscribe)
/* harmony export */ });
let authenticated;
let authOptions;
let sessionExpiryCheckId;
let logger;
const subscribeIdMap = {};
const loggedInSubscribers = new Map();
const beforeLoggedOutSubscribers = new Map();
const loggedOutSubscribers = new Map();
const sessionExpiredSubscribers = new Map();
const EXAMPLE_AUTH_AUTHENTICATED_KEY = "EXAMPLE_AUTH_IS_AUTHENTICATED";
async function openLoginWindow(url) {
    return fin.Window.create({
        name: "example-auth-log-in",
        alwaysOnTop: true,
        maximizable: false,
        minimizable: false,
        autoShow: false,
        defaultCentered: true,
        defaultHeight: authOptions.loginHeight ?? 250,
        defaultWidth: authOptions.loginWidth ?? 400,
        includeInSnapshots: false,
        resizable: false,
        showTaskbarIcon: false,
        saveWindowState: false,
        url
    });
}
async function openLogoutWindow(url) {
    return fin.Window.create({
        name: "example-auth-log-out",
        maximizable: false,
        minimizable: false,
        autoShow: false,
        defaultCentered: true,
        defaultHeight: authOptions.loginHeight ?? 250,
        defaultWidth: authOptions.loginWidth ?? 400,
        includeInSnapshots: false,
        resizable: false,
        showTaskbarIcon: false,
        saveWindowState: false,
        url
    });
}
async function checkAuth(url) {
    const windowToCheck = await fin.Window.create({
        name: "example-auth-check-window",
        alwaysOnTop: true,
        maximizable: false,
        minimizable: false,
        autoShow: false,
        defaultHeight: authOptions.loginHeight ?? 250,
        defaultWidth: authOptions.loginWidth ?? 400,
        includeInSnapshots: false,
        resizable: false,
        showTaskbarIcon: false,
        saveWindowState: false,
        url
    });
    let isAuthenticated = false;
    try {
        const info = await windowToCheck.getInfo();
        if (info.url === authOptions.authenticatedUrl) {
            isAuthenticated = true;
        }
    }
    catch (error) {
        logger.error("Error encountered while checking session", error);
    }
    finally {
        if (windowToCheck !== undefined) {
            await windowToCheck.close(true);
        }
    }
    return isAuthenticated;
}
async function getAuthenticationFromUser() {
    return new Promise((resolve, reject) => {
        openLoginWindow(authOptions.loginUrl)
            .then(async (win) => {
            try {
                if (win !== undefined) {
                    const info = await win.getInfo();
                    if (info.url === authOptions.authenticatedUrl) {
                        await win.close(true);
                        return resolve(true);
                    }
                    await win.show(true);
                }
            }
            catch (error) {
                logger.error(`Error while checking if login window automatically redirected. Error ${error.message}`);
                if (win !== undefined) {
                    await win.show(true);
                }
            }
            let statusCheck;
            await win.addListener("closed", async () => {
                if (win) {
                    window.clearInterval(statusCheck);
                    statusCheck = undefined;
                    logger.info("Auth Window cancelled by user");
                    win = undefined;
                    return resolve(false);
                }
            });
            statusCheck = window.setInterval(async () => {
                if (win !== undefined) {
                    const winInfo = await win.getInfo();
                    if (winInfo.url === authOptions.authenticatedUrl) {
                        window.clearInterval(statusCheck);
                        await win.removeAllListeners();
                        await win.close(true);
                        return resolve(true);
                    }
                }
                else {
                    return resolve(false);
                }
            }, authOptions.checkLoginStatusInSeconds ?? 1 * 1000);
            return true;
        })
            .catch((error) => {
            logger.error("Error while trying to authenticate the user", error);
        });
    });
}
function checkForSessionExpiry(force = false) {
    if (authOptions?.checkSessionValidityInSeconds !== undefined &&
        authOptions?.checkSessionValidityInSeconds > -1 &&
        sessionExpiryCheckId === undefined) {
        sessionExpiryCheckId = setTimeout(async () => {
            sessionExpiryCheckId = undefined;
            const stillAuthenticated = await checkAuth(authOptions.loginUrl);
            if (stillAuthenticated) {
                logger.info("Session Still Active");
                checkForSessionExpiry();
            }
            else {
                logger.info("Session not valid. Killing session and notifying registered callback that authentication is required. This check is configured in the data for this example auth module. Set checkSessionValidityInSeconds to -1 in the authProvider module definition if you wish to disable this check");
                authenticated = false;
                localStorage.removeItem(EXAMPLE_AUTH_AUTHENTICATED_KEY);
                await notifySubscribers("session-expired", sessionExpiredSubscribers);
            }
        }, authOptions.checkSessionValidityInSeconds * 1000);
    }
}
async function notifySubscribers(eventType, subscribers) {
    const subscriberIds = Array.from(subscribers.keys());
    subscriberIds.reverse();
    for (let i = 0; i < subscriberIds.length; i++) {
        const subscriberId = subscriberIds[i];
        logger.info(`Notifying subscriber with subscription Id: ${subscriberId} of event type: ${eventType}`);
        await subscribers.get(subscriberId)();
    }
}
async function handleLogout(resolve) {
    if (authenticated === undefined || !authenticated) {
        logger.error("You have requested to log out but are not logged in");
        resolve(false);
        return;
    }
    logger.info("Log out requested");
    await notifySubscribers("before-logged-out", beforeLoggedOutSubscribers);
    authenticated = false;
    localStorage.removeItem(EXAMPLE_AUTH_AUTHENTICATED_KEY);
    if (authOptions.logoutUrl !== undefined &&
        authOptions.logoutUrl !== null &&
        authOptions.loginUrl.trim().length > 0) {
        try {
            const win = await openLogoutWindow(authOptions.logoutUrl);
            setTimeout(async () => {
                await win.close();
                await notifySubscribers("logged-out", loggedOutSubscribers);
                resolve(true);
            }, 2000);
        }
        catch (error) {
            logger.error(`Error while launching logout window. ${error}`);
            return resolve(false);
        }
    }
    else {
        await notifySubscribers("logged-out", loggedOutSubscribers);
        resolve(true);
    }
}
async function initialize(definition, createLogger, helpers) {
    logger = createLogger("AuthExample");
    if (authOptions === undefined) {
        logger.info(`Setting options: ${JSON.stringify(definition.data, null, 4)}`);
        authOptions = definition.data;
        authenticated = Boolean(localStorage.getItem(EXAMPLE_AUTH_AUTHENTICATED_KEY));
        if (authenticated) {
            checkForSessionExpiry();
        }
    }
    else {
        logger.warn("Options have already been set as init has already been called");
    }
}
function subscribe(to, callback) {
    const key = crypto.randomUUID();
    let matchFound = false;
    switch (to) {
        case "logged-in": {
            matchFound = true;
            loggedInSubscribers.set(key, callback);
            break;
        }
        case "before-logged-out": {
            matchFound = true;
            beforeLoggedOutSubscribers.set(key, callback);
            break;
        }
        case "logged-out": {
            matchFound = true;
            loggedOutSubscribers.set(key, callback);
            break;
        }
        case "session-expired": {
            matchFound = true;
            sessionExpiredSubscribers.set(key, callback);
            break;
        }
    }
    if (matchFound) {
        subscribeIdMap[key] = to;
        logger.info(`Subscription to ${to} events registered. Subscription Id: ${key}`);
        return key;
    }
    return null;
}
function unsubscribe(from) {
    let matchFound = false;
    const eventType = subscribeIdMap[from];
    if (eventType === undefined) {
        logger.warn(`You have tried to unsubscribe with a key ${from} that is invalid`);
        return false;
    }
    switch (eventType) {
        case "logged-in": {
            matchFound = true;
            loggedInSubscribers.delete(from);
            break;
        }
        case "before-logged-out": {
            matchFound = true;
            beforeLoggedOutSubscribers.delete(from);
            break;
        }
        case "logged-out": {
            matchFound = true;
            loggedOutSubscribers.delete(from);
            break;
        }
        case "session-expired": {
            matchFound = true;
            sessionExpiredSubscribers.delete(from);
            break;
        }
    }
    delete subscribeIdMap[from];
    if (matchFound) {
        logger.info(`Subscription to ${eventType} events with subscription Id: ${from} has been cleared`);
        return true;
    }
    logger.warn(`Subscription to ${eventType} events with subscription Id: ${from} could not be cleared as we do not have a register of that event type.`);
    return false;
}
async function login() {
    logger.info("login requested");
    if (authenticated) {
        logger.info("User already authenticated");
        return authenticated;
    }
    if (authOptions.autoLogin) {
        logger.info("autoLogin enabled in auth provide module settings. Fake logged in");
        authenticated = true;
    }
    else {
        authenticated = await getAuthenticationFromUser();
    }
    if (authenticated) {
        localStorage.setItem(EXAMPLE_AUTH_AUTHENTICATED_KEY, authenticated.toString());
        checkForSessionExpiry();
        await notifySubscribers("logged-in", loggedInSubscribers);
    }
    return authenticated;
}
async function logout() {
    return new Promise((resolve, reject) => {
        handleLogout(resolve)
            .then(async () => {
            logger.info("Log out called");
            return true;
        })
            .catch(async (error) => {
            logger.error(`Error while trying to log out ${error}`);
        });
    });
}
async function isAuthenticationRequired() {
    if (authenticated === undefined) {
        authenticated = false;
    }
    return !authenticated;
}
async function getUserInfo() {
    if (authenticated === undefined || !authenticated) {
        logger.warn("Unable to retrieve user info unless the user is authenticated");
    }
    else {
        logger.info("This example does not return any user info. Returning null");
    }
    return null;
}


/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************************************!*\
  !*** ./client/src/modules/auth/example/index.ts ***!
  \**************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "entryPoints": () => (/* binding */ entryPoints)
/* harmony export */ });
/* harmony import */ var _auth_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-provider */ "./client/src/modules/auth/example/auth-provider.ts");

const entryPoints = {
    auth: _auth_provider__WEBPACK_IMPORTED_MODULE_0__
};

})();

var __webpack_exports__entryPoints = __webpack_exports__.entryPoints;
export { __webpack_exports__entryPoints as entryPoints };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQSx5Q0FBeUMsd0NBQXdDO1VBQ2pGO1VBQ0E7VUFDQTs7Ozs7VUNQQTs7Ozs7VUNBQTtVQUNBO1VBQ0E7VUFDQSx1REFBdUQsaUJBQWlCO1VBQ3hFO1VBQ0EsZ0RBQWdELGFBQWE7VUFDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ0xzRDtBQUUvQyxNQUFNLFdBQVcsR0FBcUQ7SUFDNUUsSUFBSSxFQUFFLDJDQUFrQjtDQUN4QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3BlbmZpbi13b3Jrc3BhY2UtLWN1c3RvbWl6ZS13b3Jrc3BhY2UvLi9jbGllbnQvc3JjL21vZHVsZXMvYXV0aC9leGFtcGxlL2F1dGgtcHJvdmlkZXIudHMiLCJ3ZWJwYWNrOi8vb3BlbmZpbi13b3Jrc3BhY2UtLWN1c3RvbWl6ZS13b3Jrc3BhY2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb3BlbmZpbi13b3Jrc3BhY2UtLWN1c3RvbWl6ZS13b3Jrc3BhY2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS1jdXN0b21pemUtd29ya3NwYWNlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb3BlbmZpbi13b3Jrc3BhY2UtLWN1c3RvbWl6ZS13b3Jrc3BhY2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vcGVuZmluLXdvcmtzcGFjZS0tY3VzdG9taXplLXdvcmtzcGFjZS8uL2NsaWVudC9zcmMvbW9kdWxlcy9hdXRoL2V4YW1wbGUvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBMb2dnZXIsIExvZ2dlckNyZWF0b3IgfSBmcm9tIFwiLi4vLi4vLi4vbG9nZ2VyLXNoYXBlc1wiO1xuaW1wb3J0IHR5cGUgeyBNb2R1bGVEZWZpbml0aW9uIH0gZnJvbSBcIi4uLy4uLy4uL21vZHVsZS1zaGFwZXNcIjtcblxubGV0IGF1dGhlbnRpY2F0ZWQ6IGJvb2xlYW47XG5sZXQgYXV0aE9wdGlvbnM6IEV4YW1wbGVPcHRpb25zO1xubGV0IHNlc3Npb25FeHBpcnlDaGVja0lkO1xubGV0IGxvZ2dlcjogTG9nZ2VyO1xuXG5jb25zdCBzdWJzY3JpYmVJZE1hcDogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuY29uc3QgbG9nZ2VkSW5TdWJzY3JpYmVyczogTWFwPHN0cmluZywgKCkgPT4gUHJvbWlzZTx2b2lkPj4gPSBuZXcgTWFwKCk7XG5jb25zdCBiZWZvcmVMb2dnZWRPdXRTdWJzY3JpYmVyczogTWFwPHN0cmluZywgKCkgPT4gUHJvbWlzZTx2b2lkPj4gPSBuZXcgTWFwKCk7XG5jb25zdCBsb2dnZWRPdXRTdWJzY3JpYmVyczogTWFwPHN0cmluZywgKCkgPT4gUHJvbWlzZTx2b2lkPj4gPSBuZXcgTWFwKCk7XG5jb25zdCBzZXNzaW9uRXhwaXJlZFN1YnNjcmliZXJzOiBNYXA8c3RyaW5nLCAoKSA9PiBQcm9taXNlPHZvaWQ+PiA9IG5ldyBNYXAoKTtcbmludGVyZmFjZSBFeGFtcGxlT3B0aW9ucyB7XG5cdGF1dG9Mb2dpbjogYm9vbGVhbjtcblx0YXV0aGVudGljYXRlZFVybDogc3RyaW5nO1xuXHRsb2dpblVybDogc3RyaW5nO1xuXHRsb2dvdXRVcmw6IHN0cmluZztcblx0bG9naW5IZWlnaHQ6IG51bWJlcjtcblx0bG9naW5XaWR0aDogbnVtYmVyO1xuXHRjaGVja0xvZ2luU3RhdHVzSW5TZWNvbmRzOiBudW1iZXI7XG5cdGNoZWNrU2Vzc2lvblZhbGlkaXR5SW5TZWNvbmRzOiBudW1iZXI7XG59XG5cbmNvbnN0IEVYQU1QTEVfQVVUSF9BVVRIRU5USUNBVEVEX0tFWSA9IFwiRVhBTVBMRV9BVVRIX0lTX0FVVEhFTlRJQ0FURURcIjtcblxuYXN5bmMgZnVuY3Rpb24gb3BlbkxvZ2luV2luZG93KHVybDogc3RyaW5nKTogUHJvbWlzZTxPcGVuRmluLldpbmRvdz4ge1xuXHRyZXR1cm4gZmluLldpbmRvdy5jcmVhdGUoe1xuXHRcdG5hbWU6IFwiZXhhbXBsZS1hdXRoLWxvZy1pblwiLFxuXHRcdGFsd2F5c09uVG9wOiB0cnVlLFxuXHRcdG1heGltaXphYmxlOiBmYWxzZSxcblx0XHRtaW5pbWl6YWJsZTogZmFsc2UsXG5cdFx0YXV0b1Nob3c6IGZhbHNlLFxuXHRcdGRlZmF1bHRDZW50ZXJlZDogdHJ1ZSxcblx0XHRkZWZhdWx0SGVpZ2h0OiBhdXRoT3B0aW9ucy5sb2dpbkhlaWdodCA/PyAyNTAsXG5cdFx0ZGVmYXVsdFdpZHRoOiBhdXRoT3B0aW9ucy5sb2dpbldpZHRoID8/IDQwMCxcblx0XHRpbmNsdWRlSW5TbmFwc2hvdHM6IGZhbHNlLFxuXHRcdHJlc2l6YWJsZTogZmFsc2UsXG5cdFx0c2hvd1Rhc2tiYXJJY29uOiBmYWxzZSxcblx0XHRzYXZlV2luZG93U3RhdGU6IGZhbHNlLFxuXHRcdHVybFxuXHR9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gb3BlbkxvZ291dFdpbmRvdyh1cmw6IHN0cmluZyk6IFByb21pc2U8T3BlbkZpbi5XaW5kb3c+IHtcblx0cmV0dXJuIGZpbi5XaW5kb3cuY3JlYXRlKHtcblx0XHRuYW1lOiBcImV4YW1wbGUtYXV0aC1sb2ctb3V0XCIsXG5cdFx0bWF4aW1pemFibGU6IGZhbHNlLFxuXHRcdG1pbmltaXphYmxlOiBmYWxzZSxcblx0XHRhdXRvU2hvdzogZmFsc2UsXG5cdFx0ZGVmYXVsdENlbnRlcmVkOiB0cnVlLFxuXHRcdGRlZmF1bHRIZWlnaHQ6IGF1dGhPcHRpb25zLmxvZ2luSGVpZ2h0ID8/IDI1MCxcblx0XHRkZWZhdWx0V2lkdGg6IGF1dGhPcHRpb25zLmxvZ2luV2lkdGggPz8gNDAwLFxuXHRcdGluY2x1ZGVJblNuYXBzaG90czogZmFsc2UsXG5cdFx0cmVzaXphYmxlOiBmYWxzZSxcblx0XHRzaG93VGFza2Jhckljb246IGZhbHNlLFxuXHRcdHNhdmVXaW5kb3dTdGF0ZTogZmFsc2UsXG5cdFx0dXJsXG5cdH0pO1xufVxuXG5hc3luYyBmdW5jdGlvbiBjaGVja0F1dGgodXJsOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcblx0Y29uc3Qgd2luZG93VG9DaGVjayA9IGF3YWl0IGZpbi5XaW5kb3cuY3JlYXRlKHtcblx0XHRuYW1lOiBcImV4YW1wbGUtYXV0aC1jaGVjay13aW5kb3dcIixcblx0XHRhbHdheXNPblRvcDogdHJ1ZSxcblx0XHRtYXhpbWl6YWJsZTogZmFsc2UsXG5cdFx0bWluaW1pemFibGU6IGZhbHNlLFxuXHRcdGF1dG9TaG93OiBmYWxzZSxcblx0XHRkZWZhdWx0SGVpZ2h0OiBhdXRoT3B0aW9ucy5sb2dpbkhlaWdodCA/PyAyNTAsXG5cdFx0ZGVmYXVsdFdpZHRoOiBhdXRoT3B0aW9ucy5sb2dpbldpZHRoID8/IDQwMCxcblx0XHRpbmNsdWRlSW5TbmFwc2hvdHM6IGZhbHNlLFxuXHRcdHJlc2l6YWJsZTogZmFsc2UsXG5cdFx0c2hvd1Rhc2tiYXJJY29uOiBmYWxzZSxcblx0XHRzYXZlV2luZG93U3RhdGU6IGZhbHNlLFxuXHRcdHVybFxuXHR9KTtcblx0bGV0IGlzQXV0aGVudGljYXRlZCA9IGZhbHNlO1xuXHR0cnkge1xuXHRcdGNvbnN0IGluZm8gPSBhd2FpdCB3aW5kb3dUb0NoZWNrLmdldEluZm8oKTtcblx0XHRpZiAoaW5mby51cmwgPT09IGF1dGhPcHRpb25zLmF1dGhlbnRpY2F0ZWRVcmwpIHtcblx0XHRcdGlzQXV0aGVudGljYXRlZCA9IHRydWU7XG5cdFx0fVxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGxvZ2dlci5lcnJvcihcIkVycm9yIGVuY291bnRlcmVkIHdoaWxlIGNoZWNraW5nIHNlc3Npb25cIiwgZXJyb3IpO1xuXHR9IGZpbmFsbHkge1xuXHRcdGlmICh3aW5kb3dUb0NoZWNrICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGF3YWl0IHdpbmRvd1RvQ2hlY2suY2xvc2UodHJ1ZSk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBpc0F1dGhlbnRpY2F0ZWQ7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEF1dGhlbnRpY2F0aW9uRnJvbVVzZXIoKTogUHJvbWlzZTxib29sZWFuPiB7XG5cdHJldHVybiBuZXcgUHJvbWlzZTxib29sZWFuPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0b3BlbkxvZ2luV2luZG93KGF1dGhPcHRpb25zLmxvZ2luVXJsKVxuXHRcdFx0LnRoZW4oYXN5bmMgKHdpbikgPT4ge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGlmICh3aW4gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0Y29uc3QgaW5mbyA9IGF3YWl0IHdpbi5nZXRJbmZvKCk7XG5cdFx0XHRcdFx0XHRpZiAoaW5mby51cmwgPT09IGF1dGhPcHRpb25zLmF1dGhlbnRpY2F0ZWRVcmwpIHtcblx0XHRcdFx0XHRcdFx0YXdhaXQgd2luLmNsb3NlKHRydWUpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gcmVzb2x2ZSh0cnVlKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGF3YWl0IHdpbi5zaG93KHRydWUpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0XHRsb2dnZXIuZXJyb3IoXG5cdFx0XHRcdFx0XHRgRXJyb3Igd2hpbGUgY2hlY2tpbmcgaWYgbG9naW4gd2luZG93IGF1dG9tYXRpY2FsbHkgcmVkaXJlY3RlZC4gRXJyb3IgJHtlcnJvci5tZXNzYWdlfWBcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGlmICh3aW4gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0YXdhaXQgd2luLnNob3codHJ1ZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0bGV0IHN0YXR1c0NoZWNrOiBudW1iZXI7XG5cblx0XHRcdFx0YXdhaXQgd2luLmFkZExpc3RlbmVyKFwiY2xvc2VkXCIsIGFzeW5jICgpID0+IHtcblx0XHRcdFx0XHRpZiAod2luKSB7XG5cdFx0XHRcdFx0XHR3aW5kb3cuY2xlYXJJbnRlcnZhbChzdGF0dXNDaGVjayk7XG5cdFx0XHRcdFx0XHRzdGF0dXNDaGVjayA9IHVuZGVmaW5lZDtcblx0XHRcdFx0XHRcdGxvZ2dlci5pbmZvKFwiQXV0aCBXaW5kb3cgY2FuY2VsbGVkIGJ5IHVzZXJcIik7XG5cdFx0XHRcdFx0XHR3aW4gPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHRyZXR1cm4gcmVzb2x2ZShmYWxzZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0c3RhdHVzQ2hlY2sgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoYXN5bmMgKCkgPT4ge1xuXHRcdFx0XHRcdGlmICh3aW4gIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0Y29uc3Qgd2luSW5mbyA9IGF3YWl0IHdpbi5nZXRJbmZvKCk7XG5cdFx0XHRcdFx0XHRpZiAod2luSW5mby51cmwgPT09IGF1dGhPcHRpb25zLmF1dGhlbnRpY2F0ZWRVcmwpIHtcblx0XHRcdFx0XHRcdFx0d2luZG93LmNsZWFySW50ZXJ2YWwoc3RhdHVzQ2hlY2spO1xuXHRcdFx0XHRcdFx0XHRhd2FpdCB3aW4ucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG5cdFx0XHRcdFx0XHRcdGF3YWl0IHdpbi5jbG9zZSh0cnVlKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHJlc29sdmUodHJ1ZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJldHVybiByZXNvbHZlKGZhbHNlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sIGF1dGhPcHRpb25zLmNoZWNrTG9naW5TdGF0dXNJblNlY29uZHMgPz8gMSAqIDEwMDApO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goKGVycm9yKSA9PiB7XG5cdFx0XHRcdGxvZ2dlci5lcnJvcihcIkVycm9yIHdoaWxlIHRyeWluZyB0byBhdXRoZW50aWNhdGUgdGhlIHVzZXJcIiwgZXJyb3IpO1xuXHRcdFx0fSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBjaGVja0ZvclNlc3Npb25FeHBpcnkoZm9yY2UgPSBmYWxzZSkge1xuXHRpZiAoXG5cdFx0YXV0aE9wdGlvbnM/LmNoZWNrU2Vzc2lvblZhbGlkaXR5SW5TZWNvbmRzICE9PSB1bmRlZmluZWQgJiZcblx0XHRhdXRoT3B0aW9ucz8uY2hlY2tTZXNzaW9uVmFsaWRpdHlJblNlY29uZHMgPiAtMSAmJlxuXHRcdHNlc3Npb25FeHBpcnlDaGVja0lkID09PSB1bmRlZmluZWRcblx0KSB7XG5cdFx0c2Vzc2lvbkV4cGlyeUNoZWNrSWQgPSBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcblx0XHRcdHNlc3Npb25FeHBpcnlDaGVja0lkID0gdW5kZWZpbmVkO1xuXHRcdFx0Y29uc3Qgc3RpbGxBdXRoZW50aWNhdGVkID0gYXdhaXQgY2hlY2tBdXRoKGF1dGhPcHRpb25zLmxvZ2luVXJsKTtcblx0XHRcdGlmIChzdGlsbEF1dGhlbnRpY2F0ZWQpIHtcblx0XHRcdFx0bG9nZ2VyLmluZm8oXCJTZXNzaW9uIFN0aWxsIEFjdGl2ZVwiKTtcblx0XHRcdFx0Y2hlY2tGb3JTZXNzaW9uRXhwaXJ5KCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRsb2dnZXIuaW5mbyhcblx0XHRcdFx0XHRcIlNlc3Npb24gbm90IHZhbGlkLiBLaWxsaW5nIHNlc3Npb24gYW5kIG5vdGlmeWluZyByZWdpc3RlcmVkIGNhbGxiYWNrIHRoYXQgYXV0aGVudGljYXRpb24gaXMgcmVxdWlyZWQuIFRoaXMgY2hlY2sgaXMgY29uZmlndXJlZCBpbiB0aGUgZGF0YSBmb3IgdGhpcyBleGFtcGxlIGF1dGggbW9kdWxlLiBTZXQgY2hlY2tTZXNzaW9uVmFsaWRpdHlJblNlY29uZHMgdG8gLTEgaW4gdGhlIGF1dGhQcm92aWRlciBtb2R1bGUgZGVmaW5pdGlvbiBpZiB5b3Ugd2lzaCB0byBkaXNhYmxlIHRoaXMgY2hlY2tcIlxuXHRcdFx0XHQpO1xuXHRcdFx0XHRhdXRoZW50aWNhdGVkID0gZmFsc2U7XG5cdFx0XHRcdGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKEVYQU1QTEVfQVVUSF9BVVRIRU5USUNBVEVEX0tFWSk7XG5cdFx0XHRcdGF3YWl0IG5vdGlmeVN1YnNjcmliZXJzKFwic2Vzc2lvbi1leHBpcmVkXCIsIHNlc3Npb25FeHBpcmVkU3Vic2NyaWJlcnMpO1xuXHRcdFx0fVxuXHRcdH0sIGF1dGhPcHRpb25zLmNoZWNrU2Vzc2lvblZhbGlkaXR5SW5TZWNvbmRzICogMTAwMCk7XG5cdH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gbm90aWZ5U3Vic2NyaWJlcnMoZXZlbnRUeXBlOiBzdHJpbmcsIHN1YnNjcmliZXJzOiBNYXA8c3RyaW5nLCAoKSA9PiBQcm9taXNlPHZvaWQ+Pikge1xuXHRjb25zdCBzdWJzY3JpYmVySWRzID0gQXJyYXkuZnJvbShzdWJzY3JpYmVycy5rZXlzKCkpO1xuXHRzdWJzY3JpYmVySWRzLnJldmVyc2UoKTtcblxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHN1YnNjcmliZXJJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBzdWJzY3JpYmVySWQgPSBzdWJzY3JpYmVySWRzW2ldO1xuXHRcdGxvZ2dlci5pbmZvKGBOb3RpZnlpbmcgc3Vic2NyaWJlciB3aXRoIHN1YnNjcmlwdGlvbiBJZDogJHtzdWJzY3JpYmVySWR9IG9mIGV2ZW50IHR5cGU6ICR7ZXZlbnRUeXBlfWApO1xuXHRcdGF3YWl0IHN1YnNjcmliZXJzLmdldChzdWJzY3JpYmVySWQpKCk7XG5cdH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlTG9nb3V0KHJlc29sdmU6IChzdWNjZXNzOiBib29sZWFuKSA9PiB2b2lkKTogUHJvbWlzZTx2b2lkPiB7XG5cdGlmIChhdXRoZW50aWNhdGVkID09PSB1bmRlZmluZWQgfHwgIWF1dGhlbnRpY2F0ZWQpIHtcblx0XHRsb2dnZXIuZXJyb3IoXCJZb3UgaGF2ZSByZXF1ZXN0ZWQgdG8gbG9nIG91dCBidXQgYXJlIG5vdCBsb2dnZWQgaW5cIik7XG5cdFx0cmVzb2x2ZShmYWxzZSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGxvZ2dlci5pbmZvKFwiTG9nIG91dCByZXF1ZXN0ZWRcIik7XG5cdGF3YWl0IG5vdGlmeVN1YnNjcmliZXJzKFwiYmVmb3JlLWxvZ2dlZC1vdXRcIiwgYmVmb3JlTG9nZ2VkT3V0U3Vic2NyaWJlcnMpO1xuXHRhdXRoZW50aWNhdGVkID0gZmFsc2U7XG5cdGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKEVYQU1QTEVfQVVUSF9BVVRIRU5USUNBVEVEX0tFWSk7XG5cdGlmIChcblx0XHRhdXRoT3B0aW9ucy5sb2dvdXRVcmwgIT09IHVuZGVmaW5lZCAmJlxuXHRcdGF1dGhPcHRpb25zLmxvZ291dFVybCAhPT0gbnVsbCAmJlxuXHRcdGF1dGhPcHRpb25zLmxvZ2luVXJsLnRyaW0oKS5sZW5ndGggPiAwXG5cdCkge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCB3aW4gPSBhd2FpdCBvcGVuTG9nb3V0V2luZG93KGF1dGhPcHRpb25zLmxvZ291dFVybCk7XG5cdFx0XHRzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcblx0XHRcdFx0YXdhaXQgd2luLmNsb3NlKCk7XG5cdFx0XHRcdGF3YWl0IG5vdGlmeVN1YnNjcmliZXJzKFwibG9nZ2VkLW91dFwiLCBsb2dnZWRPdXRTdWJzY3JpYmVycyk7XG5cdFx0XHRcdHJlc29sdmUodHJ1ZSk7XG5cdFx0XHR9LCAyMDAwKTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0bG9nZ2VyLmVycm9yKGBFcnJvciB3aGlsZSBsYXVuY2hpbmcgbG9nb3V0IHdpbmRvdy4gJHtlcnJvcn1gKTtcblx0XHRcdHJldHVybiByZXNvbHZlKGZhbHNlKTtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0YXdhaXQgbm90aWZ5U3Vic2NyaWJlcnMoXCJsb2dnZWQtb3V0XCIsIGxvZ2dlZE91dFN1YnNjcmliZXJzKTtcblx0XHRyZXNvbHZlKHRydWUpO1xuXHR9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbml0aWFsaXplKFxuXHRkZWZpbml0aW9uOiBNb2R1bGVEZWZpbml0aW9uPEV4YW1wbGVPcHRpb25zPixcblx0Y3JlYXRlTG9nZ2VyOiBMb2dnZXJDcmVhdG9yLFxuXHRoZWxwZXJzPzogbmV2ZXJcbikge1xuXHRsb2dnZXIgPSBjcmVhdGVMb2dnZXIoXCJBdXRoRXhhbXBsZVwiKTtcblx0aWYgKGF1dGhPcHRpb25zID09PSB1bmRlZmluZWQpIHtcblx0XHRsb2dnZXIuaW5mbyhgU2V0dGluZyBvcHRpb25zOiAke0pTT04uc3RyaW5naWZ5KGRlZmluaXRpb24uZGF0YSwgbnVsbCwgNCl9YCk7XG5cdFx0YXV0aE9wdGlvbnMgPSBkZWZpbml0aW9uLmRhdGE7XG5cdFx0YXV0aGVudGljYXRlZCA9IEJvb2xlYW4obG9jYWxTdG9yYWdlLmdldEl0ZW0oRVhBTVBMRV9BVVRIX0FVVEhFTlRJQ0FURURfS0VZKSk7XG5cdFx0aWYgKGF1dGhlbnRpY2F0ZWQpIHtcblx0XHRcdGNoZWNrRm9yU2Vzc2lvbkV4cGlyeSgpO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRsb2dnZXIud2FybihcIk9wdGlvbnMgaGF2ZSBhbHJlYWR5IGJlZW4gc2V0IGFzIGluaXQgaGFzIGFscmVhZHkgYmVlbiBjYWxsZWRcIik7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnNjcmliZShcblx0dG86IFwibG9nZ2VkLWluXCIgfCBcImJlZm9yZS1sb2dnZWQtb3V0XCIgfCBcImxvZ2dlZC1vdXRcIiB8IFwic2Vzc2lvbi1leHBpcmVkXCIsXG5cdGNhbGxiYWNrOiAoKSA9PiBQcm9taXNlPHZvaWQ+XG4pOiBzdHJpbmcge1xuXHRjb25zdCBrZXkgPSBjcnlwdG8ucmFuZG9tVVVJRCgpO1xuXHRsZXQgbWF0Y2hGb3VuZCA9IGZhbHNlO1xuXHRzd2l0Y2ggKHRvKSB7XG5cdFx0Y2FzZSBcImxvZ2dlZC1pblwiOiB7XG5cdFx0XHRtYXRjaEZvdW5kID0gdHJ1ZTtcblx0XHRcdGxvZ2dlZEluU3Vic2NyaWJlcnMuc2V0KGtleSwgY2FsbGJhY2spO1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdGNhc2UgXCJiZWZvcmUtbG9nZ2VkLW91dFwiOiB7XG5cdFx0XHRtYXRjaEZvdW5kID0gdHJ1ZTtcblx0XHRcdGJlZm9yZUxvZ2dlZE91dFN1YnNjcmliZXJzLnNldChrZXksIGNhbGxiYWNrKTtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRjYXNlIFwibG9nZ2VkLW91dFwiOiB7XG5cdFx0XHRtYXRjaEZvdW5kID0gdHJ1ZTtcblx0XHRcdGxvZ2dlZE91dFN1YnNjcmliZXJzLnNldChrZXksIGNhbGxiYWNrKTtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRjYXNlIFwic2Vzc2lvbi1leHBpcmVkXCI6IHtcblx0XHRcdG1hdGNoRm91bmQgPSB0cnVlO1xuXHRcdFx0c2Vzc2lvbkV4cGlyZWRTdWJzY3JpYmVycy5zZXQoa2V5LCBjYWxsYmFjayk7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRpZiAobWF0Y2hGb3VuZCkge1xuXHRcdHN1YnNjcmliZUlkTWFwW2tleV0gPSB0bztcblx0XHRsb2dnZXIuaW5mbyhgU3Vic2NyaXB0aW9uIHRvICR7dG99IGV2ZW50cyByZWdpc3RlcmVkLiBTdWJzY3JpcHRpb24gSWQ6ICR7a2V5fWApO1xuXHRcdHJldHVybiBrZXk7XG5cdH1cblx0cmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnN1YnNjcmliZShmcm9tOiBzdHJpbmcpOiBib29sZWFuIHtcblx0bGV0IG1hdGNoRm91bmQgPSBmYWxzZTtcblx0Y29uc3QgZXZlbnRUeXBlID0gc3Vic2NyaWJlSWRNYXBbZnJvbV07XG5cdGlmIChldmVudFR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdGxvZ2dlci53YXJuKGBZb3UgaGF2ZSB0cmllZCB0byB1bnN1YnNjcmliZSB3aXRoIGEga2V5ICR7ZnJvbX0gdGhhdCBpcyBpbnZhbGlkYCk7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0c3dpdGNoIChldmVudFR5cGUpIHtcblx0XHRjYXNlIFwibG9nZ2VkLWluXCI6IHtcblx0XHRcdG1hdGNoRm91bmQgPSB0cnVlO1xuXHRcdFx0bG9nZ2VkSW5TdWJzY3JpYmVycy5kZWxldGUoZnJvbSk7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdFx0Y2FzZSBcImJlZm9yZS1sb2dnZWQtb3V0XCI6IHtcblx0XHRcdG1hdGNoRm91bmQgPSB0cnVlO1xuXHRcdFx0YmVmb3JlTG9nZ2VkT3V0U3Vic2NyaWJlcnMuZGVsZXRlKGZyb20pO1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdGNhc2UgXCJsb2dnZWQtb3V0XCI6IHtcblx0XHRcdG1hdGNoRm91bmQgPSB0cnVlO1xuXHRcdFx0bG9nZ2VkT3V0U3Vic2NyaWJlcnMuZGVsZXRlKGZyb20pO1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdGNhc2UgXCJzZXNzaW9uLWV4cGlyZWRcIjoge1xuXHRcdFx0bWF0Y2hGb3VuZCA9IHRydWU7XG5cdFx0XHRzZXNzaW9uRXhwaXJlZFN1YnNjcmliZXJzLmRlbGV0ZShmcm9tKTtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdGRlbGV0ZSBzdWJzY3JpYmVJZE1hcFtmcm9tXTtcblx0aWYgKG1hdGNoRm91bmQpIHtcblx0XHRsb2dnZXIuaW5mbyhgU3Vic2NyaXB0aW9uIHRvICR7ZXZlbnRUeXBlfSBldmVudHMgd2l0aCBzdWJzY3JpcHRpb24gSWQ6ICR7ZnJvbX0gaGFzIGJlZW4gY2xlYXJlZGApO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0bG9nZ2VyLndhcm4oXG5cdFx0YFN1YnNjcmlwdGlvbiB0byAke2V2ZW50VHlwZX0gZXZlbnRzIHdpdGggc3Vic2NyaXB0aW9uIElkOiAke2Zyb219IGNvdWxkIG5vdCBiZSBjbGVhcmVkIGFzIHdlIGRvIG5vdCBoYXZlIGEgcmVnaXN0ZXIgb2YgdGhhdCBldmVudCB0eXBlLmBcblx0KTtcblx0cmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9naW4oKTogUHJvbWlzZTxib29sZWFuPiB7XG5cdGxvZ2dlci5pbmZvKFwibG9naW4gcmVxdWVzdGVkXCIpO1xuXHRpZiAoYXV0aGVudGljYXRlZCkge1xuXHRcdGxvZ2dlci5pbmZvKFwiVXNlciBhbHJlYWR5IGF1dGhlbnRpY2F0ZWRcIik7XG5cdFx0cmV0dXJuIGF1dGhlbnRpY2F0ZWQ7XG5cdH1cblx0aWYgKGF1dGhPcHRpb25zLmF1dG9Mb2dpbikge1xuXHRcdGxvZ2dlci5pbmZvKFwiYXV0b0xvZ2luIGVuYWJsZWQgaW4gYXV0aCBwcm92aWRlIG1vZHVsZSBzZXR0aW5ncy4gRmFrZSBsb2dnZWQgaW5cIik7XG5cdFx0YXV0aGVudGljYXRlZCA9IHRydWU7XG5cdH0gZWxzZSB7XG5cdFx0YXV0aGVudGljYXRlZCA9IGF3YWl0IGdldEF1dGhlbnRpY2F0aW9uRnJvbVVzZXIoKTtcblx0fVxuXG5cdGlmIChhdXRoZW50aWNhdGVkKSB7XG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oRVhBTVBMRV9BVVRIX0FVVEhFTlRJQ0FURURfS0VZLCBhdXRoZW50aWNhdGVkLnRvU3RyaW5nKCkpO1xuXHRcdGNoZWNrRm9yU2Vzc2lvbkV4cGlyeSgpO1xuXHRcdGF3YWl0IG5vdGlmeVN1YnNjcmliZXJzKFwibG9nZ2VkLWluXCIsIGxvZ2dlZEluU3Vic2NyaWJlcnMpO1xuXHR9XG5cblx0cmV0dXJuIGF1dGhlbnRpY2F0ZWQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dvdXQoKTogUHJvbWlzZTxib29sZWFuPiB7XG5cdHJldHVybiBuZXcgUHJvbWlzZTxib29sZWFuPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0aGFuZGxlTG9nb3V0KHJlc29sdmUpXG5cdFx0XHQudGhlbihhc3luYyAoKSA9PiB7XG5cdFx0XHRcdGxvZ2dlci5pbmZvKFwiTG9nIG91dCBjYWxsZWRcIik7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fSlcblx0XHRcdC5jYXRjaChhc3luYyAoZXJyb3IpID0+IHtcblx0XHRcdFx0bG9nZ2VyLmVycm9yKGBFcnJvciB3aGlsZSB0cnlpbmcgdG8gbG9nIG91dCAke2Vycm9yfWApO1xuXHRcdFx0fSk7XG5cdH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaXNBdXRoZW50aWNhdGlvblJlcXVpcmVkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuXHRpZiAoYXV0aGVudGljYXRlZCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0YXV0aGVudGljYXRlZCA9IGZhbHNlO1xuXHR9XG5cdHJldHVybiAhYXV0aGVudGljYXRlZDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJJbmZvPFQ+KCk6IFByb21pc2U8VD4ge1xuXHRpZiAoYXV0aGVudGljYXRlZCA9PT0gdW5kZWZpbmVkIHx8ICFhdXRoZW50aWNhdGVkKSB7XG5cdFx0bG9nZ2VyLndhcm4oXCJVbmFibGUgdG8gcmV0cmlldmUgdXNlciBpbmZvIHVubGVzcyB0aGUgdXNlciBpcyBhdXRoZW50aWNhdGVkXCIpO1xuXHR9IGVsc2Uge1xuXHRcdGxvZ2dlci5pbmZvKFwiVGhpcyBleGFtcGxlIGRvZXMgbm90IHJldHVybiBhbnkgdXNlciBpbmZvLiBSZXR1cm5pbmcgbnVsbFwiKTtcblx0fVxuXHRyZXR1cm4gbnVsbDtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHR5cGUgeyBNb2R1bGVJbXBsZW1lbnRhdGlvbiwgTW9kdWxlVHlwZXMgfSBmcm9tIFwiLi4vLi4vLi4vbW9kdWxlLXNoYXBlc1wiO1xuaW1wb3J0ICogYXMgYXV0aEltcGxlbWVudGF0aW9uIGZyb20gXCIuL2F1dGgtcHJvdmlkZXJcIjtcblxuZXhwb3J0IGNvbnN0IGVudHJ5UG9pbnRzOiB7IFt0eXBlIGluIE1vZHVsZVR5cGVzXT86IE1vZHVsZUltcGxlbWVudGF0aW9uIH0gPSB7XG5cdGF1dGg6IGF1dGhJbXBsZW1lbnRhdGlvblxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==