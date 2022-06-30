/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../node_modules/@openfin/workspace-platform/index.js":
/*!***************************************************************!*\
  !*** ../../node_modules/@openfin/workspace-platform/index.js ***!
  \***************************************************************/
/***/ ((module) => {

(()=>{"use strict";var e,t,a,n,o,i,r,s,c={d:(e,t)=>{for(var a in t)c.o(t,a)&&!c.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},d={};c.r(d),c.d(d,{AppManifestType:()=>r,BrowserButtonType:()=>g,CustomActionCallerType:()=>h,GlobalContextMenuOptionType:()=>l,PageTabContextMenuOptionType:()=>w,SaveButtonContextMenuOptionType:()=>y,SaveModalType:()=>f,ViewTabMenuOptionType:()=>u,getCurrentSync:()=>Et,init:()=>gn,wrapSync:()=>Mt}),function(e){e.Fetching="fetching",e.Fetched="fetched",e.Complete="complete"}(e||(e={})),function(e){e.UserAction="user-action",e.FocusChange="focus-change",e.Reload="reload"}(t||(t={})),function(e){e.Active="active",e.Default="default"}(a||(a={})),function(e){e.Suggestion="suggestion"}(n||(n={})),function(e){e.Contact="Contact",e.Custom="Custom",e.List="List",e.Plain="Plain",e.SimpleText="SimpleText",e.Loading="Loading",e.Error="Error"}(o||(o={})),function(e){e.MultiSelect="MultiSelect"}(i||(i={})),function(e){e.Snapshot="snapshot",e.Manifest="manifest",e.View="view",e.External="external"}(r||(r={})),function(e){e.LandingPage="landingPage",e.AppGrid="appGrid"}(s||(s={}));var p,l,w,u,g,y,h,f,m;!function(e){e.Primary="primary",e.Secondary="secondary",e.TextOnly="textOnly"}(p||(p={})),function(e){e.NewWindow="NewWindow",e.NewPage="NewPage",e.SavePage="SavePage",e.SavePageAs="SavePageAs",e.CloseWindow="CloseWindow",e.RestoreChanges="RestoreChanges",e.SaveWorkspace="SaveWorkspace",e.SaveWorkspaceAs="SaveWorkspaceAs",e.RenameWorkspace="RenameWorkspace",e.SwitchWorkspace="SwitchWorkspace",e.DeleteWorkspace="DeleteWorkspace",e.OpenStorefront="OpenStorefront",e.Quit="Quit",e.Custom="Custom"}(l||(l={})),function(e){e.Close="Close",e.Duplicate="Duplicate",e.Rename="Rename",e.Save="Save",e.SaveAs="Save As",e.Custom="Custom"}(w||(w={})),function(e){e.NewView="NewView",e.DuplicateViews="DuplicateView",e.OpenWithDefaultBrowser="OpenWithDefaultBrowser",e.ReloadViews="ReloadTab",e.CloseViews="CloseTab",e.AddToChannel="AddToChannel",e.RemoveFromChannel="RemoveFromChannel",e.Custom="Custom"}(u||(u={})),function(e){e.ShowHideTabs="ShowHideTabs",e.ColorLinking="ColorLinking",e.PresetLayouts="PresetLayouts",e.LockUnlockPage="LockUnlockPage",e.SaveMenu="SaveMenu",e.SavePage="SavePage",e.Minimise="Minimise",e.Maximise="Maximise",e.Close="Close",e.Custom="Custom"}(g||(g={})),function(e){e.SavePage="SavePage",e.SaveWorkspace="SaveWorkspace",e.SavePageAs="SavePageAs",e.SaveWorkspaceAs="SaveWorkspaceAs",e.Custom="Custom"}(y||(y={})),function(e){e.CustomButton="CustomButton",e.GlobalContextMenu="GlobalContextMenu",e.ViewTabContextMenu="ViewTabContextMenu",e.PageTabContextMenu="PageTabContextMenu",e.SaveButtonContextMenu="SaveButtonContextMenu",e.API="API"}(h||(h={})),function(e){e.SAVE_PAGE="SAVE_PAGE",e.SAVE_WORKSPACE="SAVE_WORKSPACE",e.SAVE_PAGE_AS="SAVE_PAGE_AS",e.SAVE_WORKSPACE_AS="SAVE_WORKSPACE_AS",e.RENAME_PAGE="RENAME_PAGE",e.RENAME_WORKSPACE="RENAME_WORKSPACE"}(f||(f={})),function(e){e.Local="local",e.Dev="dev",e.Staging="staging",e.Prod="prod"}(m||(m={}));const S="undefined"!=typeof window&&"undefined"!=typeof fin,v=("undefined"==typeof process||process.env?.JEST_WORKER_ID,"undefined"!=typeof window),P=v&&"undefined"!=typeof indexedDB,k=v?window.origin:m.Local,b=S&&fin.me.uuid,W=S&&fin.me.name,C=S&&fin.me.entityType,I=(m.Local,m.Dev,m.Staging,m.Prod,e=>e.startsWith("http://")||e.startsWith("https://")?e:k+e),A=(I("https://cdn.openfin.co/workspace/8.1.7"),I("https://cdn.openfin.co/workspace/8.1.7")),T=("undefined"!=typeof WORKSPACE_DOCS_PLATFORM_URL&&I(WORKSPACE_DOCS_PLATFORM_URL),"undefined"!=typeof WORKSPACE_DOCS_CLIENT_URL&&I(WORKSPACE_DOCS_CLIENT_URL),"26.102.70.16"),M="8.1.7";var E,O,B;!function(e){e.Workspace="openfin-browser"}(E||(E={})),function(e){e.RunRequested="run-requested",e.WindowOptionsChanged="window-options-changed",e.WindowClosed="window-closed",e.WindowCreated="window-created"}(O||(O={})),function(e){e.FinProtocol="fin-protocol"}(B||(B={}));const R={uuid:b,name:b},L=(E.Workspace,E.Workspace,e=>{if(!S)throw new Error("getApplication cannot be used in a non OpenFin env. Avoid using this during pre-rendering.");return fin.Application.wrapSync(e)}),x=()=>L(R);var V,U;!function(e){e.Home="openfin-home",e.Dock="openfin-dock",e.Storefront="openfin-storefront",e.HomeInternal="openfin-home-internal",e.BrowserMenu="openfin-browser-menu",e.BrowserIndicator="openfin-browser-indicator",e.BrowserWindow="internal-generated-window"}(V||(V={})),function(e){e.Shown="shown",e.BoundsChanged="bounds-changed",e.LayoutReady="layout-ready",e.EndUserBoundsChanging="end-user-bounds-changing",e.Blurred="blurred",e.CloseRequested="close-requested",e.Focused="focused",e.ShowRequested="show-requested",e.ViewCrashed="view-crashed",e.ViewAttached="view-attached",e.ViewDetached="view-detached",e.ViewPageTitleUpdated="view-page-title-updated",e.ViewDestroyed="view-destroyed",e.OptionsChanged="options-changed"}(U||(U={}));function D(e){if(!S)throw new Error("getOFWindow can only be used in an OpenFin env. Avoid calling this method during pre-rendering.");return fin.Window.wrapSync(e)}const _={name:W,uuid:b};function F(){return D(_)}V.Home,E.Workspace,V.Dock,E.Workspace;const G={name:V.Storefront,uuid:E.Workspace};E.Workspace,E.Workspace;async function N(e){const t=D(e);"minimized"===await t.getState()&&await t.restore(),await t.show(),await t.bringToFront(),await t.focus()}const $=e=>e.startsWith(V.BrowserWindow);async function H(){return(await fin.Application.getCurrentSync().getChildWindows()).filter((e=>$(e.identity.name)))}const q=e=>D(e).getOptions().then((()=>!0)).catch((()=>!1)),K=()=>q(G);var j;!function(e){e.Browser="Browser",e.Home="Home",e.Notification="Notification",e.Storefront="Storefront",e.Platform="Platform",e.Theming="Theming"}(j||(j={}));const z=async(e,t)=>{const a={apiVersion:t.apiVersion||M,componentName:e,componentVersion:M,...t};fin.System.registerUsage({type:"workspace-licensing",data:a})};var Q;!function(e){e.CurrentWorkspaceId="currentWorkspaceId",e.LastFocusedBrowserWindow="lastFocusedBrowserWindow",e.MachineName="machineName",e.NewTabPageLayout="NewTabPageLayout",e.NewTabPageSort="NewTabPageSort"}(Q||(Q={}));const J=Q;var X;!function(e){e.LaunchApp="launchApp",e.SavePage="savePage",e.GetSavedPage="getSavedPage",e.CreateSavedPage="createSavedPage",e.UpdateSavedPage="updateSavedPage",e.DeleteSavedPage="deleteSavedPage",e.GetSavedPages="getSavedPages",e.CreateSavedPageInternal="createSavedPageInternal",e.UpdateSavedPageInternal="updateSavedPageInternal",e.DeleteSavedPageInternal="deleteSavedPageInternal",e.SharePage="sharePage",e.UpdatePageForWindow="updatePageForWindow",e.AttachPagesToWindow="attachPagesToWindow",e.DetachPagesFromWindow="detachPagesFromWindow",e.ReorderPagesForWindow="reorderPagesForWindow",e.SetActivePage="setActivePage",e.GetAllAttachedPages="getAllAttachedPages",e.GetActivePageIdForWindow="getActivePageIdForWindow",e.GetPagesForWindow="getPagesForWindow",e.GetPageForWindow="getPageForWindow",e.GetSavedPageMetadata="getSavedPageMetadata",e.GetUniquePageTitle="getUniquePageTitle",e.GetLastFocusedBrowserWindow="getLastFocusedBrowserWindow",e.GetThemes="getThemes",e.OpenGlobalContextMenuInternal="openGlobalContextMenuInternal",e.OpenViewTabContextMenuInternal="openViewTabContextMenuInternal",e.OpenPageTabContextMenuInternal="openPageTabContextMenuInternal",e.OpenSaveButtonContextMenuInternal="openSaveButtonContextMenuInternal",e.InvokeCustomActionInternal="invokeCustomActionInternal",e.GetSavedWorkspace="getSavedWorkspace",e.CreateSavedWorkspace="createSavedWorkspace",e.UpdateSavedWorkspace="updateSavedWorkspace",e.DeleteSavedWorkspace="deleteSavedWorkspace",e.GetSavedWorkspaces="getSavedWorkspaces",e.SaveWorkspace="saveWorkspace",e.GetCurrentWorkspace="getCurrentWorkspace",e.ApplyWorkspace="applyWorkspace",e.SetActiveWorkspace="setActiveWorkspace",e.IsBrowserInitialized="isBrowserInitialized"}(X||(X={}));const Y=async e=>{const t=fin.Platform.wrapSync(e),a=await t.getClient(),n="Target is not a Workspace Platform. Target must call WorkspacePlatform.init";try{const e=await a.dispatch("isWorkspacePlatform");if(!0===e||!0===e.isWorkspacePlatform)return a;throw new Error(n)}catch(e){throw new Error(n)}},Z=async e=>{const t=fin.Platform.wrapSync(e),a=await t.getClient(),n="Target is not a Workspace Platform. Target must call WorkspacePlatform.init";let o;try{o=await a.dispatch("isWorkspacePlatform")}catch(e){throw new Error(n)}if(!0!==o?.isWorkspacePlatform)throw new Error(n);if(!0!==o?.isBrowserInitialized)throw new Error("Target is not a Browser-enabled Workspace Platform.");return a},ee=(e,t)=>!t.find((t=>t===e)),te=(e,t)=>`${e} (${t})`,ae=(e,t)=>{let a=1;const n=e.replace(/ \(.+\)$/,"");for(;!ee(te(n,a),t);)a+=1;return te(n,a)};async function ne(e){try{const t=Et();await t.applySnapshot(e.snapshot,{closeExistingWindows:!0}),oe(e)}catch(e){}}function oe(e){if("undefined"!=typeof localStorage)try{const t=JSON.stringify(e);localStorage.setItem(J.CurrentWorkspaceId,t)}catch(e){}}async function ie(){if("undefined"==typeof localStorage)return;const e=Et(),t=await e.getSnapshot();return{workspaceId:crypto.randomUUID(),title:await ce(),metadata:{APIVersion:M},snapshot:t}}async function re(){if("undefined"==typeof localStorage)return;const e=localStorage.getItem(J.CurrentWorkspaceId);if(!e)return ie();const t=JSON.parse(e),a=Et(),n=await a.getSnapshot();return{...t,metadata:{APIVersion:M},snapshot:n}}const se=async e=>await(async e=>(await Y(_)).dispatch(X.GetSavedWorkspace,e))(e.workspaceId)?(async e=>(await Y(_)).dispatch(X.UpdateSavedWorkspace,e))({workspaceId:e.workspaceId,workspace:e}):(async e=>(await Y(_)).dispatch(X.CreateSavedWorkspace,e))({workspace:e});async function ce(e="Untitled Workspace"){const t=(await(async()=>(await Y(_)).dispatch(X.GetSavedWorkspaces,void 0))()).map((({title:e})=>e));return t.find((t=>t===e))?ae(e,t):e}async function de(){if("undefined"!=typeof localStorage)try{const e=localStorage.getItem(J.LastFocusedBrowserWindow),t=JSON.parse(e);if(await q(t))return t}catch(e){throw new Error(`failed to get last focused browser window: ${e}`)}}function pe(e=fin.me.identity){$(e.name)&&function(e){if("undefined"!=typeof localStorage)try{const t=JSON.stringify(e);localStorage.setItem(J.LastFocusedBrowserWindow,t)}catch(e){}}(e)}const le=(e,t=0)=>{let a,n,o=!1;const i=async n=>{const r=await e(...n);if(o){await new Promise((e=>setTimeout(e,t)));const e=a;return a=void 0,o=!1,i(e)}return r};return(...e)=>(n?(o=!0,a=e):n=i(e).then((e=>(n=void 0,e))),n)};var we;!function(e){e.TabCreated="tab-created",e.ContainerCreated="container-created",e.ContainerResized="container-resized"}(we||(we={}));const ue=(e,t)=>e.content?{...e,content:e.content.map((e=>ue(e,t)))}:{...e,componentState:t(e.componentState)},ge=e=>({...e,name:e.name?e.name:crypto.randomUUID()}),ye=e=>{const t=[];return(e&&Array.isArray(e)?e:[]).forEach((e=>{if("component"===e.type)return t.push(e.componentState);const a=ye(e.content);t.push(...a)})),t},he=async(e,t,a=_)=>{let n;if($(a.name)){n=(await D(a).getOptions()).layout||{settings:{}}}return{...n,content:[{type:"stack",content:[{type:"component",componentName:"view",componentState:{title:e,url:t}}]}]}};new Map;function fe(e,t){return async(a,...n)=>{e.has(a)&&e.get(a).forEach((e=>e(...n))),t&&await t({event:a,payload:n})}}function me(e,t){return t&&t((t=>{const{event:a,payload:n}=t;e.has(a)&&e.get(a).forEach((e=>e(...n)))})),(t,a)=>{e.has(t)||e.set(t,new Set),e.get(t).add(a)}}function Se(e){return(t,a)=>{e.has(t)||e.set(t,new Set);const n=e.get(t),o=(...e)=>{a(...e),n.delete(o)};n.add(o)}}function ve(e){return(t,a)=>{e.has(t)&&e.get(t).delete(a)}}const Pe=v&&"complete"!==document.readyState&&new Promise((e=>document.addEventListener("readystatechange",(()=>{"complete"===document.readyState&&e()}))));function ke(e){let t;return()=>{if(!S)throw new Error("getChannelClient cannot be used outside an OpenFin env. Avoid using this method during pre-rendering.");return t||(t=(async()=>{await Pe;const a=await fin.InterApplicationBus.Channel.connect(e);return a.onDisconnection((async()=>{t=void 0})),a})().then((e=>e)).catch((a=>{throw t=void 0,new Error(`failed to connect to channel provider ${e}: ${a}`)}))),t}}const be=e=>`__browser_window__-${e.uuid}-${e.name}`,We=new Map,Ce=e=>{const t=be(e);return We.has(t)||We.set(t,ke(t)),We.get(t)()};var Ie,Ae,Te;!function(e){e.CloseBrowserWindow="close-browser-window",e.QuitPlatform="quit-platform",e.ClosePage="close-page",e.AddToChannel="add-to-channel",e.RemoveFromChannel="remove-from-channel",e.OpenSaveModalInternal="open-save-modal-internal",e.DuplicatePage="duplicate-page"}(Ie||(Ie={})),function(e){e.GetPages="get-pages",e.GetActivePageForWindow="get-active-page-for-window",e.AttachPagesToWindow="attach-pages-to-window",e.DetachPagesFromWindow="detach-pages-from-window",e.SetActivePageForWindow="set-active-page-for-window",e.RenamePage="rename-page",e.ReorderPagesForWindow="reorder-pages-for-window",e.UpdatePageForWindow="update-page-for-window",e.UpdatePagesWindowOptions="update-pages-window-options",e.IsDetachingPages="is-detaching-pages",e.IsActivePageChanging="is-active-page-changing"}(Ae||(Ae={})),function(e){e.AttachedPagesToWindow="attached-pages-to-window",e.DetachedPagesFromWindow="detached-pages-from-window"}(Te||(Te={}));new Map;const Me=async e=>{const t=await Ce(e);return await t.dispatch(Ae.GetPages)},Ee=async e=>(await Ce(e.identity)).dispatch(Ae.UpdatePageForWindow,e),Oe=async()=>{const e=await H();return(await Promise.all(e.map((async({identity:e})=>Me(e))))).reduce(((e,t)=>e.concat(t)),[])},Be=async()=>(await Y(_)).dispatch(X.GetSavedPages,void 0),Re=async e=>(await Y(_)).dispatch(X.GetSavedPage,e),Le=async(e,t)=>{const a=await(async e=>(await Oe()).find((t=>t.pageId===e)))(e);return!a||a.title===t.title&&e===t.pageId||await Ee({identity:a.parentIdentity,pageId:e,page:{pageId:t.pageId,title:t.title}}),a},xe=async({page:e})=>{await Le(e.pageId,e),await(async e=>(await Y(_)).dispatch(X.CreateSavedPage,e))({page:e})},Ve=async e=>{await Re(e)&&await(async e=>(await Y(_)).dispatch(X.DeleteSavedPage,e))(e)},Ue=async({pageId:e,page:t})=>{await Le(e,t);return await(async e=>(await Y(_)).dispatch(X.UpdateSavedPage,e))({pageId:e,page:t})},De=async e=>await Re(e.pageId)?Ue({pageId:e.pageId,page:e}):xe({page:e}),_e=async e=>{await(async e=>(await Ce(e.identity)).dispatch(Ae.AttachPagesToWindow,e))(e)},Fe=async e=>{await Ee(e)},Ge=async e=>{await(async e=>(await Ce(e.identity)).dispatch(Ae.DetachPagesFromWindow,e))(e)},Ne=async e=>{await(async e=>(await Ce(e.identity)).dispatch(Ae.SetActivePageForWindow,e))(e)},$e=e=>Me(e),He=async({identity:e,pageId:t})=>(await $e(e)).find((e=>e.pageId===t)),qe=async e=>{await(async e=>(await Ce(e.identity)).dispatch(Ae.ReorderPagesForWindow,e))(e)};async function Ke(e="Untitled Page"){const[t,a]=await Promise.all([Be(),Oe()]),n=[...t,...a].map((({title:e})=>e));return n.find((t=>t===e))?ae(e,n):e}const je=new Map,ze=e=>`${e.uuid}-${e.name}`;const Qe=le((async function(){const e=await Oe(),t=new Set;e.forEach((e=>{ye(e.layout.content).forEach((e=>{if(e.name){const a=ze(e);t.add(a)}}))}));const a=F();(await a.getCurrentViews()).forEach((({identity:e})=>{const a=ze(e);if(t.has(a)||je.has(a))return;const n=setTimeout((()=>{fin.View.wrapSync(e).destroy(),je.delete(a)}),5e3);je.set(a,n)})),je.forEach(((e,a)=>{t.has(a)&&(clearTimeout(e),je.delete(a))}))}),2500),Je=({name:e})=>{$(e)&&Qe().catch((()=>{}))};let Xe={};const Ye=({actionId:e,payload:t})=>{if("function"!=typeof Xe[e])throw new Error(`Cannot find a configured function for the action '${e}'`);return Xe[e](t)};function Ze(){return localStorage.getItem(J.MachineName)}let et;async function tt(){return et||(et=await fin.System.getMachineId()),et}const at=e=>{if(e.layout&&Array.isArray(e.workspacePlatform?.pages)){const t=e.workspacePlatform.pages.find((e=>e.isActive));if(t)if(t.isLocked){const a=((e,t)=>{const a=ye(t.content);return{...ue(e,(e=>{const t=a.find((t=>t.name===e.name&&t.uuid===e.uuid)),n=t?t.isClosable:e.isClosable;return{...e,isClosable:n}})),settings:t.settings}})(e.layout,t.layout);t.layout=a,e.layout=a}else t.layout=e.layout}return e};async function nt(e){const t=e||await fin.Platform.getCurrentSync().getSnapshot();if(t.snapshotDetails?.machineId)return t;const a=Ze();return{...t,snapshotDetails:{...e.snapshotDetails,machineId:await tt(),machineName:a}}}function ot(e){return new Promise(((t,a)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>a(e.error)}))}function it(e,t){const a=indexedDB.open(e);a.onupgradeneeded=()=>a.result.createObjectStore(t);const n=ot(a);return(e,a)=>n.then((n=>a(n.transaction(t,e).objectStore(t))))}let rt;function st(){return rt||(rt=it("keyval-store","keyval")),rt}function ct(e,t=st()){return t("readonly",(t=>ot(t.get(e))))}function dt(e,t,a=st()){return a("readwrite",(a=>(a.put(t,e),ot(a.transaction))))}function pt(e,t=st()){return t("readwrite",(t=>(t.delete(e),ot(t.transaction))))}function lt(e,t){return e("readonly",(e=>(e.openCursor().onsuccess=function(){this.result&&(t(this.result),this.result.continue())},ot(e.transaction))))}function wt(e=st()){const t=[];return lt(e,(e=>t.push(e.key))).then((()=>t))}const ut=(e,t="")=>e.toLowerCase().includes(t.toLowerCase()),gt=P&&it("openfin-home-pages","pages");async function yt(e){const t=await ct(e,gt);return t?(t.pageId=e.toString(),t.title=t.title||t.pageId,t):null}async function ht(e){const t=await wt(gt),a=await Promise.all(t.map((e=>yt(e.toString()))));return e?a.filter((t=>ut(t.title,e))):a}async function ft({page:e}){await dt(e.pageId,e,gt)}async function mt(e){await pt(e,gt)}async function St({pageId:e,page:t}){if(void 0===await yt(e))throw new Error("page not found");await ft({page:t}),e!==t.pageId&&await mt(e)}var vt;!function(e){e.Label="normal",e.Separator="separator",e.Submenu="submenu",e.Checkbox="checkbox"}(vt||(vt={}));const Pt={type:vt.Separator,data:void 0};var kt;!function(e){e.RegisterStorefrontProvider="register-storefront-provider",e.DeregisterStorefrontProvider="deregister-storefront-provider",e.GetStorefrontProviders="get-storefront-providers",e.HideStorefront="hide-storefront",e.GetStorefrontProviderApps="get-storefront-provider-apps",e.GetStorefrontProviderLandingPage="get-storefront-provider-landing-page",e.GetStorefrontProviderFooter="get-storefront-provider-footer",e.GetStorefrontProviderNavigation="get-storefront-provider-navigation",e.LaunchStorefrontProviderApp="launch-storefront-provider-app",e.ShowStorefront="show-storefront",e.CreateStorefrontWindow="create-storefront-window",e.ShowHome="show-home",e.HideHome="hide-home",e.AssignHomeSearchContext="assign-home-search-context",e.GetLegacyPages="get-legacy-pages",e.GetLegacyWorkspaces="get-legacy-workspaces",e.GetComputedPlatformTheme="get-computed-platform-theme"}(kt||(kt={}));ke("__of_workspace_protocol__");const bt=async(e,t)=>{const a=await(async e=>({...e,layoutDetails:{machineId:await tt(),machineName:Ze()}}))(t);return{pageId:crypto.randomUUID(),title:e,layout:a,isReadOnly:!1,hasUnsavedChanges:!0}},Wt=e=>({identity:e,openfinWindow:fin.Window.wrapSync(e),getPages:async()=>(await Z(e)).dispatch(X.GetPagesForWindow,e),getPage:async t=>(await Z(e)).dispatch(X.GetPageForWindow,{identity:e,pageId:t}),addPage:async t=>{const a=await Z(e);t?.title||(t.title=await a.dispatch(X.GetUniquePageTitle,void 0));const n=(await a.dispatch(X.GetAllAttachedPages,void 0)).find((e=>e.pageId===t.pageId||e.title===t.title));if(n)throw n.pageId===t.pageId?new Error(`page with id ${t.pageId} is already attached to a browser window ${n.parentIdentity.name}`):new Error(`page with title ${t.title} is already attached to a browser window ${n.parentIdentity.name}`);const o={identity:e,pages:[t]};return a.dispatch(X.AttachPagesToWindow,o)},removePage:async t=>(await Z(e)).dispatch(X.DetachPagesFromWindow,{identity:e,pageIds:[t]}),setActivePage:async t=>(await Z(e)).dispatch(X.SetActivePage,{identity:e,pageId:t}),updatePage:async t=>{const a=await Z(e);return t.identity=e,a.dispatch(X.UpdatePageForWindow,t)},reorderPages:async t=>{const a=await Z(e);return t.identity=e,a.dispatch(X.ReorderPagesForWindow,t)},_openGlobalContextMenu:async t=>{const a=await Z(e);return t.identity=e,a.dispatch(X.OpenGlobalContextMenuInternal,t)},replaceToolbarOptions:async t=>{await Z(e);const a=fin.Window.wrapSync(e);await a.updateOptions({workspacePlatform:{toolbarOptions:t}})},replaceWindowStateButtonOptions:async t=>{await Z(e);const a=fin.Window.wrapSync(e);await a.updateOptions({workspacePlatform:{windowStateButtonOptions:t}})},_openViewTabContextMenu:async t=>{const a=await Z(e);return t.identity=e,a.dispatch(X.OpenViewTabContextMenuInternal,t)},_openPageTabContextMenu:async t=>{const a=await Z(e);return t.identity=e,a.dispatch(X.OpenPageTabContextMenuInternal,t)},_openSaveModal:async t=>{await Z(e);return(await Ce(e)).dispatch(Ie.OpenSaveModalInternal,t)},_openSaveButtonContextMenu:async t=>{const a=await Z(e);return t.identity=e,a.dispatch(X.OpenSaveButtonContextMenuInternal,t)}});let Ct=!1;const It=e=>{const t=fin.Platform.wrapSync(e);return{wrapSync:e=>Wt(e),createWindow:async a=>{await Z(e),Ct||(Ct=!0,(async e=>{z(j.Browser,e)})({allowed:!0}));const n=await t.createWindow(a);return Wt(n.identity)},getAllAttachedPages:async()=>(await Z(e)).dispatch(X.GetAllAttachedPages,void 0),getAllWindows:async()=>{await Z(e);return(await fin.Application.wrapSync(e).getChildWindows()).filter((e=>e.identity.name.includes("internal-generated-window-"))).map((e=>Wt(e.identity)))},getUniquePageTitle:async t=>(await Z(e)).dispatch(X.GetUniquePageTitle,t),getLastFocusedWindow:async()=>(await Z(e)).dispatch(X.GetLastFocusedBrowserWindow,void 0)}},At=e=>({createPage:async t=>(await Z(e)).dispatch(X.CreateSavedPageInternal,t),deletePage:async t=>(await Z(e)).dispatch(X.DeleteSavedPageInternal,t),updatePage:async t=>(await Z(e)).dispatch(X.UpdateSavedPageInternal,t),getPage:async t=>(await Z(e)).dispatch(X.GetSavedPage,t),getPages:async t=>(await Z(e)).dispatch(X.GetSavedPages,t),savePage:async t=>(await Z(e)).dispatch(X.SavePage,t),createWorkspace:async t=>(await Y(e)).dispatch(X.CreateSavedWorkspace,t),deleteWorkspace:async t=>(await Y(e)).dispatch(X.DeleteSavedWorkspace,t),updateWorkspace:async t=>(await Y(e)).dispatch(X.UpdateSavedWorkspace,t),getWorkspace:async t=>(await Y(e)).dispatch(X.GetSavedWorkspace,t),getWorkspaces:async t=>(await Y(e)).dispatch(X.GetSavedWorkspaces,t),saveWorkspace:async t=>(await Y(e)).dispatch(X.SaveWorkspace,t)}),Tt=e=>({getThemes:async()=>(await Y(e)).dispatch(X.GetThemes,void 0)}),Mt=e=>{const t=fin.Platform.wrapSync(e);return Object.assign(t,{applySnapshot:async(t,a)=>{if("string"!=typeof t&&!t?.windows)throw new Error("Not a valid browser snapshot");return fin.Platform.wrapSync(e).applySnapshot(t,a)},getSnapshot:()=>fin.Platform.wrapSync(e).getSnapshot().then((e=>e)),launchApp:async t=>{t.target||(t.target={uuid:b,name:W,entityType:C||"unknown"});return(await Y(e)).dispatch(X.LaunchApp,t)},_invokeCustomAction:async(t,a)=>{const n=await Y(e),o={actionId:t,payload:{...a,callerType:a.callerType||h.API}};return n.dispatch(X.InvokeCustomActionInternal,o)},getCurrentWorkspace:async()=>(await Y(e)).dispatch(X.GetCurrentWorkspace,void 0),applyWorkspace:async t=>(await Y(e)).dispatch(X.ApplyWorkspace,t),setActiveWorkspace:async t=>(await Y(e)).dispatch(X.SetActiveWorkspace,t),Theme:Tt(e),Browser:It(e),Storage:At(e)})},Et=()=>Mt(fin.me.identity),Ot=async(e=_)=>{const{workspacePlatform:t}=await D(e).getOptions();return{newPageUrl:t?.newPageUrl,newTabUrl:t?.newTabUrl}},Bt=async(e=_)=>{const t=await Et().Browser.getUniquePageTitle("Untitled Page"),a=await(async(e=_)=>{const{newPageUrl:t}=await Ot(e);if(!t)throw new Error("Trying to create a new page without a newPageUrl set");return he("New Tab",t,e)})(e);return bt(t,a)},Rt={type:vt.Label,label:"Close Window",data:{type:l.CloseWindow}},Lt={type:vt.Label,label:"Open Storefront",data:{type:l.OpenStorefront}},xt={type:vt.Label,label:"Quit Platform",data:{type:l.Quit}},Vt={type:vt.Label,label:"New Window",data:{type:l.NewWindow}},Ut={type:vt.Label,label:"Save Page",data:{type:l.SavePage}},Dt={type:vt.Label,label:"Save Page As...",data:{type:l.SavePageAs}},_t={type:vt.Label,label:"Restore to Last Saved Changes",data:{type:l.RestoreChanges}},Ft={type:vt.Label,label:"Save Workspace",data:{type:l.SaveWorkspace}},Gt={type:vt.Label,label:"Save Workspace As...",data:{type:l.SaveWorkspaceAs}},Nt={type:vt.Label,label:"Rename Workspace",data:{type:l.RenameWorkspace}},$t="Switch Workspace",Ht="Delete Workspace",qt=[Rt,Pt,Lt,Pt,xt],Kt=[Pt,Rt,Pt,xt],jt=(e,t,a)=>t.map((t=>{const n=t.workspaceId===e.workspaceId;return{label:t.title,type:vt.Checkbox,enabled:!n,checked:n,data:{type:a,workspaceId:t.workspaceId}}})),zt=async e=>{const t=await K(),{newPageUrl:a}=await Ot(e),n=await(async e=>{const t=D(e),{workspacePlatform:a}=await t.getOptions();return a?.disableMultiplePages})(e),o=await(async e=>{const t=D(e),{workspacePlatform:a}=await t.getOptions();return a?.isLocked})(e),i=[];var r;a&&(i.push(Vt),n||i.push((r=!o,{type:vt.Label,label:"New Page",data:{type:l.NewPage},enabled:r}))),i.push(Pt);const s=Et(),c=await s.getCurrentWorkspace(),d=await s.Storage.getWorkspaces(),p=d.find((e=>e.workspaceId===c.workspaceId));return p?i.push(_t):i.push({label:_t.label,enabled:!1}),i.push(Ft,Gt),p?i.push(Nt):i.push({label:Nt.label,enabled:!1}),d.some((e=>e.workspaceId!==c.workspaceId))?i.push({label:$t,submenu:jt(c,d,l.SwitchWorkspace)},{label:Ht,submenu:jt(c,d,l.DeleteWorkspace)}):i.push({label:$t,enabled:!1},{label:Ht,enabled:!1}),i.push(Pt,Ut,Dt),t?[...i,...qt]:[...i,...Kt]};let Qt="Platform";const Jt=async()=>Qt;var Xt,Yt,Zt;!function(e){e.Home="/home/",e.HomeSearch="/home/?deeplink=search",e.HomePagesRename="/home/pages/rename/",e.Dock="/home/dock/",e.BrowserPagesLanding="/browser/pages/landing/",e.HomeIndicator="/home/indicator/",e.Browser="/browser/",e.BrowserPopupMenu="/browser/popup-menu/",e.Provider="/provider/",e.BrowserPopupMenuSharePage="/browser/popup-menu/share-page/",e.BrowserPopupMenuSaveModal="/browser/popup-menu/save-modal/",e.BrowserPopupMenuLayouts="/browser/popup-menu/layouts/layouts/",e.BrowserPopupMenuColorLinking="/browser/popup-menu/color-linking/color-linking/",e.BrowserIndicator="/browser/indicator/",e.ResponseModal="/browser/popup-menu/response-modal/",e.Docs="/provider/docs/",e.Storefront="/storefront/",e.DeprecatedAlert="/provider/deprecated-alert/"}(Xt||(Xt={})),function(e){e.IconOpenFinLogo="/icons/openfinlogo.svg",e.IconFilter="/icons/filter.svg"}(Yt||(Yt={})),function(e){e.Search="search"}(Zt||(Zt={}));const ea={...Yt,...Xt};var ta;!function(e){e.Home="/home",e.Browser="/browser",e.Provider="/provider",e.Storefront="/storefront"}(ta||(ta={}));const aa="/workspace/8.1.7";function na(){return aa.substring(0,aa.length-"".length)}function oa(e){if(!v)throw new Error("getAbsoluteRoutePath can only be used in a window");return function(){if(!window)throw new Error("getAbsoluteBasePath can only be used in a window");return`${window.origin}${na()}`}()+e}const ia={name:V.BrowserMenu,alwaysOnTop:!0,autoShow:!1,cornerRounding:{height:6,width:6},frame:!1,resizable:!1,backgroundColor:"#2f3136",smallWindow:!0,showTaskbarIcon:!1,backgroundThrottling:!0};function ra(e){const t={...ia,...e};return t.url=function(e){if(!v)throw new Error("resolveAbsolutePath can only be used in a window");return e.startsWith("http")?e:`${window.origin}${e}`}(t.url),t}var sa,ca;!function(e){e.Update="update",e.Response="response"}(sa||(sa={})),function(e){e.Canceled="canceled",e.Negative="negative",e.Affirmative="affirmative"}(ca||(ca={}));const da=function(e){const t=new Map;return{emit:fe(t,(t=>S&&fin.InterApplicationBus.publish(e,t))),addListener:me(t,(t=>S&&fin.InterApplicationBus.subscribe({uuid:fin.me.uuid},e,t))),removeListener:ve(t),once:Se(t)}}("window.menu"),pa=e=>da.emit(sa.Response,e),la=le((()=>x().getChildWindows()),500);const wa=new Map;async function ua({options:e,parameters:t}){const a=ra(e),{name:n}=a;let o=await async function(e){return(await la()).find((t=>t.identity.name===e))}(n);return o||(o=await async function(e){const t=ra(e);if(!wa.has(t.name)){const e=(async()=>{const e=await fin.Platform.getCurrentSync().createWindow(t);return e.once("closed",(()=>{wa.delete(t.name)})),e})();wa.set(t.name,e)}return wa.get(t.name)}(a)),await async function(e,t){const a=ra(e),{top:n,left:o,defaultWidth:i,defaultHeight:r}=a,s={top:n,left:o,width:i,height:r},c={parentName:fin.Window.getCurrentSync().identity.name};for(const[e,a]of Object.entries(c))t.set(e,a);const d=t.toString(),p=`${a.url}?${d}`;da.emit(sa.Update,a.name,s,p),await pa({name:a.name,data:ca.Canceled})}(e,t||new URLSearchParams),o}const ga=async(e,t)=>{const a=t?D(t):F();await(async(e=fin.me.identity)=>{const t=D(e),a=await t.getBounds();(a.right>screen.availLeft+screen.width||a.left<screen.availLeft||a.bottom>screen.availTop+screen.height||a.top<screen.availTop)&&await t.center()})(a.identity);const n=await a.getBounds(),o={left:((i=n).left+i.right)/2,top:(i.top+i.bottom)/2};var i;const{defaultHeight:r,defaultWidth:s}=e;return((e,t)=>{const{height:a,width:n}=t,o=n/2,i=a/2;return{left:e.left-o,top:e.top-i}})(o,{height:r,width:s})},ya=async({options:e,content:t})=>{const a=new URLSearchParams({...t});return await ua({options:e,parameters:a}),new Promise((t=>{da.once(sa.Response,(a=>{a.name===e.name&&t(a)}))}))},ha=async(e,t)=>{const{windowOptions:a,content:n}=await(async(e,t)=>({title:"Switch Workspace",windowOptions:{url:A+ea.ResponseModal,name:V.BrowserMenu,defaultHeight:112,defaultWidth:424,modalParentIdentity:e},content:{title:`Are you sure you want to switch to ${t}`,body:"Any unsaved changes will be discarded",affirmativeButton:"Confirm",negativeButton:"Cancel"}}))(e,t),{top:o,left:i}=await ga(a,e),r={...a,top:o,left:i};return(await ya({options:r,content:n})).data===ca.Affirmative},fa=async(e,t)=>{const{windowOptions:a,content:n}=await(async(e,t)=>({title:"Delete Workspace",windowOptions:{url:A+ea.ResponseModal,name:V.BrowserMenu,defaultHeight:144,defaultWidth:372,modalParentIdentity:e},content:{title:"Are you sure you want to permanently delete this workspace?",body:`${t}`,affirmativeButton:"Confirm",negativeButton:"Cancel"}}))(e,t),{top:o,left:i}=await ga(a,e),r={...a,top:o,left:i};return(await ya({options:r,content:n})).data===ca.Affirmative},ma=async(e,t)=>{const{windowOptions:a,content:n}=await(async(e,t)=>({title:"Platform Quit",windowOptions:{url:A+ea.ResponseModal,name:V.BrowserMenu,defaultHeight:134,defaultWidth:474,modalParentIdentity:e},content:{title:`Are you sure you want to quit ${"Platform"===t?"the platform":t}?`,body:"Any unsaved changes to the workspace will be discarded",affirmativeButton:"Confirm",negativeButton:"Cancel"}}))(e,t),{top:o,left:i}=await ga(a,e),r={...a,top:o,left:i};return(await ya({options:r,content:n})).data===ca.Affirmative},Sa=async e=>{const{windowOptions:t,content:a}=await(async e=>({title:"Restore Changes",windowOptions:{url:A+ea.ResponseModal,name:V.BrowserMenu,defaultHeight:112,defaultWidth:424,modalParentIdentity:e},content:{title:"Are you sure you want to restore to last saved changes?",body:"Any unsaved changes will be discarded",affirmativeButton:"Confirm",negativeButton:"Cancel"}}))(e),{top:n,left:o}=await ga(t,e),i={...t,top:n,left:o};return(await ya({options:i,content:a})).data===ca.Affirmative};var va;!function(e){e.ERROR="error",e.SUCCESS="success",e.INFO="info"}(va||(va={}));const Pa={alwaysOnTop:!0,autoShow:!1,cornerRounding:{height:5,width:5},frame:!1,resizable:!1,showTaskbarIcon:!1};var ka;!function(e){e.Locked="LockClosedIcon",e.Unlocked="LockOpen1Icon"}(ka||(ka={}));const ba=function(e=Pa){const t=new Map;return async(a,n,o,i)=>{if(t.has(a)){const{currentUrl:e,currentName:o}=t.get(a);if(e===n)return;const i=fin.Window.wrapSync({uuid:fin.me.uuid,name:o});await i.close()}const r=`${V.HomeInternal}-${Date.now()}${Math.random()}`;t.set(a,{currentUrl:n,currentName:r});const s=await fin.Platform.getCurrentSync().createWindow({...e,name:r,url:n});((e,t)=>{const a=document.createElement("div");a.setAttribute("aria-live",t||"polite"),(e=>{e.style.position="absolute",e.style.width="1px",e.style.height="1px",e.style.padding="0",e.style.margin="-1px",e.style.overflow="hidden",e.style.whiteSpace="nowrap",e.style.border="0"})(a),document.body.appendChild(a),setTimeout((()=>{a.innerHTML=e}),100),setTimeout((()=>{document.body.removeChild(a)}),1e3)})(`New ${i} indicator: ${o}`),s.once("closed",(()=>{t.delete(a)}))}}();async function Wa(e,t,a,n){const o=new URLSearchParams;o.append("type",e),o.append("message",t),o.append("parentName",a||""),o.append("icon",n||"");const i=`${oa(ea.BrowserIndicator)}?${o.toString()}`;return ba("browser"+a,i,t,e)}function Ca(e,t,a){return Wa(va.SUCCESS,e,t,a)}const Ia=async e=>{const t=Et(),a=await t.getCurrentWorkspace(),n=await t.Storage.getWorkspaces(),o=a.workspaceId;if(n.some((e=>e.workspaceId===o)))t.Storage.saveWorkspace(a),t.setActiveWorkspace(a),Ca("Workspace Saved",e.name);else{t.Browser.wrapSync(e)._openSaveModal({menuType:f.SAVE_WORKSPACE})}},Aa=e=>{Et().Browser.wrapSync(e)._openSaveModal({menuType:f.SAVE_WORKSPACE_AS})},Ta=async(e,t)=>{const a=Et().Browser.wrapSync(e),n=await Et().Storage.getPages(),o=(await a.getPages()).find((e=>t?e.pageId===t:e.isActive));if(n.some((e=>o.pageId===e.pageId)))try{await Et().Storage.savePage((c=o,{...c,hasUnsavedChanges:void 0,parentIdentity:void 0,isActive:void 0})),await a.updatePage({pageId:o.pageId,page:{hasUnsavedChanges:!1}}),Ca("Page saved",o.parentIdentity.name)}catch{i="Page failed to save",r=o.parentIdentity.name,Wa(va.ERROR,i,r,s)}else a._openSaveModal({id:o.pageId,menuType:f.SAVE_PAGE});var i,r,s,c},Ma=async(e,t)=>{const a=Et().Browser.wrapSync(e),n=(await a.getPages()).find((e=>t?e.pageId===t:e.isActive));a._openSaveModal({id:n.pageId,menuType:f.SAVE_PAGE_AS})},Ea=async(e,t)=>{if(!e)return;const a=t.identity,n=await Ce(a),o=Et().Browser.wrapSync(t.identity);switch(e.type){case l.NewWindow:const{newPageUrl:t}=await Ot(a);if(!t)throw new Error("Trying to create a new empty window without a newPageUrl set");Et().createView({target:void 0,url:t});break;case l.NewPage:await(async e=>{const t=Et().Browser.wrapSync(e),a=await Bt(e);await t.addPage(a),await t.setActivePage(a.pageId)})(a);break;case l.CloseWindow:n.dispatch(Ie.CloseBrowserWindow);break;case l.SaveWorkspace:await Ia(a);break;case l.SavePage:await Ta(a);break;case l.SavePageAs:await Ma(a);break;case l.SaveWorkspaceAs:await Aa(a);break;case l.RenameWorkspace:o._openSaveModal({menuType:f.RENAME_WORKSPACE});break;case l.SwitchWorkspace:await(async(e,t)=>{const a=Et(),n=(await a.Storage.getWorkspaces()).find((e=>e.workspaceId===t.workspaceId));n&&await ha(e,n.title)&&(await a.applyWorkspace(n),Ca("Workspace Switched!",null))})(a,e);break;case l.DeleteWorkspace:await(async(e,t)=>{const a=Et(),n=(await a.Storage.getWorkspaces()).find((e=>e.workspaceId===t.workspaceId));n&&await fa(e,n.title)&&(await a.Storage.deleteWorkspace(t.workspaceId),Ca("Workspace Deleted!",e.name))})(a,e);break;case l.Quit:const i=await Jt();await ma(a,i)&&fin.Platform.getCurrentSync().quit();break;case l.OpenStorefront:(async()=>{await K()&&N(G)})();break;case l.RestoreChanges:const r=await async function(){const e=Et(),t=await e.getCurrentWorkspace();return(await e.Storage.getWorkspaces()).find((e=>e.workspaceId===t.workspaceId))}();await Sa(a)&&await ne(r);break;case l.Custom:if(e.action){const t={callerType:h.GlobalContextMenu,windowIdentity:a,customData:e.action.customData};Et()._invokeCustomAction(e.action.id,t)}}},Oa=async(e,t)=>{const a=await Ce(t.identity),n=Et();switch(e.type){case w.Save:await Ta(t.identity,t.pageId);break;case w.SaveAs:await Ma(t.identity,t.pageId);break;case w.Rename:await n.Browser.wrapSync(t.identity)._openSaveModal({menuType:f.RENAME_PAGE,id:t.pageId});break;case w.Duplicate:a.dispatch(Ie.DuplicatePage,t.pageId);break;case w.Close:a.dispatch(Ie.ClosePage,t.pageId);break;case w.Custom:if(e.action){const a={callerType:h.PageTabContextMenu,windowIdentity:t.identity,pageId:t.pageId,customData:e.action.customData};Et()._invokeCustomAction(e.action.id,a)}}},Ba=async(e,t)=>{if(e?.type){const a=t.identity;switch(e.type){case y.SavePage:await Ta(a);break;case y.SaveWorkspace:await Ia(a);break;case y.SavePageAs:await Ma(a);break;case y.SaveWorkspaceAs:await Aa(a);break;case y.Custom:if(e.action){const a={callerType:h.SaveButtonContextMenu,windowIdentity:t.identity,pageId:t.pageId,customData:e.action.customData};Et()._invokeCustomAction(e.action.id,a)}}}},Ra=async(e,t)=>{const a=t.selectedViews[0],n=fin.View.wrapSync(a),o=await(async e=>{const{newTabUrl:t}=await Ot(e);if(!t)throw new Error("Trying to create a new page without a newTabUrl set");return{...he("New View",t),url:t,target:e}})(e);await Et().createView(o,e,n.identity)},La=async(e,t)=>{const a=await(e=>Promise.all(e.map((async e=>fin.View.wrapSync(e).getInfo()))))(t),{newPageUrl:n,newTabUrl:o}=await Ot(e);a.forEach((async e=>{e.url!==n&&e.url!==o&&await fin.System.openUrlWithBrowser(e.url)}))},xa=(e,t)=>{t.forEach((async t=>{const a=fin.View.wrapSync(t);await(async(e,t)=>{const{url:a}=await t.getInfo(),n={...await t.getOptions(),url:a,target:e,name:void 0};await Et().createView(n,e,t.identity)})(e,a)}))},Va=async(e,t)=>{if(!e)return;const a=t.identity;switch(e.type){case u.CloseViews:await(async(e,t)=>{if((await fin.Window.wrapSync(e).getCurrentViews()).length!==t.length)t.forEach((async e=>{const t=fin.View.wrapSync(e);await t.destroy()}));else{const t=(await Et().Browser.wrapSync(e).getPages()).find((e=>e.isActive));(await Ce(e)).dispatch(Ie.ClosePage,t?.pageId)}})(a,t.selectedViews);break;case u.OpenWithDefaultBrowser:await La(a,t.selectedViews);break;case u.ReloadViews:t.selectedViews.forEach((async e=>{const t=fin.View.wrapSync(e);await t.reload()}));break;case u.NewView:await Ra(a,t);break;case u.DuplicateViews:xa(a,t.selectedViews);break;case u.AddToChannel:(async(e,t,a)=>{const n={newChannelId:t,selectedViews:a};(await Ce(e)).dispatch(Ie.AddToChannel,n)})(a,e.option,t.selectedViews);break;case u.RemoveFromChannel:(async(e,t)=>{(await Ce(e)).dispatch(Ie.RemoveFromChannel,t)})(a,t.selectedViews);break;case u.Custom:if(e.action){const n={callerType:h.ViewTabContextMenu,windowIdentity:a,selectedViews:t.selectedViews,customData:e.action.customData};Et()._invokeCustomAction(e.action.id,n)}}};async function Ua(e,t){const a=await zt(e.identity),n=await Jt();a.find((e=>e.data?.type===l.Quit)).label=`Quit ${n}`;const o={...e,template:a,callback:Ea};await this.openGlobalContextMenu(o,t)}const Da=async(e,t)=>{const{x:a,y:n,identity:o,template:i,callback:r}=e,{data:s}=await function(e,t){if(!S)throw new Error("showContextMenu can only be used in an OpenFin env. Avoid calling this method during pre-rendering.");if(!t&&!fin.me.isWindow)throw new Error("showContextMenu can only be used in an OpenFin window.");return(t||fin.Window.getCurrentSync()).showPopupMenu(e)}({x:a,y:n,template:i},fin.Window.wrapSync(o));r(s,e)};async function _a(e,t){const a={...e,callback:Va};await this.openViewTabContextMenu(a,t)}async function Fa(e,t){const a=await(async(e,t)=>{const a=await Et().Storage.getPage(e),n=(await Oe()).find((t=>t.pageId===e)),{workspacePlatform:o}=await D(t).getOptions(),i=!(o.isLocked||o.preventPageClose||n.closeButton?.disabled||n.closeButton?.hidden);return[{type:vt.Label,label:"Save Page",data:{type:w.Save}},{type:vt.Label,label:"Save Page As",data:{type:w.SaveAs}},Pt,{type:vt.Label,label:"Rename Page",data:{type:w.Rename},enabled:!!a},{type:vt.Label,label:"Duplicate Page",data:{type:w.Duplicate},enabled:!o.isLocked},Pt,{type:vt.Label,label:"Close Page",data:{type:w.Close},enabled:i}]})(e.pageId,e.identity),n={...e,template:a,callback:Oa};await this.openPageTabContextMenu(n,t)}async function Ga(e,t){const a={...e,template:await(async()=>[{type:vt.Label,label:"Save Workspace",data:{type:y.SaveWorkspace}},{type:vt.Label,label:"Save Workspace As",data:{type:y.SaveWorkspaceAs}},{type:vt.Separator,data:void 0},{type:vt.Label,label:"Save Page",data:{type:y.SavePage}},{type:vt.Label,label:"Save Page As",data:{type:y.SavePageAs}}])(),callback:Ba};await this.openSaveButtonContextMenu(a,t)}const Na=P&&it("openfin-workspace-platform-workspaces","workspaces");async function $a(e){const t=await ct(e,Na);return t?(t.workspaceId=e.toString(),t.title=t.title||t.workspaceId,t):null}async function Ha(e){const t=await wt(Na),a=await Promise.all(t.map((e=>$a(e.toString()))));return e?a.filter((t=>ut(t.title,e))):a}async function qa({workspace:e}){await dt(e.workspaceId,e,Na)}async function Ka(e){await pt(e,Na)}async function ja({workspaceId:e,workspace:t}){if(void 0===await $a(e))throw new Error("workspace not found");await qa({workspace:t}),e!==t.workspaceId&&await Ka(e)}async function za({app:e,target:t}){const a=fin.Platform.getCurrentSync();switch(e.manifestType){case r.Snapshot:return a.applySnapshot(e.manifest);case r.View:return async function(e,t){const a=fin.Platform.getCurrentSync();if("view"===t.entityType){const a=fin.View.wrapSync(t),n=await a.getParentLayout();return await n.replaceView(t,{manifestUrl:e.manifest,url:void 0,target:void 0}),a.destroy()}return a.createView({name:void 0,url:void 0,manifestUrl:e.manifest,target:void 0})}(e,t);case r.External:return fin.System.launchExternalProcess({path:e.manifest,uuid:e.appId});default:return fin.Application.startFromManifest(e.manifest)}}const Qa=e=>e&&"object"==typeof e&&!Array.isArray(e);function Ja(e,...t){if(!t.length)return e;const a=t.shift();return Qa(e)&&Qa(a)&&Object.entries(a).forEach((([t,a])=>{if(Qa(a))return e[t]||(e[t]={}),Ja(e[t],a);e[t]=a})),Ja(e,...t)}const Xa=A+ea.Browser;function Ya(e,t){const a=Ja({},t,e);return a.detachOnClose=!0,a}async function Za(e,t,a){const n=e.manifestUrl?await t({manifestUrl:e.manifestUrl},a):void 0;if(n?.interop&&e.interop){const t={...e,...n,interop:e.interop};return delete t.manifestUrl,t}return e}const en=e=>{const t=e.name===V.Home,a=e.name?.startsWith(V.HomeInternal),n=e.name?.startsWith(V.BrowserMenu);return!t&&!a&&!n},tn=e=>"workspacePlatform"in e?e:(({workstacks:e,pages:t,...a})=>({...a,workspacePlatform:{pages:t||e||null}}))(e),an={contextMenuSettings:{reload:!1},backgroundThrottling:!0,url:Xa,contextMenu:!0,closeOnLastViewRemoved:!1,experimental:{showFavicons:!0,defaultFaviconUrl:`${A}/icons/defaultFavicon.svg`},permissions:{System:{openUrlWithBrowser:{enabled:!0,protocols:["mailto"]}}}},nn={dimensions:{borderWidth:3,headerHeight:30}},on=async(e,t)=>{const a=await Et().Storage.getPages(),n=await Et().Browser.getAllAttachedPages();return e.map((e=>{let o=e.title;void 0===e.pageId&&(e.pageId=crypto.randomUUID());const i=a.find((e=>e.title===o));return(i&&i.pageId!==e.pageId||n.find((e=>e.title===o)))&&(o=ae(e.title,[...a,...n].map((e=>e.title)))),n.push(e),{...t,...e,title:o,layout:(r=e.layout,ue({...r},ge))};var r}))};const rn=e=>{const t=fin.Window.wrapSync(e);return Promise.all([t.bringToFront(),t.restore(),t.focus()])};async function sn(e){const t=await H();return await Promise.all(t.map((({identity:e})=>(async e=>(await Ce(e)).dispatch(Ae.UpdatePagesWindowOptions))(e)))),e?e():nt()}let cn=[];const dn=()=>cn;const pn=(e,t)=>async a=>{const n=null!==e;class o extends a{constructor(){super(),this.isWorkspacePlatform=()=>({isWorkspacePlatform:!0,isBrowserInitialized:!!e}),this.addPage=this.attachPagesToWindow,this.detachPagesFromWindow=Ge,this.getAllAttachedPages=Oe,this.getPagesForWindow=$e,this.getPageForWindow=He,this.setActivePage=Ne,this.launchApp=za,this.savePage=De,this.saveWorkspace=se,this.createSavedPageInternal=xe,this.updateSavedPageInternal=Ue,this.deleteSavedPageInternal=Ve,this.reorderPagesForWindow=qe,this.getUniquePageTitle=Ke,this.updatePageForWindow=Fe,this.getLastFocusedBrowserWindow=de,this.getThemes=dn,this.invokeCustomActionInternal=Ye,this.getCurrentWorkspace=re,this.applyWorkspace=ne,this.setActiveWorkspace=oe,this.openGlobalContextMenuInternal=this.openGlobalContextMenuInternal.bind(this),this.openGlobalContextMenu=this.openGlobalContextMenu.bind(this),this.getSavedPages=this.getSavedPages.bind(this),this.getSavedPage=this.getSavedPage.bind(this),this.createSavedPage=this.createSavedPage.bind(this),this.updateSavedPage=this.updateSavedPage.bind(this),this.deleteSavedPage=this.deleteSavedPage.bind(this),this.attachPagesToWindow=this.attachPagesToWindow.bind(this),this.openViewTabContextMenuInternal=this.openViewTabContextMenuInternal.bind(this),this.openViewTabContextMenu=this.openViewTabContextMenu.bind(this),this.openPageTabContextMenuInternal=this.openPageTabContextMenuInternal.bind(this),this.openPageTabContextMenu=this.openPageTabContextMenu.bind(this),this.getSavedWorkspaces=this.getSavedWorkspaces.bind(this),this.getSavedWorkspace=this.getSavedWorkspace.bind(this),this.createSavedWorkspace=this.createSavedWorkspace.bind(this),this.updateSavedWorkspace=this.updateSavedWorkspace.bind(this),this.deleteSavedWorkspace=this.deleteSavedWorkspace.bind(this),this.getCurrentWorkspace=this.getCurrentWorkspace.bind(this),this.applyWorkspace=this.applyWorkspace.bind(this),this.setActiveWorkspace=this.setActiveWorkspace.bind(this),this.openSaveButtonContextMenu=this.openSaveButtonContextMenu.bind(this),this.openSaveButtonContextMenuInternal=this.openSaveButtonContextMenuInternal.bind(this)}async getSnapshot(){const e=n?await sn((async()=>nt(await super.getSnapshot(void 0,fin.me.identity)))):await nt(await super.getSnapshot(void 0,fin.me.identity));return{...e,windows:e.windows.filter(en).map(at)}}async applySnapshot({snapshot:e,options:t}){const a=e=>super.applySnapshot({snapshot:e,options:{...t,closeExistingWindows:!1}});let o=e;if("string"==typeof o&&(o=await super.fetchManifest({manifestUrl:o},fin.me.identity)),!n&&function(e){for(const t of e.windows)if(t.workspacePlatform?.pages)return!0;return!1}(o))throw new Error("This snapshot cannot be applied as the platform has been initialized without the browser.");return t?.closeExistingWindows&&await async function(){const e=await H();await Promise.all(e.map((e=>e.close(!0).catch((()=>{})))))}(),n?async function(e,t){const a=await Oe(),n=e.snapshotDetails?.monitorInfo||await fin.System.getMonitorInfo(),o=(e.windows||[]).filter((({layout:e})=>!!e)),i=new Map;a.forEach((e=>i.set(e.pageId,e)));const r=[],s=o.map((async e=>{const t=tn(e),a=[],n=(e=>{let t=!1;const a=(e||[]).map((e=>{const a=function({id:e,name:t,...a}){return{pageId:e,title:t,...a}}(e);return t&&a.isActive&&(a.isActive=!1),a.isActive&&(t=!0),a}));return!t&&a.length&&(a[0].isActive=!0),a})(t?.workspacePlatform?.pages);if(!n?.length){const e=await Ke();a.push(await bt(e,t.layout))}let o;n.forEach((e=>{const t=i.get(e.pageId);t?o=t:a.push(e)})),o&&await Promise.all([Ne({identity:o.parentIdentity,pageId:o.pageId}),rn(o.parentIdentity)]),a.length&&r.push({...t,workspacePlatform:{...t.workspacePlatform,pages:a}})}));if(await Promise.all(s),!r.length)return;const c=fin.Platform.getCurrentSync();return(t||c.applySnapshot.bind(c))({...e,snapshotDetails:{...e.snapshotDetails,monitorInfo:n},windows:r})}(o,a):a(o)}async createWindow(t,a){t.workspacePlatform?.toolbarOptions?.buttons&&(e=>{const t=e.filter((e=>e.type!==g.Custom)),a=new Set;for(const e of t){if(a.has(e.type))throw new Error(`Encountered a duplicate of ${e.type} button. No more than one instance of a button type may be provided.`);a.add(e.type)}})(t.workspacePlatform.toolbarOptions.buttons);let o=tn(t);if(n){const t=this.getThemes();o=await(async(e,t,a)=>{let n=e;n.workspacePlatform?.pages&&(n.workspacePlatform.pages=await on(n.workspacePlatform.pages,t?.defaultPageOptions));const o=n?.workspacePlatform?.pages;if(o){const e=o.find((e=>e.isActive));e?n.layout=e.layout:(o[0].isActive=!0,n.layout=o[0].layout)}if(n.layout){if(n=Ja({},t.defaultWindowOptions,n,an),n.layout=Ja(n.layout,nn),(n.icon||n.taskbarIcon)&&(n.taskbarIconGroup=n.taskbarIconGroup||fin.me.identity.uuid),!n.backgroundColor){const e=a?.palette;n.backgroundColor=e?.background2||e?.backgroundPrimary}const e=n.workspacePlatform.newTabUrl;e&&(n.layout.settings||(n.layout.settings={}),n.layout.settings.newTabButton={url:e}),n=(e=>{const t=e;return t.workspacePlatform||(t.workspacePlatform={}),t.workspacePlatform._internalDeferShowEnabled=!0,t.workspacePlatform._internalAutoShow=t.workspacePlatform?._internalAutoShow||void 0===t.autoShow||t.autoShow,t.autoShow=!1,t})(n)}return n.cornerRounding&&delete n.cornerRounding,n})(o,e,t[0])}o=await(async e=>{const t=await fin.System.getMonitorInfo(),a=t.primaryMonitor.availableRect.bottom-t.primaryMonitor.availableRect.top,n=t.primaryMonitor.availableRect.right-t.primaryMonitor.availableRect.left;return e.defaultHeight=e.defaultHeight||"800",e.defaultWidth=e.defaultWidth||"800",a<e.defaultHeight&&(e.defaultHeight=a),n<e.defaultWidth&&(e.defaultWidth=n),e})(o);const i=(e,t)=>super.createWindow(e,t);return(n?(e=>async(t,a)=>{const n=await e(t,a);return t?.workspacePlatform?._internalDeferShowEnabled?(await n.addListener(U.ShowRequested,(()=>{})),n):n})(i):i)(o,a)}async createView(t,a){return t.opts=Ya(t.opts,e?.defaultViewOptions),t.opts=await Za(t.opts,this.fetchManifest,a),super.createView(t,a)}async replaceView(t,a){return t.opts.newView=await Ya(t.opts.newView,e?.defaultViewOptions),t.opts.newView=await Za(t.opts.newView,this.fetchManifest,a),super.replaceView(t,a)}async replaceLayout(e,t){return e.opts.layout?.dimensions,super.replaceLayout(e,t)}async closeView(e,t){const a=fin.View.wrapSync(e.view);await super.closeView(e,t),await a.destroy().catch((e=>e))}async getSavedPage(...e){return yt.apply(this,e)}async getSavedPages(...e){return ht.apply(this,e)}async createSavedPage(...e){return ft.apply(this,e)}async deleteSavedPage(...e){return mt.apply(this,e)}async updateSavedPage(...e){return St.apply(this,e)}async getSavedWorkspace(...e){return $a.apply(this,e)}async getSavedWorkspaces(...e){return Ha.apply(this,e)}async createSavedWorkspace(...e){return qa.apply(this,e)}async deleteSavedWorkspace(...e){return Ka.apply(this,e)}async updateSavedWorkspace(...e){return ja.apply(this,e)}async attachPagesToWindow(t){t.pages=await on(t.pages,e?.defaultPageOptions),await _e(t)}async openGlobalContextMenuInternal(...e){return Ua.apply(this,e)}async openGlobalContextMenu(...e){return Da.apply(this,e)}async openViewTabContextMenuInternal(...e){return _a.apply(this,e)}async openViewTabContextMenu(...e){return Da.apply(this,e)}async openPageTabContextMenuInternal(...e){return Fa.apply(this,e)}async openPageTabContextMenu(...e){return Da.apply(this,e)}async openSaveButtonContextMenu(...e){return Da.apply(this,e)}async openSaveButtonContextMenuInternal(...e){return Ga.apply(this,e)}}return"function"==typeof t?t(o):new o};async function ln(){!function(){const e=x();e.addListener(O.WindowOptionsChanged,Qe),e.addListener(O.WindowClosed,Je),e.addListener(O.WindowCreated,Je)}(),async function(){const e=fin.Application.getCurrentSync();await e.addListener("window-focused",pe)}();oe(await ie())}let wn;function un({overrideCallback:e,interopOverride:t,browser:a}){if(!S)throw new Error("Cannot be used outside an OpenFin env.");if(!wn){fin.Platform.getCurrentSync().once("platform-api-ready",(()=>ln())),a?.title&&(n=a.title,Qt=n),wn=fin.Platform.init({overrideCallback:pn(a,e||a?.overrideCallback),interopOverride:t||a?.interopOverride}),(async e=>{z(j.Platform,e)})({allowed:!0})}var n;return wn}const gn=async({theme:e,customActions:t,...a})=>{const n=T.split(".").map((e=>parseInt(e))),o=await(async e=>new Promise((async t=>{const a=(await fin.System.getVersion()).split(".").map((e=>parseInt(e)));t(e.every(((t,n)=>!(n<3)||a[n]===e[n])))})))(n);var i;if(e&&((i=e).forEach((e=>{const t=e.palette.backgroundPrimary;if(!t.includes("#")&&!t.includes("rgb")&&!t.includes("hsl"))throw new Error("Background primary color is not the right format.")})),cn=i,(async e=>{z(j.Theming,e)})({allowed:!0})),t&&(Xe=t),o)return un(a);throw new Error(`Runtime version is not supported.  ${n[0]}.${n[1]}.${n[2]}.* is required`)};module.exports=d})();
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/@openfin/workspace/index.js":
/*!******************************************************!*\
  !*** ../../node_modules/@openfin/workspace/index.js ***!
  \******************************************************/
/***/ ((module) => {

(()=>{"use strict";var e={3133:(e,t,n)=>{n.r(t),n.d(t,{CLIAction:()=>ze.Pt,CLIFilterOptionType:()=>ze.el,CLITemplate:()=>ze.yW,deregister:()=>Ye,hide:()=>tt,register:()=>Qe,show:()=>et});var o={};n.r(o),n.d(o,{subscribe:()=>ie});var r={};n.r(r),n.d(r,{create:()=>Ge});var i=n(6532),s=n(7405);const a="home";var c;!function(e){e.Commands="home-commands"}(c||(c={}));var d,u=n(5806);n(7564);!function(e){e[e.Initial=0]="Initial",e[e.Open=1]="Open",e[e.Close=2]="Close"}(d||(d={}));var f=n(5316);const l="all",p="0",g="5",w="6",h=()=>{};function y(e,t){return e?`${e}-${t}`:t}function v(e){return`__search-${e}-topic__`}const m=new Map;function S(e,t){m.has(e)||m.set(e,new Set),m.get(e).add(t)}function C(e,t){const n=m.get(e);n&&n.delete(t)}const P=new Map;function R(e,t){P.has(e)||P.set(e,new Set),P.get(e).add(t)}function b(e,t){const n=P.get(e);n&&n.delete(t)}const T=new Map;async function I(e,t){T.has(e)||T.set(e,new Map),T.get(e).set(t.id,t);const n=m.get(e);if(!n)return;const o=[...n].map((e=>e()));await Promise.all(o)}async function L(e,t){const n=T.get(e);if(!n)return;n.delete(t);const o=P.get(e);if(!o)return;const r=[...o].map((e=>e()));await Promise.all(r)}function k(e){return T.get(e)?[...T.get(e).values()]:[]}function M(e){const t=T.get(e);t&&t.clear()}function B(e,t){const n=T.get(e);return n?n.get(t):null}function O(e,t,n){return{...e,action:n||{...e.actions[0],trigger:f.px.UserAction},dispatcherIdentity:t}}function x(e,t,n="ascending"){const o=e||[];if(!t?.length)return o;const r=[],i=new Map;t.forEach((e=>{if(e.key)return i.set(e.key,e);r.push(e)}));let s=o.map((e=>{const{key:t}=e;if(t&&i.has(t)){const e=i.get(t);return i.delete(t),e}return e}));return s.push(...i.values(),...r),s="ascending"===n?s.sort(((e,t)=>(null!==e.score&&void 0!==e.score?e.score:1/0)-(null!==t.score&&void 0!==t.score?t.score:1/0))):s.sort(((e,t)=>(null!==t.score&&void 0!==t.score?t.score:1/0)-(null!==e.score&&void 0!==e.score?e.score:1/0))),s}function A(e){const t={};let n=[];let o=[];let r=d.Initial;t.getStatus=()=>r,t.getResultBuffer=()=>n,t.setResultBuffer=e=>{n=e,n?.length&&t.onChange()},t.getRevokedBuffer=()=>o,t.setRevokedBuffer=e=>{o=e,o?.length&&t.onChange()},t.onChange=h;const i={};return t.res=i,i.close=()=>{r!==d.Close&&(r=d.Close,t.onChange())},i.open=()=>{r!==d.Open&&(r=d.Open,t.onChange())},i.respond=n=>{const o=x(t.getResultBuffer(),n,e);t.setResultBuffer(o)},i.revoke=(...e)=>{const n=new Set(e),o=t.getResultBuffer().filter((({key:e})=>{const t=n.has(e);return t&&n.delete(e),!t}));t.setResultBuffer(o),n.size&&(t.getRevokedBuffer().forEach((e=>n.add(e))),t.setRevokedBuffer([...n]))},t}function W(e,t,n){const o=new Set;let r=!1;return{close:()=>{r=!0;for(const e of o)e()},req:{id:t,topic:e,...n,context:n?.context||{},onClose:e=>{o.add(e),r&&e()},removeListener:e=>{o.delete(e)}}}}function D(){return{name:fin.me.name,uuid:fin.me.uuid}}function E(){let e;try{const t=fin.Platform.getCurrentSync();if(!t?.identity)return;e=t.identity.uuid}catch(e){}return e}const F="deregistered or does not exist",_=new Error(`provider ${F}`),$=new Error("provider with name already exists"),q=new Error("bad payload"),G=new Error("subscription rejected"),N=new Error(`channel ${F}`),H=new Map;function U(e){const t=V(e);if(t)return t;throw N}function V(e){const t=H.get(e);if(t)return t}function j(e,t){H.set(e,t)}const K=new Map;function X(e){K.has(e)||K.set(e,new Map);const t=K.get(e);return{getRequestsForIdentity:e=>{const n=function(e){return`${e.uuid}:${e.name}`}(e);return t.has(n)||t.set(n,new Map),t.get(n)}}}async function J(e,t){return(await U(e)).dispatch(p,t)}function Z({namespacedTopic:e,topic:t}){const n=B.bind(null,e),o=X(e),r=J.bind(null,e);return async(e,i)=>{if(!e||!e.id||!e.providerId){const e=q;return{error:e.message}}const{id:s,providerId:a}=e,c=n(a);if(!c){const e=_;return{error:e.message}}const d=o.getRequestsForIdentity(i);let u=d.get(e.id);u||(u=W(t,s,e),d.set(e.id,u));const f=A(),l=()=>{const e=f.getResultBuffer();f.setResultBuffer([]);const t=f.getRevokedBuffer();f.setRevokedBuffer([]);const n=f.getStatus();r({id:s,providerId:a,results:e,revoked:t,status:n})};let p=!0,g=!1;f.onChange=()=>{if(p)return p=!1,void l();g||(g=!0,setTimeout((()=>{g=!1,l()}),100))};try{const{results:e,context:t}=await c.onUserInput(u.req,f.res),n=f.getStatus();return{id:s,providerId:a,status:n,results:e,context:t}}catch(e){return{id:s,providerId:a,error:e.message}}}}async function z(e,t,n){const o=n||await U(e),r=D(),i={identity:r,...t,onUserInput:void 0,onResultDispatch:void 0};await o.dispatch("2",i),await I(e,{identity:r,...t})}async function Q(e,t){const n=await U(e);return await n.dispatch("3",t),L(e,t)}async function Y(e,t,n,o){const r=O(n,D(),o),i=B(e,t);if(i){const{onResultDispatch:e}=i;if(!e)return;return e(r)}const s={providerId:t,result:r};return(await U(e)).dispatch(g,s)}async function ee(e,t){const n={...t,context:t?.context||{}},o={},r=async function*(e,t,{setState:n}){const o=await U(e);for(;;){const e=await o.dispatch("1",t),r=e.error;if(r)throw new Error(r);const i=e;if(t.id=i.id,n(i.state),i.done)return i.value;yield i.value}}(e,n,{setState:e=>{o.state=e}});let i=await r.next();return o.id=n.id,o.close=()=>{!async function(e,t){(await U(e)).dispatch(w,{id:t})}(e,o.id)},o.next=()=>{if(i){const e=i;return i=void 0,e}return r.next()},o}async function te(e){return(await U(e)).dispatch("4",null)}async function ne(e){const t=await U(e);var n;n=e,H.delete(n),M(e),await t.disconnect()}function oe(e){const{namespacedTopic:t}=e,n=X(t);return async o=>{if(!V(t))return;const r=n.getRequestsForIdentity(o);for(const{req:e,close:t}of r.values())t(),r.delete(e.id);j(t,(async e=>{const{namespacedTopic:t}=e,n=await re(e);for(const e of k(t))await z(t,e,n);return n})(e))}}async function re(e){const{namespacedTopic:t}=e,n=v(t),o=await async function(e){for(let t=0;t<50;t++)try{return await fin.InterApplicationBus.Channel.connect(e,{wait:!1})}catch(e){if(49===t)throw e;await new Promise((e=>setTimeout(e,1e3)))}}(n);return o.register(p,Z(e)),o.register(w,function(e){const t=X(e);return(e,n)=>{const o=t.getRequestsForIdentity(n),r=o.get(e.id);r&&(r.close(),o.delete(e.id))}}(t)),o.register(g,function(e){return async(t,n)=>{if(!t||!t.providerId||!t.result)return;const o=B(e,t.providerId);if(!o)return;const{onResultDispatch:r}=o;return r?(t.result.dispatcherIdentity=n,r(t.result)):void 0}}(t)),o.onDisconnection(oe(e)),o}async function ie(e){const t=("string"==typeof e?e:e?.topic)||l,n=("string"==typeof e?null:e?.uuid)||E(),o=y(n,t),r={topic:t,namespace:n,namespacedTopic:o};let i=V(o);return i||(i=re(r),j(o,i),await i),{getAllProviders:te.bind(null,o),register:z.bind(null,o),search:ee.bind(null,o),deregister:Q.bind(null,o),dispatch:Y.bind(null,o),disconnect:ne.bind(null,o)}}const se=new Map;function ae(e){const t=ce(e);if(t)return t;throw N}function ce(e){const t=se.get(e);if(t)return t}const de=new Map;function ue(e,t){de.has(e)||de.set(e,new Set),de.get(e).add(t)}function fe(e,t){const n=de.get(e);n&&n.delete(t)}function le(e){return[...k(e)].map((e=>({...e,onUserInput:void 0,onResultDispatch:void 0})))}async function pe(e,t){if(B(e,t.id))throw new Error("provider with name already exists");const n=D();await I(e,{identity:n,...t})}function ge(e,t){L(e,t)}async function we(e,t,n,o){const r=B(e,t);if(!r)throw _;const{onResultDispatch:i}=r;if(!i)return;return i(O(n,D(),o))}async function*he(e,t,n){const o=function(e,t){const n=[],o=[],r=[],i=[];for(const s of e){const e=A(s.scoreOrder),a={results:[],provider:{id:s.id,identity:s.identity,title:s.title,scoreOrder:s.scoreOrder,icon:s.icon,dispatchFocusEvents:s.dispatchFocusEvents}};n.push(a),o.push(e);const c=(async()=>{try{const{results:n,context:o}=await s.onUserInput(t,e.res);a.results=x(a.results,n),a.context={...a.context,...o}}catch(e){a.error=e}})();c.finally((()=>{c.done=!0})),i.push(c),r.push(r.length)}return{providerResponses:n,listenerResponses:o,openListenerResponses:r,initialResponsePromises:i}}(t.targets?t.targets.map((t=>B(e,t))).filter((e=>!!e)):[...k(e).filter((e=>!e.hidden))],t),{providerResponses:r,listenerResponses:i}=o;let{openListenerResponses:s,initialResponsePromises:a}=o,c=f.De.Fetching;const u=e=>{c=e,n.setState(c)};let l,p=!1;t.onClose((()=>{p=!0,l&&l()}));do{let e=!1;if(a.length){const t=[];for(const n of a)n.done?e=!0:t.push(n);a=t,a.length||(u(f.De.Fetched),e=!0)}let t,n=!1;const o=()=>{n=!0,t&&t()},g=[];for(const t of s){const n=i[t],s=r[t],a=n.getStatus();(a===d.Open||c===f.De.Fetching&&a===d.Initial)&&(g.push(t),n.onChange=o);const u=n.getResultBuffer();u.length&&(n.setResultBuffer([]),s.results=x(s.results,u),e=!0);const l=n.getRevokedBuffer();if(l.length){n.setRevokedBuffer([]);const t=new Set(l);s.results=s.results.filter((({key:e})=>!t.has(e))),e=!0}}if(s=g,e&&(yield r),p)break;n||(s.length||a.length)&&await Promise.race([...a,new Promise((e=>{t=e})),new Promise((e=>{l=e}))])}while(s.length||a.length);return u(f.De.Complete),r}let ye=0;function ve({namespacedTopic:e,topic:t},n){ye+=1;const o=W(t,ye.toString(),n),r=he(e,o.req,{setState:e=>{r.state=e}});return r.id=ye.toString(),r.close=o.close,r.state=f.De.Fetching,r}const me=new Map;function Se(e,t){return`${e}:${t}`}function Ce(e){return async(t,...n)=>{if(!t)return{error:q.message};let o;if(t.id)o=Se(e.namespacedTopic,t.id);else{const n=ve(e,t);o=Se(e.namespacedTopic,n.id),t.id=n.id,me.set(o,{generator:n})}const r=me.get(o);clearTimeout(r.timeout);const i=await r.generator.next();return r.timeout=function(e){return window.setTimeout((()=>{me.delete(e)}),1e4)}(o),{...i,id:t.id,state:r.generator.state}}}function Pe(e,t,n){return ae(e).dispatch(t,w,{id:n})}function Re(e){return t=>function(e,t){const n=Se(e,t),o=me.get(n);o&&o.generator.close()}(e,t.id)}async function be(e,t,{id:n,query:o,context:r,targets:i}){const s=ae(e),a={id:n,query:o,context:r,targets:i,providerId:t.id},c=await s.dispatch(t.identity,p,a),d=c.error;if(d)throw new Error(d);return c}const Te=new Map;function Ie(e,t,n){return`${e}:${t.name}:${t.uuid}:${n}`}const Le=new Map;function ke(e,t,n){return`${e}:${t}:${n}`}function Me(e,t){const n=Ie.bind(null,e,t.identity),o=Pe.bind(null,e,t.identity),r=be.bind(null,e,t);return async(i,s)=>{const a=n(i.id);if(!Te.has(a)){const e=()=>{o(i.id),Te.delete(a)};Te.set(a,e),i.onClose(e)}const c=ke(e,t.id,i.id),u=()=>{Le.delete(c),s.close()};i.onClose(u),Le.set(c,(e=>{e.results?.length&&s.respond(e.results),e.revoked?.length&&s.revoke(...e.revoked),e.status===d.Open&&s.open(),e.status===d.Close&&u()}));const f=await r(i);return f.status===d.Open&&s.open(),f.status!==d.Close&&f.status!==d.Initial||u(),f}}function Be(e,t){return async n=>{const o=ae(e),r={providerId:t.id,result:n};return o.dispatch(t.identity,g,r)}}const Oe=new Map;function xe(e,t){return`${e}-${t.name}-${t.uuid}`}function Ae(e){return async(t,n)=>{if(!t||!t.id)return void new Error(JSON.stringify(t));if(B(e,t.id))throw $;t.identity=n,await async function(e,t){const n=xe(e,t.identity);Oe.has(n)||Oe.set(n,[]),Oe.get(n).push(t.id),await I(e,{...t,onUserInput:Me(e,t),onResultDispatch:Be(e,t)})}(e,t)}}function We(e){return t=>{t&&function(e,t){const n=B(e,t);if(!n)return;const o=xe(e,n.identity),r=Oe.get(o);if(r){const n=r.findIndex((e=>e===t));-1!==n&&(r.splice(n,1),L(e,t))}}(e,t)}}const De=new Map;function Ee(e,t){De.has(e)||De.set(e,new Set),De.get(e).add(t)}function Fe(e,t){const n=De.get(e);n&&n.delete(t)}function _e(e){return async t=>{!function(e,t){const n=xe(e,t),o=Oe.get(n);if(o){for(const t of o)L(e,t);Oe.delete(n)}}(e,t);const n=De.get(e);n&&n.forEach((e=>e(t)))}}async function $e(e){const{namespacedTopic:t}=e,n=v(e.namespacedTopic),o=await(r=n,fin.InterApplicationBus.Channel.create(r));var r;return o.onConnection(function({namespacedTopic:e}){return async t=>{const n=de.get(e);if(n)for(const e of n)if(!await e(t))throw G}}(e)),o.onDisconnection(_e(t)),o.register(w,Re(t)),o.register(p,function(e){return t=>{const n=ke(e,t.providerId,t.id),o=Le.get(n);o&&o(t)}}(t)),o.register("2",Ae(t)),o.register("3",We(t)),o.register("4",function(e){return async()=>le(e)}(t)),o.register("1",Ce(e)),o.register(g,function(e){return async(t,n)=>{if(!t||!t.providerId||!t.result)return;const o=B(e,t.providerId);if(!o)throw _;const{onResultDispatch:r}=o;return r?(t.result.dispatcherIdentity=n,r(t.result)):void 0}}(t)),o}async function qe(e){const t=ae(e);var n;n=e,se.delete(n),await t.destroy(),M(e)}async function Ge(e){const t=("string"==typeof e?e:e?.topic)||l,n=E(),o=y(n,t),r={topic:t,namespace:n,namespacedTopic:o};let i=ce(o);i||(i=await $e(r),function(e,t){se.set(e,t)}(o,i));const s=fe.bind(null,o),a=Fe.bind(null,o),c=C.bind(null,o),d=b.bind(null,o);return{getAllProviders:le.bind(null,o),search:ve.bind(null,r),register:pe.bind(null,o),deregister:ge.bind(null,o),onSubscription:ue.bind(null,o),onDisconnect:Ee.bind(null,o),onRegister:S.bind(null,o),onDeregister:R.bind(null,o),dispatch:we.bind(null,r),disconnect:qe.bind(null,o),removeListener:e=>{s(e),a(e),c(e),d(e)}}}const{create:Ne}=r,{subscribe:He}=o,Ue={create:Ne,subscribe:He,defaultTopic:"all"},Ve=()=>{const e=window;e.search=Ue,e.fin&&(e.fin.Search=Ue)},je=e=>{const t=()=>{Ve(),window.removeEventListener(e,t)};return t};if("undefined"!=typeof window){Ve();const e="load",t=je(e);window.addEventListener(e,t);const n="DOMContentLoaded",o=je(n);window.addEventListener(n,o)}const Ke=new Map;async function Xe(){await async function(e){Ke.set(e,await He({topic:e,uuid:u.q9.Workspace}))}(a)}let Je;async function Ze(e){return await async function(){return Je||(Je=Xe()),Je}(),Ke.get(e)}var ze=n(3758);const Qe=async e=>{if(!e.icon)throw new Error(`${e.id} provider needs to have icon property defined.`);await(0,s.aB)();const t=await Ze(a);try{const n=await t.register(e);return(0,i.ck)({allowed:!0}),n}catch(e){throw(0,i.ck)({allowed:!1,rejectionCode:e.message}),e}},Ye=async e=>{await(0,s.aB)();return(await Ze(a)).deregister(e)};async function et(){return(await(0,s.Xl)()).dispatch(s.Ml.ShowHome,void 0)}async function tt(){return(await(0,s.Xl)()).dispatch(s.Ml.HideHome,void 0)}},3298:(e,t,n)=>{n.d(t,{w:()=>o.wt});var o=n(5316)},3758:(e,t,n)=>{var o,r,i;n.d(t,{Pt:()=>o,yW:()=>r,el:()=>i}),function(e){e.Suggestion="suggestion"}(o||(o={})),function(e){e.Contact="Contact",e.Custom="Custom",e.List="List",e.Plain="Plain",e.SimpleText="SimpleText",e.Loading="Loading",e.Error="Error"}(r||(r={})),function(e){e.MultiSelect="MultiSelect"}(i||(i={}))},7564:(e,t,n)=>{n(3298),n(3758),n(6114),n(2109)},6114:(e,t,n)=>{var o,r;n.d(t,{L:()=>o,T:()=>r}),function(e){e.Snapshot="snapshot",e.Manifest="manifest",e.View="view",e.External="external"}(o||(o={})),function(e){e.LandingPage="landingPage",e.AppGrid="appGrid"}(r||(r={}))},2109:(e,t,n)=>{n.d(t,{p6:()=>o,Go:()=>r,bI:()=>i,ZJ:()=>s});const o={Container:"Container",Button:"Button"},r={Text:"Text",Image:"Image",List:"List"},i={...o,...r};var s;!function(e){e.Primary="primary",e.Secondary="secondary",e.TextOnly="textOnly"}(s||(s={}))},317:(e,t,n)=>{n.r(t),n.d(t,{AppManifestType:()=>i.L,StorefrontTemplate:()=>i.T,deregister:()=>f,hide:()=>l,register:()=>u,show:()=>p});var o=n(6532),r=n(7405);n(7564);var i=n(6114);let s;const a=new Map,c=e=>{if(!a.has(e))throw new Error(`Storefront Provider with id ${e} is not registered`);return a.get(e)},d=async e=>{const t=await(0,r.Xl)();if(a.has(e.id))throw new Error(`Storefront provider with id ${e.id} already registered`);return a.set(e.id,e),(e=>{e.isStorefrontActionsRegistered||(e.isStorefrontActionsRegistered=!0,e.register(r.Ml.GetStorefrontProviderApps,(e=>c(e).getApps())),e.register(r.Ml.GetStorefrontProviderFooter,(e=>c(e).getFooter())),e.register(r.Ml.GetStorefrontProviderLandingPage,(e=>c(e).getLandingPage())),e.register(r.Ml.GetStorefrontProviderNavigation,(e=>c(e).getNavigation())),e.register(r.Ml.LaunchStorefrontProviderApp,(({id:e,app:t})=>c(e).launchApp(t))))})(t),t.dispatch(r.Ml.RegisterStorefrontProvider,e)},u=e=>(s=d(e),(0,o.d9)({allowed:!0}),s),f=async e=>{await s,a.delete(e);return(await(0,r.Xl)()).dispatch(r.Ml.DeregisterStorefrontProvider,e)},l=async()=>{await s,await(0,r.aB)(),await(async()=>(await(0,r.Dm)()).dispatch(r.Ml.HideStorefront,void 0))()},p=async()=>{await s,await(0,r.aB)(),await(async()=>(await(0,r.Dm)()).dispatch(r.Ml.ShowStorefront,null))()}},7405:(e,t,n)=>{n.d(t,{Ml:()=>s,Dm:()=>a,Xl:()=>f,aB:()=>u});var o=n(6678);const r=o.Ax&&"complete"!==document.readyState&&new Promise((e=>document.addEventListener("readystatechange",(()=>{"complete"===document.readyState&&e()}))));var i=n(121);var s;!function(e){e.RegisterStorefrontProvider="register-storefront-provider",e.DeregisterStorefrontProvider="deregister-storefront-provider",e.GetStorefrontProviders="get-storefront-providers",e.HideStorefront="hide-storefront",e.GetStorefrontProviderApps="get-storefront-provider-apps",e.GetStorefrontProviderLandingPage="get-storefront-provider-landing-page",e.GetStorefrontProviderFooter="get-storefront-provider-footer",e.GetStorefrontProviderNavigation="get-storefront-provider-navigation",e.LaunchStorefrontProviderApp="launch-storefront-provider-app",e.ShowStorefront="show-storefront",e.CreateStorefrontWindow="create-storefront-window",e.ShowHome="show-home",e.HideHome="hide-home",e.AssignHomeSearchContext="assign-home-search-context",e.GetLegacyPages="get-legacy-pages",e.GetLegacyWorkspaces="get-legacy-workspaces",e.GetComputedPlatformTheme="get-computed-platform-theme"}(s||(s={}));const a=function(e){let t;return()=>{if(!o.sS)throw new Error("getChannelClient cannot be used outside an OpenFin env. Avoid using this method during pre-rendering.");return t||(t=(async()=>{await r;const n=await fin.InterApplicationBus.Channel.connect(e);return n.onDisconnection((async()=>{t=void 0})),n})().then((e=>e)).catch((n=>{throw t=void 0,new Error(`failed to connect to channel provider ${e}: ${n}`)}))),t}}("__of_workspace_protocol__"),c="isLaunchedViaLib",d=e=>{const t=new URL(e);return t.searchParams.append(c,"true"),t.toString()},u=async()=>{if(!await(0,i.JV)(i.iW))return(o.ZK||-1===navigator.userAgent.indexOf("Win"))&&await fin.Application.startFromManifest(d(o.aW)),fin.System.openUrlWithBrowser(d(o.GX))},f=async()=>(await u(),a())},5806:(e,t,n)=>{n.d(t,{q9:()=>o});var o,r,i,s=n(6678);!function(e){e.Workspace="openfin-browser"}(o||(o={})),function(e){e.RunRequested="run-requested",e.WindowOptionsChanged="window-options-changed",e.WindowClosed="window-closed",e.WindowCreated="window-created"}(r||(r={})),function(e){e.FinProtocol="fin-protocol"}(i||(i={}));s.AB,s.AB,o.Workspace,o.Workspace},6678:(e,t,n)=>{var o;n.d(t,{sS:()=>r,Ax:()=>i,AB:()=>a,oC:()=>c,ZK:()=>d,GX:()=>u,aW:()=>f,u0:()=>p}),function(e){e.Local="local",e.Dev="dev",e.Staging="staging",e.Prod="prod"}(o||(o={}));const r="undefined"!=typeof window&&"undefined"!=typeof fin,i=("undefined"==typeof process||process.env?.JEST_WORKER_ID,"undefined"!=typeof window),s=i?window.origin:o.Local,a=r&&fin.me.uuid,c=r&&fin.me.name,d=(r&&fin.me.entityType,"prod"===o.Local),u=(o.Dev,o.Staging,o.Prod,"fins://system-apps/workspace"),f="https://cdn.openfin.co/workspace/8.1.7/app.json",l=e=>e.startsWith("http://")||e.startsWith("https://")?e:s+e,p=(l("https://cdn.openfin.co/workspace/8.1.7"),l("https://cdn.openfin.co/workspace/8.1.7"),"undefined"!=typeof WORKSPACE_DOCS_PLATFORM_URL&&l(WORKSPACE_DOCS_PLATFORM_URL),"undefined"!=typeof WORKSPACE_DOCS_CLIENT_URL&&l(WORKSPACE_DOCS_CLIENT_URL),"8.1.7")},6532:(e,t,n)=>{n.d(t,{ck:()=>a,d9:()=>c});var o,r=n(6678),i=n(121);!function(e){e.Browser="Browser",e.Home="Home",e.Notification="Notification",e.Storefront="Storefront",e.Platform="Platform",e.Theming="Theming"}(o||(o={}));const s=async(e,t)=>{const n={apiVersion:t.apiVersion||r.u0,componentName:e,componentVersion:r.u0,...t};fin.System.registerUsage({type:"workspace-licensing",data:n})},a=async e=>{i.OI.uuid===i.Gi.uuid&&i.OI.name===i.Gi.name||s(o.Home,e)},c=async e=>{s(o.Storefront,e)}},121:(e,t,n)=>{n.d(t,{Gi:()=>c,OI:()=>d,iW:()=>u,JV:()=>f});var o,r,i=n(5806),s=n(6678);!function(e){e.Home="openfin-home",e.Dock="openfin-dock",e.Storefront="openfin-storefront",e.HomeInternal="openfin-home-internal",e.BrowserMenu="openfin-browser-menu",e.BrowserIndicator="openfin-browser-indicator",e.BrowserWindow="internal-generated-window"}(o||(o={})),function(e){e.Shown="shown",e.BoundsChanged="bounds-changed",e.LayoutReady="layout-ready",e.EndUserBoundsChanging="end-user-bounds-changing",e.Blurred="blurred",e.CloseRequested="close-requested",e.Focused="focused",e.ShowRequested="show-requested",e.ViewCrashed="view-crashed",e.ViewAttached="view-attached",e.ViewDetached="view-detached",e.ViewPageTitleUpdated="view-page-title-updated",e.ViewDestroyed="view-destroyed",e.OptionsChanged="options-changed"}(r||(r={}));function a(e){if(!s.sS)throw new Error("getOFWindow can only be used in an OpenFin env. Avoid calling this method during pre-rendering.");return fin.Window.wrapSync(e)}const c={name:s.oC,uuid:s.AB};const d={name:o.Home,uuid:i.q9.Workspace},u=(o.Dock,i.q9.Workspace,o.Storefront,i.q9.Workspace,{name:i.q9.Workspace,uuid:i.q9.Workspace});const f=e=>a(e).getOptions().then((()=>!0)).catch((()=>!1))},5316:(e,t,n)=>{var o,r,i;n.d(t,{De:()=>o,px:()=>r,wt:()=>i}),function(e){e.Fetching="fetching",e.Fetched="fetched",e.Complete="complete"}(o||(o={})),function(e){e.UserAction="user-action",e.FocusChange="focus-change",e.Reload="reload"}(r||(r={})),function(e){e.Active="active",e.Default="default"}(i||(i={}))}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};(()=>{n.r(o),n.d(o,{AppManifestType:()=>p.L,ButtonStyle:()=>f.ZJ,CLIAction:()=>l.Pt,CLIFilterOptionType:()=>l.el,CLITemplate:()=>l.yW,ContainerTemplateFragmentNames:()=>f.p6,Home:()=>r,Legacy:()=>e,PresentationTemplateFragmentNames:()=>f.Go,SearchTagBackground:()=>u.w,Storefront:()=>d,StorefrontTemplate:()=>p.T,TemplateFragmentTypes:()=>f.bI});var e={};n.r(e),n.d(e,{getPages:()=>a,getWorkspaces:()=>c});var t,r=n(3133);n(6678),n(121);!function(e){e.TabCreated="tab-created",e.ContainerCreated="container-created",e.ContainerResized="container-resized"}(t||(t={}));new Map;var i;!function(e){e.CurrentWorkspaceId="currentWorkspaceId",e.LastFocusedBrowserWindow="lastFocusedBrowserWindow",e.MachineName="machineName",e.NewTabPageLayout="NewTabPageLayout",e.NewTabPageSort="NewTabPageSort"}(i||(i={}));var s=n(7405);const a=()=>async function(){return(await(0,s.Dm)()).dispatch(s.Ml.GetLegacyPages,void 0)}(),c=()=>(async()=>(await(0,s.Dm)()).dispatch(s.Ml.GetLegacyWorkspaces,void 0))();var d=n(317),u=n(3298),f=n(2109),l=n(3758),p=n(6114)})(),module.exports=o})();
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/events/events.js":
/*!*******************************************!*\
  !*** ../../node_modules/events/events.js ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
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

/***/ "../../node_modules/openfin-adapter/src/api/application/Factory.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/application/Factory.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const base_1 = __webpack_require__(/*! ../base */ "../../node_modules/openfin-adapter/src/api/base.js");
const validate_1 = __webpack_require__(/*! ../../util/validate */ "../../node_modules/openfin-adapter/src/util/validate.js");
const Instance_1 = __webpack_require__(/*! ./Instance */ "../../node_modules/openfin-adapter/src/api/application/Instance.js");
/**
 * @typedef {object} ApplicationOption
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
 * @property {string} uuid
 * The _Unique Universal Identifier_ (UUID) of the application, unique within the set of all other applications
 *  running in the OpenFin Runtime.
 *
 * Note that `name` and `uuid` must match.
 *
 * @property {boolean} [enableJumpList=false]
 * Enables the use of the Jumplists API and the 'pin to taskbar' functionality.
 * Only relevant in Windows.
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
     * @param { ApplicationOption } appOptions
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
     * @param { ApplicationOption } appOptions
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

/***/ "../../node_modules/openfin-adapter/src/api/application/Instance.js":
/*!**************************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/application/Instance.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Application = void 0;
/* eslint-disable import/prefer-default-export */
const base_1 = __webpack_require__(/*! ../base */ "../../node_modules/openfin-adapter/src/api/base.js");
const window_1 = __webpack_require__(/*! ../window */ "../../node_modules/openfin-adapter/src/api/window/index.js");
const view_1 = __webpack_require__(/*! ../view */ "../../node_modules/openfin-adapter/src/api/view/index.js");
/**
 * @classdesc An object representing an application. Allows the developer to create,
 * execute, show/close an application as well as listen to <a href="tutorial-Application.EventEmitter.html">application events</a>.
 * @class
 * @hideconstructor
 */
class Application extends base_1.EmitterBase {
    constructor(wire, identity) {
        super(wire, ['application', identity.uuid]);
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
     * @return {Promise.<any>}
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
     * @return {Promise.<LogInfo>}
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
     * @summary Retrieves information about the system tray.
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

/***/ "../../node_modules/openfin-adapter/src/api/application/index.js":
/*!***********************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/application/index.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
const Factory_1 = __webpack_require__(/*! ./Factory */ "../../node_modules/openfin-adapter/src/api/application/Factory.js");
__exportStar(__webpack_require__(/*! ./Instance */ "../../node_modules/openfin-adapter/src/api/application/Instance.js"), exports);
exports["default"] = Factory_1.default;


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/base.js":
/*!**********************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/base.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Reply = exports.EmitterBase = exports.Base = void 0;
const promises_1 = __webpack_require__(/*! ../util/promises */ "../../node_modules/openfin-adapter/src/util/promises.js");
const fin_store_1 = __webpack_require__(/*! ../transport/fin_store */ "../../node_modules/openfin-adapter/src/transport/fin_store.js");
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
    get topic() {
        return this._topic || this.constructor.name.replace('_', '').toLowerCase();
    }
    set topic(t) {
        this._topic = t;
    }
    get me() {
        return this.wire.me;
    }
}
exports.Base = Base;
class EmitterBase extends Base {
    constructor(wire, emitterAccessor) {
        super(wire);
        this.emitterAccessor = emitterAccessor;
        this.eventNames = () => (this.hasEmitter() ? this.getOrCreateEmitter().eventNames() : []);
        this.emit = (eventName, payload, ...args) => {
            return this.hasEmitter() ? this.getOrCreateEmitter().emit(eventName, payload, ...args) : false;
        };
        this.hasEmitter = () => this.wire.eventAggregator.has(this.emitterAccessor);
        this.getOrCreateEmitter = () => this.wire.eventAggregator.getOrCreate(this.emitterAccessor);
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
        this.listeners = (event) => this.hasEmitter() ? this.getOrCreateEmitter().listeners(event) : [];
    }
    deleteEmitterIfNothingRegistered(emitter) {
        if (emitter.eventNames().length === 0) {
            this.wire.eventAggregator.delete(this.emitterAccessor);
        }
    }
}
exports.EmitterBase = EmitterBase;
class Reply {
}
exports.Reply = Reply;


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/clipboard/index.js":
/*!*********************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/clipboard/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const base_1 = __webpack_require__(/*! ../base */ "../../node_modules/openfin-adapter/src/api/base.js");
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

/***/ "../../node_modules/openfin-adapter/src/api/events/emitterMap.js":
/*!***********************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/events/emitterMap.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

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

/***/ "../../node_modules/openfin-adapter/src/api/events/eventAggregator.js":
/*!****************************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/events/eventAggregator.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const emitterMap_1 = __webpack_require__(/*! ./emitterMap */ "../../node_modules/openfin-adapter/src/api/events/emitterMap.js");
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

/***/ "../../node_modules/openfin-adapter/src/api/external-application/Factory.js":
/*!**********************************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/external-application/Factory.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const base_1 = __webpack_require__(/*! ../base */ "../../node_modules/openfin-adapter/src/api/base.js");
const Instance_1 = __webpack_require__(/*! ./Instance */ "../../node_modules/openfin-adapter/src/api/external-application/Instance.js");
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

