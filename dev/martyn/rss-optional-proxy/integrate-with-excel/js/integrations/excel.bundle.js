/******/ var __webpack_modules__ = ({

/***/ "../../node_modules/@openfin/core/src/api/application/Factory.js":
/*!***********************************************************************!*\
  !*** ../../node_modules/@openfin/core/src/api/application/Factory.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const base_1 = __webpack_require__(/*! ../base */ "../../node_modules/@openfin/core/src/api/base.js");
const validate_1 = __webpack_require__(/*! ../../util/validate */ "../../node_modules/@openfin/core/src/util/validate.js");
const Instance_1 = __webpack_require__(/*! ./Instance */ "../../node_modules/@openfin/core/src/api/application/Instance.js");
/**
 * @typedef {object} ApplicationOptions
 * @summary Application creation options.
 * @desc This is the options object required by {@link Application.start Application.start}.
 *
 * The following options are required:
 * * `uuid` is required in the app manifest as well as by {@link Application.start Application.start}
 * * `name` is optional in the app manifest but required by {@link Application.start Application.start}
 * * `url` is optional in both the app manifest {@link Application.start Application.start} and  but is usually given
 * (defaults to `"about:blank"` when omitted).
 *
 * _This jsdoc typedef mirrors the `ApplicationOption` TypeScript interface in `@types/openfin`._
 *
 * **IMPORTANT NOTE:**
 * This object inherits all the properties of the window creation {@link Window~options options} object,
 * which will take priority over those of the same name that may be provided in `mainWindowOptions`.
 *
 * @property {boolean} [disableIabSecureLogging=false]
 * When set to `true` it will disable IAB secure logging for the app.
 *
 * @property {string} [loadErrorMessage="There was an error loading the application."]
 * An error message to display when the application (launched via manifest) fails to load.
 * A dialog box will be launched with the error message just before the runtime exits.
 * Load fails such as failed DNS resolutions or aborted connections as well as cancellations, _e.g.,_ `window.stop()`,
 * will trigger this dialog.
 * Client response codes such as `404 Not Found` are not treated as fails as they are valid server responses.
 *
 * @property {Window~options} [mainWindowOptions]
 * The options of the main window of the application.
 * For a description of these options, click the link (in the Type column).
 *
 * @property {number} [maxViewPoolSize=1000]
 * Platforms Only.  The maximum number of "detached" or "pooled" Views that can exist in the Platform before being closed.
 * If you do not wish for views to be pooled on your platform, set this property to zero.
 *
 * @property {boolean} [preventQuitOnLastWindowClosed=false]
 * Platforms Only. Prevent the Platform Provider from quitting automatically when the last Platform Window is closed.
 * Note: if the Platform Provider is showing, it won't close automatically.
 * If you want a hidden Platform Provider to remain open after the last Platform Window has been closed, set this property to true.
 *
 * @property {string} [name]
 * The name of the application (and the application's main window).
 *
 * If provided, _must_ match `uuid`.
 *
 * @property {boolean} [nonPersistent=false]
 * A flag to configure the application as non-persistent.
 * Runtime exits when there are no persistent apps running.
 *
 * @property {boolean} [plugins=false]
 * Enable Flash at the application level.
 *
 * @property {boolean} [spellCheck=false]
 * Enable spell check at the application level.
 *
 * @property {string} [url="about:blank"]
 * The url to the application (specifically the application's main window).
 *
 * @property {boolean} [enableJumpList=false]
 * Enables the use of the Jumplists API and the 'pin to taskbar' functionality.
 * Only relevant in Windows.
 *
 * @property {string} uuid
 * The _Unique Universal Identifier_ (UUID) of the application, unique within the set of all other applications
 *  running in the OpenFin Runtime.
 *
 * Note that `name` and `uuid` must match.
 *
 * @property {boolean} [webSecurity=true]
 * When set to `false` it will disable the same-origin policy for the app.
 */
/**
 * @lends Application
 */
class ApplicationModule extends base_1.Base {
    /**
     * Asynchronously returns an Application object that represents an existing application.
     * @param { Identity } identity
     * @return {Promise.<Application>}
     * @tutorial Application.wrap
     * @static
     */
    async wrap(identity) {
        this.wire.sendAction('wrap-application').catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        const errorMsg = validate_1.validateIdentity(identity);
        if (errorMsg) {
            throw new Error(errorMsg);
        }
        return new Instance_1.Application(this.wire, identity);
    }
    /**
     * Synchronously returns an Application object that represents an existing application.
     * @param { Identity } identity
     * @return {Application}
     * @tutorial Application.wrapSync
     * @static
     */
    wrapSync(identity) {
        this.wire.sendAction('wrap-application-sync').catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        const errorMsg = validate_1.validateIdentity(identity);
        if (errorMsg) {
            throw new Error(errorMsg);
        }
        return new Instance_1.Application(this.wire, identity);
    }
    async _create(appOptions) {
        // set defaults:
        if (appOptions.waitForPageLoad === undefined) {
            appOptions.waitForPageLoad = false;
        }
        if (appOptions.autoShow === undefined && appOptions.isPlatformController === undefined) {
            appOptions.autoShow = true;
        }
        await this.wire.sendAction('create-application', appOptions);
        return this.wrap({ uuid: appOptions.uuid });
    }
    /**
     * DEPRECATED method to create a new Application. Use {@link Application.start} instead.
     * @param { ApplicationOptions } appOptions
     * @return {Promise.<Application>}
     * @tutorial Application.create
     * @ignore
     */
    create(appOptions) {
        console.warn('Deprecation Warning: fin.Application.create is deprecated. Please use fin.Application.start');
        this.wire.sendAction('application-create').catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        return this._create(appOptions);
    }
    /**
     * Creates and starts a new Application.
     * @param { ApplicationOptions } appOptions
     * @return {Promise.<Application>}
     * @tutorial Application.start
     * @static
     */
    async start(appOptions) {
        this.wire.sendAction('start-application').catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        const app = await this._create(appOptions);
        await this.wire.sendAction('run-application', { uuid: appOptions.uuid });
        return app;
    }
    /**
     * Asynchronously starts a batch of applications given an array of application identifiers and manifestUrls.
     * Returns once the RVM is finished attempting to launch the applications.
     * @param { Array.<ManifestInfo> } applications
     * @return {Promise.<void>}
     * @static
     * @tutorial Application.startManyManifests
     * @experimental
     */
    async startManyManifests(applications) {
        return this.wire.sendAction('run-applications', { applications }).then(() => undefined);
    }
    /**
     * Asynchronously returns an Application object that represents the current application
     * @return {Promise.<Application>}
     * @tutorial Application.getCurrent
     * @static
     */
    getCurrent() {
        this.wire.sendAction('get-current-application').catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        return this.wrap({ uuid: this.wire.me.uuid });
    }
    /**
     * Synchronously returns an Application object that represents the current application
     * @return {Application}
     * @tutorial Application.getCurrentSync
     * @static
     */
    getCurrentSync() {
        this.wire.sendAction('get-current-application-sync').catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        return this.wrapSync({ uuid: this.wire.me.uuid });
    }
    /**
     * Retrieves application's manifest and returns a running instance of the application.
     * @param {string} manifestUrl - The URL of app's manifest.
     * @param {RvmLaunchOptions} [opts] - Parameters that the RVM will use.
     * @return {Promise.<Application>}
     * @tutorial Application.startFromManifest
     * @static
     */
    async startFromManifest(manifestUrl, opts) {
        this.wire.sendAction('application-start-from-manifest').catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        const app = await this._createFromManifest(manifestUrl);
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore using private method without warning.
        await app._run(opts); // eslint-disable-line no-underscore-dangle
        return app;
    }
    createFromManifest(manifestUrl) {
        console.warn('Deprecation Warning: fin.Application.createFromManifest is deprecated. Please use fin.Application.startFromManifest');
        this.wire.sendAction('application-create-from-manifest').catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        return this._createFromManifest(manifestUrl);
    }
    _createFromManifest(manifestUrl) {
        return this.wire
            .sendAction('get-application-manifest', { manifestUrl })
            .then(({ payload }) => {
            const uuid = payload.data.platform ? payload.data.platform.uuid : payload.data.startup_app.uuid;
            return this.wrap({ uuid });
        })
            .then((app) => {
            app._manifestUrl = manifestUrl; // eslint-disable-line no-underscore-dangle
            return app;
        });
    }
}
exports["default"] = ApplicationModule;


/***/ }),

/***/ "../../node_modules/@openfin/core/src/api/application/Instance.js":
/*!************************************************************************!*\
  !*** ../../node_modules/@openfin/core/src/api/application/Instance.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Application = void 0;
/* eslint-disable import/prefer-default-export */
const base_1 = __webpack_require__(/*! ../base */ "../../node_modules/@openfin/core/src/api/base.js");
const window_1 = __webpack_require__(/*! ../window */ "../../node_modules/@openfin/core/src/api/window/index.js");
const view_1 = __webpack_require__(/*! ../view */ "../../node_modules/@openfin/core/src/api/view/index.js");
/**
 * @classdesc An object representing an application. Allows the developer to create,
 * execute, show/close an application as well as listen to <a href="tutorial-Application.EventEmitter.html">application events</a>.
 * @class
 * @hideconstructor
 */
class Application extends base_1.EmitterBase {
    constructor(wire, identity) {
        super(wire, 'application', identity.uuid);
        this.identity = identity;
        this.window = new window_1._Window(this.wire, {
            uuid: this.identity.uuid,
            name: this.identity.uuid
        });
    }
    windowListFromIdentityList(identityList) {
        const windowList = [];
        identityList.forEach((identity) => {
            windowList.push(new window_1._Window(this.wire, {
                uuid: identity.uuid,
                name: identity.name
            }));
        });
        return windowList;
    }
    /**
     * Adds a listener to the end of the listeners array for the specified event.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - Called whenever an event of the specified type occurs.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function addListener
     * @memberof Application
     * @instance
     * @tutorial Application.EventEmitter
     */
    /**
     * Adds a listener to the end of the listeners array for the specified event.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - Called whenever an event of the specified type occurs.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function on
     * @memberof Application
     * @instance
     * @tutorial Application.EventEmitter
     */
    /**
     * Adds a one time listener for the event. The listener is invoked only the first time the event is fired, after which it is removed.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - The callback function.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function once
     * @memberof Application
     * @instance
     * @tutorial Application.EventEmitter
     */
    /**
     * Adds a listener to the beginning of the listeners array for the specified event.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - The callback function.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function prependListener
     * @memberof Application
     * @instance
     * @tutorial Application.EventEmitter
     */
    /**
     * Adds a one time listener for the event. The listener is invoked only the first time the event is fired, after which it is removed.
     * The listener is added to the beginning of the listeners array.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - The callback function.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function prependOnceListener
     * @memberof Application
     * @instance
     * @tutorial Application.EventEmitter
     */
    /**
     * Remove a listener from the listener array for the specified event.
     * Caution: Calling this method changes the array indices in the listener array behind the listener.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - The callback function.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function removeListener
     * @memberof Application
     * @instance
     * @tutorial Application.EventEmitter
     */
    /**
     * Removes all listeners, or those of the specified event.
     * @param { string | symbol } [eventType]  - The type of the event.
     * @return {Promise.<this>}
     * @function removeAllListeners
     * @memberof Application
     * @instance
     * @tutorial Application.EventEmitter
     */
    /**
     * Determines if the application is currently running.
     * @return {Promise.<boolean>}
     * @tutorial Application.isRunning
     */
    /**
     * JumpListCategory interface
     * @typedef { object } JumpListCategory
     * @property { string } name The display title for the category. If omitted, items in this category will be placed into the standard 'Tasks' category. There can be only one such category, and it will always be displayed at the bottom of the JumpList.
     * @property { JumpListItem[] } items Array of JumpListItem objects
     */
    /**
     * JumpListItem interface
     * @typedef { object } JumpListItem
     * @property { string } type One of the following: "task" or "separator". Defaults to task.
     * @property { string } title The text to be displayed for the JumpList Item. Should only be set if type is "task".
     * @property { string } description Description of the task (displayed in a tooltip). Should only be set if type is "task".
     * @property { string } deepLink Deep link to a manifest, i.e: fins://path.to/manifest.json?$$param1=value1. See {@link https://developers.openfin.co/docs/deep-linking deep-linking} for more information.
     * @property { string } iconPath The absolute path to an icon to be displayed for the item, which can be an arbitrary resource file that contains an icon (e.g. .ico, .exe, .dll).
     * @property { number } iconIndex The index of the icon in the resource file. If a resource file contains multiple icons this value can be used to specify the zero-based index of the icon that should be displayed for this task. If a resource file contains only one icon, this property should be set to zero.
     */
    isRunning() {
        return this.wire.sendAction('is-application-running', this.identity).then(({ payload }) => payload.data);
    }
    /**
     * Closes the application and any child windows created by the application.
     * Cleans the application from state so it is no longer found in getAllApplications.
     * @param { boolean } [force = false] Close will be prevented from closing when force is false and
     *  ‘close-requested’ has been subscribed to for application’s main window.
     * @return {Promise.<boolean>}
     * @tutorial Application.quit
     */
    async quit(force = false) {
        await this._close(force);
        await this.wire.sendAction('destroy-application', { force, ...this.identity });
    }
    _close(force = false) {
        return this.wire.sendAction('close-application', { force, ...this.identity }).then(() => undefined);
    }
    close(force = false) {
        console.warn('Deprecation Warning: Application.close is deprecated Please use Application.quit');
        this.wire.sendAction('application-close', this.identity).catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        return this._close(force);
    }
    /**
     * Retrieves an array of wrapped fin.Windows for each of the application’s child windows.
     * @return {Promise.Array.<_Window>}
     * @tutorial Application.getChildWindows
     */
    getChildWindows() {
        return this.wire.sendAction('get-child-windows', this.identity).then(({ payload }) => {
            const identityList = [];
            payload.data.forEach((winName) => {
                identityList.push({ uuid: this.identity.uuid, name: winName });
            });
            return this.windowListFromIdentityList(identityList);
        });
    }
    /**
     * Retrieves the JSON manifest that was used to create the application. Invokes the error callback
     * if the application was not created from a manifest.
     * @return {Promise.<Manifest>}
     * @tutorial Application.getManifest
     */
    getManifest() {
        return this.wire.sendAction('get-application-manifest', this.identity).then(({ payload }) => payload.data);
    }
    /**
     * Retrieves UUID of the application that launches this application. Invokes the error callback
     * if the application was created from a manifest.
     * @return {Promise.<string>}
     * @tutorial Application.getParentUuid
     */
    getParentUuid() {
        return this.wire.sendAction('get-parent-application', this.identity).then(({ payload }) => payload.data);
    }
    /**
     * Retrieves current application's shortcut configuration.
     * @return {Promise.<ShortCutConfig>}
     * @tutorial Application.getShortcuts
     */
    getShortcuts() {
        return this.wire.sendAction('get-shortcuts', this.identity).then(({ payload }) => payload.data);
    }
    /**
     * Retrieves current application's views.
     * @experimental
     * @return {Promise.Array.<View>}
     * @tutorial Application.getViews
     */
    async getViews() {
        const { payload } = await this.wire.sendAction('application-get-views', this.identity);
        return payload.data.map((id) => new view_1.View(this.wire, id));
    }
    /**
     * Returns the current zoom level of the application.
     * @return {Promise.<number>}
     * @tutorial Application.getZoomLevel
     */
    getZoomLevel() {
        return this.wire.sendAction('get-application-zoom-level', this.identity).then(({ payload }) => payload.data);
    }
    /**
     * Returns an instance of the main Window of the application
     * @return {Promise.<_Window>}
     * @tutorial Application.getWindow
     */
    getWindow() {
        this.wire.sendAction('application-get-window', this.identity).catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        return Promise.resolve(this.window);
    }
    /**
     * Manually registers a user with the licensing service. The only data sent by this call is userName and appName.
     * @param { string } userName - username to be passed to the RVM.
     * @param { string } appName - app name to be passed to the RVM.
     * @return {Promise.<void>}
     * @tutorial Application.registerUser
     */
    registerUser(userName, appName) {
        return this.wire.sendAction('register-user', { userName, appName, ...this.identity }).then(() => undefined);
    }
    /**
     * Removes the application’s icon from the tray.
     * @return {Promise.<void>}
     * @tutorial Application.removeTrayIcon
     */
    removeTrayIcon() {
        return this.wire.sendAction('remove-tray-icon', this.identity).then(() => undefined);
    }
    /**
     * Restarts the application.
     * @return {Promise.<void>}
     * @tutorial Application.restart
     */
    restart() {
        return this.wire.sendAction('restart-application', this.identity).then(() => undefined);
    }
    /**
     * DEPRECATED method to run the application.
     * Needed when starting application via {@link Application.create}, but NOT needed when starting via {@link Application.start}.
     * @return {Promise.<void>}
     * @tutorial Application.run
     * @ignore
     */
    run() {
        console.warn('Deprecation Warning: Application.run is deprecated Please use fin.Application.start');
        this.wire.sendAction('application-run', this.identity).catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        return this._run();
    }
    _run(opts = {}) {
        return this.wire
            .sendAction('run-application', {
            manifestUrl: this._manifestUrl,
            opts,
            ...this.identity
        })
            .then(() => undefined);
    }
    /**
     * Instructs the RVM to schedule one restart of the application.
     * @return {Promise.<void>}
     * @tutorial Application.scheduleRestart
     */
    scheduleRestart() {
        return this.wire.sendAction('relaunch-on-close', this.identity).then(() => undefined);
    }
    /**
     * Sends a message to the RVM to upload the application's logs. On success,
     * an object containing logId is returned.
     * @return {Promise.<SendApplicationLogResponse>}
     * @tutorial Application.sendApplicationLog
     */
    async sendApplicationLog() {
        const { payload } = await this.wire.sendAction('send-application-log', this.identity);
        return payload.data;
    }
    /**
     * Sets or removes a custom JumpList for the application. Only applicable in Windows OS.
     * If categories is null the previously set custom JumpList (if any) will be replaced by the standard JumpList for the app (managed by Windows).
     * Note: If the "name" property is omitted it defaults to "tasks".
     * @param { Array.<JumpListCategory> | null } jumpListCategories An array of JumpList Categories to populate. If null, remove any existing JumpList configuration and set to Windows default.
     * @return { Promise.<void> }
     * @tutorial Application.setJumpList
     */
    async setJumpList(jumpListCategories) {
        await this.wire.sendAction('set-jump-list', { config: jumpListCategories, ...this.identity });
    }
    /**
     * Adds a customizable icon in the system tray.  To listen for a click on the icon use the `tray-icon-clicked` event.
     * @param { string } icon Image URL or base64 encoded string to be used as the icon
     * @return {Promise.<void>}
     * @tutorial Application.setTrayIcon
     */
    setTrayIcon(icon) {
        return this.wire
            .sendAction('set-tray-icon', {
            enabledIcon: icon,
            ...this.identity
        })
            .then(() => undefined);
    }
    /**
     * Sets new application's shortcut configuration. Windows only.
     * @param { ShortCutConfig } config New application's shortcut configuration.
     * @param { boolean } [config.desktop] - Enable/disable desktop shortcut.
     * @param { boolean } [config.startMenu] - Enable/disable start menu shortcut.
     * @param { boolean } [config.systemStartup] - Enable/disable system startup shortcut.
     * @return {Promise.<void>}
     * @tutorial Application.setShortcuts
     */
    setShortcuts(config) {
        return this.wire.sendAction('set-shortcuts', { data: config, ...this.identity }).then(() => undefined);
    }
    /**
     * Sets the query string in all shortcuts for this app. Requires RVM 5.5+.
     * @param { string } queryString The new query string for this app's shortcuts.
     * @return {Promise.<void>}
     * @tutorial Application.setShortcutQueryParams
     */
    async setShortcutQueryParams(queryString) {
        await this.wire.sendAction('set-shortcut-query-args', { data: queryString, ...this.identity });
    }
    /**
     * Sets the zoom level of the application. The original size is 0 and each increment above or below represents zooming 20%
     * larger or smaller to default limits of 300% and 50% of original size, respectively.
     * @param { number } level The zoom level
     * @return {Promise.<void>}
     * @tutorial Application.setZoomLevel
     */
    setZoomLevel(level) {
        return this.wire.sendAction('set-application-zoom-level', { level, ...this.identity }).then(() => undefined);
    }
    /**
     * Sets a username to correlate with App Log Management.
     * @param { string } username Username to correlate with App's Log.
     * @return {Promise.<void>}
     * @tutorial Application.setAppLogUsername
     */
    async setAppLogUsername(username) {
        await this.wire.sendAction('set-app-log-username', { data: username, ...this.identity });
    }
    /**
     * @summary Retrieves information about the system tray. If the system tray is not set, it will throw an error message.
     * @desc The only information currently returned is the position and dimensions.
     * @return {Promise.<TrayInfo>}
     * @tutorial Application.getTrayIconInfo
     */
    getTrayIconInfo() {
        return this.wire.sendAction('get-tray-icon-info', this.identity).then(({ payload }) => payload.data);
    }
    /**
     * Closes the application by terminating its process.
     * @return {Promise.<void>}
     * @tutorial Application.terminate
     */
    terminate() {
        return this.wire.sendAction('terminate-application', this.identity).then(() => undefined);
    }
    /**
     * Waits for a hanging application. This method can be called in response to an application
     * "not-responding" to allow the application to continue and to generate another "not-responding"
     * message after a certain period of time.
     * @return {Promise.<void>}
     * @ignore
     */
    wait() {
        return this.wire.sendAction('wait-for-hung-application', this.identity).then(() => undefined);
    }
    /**
     * Retrieves information about the application.
     * @return {Promise.<ApplicationInfo>}
     * @tutorial Application.getInfo
     */
    getInfo() {
        return this.wire.sendAction('get-info', this.identity).then(({ payload }) => payload.data);
    }
    /**
     * Retrieves all process information for entities (windows and views) associated with an application.
     * @return {Promise.<AppProcessInfo>}
     * @tutorial Application.getProcessInfo
     * @experimental
     */
    async getProcessInfo() {
        const { payload: { data } } = await this.wire.sendAction('application-get-process-info', this.identity);
        return data;
    }
    /**
     * Sets file auto download location.
     * @param { string } downloadLocation file auto download location
     * @return {Promise.<void>}
     * @tutorial Application.setFileDownloadLocation
     */
    async setFileDownloadLocation(downloadLocation) {
        await this.wire.sendAction('set-file-download-location', { downloadLocation, ...this.identity });
    }
}
exports.Application = Application;


/***/ }),

/***/ "../../node_modules/@openfin/core/src/api/application/index.js":
/*!*********************************************************************!*\
  !*** ../../node_modules/@openfin/core/src/api/application/index.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
}
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Factory_1 = __webpack_require__(/*! ./Factory */ "../../node_modules/@openfin/core/src/api/application/Factory.js");
__exportStar(__webpack_require__(/*! ./Instance */ "../../node_modules/@openfin/core/src/api/application/Instance.js"), exports);
exports["default"] = Factory_1.default;


/***/ }),

/***/ "../../node_modules/@openfin/core/src/api/base.js":
/*!********************************************************!*\
  !*** ../../node_modules/@openfin/core/src/api/base.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _emitterAccessor;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Reply = exports.EmitterBase = exports.Base = void 0;
const promises_1 = __webpack_require__(/*! ../util/promises */ "../../node_modules/@openfin/core/src/util/promises.js");
const fin_store_1 = __webpack_require__(/*! ../transport/fin_store */ "../../node_modules/@openfin/core/src/transport/fin_store.js");
class Base {
    constructor(wire) {
        this.isNodeEnvironment = () => {
            return this.wire.environment.constructor.name === 'NodeEnvironment';
        };
        this.isOpenFinEnvironment = () => {
            return this.wire.environment.constructor.name === 'OpenFinEnvironment';
        };
        this.wire = wire;
    }
    get fin() {
        return fin_store_1.getFin(this.wire);
    }
    get me() {
        return this.wire.me;
    }
}
exports.Base = Base;
class EmitterBase extends Base {
    constructor(wire, topic, ...additionalAccessors) {
        super(wire);
        this.topic = topic;
        _emitterAccessor.set(this, void 0);
        this.eventNames = () => (this.hasEmitter() ? this.getOrCreateEmitter().eventNames() : []);
        this.emit = (eventName, payload, ...args) => {
            return this.hasEmitter() ? this.getOrCreateEmitter().emit(eventName, payload, ...args) : false;
        };
        this.hasEmitter = () => this.wire.eventAggregator.has(__classPrivateFieldGet(this, _emitterAccessor));
        this.getOrCreateEmitter = () => this.wire.eventAggregator.getOrCreate(__classPrivateFieldGet(this, _emitterAccessor));
        this.listeners = (type) => this.hasEmitter() ? this.getOrCreateEmitter().listeners(type) : [];
        this.listenerCount = (type) => this.hasEmitter() ? this.getOrCreateEmitter().listenerCount(type) : 0;
        this.registerEventListener = async (eventType, options = {}, applySubscription, undoSubscription) => {
            const runtimeEvent = {
                ...this.identity,
                timestamp: options.timestamp || Date.now(),
                topic: this.topic,
                type: eventType
            };
            const emitter = this.getOrCreateEmitter();
            // We apply the subscription and then undo if the async call fails to avoid
            // indeterminacy in subscription application order, which can break things elsewhere
            applySubscription(emitter);
            try {
                await this.wire.sendAction('subscribe-to-desktop-event', runtimeEvent);
            }
            catch (e) {
                undoSubscription(emitter);
                this.deleteEmitterIfNothingRegistered(emitter);
                throw e;
            }
        };
        this.deregisterEventListener = async (eventType, options = {}) => {
            if (this.hasEmitter()) {
                const runtimeEvent = {
                    ...this.identity,
                    timestamp: options.timestamp || Date.now(),
                    topic: this.topic,
                    type: eventType
                };
                await this.wire.sendAction('unsubscribe-to-desktop-event', runtimeEvent).catch(() => null);
                const emitter = this.getOrCreateEmitter();
                return emitter;
            }
            // This will only be reached if unsubscribe from event that does not exist but do not want to error here
            return Promise.resolve();
        };
        this.on = async (eventType, listener, options) => {
            await this.registerEventListener(eventType, options, (emitter) => {
                emitter.on(eventType, listener);
            }, (emitter) => {
                emitter.removeListener(eventType, listener);
            });
            return this;
        };
        this.addListener = this.on;
        this.once = async (eventType, listener, options) => {
            const deregister = () => this.deregisterEventListener(eventType);
            await this.registerEventListener(eventType, options, (emitter) => {
                emitter.once(eventType, deregister);
                emitter.once(eventType, listener);
            }, (emitter) => {
                emitter.removeListener(eventType, deregister);
                emitter.removeListener(eventType, listener);
            });
            return this;
        };
        this.prependListener = async (eventType, listener, options) => {
            await this.registerEventListener(eventType, options, (emitter) => {
                emitter.prependListener(eventType, listener);
            }, (emitter) => {
                emitter.removeListener(eventType, listener);
            });
            return this;
        };
        this.prependOnceListener = async (eventType, listener, options) => {
            const deregister = () => this.deregisterEventListener(eventType);
            await this.registerEventListener(eventType, options, (emitter) => {
                emitter.prependOnceListener(eventType, listener);
                emitter.once(eventType, deregister);
            }, (emitter) => {
                emitter.removeListener(eventType, listener);
                emitter.removeListener(eventType, deregister);
            });
            return this;
        };
        this.removeListener = async (eventType, listener, options) => {
            const emitter = await this.deregisterEventListener(eventType, options);
            if (emitter) {
                emitter.removeListener(eventType, listener);
                this.deleteEmitterIfNothingRegistered(emitter);
            }
            return this;
        };
        this.deregisterAllListeners = async (eventType) => {
            const runtimeEvent = { ...this.identity, type: eventType, topic: this.topic };
            if (this.hasEmitter()) {
                const emitter = this.getOrCreateEmitter();
                const refCount = emitter.listenerCount(runtimeEvent.type);
                const unsubscribePromises = [];
                for (let i = 0; i < refCount; i++) {
                    unsubscribePromises.push(this.wire.sendAction('unsubscribe-to-desktop-event', runtimeEvent).catch(() => null));
                }
                await Promise.all(unsubscribePromises);
                return emitter;
            }
            return undefined;
        };
        this.removeAllListeners = async (eventType) => {
            const removeByEvent = async (event) => {
                const emitter = await this.deregisterAllListeners(event);
                if (emitter) {
                    emitter.removeAllListeners(event);
                    this.deleteEmitterIfNothingRegistered(emitter);
                }
            };
            if (eventType) {
                await removeByEvent(eventType);
            }
            else if (this.hasEmitter()) {
                const events = this.getOrCreateEmitter().eventNames();
                await promises_1.promiseMap(events, removeByEvent);
            }
            return this;
        };
        __classPrivateFieldSet(this, _emitterAccessor, [topic, ...additionalAccessors]);
        this.listeners = (event) => this.hasEmitter() ? this.getOrCreateEmitter().listeners(event) : [];
    }
    deleteEmitterIfNothingRegistered(emitter) {
        if (emitter.eventNames().length === 0) {
            this.wire.eventAggregator.delete(__classPrivateFieldGet(this, _emitterAccessor));
        }
    }
}
exports.EmitterBase = EmitterBase;
_emitterAccessor = new WeakMap();
class Reply {
}
exports.Reply = Reply;


/***/ }),

/***/ "../../node_modules/@openfin/core/src/api/clipboard/index.js":
/*!*******************************************************************!*\
  !*** ../../node_modules/@openfin/core/src/api/clipboard/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const base_1 = __webpack_require__(/*! ../base */ "../../node_modules/@openfin/core/src/api/base.js");
/**
 * WriteRequestType interface
 * @typedef { object } WriteRequestType
 * @property { string } data Data to be written
 * @property { string } [type] Clipboard Type
 */
/**
 * The Clipboard API allows reading and writing to the clipboard in multiple formats.
 * @namespace
 */
class Clipboard extends base_1.Base {
    /**
     * Writes data into the clipboard as plain text
     * @param { WriteRequestType } writeObj This object is described in the WriteRequestType typeof
     * @return {Promise.<void>}
     * @tutorial Clipboard.writeText
     */
    writeText(writeObj) {
        return this.wire.sendAction('clipboard-write-text', writeObj).then(() => undefined);
    }
    /**
     * Read the content of the clipboard as plain text
     * @param { string } type Clipboard Type
     * @return {Promise.<string>}
     * @tutorial Clipboard.readText
     */
    readText(type) {
        return this.wire.sendAction('clipboard-read-text', type).then(({ payload }) => payload.data);
    }
    /**
     * Writes data into the clipboard as Html
     * @param { WriteRequestType } writeObj This object is described in the WriteRequestType typedef
     * @return {Promise.<void>}
     * @tutorial Clipboard.writeHtml
     */
    writeHtml(writeObj) {
        return this.wire.sendAction('clipboard-write-html', writeObj).then(() => undefined);
    }
    /**
     * Read the content of the clipboard as Html
     * @param { string } type Clipboard Type
     * @return {Promise.<string>}
     * @tutorial Clipboard.readHtml
     */
    readHtml(type) {
        return this.wire.sendAction('clipboard-read-html', type).then(({ payload }) => payload.data);
    }
    /**
     * Writes data into the clipboard as Rtf
     * @param { WriteRequestType } writeObj This object is described in the WriteRequestType typedef
     * @return {Promise.<void>}
     * @tutorial Clipboard.writeRtf
     */
    writeRtf(writeObj) {
        return this.wire.sendAction('clipboard-write-rtf', writeObj).then(() => undefined);
    }
    /**
     * Read the content of the clipboard as Rtf
     * @param { string } type Clipboard Type
     * @return {Promise.<string>}
     * @tutorial Clipboard.readRtf
     */
    readRtf(type) {
        return this.wire.sendAction('clipboard-read-rtf', type).then(({ payload }) => payload.data);
    }
    /**
     * Writes data into the clipboard
     * @param { WriteAnyRequestType } writeObj This object is described in the WriteAnyRequestType typedef
     * @return {Promise.<void>}
     * @tutorial Clipboard.write
     */
    write(writeObj) {
        return this.wire.sendAction('clipboard-write', writeObj).then(() => undefined);
    }
    /**
     * Reads available formats for the clipboard type
     * @param { string } type Clipboard Type
     * @return {Promise.Array.<string>}
     * @tutorial Clipboard.getAvailableFormats
     */
    getAvailableFormats(type) {
        return this.wire.sendAction('clipboard-read-formats', type).then(({ payload }) => payload.data);
    }
}
exports["default"] = Clipboard;


/***/ }),

/***/ "../../node_modules/@openfin/core/src/api/events/emitterMap.js":
/*!*********************************************************************!*\
  !*** ../../node_modules/@openfin/core/src/api/events/emitterMap.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmitterMap = void 0;
const events_1 = __webpack_require__(/*! events */ "../../node_modules/events/events.js");
class EmitterMap {
    constructor() {
        this.storage = new Map();
    }
    // eslint-disable-next-line class-methods-use-this
    hashKeys(keys) {
        const hashed = keys.map(normalizeString);
        return hashed.join('/');
    }
    getOrCreate(keys) {
        const hash = this.hashKeys(keys);
        if (!this.storage.has(hash)) {
            this.storage.set(hash, new events_1.EventEmitter());
        }
        // We set it above
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return this.storage.get(hash);
    }
    has(keys) {
        return this.storage.has(this.hashKeys(keys));
    }
    delete(keys) {
        const hash = this.hashKeys(keys);
        return this.storage.delete(hash);
    }
}
exports.EmitterMap = EmitterMap;
function normalizeString(s) {
    const b = Buffer.from(s);
    return b.toString('base64');
}


/***/ }),

/***/ "../../node_modules/@openfin/core/src/api/events/eventAggregator.js":
/*!**************************************************************************!*\
  !*** ../../node_modules/@openfin/core/src/api/events/eventAggregator.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const emitterMap_1 = __webpack_require__(/*! ./emitterMap */ "../../node_modules/@openfin/core/src/api/events/emitterMap.js");
function isEventMessage(message) {
    return message.action === 'process-desktop-event';
}
function mapKeyFromEvent(event) {
    const { topic } = event;
    if (topic === 'frame') {
        const { uuid, name } = event;
        return [topic, uuid, name];
    }
    if (topic === 'window') {
        const { uuid, name } = event;
        return [topic, uuid, name];
    }
    if (topic === 'application') {
        const { uuid } = event;
        return [topic, uuid];
    }
    if (topic === 'view') {
        const { uuid, name } = event;
        return [topic, uuid, name];
    }
    return [topic];
}
class EventAggregator extends emitterMap_1.EmitterMap {
    constructor() {
        super(...arguments);
        this.dispatchEvent = (message) => {
            if (isEventMessage(message)) {
                const { payload } = message;
                const accessor = mapKeyFromEvent(payload);
                if (this.has(accessor)) {
                    this.getOrCreate(accessor).emit(payload.type, payload);
                    return true;
                }
            }
            return false;
        };
    }
}
exports["default"] = EventAggregator;


/***/ }),

/***/ "../../node_modules/@openfin/core/src/api/external-application/Factory.js":
/*!********************************************************************************!*\
  !*** ../../node_modules/@openfin/core/src/api/external-application/Factory.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const base_1 = __webpack_require__(/*! ../base */ "../../node_modules/@openfin/core/src/api/base.js");
const Instance_1 = __webpack_require__(/*! ./Instance */ "../../node_modules/@openfin/core/src/api/external-application/Instance.js");
/**
 * @lends ExternalApplication
 */
class ExternalApplicationModule extends base_1.Base {
    /**
     * Asynchronously returns an External Application object that represents an external application.
     * <br>It is possible to wrap a process that does not yet exist, (for example, to listen for startup-related events)
     * provided its uuid is already known.
     * @param {string} uuid The UUID of the external application to be wrapped
     * @return {Promise.<ExternalApplication>}
     * @tutorial ExternalApplication.wrap
     * @static
     */
    wrap(uuid) {
        this.wire.sendAction('external-application-wrap').catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        return Promise.resolve(new Instance_1.ExternalApplication(this.wire, { uuid }));
    }
    /**
     * Synchronously returns an External Application object that represents an external application.
     * <br>It is possible to wrap a process that does not yet exist, (for example, to listen for startup-related events)
     * provided its uuid is already known.
     * @param {string} uuid The UUID of the external application to be wrapped
     * @return {ExternalApplication}
     * @tutorial ExternalApplication.wrapSync
     * @static
     */
    wrapSync(uuid) {
        this.wire.sendAction('external-application-wrap-sync').catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        return new Instance_1.ExternalApplication(this.wire, { uuid });
    }
}
exports["default"] = ExternalApplicationModule;


/***/ }),

/***/ "../../node_modules/@openfin/core/src/api/external-application/Instance.js":
/*!*********************************************************************************!*\
  !*** ../../node_modules/@openfin/core/src/api/external-application/Instance.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExternalApplication = void 0;
/* eslint-disable import/prefer-default-export */
const base_1 = __webpack_require__(/*! ../base */ "../../node_modules/@openfin/core/src/api/base.js");
/**
 * @classdesc An ExternalApplication object representing native language adapter connections to the runtime. Allows
 * the developer to listen to <a href="tutorial-ExternalApplication.EventEmitter.html">application events.</a>
 * Discovery of connections is provided by <a href="tutorial-System.getAllExternalApplications.html">getAllExternalApplications.</a>
 *
 * Processes that can be wrapped as `ExternalApplication`s include the following:
 * - Processes which have connected to an OpenFin runtime via an adapter
 * - Processes started via `System.launchExternalApplication`
 * - Processes monitored via `System.monitorExternalProcess`
 * @class
 * @hideconstructor
 */
class ExternalApplication extends base_1.EmitterBase {
    constructor(wire, identity) {
        super(wire, 'external-application', identity.uuid);
        this.identity = identity;
    }
    /**
     * Adds a listener to the end of the listeners array for the specified event.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - Called whenever an event of the specified type occurs.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function addListener
     * @memberof ExternalApplication
     * @instance
     * @tutorial ExternalApplication.EventEmitter
     */
    /**
     * Adds a listener to the end of the listeners array for the specified event.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - Called whenever an event of the specified type occurs.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function on
     * @memberof ExternalApplication
     * @instance
     * @tutorial ExternalApplication.EventEmitter
     */
    /**
     * Adds a one time listener for the event. The listener is invoked only the first time the event is fired, after which it is removed.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - The callback function.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function once
     * @memberof ExternalApplication
     * @instance
     * @tutorial ExternalApplication.EventEmitter
     */
    /**
     * Adds a listener to the beginning of the listeners array for the specified event.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - The callback function.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function prependListener
     * @memberof ExternalApplication
     * @instance
     * @tutorial ExternalApplication.EventEmitter
     */
    /**
     * Adds a one time listener for the event. The listener is invoked only the first time the event is fired, after which it is removed.
     * The listener is added to the beginning of the listeners array.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - The callback function.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function prependOnceListener
     * @memberof ExternalApplication
     * @instance
     * @tutorial ExternalApplication.EventEmitter
     */
    /**
     * Remove a listener from the listener array for the specified event.
     * Caution: Calling this method changes the array indices in the listener array behind the listener.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - The callback function.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function removeListener
     * @memberof ExternalApplication
     * @instance
     * @tutorial ExternalApplication.EventEmitter
     */
    /**
     * Removes all listeners, or those of the specified event.
     * @param { string | symbol } [eventType]  - The type of the event.
     * @return {Promise.<this>}
     * @function removeAllListeners
     * @memberof ExternalApplication
     * @instance
     * @tutorial ExternalApplication.EventEmitter
     */
    /**
     * Retrieves information about the external application.
     * @return {Promise.<ExternalApplicationInfo>}
     * @tutorial ExternalApplication.getInfo
     */
    getInfo() {
        return this.wire.sendAction('get-external-application-info', this.identity).then(({ payload }) => payload.data);
    }
}
exports.ExternalApplication = ExternalApplication;


/***/ }),

/***/ "../../node_modules/@openfin/core/src/api/external-application/index.js":
/*!******************************************************************************!*\
  !*** ../../node_modules/@openfin/core/src/api/external-application/index.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
}
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Factory_1 = __webpack_require__(/*! ./Factory */ "../../node_modules/@openfin/core/src/api/external-application/Factory.js");
exports["default"] = Factory_1.default;
__exportStar(__webpack_require__(/*! ./Instance */ "../../node_modules/@openfin/core/src/api/external-application/Instance.js"), exports);


/***/ }),

/***/ "../../node_modules/@openfin/core/src/api/fin.js":
/*!*******************************************************!*\
  !*** ../../node_modules/@openfin/core/src/api/fin.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const events_1 = __webpack_require__(/*! events */ "../../node_modules/events/events.js");
// Import from the file rather than the directory in case someone consuming types is using module resolution other than "node"
const index_1 = __webpack_require__(/*! ./system/index */ "../../node_modules/@openfin/core/src/api/system/index.js");
const index_2 = __webpack_require__(/*! ./window/index */ "../../node_modules/@openfin/core/src/api/window/index.js");
const index_3 = __webpack_require__(/*! ./application/index */ "../../node_modules/@openfin/core/src/api/application/index.js");
const index_4 = __webpack_require__(/*! ./interappbus/index */ "../../node_modules/@openfin/core/src/api/interappbus/index.js");
const index_5 = __webpack_require__(/*! ./clipboard/index */ "../../node_modules/@openfin/core/src/api/clipboard/index.js");
const index_6 = __webpack_require__(/*! ./external-application/index */ "../../node_modules/@openfin/core/src/api/external-application/index.js");
const index_7 = __webpack_require__(/*! ./frame/index */ "../../node_modules/@openfin/core/src/api/frame/index.js");
const index_8 = __webpack_require__(/*! ./global-hotkey/index */ "../../node_modules/@openfin/core/src/api/global-hotkey/index.js");
const index_9 = __webpack_require__(/*! ./view/index */ "../../node_modules/@openfin/core/src/api/view/index.js");
const index_10 = __webpack_require__(/*! ./platform/index */ "../../node_modules/@openfin/core/src/api/platform/index.js");
const me_1 = __webpack_require__(/*! ./me */ "../../node_modules/@openfin/core/src/api/me.js");
const fin_store_1 = __webpack_require__(/*! ../transport/fin_store */ "../../node_modules/@openfin/core/src/transport/fin_store.js");
const interop_1 = __webpack_require__(/*! ./interop */ "../../node_modules/@openfin/core/src/api/interop/index.js");
const snapshot_source_1 = __webpack_require__(/*! ./snapshot-source */ "../../node_modules/@openfin/core/src/api/snapshot-source/index.js");
class Fin extends events_1.EventEmitter {
    constructor(wire) {
        super();
        fin_store_1.registerFin(wire, this);
        this.wire = wire;
        this.System = new index_1.default(wire);
        this.Window = new index_2.default(wire);
        this.Application = new index_3.default(wire);
        this.InterApplicationBus = new index_4.default(wire);
        this.Clipboard = new index_5.default(wire);
        this.ExternalApplication = new index_6.default(wire);
        this.Frame = new index_7.default(wire);
        this.GlobalHotkey = new index_8.default(wire);
        this.Platform = new index_10.default(wire, this.InterApplicationBus.Channel);
        this.View = new index_9.default(wire);
        this.Interop = new interop_1.default(wire);
        this.SnapshotSource = new snapshot_source_1.default(wire);
        this.me = me_1.getMe(wire);
        // Handle disconnect events
        wire.on('disconnected', () => {
            this.emit('disconnected');
        });
    }
}
exports["default"] = Fin;


/***/ }),

/***/ "../../node_modules/@openfin/core/src/api/frame/Factory.js":
/*!*****************************************************************!*\
  !*** ../../node_modules/@openfin/core/src/api/frame/Factory.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const base_1 = __webpack_require__(/*! ../base */ "../../node_modules/@openfin/core/src/api/base.js");
const validate_1 = __webpack_require__(/*! ../../util/validate */ "../../node_modules/@openfin/core/src/util/validate.js");
const Instance_1 = __webpack_require__(/*! ./Instance */ "../../node_modules/@openfin/core/src/api/frame/Instance.js");
/**
 * @lends Frame
 */
class _FrameModule extends base_1.Base {
    /**
     * Asynchronously returns a reference to the specified frame. The frame does not have to exist
     * @param {Identity} identity - the identity of the frame you want to wrap
     * @return {Promise.<_Frame>}
     * @tutorial Frame.wrap
     * @static
     */
    async wrap(identity) {
        this.wire.sendAction('frame-wrap').catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        const errorMsg = validate_1.validateIdentity(identity);
        if (errorMsg) {
            throw new Error(errorMsg);
        }
        return new Instance_1._Frame(this.wire, identity);
    }
    /**
     * Synchronously returns a reference to the specified frame. The frame does not have to exist
     * @param {Identity} identity - the identity of the frame you want to wrap
     * @return {_Frame}
     * @tutorial Frame.wrapSync
     * @static
     */
    wrapSync(identity) {
        this.wire.sendAction('frame-wrap-sync').catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        const errorMsg = validate_1.validateIdentity(identity);
        if (errorMsg) {
            throw new Error(errorMsg);
        }
        return new Instance_1._Frame(this.wire, identity);
    }
    /**
     * Asynchronously returns a reference to the current frame
     * @return {Promise.<_Frame>}
     * @tutorial Frame.getCurrent
     * @static
     */
    getCurrent() {
        this.wire.sendAction('frame-get-current').catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        return Promise.resolve(new Instance_1._Frame(this.wire, this.wire.environment.getCurrentEntityIdentity()));
    }
    /**
     * Synchronously returns a reference to the current frame
     * @return {_Frame}
     * @tutorial Frame.getCurrentSync
     * @static
     */
    getCurrentSync() {
        this.wire.sendAction('frame-get-current-sync').catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        return new Instance_1._Frame(this.wire, this.wire.environment.getCurrentEntityIdentity());
    }
}
exports["default"] = _FrameModule;


/***/ }),

/***/ "../../node_modules/@openfin/core/src/api/frame/Instance.js":
/*!******************************************************************!*\
  !*** ../../node_modules/@openfin/core/src/api/frame/Instance.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._Frame = void 0;
/* eslint-disable import/prefer-default-export */
const base_1 = __webpack_require__(/*! ../base */ "../../node_modules/@openfin/core/src/api/base.js");
/**
 * @classdesc
 * An iframe represents an embedded HTML page within a parent HTML page. Because this embedded page
 * has its own DOM and global JS context (which may or may not be linked to that of the parent depending
 * on if it is considered out of the root domain or not), it represents a unique endpoint as an OpenFin
 * connection. Iframes may be generated dynamically, or be present on initial page load and each non-CORS
 * iframe has the OpenFin API injected by default. It is possible to opt into cross-origin iframes having
 * the API by setting api.iframe.crossOriginInjection to true in a window's options. To block all iframes
 * from getting the API injected you can set api.frame.sameOriginInjection
 * to false <a href="Window.html#~options" target="_blank">(see Window~options)</a>.
 *
 * To be able to directly address this context for eventing and messaging purposes, it needs a
 * unique uuid name pairing. For OpenFin applications and windows this is provided via a configuration
 * object in the form of a manifest URL or options object, but there is no configuration object for iframes.
 * Just as a call to window.open outside of our Window API returns a new window with a random GUID assigned
 * for the name, each iframe that has the API injected will be assigned a GUID as its name, the UUID will be
 * the same as the parent window's.
 *
 * The fin.Frame namespace represents a way to interact with `iframes` and facilitates the discovery of current context
 * (iframe or main window) as well as the ability to listen for <a href="tutorial-Frame.EventEmitter.html">frame-specific events</a>.
 * @class
 * @alias Frame
 * @hideconstructor
 */
class _Frame extends base_1.EmitterBase {
    constructor(wire, identity) {
        super(wire, 'frame', identity.uuid, identity.name);
        this.identity = identity;
    }
    /**
     * Adds the listener function to the end of the listeners array for the specified event type.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - Called whenever an event of the specified type occurs.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function addListener
     * @memberof Frame
     * @instance
     * @tutorial Frame.EventEmitter
     */
    /**
     * Adds a listener to the end of the listeners array for the specified event.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - Called whenever an event of the specified type occurs.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function on
     * @memberof Frame
     * @instance
     * @tutorial Frame.EventEmitter
     */
    /**
     * Adds a one time listener for the event. The listener is invoked only the first time the event is fired, after which it is removed.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - The callback function.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function once
     * @memberof Frame
     * @instance
     * @tutorial Frame.EventEmitter
     */
    /**
     * Adds a listener to the beginning of the listeners array for the specified event.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - The callback function.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function prependListener
     * @memberof Frame
     * @instance
     * @tutorial Frame.EventEmitter
     */
    /**
     * Adds a one time listener for the event. The listener is invoked only the first time the event is fired, after which it is removed.
     * The listener is added to the beginning of the listeners array.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - The callback function.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function prependOnceListener
     * @memberof Frame
     * @instance
     * @tutorial Frame.EventEmitter
     */
    /**
     * Remove a listener from the listener array for the specified event.
     * Caution: Calling this method changes the array indices in the listener array behind the listener.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - The callback function.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function removeListener
     * @memberof Frame
     * @instance
     * @tutorial Frame.EventEmitter
     */
    /**
     * Removes all listeners, or those of the specified event.
     * @param { string | symbol } [eventType]  - The type of the event.
     * @return {Promise.<this>}
     * @function removeAllListeners
     * @memberof Frame
     * @instance
     * @tutorial Frame.EventEmitter
     */
    /**
     * Returns a frame info object for the represented frame
     * @return {Promise.<FrameInfo>}
     * @tutorial Frame.getInfo
     */
    getInfo() {
        return this.wire.sendAction('get-frame-info', this.identity).then(({ payload }) => payload.data);
    }
    /**
     * Returns a frame info object representing the window that the referenced iframe is
     * currently embedded in
     * @return {Promise.<FrameInfo>}
     * @tutorial Frame.getParentWindow
     */
    getParentWindow() {
        return this.wire.sendAction('get-parent-window', this.identity).then(({ payload }) => payload.data);
    }
}
exports._Frame = _Frame;


/***/ }),

/***/ "../../node_modules/@openfin/core/src/api/frame/index.js":
/*!***************************************************************!*\
  !*** ../../node_modules/@openfin/core/src/api/frame/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
}
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Factory_1 = __webpack_require__(/*! ./Factory */ "../../node_modules/@openfin/core/src/api/frame/Factory.js");
exports["default"] = Factory_1.default;
__exportStar(__webpack_require__(/*! ./Instance */ "../../node_modules/@openfin/core/src/api/frame/Instance.js"), exports);


/***/ }),

/***/ "../../node_modules/@openfin/core/src/api/global-hotkey/index.js":
/*!***********************************************************************!*\
  !*** ../../node_modules/@openfin/core/src/api/global-hotkey/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const base_1 = __webpack_require__(/*! ../base */ "../../node_modules/@openfin/core/src/api/base.js");
/**
 * The GlobalHotkey module can register/unregister a global hotkeys.
 * @namespace
 */
class GlobalHotkey extends base_1.EmitterBase {
    constructor(wire) {
        super(wire, 'global-hotkey');
    }
    /**
     * Registers a global hotkey with the operating system.
     * @param { string } hotkey a hotkey string
     * @param { Function } listener called when the registered hotkey is pressed by the user.
     * @return {Promise.<void>}
     * @tutorial GlobalHotkey.register
     */
    async register(hotkey, listener) {
        await this.on(hotkey, listener);
        await this.wire.sendAction('global-hotkey-register', { hotkey });
        return undefined;
    }
    /**
     * Unregisters a global hotkey with the operating system.
     * @param { string } hotkey a hotkey string
     * @return {Promise.<void>}
     * @tutorial GlobalHotkey.unregister
     */
    async unregister(hotkey) {
        await this.removeAllListeners(hotkey);
        await this.wire.sendAction('global-hotkey-unregister', { hotkey });
        return undefined;
    }
    /**
     * Unregisters all global hotkeys for the current application.
     * @return {Promise.<void>}
     * @tutorial GlobalHotkey.unregisterAll
     */
    async unregisterAll() {
        await Promise.all(this.eventNames()
            .filter((name) => !(name === 'registered' || name === 'unregistered'))
            .map((name) => this.removeAllListeners(name)));
        await this.wire.sendAction('global-hotkey-unregister-all', {});
        return undefined;
    }
    /**
     * Checks if a given hotkey has been registered
     * @param { string } hotkey a hotkey string
     * @return {Promise.<boolean>}
     * @tutorial GlobalHotkey.isRegistered
     */
    async isRegistered(hotkey) {
        const { payload: { data } } = await this.wire.sendAction('global-hotkey-is-registered', { hotkey });
        return data;
    }
}
exports["default"] = GlobalHotkey;


/***/ }),

/***/ "../../node_modules/@openfin/core/src/api/interappbus/channel/channel.js":
/*!*******************************************************************************!*\
  !*** ../../node_modules/@openfin/core/src/api/interappbus/channel/channel.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChannelBase = exports.ProtectedItems = void 0;
const resultOrPayload = (func) => (topic, payload, senderIdentity) => {
    const res = func(topic, payload, senderIdentity);
    return res === undefined ? payload : res;
};
class ProtectedItems {
    constructor(providerIdentity, wire) {
        this.providerIdentity = providerIdentity;
        this.wire = wire;
    }
}
exports.ProtectedItems = ProtectedItems;
class ChannelBase {
    constructor() {
        this.subscriptions = new Map();
    }
    static defaultAction(topic) {
        throw new Error(`No action registered at target for ${topic}`);
    }
    async processAction(topic, payload, senderIdentity) {
        try {
            const mainAction = this.subscriptions.has(topic)
                ? this.subscriptions.get(topic)
                : (currentPayload, id) => { var _a; return ((_a = this.defaultAction) !== null && _a !== void 0 ? _a : ChannelBase.defaultAction)(topic, currentPayload, id); };
            const preActionProcessed = this.preAction ? await this.preAction(topic, payload, senderIdentity) : payload;
            const actionProcessed = await mainAction(preActionProcessed, senderIdentity);
            return this.postAction ? await this.postAction(topic, actionProcessed, senderIdentity) : actionProcessed;
        }
        catch (e) {
            if (this.errorMiddleware) {
                return this.errorMiddleware(topic, e, senderIdentity);
            }
            throw e;
        }
    }
    beforeAction(func) {
        if (this.preAction) {
            throw new Error('Already registered beforeAction middleware');
        }
        this.preAction = resultOrPayload(func);
    }
    onError(func) {
        if (this.errorMiddleware) {
            throw new Error('Already registered error middleware');
        }
        this.errorMiddleware = func;
    }
    afterAction(func) {
        if (this.postAction) {
            throw new Error('Already registered afterAction middleware');
        }
        this.postAction = resultOrPayload(func);
    }
    remove(action) {
        this.subscriptions.delete(action);
    }
    setDefaultAction(func) {
        if (this.defaultAction) {
            throw new Error('default action can only be set once');
        }
        else {
            this.defaultAction = func;
        }
    }
    register(topic, listener) {
        if (this.subscriptions.has(topic)) {
            throw new Error(`Subscription already registered for action: ${topic}. Unsubscribe before adding new subscription`);
        }
        else {
            this.subscriptions.set(topic, listener);
            return true;
        }
    }
}
exports.ChannelBase = ChannelBase;


/***/ }),

/***/ "../../node_modules/@openfin/core/src/api/interappbus/channel/client.js":
/*!******************************************************************************!*\
  !*** ../../node_modules/@openfin/core/src/api/interappbus/channel/client.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _protectedObj, _strategy, _close;
Object.defineProperty(exports, "__esModule", ({ value: true }));
const channel_1 = __webpack_require__(/*! ./channel */ "../../node_modules/@openfin/core/src/api/interappbus/channel/channel.js");
const channelClientsByEndpointId = new Map();
class ChannelClient extends channel_1.ChannelBase {
    constructor(routingInfo, wire, strategy) {
        super();
        _protectedObj.set(this, void 0);
        _strategy.set(this, void 0);
        // needs to be bound;
        this.processAction = (action, payload, senderIdentity) => super.processAction(action, payload, senderIdentity);
        _close.set(this, () => {
            channelClientsByEndpointId.delete(this.endpointId);
            __classPrivateFieldGet(this, _strategy).close();
        });
        __classPrivateFieldSet(this, _protectedObj, new channel_1.ProtectedItems(routingInfo, wire));
        this.disconnectListener = () => undefined;
        this.endpointId = routingInfo.endpointId;
        __classPrivateFieldSet(this, _strategy, strategy);
        channelClientsByEndpointId.set(this.endpointId, this);
        strategy.receive(this.processAction);
    }
    static closeChannelByEndpointId(id) {
        const channel = channelClientsByEndpointId.get(id);
        if (channel) {
            __classPrivateFieldGet(channel, _close).call(channel);
        }
    }
    // closes the channel and invokes the disconnect listener if an event payload is passed.
    static handleProviderDisconnect(channel, eventPayload) {
        channel.disconnectListener(eventPayload);
        __classPrivateFieldGet(channel, _close).call(channel);
    }
    get providerIdentity() {
        const protectedObj = __classPrivateFieldGet(this, _protectedObj);
        return protectedObj.providerIdentity;
    }
    async dispatch(action, payload) {
        if (__classPrivateFieldGet(this, _strategy).isEndpointConnected(this.providerIdentity.channelId)) {
            return __classPrivateFieldGet(this, _strategy).send(this.providerIdentity.channelId, action, payload);
        }
        throw new Error('The client you are trying to dispatch from is disconnected from the target provider.');
    }
    onDisconnection(listener) {
        this.disconnectListener = (payload) => {
            try {
                listener(payload);
            }
            catch (err) {
                throw new Error(`Error while calling the onDisconnection callback: ${err.message}`);
            }
            finally {
                this.disconnectListener = () => undefined;
            }
        };
    }
    async disconnect() {
        const protectedObj = __classPrivateFieldGet(this, _protectedObj);
        const { channelName, uuid, name } = protectedObj.providerIdentity;
        await protectedObj.wire.sendAction('disconnect-from-channel', {
            channelName,
            uuid,
            name,
            endpointId: this.endpointId
        });
        __classPrivateFieldGet(this, _close).call(this);
    }
}
exports["default"] = ChannelClient;
_protectedObj = new WeakMap(), _strategy = new WeakMap(), _close = new WeakMap();


/***/ }),

/***/ "../../node_modules/@openfin/core/src/api/interappbus/channel/connection-manager.js":
/*!******************************************************************************************!*\
  !*** ../../node_modules/@openfin/core/src/api/interappbus/channel/connection-manager.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _messageReceiver, _rtcConnectionManager;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConnectionManager = void 0;
const exhaustive_1 = __webpack_require__(/*! ../../../util/exhaustive */ "../../node_modules/@openfin/core/src/util/exhaustive.js");
const base_1 = __webpack_require__(/*! ../../base */ "../../node_modules/@openfin/core/src/api/base.js");
const strategy_1 = __webpack_require__(/*! ./protocols/classic/strategy */ "../../node_modules/@openfin/core/src/api/interappbus/channel/protocols/classic/strategy.js");
const strategy_2 = __webpack_require__(/*! ./protocols/rtc/strategy */ "../../node_modules/@openfin/core/src/api/interappbus/channel/protocols/rtc/strategy.js");
const ice_manager_1 = __webpack_require__(/*! ./protocols/rtc/ice-manager */ "../../node_modules/@openfin/core/src/api/interappbus/channel/protocols/rtc/ice-manager.js");
const provider_1 = __webpack_require__(/*! ./provider */ "../../node_modules/@openfin/core/src/api/interappbus/channel/provider.js");
const message_receiver_1 = __webpack_require__(/*! ./protocols/classic/message-receiver */ "../../node_modules/@openfin/core/src/api/interappbus/channel/protocols/classic/message-receiver.js");
const protocol_manager_1 = __webpack_require__(/*! ./protocols/protocol-manager */ "../../node_modules/@openfin/core/src/api/interappbus/channel/protocols/protocol-manager.js");
const strategy_3 = __webpack_require__(/*! ./protocols/combined/strategy */ "../../node_modules/@openfin/core/src/api/interappbus/channel/protocols/combined/strategy.js");
class ConnectionManager extends base_1.Base {
    constructor(wire) {
        super(wire);
        _messageReceiver.set(this, void 0);
        _rtcConnectionManager.set(this, void 0);
        this.removeChannelFromProviderMap = (channelId) => {
            this.providerMap.delete(channelId);
        };
        this.onmessage = (msg) => {
            if (msg.action === 'process-channel-connection') {
                this.processChannelConnection(msg);
                return true;
            }
            return false;
        };
        this.providerMap = new Map();
        this.protocolManager = new protocol_manager_1.ProtocolManager(this.isNodeEnvironment() ? ['classic'] : ['rtc', 'classic']);
        __classPrivateFieldSet(this, _messageReceiver, new message_receiver_1.MessageReceiver(wire));
        __classPrivateFieldSet(this, _rtcConnectionManager, new ice_manager_1.RTCICEManager(wire));
        wire.registerMessageHandler(this.onmessage.bind(this));
    }
    static getProtocolOptionsFromStrings(protocols) {
        return protocols.map(protocol => {
            switch (protocol) {
                case 'rtc':
                    return strategy_2.RTCInfo;
                case 'classic':
                    return strategy_1.ClassicInfo;
                default:
                    return exhaustive_1.exhaustiveCheck(protocol, ['rtc', 'classic']);
            }
        });
    }
    createProvider(options, providerIdentity) {
        const opts = Object.assign(this.wire.environment.getDefaultChannelOptions().create, options || {});
        const protocols = this.protocolManager.getProviderProtocols(opts === null || opts === void 0 ? void 0 : opts.protocols);
        const createSingleStrategy = (stratType) => {
            switch (stratType) {
                case 'rtc':
                    return new strategy_2.RTCStrategy();
                case 'classic':
                    return new strategy_1.ClassicStrategy(this.wire, __classPrivateFieldGet(this, _messageReceiver), 
                    // Providers do not have an endpointId, use channelId as endpointId in the strategy.
                    providerIdentity.channelId, providerIdentity);
                default:
                    return exhaustive_1.exhaustiveCheck(stratType, ['rtc', 'classic']);
            }
        };
        const strategies = protocols.map(createSingleStrategy);
        let strategy;
        if (strategies.length === 2) {
            const [a, b] = strategies;
            strategy = strategy_3.default.combine(a, b);
        }
        else if (strategies.length === 1) {
            [strategy] = strategies;
        }
        else {
            // Should be impossible.
            throw new Error('failed to combine strategies');
        }
        const channel = new provider_1.ChannelProvider(providerIdentity, this.wire, strategy);
        const key = providerIdentity.channelId;
        this.providerMap.set(key, { provider: channel, strategy, supportedProtocols: ConnectionManager.getProtocolOptionsFromStrings(protocols) });
        provider_1.ChannelProvider.setProviderRemoval(channel, this.removeChannelFromProviderMap.bind(this));
        return channel;
    }
    async createClientOffer(options) {
        const protocols = this.protocolManager.getClientProtocols(options === null || options === void 0 ? void 0 : options.protocols);
        let rtcPacket;
        const supportedProtocols = await Promise.all(protocols.map(async (type) => {
            switch (type) {
                case 'rtc': {
                    const { rtcClient, channels, offer, rtcConnectionId, channelsOpened } = await __classPrivateFieldGet(this, _rtcConnectionManager).startClientOffer();
                    rtcPacket = { rtcClient, channels, channelsOpened };
                    return {
                        type: 'rtc',
                        version: strategy_2.RTCInfo.version,
                        payload: { offer, rtcConnectionId }
                    };
                }
                case 'classic':
                    return { type: 'classic', version: strategy_1.ClassicInfo.version };
                default:
                    return exhaustive_1.exhaustiveCheck(type, ['rtc', 'classic']);
            }
        }));
        return {
            offer: {
                supportedProtocols,
                maxProtocols: 2
            },
            rtc: rtcPacket
        };
    }
    async createClientStrategy(rtcPacket, routingInfo) {
        var _a;
        if (!routingInfo.endpointId) {
            routingInfo.endpointId = this.wire.environment.getNextMessageId();
            // For New Clients connecting to Old Providers. To prevent multi-dispatching and publishing, we delete previously-connected
            // clients that are in the same context as the newly-connected client.
            __classPrivateFieldGet(this, _messageReceiver).checkForPreviousClientConnection(routingInfo.channelId);
        }
        const answer = (_a = routingInfo.answer) !== null && _a !== void 0 ? _a : {
            supportedProtocols: [{ type: 'classic', version: 1 }]
        };
        const createStrategyFromAnswer = async (protocol) => {
            if (protocol.type === 'rtc' && rtcPacket) {
                await __classPrivateFieldGet(this, _rtcConnectionManager).finishClientOffer(rtcPacket.rtcClient, protocol.payload.answer, rtcPacket.channelsOpened);
                return new strategy_2.RTCStrategy();
            }
            if (protocol.type === 'classic') {
                return new strategy_1.ClassicStrategy(this.wire, __classPrivateFieldGet(this, _messageReceiver), routingInfo.endpointId, routingInfo);
            }
            return null;
        };
        const allProtocols = (await Promise.all(answer.supportedProtocols.map(createStrategyFromAnswer))).filter((x) => x !== null);
        // Clean up logic if provider didn't support rtc.
        if (rtcPacket && !allProtocols.some((x) => x instanceof strategy_2.RTCStrategy)) {
            if (rtcPacket) {
                rtcPacket.rtcClient.close();
            }
        }
        let strategy;
        if (allProtocols.length >= 2) {
            strategy = strategy_3.default.combine(allProtocols[0], allProtocols[1]);
        }
        else if (allProtocols.length) {
            [strategy] = allProtocols;
        }
        else {
            // Should be impossible.
            throw new Error('No compatible protocols');
        }
        // as casting rtcPacket because we won't have an rtcStrategy if rtcPacket is undefined;
        const endpointPayload = { endpointIdentity: routingInfo, rtc: rtcPacket };
        strategy.addEndpoint(routingInfo.channelId, endpointPayload);
        return strategy;
    }
    async processChannelConnection(msg) {
        const { clientIdentity, providerIdentity, ackToSender, payload, offer: clientOffer } = msg.payload;
        if (!clientIdentity.endpointId) {
            // Should be polyfilled by core but not in cases of node connecting to an old runtime.
            clientIdentity.endpointId = this.wire.environment.getNextMessageId();
            clientIdentity.isLocalEndpointId = true;
        }
        else {
            clientIdentity.isLocalEndpointId = false;
        }
        const key = providerIdentity.channelId;
        const bus = this.providerMap.get(key);
        if (!bus) {
            ackToSender.payload.success = false;
            ackToSender.payload.reason = `Channel "${providerIdentity.channelName}" has been destroyed.`;
            return this.wire.sendRaw(ackToSender);
        }
        const { provider, strategy, supportedProtocols } = bus;
        try {
            if (!(provider instanceof provider_1.ChannelProvider)) {
                throw Error('Cannot connect to a channel client');
            }
            const offer = clientOffer !== null && clientOffer !== void 0 ? clientOffer : {
                supportedProtocols: [{ type: 'classic', version: 1 }],
                maxProtocols: 1
            };
            const overlappingProtocols = this.protocolManager.getCompatibleProtocols(supportedProtocols, offer);
            if (!overlappingProtocols.length) {
                throw new Error('This provider does not support any of the offered protocols.');
            }
            const res = await provider.processConnection(clientIdentity, payload);
            ackToSender.payload.payload = ackToSender.payload.payload || {};
            // Loop through all supported protocols and accumulate them into the answer
            // addEndpoint is tricky but we need to wait for channel resolution before adding the endpoint.
            let clientAnswer = {
                supportedProtocols: [],
                endpointPayloadPromise: Promise.resolve({ endpointIdentity: clientIdentity })
            };
            clientAnswer = await overlappingProtocols.reduce(async (accumP, protocolToUse) => {
                const answer = await accumP;
                if (protocolToUse.type === 'rtc') {
                    const { answer: rtcAnswer, rtcClient, channels } = await __classPrivateFieldGet(this, _rtcConnectionManager).createProviderAnswer(protocolToUse.payload.rtcConnectionId, protocolToUse.payload.offer);
                    answer.supportedProtocols.push({
                        type: 'rtc',
                        version: strategy_2.RTCInfo.version,
                        payload: {
                            answer: rtcAnswer
                        }
                    });
                    answer.endpointPayloadPromise = answer.endpointPayloadPromise.then((endpointPayload) => channels.then((resolvedChannels) => {
                        return {
                            ...endpointPayload,
                            rtc: {
                                rtcClient,
                                channels: resolvedChannels
                            }
                        };
                    }));
                }
                else {
                    answer.supportedProtocols.push({ type: 'classic', version: strategy_1.ClassicInfo.version });
                }
                return answer;
            }, Promise.resolve(clientAnswer));
            // Need to as cast here.
            clientAnswer.endpointPayloadPromise.then((endpointPayload) => strategy.addEndpoint(clientIdentity.endpointId, endpointPayload));
            ackToSender.payload.payload.result = res;
            ackToSender.payload.payload.answer = clientAnswer;
            return this.wire.sendRaw(ackToSender);
        }
        catch (e) {
            ackToSender.payload.success = false;
            ackToSender.payload.reason = e.message;
            return this.wire.sendRaw(ackToSender);
        }
    }
}
exports.ConnectionManager = ConnectionManager;
_messageReceiver = new WeakMap(), _rtcConnectionManager = new WeakMap();


/***/ }),

/***/ "../../node_modules/@openfin/core/src/api/interappbus/channel/index.js":
/*!*****************************************************************************!*\
  !*** ../../node_modules/@openfin/core/src/api/interappbus/channel/index.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _connectionManager;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Channel = void 0;
/* eslint-disable no-console */
const client_1 = __webpack_require__(/*! ./client */ "../../node_modules/@openfin/core/src/api/interappbus/channel/client.js");
const provider_1 = __webpack_require__(/*! ./provider */ "../../node_modules/@openfin/core/src/api/interappbus/channel/provider.js");
const base_1 = __webpack_require__(/*! ../../base */ "../../node_modules/@openfin/core/src/api/base.js");
const connection_manager_1 = __webpack_require__(/*! ./connection-manager */ "../../node_modules/@openfin/core/src/api/interappbus/channel/connection-manager.js");
// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => { };
class Channel extends base_1.EmitterBase {
    constructor(wire) {
        super(wire, 'channel');
        _connectionManager.set(this, void 0);
        __classPrivateFieldSet(this, _connectionManager, new connection_manager_1.ConnectionManager(wire));
    }
    async getAllChannels() {
        return this.wire.sendAction('get-all-channels').then(({ payload }) => payload.data);
    }
    async onChannelConnect(listener) {
        await this.on('connected', listener);
    }
    async onChannelDisconnect(listener) {
        await this.on('disconnected', listener);
    }
    async connect(channelName, options) {
        if (!channelName || typeof channelName !== 'string') {
            throw new Error('Please provide a channelName string to connect to a channel.');
        }
        const opts = Object.assign(this.wire.environment.getDefaultChannelOptions().connect, options || {});
        let resolver = noop;
        let listener = noop;
        const waitResponse = new Promise((resolve) => {
            resolver = resolve;
            listener = (payload) => {
                if (channelName === payload.channelName) {
                    this.removeListener('connected', listener);
                    resolve(this.connect(channelName, opts));
                }
            };
            this.on('connected', listener);
        });
        try {
            const { offer, rtc: rtcPacket } = await __classPrivateFieldGet(this, _connectionManager).createClientOffer(opts);
            const res = await this.wire.sendAction('connect-to-channel', { channelName, ...opts, offer });
            const { payload: { data: routingInfo } } = res;
            // If there isn't a matching channel, the above sendAction call will error out and go to catch, skipping the logic below.
            if (resolver) {
                resolver();
            }
            this.removeListener('connected', listener);
            const strategy = await __classPrivateFieldGet(this, _connectionManager).createClientStrategy(rtcPacket, routingInfo);
            const channel = new client_1.default(routingInfo, this.wire, strategy);
            // It is the client's responsibility to handle endpoint disconnection to the provider.
            // If the endpoint dies, the client will force a disconnection through the core.
            // The provider does not care about endpoint disconnection.
            strategy.onEndpointDisconnect(routingInfo.channelId, async () => {
                try {
                    await channel.disconnect();
                }
                catch (error) {
                    console.warn(`Something went wrong during disconnect for client with uuid: ${routingInfo.uuid} / name: ${routingInfo.name} / endpointId: ${routingInfo.endpointId}.`);
                }
                finally {
                    client_1.default.handleProviderDisconnect(channel, routingInfo);
                }
            });
            this.on('disconnected', (eventPayload) => {
                if (eventPayload.channelName === channelName) {
                    client_1.default.handleProviderDisconnect(channel, eventPayload);
                }
            });
            return channel;
        }
        catch (e) {
            const shouldWait = { wait: true, ...opts }.wait;
            const internalNackMessage = 'internal-nack';
            if (shouldWait && e.message && e.message.includes(internalNackMessage)) {
                console.warn(`Channel not found for channelName: ${channelName}, waiting for channel connection.`);
                return waitResponse;
            }
            if (e.message === internalNackMessage) {
                throw new Error(`No channel found for channelName: ${channelName}`);
            }
            else {
                throw new Error(e);
            }
        }
    }
    async create(channelName, options) {
        if (!channelName) {
            throw new Error('Please provide a channelName to create a channel');
        }
        const { payload: { data: providerIdentity } } = await this.wire.sendAction('create-channel', { channelName });
        const channel = __classPrivateFieldGet(this, _connectionManager).createProvider(options, providerIdentity);
        this.on('client-disconnected', (eventPayload) => {
            if (eventPayload.channelName === channelName) {
                provider_1.ChannelProvider.handleClientDisconnection(channel, eventPayload);
            }
        });
        return channel;
    }
}
exports.Channel = Channel;
_connectionManager = new WeakMap();


/***/ }),

/***/ "../../node_modules/@openfin/core/src/api/interappbus/channel/protocols/classic/message-receiver.js":
/*!**********************************************************************************************************!*\
  !*** ../../node_modules/@openfin/core/src/api/interappbus/channel/protocols/classic/message-receiver.js ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MessageReceiver = void 0;
const client_1 = __webpack_require__(/*! ../../client */ "../../node_modules/@openfin/core/src/api/interappbus/channel/client.js");
const base_1 = __webpack_require__(/*! ../../../../base */ "../../node_modules/@openfin/core/src/api/base.js");
/*
This is a singleton (per fin object) tasked with routing messages coming off the ipc to the correct endpoint.
It needs to be a singleton because there can only be one per wire. It tracks both clients and providers' processAction passed in via the strategy.
If functionality is not about receiving messages, it does not belong here.
*/
class MessageReceiver extends base_1.Base {
    constructor(wire) {
        super(wire);
        this.onmessage = (msg) => {
            if (msg.action === 'process-channel-message') {
                this.processChannelMessage(msg);
                return true;
            }
            return false;
        };
        this.endpointMap = new Map();
        this.latestEndpointIdByChannelId = new Map();
        wire.registerMessageHandler(this.onmessage.bind(this));
    }
    async processChannelMessage(msg) {
        var _a, _b;
        const { senderIdentity, providerIdentity, action, ackToSender, payload, intendedTargetIdentity } = msg.payload;
        const key = (_b = (_a = intendedTargetIdentity.channelId) !== null && _a !== void 0 ? _a : intendedTargetIdentity.endpointId) !== null && _b !== void 0 ? _b : this.latestEndpointIdByChannelId.get(providerIdentity.channelId); // No endpointId was passed, make best attempt
        const handler = this.endpointMap.get(key);
        if (!handler) {
            ackToSender.payload.success = false;
            ackToSender.payload.reason = `Client connection with identity uuid: ${this.wire.me.uuid} / name: ${this.wire.me.name} / endpointId: ${key} no longer connected.`;
            return this.wire.sendRaw(ackToSender);
        }
        try {
            const res = await handler(action, payload, senderIdentity);
            ackToSender.payload.payload = ackToSender.payload.payload || {};
            ackToSender.payload.payload.result = res;
            return this.wire.sendRaw(ackToSender);
        }
        catch (e) {
            ackToSender.payload.success = false;
            ackToSender.payload.reason = e.message;
            return this.wire.sendRaw(ackToSender);
        }
    }
    addEndpoint(handler, channelId, endpointId) {
        this.endpointMap.set(endpointId, handler);
        // Providers have the same endpointId and channelId.
        // This is only used when clients are receiving messages from providers, so we shouldn't save provider endpointId here.
        if (channelId !== endpointId) {
            this.latestEndpointIdByChannelId.set(channelId, endpointId);
        }
    }
    removeEndpoint(channelId, endpointId) {
        this.endpointMap.delete(endpointId);
        if (this.latestEndpointIdByChannelId.get(channelId) === endpointId) {
            this.latestEndpointIdByChannelId.delete(channelId);
        }
    }
    checkForPreviousClientConnection(channelId) {
        const endpointIdFromPreviousConnection = this.latestEndpointIdByChannelId.get(channelId);
        if (endpointIdFromPreviousConnection) {
            // Not convinced by this way of doing things, but pushing up for now.
            client_1.default.closeChannelByEndpointId(endpointIdFromPreviousConnection);
            // eslint-disable-next-line no-console
            console.warn('You have created a second connection to an older provider. First connection has been removed from the clientMap');
            // eslint-disable-next-line no-console
            console.warn('If the provider calls publish(), you may receive multiple messages.');
        }
    }
}
exports.MessageReceiver = MessageReceiver;


/***/ }),

/***/ "../../node_modules/@openfin/core/src/api/interappbus/channel/protocols/classic/strategy.js":
/*!**************************************************************************************************!*\
  !*** ../../node_modules/@openfin/core/src/api/interappbus/channel/protocols/classic/strategy.js ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {


var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _wire, _endpointIdentityMap;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClassicInfo = exports.ClassicStrategy = void 0;
/*
This is used to abstract out ipc messaging from the channels implementation. It is only concerned with sending messages and registration with the MessageReceiver
*/
class ClassicStrategy {
    constructor(wire, messageReceiver, endpointId, // Provider endpointId is channelId
    providerIdentity) {
        this.messageReceiver = messageReceiver;
        this.endpointId = endpointId;
        this.providerIdentity = providerIdentity;
        _wire.set(this, void 0);
        // Store full endpointIdentity by endpointId of all known endpoints for this strategy instance.
        // (clients will only have 1: the provider, the provider will have all clients)
        _endpointIdentityMap.set(this, new Map());
        this.send = async (endpointId, action, payload) => {
            const to = __classPrivateFieldGet(this, _endpointIdentityMap).get(endpointId);
            if (!to) {
                throw new Error(`Could not locate routing info for endpoint ${endpointId}`);
            }
            // as casting to any because typescript complains. The following is only relevant if this is a locally set endpointId on a ClientIdentity.
            // We delete these properties to not change backwards compatibility.
            const cleanId = { ...to };
            if (cleanId.isLocalEndpointId) {
                delete cleanId.endpointId;
            }
            delete cleanId.isLocalEndpointId;
            const raw = await __classPrivateFieldGet(this, _wire).sendAction('send-channel-message', {
                ...cleanId,
                providerIdentity: this.providerIdentity,
                action,
                payload
            })
                .catch((reason) => {
                throw new Error(reason.message);
            });
            return raw.payload.data.result;
        };
        this.close = async () => {
            this.messageReceiver.removeEndpoint(this.providerIdentity.channelId, this.endpointId);
            __classPrivateFieldSet(this, _endpointIdentityMap, new Map());
        };
        __classPrivateFieldSet(this, _wire, wire);
    }
    onEndpointDisconnect(endpointId, listener) {
        // Never fires for 'classic'.
    }
    receive(listener) {
        this.messageReceiver.addEndpoint(listener, this.providerIdentity.channelId, this.endpointId);
    }
    async closeEndpoint(endpointId) {
        __classPrivateFieldGet(this, _endpointIdentityMap).delete(endpointId);
    }
    isEndpointConnected(endpointId) {
        return __classPrivateFieldGet(this, _endpointIdentityMap).has(endpointId);
    }
    addEndpoint(endpointId, payload) {
        __classPrivateFieldGet(this, _endpointIdentityMap).set(endpointId, payload.endpointIdentity);
    }
    isValidEndpointPayload(payload) {
        var _a, _b;
        return (typeof ((_a = payload === null || payload === void 0 ? void 0 : payload.endpointIdentity) === null || _a === void 0 ? void 0 : _a.endpointId) === 'string' ||
            typeof ((_b = payload === null || payload === void 0 ? void 0 : payload.endpointIdentity) === null || _b === void 0 ? void 0 : _b.channelId) === 'string');
    }
}
exports.ClassicStrategy = ClassicStrategy;
_wire = new WeakMap(), _endpointIdentityMap = new WeakMap();
// Arbitrarily starting at 5 to leave the door open to backfilling pre endpointId etc.
exports.ClassicInfo = { version: 5, minimumVersion: 0, type: 'classic' };


/***/ }),

/***/ "../../node_modules/@openfin/core/src/api/interappbus/channel/protocols/combined/strategy.js":
/*!***************************************************************************************************!*\
  !*** ../../node_modules/@openfin/core/src/api/interappbus/channel/protocols/combined/strategy.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class CombinedStrategy {
    // eslint-disable-next-line no-useless-constructor
    constructor(primary, secondary) {
        this.primary = primary;
        this.secondary = secondary;
    }
    // Making this a static method because the constructor can't be typed.
    // Otherwise it will error when calling addEndpoint but I'd rather the whole instance be typed as never.
    static combine(a, b) {
        return new CombinedStrategy(a, b);
    }
    onEndpointDisconnect(endpointId, listener) {
        this.primary.onEndpointDisconnect(endpointId, () => {
            if (!this.secondary.isEndpointConnected(endpointId)) {
                listener();
            }
        });
        this.secondary.onEndpointDisconnect(endpointId, () => {
            if (!this.primary.isEndpointConnected(endpointId)) {
                listener();
            }
        });
    }
    isValidEndpointPayload(payload) {
        return this.primary.isValidEndpointPayload(payload) || this.secondary.isValidEndpointPayload(payload);
    }
    async closeEndpoint(endpointId) {
        await this.primary.closeEndpoint(endpointId);
        await this.secondary.closeEndpoint(endpointId);
    }
    isEndpointConnected(endpoint) {
        return this.primary.isEndpointConnected(endpoint) || this.secondary.isEndpointConnected(endpoint);
    }
    async addEndpoint(endpoint, payload) {
        if (this.primary.isValidEndpointPayload(payload)) {
            await this.primary.addEndpoint(endpoint, payload);
        }
        if (this.secondary.isValidEndpointPayload(payload)) {
            await this.secondary.addEndpoint(endpoint, payload);
        }
    }
    receive(listener) {
        this.primary.receive(listener);
        this.secondary.receive(listener);
    }
    send(endpointId, action, payload) {
        if (this.primary.isEndpointConnected(endpointId)) {
            return this.primary.send(endpointId, action, payload);
        }
        return this.secondary.send(endpointId, action, payload);
    }
    async close() {
        await Promise.all([this.primary.close(), this.secondary.close()]);
    }
}
exports["default"] = CombinedStrategy;


/***/ }),

/***/ "../../node_modules/@openfin/core/src/api/interappbus/channel/protocols/protocol-manager.js":
/*!**************************************************************************************************!*\
  !*** ../../node_modules/@openfin/core/src/api/interappbus/channel/protocols/protocol-manager.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ProtocolManager = void 0;
/*
This should be agnostic of any actual openfin code to be unit testable.
Dependencies on the actual srategies should be handled in ConnectionManager
*/
class ProtocolManager {
    // eslint-disable-next-line no-useless-constructor
    constructor(ProtocolsInPreferenceOrder) {
        this.ProtocolsInPreferenceOrder = ProtocolsInPreferenceOrder;
        this.DefaultClientProtocols = ['classic'];
        this.DefaultProviderProtocols = ['classic'];
        this.getClientProtocols = (protocols) => {
            const supported = protocols
                ? this.ProtocolsInPreferenceOrder.filter((x) => protocols.includes(x))
                : this.DefaultClientProtocols;
            if (!supported.length) {
                throw new Error(`No valid protocols were passed in. Accepted values are: ${this.ProtocolsInPreferenceOrder.join(', ')}.`);
            }
            return supported;
        };
        this.getProviderProtocols = (protocols) => {
            const supported = protocols
                ? this.ProtocolsInPreferenceOrder.filter((x) => protocols.includes(x))
                : this.DefaultProviderProtocols;
            if (!supported.length) {
                throw new Error(`No valid protocols were passed in. Accepted values are: ${this.ProtocolsInPreferenceOrder.join(', ')}.`);
            }
            return supported;
        };
        this.getCompatibleProtocols = (providerProtocols, clientOffer) => {
            const supported = clientOffer.supportedProtocols.filter((clientProtocol) => providerProtocols.some((providerProtocol) => {
                var _a;
                return providerProtocol.type === clientProtocol.type &&
                    clientProtocol.version >= providerProtocol.minimumVersion &&
                    providerProtocol.version >= ((_a = clientProtocol.minimumVersion) !== null && _a !== void 0 ? _a : 0);
            }));
            return supported.slice(0, clientOffer.maxProtocols);
        };
    }
}
exports.ProtocolManager = ProtocolManager;


/***/ }),

/***/ "../../node_modules/@openfin/core/src/api/interappbus/channel/protocols/rtc/endpoint.js":
/*!**********************************************************************************************!*\
  !*** ../../node_modules/@openfin/core/src/api/interappbus/channel/protocols/rtc/endpoint.js ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/* eslint-disable @typescript-eslint/no-unused-vars */
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var _processAction, _disconnectListener;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RTCEndpoint = void 0;
const errors_1 = __webpack_require__(/*! ../../../../../util/errors */ "../../node_modules/@openfin/core/src/util/errors.js");
/*
This handles sending RTC messages between RTC connections over the request and response data channels.
*/
class RTCEndpoint {
    constructor(rtc, endpointIdentity) {
        this.rtc = rtc;
        this.endpointIdentity = endpointIdentity;
        this.responseMap = new Map();
        _processAction.set(this, null);
        _disconnectListener.set(this, void 0);
        this.connectionStateChangeHandler = (event) => {
            if (this.rtc.rtcClient.connectionState !== 'connected') {
                this.rtc.rtcClient.removeEventListener('connectionstatechange', this.connectionStateChangeHandler);
                this.close();
                if (__classPrivateFieldGet(this, _disconnectListener)) {
                    __classPrivateFieldGet(this, _disconnectListener).call(this);
                }
            }
        };
        this.send = async (action, payload) => {
            const messageId = `message-${Math.random()}`;
            const promise = new Promise((resolve, reject) => {
                this.responseMap.set(messageId, { resolve, reject });
            });
            this.rtc.channels.request.send(JSON.stringify({ action, payload, messageId }));
            return promise;
        };
        this.close = () => {
            this.responseMap.forEach((response) => response.reject('Connection has closed.'));
            this.responseMap = new Map();
            this.rtc.channels.request.close();
            this.rtc.channels.response.close();
            this.rtc.rtcClient.close();
        };
        this.rtc.channels.response.addEventListener('message', (e) => {
            var _a;
            const { messageId, payload, success, error } = JSON.parse(e.data);
            const { resolve, reject } = (_a = this.responseMap.get(messageId)) !== null && _a !== void 0 ? _a : {};
            if (resolve && reject) {
                this.responseMap.delete(messageId);
                if (success) {
                    resolve(payload);
                }
                else {
                    reject(error);
                }
            }
            else {
                console.log('Could not find id in responseMap.');
                console.log(e);
            }
        });
        this.rtc.channels.request.addEventListener('message', async (e) => {
            const { messageId, action, payload } = JSON.parse(e.data);
            if (__classPrivateFieldGet(this, _processAction)) {
                try {
                    const res = await __classPrivateFieldGet(this, _processAction).call(this, action, payload, endpointIdentity);
                    this.rtc.channels.response.send(JSON.stringify({
                        messageId,
                        payload: res,
                        success: true
                    }));
                }
                catch (error) {
                    // Check if RTCDataChannel is open before sending, error gets swallowed here in the case where
                    // client dispatched then closed or disconnected before the dispatch resolves.
                    if (this.rtc.channels.response.readyState === 'open') {
                        this.rtc.channels.response.send(JSON.stringify({
                            messageId,
                            error: errors_1.errorToPOJO(error),
                            success: false
                        }));
                    }
                }
                // Check if RTCDataChannel is open for same reason as catch block above.
            }
            else if (this.rtc.channels.response.readyState === 'open') {
                this.rtc.channels.response.send(JSON.stringify({
                    messageId,
                    success: false,
                    error: 'Connection not ready.'
                }));
            }
        });
        this.rtc.rtcClient.addEventListener('connectionstatechange', this.connectionStateChangeHandler);
        // Disconnect if data channels close unexpectedly, e.g. can happen due to message size > ~255kB (RTCPeerConnection.sctp.maxMessageSizeLimit: 262144)
        Object.values(this.rtc.channels).forEach((datachannel) => {
            datachannel.onclose = (e) => {
                [...this.responseMap.values()].forEach((promise) => promise.reject(new Error('RTCDataChannel closed unexpectedly, this is most commonly caused by message size. Note: RTC Channels have a message size limit of ~255kB.')));
                this.close();
                if (__classPrivateFieldGet(this, _disconnectListener)) {
                    __classPrivateFieldGet(this, _disconnectListener).call(this);
                }
            };
        });
    }
    onDisconnect(listener) {
        if (!__classPrivateFieldGet(this, _disconnectListener)) {
            __classPrivateFieldSet(this, _disconnectListener, listener);
        }
        else {
            throw new Error('RTCEndpoint disconnectListener cannot be set twice.');
        }
    }
    receive(listener) {
        if (__classPrivateFieldGet(this, _processAction)) {
            throw new Error('You have already set a listener for this RTC Endpoint.');
        }
        __classPrivateFieldSet(this, _processAction, listener);
    }
    get connected() {
        return this.rtc.rtcClient.connectionState === 'connected';
    }
}
exports.RTCEndpoint = RTCEndpoint;
_processAction = new WeakMap(), _disconnectListener = new WeakMap();


/***/ }),

/***/ "../../node_modules/@openfin/core/src/api/interappbus/channel/protocols/rtc/ice-manager.js":
/*!*************************************************************************************************!*\
  !*** ../../node_modules/@openfin/core/src/api/interappbus/channel/protocols/rtc/ice-manager.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/* eslint-disable class-methods-use-this */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RTCICEManager = void 0;
const base_1 = __webpack_require__(/*! ../../../../base */ "../../node_modules/@openfin/core/src/api/base.js");
/*
Singleton that facilitates Offer and Answer exchange required for establishing RTC connections.
*/
class RTCICEManager extends base_1.EmitterBase {
    constructor(wire) {
        super(wire, 'channel');
        this.ensureChannelOpened = (channel) => {
            return new Promise((resolve, reject) => {
                if (channel.readyState === 'open') {
                    resolve();
                }
                else if (channel.readyState === 'connecting') {
                    const listener = () => {
                        channel.removeEventListener('open', listener);
                        resolve();
                    };
                    channel.addEventListener('open', listener);
                }
                else {
                    reject(new Error('This Channel has already closed'));
                }
            });
        };
    }
    static createDataChannelPromise(label, rtcClient) {
        let resolver;
        const promise = new Promise((resolve) => {
            resolver = resolve;
        });
        const listener = (e) => {
            const openListener = () => {
                e.channel.removeEventListener('open', openListener);
                resolver(e.channel);
            };
            if (e.channel.label === label) {
                e.channel.addEventListener('open', openListener);
                rtcClient.removeEventListener('datachannel', listener);
            }
        };
        rtcClient.addEventListener('datachannel', listener);
        return promise;
    }
    async listenForProviderIce(rtcConnectionId, listener) {
        await this.on(this.createProviderEventName(rtcConnectionId), listener, { timestamp: Date.now() });
    }
    async raiseProviderIce(rtcConnectionId, payload) {
        await this.wire.environment.raiseEvent(this.createRouteString(this.createProviderEventName(rtcConnectionId)), payload);
    }
    async listenForClientIce(rtcConnectionId, listener) {
        await this.on(this.createClientEventName(rtcConnectionId), listener, { timestamp: Date.now() });
    }
    async raiseClientIce(rtcConnectionId, payload) {
        await this.wire.environment.raiseEvent(this.createRouteString(this.createClientEventName(rtcConnectionId)), payload);
    }
    cleanupIceListeners(rtcConnectionId) {
        this.removeAllListeners(this.createClientEventName(rtcConnectionId));
        this.removeAllListeners(this.createProviderEventName(rtcConnectionId));
    }
    createClientEventName(rtcConnectionId) {
        return `ice-client-${rtcConnectionId}`;
    }
    createProviderEventName(rtcConnectionId) {
        return `ice-provider-${rtcConnectionId}`;
    }
    createRouteString(name) {
        return `channel/${name}`;
    }
    createRtcPeer() {
        return this.wire.environment.getRtcPeer();
    }
    async startClientOffer() {
        // TODO replace with real guid.
        const rtcConnectionId = Math.random().toString();
        const rtcClient = this.createRtcPeer();
        rtcClient.addEventListener('icecandidate', async (e) => {
            var _a;
            if (e.candidate) {
                await this.raiseClientIce(rtcConnectionId, { candidate: (_a = e.candidate) === null || _a === void 0 ? void 0 : _a.toJSON() });
            }
        });
        await this.listenForProviderIce(rtcConnectionId, async (payload) => {
            await rtcClient.addIceCandidate(payload.candidate);
        });
        const channels = {
            request: rtcClient.createDataChannel('request'),
            response: rtcClient.createDataChannel('response')
        };
        const offer = await rtcClient.createOffer();
        await rtcClient.setLocalDescription(offer);
        const channelsOpened = Promise.all([channels.request, channels.response].map(this.ensureChannelOpened)).then(() => undefined);
        return { rtcClient, channels, offer, rtcConnectionId, channelsOpened };
    }
    async finishClientOffer(rtcClient, answer, providerReady) {
        await rtcClient.setRemoteDescription(answer);
        await providerReady;
        return true;
    }
    async createProviderAnswer(rtcConnectionId, offer) {
        const rtcClient = this.createRtcPeer();
        const requestChannelPromise = RTCICEManager.createDataChannelPromise('request', rtcClient);
        const responseChannelPromise = RTCICEManager.createDataChannelPromise('response', rtcClient);
        rtcClient.addEventListener('icecandidate', async (e) => {
            var _a;
            if (e.candidate) {
                await this.raiseProviderIce(rtcConnectionId, { candidate: (_a = e.candidate) === null || _a === void 0 ? void 0 : _a.toJSON() });
            }
        });
        await this.listenForClientIce(rtcConnectionId, async (payload) => {
            await rtcClient.addIceCandidate(payload.candidate);
        });
        await rtcClient.setRemoteDescription(offer);
        const answer = await rtcClient.createAnswer();
        await rtcClient.setLocalDescription(answer);
        const channels = Promise.all([requestChannelPromise, responseChannelPromise]).then(([request, response]) => {
            // Clean up ice events.
            this.cleanupIceListeners(rtcConnectionId);
            return { request, response };
        });
        return {
            rtcClient,
            answer,
            channels
        };
    }
}
exports.RTCICEManager = RTCICEManager;


/***/ }),

/***/ "../../node_modules/@openfin/core/src/api/interappbus/channel/protocols/rtc/strategy.js":
/*!**********************************************************************************************!*\
  !*** ../../node_modules/@openfin/core/src/api/interappbus/channel/protocols/rtc/strategy.js ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var _processAction, _rtcEndpointMap, _connected;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RTCInfo = exports.RTCStrategy = void 0;
const endpoint_1 = __webpack_require__(/*! ./endpoint */ "../../node_modules/@openfin/core/src/api/interappbus/channel/protocols/rtc/endpoint.js");
/*
This is used to abstract out rtc messaging from the channels implementation using RTCEndpoints.
*/
class RTCStrategy {
    constructor() {
        _processAction.set(this, null);
        _rtcEndpointMap.set(this, new Map());
        _connected.set(this, true);
        this.send = async (endpointId, action, payload) => {
            return this.getEndpointById(endpointId).send(action, payload);
        };
        this.close = async () => {
            if (__classPrivateFieldGet(this, _connected)) {
                __classPrivateFieldGet(this, _rtcEndpointMap).forEach((rtcEndpoint) => rtcEndpoint.close());
                __classPrivateFieldSet(this, _rtcEndpointMap, new Map());
            }
            __classPrivateFieldSet(this, _connected, false);
        };
    }
    onEndpointDisconnect(endpointId, listener) {
        this.getEndpointById(endpointId).onDisconnect(listener);
    }
    receive(listener) {
        if (__classPrivateFieldGet(this, _processAction)) {
            throw new Error('You have already set a listener for this RTC Strategy');
        }
        __classPrivateFieldSet(this, _processAction, listener);
        __classPrivateFieldGet(this, _rtcEndpointMap).forEach((rtcEndpoint) => rtcEndpoint.receive(__classPrivateFieldGet(this, _processAction)));
    }
    getEndpointById(endpointId) {
        const endpoint = __classPrivateFieldGet(this, _rtcEndpointMap).get(endpointId);
        if (!endpoint) {
            throw new Error(`Client with endpoint id ${endpointId} is not connected`);
        }
        return endpoint;
    }
    get connected() {
        return __classPrivateFieldGet(this, _connected);
    }
    isEndpointConnected(endpointId) {
        return __classPrivateFieldGet(this, _rtcEndpointMap).has(endpointId);
    }
    addEndpoint(endpointId, payload) {
        if (!__classPrivateFieldGet(this, _connected)) {
            console.warn('Adding endpoint to disconnected RTC Strategy');
            return;
        }
        const clientStrat = new endpoint_1.RTCEndpoint(payload.rtc, payload.endpointIdentity);
        if (__classPrivateFieldGet(this, _processAction)) {
            clientStrat.receive(__classPrivateFieldGet(this, _processAction));
        }
        __classPrivateFieldGet(this, _rtcEndpointMap).set(endpointId, clientStrat);
    }
    async closeEndpoint(endpointId) {
        __classPrivateFieldGet(this, _rtcEndpointMap).delete(endpointId);
    }
    isValidEndpointPayload(payload) {
        const isObject = (x) => {
            return typeof x === 'object' && x !== null;
        };
        return (isObject(payload) &&
            isObject(payload.endpointIdentity) &&
            isObject(payload.rtc) &&
            typeof payload.endpointIdentity.endpointId === 'string');
    }
}
exports.RTCStrategy = RTCStrategy;
_processAction = new WeakMap(), _rtcEndpointMap = new WeakMap(), _connected = new WeakMap();
exports.RTCInfo = { version: 1, minimumVersion: 0, type: 'rtc' };


/***/ }),

/***/ "../../node_modules/@openfin/core/src/api/interappbus/channel/provider.js":
/*!********************************************************************************!*\
  !*** ../../node_modules/@openfin/core/src/api/interappbus/channel/provider.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChannelProvider = void 0;
const channel_1 = __webpack_require__(/*! ./channel */ "../../node_modules/@openfin/core/src/api/interappbus/channel/channel.js");
const runtimeVersioning_1 = __webpack_require__(/*! ../../../util/runtimeVersioning */ "../../node_modules/@openfin/core/src/util/runtimeVersioning.js");
let ChannelProvider = /** @class */ (() => {
    var _connections, _protectedObj, _strategy, _removeEndpoint, _close;
    class ChannelProvider extends channel_1.ChannelBase {
        constructor(providerIdentity, wire, strategy) {
            super();
            _connections.set(this, void 0);
            _protectedObj.set(this, void 0);
            _strategy.set(this, void 0);
            _removeEndpoint.set(this, (identity) => {
                const remainingConnections = this.connections.filter((clientIdentity) => clientIdentity.endpointId !== identity.endpointId);
                __classPrivateFieldGet(this, _strategy).closeEndpoint(identity.endpointId);
                __classPrivateFieldSet(this, _connections, remainingConnections);
            });
            // Must be bound.
            this.processAction = async (action, payload, senderIdentity) => {
                if (ChannelProvider.clientIsMultiRuntime(senderIdentity) &&
                    !runtimeVersioning_1.runtimeUuidMeetsMinimumRuntimeVersion(senderIdentity.runtimeUuid, '18.87.56.0')) {
                    this.handleMultiRuntimeLegacyClient(senderIdentity);
                }
                else {
                    this.checkForClientConnection(senderIdentity);
                }
                return super.processAction(action, payload, senderIdentity);
            };
            _close.set(this, () => {
                __classPrivateFieldGet(this, _strategy).close();
                const remove = ChannelProvider.removalMap.get(this);
                if (remove) {
                    remove();
                }
            });
            __classPrivateFieldSet(this, _protectedObj, new channel_1.ProtectedItems(providerIdentity, wire));
            this.connectListener = () => undefined;
            this.disconnectListener = () => undefined;
            __classPrivateFieldSet(this, _connections, []);
            __classPrivateFieldSet(this, _strategy, strategy);
            strategy.receive(this.processAction);
        }
        get connections() {
            return [...__classPrivateFieldGet(this, _connections)];
        }
        static handleClientDisconnection(channel, payload) {
            const removeById = channel.connections.find((identity) => identity.endpointId === payload.endpointId);
            if (removeById) {
                __classPrivateFieldGet(channel, _removeEndpoint).call(channel, removeById);
            }
            else {
                const multipleRemoves = channel.connections.filter((identity) => {
                    return identity.uuid === payload.uuid && identity.name === payload.name;
                });
                multipleRemoves.forEach(__classPrivateFieldGet(channel, _removeEndpoint));
            }
            channel.disconnectListener(payload);
        }
        static setProviderRemoval(provider, remove) {
            ChannelProvider.removalMap.set(provider, remove);
        }
        dispatch(to, action, payload) {
            var _a;
            const endpointId = (_a = to.endpointId) !== null && _a !== void 0 ? _a : this.getEndpointIdForOpenFinId(to, action);
            if (endpointId && __classPrivateFieldGet(this, _strategy).isEndpointConnected(endpointId)) {
                return __classPrivateFieldGet(this, _strategy).send(endpointId, action, payload);
            }
            return Promise.reject(new Error(`Client connection with identity uuid: ${to.uuid} / name: ${to.name} / endpointId: ${endpointId} no longer connected.`));
        }
        async processConnection(senderId, payload) {
            __classPrivateFieldGet(this, _connections).push(senderId);
            return this.connectListener(senderId, payload);
        }
        publish(action, payload) {
            return this.connections.map((to) => __classPrivateFieldGet(this, _strategy).send(to.endpointId, action, payload));
        }
        onConnection(listener) {
            this.connectListener = listener;
        }
        onDisconnection(listener) {
            this.disconnectListener = listener;
        }
        async destroy() {
            const protectedObj = __classPrivateFieldGet(this, _protectedObj);
            const { channelName } = protectedObj.providerIdentity;
            __classPrivateFieldSet(this, _connections, []);
            await protectedObj.wire.sendAction('destroy-channel', { channelName });
            __classPrivateFieldGet(this, _close).call(this);
        }
        checkForClientConnection(clientIdentity) {
            if (!this.isClientConnected(clientIdentity)) {
                throw new Error(`This action was sent from a client that is not connected to the provider.
                    Client Identity: {uuid: ${clientIdentity.uuid}, name: ${clientIdentity.name}, endpointId: ${clientIdentity.endpointId}}`);
            }
        }
        isClientConnected(clientIdentity) {
            if (ChannelProvider.clientIdentityIncludesEndpointId(clientIdentity)) {
                return this.connections.some((identity) => {
                    return (
                    // Might be redundant to check for uuid and name here after we get an endpointId match, but just in case
                    identity.endpointId === clientIdentity.endpointId &&
                        identity.uuid === clientIdentity.uuid &&
                        identity.name === clientIdentity.name);
                });
            }
            return this.isLegacyClientConnected(clientIdentity);
        }
        isLegacyClientConnected(clientIdentity) {
            return this.connections.some((identity) => {
                return identity.uuid === clientIdentity.uuid && identity.name === clientIdentity.name;
            });
        }
        handleMultiRuntimeLegacyClient(senderIdentity) {
            if (!this.isLegacyClientConnected(senderIdentity)) {
                throw new Error(`This action was sent from a client that is not connected to the provider. Client Identity:
                    {uuid: ${senderIdentity.uuid}, name: ${senderIdentity.name}, endpointId: ${senderIdentity.endpointId}}`);
            }
        }
        getEndpointIdForOpenFinId(clientIdentity, action) {
            var _a;
            const matchingConnections = this.connections.filter((c) => c.name === clientIdentity.name && c.uuid === clientIdentity.uuid);
            if (matchingConnections.length >= 2) {
                const protectedObj = __classPrivateFieldGet(this, _protectedObj);
                const { uuid, name } = clientIdentity;
                const providerUuid = protectedObj === null || protectedObj === void 0 ? void 0 : protectedObj.providerIdentity.uuid;
                const providerName = protectedObj === null || protectedObj === void 0 ? void 0 : protectedObj.providerIdentity.name;
                // eslint-disable-next-line no-console
                console.warn(`WARNING: Dispatch call may have unintended results. The "to" argument of your dispatch call is missing the
                "endpointId" parameter. The identity you are dispatching to ({uuid: ${uuid}, name: ${name}})
                has multiple channelClients for this channel. Your dispatched action: (${action}) from the provider:
                ({uuid: ${providerUuid}, name: ${providerName}}) will only be processed by the most recently-created client.`);
            }
            // Pop to return the most recently created endpointId.
            return (_a = matchingConnections.pop()) === null || _a === void 0 ? void 0 : _a.endpointId;
        }
        // eslint-disable-next-line class-methods-use-this
        static clientIdentityIncludesEndpointId(subscriptionIdentity) {
            return subscriptionIdentity.endpointId !== undefined;
        }
        // eslint-disable-next-line class-methods-use-this
        static clientIsMultiRuntime(subscriptionIdentity) {
            return subscriptionIdentity.runtimeUuid !== undefined;
        }
    }
    _connections = new WeakMap(), _protectedObj = new WeakMap(), _strategy = new WeakMap(), _removeEndpoint = new WeakMap(), _close = new WeakMap();
    // The following line should be changed following a typescript update.
    // static #removalMap = new WeakMap<ChannelProvider, Function>();
    ChannelProvider.removalMap = new WeakMap();
    return ChannelProvider;
})();
exports.ChannelProvider = ChannelProvider;


/***/ }),

/***/ "../../node_modules/@openfin/core/src/api/interappbus/index.js":
/*!*********************************************************************!*\
  !*** ../../node_modules/@openfin/core/src/api/interappbus/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InterAppPayload = void 0;
const events_1 = __webpack_require__(/*! events */ "../../node_modules/events/events.js");
const base_1 = __webpack_require__(/*! ../base */ "../../node_modules/@openfin/core/src/api/base.js");
const ref_counter_1 = __webpack_require__(/*! ../../util/ref-counter */ "../../node_modules/@openfin/core/src/util/ref-counter.js");
const index_1 = __webpack_require__(/*! ./channel/index */ "../../node_modules/@openfin/core/src/api/interappbus/channel/index.js");
const validate_1 = __webpack_require__(/*! ../../util/validate */ "../../node_modules/@openfin/core/src/util/validate.js");
/**
 * A messaging bus that allows for pub/sub messaging between different applications.
 * @namespace
 */
class InterApplicationBus extends base_1.Base {
    constructor(wire) {
        super(wire);
        this.events = {
            subscriberAdded: 'subscriber-added',
            subscriberRemoved: 'subscriber-removed'
        };
        this.refCounter = new ref_counter_1.default();
        this.Channel = new index_1.Channel(wire);
        this.emitter = new events_1.EventEmitter();
        wire.registerMessageHandler(this.onmessage.bind(this));
        this.on = this.emitter.on.bind(this.emitter);
        this.removeAllListeners = this.emitter.removeAllListeners.bind(this.emitter);
    }
    /**
     * Publishes a message to all applications running on OpenFin Runtime that
     * are subscribed to the specified topic.
     * @param { string } topic The topic on which the message is sent
     * @param { any } message The message to be published. Can be either a primitive
     * data type (string, number, or boolean) or composite data type (object, array)
     * that is composed of other primitive or composite data types
     * @return {Promise.<void>}
     * @tutorial InterApplicationBus.publish
     */
    publish(topic, message) {
        return this.wire
            .sendAction('publish-message', {
            topic,
            message,
            sourceWindowName: this.me.name
        })
            .then(() => undefined);
    }
    /**
     * Sends a message to a specific application on a specific topic.
     * @param { Identity } destination The identity of the application to which the message is sent
     * @param { string } topic The topic on which the message is sent
     * @param { any } message The message to be sent. Can be either a primitive data
     * type (string, number, or boolean) or composite data type (object, array) that
     * is composed of other primitive or composite data types
     * @return {Promise.<void>}
     * @tutorial InterApplicationBus.send
     */
    async send(destination, topic, message) {
        const errorMsg = validate_1.validateIdentity(destination);
        if (errorMsg) {
            throw new Error(errorMsg);
        }
        await this.wire.sendAction('send-message', {
            destinationUuid: destination.uuid,
            destinationWindowName: destination.name,
            topic,
            message,
            sourceWindowName: this.me.name
        });
    }
    /**
     * Subscribes to messages from the specified application on the specified topic.
     * @param { Identity } source This object is described in the Identity in the typedef
     * @param { string } topic The topic on which the message is sent
     * @param { function } listener A function that is called when a message has
     * been received. It is passed the message, uuid and name of the sending application.
     * The message can be either a primitive data type (string, number, or boolean) or
     * composite data type (object, array) that is composed of other primitive or composite
     * data types
     * @return {Promise.<void>}
     * @tutorial InterApplicationBus.subscribe
     */
    subscribe(source, topic, listener) {
        const subKey = this.createSubscriptionKey(source.uuid, source.name || '*', topic);
        const sendSubscription = () => {
            return this.wire.sendAction('subscribe', {
                sourceUuid: source.uuid,
                sourceWindowName: source.name || '*',
                topic,
                destinationWindowName: this.me.name
            });
        };
        const alreadySubscribed = () => {
            return Promise.resolve();
        };
        this.emitter.on(subKey, listener);
        return this.refCounter.actOnFirst(subKey, sendSubscription, alreadySubscribed);
    }
    /**
     * Unsubscribes to messages from the specified application on the specified topic.
     * @param { Identity } source This object is described in the Identity in the typedef
     * @param { string } topic The topic on which the message is sent
     * @param { function } listener A callback previously registered with subscribe()
     * @return {Promise.<void>}
     * @tutorial InterApplicationBus.unsubscribe
     */
    unsubscribe(source, topic, listener) {
        const sourceWindowName = source.name || '*';
        const subKey = this.createSubscriptionKey(source.uuid, sourceWindowName, topic);
        const sendUnsubscription = () => {
            return this.wire.sendAction('unsubscribe', {
                sourceUuid: source.uuid,
                sourceWindowName,
                topic,
                destinationWindowName: this.me.name
            });
        };
        const dontSendUnsubscription = () => {
            return new Promise((r) => r).then(() => undefined);
        };
        this.emitter.removeListener(subKey, listener);
        return this.refCounter.actOnLast(subKey, sendUnsubscription, dontSendUnsubscription);
    }
    processMessage(message) {
        const { payload: { message: payloadMessage, sourceWindowName, sourceUuid, topic } } = message;
        const keys = [
            this.createSubscriptionKey(sourceUuid, sourceWindowName, topic),
            this.createSubscriptionKey(sourceUuid, '*', topic),
            this.createSubscriptionKey('*', '*', topic)
        ];
        const idOfSender = { uuid: sourceUuid, name: sourceWindowName };
        keys.forEach((key) => {
            this.emitter.emit(key, payloadMessage, idOfSender);
        });
    }
    emitSubscriverEvent(type, message) {
        const { payload: { targetName: name, uuid, topic } } = message;
        const payload = { name, uuid, topic };
        this.emitter.emit(type, payload);
    }
    // eslint-disable-next-line class-methods-use-this
    createSubscriptionKey(uuid, name, topic) {
        const n = name || '*';
        if (!(uuid && n && topic)) {
            throw new Error('Missing uuid, name, or topic string');
        }
        return createKey(uuid, n, topic);
    }
    onmessage(message) {
        const { action } = message;
        switch (action) {
            case 'process-message':
                this.processMessage(message);
                break;
            case this.events.subscriberAdded:
                this.emitSubscriverEvent(this.events.subscriberAdded, message);
                break;
            case this.events.subscriberRemoved:
                this.emitSubscriverEvent(this.events.subscriberRemoved, message);
                break;
            default:
                break;
        }
        return true;
    }
}
exports["default"] = InterApplicationBus;
class InterAppPayload {
}
exports.InterAppPayload = InterAppPayload;
function createKey(...toHash) {
    return toHash
        .map((item) => {
        return Buffer.from(`${item}`).toString('base64');
    })
        .join('/');
}


/***/ }),

/***/ "../../node_modules/@openfin/core/src/api/interop/Factory.js":
/*!*******************************************************************!*\
  !*** ../../node_modules/@openfin/core/src/api/interop/Factory.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const base_1 = __webpack_require__(/*! ../base */ "../../node_modules/@openfin/core/src/api/base.js");
const InteropBroker_1 = __webpack_require__(/*! ./InteropBroker */ "../../node_modules/@openfin/core/src/api/interop/InteropBroker.js");
const InteropClient_1 = __webpack_require__(/*! ./InteropClient */ "../../node_modules/@openfin/core/src/api/interop/InteropClient.js");
const defaultOverride = (Class, ...args) => new Class(...args);
/**
 * @typedef { object } InteropConfig
 * @summary Information relevant to the Interop Broker.
 * @property {string} [currentContextGroup] Context Group for the client. (green, yellow, red, etc.)
 * @property {string} [providerId] When provided, automatically connects the client to the specified provider uuid
 */
/**
 * Manages creation of Interop Brokers and Interop Clients. These APIs are called under-the-hood in Platforms.
 * @namespace
 * @alias Interop
 */
class InteropModule extends base_1.Base {
    /**
     * Initializes an Interop Broker. This is called under-the-hood for Platforms.
     * @param { string } name - Name of the Interop Broker.
     * @param { OverrideCallback<InteropBroker> } [override] - A callback function that can be used to extend or replace default Interop Broker behavior.
     * @return {Promise.<InteropBroker>}
     * @tutorial Interop.init
     * @experimental
     * @static
     */
    async init(name, override = defaultOverride) {
        this.wire.sendAction('interop-init').catch((e) => {
            // don't expose, analytics-only call
        });
        const provider = await this.fin.InterApplicationBus.Channel.create(`interop-broker-${name}`);
        // Allows for manifest-level configuration, without having to override. (e.g. specifying custom context groups)
        const options = await this.fin.Application.getCurrentSync().getInfo();
        return override(InteropBroker_1.InteropBroker, this.wire, provider, options.initialOptions.interopBrokerConfiguration || {});
    }
    /**
     * Connects a client to an Interop broker. This is called under-the-hood for Views in a Platform.
     * @param { string } name - The name of the Interop Broker to connect to. For Platforms, this will default to the uuid of the Platform.
     * @param { InteropConfig } [interopConfig] - Information relevant to the Interop Broker. Typically a declaration of
     * what context(s) the entity wants to subscribe to, and the current Context Group of the entity.
     * @return {InteropClient}
     * @tutorial Interop.connectSync
     * @experimental
     * @static
     */
    connectSync(name, interopConfig) {
        this.wire.sendAction('interop-connect-sync').catch((e) => {
            // don't expose, analytics-only call
        });
        return new InteropClient_1.InteropClient(this.wire, name, interopConfig);
    }
}
exports["default"] = InteropModule;


/***/ }),

/***/ "../../node_modules/@openfin/core/src/api/interop/InteropBroker.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/@openfin/core/src/api/interop/InteropBroker.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InteropBroker = void 0;
const base_1 = __webpack_require__(/*! ../base */ "../../node_modules/@openfin/core/src/api/base.js");
const SessionContextGroupBroker_1 = __webpack_require__(/*! ./SessionContextGroupBroker */ "../../node_modules/@openfin/core/src/api/interop/SessionContextGroupBroker.js");
const utils_1 = __webpack_require__(/*! ./utils */ "../../node_modules/@openfin/core/src/api/interop/utils.js");
let contextGroups = [
    {
        id: 'green',
        displayMetadata: {
            color: '#00CC88',
            name: 'green'
        }
    },
    {
        id: 'purple',
        displayMetadata: {
            color: '#8C61FF',
            name: 'purple'
        }
    },
    {
        id: 'orange',
        displayMetadata: {
            color: '#FF8C4C',
            name: 'orange'
        }
    },
    {
        id: 'red',
        displayMetadata: {
            color: '#FF5E60',
            name: 'red'
        }
    },
    {
        id: 'pink',
        displayMetadata: {
            color: '#FF8FB8',
            name: 'pink'
        }
    },
    {
        id: 'yellow',
        displayMetadata: {
            color: '#E9FF8F',
            name: 'yellow'
        }
    }
];
/**
 * {@link https://developers.openfin.co/of-docs/docs/enable-color-linking **THE INTEROP API IS EXPERIMENTAL. IF YOU WOULD LIKE TO USE IT, PLEASE USE OUR DEFAULT IMPLEMENTATION IN BROWSER**}
 *
 * The Interop Broker is responsible for keeping track of the Interop state of the Platform, and for directing messages to the proper locations.
 *
 * ---
 *
 * There are 2 ways to inject custom functionality into the Interop Broker:
 *
 * **1. Configuration**
 *
 * At the moment, you can configure the default context groups for the Interop Broker without having to override it. To do so, include the `interopBrokerConfiguration` `contextGroups` option in your `platform` options in your manifest. This is the preferred method.
 * ```js
 * {
 *      "runtime": {
 *          "arguments": "--v=1 --inspect",
 *          "version": "alpha-v19"
 *      },
 *      "platform": {
 *          "uuid": "platform_customization_local",
 *          "applicationIcon": "https://openfin.github.io/golden-prototype/favicon.ico",
 *          "autoShow": false,
 *          "providerUrl": "http://localhost:5555/provider.html",
 *          "interopBrokerConfiguration": {
 *              "contextGroups": [
 *                  {
 *                      "id": "green",
 *                      "displayMetadata": {
 *                          "color": "#00CC88",
 *                          "name": "green"
 *                      }
 *                  },
 *                  {
 *                      "id": "purple",
 *                      "displayMetadata": {
 *                          "color": "#8C61FF",
 *                          "name": "purple"
 *                      }
 *                  },
 *              ]
 *          }
 *      }
 * }
 * ```
 *
 * ---
 * **2. Overriding**
 *
 * Similarly to how [Platform Overriding]{@link https://developers.openfin.co/docs/platform-customization#section-customizing-platform-behavior} works, you can override functions in the Interop Broker in `fin.Platform.init`. An example of that is shown below. Overriding `isConnectionAuthorized` and `isActionAuthorized` will allow you to control allowed connections and allowed actions.
 *
 * However, if there is custom functionality you wish to include in the Interop Broker, please let us know. We would like to provide better configuration options so that you don't have to continually maintain your own override code.
 *
 * ```js
 * fin.Platform.init({
 *     overrideCallback: async (Provider) => {
 *         class Override extends Provider {
 *             async getSnapshot() {
 *                 console.log('before getSnapshot')
 *                 const snapshot = await super.getSnapshot();
 *                 console.log('after getSnapshot')
 *                 return snapshot;
 *             }
 *
 *             async applySnapshot({ snapshot, options }) {
 *                 console.log('before applySnapshot')
 *                 const originalPromise = super.applySnapshot({ snapshot, options });
 *                 console.log('after applySnapshot')
 *
 *                 return originalPromise;
 *             }
 *         };
 *         return new Override();
 *     },
 *     interopOverride: async (InteropBroker, provider, options, ...args) => {
 *         class Override extends InteropBroker {
 *             async joinContextGroup(channelName = 'default', target) {
 *                 console.log('before super joinContextGroup')
 *                 super.joinContextGroup(channelName, target);
 *                 console.log('after super joinContextGroup')
 *             }
 *         }
 *
 *         options.contextGroups = [
 *             {
 *                 id: 'green',
 *                 displayMetadata: {
 *                     color: '#00CC88',
 *                     name: 'green'
 *                 }
 *             },
 *             {
 *                 id: 'purple',
 *                 displayMetadata: {
 *                     color: '#8C61FF',
 *                     name: 'purple'
 *                 }
 *             },
 *             {
 *                 id: 'orange',
 *                 displayMetadata: {
 *                     color: '#FF8C4C',
 *                     name: 'orange'
 *                 }
 *             },
 *             {
 *                 id: 'red',
 *                 displayMetadata: {
 *                     color: '#FF5E60',
 *                     name: 'red'
 *                 }
 *             }
 *         ];
 *       return new Override(provider, options, ...args);
 *   }
 * });
 * ```
 *
 * ---
 *
 * @hideconstructor
 * @class
 */
class InteropBroker extends base_1.Base {
    constructor(wire, channel, options) {
        super(wire);
        this.channel = channel;
        this.interopClients = new Map();
        this.contextGroupsById = new Map();
        if (options.contextGroups) {
            contextGroups = options.contextGroups;
        }
        this.intentClientMap = new Map();
        this.lastContextMap = new Map();
        this.sessionContextGroupMap = new Map();
        this.setContextGroupMap();
        this.wireChannel(channel);
    }
    /*
    Client API
    */
    /**
     * SetContextOptions interface
     * @typedef { object } SetContextOptions
     * @property { Context } {context} - New context to set.
     */
    /**
     * GetContextOptions interface
     * @typedef { object } GetContextOptions
     * @property { string } [contextType] - Context Type
     */
    /**
     * JoinContextGroupOptions interface
     * @typedef { object } JoinContextGroupOptions
     * @property { string } contextGroupId - Id of the context group.
     * @property { Identity | ClientIdentity } [target] - Identity of the entity you wish to join to a context group.
     */
    /**
     * AddClientToContextGroupOptions interface
     * @typedef { object } AddClientToContextGroupOptions
     * @property { string } contextGroupId - Name of the context group.
     */
    /**
     * RemoveFromContextGroupOptions interface
     * @typedef { object } RemoveFromContextGroupOptions
     * @property { Identity | ClientIdentity } target - Identity of the entity you wish to join to a context group.
     */
    /**
     * GetInfoForContextGroupOptions interface
     * @typedef { object } GetInfoForContextGroupOptions
     * @property { string } contextGroupId - Name of the context group to get info for.
     */
    /**
     * GetAllClientsInContextGroupOptions interface
     * @typedef { object } GetAllClientsInContextGroupOptions
     * @property { string } contextGroupId - Name of the context group to get info for.
     */
    /**
     * InfoForIntentOptions interface
     * @typedef { object } InfoForIntentOptions
     * @property { string } name Name of the intent to get info for.
     * @property { Context } [context] Optional context.
     */
    /**
     * Sets a context for the context group of the incoming current entity.
     * @param { SetContextOptions } setContextOptions - New context to set.
     * @param { ClientIdentity } clientIdentity - Identity of the client sender.
     * @return { void }
     * @experimental
     */
    setContext({ context }, clientIdentity) {
        this.wire.sendAction('interop-broker-set-context').catch((e) => {
            // don't expose, analytics-only call
        });
        const clientState = this.getClientState(clientIdentity);
        if (clientState && clientState.contextGroupId) {
            const { contextGroupId } = clientState;
            if (!this.contextGroupsById.has(contextGroupId)) {
                // Theoretically not possible.
                throw new Error(`Client has a context group that isn't in the context group mapping: ${contextGroupId}.`);
            }
            const contextIntegrityCheckResult = InteropBroker.checkContextIntegrity(context);
            if (contextIntegrityCheckResult.isValid === false) {
                throw new Error(`Failed to set Context - bad Context. Reason: ${contextIntegrityCheckResult.reason}. Context: ${JSON.stringify(context)}`);
            }
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            const contextGroupState = this.contextGroupsById.get(contextGroupId);
            const broadcastedContextType = context.type;
            contextGroupState.set(broadcastedContextType, context);
            this.lastContextMap.set(contextGroupId, broadcastedContextType);
            const clientsInSameContextGroup = Array.from(this.interopClients.values()).filter((connectedClient) => connectedClient.contextGroupId === contextGroupId);
            clientsInSameContextGroup.forEach((client) => {
                for (const [, handlerInfo] of client.contextHandlers) {
                    if (InteropBroker.isContextTypeCompatible(broadcastedContextType, handlerInfo.contextType)) {
                        this.invokeContextHandler(client.clientIdentity, handlerInfo.handlerId, context);
                    }
                }
            });
        }
        else if (clientState) {
            // Client has not joined any context group behavior.
            throw new Error('You must join a context group before you can set context.');
        }
        else {
            // This shouldn't get hit.
            throw new Error(`Client with Identity: ${clientIdentity.uuid} ${clientIdentity.name} not in Client State Map`);
        }
    }
    /**
     * Get current context for a client subscribed to a Context Group.
     * @param { GetContextOptions } getContextOptions - Options for getting context
     * @param { ClientIdentity } clientIdentity - Identity of the client sender.
     * @return { Context }
     */
    getCurrentContext(getCurrentContextOptions, clientIdentity) {
        var _a;
        this.wire.sendAction('interop-broker-get-current-context').catch((e) => {
            // don't expose, analytics-only call
        });
        const clientState = this.getClientState(clientIdentity);
        if (!(clientState === null || clientState === void 0 ? void 0 : clientState.contextGroupId)) {
            throw new Error('You must be a member of a context group to call getCurrentContext');
        }
        const { contextGroupId } = clientState;
        const contextGroupState = this.contextGroupsById.get(contextGroupId);
        const lastContextType = this.lastContextMap.get(contextGroupId);
        const contextType = (_a = getCurrentContextOptions === null || getCurrentContextOptions === void 0 ? void 0 : getCurrentContextOptions.contextType) !== null && _a !== void 0 ? _a : lastContextType;
        return contextGroupState && contextType ? contextGroupState.get(contextType) : undefined;
    }
    /*
    Platform Window APIs
    */
    // joinContextGroup and addClientToContextGroup are separate functions here, for easier overrides and separation of concerns.
    // joinContextGroup checks all connections for matching identities, in case we have multiple connection from an entity.
    /**
     * Join all connections at the given identity (or just one if endpointId provided) to context group `contextGroupId`.
     * If no target is specified, it adds the sender to the context group.
     * joinContextGroup is responsible for checking connections at the incoming identity. It calls {@link InteropBroker#addClientToContextGroup InteropBroker.addClientToContextGroup} to actually group the client.
     * Used by Platform Windows.
     * @return { Promise<void> }
     * @param { JoinContextGroupOptions } joinContextGroupOptions - Id of the Context Group and identity of the entity to join to the group.
     * @param { ClientIdentity } senderIdentity - Identity of the client sender.
     * @experimental
     */
    async joinContextGroup({ contextGroupId, target }, senderIdentity) {
        this.wire.sendAction('interop-broker-join-context-group').catch((e) => {
            // don't expose, analytics-only call
        });
        if (target) {
            // If an endpointId is provided, use that. This will likely be used by external adapters.
            if (InteropBroker.hasEndpointId(target)) {
                await this.addClientToContextGroup({ contextGroupId }, target);
            }
            // Sanity check here in case a single app has multiple connections
            const allConnections = this.channel.connections.filter((x) => x.uuid === target.uuid && x.name === target.name);
            if (!allConnections.length) {
                throw new Error(`Given Identity ${target.uuid} ${target.name} is not connected to the Interop Broker.`);
            }
            if (allConnections.length > 1) {
                // Should figure out how we want to handle this situation. In the meantime, just change context group for all connections.
                console.warn(`More than one connection found for identity ${target.uuid} ${target.name}`);
            }
            const promises = [];
            for (const connection of allConnections) {
                promises.push(this.addClientToContextGroup({ contextGroupId }, connection));
            }
            await Promise.all(promises);
        }
        else {
            // No target provided, add the sender to the context group.
            await this.addClientToContextGroup({ contextGroupId }, senderIdentity);
        }
    }
    // addClientToContextGroup does the actual addition of the client to the Context Group
    /**
     * Helper function for {@link InteropBroker#joinContextGroup InteropBroker.joinContextGroup}. Does the work of actually adding the client to the Context Group.
     * Used by Platform Windows.
     * @return { Promise<void> }
     * @param { AddClientToContextGroupOptions } addClientToContextGroupOptions - Contains the contextGroupId
     * @param { ClientIdentity } clientIdentity - Identity of the client sender.
     * @experimental
     */
    async addClientToContextGroup({ contextGroupId }, clientIdentity) {
        this.wire.sendAction('interop-broker-add-client-to-context-group').catch((e) => {
            // don't expose, analytics-only call
        });
        const clientSubscriptionState = this.getClientState(clientIdentity);
        if (!clientSubscriptionState) {
            throw new Error(`Client with Identity: ${clientIdentity.uuid} ${clientIdentity.name} not in Client State Map`);
        }
        if (!this.getContextGroups().find((contextGroupInfo) => contextGroupInfo.id === contextGroupId)) {
            throw new Error(`Attempting to join a context group that does not exist: ${contextGroupId}. You may only join existing context groups.`);
        }
        const oldContextGroupId = clientSubscriptionState.contextGroupId;
        if (oldContextGroupId !== contextGroupId) {
            clientSubscriptionState.contextGroupId = contextGroupId;
            await InteropBroker.setCurrentContextGroupInClientOptions(clientIdentity, contextGroupId);
            const contextGroupMap = this.contextGroupsById.get(contextGroupId);
            for (const [, handlerInfo] of clientSubscriptionState.contextHandlers) {
                const { contextType, handlerId } = handlerInfo;
                if (contextType === undefined) {
                    // Send this single handler all of the context, because it accepts all.
                    contextGroupMap.forEach((context, _) => {
                        this.invokeContextHandler(clientIdentity, handlerId, context);
                    });
                }
                else if (contextGroupMap.has(contextType)) {
                    const contextForType = contextGroupMap.get(contextType);
                    if (contextForType) {
                        this.invokeContextHandler(clientIdentity, handlerId, contextForType);
                    }
                }
            }
        }
    }
    // Removes the target from its context group. Similar structure to joinContextGroup.
    /**
     * Removes the specified target from a context group.
     * If no target is specified, it removes the sender from their context group.
     * removeFromContextGroup is responsible for checking connections at the incoming identity. It calls {@link InteropBroker#removeClientFromContextGroup InteropBroker.removeClientFromContextGroup} to actually ungroup the client.
     * Used by Platform Windows.
     * @return { Promise<void> }
     * @param { RemoveFromContextGroupOptions } removeFromContextGroupOptions - Contains the target identity to remove.
     * @param { ClientIdentity } senderIdentity - Identity of the client sender.
     * @experimental
     */
    async removeFromContextGroup({ target }, senderIdentity) {
        this.wire.sendAction('interop-broker-remove-from-context-group').catch((e) => {
            // don't expose, analytics-only call
        });
        if (target) {
            // If an endpointId is provided, use that. This will likely be used by external adapters.
            if (InteropBroker.hasEndpointId(target)) {
                await this.removeClientFromContextGroup(target);
            }
            // Sanity check here in case a single app has multiple connections
            const allConnections = this.channel.connections.filter((x) => x.uuid === target.uuid && x.name === target.name);
            if (!allConnections.length) {
                throw new Error(`No connection found for given Identity ${target.uuid} ${target.name}`);
            }
            if (allConnections.length > 1) {
                console.warn(`More than one connection found for identity ${target.uuid} ${target.name}`);
            }
            const promises = [];
            for (const connection of allConnections) {
                promises.push(this.removeClientFromContextGroup(connection));
            }
            await Promise.all(promises);
        }
        else {
            // No target provided, remove the sender from the context group.
            await this.removeClientFromContextGroup(senderIdentity);
        }
    }
    // removeClientFromContextGroup does the actual remove of the client from the Context Group
    /**
     * Helper function for {@link InteropBroker#removeFromContextGroup InteropBroker.removeFromContextGroup}. Does the work of actually removing the client from the Context Group.
     * Used by Platform Windows.
     * @return { Promise<void> }
     * @property { ClientIdentity } clientIdentity - Identity of the client sender.
     * @experimental
     */
    async removeClientFromContextGroup(clientIdentity) {
        this.wire.sendAction('interop-broker-remove-client-from-context-group').catch((e) => {
            // don't expose, analytics-only call
        });
        const clientState = this.getClientState(clientIdentity);
        if (clientState) {
            clientState.contextGroupId = undefined;
        }
        await InteropBroker.setCurrentContextGroupInClientOptions(clientIdentity, null);
    }
    // Used by platform windows to know what client groups the provider has declared. Also used internally to access context groups. Overrideable so that the platform developer can modify it.
    /**
     * Returns the Interop-Broker-defined context groups available for an entity to join. Because this function is used in the rest of the Interop Broker to fetch the Context Groups, overriding this allows you to customize the Context Groups for the Interop Broker. However, we recommend customizing the context groups through configuration instead.
     * Used by Platform Windows.
     * @return { Promise<ContextGroupInfo[]>}
     * @experimental
     */
    // eslint-disable-next-line class-methods-use-this
    getContextGroups() {
        this.wire.sendAction('interop-broker-get-context-groups').catch((e) => {
            // don't expose, analytics-only call
        });
        // Create copy for immutability
        return contextGroups.map((contextGroup) => {
            return { ...contextGroup };
        });
    }
    // Used to by platform windows to get display metadata for a context group.
    /**
     * Gets display info for a context group
     * Used by Platform Windows.
     * @param { GetInfoForContextGroupOptions } getInfoForContextGroupOptions - Contains contextGroupId, the context group you wish to get display info for.
     * @return { Promise<ContextGroupInfo>}
     * @experimental
     */
    getInfoForContextGroup({ contextGroupId }) {
        this.wire.sendAction('interop-broker-get-info-for-context-group').catch((e) => {
            // don't expose, analytics-only call
        });
        return this.getContextGroups().find((contextGroup) => contextGroup.id === contextGroupId);
    }
    // Used by platform windows to get all clients for a context group.
    /**
     * Gets all clients for a context group.
     * Used by Platform Windows.
     * @param { GetAllClientsInContextGroupOptions } getAllClientsInContextGroupOptions - Contains contextGroupId, the context group you wish to get clients for.
     * @return { Promise<ClientIdentity[]>}
     * @experimental
     */
    getAllClientsInContextGroup({ contextGroupId }) {
        this.wire.sendAction('interop-broker-get-all-clients-in-context-group').catch((e) => {
            // don't expose, analytics-only call
        });
        const clientsInContextGroup = Array.from(this.interopClients.values())
            .filter((connectedClient) => connectedClient.contextGroupId === contextGroupId)
            .map((subscriptionState) => {
            return subscriptionState.clientIdentity;
        });
        return clientsInContextGroup;
    }
    /**
     * Responsible for launching of applications that can handle a given intent, and delegation of intents to those applications.
     * Must be overridden.
     * @param { Intent } intent The combination of an action and a context that is passed to an application for resolution.
     * @param { ClientIdentity }  clientIdentity Identity of the Client making the request.
     * @return { Promise<unknown> }
     * @tutorial interop.handleFiredIntent
     * @experimental
     */
    // eslint-disable-next-line class-methods-use-this
    async handleFiredIntent(intent, clientIdentity) {
        const warning = utils_1.generateOverrideWarning('interopClient.fireIntent', 'fdc3.raiseIntent', 'InteropBroker.handleFiredIntent', clientIdentity);
        console.warn(warning);
        throw new Error(utils_1.BROKER_ERRORS.fireIntent);
    }
    /**
     * Should be called in {@link InteropBroker#handleFiredIntent InteropBroker.handleFiredIntent}.
     * While handleFiredIntent is responsible for launching applications, setIntentTarget is used to tell the InteropBroker which application should receive the intent when it is ready.
     * @param { Intent } intent The combination of an action and a context that is passed to an application for resolution.
     * @param { Identity } target - Identity of the target that will handle the intent.
     * @return { Promise<void> }
     * @experimental
     */
    async setIntentTarget(intent, target) {
        this.wire.sendAction('interop-broker-set-intent-target').catch((e) => {
            // don't expose, this is only for api analytics purposes
        });
        const targetInfo = this.intentClientMap.get(target.name);
        const handlerId = `intent-handler-${intent.name}`;
        if (!targetInfo) {
            this.intentClientMap.set(target.name, new Map());
            const newHandlerInfoMap = this.intentClientMap.get(target.name);
            if (newHandlerInfoMap) {
                newHandlerInfoMap.set(handlerId, { isReady: false, pendingIntents: [intent] });
            }
        }
        else {
            const handlerInfo = targetInfo.get(handlerId);
            if (!handlerInfo) {
                targetInfo.set(handlerId, { isReady: false, pendingIntents: [intent] });
            }
            else {
                handlerInfo.pendingIntents.push(intent);
                if (handlerInfo.clientIdentity && handlerInfo.isReady) {
                    const { clientIdentity, pendingIntents } = handlerInfo;
                    try {
                        const intentToSend = pendingIntents[pendingIntents.length - 1];
                        await this.channel.dispatch(clientIdentity, handlerId, intentToSend);
                        handlerInfo.pendingIntents = [];
                    }
                    catch (error) {
                        console.error(`Error invoking intent handler for client ${clientIdentity.uuid}/${clientIdentity.name}/${clientIdentity.endpointId}`);
                        handlerInfo.isReady = false;
                    }
                }
            }
        }
    }
    /**
     * Responsible for returning information on a particular Intent.
     * Must be overridden.
     * @param { InfoForIntentOptions } options
     * @param { ClientIdentity }  clientIdentity Identity of the Client making the request.
     * @return { Promise<unknown> }
     * @tutorial interop.handleInfoForIntent
     * @experimental
     */
    // eslint-disable-next-line class-methods-use-this
    async handleInfoForIntent(options, clientIdentity) {
        const warning = utils_1.generateOverrideWarning('interopClient.getInfoForIntent', 'fdc3.findIntent', 'InteropBroker.handleInfoForIntent', clientIdentity);
        console.warn(warning);
        throw new Error(utils_1.BROKER_ERRORS.getInfoForIntent);
    }
    /**
     * Responsible for returning information on which Intents are meant to handle a specific Context.
     * Must be overridden.
     * @param { Context } context Data passed between entities and applications.
     * @param { ClientIdentity } clientIdentity Identity of the Client making the request.
     * @return { Promise<unknown> }
     * @tutorial interop.handleInfoForIntentsByContext
     * @experimental
     */
    // eslint-disable-next-line class-methods-use-this
    async handleInfoForIntentsByContext(context, clientIdentity) {
        const warning = utils_1.generateOverrideWarning('interopClient.getInfoForIntentsByContext', 'fdc3.findIntentsByContext', 'InteropBroker.handleInfoForIntentsByContext', clientIdentity);
        console.warn(warning);
        throw new Error(utils_1.BROKER_ERRORS.getInfoForIntentsByContext);
    }
    /**
     * Responsible for resolving an Intent based on a specific Context.
     * Must be overridden.
     * @param { ContextForIntent } contextForIntent Data passed between entities and applications.
     * @param { ClientIdentity }  clientIdentity Identity of the Client making the request.
     * @return { Promise<unknown> }
     * @tutorial interop.handleFiredIntentForContext
     * @experimental
     */
    // eslint-disable-next-line class-methods-use-this
    async handleFiredIntentForContext(contextForIntent, clientIdentity) {
        const warning = utils_1.generateOverrideWarning('interopClient.fireIntentForContext', 'fdc3.raiseIntentForContext', 'InteropBroker.handleFiredIntentForContext', clientIdentity);
        console.warn(warning);
        throw new Error(utils_1.BROKER_ERRORS.fireIntentForContext);
    }
    /*
    Snapshot APIs
    */
    // Used to save interop broker state in snapshots
    decorateSnapshot(snapshot) {
        return { ...snapshot, interopSnapshotDetails: { contextGroupStates: this.getContextGroupStates() } };
    }
    // Used to restore interop broker state in snapshots.
    applySnapshot(snapshot, options) {
        var _a;
        const contextGroupStates = (_a = snapshot === null || snapshot === void 0 ? void 0 : snapshot.interopSnapshotDetails) === null || _a === void 0 ? void 0 : _a.contextGroupStates;
        if (contextGroupStates) {
            if (!(options === null || options === void 0 ? void 0 : options.closeExistingWindows)) {
                this.updateExistingClients(contextGroupStates);
            }
            this.rehydrateContextGroupStates(contextGroupStates);
        }
    }
    updateExistingClients(contextGroupStates) {
        const clients = this.interopClients;
        clients.forEach((subState) => {
            const { clientIdentity, contextGroupId, contextHandlers } = subState;
            if (contextGroupId) {
                const groupContexts = contextGroupStates[contextGroupId];
                for (const [, context] of Object.entries(groupContexts)) {
                    contextHandlers.forEach((contextHandler) => {
                        const { handlerId, contextType } = contextHandler;
                        if (InteropBroker.isContextTypeCompatible(context.type, contextType)) {
                            this.invokeContextHandler(clientIdentity, handlerId, context);
                        }
                    });
                }
            }
        });
    }
    // Used to store context group state in snapshots
    getContextGroupStates() {
        return InteropBroker.toObject(this.contextGroupsById);
    }
    // Used to rehydrate the context state from a snapshot
    rehydrateContextGroupStates(incomingContextGroupStates) {
        const contextGroupStates = Object.entries(incomingContextGroupStates);
        for (const [contextGroupId, contexts] of contextGroupStates) {
            const contextObjects = Object.entries(contexts);
            for (const [contextType, context] of contextObjects) {
                if (this.contextGroupsById.has(contextGroupId)) {
                    const currentContextGroupState = this.contextGroupsById.get(contextGroupId);
                    currentContextGroupState.set(contextType, context);
                }
                else {
                    // This logic will change when dynamic context group creation comes in.
                    console.warn(`Attempting to set a context group that isn't in the context group mapping. Skipping context group rehydration for: ${contextGroupId}`);
                }
            }
        }
    }
    /*
    Internal Context Handler APIs
    */
    // Used to give context to a client that has registered their context handler
    contextHandlerRegistered({ contextType, handlerId }, clientIdentity) {
        const handlerInfo = { contextType, handlerId };
        const clientState = this.getClientState(clientIdentity);
        clientState === null || clientState === void 0 ? void 0 : clientState.contextHandlers.set(handlerId, handlerInfo);
        if (clientState && clientState.contextGroupId) {
            const { contextGroupId } = clientState;
            const contextGroupMap = this.contextGroupsById.get(contextGroupId);
            if (contextType === undefined) {
                // Send this single handler all of the context, because it accepts all.
                contextGroupMap.forEach((context, _) => {
                    this.invokeContextHandler(clientIdentity, handlerId, context);
                });
            }
            else if (contextGroupMap.has(contextType)) {
                const contextForType = contextGroupMap.get(contextType);
                if (contextForType) {
                    this.invokeContextHandler(clientIdentity, handlerId, contextForType);
                }
            }
        }
    }
    // eslint-disable-next-line class-methods-use-this
    async intentHandlerRegistered(payload, clientIdentity) {
        const { handlerId } = payload;
        const clientIntentInfo = this.intentClientMap.get(clientIdentity.name);
        const handlerInfo = clientIntentInfo === null || clientIntentInfo === void 0 ? void 0 : clientIntentInfo.get(handlerId);
        if (!clientIntentInfo) {
            this.intentClientMap.set(clientIdentity.name, new Map());
            const newHandlerInfoMap = this.intentClientMap.get(clientIdentity.name);
            if (newHandlerInfoMap) {
                newHandlerInfoMap.set(handlerId, { isReady: true, pendingIntents: [], clientIdentity });
            }
        }
        else if (!handlerInfo) {
            clientIntentInfo.set(handlerId, { isReady: true, pendingIntents: [], clientIdentity });
        }
        else {
            const { pendingIntents } = handlerInfo;
            handlerInfo.clientIdentity = clientIdentity;
            handlerInfo.isReady = true;
            try {
                if (pendingIntents.length > 0) {
                    const intentToSend = pendingIntents[pendingIntents.length - 1];
                    await this.channel.dispatch(clientIdentity, handlerId, intentToSend);
                    handlerInfo.pendingIntents = [];
                }
            }
            catch (error) {
                console.error(`Error invoking intent handler: ${handlerId} for client ${clientIdentity.uuid}/${clientIdentity.name}/${clientIdentity.endpointId}`);
            }
        }
    }
    // Used to invoke a client's context handler
    invokeContextHandler(clientIdentity, handlerId, context) {
        this.channel.dispatch(clientIdentity, handlerId, context).catch((e) => {
            console.error(`Error invoking context handler ${handlerId} for context type ${context.type} in client ${clientIdentity.uuid}/${clientIdentity.name}/${clientIdentity.endpointId}`, e);
        });
    }
    // Used to remove a context handler for a client
    removeContextHandler({ handlerId }, clientIdentity) {
        const clientState = this.getClientState(clientIdentity);
        if (clientState) {
            clientState.contextHandlers.delete(handlerId);
        }
    }
    handleJoinSessionContextGroup({ sessionContextGroupId }, clientIdentity) {
        try {
            if (!sessionContextGroupId) {
                throw new Error('Failed to join session context group: must specify group id.');
            }
            const sessionContextGroup = this.sessionContextGroupMap.get(sessionContextGroupId);
            if (sessionContextGroup) {
                sessionContextGroup.registerNewClient(clientIdentity);
            }
            else {
                const newSessionContextGroupBroker = new SessionContextGroupBroker_1.default(this.channel, sessionContextGroupId);
                newSessionContextGroupBroker.registerNewClient(clientIdentity);
                this.sessionContextGroupMap.set(sessionContextGroupId, newSessionContextGroupBroker);
            }
            return { hasConflict: this.contextGroupsById.has(sessionContextGroupId) };
        }
        catch (error) {
            throw new Error(error);
        }
    }
    /*
    Internal Utilties
    */
    // Getter for interop info for a client.
    getClientState(id) {
        return this.interopClients.get(id.endpointId);
    }
    // Util for getContextGroupStates. Serializes the contextGroupStates object so we can store it.
    static toObject(map) {
        const objectFromMap = Object.fromEntries(map);
        const newObject = {};
        Object.entries(objectFromMap).forEach(([contextGroupId, contextMap]) => {
            const newContextObject = Object.fromEntries(contextMap);
            newObject[contextGroupId] = newContextObject;
        });
        return newObject;
    }
    static checkContextIntegrity(context) {
        if (!context) {
            return { isValid: false, reason: 'No context supplied' };
        }
        if (typeof context !== 'object') {
            return { isValid: false, reason: 'Context must be an Object' };
        }
        if (!context.type) {
            return { isValid: false, reason: 'Context must have a type property' };
        }
        if (context.id && typeof context.id !== 'object') {
            return {
                isValid: false,
                reason: 'Context id must be an Object populated with key-value identifiers (if set)'
            };
        }
        if (context.id) {
            const { id } = context;
            const keys = Object.keys(id);
            let foundBadIdentifier = false;
            if (!keys.length) {
                return { isValid: false, reason: 'Context id must have at least one key-value identifier' };
            }
            keys.forEach((key) => {
                if (typeof key !== 'string' || typeof id[key] !== 'string') {
                    foundBadIdentifier = true;
                }
            });
            if (foundBadIdentifier) {
                return { isValid: false, reason: 'Context id key-value identifiers must be of type string' };
            }
        }
        if (context.name && typeof context.name !== 'string') {
            return { isValid: false, reason: 'Context name must be of string type (if set)' };
        }
        return { isValid: true };
    }
    // Util to check a client identity.
    static hasEndpointId(target) {
        return target.endpointId !== undefined;
    }
    // Util to check if we should send a context to a handler.
    static isContextTypeCompatible(contextType, registeredContextType) {
        return typeof registeredContextType === 'undefined' || contextType === registeredContextType;
    }
    // Setup function for state mapping
    setContextGroupMap() {
        // This way, if a user overrides this.getContextGroups, it's reflected in the contextGroupMapping.
        for (const contextGroupInfo of this.getContextGroups()) {
            this.contextGroupsById.set(contextGroupInfo.id, new Map());
        }
    }
    static async setCurrentContextGroupInClientOptions(clientIdentity, contextGroupId) {
        const entityInfo = await fin.System.getEntityInfo(clientIdentity.uuid, clientIdentity.name);
        let entity;
        if (entityInfo.entityType === 'view') {
            entity = await fin.View.wrap(clientIdentity);
        }
        else if (entityInfo.entityType === 'window') {
            entity = await fin.Window.wrap(clientIdentity);
        }
        if (entity) {
            await entity.updateOptions({
                interop: {
                    currentContextGroup: contextGroupId
                }
            });
        }
        else {
            console.warn(`Setting Current Context Group: Entity with identity ${clientIdentity.uuid}, ${clientIdentity.name} is not a window or view. It is a ${entityInfo.entityType} instead.`);
        }
    }
    // Setup Channel Connection Logic
    wireChannel(channel) {
        channel.onConnection((clientIdentity, payload) => {
            if (!this.isConnectionAuthorized(clientIdentity, payload)) {
                throw new Error(`Connection not authorized for ${clientIdentity.uuid}, ${clientIdentity.name}`);
            }
            if (!clientIdentity.endpointId) {
                throw new Error('Version too old to be compatible with Interop. Please upgrade your runtime to a more recent version.');
            }
            const clientSubscriptionState = {
                contextGroupId: undefined,
                contextHandlers: new Map(),
                clientIdentity
            };
            // Only allow the client to join a contextGroup that actually exists.
            if ((payload === null || payload === void 0 ? void 0 : payload.currentContextGroup) && this.contextGroupsById.has(payload.currentContextGroup)) {
                clientSubscriptionState.contextGroupId = payload === null || payload === void 0 ? void 0 : payload.currentContextGroup;
            }
            this.interopClients.set(clientIdentity.endpointId, clientSubscriptionState);
        });
        channel.onDisconnection((clientIdentity) => {
            this.interopClients.delete(clientIdentity.endpointId);
            const targetInfo = this.intentClientMap.get(clientIdentity.name);
            if (targetInfo && clientIdentity.uuid === fin.me.identity.uuid) {
                targetInfo.forEach((handler) => {
                    handler.isReady = false;
                });
            }
            this.sessionContextGroupMap.forEach((sessionContextGroup) => {
                sessionContextGroup.onDisconnection(clientIdentity);
            });
        });
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        channel.beforeAction((action, payload, clientIdentity) => {
            if (!this.isActionAuthorized(action, payload, clientIdentity)) {
                throw new Error(`Action (${action}) not authorized for ${clientIdentity.uuid}, ${clientIdentity.name}`);
            }
            console.log(action, payload, clientIdentity);
        });
        channel.afterAction(console.log);
        // Client functions
        channel.register('setContext', this.setContext.bind(this));
        channel.register('fireIntent', this.handleFiredIntent.bind(this));
        channel.register('getCurrentContext', this.getCurrentContext.bind(this));
        channel.register('getInfoForIntent', this.handleInfoForIntent.bind(this));
        channel.register('getInfoForIntentsByContext', this.handleInfoForIntentsByContext.bind(this));
        channel.register('fireIntentForContext', this.handleFiredIntentForContext.bind(this));
        // Platform window functions
        channel.register('getContextGroups', this.getContextGroups.bind(this));
        channel.register('joinContextGroup', this.joinContextGroup.bind(this));
        channel.register('removeFromContextGroup', this.removeFromContextGroup.bind(this));
        channel.register('getAllClientsInContextGroup', this.getAllClientsInContextGroup.bind(this));
        channel.register('getInfoForContextGroup', this.getInfoForContextGroup.bind(this));
        // Internal methods
        channel.register('contextHandlerRegistered', this.contextHandlerRegistered.bind(this));
        channel.register('intentHandlerRegistered', this.intentHandlerRegistered.bind(this));
        channel.register('removeContextHandler', this.removeContextHandler.bind(this));
        channel.register('sessionContextGroup:createIfNeeded', this.handleJoinSessionContextGroup.bind(this));
    }
    /**
     * Can be used to completely prevent a connection. Return false to prevent connections. Allows all connections by default.
     * @param _id the identity tryinc to connect
     * @param _connectionPayload optional payload to use in custom implementations, will be undefined by default
     */
    async isConnectionAuthorized(_id, _connectionPayload) {
        this.wire.sendAction('interop-broker-is-connection-authorized').catch((e) => {
            // don't expose, analytics-only call
        });
        return true;
    }
    /**
     * Called before every action to check if this entity should be allowed to take the action.
     * Return false to prevent the action
     * @param _action the string action to authorize in camel case
     * @param _payload the data being sent for this action
     * @param _identity the connection attempting to dispatch this action
     */
    async isActionAuthorized(_action, _payload, _identity) {
        this.wire.sendAction('interop-broker-is-action-authorized').catch((e) => {
            // don't expose, analytics-only call
        });
        return true;
    }
}
exports.InteropBroker = InteropBroker;


/***/ }),

/***/ "../../node_modules/@openfin/core/src/api/interop/InteropClient.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/@openfin/core/src/api/interop/InteropClient.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _clientPromise, _sessionContextGroups;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InteropClient = void 0;
const base_1 = __webpack_require__(/*! ../base */ "../../node_modules/@openfin/core/src/api/base.js");
const SessionContextGroupClient_1 = __webpack_require__(/*! ./SessionContextGroupClient */ "../../node_modules/@openfin/core/src/api/interop/SessionContextGroupClient.js");
const utils_1 = __webpack_require__(/*! ./utils */ "../../node_modules/@openfin/core/src/api/interop/utils.js");
/**
 * @typedef { object } Intent
 * @summary The combination of an action and a context that is passed to an application for resolution.
 * @property { string } name Name of the intent.
 * @property { Context } context Data associated with the intent
 */
/**
 * @typedef { object } Subscription
 * @summary Object returned when subscribing a handler.
 * @property { function } unsubscribe Function to unsubscribe the handler.
 */
/**
 * @typedef { function } ContextHandler
 * @summary Subscription function for addContextHandler.
 */
/**
 * @typedef { function } IntentHandler
 * @summary Subscription function for registerIntentHandler
 */
/**
 * @typedef { object } ClientIdentity
 * @summary The Identity for a Channel Client. Includes endpointId to differentiate between different connections for an entity.
 * @property {string} uuid GUID of an application.
 * @property {string} name Name of an entity in an application.
 * @property {string} endpointId Unique differentiator for different Channel connections for an entity.
 */
/**
 * @typedef { object } ContextGroupInfo
 * @summary Information for a Context Group. Contains metadata for displaying the group properly.
 * @property {string} id Name of the context group
 * @property {DisplayMetadata} displayMetadata Metadata for the Context Group. Contains the group's human-readable name, color, and an image, as defined by the Interop Broker.
 */
/**
 * @typedef { object } DisplayMetadata
 * @summary The display data for a Context Group.
 * @property {string} name A user-readable name for this context group, e.g: `"Red"`
 * @property {string} [color] The color that should be associated within this context group when displaying this context group in a UI, e.g: `0xFF0000`.
 * @property {string} [glyph] A URL of an image that can be used to display this context group
 */
/**
 * @typedef { object } Context
 * @summary Data passed between entities and applications.
 * @property {object} [id] An object containing string key-value pairs for the bulk of the data for the context. Differs between context types.
 * @property {string} [name] User-readable name for the incoming context.
 * @property {string} type Conserved type for the context (e.g. `instrument` or `country`)
 */
/**
 * @typedef { object } ContextForIntent
 * @summary Data passed between entities and applications, including an optional metadata.
 * @property {object} [id] An object containing string key-value pairs for the bulk of the data for the context. Differs between context types.
 * @property {string} [name] User-readable name for the incoming context.
 * @property {string} type Conserved type for the context (e.g. `instrument` or `country`)
 * @property {any} [metadata]
 */
/**
 * @typedef { object } SessionContextGroup
 * @summary An instance of a SessionContextGroup
 * @property {string} id The SessionContextGroup's id.
 * @property {setContext} setContext Sets a context of a certain type
 * @property {getCurrentContext} getCurrentContext Gets the currently set context of a certain type
 * @property {addContextHandler} addContextHandler Adds a handler for context change.
 */
/**
 * @typedef {function} setContext
 * @summary A SessionContextGroup instance method for setting a context in the SessionContextGroup.
 * @param {Context} context The Context to be set.
 * @return {Promise<void>}
 */
/**
 * @typedef {function} getCurrentContext
 * @summary A SessionContextGroup instance method for getting the current context of a certain type.
 * @param {string} [contextType] The Context Type to get. If not specified the last contextType set would get used.
 * @return {Promise<Context>}
 */
/**
 * @typedef {function} addContextHandler
 * @summary A SessionContextGroup instance method for adding a handler for context change.
 * @param {ContextHandler} contextHandler The callback to be invoked. Is invoked when (a) the context changes or (b) immediately after getting created if the context is already set.
 * @param {string} [contextType] The context type this handler should listen to. If not specified, a global handler for all context types will get created. Only one global handler is allowed per SessionContextGroup.
 * @return {Promise<void>}
 */
/**
 * {@link https://developers.openfin.co/of-docs/docs/enable-color-linking **THE INTEROP API IS EXPERIMENTAL. IF YOU WOULD LIKE TO USE IT, PLEASE USE OUR DEFAULT IMPLEMENTATION IN BROWSER**}
 *
 * The Interop Client API is broken up into two groups:
 *
 * **Content Facing APIs** - For Application Developers putting Views into a Platform Window, who care about Context. These are APIs that send out and receive the Context data that flows between applications. Think of this as the Water in the Interop Pipes.
 *
 * **Context Grouping APIs** - For Platform Developers, to add and remove Views to and from Context Groups. These APIs are utilized under-the-hood in Platforms, so they don't need to be used to participate in Interop. These are the APIs that decide which entities the context data flows between. Think of these as the valves or pipes that control the flow of Context Data for Interop.
 *
 * ---
 *
 * All APIs are available at the `fin.me.interop` namespace.
 *
 * ---
 *
 * **You only need 2 things to participate in Interop Context Grouping:**
 * * A Context Handler for incoming context: {@link InteropClient#addContextHandler addContextHandler(handler, contextType?)}
 * * Call setContext on your context group when you want to share context with other group members: {@link InteropClient#setContext setContext(context)}
 *
 * ---
 *
 * ##### Constructor
 * Returned by {@link Interop.connectSync Interop.connectSync}.
 *
 * ---
 *
 * ##### Interop methods intended for Views
 *
 *
 * **Context Groups API**
 *  * {@link InteropClient#addContextHandler addContextHandler(handler, contextType?)}
 *  * {@link InteropClient#setContext setContext(context)}
 *  * {@link InteropClient#getCurrentContext getCurrentContext(contextType?)}
 *  * {@link InteropClient#joinSessionContextGroup joinSessionContextGroup(sessionContextGroupId)}
 *
 *
 * **Intents API**
 *  * {@link InteropClient#fireIntent fireIntent(intent)}
 *  * {@link InteropClient#registerIntentHandler registerIntentHandler(intentHandler, intentName)}
 *  * {@link InteropClient#getInfoForIntent getInfoForIntent(infoForIntentOptions)}
 *  * {@link InteropClient#getInfoForIntentsByContext getInfoForIntentsByContext(context)}
 *  * {@link InteropClient#fireIntentForContext fireIntentForContext(contextForIntent)}
 *
 * ##### Interop methods intended for Windows
 *  * {@link InteropClient#getContextGroups getContextGroups()}
 *  * {@link InteropClient#joinContextGroup joinContextGroup(contextGroupId, target?)}
 *  * {@link InteropClient#removeFromContextGroup removeFromContextGroup(target?)}
 *  * {@link InteropClient#getInfoForContextGroup getInfoForContextGroup(contextGroupId)}
 *  * {@link InteropClient#getAllClientsInContextGroup getAllClientsInContextGroup(contextGroupId)}
 *

 *
 * @hideconstructor
 * @class
 */
class InteropClient extends base_1.Base {
    constructor(wire, name, interopConfig) {
        super(wire);
        _clientPromise.set(this, void 0);
        _sessionContextGroups.set(this, void 0);
        __classPrivateFieldSet(this, _sessionContextGroups, new Map());
        __classPrivateFieldSet(this, _clientPromise, this.wire.environment.whenReady().then(() => {
            return this.fin.InterApplicationBus.Channel.connect(`interop-broker-${name}`, {
                payload: interopConfig
            });
        }));
    }
    /*
    Client APIs
    */
    /**
     * Sets a context for the context group of the current entity.
     * @param { Context } context - New context to set.
     * @return { Promise<void> }
     * @tutorial interop.setContext
     */
    async setContext(context) {
        this.wire.sendAction('interop-client-set-context').catch((e) => {
            // don't expose, analytics-only call
        });
        const client = await __classPrivateFieldGet(this, _clientPromise);
        return client.dispatch('setContext', { context });
    }
    /**
     * Add a context handler for incoming context. If an entity is part of a context group, and then sets its context handler, it will receive all of its declared contexts.
     * @param { ContextHandler } handler - Handler for incoming context.
     * @param { string } [contextType] - The type of context you wish to handle.
     * @return { Promise<Subscription> }
     * @tutorial interop.addContextHandler
     */
    async addContextHandler(handler, contextType) {
        this.wire.sendAction('interop-client-add-context-handler').catch((e) => {
            // don't expose, analytics-only call
        });
        const client = await __classPrivateFieldGet(this, _clientPromise);
        let handlerId;
        if (contextType) {
            handlerId = `invokeContextHandler-${contextType}-${utils_1.generateId()}`;
            console.warn(`Warning: By providing a contextType (${contextType}), you are using the experimental addContextHandler. To avoid issues, make sure you are adding your context handlers at the top level in your application.`);
        }
        else {
            handlerId = 'invokeContextHandler';
        }
        const wrappedHandler = utils_1.wrapContextHandler(handler, handlerId);
        client.register(handlerId, wrappedHandler);
        await client.dispatch('contextHandlerRegistered', { handlerId, contextType });
        return {
            unsubscribe: async () => {
                client.remove(handlerId);
                await client.dispatch('removeContextHandler', { handlerId });
            }
        };
    }
    /*
    Platform Window APIs
    */
    /**
     * Returns the Interop-Broker-defined context groups available for an entity to join.
     * Used by Platform Windows.
     * @return { Promise<ContextGroupInfo[]>}
     * @tutorial interop.getContextGroups
     */
    async getContextGroups() {
        this.wire.sendAction('interop-client-get-context-groups').catch((e) => {
            // don't expose, analytics-only call
        });
        const client = await __classPrivateFieldGet(this, _clientPromise);
        return client.dispatch('getContextGroups');
    }
    /**
     * Join all Interop Clients at the given identity to context group `contextGroupId`.
     * If no target is specified, it adds the sender to the context group.
     * Because multiple Channel connections/Interop Clients can potentially exist at a `uuid`/`name` combo, we currently join all Channel connections/Interop Clients at the given identity to the context group.
     * If an `endpointId` is provided (which is unlikely, unless the call is coming from an external adapter), then we only join that single connection to the context group.
     * For all intents and purposes, there will only be 1 connection present in Platform and Browser implmentations, so this point is more-or-less moot.
     * Used by Platform Windows.
     * @param { string } contextGroupId - Id of the context group.
     * @param { Identity } [target] - Identity of the entity you wish to join to a context group.
     * @return { Promise<void>}
     * @tutorial interop.joinContextGroup
     */
    async joinContextGroup(contextGroupId, target) {
        this.wire.sendAction('interop-client-join-context-group').catch((e) => {
            // don't expose, analytics-only call
        });
        const client = await __classPrivateFieldGet(this, _clientPromise);
        if (!contextGroupId) {
            throw new Error('No contextGroupId specified for joinContextGroup.');
        }
        return client.dispatch('joinContextGroup', { contextGroupId, target });
    }
    /**
     * Removes the specified target from a context group.
     * If no target is specified, it removes the sender from their context group.
     * Used by Platform Windows.
     * @param { Identity } [target] - Identity of the entity you wish to join to a context group.
     * @return { Promise<void>}
     * @tutorial interop.removeFromContextGroup
     */
    async removeFromContextGroup(target) {
        this.wire.sendAction('interop-client-remove-from-context-group').catch((e) => {
            // don't expose, analytics-only call
        });
        const client = await __classPrivateFieldGet(this, _clientPromise);
        return client.dispatch('removeFromContextGroup', { target });
    }
    /**
     * Gets all clients for a context group.
     * Used by Platform Windows.
     * @param { string } contextGroupId - The id of context group you wish to get clients for.
     * @return { Promise<ClientIdentity[]>}
     * @tutorial interop.getAllClientsInContextGroup
     */
    async getAllClientsInContextGroup(contextGroupId) {
        this.wire.sendAction('interop-client-get-all-clients-in-context-group').catch((e) => {
            // don't expose, analytics-only call
        });
        const client = await __classPrivateFieldGet(this, _clientPromise);
        if (!contextGroupId) {
            throw new Error('No contextGroupId specified for getAllClientsInContextGroup.');
        }
        return client.dispatch('getAllClientsInContextGroup', { contextGroupId });
    }
    /**
     * Gets display info for a context group
     * Used by Platform Windows.
     * @param { string } contextGroupId - The id of context group you wish to get display info for.
     * @return { Promise<ContextGroupInfo>}
     * @tutorial interop.getInfoForContextGroup
     */
    async getInfoForContextGroup(contextGroupId) {
        this.wire.sendAction('interop-client-get-info-for-context-group').catch((e) => {
            // don't expose, analytics-only call
        });
        const client = await __classPrivateFieldGet(this, _clientPromise);
        if (!contextGroupId) {
            throw new Error('No contextGroupId specified for getInfoForContextGroup.');
        }
        return client.dispatch('getInfoForContextGroup', { contextGroupId });
    }
    /**
     * Sends an intent to the Interop Broker to resolve.
     * @param { Intent } intent - The combination of an action and a context that is passed to an application for resolution.
     * @return { Promise<unknown>}
     * @tutorial interop.fireIntent
     * @experimental
     */
    async fireIntent(intent) {
        this.wire.sendAction('interop-client-fire-intent').catch((e) => {
            // don't expose, this is only for api analytics purposes
        });
        const client = await __classPrivateFieldGet(this, _clientPromise);
        return client.dispatch('fireIntent', intent);
    }
    /**
     * Adds an intent handler for incoming intents. The last intent sent of the name subscribed to will be received.
     * @param { IntentHandler } handler - Registered function meant to handle a specific intent type.
     * @param { string } intentName - The name of an intent.
     * @return { Promise<Subscription> }
     * @tutorial interop.registerIntentHandler
     * @experimental
     */
    async registerIntentHandler(handler, intentName) {
        this.wire.sendAction('interop-client-register-intent-handler').catch((e) => {
            // don't expose, this is only for api analytics purposes
        });
        const client = await __classPrivateFieldGet(this, _clientPromise);
        const handlerId = `intent-handler-${intentName}`;
        const wrappedHandler = this.wrapIntentHandler(handler, handlerId);
        try {
            await client.register(handlerId, wrappedHandler);
            await client.dispatch('intentHandlerRegistered', { handlerId });
        }
        catch (error) {
            throw new Error('Unable to register intent handler');
        }
        return {
            unsubscribe: async () => {
                client.remove(handlerId);
            }
        };
    }
    /**
     * Gets the last context of the Context Group currently subscribed to. It takes an optional Context Type and returns the
     * last context of that type.
     * @param { string } [contextType]
     * @return { Promise<Context> }
     * @tutorial interop.getCurrentContext
     * @experimental
     */
    async getCurrentContext(contextType) {
        this.wire.sendAction('interop-client-get-current-context').catch((e) => {
            // don't expose, analytics-only call
        });
        const client = await __classPrivateFieldGet(this, _clientPromise);
        return client.dispatch('getCurrentContext', { contextType });
    }
    /**
     * Get information for a particular Intent from the Interop Broker.
     * @param { InfoForIntentOptions } options
     * @return { Promise<unknown> }
     * @tutorial interop.getInfoForIntent
     * @experimental
     */
    async getInfoForIntent(options) {
        this.wire.sendAction('interop-client-get-info-for-intent').catch((e) => {
            // don't expose, analytics-only call
        });
        const client = await __classPrivateFieldGet(this, _clientPromise);
        return client.dispatch('getInfoForIntent', options);
    }
    /**
     * Get information from the Interop Broker on all Intents that are meant to handle a particular context.
     * @param { Context } context
     * @return { Promise<unknown> }
     * @tutorial interop.getInfoForIntentsByContext
     * @experimental
     */
    async getInfoForIntentsByContext(context) {
        this.wire.sendAction('interop-client-get-info-for-intents-by-context').catch((e) => {
            // don't expose, analytics-only call
        });
        const client = await __classPrivateFieldGet(this, _clientPromise);
        return client.dispatch('getInfoForIntentsByContext', context);
    }
    /**
     * Sends a Context that will be resolved to an Intent by the Interop Broker.
     * This context accepts a metadata property.
     * @param { ContextForIntent } context
     * @return { Promise<unknown> }
     * @tutorial interop.fireIntentForContext
     * @experimental
     */
    async fireIntentForContext(context) {
        this.wire.sendAction('interop-client-fire-intent-for-context').catch((e) => {
            // don't expose, analytics-only call
        });
        const client = await __classPrivateFieldGet(this, _clientPromise);
        return client.dispatch('fireIntentForContext', context);
    }
    /**
     * Join the current entity to session context group `sessionContextGroupId` and return a sessionContextGroup instance.
     * If the sessionContextGroup doesn't exist, one will get created.
     * Session Context Groups do not persist between runs and aren't present on snapshots.
     * @param { string } sessionContextGroupId - Id of the context group.
     * @return { Promise<SessionContextGroup>}
     * @tutorial interop.joinSessionContextGroup
     * @experimental
     */
    async joinSessionContextGroup(sessionContextGroupId) {
        try {
            const currentSessionContextGroup = __classPrivateFieldGet(this, _sessionContextGroups).get(sessionContextGroupId);
            if (currentSessionContextGroup) {
                return currentSessionContextGroup.getUserInstance();
            }
            const client = await __classPrivateFieldGet(this, _clientPromise);
            const { hasConflict } = await client.dispatch('sessionContextGroup:createIfNeeded', {
                sessionContextGroupId
            });
            if (hasConflict) {
                console.warn(`A (non-session) context group with the name "${sessionContextGroupId}" already exists. If you are trying to join a Context Group, call joinContextGroup instead.`);
            }
            const newSessionContextGroup = new SessionContextGroupClient_1.default(this.wire, __classPrivateFieldGet(this, _clientPromise), sessionContextGroupId);
            __classPrivateFieldGet(this, _sessionContextGroups).set(sessionContextGroupId, newSessionContextGroup);
            return newSessionContextGroup.getUserInstance();
        }
        catch (error) {
            console.error(`Error thrown trying to create Session Context Group with id "${sessionContextGroupId}": ${error}`);
            throw error;
        }
    }
    /*
    Internal Utilties
    */
    // eslint-disable-next-line class-methods-use-this
    wrapIntentHandler(handler, handlerId) {
        return async (intent) => {
            try {
                await handler(intent);
            }
            catch (error) {
                console.error(`Error thrown by handler ${handlerId}: ${error}`);
                throw error;
            }
        };
    }
}
exports.InteropClient = InteropClient;
_clientPromise = new WeakMap(), _sessionContextGroups = new WeakMap();


/***/ }),

/***/ "../../node_modules/@openfin/core/src/api/interop/SessionContextGroupBroker.js":
/*!*************************************************************************************!*\
  !*** ../../node_modules/@openfin/core/src/api/interop/SessionContextGroupBroker.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const _1 = __webpack_require__(/*! . */ "../../node_modules/@openfin/core/src/api/interop/index.js");
class SessionContextGroupBroker {
    constructor(provider, id) {
        this.provider = provider;
        this.id = id;
        this.lastContext = undefined;
        this.contextGroupMap = new Map();
        this.clients = new Map();
        this.registerListeners();
    }
    registerListeners() {
        this.provider.register(`sessionContextGroup:getContext-${this.id}`, this.getCurrentContext.bind(this));
        this.provider.register(`sessionContextGroup:setContext-${this.id}`, this.setContext.bind(this));
        this.provider.register(`sessionContextGroup:handlerAdded-${this.id}`, this.handlerAdded.bind(this));
        this.provider.register(`sessionContextGroup:handlerRemoved-${this.id}`, this.handlerRemoved.bind(this));
    }
    getCurrentContext(payload) {
        return payload.type ? this.contextGroupMap.get(payload.type) : this.lastContext;
    }
    setContext(payload, clientIdentity) {
        const { context } = payload;
        const contextIntegrityCheckResult = _1.InteropBroker.checkContextIntegrity(context);
        if (contextIntegrityCheckResult.isValid === false) {
            throw new Error(`Failed to set Context - bad Context. Reason: ${contextIntegrityCheckResult.reason}. Context: ${JSON.stringify(context)}`);
        }
        const clientState = this.getClientState(clientIdentity);
        if (!clientState) {
            // This shouldn't get hit.
            throw new Error(`Client with Identity: ${clientIdentity.uuid} ${clientIdentity.name} not in Session Client State Map`);
        }
        // set the context
        this.contextGroupMap.set(context.type, context);
        this.lastContext = context;
        const clientSubscriptionStates = Array.from(this.clients.values());
        clientSubscriptionStates.forEach((client) => {
            var _a;
            // eslint-disable-next-line no-unused-expressions
            (_a = client.contextHandlers.get(context.type)) === null || _a === void 0 ? void 0 : _a.forEach((handlerId) => {
                this.provider.dispatch(client.clientIdentity, handlerId, context);
            });
            if (client.globalHandler) {
                this.provider.dispatch(client.clientIdentity, client.globalHandler, context);
            }
        });
    }
    getClientState(id) {
        return this.clients.get(id.endpointId);
    }
    handlerAdded(payload, clientIdentity) {
        const { handlerId, contextType } = payload;
        const clientSubscriptionState = this.getClientState(clientIdentity);
        if (!clientSubscriptionState) {
            throw new Error(`Client with Identity: ${clientIdentity.uuid} ${clientIdentity.name} not in Client State Map`);
        }
        if (contextType) {
            const currentHandlerList = clientSubscriptionState.contextHandlers.get(contextType) || [];
            clientSubscriptionState.contextHandlers.set(contextType, [...currentHandlerList, handlerId]);
            const currentContext = this.contextGroupMap.get(contextType);
            if (currentContext) {
                this.provider.dispatch(clientIdentity, handlerId, currentContext);
            }
        }
        else {
            clientSubscriptionState.globalHandler = handlerId;
            [...this.contextGroupMap.keys()].forEach((currentContextType) => {
                const currentContext = this.contextGroupMap.get(currentContextType);
                if (currentContext) {
                    this.provider.dispatch(clientIdentity, handlerId, currentContext);
                }
            });
        }
    }
    handlerRemoved(payload, clientIdentity) {
        const { handlerId } = payload;
        const client = this.clients.get(clientIdentity.endpointId);
        if (client) {
            Array.from(client.contextHandlers).forEach(([, handlers]) => {
                const index = handlers.indexOf(handlerId);
                if (index > -1) {
                    handlers.splice(index, 1);
                }
            });
            if (client.globalHandler === handlerId) {
                client.globalHandler = undefined;
            }
        }
        else {
            console.warn(`Trying to remove a handler from a client that isn't mapped. handlerId: ${handlerId}. clientIdentity: ${clientIdentity}`);
        }
    }
    registerNewClient(clientIdentity) {
        if (!this.clients.has(clientIdentity.endpointId)) {
            const clientSubscriptionState = {
                contextHandlers: new Map(),
                clientIdentity,
                globalHandler: undefined
            };
            this.clients.set(clientIdentity.endpointId, clientSubscriptionState);
        }
    }
    onDisconnection(clientIdentity) {
        this.clients.delete(clientIdentity.endpointId);
    }
}
exports["default"] = SessionContextGroupBroker;


/***/ }),

/***/ "../../node_modules/@openfin/core/src/api/interop/SessionContextGroupClient.js":
/*!*************************************************************************************!*\
  !*** ../../node_modules/@openfin/core/src/api/interop/SessionContextGroupClient.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _clientPromise;
Object.defineProperty(exports, "__esModule", ({ value: true }));
const base_1 = __webpack_require__(/*! ../base */ "../../node_modules/@openfin/core/src/api/base.js");
const utils_1 = __webpack_require__(/*! ./utils */ "../../node_modules/@openfin/core/src/api/interop/utils.js");
class SessionContextGroupClient extends base_1.Base {
    constructor(wire, client, id) {
        super(wire);
        _clientPromise.set(this, void 0);
        this.id = id;
        __classPrivateFieldSet(this, _clientPromise, client);
    }
    /**
     * Sets a context for the session context group.
     * @param { Context } context - New context to set.
     * @return { Promise<void> }
     * @tutorial interop.setContext
     */
    async setContext(context) {
        this.wire.sendAction('interop-session-context-group-set-context').catch((e) => {
            // don't expose, analytics-only call
        });
        const client = await __classPrivateFieldGet(this, _clientPromise);
        return client.dispatch(`sessionContextGroup:setContext-${this.id}`, {
            sessionContextGroupId: this.id,
            context
        });
    }
    async getCurrentContext(type) {
        this.wire.sendAction('interop-session-context-group-get-context').catch((e) => {
            // don't expose, analytics-only call
        });
        const client = await __classPrivateFieldGet(this, _clientPromise);
        return client.dispatch(`sessionContextGroup:getContext-${this.id}`, {
            sessionContextGroupId: this.id,
            type
        });
    }
    async addContextHandler(contextHandler, contextType) {
        this.wire.sendAction('interop-session-context-group-add-handler').catch((e) => {
            // don't expose, analytics-only call
        });
        const client = await __classPrivateFieldGet(this, _clientPromise);
        let handlerId;
        if (contextType) {
            handlerId = `sessionContextHandler:invoke-${this.id}-${contextType}-${utils_1.generateId()}`;
        }
        else {
            handlerId = `sessionContextHandler:invoke-${this.id}`;
        }
        client.register(handlerId, utils_1.wrapContextHandler(contextHandler, handlerId));
        client.dispatch(`sessionContextGroup:handlerAdded-${this.id}`, { handlerId, contextType });
        return { unsubscribe: await this.createUnsubscribeCb(handlerId) };
    }
    async createUnsubscribeCb(handlerId) {
        const client = await __classPrivateFieldGet(this, _clientPromise);
        return async () => {
            client.remove(handlerId);
            await client.dispatch(`sessionContextGroup:handlerRemoved-${this.id}`, { handlerId });
        };
    }
    getUserInstance() {
        return {
            id: this.id,
            setContext: utils_1.wrapInTryCatch(this.setContext.bind(this), 'Failed to set context: '),
            getCurrentContext: utils_1.wrapInTryCatch(this.getCurrentContext.bind(this), 'Failed to get context: '),
            addContextHandler: utils_1.wrapInTryCatch(this.addContextHandler.bind(this), 'Failed to add context handler: ')
        };
    }
}
exports["default"] = SessionContextGroupClient;
_clientPromise = new WeakMap();


/***/ }),

/***/ "../../node_modules/@openfin/core/src/api/interop/index.js":
/*!*****************************************************************!*\
  !*** ../../node_modules/@openfin/core/src/api/interop/index.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
}
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Factory_1 = __webpack_require__(/*! ./Factory */ "../../node_modules/@openfin/core/src/api/interop/Factory.js");
exports["default"] = Factory_1.default;
__exportStar(__webpack_require__(/*! ./InteropClient */ "../../node_modules/@openfin/core/src/api/interop/InteropClient.js"), exports);
__exportStar(__webpack_require__(/*! ./InteropBroker */ "../../node_modules/@openfin/core/src/api/interop/InteropBroker.js"), exports);


/***/ }),

/***/ "../../node_modules/@openfin/core/src/api/interop/utils.js":
/*!*****************************************************************!*\
  !*** ../../node_modules/@openfin/core/src/api/interop/utils.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BROKER_ERRORS = exports.generateOverrideWarning = exports.generateOverrideError = exports.wrapContextHandler = exports.wrapInTryCatch = exports.generateId = void 0;
exports.generateId = () => `${Math.random()}${Date.now()}`;
exports.wrapInTryCatch = (f, prefix) => (...args) => {
    try {
        return f(...args);
    }
    catch (e) {
        throw new Error((prefix || '') + e);
    }
};
exports.wrapContextHandler = (handler, handlerId) => {
    return async (context) => {
        try {
            await handler(context);
        }
        catch (error) {
            console.error(`Error thrown by handler ${handlerId} for context type ${context.type}: ${error}`);
            throw error;
        }
    };
};
exports.generateOverrideError = (clientApi, brokerApi) => {
    return `You have tried to to use ${clientApi} but ${brokerApi} has not been overridden in the Interop Broker. Please override this function. Refer to our documentation for more info.`;
};
exports.generateOverrideWarning = (interopClientApi, fdc3ClientApi, brokerApi, identity) => {
    const { uuid, name } = identity;
    return `Entity with identity: ${uuid}/${name} has called ${interopClientApi} or ${fdc3ClientApi} but ${brokerApi} has not been overridden.`;
};
exports.BROKER_ERRORS = {
    fireIntent: exports.generateOverrideError('fireIntent', 'handleFiredIntent'),
    fireIntentForContext: exports.generateOverrideError('fireIntentForContext', 'handleFiredIntentForContext'),
    getInfoForIntent: exports.generateOverrideError('getInfoForIntent', 'handleInfoForIntent'),
    getInfoForIntentsByContext: exports.generateOverrideError('getInfoForIntentsByContext', 'handleInfoForIntentsByContext')
};


/***/ }),

/***/ "../../node_modules/@openfin/core/src/api/me.js":
/*!******************************************************!*\
  !*** ../../node_modules/@openfin/core/src/api/me.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getMe = exports.getBaseMe = exports.environmentUnsupportedMessage = void 0;
const view_1 = __webpack_require__(/*! ./view */ "../../node_modules/@openfin/core/src/api/view/index.js");
const frame_1 = __webpack_require__(/*! ./frame */ "../../node_modules/@openfin/core/src/api/frame/index.js");
const window_1 = __webpack_require__(/*! ./window */ "../../node_modules/@openfin/core/src/api/window/index.js");
exports.environmentUnsupportedMessage = 'You are not running in OpenFin.';
function getBaseMe(entityType, uuid, name) {
    const entityTypeHelpers = {
        isView: entityType === 'view',
        isWindow: entityType === 'window',
        isFrame: entityType === 'iframe',
        isExternal: entityType === 'external connection'
    };
    return { ...entityTypeHelpers, uuid, name, entityType };
}
exports.getBaseMe = getBaseMe;
// We need to do a lot of casting as unknown here because the compiler get's confused about matching types. What matters is that it works on the outside
function getMe(wire) {
    const { uuid, name, entityType } = wire.me;
    const unsupportedInterop = {
        setContext() {
            throw new Error(exports.environmentUnsupportedMessage);
        },
        addContextHandler() {
            throw new Error(exports.environmentUnsupportedMessage);
        },
        getContextGroups() {
            throw new Error(exports.environmentUnsupportedMessage);
        },
        joinContextGroup() {
            throw new Error(exports.environmentUnsupportedMessage);
        },
        removeFromContextGroup() {
            throw new Error(exports.environmentUnsupportedMessage);
        },
        getAllClientsInContextGroup() {
            throw new Error(exports.environmentUnsupportedMessage);
        },
        getInfoForContextGroup() {
            throw new Error(exports.environmentUnsupportedMessage);
        }
    };
    const fallbackErrorMessage = 'Interop API has not been instantiated. Either connection has failed or you have not declared interop in your config.';
    const fallbackInterop = {
        setContext() {
            throw new Error(fallbackErrorMessage);
        },
        addContextHandler() {
            throw new Error(fallbackErrorMessage);
        },
        getContextGroups() {
            throw new Error(fallbackErrorMessage);
        },
        joinContextGroup() {
            throw new Error(fallbackErrorMessage);
        },
        removeFromContextGroup() {
            throw new Error(fallbackErrorMessage);
        },
        getAllClientsInContextGroup() {
            throw new Error(fallbackErrorMessage);
        },
        getInfoForContextGroup() {
            throw new Error(fallbackErrorMessage);
        }
    };
    const unsupportedEventBase = {
        eventNames: () => {
            throw new Error(exports.environmentUnsupportedMessage);
        },
        emit: () => {
            throw new Error(exports.environmentUnsupportedMessage);
        },
        listeners: () => {
            throw new Error(exports.environmentUnsupportedMessage);
        },
        listenerCount: () => {
            throw new Error(exports.environmentUnsupportedMessage);
        },
        on: () => {
            throw new Error(exports.environmentUnsupportedMessage);
        },
        addListener: () => {
            throw new Error(exports.environmentUnsupportedMessage);
        },
        once: () => {
            throw new Error(exports.environmentUnsupportedMessage);
        },
        prependListener: () => {
            throw new Error(exports.environmentUnsupportedMessage);
        },
        prependOnceListener: () => {
            throw new Error(exports.environmentUnsupportedMessage);
        },
        removeListener: () => {
            throw new Error(exports.environmentUnsupportedMessage);
        },
        removeAllListeners: () => {
            throw new Error(exports.environmentUnsupportedMessage);
        }
    };
    switch (entityType) {
        case 'view':
            return Object.assign(new view_1.View(wire, { uuid, name }), getBaseMe(entityType, uuid, name), {
                interop: fallbackInterop,
                isOpenFin: true
            });
        case 'window':
            return Object.assign(new window_1._Window(wire, { uuid, name }), getBaseMe(entityType, uuid, name), {
                interop: fallbackInterop,
                isOpenFin: true
            });
        case 'iframe':
            return Object.assign(new frame_1._Frame(wire, { uuid, name }), getBaseMe(entityType, uuid, name), {
                interop: fallbackInterop,
                isOpenFin: true
            });
        default:
            return {
                ...getBaseMe(entityType, uuid, name),
                ...unsupportedEventBase,
                interop: unsupportedInterop,
                isOpenFin: false
            };
    }
}
exports.getMe = getMe;


/***/ }),

/***/ "../../node_modules/@openfin/core/src/api/platform/Factory.js":
/*!********************************************************************!*\
  !*** ../../node_modules/@openfin/core/src/api/platform/Factory.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable no-undef, no-underscore-dangle */
const base_1 = __webpack_require__(/*! ../base */ "../../node_modules/@openfin/core/src/api/base.js");
const index_1 = __webpack_require__(/*! ./layout/index */ "../../node_modules/@openfin/core/src/api/platform/layout/index.js");
const Instance_1 = __webpack_require__(/*! ./Instance */ "../../node_modules/@openfin/core/src/api/platform/Instance.js");
/**
 * InitPlatformOptions interface
 * @typedef { object } InitPlatformOptions
 * @property { OverrideCallback } [overrideCallback] a callback function that can be used to extend or replace default Provider behavior.
 */
/**
 * @typedef { same | different } ProcessAffinityStrategy
 * @summary Strategy to place views that share a domain into different process affinities or the same process affinity.
 * @property { string } same views in the same domain will have the same process affinity.
 * @property { string } different views in the same domain will have different process affinities.
 */
/**
 * @typedef { object } PlatformOptions
 * @summary The options object required by {@link Platform#start Platform.start}
 * Any {@link ApplicationOptions Application option} is also a valid platform option
 * @property {Array.<Object>} [commands] Configuration for keyboard commands.
 * For details and usage, see [Using Keyboard Commands]{@link https://developers.openfin.co/docs/platform-api#section-5-3-using-keyboard-commands}.
 * @property {DefaultWindowOptions} [defaultWindowOptions] Default window options apply to all platform windows.
 * @property {View~options} [defaultViewOptions] Default view options apply to all platform views.
 * @property {ProcessAffinityStrategy} [viewProcessAffinityStrategy] 'same' | 'different'.
 */
/**
 * @typedef { object } DefaultWindowOptions
 * @summary Default window options apply to all platform windows.
 * Any {@link Window~options Window option} is also a valid Default Window option
 * used by default in any window that is created in the current platform's scope.
 * Individual window options will override these defaults.
 * @property {string} [stylesheetUrl]
 * Specify a path of a custom CSS file to be injected to all of the platform's windows.
 * _note_: this option is only applied to windows that use the Default OpenFin Window.
 * Windows with a specified url (Custom Windows) will not be affected by this option.
 */
/**
 * Snapshot interface
 * @typedef { object } Snapshot
 * @property { WindowOption[] } windows The array of window options objects
 */
/**
 * @lends Platform
 */
class PlatformModule extends base_1.Base {
    constructor(wire, channel) {
        super(wire);
        this._channel = channel;
        this._initializer = (...args) => this.wire.environment
            .getProviderInitializer()
            .then((initConstructor) => initConstructor(this.wire.environment)(...args));
        /**
         * @namespace
         * @desc Layouts give app providers the ability to embed multiple views in a single window.  The Layout namespace
         * enables the initialization and manipulation of a window's Layout.  A Layout will
         * <a href="tutorial-Layout.DOMEvents.html">emit events locally</a> on the DOM element representing the layout-container.
         */
        this.Layout = new index_1.LayoutModule(this.wire);
    }
    /**
     * Initializes a Platform. Must be called from the Provider when using a custom provider.
     * @param { InitPlatformOptions } [options] - platform options including a callback function that can be used to extend or replace
     * default Provider behavior.
     * @return {Promise.<void>}
     * @tutorial Platform.init
     * @experimental
     * @static
     */
    async init(options) {
        const overrideCallback = options === null || options === void 0 ? void 0 : options.overrideCallback;
        const interopBroker = await this.fin.Interop.init(this.fin.me.uuid, options === null || options === void 0 ? void 0 : options.interopOverride);
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore debugging purposes
        window.interopBroker = interopBroker;
        return this._initializer(overrideCallback, interopBroker);
    }
    /**
     * Asynchronously returns a Platform object that represents an existing platform.
     * @param { Identity } identity
     * @return {Promise.<Platform>}
     * @tutorial Platform.wrap
     * @static
     */
    async wrap(identity) {
        this.wire.sendAction('platform-wrap').catch((e) => {
            // don't expose
        });
        return new Instance_1.Platform({ uuid: identity.uuid }, this._channel);
    }
    /**
     * Synchronously returns a Platform object that represents an existing platform.
     * @param { Identity } identity
     * @return {Platform}
     * @tutorial Platform.wrapSync
     * @static
     */
    wrapSync(identity) {
        this.wire.sendAction('platform-wrap-sync').catch((e) => {
            // don't expose
        });
        return new Instance_1.Platform({ uuid: identity.uuid }, this._channel);
    }
    /**
     * Asynchronously returns a Platform object that represents the current platform.
     * @return {Promise.<Platform>}
     * @tutorial Platform.getCurrent
     * @static
     */
    async getCurrent() {
        this.wire.sendAction('platform-get-current').catch((e) => {
            // don't expose
        });
        return this.wrap({ uuid: this.wire.me.uuid });
    }
    /**
     * Synchronously returns a Platform object that represents the current platform.
     * @return {Platform}
     * @tutorial Platform.getCurrentSync
     * @static
     */
    getCurrentSync() {
        this.wire.sendAction('platform-get-current-sync').catch((e) => {
            // don't expose
        });
        return this.wrapSync({ uuid: this.wire.me.uuid });
    }
    /**
     * Creates and starts a Platform and returns a wrapped and running Platform instance. The wrapped Platform methods can
     * be used to launch content into the platform.  Promise will reject if the platform is already running.
     * @param { PlatformOptions } platformOptions
     * @return {Promise.<Platform>}
     * @tutorial Platform.start
     * @static
     */
    start(platformOptions) {
        this.wire.sendAction('platform-start').catch((e) => {
            // don't expose
        });
        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (resolve, reject) => {
            try {
                const { uuid } = platformOptions;
                // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                // @ts-ignore using private variable.
                const app = await this.fin.Application._create({ ...platformOptions, isPlatformController: true });
                app.once('platform-api-ready', () => resolve(this.wrapSync({ uuid })));
                // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                // @ts-ignore using private variable.
                app._run({ uuid });
            }
            catch (e) {
                reject(e);
            }
        });
    }
    /**
     * Retrieves platforms's manifest and returns a wrapped and running Platform.  If there is a snapshot in the manifest,
     * it will be launched into the platform.
     * @param {string} manifestUrl - The URL of platform's manifest.
     * @param {RvmLaunchOptions} [opts] - Parameters that the RVM will use.
     * @return {Promise.<Platform>}
     * @tutorial Platform.startFromManifest
     * @static
     */
    startFromManifest(manifestUrl, opts) {
        this.wire.sendAction('platform-start-from-manifest').catch((e) => {
            // don't expose
        });
        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (resolve, reject) => {
            try {
                // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                // @ts-ignore using private variable.
                const app = await this.fin.Application._createFromManifest(manifestUrl);
                app.once('platform-api-ready', () => resolve(this.wrapSync({ uuid: app.identity.uuid })));
                // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                // @ts-ignore using private method without warning.
                app._run(opts);
            }
            catch (e) {
                reject(e);
            }
        });
    }
}
exports["default"] = PlatformModule;


/***/ }),

/***/ "../../node_modules/@openfin/core/src/api/platform/Instance.js":
/*!*********************************************************************!*\
  !*** ../../node_modules/@openfin/core/src/api/platform/Instance.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _connectToProvider;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Platform = void 0;
const base_1 = __webpack_require__(/*! ../base */ "../../node_modules/@openfin/core/src/api/base.js");
const validate_1 = __webpack_require__(/*! ../../util/validate */ "../../node_modules/@openfin/core/src/util/validate.js");
// Reuse clients to avoid overwriting already-registered client in provider
const clientMap = new Map();
/** Manages the life cycle of windows and views in the application.
 *
 * Enables taking snapshots of itself and applying them to restore a previous configuration
 * as well as listen to <a href="tutorial-Platform.EventEmitter.html">platform events</a>.
 * @namespace
 */
class Platform extends base_1.EmitterBase {
    // eslint-disable-next-line no-shadow
    constructor(identity, channel) {
        // we piggyback off of application event emitter because from the core's perspective platform is just an app.
        super(channel.wire, 'application', identity.uuid);
        this.getClient = (identity) => {
            this.wire.sendAction('platform-get-client', this.identity).catch((e) => {
                // don't expose
            });
            const target = identity || this.identity;
            const { uuid } = target;
            if (!clientMap.has(uuid)) {
                const clientPromise = __classPrivateFieldGet(this, _connectToProvider).call(this, uuid);
                clientMap.set(uuid, clientPromise);
            }
            // we set it above
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            return clientMap.get(uuid);
        };
        _connectToProvider.set(this, async (uuid) => {
            try {
                const channelName = `custom-frame-${uuid}`;
                const client = await this._channel.connect(channelName, { wait: false });
                client.onDisconnection(() => {
                    clientMap.delete(uuid);
                });
                return client;
            }
            catch (e) {
                clientMap.delete(uuid);
                throw new Error('The targeted Platform is not currently running. Listen for application-started event for the given Uuid.');
            }
        });
        // Deprecated (renamed)
        this.launchLegacyManifest = this.launchContentManifest;
        const errorMsg = validate_1.validateIdentity(identity);
        if (errorMsg) {
            throw new Error(errorMsg);
        }
        this._channel = channel;
        this.identity = { uuid: identity.uuid };
        this.Layout = this.fin.Platform.Layout;
        this.Application = this.fin.Application.wrapSync(this.identity);
    }
    /**
     * Creates a new view and attaches it to a specified target window.
     * @param { View~options } viewOptions View creation options
     * @param { Identity } [target] The window to which the new view is to be attached. If no target, create a view in a new window.
     * @param { Identity } [targetView] If provided, the new view will be added to the same tabstrip as targetView.
     * @return { Promise<View> }
     * @tutorial Platform.createView
     */
    async createView(viewOptions, target, targetView) {
        this.wire.sendAction('platform-create-view', this.identity).catch((e) => {
            // don't expose
        });
        const client = await this.getClient();
        const response = await client.dispatch('create-view', {
            target,
            opts: viewOptions,
            targetView
        });
        if (!response || validate_1.validateIdentity(response.identity)) {
            throw new Error(`When overwriting the createView call, please return an object that has a valid 'identity' property: ${JSON.stringify(response)}`);
        }
        return this.fin.View.wrapSync(response.identity);
    }
    /**
     * Creates a new Window.
     * @param { Window~options } options Window creation options
     * @return { Promise<_Window> }
     * @tutorial Platform.createWindow
     */
    async createWindow(options) {
        this.wire.sendAction('platform-create-window', this.identity).catch((e) => {
            // don't expose
        });
        const client = await this.getClient();
        if (!options.reason) {
            options.reason = 'api-call';
        }
        const response = await client.dispatch('create-view-container', options);
        if (!response || validate_1.validateIdentity(response.identity)) {
            throw new Error(`When overwriting the createWindow call, please return an object that has a valid 'identity' property: ${JSON.stringify(response)}`);
        }
        const { identity } = response;
        const res = this.fin.Window.wrapSync(identity);
        // we add the identity at the top level for backwards compatibility.
        res.name = identity.name;
        res.uuid = identity.uuid;
        return res;
    }
    /**
     * Closes current platform, all its windows, and their views.
     * @return { Promise<void> }
     * @tutorial Platform.quit
     */
    async quit() {
        this.wire.sendAction('platform-quit', this.identity).catch((e) => {
            // don't expose
        });
        const client = await this.getClient();
        return client.dispatch('quit');
    }
    /**
     * Closes a specified view in a target window.
     * @param { Identity } viewIdentity View identity
     * @return { Promise<void> }
     * @tutorial Platform.closeView
     */
    async closeView(viewIdentity) {
        this.wire.sendAction('platform-close-view', this.identity).catch((e) => {
            // don't expose
        });
        const client = await this.getClient();
        await client.dispatch('close-view', {
            view: viewIdentity
        });
    }
    /**
     * ***DEPRECATED - please use Platform.createView.***
     * Reparents a specified view in a new target window.
     * @param { Identity } viewIdentity View identity
     * @param { Identity } target new owner window identity
     * @return { Promise<View> }
     * @tutorial Platform.createView
     */
    async reparentView(viewIdentity, target) {
        var _a;
        // eslint-disable-next-line no-console
        console.warn('Platform.reparentView has been deprecated, please use Platform.createView');
        this.wire.sendAction('platform-reparent-view', this.identity).catch((e) => {
            // don't expose
        });
        const normalizedViewIdentity = {
            ...viewIdentity,
            uuid: (_a = viewIdentity.uuid) !== null && _a !== void 0 ? _a : this.identity.uuid
        };
        const view = await this.fin.View.wrap(normalizedViewIdentity);
        const viewOptions = await view.getOptions();
        return this.createView(viewOptions, target);
    }
    /**
     * Returns a snapshot of the platform in its current state.
     *
     * Can be used to restore an application to a previous state.
     * @return { Promise<Snapshot> }
     * @tutorial Platform.getSnapshot
     */
    async getSnapshot() {
        this.wire.sendAction('platform-get-snapshot', this.identity).catch((e) => {
            // don't expose
        });
        const client = await this.getClient();
        return client.dispatch('get-snapshot');
    }
    /**
     * Adds a snapshot to a running Platform.
     * Requested snapshot must be a valid Snapshot object, or a url or filepath to such an object.
     *
     * Can optionally close existing windows and overwrite current platform state with that of a snapshot.
     *
     * The function accepts either a snapshot taken using {@link Platform#getSnapshot getSnapshot},
     * or a url or filepath to a snapshot JSON object.
     * @param { Snapshot | string } requestedSnapshot Snapshot to apply, or a url or filepath.
     * @param { ApplySnapshotOptions } [options] Optional parameters to specify whether existing windows should be closed.
     * @return { Promise<Platform> }
     * @tutorial Platform.applySnapshot
     */
    async applySnapshot(requestedSnapshot, options) {
        this.wire.sendAction('platform-apply-snapshot', this.identity).catch((e) => {
            // don't expose
        });
        const errMsg = 'Requested snapshot must be a valid Snapshot object, or a url or filepath to such an object.';
        let snapshot;
        if (typeof requestedSnapshot === 'string') {
            // Fetch and parse snapshot
            try {
                const response = await this._channel.wire.sendAction('get-application-manifest', {
                    manifestUrl: requestedSnapshot
                });
                snapshot = response.payload.data;
            }
            catch (err) {
                throw new Error(`${errMsg}: ${err}`);
            }
        }
        else {
            snapshot = requestedSnapshot;
        }
        if (!snapshot.windows) {
            throw new Error(errMsg);
        }
        const client = await this.getClient();
        await client.dispatch('apply-snapshot', {
            snapshot,
            options
        });
        return this;
    }
    /**
     * Fetches a JSON manifest using the browser process and returns a Javascript object.
     * Can be overwritten using {@link Platform#init Platform.init}.
     * @param { string } manifestUrl The URL of the manifest to fetch.
     * @return { Promise<any> }
     * @tutorial Platform.fetchManifest
     */
    async fetchManifest(manifestUrl) {
        const client = await this.getClient();
        return client.dispatch('platform-fetch-manifest', { manifestUrl });
    }
    /**
     * Retrieves a manifest by url and launches a legacy application manifest or snapshot into the platform.  Returns a promise that
     * resolves to the wrapped Platform.
     * @param {string} manifestUrl - The URL of the manifest that will be launched into the platform.  If this app manifest
     * contains a snapshot, that will be launched into the platform.  If not, the application described in startup_app options
     * will be launched into the platform. The applicable startup_app options will become {@link View~options View Options}.
     * @return {Promise<Platform>}
     * @tutorial Platform.launchContentManifest
     * @experimental
     */
    async launchContentManifest(manifestUrl) {
        this.wire.sendAction('platform-launch-content-manifest', this.identity).catch((e) => {
            // don't expose
        });
        const client = await this.getClient();
        const manifest = await this.fetchManifest(manifestUrl);
        client.dispatch('launch-into-platform', { manifest });
        return this;
    }
    /**
     * Set the context of a host window. The context will be available to the window itself, and to its child Views. It will be saved in any platform snapshots.
     * It can be retrieved using {@link Platform#getWindowContext getWindowContext}.
     * @param {any} context - A field where serializable context data can be stored to be saved in platform snapshots.
     * @param {Identity} [target] - A target window or view may optionally be provided. If no target is provided, the update will be applied
     * to the current window (if called from a Window) or the current host window (if called from a View).
     * @return {Promise<void>}
     * @tutorial Platform.setWindowContext
     * @experimental
     */
    async setWindowContext(context = {}, target) {
        this.wire.sendAction('platform-set-window-context', this.identity).catch((e) => {
            // don't expose
        });
        if (!context) {
            throw new Error('Please provide a serializable object or string to set the context.');
        }
        const client = await this.getClient();
        const { entityType } = target ? await this.fin.System.getEntityInfo(target.uuid, target.name) : this.fin.me;
        await client.dispatch('set-window-context', {
            context,
            entityType,
            target: target || { uuid: this.fin.me.uuid, name: this.fin.me.name }
        });
    }
    /**
     * Get the context context of a host window that was previously set using {@link Platform#setWindowContext setWindowContext}.
     * The context will be saved in any platform snapshots.  Returns a promise that resolves to the context.
     * @param {Identity} [target] - A target window or view may optionally be provided. If no target is provided, target will be
     * the current window (if called from a Window) or the current host window (if called from a View).
     * @return {Promise<any>}
     * @tutorial Platform.getWindowContext
     * @experimental
     */
    async getWindowContext(target) {
        this.wire.sendAction('platform-get-window-context', this.identity).catch((e) => {
            // don't expose
        });
        const client = await this.getClient();
        const { entityType } = target ? await this.fin.System.getEntityInfo(target.uuid, target.name) : this.fin.me;
        return client.dispatch('get-window-context', {
            target: target || { uuid: this.fin.me.uuid, name: this.fin.me.name },
            entityType
        });
    }
    /**
     * Closes a window. If enableBeforeUnload is enabled in the Platform options, any beforeunload handler set on Views will fire
     * This behavior can be disabled by setting skipBeforeUnload to false in the options parameter.
     * @param {Identity} winId
     * @param {closeWindowoptions} [options]
     * @returns {Promise<void>}
     * @tutorial Platform.closeWindow
     * @experimental
     */
    async closeWindow(windowId, options = { skipBeforeUnload: false }) {
        this.wire.sendAction('platform-close-window', this.identity).catch((e) => {
            // don't expose
        });
        const client = await this.getClient();
        return client.dispatch('close-window', { windowId, options });
    }
}
exports.Platform = Platform;
_connectToProvider = new WeakMap();


/***/ }),

/***/ "../../node_modules/@openfin/core/src/api/platform/common-utils.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/@openfin/core/src/api/platform/common-utils.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isValidPresetType = void 0;
function isValidPresetType(type) {
    switch (type) {
        case 'columns':
        case 'grid':
        case 'rows':
        case 'tabs':
            return true;
        default:
            return false;
    }
}
exports.isValidPresetType = isValidPresetType;
exports["default"] = { isValidPresetType };


/***/ }),

/***/ "../../node_modules/@openfin/core/src/api/platform/index.js":
/*!******************************************************************!*\
  !*** ../../node_modules/@openfin/core/src/api/platform/index.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
}
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Factory_1 = __webpack_require__(/*! ./Factory */ "../../node_modules/@openfin/core/src/api/platform/Factory.js");
exports["default"] = Factory_1.default;
__exportStar(__webpack_require__(/*! ./Instance */ "../../node_modules/@openfin/core/src/api/platform/Instance.js"), exports);


/***/ }),

/***/ "../../node_modules/@openfin/core/src/api/platform/layout/Factory.js":
/*!***************************************************************************!*\
  !*** ../../node_modules/@openfin/core/src/api/platform/layout/Factory.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var _layoutManager;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LayoutModule = void 0;
/* eslint-disable no-undef, import/prefer-default-export */
const Instance_1 = __webpack_require__(/*! ./Instance */ "../../node_modules/@openfin/core/src/api/platform/layout/Instance.js");
const base_1 = __webpack_require__(/*! ../../base */ "../../node_modules/@openfin/core/src/api/base.js");
/**
 * InitLayoutOptions interface
 * @typedef { object } InitLayoutOptions
 * @property { string } [containerId] The id attribute of the container where the window's Layout should be initialized.  If not provided
 * then an element with id `layout-container` is used. We recommend using a div element.
 */
/**
 * PresetLayoutOptions interface
 * @typedef { object } PresetLayoutOptions
 * @property { LayoutPresetTypes } presetType Which preset layout arrangement to use.
 * The preset options are `columns`, `grid`, `rows`, and `tabs`.
 */
/**
 * LayoutConfig interface
 * @typedef { object } LayoutConfig
 * @property { Array<LayoutItem> } content Content of the layout.  There can only be one top-level LayoutItem in the content array.
 * We do not recommend trying to build Layouts or LayoutItems by hand and instead use calls such as {@link Platform#getSnapshot getSnapshot}
 * or our {@link https://openfin.github.io/golden-prototype/config-gen Layout Config Generation Tool }.
 * @property { LayoutSettings } settings Configuration for certain Layout behaviors. See the LayoutSettings interface.
 */
/**
 * LayoutItem Interface
 * @typedef { object } LayoutItem Represents the arrangement of Views within a Platform window's Layout.  We do not recommend trying
 * to build Layouts or LayoutItems by hand and instead use calls such as {@link Platform#getSnapshot getSnapshot} or our
 * {@link https://openfin.github.io/golden-prototype/config-gen Layout Config Generation Tool }.
 * @property { string } type The type of the item. Possible values are 'row', 'column', 'stack', and 'component'.
 * @property { Array<LayoutItem> } [content] An array of configurations for items that will be created as children of this item.
 * @property { string } [componentName] Only a `component` type will have this property and it should be set to `view`.
 * @property { View~options } [componentState] Only a `component` type will have this property and it represents the view
 * options of a given component.
 */
/**
 * LayoutSettings Interface
 * @typedef { object } LayoutSettings Represents a potential ways to customize behavior of your Layout
 * @property { boolean } [constrainDragToHeaders=false] Limits the area to which tabs can be dragged.
 * If true, stack headers are the only areas where tabs can be dropped.
 * @property { boolean } [hasHeaders=true] Turns tab headers on or off.
 * If false, the layout will be displayed with splitters only.
 * @property {object} [newTabButton]
 * Configuration of the Plus button that appears on each tabstrip. Upon pressing, a new tab
 * will be added to the tabstrip with the specified url.
 * @property {string} [newTabButton.url] Specifies the url that opens in the tab created upon pressing the button.
 * @property { boolean } [popoutWholeStack=false] Whether the popout button will only act on the entire stack,
 * as opposed to only the active tab.
 * @property { boolean } [preventDragIn=false] If true, tabs can't be dragged into the window.
 * @property { boolean } [preventDragOut=false] If true, tabs can't be dragged out of the window.
 * @property { boolean } [preventSplitterResize=false] If true, tab contents can't be resized by the user.
 * @property { boolean } [reorderEnabled=true] If true, the user can re-arrange the layout by
 * dragging items by their tabs to the desired location.
 * @property { boolean } [showCloseIcon=false] Whether to show the close button on stack header
 * (not to be confused with close button on every tab).
 * @property { boolean } [showMaximiseIcon=false] Whether to show the maximize button on stack header.
 * The button will maximize the current tab to fill the entire window.
 * @property { boolean } [showPopoutIcon=false] Whether to show the popout button on stack header.
 * The button will create a new window with current tab as its content.
 * In case `popoutWholeStack` is set to true, all tabs in the stack will be in the new window.
 */
/**
 * @lends Platform#Layout
 */
class LayoutModule extends base_1.Base {
    constructor() {
        super(...arguments);
        _layoutManager.set(this, void 0);
        /**
         * Initialize the window's Layout.  Must be called from a custom window that has a 'layout' option set upon creation of that window.
         * If a containerId is not provided, this method attempts to find an element with the id `layout-container`.
         * A Layout will <a href="tutorial-Layout.DOMEvents.html">emit events locally</a> on the DOM element representing the layout-container.
         * In order to capture the relevant events during Layout initiation, set up the listeners on the DOM element prior to calling `init`.
         * @param { InitLayoutOptions } [options] - Layout init options.
         * @return { Promise<Layout> }
         * @static
         * @experimental
         * @tutorial Layout.init
         */
        this.init = async (options = {}) => {
            this.wire.sendAction('layout-init').catch((e) => {
                // don't expose
            });
            if (!this.fin.me.isWindow) {
                throw new Error('Layout.init can only be called from a Window context.');
            }
            else if (__classPrivateFieldGet(this, _layoutManager)) {
                throw new Error('Layout for this window already initialized, please use Layout.replace call to replace the layout.');
            }
            // We need to go through environment to make sure it is only imported/bundled in OpenFin.
            const ManagerConstructor = await this.wire.environment.getManagerConstructor();
            __classPrivateFieldSet(this, _layoutManager, new ManagerConstructor());
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore - layout warning here for backwards compatibility, can remove layout check in .52
            let { layout, containerId } = options;
            if (layout) {
                console.warn(`We recommend using a layout in window options.
                This layout has not been sanitized and unexpected behavior can occur.`);
            }
            layout = layout || (await this.fin.Window.getCurrentSync().getOptions()).layout;
            containerId = containerId || 'layout-container';
            const container = document.getElementById(containerId);
            // Should we error here if there is no container? Getting a typescript complaint on createLayout
            // override here
            // pull createChannelConnection out of LayoutManager and setup channel connections here using layoutmanager instance methods?
            await __classPrivateFieldGet(this, _layoutManager).initManager();
            await __classPrivateFieldGet(this, _layoutManager).createLayout(layout, container);
            // Adding this to the returned instance undocumented/typed for Browser.
            return Object.assign(this.getCurrentSync(), { layoutManager: __classPrivateFieldGet(this, _layoutManager) });
        };
    }
    /**
     * Asynchronously returns a Layout object that represents a Window's layout.
     * @param { Identity } identity
     * @return {Promise.<Layout>}
     * @tutorial Layout.wrap
     * @static
     */
    // eslint-disable-next-line class-methods-use-this
    async wrap(identity) {
        this.wire.sendAction('layout-wrap').catch((e) => {
            // don't expose
        });
        return new Instance_1.Layout(identity, this.wire);
    }
    /**
     * Synchronously returns a Layout object that represents a Window's layout.
     * @param { Identity } identity
     * @return {Layout}
     * @tutorial Layout.wrapSync
     * @static
     */
    // eslint-disable-next-line class-methods-use-this
    wrapSync(identity) {
        this.wire.sendAction('layout-wrap-sync').catch((e) => {
            // don't expose
        });
        return new Instance_1.Layout(identity, this.wire);
    }
    /**
     * Asynchronously returns a Layout object that represents a Window's layout.
     * @return {Promise.<Layout>}
     * @tutorial Layout.getCurrent
     * @static
     */
    async getCurrent() {
        this.wire.sendAction('layout-get-current').catch((e) => {
            // don't expose
        });
        if (!this.fin.me.isWindow) {
            throw new Error('You are not in a Window context.  Only Windows can have a Layout.');
        }
        const { uuid, name } = this.fin.me;
        return this.wrap({ uuid, name });
    }
    /**
     * Synchronously returns a Layout object that represents a Window's layout.
     * @return {Layout}
     * @tutorial Layout.getCurrentSync
     * @static
     */
    getCurrentSync() {
        this.wire.sendAction('layout-get-current-sync').catch((e) => {
            // don't expose
        });
        if (!this.fin.me.isWindow) {
            throw new Error('You are not in a Window context.  Only Windows can have a Layout.');
        }
        const { uuid, name } = this.fin.me;
        return this.wrapSync({ uuid, name });
    }
}
exports.LayoutModule = LayoutModule;
_layoutManager = new WeakMap();


/***/ }),

/***/ "../../node_modules/@openfin/core/src/api/platform/layout/Instance.js":
/*!****************************************************************************!*\
  !*** ../../node_modules/@openfin/core/src/api/platform/layout/Instance.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/* eslint-disable no-undef, import/prefer-default-export */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Layout = void 0;
const validate_1 = __webpack_require__(/*! ../../../util/validate */ "../../node_modules/@openfin/core/src/util/validate.js");
const common_utils_1 = __webpack_require__(/*! ../common-utils */ "../../node_modules/@openfin/core/src/api/platform/common-utils.js");
const base_1 = __webpack_require__(/*! ../../base */ "../../node_modules/@openfin/core/src/api/base.js");
/**
 * @lends Platform#Layout
 */
class Layout extends base_1.Base {
    // eslint-disable-next-line no-shadow
    constructor(identity, wire) {
        super(wire);
        /**
         * Replaces a Platform window's layout with a new layout.  Any views that were in the old layout but not the new layout
         * will be destroyed.
         * @param { LayoutConfig } layout New layout to implement in the target window.
         * Please see explanation of a layout {@link https://developers.openfin.co/docs/platform-api#section-layout here}.
         * @return { Promise<void> }
         * @tutorial Layout.replace
         */
        this.replace = async (layout) => {
            this.wire.sendAction('layout-replace').catch((e) => {
                // don't expose
            });
            const client = await this.platform.getClient();
            await client.dispatch('replace-layout', {
                target: this.identity,
                opts: { layout }
            });
        };
        /**
         * Replaces the specified view with a view with the provided configuration.
         * The old view is stripped of its listeners and either closed or attached to the provider window
         * depending on `detachOnClose` view option.
         * @param { Identity } viewToReplace Identity of the view to be replaced
         * @param { View~options } newView Creation options of the new view.
         * @return { Promise<void> }
         * @tutorial Layout.replaceView
         */
        this.replaceView = async (viewToReplace, newView) => {
            this.wire.sendAction('layout-replace-view').catch((e) => {
                // don't expose
            });
            const client = await this.platform.getClient();
            await client.dispatch('replace-view', {
                target: this.identity,
                opts: { viewToReplace, newView }
            });
        };
        /**
         * Replaces a Platform window's layout with a preset layout arrangement using the existing Views attached to the window.
         * The preset options are `columns`, `grid`, `rows`, and `tabs`.
         * @param { PresetLayoutOptions } options Mandatory object with `presetType` property that sets which preset layout arrangement to use.
         * The preset options are `columns`, `grid`, `rows`, and `tabs`.
         * @return { Promise<void> }
         * @tutorial Layout.applyPreset
         */
        this.applyPreset = async (options) => {
            this.wire.sendAction('layout-apply-preset').catch((e) => {
                // don't expose
            });
            const client = await this.platform.getClient();
            const { presetType } = options;
            if (!presetType || !common_utils_1.isValidPresetType(presetType)) {
                throw new Error('Cannot apply preset layout, please include an applicable presetType property in the PresetLayoutOptions.');
            }
            await client.dispatch('apply-preset-layout', {
                target: this.identity,
                opts: { presetType }
            });
        };
        const errorMsg = validate_1.validateIdentity(identity);
        if (errorMsg) {
            throw new Error(errorMsg);
        }
        this.identity = identity;
        this.platform = this.fin.Platform.wrapSync({ uuid: identity.uuid });
        if (identity.uuid === this.fin.me.uuid && identity.name === this.fin.me.name) {
            this.init = this.fin.Platform.Layout.init;
        }
    }
    /**
     * Returns the configuration of the window's layout.  Returns the same information that is returned for all windows in getSnapshot.
     * @return { Promise<LayoutConfig> }
     * @tutorial Layout.getConfig
     */
    async getConfig() {
        this.wire.sendAction('layout-get-config').catch((e) => {
            // don't expose
        });
        const client = await this.platform.getClient();
        return client.dispatch('get-frame-snapshot', {
            target: this.identity
        });
    }
}
exports.Layout = Layout;


/***/ }),

/***/ "../../node_modules/@openfin/core/src/api/platform/layout/index.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/@openfin/core/src/api/platform/layout/index.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
}
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./Factory */ "../../node_modules/@openfin/core/src/api/platform/layout/Factory.js"), exports);
__exportStar(__webpack_require__(/*! ./Instance */ "../../node_modules/@openfin/core/src/api/platform/layout/Instance.js"), exports);


/***/ }),

/***/ "../../node_modules/@openfin/core/src/api/snapshot-source/Factory.js":
/*!***************************************************************************!*\
  !*** ../../node_modules/@openfin/core/src/api/snapshot-source/Factory.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const base_1 = __webpack_require__(/*! ../base */ "../../node_modules/@openfin/core/src/api/base.js");
const Instance_1 = __webpack_require__(/*! ./Instance */ "../../node_modules/@openfin/core/src/api/snapshot-source/Instance.js");
const utils_1 = __webpack_require__(/*! ./utils */ "../../node_modules/@openfin/core/src/api/snapshot-source/utils.js");
/**
 * @typedef { object } SnapshotProvider
 * @property {getSnapshot} [getSnapshot]
 * @property {applySnapshot} [applySnapshot]
 */
/**
 * @lends SnapshotSource
 */
class SnapshotSourceModule extends base_1.Base {
    /**
     * Initializes a SnapshotSource with the getSnapshot and applySnapshot methods defined.
     * @param { SnapshotProvider } provider
     * @return { Promise<void> }
     * @tutorial SnapshotSource.init
     * @static
     */
    async init(provider) {
        this.wire.sendAction('snapshot-source-init').catch((e) => {
            // don't expose, analytics-only call
        });
        if (typeof provider !== 'object' ||
            typeof provider.getSnapshot !== 'function' ||
            typeof provider.applySnapshot !== 'function') {
            throw new Error('you must pass in a valid SnapshotProvider');
        }
        const channel = await this.fin.InterApplicationBus.Channel.create(utils_1.getSnapshotSourceChannelName(fin.me.identity));
        channel.register('get-snapshot', async () => {
            const snapshot = await provider.getSnapshot();
            return { snapshot };
        });
        channel.register('apply-snapshot', ({ snapshot }) => provider.applySnapshot(snapshot));
    }
    /**
     * Synchronously returns a SnapshotSource object that represents the current SnapshotSource.
     * @param { Identity } identity
     * @return { SnapshotSource }
     * @tutorial SnapshotSource.wrapSync
     * @static
     */
    wrapSync(identity) {
        this.wire.sendAction('snapshot-source-wrap-sync').catch((e) => {
            // don't expose, analytics-only call
        });
        return new Instance_1.SnapshotSource(this.wire, identity);
    }
    /**
     * Asynchronously returns a SnapshotSource object that represents the current SnapshotSource.
     * @param { Identity } identity
     * @return { Promise.<SnapshotSource> }
     * @tutorial SnapshotSource.wrap
     * @static
     */
    async wrap(identity) {
        this.wire.sendAction('snapshot-source-wrap').catch((e) => {
            // don't expose, analytics-only call
        });
        return this.wrapSync(identity);
    }
}
exports["default"] = SnapshotSourceModule;


/***/ }),

/***/ "../../node_modules/@openfin/core/src/api/snapshot-source/Instance.js":
/*!****************************************************************************!*\
  !*** ../../node_modules/@openfin/core/src/api/snapshot-source/Instance.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _identity, _getConnection, _getClient, _startConnection, _setUpConnectionListener;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SnapshotSource = void 0;
/* eslint-disable @typescript-eslint/no-non-null-assertion */
const base_1 = __webpack_require__(/*! ../base */ "../../node_modules/@openfin/core/src/api/base.js");
const utils_1 = __webpack_require__(/*! ./utils */ "../../node_modules/@openfin/core/src/api/snapshot-source/utils.js");
const connectionMap = new Map();
/**
 * Enables configuring a SnapshotSource with custom getSnapshot and applySnapshot methods.
 * @namespace
 */
class SnapshotSource extends base_1.Base {
    constructor(wire, id) {
        super(wire);
        _identity.set(this, void 0);
        _getConnection.set(this, () => {
            if (!connectionMap.has(this.identity.uuid)) {
                connectionMap.set(this.identity.uuid, { eventFired: null, clientPromise: null });
            }
            return connectionMap.get(this.identity.uuid);
        });
        _getClient.set(this, () => {
            if (!__classPrivateFieldGet(this, _getConnection).call(this).clientPromise) {
                __classPrivateFieldGet(this, _getConnection).call(this).clientPromise = __classPrivateFieldGet(this, _startConnection).call(this);
            }
            return __classPrivateFieldGet(this, _getConnection).call(this).clientPromise;
        });
        _startConnection.set(this, async () => {
            const channelName = utils_1.getSnapshotSourceChannelName(this.identity);
            try {
                if (!__classPrivateFieldGet(this, _getConnection).call(this).eventFired) {
                    await __classPrivateFieldGet(this, _setUpConnectionListener).call(this);
                }
                const client = await this.fin.InterApplicationBus.Channel.connect(channelName, { wait: false });
                client.onDisconnection(() => {
                    __classPrivateFieldGet(this, _getConnection).call(this).clientPromise = null;
                    __classPrivateFieldGet(this, _getConnection).call(this).eventFired = null;
                });
                return client;
            }
            catch (e) {
                __classPrivateFieldGet(this, _getConnection).call(this).clientPromise = null;
                throw new Error("The targeted SnapshotSource is not currently initialized. Await this object's ready() method.");
            }
        });
        _setUpConnectionListener.set(this, async () => {
            const channelName = utils_1.getSnapshotSourceChannelName(this.identity);
            let resolve;
            let reject;
            const eventFired = new Promise((y, n) => {
                resolve = y;
                reject = n;
            });
            __classPrivateFieldGet(this, _getConnection).call(this).eventFired = eventFired;
            const listener = async (e) => {
                try {
                    if (e.channelName === channelName) {
                        resolve();
                        await this.fin.InterApplicationBus.Channel.removeListener('connected', listener);
                    }
                }
                catch (err) {
                    reject(err);
                }
            };
            await this.fin.InterApplicationBus.Channel.on('connected', listener);
        });
        __classPrivateFieldSet(this, _identity, id);
    }
    get identity() {
        return __classPrivateFieldGet(this, _identity);
    }
    /**
     * Method to determine if the SnapshotSource has been initialized.
     *
     * Use when the parent application is starting up to ensure the SnapshotSource is able to accept and
     * apply a snapshot using the {@link SnapshotSource#applySnapshot applySnapshot} method.
     * @return { Promise<void> }
     * @tutorial SnapshotSource.ready
     */
    async ready() {
        this.wire.sendAction('snapshot-source-ready').catch((e) => {
            // don't expose, analytics-only call
        });
        // eslint-disable-next-line no-async-promise-executor
        try {
            // If getClient was already called before this, do we have a timing issue where the channel might have been created but we missed the event but this still fails?
            await __classPrivateFieldGet(this, _getClient).call(this);
        }
        catch (e) {
            // it was not running.
            await __classPrivateFieldGet(this, _getConnection).call(this).eventFired;
        }
    }
    /**
     * Call the SnapshotSource's getSnapshot method defined by {@link SnapshotSource#init init}.
     * @return { Promise<any> }
     */
    async getSnapshot() {
        this.wire.sendAction('snapshot-source-get-snapshot').catch((e) => {
            // don't expose, analytics-only call
        });
        const client = await __classPrivateFieldGet(this, _getClient).call(this);
        const response = (await client.dispatch('get-snapshot'));
        return (await response).snapshot;
    }
    /**
     * Call the SnapshotSource's applySnapshot method defined by {@link SnapshotSource#init init}.
     * @return { Promise<void> }
     */
    async applySnapshot(snapshot) {
        this.wire.sendAction('snapshot-source-apply-snapshot').catch((e) => {
            // don't expose, analytics-only call
        });
        const client = await __classPrivateFieldGet(this, _getClient).call(this);
        return client.dispatch('apply-snapshot', { snapshot });
    }
}
exports.SnapshotSource = SnapshotSource;
_identity = new WeakMap(), _getConnection = new WeakMap(), _getClient = new WeakMap(), _startConnection = new WeakMap(), _setUpConnectionListener = new WeakMap();


/***/ }),

/***/ "../../node_modules/@openfin/core/src/api/snapshot-source/index.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/@openfin/core/src/api/snapshot-source/index.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
}
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Factory_1 = __webpack_require__(/*! ./Factory */ "../../node_modules/@openfin/core/src/api/snapshot-source/Factory.js");
exports["default"] = Factory_1.default;
__exportStar(__webpack_require__(/*! ./Instance */ "../../node_modules/@openfin/core/src/api/snapshot-source/Instance.js"), exports);


/***/ }),

/***/ "../../node_modules/@openfin/core/src/api/snapshot-source/utils.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/@openfin/core/src/api/snapshot-source/utils.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getSnapshotSourceChannelName = void 0;
const channelPrefix = 'snapshot-source-provider-';
exports.getSnapshotSourceChannelName = (id) => `${channelPrefix}${id.uuid}`;


/***/ }),

/***/ "../../node_modules/@openfin/core/src/api/system/index.js":
/*!****************************************************************!*\
  !*** ../../node_modules/@openfin/core/src/api/system/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const base_1 = __webpack_require__(/*! ../base */ "../../node_modules/@openfin/core/src/api/base.js");
const transport_errors_1 = __webpack_require__(/*! ../../transport/transport-errors */ "../../node_modules/@openfin/core/src/transport/transport-errors.js");
const window_1 = __webpack_require__(/*! ../window */ "../../node_modules/@openfin/core/src/api/window/index.js");
/**
 * AppAssetInfo interface
 * @typedef { object } AppAssetInfo
 * @property { string } src  The URL to a zip file containing the package files (executables, dlls, etc…)
 * @property { string } alias The name of the asset
 * @property { string } version The version of the package
 * @property { string } target Specify default executable to launch. This option can be overridden in launchExternalProcess
 * @property { string } args The default command line arguments for the aforementioned target.
 * @property { boolean } mandatory When set to true, the app will fail to load if the asset cannot be downloaded.
 * When set to false, the app will continue to load if the asset cannot be downloaded. (Default: true)
 */
/**
 * AppAssetRequest interface
 * @typedef { object } AppAssetRequest
 * @property { string } alias The name of the asset
 */
/**
 * ApplicationState interface
 * @typedef { object } ApplicationState
 * @property { boolean } isPlatform true when the application is a Platform controller
 * @property { boolean } isRunning  true when the application is running
 * @property { string } uuid uuid of the application
 * @property { string } parentUuid uuid of the application that launches this application
 */
/**
 * @typedef { object } ClearCacheOption
 * @summary Clear cache options.
 * @desc These are the options required by the clearCache function.
 *
 * @property {boolean} appcache html5 application cache
 * @property {boolean} cache browser data cache for html files and images
 * @property {boolean} cookies browser cookies
 * @property {boolean} localStorage browser data that can be used across sessions
 */
/**
 * CookieInfo interface
 * @typedef { object } CookieInfo
 * @property { string } name  The name of the cookie
 * @property { string } domain The domain of the cookie
 * @property { string } path The path of the cookie
 */
/**
 * CookieOption interface
 * @typedef { object } CookieOption
 * @property { string } name The name of the cookie
 */
/**
 * CpuInfo interface
 * @typedef { object } CpuInfo
 * @property { string } model The model of the cpu
 * @property { number } speed The number in MHz
 * @property { Time } times The numbers of milliseconds the CPU has spent in different modes.
 */
/**
 * CrashReporterState interface
 * @typedef { object } CrashReporterState
 * @property { boolean } diagnosticsMode In diagnostics mode the crash reporter will send diagnostic logs to
 *  the OpenFin reporting service on runtime shutdown
 * @property { boolean } isRunning check if it's running
 */
/**
 * CrashReporterOptions interface
 * @typedef { object } CrashReporterOptions
 * @property { boolean } diagnosticsMode In diagnostics mode the crash reporter will send diagnostic logs to
 *  the OpenFin reporting service on runtime shutdown
 */
/**
 * DipRect interface
 * @typedef { object } DipRect
 * @property { Rect } dipRect The DIP coordinates
 * @property { Rect } scaledRect The scale coordinates
 */
/**
 * DipScaleRects interface
 * @typedef { object } DipScaleRects
 * @property { Rect } dipRect The DIP coordinates
 * @property { Rect } scaledRect The scale coordinates
 */
/**
 * DownloadPreloadInfo interface
 * @typedef { object } DownloadPreloadInfo
 * @desc downloadPreloadScripts function return value
 * @property { string } url url to the preload script
 * @property { string } error error during preload script acquisition
 * @property { boolean } succeess download operation success
 */
/**
 * DownloadPreloadOption interface
 * @typedef { object } DownloadPreloadOption
 * @desc These are the options object required by the downloadPreloadScripts function
 * @property { string } url url to the preload script
 */
/**
 * ApplicationType interface
 * @typedef { object } ApplicationType
 * @property { string } type The type of the entity
 * @property { string } uuid The uuid of the entity
 */
/**
 * EntityInfo interface
 * @typedef { object } EntityInfo
 * @property { string } name The name of the entity
 * @property { string } uuid The uuid of the entity
 * @property { Identity } parent The parent of the entity
 * @property { string } entityType The type of the entity
 */
/**
 * ExternalApplicationInfo interface
 * @typedef { object } ExternalApplicationInfo
 * @property { Identity } parent The parent identity
 */
/**
 * ExternalConnection interface
 * @typedef { object } ExternalConnection
 * @property { string } token The token to broker an external connection
 * @property { string } uuid The uuid of the external connection
 */
/**
 * ExternalProcessRequestType interface
 * @typedef { object } ExternalProcessRequestType
 * @property { string } path The file path to where the running application resides
 * @property { string } arguments The argument passed to the running application
 * @property { LaunchExternalProcessListener } listener This is described in the {LaunchExternalProcessListner} type definition
 * @property { string } initialWindowState Initial window state after launching: 'normal' (default), 'minimized', 'maximized'
 * @property { string } cwd current working directory
 */
/**
 * FrameInfo interface
 * @typedef { object } FrameInfo
 * @property { string } name The name of the frame
 * @property { string } uuid The uuid of the frame
 * @property { EntityType } entityType The entity type, could be 'window', 'iframe', 'external connection' or 'unknown'
 * @property { Identity } parent The parent identity
 */
/**
 * GetLogRequestType interface
 * @typedef { object } GetLogRequestType
 * @property { string } name The name of the running application
 * @property { number } endFile The file length of the log file
 * @property { number } sizeLimit The set size limit of the log file
 */
/**
 * GpuInfo interface
 * @typedef { object } GpuInfo
 * @property { string } name The graphics card name
 */
/**
 * HostSpecs interface
 * @typedef { object } HostSpecs
 * @property { boolean } aeroGlassEnabled Value to check if Aero Glass theme is supported on Windows platforms
 * @property { string } arch "x86" for 32-bit or "x86_64" for 64-bit
 * @property { Array<CpuInfo> } cpus The same payload as Node's os.cpus()
 * @property { GpuInfo } gpu The graphics card name
 * @property { number } memory The same payload as Node's os.totalmem()
 * @property { string } name The OS name and version/edition
 * @property { boolean } screenSaver Value to check if screensaver is running. Supported on Windows only
 */
/**
 * Identity interface
 * @typedef { object } Identity
 * @property { string } name Optional - the name of the component
 * @property { string } uuid Universally unique identifier of the application
 */
/**
 * LogInfo interface
 * @typedef { object } LogInfo
 * @property { string } name The filename of the log
 * @property { number } size The size of the log in bytes
 * @property { string } date The unix time at which the log was created "Thu Jan 08 2015 14:40:30 GMT-0500 (Eastern Standard Time)"
 */
/**
 * ManifestInfo interface
 * @typedef { object } ManifestInfo
 * @property { string } uuid The uuid of the application
 * @property { string } manifestUrl The runtime manifest URL
 */
/**
 * MonitorDetails interface
 * @typedef { object } MonitorDetails
 * @property { DipScaleRects } available The available DIP scale coordinates
 * @property { Rect } availableRect The available monitor coordinates
 * @property { string } deviceId The device id of the display
 * @property { boolean } displayDeviceActive true if the display is active
 * @property { number } deviceScaleFactor The device scale factor
 * @property { Rect } monitorRect The monitor coordinates
 * @property { string } name The name of the display
 * @property { Point } dpi The dots per inch
 * @property { DipScaleRects } monitor The monitor coordinates
 */
/**
 * MonitorInfo interface
 * @typedef { object } MonitorInfo
 * @property { number } deviceScaleFactor The device scale factor
 * @property { Point } dpi The dots per inch
 * @property { Array<MonitorDetails> } nonPrimaryMonitors The array of monitor details
 * @property { MonitorDetails } primaryMonitor The monitor details
 * @property { string } reason always "api-query"
 * @property { TaskBar } taskBar The taskbar on monitor
 * @property { DipRect } virtualScreen The virtual display screen coordinates
 */
/**
 * @typedef { verbose | info | warning | error | fatal } LogLevel
 * @summary Log verbosity levels.
 * @desc Describes the minimum level (inclusive) above which logs will be written
 *
 * @property { string } verbose all logs written
 * @property { string } info info and above
 * @property { string } warning warning and above
 * @property { string } error error and above
 * @property { string } fatal fatal only, indicates a crash is imminent
 */
/**
 * PointTopLeft interface
 * @typedef { object } PointTopLeft
 * @property { number } top The mouse top position in virtual screen coordinates
 * @property { number } left The mouse left position in virtual screen coordinates
 */
/**
 * Point interface
 * @typedef { object } Point
 * @property { number } x The mouse x position
 * @property { number } y The mouse y position
 */
/**
 * ProcessInfo interface
 * @typedef { object } ProcessInfo
 * @property { number } cpuUsage The percentage of total CPU usage
 * @property { string } name The application name
 * @property { number } nonPagedPoolUsage The current nonpaged pool usage in bytes
 * @property { number } pageFaultCount The number of page faults
 * @property { number } pagedPoolUsage The current paged pool usage in bytes
 * @property { number } pagefileUsage The total amount of memory in bytes that the memory manager has committed
 * @property { number } peakNonPagedPoolUsage The peak nonpaged pool usage in bytes
 * @property { number } peakPagedPoolUsage The peak paged pool usage in bytes
 * @property { number } peakPagefileUsage The peak value in bytes of pagefileUsage during the lifetime of this process
 * @property { number } peakWorkingSetSize The peak working set size in bytes
 * @property { number } processId The native process identifier
 * @property { string } uuid The application UUID
 * @property { number } workingSetSize The current working set size (both shared and private data) in bytes
 */
/**
 * SystemProcessInfo interface
 * @typedef { object } SystemProcessInfo
 * @property { ProcessDetails } browserProcess Info on browser process
 * @property { Array<AppProcessInfo> } apps Array of apps and their process info
 */
/**
 * AppProcessInfo interface
 * @typedef { object } AppProcessInfo
 * @property { string } uuid The uuid of the application
 * @property { Array<EntityProcessDetails> } entities  Array of process info for each window and view for the application
 */
/**
 * EntityProcessDetails interface
 * @typedef { object } EntityProcessDetails
 * @property { string } uuid The uuid for the entity
 * @property { string } name The name for the entity
 * @property { string } url URL associated with the entity
 * @property { string } entityType Type for the entity: window or view
 * @property { number } cpuUsage The percentage of total CPU usage
 * @property { number } nonPagedPoolUsage The current nonpaged pool usage in bytes
 * @property { number } pageFaultCount The number of page faults
 * @property { number } pagedPoolUsage The current paged pool usage in bytes
 * @property { number } pagefileUsage The total amount of memory in bytes that the memory manager has committed
 * @property { number } peakNonPagedPoolUsage The peak nonpaged pool usage in bytes
 * @property { number } peakPagedPoolUsage The peak paged pool usage in bytes
 * @property { number } peakPagefileUsage The peak value in bytes of pagefileUsage during the lifetime of this process
 * @property { number } peakWorkingSetSize The peak working set size in bytes
 * @property { number } privateSetSize The current working set size (not shared)
 * @property { number } workingSetSize The current working set size (both shared and private data) in bytes
 * @property { number } pid The native process identifier
 * @property { Array<FrameProcessDetails> } frames Array of process info for each iframe corresponeding to the entity
 */
/**
 * FrameProcessDetails interface
 * @typedef { object } FrameProcessDetails
 * @property { string } url Current URL associated with the process
 * @property { string } entityType Type for the frame
 * @property { number } cpuUsage The percentage of total CPU usage
 * @property { number } nonPagedPoolUsage The current nonpaged pool usage in bytes
 * @property { number } pageFaultCount The number of page faults
 * @property { number } pagedPoolUsage The current paged pool usage in bytes
 * @property { number } pagefileUsage The total amount of memory in bytes that the memory manager has committed
 * @property { number } peakNonPagedPoolUsage The peak nonpaged pool usage in bytes
 * @property { number } peakPagedPoolUsage The peak paged pool usage in bytes
 * @property { number } peakPagefileUsage The peak value in bytes of pagefileUsage during the lifetime of this process
 * @property { number } peakWorkingSetSize The peak working set size in bytes
 * @property { number } workingSetSize The current working set size (both shared and private data) in bytes
 * @property { number } pid The native process identifier
 */
/**
 * ProcessDetails interface
 * @typedef { object } ProcessDetails
 * @property { number } cpuUsage The percentage of total CPU usage
 * @property { number } nonPagedPoolUsage The current nonpaged pool usage in bytes
 * @property { number } pageFaultCount The number of page faults
 * @property { number } pagedPoolUsage The current paged pool usage in bytes
 * @property { number } pagefileUsage The total amount of memory in bytes that the memory manager has committed
 * @property { number } peakNonPagedPoolUsage The peak nonpaged pool usage in bytes
 * @property { number } peakPagedPoolUsage The peak paged pool usage in bytes
 * @property { number } peakPagefileUsage The peak value in bytes of pagefileUsage during the lifetime of this process
 * @property { number } peakWorkingSetSize The peak working set size in bytes
 * @property { number } workingSetSize The current working set size (both shared and private data) in bytes
 * @property { number } pid The native process identifier
 */
/**
 * ProxyConfig interface
 * @typedef { object } ProxyConfig
 * @property { string } proxyAddress The configured proxy address
 * @property { number } proxyPort The configured proxy port
 * @property { string } type The proxy Type
 */
/**
 * ProxyInfo interface
 * @typedef { object } ProxyInfo
 * @property { ProxyConfig } config The proxy config
 * @property { ProxySystemInfo } system The proxy system info
 */
/**
 * QueryPermissionResult interface
 * @typedef { object } QueryPermissionResult
 * @property { string } permission The full name of a secured API
 * @property { string } state 'granted' | 'denied' | 'unavailable'
 * @property { boolean } granted true if permission is granted
 * @property { object } [rawValue] The value of permission
 */
/**
 * ProxySystemInfo interface
 * @typedef { object } ProxySystemInfo
 * @property { string } autoConfigUrl The auto configuration url
 * @property { string } bypass The proxy bypass info
 * @property { boolean } enabled Value to check if a proxy is enabled
 * @property { string } proxy The proxy info
 */
/**
 * Rect interface
 * @typedef { object } Rect
 * @property { number } bottom The bottom-most coordinate
 * @property { number } left The left-most coordinate
 * @property { number } right The right-most coordinate
 * @property { number } top The top-most coordinate
 */
/**
 * RegistryInfo interface
 * @typedef { object } RegistryInfo
 * @property { any } data The registry data
 * @property { string } rootKey The registry root key
 * @property { string } subkey The registry key
 * @property { string } type The registry type
 * @property { string } value The registry value name
 */
/**
 * RuntimeDownloadOptions interface
 * @typedef { object } RuntimeDownloadOptions
 * @desc These are the options object required by the downloadRuntime function.
 * @property { string } version The given version to download
 */
/**
 * RuntimeInfo interface
 * @typedef { object } RuntimeInfo
 * @property { string } architecture The runtime build architecture
 * @property { string } manifestUrl The runtime manifest URL
 * @property { number } port The runtime websocket port
 * @property { string } securityRealm The runtime security realm
 * @property { string } version The runtime version
 * @property { object } args the command line argument used to start the Runtime
 * @property { string } chromeVersion The chrome version
 * @property { string } electronVersion The electron version
 */
/**
 * RVMInfo interface
 * @typedef { object } RVMInfo
 * @property { string } action The name of action: "get-rvm-info"
 * @property { string } appLogDirectory The app log directory
 * @property { string } path The path of OpenfinRVM.exe
 * @property { string } 'start-time' The start time of RVM
 * @property { string } version The version of RVM
 * @property { string } 'working-dir' The working directory
 */
/**
 * RvmLaunchOptions interface
 * @typedef { object } RvmLaunchOptions
 * @property { boolean } [noUi] true if no UI when launching
 * @property { object } [userAppConfigArgs] The user app configuration args
 */
/**
 * ServiceIdentifier interface
 * @typedef { object } ServiceIdentifier
 * @property { string } name The name of the service
 */
/**
 * ServiceConfiguration interface
 * @typedef { object } ServiceConfiguration
 * @property { object } config The service configuration
 * @property { string } name The name of the service
 */
/**
 * ShortCutConfig interface
 * @typedef { object } ShortCutConfig
 * @property { boolean } desktop true if application has a shortcut on the desktop
 * @property { boolean } startMenu true if application has shortcut in the start menu
 * @property { boolean } systemStartup true if application will be launched on system startup
 */
/**
 * SubOptions interface
 * @typedef { Object } SubOptions
 * @property { number } timestamp The event timestamp
 */
/**
 * TaskBar interface
 * @typedef { object } TaskBar
 * @property { string } edge which edge of a monitor the taskbar is on
 * @property { Rect } rect The taskbar coordinates
 */
/**
 * TerminateExternalRequestType interface
 * @typedef { object } TerminateExternalRequestType
 * @property { string } uuid The uuid of the running application
 * @property { number } timeout Time out period before the running application terminates
 * @property { boolean } killtree Value to terminate the running application
 */
/**
 * Time interface
 * @typedef { object } Time
 * @property { number } user The number of milliseconds the CPU has spent in user mode
 * @property { number } nice The number of milliseconds the CPU has spent in nice mode
 * @property { number } sys The number of milliseconds the CPU has spent in sys mode
 * @property { number } idle The number of milliseconds the CPU has spent in idle mode
 * @property { number } irq The number of milliseconds the CPU has spent in irq mode
 */
/**
 * TrayInfo interface
 * @typedef { object } TrayInfo
 * @property { Bounds } bounds The bound of tray icon in virtual screen pixels
 * @property { MonitorInfo } monitorInfo Please see fin.System.getMonitorInfo for more information
 * @property { number } x copy of bounds.x
 * @property { number } y copy of bounds.y
 */
/**
 * WindowDetail interface
 * @typedef { object } WindowDetail
 * @property { number } bottom The bottom-most coordinate of the window
 * @property { number } height The height of the window
 * @property { boolean } isShowing Value to check if the window is showing
 * @property { number } left The left-most coordinate of the window
 * @property { string } name The name of the window
 * @property { number } right The right-most coordinate of the window
 * @property { string } state The window state
 * @property { number } top The top-most coordinate of the window
 * @property { number } width The width of the window
 */
/**
 * ApplicationWindowInfo interface
 * @typedef { object } ApplicationWindowInfo
 * @property { Array<WindowDetail> } childWindows The array of child windows details
 * @property { WindowDetail } mainWindow The main window detail
 * @property { string } uuid The uuid of the application
 */
/**
 * CertifiedAppInfo interface
 * @typedef { object } CertifiedAppInfo
 * @property { boolean } isRunning true if the app is running
 * @property { boolean } [isOptedIntoCertfiedApp] true if the app has opted into certification
 * @property { boolean } [isCertified] true if the app is certified
 * @property { boolean } [isSSLCertified] true if the app manifest's SSL certificate is valid
 * @property { boolean } [isPresentInAppDirectory] true if the app is present in the OpenFin app directory
 */
/**
 * An object representing the core of OpenFin Runtime. Allows the developer
 * to perform system-level actions, such as accessing logs, viewing processes,
 * clearing the cache and exiting the runtime as well as listen to <a href="tutorial-System.EventEmitter.html">system events</a>.
 * @namespace
 */
class System extends base_1.EmitterBase {
    constructor(wire) {
        super(wire, 'system');
    }
    sendExternalProcessRequest(action, options) {
        return new Promise((resolve, reject) => {
            const exitEventKey = 'external-process-exited';
            let processUuid;
            let exitPayload;
            let externalProcessExitHandler;
            let ofWindow;
            if (typeof options.listener === 'function') {
                externalProcessExitHandler = (payload) => {
                    const data = payload || {};
                    exitPayload = {
                        topic: 'exited',
                        uuid: data.processUuid || '',
                        exitCode: data.exitCode || 0
                    };
                    if (processUuid === payload.processUuid) {
                        options.listener(exitPayload);
                        ofWindow.removeListener(exitEventKey, externalProcessExitHandler);
                    }
                };
                // window constructor expects the name is not undefined
                if (!this.wire.me.name) {
                    this.wire.me.name = this.wire.me.uuid;
                }
                ofWindow = new window_1._Window(this.wire, this.wire.me);
                ofWindow.on(exitEventKey, externalProcessExitHandler);
            }
            this.wire
                .sendAction(action, options)
                .then(({ payload }) => {
                processUuid = payload.data.uuid;
                resolve(payload.data);
                if (exitPayload && processUuid === exitPayload.uuid) {
                    options.listener(exitPayload);
                    ofWindow.removeListener(exitEventKey, externalProcessExitHandler);
                }
            })
                .catch((err) => {
                if (ofWindow) {
                    ofWindow.removeListener(exitEventKey, externalProcessExitHandler);
                }
                reject(err);
            });
        });
    }
    /**
     * Adds a listener to the end of the listeners array for the specified event.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - Called whenever an event of the specified type occurs.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function addListener
     * @memberof System
     * @instance
     * @tutorial System.EventEmitter
     */
    /**
     * Adds a listener to the end of the listeners array for the specified event.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - Called whenever an event of the specified type occurs.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function on
     * @memberof System
     * @instance
     * @tutorial System.EventEmitter
     */
    /**
     * Adds a one time listener for the event. The listener is invoked only the first time the event is fired, after which it is removed.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - The callback function.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function once
     * @memberof System
     * @instance
     * @tutorial System.EventEmitter
     */
    /**
     * Adds a listener to the beginning of the listeners array for the specified event.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - The callback function.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function prependListener
     * @memberof System
     * @instance
     * @tutorial System.EventEmitter
     */
    /**
     * Adds a one time listener for the event. The listener is invoked only the first time the event is fired, after which it is removed.
     * The listener is added to the beginning of the listeners array.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - The callback function.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function prependOnceListener
     * @memberof System
     * @instance
     * @tutorial System.EventEmitter
     */
    /**
     * Remove a listener from the listener array for the specified event.
     * Caution: Calling this method changes the array indices in the listener array behind the listener.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - The callback function.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function removeListener
     * @memberof System
     * @instance
     * @tutorial System.EventEmitter
     */
    /**
     * Removes all listeners, or those of the specified event.
     * @param { string | symbol } [eventType]  - The type of the event.
     * @return {Promise.<this>}
     * @function removeAllListeners
     * @memberof System
     * @instance
     * @tutorial System.EventEmitter
     */
    /**
     * Returns the version of the runtime. The version contains the major, minor,
     * build and revision numbers.
     * @return {Promise.<string>}
     * @tutorial System.getVersion
     */
    getVersion() {
        return this.wire.sendAction('get-version').then(({ payload }) => payload.data);
    }
    /**
     * Clears cached data containing application resource
     * files (images, HTML, JavaScript files), cookies, and items stored in the
     * Local Storage.
     * @param { ClearCacheOption } options - See tutorial for more details.
     * @return {Promise.<void>}
     * @tutorial System.clearCache
     */
    clearCache(options) {
        return this.wire.sendAction('clear-cache', options).then(() => undefined);
    }
    /**
     * Clears all cached data when OpenFin Runtime exits.
     * @return {Promise.<void>}
     * @tutorial System.deleteCacheOnExit
     */
    deleteCacheOnExit() {
        return this.wire.sendAction('delete-cache-request').then(() => undefined);
    }
    /**
     * Exits the Runtime.
     * @return {Promise.<void>}
     * @tutorial System.exit
     */
    exit() {
        return this.wire.sendAction('exit-desktop').then(() => undefined);
    }
    /**
     * Fetches a JSON manifest using the browser process and returns a Javascript object.
     * @param { string } manifestUrl The URL of the manifest to fetch.
     * @return {Promise.<any>}
     * @tutorial System.fetchManifest
     */
    async fetchManifest(manifestUrl) {
        const { payload: { data } } = await this.wire.sendAction('fetch-manifest', { manifestUrl });
        return data;
    }
    /**
     * Writes any unwritten cookies data to disk.
     * @return {Promise.<void>}
     * @tutorial System.flushCookieStore
     */
    flushCookieStore() {
        return this.wire.sendAction('flush-cookie-store').then(() => undefined);
    }
    /**
     * Retrieves an array of data (name, ids, bounds) for all application windows.
     * @return {Promise.Array.<ApplicationWindowInfo>}
     * @tutorial System.getAllWindows
     */
    getAllWindows() {
        return this.wire.sendAction('get-all-windows').then(({ payload }) => payload.data);
    }
    /**
     * Retrieves an array of data for all applications.
     * @return {Promise.Array.<ApplicationState>}
     * @tutorial System.getAllApplications
     */
    getAllApplications() {
        return this.wire.sendAction('get-all-applications').then(({ payload }) => payload.data);
    }
    /**
     * Retrieves the command line argument string that started OpenFin Runtime.
     * @return {Promise.<string>}
     * @tutorial System.getCommandLineArguments
     */
    getCommandLineArguments() {
        return this.wire.sendAction('get-command-line-arguments').then(({ payload }) => payload.data);
    }
    /**
     * Get the current state of the crash reporter.
     * @return {Promise.<CrashReporterState>}
     * @tutorial System.getCrashReporterState
     */
    async getCrashReporterState() {
        const { payload: { data: { diagnosticMode, isRunning } } } = await this.wire.sendAction('get-crash-reporter-state');
        console.warn('diagnosticMode property is deprecated. It will be removed in a future version');
        return {
            // diagnosticMode will be removed in a future version
            diagnosticMode,
            diagnosticsMode: diagnosticMode,
            isRunning
        };
    }
    /**
     * Start the crash reporter if not already running.
     * @param { CrashReporterOptions } options - configure crash reporter
     * @return {Promise.<CrashReporterState>}
     * @tutorial System.startCrashReporter
     */
    async startCrashReporter(options) {
        const opts = options;
        const newOpts = { ...opts, diagnosticMode: opts.diagnosticsMode || opts.diagnosticMode };
        const { payload: { data: { diagnosticMode, isRunning } } } = await this.wire.sendAction('start-crash-reporter', newOpts);
        return {
            // diagnosticMode will be removed in a future version
            diagnosticMode,
            diagnosticsMode: diagnosticMode,
            isRunning
        };
    }
    /**
     * Returns a hex encoded hash of the machine id and the currently logged in user name.
     * This is the recommended way to uniquely identify a user / machine combination.
     * @return {Promise.<string>}
     * @tutorial System.getUniqueUserId
     * @static
     */
    getUniqueUserId() {
        return this.wire.sendAction('get-unique-user-id').then(({ payload }) => payload.data);
    }
    /**
     * Retrieves a frame info object for the uuid and name passed in
     * @param { string } uuid - The UUID of the target.
     * @param { string } name - The name of the target.
     * @return {Promise.<EntityInfo>}
     * @tutorial System.getEntityInfo
     */
    getEntityInfo(uuid, name) {
        return this.wire.sendAction('get-entity-info', { uuid, name }).then(({ payload }) => payload.data);
    }
    /**
     * Gets the value of a given environment variable on the computer on which the runtime is installed
     * @return {Promise.<string>}
     * @tutorial System.getEnvironmentVariable
     */
    getEnvironmentVariable(envName) {
        return this.wire
            .sendAction('get-environment-variable', {
            environmentVariables: envName
        })
            .then(({ payload }) => payload.data);
    }
    /**
     * Get current focused window.
     * @return {Promise.<Identity | null>}
     * @tutorial System.getFocusedWindow
     */
    getFocusedWindow() {
        return this.wire.sendAction('get-focused-window').then(({ payload }) => payload.data);
    }
    /**
     * Returns information about the given app's certification status
     * @return {Promise.<CertifiedAppInfo>}
     * @tutorial System.isAppCertified
     */
    async isAppCertified(manifestUrl) {
        const { payload: { data: { certifiedInfo } } } = await this.wire.sendAction('is-app-certified', { manifestUrl });
        return certifiedInfo;
    }
    /**
     * Returns an array of all the installed runtime versions in an object.
     * @return {Promise.<string[]>}
     * @tutorial System.getInstalledRuntimes
     */
    // incompatible with standalone node process.
    getInstalledRuntimes() {
        return this.wire.sendAction('get-installed-runtimes').then(({ payload }) => payload.data.runtimes);
    }
    // incompatible with standalone node process.
    async getInstalledApps() {
        const { payload: { data: { installedApps } } } = await this.wire.sendAction('get-installed-apps');
        return installedApps;
    }
    /**
     * Retrieves the contents of the log with the specified filename.
     * @param { GetLogRequestType } options A object that id defined by the GetLogRequestType interface
     * @return {Promise.<string>}
     * @tutorial System.getLog
     */
    getLog(options) {
        return this.wire.sendAction('view-log', options).then(({ payload }) => payload.data);
    }
    /**
     * Returns a unique identifier (UUID) provided by the machine.
     * @return {Promise.<string>}
     * @tutorial System.getMachineId
     */
    getMachineId() {
        return this.wire.sendAction('get-machine-id').then(({ payload }) => payload.data);
    }
    /**
     * Returns the minimum (inclusive) logging level that is currently being written to the log.
     * @return {Promise.<LogLevel>}
     * @tutorial System.getMinLogLevel
     */
    getMinLogLevel() {
        return this.wire.sendAction('get-min-log-level').then(({ payload }) => payload.data);
    }
    /**
     * Retrieves an array containing information for each log file.
     * @return {Promise.Array<LogInfo>}
     * @tutorial System.getLogList
     */
    getLogList() {
        return this.wire.sendAction('list-logs').then(({ payload }) => payload.data);
    }
    /**
     * Retrieves an object that contains data about the monitor setup of the
     * computer that the runtime is running on.
     * @return {Promise.<MonitorInfo>}
     * @tutorial System.getMonitorInfo
     */
    getMonitorInfo() {
        return this.wire.sendAction('get-monitor-info').then(({ payload }) => payload.data);
    }
    /**
     * Returns the mouse in virtual screen coordinates (left, top).
     * @return {Promise.<PointTopLeft>}
     * @tutorial System.getMousePosition
     */
    getMousePosition() {
        return this.wire.sendAction('get-mouse-position').then(({ payload }) => payload.data);
    }
    /**
     * Retrieves an array of all of the runtime processes that are currently
     * running. Each element in the array is an object containing the uuid
     * and the name of the application to which the process belongs.
     * @deprecated Please use our new set of process APIs:
     * [Window.getProcessInfo]{@link Window#getProcessInfo}
     * [View.getProcessInfo]{@link View#getProcessInfo}
     * [Application.getProcessInfo]{@link Application#getProcessInfo}
     * [System.getAllProcessInfo]{@link System#getAllProcessInfo}
     * @return {Promise.Array.<ProcessInfo>}
     * @tutorial System.getProcessList
     */
    getProcessList() {
        // eslint-disable-next-line no-console
        console.warn('System.getProcessList has been deprecated. Please consider using our new process APIs: Window.getProcessInfo, View.getProcessInfo, Application.getProcessInfo, System.getAllProcessInfo');
        return this.wire.sendAction('process-snapshot').then(({ payload }) => payload.data);
    }
    /**
     * Retrieves all process information. This includes the browser process and every process associated to all entities (windows and views).
     * @return {Promise.<SystemProcessInfo>}
     * @tutorial System.getAllProcessInfo
     * @experimental
     */
    async getAllProcessInfo() {
        const { payload: { data } } = await this.wire.sendAction('get-all-process-info', this.identity);
        return data;
    }
    /**
     * Retrieves the Proxy settings.
     * @return {Promise.<ProxyInfo>}
     * @tutorial System.getProxySettings
     */
    getProxySettings() {
        return this.wire.sendAction('get-proxy-settings').then(({ payload }) => payload.data);
    }
    /**
     * Returns information about the running Runtime in an object.
     * @return {Promise.<RuntimeInfo>}
     * @tutorial System.getRuntimeInfo
     */
    getRuntimeInfo() {
        return this.wire.sendAction('get-runtime-info').then(({ payload }) => payload.data);
    }
    /**
     * Returns information about the running RVM in an object.
     * @return {Promise.<RVMInfo>}
     * @tutorial System.getRvmInfo
     */
    // incompatible with standalone node process.
    getRvmInfo() {
        return this.wire.sendAction('get-rvm-info').then(({ payload }) => payload.data);
    }
    /**
     * Retrieves system information.
     * @return {Promise.<HostSpecs>}
     * @tutorial System.getHostSpecs
     */
    getHostSpecs() {
        return this.wire.sendAction('get-host-specs').then(({ payload }) => payload.data);
    }
    /**
     * Runs an executable or batch file. A path to the file must be included in options.
     * <br> A uuid may be optionally provided. If not provided, OpenFin will create a uuid for the new process.
     * <br> Note: This method is restricted by default and must be enabled via
     * <a href="https://developers.openfin.co/docs/api-security">API security settings</a>.
     * @param { ExternalProcessRequestType } options A object that is defined in the ExternalProcessRequestType interface
     * @return {Promise.<Identity>}
     * @tutorial System.launchExternalProcess
     */
    launchExternalProcess(options) {
        return this.sendExternalProcessRequest('launch-external-process', options);
    }
    /**
     * Monitors a running process. A pid for the process must be included in options.
     * <br> A uuid may be optionally provided. If not provided, OpenFin will create a uuid for the new process.
     * @param { ExternalProcessInfo } options See tutorial for more details
     * @return {Promise.<Identity>}
     * @tutorial System.monitorExternalProcess
     */
    monitorExternalProcess(options) {
        return this.sendExternalProcessRequest('monitor-external-process', options);
    }
    /**
     * Writes the passed message into both the log file and the console.
     * @param { string } level The log level for the entry. Can be either "info", "warning" or "error"
     * @param { string } message The log message text
     * @return {Promise.<void>}
     * @tutorial System.log
     */
    log(level, message) {
        return this.wire.sendAction('write-to-log', { level, message }).then(() => undefined);
    }
    /**
     * Opens the passed URL in the default web browser. It only supports http(s) and fin(s) protocols by default.
     * In order to use other custom protocols, they have to be enabled via
     * <a href="https://developers.openfin.co/docs/api-security">API security settings</a>.
     * File protocol and file path are not supported.
     * @param { string } url The URL to open
     * @return {Promise.<void>}
     * @tutorial System.openUrlWithBrowser
     */
    openUrlWithBrowser(url) {
        return this.wire.sendAction('open-url-with-browser', { url }).then(() => undefined);
    }
    /**
     * Removes the process entry for the passed UUID obtained from a prior call
     * of fin.System.launchExternalProcess().
     * @param { string } uuid The UUID for a process obtained from a prior call to fin.desktop.System.launchExternalProcess()
     * @return {Promise.<void>}
     * @tutorial System.releaseExternalProcess
     */
    releaseExternalProcess(uuid) {
        return this.wire.sendAction('release-external-process', { uuid }).then(() => undefined);
    }
    /**
     * Shows the Chromium Developer Tools for the specified window
     * @param { Identity } identity This is a object that is defined by the Identity interface
     * @return {Promise.<void>}
     * @tutorial System.showDeveloperTools
     */
    showDeveloperTools(identity) {
        return this.wire.sendAction('show-developer-tools', identity).then(() => undefined);
    }
    /**
     * Attempt to close an external process. The process will be terminated if it
     * has not closed after the elapsed timeout in milliseconds.<br>
     * Note: This method is restricted by default and must be enabled via
     * <a href="https://developers.openfin.co/docs/api-security">API security settings</a>.
     * @param { TerminateExternalRequestType } options A object defined in the TerminateExternalRequestType interface
     * @return {Promise.<void>}
     * @tutorial System.terminateExternalProcess
     */
    terminateExternalProcess(options) {
        return this.wire.sendAction('terminate-external-process', options).then(() => undefined);
    }
    /**
     * Update the OpenFin Runtime Proxy settings.
     * @param { ProxyConfig } options A config object defined in the ProxyConfig interface
     * @return {Promise.<void>}
     * @tutorial System.updateProxySettings
     */
    updateProxySettings(options) {
        return this.wire.sendAction('update-proxy', options).then(() => undefined);
    }
    /**
     * Downloads the given application asset<br>
     * Note: This method is restricted by default and must be enabled via
     * <a href="https://developers.openfin.co/docs/api-security">API security settings</a>.
     * @param { AppAssetInfo } appAsset App asset object
     * @return {Promise.<void>}
     * @tutorial System.downloadAsset
     */
    // incompatible with standalone node process.
    downloadAsset(appAsset, progressListener) {
        return new Promise((resolve, reject) => {
            // node.js environment not supported
            if (this.wire.environment.constructor.name === 'NodeEnvironment') {
                reject(new transport_errors_1.NotSupportedError('downloadAsset only supported in an OpenFin Render process'));
                return;
            }
            const downloadId = this.wire.environment.getNextMessageId().toString();
            const dlProgressKey = `asset-download-progress-${downloadId}`;
            const dlErrorKey = `asset-download-error-${downloadId}`;
            const dlCompleteKey = `asset-download-complete-${downloadId}`;
            const dlProgress = (progress) => {
                const p = {
                    downloadedBytes: progress.downloadedBytes,
                    totalBytes: progress.totalBytes
                };
                progressListener(p);
            };
            const cleanListeners = () => {
                this.removeListener(dlProgressKey, dlProgress);
            };
            const dlError = (r, err) => {
                const error = err || r;
                cleanListeners();
                reject(new transport_errors_1.RuntimeError(error));
            };
            const dlComplete = () => {
                cleanListeners();
                resolve();
            };
            this.on(dlProgressKey, dlProgress);
            this.once(dlErrorKey, dlError);
            this.once(dlCompleteKey, dlComplete);
            const downloadOptions = Object.assign(appAsset, { downloadId });
            this.wire.sendAction('download-asset', downloadOptions).catch((err) => {
                cleanListeners();
                reject(err);
            });
        });
    }
    /**
     * Downloads a version of the runtime.
     * @param { RuntimeDownloadOptions } options - Download options.
     * @param {Function} [progressListener] - called as the runtime is downloaded with progress information.
     * @return {Promise.<void>}
     * @tutorial System.downloadRuntime
     */
    downloadRuntime(options, progressListener) {
        return new Promise((resolve, reject) => {
            // node.js environment not supported
            if (this.wire.environment.constructor.name === 'NodeEnvironment') {
                reject(new transport_errors_1.NotSupportedError('downloadRuntime only supported in an OpenFin Render process'));
                return;
            }
            const downloadId = this.wire.environment.getNextMessageId().toString();
            const dlProgressKey = `runtime-download-progress-${downloadId}`;
            const dlErrorKey = `runtime-download-error-${downloadId}`;
            const dlCompleteKey = `runtime-download-complete-${downloadId}`;
            const dlProgress = (progress) => {
                const p = {
                    downloadedBytes: progress.downloadedBytes,
                    totalBytes: progress.totalBytes
                };
                progressListener(p);
            };
            const cleanListeners = () => {
                this.removeListener(dlProgressKey, dlProgress);
            };
            const dlError = (r, err) => {
                const error = err || r;
                cleanListeners();
                reject(new transport_errors_1.RuntimeError(error));
            };
            const dlComplete = () => {
                cleanListeners();
                resolve();
            };
            this.on(dlProgressKey, dlProgress);
            this.once(dlErrorKey, dlError);
            this.once(dlCompleteKey, dlComplete);
            const downloadOptions = Object.assign(options, { downloadId });
            this.wire.sendAction('download-runtime', downloadOptions).catch((err) => {
                cleanListeners();
                reject(err);
            });
        });
    }
    /**
     * Download preload scripts from given URLs
     * @param {DownloadPreloadOption[]} scripts - URLs of preload scripts. See tutorial for more details.
     * @return {Promise.Array<DownloadPreloadInfo>}
     * @tutorial System.downloadPreloadScripts
     */
    downloadPreloadScripts(scripts) {
        return this.wire.sendAction('download-preload-scripts', { scripts }).then(({ payload }) => payload.data);
    }
    /**
     * Retrieves an array of data (name, ids, bounds) for all application windows.
     * @return {Promise.Array.<Identity>}
     * @tutorial System.getAllExternalApplications
     */
    getAllExternalApplications() {
        return this.wire.sendAction('get-all-external-applications').then(({ payload }) => payload.data);
    }
    /**
     * Retrieves app asset information.
     * @param { AppAssetRequest } options
     * @return {Promise.<AppAssetInfo>}
     * @tutorial System.getAppAssetInfo
     */
    getAppAssetInfo(options) {
        return this.wire.sendAction('get-app-asset-info', options).then(({ payload }) => payload.data);
    }
    /**
     * Get additional info of cookies.
     * @param { CookieOption } options - See tutorial for more details.
     * @return {Promise.Array.<CookieInfo>}
     * @tutorial System.getCookies
     */
    getCookies(options) {
        const url = this.wire.environment.getUrl();
        const newOptions = Object.assign(options, { url });
        return this.wire.sendAction('get-cookies', newOptions).then(({ payload }) => payload.data);
    }
    /**
     * Set the minimum log level above which logs will be written to the OpenFin log
     * @param { LogLevel } The minimum level (inclusive) above which all calls to log will be written
     * @return {Promise.<void>}
     * @tutorial System.setMinLogLevel
     */
    setMinLogLevel(level) {
        return this.wire.sendAction('set-min-log-level', { level }).then(() => undefined);
    }
    /**
     * Retrieves the UUID of the computer on which the runtime is installed
     * @param { string } uuid The uuid of the running application
     * @return {Promise.<ApplicationType>}
     * @tutorial System.resolveUuid
     */
    resolveUuid(uuid) {
        return this.wire
            .sendAction('resolve-uuid', {
            entityKey: uuid
        })
            .then(({ payload }) => payload.data);
    }
    /**
     * Retrieves an array of data for all external applications
     * @param { Identity } requestingIdentity This object is described in the Identity typedef
     * @param { any } data Any data type to pass to the method
     * @return {Promise.<any>}
     * @ignore
     */
    executeOnRemote(requestingIdentity, data) {
        data.requestingIdentity = requestingIdentity;
        return this.wire.ferryAction(data);
    }
    /**
     * Reads the specifed value from the registry.<br>
     * Note: This method is restricted by default and must be enabled via
     * <a href="https://developers.openfin.co/docs/api-security">API security settings</a>.
     * @param { string } rootKey - The registry root key.
     * @param { string } subkey - The registry key.
     * @param { string } value - The registry value name.
     * @return {Promise.<RegistryInfo>}
     * @tutorial System.readRegistryValue
     */
    readRegistryValue(rootKey, subkey, value) {
        return this.wire
            .sendAction('read-registry-value', {
            rootKey,
            subkey,
            value
        })
            .then(({ payload }) => payload.data);
    }
    /**
     * This function call will register a unique id and produce a token.
     * The token can be used to broker an external connection.
     * @param { string } uuid - A UUID for the remote connection.
     * @return {Promise.<ExternalConnection>}
     * @tutorial System.registerExternalConnection
     */
    registerExternalConnection(uuid) {
        return this.wire.sendAction('register-external-connection', { uuid }).then(({ payload }) => payload.data);
    }
    /**
     * Returns the json blob found in the [desktop owner settings](https://openfin.co/documentation/desktop-owner-settings/)
     * for the specified service.
     * More information about desktop services can be found [here](https://developers.openfin.co/docs/desktop-services).
     * @param { ServiceIdentifier } serviceIdentifier An object containing a name key that identifies the service.
     * @return {Promise.<ServiceConfiguration>}
     * @tutorial System.getServiceConfiguration
     */
    async getServiceConfiguration(serviceIdentifier) {
        if (typeof serviceIdentifier.name !== 'string') {
            throw new Error('Must provide an object with a `name` property having a string value');
        }
        const { name } = serviceIdentifier;
        return this.wire.sendAction('get-service-configuration', { name }).then(({ payload }) => payload.data);
    }
    async getSystemAppConfig(name) {
        if (typeof name !== 'string') {
            throw new Error('Must provide a string value for name of system app');
        }
        return this.wire.sendAction('get-system-app-configuration', { name }).then(({ payload }) => payload.data);
    }
    /**
     * Signals the RVM to perform a health check and returns the results as json.
     * @return {Promise.<string[]>}
     * @tutorial System.runRvmHealthCheck
     */
    runRvmHealthCheck() {
        return this.wire.sendAction('run-rvm-health-check').then(({ payload }) => payload.data);
    }
    /**
     * Launch application using a manifest URL/path. It differs from Application.startFromManifest in that this API can accept a manifest using the fin protocol.
     * @param {string} manifestUrl - The manifest's URL or path.
     * @param {RvmLaunchOptions} [opts] - Parameters that the RVM will use.
     * @return {Promise.<Manifest>}
     * @experimental
     * @tutorial System.launchManifest
     * @static
     */
    async launchManifest(manifestUrl, opts) {
        const response = await this.wire.sendAction('launch-manifest', {
            manifestUrl,
            opts
        });
        return response.payload.data.manifest;
    }
    /**
     * Query permission of a secured api in current context.
     * @param {string} apiName - The full name of a secured API.
     * @return {Promise.<QueryPermissionResult>}
     * @tutorial System.queryPermissionForCurrentContext
     */
    async queryPermissionForCurrentContext(apiName) {
        const identity = { uuid: this.wire.me.uuid, name: this.wire.me.name };
        const response = await this.wire.sendAction('query-permission-for-current-context', {
            apiName,
            identity
        });
        return response.payload.data;
    }
    // Not documenting, internal use only.
    async enableNativeWindowIntegrationProvider(permissions) {
        const { payload } = await this.wire.sendAction('enable-native-window-integration-provider', { permissions });
        return payload.data;
    }
    /**
     * (Internal) Register the usage of a component with a platform
     * @param {OpenFin.RegisterUsageData} options - Object with data and type
     * @return {Promise.<void>}
     * @tutorial System.registerUsage
     */
    async registerUsage({ data, type }) {
        await this.wire.sendAction('register-usage', { data, type });
    }
}
exports["default"] = System;


/***/ }),

/***/ "../../node_modules/@openfin/core/src/api/view/Factory.js":
/*!****************************************************************!*\
  !*** ../../node_modules/@openfin/core/src/api/view/Factory.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const base_1 = __webpack_require__(/*! ../base */ "../../node_modules/@openfin/core/src/api/base.js");
const validate_1 = __webpack_require__(/*! ../../util/validate */ "../../node_modules/@openfin/core/src/util/validate.js");
const index_1 = __webpack_require__(/*! ./index */ "../../node_modules/@openfin/core/src/api/view/index.js");
/**
 * @lends View
 */
class ViewModule extends base_1.Base {
    /**
     * Creates a new View.
     * @param { View~options } options - View creation options
     * @return {Promise.<View>}
     * @tutorial View.create
     * @experimental
     * @static
     */
    async create(options) {
        const { uuid } = this.wire.me;
        if (!options.name || typeof options.name !== 'string') {
            throw new Error('Please provide a name property as a string in order to create a View.');
        }
        if (this.wire.environment.childViews) {
            await this.wire.environment.createChildContent({
                entityType: 'view',
                options: { ...options, uuid }
            });
        }
        else {
            await this.wire.sendAction('create-view', { ...options, uuid });
        }
        return this.wrapSync({ uuid, name: options.name });
    }
    /**
     * Asynchronously returns a View object that represents an existing view.
     * @param { Identity } identity
     * @return {Promise.<View>}
     * @tutorial View.wrap
     * @experimental
     * @static
     */
    async wrap(identity) {
        this.wire.sendAction('view-wrap');
        const errorMsg = validate_1.validateIdentity(identity);
        if (errorMsg) {
            throw new Error(errorMsg);
        }
        return new index_1.View(this.wire, identity);
    }
    /**
     * Synchronously returns a View object that represents an existing view.
     * @param { Identity } identity
     * @return {View}
     * @tutorial View.wrapSync
     * @experimental
     * @static
     */
    wrapSync(identity) {
        this.wire.sendAction('view-wrap-sync').catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        const errorMsg = validate_1.validateIdentity(identity);
        if (errorMsg) {
            throw new Error(errorMsg);
        }
        return new index_1.View(this.wire, identity);
    }
    /**
     * Asynchronously returns a View object that represents the current view
     * @return {Promise.<View>}
     * @tutorial View.getCurrent
     * @experimental
     * @static
     */
    getCurrent() {
        this.wire.sendAction('view-get-current').catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        if (!this.wire.me.isView) {
            throw new Error('You are not in a View context');
        }
        const { uuid, name } = this.wire.me;
        return this.wrap({ uuid, name });
    }
    /**
     * Synchronously returns a View object that represents the current view
     * @return {View}
     * @tutorial View.getCurrentSync
     * @experimental
     * @static
     */
    getCurrentSync() {
        this.wire.sendAction('view-get-current-sync').catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        if (!this.wire.me.isView) {
            throw new Error('You are not in a View context');
        }
        const { uuid, name } = this.wire.me;
        return this.wrapSync({ uuid, name });
    }
}
exports["default"] = ViewModule;


/***/ }),

/***/ "../../node_modules/@openfin/core/src/api/view/Instance.js":
/*!*****************************************************************!*\
  !*** ../../node_modules/@openfin/core/src/api/view/Instance.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.View = void 0;
/* eslint-disable import/prefer-default-export */
/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
const main_1 = __webpack_require__(/*! ../webcontents/main */ "../../node_modules/@openfin/core/src/api/webcontents/main.js");
const window_1 = __webpack_require__(/*! ../window */ "../../node_modules/@openfin/core/src/api/window/index.js");
/**
 * @typedef {object} View~options
 * @summary View creation options.
 * @desc This is the options object required by {@link View.create View.create}.
 *
 * Note that `name` and `target` are the only required properties — albeit the `url` property is usually provided as well
 * (defaults to `"about:blank"` when omitted).
 *
 * @property {object} [experimental]
 * Configurations for API injection.
 *
 * @property {boolean} [experimental.childWindows] Configure if the runtime should enable child windows for views.
 *
 * @property {object} [api]
 * Configurations for API injection.
 *
 * @property {object} [api.iframe] Configure if the the API should be injected into iframes based on domain.
 *
 * @property {boolean} [api.iframe.crossOriginInjection=false] Controls if the `fin` API object is present for cross origin iframes.
 * @property {boolean} [api.iframe.sameOriginInjection=true] Controls if the `fin` API object is present for same origin iframes.
 *
 * @property {object} [autoResize] AutoResize options
 *
 * @property {object} [bounds] initial bounds given relative to the window.
 *
 * @property {string} [backgroundColor="#FFF"] - _Updatable._
 * The view’s _backfill_ color as a hexadecimal value. Not to be confused with the content background color
 * (`document.body.style.backgroundColor`),
 * this color briefly fills a view’s (a) content area before its content is loaded as well as (b) newly exposed
 * areas when growing a window. Setting
 * this value to the anticipated content background color can help improve user experience.
 * Default is white.
 *
 * @property {object} [contentNavigation]
 * Restrict navigation to URLs that match a whitelisted pattern.
 * In the lack of a whitelist, navigation to URLs that match a blacklisted pattern would be prohibited.
 * See [here](https://developer.chrome.com/extensions/match_patterns) for more details.
 * @property {string[]} [contentNavigation.whitelist=[]] List of whitelisted URLs.
 * @property {string[]} [contentNavigation.blacklist=[]] List of blacklisted URLs.
 *
 * @property {object} [contentRedirect]
 * Restrict redirects to URLs that match a whitelisted pattern.
 * In the lack of a whitelist, redirects to URLs that match a blacklisted pattern would be prohibited.
 * See [here](https://developer.chrome.com/extensions/match_patterns) for more details.
 * @property {string[]} [contentRedirect.whitelist=[]] List of whitelisted URLs.
 * @property {string[]} [contentRedirect.blacklist=[]] List of blacklisted URLs.
 *
 * @property {object} [contextMenuSettings] - _Updatable._
 * Configure the context menu when right-clicking on a view.
 * @property {boolean} [contextMenuSettings.enable=true] Should the context menu display on right click.
 * @property {boolean} [contextMenuSettings.devtools=true] Should the context menu contain a button for opening devtools.
 * @property {boolean} [contextMenuSettings.reload=true] Should the context menu contain a button for reloading the page.
 *
 * @property {any} [customData=""] - _Updatable._
 * A field that the user can attach serializable data to to be ferried around with the view options.
 * _When omitted, the default value of this property is the empty string (`""`)._
 *
 * When omitted, the default value of this property is the empty string (`""`).
 * As opposed to customData this is meant for frequent updates and sharing with other contexts. [Example]{@tutorial customContext}
 *
 * @property {object[]} [hotkeys=[]] - _Updatable._
 * Defines the list of hotkeys that will be emitted as a `hotkey` event on the view. For usage example see [example]{@tutorial hotkeys}.
 * Within Platform, OpenFin also implements a set of pre-defined actions called
 * [keyboard commands]{@link https://developers.openfin.co/docs/platform-api#section-5-3-using-keyboard-commands}
 * that can be assigned to a specific hotkey in the platform manifest.
 * @property {string} hotkeys.keys The key combination of the hotkey, i.e. "Ctrl+T"
 * @property {boolean} [hotkeys.preventDefault=false] preventDefault will prevent the page keydown/keyup events from being emitted.
 *
 * @property {boolean} [isClosable=true] **Platforms Only.** If false, the view will be persistent and can't be closed through
 * either UI or `Platform.closeView`. Note that the view will still be closed if the host window is closed or
 * if the view isn't part of the new layout when running `Layout.replace`.
 *
 * @property {string} name
 * The name of the view.
 *
 * @property {boolean} [detachOnClose=false] - _Updatable._
 * Platforms Only.  If true, will hide and detach the View from the window for later use instead of closing,
 * allowing the state of the View to be saved and the View to be immediately shown in a new Layout.
 *
 * @property {string} [manifestUrl] **Platforms Only.** Url to a manifest that contains View Options. Properties other than manifestUrl can still be used
 * but the properties in the manifest will take precedence if there is any collision.
 *
 * @property {preloadScript[]} [preloadScripts] - _Inheritable_
 * A list of scripts that are eval'ed before other scripts in the page. When omitted, _inherits_
 * from the parent application.
 *
 * @property {boolean} [preventDragOut=false] **Platforms Only.** If true, the tab of the view can't be dragged out of its host window.
 *
 * @property {string} [processAffinity=<application uuid>]
 * A string to attempt to group renderers together. Will only be used if pages are on the same origin.
 *
 * @property {Identity} [target]
 * The identity of the window this view should be attached to.
 *
 * @property {string} [url="about:blank"]
 * The URL of the view.
 *
 * @property {string} [uuid=<application uuid>]
 * The `uuid` of the application, unique within the set of all `Application`s running in OpenFin Runtime.
 * If omitted, defaults to the `uuid` of the application spawning the view.
 * If given, must match the `uuid` of the application spawning the view.
 * In other words, the application's `uuid` is the only acceptable value, but is the default, so there's
 * really no need to provide it.
 */
/**
 * @classdesc a View can be used to embed additional web content into a Window.
 * It is like a child window, except it is positioned relative to its owning window.
 * It has the ability to listen for <a href="tutorial-View.EventEmitter.html">View-specific events</a>.
 *
 * By default, a View will try to share the same renderer process as other Views owned by its parent Application.
 * To change that behavior, see the processAffinity {@link View~options view option}.
 *
 * A View's lifecycle is tied to its owning window and can be re-attached to a different window at any point during its lifecycle.
 * @class
 * @alias View
 * @hideconstructor
 */
class View extends main_1.WebContents {
    constructor(wire, identity) {
        super(wire, identity, 'view');
        this.identity = identity;
        /**
         * Returns the zoom level of the view.
         * @function getZoomLevel
         * @memberOf View
         * @instance
         * @return {Promise.<number>}
         * @tutorial View.getZoomLevel
         */
        /**
         * Sets the zoom level of the view.
         * @param { number } level The zoom level
         * @function setZoomLevel
         * @memberOf View
         * @instance
         * @return {Promise.<void>}
         * @tutorial View.setZoomLevel
         */
        /**
         * Find and highlight text on a page.
         * @param { string } searchTerm Term to find in page
         * @param { FindInPageOptions } options Search options
         * @function findInPage
         * @memberOf View
         * @instance
         * @return {Promise.<number>}
         * @tutorial View.findInPage
         */
        /**
         * Stops any findInPage call with the provided action.
         * @param {string} action
         * Action to execute when stopping a find in page:<br>
         * "clearSelection" - Clear the selection.<br>
         * "keepSelection" - Translate the selection into a normal selection.<br>
         * "activateSelection" - Focus and click the selection node.<br>
         * @function stopFindInPage
         * @memberOf View
         * @instance
         * @return {Promise.<void>}
         * @tutorial View.stopFindInPage
         */
        /**
         * Navigates the view to a specified URL. The url must contain the protocol prefix such as http:// or https://.
         * @param { string } url - The URL to navigate the view to.
         * @return {Promise.<void>}
         * @function navigate
         * @memberof View
         * @instance
         * @tutorial View.navigate
         * @experimental
         */
        /**
         * Navigates the view back one page.
         * @function navigateBack
         * @memberOf View
         * @instance
         * @return {Promise.<void>}
         * @tutorial View.navigateBack
         */
        /**
         * Navigates the view forward one page.
         * @function navigateForward
         * @memberOf View
         * @instance
         * @return {Promise.<void>}
         * @tutorial View.navigateForward
         */
        /**
         * Stops any current navigation the view is performing.
         * @function stopNavigation
         * @memberOf View
         * @instance
         * @return {Promise.<void>}
         * @tutorial View.stopNavigation
         */
        /**
         * Reloads the view current page
         * @function reload
         * @memberOf View
         * @instance
         * @return {Promise.<void>}
         * @tutorial View.reload
         */
        /**
         * Prints the view's web page
         * @param { PrintOptions } [options] Printer Options
         * @function print
         * @memberOf View
         * @instance
         * @return {Promise.<void>}
         * @tutorial View.print
         */
        /**
         * Returns an array with all system printers
         * @function getPrinters
         * @memberOf View
         * @instance
         * @return { Promise.Array.<PrinterInfo> }
         * @tutorial View.getPrinters
         */
        /**
         * Shows the Chromium Developer Tools
         * @function showDeveloperTools
         * @memberOf View
         * @instance
         * @return {Promise.<void>}
         * @tutorial View.showDeveloperTools
         */
        /**
         * Retrieves the process information associated with a view.
         * @function getProcessInfo
         * @memberOf View
         * @instance
         * @return {Promise.<EntityProcessDetails>}
         * @tutorial View.getProcessInfo
         */
        /**
         * Retrieves information on all Shared Workers.
         * @function getSharedWorkers
         * @memberOf View
         * @instance
         * @return {Promise.Array.<SharedWorkerInfo>}
         * @tutorial View.getSharedWorkers
         */
        /**
         * Opens the developer tools for the shared worker context.
         * @function inspectSharedWorker
         * @memberOf View
         * @instance
         * @return {Promise.<void>}
         * @tutorial View.inspectSharedWorker
         */
        /**
         * Inspects the shared worker based on its ID.
         * @param { string } workerId - The id of the shared worker.
         * @function inspectSharedWorkerById
         * @memberOf View
         * @instance
         * @return {Promise.<void>}
         * @tutorial View.inspectSharedWorkerById
         */
        /**
         * Opens the developer tools for the service worker context.
         * @function inspectServiceWorker
         * @memberOf View
         * @instance
         * @return {Promise.<void>}
         * @tutorial View.inspectServiceWorker
         */
        /**
         * Shows a popup window. If the window this view is currently attached to has a popup open, closes it.
         * @function showPopupWindow
         * @memberOf View
         * @instance
         * @param {PopupOptions} options
         * @return {Promise<PopupResult>}
         * @tutorial View.showPopupWindow
         */
        /**
         * Attaches the current view to a the given window identity.
         * Identity must be the identity of a window in the same application.
         * This detaches the view from its current window, and sets the view to be destroyed when its new window closes.
         * @param target {Identity}
         * @return {Promise.<void>}
         * @tutorial View.attach
         * @experimental
         */
        this.attach = async (target) => {
            await this.wire.sendAction('attach-view', { target, ...this.identity });
        };
        /**
         * Destroys the current view
         * @return {Promise.<void>}
         * @tutorial View.destroy
         * @experimental
         */
        this.destroy = async () => {
            await this.wire.sendAction('destroy-view', { ...this.identity });
        };
        /**
         * Shows the current view if it is currently hidden.
         * @return {Promise.<void>}
         * @tutorial View.show
         * @experimental
         */
        this.show = async () => {
            await this.wire.sendAction('show-view', { ...this.identity });
        };
        /**
         * Hides the current view if it is currently visible.
         * @return {Promise.<void>}
         * @tutorial View.hide
         * @experimental
         */
        this.hide = async () => {
            await this.wire.sendAction('hide-view', { ...this.identity });
        };
        /**
         * Sets the bounds (top, left, width, height) of the view relative to its window.
         * @param bounds {ViewBounds}
         * @return {Promise.<void>}
         * @tutorial View.setBounds
         * @experimental
         */
        this.setBounds = async (bounds) => {
            await this.wire.sendAction('set-view-bounds', { bounds, ...this.identity });
        };
        /**
         * Gets the bounds (top, left, width, height) of the view relative to its window.
         * @return {Promise.<ViewBounds>}
         * @tutorial View.getBounds
         * @experimental
         */
        this.getBounds = async () => {
            const ack = await this.wire.sendAction('get-view-bounds', { ...this.identity });
            return ack.payload.data;
        };
        /**
         * Gets the View's info.
         * @return {Promise.<ViewInfo>}
         * @tutorial View.getInfo
         * @experimental
         */
        this.getInfo = async () => {
            const ack = await this.wire.sendAction('get-view-info', { ...this.identity });
            return ack.payload.data;
        };
        /**
         * Retrieves the layout for the window the view is attached to.
         * @return {Promise.<Layout>}
         * @tutorial View.getParentLayout
         * @experimental
         */
        this.getParentLayout = async () => {
            this.wire.sendAction('view-get-parent-layout', { ...this.identity }).catch(() => {
                // don't expose
            });
            const currentWindow = await this.getCurrentWindow();
            return currentWindow.getLayout();
        };
        /**
         * Gets the View's options.
         * @return {Promise<ViewOptions>}
         * @tutorial View.getOptions
         * @experimental
         */
        this.getOptions = async () => {
            return this.wire.sendAction('get-view-options', { ...this.identity }).then(({ payload }) => payload.data);
        };
        /**
         * Updates the view's options.
         * @param { Partial<ViewOptions> } options
         * @return {Promise.<void>}
         * @tutorial View.updateOptions
         * @experimental
         */
        this.updateOptions = async (options) => {
            return this.wire.sendAction('update-view-options', { options, ...this.identity }).then(() => undefined);
        };
        /**
         * Retrieves the window the view is currently attached to.
         * @return {Promise.<_Window>}
         * @experimental
         */
        this.getCurrentWindow = async () => {
            const { payload: { data } } = await this.wire.sendAction('get-view-window', { ...this.identity });
            return new window_1._Window(this.wire, data);
        };
        /**
         * Triggers the before-unload handler for the View, if one is set. Returns `true` if the handler is trying to prevent the View from unloading, and `false` if it isn't.
         * Only enabled when setting enableBeforeUnload: true in your View options. If this option is not enabled it will always return false.
         * @returns {Promise<boolean>}
         * @tutorial View.triggerBeforeUnload
         * @experimental
         */
        this.triggerBeforeUnload = async () => {
            const message = await this.wire.sendAction('trigger-before-unload', { ...this.identity });
            return message.payload.data;
        };
    }
    /**
     * Gets a base64 encoded image of the view or a part of it.
     * @function capturePage
     * @param { CapturePageOptions } [options] Options for the capturePage call.
     * @memberOf View
     * @instance
     * @return {Promise.<string>}
     * @tutorial View.capturePage
     */
    /**
     * Executes Javascript on the view, restricted to contents you own or contents owned by
     * applications you have created.
     * @param { string } code JavaScript code to be executed on the view.
     * @function executeJavaScript
     * @memberOf View
     * @instance
     * @return {Promise.<void>}
     * @tutorial View.executeJavaScript
     */
    /**
     * Focuses the view
     * @return {Promise.<void>}
     * @function focus
     * @memberof View
     * @emits focused
     * @instance
     * @tutorial View.focus
     * @experimental
     */
    async focus({ emitSynthFocused } = { emitSynthFocused: true }) {
        const win = await this.getCurrentWindow();
        await win.focusedWebViewWasChanged();
        await super.focus({ emitSynthFocused });
    }
}
exports.View = View;


/***/ }),

/***/ "../../node_modules/@openfin/core/src/api/view/index.js":
/*!**************************************************************!*\
  !*** ../../node_modules/@openfin/core/src/api/view/index.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
}
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Factory_1 = __webpack_require__(/*! ./Factory */ "../../node_modules/@openfin/core/src/api/view/Factory.js");
exports["default"] = Factory_1.default;
__exportStar(__webpack_require__(/*! ./Instance */ "../../node_modules/@openfin/core/src/api/view/Instance.js"), exports);


/***/ }),

/***/ "../../node_modules/@openfin/core/src/api/webcontents/main.js":
/*!********************************************************************!*\
  !*** ../../node_modules/@openfin/core/src/api/webcontents/main.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WebContents = void 0;
const base_1 = __webpack_require__(/*! ../base */ "../../node_modules/@openfin/core/src/api/base.js");
class WebContents extends base_1.EmitterBase {
    constructor(wire, identity, entityType) {
        super(wire, entityType, identity.uuid, identity.name);
        this.entityType = entityType;
    }
    capturePage(options) {
        return this.wire.sendAction('capture-page', { options, ...this.identity }).then(({ payload }) => payload.data);
    }
    executeJavaScript(code) {
        return this.wire
            .sendAction('execute-javascript-in-window', { ...this.identity, code })
            .then(({ payload }) => payload.data);
    }
    getZoomLevel() {
        return this.wire.sendAction('get-zoom-level', this.identity).then(({ payload }) => payload.data);
    }
    setZoomLevel(level) {
        return this.wire.sendAction('set-zoom-level', { ...this.identity, level }).then(() => undefined);
    }
    navigate(url) {
        return this.wire.sendAction('navigate-window', { ...this.identity, url }).then(() => undefined);
    }
    navigateBack() {
        return this.wire.sendAction('navigate-window-back', { ...this.identity }).then(() => undefined);
    }
    async navigateForward() {
        await this.wire.sendAction('navigate-window-forward', { ...this.identity });
    }
    stopNavigation() {
        return this.wire.sendAction('stop-window-navigation', { ...this.identity }).then(() => undefined);
    }
    reload(ignoreCache = false) {
        return this.wire
            .sendAction('reload-window', {
            ignoreCache,
            ...this.identity
        })
            .then(() => undefined);
    }
    print(options) {
        return this.wire.sendAction('print', { ...this.identity, options }).then(() => undefined);
    }
    findInPage(searchTerm, options) {
        return this.wire
            .sendAction('find-in-page', { ...this.identity, searchTerm, options })
            .then(({ payload }) => payload.data);
    }
    stopFindInPage(action) {
        return this.wire.sendAction('stop-find-in-page', { ...this.identity, action }).then(() => undefined);
    }
    getPrinters() {
        return this.wire.sendAction('get-printers', { ...this.identity }).then(({ payload }) => payload.data);
    }
    async focus({ emitSynthFocused } = { emitSynthFocused: true }) {
        await this.wire.sendAction('focus-window', { emitSynthFocused, ...this.identity });
    }
    async showDeveloperTools() {
        // Note this hits the system action map in core state for legacy reasons.
        await this.wire.sendAction('show-developer-tools', this.identity);
    }
    async getProcessInfo() {
        const { payload: { data } } = await this.wire.sendAction('get-process-info', this.identity);
        return data;
    }
    async getSharedWorkers() {
        return this.wire.sendAction('get-shared-workers', this.identity).then(({ payload }) => payload.data);
    }
    async inspectSharedWorker() {
        await this.wire.sendAction('inspect-shared-worker', { ...this.identity });
    }
    async inspectSharedWorkerById(workerId) {
        await this.wire.sendAction('inspect-shared-worker-by-id', { ...this.identity, workerId });
    }
    async inspectServiceWorker() {
        await this.wire.sendAction('inspect-service-worker', { ...this.identity });
    }
    async showPopupWindow(options) {
        this.wire.sendAction(`${this.entityType}-show-popup-window`, this.identity).catch(() => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        if (options === null || options === void 0 ? void 0 : options.onPopupReady) {
            const readyListener = async ({ popupName }) => {
                try {
                    const popupWindow = this.fin.Window.wrapSync({ uuid: this.fin.me.uuid, name: popupName });
                    await options.onPopupReady(popupWindow);
                }
                catch (error) {
                    throw new Error(`Something went wrong during onPopupReady execution: ${error}`);
                }
            };
            await this.once('popup-ready', readyListener);
        }
        const { payload: tryCreatePayload } = await this.wire.sendAction('try-create-popup-window', {
            options: {
                ...options,
                // Internal use only.
                // @ts-expect-error
                hasResultCallback: !!(options === null || options === void 0 ? void 0 : options.onPopupResult),
                hasReadyCallback: !!(options === null || options === void 0 ? void 0 : options.onPopupReady)
            },
            ...this.identity
        });
        const { data: { willOpen, options: popupOptions } } = tryCreatePayload;
        if (willOpen) {
            await this.wire.environment.createChildContent({
                options: popupOptions.initialOptions,
                entityType: 'window'
            });
        }
        const normalizePopupResult = (payload) => {
            const { name, uuid, result, data } = payload;
            const popupResult = {
                identity: {
                    name,
                    uuid
                },
                result
            };
            if (data) {
                popupResult.data = data;
            }
            return popupResult;
        };
        if (options === null || options === void 0 ? void 0 : options.onPopupResult) {
            const dispatchResultListener = async (payload) => {
                await options.onPopupResult(normalizePopupResult(payload));
            };
            const teardownListener = async () => {
                await this.removeListener('popup-result', dispatchResultListener);
            };
            await this.on('popup-result', dispatchResultListener);
            await this.once('popup-teardown', teardownListener);
        }
        const { payload } = await this.wire.sendAction('show-popup-window', {
            options: popupOptions,
            ...this.identity
        });
        return payload.data;
    }
}
exports.WebContents = WebContents;


/***/ }),

/***/ "../../node_modules/@openfin/core/src/api/window/Factory.js":
/*!******************************************************************!*\
  !*** ../../node_modules/@openfin/core/src/api/window/Factory.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const base_1 = __webpack_require__(/*! ../base */ "../../node_modules/@openfin/core/src/api/base.js");
const validate_1 = __webpack_require__(/*! ../../util/validate */ "../../node_modules/@openfin/core/src/util/validate.js");
const Instance_1 = __webpack_require__(/*! ./Instance */ "../../node_modules/@openfin/core/src/api/window/Instance.js");
/**
 * @lends Window
 */
class _WindowModule extends base_1.Base {
    /**
     * Asynchronously returns a Window object that represents an existing window.
     * @param { Identity } identity
     * @return {Promise.<_Window>}
     * @tutorial Window.wrap
     * @static
     */
    async wrap(identity) {
        this.wire.sendAction('window-wrap').catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        const errorMsg = validate_1.validateIdentity(identity);
        if (errorMsg) {
            throw new Error(errorMsg);
        }
        return new Instance_1._Window(this.wire, identity);
    }
    /**
     * Synchronously returns a Window object that represents an existing window.
     * @param { Identity } identity
     * @return {_Window}
     * @tutorial Window.wrapSync
     * @static
     */
    wrapSync(identity) {
        this.wire.sendAction('window-wrap-sync').catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        const errorMsg = validate_1.validateIdentity(identity);
        if (errorMsg) {
            throw new Error(errorMsg);
        }
        return new Instance_1._Window(this.wire, identity);
    }
    /**
     * Creates a new Window.
     * @param { Window~options } options - Window creation options
     * @return {Promise.<_Window>}
     * @tutorial Window.create
     * @static
     */
    create(options) {
        this.wire.sendAction('create-window').catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        const win = new Instance_1._Window(this.wire, { uuid: this.me.uuid, name: options.name });
        return win.createWindow(options);
    }
    /**
     * Asynchronously returns a Window object that represents the current window
     * @return {Promise.<_Window>}
     * @tutorial Window.getCurrent
     * @static
     */
    getCurrent() {
        this.wire.sendAction('get-current-window').catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        if (!this.wire.me.isWindow) {
            throw new Error('You are not in a Window context');
        }
        const { uuid, name } = this.wire.me;
        return this.wrap({ uuid, name });
    }
    /**
     * Synchronously returns a Window object that represents the current window
     * @return {_Window}
     * @tutorial Window.getCurrentSync
     * @static
     */
    getCurrentSync() {
        this.wire.sendAction('get-current-window-sync').catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        if (!this.wire.me.isWindow) {
            throw new Error('You are not in a Window context');
        }
        const { uuid, name } = this.wire.me;
        return this.wrapSync({ uuid, name });
    }
}
exports["default"] = _WindowModule;


/***/ }),

/***/ "../../node_modules/@openfin/core/src/api/window/Instance.js":
/*!*******************************************************************!*\
  !*** ../../node_modules/@openfin/core/src/api/window/Instance.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._Window = void 0;
/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
const application_1 = __webpack_require__(/*! ../application */ "../../node_modules/@openfin/core/src/api/application/index.js");
const main_1 = __webpack_require__(/*! ../webcontents/main */ "../../node_modules/@openfin/core/src/api/webcontents/main.js");
const view_1 = __webpack_require__(/*! ../view */ "../../node_modules/@openfin/core/src/api/view/index.js");
/**
 * @typedef { object } Margins
 * @property { string } [marginType]
 * Can be `default`, `none`, `printableArea`, or `custom`. If `custom` is chosen,
 * you will also need to specify `top`, `bottom`, `left`, and `right`.
 *
 * @property { number } [top] The top margin of the printed web page, in pixels.
 * @property { number } [bottom] The bottom margin of the printed web page, in pixels.
 * @property { number } [left] The left margin of the printed web page, in pixels.
 * @property { number } [right] The right margin of the printed web page, in pixels.
 */
/**
 * @typedef { object } Dpi
 * @property { number } [horizontal] The horizontal dpi
 * @property { number } [vertical] The vertical dpi
 */
/**
 * @typedef { object } PrintOptions
 * @property { boolean } [silent=false] Don't ask user for print settings.
 * @property { boolean } [printBackground=false] Prints the background color and image of the web page.
 * @property { string } [deviceName=''] Set the printer device name to use.
 * @property { boolean } [color=true] Set whether the printed web page will be in color or grayscale.
 * @property { Margins } [margins] Set margins for the printed web page
 * @property { boolean } [landscape=false] Whether the web page should be printed in landscape mode.
 * @property { number } [scaleFactor] The scale factor of the web page.
 * @property { number } [pagesPerSheet] The number of pages to print per page sheet.
 * @property { boolean } [collate] Whether the web page should be collated.
 * @property { number } [copies] The number of copies of the web page to print.
 * @property { Record<string, number> } [pageRanges] The page range to print. Should have two keys: from and to.
 * @property { string } [duplexMode] Set the duplex mode of the printed web page. Can be simplex, shortEdge, or longEdge.
 * @property { Dpi } [dpi] Set dpi for the printed web page
 */
/**
 * PrinterInfo interface
 * @typedef { object } PrinterInfo
 * @property { string } name Printer Name
 * @property { string } description Printer Description
 * @property { number } status Printer Status
 * @property { boolean } isDefault Indicates that system's default printer
 */
/**
 * SharedWorkerInfo interface
 * @typedef { object } SharedWorkerInfo
 * @property { string } id The unique id of the shared worker.
 * @property { string } url The url of the shared worker.
 */
/**
 * ContentCreationRule interface
 * @typedef { object } ContentCreationRule
 * @property { string } behavior 'view' | 'window' | 'browser' | 'block'
 * @property { string[] } match List of [match patterns](https://developer.chrome.com/extensions/match_patterns).
 * @property { object } options Window creation options or View creation options.
 */
/**
 * @typedef {object} Window~options
 * @summary Window creation options.
 * @desc This is the options object required by {@link Window.create Window.create}.
 *
 * Note that `name` is the only required property — albeit the `url` property is usually provided as well
 * (defaults to `"about:blank"` when omitted).
 *
 * _This jsdoc typedef mirrors the `WindowOptions` TypeScript interface in `@types/openfin`._
 *
 * @property {object} [accelerator]
 * Enable keyboard shortcuts for devtools, zoom, reload, and reload ignoring cache.
 *
 * @property {boolean} [accelerator.devtools=false]
 * If `true`, enables the devtools keyboard shortcut:<br>
 * `Ctrl` + `Shift` + `I` _(Toggles Devtools)_
 *
 * @property {boolean} [accelerator.reload=false]
 * If `true`, enables the reload keyboard shortcuts:<br>
 * `Ctrl` + `R` _(Windows)_<br>
 * `F5` _(Windows)_<br>
 * `Command` + `R` _(Mac)_
 *
 * @property {boolean} [accelerator.reloadIgnoringCache=false]
 * If `true`, enables the reload-from-source keyboard shortcuts:<br>
 * `Ctrl` + `Shift` + `R` _(Windows)_<br>
 * `Shift` + `F5` _(Windows)_<br>
 * `Command` + `Shift` + `R` _(Mac)_
 *
 * @property {boolean} [accelerator.zoom=false]
 * If `true`, enables the zoom keyboard shortcuts:<br>
 * `Ctrl` + `+` _(Zoom In)_<br>
 * `Ctrl` + `Shift` + `+` _(Zoom In)_<br>
 * `Ctrl` + `NumPad+` _(Zoom In)_<br>
 * `Ctrl` + `-` _(Zoom Out)_<br>
 * `Ctrl` + `Shift` + `-` _(Zoom Out)_<br>
 * `Ctrl` + `NumPad-` _(Zoom Out)_<br>
 * `Ctrl` + `Scroll` _(Zoom In & Out)_<br>
 * `Ctrl` + `0` _(Restore to 100%)_
 *
 * @property {object} [alphaMask] - _Experimental._  _Updatable._
 * <br>
 * alphaMask turns anything of matching RGB value transparent.
 * <br>
 * Caveats:
 * * runtime key --disable-gpu is required. Note: Unclear behavior on remote Desktop support
 * * User cannot click-through transparent regions
 * * Not supported on Mac
 * * Windows Aero must be enabled
 * * Won't make visual sense on Pixel-pushed environments such as Citrix
 * * Not supported on rounded corner windows
 * @property {number} [alphaMask.red=-1] 0-255
 * @property {number} [alphaMask.green=-1] 0-255
 * @property {number} [alphaMask.blue=-1] 0-255
 *
 * @property {boolean} [alwaysOnTop=false] - _Updatable._
 * A flag to always position the window at the top of the window stack.
 *
 * @property {object} [api]
 * Configurations for API injection.
 *
 * @property {object} [api.iframe] Configure if the the API should be injected into iframes based on domain.
 *
 * @property {boolean} [api.iframe.crossOriginInjection=false] Controls if the `fin` API object is present for cross origin iframes.
 * @property {boolean} [api.iframe.sameOriginInjection=true] Controls if the `fin` API object is present for same origin iframes.
 *
 * @property {string} [applicationIcon = ""] - _Deprecated_ - use `icon` instead.
 *
 * @property {number} [aspectRatio=0] - _Updatable._
 * The aspect ratio of width to height to enforce for the window. If this value is equal to or less than zero,
 * an aspect ratio will not be enforced.
 *
 * @property {boolean} [autoShow=true]
 * A flag to automatically show the window when it is created.
 *
 * @property {string} [backgroundColor="#FFF"]
 * The window’s _backfill_ color as a hexadecimal value. Not to be confused with the content background color
 * (`document.body.style.backgroundColor`),
 * this color briefly fills a window’s (a) content area before its content is loaded as well as (b) newly exposed
 * areas when growing a window. Setting
 * this value to the anticipated content background color can help improve user experience.
 * Default is white.
 *
 * @property {object} [contentCreation]
 * Apply rules that determine how user interaction (`window.open` and links) creates content.
 * @property {ContentCreationRule[]} [contentCreation.rules = []] List of content creation rules.
 *
 * @property {object} [contentNavigation]
 * Restrict navigation to URLs that match a whitelisted pattern.
 * In the lack of a whitelist, navigation to URLs that match a blacklisted pattern would be prohibited.
 * See [here](https://developer.chrome.com/extensions/match_patterns) for more details.
 * @property {string[]} [contentNavigation.whitelist=[]] List of whitelisted URLs.
 * @property {string[]} [contentNavigation.blacklist=[]] List of blacklisted URLs.
 *
 * @property {object} [contentRedirect]
 * Restrict redirects to URLs that match a whitelisted pattern.
 * In the lack of a whitelist, redirects to URLs that match a blacklisted pattern would be prohibited.
 * See [here](https://developer.chrome.com/extensions/match_patterns) for more details.
 * @property {string[]} [contentRedirect.whitelist=[]] List of whitelisted URLs.
 * @property {string[]} [contentRedirect.blacklist=[]] List of blacklisted URLs.
 *
 * @property {boolean} [contextMenu=true] - _Updatable._
 * A flag to show the context menu when right-clicking on a window.
 * Gives access to the devtools for the window.
 *
 * @property {object} [contextMenuSettings] - _Updatable._
 * Configure the context menu when right-clicking on a window.
 * @property {boolean} [contextMenuSettings.enable=true] Should the context menu display on right click.
 * @property {boolean} [contextMenuSettings.devtools=true] Should the context menu contain a button for opening devtools.
 * @property {boolean} [contextMenuSettings.reload=true] Should the context menu contain a button for reloading the page.
 *
 * @property {object} [cornerRounding] - _Updatable._
 * Defines and applies rounded corners for a frameless window. **NOTE:** On macOS corner is not ellipse but circle rounded by the
 *  average of _height_ and _width_.
 * @property {number} [cornerRounding.height=0] The height in pixels.
 * @property {number} [cornerRounding.width=0] The width in pixels.
 *
 * @property {any} [customContext=""] - _Updatable._
 * A field that the user can use to attach serializable data that will be saved when {@link Platform#getSnapshot Platform.getSnapshot}
 * is called.  If a window in a Platform is trying to update or retrieve its own context, it can use the
 * {@link Platform#setWindowContext Platform.setWindowContext} and {@link Platform#getWindowContext Platform.getWindowContext} calls.
 * When omitted, the default value of this property is the empty string (`""`).
 * As opposed to customData this is meant for frequent updates and sharing with other contexts. [Example]{@tutorial customContext}
 *
 * @property {any} [customData=""] - _Updatable._
 * A field that the user can attach serializable data to to be ferried around with the window options.
 * _When omitted, the default value of this property is the empty string (`""`)._
 *
 * @property {object[]} [customRequestHeaders]
 * Defines list of custom headers for requests sent by the window.
 * @property {string[]} [customRequestHeaders.urlPatterns=[]] The URL patterns for which the headers will be applied
 * @property {object[]} [customRequestHeaders.headers=[]] Objects representing headers and their values,
 * where the object key is the name of header and value at key is the value of the header
 *
 * @property {boolean} [closeOnLastViewRemoved=true] - _Experimental._  _Updatable._
 * Toggling off would keep the Window alive even if all its Views were closed.
 * This is meant for advanced users and should be used with caution.
 * Limitations - Once a Layout has been emptied out of all views it's not usable anymore, and certain API calls will fail.
 * Use `layout.replace` to create a fresh Layout instance in case you want to populate it with Views again.
 * ** note ** - This option is ignored in non-Platforms apps.
 *
 * @property {boolean} [defaultCentered=false]
 * Centers the window in the primary monitor. This option overrides `defaultLeft` and `defaultTop`. When `saveWindowState` is `true`,
 * this value will be ignored for subsequent launches in favor of the cached value. **NOTE:** On macOS _defaultCenter_ is
 * somewhat above center vertically.
 *
 * @property {number} [defaultHeight=500]
 * The default height of the window. When `saveWindowState` is `true`, this value will be ignored for subsequent launches
 * in favor of the cached value.
 *
 * @property {number} [defaultLeft=100]
 * The default left position of the window. When `saveWindowState` is `true`, this value will be ignored for subsequent
 * launches in favor of the cached value.
 *
 * @property {number} [defaultTop=100]
 * The default top position of the window. When `saveWindowState` is `true`, this value will be ignored for subsequent
 * launches in favor of the cached value.
 *
 * @property {number} [defaultWidth=800]
 * The default width of the window. When `saveWindowState` is `true`, this value will be ignored for subsequent
 * launches in favor of the cached value.
 *
 * @property {boolean} [includeInSnapshots=true] - _Updatable._
 * When true, the window will be be included in snapshots returned by Platform.getSnapshot(). Turning this off may be desirable when dealing with
 * inherently temporary windows whose state shouldn't be preserved, such as modals, menus, or popups.
 *
 * @property {boolean} [frame=true] - _Updatable._
 * A flag to show the frame.
 *
 * @hidden-property {boolean} [hideOnClose=false] - A flag to allow a window to be hidden when the close button is clicked.
 *
 * @property {object[]} [hotkeys=[]] - _Updatable._
 * Defines the list of hotkeys that will be emitted as a `hotkey` event on the window. For usage example see [example]{@tutorial hotkeys}.
 * Within Platform, OpenFin also implements a set of pre-defined actions called
 * [keyboard commands]{@link https://developers.openfin.co/docs/platform-api#section-5-3-using-keyboard-commands}
 * that can be assigned to a specific hotkey in the platform manifest.
 * @property {string} hotkeys.keys The key combination of the hotkey, i.e. "Ctrl+T"
 * @property {boolean} [hotkeys.preventDefault=false] Whether or not to prevent default key handling before emitting the event
 *
 * @property {string} [icon] - _Updatable. Inheritable._
 * A URL for the icon to be shown in the window title bar and the taskbar.
 * _When omitted, inherits from the parent application._
 *  note: Window OS caches taskbar icons, therefore an icon change might only be visible after the cache is removed or the uuid is changed.
 *
 * @property {number} [maxHeight=-1] - _Updatable._
 * The maximum height of a window. Will default to the OS defined value if set to -1.
 *
 * @property {boolean} [maximizable=true] - _Updatable._
 * A flag that lets the window be maximized.
 *
 * @property {number} [maxWidth=-1] - _Updatable._
 * The maximum width of a window. Will default to the OS defined value if set to -1.
 *
 * @property {number} [minHeight=0] - _Updatable._
 * The minimum height of a window.
 *
 * @property {boolean} [minimizable=true] - _Updatable._
 * A flag that lets the window be minimized.
 *
 * @property {number} [minWidth=0] - _Updatable._
 * The minimum width of a window.
 *
 * @property {Identity} [modalParentIdentity]
 * Parent identity of a modal window. It will create a modal child window when this option is set.
 *
 * @property {string} name
 * The name of the window.
 *
 * @property {number} [opacity=1.0] - _Updatable._
 * A flag that specifies how transparent the window will be.
 * Changing opacity doesn't work on Windows 7 without Aero so setting this value will have no effect there.
 * This value is clamped between `0.0` and `1.0`.
 *
 * @property {preloadScript[]} [preloadScripts] - _Inheritable_
 * A list of scripts that are eval'ed before other scripts in the page. When omitted, _inherits_
 * from the parent application.
 *
 * @property {string} [processAffinity]
 * A string to attempt to group renderers together. Will only be used if pages are on the same origin.
 *
 * @property {boolean} [resizable=true] - _Updatable._
 * A flag to allow the user to resize the window.
 *
 * @property {object} [resizeRegion] - _Updatable._
 * Defines a region in pixels that will respond to user mouse interaction for resizing a frameless window.
 * @property {number} [resizeRegion.bottomRightCorner=9]
 * The size in pixels of an additional square resizable region located at the bottom right corner of a frameless window.
 * @property {number} [resizeRegion.size=7]
 * The size in pixels.
 * @property {object} [resizeRegion.sides={top:true,right:true,bottom:true,left:true}]
 * Sides that a window can be resized from.
 *
 * @property {boolean} [saveWindowState=true]
 * A flag to cache the location of the window.
 * ** note ** - This option is ignored in Platforms as it would cause inconsistent {@link Platform#applySnapshot applySnapshot} behavior.
 *
 * @property {boolean} [shadow=false]
 * A flag to display a shadow on frameless windows.
 * `shadow` and `cornerRounding` are mutually exclusive.
 * On Windows 7, Aero theme is required.
 *
 * @property {boolean} [showBackgroundImages=false] - _Updatable._
 * Platforms Only.  If true, will show background images in the layout when the Views are hidden.
 * This occurs when the window is resizing or a tab is being dragged within the layout.
 *
 * @property {boolean} [showTaskbarIcon=true] - _Updatable._ _Windows_.
 * A flag to show the window's icon in the taskbar.
 *
 * @property {boolean} [smallWindow=false]
 * A flag to specify a frameless window that can be be created and resized to less than 41x36 px (width x height).
 * _Note: Caveats of small windows are no Aero Snap and drag to/from maximize._
 * _Windows 10: Requires `maximizable` to be false. Resizing with the mouse is only possible down to 38x39 px._
 *
 * @property {string} [state="normal"]
 * The visible state of the window on creation.
 * One of:
 * * `"maximized"`
 * * `"minimized"`
 * * `"normal"`
 *
 * @property {string} [taskbarIcon=string] - Deprecated - use `icon` instead._Windows_.
 *
 * @property {string} [taskbarIconGroup=<application uuid>] - _Windows_.
 * Specify a taskbar group for the window.
 * _If omitted, defaults to app's uuid (`fin.Application.getCurrentSync().identity.uuid`)._
 *
 * @property {string} [url="about:blank"]
 * The URL of the window.
 *
 * @property {string} [uuid=<application uuid>]
 * The `uuid` of the application, unique within the set of all `Application`s running in OpenFin Runtime.
 * If omitted, defaults to the `uuid` of the application spawning the window.
 * If given, must match the `uuid` of the  application spawning the window.
 * In other words, the application's `uuid` is the only acceptable value, but is the default, so there's
 * really no need to provide it.
 *
 * @property {boolean} [waitForPageLoad=false]
 * When set to `true`, the window will not appear until the `window` object's `load` event fires.
 * When set to `false`, the window will appear immediately without waiting for content to be loaded.
 */
/**
 * @typedef {object} CapturePageOptions
 * @property { Area } [area] The area of the window to be captured.
 * @property { string } [format='png'] The format of the captured image.  Can be 'png', 'jpg', or 'bmp'.
 * @property { number } [quality=100] Number representing quality of JPEG image only. Between 0 - 100.
 */
/**
 * @typedef { object } Area
 * @property { number } height Area's height
 * @property { number } width Area's width
 * @property { number } x X coordinate of area's starting point
 * @property { number } y Y coordinate of area's starting point
 */
/**
 * @typedef {object} FindInPageOptions
 * @property {boolean} [forward=true] Whether to search forward or backward.
 * @property {boolean} [findNext=false] Whether to begin a new text finding session. Should be true for first requests, and false for subsequent requests. Defaults to false.
 * @property {boolean} [matchCase=false] Whether search should be case-sensitive.
 * @property {boolean} [wordStart=false] Whether to look only at the start of words.
 * @property {boolean} [medialCapitalAsWordStart=false]
 * When combined with wordStart, accepts a match in the middle of a word if the match begins with an uppercase letter followed by a<br>
 * lowercase or non-letter. Accepts several other intra-word matches.
 */
/**
 * @typedef {object} Transition
 * @property {Opacity} opacity - The Opacity transition
 * @property {Position} position - The Position transition
 * @property {Size} size - The Size transition
 */
/**
 * @typedef {object} TransitionOptions
 * @property {boolean} interrupt - This option interrupts the current animation. When false it pushes
this animation onto the end of the animation queue.
 * @property {boolean} relative - Treat 'opacity' as absolute or as a delta. Defaults to false.
 */
/**
 * @typedef {object} Size
 * @property {number} duration - The total time in milliseconds this transition should take.
 * @property {boolean} relative - Treat 'opacity' as absolute or as a delta. Defaults to false.
 * @property {number} width - Optional if height is present. Defaults to the window's current width.
 * @property {number} height - Optional if width is present. Defaults to the window's current height.
 */
/**
 * @typedef {object} Position
 * @property {number} duration - The total time in milliseconds this transition should take.
 * @property {boolean} relative - Treat 'opacity' as absolute or as a delta. Defaults to false.
 * @property {number} left - Defaults to the window's current left position in virtual screen coordinates.
 * @property {number} top - Defaults to the window's current top position in virtual screen coordinates.
 */
/**
 * @typedef {object} Opacity
 * @property {number} duration - The total time in milliseconds this transition should take.
 * @property {boolean} relative - Treat 'opacity' as absolute or as a delta. Defaults to false.
 * @property {number} opacity - This value is clamped from 0.0 to 1.0.
 */
/**
 * Bounds is a interface that has the properties of height,
 * width, left, top which are all numbers
 * @typedef { object } Bounds
 * @property { number } height Get the application height bound
 * @property { number } width Get the application width bound
 * @property { number } top Get the application top bound
 * @property { number } left Get the application left bound
 * @property { number } right Get the application right bound
 * @property { number } bottom Get the application bottom bound
 */
/**
 * @classdesc A basic window that wraps a native HTML window. Provides more fine-grained
 * control over the window state such as the ability to minimize, maximize, restore, etc.
 * By default a window does not show upon instantiation; instead the window's show() method
 * must be invoked manually. The new window appears in the same process as the parent window.
 * It has the ability to listen for <a href="tutorial-Window.EventEmitter.html">window specific events</a>.
 * @class
 * @alias Window
 * @hideconstructor
 */
// The window.Window name is taken
class _Window extends main_1.WebContents {
    constructor(wire, identity) {
        super(wire, identity, 'window');
        this.identity = identity;
    }
    /**
     * Adds a listener to the end of the listeners array for the specified event.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - Called whenever an event of the specified type occurs.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function addListener
     * @memberof Window
     * @instance
     * @tutorial Window.EventEmitter
     */
    /**
     * Adds a listener to the end of the listeners array for the specified event.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - Called whenever an event of the specified type occurs.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function on
     * @memberof Window
     * @instance
     * @tutorial Window.EventEmitter
     */
    /**
     * Adds a one time listener for the event. The listener is invoked only the first time the event is fired, after which it is removed.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - The callback function.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function once
     * @memberof Window
     * @instance
     * @tutorial Window.EventEmitter
     */
    /**
     * Adds a listener to the beginning of the listeners array for the specified event.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - The callback function.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function prependListener
     * @memberof Window
     * @instance
     * @tutorial Window.EventEmitter
     */
    /**
     * Adds a one time listener for the event. The listener is invoked only the first time the event is fired, after which it is removed.
     * The listener is added to the beginning of the listeners array.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - The callback function.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function prependOnceListener
     * @memberof Window
     * @instance
     * @tutorial Window.EventEmitter
     */
    /**
     * Remove a listener from the listener array for the specified event.
     * Caution: Calling this method changes the array indices in the listener array behind the listener.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - The callback function.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function removeListener
     * @memberof Window
     * @instance
     * @tutorial Window.EventEmitter
     */
    /**
     * Removes all listeners, or those of the specified event.
     * @param { string | symbol } [eventType]  - The type of the event.
     * @return {Promise.<this>}
     * @function removeAllListeners
     * @memberof Window
     * @instance
     * @tutorial Window.EventEmitter
     */
    /**
     * Gets a base64 encoded image of the window or a part of it.
     * @function capturePage
     * @param { CapturePageOptions } [options] options for capturePage call.
     * @return {Promise.<string>}
     * @memberof Window
     * @instance
     * @tutorial Window.capturePage
     */
    /**
     * Executes Javascript on the window, restricted to windows you own or windows owned by
     * applications you have created.
     * @param { string } code JavaScript code to be executed on the window.
     * @function executeJavaScript
     * @memberOf Window
     * @instance
     * @return {Promise.<void>}
     * @tutorial Window.executeJavaScript
     */
    /**
     * Gives focus to the window.
     * @return {Promise.<void>}
     * @function focus
     * @emits focused
     * @memberOf Window
     * @instance
     * @tutorial Window.focus
     */
    /**
     * Returns the zoom level of the window.
     * @function getZoomLevel
     * @memberOf Window
     * @instance
     * @return {Promise.<number>}
     * @tutorial Window.getZoomLevel
     */
    /**
     * Sets the zoom level of the window.
     * @param { number } level The zoom level
     * @function setZoomLevel
     * @memberOf Window
     * @instance
     * @return {Promise.<void>}
     * @tutorial Window.setZoomLevel
     */
    /**
     * Find and highlight text on a page.
     * @param { string } searchTerm Term to find in page
     * @param { FindInPageOptions } options Search options
     * @function findInPage
     * @memberOf Window
     * @instance
     * @return {Promise.<number>}
     * @tutorial Window.findInPage
     */
    /**
     * Stops any findInPage call with the provided action.
     * @param {string} action
     * Action to execute when stopping a find in page:<br>
     * "clearSelection" - Clear the selection.<br>
     * "keepSelection" - Translate the selection into a normal selection.<br>
     * "activateSelection" - Focus and click the selection node.<br>
     * @function stopFindInPage
     * @memberOf Window
     * @instance
     * @return {Promise.<void>}
     * @tutorial Window.stopFindInPage
     */
    /**
     * Navigates the window to a specified URL. The url must contain the protocol prefix such as http:// or https://.
     * @param {string} url - The URL to navigate the window to.
     * @function navigate
     * @memberOf Window
     * @instance
     * @return {Promise.<void>}
     * @tutorial Window.navigate
     */
    /**
     * Navigates the window back one page.
     * @function navigateBack
     * @memberOf Window
     * @instance
     * @return {Promise.<void>}
     * @tutorial Window.navigateBack
     */
    /**
     * Navigates the window forward one page.
     * @function navigateForward
     * @memberOf Window
     * @instance
     * @return {Promise.<void>}
     * @tutorial Window.navigateForward
     */
    /**
     * Stops any current navigation the window is performing.
     * @function stopNavigation
     * @memberOf Window
     * @instance
     * @return {Promise.<void>}
     * @tutorial Window.stopNavigation
     */
    /**
     * Reloads the window current page
     * @function reload
     * @memberOf Window
     * @instance
     * @return {Promise.<void>}
     * @tutorial Window.reload
     */
    /**
     * Prints the window's web page
     * @param { PrintOptions } [options] Printer Options
     * @function print
     * @memberOf Window
     * @instance
     * @return {Promise.<void>}
     * @tutorial Window.print
     */
    /**
     * Returns an array with all system printers
     * @function getPrinters
     * @memberOf Window
     * @instance
     * @return { Promise.Array.<PrinterInfo> }
     * @tutorial Window.getPrinters
     */
    /**
     * Retrieves the process information associated with a window.
     * @function getProcessInfo
     * @memberOf Window
     * @instance
     * @return {Promise.<EntityProcessDetails>}
     * @tutorial Window.getProcessInfo
     */
    /**
     * Retrieves information on all Shared Workers.
     * @function getSharedWorkers
     * @memberOf Window
     * @instance
     * @return {Promise.Array.<SharedWorkerInfo>}
     * @tutorial Window.getSharedWorkers
     */
    /**
     * Opens the developer tools for the shared worker context.
     * @function inspectSharedWorker
     * @memberOf Window
     * @instance
     * @return {Promise.<void>}
     * @tutorial Window.inspectSharedWorker
     */
    /**
     * Inspects the shared worker based on its ID.
     * @param { string } workerId - The id of the shared worker.
     * @function inspectSharedWorkerById
     * @memberOf Window
     * @instance
     * @return {Promise.<void>}
     * @tutorial Window.inspectSharedWorkerById
     */
    /**
     * Opens the developer tools for the service worker context.
     * @function inspectServiceWorker
     * @memberOf Window
     * @instance
     * @return {Promise.<void>}
     * @tutorial Window.inspectServiceWorker
     */
    // create a new window
    createWindow(options) {
        this.wire.sendAction('window-create-window', this.identity).catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        return new Promise((resolve, reject) => {
            const CONSTRUCTOR_CB_TOPIC = 'fire-constructor-callback';
            // need to call pageResponse, otherwise when a child window is created, page is not loaded
            const pageResponse = new Promise((resolve) => {
                this.on(CONSTRUCTOR_CB_TOPIC, function fireConstructor(response) {
                    let cbPayload;
                    const { success } = response;
                    const responseData = response.data;
                    const { message } = responseData;
                    if (success) {
                        cbPayload = {
                            httpResponseCode: responseData.httpResponseCode,
                            apiInjected: responseData.apiInjected
                        };
                    }
                    else {
                        cbPayload = {
                            message: responseData.message,
                            networkErrorCode: responseData.networkErrorCode,
                            stack: responseData.stack
                        };
                    }
                    this.removeListener(CONSTRUCTOR_CB_TOPIC, fireConstructor);
                    resolve({
                        message,
                        cbPayload,
                        success
                    });
                });
            });
            // set defaults:
            if (options.waitForPageLoad === undefined) {
                options.waitForPageLoad = false;
            }
            if (options.autoShow === undefined) {
                options.autoShow = true;
            }
            const windowCreation = this.wire.environment.createChildContent({ entityType: 'window', options });
            Promise.all([pageResponse, windowCreation])
                .then((resolvedArr) => {
                const pageResolve = resolvedArr[0];
                if (pageResolve.success) {
                    resolve(this);
                }
                else {
                    reject(pageResolve);
                }
                try {
                    // this is to enforce a 5.0 contract that the child's main function
                    // will not fire before the parent's success callback on creation.
                    // if the child window is not accessible (CORS) this contract does
                    // not hold.
                    const webWindow = this.getWebWindow();
                    webWindow.fin.__internal_.openerSuccessCBCalled();
                }
                catch (e) {
                    // common for main windows, we do not want to expose this error. here just to have a debug target.
                    // console.error(e);
                }
            })
                .catch(reject);
        });
    }
    /**
     * Retrieves an array of frame info objects representing the main frame and any
     * iframes that are currently on the page.
     * @return {Promise.<Array<FrameInfo>>}
     * @tutorial Window.getAllFrames
     */
    getAllFrames() {
        return this.wire.sendAction('get-all-frames', this.identity).then(({ payload }) => payload.data);
    }
    /**
     * Gets the current bounds (top, bottom, right, left, width, height) of the window.
     * @return {Promise.<Bounds>}
     * @tutorial Window.getBounds
     */
    getBounds() {
        return this.wire
            .sendAction('get-window-bounds', this.identity)
            .then(({ payload }) => payload.data);
    }
    /**
     * Centers the window on its current screen.
     * @return {Promise.<void>}
     * @tutorial Window.center
     */
    center() {
        return this.wire.sendAction('center-window', this.identity).then(() => undefined);
    }
    /**
     * Removes focus from the window.
     * @return {Promise.<void>}
     * @tutorial Window.blur
     */
    blur() {
        return this.wire.sendAction('blur-window', this.identity).then(() => undefined);
    }
    /**
     * Brings the window to the front of the window stack.
     * @return {Promise.<void>}
     * @tutorial Window.bringToFront
     */
    bringToFront() {
        return this.wire.sendAction('bring-window-to-front', this.identity).then(() => undefined);
    }
    /**
     * Performs the specified window transitions.
     * @param {Transition} transitions - Describes the animations to perform. See the tutorial.
     * @param {TransitionOptions} options - Options for the animation. See the tutorial.
     * @return {Promise.<void>}
     * @tutorial Window.animate
     */
    animate(transitions, options) {
        return this.wire
            .sendAction('animate-window', {
            transitions,
            options,
            ...this.identity
        })
            .then(() => undefined);
    }
    /**
     * Hides the window.
     * @return {Promise.<void>}
     * @tutorial Window.hide
     */
    hide() {
        return this.wire.sendAction('hide-window', this.identity).then(() => undefined);
    }
    /**
     * closes the window application
     * @param { boolean } [force = false] Close will be prevented from closing when force is false and
     *  ‘close-requested’ has been subscribed to for application’s main window.
     * @return {Promise.<void>}
     * @tutorial Window.close
     */
    close(force = false) {
        return this.wire.sendAction('close-window', { force, ...this.identity }).then(() => {
            Object.setPrototypeOf(this, null);
            return undefined;
        });
    }
    focusedWebViewWasChanged() {
        return this.wire.sendAction('focused-webview-changed', this.identity).then(() => undefined);
    }
    /**
     * Returns the native OS level Id.
     * In Windows, it will return the Windows [handle](https://docs.microsoft.com/en-us/windows/desktop/WinProg/windows-data-types#HWND).
     * @return {Promise.<string>}
     * @tutorial Window.getNativeId
     */
    getNativeId() {
        return this.wire.sendAction('get-window-native-id', this.identity).then(({ payload }) => payload.data);
    }
    /**
     * Retrieves window's attached views.
     * @experimental
     * @return {Promise.Array.<View>}
     * @tutorial Window.getCurrentViews
     */
    async getCurrentViews() {
        const { payload } = await this.wire.sendAction('window-get-views', this.identity);
        return payload.data.map((id) => new view_1.View(this.wire, id));
    }
    /*
     * @deprecated Use {@link Window.disableUserMovement} instead.
     */
    disableFrame() {
        console.warn('Function is deprecated; use disableUserMovement instead.');
        return this.wire.sendAction('disable-window-frame', this.identity).then(() => undefined);
    }
    /**
     * Prevents a user from changing a window's size/position when using the window's frame.
     * @return {Promise.<void>}
     * @tutorial Window.disableUserMovement
     */
    disableUserMovement() {
        return this.wire.sendAction('disable-window-frame', this.identity).then(() => undefined);
    }
    /*
     * @deprecated Use {@link Window.enableUserMovement} instead.
     */
    enableFrame() {
        console.warn('Function is deprecated; use enableUserMovement instead.');
        return this.wire.sendAction('enable-window-frame', this.identity).then(() => undefined);
    }
    /**
     * Re-enables user changes to a window's size/position when using the window's frame.
     * @return {Promise.<void>}
     * @tutorial Window.enableUserMovement
     */
    enableUserMovement() {
        return this.wire.sendAction('enable-window-frame', this.identity).then(() => undefined);
    }
    /**
     * Flashes the window’s frame and taskbar icon until stopFlashing is called or until a focus event is fired.
     * @return {Promise.<void>}
     * @tutorial Window.flash
     */
    flash() {
        return this.wire.sendAction('flash-window', this.identity).then(() => undefined);
    }
    /**
     * Stops the taskbar icon from flashing.
     * @return {Promise.<void>}
     * @tutorial Window.stopFlashing
     */
    stopFlashing() {
        return this.wire.sendAction('stop-flash-window', this.identity).then(() => undefined);
    }
    /**
     * Gets an information object for the window.
     * @return {Promise.<WindowInfo>}
     * @tutorial Window.getInfo
     */
    getInfo() {
        return this.wire.sendAction('get-window-info', this.identity).then(({ payload }) => payload.data);
    }
    /**
     * Retrieves the window's Layout
     * @return {Promise.<Layout>}
     * @tutorial Window.getLayout
     * @experimental
     */
    async getLayout() {
        this.wire.sendAction('window-get-layout', this.identity).catch((e) => {
            // don't expose
        });
        const opts = await this.getOptions();
        if (!opts.layout) {
            throw new Error('Window does not have a Layout');
        }
        return this.fin.Platform.Layout.wrap(this.identity);
    }
    /**
     * Gets the current settings of the window.
     * @return {Promise.<any>}
     * @tutorial Window.getOptions
     */
    getOptions() {
        return this.wire.sendAction('get-window-options', this.identity).then(({ payload }) => payload.data);
    }
    /**
     * Gets the parent application.
     * @return {Promise.<Application>}
     * @tutorial Window.getParentApplication
     */
    getParentApplication() {
        this.wire.sendAction('window-get-parent-application', this.identity).catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        return Promise.resolve(new application_1.Application(this.wire, this.identity));
    }
    /**
     * Gets the parent window.
     * @return {Promise.<_Window>}
     * @tutorial Window.getParentWindow
     */
    getParentWindow() {
        this.wire.sendAction('window-get-parent-window', this.identity).catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        return Promise.resolve(new application_1.Application(this.wire, this.identity)).then((app) => app.getWindow());
    }
    /**
     * ***DEPRECATED - please use Window.capturePage.***
     * Gets a base64 encoded PNG image of the window or just part a of it.
     * @param { Area } [area] The area of the window to be captured.
     * Omitting it will capture the whole visible window.
     * @return {Promise.<string>}
     * @tutorial Window.capturePage
     */
    async getSnapshot(area) {
        const req = { area, ...this.identity };
        console.warn('Window.getSnapshot has been deprecated, please use Window.capturePage');
        const res = await this.wire.sendAction('get-window-snapshot', req);
        return res.payload.data;
    }
    /**
     * Gets the current state ("minimized", "maximized", or "normal") of the window.
     * @return {Promise.<string>}
     * @tutorial Window.getState
     */
    getState() {
        return this.wire.sendAction('get-window-state', this.identity).then(({ payload }) => payload.data);
    }
    /**
     * Previously called getNativeWindow.
     * Returns the [Window Object](https://developer.mozilla.org/en-US/docs/Web/API/Window)
     * that represents the web context of the target window. This is the same object that
     * you would get from calling [window.open()](https://developer.mozilla.org/en-US/docs/Web/API/Window/open) in a standard web context.
     * The target window needs to be in the same application as the requesting window
     * as well as comply with [same-origin](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy) policy requirements.
     * @return {object}
     * @tutorial Window.getWebWindow
     */
    getWebWindow() {
        this.wire.sendAction('window-get-web-window', this.identity).catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        return this.wire.environment.getWebWindow(this.identity);
    }
    /**
     * Determines if the window is a main window.
     * @return {boolean}
     * @tutorial Window.isMainWindow
     */
    isMainWindow() {
        this.wire.sendAction('window-is-main-window', this.identity).catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        return this.me.uuid === this.me.name;
    }
    /**
     * Determines if the window is currently showing.
     * @return {Promise.<boolean>}
     * @tutorial Window.isShowing
     */
    isShowing() {
        return this.wire.sendAction('is-window-showing', this.identity).then(({ payload }) => payload.data);
    }
    /**
     * Maximizes the window
     * @return {Promise.<void>}
     * @tutorial Window.maximize
     */
    maximize() {
        return this.wire.sendAction('maximize-window', this.identity).then(() => undefined);
    }
    /**
     * Minimizes the window.
     * @return {Promise.<void>}
     * @tutorial Window.minimize
     */
    minimize() {
        return this.wire.sendAction('minimize-window', this.identity).then(() => undefined);
    }
    /**
     * Moves the window by a specified amount.
     * @param { number } deltaLeft The change in the left position of the window
     * @param { number } deltaTop The change in the top position of the window
     * @return {Promise.<void>}
     * @tutorial Window.moveBy
     */
    moveBy(deltaLeft, deltaTop) {
        return this.wire
            .sendAction('move-window-by', {
            deltaLeft,
            deltaTop,
            ...this.identity
        })
            .then(() => undefined);
    }
    /**
     * Moves the window to a specified location.
     * @param { number } left The left position of the window
     * @param { number } top The top position of the window
     * @return {Promise.<void>}
     * @tutorial Window.moveTo
     */
    moveTo(left, top) {
        return this.wire
            .sendAction('move-window', {
            left,
            top,
            ...this.identity
        })
            .then(() => undefined);
    }
    /**
     * Resizes the window by a specified amount.
     * @param { number } deltaWidth The change in the width of the window
     * @param { number } deltaHeight The change in the height of the window
     * @param { AnchorType } anchor Specifies a corner to remain fixed during the resize.
     * Can take the values: "top-left", "top-right", "bottom-left", or "bottom-right".
     * If undefined, the default is "top-left"
     * @return {Promise.<void>}
     * @tutorial Window.resizeBy
     */
    resizeBy(deltaWidth, deltaHeight, anchor) {
        return this.wire
            .sendAction('resize-window-by', {
            deltaWidth: Math.floor(deltaWidth),
            deltaHeight: Math.floor(deltaHeight),
            anchor,
            ...this.identity
        })
            .then(() => undefined);
    }
    /**
     * Resizes the window to the specified dimensions.
     * @param { number } width The change in the width of the window
     * @param { number } height The change in the height of the window
     * @param { AnchorType } anchor Specifies a corner to remain fixed during the resize.
     * Can take the values: "top-left", "top-right", "bottom-left", or "bottom-right".
     * If undefined, the default is "top-left"
     * @return {Promise.<void>}
     * @tutorial Window.resizeTo
     */
    resizeTo(width, height, anchor) {
        return this.wire
            .sendAction('resize-window', {
            width: Math.floor(width),
            height: Math.floor(height),
            anchor,
            ...this.identity
        })
            .then(() => undefined);
    }
    /**
     * Restores the window to its normal state (i.e., unminimized, unmaximized).
     * @return {Promise.<void>}
     * @tutorial Window.restore
     */
    restore() {
        return this.wire.sendAction('restore-window', this.identity).then(() => undefined);
    }
    /**
     * Will bring the window to the front of the entire stack and give it focus.
     * @return {Promise.<void>}
     * @tutorial Window.setAsForeground
     */
    setAsForeground() {
        return this.wire.sendAction('set-foreground-window', this.identity).then(() => undefined);
    }
    /**
     * Sets the window's size and position.
     * @property { Bounds } bounds This is a * @type {string} name - name of the window.object that holds the propertys of
     * @return {Promise.<void>}
     * @tutorial Window.setBounds
     */
    setBounds(bounds) {
        return this.wire.sendAction('set-window-bounds', { ...bounds, ...this.identity }).then(() => undefined);
    }
    /**
     * Shows the window if it is hidden.
     * @param { boolean } [force = false] Show will be prevented from showing when force is false and
     *  ‘show-requested’ has been subscribed to for application’s main window.
     * @return {Promise.<void>}
     * @tutorial Window.show
     */
    show(force = false) {
        return this.wire.sendAction('show-window', { force, ...this.identity }).then(() => undefined);
    }
    /**
     * Shows the window if it is hidden at the specified location.
     * If the toggle parameter is set to true, the window will
     * alternate between showing and hiding.
     * @param { number } left The left position of the window
     * @param { number } top The right position of the window
     * @param { boolean } force Show will be prevented from closing when force is false and
     * ‘show-requested’ has been subscribed to for application’s main window
     * @return {Promise.<void>}
     * @tutorial Window.showAt
     */
    showAt(left, top, force = false) {
        return this.wire
            .sendAction('show-at-window', {
            force,
            left: Math.floor(left),
            top: Math.floor(top),
            ...this.identity
        })
            .then(() => undefined);
    }
    /**
     * Shows the Chromium Developer Tools
     * @return {Promise.<void>}
     * @tutorial Window.showDeveloperTools
     */
    /**
     * Updates the window using the passed options.
     * Values that are objects are deep-merged, overwriting only the values that are provided.
     * @param {*} options Changes a window's options that were defined upon creation. See tutorial
     * @return {Promise.<void>}
     * @tutorial Window.updateOptions
     */
    updateOptions(options) {
        return this.wire.sendAction('update-window-options', { options, ...this.identity }).then(() => undefined);
    }
    /**
     * Provides credentials to authentication requests
     * @param { string } userName userName to provide to the authentication challenge
     * @param { string } password password to provide to the authentication challenge
     * @return {Promise.<void>}
     * @tutorial Window.authenticate
     */
    authenticate(userName, password) {
        return this.wire
            .sendAction('window-authenticate', { userName, password, ...this.identity })
            .then(() => undefined);
    }
    /**
     * @typedef {object} ShowPopupMenuOptions
     * @property {Array<MenuItemTemplate>} template - An array describing the menu to show.
     * @property {number} [x] - The window x coordinate where to show the menu. Defaults to mouse position. If using must also use `y`.
     * @property {number} [y] - The window y coordinate where to show the menu. Defaults to mouse position. If using must also use `x`
     */
    /**
     * @typedef {object} MenuItemTemplate
     * @property {*} data Data to be returned if the user selects the element. Must be serializable. Large objects can have a performance impact.
     * @property {'normal' | 'separator' | 'submenu' | 'checkbox'} [type] - Defaults to 'normal' unless a 'submenu' key exists
     * @property {string} [label] - The text to show on the menu item. Should be left undefined for `type: 'separator'`
     * @property {boolean} [enabled] - If false, the menu item will be greyed out and unclickable.
     * @property {boolean} [visible] - If false, the menu item will be entirely hidden.
     * @property {boolean} [checked] - Should only be specified for `checkbox` type menu items.
     * @property {Array<MenuItemTemplate>} [submenu] Should be specified for `submenu` type menu items. If `submenu` is specified, the `type: 'submenu'` can be omitted.
     */
    /**
     * @typedef {object} MenuResult
     * @property {'clicked' | 'closed'} result - Whether the user clicked on a menu item or the menu was closed (user clicked elsewhere).
     * @property {* | undefined} [data] - The data property of the menu item clicked by the user. Only defined if result was `clicked`.
     */
    /**
     * Shows a menu on the window. Returns a promise that resolves when the user has either selected an item or closed the menu. (This may take longer than other apis).
     * Resolves to an object with `{result: 'clicked', data }` where data is the data field on the menu item clicked, or `{result 'closed'}` when the user doesn't select anything.
     * Calling this method will close previously opened menus.
     * @experimental
     * @param {ShowPopupMenuOptions} options
     * @return {Promise<MenuResult>}
     * @tutorial Window.showPopupMenu
     */
    async showPopupMenu(options) {
        const { payload } = await this.wire.sendAction('show-popup-menu', { options, ...this.identity });
        return payload.data;
    }
    /**
     * Closes the window's popup menu, if one exists.
     * @experimental
     * @return {Promise<void>}
     * @tutorial Window.closePopupMenu
     */
    async closePopupMenu() {
        return this.wire.sendAction('close-popup-menu', { ...this.identity }).then(() => undefined);
    }
    /**
     * @typedef {object} PopupOptions
     * @property {string} [name] - If a window with this `name` exists, it will be shown as a popup. Otherwise, a new window with this `name` will be created. If this `name` is undefined, `initialOptions.name` will be used. If this `name` and `intialOptions.name` are both undefined, a `name` will be generated.
     * @property {string} [url] - Navigates to this `url` if showing an existing window as a popup, otherwise the newly created window will load this `url`.
     * @property {Window~options} [initialOptions] - Window creation options when using `showPopupWindow` to create a new window.
     * @property {Window~options} [additionalOptions] - Updatable window options applied to new and existing windows when shown as popups.
     * @property {function} [onPopupResult] - Executed when this window's popup calls `dispatchPopupResult`. Note: if this is defined, `showPopupWindow` will not return a `PopupResult`.
     * @property {function} [onPopupReady] - Executed when the popup window is shown. Provides the popup window to the provided function, and allows for easy access the popup window for additional behavior customization.
     * @property {number} [height] - Height of the popup window (takes priority over `intialOptions` size properties).
     * @property {number} [width] - Width of the popup window (takes priority over `intialOptions` size properties).
     * @property {number} [x] - Left position where the popup window will be shown (relative to the window calling `showPopupWindow`).
     * @property {number} [y] - Top position where the popup window will be shown (relative to the window calling `showPopupWindow`).
     * @property {'modal' | 'hide' | 'close'} [blurBehavior] - Determines what happens if the popup window is blurred. 'modal' restricts resizing and positioning in the caller, 'hide' hides the popup window on blur and 'close' closes the popup window on blur.
     * @property {'none' | 'hide' | 'close'} [resultDispatchBehavior] - Determines what happens when the popup window calls `dispatchPopupResult`. 'none' will do nothing, 'hide' hides the popup window on `dispatchPopupResult` and 'close' closes the popup window on `dispatchPopupResult`.
     * @property {boolean} [focus] - Determines if the popup window should or should not be focused when it is shown.
     * @property {boolean} [hideOnClose] - Hide the popup window instead of closing whenever `close` is called on it. Note: if this is `true` and `blurBehavior` and/or `resultDispatchBehavior` are set to `close`, the window will be hidden.
     */
    /**
     * @typedef {object} PopupResult
     * @property {Identity} identity - `name` and `uuid` of the popup window that called dispatched this result.
     * @property {'clicked' | 'dismissed'} result - Result of the user interaction with the popup window.
     * @property {* | undefined} [data] - Data passed to `dispatchPopupResult`.
     */
    /**
     * Shows a popup window. If this window currently has a popup open, closes it.
     * @function showPopupWindow
     * @memberOf Window
     * @instance
     * @param {PopupOptions} options
     * @return {Promise<PopupResult>}
     * @tutorial Window.showPopupWindow
     */
    /**
     * Dispatch a result to the caller of `showPopupWindow`. If this window isn't currently being shown as a popup, this call will silently fail.
     * @param {*} data Serializable data to send to the caller window.
     * @return {Promise<void>}
     * @tutorial Window.dispatchPopupResult
     */
    async dispatchPopupResult(data) {
        this.wire.sendAction('window-dispatch-popup-result', this.identity).catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        await this.wire.sendAction('dispatch-popup-result', { data, ...this.identity });
    }
}
exports._Window = _Window;


/***/ }),

/***/ "../../node_modules/@openfin/core/src/api/window/index.js":
/*!****************************************************************!*\
  !*** ../../node_modules/@openfin/core/src/api/window/index.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
}
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Factory_1 = __webpack_require__(/*! ./Factory */ "../../node_modules/@openfin/core/src/api/window/Factory.js");
exports["default"] = Factory_1.default;
__exportStar(__webpack_require__(/*! ./Instance */ "../../node_modules/@openfin/core/src/api/window/Instance.js"), exports);


/***/ }),

/***/ "../../node_modules/@openfin/core/src/mock.js":
/*!****************************************************!*\
  !*** ../../node_modules/@openfin/core/src/mock.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fin = void 0;
/* eslint-disable import/prefer-default-export */
/* eslint-disable spaced-comment */
/* eslint-disable @typescript-eslint/triple-slash-reference */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable class-methods-use-this */
/// <reference path="../OpenFin.d.ts"/>
const events_1 = __webpack_require__(/*! events */ "../../node_modules/events/events.js");
const fin_1 = __webpack_require__(/*! ./api/fin */ "../../node_modules/@openfin/core/src/api/fin.js");
const transport_1 = __webpack_require__(/*! ./transport/transport */ "../../node_modules/@openfin/core/src/transport/transport.js");
const me_1 = __webpack_require__(/*! ./api/me */ "../../node_modules/@openfin/core/src/api/me.js");
class MockWire extends events_1.EventEmitter {
    connect(address) {
        throw new Error('You are not running in OpenFin.');
    }
    connectSync() {
        throw new Error('You are not running in OpenFin.');
    }
    send(data) {
        throw new Error('You are not running in OpenFin.');
    }
    shutdown() {
        throw new Error('You are not running in OpenFin.');
    }
    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super();
    }
}
class MockEnvironment {
    constructor() {
        this.childViews = true;
    }
    getDefaultChannelOptions() {
        throw new Error(me_1.environmentUnsupportedMessage);
    }
    getRtcPeer() {
        throw new Error(me_1.environmentUnsupportedMessage);
    }
    getManagerConstructor() {
        throw new Error(me_1.environmentUnsupportedMessage);
    }
    getProviderInitializer() {
        throw new Error(me_1.environmentUnsupportedMessage);
    }
    writeToken(path, token) {
        throw new Error(me_1.environmentUnsupportedMessage);
    }
    retrievePort(config) {
        throw new Error(me_1.environmentUnsupportedMessage);
    }
    getNextMessageId() {
        throw new Error(me_1.environmentUnsupportedMessage);
    }
    getRandomId() {
        throw new Error(me_1.environmentUnsupportedMessage);
    }
    createChildContent(options) {
        throw new Error(me_1.environmentUnsupportedMessage);
    }
    getWebWindow(identity) {
        throw new Error(me_1.environmentUnsupportedMessage);
    }
    getCurrentEntityIdentity() {
        throw new Error(me_1.environmentUnsupportedMessage);
    }
    getCurrentEntityType() {
        return 'unknown';
    }
    raiseEvent(eventName, eventArgs) {
        throw new Error(me_1.environmentUnsupportedMessage);
    }
    getUrl() {
        throw new Error(me_1.environmentUnsupportedMessage);
    }
    whenReady() {
        throw new Error(me_1.environmentUnsupportedMessage);
    }
}
exports.fin = ((typeof window !== 'undefined' && ((_a = window) === null || _a === void 0 ? void 0 : _a.fin)) ||
    (() => {
        const environment = new MockEnvironment();
        const transport = new transport_1.default(MockWire, environment, {
            uuid: '',
            name: ''
        });
        return new fin_1.default(transport);
    })());


/***/ }),

/***/ "../../node_modules/@openfin/core/src/transport/fin_store.js":
/*!*******************************************************************!*\
  !*** ../../node_modules/@openfin/core/src/transport/fin_store.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getFin = exports.registerFin = void 0;
const finMap = new WeakMap();
function registerFin(wire, fin) {
    finMap.set(wire, fin);
}
exports.registerFin = registerFin;
function getFin(wire) {
    const fin = finMap.get(wire);
    if (!fin) {
        throw new Error('Could not locate fin api for given transport');
    }
    return fin;
}
exports.getFin = getFin;


/***/ }),

/***/ "../../node_modules/@openfin/core/src/transport/transport-errors.js":
/*!**************************************************************************!*\
  !*** ../../node_modules/@openfin/core/src/transport/transport-errors.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RuntimeError = exports.NotSupportedError = exports.NotImplementedError = exports.NoAckError = exports.DuplicateCorrelationError = exports.UnexpectedActionError = exports.DisconnectedError = void 0;
class DisconnectedError extends Error {
    constructor(readyState) {
        super(`Expected websocket state OPEN but found ${readyState}`);
        this.readyState = readyState;
    }
}
exports.DisconnectedError = DisconnectedError;
class UnexpectedActionError extends Error {
}
exports.UnexpectedActionError = UnexpectedActionError;
class DuplicateCorrelationError extends Error {
}
exports.DuplicateCorrelationError = DuplicateCorrelationError;
class NoAckError extends Error {
}
exports.NoAckError = NoAckError;
class NotImplementedError extends Error {
}
exports.NotImplementedError = NotImplementedError;
class NotSupportedError extends Error {
}
exports.NotSupportedError = NotSupportedError;
class RuntimeError extends Error {
    constructor(data) {
        const payload = data.payload || data;
        const { reason, error } = payload;
        super(reason);
        this.name = 'RuntimeError';
        if (error === null || error === void 0 ? void 0 : error.stack) {
            this.stack = error.stack;
        }
    }
}
exports.RuntimeError = RuntimeError;


/***/ }),

/***/ "../../node_modules/@openfin/core/src/transport/transport.js":
/*!*******************************************************************!*\
  !*** ../../node_modules/@openfin/core/src/transport/transport.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _wire;
Object.defineProperty(exports, "__esModule", ({ value: true }));
const events_1 = __webpack_require__(/*! events */ "../../node_modules/events/events.js");
const wire_1 = __webpack_require__(/*! ./wire */ "../../node_modules/@openfin/core/src/transport/wire.js");
const transport_errors_1 = __webpack_require__(/*! ./transport-errors */ "../../node_modules/@openfin/core/src/transport/transport-errors.js");
const eventAggregator_1 = __webpack_require__(/*! ../api/events/eventAggregator */ "../../node_modules/@openfin/core/src/api/events/eventAggregator.js");
const me_1 = __webpack_require__(/*! ../api/me */ "../../node_modules/@openfin/core/src/api/me.js");
class Transport extends events_1.EventEmitter {
    constructor(WireType, environment, config) {
        super();
        this.wireListeners = new Map();
        this.topicRefMap = new Map();
        this.eventAggregator = new eventAggregator_1.default();
        this.messageHandlers = [this.eventAggregator.dispatchEvent];
        _wire.set(this, void 0);
        this.connectSync = () => {
            const wire = __classPrivateFieldGet(this, _wire);
            wire.connectSync();
        };
        // This function is only used in our tests.
        this.getPort = () => {
            if (this.environment.constructor.name !== 'NodeEnvironment') {
                throw new transport_errors_1.NotImplementedError('Not Implemented');
            }
            const wire = __classPrivateFieldGet(this, _wire);
            return wire.wire.url.split(':').slice(-1)[0];
        };
        __classPrivateFieldSet(this, _wire, new WireType(this.onmessage.bind(this)));
        this.environment = environment;
        this.sendRaw = __classPrivateFieldGet(this, _wire).send.bind(__classPrivateFieldGet(this, _wire));
        this.registerMessageHandler(this.handleMessage.bind(this));
        __classPrivateFieldGet(this, _wire).on('disconnected', () => {
            for (const [, { reject }] of this.wireListeners) {
                reject('Remote connection has closed');
            }
            this.wireListeners.clear();
            this.emit('disconnected');
        });
        const { uuid, name } = config;
        const entityType = this.environment.getCurrentEntityType();
        this.me = me_1.getBaseMe(entityType, uuid, name);
    }
    shutdown() {
        const wire = __classPrivateFieldGet(this, _wire);
        return wire.shutdown();
    }
    async connect(config) {
        if (wire_1.isExistingConnectConfig(config)) {
            return this.connectByPort(config);
        }
        if (wire_1.isNewConnectConfig(config)) {
            const port = await this.environment.retrievePort(config);
            return this.connectByPort({ ...config, address: `ws://localhost:${port}` });
        }
        return undefined;
    }
    async connectByPort(config) {
        const { address, uuid } = config;
        const reqAuthPayload = { ...config, type: 'file-token' };
        const wire = __classPrivateFieldGet(this, _wire);
        await wire.connect(address);
        const requestExtAuthRet = await this.sendAction('request-external-authorization', {
            uuid,
            type: 'file-token'
        }, true);
        if (requestExtAuthRet.action !== 'external-authorization-response') {
            throw new transport_errors_1.UnexpectedActionError(requestExtAuthRet.action);
        }
        const { token } = requestExtAuthRet.payload;
        await this.environment.writeToken(requestExtAuthRet.payload.file, requestExtAuthRet.payload.token);
        const requestAuthRet = await this.sendAction('request-authorization', reqAuthPayload, true);
        if (requestAuthRet.action !== 'authorization-response') {
            throw new transport_errors_1.UnexpectedActionError(requestAuthRet.action);
        }
        else if (requestAuthRet.payload.success !== true) {
            throw new transport_errors_1.RuntimeError(requestAuthRet.payload);
        }
        else {
            return token;
        }
    }
    sendAction(action, payload = {}, uncorrelated = false
    // specialResponse type is only used for 'requestAuthorization'
    ) {
        return new Promise((resolve, reject) => {
            const id = this.environment.getNextMessageId();
            const msg = {
                action,
                payload,
                messageId: id
            };
            const wire = __classPrivateFieldGet(this, _wire);
            this.addWireListener(id, resolve, reject, uncorrelated);
            return wire.send(msg).catch(reject);
        });
    }
    ferryAction(origData) {
        return new Promise((resolve, reject) => {
            const id = this.environment.getNextMessageId();
            origData.messageId = id;
            const resolver = (data) => {
                resolve(data.payload);
            };
            const wire = __classPrivateFieldGet(this, _wire);
            return wire
                .send(origData)
                .then(() => this.addWireListener(id, resolver, reject, false))
                .catch(reject);
        });
    }
    registerMessageHandler(handler) {
        this.messageHandlers.push(handler);
    }
    addWireListener(id, resolve, reject, uncorrelated) {
        if (uncorrelated) {
            this.uncorrelatedListener = resolve;
        }
        else if (this.wireListeners.has(id)) {
            reject(new transport_errors_1.DuplicateCorrelationError(String(id)));
        }
        else {
            this.wireListeners.set(id, { resolve, reject });
        }
        // Timeout and reject()?
    }
    // This method executes message handlers until the _one_ that handles the message (returns truthy) has run
    onmessage(data) {
        for (const h of this.messageHandlers) {
            h.call(null, data);
        }
    }
    handleMessage(data) {
        const id = data.correlationId || NaN;
        if (!('correlationId' in data)) {
            if (this.uncorrelatedListener) {
                this.uncorrelatedListener.call(null, data);
            }
            this.uncorrelatedListener = () => {
                // empty block
            };
        }
        else if (!this.wireListeners.has(id)) {
            return false;
        }
        else {
            // We just checked for existence above
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            const { resolve, reject } = this.wireListeners.get(id);
            if (data.action !== 'ack') {
                reject(new transport_errors_1.NoAckError(data.action));
            }
            else if (!('payload' in data)) {
                reject(new transport_errors_1.RuntimeError(data));
            }
            else if (!data.payload.success) {
                reject(new transport_errors_1.RuntimeError(data.payload));
            }
            else {
                resolve.call(null, data);
            }
            this.wireListeners.delete(id);
        }
        return true;
    }
}
_wire = new WeakMap();
exports["default"] = Transport;


/***/ }),

/***/ "../../node_modules/@openfin/core/src/transport/wire.js":
/*!**************************************************************!*\
  !*** ../../node_modules/@openfin/core/src/transport/wire.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isInternalConnectConfig = exports.isPortDiscoveryConfig = exports.isNewConnectConfig = exports.isExistingConnectConfig = exports.isExternalConfig = void 0;
function isExternalConfig(config) {
    if (typeof config.manifestUrl === 'string') {
        return true;
    }
    return false;
}
exports.isExternalConfig = isExternalConfig;
function isExistingConnectConfig(config) {
    return hasUuid(config) && typeof config.address === 'string';
}
exports.isExistingConnectConfig = isExistingConnectConfig;
function hasUuid(config) {
    return typeof config.uuid === 'string';
}
function hasRuntimeVersion(config) {
    return config.runtime && typeof config.runtime.version === 'string';
}
function isNewConnectConfig(config) {
    return hasUuid(config) && hasRuntimeVersion(config);
}
exports.isNewConnectConfig = isNewConnectConfig;
function isPortDiscoveryConfig(config) {
    return (isExternalConfig(config) && hasRuntimeVersion(config)) || isNewConnectConfig(config);
}
exports.isPortDiscoveryConfig = isPortDiscoveryConfig;
function isInternalConnectConfig(config) {
    return isExistingConnectConfig(config) || isNewConnectConfig(config);
}
exports.isInternalConnectConfig = isInternalConnectConfig;


/***/ }),

/***/ "../../node_modules/@openfin/core/src/util/errors.js":
/*!***********************************************************!*\
  !*** ../../node_modules/@openfin/core/src/util/errors.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.errorToPOJO = void 0;
function errorToPOJO(error) {
    return {
        stack: error.stack,
        message: error.message,
        toString: error.toString
    };
}
exports.errorToPOJO = errorToPOJO;


/***/ }),

/***/ "../../node_modules/@openfin/core/src/util/exhaustive.js":
/*!***************************************************************!*\
  !*** ../../node_modules/@openfin/core/src/util/exhaustive.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.exhaustiveCheck = void 0;
function exhaustiveCheck(value, allowed) {
    throw new Error(`Unsupported value: ${value}${allowed ? `\n Supported values are: ${allowed.join('')}` : ''}`);
}
exports.exhaustiveCheck = exhaustiveCheck;


/***/ }),

/***/ "../../node_modules/@openfin/core/src/util/promises.js":
/*!*************************************************************!*\
  !*** ../../node_modules/@openfin/core/src/util/promises.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.promiseMapSerial = exports.serial = exports.promiseMap = exports.promisify = void 0;
function promisify(func) {
    return (...args) => new Promise((resolve, reject) => {
        func(...args, (err, val) => (err ? reject(err) : resolve(val)));
    });
}
exports.promisify = promisify;
async function promiseMap(arr, asyncF) {
    return Promise.all(arr.map(asyncF));
}
exports.promiseMap = promiseMap;
async function serial(arr) {
    const ret = [];
    for (const func of arr) {
        // eslint-disable-next-line no-await-in-loop
        const next = await func();
        ret.push(next);
    }
    return ret;
}
exports.serial = serial;
async function promiseMapSerial(arr, func) {
    return serial(arr.map((value, index, array) => () => func(value, index, array)));
}
exports.promiseMapSerial = promiseMapSerial;


/***/ }),

/***/ "../../node_modules/@openfin/core/src/util/ref-counter.js":
/*!****************************************************************!*\
  !*** ../../node_modules/@openfin/core/src/util/ref-counter.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class RefCoutner {
    constructor() {
        this.topicRefMap = new Map();
    }
    // returns the ref count after incrementing
    incRefCount(key) {
        const refCount = this.topicRefMap.get(key);
        let returnCount;
        if (!refCount) {
            this.topicRefMap.set(key, 1);
            returnCount = 1;
        }
        else {
            const newRefCount = refCount + 1;
            returnCount = newRefCount;
            this.topicRefMap.set(key, newRefCount);
        }
        return returnCount;
    }
    // returns the ref count after decrementing, or -1 if the key already had no references
    decRefCount(key) {
        const refCount = this.topicRefMap.get(key);
        let returnCount;
        if (refCount) {
            const newRefCount = refCount - 1;
            this.topicRefMap.set(key, newRefCount);
            returnCount = newRefCount;
        }
        else {
            returnCount = -1;
        }
        return returnCount;
    }
    // Execute firstAction if it is the first such ref, else execute nonFirstAction.
    // In either case the return value is that of the action executed
    actOnFirst(key, firstAction, nonFirstAction) {
        const numRefs = this.incRefCount(key);
        const isFirstRef = numRefs === 1;
        return isFirstRef ? firstAction() : nonFirstAction();
    }
    // Execute lastAction if it is the first such ref, else execute nonLastAction.
    // In either case the return value is that of the action executed
    actOnLast(key, lastAction, nonLastAction) {
        const numRefs = this.decRefCount(key);
        const isLastRef = numRefs === 0;
        return isLastRef ? lastAction() : nonLastAction();
    }
}
exports["default"] = RefCoutner;


/***/ }),

/***/ "../../node_modules/@openfin/core/src/util/runtimeVersioning.js":
/*!**********************************************************************!*\
  !*** ../../node_modules/@openfin/core/src/util/runtimeVersioning.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.runtimeUuidMeetsMinimumRuntimeVersion = exports.parseRuntimeUuid = exports.meetsMinimumRuntimeVersion = void 0;
function vNum(x) {
    return [...x.split('.').reverse().entries()].reduce((p, [i, v]) => p + +v * 10000 ** i, 0);
}
/*
  Compares runtime versions to see if the current runtime meets your desired minimum.
*/
function meetsMinimumRuntimeVersion(currentVersion, minVersion) {
    const currentVersionParsed = vNum(currentVersion);
    const minVersionParsed = vNum(minVersion);
    return currentVersionParsed >= minVersionParsed;
}
exports.meetsMinimumRuntimeVersion = meetsMinimumRuntimeVersion;
// Strips the port info from the runtimeUuid, leaving just the runtime version.
function parseRuntimeUuid(runtimeUuid) {
    return runtimeUuid.split('/')[0];
}
exports.parseRuntimeUuid = parseRuntimeUuid;
function runtimeUuidMeetsMinimumRuntimeVersion(runtimeUuid, minVersion) {
    const runtimeVersion = parseRuntimeUuid(runtimeUuid);
    return meetsMinimumRuntimeVersion(runtimeVersion, minVersion);
}
exports.runtimeUuidMeetsMinimumRuntimeVersion = runtimeUuidMeetsMinimumRuntimeVersion;


/***/ }),

/***/ "../../node_modules/@openfin/core/src/util/validate.js":
/*!*************************************************************!*\
  !*** ../../node_modules/@openfin/core/src/util/validate.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validateIdentity = void 0;
function validateIdentity(identity) {
    let errorMsg;
    if (typeof identity !== 'object' || typeof identity.uuid !== 'string') {
        errorMsg = 'Not a valid identity object';
    }
    return errorMsg;
}
exports.validateIdentity = validateIdentity;


/***/ }),

/***/ "../../node_modules/@openfin/excel/openfin.excel.js":
/*!**********************************************************!*\
  !*** ../../node_modules/@openfin/excel/openfin.excel.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdapterError": () => (/* binding */ r),
/* harmony export */   "ApiError": () => (/* binding */ o),
/* harmony export */   "EventError": () => (/* binding */ s),
/* harmony export */   "ExcelCellBorderLineStyle": () => (/* binding */ a),
/* harmony export */   "ExcelCellHorizontalAlignment": () => (/* binding */ c),
/* harmony export */   "ExcelCellPattern": () => (/* binding */ d),
/* harmony export */   "ExcelCellVerticalAlignment": () => (/* binding */ h),
/* harmony export */   "ExcelFilterOperator": () => (/* binding */ l),
/* harmony export */   "InitializationError": () => (/* binding */ u),
/* harmony export */   "ParameterError": () => (/* binding */ p),
/* harmony export */   "disableLogging": () => (/* binding */ w),
/* harmony export */   "enableLogging": () => (/* binding */ y),
/* harmony export */   "getExcelApplication": () => (/* binding */ f)
/* harmony export */ });
var e={3885:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const i=n(9659),r=n(4999),o=n(4794);class s extends i.Base{async wrap(e){this.wire.sendAction("wrap-application").catch((e=>{}));const t=r.validateIdentity(e);if(t)throw new Error(t);return new o.Application(this.wire,e)}wrapSync(e){this.wire.sendAction("wrap-application-sync").catch((e=>{}));const t=r.validateIdentity(e);if(t)throw new Error(t);return new o.Application(this.wire,e)}async _create(e){return void 0===e.waitForPageLoad&&(e.waitForPageLoad=!1),void 0===e.autoShow&&void 0===e.isPlatformController&&(e.autoShow=!0),await this.wire.sendAction("create-application",e),this.wrap({uuid:e.uuid})}create(e){return console.warn("Deprecation Warning: fin.Application.create is deprecated. Please use fin.Application.start"),this.wire.sendAction("application-create").catch((e=>{})),this._create(e)}async start(e){this.wire.sendAction("start-application").catch((e=>{}));const t=await this._create(e);return await this.wire.sendAction("run-application",{uuid:e.uuid}),t}async startManyManifests(e){return this.wire.sendAction("run-applications",{applications:e}).then((()=>{}))}getCurrent(){return this.wire.sendAction("get-current-application").catch((e=>{})),this.wrap({uuid:this.wire.me.uuid})}getCurrentSync(){return this.wire.sendAction("get-current-application-sync").catch((e=>{})),this.wrapSync({uuid:this.wire.me.uuid})}async startFromManifest(e,t){this.wire.sendAction("application-start-from-manifest").catch((e=>{}));const n=await this._createFromManifest(e);return await n._run(t),n}createFromManifest(e){return console.warn("Deprecation Warning: fin.Application.createFromManifest is deprecated. Please use fin.Application.startFromManifest"),this.wire.sendAction("application-create-from-manifest").catch((e=>{})),this._createFromManifest(e)}_createFromManifest(e){return this.wire.sendAction("get-application-manifest",{manifestUrl:e}).then((({payload:e})=>{const t=e.data.platform?e.data.platform.uuid:e.data.startup_app.uuid;return this.wrap({uuid:t})})).then((t=>(t._manifestUrl=e,t)))}}t.default=s},4794:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Application=void 0;const i=n(9659),r=n(4997),o=n(4169);class s extends i.EmitterBase{constructor(e,t){super(e,"application",t.uuid),this.identity=t,this.window=new r._Window(this.wire,{uuid:this.identity.uuid,name:this.identity.uuid})}windowListFromIdentityList(e){const t=[];return e.forEach((e=>{t.push(new r._Window(this.wire,{uuid:e.uuid,name:e.name}))})),t}isRunning(){return this.wire.sendAction("is-application-running",this.identity).then((({payload:e})=>e.data))}async quit(e=!1){await this._close(e),await this.wire.sendAction("destroy-application",{force:e,...this.identity})}_close(e=!1){return this.wire.sendAction("close-application",{force:e,...this.identity}).then((()=>{}))}close(e=!1){return console.warn("Deprecation Warning: Application.close is deprecated Please use Application.quit"),this.wire.sendAction("application-close",this.identity).catch((e=>{})),this._close(e)}getChildWindows(){return this.wire.sendAction("get-child-windows",this.identity).then((({payload:e})=>{const t=[];return e.data.forEach((e=>{t.push({uuid:this.identity.uuid,name:e})})),this.windowListFromIdentityList(t)}))}getManifest(){return this.wire.sendAction("get-application-manifest",this.identity).then((({payload:e})=>e.data))}getParentUuid(){return this.wire.sendAction("get-parent-application",this.identity).then((({payload:e})=>e.data))}getShortcuts(){return this.wire.sendAction("get-shortcuts",this.identity).then((({payload:e})=>e.data))}async getViews(){const{payload:e}=await this.wire.sendAction("application-get-views",this.identity);return e.data.map((e=>new o.View(this.wire,e)))}getZoomLevel(){return this.wire.sendAction("get-application-zoom-level",this.identity).then((({payload:e})=>e.data))}getWindow(){return this.wire.sendAction("application-get-window",this.identity).catch((e=>{})),Promise.resolve(this.window)}registerUser(e,t){return this.wire.sendAction("register-user",{userName:e,appName:t,...this.identity}).then((()=>{}))}removeTrayIcon(){return this.wire.sendAction("remove-tray-icon",this.identity).then((()=>{}))}restart(){return this.wire.sendAction("restart-application",this.identity).then((()=>{}))}run(){return console.warn("Deprecation Warning: Application.run is deprecated Please use fin.Application.start"),this.wire.sendAction("application-run",this.identity).catch((e=>{})),this._run()}_run(e={}){return this.wire.sendAction("run-application",{manifestUrl:this._manifestUrl,opts:e,...this.identity}).then((()=>{}))}scheduleRestart(){return this.wire.sendAction("relaunch-on-close",this.identity).then((()=>{}))}async sendApplicationLog(){const{payload:e}=await this.wire.sendAction("send-application-log",this.identity);return e.data}async setJumpList(e){await this.wire.sendAction("set-jump-list",{config:e,...this.identity})}setTrayIcon(e){return this.wire.sendAction("set-tray-icon",{enabledIcon:e,...this.identity}).then((()=>{}))}setShortcuts(e){return this.wire.sendAction("set-shortcuts",{data:e,...this.identity}).then((()=>{}))}async setShortcutQueryParams(e){await this.wire.sendAction("set-shortcut-query-args",{data:e,...this.identity})}setZoomLevel(e){return this.wire.sendAction("set-application-zoom-level",{level:e,...this.identity}).then((()=>{}))}async setAppLogUsername(e){await this.wire.sendAction("set-app-log-username",{data:e,...this.identity})}getTrayIconInfo(){return this.wire.sendAction("get-tray-icon-info",this.identity).then((({payload:e})=>e.data))}terminate(){return this.wire.sendAction("terminate-application",this.identity).then((()=>{}))}wait(){return this.wire.sendAction("wait-for-hung-application",this.identity).then((()=>{}))}getInfo(){return this.wire.sendAction("get-info",this.identity).then((({payload:e})=>e.data))}async getProcessInfo(){const{payload:{data:e}}=await this.wire.sendAction("application-get-process-info",this.identity);return e}async setFileDownloadLocation(e){await this.wire.sendAction("set-file-download-location",{downloadLocation:e,...this.identity})}}t.Application=s},7264:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),r=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0});const o=n(3885);r(n(4794),t),t.default=o.default},9659:function(e,t,n){var i,r=this&&this.__classPrivateFieldSet||function(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n},o=this&&this.__classPrivateFieldGet||function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)};Object.defineProperty(t,"__esModule",{value:!0}),t.Reply=t.EmitterBase=t.Base=void 0;const s=n(3442),a=n(8068);class c{constructor(e){this.isNodeEnvironment=()=>"NodeEnvironment"===this.wire.environment.constructor.name,this.isOpenFinEnvironment=()=>"OpenFinEnvironment"===this.wire.environment.constructor.name,this.wire=e}get fin(){return a.getFin(this.wire)}get me(){return this.wire.me}}t.Base=c,t.EmitterBase=class extends c{constructor(e,t,...n){super(e),this.topic=t,i.set(this,void 0),this.eventNames=()=>this.hasEmitter()?this.getOrCreateEmitter().eventNames():[],this.emit=(e,t,...n)=>!!this.hasEmitter()&&this.getOrCreateEmitter().emit(e,t,...n),this.hasEmitter=()=>this.wire.eventAggregator.has(o(this,i)),this.getOrCreateEmitter=()=>this.wire.eventAggregator.getOrCreate(o(this,i)),this.listeners=e=>this.hasEmitter()?this.getOrCreateEmitter().listeners(e):[],this.listenerCount=e=>this.hasEmitter()?this.getOrCreateEmitter().listenerCount(e):0,this.registerEventListener=async(e,t={},n,i)=>{const r={...this.identity,timestamp:t.timestamp||Date.now(),topic:this.topic,type:e},o=this.getOrCreateEmitter();n(o);try{await this.wire.sendAction("subscribe-to-desktop-event",r)}catch(e){throw i(o),this.deleteEmitterIfNothingRegistered(o),e}},this.deregisterEventListener=async(e,t={})=>{if(this.hasEmitter()){const n={...this.identity,timestamp:t.timestamp||Date.now(),topic:this.topic,type:e};return await this.wire.sendAction("unsubscribe-to-desktop-event",n).catch((()=>null)),this.getOrCreateEmitter()}return Promise.resolve()},this.on=async(e,t,n)=>(await this.registerEventListener(e,n,(n=>{n.on(e,t)}),(n=>{n.removeListener(e,t)})),this),this.addListener=this.on,this.once=async(e,t,n)=>{const i=()=>this.deregisterEventListener(e);return await this.registerEventListener(e,n,(n=>{n.once(e,i),n.once(e,t)}),(n=>{n.removeListener(e,i),n.removeListener(e,t)})),this},this.prependListener=async(e,t,n)=>(await this.registerEventListener(e,n,(n=>{n.prependListener(e,t)}),(n=>{n.removeListener(e,t)})),this),this.prependOnceListener=async(e,t,n)=>{const i=()=>this.deregisterEventListener(e);return await this.registerEventListener(e,n,(n=>{n.prependOnceListener(e,t),n.once(e,i)}),(n=>{n.removeListener(e,t),n.removeListener(e,i)})),this},this.removeListener=async(e,t,n)=>{const i=await this.deregisterEventListener(e,n);return i&&(i.removeListener(e,t),this.deleteEmitterIfNothingRegistered(i)),this},this.deregisterAllListeners=async e=>{const t={...this.identity,type:e,topic:this.topic};if(this.hasEmitter()){const e=this.getOrCreateEmitter(),n=e.listenerCount(t.type),i=[];for(let e=0;e<n;e++)i.push(this.wire.sendAction("unsubscribe-to-desktop-event",t).catch((()=>null)));return await Promise.all(i),e}},this.removeAllListeners=async e=>{const t=async e=>{const t=await this.deregisterAllListeners(e);t&&(t.removeAllListeners(e),this.deleteEmitterIfNothingRegistered(t))};if(e)await t(e);else if(this.hasEmitter()){const e=this.getOrCreateEmitter().eventNames();await s.promiseMap(e,t)}return this},r(this,i,[t,...n]),this.listeners=e=>this.hasEmitter()?this.getOrCreateEmitter().listeners(e):[]}deleteEmitterIfNothingRegistered(e){0===e.eventNames().length&&this.wire.eventAggregator.delete(o(this,i))}},i=new WeakMap,t.Reply=class{}},3427:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const i=n(9659);class r extends i.Base{writeText(e){return this.wire.sendAction("clipboard-write-text",e).then((()=>{}))}readText(e){return this.wire.sendAction("clipboard-read-text",e).then((({payload:e})=>e.data))}writeHtml(e){return this.wire.sendAction("clipboard-write-html",e).then((()=>{}))}readHtml(e){return this.wire.sendAction("clipboard-read-html",e).then((({payload:e})=>e.data))}writeRtf(e){return this.wire.sendAction("clipboard-write-rtf",e).then((()=>{}))}readRtf(e){return this.wire.sendAction("clipboard-read-rtf",e).then((({payload:e})=>e.data))}write(e){return this.wire.sendAction("clipboard-write",e).then((()=>{}))}getAvailableFormats(e){return this.wire.sendAction("clipboard-read-formats",e).then((({payload:e})=>e.data))}}t.default=r},7813:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.EmitterMap=void 0;const i=n(6465);function r(e){return Buffer.from(e).toString("base64")}t.EmitterMap=class{constructor(){this.storage=new Map}hashKeys(e){return e.map(r).join("/")}getOrCreate(e){const t=this.hashKeys(e);return this.storage.has(t)||this.storage.set(t,new i.EventEmitter),this.storage.get(t)}has(e){return this.storage.has(this.hashKeys(e))}delete(e){const t=this.hashKeys(e);return this.storage.delete(t)}}},2734:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const i=n(7813);class r extends i.EmitterMap{constructor(){super(...arguments),this.dispatchEvent=e=>{if(function(e){return"process-desktop-event"===e.action}(e)){const{payload:t}=e,n=function(e){const{topic:t}=e;if("frame"===t){const{uuid:n,name:i}=e;return[t,n,i]}if("window"===t){const{uuid:n,name:i}=e;return[t,n,i]}if("application"===t){const{uuid:n}=e;return[t,n]}if("view"===t){const{uuid:n,name:i}=e;return[t,n,i]}return[t]}(t);if(this.has(n))return this.getOrCreate(n).emit(t.type,t),!0}return!1}}}t.default=r},7168:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const i=n(9659),r=n(8298);class o extends i.Base{wrap(e){return this.wire.sendAction("external-application-wrap").catch((e=>{})),Promise.resolve(new r.ExternalApplication(this.wire,{uuid:e}))}wrapSync(e){return this.wire.sendAction("external-application-wrap-sync").catch((e=>{})),new r.ExternalApplication(this.wire,{uuid:e})}}t.default=o},8298:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ExternalApplication=void 0;const i=n(9659);class r extends i.EmitterBase{constructor(e,t){super(e,"external-application",t.uuid),this.identity=t}getInfo(){return this.wire.sendAction("get-external-application-info",this.identity).then((({payload:e})=>e.data))}}t.ExternalApplication=r},9021:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),r=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0});const o=n(7168);t.default=o.default,r(n(8298),t)},6545:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const i=n(6465),r=n(3641),o=n(4997),s=n(7264),a=n(8347),c=n(3427),d=n(9021),h=n(6720),l=n(9211),u=n(4169),p=n(609),w=n(9641),y=n(8068),f=n(8706),g=n(7153);class m extends i.EventEmitter{constructor(e){super(),y.registerFin(e,this),this.wire=e,this.System=new r.default(e),this.Window=new o.default(e),this.Application=new s.default(e),this.InterApplicationBus=new a.default(e),this.Clipboard=new c.default(e),this.ExternalApplication=new d.default(e),this.Frame=new h.default(e),this.GlobalHotkey=new l.default(e),this.Platform=new p.default(e,this.InterApplicationBus.Channel),this.View=new u.default(e),this.Interop=new f.default(e),this.SnapshotSource=new g.default(e),this.me=w.getMe(e),e.on("disconnected",(()=>{this.emit("disconnected")}))}}t.default=m},1778:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const i=n(9659),r=n(4999),o=n(8161);class s extends i.Base{async wrap(e){this.wire.sendAction("frame-wrap").catch((e=>{}));const t=r.validateIdentity(e);if(t)throw new Error(t);return new o._Frame(this.wire,e)}wrapSync(e){this.wire.sendAction("frame-wrap-sync").catch((e=>{}));const t=r.validateIdentity(e);if(t)throw new Error(t);return new o._Frame(this.wire,e)}getCurrent(){return this.wire.sendAction("frame-get-current").catch((e=>{})),Promise.resolve(new o._Frame(this.wire,this.wire.environment.getCurrentEntityIdentity()))}getCurrentSync(){return this.wire.sendAction("frame-get-current-sync").catch((e=>{})),new o._Frame(this.wire,this.wire.environment.getCurrentEntityIdentity())}}t.default=s},8161:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t._Frame=void 0;const i=n(9659);class r extends i.EmitterBase{constructor(e,t){super(e,"frame",t.uuid,t.name),this.identity=t}getInfo(){return this.wire.sendAction("get-frame-info",this.identity).then((({payload:e})=>e.data))}getParentWindow(){return this.wire.sendAction("get-parent-window",this.identity).then((({payload:e})=>e.data))}}t._Frame=r},6720:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),r=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0});const o=n(1778);t.default=o.default,r(n(8161),t)},9211:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const i=n(9659);class r extends i.EmitterBase{constructor(e){super(e,"global-hotkey")}async register(e,t){await this.on(e,t),await this.wire.sendAction("global-hotkey-register",{hotkey:e})}async unregister(e){await this.removeAllListeners(e),await this.wire.sendAction("global-hotkey-unregister",{hotkey:e})}async unregisterAll(){await Promise.all(this.eventNames().filter((e=>!("registered"===e||"unregistered"===e))).map((e=>this.removeAllListeners(e)))),await this.wire.sendAction("global-hotkey-unregister-all",{})}async isRegistered(e){const{payload:{data:t}}=await this.wire.sendAction("global-hotkey-is-registered",{hotkey:e});return t}}t.default=r},7539:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ChannelBase=t.ProtectedItems=void 0;const n=e=>(t,n,i)=>{const r=e(t,n,i);return void 0===r?n:r};t.ProtectedItems=class{constructor(e,t){this.providerIdentity=e,this.wire=t}};class i{constructor(){this.subscriptions=new Map}static defaultAction(e){throw new Error(`No action registered at target for ${e}`)}async processAction(e,t,n){try{const r=this.subscriptions.has(e)?this.subscriptions.get(e):(t,n)=>{var r;return(null!==(r=this.defaultAction)&&void 0!==r?r:i.defaultAction)(e,t,n)},o=this.preAction?await this.preAction(e,t,n):t,s=await r(o,n);return this.postAction?await this.postAction(e,s,n):s}catch(t){if(this.errorMiddleware)return this.errorMiddleware(e,t,n);throw t}}beforeAction(e){if(this.preAction)throw new Error("Already registered beforeAction middleware");this.preAction=n(e)}onError(e){if(this.errorMiddleware)throw new Error("Already registered error middleware");this.errorMiddleware=e}afterAction(e){if(this.postAction)throw new Error("Already registered afterAction middleware");this.postAction=n(e)}remove(e){this.subscriptions.delete(e)}setDefaultAction(e){if(this.defaultAction)throw new Error("default action can only be set once");this.defaultAction=e}register(e,t){if(this.subscriptions.has(e))throw new Error(`Subscription already registered for action: ${e}. Unsubscribe before adding new subscription`);return this.subscriptions.set(e,t),!0}}t.ChannelBase=i},8378:function(e,t,n){var i,r,o,s=this&&this.__classPrivateFieldSet||function(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n},a=this&&this.__classPrivateFieldGet||function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)};Object.defineProperty(t,"__esModule",{value:!0});const c=n(7539),d=new Map;class h extends c.ChannelBase{constructor(e,t,n){super(),i.set(this,void 0),r.set(this,void 0),this.processAction=(e,t,n)=>super.processAction(e,t,n),o.set(this,(()=>{d.delete(this.endpointId),a(this,r).close()})),s(this,i,new c.ProtectedItems(e,t)),this.disconnectListener=()=>{},this.endpointId=e.endpointId,s(this,r,n),d.set(this.endpointId,this),n.receive(this.processAction)}static closeChannelByEndpointId(e){const t=d.get(e);t&&a(t,o).call(t)}static handleProviderDisconnect(e,t){e.disconnectListener(t),a(e,o).call(e)}get providerIdentity(){return a(this,i).providerIdentity}async dispatch(e,t){if(a(this,r).isEndpointConnected(this.providerIdentity.channelId))return a(this,r).send(this.providerIdentity.channelId,e,t);throw new Error("The client you are trying to dispatch from is disconnected from the target provider.")}onDisconnection(e){this.disconnectListener=t=>{try{e(t)}catch(e){throw new Error(`Error while calling the onDisconnection callback: ${e.message}`)}finally{this.disconnectListener=()=>{}}}}async disconnect(){const e=a(this,i),{channelName:t,uuid:n,name:r}=e.providerIdentity;await e.wire.sendAction("disconnect-from-channel",{channelName:t,uuid:n,name:r,endpointId:this.endpointId}),a(this,o).call(this)}}t.default=h,i=new WeakMap,r=new WeakMap,o=new WeakMap},6711:function(e,t,n){var i,r,o=this&&this.__classPrivateFieldSet||function(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n},s=this&&this.__classPrivateFieldGet||function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)};Object.defineProperty(t,"__esModule",{value:!0}),t.ConnectionManager=void 0;const a=n(3917),c=n(9659),d=n(1046),h=n(3870),l=n(569),u=n(2942),p=n(3749),w=n(3037),y=n(7113);class f extends c.Base{constructor(e){super(e),i.set(this,void 0),r.set(this,void 0),this.removeChannelFromProviderMap=e=>{this.providerMap.delete(e)},this.onmessage=e=>"process-channel-connection"===e.action&&(this.processChannelConnection(e),!0),this.providerMap=new Map,this.protocolManager=new w.ProtocolManager(this.isNodeEnvironment()?["classic"]:["rtc","classic"]),o(this,i,new p.MessageReceiver(e)),o(this,r,new l.RTCICEManager(e)),e.registerMessageHandler(this.onmessage.bind(this))}static getProtocolOptionsFromStrings(e){return e.map((e=>{switch(e){case"rtc":return h.RTCInfo;case"classic":return d.ClassicInfo;default:return a.exhaustiveCheck(e,["rtc","classic"])}}))}createProvider(e,t){const n=Object.assign(this.wire.environment.getDefaultChannelOptions().create,e||{}),r=this.protocolManager.getProviderProtocols(null==n?void 0:n.protocols),o=r.map((e=>{switch(e){case"rtc":return new h.RTCStrategy;case"classic":return new d.ClassicStrategy(this.wire,s(this,i),t.channelId,t);default:return a.exhaustiveCheck(e,["rtc","classic"])}}));let c;if(2===o.length){const[e,t]=o;c=y.default.combine(e,t)}else{if(1!==o.length)throw new Error("failed to combine strategies");[c]=o}const l=new u.ChannelProvider(t,this.wire,c),p=t.channelId;return this.providerMap.set(p,{provider:l,strategy:c,supportedProtocols:f.getProtocolOptionsFromStrings(r)}),u.ChannelProvider.setProviderRemoval(l,this.removeChannelFromProviderMap.bind(this)),l}async createClientOffer(e){const t=this.protocolManager.getClientProtocols(null==e?void 0:e.protocols);let n;return{offer:{supportedProtocols:await Promise.all(t.map((async e=>{switch(e){case"rtc":{const{rtcClient:e,channels:t,offer:i,rtcConnectionId:o,channelsOpened:a}=await s(this,r).startClientOffer();return n={rtcClient:e,channels:t,channelsOpened:a},{type:"rtc",version:h.RTCInfo.version,payload:{offer:i,rtcConnectionId:o}}}case"classic":return{type:"classic",version:d.ClassicInfo.version};default:return a.exhaustiveCheck(e,["rtc","classic"])}}))),maxProtocols:2},rtc:n}}async createClientStrategy(e,t){var n;t.endpointId||(t.endpointId=this.wire.environment.getNextMessageId(),s(this,i).checkForPreviousClientConnection(t.channelId));const o=null!==(n=t.answer)&&void 0!==n?n:{supportedProtocols:[{type:"classic",version:1}]},a=(await Promise.all(o.supportedProtocols.map((async n=>"rtc"===n.type&&e?(await s(this,r).finishClientOffer(e.rtcClient,n.payload.answer,e.channelsOpened),new h.RTCStrategy):"classic"===n.type?new d.ClassicStrategy(this.wire,s(this,i),t.endpointId,t):null)))).filter((e=>null!==e));let c;if(e&&!a.some((e=>e instanceof h.RTCStrategy))&&e&&e.rtcClient.close(),a.length>=2)c=y.default.combine(a[0],a[1]);else{if(!a.length)throw new Error("No compatible protocols");[c]=a}const l={endpointIdentity:t,rtc:e};return c.addEndpoint(t.channelId,l),c}async processChannelConnection(e){const{clientIdentity:t,providerIdentity:n,ackToSender:i,payload:o,offer:a}=e.payload;t.endpointId?t.isLocalEndpointId=!1:(t.endpointId=this.wire.environment.getNextMessageId(),t.isLocalEndpointId=!0);const c=n.channelId,l=this.providerMap.get(c);if(!l)return i.payload.success=!1,i.payload.reason=`Channel "${n.channelName}" has been destroyed.`,this.wire.sendRaw(i);const{provider:p,strategy:w,supportedProtocols:y}=l;try{if(!(p instanceof u.ChannelProvider))throw Error("Cannot connect to a channel client");const e=null!=a?a:{supportedProtocols:[{type:"classic",version:1}],maxProtocols:1},n=this.protocolManager.getCompatibleProtocols(y,e);if(!n.length)throw new Error("This provider does not support any of the offered protocols.");const c=await p.processConnection(t,o);i.payload.payload=i.payload.payload||{};let l={supportedProtocols:[],endpointPayloadPromise:Promise.resolve({endpointIdentity:t})};return l=await n.reduce((async(e,t)=>{const n=await e;if("rtc"===t.type){const{answer:e,rtcClient:i,channels:o}=await s(this,r).createProviderAnswer(t.payload.rtcConnectionId,t.payload.offer);n.supportedProtocols.push({type:"rtc",version:h.RTCInfo.version,payload:{answer:e}}),n.endpointPayloadPromise=n.endpointPayloadPromise.then((e=>o.then((t=>({...e,rtc:{rtcClient:i,channels:t}})))))}else n.supportedProtocols.push({type:"classic",version:d.ClassicInfo.version});return n}),Promise.resolve(l)),l.endpointPayloadPromise.then((e=>w.addEndpoint(t.endpointId,e))),i.payload.payload.result=c,i.payload.payload.answer=l,this.wire.sendRaw(i)}catch(e){return i.payload.success=!1,i.payload.reason=e.message,this.wire.sendRaw(i)}}}t.ConnectionManager=f,i=new WeakMap,r=new WeakMap},7722:function(e,t,n){var i,r=this&&this.__classPrivateFieldSet||function(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n},o=this&&this.__classPrivateFieldGet||function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)};Object.defineProperty(t,"__esModule",{value:!0}),t.Channel=void 0;const s=n(8378),a=n(2942),c=n(9659),d=n(6711),h=()=>{};class l extends c.EmitterBase{constructor(e){super(e,"channel"),i.set(this,void 0),r(this,i,new d.ConnectionManager(e))}async getAllChannels(){return this.wire.sendAction("get-all-channels").then((({payload:e})=>e.data))}async onChannelConnect(e){await this.on("connected",e)}async onChannelDisconnect(e){await this.on("disconnected",e)}async connect(e,t){if(!e||"string"!=typeof e)throw new Error("Please provide a channelName string to connect to a channel.");const n=Object.assign(this.wire.environment.getDefaultChannelOptions().connect,t||{});let r=h,a=h;const c=new Promise((t=>{r=t,a=i=>{e===i.channelName&&(this.removeListener("connected",a),this.connect(e,n).then((e=>{t(e)})))},this.on("connected",a)}));try{const{offer:t,rtc:c}=await o(this,i).createClientOffer(n),d=await this.wire.sendAction("connect-to-channel",{channelName:e,...n,offer:t}),{payload:{data:h}}=d;r&&r(),this.removeListener("connected",a);const l=await o(this,i).createClientStrategy(c,h),u=new s.default(h,this.wire,l);return l.onEndpointDisconnect(h.channelId,(async()=>{try{await u.disconnect()}catch(e){console.warn(`Something went wrong during disconnect for client with uuid: ${h.uuid} / name: ${h.name} / endpointId: ${h.endpointId}.`)}finally{s.default.handleProviderDisconnect(u,h)}})),this.on("disconnected",(t=>{t.channelName===e&&s.default.handleProviderDisconnect(u,t)})),u}catch(t){const i="internal-nack";if({wait:!0,...n}.wait&&t.message&&t.message.includes(i))return console.warn(`Channel not found for channelName: ${e}, waiting for channel connection.`),c;throw t.message===i?new Error(`No channel found for channelName: ${e}`):new Error(t)}}async create(e,t){if(!e)throw new Error("Please provide a channelName to create a channel");const{payload:{data:n}}=await this.wire.sendAction("create-channel",{channelName:e}),r=o(this,i).createProvider(t,n);return this.on("client-disconnected",(t=>{t.channelName===e&&a.ChannelProvider.handleClientDisconnection(r,t)})),r}}t.Channel=l,i=new WeakMap},3749:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.MessageReceiver=void 0;const i=n(8378),r=n(9659);class o extends r.Base{constructor(e){super(e),this.onmessage=e=>"process-channel-message"===e.action&&(this.processChannelMessage(e),!0),this.endpointMap=new Map,this.latestEndpointIdByChannelId=new Map,e.registerMessageHandler(this.onmessage.bind(this))}async processChannelMessage(e){var t,n;const{senderIdentity:i,providerIdentity:r,action:o,ackToSender:s,payload:a,intendedTargetIdentity:c}=e.payload,d=null!==(n=null!==(t=c.channelId)&&void 0!==t?t:c.endpointId)&&void 0!==n?n:this.latestEndpointIdByChannelId.get(r.channelId),h=this.endpointMap.get(d);if(!h)return s.payload.success=!1,s.payload.reason=`Client connection with identity uuid: ${this.wire.me.uuid} / name: ${this.wire.me.name} / endpointId: ${d} no longer connected.`,this.wire.sendRaw(s);try{const e=await h(o,a,i);return s.payload.payload=s.payload.payload||{},s.payload.payload.result=e,this.wire.sendRaw(s)}catch(e){return s.payload.success=!1,s.payload.reason=e.message,this.wire.sendRaw(s)}}addEndpoint(e,t,n){this.endpointMap.set(n,e),t!==n&&this.latestEndpointIdByChannelId.set(t,n)}removeEndpoint(e,t){this.endpointMap.delete(t),this.latestEndpointIdByChannelId.get(e)===t&&this.latestEndpointIdByChannelId.delete(e)}checkForPreviousClientConnection(e){const t=this.latestEndpointIdByChannelId.get(e);t&&(i.default.closeChannelByEndpointId(t),console.warn("You have created a second connection to an older provider. First connection has been removed from the clientMap"),console.warn("If the provider calls publish(), you may receive multiple messages."))}}t.MessageReceiver=o},1046:function(e,t){var n,i,r=this&&this.__classPrivateFieldSet||function(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n},o=this&&this.__classPrivateFieldGet||function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)};Object.defineProperty(t,"__esModule",{value:!0}),t.ClassicInfo=t.ClassicStrategy=void 0,t.ClassicStrategy=class{constructor(e,t,s,a){this.messageReceiver=t,this.endpointId=s,this.providerIdentity=a,n.set(this,void 0),i.set(this,new Map),this.send=async(e,t,r)=>{const s=o(this,i).get(e);if(!s)throw new Error(`Could not locate routing info for endpoint ${e}`);const a={...s};return a.isLocalEndpointId&&delete a.endpointId,delete a.isLocalEndpointId,(await o(this,n).sendAction("send-channel-message",{...a,providerIdentity:this.providerIdentity,action:t,payload:r}).catch((e=>{throw new Error(e.message)}))).payload.data.result},this.close=async()=>{this.messageReceiver.removeEndpoint(this.providerIdentity.channelId,this.endpointId),r(this,i,new Map)},r(this,n,e)}onEndpointDisconnect(e,t){}receive(e){this.messageReceiver.addEndpoint(e,this.providerIdentity.channelId,this.endpointId)}async closeEndpoint(e){o(this,i).delete(e)}isEndpointConnected(e){return o(this,i).has(e)}addEndpoint(e,t){o(this,i).set(e,t.endpointIdentity)}isValidEndpointPayload(e){var t,n;return"string"==typeof(null===(t=null==e?void 0:e.endpointIdentity)||void 0===t?void 0:t.endpointId)||"string"==typeof(null===(n=null==e?void 0:e.endpointIdentity)||void 0===n?void 0:n.channelId)}},n=new WeakMap,i=new WeakMap,t.ClassicInfo={version:5,minimumVersion:0,type:"classic"}},7113:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});class n{constructor(e,t){this.primary=e,this.secondary=t}static combine(e,t){return new n(e,t)}onEndpointDisconnect(e,t){this.primary.onEndpointDisconnect(e,(()=>{this.secondary.isEndpointConnected(e)||t()})),this.secondary.onEndpointDisconnect(e,(()=>{this.primary.isEndpointConnected(e)||t()}))}isValidEndpointPayload(e){return this.primary.isValidEndpointPayload(e)||this.secondary.isValidEndpointPayload(e)}async closeEndpoint(e){await this.primary.closeEndpoint(e),await this.secondary.closeEndpoint(e)}isEndpointConnected(e){return this.primary.isEndpointConnected(e)||this.secondary.isEndpointConnected(e)}async addEndpoint(e,t){this.primary.isValidEndpointPayload(t)&&await this.primary.addEndpoint(e,t),this.secondary.isValidEndpointPayload(t)&&await this.secondary.addEndpoint(e,t)}receive(e){this.primary.receive(e),this.secondary.receive(e)}send(e,t,n){return this.primary.isEndpointConnected(e)?this.primary.send(e,t,n):this.secondary.send(e,t,n)}async close(){await Promise.all([this.primary.close(),this.secondary.close()])}}t.default=n},3037:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ProtocolManager=void 0,t.ProtocolManager=class{constructor(e){this.ProtocolsInPreferenceOrder=e,this.DefaultClientProtocols=["classic"],this.DefaultProviderProtocols=["classic"],this.getClientProtocols=e=>{const t=e?this.ProtocolsInPreferenceOrder.filter((t=>e.includes(t))):this.DefaultClientProtocols;if(!t.length)throw new Error(`No valid protocols were passed in. Accepted values are: ${this.ProtocolsInPreferenceOrder.join(", ")}.`);return t},this.getProviderProtocols=e=>{const t=e?this.ProtocolsInPreferenceOrder.filter((t=>e.includes(t))):this.DefaultProviderProtocols;if(!t.length)throw new Error(`No valid protocols were passed in. Accepted values are: ${this.ProtocolsInPreferenceOrder.join(", ")}.`);return t},this.getCompatibleProtocols=(e,t)=>t.supportedProtocols.filter((t=>e.some((e=>{var n;return e.type===t.type&&t.version>=e.minimumVersion&&e.version>=(null!==(n=t.minimumVersion)&&void 0!==n?n:0)})))).slice(0,t.maxProtocols)}}},8776:function(e,t,n){var i,r,o=this&&this.__classPrivateFieldGet||function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)},s=this&&this.__classPrivateFieldSet||function(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n};Object.defineProperty(t,"__esModule",{value:!0}),t.RTCEndpoint=void 0;const a=n(2366);t.RTCEndpoint=class{constructor(e,t){this.rtc=e,this.endpointIdentity=t,this.responseMap=new Map,i.set(this,null),r.set(this,void 0),this.connectionStateChangeHandler=e=>{"connected"!==this.rtc.rtcClient.connectionState&&(this.rtc.rtcClient.removeEventListener("connectionstatechange",this.connectionStateChangeHandler),this.close(),o(this,r)&&o(this,r).call(this))},this.send=async(e,t)=>{const n=`message-${Math.random()}`,i=new Promise(((e,t)=>{this.responseMap.set(n,{resolve:e,reject:t})}));return this.rtc.channels.request.send(JSON.stringify({action:e,payload:t,messageId:n})),i},this.close=()=>{this.responseMap.forEach((e=>e.reject("Connection has closed."))),this.responseMap=new Map,this.rtc.channels.request.close(),this.rtc.channels.response.close(),this.rtc.rtcClient.close()},this.rtc.channels.response.addEventListener("message",(e=>{var t;const{messageId:n,payload:i,success:r,error:o}=JSON.parse(e.data),{resolve:s,reject:a}=null!==(t=this.responseMap.get(n))&&void 0!==t?t:{};s&&a?(this.responseMap.delete(n),r?s(i):a(o)):(console.log("Could not find id in responseMap."),console.log(e))})),this.rtc.channels.request.addEventListener("message",(async e=>{const{messageId:n,action:r,payload:s}=JSON.parse(e.data);if(o(this,i))try{const e=await o(this,i).call(this,r,s,t);this.rtc.channels.response.send(JSON.stringify({messageId:n,payload:e,success:!0}))}catch(e){"open"===this.rtc.channels.response.readyState&&this.rtc.channels.response.send(JSON.stringify({messageId:n,error:a.errorToPOJO(e),success:!1}))}else"open"===this.rtc.channels.response.readyState&&this.rtc.channels.response.send(JSON.stringify({messageId:n,success:!1,error:"Connection not ready."}))})),this.rtc.rtcClient.addEventListener("connectionstatechange",this.connectionStateChangeHandler),Object.values(this.rtc.channels).forEach((e=>{e.onclose=e=>{[...this.responseMap.values()].forEach((e=>e.reject(new Error("RTCDataChannel closed unexpectedly, this is most commonly caused by message size. Note: RTC Channels have a message size limit of ~255kB.")))),this.close(),o(this,r)&&o(this,r).call(this)}}))}onDisconnect(e){if(o(this,r))throw new Error("RTCEndpoint disconnectListener cannot be set twice.");s(this,r,e)}receive(e){if(o(this,i))throw new Error("You have already set a listener for this RTC Endpoint.");s(this,i,e)}get connected(){return"connected"===this.rtc.rtcClient.connectionState}},i=new WeakMap,r=new WeakMap},569:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.RTCICEManager=void 0;const i=n(9659);class r extends i.EmitterBase{constructor(e){super(e,"channel"),this.ensureChannelOpened=e=>new Promise(((t,n)=>{if("open"===e.readyState)t();else if("connecting"===e.readyState){const n=()=>{e.removeEventListener("open",n),t()};e.addEventListener("open",n)}else n(new Error("This Channel has already closed"))}))}static createDataChannelPromise(e,t){let n;const i=new Promise((e=>{n=e})),r=i=>{const o=()=>{i.channel.removeEventListener("open",o),n(i.channel)};i.channel.label===e&&(i.channel.addEventListener("open",o),t.removeEventListener("datachannel",r))};return t.addEventListener("datachannel",r),i}async listenForProviderIce(e,t){await this.on(this.createProviderEventName(e),t,{timestamp:Date.now()})}async raiseProviderIce(e,t){await this.wire.environment.raiseEvent(this.createRouteString(this.createProviderEventName(e)),t)}async listenForClientIce(e,t){await this.on(this.createClientEventName(e),t,{timestamp:Date.now()})}async raiseClientIce(e,t){await this.wire.environment.raiseEvent(this.createRouteString(this.createClientEventName(e)),t)}cleanupIceListeners(e){this.removeAllListeners(this.createClientEventName(e)),this.removeAllListeners(this.createProviderEventName(e))}createClientEventName(e){return`ice-client-${e}`}createProviderEventName(e){return`ice-provider-${e}`}createRouteString(e){return`channel/${e}`}createRtcPeer(){return this.wire.environment.getRtcPeer()}async startClientOffer(){const e=Math.random().toString(),t=this.createRtcPeer();t.addEventListener("icecandidate",(async t=>{var n;t.candidate&&await this.raiseClientIce(e,{candidate:null===(n=t.candidate)||void 0===n?void 0:n.toJSON()})})),await this.listenForProviderIce(e,(async e=>{await t.addIceCandidate(e.candidate)}));const n={request:t.createDataChannel("request"),response:t.createDataChannel("response")},i=await t.createOffer();await t.setLocalDescription(i);const r=Promise.all([n.request,n.response].map(this.ensureChannelOpened)).then((()=>{}));return{rtcClient:t,channels:n,offer:i,rtcConnectionId:e,channelsOpened:r}}async finishClientOffer(e,t,n){return await e.setRemoteDescription(t),await n,!0}async createProviderAnswer(e,t){const n=this.createRtcPeer(),i=r.createDataChannelPromise("request",n),o=r.createDataChannelPromise("response",n);n.addEventListener("icecandidate",(async t=>{var n;t.candidate&&await this.raiseProviderIce(e,{candidate:null===(n=t.candidate)||void 0===n?void 0:n.toJSON()})})),await this.listenForClientIce(e,(async e=>{await n.addIceCandidate(e.candidate)})),await n.setRemoteDescription(t);const s=await n.createAnswer();await n.setLocalDescription(s);const a=Promise.all([i,o]).then((([t,n])=>(this.cleanupIceListeners(e),{request:t,response:n})));return{rtcClient:n,answer:s,channels:a}}}t.RTCICEManager=r},3870:function(e,t,n){var i,r,o,s=this&&this.__classPrivateFieldGet||function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)},a=this&&this.__classPrivateFieldSet||function(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n};Object.defineProperty(t,"__esModule",{value:!0}),t.RTCInfo=t.RTCStrategy=void 0;const c=n(8776);t.RTCStrategy=class{constructor(){i.set(this,null),r.set(this,new Map),o.set(this,!0),this.send=async(e,t,n)=>this.getEndpointById(e).send(t,n),this.close=async()=>{s(this,o)&&(s(this,r).forEach((e=>e.close())),a(this,r,new Map)),a(this,o,!1)}}onEndpointDisconnect(e,t){this.getEndpointById(e).onDisconnect(t)}receive(e){if(s(this,i))throw new Error("You have already set a listener for this RTC Strategy");a(this,i,e),s(this,r).forEach((e=>e.receive(s(this,i))))}getEndpointById(e){const t=s(this,r).get(e);if(!t)throw new Error(`Client with endpoint id ${e} is not connected`);return t}get connected(){return s(this,o)}isEndpointConnected(e){return s(this,r).has(e)}addEndpoint(e,t){if(!s(this,o))return void console.warn("Adding endpoint to disconnected RTC Strategy");const n=new c.RTCEndpoint(t.rtc,t.endpointIdentity);s(this,i)&&n.receive(s(this,i)),s(this,r).set(e,n)}async closeEndpoint(e){s(this,r).delete(e)}isValidEndpointPayload(e){const t=e=>"object"==typeof e&&null!==e;return t(e)&&t(e.endpointIdentity)&&t(e.rtc)&&"string"==typeof e.endpointIdentity.endpointId}},i=new WeakMap,r=new WeakMap,o=new WeakMap,t.RTCInfo={version:1,minimumVersion:0,type:"rtc"}},2942:function(e,t,n){var i=this&&this.__classPrivateFieldSet||function(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n},r=this&&this.__classPrivateFieldGet||function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)};Object.defineProperty(t,"__esModule",{value:!0}),t.ChannelProvider=void 0;const o=n(7539),s=n(2300);let a=(()=>{var e,t,n,a,c;class d extends o.ChannelBase{constructor(h,l,u){super(),e.set(this,void 0),t.set(this,void 0),n.set(this,void 0),a.set(this,(t=>{const o=this.connections.filter((e=>e.endpointId!==t.endpointId));r(this,n).closeEndpoint(t.endpointId),i(this,e,o)})),this.processAction=async(e,t,n)=>(d.clientIsMultiRuntime(n)&&!s.runtimeUuidMeetsMinimumRuntimeVersion(n.runtimeUuid,"18.87.56.0")?this.handleMultiRuntimeLegacyClient(n):this.checkForClientConnection(n),super.processAction(e,t,n)),c.set(this,(()=>{r(this,n).close();const e=d.removalMap.get(this);e&&e()})),i(this,t,new o.ProtectedItems(h,l)),this.connectListener=()=>{},this.disconnectListener=()=>{},i(this,e,[]),i(this,n,u),u.receive(this.processAction)}get connections(){return[...r(this,e)]}static handleClientDisconnection(e,t){const n=e.connections.find((e=>e.endpointId===t.endpointId));n?r(e,a).call(e,n):e.connections.filter((e=>e.uuid===t.uuid&&e.name===t.name)).forEach(r(e,a)),e.disconnectListener(t)}static setProviderRemoval(e,t){d.removalMap.set(e,t)}dispatch(e,t,i){var o;const s=null!==(o=e.endpointId)&&void 0!==o?o:this.getEndpointIdForOpenFinId(e,t);return s&&r(this,n).isEndpointConnected(s)?r(this,n).send(s,t,i):Promise.reject(new Error(`Client connection with identity uuid: ${e.uuid} / name: ${e.name} / endpointId: ${s} no longer connected.`))}async processConnection(t,n){return r(this,e).push(t),this.connectListener(t,n)}publish(e,t){return this.connections.map((i=>r(this,n).send(i.endpointId,e,t)))}onConnection(e){this.connectListener=e}onDisconnection(e){this.disconnectListener=e}async destroy(){const n=r(this,t),{channelName:o}=n.providerIdentity;i(this,e,[]),await n.wire.sendAction("destroy-channel",{channelName:o}),r(this,c).call(this)}checkForClientConnection(e){if(!this.isClientConnected(e))throw new Error(`This action was sent from a client that is not connected to the provider.\n                    Client Identity: {uuid: ${e.uuid}, name: ${e.name}, endpointId: ${e.endpointId}}`)}isClientConnected(e){return d.clientIdentityIncludesEndpointId(e)?this.connections.some((t=>t.endpointId===e.endpointId&&t.uuid===e.uuid&&t.name===e.name)):this.isLegacyClientConnected(e)}isLegacyClientConnected(e){return this.connections.some((t=>t.uuid===e.uuid&&t.name===e.name))}handleMultiRuntimeLegacyClient(e){if(!this.isLegacyClientConnected(e))throw new Error(`This action was sent from a client that is not connected to the provider. Client Identity:\n                    {uuid: ${e.uuid}, name: ${e.name}, endpointId: ${e.endpointId}}`)}getEndpointIdForOpenFinId(e,n){var i;const o=this.connections.filter((t=>t.name===e.name&&t.uuid===e.uuid));if(o.length>=2){const i=r(this,t),{uuid:o,name:s}=e,a=null==i?void 0:i.providerIdentity.uuid,c=null==i?void 0:i.providerIdentity.name;console.warn(`WARNING: Dispatch call may have unintended results. The "to" argument of your dispatch call is missing the\n                "endpointId" parameter. The identity you are dispatching to ({uuid: ${o}, name: ${s}})\n                has multiple channelClients for this channel. Your dispatched action: (${n}) from the provider:\n                ({uuid: ${a}, name: ${c}}) will only be processed by the most recently-created client.`)}return null===(i=o.pop())||void 0===i?void 0:i.endpointId}static clientIdentityIncludesEndpointId(e){return void 0!==e.endpointId}static clientIsMultiRuntime(e){return void 0!==e.runtimeUuid}}return e=new WeakMap,t=new WeakMap,n=new WeakMap,a=new WeakMap,c=new WeakMap,d.removalMap=new WeakMap,d})();t.ChannelProvider=a},8347:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.InterAppPayload=void 0;const i=n(6465),r=n(9659),o=n(3127),s=n(7722),a=n(4999);class c extends r.Base{constructor(e){super(e),this.events={subscriberAdded:"subscriber-added",subscriberRemoved:"subscriber-removed"},this.refCounter=new o.default,this.Channel=new s.Channel(e),this.emitter=new i.EventEmitter,e.registerMessageHandler(this.onmessage.bind(this)),this.on=this.emitter.on.bind(this.emitter),this.removeAllListeners=this.emitter.removeAllListeners.bind(this.emitter)}publish(e,t){return this.wire.sendAction("publish-message",{topic:e,message:t,sourceWindowName:this.me.name}).then((()=>{}))}async send(e,t,n){const i=a.validateIdentity(e);if(i)throw new Error(i);await this.wire.sendAction("send-message",{destinationUuid:e.uuid,destinationWindowName:e.name,topic:t,message:n,sourceWindowName:this.me.name})}subscribe(e,t,n){const i=this.createSubscriptionKey(e.uuid,e.name||"*",t);return this.emitter.on(i,n),this.refCounter.actOnFirst(i,(()=>this.wire.sendAction("subscribe",{sourceUuid:e.uuid,sourceWindowName:e.name||"*",topic:t,destinationWindowName:this.me.name})),(()=>Promise.resolve()))}unsubscribe(e,t,n){const i=e.name||"*",r=this.createSubscriptionKey(e.uuid,i,t);return this.emitter.removeListener(r,n),this.refCounter.actOnLast(r,(()=>this.wire.sendAction("unsubscribe",{sourceUuid:e.uuid,sourceWindowName:i,topic:t,destinationWindowName:this.me.name})),(()=>new Promise((e=>e)).then((()=>{}))))}processMessage(e){const{payload:{message:t,sourceWindowName:n,sourceUuid:i,topic:r}}=e,o=[this.createSubscriptionKey(i,n,r),this.createSubscriptionKey(i,"*",r),this.createSubscriptionKey("*","*",r)],s={uuid:i,name:n};o.forEach((e=>{this.emitter.emit(e,t,s)}))}emitSubscriverEvent(e,t){const{payload:{targetName:n,uuid:i,topic:r}}=t,o={name:n,uuid:i,topic:r};this.emitter.emit(e,o)}createSubscriptionKey(e,t,n){const i=t||"*";if(!(e&&i&&n))throw new Error("Missing uuid, name, or topic string");return function(...e){return e.map((e=>Buffer.from(`${e}`).toString("base64"))).join("/")}(e,i,n)}onmessage(e){const{action:t}=e;switch(t){case"process-message":this.processMessage(e);break;case this.events.subscriberAdded:this.emitSubscriverEvent(this.events.subscriberAdded,e);break;case this.events.subscriberRemoved:this.emitSubscriverEvent(this.events.subscriberRemoved,e)}return!0}}t.default=c,t.InterAppPayload=class{}},2977:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const i=n(9659),r=n(2057),o=n(7138),s=(e,...t)=>new e(...t);class a extends i.Base{async init(e,t=s){this.wire.sendAction("interop-init").catch((e=>{}));const n=await this.fin.InterApplicationBus.Channel.create(`interop-broker-${e}`),i=await this.fin.Application.getCurrentSync().getInfo();return t(r.InteropBroker,this.wire,n,i.initialOptions.interopBrokerConfiguration||{})}connectSync(e,t){return this.wire.sendAction("interop-connect-sync").catch((e=>{})),new o.InteropClient(this.wire,e,t)}}t.default=a},2057:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.InteropBroker=void 0;const i=n(9659),r=n(7115),o=n(1787);let s=[{id:"green",displayMetadata:{color:"#00CC88",name:"green"}},{id:"purple",displayMetadata:{color:"#8C61FF",name:"purple"}},{id:"orange",displayMetadata:{color:"#FF8C4C",name:"orange"}},{id:"red",displayMetadata:{color:"#FF5E60",name:"red"}},{id:"pink",displayMetadata:{color:"#FF8FB8",name:"pink"}},{id:"yellow",displayMetadata:{color:"#E9FF8F",name:"yellow"}}];class a extends i.Base{constructor(e,t,n){super(e),this.channel=t,this.interopClients=new Map,this.contextGroupsById=new Map,n.contextGroups&&(s=n.contextGroups),this.intentClientMap=new Map,this.lastContextMap=new Map,this.sessionContextGroupMap=new Map,this.setContextGroupMap(),this.wireChannel(t)}setContext({context:e},t){this.wire.sendAction("interop-broker-set-context").catch((e=>{}));const n=this.getClientState(t);if(!n||!n.contextGroupId)throw n?new Error("You must join a context group before you can set context."):new Error(`Client with Identity: ${t.uuid} ${t.name} not in Client State Map`);{const{contextGroupId:t}=n;if(!this.contextGroupsById.has(t))throw new Error(`Client has a context group that isn't in the context group mapping: ${t}.`);const i=a.checkContextIntegrity(e);if(!1===i.isValid)throw new Error(`Failed to set Context - bad Context. Reason: ${i.reason}. Context: ${JSON.stringify(e)}`);const r=this.contextGroupsById.get(t),o=e.type;r.set(o,e),this.lastContextMap.set(t,o),Array.from(this.interopClients.values()).filter((e=>e.contextGroupId===t)).forEach((t=>{for(const[,n]of t.contextHandlers)a.isContextTypeCompatible(o,n.contextType)&&this.invokeContextHandler(t.clientIdentity,n.handlerId,e)}))}}getCurrentContext(e,t){var n;this.wire.sendAction("interop-broker-get-current-context").catch((e=>{}));const i=this.getClientState(t);if(!(null==i?void 0:i.contextGroupId))throw new Error("You must be a member of a context group to call getCurrentContext");const{contextGroupId:r}=i,o=this.contextGroupsById.get(r),s=this.lastContextMap.get(r),a=null!==(n=null==e?void 0:e.contextType)&&void 0!==n?n:s;return o&&a?o.get(a):void 0}async joinContextGroup({contextGroupId:e,target:t},n){if(this.wire.sendAction("interop-broker-join-context-group").catch((e=>{})),t){a.hasEndpointId(t)&&await this.addClientToContextGroup({contextGroupId:e},t);const n=this.channel.connections.filter((e=>e.uuid===t.uuid&&e.name===t.name));if(!n.length)throw new Error(`Given Identity ${t.uuid} ${t.name} is not connected to the Interop Broker.`);n.length>1&&console.warn(`More than one connection found for identity ${t.uuid} ${t.name}`);const i=[];for(const t of n)i.push(this.addClientToContextGroup({contextGroupId:e},t));await Promise.all(i)}else await this.addClientToContextGroup({contextGroupId:e},n)}async addClientToContextGroup({contextGroupId:e},t){this.wire.sendAction("interop-broker-add-client-to-context-group").catch((e=>{}));const n=this.getClientState(t);if(!n)throw new Error(`Client with Identity: ${t.uuid} ${t.name} not in Client State Map`);if(!this.getContextGroups().find((t=>t.id===e)))throw new Error(`Attempting to join a context group that does not exist: ${e}. You may only join existing context groups.`);if(n.contextGroupId!==e){n.contextGroupId=e,await a.setCurrentContextGroupInClientOptions(t,e);const i=this.contextGroupsById.get(e);for(const[,e]of n.contextHandlers){const{contextType:n,handlerId:r}=e;if(void 0===n)i.forEach(((e,n)=>{this.invokeContextHandler(t,r,e)}));else if(i.has(n)){const e=i.get(n);e&&this.invokeContextHandler(t,r,e)}}}}async removeFromContextGroup({target:e},t){if(this.wire.sendAction("interop-broker-remove-from-context-group").catch((e=>{})),e){a.hasEndpointId(e)&&await this.removeClientFromContextGroup(e);const t=this.channel.connections.filter((t=>t.uuid===e.uuid&&t.name===e.name));if(!t.length)throw new Error(`No connection found for given Identity ${e.uuid} ${e.name}`);t.length>1&&console.warn(`More than one connection found for identity ${e.uuid} ${e.name}`);const n=[];for(const e of t)n.push(this.removeClientFromContextGroup(e));await Promise.all(n)}else await this.removeClientFromContextGroup(t)}async removeClientFromContextGroup(e){this.wire.sendAction("interop-broker-remove-client-from-context-group").catch((e=>{}));const t=this.getClientState(e);t&&(t.contextGroupId=void 0),await a.setCurrentContextGroupInClientOptions(e,null)}getContextGroups(){return this.wire.sendAction("interop-broker-get-context-groups").catch((e=>{})),s.map((e=>({...e})))}getInfoForContextGroup({contextGroupId:e}){return this.wire.sendAction("interop-broker-get-info-for-context-group").catch((e=>{})),this.getContextGroups().find((t=>t.id===e))}getAllClientsInContextGroup({contextGroupId:e}){return this.wire.sendAction("interop-broker-get-all-clients-in-context-group").catch((e=>{})),Array.from(this.interopClients.values()).filter((t=>t.contextGroupId===e)).map((e=>e.clientIdentity))}async handleFiredIntent(e,t){const n=o.generateOverrideWarning("interopClient.fireIntent","fdc3.raiseIntent","InteropBroker.handleFiredIntent",t);throw console.warn(n),new Error(o.BROKER_ERRORS.fireIntent)}async setIntentTarget(e,t){this.wire.sendAction("interop-broker-set-intent-target").catch((e=>{}));const n=this.intentClientMap.get(t.name),i=`intent-handler-${e.name}`;if(n){const t=n.get(i);if(t){if(t.pendingIntents.push(e),t.clientIdentity&&t.isReady){const{clientIdentity:e,pendingIntents:n}=t;try{const r=n[n.length-1];await this.channel.dispatch(e,i,r),t.pendingIntents=[]}catch(n){console.error(`Error invoking intent handler for client ${e.uuid}/${e.name}/${e.endpointId}`),t.isReady=!1}}}else n.set(i,{isReady:!1,pendingIntents:[e]})}else{this.intentClientMap.set(t.name,new Map);const n=this.intentClientMap.get(t.name);n&&n.set(i,{isReady:!1,pendingIntents:[e]})}}async handleInfoForIntent(e,t){const n=o.generateOverrideWarning("interopClient.getInfoForIntent","fdc3.findIntent","InteropBroker.handleInfoForIntent",t);throw console.warn(n),new Error(o.BROKER_ERRORS.getInfoForIntent)}async handleInfoForIntentsByContext(e,t){const n=o.generateOverrideWarning("interopClient.getInfoForIntentsByContext","fdc3.findIntentsByContext","InteropBroker.handleInfoForIntentsByContext",t);throw console.warn(n),new Error(o.BROKER_ERRORS.getInfoForIntentsByContext)}async handleFiredIntentForContext(e,t){const n=o.generateOverrideWarning("interopClient.fireIntentForContext","fdc3.raiseIntentForContext","InteropBroker.handleFiredIntentForContext",t);throw console.warn(n),new Error(o.BROKER_ERRORS.fireIntentForContext)}decorateSnapshot(e){return{...e,interopSnapshotDetails:{contextGroupStates:this.getContextGroupStates()}}}applySnapshot(e,t){var n;const i=null===(n=null==e?void 0:e.interopSnapshotDetails)||void 0===n?void 0:n.contextGroupStates;i&&((null==t?void 0:t.closeExistingWindows)||this.updateExistingClients(i),this.rehydrateContextGroupStates(i))}updateExistingClients(e){this.interopClients.forEach((t=>{const{clientIdentity:n,contextGroupId:i,contextHandlers:r}=t;if(i){const t=e[i];for(const[,e]of Object.entries(t))r.forEach((t=>{const{handlerId:i,contextType:r}=t;a.isContextTypeCompatible(e.type,r)&&this.invokeContextHandler(n,i,e)}))}}))}getContextGroupStates(){return a.toObject(this.contextGroupsById)}rehydrateContextGroupStates(e){const t=Object.entries(e);for(const[e,n]of t){const t=Object.entries(n);for(const[n,i]of t)this.contextGroupsById.has(e)?this.contextGroupsById.get(e).set(n,i):console.warn(`Attempting to set a context group that isn't in the context group mapping. Skipping context group rehydration for: ${e}`)}}contextHandlerRegistered({contextType:e,handlerId:t},n){const i={contextType:e,handlerId:t},r=this.getClientState(n);if(null==r||r.contextHandlers.set(t,i),r&&r.contextGroupId){const{contextGroupId:i}=r,o=this.contextGroupsById.get(i);if(void 0===e)o.forEach(((e,i)=>{this.invokeContextHandler(n,t,e)}));else if(o.has(e)){const i=o.get(e);i&&this.invokeContextHandler(n,t,i)}}}async intentHandlerRegistered(e,t){const{handlerId:n}=e,i=this.intentClientMap.get(t.name),r=null==i?void 0:i.get(n);if(i)if(r){const{pendingIntents:e}=r;r.clientIdentity=t,r.isReady=!0;try{if(e.length>0){const i=e[e.length-1];await this.channel.dispatch(t,n,i),r.pendingIntents=[]}}catch(e){console.error(`Error invoking intent handler: ${n} for client ${t.uuid}/${t.name}/${t.endpointId}`)}}else i.set(n,{isReady:!0,pendingIntents:[],clientIdentity:t});else{this.intentClientMap.set(t.name,new Map);const e=this.intentClientMap.get(t.name);e&&e.set(n,{isReady:!0,pendingIntents:[],clientIdentity:t})}}invokeContextHandler(e,t,n){this.channel.dispatch(e,t,n).catch((i=>{console.error(`Error invoking context handler ${t} for context type ${n.type} in client ${e.uuid}/${e.name}/${e.endpointId}`,i)}))}removeContextHandler({handlerId:e},t){const n=this.getClientState(t);n&&n.contextHandlers.delete(e)}handleJoinSessionContextGroup({sessionContextGroupId:e},t){try{if(!e)throw new Error("Failed to join session context group: must specify group id.");const n=this.sessionContextGroupMap.get(e);if(n)n.registerNewClient(t);else{const n=new r.default(this.channel,e);n.registerNewClient(t),this.sessionContextGroupMap.set(e,n)}return{hasConflict:this.contextGroupsById.has(e)}}catch(e){throw new Error(e)}}getClientState(e){return this.interopClients.get(e.endpointId)}static toObject(e){const t=Object.fromEntries(e),n={};return Object.entries(t).forEach((([e,t])=>{const i=Object.fromEntries(t);n[e]=i})),n}static checkContextIntegrity(e){if(!e)return{isValid:!1,reason:"No context supplied"};if("object"!=typeof e)return{isValid:!1,reason:"Context must be an Object"};if(!e.type)return{isValid:!1,reason:"Context must have a type property"};if(e.id&&"object"!=typeof e.id)return{isValid:!1,reason:"Context id must be an Object populated with key-value identifiers (if set)"};if(e.id){const{id:t}=e,n=Object.keys(t);let i=!1;if(!n.length)return{isValid:!1,reason:"Context id must have at least one key-value identifier"};if(n.forEach((e=>{"string"==typeof e&&"string"==typeof t[e]||(i=!0)})),i)return{isValid:!1,reason:"Context id key-value identifiers must be of type string"}}return e.name&&"string"!=typeof e.name?{isValid:!1,reason:"Context name must be of string type (if set)"}:{isValid:!0}}static hasEndpointId(e){return void 0!==e.endpointId}static isContextTypeCompatible(e,t){return void 0===t||e===t}setContextGroupMap(){for(const e of this.getContextGroups())this.contextGroupsById.set(e.id,new Map)}static async setCurrentContextGroupInClientOptions(e,t){const n=await fin.System.getEntityInfo(e.uuid,e.name);let i;"view"===n.entityType?i=await fin.View.wrap(e):"window"===n.entityType&&(i=await fin.Window.wrap(e)),i?await i.updateOptions({interop:{currentContextGroup:t}}):console.warn(`Setting Current Context Group: Entity with identity ${e.uuid}, ${e.name} is not a window or view. It is a ${n.entityType} instead.`)}wireChannel(e){e.onConnection(((e,t)=>{if(!this.isConnectionAuthorized(e,t))throw new Error(`Connection not authorized for ${e.uuid}, ${e.name}`);if(!e.endpointId)throw new Error("Version too old to be compatible with Interop. Please upgrade your runtime to a more recent version.");const n={contextGroupId:void 0,contextHandlers:new Map,clientIdentity:e};(null==t?void 0:t.currentContextGroup)&&this.contextGroupsById.has(t.currentContextGroup)&&(n.contextGroupId=null==t?void 0:t.currentContextGroup),this.interopClients.set(e.endpointId,n)})),e.onDisconnection((e=>{this.interopClients.delete(e.endpointId);const t=this.intentClientMap.get(e.name);t&&e.uuid===fin.me.identity.uuid&&t.forEach((e=>{e.isReady=!1})),this.sessionContextGroupMap.forEach((t=>{t.onDisconnection(e)}))})),e.beforeAction(((e,t,n)=>{if(!this.isActionAuthorized(e,t,n))throw new Error(`Action (${e}) not authorized for ${n.uuid}, ${n.name}`);console.log(e,t,n)})),e.afterAction(console.log),e.register("setContext",this.setContext.bind(this)),e.register("fireIntent",this.handleFiredIntent.bind(this)),e.register("getCurrentContext",this.getCurrentContext.bind(this)),e.register("getInfoForIntent",this.handleInfoForIntent.bind(this)),e.register("getInfoForIntentsByContext",this.handleInfoForIntentsByContext.bind(this)),e.register("fireIntentForContext",this.handleFiredIntentForContext.bind(this)),e.register("getContextGroups",this.getContextGroups.bind(this)),e.register("joinContextGroup",this.joinContextGroup.bind(this)),e.register("removeFromContextGroup",this.removeFromContextGroup.bind(this)),e.register("getAllClientsInContextGroup",this.getAllClientsInContextGroup.bind(this)),e.register("getInfoForContextGroup",this.getInfoForContextGroup.bind(this)),e.register("contextHandlerRegistered",this.contextHandlerRegistered.bind(this)),e.register("intentHandlerRegistered",this.intentHandlerRegistered.bind(this)),e.register("removeContextHandler",this.removeContextHandler.bind(this)),e.register("sessionContextGroup:createIfNeeded",this.handleJoinSessionContextGroup.bind(this))}async isConnectionAuthorized(e,t){return this.wire.sendAction("interop-broker-is-connection-authorized").catch((e=>{})),!0}async isActionAuthorized(e,t,n){return this.wire.sendAction("interop-broker-is-action-authorized").catch((e=>{})),!0}}t.InteropBroker=a},7138:function(e,t,n){var i,r,o=this&&this.__classPrivateFieldSet||function(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n},s=this&&this.__classPrivateFieldGet||function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)};Object.defineProperty(t,"__esModule",{value:!0}),t.InteropClient=void 0;const a=n(9659),c=n(822),d=n(1787);class h extends a.Base{constructor(e,t,n){super(e),i.set(this,void 0),r.set(this,void 0),o(this,r,new Map),o(this,i,this.wire.environment.whenReady().then((()=>this.fin.InterApplicationBus.Channel.connect(`interop-broker-${t}`,{payload:n}))))}async setContext(e){return this.wire.sendAction("interop-client-set-context").catch((e=>{})),(await s(this,i)).dispatch("setContext",{context:e})}async addContextHandler(e,t){this.wire.sendAction("interop-client-add-context-handler").catch((e=>{}));const n=await s(this,i);let r;t?(r=`invokeContextHandler-${t}-${d.generateId()}`,console.warn(`Warning: By providing a contextType (${t}), you are using the experimental addContextHandler. To avoid issues, make sure you are adding your context handlers at the top level in your application.`)):r="invokeContextHandler";const o=d.wrapContextHandler(e,r);return n.register(r,o),await n.dispatch("contextHandlerRegistered",{handlerId:r,contextType:t}),{unsubscribe:async()=>{n.remove(r),await n.dispatch("removeContextHandler",{handlerId:r})}}}async getContextGroups(){return this.wire.sendAction("interop-client-get-context-groups").catch((e=>{})),(await s(this,i)).dispatch("getContextGroups")}async joinContextGroup(e,t){this.wire.sendAction("interop-client-join-context-group").catch((e=>{}));const n=await s(this,i);if(!e)throw new Error("No contextGroupId specified for joinContextGroup.");return n.dispatch("joinContextGroup",{contextGroupId:e,target:t})}async removeFromContextGroup(e){return this.wire.sendAction("interop-client-remove-from-context-group").catch((e=>{})),(await s(this,i)).dispatch("removeFromContextGroup",{target:e})}async getAllClientsInContextGroup(e){this.wire.sendAction("interop-client-get-all-clients-in-context-group").catch((e=>{}));const t=await s(this,i);if(!e)throw new Error("No contextGroupId specified for getAllClientsInContextGroup.");return t.dispatch("getAllClientsInContextGroup",{contextGroupId:e})}async getInfoForContextGroup(e){this.wire.sendAction("interop-client-get-info-for-context-group").catch((e=>{}));const t=await s(this,i);if(!e)throw new Error("No contextGroupId specified for getInfoForContextGroup.");return t.dispatch("getInfoForContextGroup",{contextGroupId:e})}async fireIntent(e){return this.wire.sendAction("interop-client-fire-intent").catch((e=>{})),(await s(this,i)).dispatch("fireIntent",e)}async registerIntentHandler(e,t){this.wire.sendAction("interop-client-register-intent-handler").catch((e=>{}));const n=await s(this,i),r=`intent-handler-${t}`,o=this.wrapIntentHandler(e,r);try{await n.register(r,o),await n.dispatch("intentHandlerRegistered",{handlerId:r})}catch(e){throw new Error("Unable to register intent handler")}return{unsubscribe:async()=>{n.remove(r)}}}async getCurrentContext(e){return this.wire.sendAction("interop-client-get-current-context").catch((e=>{})),(await s(this,i)).dispatch("getCurrentContext",{contextType:e})}async getInfoForIntent(e){return this.wire.sendAction("interop-client-get-info-for-intent").catch((e=>{})),(await s(this,i)).dispatch("getInfoForIntent",e)}async getInfoForIntentsByContext(e){return this.wire.sendAction("interop-client-get-info-for-intents-by-context").catch((e=>{})),(await s(this,i)).dispatch("getInfoForIntentsByContext",e)}async fireIntentForContext(e){return this.wire.sendAction("interop-client-fire-intent-for-context").catch((e=>{})),(await s(this,i)).dispatch("fireIntentForContext",e)}async joinSessionContextGroup(e){try{const t=s(this,r).get(e);if(t)return t.getUserInstance();const n=await s(this,i),{hasConflict:o}=await n.dispatch("sessionContextGroup:createIfNeeded",{sessionContextGroupId:e});o&&console.warn(`A (non-session) context group with the name "${e}" already exists. If you are trying to join a Context Group, call joinContextGroup instead.`);const a=new c.default(this.wire,s(this,i),e);return s(this,r).set(e,a),a.getUserInstance()}catch(t){throw console.error(`Error thrown trying to create Session Context Group with id "${e}": ${t}`),t}}wrapIntentHandler(e,t){return async n=>{try{await e(n)}catch(e){throw console.error(`Error thrown by handler ${t}: ${e}`),e}}}}t.InteropClient=h,i=new WeakMap,r=new WeakMap},7115:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const i=n(8706);t.default=class{constructor(e,t){this.provider=e,this.id=t,this.lastContext=void 0,this.contextGroupMap=new Map,this.clients=new Map,this.registerListeners()}registerListeners(){this.provider.register(`sessionContextGroup:getContext-${this.id}`,this.getCurrentContext.bind(this)),this.provider.register(`sessionContextGroup:setContext-${this.id}`,this.setContext.bind(this)),this.provider.register(`sessionContextGroup:handlerAdded-${this.id}`,this.handlerAdded.bind(this)),this.provider.register(`sessionContextGroup:handlerRemoved-${this.id}`,this.handlerRemoved.bind(this))}getCurrentContext(e){return e.type?this.contextGroupMap.get(e.type):this.lastContext}setContext(e,t){const{context:n}=e,r=i.InteropBroker.checkContextIntegrity(n);if(!1===r.isValid)throw new Error(`Failed to set Context - bad Context. Reason: ${r.reason}. Context: ${JSON.stringify(n)}`);if(!this.getClientState(t))throw new Error(`Client with Identity: ${t.uuid} ${t.name} not in Session Client State Map`);this.contextGroupMap.set(n.type,n),this.lastContext=n,Array.from(this.clients.values()).forEach((e=>{var t;null===(t=e.contextHandlers.get(n.type))||void 0===t||t.forEach((t=>{this.provider.dispatch(e.clientIdentity,t,n)})),e.globalHandler&&this.provider.dispatch(e.clientIdentity,e.globalHandler,n)}))}getClientState(e){return this.clients.get(e.endpointId)}handlerAdded(e,t){const{handlerId:n,contextType:i}=e,r=this.getClientState(t);if(!r)throw new Error(`Client with Identity: ${t.uuid} ${t.name} not in Client State Map`);if(i){const e=r.contextHandlers.get(i)||[];r.contextHandlers.set(i,[...e,n]);const o=this.contextGroupMap.get(i);o&&this.provider.dispatch(t,n,o)}else r.globalHandler=n,[...this.contextGroupMap.keys()].forEach((e=>{const i=this.contextGroupMap.get(e);i&&this.provider.dispatch(t,n,i)}))}handlerRemoved(e,t){const{handlerId:n}=e,i=this.clients.get(t.endpointId);i?(Array.from(i.contextHandlers).forEach((([,e])=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)})),i.globalHandler===n&&(i.globalHandler=void 0)):console.warn(`Trying to remove a handler from a client that isn't mapped. handlerId: ${n}. clientIdentity: ${t}`)}registerNewClient(e){if(!this.clients.has(e.endpointId)){const t={contextHandlers:new Map,clientIdentity:e,globalHandler:void 0};this.clients.set(e.endpointId,t)}}onDisconnection(e){this.clients.delete(e.endpointId)}}},822:function(e,t,n){var i,r=this&&this.__classPrivateFieldSet||function(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n},o=this&&this.__classPrivateFieldGet||function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)};Object.defineProperty(t,"__esModule",{value:!0});const s=n(9659),a=n(1787);class c extends s.Base{constructor(e,t,n){super(e),i.set(this,void 0),this.id=n,r(this,i,t)}async setContext(e){return this.wire.sendAction("interop-session-context-group-set-context").catch((e=>{})),(await o(this,i)).dispatch(`sessionContextGroup:setContext-${this.id}`,{sessionContextGroupId:this.id,context:e})}async getCurrentContext(e){return this.wire.sendAction("interop-session-context-group-get-context").catch((e=>{})),(await o(this,i)).dispatch(`sessionContextGroup:getContext-${this.id}`,{sessionContextGroupId:this.id,type:e})}async addContextHandler(e,t){this.wire.sendAction("interop-session-context-group-add-handler").catch((e=>{}));const n=await o(this,i);let r;return r=t?`sessionContextHandler:invoke-${this.id}-${t}-${a.generateId()}`:`sessionContextHandler:invoke-${this.id}`,n.register(r,a.wrapContextHandler(e,r)),n.dispatch(`sessionContextGroup:handlerAdded-${this.id}`,{handlerId:r,contextType:t}),{unsubscribe:await this.createUnsubscribeCb(r)}}async createUnsubscribeCb(e){const t=await o(this,i);return async()=>{t.remove(e),await t.dispatch(`sessionContextGroup:handlerRemoved-${this.id}`,{handlerId:e})}}getUserInstance(){return{id:this.id,setContext:a.wrapInTryCatch(this.setContext.bind(this),"Failed to set context: "),getCurrentContext:a.wrapInTryCatch(this.getCurrentContext.bind(this),"Failed to get context: "),addContextHandler:a.wrapInTryCatch(this.addContextHandler.bind(this),"Failed to add context handler: ")}}}t.default=c,i=new WeakMap},8706:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),r=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0});const o=n(2977);t.default=o.default,r(n(7138),t),r(n(2057),t)},1787:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BROKER_ERRORS=t.generateOverrideWarning=t.generateOverrideError=t.wrapContextHandler=t.wrapInTryCatch=t.generateId=void 0,t.generateId=()=>`${Math.random()}${Date.now()}`,t.wrapInTryCatch=(e,t)=>(...n)=>{try{return e(...n)}catch(e){throw new Error((t||"")+e)}},t.wrapContextHandler=(e,t)=>async n=>{try{await e(n)}catch(e){throw console.error(`Error thrown by handler ${t} for context type ${n.type}: ${e}`),e}},t.generateOverrideError=(e,t)=>`You have tried to to use ${e} but ${t} has not been overridden in the Interop Broker. Please override this function. Refer to our documentation for more info.`,t.generateOverrideWarning=(e,t,n,i)=>{const{uuid:r,name:o}=i;return`Entity with identity: ${r}/${o} has called ${e} or ${t} but ${n} has not been overridden.`},t.BROKER_ERRORS={fireIntent:t.generateOverrideError("fireIntent","handleFiredIntent"),fireIntentForContext:t.generateOverrideError("fireIntentForContext","handleFiredIntentForContext"),getInfoForIntent:t.generateOverrideError("getInfoForIntent","handleInfoForIntent"),getInfoForIntentsByContext:t.generateOverrideError("getInfoForIntentsByContext","handleInfoForIntentsByContext")}},9641:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getMe=t.getBaseMe=void 0;const i=n(4169),r=n(6720),o=n(4997);function s(e,t,n){return{isView:"view"===e,isWindow:"window"===e,isFrame:"iframe"===e,isExternal:"external connection"===e,uuid:t,name:n,entityType:e}}t.getBaseMe=s,t.getMe=function(e){const{uuid:t,name:n,entityType:a}=e.me,c={setContext(){throw new Error("Interop API has not been instantiated. Either connection has failed or you have not declared interop in your config.")},addContextHandler(){throw new Error("Interop API has not been instantiated. Either connection has failed or you have not declared interop in your config.")},getContextGroups(){throw new Error("Interop API has not been instantiated. Either connection has failed or you have not declared interop in your config.")},joinContextGroup(){throw new Error("Interop API has not been instantiated. Either connection has failed or you have not declared interop in your config.")},removeFromContextGroup(){throw new Error("Interop API has not been instantiated. Either connection has failed or you have not declared interop in your config.")},getAllClientsInContextGroup(){throw new Error("Interop API has not been instantiated. Either connection has failed or you have not declared interop in your config.")},getInfoForContextGroup(){throw new Error("Interop API has not been instantiated. Either connection has failed or you have not declared interop in your config.")}};switch(a){case"view":return Object.assign(new i.View(e,{uuid:t,name:n}),s(a,t,n),{interop:c});case"window":return Object.assign(new o._Window(e,{uuid:t,name:n}),s(a,t,n),{interop:c});case"iframe":return Object.assign(new r._Frame(e,{uuid:t,name:n}),s(a,t,n),{interop:c});default:return{...s(a,t,n)}}}},7283:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const i=n(9659),r=n(6394),o=n(9872);class s extends i.Base{constructor(e,t){super(e),this._channel=t,this._initializer=(...e)=>this.wire.environment.getProviderInitializer().then((t=>t(this.wire.environment)(...e))),this.Layout=new r.LayoutModule(this.wire)}async init(e){const t=null==e?void 0:e.overrideCallback,n=await this.fin.Interop.init(this.fin.me.uuid,null==e?void 0:e.interopOverride);return window.interopBroker=n,this._initializer(t,n)}async wrap(e){return this.wire.sendAction("platform-wrap").catch((e=>{})),new o.Platform({uuid:e.uuid},this._channel)}wrapSync(e){return this.wire.sendAction("platform-wrap-sync").catch((e=>{})),new o.Platform({uuid:e.uuid},this._channel)}async getCurrent(){return this.wire.sendAction("platform-get-current").catch((e=>{})),this.wrap({uuid:this.wire.me.uuid})}getCurrentSync(){return this.wire.sendAction("platform-get-current-sync").catch((e=>{})),this.wrapSync({uuid:this.wire.me.uuid})}start(e){return this.wire.sendAction("platform-start").catch((e=>{})),new Promise((async(t,n)=>{try{const{uuid:n}=e,i=await this.fin.Application._create({...e,isPlatformController:!0});i.once("platform-api-ready",(()=>t(this.wrapSync({uuid:n})))),i._run({uuid:n})}catch(e){n(e)}}))}startFromManifest(e,t){return this.wire.sendAction("platform-start-from-manifest").catch((e=>{})),new Promise((async(n,i)=>{try{const i=await this.fin.Application._createFromManifest(e);i.once("platform-api-ready",(()=>n(this.wrapSync({uuid:i.identity.uuid})))),i._run(t)}catch(e){i(e)}}))}}t.default=s},9872:function(e,t,n){var i,r=this&&this.__classPrivateFieldGet||function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)};Object.defineProperty(t,"__esModule",{value:!0}),t.Platform=void 0;const o=n(9659),s=n(4999),a=new Map;class c extends o.EmitterBase{constructor(e,t){super(t.wire,"application",e.uuid),this.getClient=e=>{this.wire.sendAction("platform-get-client",this.identity).catch((e=>{}));const t=e||this.identity,{uuid:n}=t;if(!a.has(n)){const e=r(this,i).call(this,n);a.set(n,e)}return a.get(n)},i.set(this,(async e=>{try{const t=`custom-frame-${e}`,n=await this._channel.connect(t,{wait:!1});return n.onDisconnection((()=>{a.delete(e)})),n}catch(t){throw a.delete(e),new Error("The targeted Platform is not currently running. Listen for application-started event for the given Uuid.")}})),this.launchLegacyManifest=this.launchContentManifest;const n=s.validateIdentity(e);if(n)throw new Error(n);this._channel=t,this.identity={uuid:e.uuid},this.Layout=this.fin.Platform.Layout,this.Application=this.fin.Application.wrapSync(this.identity)}async createView(e,t,n){this.wire.sendAction("platform-create-view",this.identity).catch((e=>{}));const i=await this.getClient(),r=await i.dispatch("create-view",{target:t,opts:e,targetView:n});if(!r||s.validateIdentity(r.identity))throw new Error(`When overwriting the createView call, please return an object that has a valid 'identity' property: ${JSON.stringify(r)}`);return this.fin.View.wrapSync(r.identity)}async createWindow(e){this.wire.sendAction("platform-create-window",this.identity).catch((e=>{}));const t=await this.getClient();e.reason||(e.reason="api-call");const n=await t.dispatch("create-view-container",e);if(!n||s.validateIdentity(n.identity))throw new Error(`When overwriting the createWindow call, please return an object that has a valid 'identity' property: ${JSON.stringify(n)}`);const{identity:i}=n,r=this.fin.Window.wrapSync(i);return r.name=i.name,r.uuid=i.uuid,r}async quit(){return this.wire.sendAction("platform-quit",this.identity).catch((e=>{})),(await this.getClient()).dispatch("quit")}async closeView(e){this.wire.sendAction("platform-close-view",this.identity).catch((e=>{}));const t=await this.getClient();await t.dispatch("close-view",{view:e})}async reparentView(e,t){var n;console.warn("Platform.reparentView has been deprecated, please use Platform.createView"),this.wire.sendAction("platform-reparent-view",this.identity).catch((e=>{}));const i={...e,uuid:null!==(n=e.uuid)&&void 0!==n?n:this.identity.uuid},r=await this.fin.View.wrap(i),o=await r.getOptions();return this.createView(o,t)}async getSnapshot(){return this.wire.sendAction("platform-get-snapshot",this.identity).catch((e=>{})),(await this.getClient()).dispatch("get-snapshot")}async applySnapshot(e,t){this.wire.sendAction("platform-apply-snapshot",this.identity).catch((e=>{}));const n="Requested snapshot must be a valid Snapshot object, or a url or filepath to such an object.";let i;if("string"==typeof e)try{i=(await this._channel.wire.sendAction("get-application-manifest",{manifestUrl:e})).payload.data}catch(e){throw new Error(`${n}: ${e}`)}else i=e;if(!i.windows)throw new Error(n);const r=await this.getClient();return await r.dispatch("apply-snapshot",{snapshot:i,options:t}),this}async fetchManifest(e){return(await this.getClient()).dispatch("platform-fetch-manifest",{manifestUrl:e})}async launchContentManifest(e){this.wire.sendAction("platform-launch-content-manifest",this.identity).catch((e=>{}));const t=await this.getClient(),n=await this.fetchManifest(e);return t.dispatch("launch-into-platform",{manifest:n}),this}async setWindowContext(e={},t){if(this.wire.sendAction("platform-set-window-context",this.identity).catch((e=>{})),!e)throw new Error("Please provide a serializable object or string to set the context.");const n=await this.getClient(),{entityType:i}=t?await this.fin.System.getEntityInfo(t.uuid,t.name):this.fin.me;await n.dispatch("set-window-context",{context:e,entityType:i,target:t||{uuid:this.fin.me.uuid,name:this.fin.me.name}})}async getWindowContext(e){this.wire.sendAction("platform-get-window-context",this.identity).catch((e=>{}));const t=await this.getClient(),{entityType:n}=e?await this.fin.System.getEntityInfo(e.uuid,e.name):this.fin.me;return t.dispatch("get-window-context",{target:e||{uuid:this.fin.me.uuid,name:this.fin.me.name},entityType:n})}}t.Platform=c,i=new WeakMap},4386:(e,t)=>{function n(e){switch(e){case"columns":case"grid":case"rows":case"tabs":return!0;default:return!1}}Object.defineProperty(t,"__esModule",{value:!0}),t.isValidPresetType=void 0,t.isValidPresetType=n,t.default={isValidPresetType:n}},609:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),r=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0});const o=n(7283);t.default=o.default,r(n(9872),t)},4210:function(e,t,n){var i,r=this&&this.__classPrivateFieldGet||function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)},o=this&&this.__classPrivateFieldSet||function(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n};Object.defineProperty(t,"__esModule",{value:!0}),t.LayoutModule=void 0;const s=n(8111),a=n(9659);class c extends a.Base{constructor(){super(...arguments),i.set(this,void 0),this.init=async(e={})=>{if(this.wire.sendAction("layout-init").catch((e=>{})),!this.fin.me.isWindow)throw new Error("Layout.init can only be called from a Window context.");if(r(this,i))throw new Error("Layout for this window already initialized, please use Layout.replace call to replace the layout.");const t=await this.wire.environment.getManagerConstructor();o(this,i,new t);let{layout:n,containerId:s}=e;n&&console.warn("We recommend using a layout in window options.\n                This layout has not been sanitized and unexpected behavior can occur."),n=n||(await this.fin.Window.getCurrentSync().getOptions()).layout,s=s||"layout-container";const a=document.getElementById(s);return await r(this,i).initManager(),await r(this,i).createLayout(n,a),Object.assign(this.getCurrentSync(),{layoutManager:r(this,i)})}}async wrap(e){return this.wire.sendAction("layout-wrap").catch((e=>{})),new s.Layout(e,this.wire)}wrapSync(e){return this.wire.sendAction("layout-wrap-sync").catch((e=>{})),new s.Layout(e,this.wire)}async getCurrent(){if(this.wire.sendAction("layout-get-current").catch((e=>{})),!this.fin.me.isWindow)throw new Error("You are not in a Window context.  Only Windows can have a Layout.");const{uuid:e,name:t}=this.fin.me;return this.wrap({uuid:e,name:t})}getCurrentSync(){if(this.wire.sendAction("layout-get-current-sync").catch((e=>{})),!this.fin.me.isWindow)throw new Error("You are not in a Window context.  Only Windows can have a Layout.");const{uuid:e,name:t}=this.fin.me;return this.wrapSync({uuid:e,name:t})}}t.LayoutModule=c,i=new WeakMap},8111:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Layout=void 0;const i=n(4999),r=n(4386),o=n(9659);class s extends o.Base{constructor(e,t){super(t),this.replace=async e=>{this.wire.sendAction("layout-replace").catch((e=>{}));const t=await this.platform.getClient();await t.dispatch("replace-layout",{target:this.identity,opts:{layout:e}})},this.replaceView=async(e,t)=>{this.wire.sendAction("layout-replace-view").catch((e=>{}));const n=await this.platform.getClient();await n.dispatch("replace-view",{target:this.identity,opts:{viewToReplace:e,newView:t}})},this.applyPreset=async e=>{this.wire.sendAction("layout-apply-preset").catch((e=>{}));const t=await this.platform.getClient(),{presetType:n}=e;if(!n||!r.isValidPresetType(n))throw new Error("Cannot apply preset layout, please include an applicable presetType property in the PresetLayoutOptions.");await t.dispatch("apply-preset-layout",{target:this.identity,opts:{presetType:n}})};const n=i.validateIdentity(e);if(n)throw new Error(n);this.identity=e,this.platform=this.fin.Platform.wrapSync({uuid:e.uuid}),e.uuid===this.fin.me.uuid&&e.name===this.fin.me.name&&(this.init=this.fin.Platform.Layout.init)}async getConfig(){return this.wire.sendAction("layout-get-config").catch((e=>{})),(await this.platform.getClient()).dispatch("get-frame-snapshot",{target:this.identity})}}t.Layout=s},6394:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),r=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),r(n(4210),t),r(n(8111),t)},1746:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const i=n(9659),r=n(2878),o=n(6215);class s extends i.Base{async init(e){if(this.wire.sendAction("snapshot-source-init").catch((e=>{})),"object"!=typeof e||"function"!=typeof e.getSnapshot||"function"!=typeof e.applySnapshot)throw new Error("you must pass in a valid SnapshotProvider");const t=await this.fin.InterApplicationBus.Channel.create(o.getSnapshotSourceChannelName(fin.me.identity));t.register("get-snapshot",(async()=>({snapshot:await e.getSnapshot()}))),t.register("apply-snapshot",(({snapshot:t})=>e.applySnapshot(t)))}wrapSync(e){return this.wire.sendAction("snapshot-source-wrap-sync").catch((e=>{})),new r.SnapshotSource(this.wire,e)}async wrap(e){return this.wire.sendAction("snapshot-source-wrap").catch((e=>{})),this.wrapSync(e)}}t.default=s},2878:function(e,t,n){var i,r,o,s,a,c=this&&this.__classPrivateFieldSet||function(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n},d=this&&this.__classPrivateFieldGet||function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)};Object.defineProperty(t,"__esModule",{value:!0}),t.SnapshotSource=void 0;const h=n(9659),l=n(6215),u=new Map;class p extends h.Base{constructor(e,t){super(e),i.set(this,void 0),r.set(this,(()=>(u.has(this.identity.uuid)||u.set(this.identity.uuid,{eventFired:null,clientPromise:null}),u.get(this.identity.uuid)))),o.set(this,(()=>(d(this,r).call(this).clientPromise||(d(this,r).call(this).clientPromise=d(this,s).call(this)),d(this,r).call(this).clientPromise))),s.set(this,(async()=>{const e=l.getSnapshotSourceChannelName(this.identity);try{d(this,r).call(this).eventFired||await d(this,a).call(this);const t=await this.fin.InterApplicationBus.Channel.connect(e,{wait:!1});return t.onDisconnection((()=>{d(this,r).call(this).clientPromise=null,d(this,r).call(this).eventFired=null})),t}catch(e){throw d(this,r).call(this).clientPromise=null,new Error("The targeted SnapshotSource is not currently initialized. Await this object's ready() method.")}})),a.set(this,(async()=>{const e=l.getSnapshotSourceChannelName(this.identity);let t,n;const i=new Promise(((e,i)=>{t=e,n=i}));d(this,r).call(this).eventFired=i;const o=async i=>{try{i.channelName===e&&(t(),await this.fin.InterApplicationBus.Channel.removeListener("connected",o))}catch(e){n(e)}};await this.fin.InterApplicationBus.Channel.on("connected",o)})),c(this,i,t)}get identity(){return d(this,i)}async ready(){this.wire.sendAction("snapshot-source-ready").catch((e=>{}));try{await d(this,o).call(this)}catch(e){await d(this,r).call(this).eventFired}}async getSnapshot(){this.wire.sendAction("snapshot-source-get-snapshot").catch((e=>{}));const e=await d(this,o).call(this),t=await e.dispatch("get-snapshot");return(await t).snapshot}async applySnapshot(e){return this.wire.sendAction("snapshot-source-apply-snapshot").catch((e=>{})),(await d(this,o).call(this)).dispatch("apply-snapshot",{snapshot:e})}}t.SnapshotSource=p,i=new WeakMap,r=new WeakMap,o=new WeakMap,s=new WeakMap,a=new WeakMap},7153:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),r=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0});const o=n(1746);t.default=o.default,r(n(2878),t)},6215:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getSnapshotSourceChannelName=void 0,t.getSnapshotSourceChannelName=e=>`snapshot-source-provider-${e.uuid}`},3641:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const i=n(9659),r=n(5007),o=n(4997);class s extends i.EmitterBase{constructor(e){super(e,"system")}sendExternalProcessRequest(e,t){return new Promise(((n,i)=>{const r="external-process-exited";let s,a,c,d;"function"==typeof t.listener&&(c=e=>{const n=e||{};a={topic:"exited",uuid:n.processUuid||"",exitCode:n.exitCode||0},s===e.processUuid&&(t.listener(a),d.removeListener(r,c))},this.wire.me.name||(this.wire.me.name=this.wire.me.uuid),d=new o._Window(this.wire,this.wire.me),d.on(r,c)),this.wire.sendAction(e,t).then((({payload:e})=>{s=e.data.uuid,n(e.data),a&&s===a.uuid&&(t.listener(a),d.removeListener(r,c))})).catch((e=>{d&&d.removeListener(r,c),i(e)}))}))}getVersion(){return this.wire.sendAction("get-version").then((({payload:e})=>e.data))}clearCache(e){return this.wire.sendAction("clear-cache",e).then((()=>{}))}deleteCacheOnExit(){return this.wire.sendAction("delete-cache-request").then((()=>{}))}exit(){return this.wire.sendAction("exit-desktop").then((()=>{}))}async fetchManifest(e){const{payload:{data:t}}=await this.wire.sendAction("fetch-manifest",{manifestUrl:e});return t}flushCookieStore(){return this.wire.sendAction("flush-cookie-store").then((()=>{}))}getAllWindows(){return this.wire.sendAction("get-all-windows").then((({payload:e})=>e.data))}getAllApplications(){return this.wire.sendAction("get-all-applications").then((({payload:e})=>e.data))}getCommandLineArguments(){return this.wire.sendAction("get-command-line-arguments").then((({payload:e})=>e.data))}async getCrashReporterState(){const{payload:{data:{diagnosticMode:e,isRunning:t}}}=await this.wire.sendAction("get-crash-reporter-state");return console.warn("diagnosticMode property is deprecated. It will be removed in a future version"),{diagnosticMode:e,diagnosticsMode:e,isRunning:t}}async startCrashReporter(e){const t=e,n={...t,diagnosticMode:t.diagnosticsMode||t.diagnosticMode},{payload:{data:{diagnosticMode:i,isRunning:r}}}=await this.wire.sendAction("start-crash-reporter",n);return{diagnosticMode:i,diagnosticsMode:i,isRunning:r}}getUniqueUserId(){return this.wire.sendAction("get-unique-user-id").then((({payload:e})=>e.data))}getEntityInfo(e,t){return this.wire.sendAction("get-entity-info",{uuid:e,name:t}).then((({payload:e})=>e.data))}getEnvironmentVariable(e){return this.wire.sendAction("get-environment-variable",{environmentVariables:e}).then((({payload:e})=>e.data))}getFocusedWindow(){return this.wire.sendAction("get-focused-window").then((({payload:e})=>e.data))}async isAppCertified(e){const{payload:{data:{certifiedInfo:t}}}=await this.wire.sendAction("is-app-certified",{manifestUrl:e});return t}getInstalledRuntimes(){return this.wire.sendAction("get-installed-runtimes").then((({payload:e})=>e.data.runtimes))}async getInstalledApps(){const{payload:{data:{installedApps:e}}}=await this.wire.sendAction("get-installed-apps");return e}getLog(e){return this.wire.sendAction("view-log",e).then((({payload:e})=>e.data))}getMachineId(){return this.wire.sendAction("get-machine-id").then((({payload:e})=>e.data))}getMinLogLevel(){return this.wire.sendAction("get-min-log-level").then((({payload:e})=>e.data))}getLogList(){return this.wire.sendAction("list-logs").then((({payload:e})=>e.data))}getMonitorInfo(){return this.wire.sendAction("get-monitor-info").then((({payload:e})=>e.data))}getMousePosition(){return this.wire.sendAction("get-mouse-position").then((({payload:e})=>e.data))}getProcessList(){return console.warn("System.getProcessList has been deprecated. Please consider using our new process APIs: Window.getProcessInfo, View.getProcessInfo, Application.getProcessInfo, System.getAllProcessInfo"),this.wire.sendAction("process-snapshot").then((({payload:e})=>e.data))}async getAllProcessInfo(){const{payload:{data:e}}=await this.wire.sendAction("get-all-process-info",this.identity);return e}getProxySettings(){return this.wire.sendAction("get-proxy-settings").then((({payload:e})=>e.data))}getRuntimeInfo(){return this.wire.sendAction("get-runtime-info").then((({payload:e})=>e.data))}getRvmInfo(){return this.wire.sendAction("get-rvm-info").then((({payload:e})=>e.data))}getHostSpecs(){return this.wire.sendAction("get-host-specs").then((({payload:e})=>e.data))}launchExternalProcess(e){return this.sendExternalProcessRequest("launch-external-process",e)}monitorExternalProcess(e){return this.sendExternalProcessRequest("monitor-external-process",e)}log(e,t){return this.wire.sendAction("write-to-log",{level:e,message:t}).then((()=>{}))}openUrlWithBrowser(e){return this.wire.sendAction("open-url-with-browser",{url:e}).then((()=>{}))}releaseExternalProcess(e){return this.wire.sendAction("release-external-process",{uuid:e}).then((()=>{}))}showDeveloperTools(e){return this.wire.sendAction("show-developer-tools",e).then((()=>{}))}terminateExternalProcess(e){return this.wire.sendAction("terminate-external-process",e).then((()=>{}))}updateProxySettings(e){return this.wire.sendAction("update-proxy",e).then((()=>{}))}downloadAsset(e,t){return new Promise(((n,i)=>{if("NodeEnvironment"===this.wire.environment.constructor.name)return void i(new r.NotSupportedError("downloadAsset only supported in an OpenFin Render process"));const o=this.wire.environment.getNextMessageId().toString(),s=`asset-download-progress-${o}`,a=`asset-download-error-${o}`,c=`asset-download-complete-${o}`,d=e=>{const n={downloadedBytes:e.downloadedBytes,totalBytes:e.totalBytes};t(n)},h=()=>{this.removeListener(s,d)};this.on(s,d),this.once(a,((e,t)=>{const n=t||e;h(),i(new r.RuntimeError(n))})),this.once(c,(()=>{h(),n()}));const l=Object.assign(e,{downloadId:o});this.wire.sendAction("download-asset",l).catch((e=>{h(),i(e)}))}))}downloadRuntime(e,t){return new Promise(((n,i)=>{if("NodeEnvironment"===this.wire.environment.constructor.name)return void i(new r.NotSupportedError("downloadRuntime only supported in an OpenFin Render process"));const o=this.wire.environment.getNextMessageId().toString(),s=`runtime-download-progress-${o}`,a=`runtime-download-error-${o}`,c=`runtime-download-complete-${o}`,d=e=>{const n={downloadedBytes:e.downloadedBytes,totalBytes:e.totalBytes};t(n)},h=()=>{this.removeListener(s,d)};this.on(s,d),this.once(a,((e,t)=>{const n=t||e;h(),i(new r.RuntimeError(n))})),this.once(c,(()=>{h(),n()}));const l=Object.assign(e,{downloadId:o});this.wire.sendAction("download-runtime",l).catch((e=>{h(),i(e)}))}))}downloadPreloadScripts(e){return this.wire.sendAction("download-preload-scripts",{scripts:e}).then((({payload:e})=>e.data))}getAllExternalApplications(){return this.wire.sendAction("get-all-external-applications").then((({payload:e})=>e.data))}getAppAssetInfo(e){return this.wire.sendAction("get-app-asset-info",e).then((({payload:e})=>e.data))}getCookies(e){const t=this.wire.environment.getUrl(),n=Object.assign(e,{url:t});return this.wire.sendAction("get-cookies",n).then((({payload:e})=>e.data))}setMinLogLevel(e){return this.wire.sendAction("set-min-log-level",{level:e}).then((()=>{}))}resolveUuid(e){return this.wire.sendAction("resolve-uuid",{entityKey:e}).then((({payload:e})=>e.data))}executeOnRemote(e,t){return t.requestingIdentity=e,this.wire.ferryAction(t)}readRegistryValue(e,t,n){return this.wire.sendAction("read-registry-value",{rootKey:e,subkey:t,value:n}).then((({payload:e})=>e.data))}registerExternalConnection(e){return this.wire.sendAction("register-external-connection",{uuid:e}).then((({payload:e})=>e.data))}async getServiceConfiguration(e){if("string"!=typeof e.name)throw new Error("Must provide an object with a `name` property having a string value");const{name:t}=e;return this.wire.sendAction("get-service-configuration",{name:t}).then((({payload:e})=>e.data))}async getSystemAppConfig(e){if("string"!=typeof e)throw new Error("Must provide a string value for name of system app");return this.wire.sendAction("get-system-app-configuration",{name:e}).then((({payload:e})=>e.data))}runRvmHealthCheck(){return this.wire.sendAction("run-rvm-health-check").then((({payload:e})=>e.data))}async launchManifest(e,t){return(await this.wire.sendAction("launch-manifest",{manifestUrl:e,opts:t})).payload.data.manifest}async queryPermissionForCurrentContext(e){const t={uuid:this.wire.me.uuid,name:this.wire.me.name};return(await this.wire.sendAction("query-permission-for-current-context",{apiName:e,identity:t})).payload.data}async enableNativeWindowIntegrationProvider(e){const{payload:t}=await this.wire.sendAction("enable-native-window-integration-provider",{permissions:e});return t.data}async registerUsage({data:e,type:t}){await this.wire.sendAction("register-usage",{data:e,type:t})}}t.default=s},240:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const i=n(9659),r=n(4999),o=n(4169);class s extends i.Base{async create(e){const{uuid:t}=this.wire.me;if(!e.name||"string"!=typeof e.name)throw new Error("Please provide a name property as a string in order to create a View.");return this.wire.environment.childViews?await this.wire.environment.createChildContent({entityType:"view",options:{...e,uuid:t}}):await this.wire.sendAction("create-view",{...e,uuid:t}),this.wrapSync({uuid:t,name:e.name})}async wrap(e){this.wire.sendAction("view-wrap");const t=r.validateIdentity(e);if(t)throw new Error(t);return new o.View(this.wire,e)}wrapSync(e){this.wire.sendAction("view-wrap-sync").catch((e=>{}));const t=r.validateIdentity(e);if(t)throw new Error(t);return new o.View(this.wire,e)}getCurrent(){if(this.wire.sendAction("view-get-current").catch((e=>{})),!this.wire.me.isView)throw new Error("You are not in a View context");const{uuid:e,name:t}=this.wire.me;return this.wrap({uuid:e,name:t})}getCurrentSync(){if(this.wire.sendAction("view-get-current-sync").catch((e=>{})),!this.wire.me.isView)throw new Error("You are not in a View context");const{uuid:e,name:t}=this.wire.me;return this.wrapSync({uuid:e,name:t})}}t.default=s},3163:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.View=void 0;const i=n(4636),r=n(4997);class o extends i.WebContents{constructor(e,t){super(e,t,"view"),this.identity=t,this.attach=async e=>{await this.wire.sendAction("attach-view",{target:e,...this.identity})},this.destroy=async()=>{await this.wire.sendAction("destroy-view",{...this.identity})},this.show=async()=>{await this.wire.sendAction("show-view",{...this.identity})},this.hide=async()=>{await this.wire.sendAction("hide-view",{...this.identity})},this.setBounds=async e=>{await this.wire.sendAction("set-view-bounds",{bounds:e,...this.identity})},this.getBounds=async()=>(await this.wire.sendAction("get-view-bounds",{...this.identity})).payload.data,this.getInfo=async()=>(await this.wire.sendAction("get-view-info",{...this.identity})).payload.data,this.getParentLayout=async()=>(this.wire.sendAction("view-get-parent-layout",{...this.identity}).catch((e=>{})),(await this.getCurrentWindow()).getLayout()),this.getOptions=async()=>this.wire.sendAction("get-view-options",{...this.identity}).then((({payload:e})=>e.data)),this.updateOptions=async e=>this.wire.sendAction("update-view-options",{options:e,...this.identity}).then((()=>{})),this.getCurrentWindow=async()=>{const{payload:{data:e}}=await this.wire.sendAction("get-view-window",{...this.identity});return new r._Window(this.wire,e)}}async focus({emitSynthFocused:e}={emitSynthFocused:!0}){const t=await this.getCurrentWindow();await t.focusedWebViewWasChanged(),await super.focus({emitSynthFocused:e})}}t.View=o},4169:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),r=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0});const o=n(240);t.default=o.default,r(n(3163),t)},4636:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.WebContents=void 0;const i=n(9659);class r extends i.EmitterBase{constructor(e,t,n){super(e,n,t.uuid,t.name),this.entityType=n}capturePage(e){return this.wire.sendAction("capture-page",{options:e,...this.identity}).then((({payload:e})=>e.data))}executeJavaScript(e){return this.wire.sendAction("execute-javascript-in-window",{...this.identity,code:e}).then((({payload:e})=>e.data))}getZoomLevel(){return this.wire.sendAction("get-zoom-level",this.identity).then((({payload:e})=>e.data))}setZoomLevel(e){return this.wire.sendAction("set-zoom-level",{...this.identity,level:e}).then((()=>{}))}navigate(e){return this.wire.sendAction("navigate-window",{...this.identity,url:e}).then((()=>{}))}navigateBack(){return this.wire.sendAction("navigate-window-back",{...this.identity}).then((()=>{}))}async navigateForward(){await this.wire.sendAction("navigate-window-forward",{...this.identity})}stopNavigation(){return this.wire.sendAction("stop-window-navigation",{...this.identity}).then((()=>{}))}reload(e=!1){return this.wire.sendAction("reload-window",{ignoreCache:e,...this.identity}).then((()=>{}))}print(e){return this.wire.sendAction("print",{...this.identity,options:e}).then((()=>{}))}findInPage(e,t){return this.wire.sendAction("find-in-page",{...this.identity,searchTerm:e,options:t}).then((({payload:e})=>e.data))}stopFindInPage(e){return this.wire.sendAction("stop-find-in-page",{...this.identity,action:e}).then((()=>{}))}getPrinters(){return this.wire.sendAction("get-printers",{...this.identity}).then((({payload:e})=>e.data))}async focus({emitSynthFocused:e}={emitSynthFocused:!0}){await this.wire.sendAction("focus-window",{emitSynthFocused:e,...this.identity})}async showDeveloperTools(){await this.wire.sendAction("show-developer-tools",this.identity)}async getProcessInfo(){const{payload:{data:e}}=await this.wire.sendAction("get-process-info",this.identity);return e}async getSharedWorkers(){return this.wire.sendAction("get-shared-workers",this.identity).then((({payload:e})=>e.data))}async inspectSharedWorker(){await this.wire.sendAction("inspect-shared-worker",{...this.identity})}async inspectSharedWorkerById(e){await this.wire.sendAction("inspect-shared-worker-by-id",{...this.identity,workerId:e})}async inspectServiceWorker(){await this.wire.sendAction("inspect-service-worker",{...this.identity})}}t.WebContents=r},2163:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const i=n(9659),r=n(4999),o=n(5047);class s extends i.Base{async wrap(e){this.wire.sendAction("window-wrap").catch((e=>{}));const t=r.validateIdentity(e);if(t)throw new Error(t);return new o._Window(this.wire,e)}wrapSync(e){this.wire.sendAction("window-wrap-sync").catch((e=>{}));const t=r.validateIdentity(e);if(t)throw new Error(t);return new o._Window(this.wire,e)}create(e){return this.wire.sendAction("create-window").catch((e=>{})),new o._Window(this.wire,{uuid:this.me.uuid,name:e.name}).createWindow(e)}getCurrent(){if(this.wire.sendAction("get-current-window").catch((e=>{})),!this.wire.me.isWindow)throw new Error("You are not in a Window context");const{uuid:e,name:t}=this.wire.me;return this.wrap({uuid:e,name:t})}getCurrentSync(){if(this.wire.sendAction("get-current-window-sync").catch((e=>{})),!this.wire.me.isWindow)throw new Error("You are not in a Window context");const{uuid:e,name:t}=this.wire.me;return this.wrapSync({uuid:e,name:t})}}t.default=s},5047:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t._Window=void 0;const i=n(7264),r=n(4636),o=n(4169);class s extends r.WebContents{constructor(e,t){super(e,t,"window"),this.identity=t}createWindow(e){return this.wire.sendAction("window-create-window",this.identity).catch((e=>{})),new Promise(((t,n)=>{const i="fire-constructor-callback",r=new Promise((e=>{this.on(i,(function t(n){let r;const{success:o}=n,s=n.data,{message:a}=s;r=o?{httpResponseCode:s.httpResponseCode,apiInjected:s.apiInjected}:{message:s.message,networkErrorCode:s.networkErrorCode,stack:s.stack},this.removeListener(i,t),e({message:a,cbPayload:r,success:o})}))}));void 0===e.waitForPageLoad&&(e.waitForPageLoad=!1),void 0===e.autoShow&&(e.autoShow=!0);const o=this.wire.environment.createChildContent({entityType:"window",options:e});Promise.all([r,o]).then((e=>{const i=e[0];i.success?t(this):n(i);try{this.getWebWindow().fin.__internal_.openerSuccessCBCalled()}catch(e){}})).catch(n)}))}getAllFrames(){return this.wire.sendAction("get-all-frames",this.identity).then((({payload:e})=>e.data))}getBounds(){return this.wire.sendAction("get-window-bounds",this.identity).then((({payload:e})=>e.data))}center(){return this.wire.sendAction("center-window",this.identity).then((()=>{}))}blur(){return this.wire.sendAction("blur-window",this.identity).then((()=>{}))}bringToFront(){return this.wire.sendAction("bring-window-to-front",this.identity).then((()=>{}))}animate(e,t){return this.wire.sendAction("animate-window",{transitions:e,options:t,...this.identity}).then((()=>{}))}hide(){return this.wire.sendAction("hide-window",this.identity).then((()=>{}))}close(e=!1){return this.wire.sendAction("close-window",{force:e,...this.identity}).then((()=>{Object.setPrototypeOf(this,null)}))}focusedWebViewWasChanged(){return this.wire.sendAction("focused-webview-changed",this.identity).then((()=>{}))}getNativeId(){return this.wire.sendAction("get-window-native-id",this.identity).then((({payload:e})=>e.data))}async getCurrentViews(){const{payload:e}=await this.wire.sendAction("window-get-views",this.identity);return e.data.map((e=>new o.View(this.wire,e)))}disableFrame(){return console.warn("Function is deprecated; use disableUserMovement instead."),this.wire.sendAction("disable-window-frame",this.identity).then((()=>{}))}disableUserMovement(){return this.wire.sendAction("disable-window-frame",this.identity).then((()=>{}))}enableFrame(){return console.warn("Function is deprecated; use enableUserMovement instead."),this.wire.sendAction("enable-window-frame",this.identity).then((()=>{}))}enableUserMovement(){return this.wire.sendAction("enable-window-frame",this.identity).then((()=>{}))}flash(){return this.wire.sendAction("flash-window",this.identity).then((()=>{}))}stopFlashing(){return this.wire.sendAction("stop-flash-window",this.identity).then((()=>{}))}getInfo(){return this.wire.sendAction("get-window-info",this.identity).then((({payload:e})=>e.data))}async getLayout(){if(this.wire.sendAction("window-get-layout",this.identity).catch((e=>{})),!(await this.getOptions()).layout)throw new Error("Window does not have a Layout");return this.fin.Platform.Layout.wrap(this.identity)}getOptions(){return this.wire.sendAction("get-window-options",this.identity).then((({payload:e})=>e.data))}getParentApplication(){return this.wire.sendAction("window-get-parent-application",this.identity).catch((e=>{})),Promise.resolve(new i.Application(this.wire,this.identity))}getParentWindow(){return this.wire.sendAction("window-get-parent-window",this.identity).catch((e=>{})),Promise.resolve(new i.Application(this.wire,this.identity)).then((e=>e.getWindow()))}async getSnapshot(e){const t={area:e,...this.identity};return console.warn("Window.getSnapshot has been deprecated, please use Window.capturePage"),(await this.wire.sendAction("get-window-snapshot",t)).payload.data}getState(){return this.wire.sendAction("get-window-state",this.identity).then((({payload:e})=>e.data))}getWebWindow(){return this.wire.sendAction("window-get-web-window",this.identity).catch((e=>{})),this.wire.environment.getWebWindow(this.identity)}isMainWindow(){return this.wire.sendAction("window-is-main-window",this.identity).catch((e=>{})),this.me.uuid===this.me.name}isShowing(){return this.wire.sendAction("is-window-showing",this.identity).then((({payload:e})=>e.data))}maximize(){return this.wire.sendAction("maximize-window",this.identity).then((()=>{}))}minimize(){return this.wire.sendAction("minimize-window",this.identity).then((()=>{}))}moveBy(e,t){return this.wire.sendAction("move-window-by",{deltaLeft:e,deltaTop:t,...this.identity}).then((()=>{}))}moveTo(e,t){return this.wire.sendAction("move-window",{left:e,top:t,...this.identity}).then((()=>{}))}resizeBy(e,t,n){return this.wire.sendAction("resize-window-by",{deltaWidth:Math.floor(e),deltaHeight:Math.floor(t),anchor:n,...this.identity}).then((()=>{}))}resizeTo(e,t,n){return this.wire.sendAction("resize-window",{width:Math.floor(e),height:Math.floor(t),anchor:n,...this.identity}).then((()=>{}))}restore(){return this.wire.sendAction("restore-window",this.identity).then((()=>{}))}setAsForeground(){return this.wire.sendAction("set-foreground-window",this.identity).then((()=>{}))}setBounds(e){return this.wire.sendAction("set-window-bounds",{...e,...this.identity}).then((()=>{}))}show(e=!1){return this.wire.sendAction("show-window",{force:e,...this.identity}).then((()=>{}))}showAt(e,t,n=!1){return this.wire.sendAction("show-at-window",{force:n,left:Math.floor(e),top:Math.floor(t),...this.identity}).then((()=>{}))}updateOptions(e){return this.wire.sendAction("update-window-options",{options:e,...this.identity}).then((()=>{}))}authenticate(e,t){return this.wire.sendAction("window-authenticate",{userName:e,password:t,...this.identity}).then((()=>{}))}async showPopupMenu(e){const{payload:t}=await this.wire.sendAction("show-popup-menu",{options:e,...this.identity});return t.data}async closePopupMenu(){return this.wire.sendAction("close-popup-menu",{...this.identity}).then((()=>{}))}}t._Window=s},4997:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),r=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0});const o=n(2163);t.default=o.default,r(n(5047),t)},1681:(e,t,n)=>{var i;t.H=void 0;const r=n(6465),o=n(6545),s=n(9298);class a extends r.EventEmitter{connect(e){throw new Error("You are not running in OpenFin.")}connectSync(){throw new Error("You are not running in OpenFin.")}send(e){throw new Error("You are not running in OpenFin.")}shutdown(){throw new Error("You are not running in OpenFin.")}constructor(){super()}}class c{constructor(){this.childViews=!0}getDefaultChannelOptions(){throw new Error("Method not implemented.")}getRtcPeer(){throw new Error("Method not implemented.")}getManagerConstructor(){throw new Error("Method not implemented.")}getProviderInitializer(){throw new Error("Method not implemented.")}writeToken(e,t){throw new Error("Method not implemented.")}retrievePort(e){throw new Error("Method not implemented.")}getNextMessageId(){throw new Error("Method not implemented.")}getRandomId(){throw new Error("Method not implemented.")}createChildContent(e){throw new Error("Method not implemented.")}getWebWindow(e){throw new Error("Method not implemented.")}getCurrentEntityIdentity(){throw new Error("Method not implemented.")}getCurrentEntityType(){return"unknown"}raiseEvent(e,t){throw new Error("Method not implemented.")}getUrl(){throw new Error("Method not implemented.")}whenReady(){throw new Error("Method not implemented.")}}t.H="undefined"!=typeof window&&(null===(i=window)||void 0===i?void 0:i.fin)||(()=>{const e=new c,t=new s.default(a,e,{uuid:"",name:""});return new o.default(t)})()},8068:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getFin=t.registerFin=void 0;const n=new WeakMap;t.registerFin=function(e,t){n.set(e,t)},t.getFin=function(e){const t=n.get(e);if(!t)throw new Error("Could not locate fin api for given transport");return t}},5007:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.RuntimeError=t.NotSupportedError=t.NotImplementedError=t.NoAckError=t.DuplicateCorrelationError=t.UnexpectedActionError=t.DisconnectedError=void 0;class n extends Error{constructor(e){super(`Expected websocket state OPEN but found ${e}`),this.readyState=e}}t.DisconnectedError=n;class i extends Error{}t.UnexpectedActionError=i;class r extends Error{}t.DuplicateCorrelationError=r;class o extends Error{}t.NoAckError=o;class s extends Error{}t.NotImplementedError=s;class a extends Error{}t.NotSupportedError=a;class c extends Error{constructor(e){const t=e.payload||e,{reason:n,error:i}=t;super(n),this.name="RuntimeError",(null==i?void 0:i.stack)&&(this.stack=i.stack)}}t.RuntimeError=c},9298:function(e,t,n){var i,r=this&&this.__classPrivateFieldSet||function(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n},o=this&&this.__classPrivateFieldGet||function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)};Object.defineProperty(t,"__esModule",{value:!0});const s=n(6465),a=n(8624),c=n(5007),d=n(2734),h=n(9641);class l extends s.EventEmitter{constructor(e,t,n){super(),this.wireListeners=new Map,this.topicRefMap=new Map,this.eventAggregator=new d.default,this.messageHandlers=[this.eventAggregator.dispatchEvent],i.set(this,void 0),this.connectSync=()=>{o(this,i).connectSync()},this.getPort=()=>{if("NodeEnvironment"!==this.environment.constructor.name)throw new c.NotImplementedError("Not Implemented");return o(this,i).wire.url.split(":").slice(-1)[0]},r(this,i,new e(this.onmessage.bind(this))),this.environment=t,this.sendRaw=o(this,i).send.bind(o(this,i)),this.registerMessageHandler(this.handleMessage.bind(this)),o(this,i).on("disconnected",(()=>{for(const[,{reject:e}]of this.wireListeners)e("Remote connection has closed");this.wireListeners.clear(),this.emit("disconnected")}));const{uuid:s,name:a}=n,l=this.environment.getCurrentEntityType();this.me=h.getBaseMe(l,s,a)}shutdown(){return o(this,i).shutdown()}async connect(e){if(a.isExistingConnectConfig(e))return this.connectByPort(e);if(a.isNewConnectConfig(e)){const t=await this.environment.retrievePort(e);return this.connectByPort({...e,address:`ws://localhost:${t}`})}}async connectByPort(e){const{address:t,uuid:n}=e,r={...e,type:"file-token"},s=o(this,i);await s.connect(t);const a=await this.sendAction("request-external-authorization",{uuid:n,type:"file-token"},!0);if("external-authorization-response"!==a.action)throw new c.UnexpectedActionError(a.action);const{token:d}=a.payload;await this.environment.writeToken(a.payload.file,a.payload.token);const h=await this.sendAction("request-authorization",r,!0);if("authorization-response"!==h.action)throw new c.UnexpectedActionError(h.action);if(!0!==h.payload.success)throw new c.RuntimeError(h.payload);return d}sendAction(e,t={},n=!1){return new Promise(((r,s)=>{const a=this.environment.getNextMessageId(),c={action:e,payload:t,messageId:a},d=o(this,i);return this.addWireListener(a,r,s,n),d.send(c).catch(s)}))}ferryAction(e){return new Promise(((t,n)=>{const r=this.environment.getNextMessageId();e.messageId=r;const s=e=>{t(e.payload)};return o(this,i).send(e).then((()=>this.addWireListener(r,s,n,!1))).catch(n)}))}registerMessageHandler(e){this.messageHandlers.push(e)}addWireListener(e,t,n,i){i?this.uncorrelatedListener=t:this.wireListeners.has(e)?n(new c.DuplicateCorrelationError(String(e))):this.wireListeners.set(e,{resolve:t,reject:n})}onmessage(e){for(const t of this.messageHandlers)t.call(null,e)}handleMessage(e){const t=e.correlationId||NaN;if("correlationId"in e){if(!this.wireListeners.has(t))return!1;{const{resolve:n,reject:i}=this.wireListeners.get(t);"ack"!==e.action?i(new c.NoAckError(e.action)):"payload"in e?e.payload.success?n.call(null,e):i(new c.RuntimeError(e.payload)):i(new c.RuntimeError(e)),this.wireListeners.delete(t)}}else this.uncorrelatedListener&&this.uncorrelatedListener.call(null,e),this.uncorrelatedListener=()=>{};return!0}}i=new WeakMap,t.default=l},8624:(e,t)=>{function n(e){return"string"==typeof e.manifestUrl}function i(e){return r(e)&&"string"==typeof e.address}function r(e){return"string"==typeof e.uuid}function o(e){return e.runtime&&"string"==typeof e.runtime.version}function s(e){return r(e)&&o(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.isInternalConnectConfig=t.isPortDiscoveryConfig=t.isNewConnectConfig=t.isExistingConnectConfig=t.isExternalConfig=void 0,t.isExternalConfig=n,t.isExistingConnectConfig=i,t.isNewConnectConfig=s,t.isPortDiscoveryConfig=function(e){return n(e)&&o(e)||s(e)},t.isInternalConnectConfig=function(e){return i(e)||s(e)}},2366:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.errorToPOJO=void 0,t.errorToPOJO=function(e){return{stack:e.stack,message:e.message,toString:e.toString}}},3917:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.exhaustiveCheck=void 0,t.exhaustiveCheck=function(e,t){throw new Error(`Unsupported value: ${e}${t?`\n Supported values are: ${t.join("")}`:""}`)}},3442:(e,t)=>{async function n(e){const t=[];for(const n of e){const e=await n();t.push(e)}return t}Object.defineProperty(t,"__esModule",{value:!0}),t.promiseMapSerial=t.serial=t.promiseMap=t.promisify=void 0,t.promisify=function(e){return(...t)=>new Promise(((n,i)=>{e(...t,((e,t)=>e?i(e):n(t)))}))},t.promiseMap=async function(e,t){return Promise.all(e.map(t))},t.serial=n,t.promiseMapSerial=async function(e,t){return n(e.map(((e,n,i)=>()=>t(e,n,i))))}},3127:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=class{constructor(){this.topicRefMap=new Map}incRefCount(e){const t=this.topicRefMap.get(e);let n;if(t){const i=t+1;n=i,this.topicRefMap.set(e,i)}else this.topicRefMap.set(e,1),n=1;return n}decRefCount(e){const t=this.topicRefMap.get(e);let n;if(t){const i=t-1;this.topicRefMap.set(e,i),n=i}else n=-1;return n}actOnFirst(e,t,n){return 1===this.incRefCount(e)?t():n()}actOnLast(e,t,n){return 0===this.decRefCount(e)?t():n()}}},2300:(e,t)=>{function n(e){return[...e.split(".").reverse().entries()].reduce(((e,[t,n])=>e+ +n*1e4**t),0)}function i(e,t){return n(e)>=n(t)}function r(e){return e.split("/")[0]}Object.defineProperty(t,"__esModule",{value:!0}),t.runtimeUuidMeetsMinimumRuntimeVersion=t.parseRuntimeUuid=t.meetsMinimumRuntimeVersion=void 0,t.meetsMinimumRuntimeVersion=i,t.parseRuntimeUuid=r,t.runtimeUuidMeetsMinimumRuntimeVersion=function(e,t){return i(r(e),t)}},4999:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.validateIdentity=void 0,t.validateIdentity=function(e){let t;return"object"==typeof e&&"string"==typeof e.uuid||(t="Not a valid identity object"),t}},6465:e=>{var t,n="object"==typeof Reflect?Reflect:null,i=n&&"function"==typeof n.apply?n.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};t=n&&"function"==typeof n.ownKeys?n.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var r=Number.isNaN||function(e){return e!=e};function o(){o.init.call(this)}e.exports=o,e.exports.once=function(e,t){return new Promise((function(n,i){function r(n){e.removeListener(t,o),i(n)}function o(){"function"==typeof e.removeListener&&e.removeListener("error",r),n([].slice.call(arguments))}y(e,t,o,{once:!0}),"error"!==t&&function(e,t,n){"function"==typeof e.on&&y(e,"error",t,{once:!0})}(e,r)}))},o.EventEmitter=o,o.prototype._events=void 0,o.prototype._eventsCount=0,o.prototype._maxListeners=void 0;var s=10;function a(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function c(e){return void 0===e._maxListeners?o.defaultMaxListeners:e._maxListeners}function d(e,t,n,i){var r,o,s,d;if(a(n),void 0===(o=e._events)?(o=e._events=Object.create(null),e._eventsCount=0):(void 0!==o.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),o=e._events),s=o[t]),void 0===s)s=o[t]=n,++e._eventsCount;else if("function"==typeof s?s=o[t]=i?[n,s]:[s,n]:i?s.unshift(n):s.push(n),(r=c(e))>0&&s.length>r&&!s.warned){s.warned=!0;var h=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");h.name="MaxListenersExceededWarning",h.emitter=e,h.type=t,h.count=s.length,d=h,console&&console.warn&&console.warn(d)}return e}function h(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function l(e,t,n){var i={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},r=h.bind(i);return r.listener=n,i.wrapFn=r,r}function u(e,t,n){var i=e._events;if(void 0===i)return[];var r=i[t];return void 0===r?[]:"function"==typeof r?n?[r.listener||r]:[r]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(r):w(r,r.length)}function p(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function w(e,t){for(var n=new Array(t),i=0;i<t;++i)n[i]=e[i];return n}function y(e,t,n,i){if("function"==typeof e.on)i.once?e.once(t,n):e.on(t,n);else{if("function"!=typeof e.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e);e.addEventListener(t,(function r(o){i.once&&e.removeEventListener(t,r),n(o)}))}}Object.defineProperty(o,"defaultMaxListeners",{enumerable:!0,get:function(){return s},set:function(e){if("number"!=typeof e||e<0||r(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");s=e}}),o.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},o.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||r(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},o.prototype.getMaxListeners=function(){return c(this)},o.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var r="error"===e,o=this._events;if(void 0!==o)r=r&&void 0===o.error;else if(!r)return!1;if(r){var s;if(t.length>0&&(s=t[0]),s instanceof Error)throw s;var a=new Error("Unhandled error."+(s?" ("+s.message+")":""));throw a.context=s,a}var c=o[e];if(void 0===c)return!1;if("function"==typeof c)i(c,this,t);else{var d=c.length,h=w(c,d);for(n=0;n<d;++n)i(h[n],this,t)}return!0},o.prototype.addListener=function(e,t){return d(this,e,t,!1)},o.prototype.on=o.prototype.addListener,o.prototype.prependListener=function(e,t){return d(this,e,t,!0)},o.prototype.once=function(e,t){return a(t),this.on(e,l(this,e,t)),this},o.prototype.prependOnceListener=function(e,t){return a(t),this.prependListener(e,l(this,e,t)),this},o.prototype.removeListener=function(e,t){var n,i,r,o,s;if(a(t),void 0===(i=this._events))return this;if(void 0===(n=i[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete i[e],i.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(r=-1,o=n.length-1;o>=0;o--)if(n[o]===t||n[o].listener===t){s=n[o].listener,r=o;break}if(r<0)return this;0===r?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,r),1===n.length&&(i[e]=n[0]),void 0!==i.removeListener&&this.emit("removeListener",e,s||t)}return this},o.prototype.off=o.prototype.removeListener,o.prototype.removeAllListeners=function(e){var t,n,i;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var r,o=Object.keys(n);for(i=0;i<o.length;++i)"removeListener"!==(r=o[i])&&this.removeAllListeners(r);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(i=t.length-1;i>=0;i--)this.removeListener(e,t[i]);return this},o.prototype.listeners=function(e){return u(this,e,!0)},o.prototype.rawListeners=function(e){return u(this,e,!1)},o.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):p.call(e,t)},o.prototype.listenerCount=p,o.prototype.eventNames=function(){return this._eventsCount>0?t(this._events):[]}}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var o=t[i]={exports:{}};return e[i].call(o.exports,o,o.exports,n),o.exports}n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var i={};(()=>{n.d(i,{dq:()=>a,MS:()=>s,xQ:()=>c,sO:()=>fe,Zu:()=>ge,I3:()=>me,$U:()=>ve,i0:()=>Ce,cX:()=>d,_W:()=>h,U$:()=>w,U7:()=>y,rd:()=>pe});var e,t,r,o=n(1681);class s extends Error{constructor(e="An unexpected error has occurred",t){var n;super(e),t&&(this.innerError=t&&t),this.stack=null===(n=this.stack)||void 0===n?void 0:n.replace(/^(\w*Error)/,`${this.constructor.name}`)}}class a extends s{constructor(e="Failed to execute adapter function",t){super(e,t)}}class c extends s{constructor(e="Failed to raise event",t){super(e,t)}}class d extends s{constructor(e="Failed to initialize adapter",t){super(e,t)}}class h extends s{constructor(e="Invalid parameter value",t){super(e,t)}}!function(e){e.ActivateWorkbook="ActivateWorkbook",e.ActivateWorksheet="ActivateWorksheet",e.AddWorksheet="AddWorksheet",e.CalculateWorkbook="CalculateWorkbook",e.CalculateWorksheet="CalculateWorksheet",e.ClearAllCells="ClearAllCells",e.ClearAllCellValues="ClearAllCellValues",e.ClearAllCellFormatting="ClearAllCellFormatting",e.ClearCellValues="ClearCellValues",e.ClearCellFormatting="ClearCellFormatting",e.ClearCells="ClearCells",e.CloseWorkbook="CloseWorkbook",e.CreateWorkbook="CreateWorkbook",e.DeleteWorksheet="DeleteWorksheet",e.DeregisterEvent="DeregisterEvent",e.EventFired="EventFired",e.GetCalculationMode="GetCalculationMode",e.GetCells="GetCells",e.GetWorkbookById="GetWorkbookById",e.GetWorkbookName="GetWorkbookName",e.GetWorkbooks="GetWorkbooks",e.GetWorksheetById="GetWorksheetById",e.GetWorksheetByName="GetWorksheetByName",e.GetWorksheetName="GetWorksheetName",e.GetWorksheets="GetWorksheets",e.LogMessage="LogMessage",e.OpenWorkbook="OpenWorkbook",e.ProtectWorksheet="ProtectWorksheet",e.RegisterEvent="RegisterEvent",e.SaveWorkbook="SaveWorkbook",e.SaveWorkbookAs="SaveWorkbookAs",e.SetCellValues="SetCellValues",e.SetCellFormatting="SetCellFormatting",e.SetCellName="SetCellName",e.SetWorksheetName="SetWorksheetName",e.FilterCells="FilterCells",e.QuitApplication="QuitApplication"}(e||(e={})),function(e){e.Activate="Activate",e.AddWorksheet="AddWorksheet",e.Change="Change",e.Close="Close",e.Deactivate="Deactivate",e.DeleteWorksheet="DeleteWorksheet"}(t||(t={})),function(e){e.Workbook="Workbook",e.Worksheet="Worksheet"}(r||(r={}));const l="1.3.0";let u=!1;const p="[@openfin/excel]",w=()=>{u=!1},y=()=>{u=!0,g("v1.3.0")},f=(e,t)=>{u&&(e.innerError?console.error(t?`${p} ${t}`:p,e,"\n\n(inner)",e.innerError):console.error(t?`${p} ${t}`:p,e))},g=(...e)=>{u&&console.log(p,...e)},m=(...e)=>{u&&console.warn(p,...e)};o.H||Object.assign(window,{fin:{}}),Object.assign(o.H,{Integrations:{Excel:{enableLogging:y,disableLogging:w}}});const v=()=>"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(e=>{const t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})),C=new Map,I=(t,n)=>async()=>{g(`Worksheet: Activate (${n})`);try{await t.dispatch(e.ActivateWorksheet,n)}catch(e){throw new a}},x=(t,n)=>async()=>{g(`Worksheet: Calculate (${n})`);try{await t.dispatch(e.CalculateWorksheet,n)}catch(e){throw new a}},A=(t,n)=>async()=>{g(`Worksheet: Clear all cell values (${n})`);try{await t.dispatch(e.ClearAllCellValues,n)}catch(e){throw new a}},b=(t,n)=>async()=>{g(`Worksheet: Clear all cell formatting (${n})`);try{await t.dispatch(e.ClearAllCellFormatting,n)}catch(e){throw new a}},E=(t,n)=>async()=>{g(`Worksheet: Clear all cells (${n})`);try{await t.dispatch(e.ClearAllCells,n)}catch(e){throw new a}},P=(t,n)=>async i=>{g(`Worksheet: Clear cell values; cellRange:${i} (${n})`);const r={cellRange:i,objectId:n};try{await t.dispatch(e.ClearCellValues,r)}catch(e){throw new a}},k=(t,n)=>async i=>{g(`Worksheet: Clear cell formatting; cellRange:${i} (${n})`);const r={cellRange:i,objectId:n};try{await t.dispatch(e.ClearCellFormatting,r)}catch(e){throw new a}},M=(t,n)=>async i=>{g(`Worksheet: Clear cells; cellRange:${i} (${n})`);const r={cellRange:i,objectId:n};try{await t.dispatch(e.ClearCells,r)}catch(e){throw new a}},_=(e,t)=>(n,i,r=1e3)=>{if(Number.isNaN(r)||r<=0)throw new s("Update interval must be a positive number");const o=v();g(`Worksheet: Create data stream; streamId:${o}; cellRange:${n}; updateInterval:${r} (${t})`);const a={close:()=>{g(`Closed stream (${o})`),(e=>{var t;try{const n=C.get(e);if(!n)throw new s(`Unable to find registered data stream with id ${e}`);void 0!==(null!==(t=n.timer)&&void 0!==t?t:void 0)&&T(e),C.delete(e)}catch(e){throw f(e),e}})(o)},cellRange:n,id:o,start:()=>{g(`Started streaming (${o})`),B(o,i,e,t)},stop:()=>{g(`Stopped streaming (${o})`),T(o)},updateInterval:r,worksheetId:t};return C.set(o,{dataStream:a}),a},S=(e,t,n,i)=>{const o={eventTarget:r.Worksheet,objectId:t};return{objectId:t,activate:I(e,t),addEventListener:n(e,o),calculate:x(e,t),clearAllCellFormatting:b(e,t),clearAllCells:E(e,t),clearAllCellValues:A(e,t),clearCellFormatting:k(e,t),clearCells:M(e,t),clearCellValues:P(e,t),createDataStream:_(e,t),delete:O(e,t),filterCells:W(e,t),getCells:F(e,t),getName:L(e,t),protect:R(e,t),removeEventListener:i(e),setCellFormatting:$(e,t),setCellName:G(e,t),setCellValues:j(e,t),setName:N(e,t)}},O=(t,n)=>async()=>{g(`Worksheet: Delete (${n})`);try{await t.dispatch(e.DeleteWorksheet,n)}catch(e){throw new a}},W=(t,n)=>async(i,r,o,s,c,d=!0)=>{g(`Worksheet: Filter cells; cellRange:${i} (${n})`,{columnIndex:r,filterOperator:o,criteria1:s,criteria2:c,visibleDropDown:d});const h={cellRange:i,criteria1:s,criteria2:c,columnIndex:r,filterOperator:o,objectId:n,visibleDropDown:d};try{await t.dispatch(e.FilterCells,h)}catch(e){throw new a}},F=(t,n)=>async i=>{g(`Worksheet: Get cells; cellRange:${i} (${n})`);const r={cellRange:i,objectId:n};let o=[];try{o=await t.dispatch(e.GetCells,r),g(`${i}:`,o)}catch(e){throw new a}return o},L=(t,n)=>async()=>{g(`Worksheet: Get name (${n})`);try{return await t.dispatch(e.GetWorksheetName,n)}catch(e){throw new a}},R=(t,n)=>async()=>{g(`Worksheet: Protect (${n})`);try{await t.dispatch(e.ProtectWorksheet,n)}catch(e){throw new a}},$=(t,n)=>async(i,r)=>{g(`Worksheet: Set cell formatting; cellRange:${i} (${n})`,r);const o={cellRange:i,formatting:r,objectId:n};try{await t.dispatch(e.SetCellFormatting,o)}catch(e){throw new a}},G=(t,n)=>async(i,r)=>{const o=r.trim();let s;if(!o)throw s=new h("Cell range name cannot be an empty string"),f(s),s;if(o.length>255)throw s=new h("Cell range name must be 255 characters or less"),f(s),s;if(/[^a-z0-9_.?\\"']/.test(o))throw s=new h("Cell range name contains invalid characters"),f(s),s;if(/^\d|\d$/.test(o))throw s=new h("Cell range name must not start or end with a number"),f(s),s;g(`Worksheet: Set cell name; cellRange:${i}; newCellRangeName:${o} (${n})`);const c={cellRange:i,name:o,objectId:n};try{await t.dispatch(e.SetCellName,c)}catch(e){throw new a}},j=(t,n)=>async(i,r)=>{g(`Worksheet: Set cell values; cellRange:${i} (${n})`,r);const o={cellRange:i,objectId:n,valuesMap:r};try{await t.dispatch(e.SetCellValues,o)}catch(e){throw new a}},N=(t,n)=>async i=>{const r=i.trim();let o;if(!r)throw o=new h("Worksheet name cannot be an empty string"),f(o),o;if(r.length>31)throw o=new h("Worksheet name must be 31 characters or less"),f(o),o;g(`Worksheet: Set name; newWorksheetName:${r} (${n})`);const s={newWorksheetName:r,objectId:n};try{return await t.dispatch(e.SetWorksheetName,s)}catch(e){throw new a}},B=(e,t,n,i)=>{var r;try{const o=C.get(e);if(!o)throw new s(`Unable to find registered data stream with id ${e}`);void 0!==(null!==(r=o.timer)&&void 0!==r?r:void 0)&&T(e);const{cellRange:a,updateInterval:c}=o.dataStream,d=async()=>{const r=await t();try{await j(n,i)(a,[[r]])}catch(t){m(`Unable to update cell range for stream with id ${e}: ${null==t?void 0:t.message}`)}},h=window.setInterval(d,c);o.timer=h}catch(e){throw f(e),e}},T=e=>{var t;try{const n=C.get(e);if(!n)throw new s(`Unable to find registered data stream with id ${e}`);if(void 0===(null!==(t=n.timer)&&void 0!==t?t:void 0))return;window.clearInterval(n.timer),n.timer=void 0}catch(e){throw f(e),e}},D=new Map,V=(n,i)=>async(r,o)=>{if(!i||!i.eventTarget||!i.objectId){const e=new c("Event registration missing required values");throw f(e),e}const s=Object.keys(t).find((e=>e.toLowerCase()===r.toLowerCase()));if(!s){const e=new c(`Unsupported event name: ${r}`);throw f(e),e}i.eventName=t[s],g("Registering event",i);try{const t=await n.dispatch(e.RegisterEvent,i);D.set(t,o)}catch(e){throw new a(void 0,e)}},H=t=>async n=>{let i;for(const[e,t]of D)if(t===n){i=e;break}if(!i)throw new c;g("Deregistering event:",i);try{await t.dispatch(e.DeregisterEvent,i),D.delete(i)}catch(e){throw new a}},U=(t,n)=>async()=>{g(`Workbook: Activate (${n})`);try{return await t.dispatch(e.ActivateWorkbook,n)}catch(e){throw new a}},z=(t,n,i,r)=>async()=>{let o;g(`Workbook: Add worksheet (${n})`);try{o=await t.dispatch(e.AddWorksheet,n)}catch(e){throw new a}return S(t,o,i,r)},q=(t,n)=>async()=>{g(`Workbook: Calculate (${n})`);try{await t.dispatch(e.CalculateWorkbook,n)}catch(e){throw new a}},J=(t,n)=>async()=>{g(`Workbook: Close (${n})`);try{return await t.dispatch(e.CloseWorkbook,n)}catch(e){throw new a}},K=(e,t,n,i)=>{const o={eventTarget:r.Workbook,objectId:t};return{objectId:t,activate:U(e,t),addWorksheet:z(e,t,n,i),addEventListener:n(e,o),calculate:q(e,t),close:J(e,t),getCalculationMode:Y(e,t),getName:Q(e,t),getWorksheetByName:Z(e,t,n,i),getWorksheets:X(e,t,n,i),removeEventListener:i(e),save:ee(e,t),saveAs:te(e,t)}},Y=(t,n)=>async()=>{g("Workbook: Get calculation mode");try{return await t.dispatch(e.GetCalculationMode,n)}catch(e){throw new a}},Q=(t,n)=>async()=>{g(`Workbook: Get name (${n})`);try{return await t.dispatch(e.GetWorkbookName,n)}catch(e){throw new a}},Z=(t,n,i,r)=>async o=>{let s;g(`Workbook: Get worksheet by name: ${o} (${n})`);try{if(s=await t.dispatch(e.GetWorksheetByName,{objectId:n,worksheetName:o}),null===s)return null}catch(e){throw new a}return S(t,s,i,r)},X=(t,n,i,r)=>async()=>{let o;g(`Workbook: Get worksheets (${n})`);try{o=await t.dispatch(e.GetWorksheets,n)}catch(e){throw new a}return o.map((e=>S(t,e,i,r)))},ee=(t,n)=>async()=>{g(`Workbook: Save (${n})`);try{return await t.dispatch(e.SaveWorkbook,n)}catch(e){throw new a}},te=(t,n)=>async i=>{g(`Workbook: Save as; filePath:${i} (${n})`);try{return await t.dispatch(e.SaveWorkbookAs,{filePath:i,objectId:n})}catch(e){throw new a}},ne=t=>async()=>{let n;g("Application: Create workbook");try{n=await t.dispatch(e.CreateWorkbook)}catch(e){throw new a}return K(t,n,V,H)},ie=t=>async n=>{let i;g(`Application: Get workbook; id:${n}`);try{i=await t.dispatch(e.GetWorkbookById,n)}catch(e){throw new a}return K(t,i,V,H)},re=t=>async()=>{let n;g("Application: Get workbooks");try{n=await t.dispatch(e.GetWorkbooks)}catch(e){throw new a}return n.map((e=>K(t,e,V,H)))},oe=t=>async n=>{g(`Application: Get worksheet; id:${n}`);try{n=await t.dispatch(e.GetWorksheetById,n)}catch(e){throw new a}return S(t,n,V,H)},se=t=>async n=>{let i;g(`Application: Open workbook; filePath:${n}`);try{i=await t.dispatch(e.OpenWorkbook,n)}catch(e){throw new a}return K(t,i,V,H)},ae=t=>async(n=!0)=>{g(`Application: Quit; displayAlerts:${n}`);try{return await t.dispatch(e.QuitApplication,n)}catch(e){throw new a}};var ce;!function(e){e[e.Info=1]="Info",e[e.Warn=2]="Warn",e[e.Error=3]="Error"}(ce||(ce={}));const de="excel-adapter",he=v();let le,ue;const pe=async()=>{try{if(!le||!await(async e=>(await o.H.InterApplicationBus.Channel.getAllChannels()).some((t=>t.channelName===e)))(he)){await(async()=>{var e;const t=null===(e=(await o.H.Application.getCurrentSync().getManifest()).appAssets)||void 0===e?void 0:e.find((e=>e.alias===de));if(t)return void m("Detected adapter package in app manifest appAssets",t);if(await ye())return void g("Using existing adapter package");const n={alias:de,src:"https://cdn.openfin.co/release/integrations/excel/1.3.0/OpenFin.Excel.zip",target:"OpenFin.Excel.exe",version:l};g("Downloading adapter package",n);try{await o.H.System.downloadAsset(n,(()=>{}))}catch(e){throw f("Unable to download adapter package"),e}})();const e=await o.H.System.getRuntimeInfo(),t=o.H.Application.me.uuid,n=e.version,i=e.securityRealm;g("Initializing adapter",{appId:t,channelName:he,runtimeVersion:n,securityRealm:i}),le=await o.H.System.launchExternalProcess({alias:de,arguments:`${t} ${n} ${i} ${he}`}),g(`Adapter running with uuid ${le.uuid}`)}const i=o.H.InterApplicationBus.Channel.connect(he,{payload:{version:l}}),s=new Promise((e=>{setTimeout(e,2e4)})).then((()=>{throw new Error("Connection to adapter timed out")}));ue=await Promise.race([i,s]),g(`Connected to adapter on channel ${he}`),ue.register(e.LogMessage,we),ue.register(e.EventFired,(n=ue,e=>{const{eventRegistrationId:i}=e,o=D.get(i);if(!o)throw new c(`No registered event listener found for id: ${i}`);g("Event payload received",e),((e,n,i)=>{var o,s;switch(i.eventTarget){case r.Workbook:switch(null===(o=i.eventName)||void 0===o?void 0:o.toUpperCase()){case t.Activate.toUpperCase():case t.Close.toUpperCase():case t.Deactivate.toUpperCase():return e();case t.AddWorksheet.toUpperCase():case t.DeleteWorksheet.toUpperCase():return e(S(n,i.worksheetObjectId,V,H));default:throw new c(`Unexpected workbook event: ${i.eventName}`)}case r.Worksheet:switch(null===(s=i.eventName)||void 0===s?void 0:s.toUpperCase()){case t.Activate.toUpperCase():return e();case t.Change.toUpperCase():return e(i.changedCells);case t.Deactivate.toUpperCase():return e();default:throw new c(`Unexpected worksheet event: ${i.eventName}`)}default:throw new c(`Unexpected event target: ${i.eventTarget}`)}})(o,n,e)}))}catch(e){const t=new d(void 0,e);throw f(t),t}var n;return{adapter:{channelName:he,version:l},createWorkbook:ne(ue),getWorkbookById:ie(ue),getWorkbooks:re(ue),getWorksheetById:oe(ue),openWorkbook:se(ue),quit:ae(ue)}},we=e=>{const{message:t,type:n}=e,i="[adapter]";switch(n){case ce.Error:f(t,i);break;case ce.Info:g(i,t);break;case ce.Warn:m(i,t)}},ye=async()=>{try{const e=await o.H.System.getAppAssetInfo({alias:de});return e&&e.version===l}catch(e){return!1}};var fe,ge,me,ve,Ce;!function(e){e.Continuous="Continuous",e.Dash="Dash",e.DashDot="DashDot",e.DashDotDot="DashDotDot",e.Dot="Dot",e.Double="Double",e.SlantDashDot="SlantDashDot",e.None="None"}(fe||(fe={})),function(e){e.Center="Center",e.CenterAcrossSelection="CenterAcrossSelection",e.Distributed="Distributed",e.Fill="Fill",e.General="General",e.Justify="Justify",e.Left="Left",e.Right="Right"}(ge||(ge={})),function(e){e.Automatic="Automatic",e.Checker="Checker",e.CrissCross="CrissCross",e.Down="Down",e.Gray16="Gray16",e.Gray25="Gray25",e.Gray50="Gray50",e.Gray75="Gray75",e.Gray8="Gray8",e.Grid="Grid",e.Horizontal="Horizontal",e.LightDown="LightDown",e.LightHorizontal="LightHorizontal",e.LightUp="LightUp",e.LightVertical="LightVertical",e.LinearGradient="LinearGradient",e.None="None",e.RectangularGradient="RectangularGradient",e.SemiGray75="SemiGray75",e.Solid="Solid",e.Up="Up",e.Vertical="Vertical"}(me||(me={})),function(e){e.Bottom="Bottom",e.Center="Center",e.Distributed="Distributed",e.Justify="Justify",e.Top="Top"}(ve||(ve={})),function(e){e.And="And",e.Or="Or",e.Top10Items="Top10Items",e.Bottom10Items="Bottom10Items",e.Top10Percent="Top10Percent",e.Bottom10Percent="Bottom10Percent",e.FilterValues="FilterValues"}(Ce||(Ce={}))})();var r=i.dq,o=i.MS,s=i.xQ,a=i.sO,c=i.Zu,d=i.I3,h=i.$U,l=i.i0,u=i.cX,p=i._W,w=i.U$,y=i.U7,f=i.rd;

/***/ }),

/***/ "../../node_modules/@openfin/workspace/index.js":
/*!******************************************************!*\
  !*** ../../node_modules/@openfin/workspace/index.js ***!
  \******************************************************/
/***/ ((module) => {

(()=>{"use strict";var e={703:(e,t,n)=>{n.r(t),n.d(t,{CLIAction:()=>l.Pt,CLIFilterOptionType:()=>l.el,CLITemplate:()=>l.yW,deregister:()=>et,hide:()=>nt,register:()=>Ye,show:()=>tt});var o={};n.r(o),n.d(o,{subscribe:()=>ae});var r={};n.r(r),n.d(r,{create:()=>He});var i=n(678),s=n(532),a=n(436);const c="home";var d;!function(e){e.Commands="home-commands"}(d||(d={}));var u,p=n(806),l=(n(298),n(758));n(114),n(109),n(427);!function(e){e[e.Initial=0]="Initial",e[e.Open=1]="Open",e[e.Close=2]="Close"}(u||(u={}));var f=n(316);const w="all",g="0",h="5",y="6",v=()=>{};function m(e,t){return e?`${e}-${t}`:t}function S(e){return`__search-${e}-topic__`}const P=new Map;function C(e,t){P.has(e)||P.set(e,new Set),P.get(e).add(t)}function k(e,t){const n=P.get(e);n&&n.delete(t)}const W=new Map;function R(e,t){W.has(e)||W.set(e,new Set),W.get(e).add(t)}function T(e,t){const n=W.get(e);n&&n.delete(t)}const I=new Map;async function b(e,t){I.has(e)||I.set(e,new Map),I.get(e).set(t.id,t);const n=P.get(e);if(!n)return;const o=[...n].map((e=>e()));await Promise.all(o)}async function D(e,t){const n=I.get(e);if(!n)return;n.delete(t);const o=W.get(e);if(!o)return;const r=[...o].map((e=>e()));await Promise.all(r)}function B(e){return I.get(e)?[...I.get(e).values()]:[]}function F(e){const t=I.get(e);t&&t.clear()}function L(e,t){const n=I.get(e);return n?n.get(t):null}function A(e,t,n){return{...e,action:n||{...e.actions[0],trigger:f.px.UserAction},dispatcherIdentity:t}}function O(e,t,n="ascending"){const o=e||[];if(!t?.length)return o;const r=[],i=new Map;t.forEach((e=>{if(e.key)return i.set(e.key,e);r.push(e)}));let s=o.map((e=>{const{key:t}=e;if(t&&i.has(t)){const e=i.get(t);return i.delete(t),e}return e}));return s.push(...i.values(),...r),s="ascending"===n?s.sort(((e,t)=>(null!==e.score&&void 0!==e.score?e.score:1/0)-(null!==t.score&&void 0!==t.score?t.score:1/0))):s.sort(((e,t)=>(null!==t.score&&void 0!==t.score?t.score:1/0)-(null!==e.score&&void 0!==e.score?e.score:1/0))),s}function x(e){const t={};let n=[];let o=[];let r=u.Initial;t.getStatus=()=>r,t.getResultBuffer=()=>n,t.setResultBuffer=e=>{n=e,n?.length&&t.onChange()},t.getRevokedBuffer=()=>o,t.setRevokedBuffer=e=>{o=e,o?.length&&t.onChange()},t.onChange=v;const i={};return t.res=i,i.close=()=>{r!==u.Close&&(r=u.Close,t.onChange())},i.open=()=>{r!==u.Open&&(r=u.Open,t.onChange())},i.respond=n=>{const o=O(t.getResultBuffer(),n,e);t.setResultBuffer(o)},i.revoke=(...e)=>{const n=new Set(e),o=t.getResultBuffer().filter((({key:e})=>{const t=n.has(e);return t&&n.delete(e),!t}));t.setResultBuffer(o),n.size&&(t.getRevokedBuffer().forEach((e=>n.add(e))),t.setRevokedBuffer([...n]))},t}function E(e,t,n){const o=new Set;let r=!1;return{close:()=>{r=!0;for(const e of o)e()},req:{id:t,topic:e,...n,context:n?.context||{},onClose:e=>{o.add(e),r&&e()},removeListener:e=>{o.delete(e)}}}}function V(){return{name:fin.me.name,uuid:fin.me.uuid}}function M(){let e;try{const t=fin.Platform.getCurrentSync();if(!t?.identity)return;e=t.identity.uuid}catch(e){}return e}const _="deregistered or does not exist",$=new Error(`provider ${_}`),q=new Error("provider with name already exists"),G=new Error("bad payload"),H=new Error("subscription rejected"),N=new Error(`channel ${_}`),U=new Map;function j(e){const t=X(e);if(t)return t;throw N}function X(e){const t=U.get(e);if(t)return t}function K(e,t){U.set(e,t)}const J=new Map;function z(e){J.has(e)||J.set(e,new Map);const t=J.get(e);return{getRequestsForIdentity:e=>{const n=function(e){return`${e.uuid}:${e.name}`}(e);return t.has(n)||t.set(n,new Map),t.get(n)}}}async function Z(e,t){return(await j(e)).dispatch(g,t)}function Q({namespacedTopic:e,topic:t}){const n=L.bind(null,e),o=z(e),r=Z.bind(null,e);return async(e,i)=>{if(!e||!e.id||!e.providerId){const e=G;return{error:e.message}}const{id:s,providerId:a}=e,c=n(a);if(!c){const e=$;return{error:e.message}}const d=o.getRequestsForIdentity(i);let u=d.get(e.id);u||(u=E(t,s,e),d.set(e.id,u));const p=x(),l=()=>{const e=p.getResultBuffer();p.setResultBuffer([]);const t=p.getRevokedBuffer();p.setRevokedBuffer([]);const n=p.getStatus();r({id:s,providerId:a,results:e,revoked:t,status:n})};let f=!0,w=!1;p.onChange=()=>{if(f)return f=!1,void l();w||(w=!0,setTimeout((()=>{w=!1,l()}),100))};try{const{results:e,context:t}=await c.onUserInput(u.req,p.res),n=p.getStatus();return{id:s,providerId:a,status:n,results:e,context:t}}catch(e){return{id:s,providerId:a,error:e.message}}}}async function Y(e,t,n){const o=n||await j(e),r=V(),i={identity:r,...t,onUserInput:void 0,onResultDispatch:void 0},s=await o.dispatch("2",i);return await b(e,{identity:r,...t}),s}async function ee(e,t){const n=await j(e);return await n.dispatch("3",t),D(e,t)}async function te(e,t,n,o){const r=A(n,V(),o),i=L(e,t);if(i){const{onResultDispatch:e}=i;if(!e)return;return e(r)}const s={providerId:t,result:r};return(await j(e)).dispatch(h,s)}async function ne(e,t){const n={...t,context:t?.context||{}},o={},r=async function*(e,t,{setState:n}){const o=await j(e);for(;;){const e=await o.dispatch("1",t),r=e.error;if(r)throw new Error(r);const i=e;if(t.id=i.id,n(i.state),i.done)return i.value;yield i.value}}(e,n,{setState:e=>{o.state=e}});let i=await r.next();return o.id=n.id,o.close=()=>{!async function(e,t){(await j(e)).dispatch(y,{id:t})}(e,o.id)},o.next=()=>{if(i){const e=i;return i=void 0,e}return r.next()},o}async function oe(e){return(await j(e)).dispatch("4",null)}async function re(e){const t=await j(e);var n;n=e,U.delete(n),F(e),await t.disconnect()}function ie(e){const{namespacedTopic:t}=e,n=z(t);return async o=>{if(!X(t))return;const r=n.getRequestsForIdentity(o);for(const{req:e,close:t}of r.values())t(),r.delete(e.id);K(t,(async e=>{const{namespacedTopic:t}=e,n=await se(e);for(const e of B(t))await Y(t,e,n);return n})(e))}}async function se(e){const{namespacedTopic:t}=e,n=S(t),o=await async function(e){for(let t=0;t<50;t++)try{return await fin.InterApplicationBus.Channel.connect(e,{wait:!1})}catch(e){if(49===t)throw e;await new Promise((e=>setTimeout(e,1e3)))}}(n);return o.register(g,Q(e)),o.register(y,function(e){const t=z(e);return(e,n)=>{const o=t.getRequestsForIdentity(n),r=o.get(e.id);r&&(r.close(),o.delete(e.id))}}(t)),o.register(h,function(e){return async(t,n)=>{if(!t||!t.providerId||!t.result)return;const o=L(e,t.providerId);if(!o)return;const{onResultDispatch:r}=o;return r?(t.result.dispatcherIdentity=n,r(t.result)):void 0}}(t)),o.onDisconnection(ie(e)),o}async function ae(e){const t=("string"==typeof e?e:e?.topic)||w,n=("string"==typeof e?null:e?.uuid)||M(),o=m(n,t),r={topic:t,namespace:n,namespacedTopic:o};let i=X(o);return i||(i=se(r),K(o,i),await i),{getAllProviders:oe.bind(null,o),register:Y.bind(null,o),search:ne.bind(null,o),deregister:ee.bind(null,o),dispatch:te.bind(null,o),disconnect:re.bind(null,o)}}const ce=new Map;function de(e){const t=ue(e);if(t)return t;throw N}function ue(e){const t=ce.get(e);if(t)return t}const pe=new Map;function le(e,t){pe.has(e)||pe.set(e,new Set),pe.get(e).add(t)}function fe(e,t){const n=pe.get(e);n&&n.delete(t)}function we(e){return[...B(e)].map((e=>({...e,onUserInput:void 0,onResultDispatch:void 0})))}async function ge(e,t){if(L(e,t.id))throw new Error("provider with name already exists");const n=V();await b(e,{identity:n,...t})}function he(e,t){D(e,t)}async function ye(e,t,n,o){const r=L(e,t);if(!r)throw $;const{onResultDispatch:i}=r;if(!i)return;return i(A(n,V(),o))}async function*ve(e,t,n){const o=function(e,t){const n=[],o=[],r=[],i=[];for(const s of e){const e=x(s.scoreOrder),a={results:[],provider:{id:s.id,identity:s.identity,title:s.title,scoreOrder:s.scoreOrder,icon:s.icon,dispatchFocusEvents:s.dispatchFocusEvents}};n.push(a),o.push(e);const c=(async()=>{try{const{results:n,context:o}=await s.onUserInput(t,e.res);a.results=O(a.results,n),a.context={...a.context,...o}}catch(e){a.error=e}})();c.finally((()=>{c.done=!0})),i.push(c),r.push(r.length)}return{providerResponses:n,listenerResponses:o,openListenerResponses:r,initialResponsePromises:i}}(t.targets?t.targets.map((t=>L(e,t))).filter((e=>!!e)):[...B(e).filter((e=>!e.hidden))],t),{providerResponses:r,listenerResponses:i}=o;let{openListenerResponses:s,initialResponsePromises:a}=o,c=f.De.Fetching;const d=e=>{c=e,n.setState(c)};let p,l=!1;t.onClose((()=>{l=!0,p&&p()}));do{let e=!1;if(a.length){const t=[];for(const n of a)n.done?e=!0:t.push(n);a=t,a.length||(d(f.De.Fetched),e=!0)}let t,n=!1;const o=()=>{n=!0,t&&t()},w=[];for(const t of s){const n=i[t],s=r[t],a=n.getStatus();(a===u.Open||c===f.De.Fetching&&a===u.Initial)&&(w.push(t),n.onChange=o);const d=n.getResultBuffer();d.length&&(n.setResultBuffer([]),s.results=O(s.results,d),e=!0);const p=n.getRevokedBuffer();if(p.length){n.setRevokedBuffer([]);const t=new Set(p);s.results=s.results.filter((({key:e})=>!t.has(e))),e=!0}}if(s=w,e&&(yield r),l)break;n||(s.length||a.length)&&await Promise.race([...a,new Promise((e=>{t=e})),new Promise((e=>{p=e}))])}while(s.length||a.length);return d(f.De.Complete),r}let me=0;function Se({namespacedTopic:e,topic:t},n){me+=1;const o=E(t,me.toString(),n),r=ve(e,o.req,{setState:e=>{r.state=e}});return r.id=me.toString(),r.close=o.close,r.state=f.De.Fetching,r}const Pe=new Map;function Ce(e,t){return`${e}:${t}`}function ke(e){return async(t,...n)=>{if(!t)return{error:G.message};let o;if(t.id)o=Ce(e.namespacedTopic,t.id);else{const n=Se(e,t);o=Ce(e.namespacedTopic,n.id),t.id=n.id,Pe.set(o,{generator:n})}const r=Pe.get(o);clearTimeout(r.timeout);const i=await r.generator.next();return r.timeout=function(e){return window.setTimeout((()=>{Pe.delete(e)}),1e4)}(o),{...i,id:t.id,state:r.generator.state}}}function We(e,t,n){return de(e).dispatch(t,y,{id:n})}function Re(e){return t=>function(e,t){const n=Ce(e,t),o=Pe.get(n);o&&o.generator.close()}(e,t.id)}async function Te(e,t,{id:n,query:o,context:r,targets:i}){const s=de(e),a={id:n,query:o,context:r,targets:i,providerId:t.id},c=await s.dispatch(t.identity,g,a),d=c.error;if(d)throw new Error(d);return c}const Ie=new Map;function be(e,t,n){return`${e}:${t.name}:${t.uuid}:${n}`}const De=new Map;function Be(e,t,n){return`${e}:${t}:${n}`}function Fe(e,t){const n=be.bind(null,e,t.identity),o=We.bind(null,e,t.identity),r=Te.bind(null,e,t);return async(i,s)=>{const a=n(i.id);if(!Ie.has(a)){const e=()=>{o(i.id),Ie.delete(a)};Ie.set(a,e),i.onClose(e)}const c=Be(e,t.id,i.id),d=()=>{De.delete(c),s.close()};i.onClose(d),De.set(c,(e=>{e.results?.length&&s.respond(e.results),e.revoked?.length&&s.revoke(...e.revoked),e.status===u.Open&&s.open(),e.status===u.Close&&d()}));const p=await r(i);return p.status===u.Open&&s.open(),p.status!==u.Close&&p.status!==u.Initial||d(),p}}function Le(e,t){return async n=>{const o=de(e),r={providerId:t.id,result:n};return o.dispatch(t.identity,h,r)}}const Ae=new Map;function Oe(e,t){return`${e}-${t.name}-${t.uuid}`}function xe(e){return async(t,n)=>{if(!t||!t.id)return void new Error(JSON.stringify(t));if(L(e,t.id))throw q;return t.identity=n,await async function(e,t){const n=Oe(e,t.identity);Ae.has(n)||Ae.set(n,[]),Ae.get(n).push(t.id),await b(e,{...t,onUserInput:Fe(e,t),onResultDispatch:Le(e,t)})}(e,t),{workspaceVersion:i.u0,clientAPIVersion:t.clientAPIVersion}}}function Ee(e){return t=>{t&&function(e,t){const n=L(e,t);if(!n)return;const o=Oe(e,n.identity),r=Ae.get(o);if(r){const n=r.findIndex((e=>e===t));-1!==n&&(r.splice(n,1),D(e,t))}}(e,t)}}const Ve=new Map;function Me(e,t){Ve.has(e)||Ve.set(e,new Set),Ve.get(e).add(t)}function _e(e,t){const n=Ve.get(e);n&&n.delete(t)}function $e(e){return async t=>{!function(e,t){const n=Oe(e,t),o=Ae.get(n);if(o){for(const t of o)D(e,t);Ae.delete(n)}}(e,t);const n=Ve.get(e);n&&n.forEach((e=>e(t)))}}async function qe(e){const{namespacedTopic:t}=e,n=S(e.namespacedTopic),o=await(r=n,fin.InterApplicationBus.Channel.create(r));var r;return o.onConnection(function({namespacedTopic:e}){return async t=>{const n=pe.get(e);if(n)for(const e of n)if(!await e(t))throw H}}(e)),o.onDisconnection($e(t)),o.register(y,Re(t)),o.register(g,function(e){return t=>{const n=Be(e,t.providerId,t.id),o=De.get(n);o&&o(t)}}(t)),o.register("2",xe(t)),o.register("3",Ee(t)),o.register("4",function(e){return async()=>we(e)}(t)),o.register("1",ke(e)),o.register(h,function(e){return async(t,n)=>{if(!t||!t.providerId||!t.result)return;const o=L(e,t.providerId);if(!o)throw $;const{onResultDispatch:r}=o;return r?(t.result.dispatcherIdentity=n,r(t.result)):void 0}}(t)),o}async function Ge(e){const t=de(e);var n;n=e,ce.delete(n),await t.destroy(),F(e)}async function He(e){const t=("string"==typeof e?e:e?.topic)||w,n=M(),o=m(n,t),r={topic:t,namespace:n,namespacedTopic:o};let i=ue(o);i||(i=await qe(r),function(e,t){ce.set(e,t)}(o,i));const s=fe.bind(null,o),a=_e.bind(null,o),c=k.bind(null,o),d=T.bind(null,o);return{getAllProviders:we.bind(null,o),search:Se.bind(null,r),register:ge.bind(null,o),deregister:he.bind(null,o),onSubscription:le.bind(null,o),onDisconnect:Me.bind(null,o),onRegister:C.bind(null,o),onDeregister:R.bind(null,o),dispatch:ye.bind(null,r),disconnect:Ge.bind(null,o),removeListener:e=>{s(e),a(e),c(e),d(e)}}}const{create:Ne}=r,{subscribe:Ue}=o,je={create:Ne,subscribe:Ue,defaultTopic:"all"},Xe=()=>{window.search=je},Ke=e=>{const t=()=>{Xe(),window.removeEventListener(e,t)};return t};if("undefined"!=typeof window){Xe();const e="load",t=Ke(e);window.addEventListener(e,t);const n="DOMContentLoaded",o=Ke(n);window.addEventListener(n,o)}const Je=new Map;async function ze(){await async function(e){Je.set(e,await Ue({topic:e,uuid:p.q9.Workspace}))}(c)}let Ze;async function Qe(e){return await async function(){return Ze||(Ze=ze()),Ze}(),Je.get(e)}const Ye=async e=>{if(!e.icon)throw new Error(`${e.id} provider needs to have icon property defined.`);await(0,a.aB)();const t=await Qe(c);try{e.clientAPIVersion=i.u0;const n=await t.register(e);return(0,s.ck)({allowed:!0,componentVersion:n?.workspaceVersion}),n}catch(e){throw(0,s.ck)({allowed:!1,rejectionCode:e.message}),e}},et=async e=>{await(0,a.aB)();return(await Qe(c)).deregister(e)};async function tt(){return(await(0,a.Xl)()).dispatch(a.WF.ShowHome,void 0)}async function nt(){return(await(0,a.Xl)()).dispatch(a.WF.HideHome,void 0)}},298:(e,t,n)=>{n.d(t,{p:()=>o.px,w:()=>o.wt});var o=n(316)},427:(e,t,n)=>{var o;n.d(t,{v:()=>o}),function(e){e.ActionButton="ActionButton",e.DropdownButton="DropdownButton"}(o||(o={}))},758:(e,t,n)=>{var o,r,i;n.d(t,{Pt:()=>o,el:()=>i,yW:()=>r}),function(e){e.Suggestion="suggestion"}(o||(o={})),function(e){e.Contact="Contact",e.Custom="Custom",e.List="List",e.Plain="Plain",e.SimpleText="SimpleText",e.Loading="Loading",e.Error="Error"}(r||(r={})),function(e){e.MultiSelect="MultiSelect"}(i||(i={}))},114:(e,t,n)=>{var o,r;n.d(t,{L:()=>o,T:()=>r}),function(e){e.Snapshot="snapshot",e.Manifest="manifest",e.View="view",e.External="external"}(o||(o={})),function(e){e.LandingPage="landingPage",e.AppGrid="appGrid"}(r||(r={}))},109:(e,t,n)=>{n.d(t,{Go:()=>r,ZJ:()=>s,bI:()=>i,p6:()=>o});const o={Container:"Container",Button:"Button"},r={Text:"Text",Image:"Image",List:"List"},i={...o,...r};var s;!function(e){e.Primary="primary",e.Secondary="secondary",e.TextOnly="textOnly"}(s||(s={}))},528:(e,t,n)=>{n.r(t),n.d(t,{AppManifestType:()=>s.L,StorefrontTemplate:()=>s.T,deregister:()=>g,hide:()=>h,register:()=>w,show:()=>y});var o=n(532),r=n(436),i=n(82),s=n(114),a=n(678);let c,d=!1;async function u(e,t,n){const o=await(0,r.Dm)();try{return await o.dispatch(e.action,e.payload)}catch(r){if(-1!==r.toString().indexOf(e.action))return d=!0,await o.dispatch(t.action,t.payload),n;throw r}}const p=new Map,l=e=>{if(!p.has(e))throw new Error(`Storefront Provider with id ${e} is not registered`);return p.get(e)},f=async e=>{const t=await(0,r.Xl)();if(p.has(e.id))throw new Error(`Storefront provider with id ${e.id} already registered`);return p.set(e.id,e),(e=>{e.isStorefrontActionsRegistered||(e.isStorefrontActionsRegistered=!0,e.register(r.WF.GetStorefrontProviderApps,(e=>l(e).getApps())),e.register(r.WF.GetStorefrontProviderFooter,(e=>l(e).getFooter())),e.register(r.WF.GetStorefrontProviderLandingPage,(e=>l(e).getLandingPage())),e.register(r.WF.GetStorefrontProviderNavigation,(e=>l(e).getNavigation())),e.register(r.WF.LaunchStorefrontProviderApp,(({id:e,app:t})=>l(e).launchApp(t))))})(t),e.clientAPIVersion=a.u0,u({action:r.WF.RegisterProvider,payload:{providerType:i.lP.Storefront,info:e}},{action:r.WF.RegisterStorefrontProvider,payload:e},{workspaceVersion:"unknown"})},w=e=>(c=new Promise((async(t,n)=>{try{const n=await f(e);(0,o.d9)({allowed:!0,componentVersion:n?.workspaceVersion}),t({clientAPIVersion:a.u0,workspaceVersion:n.workspaceVersion||""})}catch(e){(0,o.d9)({allowed:!1,rejectionCode:e.message}),n(e)}})),c),g=async e=>(await c,p.delete(e),await(0,r.aB)(),u({action:r.WF.DeregisterProvider,payload:{providerType:i.lP.Storefront,id:e}},{action:r.WF.DeregisterStorefrontProvider,payload:e})),h=async()=>(await c,await(0,r.aB)(),u({action:r.WF.HideProviderWindow,payload:{providerType:i.lP.Storefront}},{action:r.WF.HideStorefront})),y=async()=>(await c,await(0,r.aB)(),u({action:r.WF.ShowProviderWindow,payload:{providerType:i.lP.Storefront}},{action:r.WF.ShowStorefront}))},436:(e,t,n)=>{n.d(t,{WF:()=>s,Dm:()=>a,Xl:()=>p,aB:()=>u});var o=n(678);const r=o.Ax&&"complete"!==document.readyState&&new Promise((e=>document.addEventListener("readystatechange",(()=>{"complete"===document.readyState&&e()}))));var i=n(121);var s;!function(e){e.RegisterProvider="register-provider",e.DeregisterProvider="deregister-provider",e.CreateProviderWindow="create-provider-window",e.GetProviders="get-providers",e.ShowProviderWindow="show-provider-window",e.HideProviderWindow="hide-provider-window",e.GetStorefrontProviderApps="get-storefront-provider-apps",e.GetStorefrontProviderLandingPage="get-storefront-provider-landing-page",e.GetStorefrontProviderFooter="get-storefront-provider-footer",e.GetStorefrontProviderNavigation="get-storefront-provider-navigation",e.LaunchStorefrontProviderApp="launch-storefront-provider-app",e.ShowHome="show-home",e.HideHome="hide-home",e.AssignHomeSearchContext="assign-home-search-context",e.GetLegacyPages="get-legacy-pages",e.GetLegacyWorkspaces="get-legacy-workspaces",e.GetComputedPlatformTheme="get-computed-platform-theme",e.RegisterStorefrontProvider="register-storefront-provider",e.DeregisterStorefrontProvider="deregister-storefront-provider",e.HideStorefront="hide-storefront",e.ShowStorefront="show-storefront"}(s||(s={}));const a=function(e){let t;return()=>{if(!o.sS)throw new Error("getChannelClient cannot be used outside an OpenFin env. Avoid using this method during pre-rendering.");return t||(t=(async()=>{await r;const n={clientAPIVersion:o.u0},i=await fin.InterApplicationBus.Channel.connect(e,{payload:n});return i.onDisconnection((async()=>{t=void 0})),i})().then((e=>e)).catch((n=>{throw t=void 0,new Error(`failed to connect to channel provider ${e}: ${n}`)}))),t}}("__of_workspace_protocol__"),c="isLaunchedViaLib",d=e=>{const t=new URL(e);return t.searchParams.append(c,"true"),t.toString()},u=async()=>{if(!await(0,i.JV)(i.iW))return(o.ZK||-1===navigator.userAgent.indexOf("Win"))&&await fin.Application.startFromManifest(d(o.aW)),fin.System.openUrlWithBrowser(d(o.GX))},p=async()=>(await u(),a())},82:(e,t,n)=>{n.d(t,{R8:()=>s,X_:()=>i,lP:()=>o});var o,r=n(436);!function(e){e.Storefront="storefront",e.Dock="dock"}(o||(o={}));const i=async e=>(await(0,r.Dm)()).dispatch(r.WF.ShowProviderWindow,{providerType:e}),s=async e=>(await(0,r.Dm)()).dispatch(r.WF.HideProviderWindow,{providerType:e})},806:(e,t,n)=>{n.d(t,{q9:()=>o});var o,r,i,s=n(678);!function(e){e.Workspace="openfin-browser"}(o||(o={})),function(e){e.RunRequested="run-requested",e.WindowOptionsChanged="window-options-changed",e.WindowClosed="window-closed",e.WindowCreated="window-created"}(r||(r={})),function(e){e.FinProtocol="fin-protocol"}(i||(i={}));s.AB,o.Workspace},678:(e,t,n)=>{var o;n.d(t,{AB:()=>a,Ax:()=>i,GX:()=>u,ZK:()=>d,aW:()=>p,oC:()=>c,sS:()=>r,u0:()=>f}),function(e){e.Local="local",e.Dev="dev",e.Staging="staging",e.Prod="prod"}(o||(o={}));const r="undefined"!=typeof window&&"undefined"!=typeof fin,i=("undefined"==typeof process||process.env?.JEST_WORKER_ID,"undefined"!=typeof window),s=i?window.origin:o.Local,a=r&&fin.me.uuid,c=r&&fin.me.name,d=(r&&fin.me.entityType,"prod"===o.Local),u=(o.Dev,o.Staging,o.Prod,"fins://system-apps/workspace"),p="https://cdn.openfin.co/workspace/9.0.5/app.json",l=e=>e.startsWith("http://")||e.startsWith("https://")?e:s+e,f=(l("https://cdn.openfin.co/workspace/9.0.5"),l("https://cdn.openfin.co/workspace/9.0.5"),"undefined"!=typeof WORKSPACE_DOCS_PLATFORM_URL&&l(WORKSPACE_DOCS_PLATFORM_URL),"undefined"!=typeof WORKSPACE_DOCS_CLIENT_URL&&l(WORKSPACE_DOCS_CLIENT_URL),"9.0.5")},532:(e,t,n)=>{n.d(t,{Wn:()=>d,ck:()=>a,d9:()=>c});var o,r=n(678),i=n(121);!function(e){e.Browser="Browser",e.Dock="Dock",e.Home="Home",e.Notification="Notification",e.Storefront="Storefront",e.Platform="Platform",e.Theming="Theming"}(o||(o={}));const s=async(e,t)=>{const n={apiVersion:t.apiVersion||r.u0,componentName:e,componentVersion:t.componentVersion||r.u0,allowed:t.allowed,rejectionCode:t.rejectionCode};fin.System.registerUsage({type:"workspace-licensing",data:n})},a=async e=>{i.OI.uuid===i.Gi.uuid&&i.OI.name===i.Gi.name||s(o.Home,e)},c=async e=>{s(o.Storefront,e)},d=async e=>{s(o.Dock,e)}},121:(e,t,n)=>{n.d(t,{Gi:()=>c,JV:()=>p,OI:()=>d,iW:()=>u});var o,r,i=n(806),s=n(678);!function(e){e.Home="openfin-home",e.Dock="openfin-dock",e.Storefront="openfin-storefront",e.HomeInternal="openfin-home-internal",e.BrowserMenu="openfin-browser-menu",e.BrowserIndicator="openfin-browser-indicator",e.BrowserWindow="internal-generated-window"}(o||(o={})),function(e){e.Shown="shown",e.BoundsChanged="bounds-changed",e.LayoutReady="layout-ready",e.EndUserBoundsChanging="end-user-bounds-changing",e.Blurred="blurred",e.Closed="closed",e.CloseRequested="close-requested",e.Focused="focused",e.ShowRequested="show-requested",e.ViewCrashed="view-crashed",e.ViewAttached="view-attached",e.ViewDetached="view-detached",e.ViewPageTitleUpdated="view-page-title-updated",e.ViewDestroyed="view-destroyed",e.OptionsChanged="options-changed"}(r||(r={}));function a(e){if(!s.sS)throw new Error("getOFWindow can only be used in an OpenFin env. Avoid calling this method during pre-rendering.");return fin.Window.wrapSync(e)}const c={name:s.oC,uuid:s.AB};const d={name:o.Home,uuid:i.q9.Workspace},u=(o.Dock,i.q9.Workspace,o.Storefront,i.q9.Workspace,{name:i.q9.Workspace,uuid:i.q9.Workspace});const p=e=>a(e).getOptions().then((()=>!0)).catch((()=>!1))},316:(e,t,n)=>{var o,r,i;n.d(t,{De:()=>o,px:()=>r,wt:()=>i}),function(e){e.Fetching="fetching",e.Fetched="fetched",e.Complete="complete"}(o||(o={})),function(e){e.UserAction="user-action",e.FocusChange="focus-change",e.Reload="reload"}(r||(r={})),function(e){e.Active="active",e.Default="default"}(i||(i={}))}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};(()=>{n.r(o),n.d(o,{ActionTrigger:()=>P.p,AppManifestType:()=>W.L,ButtonStyle:()=>C.ZJ,CLIAction:()=>k.Pt,CLIFilterOptionType:()=>k.el,CLITemplate:()=>k.yW,ContainerTemplateFragmentNames:()=>C.p6,Dock:()=>e,DockButtonNames:()=>c.v,Home:()=>h,Legacy:()=>t,PresentationTemplateFragmentNames:()=>C.Go,SearchTagBackground:()=>P.w,Storefront:()=>S,StorefrontTemplate:()=>W.T,TemplateFragmentTypes:()=>C.bI});var e={};n.r(e),n.d(e,{DockButtonNames:()=>c.v,deregister:()=>l,minimize:()=>f,register:()=>p,show:()=>w});var t={};n.r(t),n.d(t,{getPages:()=>v,getWorkspaces:()=>m});var r=n(678),i=n(532),s=n(436),a=n(82),c=n(427);let d,u=!1;const p=e=>(d=new Promise((async(t,n)=>{try{const n=await(async e=>{const t=await(0,s.Xl)();if(u)throw new Error("A dock provider for the platform is already registered.");return u=!0,e.clientAPIVersion=r.u0,t.dispatch(s.WF.RegisterProvider,{providerType:a.lP.Dock,info:e})})(e);(0,i.Wn)({allowed:!0,componentVersion:n?.workspaceVersion}),t({clientAPIVersion:r.u0,workspaceVersion:n.workspaceVersion||""})}catch(e){(0,i.Wn)({allowed:!1,rejectionCode:e.message}),n(e),d=null}})),d),l=async()=>{await d,u=!1;return(await(0,s.Xl)()).dispatch(s.WF.DeregisterProvider,{providerType:a.lP.Dock})},f=async()=>{await d,await(0,s.aB)(),await(0,a.R8)(a.lP.Dock)},w=async()=>{await d,await(0,s.aB)(),await(0,a.X_)(a.lP.Dock)};var g,h=n(703);n(121);!function(e){e.TabCreated="tab-created",e.ContainerCreated="container-created",e.ContainerResized="container-resized"}(g||(g={}));new Map;var y;!function(e){e.CurrentWorkspaceId="currentWorkspaceId",e.LastFocusedBrowserWindow="lastFocusedBrowserWindow",e.MachineName="machineName",e.NewTabPageLayout="NewTabPageLayout",e.NewTabPageSort="NewTabPageSort",e.DockPosition="DockPosition"}(y||(y={}));const v=()=>async function(){return(await(0,s.Dm)()).dispatch(s.WF.GetLegacyPages,void 0)}(),m=()=>(async()=>(await(0,s.Dm)()).dispatch(s.WF.GetLegacyWorkspaces,void 0))();var S=n(528),P=n(298),C=n(109),k=n(758),W=n(114)})(),module.exports=o})();
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/events/events.js":
/*!*******************************************!*\
  !*** ../../node_modules/events/events.js ***!
  \*******************************************/
/***/ ((module) => {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };

    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}


/***/ }),

/***/ "./client/src/integrations/excel/integration-provider.ts":
/*!***************************************************************!*\
  !*** ./client/src/integrations/excel/integration-provider.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExcelIntegrationProvider": () => (/* binding */ ExcelIntegrationProvider)
/* harmony export */ });
/* harmony import */ var _openfin_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openfin/core */ "../../node_modules/@openfin/core/src/mock.js");
/* harmony import */ var _openfin_excel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @openfin/excel */ "../../node_modules/@openfin/excel/openfin.excel.js");
/* harmony import */ var _openfin_workspace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @openfin/workspace */ "../../node_modules/@openfin/workspace/index.js");
/* harmony import */ var _openfin_workspace__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_openfin_workspace__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Implement the integration provider for Excel.
 */
class ExcelIntegrationProvider {
    /**
     * The module is being registered.
     * @param integrationManager The manager for the integration.
     * @param integration The integration details.
     * @returns Nothing.
     */
    async register(integrationManager, integration) {
        this._integrationManager = integrationManager;
        const brokerClient = _openfin_core__WEBPACK_IMPORTED_MODULE_0__.fin.Interop.connectSync(_openfin_core__WEBPACK_IMPORTED_MODULE_0__.fin.me.identity.uuid, {});
        const contextGroups = await brokerClient.getContextGroups();
        this._interopClients = {};
        for (const contextGroup of contextGroups) {
            const contextClient = _openfin_core__WEBPACK_IMPORTED_MODULE_0__.fin.Interop.connectSync(_openfin_core__WEBPACK_IMPORTED_MODULE_0__.fin.me.identity.uuid, {});
            await contextClient.joinContextGroup(contextGroup.id);
            await contextClient.addContextHandler(async (ctx) => {
                await this.handleContext(integration, contextGroup.id, ctx);
            });
            this._interopClients[contextGroup.id] = contextClient;
        }
        (0,_openfin_excel__WEBPACK_IMPORTED_MODULE_1__.enableLogging)();
    }
    /**
     * The module is being deregistered.
     * @param integration The integration details.
     * @returns Nothing.
     */
    async deregister(integration) {
        for (const client in this._interopClients) {
            await this._interopClients[client].removeFromContextGroup();
        }
        this._interopClients = {};
    }
    /**
     * Get a list of the static application entries.
     * @param integration The integration details.
     * @returns The list of application entries.
     */
    async getAppSearchEntries(integration) {
        return integration?.data?.assets.map((a) => this.createResult(integration, a));
    }
    /**
     * An entry has been selected.
     * @param integration The integration details.
     * @param result The dispatched result.
     * @param lastResponse The last response.
     * @returns True if the item was handled.
     */
    async itemSelection(integration, result, lastResponse) {
        if (result.action.name === ExcelIntegrationProvider._EXCEL_PROVIDER_OPEN_KEY_ACTION &&
            result.data.workbook &&
            this._integrationManager.launchAsset) {
            const excelAsset = result.data;
            await this._integrationManager.launchAsset({
                alias: excelAsset.workbook
            });
            const excel = await this.getExcel();
            if (excel) {
                const workbooks = await excel.getWorkbooks();
                for (const workbook of workbooks) {
                    const name = await workbook.getName();
                    if (name === excelAsset.workbook) {
                        for (const worksheetSettings of excelAsset.worksheets) {
                            const worksheet = await workbook.getWorksheetByName(worksheetSettings.name);
                            await worksheet.addEventListener("change", async (cells) => {
                                await this.handleCellChanges(excelAsset, worksheetSettings, cells);
                            });
                        }
                    }
                }
                return true;
            }
        }
        return false;
    }
    /**
     * Get a list of search results based on the query and filters.
     * @param integration The integration details.
     * @param query The query to search for.
     * @param filters The filters to apply.
     * @param lastResponse The last search response used for updating existing results.
     * @returns The list of results and new filters.
     */
    async getSearchResults(integration, query, filters, lastResponse) {
        const results = [];
        return {
            results
        };
    }
    /**
     * Create a search result.
     * @param integration The integration details.
     * @param excelAsset The excel document asset alias.
     * @returns The search result.
     */
    createResult(integration, excelAsset) {
        return {
            key: `excel-${excelAsset.workbook}`,
            title: excelAsset.title,
            label: "Excel",
            icon: integration.icon,
            actions: [
                {
                    name: ExcelIntegrationProvider._EXCEL_PROVIDER_OPEN_KEY_ACTION,
                    hotkey: "Enter"
                }
            ],
            data: {
                providerId: ExcelIntegrationProvider._PROVIDER_ID,
                ...excelAsset
            },
            template: _openfin_workspace__WEBPACK_IMPORTED_MODULE_2__.CLITemplate.SimpleText,
            templateContent: excelAsset.description
        };
    }
    /**
     * Get the excel application.
     * @returns The application.
     * @internal
     */
    async getExcel() {
        try {
            this._excel = await (0,_openfin_excel__WEBPACK_IMPORTED_MODULE_1__.getExcelApplication)();
            return this._excel;
        }
        catch (err) {
            console.error("Error getting Excel application", err);
        }
    }
    /**
     * Handle the cell changes.
     * @param excelAsset The asset to use for processing the cell changes.
     * @param worksheetName The asset to use for processing the cell changes.
     * @param cells The cells that have changed.
     */
    async handleCellChanges(excelAsset, worksheet, cells) {
        if (worksheet.cellHandlers) {
            for (const cell of cells) {
                const cellHandler = worksheet.cellHandlers.find((c) => c.cell === cell.address);
                if (cellHandler) {
                    const client = this._interopClients[cellHandler.contextGroup];
                    if (client &&
                        (cellHandler.types.includes("instrument") || cellHandler.types.includes("fdc3.instrument"))) {
                        await client.setContext({
                            type: "fdc3.instrument",
                            id: {
                                ticker: cell.value,
                                _source: `excel.${excelAsset.workbook}.${worksheet.name}`
                            }
                        });
                    }
                }
            }
        }
    }
    /**
     * Handle a context.
     * @param integration The integration details.
     * @param contextGroup The group receiving the context.
     * @param context The context being received.
     */
    async handleContext(integration, contextGroup, context) {
        if (integration.data?.assets) {
            const excel = await this.getExcel();
            if (excel) {
                const workbooks = await excel.getWorkbooks();
                for (const workbook of workbooks) {
                    const workbookName = await workbook.getName();
                    const connectedWorkbook = integration.data?.assets.find((a) => a.workbook === workbookName);
                    if (connectedWorkbook?.worksheets) {
                        for (const worksheetSettings of connectedWorkbook.worksheets) {
                            if (worksheetSettings.cellHandlers) {
                                const incomingSource = `excel.${workbookName}.${worksheetSettings.name}`;
                                if (incomingSource !== context?.id?._source) {
                                    const cellHandlers = worksheetSettings.cellHandlers?.filter((ch) => ch.contextGroup === contextGroup && ch.types.includes(context.type));
                                    for (const cellHandler of cellHandlers) {
                                        const worksheet = await workbook.getWorksheetByName(worksheetSettings.name);
                                        let cellValue;
                                        if (context.type === "fdc3.instrument" || context.type === "instrument") {
                                            cellValue = context.id?.ticker;
                                        }
                                        if (cellValue !== undefined) {
                                            await worksheet.setCellValues(cellHandler.cell, [[cellValue]]);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
/**
 * Provider id.
 * @internal
 */
ExcelIntegrationProvider._PROVIDER_ID = "excel";
/**
 * The key to use for a sheet open action.
 * @internal
 */
ExcelIntegrationProvider._EXCEL_PROVIDER_OPEN_KEY_ACTION = "Open Excel";


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
/******/ 	__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		var getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ })();
/******/ 
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
/*!************************************************!*\
  !*** ./client/src/integrations/excel/index.ts ***!
  \************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "integration": () => (/* binding */ integration)
/* harmony export */ });
/* harmony import */ var _integration_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./integration-provider */ "./client/src/integrations/excel/integration-provider.ts");

const integration = new _integration_provider__WEBPACK_IMPORTED_MODULE_0__.ExcelIntegrationProvider();

})();

var __webpack_exports__integration = __webpack_exports__.integration;
export { __webpack_exports__integration as integration };