/***/ "../../node_modules/openfin-adapter/src/api/external-application/Instance.js":
/*!***********************************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/external-application/Instance.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExternalApplication = void 0;
/* eslint-disable import/prefer-default-export */
const base_1 = __webpack_require__(/*! ../base */ "../../node_modules/openfin-adapter/src/api/base.js");
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
        super(wire, ['external-application', identity.uuid]);
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

/***/ "../../node_modules/openfin-adapter/src/api/external-application/index.js":
/*!********************************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/external-application/index.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
const Factory_1 = __webpack_require__(/*! ./Factory */ "../../node_modules/openfin-adapter/src/api/external-application/Factory.js");
exports["default"] = Factory_1.default;
__exportStar(__webpack_require__(/*! ./Instance */ "../../node_modules/openfin-adapter/src/api/external-application/Instance.js"), exports);


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/fin.js":
/*!*********************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/fin.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const events_1 = __webpack_require__(/*! events */ "../../node_modules/events/events.js");
// Import from the file rather than the directory in case someone consuming types is using module resolution other than "node"
const index_1 = __webpack_require__(/*! ./system/index */ "../../node_modules/openfin-adapter/src/api/system/index.js");
const index_2 = __webpack_require__(/*! ./window/index */ "../../node_modules/openfin-adapter/src/api/window/index.js");
const index_3 = __webpack_require__(/*! ./application/index */ "../../node_modules/openfin-adapter/src/api/application/index.js");
const index_4 = __webpack_require__(/*! ./interappbus/index */ "../../node_modules/openfin-adapter/src/api/interappbus/index.js");
const index_5 = __webpack_require__(/*! ./clipboard/index */ "../../node_modules/openfin-adapter/src/api/clipboard/index.js");
const index_6 = __webpack_require__(/*! ./external-application/index */ "../../node_modules/openfin-adapter/src/api/external-application/index.js");
const index_7 = __webpack_require__(/*! ./frame/index */ "../../node_modules/openfin-adapter/src/api/frame/index.js");
const index_8 = __webpack_require__(/*! ./global-hotkey/index */ "../../node_modules/openfin-adapter/src/api/global-hotkey/index.js");
const index_9 = __webpack_require__(/*! ./view/index */ "../../node_modules/openfin-adapter/src/api/view/index.js");
const index_10 = __webpack_require__(/*! ./platform/index */ "../../node_modules/openfin-adapter/src/api/platform/index.js");
const me_1 = __webpack_require__(/*! ./me */ "../../node_modules/openfin-adapter/src/api/me.js");
const fin_store_1 = __webpack_require__(/*! ../transport/fin_store */ "../../node_modules/openfin-adapter/src/transport/fin_store.js");
const interop_1 = __webpack_require__(/*! ./interop */ "../../node_modules/openfin-adapter/src/api/interop/index.js");
const snapshot_source_1 = __webpack_require__(/*! ./snapshot-source */ "../../node_modules/openfin-adapter/src/api/snapshot-source/index.js");
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

/***/ "../../node_modules/openfin-adapter/src/api/frame/Factory.js":
/*!*******************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/frame/Factory.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const base_1 = __webpack_require__(/*! ../base */ "../../node_modules/openfin-adapter/src/api/base.js");
const validate_1 = __webpack_require__(/*! ../../util/validate */ "../../node_modules/openfin-adapter/src/util/validate.js");
const Instance_1 = __webpack_require__(/*! ./Instance */ "../../node_modules/openfin-adapter/src/api/frame/Instance.js");
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

/***/ "../../node_modules/openfin-adapter/src/api/frame/Instance.js":
/*!********************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/frame/Instance.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._Frame = void 0;
/* eslint-disable import/prefer-default-export */
const base_1 = __webpack_require__(/*! ../base */ "../../node_modules/openfin-adapter/src/api/base.js");
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
        super(wire, ['frame', identity.uuid, identity.name]);
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

/***/ "../../node_modules/openfin-adapter/src/api/frame/index.js":
/*!*****************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/frame/index.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
const Factory_1 = __webpack_require__(/*! ./Factory */ "../../node_modules/openfin-adapter/src/api/frame/Factory.js");
exports["default"] = Factory_1.default;
__exportStar(__webpack_require__(/*! ./Instance */ "../../node_modules/openfin-adapter/src/api/frame/Instance.js"), exports);


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/global-hotkey/index.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/global-hotkey/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.nonHotkeyEvents = void 0;
const base_1 = __webpack_require__(/*! ../base */ "../../node_modules/openfin-adapter/src/api/base.js");
var apiActions;
(function (apiActions) {
    apiActions["REGISTER"] = "global-hotkey-register";
    apiActions["UNREGISTER"] = "global-hotkey-unregister";
    apiActions["UNREGISTER_ALL"] = "global-hotkey-unregister-all";
    apiActions["IS_REGISTERED"] = "global-hotkey-is-registered";
})(apiActions || (apiActions = {}));
var nonHotkeyEvents;
(function (nonHotkeyEvents) {
    nonHotkeyEvents["REGISTERED"] = "registered";
    nonHotkeyEvents["UNREGISTERED"] = "unregistered";
})(nonHotkeyEvents = exports.nonHotkeyEvents || (exports.nonHotkeyEvents = {}));
/**
 * The GlobalHotkey module can register/unregister a global hotkeys.
 * @namespace
 */
class GlobalHotkey extends base_1.EmitterBase {
    constructor(wire) {
        super(wire, ['global-hotkey']);
        this.topic = 'global-hotkey';
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
        await this.wire.sendAction("global-hotkey-register" /* REGISTER */, { hotkey });
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
        await this.wire.sendAction("global-hotkey-unregister" /* UNREGISTER */, { hotkey });
        return undefined;
    }
    /**
     * Unregisters all global hotkeys for the current application.
     * @return {Promise.<void>}
     * @tutorial GlobalHotkey.unregisterAll
     */
    async unregisterAll() {
        await Promise.all(this.eventNames()
            .filter((name) => !(name === "registered" /* REGISTERED */ || name === "unregistered" /* UNREGISTERED */))
            .map((name) => this.removeAllListeners(name)));
        await this.wire.sendAction("global-hotkey-unregister-all" /* UNREGISTER_ALL */, {});
        return undefined;
    }
    /**
     * Checks if a given hotkey has been registered
     * @param { string } hotkey a hotkey string
     * @return {Promise.<boolean>}
     * @tutorial GlobalHotkey.isRegistered
     */
    async isRegistered(hotkey) {
        const { payload: { data } } = await this.wire.sendAction("global-hotkey-is-registered" /* IS_REGISTERED */, { hotkey });
        return data;
    }
}
exports["default"] = GlobalHotkey;


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/interappbus/channel/channel.js":
/*!*********************************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/interappbus/channel/channel.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChannelBase = exports.ProtectedItems = void 0;
const idOrResult = (func) => (...args) => {
    const res = func(...args);
    return res === undefined ? args[1] : res;
};
class ProtectedItems {
    constructor(providerIdentity, send) {
        this.providerIdentity = providerIdentity;
        this.sendRaw = send;
        this.send = async (to, action, payload) => {
            const raw = await send('send-channel-message', {
                ...to,
                providerIdentity: this.providerIdentity,
                action,
                payload
            }).catch((reason) => {
                throw new Error(reason.message);
            });
            return raw.payload.data.result;
        };
    }
}
exports.ProtectedItems = ProtectedItems;
class ChannelBase {
    constructor(providerIdentity, send, channelProtectedMap) {
        this.defaultSet = false;
        this.subscriptions = new Map();
        this.defaultAction = (action, payload, id) => {
            throw new Error(`No action registered at target for ${action}`);
        };
        // The items in ProtectedItems are only used by subclass, but not exposed to public.
        // Use this way to avoid a malicious site to access them directly.
        channelProtectedMap.set(this, new ProtectedItems(providerIdentity, send));
    }
    async processAction(action, payload, senderIdentity) {
        try {
            const mainAction = this.subscriptions.has(action)
                ? this.subscriptions.get(action)
                : (currentPayload, id) => this.defaultAction(action, currentPayload, id);
            const preActionProcessed = this.preAction ? await this.preAction(action, payload, senderIdentity) : payload;
            const actionProcessed = await mainAction(preActionProcessed, senderIdentity);
            return this.postAction ? await this.postAction(action, actionProcessed, senderIdentity) : actionProcessed;
        }
        catch (e) {
            if (this.errorMiddleware) {
                return this.errorMiddleware(action, e, senderIdentity);
            }
            throw e;
        }
    }
    beforeAction(func) {
        if (this.preAction) {
            throw new Error('Already registered beforeAction middleware');
        }
        this.preAction = idOrResult(func);
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
        this.postAction = idOrResult(func);
    }
    remove(action) {
        this.subscriptions.delete(action);
    }
    setDefaultAction(func) {
        if (this.defaultSet) {
            throw new Error('default action can only be set once');
        }
        else {
            this.defaultAction = func;
            this.defaultSet = true;
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

/***/ "../../node_modules/openfin-adapter/src/api/interappbus/channel/client.js":
/*!********************************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/interappbus/channel/client.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const channel_1 = __webpack_require__(/*! ./channel */ "../../node_modules/openfin-adapter/src/api/interappbus/channel/channel.js");
const clientProtectedMap = new WeakMap();
class ChannelClient extends channel_1.ChannelBase {
    constructor(routingInfo, send, clientMap) {
        super(routingInfo, send, clientProtectedMap);
        this.disconnectListener = () => undefined;
        this.clientMap = clientMap;
        this.endpointId = routingInfo.endpointId;
    }
    get providerIdentity() {
        const protectedObj = clientProtectedMap.get(this);
        return protectedObj.providerIdentity;
    }
    async dispatch(action, payload) {
        const protectedObj = clientProtectedMap.get(this);
        if (this.clientMap.get(this.endpointId)) {
            return protectedObj.send(protectedObj.providerIdentity, action, payload);
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
        const protectedObj = clientProtectedMap.get(this);
        const { channelName, uuid, name, channelId } = protectedObj.providerIdentity;
        await protectedObj.sendRaw('disconnect-from-channel', { channelName, uuid, name, endpointId: this.endpointId });
        this.removeChannel(channelId, this.endpointId);
    }
}
exports["default"] = ChannelClient;


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/interappbus/channel/index.js":
/*!*******************************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/interappbus/channel/index.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Channel = void 0;
const client_1 = __webpack_require__(/*! ./client */ "../../node_modules/openfin-adapter/src/api/interappbus/channel/client.js");
const provider_1 = __webpack_require__(/*! ./provider */ "../../node_modules/openfin-adapter/src/api/interappbus/channel/provider.js");
const base_1 = __webpack_require__(/*! ../../base */ "../../node_modules/openfin-adapter/src/api/base.js");
class Channel extends base_1.EmitterBase {
    constructor(wire) {
        super(wire, ['channel']);
        this.onmessage = (msg) => {
            if (msg.action === 'process-channel-message') {
                this.processChannelMessage(msg);
                return true;
            }
            if (msg.action === 'process-channel-connection') {
                this.processChannelConnection(msg);
                return true;
            }
            return false;
        };
        this.topic = 'channel';
        this.providerMap = new Map();
        this.clientMap = new Map();
        this.endpointIdMap = new Map();
        wire.registerMessageHandler(this.onmessage.bind(this));
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
        const opts = options || {};
        let resolver;
        let listener;
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
            const { payload: { data: routingInfo } } = await this.wire.sendAction('connect-to-channel', { channelName, ...opts });
            // Required for backwards compatibility
            if (!routingInfo.endpointId) {
                routingInfo.endpointId = this.wire.environment.getNextMessageId();
                // For New Clients connecting to Old Providers. To prevent multi-dispatching and publishing, we delete previously-connected
                // clients that are in the same context as the newly-connected client.
                this.checkForPreviousClientConnection(routingInfo.channelId);
            }
            const { channelId, endpointId } = routingInfo;
            // If there isn't a matching channel, the above sendAction call will error out and go to catch, skipping the logic below
            if (resolver) {
                resolver();
            }
            this.removeListener('connected', listener);
            const channel = new client_1.default(routingInfo, this.wire.sendAction.bind(this.wire), this.clientMap);
            this.addChannelToClientMaps(channel, channelId, endpointId);
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore use of protected property
            channel.removeChannel = this.removeChannelFromClientMaps.bind(this);
            this.on('disconnected', (eventPayload) => {
                if (eventPayload.channelName === channelName) {
                    this.removeChannelFromClientMaps(channelId, endpointId);
                    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                    // @ts-ignore use of private property
                    channel.disconnectListener(eventPayload);
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
    async create(channelName) {
        if (!channelName) {
            throw new Error('Please provide a channelName to create a channel');
        }
        const { payload: { data: providerIdentity } } = await this.wire.sendAction('create-channel', { channelName });
        const channel = new provider_1.ChannelProvider(providerIdentity, this.wire.sendAction.bind(this.wire));
        const key = providerIdentity.channelId;
        this.providerMap.set(key, channel);
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore use of protected property
        channel.removeChannel = this.removeChannelFromProviderMap.bind(this);
        this.on('client-disconnected', (eventPayload) => {
            if (eventPayload.channelName === channelName) {
                let remainingConnections = channel.connections.filter((identity) => {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                    // @ts-ignore use of non-existed property
                    return identity.endpointId === undefined || identity.endpointId !== eventPayload.endpointId;
                });
                if (remainingConnections.length === channel.connections.length) {
                    remainingConnections = channel.connections.filter((identity) => {
                        return identity.uuid !== eventPayload.uuid || identity.name !== eventPayload.name;
                    });
                }
                channel.connections = remainingConnections;
                // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                // @ts-ignore use of private property
                channel.disconnectListener(eventPayload);
            }
        });
        return channel;
    }
    addChannelToClientMaps(channel, channelId, endpointId) {
        this.clientMap.set(endpointId, channel);
        this.endpointIdMap.set(`${channelId}/${this.wire.me.uuid}/${this.wire.me.name}`, endpointId);
    }
    removeChannelFromClientMaps(channelId, endpointId) {
        this.clientMap.delete(endpointId);
        this.endpointIdMap.delete(`${channelId}/${this.wire.me.uuid}/${this.wire.me.name}`);
    }
    removeChannelFromProviderMap(channelId) {
        this.providerMap.delete(channelId);
    }
    checkForPreviousClientConnection(channelId) {
        const endpointIdFromPreviousConnection = this.endpointIdMap.get(`${channelId}/${this.wire.me.uuid}/${this.wire.me.name}`);
        if (endpointIdFromPreviousConnection) {
            this.removeChannelFromClientMaps(channelId, endpointIdFromPreviousConnection);
            console.warn('You have created a second connection to an older provider. First connection has been removed from the clientMap');
            console.warn('If the provider calls publish(), you may receive multiple messages.');
        }
    }
    async processChannelMessage(msg) {
        const { senderIdentity, providerIdentity, action, ackToSender, payload, intendedTargetIdentity } = msg.payload;
        let key;
        let bus;
        // If the sender is the client
        if (intendedTargetIdentity.channelId) {
            key = intendedTargetIdentity.channelId;
            bus = this.providerMap.get(key);
        }
        else if (intendedTargetIdentity.endpointId) {
            // If the sender is the provider
            key = intendedTargetIdentity.endpointId;
            bus = this.clientMap.get(key);
        }
        else {
            key = this.endpointIdMap.get(`${providerIdentity.channelId}/${this.wire.me.uuid}/${this.wire.me.name}`);
            bus = this.clientMap.get(key);
        }
        if (!bus) {
            ackToSender.payload.success = false;
            ackToSender.payload.reason = `Client connection with identity uuid: ${this.wire.me.uuid} / name: ${this.wire.me.name} no longer connected.`;
            return this.wire.sendRaw(ackToSender);
        }
        try {
            const res = await bus.processAction(action, payload, senderIdentity);
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
    async processChannelConnection(msg) {
        const { clientIdentity, providerIdentity, ackToSender, payload } = msg.payload;
        const key = providerIdentity.channelId;
        const bus = this.providerMap.get(key);
        if (!bus) {
            ackToSender.payload.success = false;
            ackToSender.payload.reason = `Channel "${providerIdentity.channelName}" has been destroyed.`;
            return this.wire.sendRaw(ackToSender);
        }
        try {
            if (!(bus instanceof provider_1.ChannelProvider)) {
                throw Error('Cannot connect to a channel client');
            }
            const res = await bus.processConnection(clientIdentity, payload);
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
}
exports.Channel = Channel;


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/interappbus/channel/provider.js":
/*!**********************************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/interappbus/channel/provider.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChannelProvider = void 0;
const channel_1 = __webpack_require__(/*! ./channel */ "../../node_modules/openfin-adapter/src/api/interappbus/channel/channel.js");
const runtimeVersioning_1 = __webpack_require__(/*! ../../../util/runtimeVersioning */ "../../node_modules/openfin-adapter/src/util/runtimeVersioning.js");
const providerProtectedMap = new WeakMap();
class ChannelProvider extends channel_1.ChannelBase {
    constructor(providerIdentity, send) {
        super(providerIdentity, send, providerProtectedMap);
        this.connectListener = () => undefined;
        this.disconnectListener = () => undefined;
        this.connections = [];
    }
    dispatch(to, action, payload) {
        if (!ChannelProvider.clientIdentityIncludesEndpointId(to)) {
            this.checkForMultipleClients(to, action);
        }
        if (this.isClientConnected(to)) {
            return providerProtectedMap.get(this).send(to, action, payload);
        }
        return Promise.reject(new Error(`The client you are trying to dispatch to is disconnected from this provider.
                {uuid: ${to.uuid}, name: ${to.name}}`));
    }
    async processAction(action, payload, senderIdentity) {
        if (ChannelProvider.clientIsMultiRuntime(senderIdentity) &&
            !runtimeVersioning_1.runtimeUuidMeetsMinimumRuntimeVersion(senderIdentity.runtimeUuid, '18.87.56.0')) {
            this.handleMultiRuntimeLegacyClient(senderIdentity);
        }
        else {
            this.checkForClientConnection(senderIdentity);
        }
        return super.processAction(action, payload, senderIdentity);
    }
    async processConnection(senderId, payload) {
        this.connections.push(senderId);
        return this.connectListener(senderId, payload);
    }
    publish(action, payload) {
        return this.connections.map((to) => providerProtectedMap.get(this).send(to, action, payload));
    }
    onConnection(listener) {
        this.connectListener = listener;
    }
    onDisconnection(listener) {
        this.disconnectListener = listener;
    }
    async destroy() {
        const protectedObj = providerProtectedMap.get(this);
        const { channelName, channelId } = protectedObj.providerIdentity;
        this.connections = [];
        await protectedObj.sendRaw('destroy-channel', { channelName });
        this.removeChannel(channelId);
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
    checkForMultipleClients(clientIdentity, action) {
        let count = 0;
        this.connections.forEach((c) => {
            if (c.name === clientIdentity.name && c.uuid === clientIdentity.uuid) {
                count += 1;
            }
        });
        if (count >= 2) {
            const protectedObj = providerProtectedMap.get(this);
            const { uuid, name } = clientIdentity;
            const providerUuid = protectedObj === null || protectedObj === void 0 ? void 0 : protectedObj.providerIdentity.uuid;
            const providerName = protectedObj === null || protectedObj === void 0 ? void 0 : protectedObj.providerIdentity.name;
            // eslint-disable-next-line no-console
            console.warn(`WARNING: Dispatch call may have unintended results. The "to" argument of your dispatch call is missing the
                "endpointId" parameter. The identity you are dispatching to ({uuid: ${uuid}, name: ${name}})
                has multiple channelClients for this channel. Your dispatched action: (${action}) from the provider:
                ({uuid: ${providerUuid}, name: ${providerName}}) will only be processed by the most recently-created client.`);
        }
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
exports.ChannelProvider = ChannelProvider;


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/interappbus/index.js":
/*!***********************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/interappbus/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InterAppPayload = void 0;
const events_1 = __webpack_require__(/*! events */ "../../node_modules/events/events.js");
const base_1 = __webpack_require__(/*! ../base */ "../../node_modules/openfin-adapter/src/api/base.js");
const ref_counter_1 = __webpack_require__(/*! ../../util/ref-counter */ "../../node_modules/openfin-adapter/src/util/ref-counter.js");
const index_1 = __webpack_require__(/*! ./channel/index */ "../../node_modules/openfin-adapter/src/api/interappbus/channel/index.js");
const validate_1 = __webpack_require__(/*! ../../util/validate */ "../../node_modules/openfin-adapter/src/util/validate.js");
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
        const subKey = this.createSubscriptionKey(source.uuid, source.name || '*', topic);
        const sendUnsubscription = () => {
            return this.wire.sendAction('unsubscribe', {
                sourceUuid: source.uuid,
                sourceWindowName: source.name || '*',
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

/***/ "../../node_modules/openfin-adapter/src/api/interop/Factory.js":
/*!*********************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/interop/Factory.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const base_1 = __webpack_require__(/*! ../base */ "../../node_modules/openfin-adapter/src/api/base.js");
const InteropBroker_1 = __webpack_require__(/*! ./InteropBroker */ "../../node_modules/openfin-adapter/src/api/interop/InteropBroker.js");
const InteropClient_1 = __webpack_require__(/*! ./InteropClient */ "../../node_modules/openfin-adapter/src/api/interop/InteropClient.js");
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

/***/ "../../node_modules/openfin-adapter/src/api/interop/InteropBroker.js":
/*!***************************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/interop/InteropBroker.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InteropBroker = void 0;
const base_1 = __webpack_require__(/*! ../base */ "../../node_modules/openfin-adapter/src/api/base.js");
const SessionContextGroupBroker_1 = __webpack_require__(/*! ./SessionContextGroupBroker */ "../../node_modules/openfin-adapter/src/api/interop/SessionContextGroupBroker.js");
const utils_1 = __webpack_require__(/*! ./utils */ "../../node_modules/openfin-adapter/src/api/interop/utils.js");
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
 *         options.systemChannels = [
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

/***/ "../../node_modules/openfin-adapter/src/api/interop/InteropClient.js":
/*!***************************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/interop/InteropClient.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
const base_1 = __webpack_require__(/*! ../base */ "../../node_modules/openfin-adapter/src/api/base.js");
const SessionContextGroupClient_1 = __webpack_require__(/*! ./SessionContextGroupClient */ "../../node_modules/openfin-adapter/src/api/interop/SessionContextGroupClient.js");
const utils_1 = __webpack_require__(/*! ./utils */ "../../node_modules/openfin-adapter/src/api/interop/utils.js");
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

/***/ "../../node_modules/openfin-adapter/src/api/interop/SessionContextGroupBroker.js":
/*!***************************************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/interop/SessionContextGroupBroker.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const _1 = __webpack_require__(/*! . */ "../../node_modules/openfin-adapter/src/api/interop/index.js");
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

/***/ "../../node_modules/openfin-adapter/src/api/interop/SessionContextGroupClient.js":
/*!***************************************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/interop/SessionContextGroupClient.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
const base_1 = __webpack_require__(/*! ../base */ "../../node_modules/openfin-adapter/src/api/base.js");
const utils_1 = __webpack_require__(/*! ./utils */ "../../node_modules/openfin-adapter/src/api/interop/utils.js");
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

/***/ "../../node_modules/openfin-adapter/src/api/interop/index.js":
/*!*******************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/interop/index.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
const Factory_1 = __webpack_require__(/*! ./Factory */ "../../node_modules/openfin-adapter/src/api/interop/Factory.js");
exports["default"] = Factory_1.default;
__exportStar(__webpack_require__(/*! ./InteropClient */ "../../node_modules/openfin-adapter/src/api/interop/InteropClient.js"), exports);
__exportStar(__webpack_require__(/*! ./InteropBroker */ "../../node_modules/openfin-adapter/src/api/interop/InteropBroker.js"), exports);


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/interop/utils.js":
/*!*******************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/interop/utils.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

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

/***/ "../../node_modules/openfin-adapter/src/api/me.js":
/*!********************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/me.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getMe = exports.getBaseMe = void 0;
const EntityType_1 = __webpack_require__(/*! ../shapes/EntityType */ "../../node_modules/openfin-adapter/src/shapes/EntityType.js");
const view_1 = __webpack_require__(/*! ./view */ "../../node_modules/openfin-adapter/src/api/view/index.js");
const frame_1 = __webpack_require__(/*! ./frame */ "../../node_modules/openfin-adapter/src/api/frame/index.js");
const window_1 = __webpack_require__(/*! ./window */ "../../node_modules/openfin-adapter/src/api/window/index.js");
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
    const interopObject = {
        setContext() {
            throw new Error('Interop API has not been instantiated. Either connection has failed or you have not declared interop in your config.');
        },
        addContextHandler() {
            throw new Error('Interop API has not been instantiated. Either connection has failed or you have not declared interop in your config.');
        },
        getContextGroups() {
            throw new Error('Interop API has not been instantiated. Either connection has failed or you have not declared interop in your config.');
        },
        joinContextGroup() {
            throw new Error('Interop API has not been instantiated. Either connection has failed or you have not declared interop in your config.');
        },
        removeFromContextGroup() {
            throw new Error('Interop API has not been instantiated. Either connection has failed or you have not declared interop in your config.');
        },
        getAllClientsInContextGroup() {
            throw new Error('Interop API has not been instantiated. Either connection has failed or you have not declared interop in your config.');
        },
        getInfoForContextGroup() {
            throw new Error('Interop API has not been instantiated. Either connection has failed or you have not declared interop in your config.');
        }
    };
    switch (entityType) {
        case EntityType_1.default.VIEW:
            return Object.assign(new view_1.View(wire, { uuid, name }), getBaseMe(entityType, uuid, name), {
                interop: interopObject
            });
        case EntityType_1.default.WINDOW:
            return Object.assign(new window_1._Window(wire, { uuid, name }), getBaseMe(entityType, uuid, name), {
                interop: interopObject
            });
        case EntityType_1.default.IFRAME:
            return Object.assign(new frame_1._Frame(wire, { uuid, name }), getBaseMe(entityType, uuid, name), {
                interop: interopObject
            });
        default:
            return { ...getBaseMe(entityType, uuid, name) };
    }
}
exports.getMe = getMe;


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/platform/Factory.js":
/*!**********************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/platform/Factory.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable no-undef, no-underscore-dangle */
const base_1 = __webpack_require__(/*! ../base */ "../../node_modules/openfin-adapter/src/api/base.js");
const index_1 = __webpack_require__(/*! ./layout/index */ "../../node_modules/openfin-adapter/src/api/platform/layout/index.js");
const Instance_1 = __webpack_require__(/*! ./Instance */ "../../node_modules/openfin-adapter/src/api/platform/Instance.js");
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
 * Any {@link ApplicationOption Application option} is also a valid platform option
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

/***/ "../../node_modules/openfin-adapter/src/api/platform/Instance.js":
/*!***********************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/platform/Instance.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _connectToProvider;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Platform = void 0;
const base_1 = __webpack_require__(/*! ../base */ "../../node_modules/openfin-adapter/src/api/base.js");
const validate_1 = __webpack_require__(/*! ../../util/validate */ "../../node_modules/openfin-adapter/src/util/validate.js");
const Platform_1 = __webpack_require__(/*! ../../shapes/Platform */ "../../node_modules/openfin-adapter/src/shapes/Platform.js");
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
        super(channel.wire, ['application', identity.uuid]);
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
        this.topic = 'application';
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
            options.reason = Platform_1.WindowCreationReason.APICall;
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
}
exports.Platform = Platform;
_connectToProvider = new WeakMap();


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/platform/common-utils.js":
/*!***************************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/platform/common-utils.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isValidPresetType = void 0;
function isValidPresetType(type) {
    switch (type) {
        case "columns" /* columns */:
        case "grid" /* grid */:
        case "rows" /* rows */:
        case "tabs" /* tabs */:
            return true;
        default:
            return false;
    }
}
exports.isValidPresetType = isValidPresetType;
exports["default"] = { isValidPresetType };


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/platform/index.js":
/*!********************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/platform/index.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
const Factory_1 = __webpack_require__(/*! ./Factory */ "../../node_modules/openfin-adapter/src/api/platform/Factory.js");
exports["default"] = Factory_1.default;
__exportStar(__webpack_require__(/*! ./Instance */ "../../node_modules/openfin-adapter/src/api/platform/Instance.js"), exports);


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/platform/layout/Factory.js":
/*!*****************************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/platform/layout/Factory.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
const Instance_1 = __webpack_require__(/*! ./Instance */ "../../node_modules/openfin-adapter/src/api/platform/layout/Instance.js");
const base_1 = __webpack_require__(/*! ../../base */ "../../node_modules/openfin-adapter/src/api/base.js");
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

/***/ "../../node_modules/openfin-adapter/src/api/platform/layout/Instance.js":
/*!******************************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/platform/layout/Instance.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/* eslint-disable no-undef, import/prefer-default-export */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Layout = void 0;
const validate_1 = __webpack_require__(/*! ../../../util/validate */ "../../node_modules/openfin-adapter/src/util/validate.js");
const common_utils_1 = __webpack_require__(/*! ../common-utils */ "../../node_modules/openfin-adapter/src/api/platform/common-utils.js");
const base_1 = __webpack_require__(/*! ../../base */ "../../node_modules/openfin-adapter/src/api/base.js");
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

/***/ "../../node_modules/openfin-adapter/src/api/platform/layout/index.js":
/*!***************************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/platform/layout/index.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
__exportStar(__webpack_require__(/*! ./Factory */ "../../node_modules/openfin-adapter/src/api/platform/layout/Factory.js"), exports);
__exportStar(__webpack_require__(/*! ./Instance */ "../../node_modules/openfin-adapter/src/api/platform/layout/Instance.js"), exports);
__exportStar(__webpack_require__(/*! ./shapes */ "../../node_modules/openfin-adapter/src/api/platform/layout/shapes.js"), exports);


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/platform/layout/shapes.js":
/*!****************************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/platform/layout/shapes.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/snapshot-source/Factory.js":
/*!*****************************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/snapshot-source/Factory.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const base_1 = __webpack_require__(/*! ../base */ "../../node_modules/openfin-adapter/src/api/base.js");
const Instance_1 = __webpack_require__(/*! ./Instance */ "../../node_modules/openfin-adapter/src/api/snapshot-source/Instance.js");
const utils_1 = __webpack_require__(/*! ./utils */ "../../node_modules/openfin-adapter/src/api/snapshot-source/utils.js");
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
        channel.register("get-snapshot" /* GET_SNAPSHOT */, async () => {
            const snapshot = await provider.getSnapshot();
            return { snapshot };
        });
        channel.register("apply-snapshot" /* APPLY_SNAPSHOT */, ({ snapshot }) => provider.applySnapshot(snapshot));
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

/***/ "../../node_modules/openfin-adapter/src/api/snapshot-source/Instance.js":
/*!******************************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/snapshot-source/Instance.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
const base_1 = __webpack_require__(/*! ../base */ "../../node_modules/openfin-adapter/src/api/base.js");
const utils_1 = __webpack_require__(/*! ./utils */ "../../node_modules/openfin-adapter/src/api/snapshot-source/utils.js");
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
        const response = (await client.dispatch("get-snapshot" /* GET_SNAPSHOT */));
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
        return client.dispatch("apply-snapshot" /* APPLY_SNAPSHOT */, { snapshot });
    }
}
exports.SnapshotSource = SnapshotSource;
_identity = new WeakMap(), _getConnection = new WeakMap(), _getClient = new WeakMap(), _startConnection = new WeakMap(), _setUpConnectionListener = new WeakMap();


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/snapshot-source/index.js":
/*!***************************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/snapshot-source/index.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
const Factory_1 = __webpack_require__(/*! ./Factory */ "../../node_modules/openfin-adapter/src/api/snapshot-source/Factory.js");
exports["default"] = Factory_1.default;
__exportStar(__webpack_require__(/*! ./Instance */ "../../node_modules/openfin-adapter/src/api/snapshot-source/Instance.js"), exports);


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/snapshot-source/utils.js":
/*!***************************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/snapshot-source/utils.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SnapshotSourceActions = exports.getSnapshotSourceChannelName = void 0;
const channelPrefix = 'snapshot-source-provider-';
exports.getSnapshotSourceChannelName = (id) => `${channelPrefix}${id.uuid}`;
var SnapshotSourceActions;
(function (SnapshotSourceActions) {
    SnapshotSourceActions["GET_SNAPSHOT"] = "get-snapshot";
    SnapshotSourceActions["APPLY_SNAPSHOT"] = "apply-snapshot";
})(SnapshotSourceActions = exports.SnapshotSourceActions || (exports.SnapshotSourceActions = {}));


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/system/index.js":
/*!******************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/system/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const base_1 = __webpack_require__(/*! ../base */ "../../node_modules/openfin-adapter/src/api/base.js");
const transport_errors_1 = __webpack_require__(/*! ../../transport/transport-errors */ "../../node_modules/openfin-adapter/src/transport/transport-errors.js");
const window_1 = __webpack_require__(/*! ../window */ "../../node_modules/openfin-adapter/src/api/window/index.js");
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
 * ApplicationInfo interface
 * @typedef { object } ApplicationInfo
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
 * Entity interface
 * @typedef { object } Entity
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
 * WindowInfo interface
 * @typedef { object } WindowInfo
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
        super(wire, ['system']);
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
     * @return {Promise.Array.<WindowInfo>}
     * @tutorial System.getAllWindows
     */
    getAllWindows() {
        return this.wire.sendAction('get-all-windows').then(({ payload }) => payload.data);
    }
    /**
     * Retrieves an array of data for all applications.
     * @return {Promise.Array.<ApplicationInfo>}
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
     * @return {Promise.<CrashReporterOptions>}
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
     * Start the crash reporter for the browser process if not already running.
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
     * @return {Promise.<WindowInfo>}
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
     * @return {Promise.<Entity>}
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
}
exports["default"] = System;


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/view/Factory.js":
/*!******************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/view/Factory.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const base_1 = __webpack_require__(/*! ../base */ "../../node_modules/openfin-adapter/src/api/base.js");
const validate_1 = __webpack_require__(/*! ../../util/validate */ "../../node_modules/openfin-adapter/src/util/validate.js");
const EntityType_1 = __webpack_require__(/*! ../../shapes/EntityType */ "../../node_modules/openfin-adapter/src/shapes/EntityType.js");
const index_1 = __webpack_require__(/*! ./index */ "../../node_modules/openfin-adapter/src/api/view/index.js");
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
                entityType: EntityType_1.default.VIEW,
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

/***/ "../../node_modules/openfin-adapter/src/api/view/Instance.js":
/*!*******************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/view/Instance.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.View = void 0;
/* eslint-disable import/prefer-default-export */
const webcontents_1 = __webpack_require__(/*! ../webcontents */ "../../node_modules/openfin-adapter/src/api/webcontents/index.js");
const window_1 = __webpack_require__(/*! ../window */ "../../node_modules/openfin-adapter/src/api/window/index.js");
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
class View extends webcontents_1.WebContents {
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
            this.wire.sendAction('view-get-parent-layout', { ...this.identity }).catch((e) => {
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
        this.topic = 'view';
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

/***/ "../../node_modules/openfin-adapter/src/api/view/index.js":
/*!****************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/view/index.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
const Factory_1 = __webpack_require__(/*! ./Factory */ "../../node_modules/openfin-adapter/src/api/view/Factory.js");
exports["default"] = Factory_1.default;
__exportStar(__webpack_require__(/*! ./Instance */ "../../node_modules/openfin-adapter/src/api/view/Instance.js"), exports);


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/webcontents/index.js":
/*!***********************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/webcontents/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WebContents = void 0;
const base_1 = __webpack_require__(/*! ../base */ "../../node_modules/openfin-adapter/src/api/base.js");
class WebContents extends base_1.EmitterBase {
    constructor(wire, identity, entityType) {
        super(wire, [entityType, identity.uuid, identity.name]);
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
}
exports.WebContents = WebContents;


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/window/Factory.js":
/*!********************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/window/Factory.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const base_1 = __webpack_require__(/*! ../base */ "../../node_modules/openfin-adapter/src/api/base.js");
const validate_1 = __webpack_require__(/*! ../../util/validate */ "../../node_modules/openfin-adapter/src/util/validate.js");
const Instance_1 = __webpack_require__(/*! ./Instance */ "../../node_modules/openfin-adapter/src/api/window/Instance.js");
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

/***/ "../../node_modules/openfin-adapter/src/api/window/Instance.js":
/*!*********************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/window/Instance.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._Window = void 0;
/* eslint-disable import/prefer-default-export */
const application_1 = __webpack_require__(/*! ../application */ "../../node_modules/openfin-adapter/src/api/application/index.js");
const webcontents_1 = __webpack_require__(/*! ../webcontents */ "../../node_modules/openfin-adapter/src/api/webcontents/index.js");
const view_1 = __webpack_require__(/*! ../view */ "../../node_modules/openfin-adapter/src/api/view/index.js");
const EntityType_1 = __webpack_require__(/*! ../../shapes/EntityType */ "../../node_modules/openfin-adapter/src/shapes/EntityType.js");
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
class _Window extends webcontents_1.WebContents {
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
            const windowCreation = this.wire.environment.createChildContent({ entityType: EntityType_1.default.WINDOW, options });
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
     * Gets the current state ("minimized", "maximized", or "restored") of the window.
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
}
exports._Window = _Window;


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/window/bounds-changed.js":
/*!***************************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/window/bounds-changed.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BoundsChangeType = void 0;
const base_1 = __webpack_require__(/*! ../base */ "../../node_modules/openfin-adapter/src/api/base.js");
class BoundsChangedReply extends base_1.Reply {
}
exports["default"] = BoundsChangedReply;
var BoundsChangeType;
(function (BoundsChangeType) {
    BoundsChangeType[BoundsChangeType["POSITION"] = 0] = "POSITION";
    BoundsChangeType[BoundsChangeType["SIZE"] = 1] = "SIZE";
    BoundsChangeType[BoundsChangeType["POSITION_AND_SIZE"] = 2] = "POSITION_AND_SIZE";
})(BoundsChangeType = exports.BoundsChangeType || (exports.BoundsChangeType = {}));


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/window/index.js":
/*!******************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/window/index.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
const Factory_1 = __webpack_require__(/*! ./Factory */ "../../node_modules/openfin-adapter/src/api/window/Factory.js");
exports["default"] = Factory_1.default;
__exportStar(__webpack_require__(/*! ./shapes */ "../../node_modules/openfin-adapter/src/api/window/shapes.js"), exports);
__exportStar(__webpack_require__(/*! ./Instance */ "../../node_modules/openfin-adapter/src/api/window/Instance.js"), exports);
__exportStar(__webpack_require__(/*! ./bounds-changed */ "../../node_modules/openfin-adapter/src/api/window/bounds-changed.js"), exports);


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/window/shapes.js":
/*!*******************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/window/shapes.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/mock.js":
/*!******************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/mock.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.inOpenFin = exports.fin = void 0;
/* eslint-disable import/prefer-default-export */
/* eslint-disable spaced-comment */
/* eslint-disable @typescript-eslint/triple-slash-reference */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable class-methods-use-this */
/// <reference path="../OpenFin.d.ts"/>
const events_1 = __webpack_require__(/*! events */ "../../node_modules/events/events.js");
const fin_1 = __webpack_require__(/*! ./api/fin */ "../../node_modules/openfin-adapter/src/api/fin.js");
const EntityType_1 = __webpack_require__(/*! ./shapes/EntityType */ "../../node_modules/openfin-adapter/src/shapes/EntityType.js");
const transport_1 = __webpack_require__(/*! ./transport/transport */ "../../node_modules/openfin-adapter/src/transport/transport.js");
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
    getManagerConstructor() {
        throw new Error('Method not implemented.');
    }
    getProviderInitializer() {
        throw new Error('Method not implemented.');
    }
    writeToken(path, token) {
        throw new Error('Method not implemented.');
    }
    retrievePort(config) {
        throw new Error('Method not implemented.');
    }
    getNextMessageId() {
        throw new Error('Method not implemented.');
    }
    getRandomId() {
        throw new Error('Method not implemented.');
    }
    createChildContent(options) {
        throw new Error('Method not implemented.');
    }
    getWebWindow(identity) {
        throw new Error('Method not implemented.');
    }
    getCurrentEntityIdentity() {
        throw new Error('Method not implemented.');
    }
    getCurrentEntityType() {
        return EntityType_1.default.UNKNOWN;
    }
    raiseEvent(eventName, eventArgs) {
        throw new Error('Method not implemented.');
    }
    getUrl() {
        throw new Error('Method not implemented.');
    }
    whenReady() {
        throw new Error('Method not implemented.');
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
exports.inOpenFin = typeof window !== 'undefined' && typeof window.fin === 'object';


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/shapes/EntityType.js":
/*!*******************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/shapes/EntityType.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var EntityType;
(function (EntityType) {
    EntityType["WINDOW"] = "window";
    EntityType["IFRAME"] = "iframe";
    EntityType["EXTERNAL"] = "external connection";
    EntityType["VIEW"] = "view";
    EntityType["UNKNOWN"] = "unknown";
})(EntityType || (EntityType = {}));
exports["default"] = EntityType;


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/shapes/Platform.js":
/*!*****************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/shapes/Platform.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WindowCreationReason = exports.HostContextChangedReasons = void 0;
var HostContextChangedReasons;
(function (HostContextChangedReasons) {
    HostContextChangedReasons["updated"] = "updated";
    HostContextChangedReasons["reparented"] = "reparented";
})(HostContextChangedReasons = exports.HostContextChangedReasons || (exports.HostContextChangedReasons = {}));
var WindowCreationReason;
(function (WindowCreationReason) {
    WindowCreationReason["Tearout"] = "tearout";
    WindowCreationReason["CreateViewWithoutTarget"] = "create-view-without-target";
    WindowCreationReason["APICall"] = "api-call";
    WindowCreationReason["AppCreation"] = "app-creation";
    WindowCreationReason["Restore"] = "restore";
})(WindowCreationReason = exports.WindowCreationReason || (exports.WindowCreationReason = {}));


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/transport/fin_store.js":
/*!*********************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/transport/fin_store.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

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

/***/ "../../node_modules/openfin-adapter/src/transport/transport-errors.js":
/*!****************************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/transport/transport-errors.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RuntimeError = exports.NotSupportedError = exports.NotImplementedError = exports.NoAckError = exports.DuplicateCorrelationError = exports.UnexpectedActionError = exports.DisconnectedError = void 0;
/* eslint-disable max-classes-per-file */
const wire_1 = __webpack_require__(/*! ./wire */ "../../node_modules/openfin-adapter/src/transport/wire.js");
class DisconnectedError extends Error {
    constructor(readyState) {
        super(`Expected websocket state OPEN but found ${wire_1.READY_STATE[readyState]}`);
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

/***/ "../../node_modules/openfin-adapter/src/transport/transport.js":
/*!*********************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/transport/transport.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
const wire_1 = __webpack_require__(/*! ./wire */ "../../node_modules/openfin-adapter/src/transport/wire.js");
const transport_errors_1 = __webpack_require__(/*! ./transport-errors */ "../../node_modules/openfin-adapter/src/transport/transport-errors.js");
const eventAggregator_1 = __webpack_require__(/*! ../api/events/eventAggregator */ "../../node_modules/openfin-adapter/src/api/events/eventAggregator.js");
const me_1 = __webpack_require__(/*! ../api/me */ "../../node_modules/openfin-adapter/src/api/me.js");
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
        /* `READY_STATE` is an instance var set by `constructor` to reference the `WebTransportSocket.READY_STATE` enum.
         * This is syntactic sugar that makes the enum accessible through the `wire` property of the various `fin` singletons.
         * For example, `fin.system.wire.READY_STATE` is a shortcut to `fin.system.wire.wire.constructor.READY_STATE`.
         * However it is accessed, the enum is useful for interrogating the state of the web socket on send failure.
         * The `err.readyState` value is passed to the `reject` handler of the promise returned by either of
         * `sendAction` or `ferryAction`, and hence all the API methods in the various `fin` singletons that call them.
         * The enum can be used in two distinct ways by the `reject` handler (using `fin.System.getVersion` by way of example):
         * 1. State name by state value:
         * fin.system.getVersion().catch(err => { console.log('State:', fin.system.wire.READY_STATE[err.readyState]); });
         * 2. State value by state name:
         * fin.system.getVersion().catch(err => { console.log('Closed:', err.readyState === fin.system.wire.READY_STATE.CLOSED); });
         * Note that `reject` is called when and only when `readyState` is not `OPEN`.
         */
        this.READY_STATE = wire_1.READY_STATE;
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

/***/ "../../node_modules/openfin-adapter/src/transport/wire.js":
/*!****************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/transport/wire.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.READY_STATE = exports.isInternalConnectConfig = exports.isPortDiscoveryConfig = exports.isNewConnectConfig = exports.isExistingConnectConfig = exports.isExternalConfig = void 0;
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
var READY_STATE;
(function (READY_STATE) {
    READY_STATE[READY_STATE["CONNECTING"] = 0] = "CONNECTING";
    READY_STATE[READY_STATE["OPEN"] = 1] = "OPEN";
    READY_STATE[READY_STATE["CLOSING"] = 2] = "CLOSING";
    READY_STATE[READY_STATE["CLOSED"] = 3] = "CLOSED"; // The connection is closed.
})(READY_STATE = exports.READY_STATE || (exports.READY_STATE = {}));


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/util/promises.js":
/*!***************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/util/promises.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

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

/***/ "../../node_modules/openfin-adapter/src/util/ref-counter.js":
/*!******************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/util/ref-counter.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

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

/***/ "../../node_modules/openfin-adapter/src/util/runtimeVersioning.js":
/*!************************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/util/runtimeVersioning.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

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

/***/ "../../node_modules/openfin-adapter/src/util/validate.js":
/*!***************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/util/validate.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

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
exports["default"] = { validateIdentity };


/***/ }),

/***/ "./client/src/bootstrapper.ts":
/*!************************************!*\
  !*** ./client/src/bootstrapper.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var openfin_adapter_src_mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openfin-adapter/src/mock */ "../../node_modules/openfin-adapter/src/mock.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./client/src/home.ts");
/* harmony import */ var _integrations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./integrations */ "./client/src/integrations.ts");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings */ "./client/src/settings.ts");




async function init() {
    // you can kick off your bootstrapping process here where you may decide to prompt for authentication,
    // gather reference data etc before starting workspace and interacting with it.
    console.log("Initialising the bootstrapper");
    const settings = await (0,_settings__WEBPACK_IMPORTED_MODULE_3__.getSettings)();
    await (0,_home__WEBPACK_IMPORTED_MODULE_1__.register)();
    await (0,_integrations__WEBPACK_IMPORTED_MODULE_2__.register)({
        openUrl: async (url) => openfin_adapter_src_mock__WEBPACK_IMPORTED_MODULE_0__.fin.System.openUrlWithBrowser(url)
    }, settings.integrationProvider);
    const providerWindow = openfin_adapter_src_mock__WEBPACK_IMPORTED_MODULE_0__.fin.Window.getCurrentSync();
    await providerWindow.once("close-requested", async (event) => {
        await (0,_integrations__WEBPACK_IMPORTED_MODULE_2__.deregister)(settings.integrationProvider);
        await (0,_home__WEBPACK_IMPORTED_MODULE_1__.deregister)();
        await openfin_adapter_src_mock__WEBPACK_IMPORTED_MODULE_0__.fin.Platform.getCurrentSync().quit();
    });
}


/***/ }),

/***/ "./client/src/home.ts":
/*!****************************!*\
  !*** ./client/src/home.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deregister": () => (/* binding */ deregister),
/* harmony export */   "hide": () => (/* binding */ hide),
/* harmony export */   "register": () => (/* binding */ register),
/* harmony export */   "show": () => (/* binding */ show)
/* harmony export */ });
/* harmony import */ var _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openfin/workspace */ "../../node_modules/@openfin/workspace/index.js");
/* harmony import */ var _openfin_workspace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openfin_workspace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _integrations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./integrations */ "./client/src/integrations.ts");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings */ "./client/src/settings.ts");



let isHomeRegistered = false;
async function register() {
    console.log("Initialising home.");
    const settings = await (0,_settings__WEBPACK_IMPORTED_MODULE_2__.getSettings)();
    if (settings.homeProvider === undefined ||
        settings.homeProvider.id === undefined ||
        settings.homeProvider.title === undefined) {
        console.warn("homeProvider: not configured in the customSettings of your manifest correctly. Ensure you have the homeProvider object defined in customSettings with the following defined: id, title");
        return;
    }
    let lastResponse;
    const onUserInput = async (request, response) => {
        const query = request.query.toLowerCase();
        if (lastResponse !== undefined) {
            lastResponse.close();
        }
        lastResponse = response;
        lastResponse.open();
        const searchResults = {
            results: [],
            context: {
                filters: []
            }
        };
        if (query === "?") {
            searchResults.results = searchResults.results.concat(await (0,_integrations__WEBPACK_IMPORTED_MODULE_1__.getHelpSearchEntries)());
        }
        else {
            searchResults.results = searchResults.results.concat(await (0,_integrations__WEBPACK_IMPORTED_MODULE_1__.getAppSearchEntries)());
            const integrationResults = await (0,_integrations__WEBPACK_IMPORTED_MODULE_1__.getSearchResults)(query, undefined, lastResponse);
            if (Array.isArray(integrationResults.results)) {
                searchResults.results = searchResults.results.concat(integrationResults.results);
            }
            if (Array.isArray(integrationResults.context.filters)) {
                searchResults.context.filters = searchResults.context.filters.concat(integrationResults.context.filters);
            }
        }
        return searchResults;
    };
    const onSelection = async (result) => {
        if (result.data !== undefined) {
            const handled = await (0,_integrations__WEBPACK_IMPORTED_MODULE_1__.itemSelection)(result, lastResponse);
            if (!handled) {
                console.warn(`Result not handled ${result.key}`, result.data);
            }
        }
        else {
            console.warn("Unable to execute result without data being passed");
        }
    };
    const cliProvider = {
        title: settings.homeProvider.title,
        id: settings.homeProvider.id,
        icon: settings.homeProvider.icon,
        onUserInput,
        onResultDispatch: onSelection,
        dispatchFocusEvents: true
    };
    await _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.Home.register(cliProvider);
    isHomeRegistered = true;
    console.log("Home configured.");
}
async function show() {
    return _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.Home.show();
}
async function hide() {
    return _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.Home.hide();
}
async function deregister() {
    if (isHomeRegistered) {
        const settings = await (0,_settings__WEBPACK_IMPORTED_MODULE_2__.getSettings)();
        return _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.Home.deregister(settings.homeProvider.id);
    }
    console.warn("Unable to deregister home as there is an indication it was never registered");
}


/***/ }),

/***/ "./client/src/integrations.ts":
/*!************************************!*\
  !*** ./client/src/integrations.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addKnownIntegrationProvider": () => (/* binding */ addKnownIntegrationProvider),
/* harmony export */   "deregister": () => (/* binding */ deregister),
/* harmony export */   "getAppSearchEntries": () => (/* binding */ getAppSearchEntries),
/* harmony export */   "getHelpSearchEntries": () => (/* binding */ getHelpSearchEntries),
/* harmony export */   "getSearchResults": () => (/* binding */ getSearchResults),
/* harmony export */   "itemSelection": () => (/* binding */ itemSelection),
/* harmony export */   "register": () => (/* binding */ register)
/* harmony export */ });
const knownIntegrationProviders = {};
const homeIntegrations = [];
/**
 * Register all the workspace integrations.
 * @param integrationManager The integration manager.
 * @param integrationProvider The integration provider settings.
 */
async function register(integrationManager, integrationProvider) {
    const integrations = integrationProvider?.integrations;
    if (Array.isArray(integrations)) {
        for (const integration of integrations) {
            if (integration.enabled) {
                if (!knownIntegrationProviders[integration.id] && integration.moduleUrl) {
                    try {
                        const mod = await import(/* webpackIgnore: true */ integration.moduleUrl);
                        knownIntegrationProviders[integration.id] = mod.integration;
                    }
                    catch (err) {
                        console.error(`Error loading module ${integration.moduleUrl}`, err);
                    }
                }
                if (knownIntegrationProviders[integration.id]) {
                    const homeIntegration = knownIntegrationProviders[integration.id];
                    homeIntegrations.push({
                        module: homeIntegration,
                        integration
                    });
                    if (homeIntegration.register) {
                        await homeIntegration.register(integrationManager, integration);
                    }
                }
                else {
                    console.error("Missing module in integration providers", integration.id);
                }
            }
        }
    }
}
/**
 * Deregister all the integrations.
 * @param integrationProvider The integration provider.
 */
async function deregister(integrationProvider) {
    for (const homeIntegration of homeIntegrations) {
        if (homeIntegration.module.deregister) {
            await homeIntegration.module.deregister(homeIntegration.integration);
        }
    }
}
/**
 * Get the search results from all the integration providers.
 * @param query The query to get the search results for.
 * @param filters The filters to apply to the search results.
 * @param lastResponse The last search response used for updating existing results.
 * @returns The search results and new filters.
 */
async function getSearchResults(query, filters, lastResponse) {
    const homeResponse = {
        results: [],
        context: {
            filters: []
        }
    };
    const promises = [];
    for (const homeIntegration of homeIntegrations) {
        if (homeIntegration.module.getSearchResults) {
            promises.push(homeIntegration.module.getSearchResults(homeIntegration.integration, query, filters, lastResponse));
        }
    }
    const promiseResults = await Promise.allSettled(promises);
    for (const promiseResult of promiseResults) {
        if (promiseResult.status === "fulfilled") {
            if (Array.isArray(promiseResult.value.results)) {
                homeResponse.results = homeResponse.results.concat(promiseResult.value.results);
            }
            const newFilters = promiseResult.value.context?.filters;
            if (Array.isArray(newFilters) && homeResponse.context?.filters) {
                homeResponse.context.filters = homeResponse.context.filters.concat(newFilters);
            }
        }
        else {
            console.error(promiseResult.reason);
        }
    }
    return homeResponse;
}
/**
 * Get the app search entries for all the integration providers.
 * @returns The list of app entries.
 */
async function getAppSearchEntries() {
    let results = [];
    for (const homeIntegration of homeIntegrations) {
        if (homeIntegration.module.getAppSearchEntries) {
            const integrationResults = await homeIntegration.module.getAppSearchEntries(homeIntegration.integration);
            results = results.concat(integrationResults);
        }
    }
    return results;
}
/**
 * Get the help search entries for all the integration providers.
 * @returns The list of help entries.
 */
async function getHelpSearchEntries() {
    let results = [];
    for (const homeIntegration of homeIntegrations) {
        if (homeIntegration.module.getHelpSearchEntries) {
            const integrationResults = await homeIntegration.module.getHelpSearchEntries(homeIntegration.integration);
            results = results.concat(integrationResults);
        }
    }
    return results;
}
/**
 * The item for one of the providers was selected.
 * @param result The result of the selection.
 * @param lastResponse The last response.
 * @returns True if the selection was handled.
 */
async function itemSelection(result, lastResponse) {
    if (result.data) {
        const foundIntegration = homeIntegrations.find((hi) => hi.integration.id === result.data?.providerId);
        if (foundIntegration?.module?.itemSelection) {
            const handled = await foundIntegration.module.itemSelection(foundIntegration.integration, result, lastResponse);
            if (!handled) {
                console.warn(`Error while trying to handle ${foundIntegration.integration.id} entry`, result.data);
            }
            return handled;
        }
    }
    return false;
}
/**
 * Add an integration module that was loaded manually.
 * @param id The id of the module.
 * @param module The module.
 */
function addKnownIntegrationProvider(id, module) {
    knownIntegrationProviders[id] = module;
}


/***/ }),

/***/ "./client/src/platform.ts":
/*!********************************!*\
  !*** ./client/src/platform.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openfin/workspace-platform */ "../../node_modules/@openfin/workspace-platform/index.js");
/* harmony import */ var _openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__);

async function init() {
    console.log("Initialising platform");
    const browser = {};
    await (0,_openfin_workspace_platform__WEBPACK_IMPORTED_MODULE_0__.init)({
        browser
    });
}


/***/ }),

/***/ "./client/src/settings.ts":
/*!********************************!*\
  !*** ./client/src/settings.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSettings": () => (/* binding */ getSettings)
/* harmony export */ });
/* harmony import */ var openfin_adapter_src_mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openfin-adapter/src/mock */ "../../node_modules/openfin-adapter/src/mock.js");

let settings;
async function getConfiguredSettings() {
    const app = await openfin_adapter_src_mock__WEBPACK_IMPORTED_MODULE_0__.fin.Application.getCurrent();
    const manifest = await app.getManifest();
    if (manifest.customSettings !== undefined) {
        settings = manifest.customSettings;
    }
    else {
        settings = {};
    }
    return settings;
}
async function getSettings() {
    if (settings === undefined) {
        settings = await getConfiguredSettings();
    }
    return settings;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!********************************!*\
  !*** ./client/src/provider.ts ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var openfin_adapter_src_mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openfin-adapter/src/mock */ "../../node_modules/openfin-adapter/src/mock.js");
/* harmony import */ var _bootstrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrapper */ "./client/src/bootstrapper.ts");
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./platform */ "./client/src/platform.ts");



window.addEventListener("DOMContentLoaded", async () => {
    const platform = openfin_adapter_src_mock__WEBPACK_IMPORTED_MODULE_0__.fin.Platform.getCurrentSync();
    await platform.once("platform-api-ready", async () => (0,_bootstrapper__WEBPACK_IMPORTED_MODULE_1__.init)());
    await (0,_platform__WEBPACK_IMPORTED_MODULE_2__.init)();
});

})();

/******/ })()
;