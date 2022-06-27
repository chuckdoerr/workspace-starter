/******/ var __webpack_modules__ = ({

/***/ "../../node_modules/@openfin/workspace/index.js":
/*!******************************************************!*\
  !*** ../../node_modules/@openfin/workspace/index.js ***!
  \******************************************************/
/***/ ((module) => {

(()=>{"use strict";var e={3133:(e,t,n)=>{n.r(t),n.d(t,{CLIAction:()=>ze.Pt,CLIFilterOptionType:()=>ze.el,CLITemplate:()=>ze.yW,deregister:()=>Ye,hide:()=>tt,register:()=>Qe,show:()=>et});var r={};n.r(r),n.d(r,{subscribe:()=>oe});var o={};n.r(o),n.d(o,{create:()=>Ge});var i=n(6532),s=n(7405);const a="home";var c;!function(e){e.Commands="home-commands"}(c||(c={}));var d,u=n(5806);n(7564);!function(e){e[e.Initial=0]="Initial",e[e.Open=1]="Open",e[e.Close=2]="Close"}(d||(d={}));const f="all",l="0",p="5",g="6",w=()=>{};function h(e,t){return e?`${e}-${t}`:t}function y(e){return`__search-${e}-topic__`}const v=new Map;function m(e,t){v.has(e)||v.set(e,new Set),v.get(e).add(t)}function S(e,t){const n=v.get(e);n&&n.delete(t)}const C=new Map;function P(e,t){C.has(e)||C.set(e,new Set),C.get(e).add(t)}function R(e,t){const n=C.get(e);n&&n.delete(t)}const b=new Map;async function T(e,t){b.has(e)||b.set(e,new Map),b.get(e).set(t.id,t);const n=v.get(e);if(!n)return;const r=[...n].map((e=>e()));await Promise.all(r)}async function I(e,t){const n=b.get(e);if(!n)return;n.delete(t);const r=C.get(e);if(!r)return;const o=[...r].map((e=>e()));await Promise.all(o)}function L(e){return b.get(e)?[...b.get(e).values()]:[]}function k(e){const t=b.get(e);t&&t.clear()}function M(e,t){const n=b.get(e);return n?n.get(t):null}function B(e,t,n){return{...e,action:n||e.actions[0],dispatcherIdentity:t}}function O(e,t,n="ascending"){const r=e||[];if(!t?.length)return r;const o=[],i=new Map;t.forEach((e=>{if(e.key)return i.set(e.key,e);o.push(e)}));let s=r.map((e=>{const{key:t}=e;if(t&&i.has(t)){const e=i.get(t);return i.delete(t),e}return e}));return s.push(...i.values(),...o),s="ascending"===n?s.sort(((e,t)=>(null!==e.score&&void 0!==e.score?e.score:1/0)-(null!==t.score&&void 0!==t.score?t.score:1/0))):s.sort(((e,t)=>(null!==t.score&&void 0!==t.score?t.score:1/0)-(null!==e.score&&void 0!==e.score?e.score:1/0))),s}function W(e){const t={};let n=[];let r=[];let o=d.Initial;t.getStatus=()=>o,t.getResultBuffer=()=>n,t.setResultBuffer=e=>{n=e,n?.length&&t.onChange()},t.getRevokedBuffer=()=>r,t.setRevokedBuffer=e=>{r=e,r?.length&&t.onChange()},t.onChange=w;const i={};return t.res=i,i.close=()=>{o!==d.Close&&(o=d.Close,t.onChange())},i.open=()=>{o!==d.Open&&(o=d.Open,t.onChange())},i.respond=n=>{const r=O(t.getResultBuffer(),n,e);t.setResultBuffer(r)},i.revoke=(...e)=>{const n=new Set(e),r=t.getResultBuffer().filter((({key:e})=>{const t=n.has(e);return t&&n.delete(e),!t}));t.setResultBuffer(r),n.size&&(t.getRevokedBuffer().forEach((e=>n.add(e))),t.setRevokedBuffer([...n]))},t}function D(e,t,n){const r=new Set;let o=!1;return{close:()=>{o=!0;for(const e of r)e()},req:{id:t,topic:e,...n,context:n?.context||{},onClose:e=>{r.add(e),o&&e()},removeListener:e=>{r.delete(e)}}}}function x(){return{name:fin.me.name,uuid:fin.me.uuid}}function A(){let e;try{const t=fin.Platform.getCurrentSync();if(!t?.identity)return;e=t.identity.uuid}catch(e){}return e}const E="deregistered or does not exist",F=new Error(`provider ${E}`),_=new Error("provider with name already exists"),$=new Error("bad payload"),q=new Error("subscription rejected"),G=new Error(`channel ${E}`),N=new Map;function H(e){const t=U(e);if(t)return t;throw G}function U(e){const t=N.get(e);if(t)return t}function V(e,t){N.set(e,t)}const j=new Map;function K(e){j.has(e)||j.set(e,new Map);const t=j.get(e);return{getRequestsForIdentity:e=>{const n=function(e){return`${e.uuid}:${e.name}`}(e);return t.has(n)||t.set(n,new Map),t.get(n)}}}async function X(e,t){return(await H(e)).dispatch(l,t)}function J({namespacedTopic:e,topic:t}){const n=M.bind(null,e),r=K(e),o=X.bind(null,e);return async(e,i)=>{if(!e||!e.id||!e.providerId){const e=$;return{error:e.message}}const{id:s,providerId:a}=e,c=n(a);if(!c){const e=F;return{error:e.message}}const d=r.getRequestsForIdentity(i);let u=d.get(e.id);u||(u=D(t,s,e),d.set(e.id,u));const f=W(),l=()=>{const e=f.getResultBuffer();f.setResultBuffer([]);const t=f.getRevokedBuffer();f.setRevokedBuffer([]);const n=f.getStatus();o({id:s,providerId:a,results:e,revoked:t,status:n})};let p=!0,g=!1;f.onChange=()=>{if(p)return p=!1,void l();g||(g=!0,setTimeout((()=>{g=!1,l()}),100))};try{const{results:e,context:t}=await c.onUserInput(u.req,f.res),n=f.getStatus();return{id:s,providerId:a,status:n,results:e,context:t}}catch(e){return{id:s,providerId:a,error:e.message}}}}async function Z(e,t,n){const r=n||await H(e),o=x(),i={identity:o,...t,onUserInput:void 0,onResultDispatch:void 0};await r.dispatch("2",i),await T(e,{identity:o,...t})}async function z(e,t){const n=await H(e);return await n.dispatch("3",t),I(e,t)}async function Q(e,t,n,r){const o=B(n,x(),r),i=M(e,t);if(i){const{onResultDispatch:e}=i;if(!e)return;return e(o)}const s={providerId:t,result:o};return(await H(e)).dispatch(p,s)}async function Y(e,t){const n={...t,context:t?.context||{}},r={},o=async function*(e,t,{setState:n}){const r=await H(e);for(;;){const e=await r.dispatch("1",t),o=e.error;if(o)throw new Error(o);const i=e;if(t.id=i.id,n(i.state),i.done)return i.value;yield i.value}}(e,n,{setState:e=>{r.state=e}});let i=await o.next();return r.id=n.id,r.close=()=>{!async function(e,t){(await H(e)).dispatch(g,{id:t})}(e,r.id)},r.next=()=>{if(i){const e=i;return i=void 0,e}return o.next()},r}async function ee(e){return(await H(e)).dispatch("4",null)}async function te(e){const t=await H(e);var n;n=e,N.delete(n),k(e),await t.disconnect()}function ne(e){const{namespacedTopic:t}=e,n=K(t);return async r=>{if(!U(t))return;const o=n.getRequestsForIdentity(r);for(const{req:e,close:t}of o.values())t(),o.delete(e.id);V(t,(async e=>{const{namespacedTopic:t}=e,n=await re(e);for(const e of L(t))await Z(t,e,n);return n})(e))}}async function re(e){const{namespacedTopic:t}=e,n=y(t),r=await async function(e){for(let t=0;t<50;t++)try{return await fin.InterApplicationBus.Channel.connect(e,{wait:!1})}catch(e){if(49===t)throw e;await new Promise((e=>setTimeout(e,1e3)))}}(n);return r.register(l,J(e)),r.register(g,function(e){const t=K(e);return(e,n)=>{const r=t.getRequestsForIdentity(n),o=r.get(e.id);o&&(o.close(),r.delete(e.id))}}(t)),r.register(p,function(e){return async(t,n)=>{if(!t||!t.providerId||!t.result)return;const r=M(e,t.providerId);if(!r)return;const{onResultDispatch:o}=r;return o?(t.result.dispatcherIdentity=n,o(t.result)):void 0}}(t)),r.onDisconnection(ne(e)),r}async function oe(e){const t=("string"==typeof e?e:e?.topic)||f,n=("string"==typeof e?null:e?.uuid)||A(),r=h(n,t),o={topic:t,namespace:n,namespacedTopic:r};let i=U(r);return i||(i=re(o),V(r,i),await i),{getAllProviders:ee.bind(null,r),register:Z.bind(null,r),search:Y.bind(null,r),deregister:z.bind(null,r),dispatch:Q.bind(null,r),disconnect:te.bind(null,r)}}const ie=new Map;function se(e){const t=ae(e);if(t)return t;throw G}function ae(e){const t=ie.get(e);if(t)return t}const ce=new Map;function de(e,t){ce.has(e)||ce.set(e,new Set),ce.get(e).add(t)}function ue(e,t){const n=ce.get(e);n&&n.delete(t)}var fe=n(5316);function le(e){return[...L(e)].map((e=>({...e,onUserInput:void 0,onResultDispatch:void 0})))}async function pe(e,t){if(M(e,t.id))throw new Error("provider with name already exists");const n=x();await T(e,{identity:n,...t})}function ge(e,t){I(e,t)}async function we(e,t,n,r){const o=M(e,t);if(!o)throw F;const{onResultDispatch:i}=o;if(!i)return;return i(B(n,x(),r))}async function*he(e,t,n){const r=function(e,t){const n=[],r=[],o=[],i=[];for(const s of e){const e=W(s.scoreOrder),a={results:[],provider:{id:s.id,identity:s.identity,title:s.title,scoreOrder:s.scoreOrder,icon:s.icon}};n.push(a),r.push(e);const c=(async()=>{try{const{results:n,context:r}=await s.onUserInput(t,e.res);a.results=O(a.results,n),a.context={...a.context,...r}}catch(e){a.error=e}c.done=!0})();i.push(c),o.push(o.length)}return{providerResponses:n,listenerResponses:r,openListenerResponses:o,initialResponsePromises:i}}(t.targets?t.targets.map((t=>M(e,t))).filter((e=>!!e)):[...L(e).filter((e=>!e.hidden))],t),{providerResponses:o,listenerResponses:i}=r;let{openListenerResponses:s,initialResponsePromises:a}=r,c=fe.D.Fetching;const u=e=>{c=e,n.setState(c)};let f,l=!1;t.onClose((()=>{l=!0,f&&f()}));do{let e=!1;if(a.length){const t=[];for(const n of a)n.done?e=!0:t.push(n);a=t,a.length||(u(fe.D.Fetched),e=!0)}let t,n=!1;const r=()=>{n=!0,t&&t()},p=[];for(const t of s){const n=i[t],s=o[t],a=n.getStatus();(a===d.Open||c===fe.D.Fetching&&a===d.Initial)&&(p.push(t),n.onChange=r);const u=n.getResultBuffer();u.length&&(n.setResultBuffer([]),s.results=O(s.results,u),e=!0);const f=n.getRevokedBuffer();if(f.length){n.setRevokedBuffer([]);const t=new Set(f);s.results=s.results.filter((({key:e})=>!t.has(e))),e=!0}}if(s=p,e&&(yield o),l)break;n||(s.length||a.length)&&await Promise.race([...a,new Promise((e=>{t=e})),new Promise((e=>{f=e}))])}while(s.length||a.length);return u(fe.D.Complete),o}let ye=0;function ve({namespacedTopic:e,topic:t},n){ye+=1;const r=D(t,ye.toString(),n),o=he(e,r.req,{setState:e=>{o.state=e}});return o.id=ye.toString(),o.close=r.close,o.state=fe.D.Fetching,o}const me=new Map;function Se(e,t){return`${e}:${t}`}function Ce(e){return async(t,...n)=>{if(!t)return{error:$.message};let r;if(t.id)r=Se(e.namespacedTopic,t.id);else{const n=ve(e,t);r=Se(e.namespacedTopic,n.id),t.id=n.id,me.set(r,{generator:n})}const o=me.get(r);clearTimeout(o.timeout);const i=await o.generator.next();return o.timeout=function(e){return window.setTimeout((()=>{me.delete(e)}),1e4)}(r),{...i,id:t.id,state:o.generator.state}}}function Pe(e,t,n){return se(e).dispatch(t,g,{id:n})}function Re(e){return t=>function(e,t){const n=Se(e,t),r=me.get(n);r&&r.generator.close()}(e,t.id)}async function be(e,t,{id:n,query:r,context:o,targets:i}){const s=se(e),a={id:n,query:r,context:o,targets:i,providerId:t.id},c=await s.dispatch(t.identity,l,a),d=c.error;if(d)throw new Error(d);return c}const Te=new Map;function Ie(e,t,n){return`${e}:${t.name}:${t.uuid}:${n}`}const Le=new Map;function ke(e,t,n){return`${e}:${t}:${n}`}function Me(e,t){const n=Ie.bind(null,e,t.identity),r=Pe.bind(null,e,t.identity),o=be.bind(null,e,t);return async(i,s)=>{const a=n(i.id);if(!Te.has(a)){const e=()=>{r(i.id),Te.delete(a)};Te.set(a,e),i.onClose(e)}const c=ke(e,t.id,i.id),u=()=>{Le.delete(c),s.close()};i.onClose(u),Le.set(c,(e=>{e.results?.length&&s.respond(e.results),e.revoked?.length&&s.revoke(...e.revoked),e.status===d.Open&&s.open(),e.status===d.Close&&u()}));const f=await o(i);return f.status===d.Open&&s.open(),f.status!==d.Close&&f.status!==d.Initial||u(),f}}function Be(e,t){return async n=>{const r=se(e),o={providerId:t.id,result:n};return r.dispatch(t.identity,p,o)}}const Oe=new Map;function We(e,t){return`${e}-${t.name}-${t.uuid}`}function De(e){return async(t,n)=>{if(!t||!t.id)return void new Error(JSON.stringify(t));if(M(e,t.id))throw _;t.identity=n,await async function(e,t){const n=We(e,t.identity);Oe.has(n)||Oe.set(n,[]),Oe.get(n).push(t.id),await T(e,{...t,onUserInput:Me(e,t),onResultDispatch:Be(e,t)})}(e,t)}}function xe(e){return t=>{t&&function(e,t){const n=M(e,t);if(!n)return;const r=We(e,n.identity),o=Oe.get(r);if(o){const n=o.findIndex((e=>e===t));-1!==n&&(o.splice(n,1),I(e,t))}}(e,t)}}const Ae=new Map;function Ee(e,t){Ae.has(e)||Ae.set(e,new Set),Ae.get(e).add(t)}function Fe(e,t){const n=Ae.get(e);n&&n.delete(t)}function _e(e){return async t=>{!function(e,t){const n=We(e,t),r=Oe.get(n);if(r){for(const t of r)I(e,t);Oe.delete(n)}}(e,t);const n=Ae.get(e);n&&n.forEach((e=>e(t)))}}async function $e(e){const{namespacedTopic:t}=e,n=y(e.namespacedTopic),r=await(o=n,fin.InterApplicationBus.Channel.create(o));var o;return r.onConnection(function({namespacedTopic:e}){return async t=>{const n=ce.get(e);if(n)for(const e of n)if(!await e(t))throw q}}(e)),r.onDisconnection(_e(t)),r.register(g,Re(t)),r.register(l,function(e){return t=>{const n=ke(e,t.providerId,t.id),r=Le.get(n);r&&r(t)}}(t)),r.register("2",De(t)),r.register("3",xe(t)),r.register("4",function(e){return async()=>le(e)}(t)),r.register("1",Ce(e)),r.register(p,function(e){return async(t,n)=>{if(!t||!t.providerId||!t.result)return;const r=M(e,t.providerId);if(!r)throw F;const{onResultDispatch:o}=r;return o?(t.result.dispatcherIdentity=n,o(t.result)):void 0}}(t)),r}async function qe(e){const t=se(e);var n;n=e,ie.delete(n),await t.destroy(),k(e)}async function Ge(e){const t=("string"==typeof e?e:e?.topic)||f,n=A(),r=h(n,t),o={topic:t,namespace:n,namespacedTopic:r};let i=ae(r);i||(i=await $e(o),function(e,t){ie.set(e,t)}(r,i));const s=ue.bind(null,r),a=Fe.bind(null,r),c=S.bind(null,r),d=R.bind(null,r);return{getAllProviders:le.bind(null,r),search:ve.bind(null,o),register:pe.bind(null,r),deregister:ge.bind(null,r),onSubscription:de.bind(null,r),onDisconnect:Ee.bind(null,r),onRegister:m.bind(null,r),onDeregister:P.bind(null,r),dispatch:we.bind(null,o),disconnect:qe.bind(null,r),removeListener:e=>{s(e),a(e),c(e),d(e)}}}const{create:Ne}=o,{subscribe:He}=r,Ue={create:Ne,subscribe:He,defaultTopic:"all"},Ve=()=>{const e=window;e.search=Ue,e.fin&&(e.fin.Search=Ue)},je=e=>{const t=()=>{Ve(),window.removeEventListener(e,t)};return t};if("undefined"!=typeof window){Ve();const e="load",t=je(e);window.addEventListener(e,t);const n="DOMContentLoaded",r=je(n);window.addEventListener(n,r)}const Ke=new Map;async function Xe(){await async function(e){Ke.set(e,await He({topic:e,uuid:u.q9.Workspace}))}(a)}let Je;async function Ze(e){return await async function(){return Je||(Je=Xe()),Je}(),Ke.get(e)}var ze=n(3758);const Qe=async e=>{if(!e.icon)throw new Error(`${e.id} provider needs to have icon property defined.`);await(0,s.aB)();const t=await Ze(a);try{const n=await t.register(e);return(0,i.ck)({allowed:!0}),n}catch(e){throw(0,i.ck)({allowed:!1,rejectionCode:e.message}),e}},Ye=async e=>{await(0,s.aB)();return(await Ze(a)).deregister(e)};async function et(){return(await(0,s.Xl)()).dispatch(s.Ml.ShowHome,void 0)}async function tt(){return(await(0,s.Xl)()).dispatch(s.Ml.HideHome,void 0)}},3298:(e,t,n)=>{n.d(t,{w:()=>r.w});var r=n(5316)},3758:(e,t,n)=>{var r,o,i;n.d(t,{Pt:()=>r,yW:()=>o,el:()=>i}),function(e){e.Suggestion="suggestion"}(r||(r={})),function(e){e.Contact="Contact",e.Custom="Custom",e.List="List",e.Plain="Plain",e.SimpleText="SimpleText"}(o||(o={})),function(e){e.MultiSelect="MultiSelect"}(i||(i={}))},7564:(e,t,n)=>{n(3298),n(3758),n(6114),n(2109)},6114:(e,t,n)=>{var r,o;n.d(t,{L:()=>r,T:()=>o}),function(e){e.Snapshot="snapshot",e.Manifest="manifest",e.View="view",e.External="external"}(r||(r={})),function(e){e.LandingPage="landingPage",e.AppGrid="appGrid"}(o||(o={}))},2109:(e,t,n)=>{n.d(t,{p6:()=>r,Go:()=>o,bI:()=>i,ZJ:()=>s});const r={Container:"Container",Button:"Button"},o={Text:"Text",Image:"Image",List:"List"},i={...r,...o};var s;!function(e){e.Primary="primary",e.Secondary="secondary",e.TextOnly="textOnly"}(s||(s={}))},317:(e,t,n)=>{n.r(t),n.d(t,{AppManifestType:()=>i.L,StorefrontTemplate:()=>i.T,deregister:()=>f,hide:()=>l,register:()=>u,show:()=>p});var r=n(6532),o=n(7405);n(7564);var i=n(6114);let s;const a=new Map,c=e=>{if(!a.has(e))throw new Error(`Storefront Provider with id ${e} is not registered`);return a.get(e)},d=async e=>{const t=await(0,o.Xl)();if(a.has(e.id))throw new Error(`Storefront provider with id ${e.id} already registered`);return a.set(e.id,e),(e=>{e.isStorefrontActionsRegistered||(e.isStorefrontActionsRegistered=!0,e.register(o.Ml.GetStorefrontProviderApps,(e=>c(e).getApps())),e.register(o.Ml.GetStorefrontProviderFooter,(e=>c(e).getFooter())),e.register(o.Ml.GetStorefrontProviderLandingPage,(e=>c(e).getLandingPage())),e.register(o.Ml.GetStorefrontProviderNavigation,(e=>c(e).getNavigation())),e.register(o.Ml.LaunchStorefrontProviderApp,(({id:e,app:t})=>c(e).launchApp(t))))})(t),t.dispatch(o.Ml.RegisterStorefrontProvider,e)},u=e=>(s=d(e),(0,r.d9)({allowed:!0}),s),f=async e=>{await s,a.delete(e);return(await(0,o.Xl)()).dispatch(o.Ml.DeregisterStorefrontProvider,e)},l=async()=>{await s,await(0,o.aB)(),await(async()=>(await(0,o.Dm)()).dispatch(o.Ml.HideStorefront,void 0))()},p=async()=>{await s,await(0,o.aB)(),await(async()=>(await(0,o.Dm)()).dispatch(o.Ml.ShowStorefront,null))()}},7405:(e,t,n)=>{n.d(t,{Ml:()=>s,Dm:()=>a,Xl:()=>f,aB:()=>u});var r=n(6678);const o=r.Ax&&"complete"!==document.readyState&&new Promise((e=>document.addEventListener("readystatechange",(()=>{"complete"===document.readyState&&e()}))));var i=n(121);var s;!function(e){e.RegisterStorefrontProvider="register-storefront-provider",e.DeregisterStorefrontProvider="deregister-storefront-provider",e.GetStorefrontProviders="get-storefront-providers",e.HideStorefront="hide-storefront",e.GetStorefrontProviderApps="get-storefront-provider-apps",e.GetStorefrontProviderLandingPage="get-storefront-provider-landing-page",e.GetStorefrontProviderFooter="get-storefront-provider-footer",e.GetStorefrontProviderNavigation="get-storefront-provider-navigation",e.LaunchStorefrontProviderApp="launch-storefront-provider-app",e.ShowStorefront="show-storefront",e.CreateStorefrontWindow="create-storefront-window",e.ShowHome="show-home",e.HideHome="hide-home",e.AssignHomeSearchContext="assign-home-search-context",e.GetLegacyPages="get-legacy-pages",e.GetLegacyWorkspaces="get-legacy-workspaces",e.GetComputedPlatformTheme="get-computed-platform-theme"}(s||(s={}));const a=function(e){let t;return()=>{if(!r.sS)throw new Error("getChannelClient cannot be used outside an OpenFin env. Avoid using this method during pre-rendering.");return t||(t=(async()=>{await o;const n=await fin.InterApplicationBus.Channel.connect(e);return n.onDisconnection((async()=>{t=void 0})),n})().then((e=>e)).catch((n=>{throw t=void 0,new Error(`failed to connect to channel provider ${e}: ${n}`)}))),t}}("__of_workspace_protocol__"),c="isLaunchedViaLib",d=e=>{const t=new URL(e);return t.searchParams.append(c,"true"),t.toString()},u=async()=>{if(!await(0,i.JV)(i.iW))return(r.ZK||-1===navigator.userAgent.indexOf("Win"))&&await fin.Application.startFromManifest(d(r.aW)),fin.System.openUrlWithBrowser(d(r.GX))},f=async()=>(await u(),a())},5806:(e,t,n)=>{n.d(t,{q9:()=>r});var r,o,i,s=n(6678);!function(e){e.Workspace="openfin-browser"}(r||(r={})),function(e){e.RunRequested="run-requested",e.WindowOptionsChanged="window-options-changed",e.WindowClosed="window-closed",e.WindowCreated="window-created"}(o||(o={})),function(e){e.FinProtocol="fin-protocol"}(i||(i={}));s.AB,s.AB,r.Workspace,r.Workspace},6678:(e,t,n)=>{var r;n.d(t,{sS:()=>o,Ax:()=>i,AB:()=>a,oC:()=>c,ZK:()=>d,GX:()=>u,aW:()=>f,u0:()=>p}),function(e){e.Local="local",e.Dev="dev",e.Staging="staging",e.Prod="prod"}(r||(r={}));const o="undefined"!=typeof window&&"undefined"!=typeof fin,i=("undefined"==typeof process||process.env?.JEST_WORKER_ID,"undefined"!=typeof window),s=i?window.origin:r.Local,a=o&&fin.me.uuid,c=o&&fin.me.name,d=(o&&fin.me.entityType,"prod"===r.Local),u=(r.Dev,r.Staging,r.Prod,"fins://system-apps/workspace"),f="https://cdn.openfin.co/workspace/7.3.10/app.json",l=e=>e.startsWith("http://")||e.startsWith("https://")?e:s+e,p=(l("https://cdn.openfin.co/workspace/7.3.10"),l("https://cdn.openfin.co/workspace/7.3.10"),"undefined"!=typeof WORKSPACE_DOCS_PLATFORM_URL&&l(WORKSPACE_DOCS_PLATFORM_URL),"undefined"!=typeof WORKSPACE_DOCS_CLIENT_URL&&l(WORKSPACE_DOCS_CLIENT_URL),"7.3.10")},6532:(e,t,n)=>{n.d(t,{ck:()=>a,d9:()=>c});var r,o=n(6678),i=n(121);!function(e){e.Browser="Browser",e.Home="Home",e.Notification="Notification",e.Storefront="Storefront",e.Platform="Platform",e.Theming="Theming"}(r||(r={}));const s=async(e,t)=>{const n={apiVersion:t.apiVersion||o.u0,componentName:e,componentVersion:o.u0,...t};fin.System.registerUsage({type:"workspace-licensing",data:n})},a=async e=>{i.OI.uuid===i.Gi.uuid&&i.OI.name===i.Gi.name||s(r.Home,e)},c=async e=>{s(r.Storefront,e)}},121:(e,t,n)=>{n.d(t,{Gi:()=>c,OI:()=>d,iW:()=>u,JV:()=>f});var r,o,i=n(5806),s=n(6678);!function(e){e.Home="openfin-home",e.Dock="openfin-dock",e.Storefront="openfin-storefront",e.HomeInternal="openfin-home-internal",e.BrowserMenu="openfin-browser-menu",e.BrowserIndicator="openfin-browser-indicator",e.BrowserWindow="internal-generated-window"}(r||(r={})),function(e){e.Shown="shown",e.BoundsChanged="bounds-changed",e.LayoutReady="layout-ready",e.EndUserBoundsChanging="end-user-bounds-changing",e.Blurred="blurred",e.CloseRequested="close-requested",e.Focused="focused",e.ShowRequested="show-requested",e.ViewCrashed="view-crashed",e.ViewAttached="view-attached",e.ViewDetached="view-detached",e.ViewPageTitleUpdated="view-page-title-updated",e.ViewDestroyed="view-destroyed",e.OptionsChanged="options-changed"}(o||(o={}));function a(e){if(!s.sS)throw new Error("getOFWindow can only be used in an OpenFin env. Avoid calling this method during pre-rendering.");return fin.Window.wrapSync(e)}const c={name:s.oC,uuid:s.AB};const d={name:r.Home,uuid:i.q9.Workspace},u=(r.Dock,i.q9.Workspace,r.Storefront,i.q9.Workspace,{name:i.q9.Workspace,uuid:i.q9.Workspace});const f=e=>a(e).getOptions().then((()=>!0)).catch((()=>!1))},5316:(e,t,n)=>{var r,o;n.d(t,{D:()=>r,w:()=>o}),function(e){e.Fetching="fetching",e.Fetched="fetched",e.Complete="complete"}(r||(r={})),function(e){e.Active="active",e.Default="default"}(o||(o={}))}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};(()=>{n.r(r),n.d(r,{AppManifestType:()=>p.L,ButtonStyle:()=>f.ZJ,CLIAction:()=>l.Pt,CLIFilterOptionType:()=>l.el,CLITemplate:()=>l.yW,ContainerTemplateFragmentNames:()=>f.p6,Home:()=>o,Legacy:()=>e,PresentationTemplateFragmentNames:()=>f.Go,SearchTagBackground:()=>u.w,Storefront:()=>d,StorefrontTemplate:()=>p.T,TemplateFragmentTypes:()=>f.bI});var e={};n.r(e),n.d(e,{getPages:()=>a,getWorkspaces:()=>c});var t,o=n(3133);n(6678),n(121);!function(e){e.TabCreated="tab-created",e.ContainerCreated="container-created",e.ContainerResized="container-resized"}(t||(t={}));new Map;var i;!function(e){e.CurrentWorkspaceId="currentWorkspaceId",e.LastFocusedBrowserWindow="lastFocusedBrowserWindow",e.MachineName="machineName",e.NewTabPageLayout="NewTabPageLayout",e.NewTabPageSort="NewTabPageSort"}(i||(i={}));var s=n(7405);const a=()=>async function(){return(await(0,s.Dm)()).dispatch(s.Ml.GetLegacyPages,void 0)}(),c=()=>(async()=>(await(0,s.Dm)()).dispatch(s.Ml.GetLegacyWorkspaces,void 0))();var d=n(317),u=n(3298),f=n(2109),l=n(3758),p=n(6114)})(),module.exports=r})();
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/lodash/_DataView.js":
/*!**********************************************!*\
  !*** ../../node_modules/lodash/_DataView.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "../../node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "../../node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ "../../node_modules/lodash/_Map.js":
/*!*****************************************!*\
  !*** ../../node_modules/lodash/_Map.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "../../node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "../../node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "../../node_modules/lodash/_Promise.js":
/*!*********************************************!*\
  !*** ../../node_modules/lodash/_Promise.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "../../node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "../../node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ "../../node_modules/lodash/_Set.js":
/*!*****************************************!*\
  !*** ../../node_modules/lodash/_Set.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "../../node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "../../node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ "../../node_modules/lodash/_Symbol.js":
/*!********************************************!*\
  !*** ../../node_modules/lodash/_Symbol.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "../../node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "../../node_modules/lodash/_WeakMap.js":
/*!*********************************************!*\
  !*** ../../node_modules/lodash/_WeakMap.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(/*! ./_getNative */ "../../node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "../../node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ "../../node_modules/lodash/_arrayLikeKeys.js":
/*!***************************************************!*\
  !*** ../../node_modules/lodash/_arrayLikeKeys.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "../../node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "../../node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "../../node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "../../node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "../../node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "../../node_modules/lodash/isTypedArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "../../node_modules/lodash/_arrayMap.js":
/*!**********************************************!*\
  !*** ../../node_modules/lodash/_arrayMap.js ***!
  \**********************************************/
/***/ ((module) => {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ "../../node_modules/lodash/_asciiToArray.js":
/*!**************************************************!*\
  !*** ../../node_modules/lodash/_asciiToArray.js ***!
  \**************************************************/
/***/ ((module) => {

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

module.exports = asciiToArray;


/***/ }),

/***/ "../../node_modules/lodash/_baseGetTag.js":
/*!************************************************!*\
  !*** ../../node_modules/lodash/_baseGetTag.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "../../node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "../../node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "../../node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "../../node_modules/lodash/_baseIsArguments.js":
/*!*****************************************************!*\
  !*** ../../node_modules/lodash/_baseIsArguments.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../../node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../../node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "../../node_modules/lodash/_baseIsNative.js":
/*!**************************************************!*\
  !*** ../../node_modules/lodash/_baseIsNative.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(/*! ./isFunction */ "../../node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "../../node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "../../node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "../../node_modules/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "../../node_modules/lodash/_baseIsTypedArray.js":
/*!******************************************************!*\
  !*** ../../node_modules/lodash/_baseIsTypedArray.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../../node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "../../node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../../node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "../../node_modules/lodash/_baseKeys.js":
/*!**********************************************!*\
  !*** ../../node_modules/lodash/_baseKeys.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ "../../node_modules/lodash/_isPrototype.js"),
    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ "../../node_modules/lodash/_nativeKeys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ "../../node_modules/lodash/_baseTimes.js":
/*!***********************************************!*\
  !*** ../../node_modules/lodash/_baseTimes.js ***!
  \***********************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "../../node_modules/lodash/_baseUnary.js":
/*!***********************************************!*\
  !*** ../../node_modules/lodash/_baseUnary.js ***!
  \***********************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "../../node_modules/lodash/_baseValues.js":
/*!************************************************!*\
  !*** ../../node_modules/lodash/_baseValues.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayMap = __webpack_require__(/*! ./_arrayMap */ "../../node_modules/lodash/_arrayMap.js");

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return arrayMap(props, function(key) {
    return object[key];
  });
}

module.exports = baseValues;


/***/ }),

/***/ "../../node_modules/lodash/_copyArray.js":
/*!***********************************************!*\
  !*** ../../node_modules/lodash/_copyArray.js ***!
  \***********************************************/
/***/ ((module) => {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),

/***/ "../../node_modules/lodash/_coreJsData.js":
/*!************************************************!*\
  !*** ../../node_modules/lodash/_coreJsData.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "../../node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "../../node_modules/lodash/_freeGlobal.js":
/*!************************************************!*\
  !*** ../../node_modules/lodash/_freeGlobal.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

module.exports = freeGlobal;


/***/ }),

/***/ "../../node_modules/lodash/_getNative.js":
/*!***********************************************!*\
  !*** ../../node_modules/lodash/_getNative.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "../../node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "../../node_modules/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "../../node_modules/lodash/_getRawTag.js":
/*!***********************************************!*\
  !*** ../../node_modules/lodash/_getRawTag.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "../../node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "../../node_modules/lodash/_getTag.js":
/*!********************************************!*\
  !*** ../../node_modules/lodash/_getTag.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DataView = __webpack_require__(/*! ./_DataView */ "../../node_modules/lodash/_DataView.js"),
    Map = __webpack_require__(/*! ./_Map */ "../../node_modules/lodash/_Map.js"),
    Promise = __webpack_require__(/*! ./_Promise */ "../../node_modules/lodash/_Promise.js"),
    Set = __webpack_require__(/*! ./_Set */ "../../node_modules/lodash/_Set.js"),
    WeakMap = __webpack_require__(/*! ./_WeakMap */ "../../node_modules/lodash/_WeakMap.js"),
    baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../../node_modules/lodash/_baseGetTag.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "../../node_modules/lodash/_toSource.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ "../../node_modules/lodash/_getValue.js":
/*!**********************************************!*\
  !*** ../../node_modules/lodash/_getValue.js ***!
  \**********************************************/
/***/ ((module) => {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "../../node_modules/lodash/_hasUnicode.js":
/*!************************************************!*\
  !*** ../../node_modules/lodash/_hasUnicode.js ***!
  \************************************************/
/***/ ((module) => {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

module.exports = hasUnicode;


/***/ }),

/***/ "../../node_modules/lodash/_isIndex.js":
/*!*********************************************!*\
  !*** ../../node_modules/lodash/_isIndex.js ***!
  \*********************************************/
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "../../node_modules/lodash/_isMasked.js":
/*!**********************************************!*\
  !*** ../../node_modules/lodash/_isMasked.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "../../node_modules/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "../../node_modules/lodash/_isPrototype.js":
/*!*************************************************!*\
  !*** ../../node_modules/lodash/_isPrototype.js ***!
  \*************************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "../../node_modules/lodash/_iteratorToArray.js":
/*!*****************************************************!*\
  !*** ../../node_modules/lodash/_iteratorToArray.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Converts `iterator` to an array.
 *
 * @private
 * @param {Object} iterator The iterator to convert.
 * @returns {Array} Returns the converted array.
 */
function iteratorToArray(iterator) {
  var data,
      result = [];

  while (!(data = iterator.next()).done) {
    result.push(data.value);
  }
  return result;
}

module.exports = iteratorToArray;


/***/ }),

/***/ "../../node_modules/lodash/_mapToArray.js":
/*!************************************************!*\
  !*** ../../node_modules/lodash/_mapToArray.js ***!
  \************************************************/
/***/ ((module) => {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),

/***/ "../../node_modules/lodash/_nativeKeys.js":
/*!************************************************!*\
  !*** ../../node_modules/lodash/_nativeKeys.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(/*! ./_overArg */ "../../node_modules/lodash/_overArg.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "../../node_modules/lodash/_nodeUtil.js":
/*!**********************************************!*\
  !*** ../../node_modules/lodash/_nodeUtil.js ***!
  \**********************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "../../node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;


/***/ }),

/***/ "../../node_modules/lodash/_objectToString.js":
/*!****************************************************!*\
  !*** ../../node_modules/lodash/_objectToString.js ***!
  \****************************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "../../node_modules/lodash/_overArg.js":
/*!*********************************************!*\
  !*** ../../node_modules/lodash/_overArg.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "../../node_modules/lodash/_root.js":
/*!******************************************!*\
  !*** ../../node_modules/lodash/_root.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "../../node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "../../node_modules/lodash/_setToArray.js":
/*!************************************************!*\
  !*** ../../node_modules/lodash/_setToArray.js ***!
  \************************************************/
/***/ ((module) => {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),

/***/ "../../node_modules/lodash/_stringToArray.js":
/*!***************************************************!*\
  !*** ../../node_modules/lodash/_stringToArray.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var asciiToArray = __webpack_require__(/*! ./_asciiToArray */ "../../node_modules/lodash/_asciiToArray.js"),
    hasUnicode = __webpack_require__(/*! ./_hasUnicode */ "../../node_modules/lodash/_hasUnicode.js"),
    unicodeToArray = __webpack_require__(/*! ./_unicodeToArray */ "../../node_modules/lodash/_unicodeToArray.js");

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string);
}

module.exports = stringToArray;


/***/ }),

/***/ "../../node_modules/lodash/_toSource.js":
/*!**********************************************!*\
  !*** ../../node_modules/lodash/_toSource.js ***!
  \**********************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "../../node_modules/lodash/_unicodeToArray.js":
/*!****************************************************!*\
  !*** ../../node_modules/lodash/_unicodeToArray.js ***!
  \****************************************************/
/***/ ((module) => {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

module.exports = unicodeToArray;


/***/ }),

/***/ "../../node_modules/lodash/isArguments.js":
/*!************************************************!*\
  !*** ../../node_modules/lodash/isArguments.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "../../node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../../node_modules/lodash/isObjectLike.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "../../node_modules/lodash/isArray.js":
/*!********************************************!*\
  !*** ../../node_modules/lodash/isArray.js ***!
  \********************************************/
/***/ ((module) => {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "../../node_modules/lodash/isArrayLike.js":
/*!************************************************!*\
  !*** ../../node_modules/lodash/isArrayLike.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(/*! ./isFunction */ "../../node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "../../node_modules/lodash/isLength.js");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "../../node_modules/lodash/isBuffer.js":
/*!*********************************************!*\
  !*** ../../node_modules/lodash/isBuffer.js ***!
  \*********************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(/*! ./_root */ "../../node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "../../node_modules/lodash/stubFalse.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;


/***/ }),

/***/ "../../node_modules/lodash/isFunction.js":
/*!***********************************************!*\
  !*** ../../node_modules/lodash/isFunction.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../../node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "../../node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "../../node_modules/lodash/isLength.js":
/*!*********************************************!*\
  !*** ../../node_modules/lodash/isLength.js ***!
  \*********************************************/
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "../../node_modules/lodash/isObject.js":
/*!*********************************************!*\
  !*** ../../node_modules/lodash/isObject.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "../../node_modules/lodash/isObjectLike.js":
/*!*************************************************!*\
  !*** ../../node_modules/lodash/isObjectLike.js ***!
  \*************************************************/
/***/ ((module) => {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "../../node_modules/lodash/isString.js":
/*!*********************************************!*\
  !*** ../../node_modules/lodash/isString.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../../node_modules/lodash/_baseGetTag.js"),
    isArray = __webpack_require__(/*! ./isArray */ "../../node_modules/lodash/isArray.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../../node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
}

module.exports = isString;


/***/ }),

/***/ "../../node_modules/lodash/isTypedArray.js":
/*!*************************************************!*\
  !*** ../../node_modules/lodash/isTypedArray.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "../../node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "../../node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "../../node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "../../node_modules/lodash/keys.js":
/*!*****************************************!*\
  !*** ../../node_modules/lodash/keys.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "../../node_modules/lodash/_arrayLikeKeys.js"),
    baseKeys = __webpack_require__(/*! ./_baseKeys */ "../../node_modules/lodash/_baseKeys.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "../../node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ "../../node_modules/lodash/stubFalse.js":
/*!**********************************************!*\
  !*** ../../node_modules/lodash/stubFalse.js ***!
  \**********************************************/
/***/ ((module) => {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "../../node_modules/lodash/toArray.js":
/*!********************************************!*\
  !*** ../../node_modules/lodash/toArray.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "../../node_modules/lodash/_Symbol.js"),
    copyArray = __webpack_require__(/*! ./_copyArray */ "../../node_modules/lodash/_copyArray.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "../../node_modules/lodash/_getTag.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "../../node_modules/lodash/isArrayLike.js"),
    isString = __webpack_require__(/*! ./isString */ "../../node_modules/lodash/isString.js"),
    iteratorToArray = __webpack_require__(/*! ./_iteratorToArray */ "../../node_modules/lodash/_iteratorToArray.js"),
    mapToArray = __webpack_require__(/*! ./_mapToArray */ "../../node_modules/lodash/_mapToArray.js"),
    setToArray = __webpack_require__(/*! ./_setToArray */ "../../node_modules/lodash/_setToArray.js"),
    stringToArray = __webpack_require__(/*! ./_stringToArray */ "../../node_modules/lodash/_stringToArray.js"),
    values = __webpack_require__(/*! ./values */ "../../node_modules/lodash/values.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/** Built-in value references. */
var symIterator = Symbol ? Symbol.iterator : undefined;

/**
 * Converts `value` to an array.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Array} Returns the converted array.
 * @example
 *
 * _.toArray({ 'a': 1, 'b': 2 });
 * // => [1, 2]
 *
 * _.toArray('abc');
 * // => ['a', 'b', 'c']
 *
 * _.toArray(1);
 * // => []
 *
 * _.toArray(null);
 * // => []
 */
function toArray(value) {
  if (!value) {
    return [];
  }
  if (isArrayLike(value)) {
    return isString(value) ? stringToArray(value) : copyArray(value);
  }
  if (symIterator && value[symIterator]) {
    return iteratorToArray(value[symIterator]());
  }
  var tag = getTag(value),
      func = tag == mapTag ? mapToArray : (tag == setTag ? setToArray : values);

  return func(value);
}

module.exports = toArray;


/***/ }),

/***/ "../../node_modules/lodash/values.js":
/*!*******************************************!*\
  !*** ../../node_modules/lodash/values.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseValues = __webpack_require__(/*! ./_baseValues */ "../../node_modules/lodash/_baseValues.js"),
    keys = __webpack_require__(/*! ./keys */ "../../node_modules/lodash/keys.js");

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object == null ? [] : baseValues(object, keys(object));
}

module.exports = values;


/***/ }),

/***/ "../../node_modules/node-emoji/index.js":
/*!**********************************************!*\
  !*** ../../node_modules/node-emoji/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./lib/emoji */ "../../node_modules/node-emoji/lib/emoji.js");

/***/ }),

/***/ "../../node_modules/node-emoji/lib/emoji.js":
/*!**************************************************!*\
  !*** ../../node_modules/node-emoji/lib/emoji.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*jslint node: true*/
var toArray = __webpack_require__(/*! lodash/toArray */ "../../node_modules/lodash/toArray.js");
var emojiByName = __webpack_require__(/*! ./emoji.json */ "../../node_modules/node-emoji/lib/emoji.json");

"use strict";

/**
 * regex to parse emoji in a string - finds emoji, e.g. :coffee:
 */
var emojiNameRegex = /:([a-zA-Z0-9_\-\+]+):/g;

/**
 * regex to trim whitespace
 * use instead of String.prototype.trim() for IE8 support
 */
var trimSpaceRegex = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

/**
 * Removes colons on either side
 * of the string if present
 * @param  {string} str
 * @return {string}
 */
function stripColons (str) {
  var colonIndex = str.indexOf(':');
  if (colonIndex > -1) {
    // :emoji: (http://www.emoji-cheat-sheet.com/)
    if (colonIndex === str.length - 1) {
      str = str.substring(0, colonIndex);
      return stripColons(str);
    } else {
      str = str.substr(colonIndex + 1);
      return stripColons(str);
    }
  }

  return str;
}

/**
 * Adds colons to either side
 * of the string
 * @param {string} str
 * @return {string}
 */
function wrapColons (str) {
  return (typeof str === 'string' && str.length > 0) ? ':' + str + ':' : str;
}

/**
 * Ensure that the word is wrapped in colons
 * by only adding them, if they are not there.
 * @param {string} str
 * @return {string}
 */
function ensureColons (str) {
  return (typeof str === 'string' && str[0] !== ':') ? wrapColons(str) : str;
}

// Non spacing mark, some emoticons have them. It's the 'Variant Form',
// which provides more information so that emoticons can be rendered as
// more colorful graphics. FE0E is a unicode text version, where as FE0F
// should be rendered as a graphical version. The code gracefully degrades.
var NON_SPACING_MARK = String.fromCharCode(65039); // 65039 - '️' - 0xFE0F;
var nonSpacingRegex = new RegExp(NON_SPACING_MARK, 'g')

// Remove the non-spacing-mark from the code, never send a stripped version
// to the client, as it kills graphical emoticons.
function stripNSB (code) {
  return code.replace(nonSpacingRegex, '');
};

// Reversed hash table, where as emojiByName contains a { heart: '❤' }
// dictionary emojiByCode contains { ❤: 'heart' }. The codes are normalized
// to the text version.
var emojiByCode = Object.keys(emojiByName).reduce(function(h,k) {
  h[stripNSB(emojiByName[k])] = k;
  return h;
}, {});

/**
 * Emoji namespace
 */
var Emoji = {
  emoji: emojiByName,
};

/**
 * get emoji code from name. return emoji code back if code is passed in.
 * @param  {string} emoji
 * @return {string}
 */
Emoji._get = function _get (emoji) {
  if (emojiByCode[stripNSB(emoji)]) {
    return emoji;
  } else if (emojiByName.hasOwnProperty(emoji)) {
    return emojiByName[emoji];
  }

  return ensureColons(emoji);
};

/**
 * get emoji code from :emoji: string or name
 * @param  {string} emoji
 * @return {string}
 */
Emoji.get = function get (emoji) {
  emoji = stripColons(emoji);

  return Emoji._get(emoji);
};

/**
 * find the emoji by either code or name
 * @param {string} nameOrCode The emoji to find, either `coffee`, `:coffee:` or `☕`;
 * @return {object}
 */
Emoji.find = function find (nameOrCode) {
  return Emoji.findByName(nameOrCode) || Emoji.findByCode(nameOrCode);
};

/**
 * find the emoji by name
 * @param {string} name The emoji to find either `coffee` or `:coffee:`;
 * @return {object}
 */
Emoji.findByName = function findByName (name) {
  var stripped = stripColons(name);
  var emoji = emojiByName[stripped];

  return emoji ? ({ emoji: emoji, key: stripped }) : undefined;
};

/**
 * find the emoji by code (emoji)
 * @param {string} code The emoji to find; for example `☕` or `☔`
 * @return {object}
 */
Emoji.findByCode = function findByCode (code) {
  var stripped = stripNSB(code);
  var name = emojiByCode[stripped];

  // lookup emoji to ensure the Variant Form is returned
  return name ? ({ emoji: emojiByName[name], key: name }) : undefined;
};


/**
 * Check if an emoji is known by this library
 * @param {string} nameOrCode The emoji to validate, either `coffee`, `:coffee:` or `☕`;
 * @return {object}
 */
Emoji.hasEmoji = function hasEmoji (nameOrCode) {
  return Emoji.hasEmojiByName(nameOrCode) || Emoji.hasEmojiByCode(nameOrCode);
};

/**
 * Check if an emoji with given name is known by this library
 * @param {string} name The emoji to validate either `coffee` or `:coffee:`;
 * @return {object}
 */
Emoji.hasEmojiByName = function hasEmojiByName (name) {
  var result = Emoji.findByName(name);
  return !!result && result.key === stripColons(name);
};

/**
 * Check if a given emoji is known by this library
 * @param {string} code The emoji to validate; for example `☕` or `☔`
 * @return {object}
 */
Emoji.hasEmojiByCode = function hasEmojiByCode (code) {
  var result = Emoji.findByCode(code);
  return !!result && stripNSB(result.emoji) === stripNSB(code);
};

/**
 * get emoji name from code
 * @param  {string} emoji
 * @param  {boolean} includeColons should the result include the ::
 * @return {string}
 */
Emoji.which = function which (emoji_code, includeColons) {
  var code = stripNSB(emoji_code);
  var word = emojiByCode[code];

  return includeColons ? wrapColons(word) : word;
};

/**
 * emojify a string (replace :emoji: with an emoji)
 * @param  {string} str
 * @param  {function} on_missing (gets emoji name without :: and returns a proper emoji if no emoji was found)
 * @param  {function} format (wrap the returned emoji in a custom element)
 * @return {string}
 */
Emoji.emojify = function emojify (str, on_missing, format) {
  if (!str) return '';

  return str.split(emojiNameRegex) // parse emoji via regex
            .map(function parseEmoji(s, i) {
              // every second element is an emoji, e.g. "test :fast_forward:" -> [ "test ", "fast_forward" ]
              if (i % 2 === 0) return s;
              var emoji = Emoji._get(s);
              var isMissing = emoji.indexOf(':') > -1;

              if (isMissing && typeof on_missing === 'function') {
                return on_missing(s);
              }

              if (!isMissing && typeof format === 'function') {
                return format(emoji, s);
              }

              return emoji;
            })
            .join('') // convert back to string
  ;
};

/**
 * return a random emoji
 * @return {string}
 */
Emoji.random = function random () {
  var emojiKeys = Object.keys(emojiByName);
  var randomIndex = Math.floor(Math.random() * emojiKeys.length);
  var key = emojiKeys[randomIndex];
  var emoji = Emoji._get(key);
  return { key: key, emoji: emoji };
}

/**
 *  return an collection of potential emoji matches
 *  @param {string} str
 *  @return {Array.<Object>}
 */
Emoji.search = function search (str) {
  var emojiKeys = Object.keys(emojiByName);
  var matcher = stripColons(str)
  var matchingKeys = emojiKeys.filter(function(key) {
    return key.toString().indexOf(matcher) === 0;
  });
  return matchingKeys.map(function(key) {
    return {
      key: key,
      emoji: Emoji._get(key),
    };
  });
}

/**
 * unemojify a string (replace emoji with :emoji:)
 * @param  {string} str
 * @return {string}
 */
Emoji.unemojify = function unemojify (str) {
  if (!str) return '';
  var words = toArray(str);

  return words.map(function(word) {
    return Emoji.which(word, true) || word;
  }).join('');
};

/**
 * replace emojis with replacement value
 * @param {string} str
 * @param {function|string} the string or callback function to replace the emoji with
 * @param {boolean} should trailing whitespaces be cleaned? Defaults false
 * @return {string}
 */
Emoji.replace = function replace (str, replacement, cleanSpaces) {
  if (!str) return '';

  var replace = typeof replacement === 'function' ? replacement : function() { return replacement; };
  var words = toArray(str);

  var replaced = words.map(function(word, idx) {
    var emoji = Emoji.findByCode(word);

    if (emoji && cleanSpaces && words[idx + 1] === ' ') {
      words[idx + 1] = '';
    }

    return emoji ? replace(emoji) : word;
  }).join('');

  return cleanSpaces ? replaced.replace(trimSpaceRegex, '') : replaced;
};


/**
 * remove all emojis from a string
 * @param {string} str
 * @return {string}
 */
Emoji.strip = function strip (str) {
  return Emoji.replace(str, '', true);
};

module.exports = Emoji;


/***/ }),

/***/ "./client/src/integrations/emoji/integration-provider.ts":
/*!***************************************************************!*\
  !*** ./client/src/integrations/emoji/integration-provider.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmojiIntegrationProvider": () => (/* binding */ EmojiIntegrationProvider)
/* harmony export */ });
/* harmony import */ var _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openfin/workspace */ "../../node_modules/@openfin/workspace/index.js");
/* harmony import */ var _openfin_workspace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openfin_workspace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates */ "./client/src/integrations/emoji/templates.ts");
/* harmony import */ var node_emoji__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! node-emoji */ "../../node_modules/node-emoji/index.js");
/* harmony import */ var node_emoji__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(node_emoji__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Implement the integration provider for Emojis.
 */
class EmojiIntegrationProvider {
    /**
     * The module is being registered.
     * @param integrationManager The manager for the integration.
     * @param integration The integration details.
     * @returns Nothing.
     */
    async register(integrationManager, integration) {
        this._integrationManager = integrationManager;
    }
    /**
     * The module is being deregistered.
     * @param integration The integration details.
     * @returns Nothing.
     */
    async deregister(integration) {
    }
    /**
     * Get a list of the static application entries.
     * @param integration The integration details.
     * @returns The list of application entries.
     */
    async getAppSearchEntries(integration) {
        const results = [];
        return results;
    }
    /**
     * An entry has been selected.
     * @param integration The integration details.
     * @param result The dispatched result.
     * @param lastResponse The last response.
     * @returns True if the item was handled.
     */
    async itemSelection(integration, result, lastResponse) {
        if (result.action.name === EmojiIntegrationProvider._EMOJI_PROVIDER_COPY_EMOJI_ACTION && result.data.emoji) {
            await fin.Clipboard.writeText({ data: result.data.emoji });
            return true;
        }
        else if (result.action.name === EmojiIntegrationProvider._EMOJI_PROVIDER_COPY_KEY_ACTION && result.data.key) {
            await fin.Clipboard.writeText({ data: result.data.key });
            return true;
        }
        else if (result.action.name === EmojiIntegrationProvider._EMOJI_PROVIDER_DETAILS_ACTION && result.data.url && this._integrationManager.openUrl) {
            await this._integrationManager.openUrl(result.data.url);
            return true;
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
        if (query.startsWith("/emoji ")) {
            let key = query.slice(7);
            if (key.length > 0) {
                key = key.toLowerCase();
                // Find exact match first if there is one
                const matchEmoji = node_emoji__WEBPACK_IMPORTED_MODULE_2__.get(key);
                if (matchEmoji && !matchEmoji.startsWith(":")) {
                    results.push(this.createResult(key, matchEmoji));
                }
                // Find all other potential matches
                const searchResult = node_emoji__WEBPACK_IMPORTED_MODULE_2__.search(key);
                for (const result of searchResult) {
                    if (result.emoji !== matchEmoji) {
                        results.push(this.createResult(result.key, result.emoji));
                    }
                }
            }
        }
        return {
            results
        };
    }
    /**
     * Create a search result.
     * @param key The key for the emoji.
     * @param emoji The emoji symbol.
     * @returns The search result.
     */
    createResult(key, emoji) {
        return {
            key: `emoji-${key}`,
            title: key,
            label: "Information",
            actions: [
                { name: EmojiIntegrationProvider._EMOJI_PROVIDER_COPY_EMOJI_ACTION, hotkey: "CmdOrCtrl+C" },
                { name: EmojiIntegrationProvider._EMOJI_PROVIDER_DETAILS_ACTION, hotkey: "Enter" }
            ],
            data: {
                providerId: EmojiIntegrationProvider._PROVIDER_ID,
                key,
                emoji,
                url: `https://emojipedia.org/${key}/`
            },
            template: _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.CLITemplate.Custom,
            templateContent: {
                layout: (0,_templates__WEBPACK_IMPORTED_MODULE_1__.getEmojiTemplate)({
                    copyEmojiAction: EmojiIntegrationProvider._EMOJI_PROVIDER_COPY_EMOJI_ACTION,
                    copyKeyAction: EmojiIntegrationProvider._EMOJI_PROVIDER_COPY_KEY_ACTION,
                    detailsAction: EmojiIntegrationProvider._EMOJI_PROVIDER_DETAILS_ACTION
                }),
                data: {
                    keyTitle: "Key",
                    copyKeyTitle: "Copy Key",
                    key,
                    emojiTitle: "Emoji",
                    copyEmojiTitle: "Copy Emoji",
                    emoji,
                    detailsTitle: "Further Details"
                }
            }
        };
    }
}
/**
 * Provider id.
 * @internal
 */
EmojiIntegrationProvider._PROVIDER_ID = "emoji";
/**
 * The key to use for a emoji result.
 * @internal
 */
EmojiIntegrationProvider._EMOJI_PROVIDER_DETAILS_ACTION = "Emoji Details";
/**
 * The key to use for a emoji copy key action.
 * @internal
 */
EmojiIntegrationProvider._EMOJI_PROVIDER_COPY_KEY_ACTION = "Copy Key";
/**
 * The key to use for a emoji copy key action.
 * @internal
 */
EmojiIntegrationProvider._EMOJI_PROVIDER_COPY_EMOJI_ACTION = "Copy Emoji";


/***/ }),

/***/ "./client/src/integrations/emoji/templates.ts":
/*!****************************************************!*\
  !*** ./client/src/integrations/emoji/templates.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getEmojiTemplate": () => (/* binding */ getEmojiTemplate)
/* harmony export */ });
/* harmony import */ var _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openfin/workspace */ "../../node_modules/@openfin/workspace/index.js");
/* harmony import */ var _openfin_workspace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openfin_workspace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../templates */ "./client/src/templates.ts");


function getEmojiTemplate(actions) {
    return (0,_templates__WEBPACK_IMPORTED_MODULE_1__.createContainer)("column", [
        (0,_templates__WEBPACK_IMPORTED_MODULE_1__.createText)("keyTitle", 12, { color: "lightgray", fontWeight: "bold" }),
        (0,_templates__WEBPACK_IMPORTED_MODULE_1__.createContainer)("row", [
            (0,_templates__WEBPACK_IMPORTED_MODULE_1__.createText)("key", 12, { color: "white", wordBreak: "break-all" }),
            (0,_templates__WEBPACK_IMPORTED_MODULE_1__.createButton)(_openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.ButtonStyle.Secondary, "copyKeyTitle", actions.copyKeyAction, { fontSize: "12px" })
        ], { justifyContent: "space-between", alignItems: "center", gap: "10px", marginBottom: "10px" }),
        (0,_templates__WEBPACK_IMPORTED_MODULE_1__.createText)("emojiTitle", 12, { color: "lightgray", fontWeight: "bold" }),
        (0,_templates__WEBPACK_IMPORTED_MODULE_1__.createContainer)("row", [
            (0,_templates__WEBPACK_IMPORTED_MODULE_1__.createText)("emoji", 32, { color: "white" }),
            (0,_templates__WEBPACK_IMPORTED_MODULE_1__.createButton)(_openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.ButtonStyle.Secondary, "copyEmojiTitle", actions.copyEmojiAction, { fontSize: "12px" })
        ], { justifyContent: "space-between", alignItems: "center", gap: "10px", marginBottom: "10px" }),
        (0,_templates__WEBPACK_IMPORTED_MODULE_1__.createContainer)("row", [
            (0,_templates__WEBPACK_IMPORTED_MODULE_1__.createButton)(_openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.ButtonStyle.Primary, "detailsTitle", actions.detailsAction, { fontSize: "12px" })
        ], { justifyContent: "flex-end" })
    ], {
        padding: "10px"
    });
}


/***/ }),

/***/ "./client/src/templates.ts":
/*!*********************************!*\
  !*** ./client/src/templates.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createButton": () => (/* binding */ createButton),
/* harmony export */   "createContainer": () => (/* binding */ createContainer),
/* harmony export */   "createImage": () => (/* binding */ createImage),
/* harmony export */   "createText": () => (/* binding */ createText)
/* harmony export */ });
/* harmony import */ var _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @openfin/workspace */ "../../node_modules/@openfin/workspace/index.js");
/* harmony import */ var _openfin_workspace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_openfin_workspace__WEBPACK_IMPORTED_MODULE_0__);

function createContainer(containerType, children, style) {
    return {
        type: _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.TemplateFragmentTypes.Container,
        style: {
            display: "flex",
            flexDirection: containerType,
            ...style
        },
        children
    };
}
function createText(dataKey, fontSize = 14, style) {
    return {
        type: _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.TemplateFragmentTypes.Text,
        dataKey,
        style: {
            fontSize: `${fontSize ?? 14}px`,
            ...style
        }
    };
}
function createImage(dataKey, alternativeText, style) {
    return {
        type: _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.TemplateFragmentTypes.Image,
        dataKey,
        alternativeText,
        style: {
            ...style
        }
    };
}
function createButton(buttonStyle, titleKey, action, style) {
    return {
        type: _openfin_workspace__WEBPACK_IMPORTED_MODULE_0__.TemplateFragmentTypes.Button,
        buttonStyle,
        children: [
            createText(titleKey, 12)
        ],
        action: action,
        style: {
            ...style
        }
    };
}


/***/ }),

/***/ "../../node_modules/node-emoji/lib/emoji.json":
/*!****************************************************!*\
  !*** ../../node_modules/node-emoji/lib/emoji.json ***!
  \****************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"100":"💯","1234":"🔢","umbrella_with_rain_drops":"☔","coffee":"☕","aries":"♈","taurus":"♉","sagittarius":"♐","capricorn":"♑","aquarius":"♒","pisces":"♓","anchor":"⚓","white_check_mark":"✅","sparkles":"✨","question":"❓","grey_question":"❔","grey_exclamation":"❕","exclamation":"❗","heavy_exclamation_mark":"❗","heavy_plus_sign":"➕","heavy_minus_sign":"➖","heavy_division_sign":"➗","hash":"#️⃣","keycap_star":"*️⃣","zero":"0️⃣","one":"1️⃣","two":"2️⃣","three":"3️⃣","four":"4️⃣","five":"5️⃣","six":"6️⃣","seven":"7️⃣","eight":"8️⃣","nine":"9️⃣","copyright":"©️","registered":"®️","mahjong":"🀄","black_joker":"🃏","a":"🅰️","b":"🅱️","o2":"🅾️","parking":"🅿️","ab":"🆎","cl":"🆑","cool":"🆒","free":"🆓","id":"🆔","new":"🆕","ng":"🆖","ok":"🆗","sos":"🆘","up":"🆙","vs":"🆚","flag-ac":"🇦🇨","flag-ad":"🇦🇩","flag-ae":"🇦🇪","flag-af":"🇦🇫","flag-ag":"🇦🇬","flag-ai":"🇦🇮","flag-al":"🇦🇱","flag-am":"🇦🇲","flag-ao":"🇦🇴","flag-aq":"🇦🇶","flag-ar":"🇦🇷","flag-as":"🇦🇸","flag-at":"🇦🇹","flag-au":"🇦🇺","flag-aw":"🇦🇼","flag-ax":"🇦🇽","flag-az":"🇦🇿","flag-ba":"🇧🇦","flag-bb":"🇧🇧","flag-bd":"🇧🇩","flag-be":"🇧🇪","flag-bf":"🇧🇫","flag-bg":"🇧🇬","flag-bh":"🇧🇭","flag-bi":"🇧🇮","flag-bj":"🇧🇯","flag-bl":"🇧🇱","flag-bm":"🇧🇲","flag-bn":"🇧🇳","flag-bo":"🇧🇴","flag-bq":"🇧🇶","flag-br":"🇧🇷","flag-bs":"🇧🇸","flag-bt":"🇧🇹","flag-bv":"🇧🇻","flag-bw":"🇧🇼","flag-by":"🇧🇾","flag-bz":"🇧🇿","flag-ca":"🇨🇦","flag-cc":"🇨🇨","flag-cd":"🇨🇩","flag-cf":"🇨🇫","flag-cg":"🇨🇬","flag-ch":"🇨🇭","flag-ci":"🇨🇮","flag-ck":"🇨🇰","flag-cl":"🇨🇱","flag-cm":"🇨🇲","cn":"🇨🇳","flag-cn":"🇨🇳","flag-co":"🇨🇴","flag-cp":"🇨🇵","flag-cr":"🇨🇷","flag-cu":"🇨🇺","flag-cv":"🇨🇻","flag-cw":"🇨🇼","flag-cx":"🇨🇽","flag-cy":"🇨🇾","flag-cz":"🇨🇿","de":"🇩🇪","flag-de":"🇩🇪","flag-dg":"🇩🇬","flag-dj":"🇩🇯","flag-dk":"🇩🇰","flag-dm":"🇩🇲","flag-do":"🇩🇴","flag-dz":"🇩🇿","flag-ea":"🇪🇦","flag-ec":"🇪🇨","flag-ee":"🇪🇪","flag-eg":"🇪🇬","flag-eh":"🇪🇭","flag-er":"🇪🇷","es":"🇪🇸","flag-es":"🇪🇸","flag-et":"🇪🇹","flag-eu":"🇪🇺","flag-fi":"🇫🇮","flag-fj":"🇫🇯","flag-fk":"🇫🇰","flag-fm":"🇫🇲","flag-fo":"🇫🇴","fr":"🇫🇷","flag-fr":"🇫🇷","flag-ga":"🇬🇦","gb":"🇬🇧","uk":"🇬🇧","flag-gb":"🇬🇧","flag-gd":"🇬🇩","flag-ge":"🇬🇪","flag-gf":"🇬🇫","flag-gg":"🇬🇬","flag-gh":"🇬🇭","flag-gi":"🇬🇮","flag-gl":"🇬🇱","flag-gm":"🇬🇲","flag-gn":"🇬🇳","flag-gp":"🇬🇵","flag-gq":"🇬🇶","flag-gr":"🇬🇷","flag-gs":"🇬🇸","flag-gt":"🇬🇹","flag-gu":"🇬🇺","flag-gw":"🇬🇼","flag-gy":"🇬🇾","flag-hk":"🇭🇰","flag-hm":"🇭🇲","flag-hn":"🇭🇳","flag-hr":"🇭🇷","flag-ht":"🇭🇹","flag-hu":"🇭🇺","flag-ic":"🇮🇨","flag-id":"🇮🇩","flag-ie":"🇮🇪","flag-il":"🇮🇱","flag-im":"🇮🇲","flag-in":"🇮🇳","flag-io":"🇮🇴","flag-iq":"🇮🇶","flag-ir":"🇮🇷","flag-is":"🇮🇸","it":"🇮🇹","flag-it":"🇮🇹","flag-je":"🇯🇪","flag-jm":"🇯🇲","flag-jo":"🇯🇴","jp":"🇯🇵","flag-jp":"🇯🇵","flag-ke":"🇰🇪","flag-kg":"🇰🇬","flag-kh":"🇰🇭","flag-ki":"🇰🇮","flag-km":"🇰🇲","flag-kn":"🇰🇳","flag-kp":"🇰🇵","kr":"🇰🇷","flag-kr":"🇰🇷","flag-kw":"🇰🇼","flag-ky":"🇰🇾","flag-kz":"🇰🇿","flag-la":"🇱🇦","flag-lb":"🇱🇧","flag-lc":"🇱🇨","flag-li":"🇱🇮","flag-lk":"🇱🇰","flag-lr":"🇱🇷","flag-ls":"🇱🇸","flag-lt":"🇱🇹","flag-lu":"🇱🇺","flag-lv":"🇱🇻","flag-ly":"🇱🇾","flag-ma":"🇲🇦","flag-mc":"🇲🇨","flag-md":"🇲🇩","flag-me":"🇲🇪","flag-mf":"🇲🇫","flag-mg":"🇲🇬","flag-mh":"🇲🇭","flag-mk":"🇲🇰","flag-ml":"🇲🇱","flag-mm":"🇲🇲","flag-mn":"🇲🇳","flag-mo":"🇲🇴","flag-mp":"🇲🇵","flag-mq":"🇲🇶","flag-mr":"🇲🇷","flag-ms":"🇲🇸","flag-mt":"🇲🇹","flag-mu":"🇲🇺","flag-mv":"🇲🇻","flag-mw":"🇲🇼","flag-mx":"🇲🇽","flag-my":"🇲🇾","flag-mz":"🇲🇿","flag-na":"🇳🇦","flag-nc":"🇳🇨","flag-ne":"🇳🇪","flag-nf":"🇳🇫","flag-ng":"🇳🇬","flag-ni":"🇳🇮","flag-nl":"🇳🇱","flag-no":"🇳🇴","flag-np":"🇳🇵","flag-nr":"🇳🇷","flag-nu":"🇳🇺","flag-nz":"🇳🇿","flag-om":"🇴🇲","flag-pa":"🇵🇦","flag-pe":"🇵🇪","flag-pf":"🇵🇫","flag-pg":"🇵🇬","flag-ph":"🇵🇭","flag-pk":"🇵🇰","flag-pl":"🇵🇱","flag-pm":"🇵🇲","flag-pn":"🇵🇳","flag-pr":"🇵🇷","flag-ps":"🇵🇸","flag-pt":"🇵🇹","flag-pw":"🇵🇼","flag-py":"🇵🇾","flag-qa":"🇶🇦","flag-re":"🇷🇪","flag-ro":"🇷🇴","flag-rs":"🇷🇸","ru":"🇷🇺","flag-ru":"🇷🇺","flag-rw":"🇷🇼","flag-sa":"🇸🇦","flag-sb":"🇸🇧","flag-sc":"🇸🇨","flag-sd":"🇸🇩","flag-se":"🇸🇪","flag-sg":"🇸🇬","flag-sh":"🇸🇭","flag-si":"🇸🇮","flag-sj":"🇸🇯","flag-sk":"🇸🇰","flag-sl":"🇸🇱","flag-sm":"🇸🇲","flag-sn":"🇸🇳","flag-so":"🇸🇴","flag-sr":"🇸🇷","flag-ss":"🇸🇸","flag-st":"🇸🇹","flag-sv":"🇸🇻","flag-sx":"🇸🇽","flag-sy":"🇸🇾","flag-sz":"🇸🇿","flag-ta":"🇹🇦","flag-tc":"🇹🇨","flag-td":"🇹🇩","flag-tf":"🇹🇫","flag-tg":"🇹🇬","flag-th":"🇹🇭","flag-tj":"🇹🇯","flag-tk":"🇹🇰","flag-tl":"🇹🇱","flag-tm":"🇹🇲","flag-tn":"🇹🇳","flag-to":"🇹🇴","flag-tr":"🇹🇷","flag-tt":"🇹🇹","flag-tv":"🇹🇻","flag-tw":"🇹🇼","flag-tz":"🇹🇿","flag-ua":"🇺🇦","flag-ug":"🇺🇬","flag-um":"🇺🇲","flag-un":"🇺🇳","us":"🇺🇸","flag-us":"🇺🇸","flag-uy":"🇺🇾","flag-uz":"🇺🇿","flag-va":"🇻🇦","flag-vc":"🇻🇨","flag-ve":"🇻🇪","flag-vg":"🇻🇬","flag-vi":"🇻🇮","flag-vn":"🇻🇳","flag-vu":"🇻🇺","flag-wf":"🇼🇫","flag-ws":"🇼🇸","flag-xk":"🇽🇰","flag-ye":"🇾🇪","flag-yt":"🇾🇹","flag-za":"🇿🇦","flag-zm":"🇿🇲","flag-zw":"🇿🇼","koko":"🈁","sa":"🈂️","u7121":"🈚","u6307":"🈯","u7981":"🈲","u7a7a":"🈳","u5408":"🈴","u6e80":"🈵","u6709":"🈶","u6708":"🈷️","u7533":"🈸","u5272":"🈹","u55b6":"🈺","ideograph_advantage":"🉐","accept":"🉑","cyclone":"🌀","foggy":"🌁","closed_umbrella":"🌂","night_with_stars":"🌃","sunrise_over_mountains":"🌄","sunrise":"🌅","city_sunset":"🌆","city_sunrise":"🌇","rainbow":"🌈","bridge_at_night":"🌉","ocean":"🌊","volcano":"🌋","milky_way":"🌌","earth_africa":"🌍","earth_americas":"🌎","earth_asia":"🌏","globe_with_meridians":"🌐","new_moon":"🌑","waxing_crescent_moon":"🌒","first_quarter_moon":"🌓","moon":"🌔","waxing_gibbous_moon":"🌔","full_moon":"🌕","waning_gibbous_moon":"🌖","last_quarter_moon":"🌗","waning_crescent_moon":"🌘","crescent_moon":"🌙","new_moon_with_face":"🌚","first_quarter_moon_with_face":"🌛","last_quarter_moon_with_face":"🌜","full_moon_with_face":"🌝","sun_with_face":"🌞","star2":"🌟","stars":"🌠","thermometer":"🌡️","mostly_sunny":"🌤️","sun_small_cloud":"🌤️","barely_sunny":"🌥️","sun_behind_cloud":"🌥️","partly_sunny_rain":"🌦️","sun_behind_rain_cloud":"🌦️","rain_cloud":"🌧️","snow_cloud":"🌨️","lightning":"🌩️","lightning_cloud":"🌩️","tornado":"🌪️","tornado_cloud":"🌪️","fog":"🌫️","wind_blowing_face":"🌬️","hotdog":"🌭","taco":"🌮","burrito":"🌯","chestnut":"🌰","seedling":"🌱","evergreen_tree":"🌲","deciduous_tree":"🌳","palm_tree":"🌴","cactus":"🌵","hot_pepper":"🌶️","tulip":"🌷","cherry_blossom":"🌸","rose":"🌹","hibiscus":"🌺","sunflower":"🌻","blossom":"🌼","corn":"🌽","ear_of_rice":"🌾","herb":"🌿","four_leaf_clover":"🍀","maple_leaf":"🍁","fallen_leaf":"🍂","leaves":"🍃","mushroom":"🍄","tomato":"🍅","eggplant":"🍆","grapes":"🍇","melon":"🍈","watermelon":"🍉","tangerine":"🍊","lemon":"🍋","banana":"🍌","pineapple":"🍍","apple":"🍎","green_apple":"🍏","pear":"🍐","peach":"🍑","cherries":"🍒","strawberry":"🍓","hamburger":"🍔","pizza":"🍕","meat_on_bone":"🍖","poultry_leg":"🍗","rice_cracker":"🍘","rice_ball":"🍙","rice":"🍚","curry":"🍛","ramen":"🍜","spaghetti":"🍝","bread":"🍞","fries":"🍟","sweet_potato":"🍠","dango":"🍡","oden":"🍢","sushi":"🍣","fried_shrimp":"🍤","fish_cake":"🍥","icecream":"🍦","shaved_ice":"🍧","ice_cream":"🍨","doughnut":"🍩","cookie":"🍪","chocolate_bar":"🍫","candy":"🍬","lollipop":"🍭","custard":"🍮","honey_pot":"🍯","cake":"🍰","bento":"🍱","stew":"🍲","fried_egg":"🍳","cooking":"🍳","fork_and_knife":"🍴","tea":"🍵","sake":"🍶","wine_glass":"🍷","cocktail":"🍸","tropical_drink":"🍹","beer":"🍺","beers":"🍻","baby_bottle":"🍼","knife_fork_plate":"🍽️","champagne":"🍾","popcorn":"🍿","ribbon":"🎀","gift":"🎁","birthday":"🎂","jack_o_lantern":"🎃","christmas_tree":"🎄","santa":"🎅","fireworks":"🎆","sparkler":"🎇","balloon":"🎈","tada":"🎉","confetti_ball":"🎊","tanabata_tree":"🎋","crossed_flags":"🎌","bamboo":"🎍","dolls":"🎎","flags":"🎏","wind_chime":"🎐","rice_scene":"🎑","school_satchel":"🎒","mortar_board":"🎓","medal":"🎖️","reminder_ribbon":"🎗️","studio_microphone":"🎙️","level_slider":"🎚️","control_knobs":"🎛️","film_frames":"🎞️","admission_tickets":"🎟️","carousel_horse":"🎠","ferris_wheel":"🎡","roller_coaster":"🎢","fishing_pole_and_fish":"🎣","microphone":"🎤","movie_camera":"🎥","cinema":"🎦","headphones":"🎧","art":"🎨","tophat":"🎩","circus_tent":"🎪","ticket":"🎫","clapper":"🎬","performing_arts":"🎭","video_game":"🎮","dart":"🎯","slot_machine":"🎰","8ball":"🎱","game_die":"🎲","bowling":"🎳","flower_playing_cards":"🎴","musical_note":"🎵","notes":"🎶","saxophone":"🎷","guitar":"🎸","musical_keyboard":"🎹","trumpet":"🎺","violin":"🎻","musical_score":"🎼","running_shirt_with_sash":"🎽","tennis":"🎾","ski":"🎿","basketball":"🏀","checkered_flag":"🏁","snowboarder":"🏂","woman-running":"🏃‍♀️","man-running":"🏃‍♂️","runner":"🏃‍♂️","running":"🏃‍♂️","woman-surfing":"🏄‍♀️","man-surfing":"🏄‍♂️","surfer":"🏄‍♂️","sports_medal":"🏅","trophy":"🏆","horse_racing":"🏇","football":"🏈","rugby_football":"🏉","woman-swimming":"🏊‍♀️","man-swimming":"🏊‍♂️","swimmer":"🏊‍♂️","woman-lifting-weights":"🏋️‍♀️","man-lifting-weights":"🏋️‍♂️","weight_lifter":"🏋️‍♂️","woman-golfing":"🏌️‍♀️","man-golfing":"🏌️‍♂️","golfer":"🏌️‍♂️","racing_motorcycle":"🏍️","racing_car":"🏎️","cricket_bat_and_ball":"🏏","volleyball":"🏐","field_hockey_stick_and_ball":"🏑","ice_hockey_stick_and_puck":"🏒","table_tennis_paddle_and_ball":"🏓","snow_capped_mountain":"🏔️","camping":"🏕️","beach_with_umbrella":"🏖️","building_construction":"🏗️","house_buildings":"🏘️","cityscape":"🏙️","derelict_house_building":"🏚️","classical_building":"🏛️","desert":"🏜️","desert_island":"🏝️","national_park":"🏞️","stadium":"🏟️","house":"🏠","house_with_garden":"🏡","office":"🏢","post_office":"🏣","european_post_office":"🏤","hospital":"🏥","bank":"🏦","atm":"🏧","hotel":"🏨","love_hotel":"🏩","convenience_store":"🏪","school":"🏫","department_store":"🏬","factory":"🏭","izakaya_lantern":"🏮","lantern":"🏮","japanese_castle":"🏯","european_castle":"🏰","rainbow-flag":"🏳️‍🌈","transgender_flag":"🏳️‍⚧️","waving_white_flag":"🏳️","pirate_flag":"🏴‍☠️","flag-england":"🏴󠁧󠁢󠁥󠁮󠁧󠁿","flag-scotland":"🏴󠁧󠁢󠁳󠁣󠁴󠁿","flag-wales":"🏴󠁧󠁢󠁷󠁬󠁳󠁿","waving_black_flag":"🏴","rosette":"🏵️","label":"🏷️","badminton_racquet_and_shuttlecock":"🏸","bow_and_arrow":"🏹","amphora":"🏺","skin-tone-2":"🏻","skin-tone-3":"🏼","skin-tone-4":"🏽","skin-tone-5":"🏾","skin-tone-6":"🏿","rat":"🐀","mouse2":"🐁","ox":"🐂","water_buffalo":"🐃","cow2":"🐄","tiger2":"🐅","leopard":"🐆","rabbit2":"🐇","black_cat":"🐈‍⬛","cat2":"🐈","dragon":"🐉","crocodile":"🐊","whale2":"🐋","snail":"🐌","snake":"🐍","racehorse":"🐎","ram":"🐏","goat":"🐐","sheep":"🐑","monkey":"🐒","rooster":"🐓","chicken":"🐔","service_dog":"🐕‍🦺","dog2":"🐕","pig2":"🐖","boar":"🐗","elephant":"🐘","octopus":"🐙","shell":"🐚","bug":"🐛","ant":"🐜","bee":"🐝","honeybee":"🐝","ladybug":"🐞","lady_beetle":"🐞","fish":"🐟","tropical_fish":"🐠","blowfish":"🐡","turtle":"🐢","hatching_chick":"🐣","baby_chick":"🐤","hatched_chick":"🐥","bird":"🐦","penguin":"🐧","koala":"🐨","poodle":"🐩","dromedary_camel":"🐪","camel":"🐫","dolphin":"🐬","flipper":"🐬","mouse":"🐭","cow":"🐮","tiger":"🐯","rabbit":"🐰","cat":"🐱","dragon_face":"🐲","whale":"🐳","horse":"🐴","monkey_face":"🐵","dog":"🐶","pig":"🐷","frog":"🐸","hamster":"🐹","wolf":"🐺","polar_bear":"🐻‍❄️","bear":"🐻","panda_face":"🐼","pig_nose":"🐽","feet":"🐾","paw_prints":"🐾","chipmunk":"🐿️","eyes":"👀","eye-in-speech-bubble":"👁️‍🗨️","eye":"👁️","ear":"👂","nose":"👃","lips":"👄","tongue":"👅","point_up_2":"👆","point_down":"👇","point_left":"👈","point_right":"👉","facepunch":"👊","punch":"👊","wave":"👋","ok_hand":"👌","+1":"👍","thumbsup":"👍","-1":"👎","thumbsdown":"👎","clap":"👏","open_hands":"👐","crown":"👑","womans_hat":"👒","eyeglasses":"👓","necktie":"👔","shirt":"👕","tshirt":"👕","jeans":"👖","dress":"👗","kimono":"👘","bikini":"👙","womans_clothes":"👚","purse":"👛","handbag":"👜","pouch":"👝","mans_shoe":"👞","shoe":"👞","athletic_shoe":"👟","high_heel":"👠","sandal":"👡","boot":"👢","footprints":"👣","bust_in_silhouette":"👤","busts_in_silhouette":"👥","boy":"👦","girl":"👧","male-farmer":"👨‍🌾","male-cook":"👨‍🍳","man_feeding_baby":"👨‍🍼","male-student":"👨‍🎓","male-singer":"👨‍🎤","male-artist":"👨‍🎨","male-teacher":"👨‍🏫","male-factory-worker":"👨‍🏭","man-boy-boy":"👨‍👦‍👦","man-boy":"👨‍👦","man-girl-boy":"👨‍👧‍👦","man-girl-girl":"👨‍👧‍👧","man-girl":"👨‍👧","man-man-boy":"👨‍👨‍👦","man-man-boy-boy":"👨‍👨‍👦‍👦","man-man-girl":"👨‍👨‍👧","man-man-girl-boy":"👨‍👨‍👧‍👦","man-man-girl-girl":"👨‍👨‍👧‍👧","man-woman-boy":"👨‍👩‍👦","family":"👨‍👩‍👦","man-woman-boy-boy":"👨‍👩‍👦‍👦","man-woman-girl":"👨‍👩‍👧","man-woman-girl-boy":"👨‍👩‍👧‍👦","man-woman-girl-girl":"👨‍👩‍👧‍👧","male-technologist":"👨‍💻","male-office-worker":"👨‍💼","male-mechanic":"👨‍🔧","male-scientist":"👨‍🔬","male-astronaut":"👨‍🚀","male-firefighter":"👨‍🚒","man_with_probing_cane":"👨‍🦯","red_haired_man":"👨‍🦰","curly_haired_man":"👨‍🦱","bald_man":"👨‍🦲","white_haired_man":"👨‍🦳","man_in_motorized_wheelchair":"👨‍🦼","man_in_manual_wheelchair":"👨‍🦽","male-doctor":"👨‍⚕️","male-judge":"👨‍⚖️","male-pilot":"👨‍✈️","man-heart-man":"👨‍❤️‍👨","man-kiss-man":"👨‍❤️‍💋‍👨","man":"👨","female-farmer":"👩‍🌾","female-cook":"👩‍🍳","woman_feeding_baby":"👩‍🍼","female-student":"👩‍🎓","female-singer":"👩‍🎤","female-artist":"👩‍🎨","female-teacher":"👩‍🏫","female-factory-worker":"👩‍🏭","woman-boy-boy":"👩‍👦‍👦","woman-boy":"👩‍👦","woman-girl-boy":"👩‍👧‍👦","woman-girl-girl":"👩‍👧‍👧","woman-girl":"👩‍👧","woman-woman-boy":"👩‍👩‍👦","woman-woman-boy-boy":"👩‍👩‍👦‍👦","woman-woman-girl":"👩‍👩‍👧","woman-woman-girl-boy":"👩‍👩‍👧‍👦","woman-woman-girl-girl":"👩‍👩‍👧‍👧","female-technologist":"👩‍💻","female-office-worker":"👩‍💼","female-mechanic":"👩‍🔧","female-scientist":"👩‍🔬","female-astronaut":"👩‍🚀","female-firefighter":"👩‍🚒","woman_with_probing_cane":"👩‍🦯","red_haired_woman":"👩‍🦰","curly_haired_woman":"👩‍🦱","bald_woman":"👩‍🦲","white_haired_woman":"👩‍🦳","woman_in_motorized_wheelchair":"👩‍🦼","woman_in_manual_wheelchair":"👩‍🦽","female-doctor":"👩‍⚕️","female-judge":"👩‍⚖️","female-pilot":"👩‍✈️","woman-heart-man":"👩‍❤️‍👨","woman-heart-woman":"👩‍❤️‍👩","woman-kiss-man":"👩‍❤️‍💋‍👨","woman-kiss-woman":"👩‍❤️‍💋‍👩","woman":"👩","man_and_woman_holding_hands":"👫","woman_and_man_holding_hands":"👫","couple":"👫","two_men_holding_hands":"👬","men_holding_hands":"👬","two_women_holding_hands":"👭","women_holding_hands":"👭","female-police-officer":"👮‍♀️","male-police-officer":"👮‍♂️","cop":"👮‍♂️","women-with-bunny-ears-partying":"👯‍♀️","woman-with-bunny-ears-partying":"👯‍♀️","dancers":"👯‍♀️","men-with-bunny-ears-partying":"👯‍♂️","man-with-bunny-ears-partying":"👯‍♂️","woman_with_veil":"👰‍♀️","man_with_veil":"👰‍♂️","bride_with_veil":"👰","blond-haired-woman":"👱‍♀️","blond-haired-man":"👱‍♂️","person_with_blond_hair":"👱‍♂️","man_with_gua_pi_mao":"👲","woman-wearing-turban":"👳‍♀️","man-wearing-turban":"👳‍♂️","man_with_turban":"👳‍♂️","older_man":"👴","older_woman":"👵","baby":"👶","female-construction-worker":"👷‍♀️","male-construction-worker":"👷‍♂️","construction_worker":"👷‍♂️","princess":"👸","japanese_ogre":"👹","japanese_goblin":"👺","ghost":"👻","angel":"👼","alien":"👽","space_invader":"👾","imp":"👿","skull":"💀","woman-tipping-hand":"💁‍♀️","information_desk_person":"💁‍♀️","man-tipping-hand":"💁‍♂️","female-guard":"💂‍♀️","male-guard":"💂‍♂️","guardsman":"💂‍♂️","dancer":"💃","lipstick":"💄","nail_care":"💅","woman-getting-massage":"💆‍♀️","massage":"💆‍♀️","man-getting-massage":"💆‍♂️","woman-getting-haircut":"💇‍♀️","haircut":"💇‍♀️","man-getting-haircut":"💇‍♂️","barber":"💈","syringe":"💉","pill":"💊","kiss":"💋","love_letter":"💌","ring":"💍","gem":"💎","couplekiss":"💏","bouquet":"💐","couple_with_heart":"💑","wedding":"💒","heartbeat":"💓","broken_heart":"💔","two_hearts":"💕","sparkling_heart":"💖","heartpulse":"💗","cupid":"💘","blue_heart":"💙","green_heart":"💚","yellow_heart":"💛","purple_heart":"💜","gift_heart":"💝","revolving_hearts":"💞","heart_decoration":"💟","diamond_shape_with_a_dot_inside":"💠","bulb":"💡","anger":"💢","bomb":"💣","zzz":"💤","boom":"💥","collision":"💥","sweat_drops":"💦","droplet":"💧","dash":"💨","hankey":"💩","poop":"💩","shit":"💩","muscle":"💪","dizzy":"💫","speech_balloon":"💬","thought_balloon":"💭","white_flower":"💮","moneybag":"💰","currency_exchange":"💱","heavy_dollar_sign":"💲","credit_card":"💳","yen":"💴","dollar":"💵","euro":"💶","pound":"💷","money_with_wings":"💸","chart":"💹","seat":"💺","computer":"💻","briefcase":"💼","minidisc":"💽","floppy_disk":"💾","cd":"💿","dvd":"📀","file_folder":"📁","open_file_folder":"📂","page_with_curl":"📃","page_facing_up":"📄","date":"📅","calendar":"📆","card_index":"📇","chart_with_upwards_trend":"📈","chart_with_downwards_trend":"📉","bar_chart":"📊","clipboard":"📋","pushpin":"📌","round_pushpin":"📍","paperclip":"📎","straight_ruler":"📏","triangular_ruler":"📐","bookmark_tabs":"📑","ledger":"📒","notebook":"📓","notebook_with_decorative_cover":"📔","closed_book":"📕","book":"📖","open_book":"📖","green_book":"📗","blue_book":"📘","orange_book":"📙","books":"📚","name_badge":"📛","scroll":"📜","memo":"📝","pencil":"📝","telephone_receiver":"📞","pager":"📟","fax":"📠","satellite_antenna":"📡","loudspeaker":"📢","mega":"📣","outbox_tray":"📤","inbox_tray":"📥","package":"📦","e-mail":"📧","incoming_envelope":"📨","envelope_with_arrow":"📩","mailbox_closed":"📪","mailbox":"📫","mailbox_with_mail":"📬","mailbox_with_no_mail":"📭","postbox":"📮","postal_horn":"📯","newspaper":"📰","iphone":"📱","calling":"📲","vibration_mode":"📳","mobile_phone_off":"📴","no_mobile_phones":"📵","signal_strength":"📶","camera":"📷","camera_with_flash":"📸","video_camera":"📹","tv":"📺","radio":"📻","vhs":"📼","film_projector":"📽️","prayer_beads":"📿","twisted_rightwards_arrows":"🔀","repeat":"🔁","repeat_one":"🔂","arrows_clockwise":"🔃","arrows_counterclockwise":"🔄","low_brightness":"🔅","high_brightness":"🔆","mute":"🔇","speaker":"🔈","sound":"🔉","loud_sound":"🔊","battery":"🔋","electric_plug":"🔌","mag":"🔍","mag_right":"🔎","lock_with_ink_pen":"🔏","closed_lock_with_key":"🔐","key":"🔑","lock":"🔒","unlock":"🔓","bell":"🔔","no_bell":"🔕","bookmark":"🔖","link":"🔗","radio_button":"🔘","back":"🔙","end":"🔚","on":"🔛","soon":"🔜","top":"🔝","underage":"🔞","keycap_ten":"🔟","capital_abcd":"🔠","abcd":"🔡","symbols":"🔣","abc":"🔤","fire":"🔥","flashlight":"🔦","wrench":"🔧","hammer":"🔨","nut_and_bolt":"🔩","hocho":"🔪","knife":"🔪","gun":"🔫","microscope":"🔬","telescope":"🔭","crystal_ball":"🔮","six_pointed_star":"🔯","beginner":"🔰","trident":"🔱","black_square_button":"🔲","white_square_button":"🔳","red_circle":"🔴","large_blue_circle":"🔵","large_orange_diamond":"🔶","large_blue_diamond":"🔷","small_orange_diamond":"🔸","small_blue_diamond":"🔹","small_red_triangle":"🔺","small_red_triangle_down":"🔻","arrow_up_small":"🔼","arrow_down_small":"🔽","om_symbol":"🕉️","dove_of_peace":"🕊️","kaaba":"🕋","mosque":"🕌","synagogue":"🕍","menorah_with_nine_branches":"🕎","clock1":"🕐","clock2":"🕑","clock3":"🕒","clock4":"🕓","clock5":"🕔","clock6":"🕕","clock7":"🕖","clock8":"🕗","clock9":"🕘","clock10":"🕙","clock11":"🕚","clock12":"🕛","clock130":"🕜","clock230":"🕝","clock330":"🕞","clock430":"🕟","clock530":"🕠","clock630":"🕡","clock730":"🕢","clock830":"🕣","clock930":"🕤","clock1030":"🕥","clock1130":"🕦","clock1230":"🕧","candle":"🕯️","mantelpiece_clock":"🕰️","hole":"🕳️","man_in_business_suit_levitating":"🕴️","female-detective":"🕵️‍♀️","male-detective":"🕵️‍♂️","sleuth_or_spy":"🕵️‍♂️","dark_sunglasses":"🕶️","spider":"🕷️","spider_web":"🕸️","joystick":"🕹️","man_dancing":"🕺","linked_paperclips":"🖇️","lower_left_ballpoint_pen":"🖊️","lower_left_fountain_pen":"🖋️","lower_left_paintbrush":"🖌️","lower_left_crayon":"🖍️","raised_hand_with_fingers_splayed":"🖐️","middle_finger":"🖕","reversed_hand_with_middle_finger_extended":"🖕","spock-hand":"🖖","black_heart":"🖤","desktop_computer":"🖥️","printer":"🖨️","three_button_mouse":"🖱️","trackball":"🖲️","frame_with_picture":"🖼️","card_index_dividers":"🗂️","card_file_box":"🗃️","file_cabinet":"🗄️","wastebasket":"🗑️","spiral_note_pad":"🗒️","spiral_calendar_pad":"🗓️","compression":"🗜️","old_key":"🗝️","rolled_up_newspaper":"🗞️","dagger_knife":"🗡️","speaking_head_in_silhouette":"🗣️","left_speech_bubble":"🗨️","right_anger_bubble":"🗯️","ballot_box_with_ballot":"🗳️","world_map":"🗺️","mount_fuji":"🗻","tokyo_tower":"🗼","statue_of_liberty":"🗽","japan":"🗾","moyai":"🗿","grinning":"😀","grin":"😁","joy":"😂","smiley":"😃","smile":"😄","sweat_smile":"😅","laughing":"😆","satisfied":"😆","innocent":"😇","smiling_imp":"😈","wink":"😉","blush":"😊","yum":"😋","relieved":"😌","heart_eyes":"😍","sunglasses":"😎","smirk":"😏","neutral_face":"😐","expressionless":"😑","unamused":"😒","sweat":"😓","pensive":"😔","confused":"😕","confounded":"😖","kissing":"😗","kissing_heart":"😘","kissing_smiling_eyes":"😙","kissing_closed_eyes":"😚","stuck_out_tongue":"😛","stuck_out_tongue_winking_eye":"😜","stuck_out_tongue_closed_eyes":"😝","disappointed":"😞","worried":"😟","angry":"😠","rage":"😡","cry":"😢","persevere":"😣","triumph":"😤","disappointed_relieved":"😥","frowning":"😦","anguished":"😧","fearful":"😨","weary":"😩","sleepy":"😪","tired_face":"😫","grimacing":"😬","sob":"😭","face_exhaling":"😮‍💨","open_mouth":"😮","hushed":"😯","cold_sweat":"😰","scream":"😱","astonished":"😲","flushed":"😳","sleeping":"😴","face_with_spiral_eyes":"😵‍💫","dizzy_face":"😵","face_in_clouds":"😶‍🌫️","no_mouth":"😶","mask":"😷","smile_cat":"😸","joy_cat":"😹","smiley_cat":"😺","heart_eyes_cat":"😻","smirk_cat":"😼","kissing_cat":"😽","pouting_cat":"😾","crying_cat_face":"😿","scream_cat":"🙀","slightly_frowning_face":"🙁","slightly_smiling_face":"🙂","upside_down_face":"🙃","face_with_rolling_eyes":"🙄","woman-gesturing-no":"🙅‍♀️","no_good":"🙅‍♀️","man-gesturing-no":"🙅‍♂️","woman-gesturing-ok":"🙆‍♀️","ok_woman":"🙆‍♀️","man-gesturing-ok":"🙆‍♂️","woman-bowing":"🙇‍♀️","man-bowing":"🙇‍♂️","bow":"🙇‍♂️","see_no_evil":"🙈","hear_no_evil":"🙉","speak_no_evil":"🙊","woman-raising-hand":"🙋‍♀️","raising_hand":"🙋‍♀️","man-raising-hand":"🙋‍♂️","raised_hands":"🙌","woman-frowning":"🙍‍♀️","person_frowning":"🙍‍♀️","man-frowning":"🙍‍♂️","woman-pouting":"🙎‍♀️","person_with_pouting_face":"🙎‍♀️","man-pouting":"🙎‍♂️","pray":"🙏","rocket":"🚀","helicopter":"🚁","steam_locomotive":"🚂","railway_car":"🚃","bullettrain_side":"🚄","bullettrain_front":"🚅","train2":"🚆","metro":"🚇","light_rail":"🚈","station":"🚉","tram":"🚊","train":"🚋","bus":"🚌","oncoming_bus":"🚍","trolleybus":"🚎","busstop":"🚏","minibus":"🚐","ambulance":"🚑","fire_engine":"🚒","police_car":"🚓","oncoming_police_car":"🚔","taxi":"🚕","oncoming_taxi":"🚖","car":"🚗","red_car":"🚗","oncoming_automobile":"🚘","blue_car":"🚙","truck":"🚚","articulated_lorry":"🚛","tractor":"🚜","monorail":"🚝","mountain_railway":"🚞","suspension_railway":"🚟","mountain_cableway":"🚠","aerial_tramway":"🚡","ship":"🚢","woman-rowing-boat":"🚣‍♀️","man-rowing-boat":"🚣‍♂️","rowboat":"🚣‍♂️","speedboat":"🚤","traffic_light":"🚥","vertical_traffic_light":"🚦","construction":"🚧","rotating_light":"🚨","triangular_flag_on_post":"🚩","door":"🚪","no_entry_sign":"🚫","smoking":"🚬","no_smoking":"🚭","put_litter_in_its_place":"🚮","do_not_litter":"🚯","potable_water":"🚰","non-potable_water":"🚱","bike":"🚲","no_bicycles":"🚳","woman-biking":"🚴‍♀️","man-biking":"🚴‍♂️","bicyclist":"🚴‍♂️","woman-mountain-biking":"🚵‍♀️","man-mountain-biking":"🚵‍♂️","mountain_bicyclist":"🚵‍♂️","woman-walking":"🚶‍♀️","man-walking":"🚶‍♂️","walking":"🚶‍♂️","no_pedestrians":"🚷","children_crossing":"🚸","mens":"🚹","womens":"🚺","restroom":"🚻","baby_symbol":"🚼","toilet":"🚽","wc":"🚾","shower":"🚿","bath":"🛀","bathtub":"🛁","passport_control":"🛂","customs":"🛃","baggage_claim":"🛄","left_luggage":"🛅","couch_and_lamp":"🛋️","sleeping_accommodation":"🛌","shopping_bags":"🛍️","bellhop_bell":"🛎️","bed":"🛏️","place_of_worship":"🛐","octagonal_sign":"🛑","shopping_trolley":"🛒","hindu_temple":"🛕","hut":"🛖","elevator":"🛗","hammer_and_wrench":"🛠️","shield":"🛡️","oil_drum":"🛢️","motorway":"🛣️","railway_track":"🛤️","motor_boat":"🛥️","small_airplane":"🛩️","airplane_departure":"🛫","airplane_arriving":"🛬","satellite":"🛰️","passenger_ship":"🛳️","scooter":"🛴","motor_scooter":"🛵","canoe":"🛶","sled":"🛷","flying_saucer":"🛸","skateboard":"🛹","auto_rickshaw":"🛺","pickup_truck":"🛻","roller_skate":"🛼","large_orange_circle":"🟠","large_yellow_circle":"🟡","large_green_circle":"🟢","large_purple_circle":"🟣","large_brown_circle":"🟤","large_red_square":"🟥","large_blue_square":"🟦","large_orange_square":"🟧","large_yellow_square":"🟨","large_green_square":"🟩","large_purple_square":"🟪","large_brown_square":"🟫","pinched_fingers":"🤌","white_heart":"🤍","brown_heart":"🤎","pinching_hand":"🤏","zipper_mouth_face":"🤐","money_mouth_face":"🤑","face_with_thermometer":"🤒","nerd_face":"🤓","thinking_face":"🤔","face_with_head_bandage":"🤕","robot_face":"🤖","hugging_face":"🤗","the_horns":"🤘","sign_of_the_horns":"🤘","call_me_hand":"🤙","raised_back_of_hand":"🤚","left-facing_fist":"🤛","right-facing_fist":"🤜","handshake":"🤝","crossed_fingers":"🤞","hand_with_index_and_middle_fingers_crossed":"🤞","i_love_you_hand_sign":"🤟","face_with_cowboy_hat":"🤠","clown_face":"🤡","nauseated_face":"🤢","rolling_on_the_floor_laughing":"🤣","drooling_face":"🤤","lying_face":"🤥","woman-facepalming":"🤦‍♀️","man-facepalming":"🤦‍♂️","face_palm":"🤦","sneezing_face":"🤧","face_with_raised_eyebrow":"🤨","face_with_one_eyebrow_raised":"🤨","star-struck":"🤩","grinning_face_with_star_eyes":"🤩","zany_face":"🤪","grinning_face_with_one_large_and_one_small_eye":"🤪","shushing_face":"🤫","face_with_finger_covering_closed_lips":"🤫","face_with_symbols_on_mouth":"🤬","serious_face_with_symbols_covering_mouth":"🤬","face_with_hand_over_mouth":"🤭","smiling_face_with_smiling_eyes_and_hand_covering_mouth":"🤭","face_vomiting":"🤮","face_with_open_mouth_vomiting":"🤮","exploding_head":"🤯","shocked_face_with_exploding_head":"🤯","pregnant_woman":"🤰","breast-feeding":"🤱","palms_up_together":"🤲","selfie":"🤳","prince":"🤴","woman_in_tuxedo":"🤵‍♀️","man_in_tuxedo":"🤵‍♂️","person_in_tuxedo":"🤵","mrs_claus":"🤶","mother_christmas":"🤶","woman-shrugging":"🤷‍♀️","man-shrugging":"🤷‍♂️","shrug":"🤷","woman-cartwheeling":"🤸‍♀️","man-cartwheeling":"🤸‍♂️","person_doing_cartwheel":"🤸","woman-juggling":"🤹‍♀️","man-juggling":"🤹‍♂️","juggling":"🤹","fencer":"🤺","woman-wrestling":"🤼‍♀️","man-wrestling":"🤼‍♂️","wrestlers":"🤼","woman-playing-water-polo":"🤽‍♀️","man-playing-water-polo":"🤽‍♂️","water_polo":"🤽","woman-playing-handball":"🤾‍♀️","man-playing-handball":"🤾‍♂️","handball":"🤾","diving_mask":"🤿","wilted_flower":"🥀","drum_with_drumsticks":"🥁","clinking_glasses":"🥂","tumbler_glass":"🥃","spoon":"🥄","goal_net":"🥅","first_place_medal":"🥇","second_place_medal":"🥈","third_place_medal":"🥉","boxing_glove":"🥊","martial_arts_uniform":"🥋","curling_stone":"🥌","lacrosse":"🥍","softball":"🥎","flying_disc":"🥏","croissant":"🥐","avocado":"🥑","cucumber":"🥒","bacon":"🥓","potato":"🥔","carrot":"🥕","baguette_bread":"🥖","green_salad":"🥗","shallow_pan_of_food":"🥘","stuffed_flatbread":"🥙","egg":"🥚","glass_of_milk":"🥛","peanuts":"🥜","kiwifruit":"🥝","pancakes":"🥞","dumpling":"🥟","fortune_cookie":"🥠","takeout_box":"🥡","chopsticks":"🥢","bowl_with_spoon":"🥣","cup_with_straw":"🥤","coconut":"🥥","broccoli":"🥦","pie":"🥧","pretzel":"🥨","cut_of_meat":"🥩","sandwich":"🥪","canned_food":"🥫","leafy_green":"🥬","mango":"🥭","moon_cake":"🥮","bagel":"🥯","smiling_face_with_3_hearts":"🥰","yawning_face":"🥱","smiling_face_with_tear":"🥲","partying_face":"🥳","woozy_face":"🥴","hot_face":"🥵","cold_face":"🥶","ninja":"🥷","disguised_face":"🥸","pleading_face":"🥺","sari":"🥻","lab_coat":"🥼","goggles":"🥽","hiking_boot":"🥾","womans_flat_shoe":"🥿","crab":"🦀","lion_face":"🦁","scorpion":"🦂","turkey":"🦃","unicorn_face":"🦄","eagle":"🦅","duck":"🦆","bat":"🦇","shark":"🦈","owl":"🦉","fox_face":"🦊","butterfly":"🦋","deer":"🦌","gorilla":"🦍","lizard":"🦎","rhinoceros":"🦏","shrimp":"🦐","squid":"🦑","giraffe_face":"🦒","zebra_face":"🦓","hedgehog":"🦔","sauropod":"🦕","t-rex":"🦖","cricket":"🦗","kangaroo":"🦘","llama":"🦙","peacock":"🦚","hippopotamus":"🦛","parrot":"🦜","raccoon":"🦝","lobster":"🦞","mosquito":"🦟","microbe":"🦠","badger":"🦡","swan":"🦢","mammoth":"🦣","dodo":"🦤","sloth":"🦥","otter":"🦦","orangutan":"🦧","skunk":"🦨","flamingo":"🦩","oyster":"🦪","beaver":"🦫","bison":"🦬","seal":"🦭","guide_dog":"🦮","probing_cane":"🦯","bone":"🦴","leg":"🦵","foot":"🦶","tooth":"🦷","female_superhero":"🦸‍♀️","male_superhero":"🦸‍♂️","superhero":"🦸","female_supervillain":"🦹‍♀️","male_supervillain":"🦹‍♂️","supervillain":"🦹","safety_vest":"🦺","ear_with_hearing_aid":"🦻","motorized_wheelchair":"🦼","manual_wheelchair":"🦽","mechanical_arm":"🦾","mechanical_leg":"🦿","cheese_wedge":"🧀","cupcake":"🧁","salt":"🧂","beverage_box":"🧃","garlic":"🧄","onion":"🧅","falafel":"🧆","waffle":"🧇","butter":"🧈","mate_drink":"🧉","ice_cube":"🧊","bubble_tea":"🧋","woman_standing":"🧍‍♀️","man_standing":"🧍‍♂️","standing_person":"🧍","woman_kneeling":"🧎‍♀️","man_kneeling":"🧎‍♂️","kneeling_person":"🧎","deaf_woman":"🧏‍♀️","deaf_man":"🧏‍♂️","deaf_person":"🧏","face_with_monocle":"🧐","farmer":"🧑‍🌾","cook":"🧑‍🍳","person_feeding_baby":"🧑‍🍼","mx_claus":"🧑‍🎄","student":"🧑‍🎓","singer":"🧑‍🎤","artist":"🧑‍🎨","teacher":"🧑‍🏫","factory_worker":"🧑‍🏭","technologist":"🧑‍💻","office_worker":"🧑‍💼","mechanic":"🧑‍🔧","scientist":"🧑‍🔬","astronaut":"🧑‍🚀","firefighter":"🧑‍🚒","people_holding_hands":"🧑‍🤝‍🧑","person_with_probing_cane":"🧑‍🦯","red_haired_person":"🧑‍🦰","curly_haired_person":"🧑‍🦱","bald_person":"🧑‍🦲","white_haired_person":"🧑‍🦳","person_in_motorized_wheelchair":"🧑‍🦼","person_in_manual_wheelchair":"🧑‍🦽","health_worker":"🧑‍⚕️","judge":"🧑‍⚖️","pilot":"🧑‍✈️","adult":"🧑","child":"🧒","older_adult":"🧓","woman_with_beard":"🧔‍♀️","man_with_beard":"🧔‍♂️","bearded_person":"🧔","person_with_headscarf":"🧕","woman_in_steamy_room":"🧖‍♀️","man_in_steamy_room":"🧖‍♂️","person_in_steamy_room":"🧖‍♂️","woman_climbing":"🧗‍♀️","person_climbing":"🧗‍♀️","man_climbing":"🧗‍♂️","woman_in_lotus_position":"🧘‍♀️","person_in_lotus_position":"🧘‍♀️","man_in_lotus_position":"🧘‍♂️","female_mage":"🧙‍♀️","mage":"🧙‍♀️","male_mage":"🧙‍♂️","female_fairy":"🧚‍♀️","fairy":"🧚‍♀️","male_fairy":"🧚‍♂️","female_vampire":"🧛‍♀️","vampire":"🧛‍♀️","male_vampire":"🧛‍♂️","mermaid":"🧜‍♀️","merman":"🧜‍♂️","merperson":"🧜‍♂️","female_elf":"🧝‍♀️","male_elf":"🧝‍♂️","elf":"🧝‍♂️","female_genie":"🧞‍♀️","male_genie":"🧞‍♂️","genie":"🧞‍♂️","female_zombie":"🧟‍♀️","male_zombie":"🧟‍♂️","zombie":"🧟‍♂️","brain":"🧠","orange_heart":"🧡","billed_cap":"🧢","scarf":"🧣","gloves":"🧤","coat":"🧥","socks":"🧦","red_envelope":"🧧","firecracker":"🧨","jigsaw":"🧩","test_tube":"🧪","petri_dish":"🧫","dna":"🧬","compass":"🧭","abacus":"🧮","fire_extinguisher":"🧯","toolbox":"🧰","bricks":"🧱","magnet":"🧲","luggage":"🧳","lotion_bottle":"🧴","thread":"🧵","yarn":"🧶","safety_pin":"🧷","teddy_bear":"🧸","broom":"🧹","basket":"🧺","roll_of_paper":"🧻","soap":"🧼","sponge":"🧽","receipt":"🧾","nazar_amulet":"🧿","ballet_shoes":"🩰","one-piece_swimsuit":"🩱","briefs":"🩲","shorts":"🩳","thong_sandal":"🩴","drop_of_blood":"🩸","adhesive_bandage":"🩹","stethoscope":"🩺","yo-yo":"🪀","kite":"🪁","parachute":"🪂","boomerang":"🪃","magic_wand":"🪄","pinata":"🪅","nesting_dolls":"🪆","ringed_planet":"🪐","chair":"🪑","razor":"🪒","axe":"🪓","diya_lamp":"🪔","banjo":"🪕","military_helmet":"🪖","accordion":"🪗","long_drum":"🪘","coin":"🪙","carpentry_saw":"🪚","screwdriver":"🪛","ladder":"🪜","hook":"🪝","mirror":"🪞","window":"🪟","plunger":"🪠","sewing_needle":"🪡","knot":"🪢","bucket":"🪣","mouse_trap":"🪤","toothbrush":"🪥","headstone":"🪦","placard":"🪧","rock":"🪨","fly":"🪰","worm":"🪱","beetle":"🪲","cockroach":"🪳","potted_plant":"🪴","wood":"🪵","feather":"🪶","anatomical_heart":"🫀","lungs":"🫁","people_hugging":"🫂","blueberries":"🫐","bell_pepper":"🫑","olive":"🫒","flatbread":"🫓","tamale":"🫔","fondue":"🫕","teapot":"🫖","bangbang":"‼️","interrobang":"⁉️","tm":"™️","information_source":"ℹ️","left_right_arrow":"↔️","arrow_up_down":"↕️","arrow_upper_left":"↖️","arrow_upper_right":"↗️","arrow_lower_right":"↘️","arrow_lower_left":"↙️","leftwards_arrow_with_hook":"↩️","arrow_right_hook":"↪️","watch":"⌚","hourglass":"⌛","keyboard":"⌨️","eject":"⏏️","fast_forward":"⏩","rewind":"⏪","arrow_double_up":"⏫","arrow_double_down":"⏬","black_right_pointing_double_triangle_with_vertical_bar":"⏭️","black_left_pointing_double_triangle_with_vertical_bar":"⏮️","black_right_pointing_triangle_with_double_vertical_bar":"⏯️","alarm_clock":"⏰","stopwatch":"⏱️","timer_clock":"⏲️","hourglass_flowing_sand":"⏳","double_vertical_bar":"⏸️","black_square_for_stop":"⏹️","black_circle_for_record":"⏺️","m":"Ⓜ️","black_small_square":"▪️","white_small_square":"▫️","arrow_forward":"▶️","arrow_backward":"◀️","white_medium_square":"◻️","black_medium_square":"◼️","white_medium_small_square":"◽","black_medium_small_square":"◾","sunny":"☀️","cloud":"☁️","umbrella":"☂️","snowman":"☃️","comet":"☄️","phone":"☎️","telephone":"☎️","ballot_box_with_check":"☑️","shamrock":"☘️","point_up":"☝️","skull_and_crossbones":"☠️","radioactive_sign":"☢️","biohazard_sign":"☣️","orthodox_cross":"☦️","star_and_crescent":"☪️","peace_symbol":"☮️","yin_yang":"☯️","wheel_of_dharma":"☸️","white_frowning_face":"☹️","relaxed":"☺️","female_sign":"♀️","male_sign":"♂️","gemini":"♊","cancer":"♋","leo":"♌","virgo":"♍","libra":"♎","scorpius":"♏","chess_pawn":"♟️","spades":"♠️","clubs":"♣️","hearts":"♥️","diamonds":"♦️","hotsprings":"♨️","recycle":"♻️","infinity":"♾️","wheelchair":"♿","hammer_and_pick":"⚒️","crossed_swords":"⚔️","medical_symbol":"⚕️","staff_of_aesculapius":"⚕️","scales":"⚖️","alembic":"⚗️","gear":"⚙️","atom_symbol":"⚛️","fleur_de_lis":"⚜️","warning":"⚠️","zap":"⚡","transgender_symbol":"⚧️","white_circle":"⚪","black_circle":"⚫","coffin":"⚰️","funeral_urn":"⚱️","soccer":"⚽","baseball":"⚾","snowman_without_snow":"⛄","partly_sunny":"⛅","thunder_cloud_and_rain":"⛈️","ophiuchus":"⛎","pick":"⛏️","helmet_with_white_cross":"⛑️","chains":"⛓️","no_entry":"⛔","shinto_shrine":"⛩️","church":"⛪","mountain":"⛰️","umbrella_on_ground":"⛱️","fountain":"⛲","golf":"⛳","ferry":"⛴️","boat":"⛵","sailboat":"⛵","skier":"⛷️","ice_skate":"⛸️","woman-bouncing-ball":"⛹️‍♀️","man-bouncing-ball":"⛹️‍♂️","person_with_ball":"⛹️‍♂️","tent":"⛺","fuelpump":"⛽","scissors":"✂️","airplane":"✈️","email":"✉️","envelope":"✉️","fist":"✊","hand":"✋","raised_hand":"✋","v":"✌️","writing_hand":"✍️","pencil2":"✏️","black_nib":"✒️","heavy_check_mark":"✔️","heavy_multiplication_x":"✖️","latin_cross":"✝️","star_of_david":"✡️","eight_spoked_asterisk":"✳️","eight_pointed_black_star":"✴️","snowflake":"❄️","sparkle":"❇️","x":"❌","negative_squared_cross_mark":"❎","heavy_heart_exclamation_mark_ornament":"❣️","heart_on_fire":"❤️‍🔥","mending_heart":"❤️‍🩹","heart":"❤️","arrow_right":"➡️","curly_loop":"➰","loop":"➿","arrow_heading_up":"⤴️","arrow_heading_down":"⤵️","arrow_left":"⬅️","arrow_up":"⬆️","arrow_down":"⬇️","black_large_square":"⬛","white_large_square":"⬜","star":"⭐","o":"⭕","wavy_dash":"〰️","part_alternation_mark":"〽️","congratulations":"㊗️","secret":"㊙️"}');

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
/******/ 		id: moduleId,
/******/ 		loaded: false,
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Flag the module as loaded
/******/ 	module.loaded = true;
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
/******/ /* webpack/runtime/global */
/******/ (() => {
/******/ 	__webpack_require__.g = (function() {
/******/ 		if (typeof globalThis === 'object') return globalThis;
/******/ 		try {
/******/ 			return this || new Function('return this')();
/******/ 		} catch (e) {
/******/ 			if (typeof window === 'object') return window;
/******/ 		}
/******/ 	})();
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
/******/ /* webpack/runtime/node module decorator */
/******/ (() => {
/******/ 	__webpack_require__.nmd = (module) => {
/******/ 		module.paths = [];
/******/ 		if (!module.children) module.children = [];
/******/ 		return module;
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************************************!*\
  !*** ./client/src/integrations/emoji/index.ts ***!
  \************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "integration": () => (/* binding */ integration)
/* harmony export */ });
/* harmony import */ var _integration_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./integration-provider */ "./client/src/integrations/emoji/integration-provider.ts");

const integration = new _integration_provider__WEBPACK_IMPORTED_MODULE_0__.EmojiIntegrationProvider();

})();

var __webpack_exports__integration = __webpack_exports__.integration;
export { __webpack_exports__integration as integration };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRTtZQUNILEdBQUcsS0FBSztTQUNYO0tBQ0o7QUFDTCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztTQ3pERDtTQUNBOztTQUVBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBOztTQUVBO1NBQ0E7O1NBRUE7U0FDQTs7U0FFQTtTQUNBO1NBQ0E7Ozs7O1VDekJBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSxpQ0FBaUMsV0FBVztVQUM1QztVQUNBOzs7OztVQ1BBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EseUNBQXlDLHdDQUF3QztVQUNqRjtVQUNBO1VBQ0E7Ozs7O1VDUEE7VUFDQTtVQUNBO1VBQ0E7VUFDQSxHQUFHO1VBQ0g7VUFDQTtVQUNBLENBQUM7Ozs7O1VDUEQ7Ozs7O1VDQUE7VUFDQTtVQUNBO1VBQ0EsdURBQXVELGlCQUFpQjtVQUN4RTtVQUNBLGdEQUFnRCxhQUFhO1VBQzdEOzs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0prRTtBQUUzRCxNQUFNLFdBQVcsR0FBRyxJQUFJLDJFQUF3QixFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vcGVuZmluLXdvcmtzcGFjZS0tY3VzdG9taXplLWhvbWUtdGVtcGxhdGVzLy4uLy4uL25vZGVfbW9kdWxlcy9Ab3BlbmZpbi93b3Jrc3BhY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb3BlbmZpbi13b3Jrc3BhY2UtLWN1c3RvbWl6ZS1ob21lLXRlbXBsYXRlcy8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19EYXRhVmlldy5qcyIsIndlYnBhY2s6Ly9vcGVuZmluLXdvcmtzcGFjZS0tY3VzdG9taXplLWhvbWUtdGVtcGxhdGVzLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX01hcC5qcyIsIndlYnBhY2s6Ly9vcGVuZmluLXdvcmtzcGFjZS0tY3VzdG9taXplLWhvbWUtdGVtcGxhdGVzLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vb3BlbmZpbi13b3Jrc3BhY2UtLWN1c3RvbWl6ZS1ob21lLXRlbXBsYXRlcy8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TZXQuanMiLCJ3ZWJwYWNrOi8vb3BlbmZpbi13b3Jrc3BhY2UtLWN1c3RvbWl6ZS1ob21lLXRlbXBsYXRlcy8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TeW1ib2wuanMiLCJ3ZWJwYWNrOi8vb3BlbmZpbi13b3Jrc3BhY2UtLWN1c3RvbWl6ZS1ob21lLXRlbXBsYXRlcy8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19XZWFrTWFwLmpzIiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS1jdXN0b21pemUtaG9tZS10ZW1wbGF0ZXMvLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlMaWtlS2V5cy5qcyIsIndlYnBhY2s6Ly9vcGVuZmluLXdvcmtzcGFjZS0tY3VzdG9taXplLWhvbWUtdGVtcGxhdGVzLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5TWFwLmpzIiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS1jdXN0b21pemUtaG9tZS10ZW1wbGF0ZXMvLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXNjaWlUb0FycmF5LmpzIiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS1jdXN0b21pemUtaG9tZS10ZW1wbGF0ZXMvLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUdldFRhZy5qcyIsIndlYnBhY2s6Ly9vcGVuZmluLXdvcmtzcGFjZS0tY3VzdG9taXplLWhvbWUtdGVtcGxhdGVzLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc0FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly9vcGVuZmluLXdvcmtzcGFjZS0tY3VzdG9taXplLWhvbWUtdGVtcGxhdGVzLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc05hdGl2ZS5qcyIsIndlYnBhY2s6Ly9vcGVuZmluLXdvcmtzcGFjZS0tY3VzdG9taXplLWhvbWUtdGVtcGxhdGVzLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc1R5cGVkQXJyYXkuanMiLCJ3ZWJwYWNrOi8vb3BlbmZpbi13b3Jrc3BhY2UtLWN1c3RvbWl6ZS1ob21lLXRlbXBsYXRlcy8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlS2V5cy5qcyIsIndlYnBhY2s6Ly9vcGVuZmluLXdvcmtzcGFjZS0tY3VzdG9taXplLWhvbWUtdGVtcGxhdGVzLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VUaW1lcy5qcyIsIndlYnBhY2s6Ly9vcGVuZmluLXdvcmtzcGFjZS0tY3VzdG9taXplLWhvbWUtdGVtcGxhdGVzLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VVbmFyeS5qcyIsIndlYnBhY2s6Ly9vcGVuZmluLXdvcmtzcGFjZS0tY3VzdG9taXplLWhvbWUtdGVtcGxhdGVzLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VWYWx1ZXMuanMiLCJ3ZWJwYWNrOi8vb3BlbmZpbi13b3Jrc3BhY2UtLWN1c3RvbWl6ZS1ob21lLXRlbXBsYXRlcy8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jb3B5QXJyYXkuanMiLCJ3ZWJwYWNrOi8vb3BlbmZpbi13b3Jrc3BhY2UtLWN1c3RvbWl6ZS1ob21lLXRlbXBsYXRlcy8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jb3JlSnNEYXRhLmpzIiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS1jdXN0b21pemUtaG9tZS10ZW1wbGF0ZXMvLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZnJlZUdsb2JhbC5qcyIsIndlYnBhY2s6Ly9vcGVuZmluLXdvcmtzcGFjZS0tY3VzdG9taXplLWhvbWUtdGVtcGxhdGVzLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldE5hdGl2ZS5qcyIsIndlYnBhY2s6Ly9vcGVuZmluLXdvcmtzcGFjZS0tY3VzdG9taXplLWhvbWUtdGVtcGxhdGVzLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFJhd1RhZy5qcyIsIndlYnBhY2s6Ly9vcGVuZmluLXdvcmtzcGFjZS0tY3VzdG9taXplLWhvbWUtdGVtcGxhdGVzLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFRhZy5qcyIsIndlYnBhY2s6Ly9vcGVuZmluLXdvcmtzcGFjZS0tY3VzdG9taXplLWhvbWUtdGVtcGxhdGVzLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFZhbHVlLmpzIiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS1jdXN0b21pemUtaG9tZS10ZW1wbGF0ZXMvLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzVW5pY29kZS5qcyIsIndlYnBhY2s6Ly9vcGVuZmluLXdvcmtzcGFjZS0tY3VzdG9taXplLWhvbWUtdGVtcGxhdGVzLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzSW5kZXguanMiLCJ3ZWJwYWNrOi8vb3BlbmZpbi13b3Jrc3BhY2UtLWN1c3RvbWl6ZS1ob21lLXRlbXBsYXRlcy8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pc01hc2tlZC5qcyIsIndlYnBhY2s6Ly9vcGVuZmluLXdvcmtzcGFjZS0tY3VzdG9taXplLWhvbWUtdGVtcGxhdGVzLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzUHJvdG90eXBlLmpzIiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS1jdXN0b21pemUtaG9tZS10ZW1wbGF0ZXMvLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXRlcmF0b3JUb0FycmF5LmpzIiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS1jdXN0b21pemUtaG9tZS10ZW1wbGF0ZXMvLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9vcGVuZmluLXdvcmtzcGFjZS0tY3VzdG9taXplLWhvbWUtdGVtcGxhdGVzLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX25hdGl2ZUtleXMuanMiLCJ3ZWJwYWNrOi8vb3BlbmZpbi13b3Jrc3BhY2UtLWN1c3RvbWl6ZS1ob21lLXRlbXBsYXRlcy8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19ub2RlVXRpbC5qcyIsIndlYnBhY2s6Ly9vcGVuZmluLXdvcmtzcGFjZS0tY3VzdG9taXplLWhvbWUtdGVtcGxhdGVzLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzIiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS1jdXN0b21pemUtaG9tZS10ZW1wbGF0ZXMvLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fb3ZlckFyZy5qcyIsIndlYnBhY2s6Ly9vcGVuZmluLXdvcmtzcGFjZS0tY3VzdG9taXplLWhvbWUtdGVtcGxhdGVzLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3Jvb3QuanMiLCJ3ZWJwYWNrOi8vb3BlbmZpbi13b3Jrc3BhY2UtLWN1c3RvbWl6ZS1ob21lLXRlbXBsYXRlcy8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zZXRUb0FycmF5LmpzIiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS1jdXN0b21pemUtaG9tZS10ZW1wbGF0ZXMvLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RyaW5nVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9vcGVuZmluLXdvcmtzcGFjZS0tY3VzdG9taXplLWhvbWUtdGVtcGxhdGVzLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3RvU291cmNlLmpzIiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS1jdXN0b21pemUtaG9tZS10ZW1wbGF0ZXMvLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fdW5pY29kZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vb3BlbmZpbi13b3Jrc3BhY2UtLWN1c3RvbWl6ZS1ob21lLXRlbXBsYXRlcy8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQXJndW1lbnRzLmpzIiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS1jdXN0b21pemUtaG9tZS10ZW1wbGF0ZXMvLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FycmF5LmpzIiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS1jdXN0b21pemUtaG9tZS10ZW1wbGF0ZXMvLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FycmF5TGlrZS5qcyIsIndlYnBhY2s6Ly9vcGVuZmluLXdvcmtzcGFjZS0tY3VzdG9taXplLWhvbWUtdGVtcGxhdGVzLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNCdWZmZXIuanMiLCJ3ZWJwYWNrOi8vb3BlbmZpbi13b3Jrc3BhY2UtLWN1c3RvbWl6ZS1ob21lLXRlbXBsYXRlcy8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vb3BlbmZpbi13b3Jrc3BhY2UtLWN1c3RvbWl6ZS1ob21lLXRlbXBsYXRlcy8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzTGVuZ3RoLmpzIiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS1jdXN0b21pemUtaG9tZS10ZW1wbGF0ZXMvLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdC5qcyIsIndlYnBhY2s6Ly9vcGVuZmluLXdvcmtzcGFjZS0tY3VzdG9taXplLWhvbWUtdGVtcGxhdGVzLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3RMaWtlLmpzIiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS1jdXN0b21pemUtaG9tZS10ZW1wbGF0ZXMvLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc1N0cmluZy5qcyIsIndlYnBhY2s6Ly9vcGVuZmluLXdvcmtzcGFjZS0tY3VzdG9taXplLWhvbWUtdGVtcGxhdGVzLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNUeXBlZEFycmF5LmpzIiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS1jdXN0b21pemUtaG9tZS10ZW1wbGF0ZXMvLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9rZXlzLmpzIiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS1jdXN0b21pemUtaG9tZS10ZW1wbGF0ZXMvLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9zdHViRmFsc2UuanMiLCJ3ZWJwYWNrOi8vb3BlbmZpbi13b3Jrc3BhY2UtLWN1c3RvbWl6ZS1ob21lLXRlbXBsYXRlcy8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL3RvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vb3BlbmZpbi13b3Jrc3BhY2UtLWN1c3RvbWl6ZS1ob21lLXRlbXBsYXRlcy8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL3ZhbHVlcy5qcyIsIndlYnBhY2s6Ly9vcGVuZmluLXdvcmtzcGFjZS0tY3VzdG9taXplLWhvbWUtdGVtcGxhdGVzLy4uLy4uL25vZGVfbW9kdWxlcy9ub2RlLWVtb2ppL2luZGV4LmpzIiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS1jdXN0b21pemUtaG9tZS10ZW1wbGF0ZXMvLi4vLi4vbm9kZV9tb2R1bGVzL25vZGUtZW1vamkvbGliL2Vtb2ppLmpzIiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS1jdXN0b21pemUtaG9tZS10ZW1wbGF0ZXMvLi9jbGllbnQvc3JjL2ludGVncmF0aW9ucy9lbW9qaS9pbnRlZ3JhdGlvbi1wcm92aWRlci50cyIsIndlYnBhY2s6Ly9vcGVuZmluLXdvcmtzcGFjZS0tY3VzdG9taXplLWhvbWUtdGVtcGxhdGVzLy4vY2xpZW50L3NyYy9pbnRlZ3JhdGlvbnMvZW1vamkvdGVtcGxhdGVzLnRzIiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS1jdXN0b21pemUtaG9tZS10ZW1wbGF0ZXMvLi9jbGllbnQvc3JjL3RlbXBsYXRlcy50cyIsIndlYnBhY2s6Ly9vcGVuZmluLXdvcmtzcGFjZS0tY3VzdG9taXplLWhvbWUtdGVtcGxhdGVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS1jdXN0b21pemUtaG9tZS10ZW1wbGF0ZXMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb3BlbmZpbi13b3Jrc3BhY2UtLWN1c3RvbWl6ZS1ob21lLXRlbXBsYXRlcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb3BlbmZpbi13b3Jrc3BhY2UtLWN1c3RvbWl6ZS1ob21lLXRlbXBsYXRlcy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS1jdXN0b21pemUtaG9tZS10ZW1wbGF0ZXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vcGVuZmluLXdvcmtzcGFjZS0tY3VzdG9taXplLWhvbWUtdGVtcGxhdGVzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb3BlbmZpbi13b3Jrc3BhY2UtLWN1c3RvbWl6ZS1ob21lLXRlbXBsYXRlcy93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL29wZW5maW4td29ya3NwYWNlLS1jdXN0b21pemUtaG9tZS10ZW1wbGF0ZXMvLi9jbGllbnQvc3JjL2ludGVncmF0aW9ucy9lbW9qaS9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIoKCk9PntcInVzZSBzdHJpY3RcIjt2YXIgZT17MzEzMzooZSx0LG4pPT57bi5yKHQpLG4uZCh0LHtDTElBY3Rpb246KCk9PnplLlB0LENMSUZpbHRlck9wdGlvblR5cGU6KCk9PnplLmVsLENMSVRlbXBsYXRlOigpPT56ZS55VyxkZXJlZ2lzdGVyOigpPT5ZZSxoaWRlOigpPT50dCxyZWdpc3RlcjooKT0+UWUsc2hvdzooKT0+ZXR9KTt2YXIgcj17fTtuLnIociksbi5kKHIse3N1YnNjcmliZTooKT0+b2V9KTt2YXIgbz17fTtuLnIobyksbi5kKG8se2NyZWF0ZTooKT0+R2V9KTt2YXIgaT1uKDY1MzIpLHM9big3NDA1KTtjb25zdCBhPVwiaG9tZVwiO3ZhciBjOyFmdW5jdGlvbihlKXtlLkNvbW1hbmRzPVwiaG9tZS1jb21tYW5kc1wifShjfHwoYz17fSkpO3ZhciBkLHU9big1ODA2KTtuKDc1NjQpOyFmdW5jdGlvbihlKXtlW2UuSW5pdGlhbD0wXT1cIkluaXRpYWxcIixlW2UuT3Blbj0xXT1cIk9wZW5cIixlW2UuQ2xvc2U9Ml09XCJDbG9zZVwifShkfHwoZD17fSkpO2NvbnN0IGY9XCJhbGxcIixsPVwiMFwiLHA9XCI1XCIsZz1cIjZcIix3PSgpPT57fTtmdW5jdGlvbiBoKGUsdCl7cmV0dXJuIGU/YCR7ZX0tJHt0fWA6dH1mdW5jdGlvbiB5KGUpe3JldHVybmBfX3NlYXJjaC0ke2V9LXRvcGljX19gfWNvbnN0IHY9bmV3IE1hcDtmdW5jdGlvbiBtKGUsdCl7di5oYXMoZSl8fHYuc2V0KGUsbmV3IFNldCksdi5nZXQoZSkuYWRkKHQpfWZ1bmN0aW9uIFMoZSx0KXtjb25zdCBuPXYuZ2V0KGUpO24mJm4uZGVsZXRlKHQpfWNvbnN0IEM9bmV3IE1hcDtmdW5jdGlvbiBQKGUsdCl7Qy5oYXMoZSl8fEMuc2V0KGUsbmV3IFNldCksQy5nZXQoZSkuYWRkKHQpfWZ1bmN0aW9uIFIoZSx0KXtjb25zdCBuPUMuZ2V0KGUpO24mJm4uZGVsZXRlKHQpfWNvbnN0IGI9bmV3IE1hcDthc3luYyBmdW5jdGlvbiBUKGUsdCl7Yi5oYXMoZSl8fGIuc2V0KGUsbmV3IE1hcCksYi5nZXQoZSkuc2V0KHQuaWQsdCk7Y29uc3Qgbj12LmdldChlKTtpZighbilyZXR1cm47Y29uc3Qgcj1bLi4ubl0ubWFwKChlPT5lKCkpKTthd2FpdCBQcm9taXNlLmFsbChyKX1hc3luYyBmdW5jdGlvbiBJKGUsdCl7Y29uc3Qgbj1iLmdldChlKTtpZighbilyZXR1cm47bi5kZWxldGUodCk7Y29uc3Qgcj1DLmdldChlKTtpZighcilyZXR1cm47Y29uc3Qgbz1bLi4ucl0ubWFwKChlPT5lKCkpKTthd2FpdCBQcm9taXNlLmFsbChvKX1mdW5jdGlvbiBMKGUpe3JldHVybiBiLmdldChlKT9bLi4uYi5nZXQoZSkudmFsdWVzKCldOltdfWZ1bmN0aW9uIGsoZSl7Y29uc3QgdD1iLmdldChlKTt0JiZ0LmNsZWFyKCl9ZnVuY3Rpb24gTShlLHQpe2NvbnN0IG49Yi5nZXQoZSk7cmV0dXJuIG4/bi5nZXQodCk6bnVsbH1mdW5jdGlvbiBCKGUsdCxuKXtyZXR1cm57Li4uZSxhY3Rpb246bnx8ZS5hY3Rpb25zWzBdLGRpc3BhdGNoZXJJZGVudGl0eTp0fX1mdW5jdGlvbiBPKGUsdCxuPVwiYXNjZW5kaW5nXCIpe2NvbnN0IHI9ZXx8W107aWYoIXQ/Lmxlbmd0aClyZXR1cm4gcjtjb25zdCBvPVtdLGk9bmV3IE1hcDt0LmZvckVhY2goKGU9PntpZihlLmtleSlyZXR1cm4gaS5zZXQoZS5rZXksZSk7by5wdXNoKGUpfSkpO2xldCBzPXIubWFwKChlPT57Y29uc3R7a2V5OnR9PWU7aWYodCYmaS5oYXModCkpe2NvbnN0IGU9aS5nZXQodCk7cmV0dXJuIGkuZGVsZXRlKHQpLGV9cmV0dXJuIGV9KSk7cmV0dXJuIHMucHVzaCguLi5pLnZhbHVlcygpLC4uLm8pLHM9XCJhc2NlbmRpbmdcIj09PW4/cy5zb3J0KCgoZSx0KT0+KG51bGwhPT1lLnNjb3JlJiZ2b2lkIDAhPT1lLnNjb3JlP2Uuc2NvcmU6MS8wKS0obnVsbCE9PXQuc2NvcmUmJnZvaWQgMCE9PXQuc2NvcmU/dC5zY29yZToxLzApKSk6cy5zb3J0KCgoZSx0KT0+KG51bGwhPT10LnNjb3JlJiZ2b2lkIDAhPT10LnNjb3JlP3Quc2NvcmU6MS8wKS0obnVsbCE9PWUuc2NvcmUmJnZvaWQgMCE9PWUuc2NvcmU/ZS5zY29yZToxLzApKSksc31mdW5jdGlvbiBXKGUpe2NvbnN0IHQ9e307bGV0IG49W107bGV0IHI9W107bGV0IG89ZC5Jbml0aWFsO3QuZ2V0U3RhdHVzPSgpPT5vLHQuZ2V0UmVzdWx0QnVmZmVyPSgpPT5uLHQuc2V0UmVzdWx0QnVmZmVyPWU9PntuPWUsbj8ubGVuZ3RoJiZ0Lm9uQ2hhbmdlKCl9LHQuZ2V0UmV2b2tlZEJ1ZmZlcj0oKT0+cix0LnNldFJldm9rZWRCdWZmZXI9ZT0+e3I9ZSxyPy5sZW5ndGgmJnQub25DaGFuZ2UoKX0sdC5vbkNoYW5nZT13O2NvbnN0IGk9e307cmV0dXJuIHQucmVzPWksaS5jbG9zZT0oKT0+e28hPT1kLkNsb3NlJiYobz1kLkNsb3NlLHQub25DaGFuZ2UoKSl9LGkub3Blbj0oKT0+e28hPT1kLk9wZW4mJihvPWQuT3Blbix0Lm9uQ2hhbmdlKCkpfSxpLnJlc3BvbmQ9bj0+e2NvbnN0IHI9Tyh0LmdldFJlc3VsdEJ1ZmZlcigpLG4sZSk7dC5zZXRSZXN1bHRCdWZmZXIocil9LGkucmV2b2tlPSguLi5lKT0+e2NvbnN0IG49bmV3IFNldChlKSxyPXQuZ2V0UmVzdWx0QnVmZmVyKCkuZmlsdGVyKCgoe2tleTplfSk9Pntjb25zdCB0PW4uaGFzKGUpO3JldHVybiB0JiZuLmRlbGV0ZShlKSwhdH0pKTt0LnNldFJlc3VsdEJ1ZmZlcihyKSxuLnNpemUmJih0LmdldFJldm9rZWRCdWZmZXIoKS5mb3JFYWNoKChlPT5uLmFkZChlKSkpLHQuc2V0UmV2b2tlZEJ1ZmZlcihbLi4ubl0pKX0sdH1mdW5jdGlvbiBEKGUsdCxuKXtjb25zdCByPW5ldyBTZXQ7bGV0IG89ITE7cmV0dXJue2Nsb3NlOigpPT57bz0hMDtmb3IoY29uc3QgZSBvZiByKWUoKX0scmVxOntpZDp0LHRvcGljOmUsLi4ubixjb250ZXh0Om4/LmNvbnRleHR8fHt9LG9uQ2xvc2U6ZT0+e3IuYWRkKGUpLG8mJmUoKX0scmVtb3ZlTGlzdGVuZXI6ZT0+e3IuZGVsZXRlKGUpfX19fWZ1bmN0aW9uIHgoKXtyZXR1cm57bmFtZTpmaW4ubWUubmFtZSx1dWlkOmZpbi5tZS51dWlkfX1mdW5jdGlvbiBBKCl7bGV0IGU7dHJ5e2NvbnN0IHQ9ZmluLlBsYXRmb3JtLmdldEN1cnJlbnRTeW5jKCk7aWYoIXQ/LmlkZW50aXR5KXJldHVybjtlPXQuaWRlbnRpdHkudXVpZH1jYXRjaChlKXt9cmV0dXJuIGV9Y29uc3QgRT1cImRlcmVnaXN0ZXJlZCBvciBkb2VzIG5vdCBleGlzdFwiLEY9bmV3IEVycm9yKGBwcm92aWRlciAke0V9YCksXz1uZXcgRXJyb3IoXCJwcm92aWRlciB3aXRoIG5hbWUgYWxyZWFkeSBleGlzdHNcIiksJD1uZXcgRXJyb3IoXCJiYWQgcGF5bG9hZFwiKSxxPW5ldyBFcnJvcihcInN1YnNjcmlwdGlvbiByZWplY3RlZFwiKSxHPW5ldyBFcnJvcihgY2hhbm5lbCAke0V9YCksTj1uZXcgTWFwO2Z1bmN0aW9uIEgoZSl7Y29uc3QgdD1VKGUpO2lmKHQpcmV0dXJuIHQ7dGhyb3cgR31mdW5jdGlvbiBVKGUpe2NvbnN0IHQ9Ti5nZXQoZSk7aWYodClyZXR1cm4gdH1mdW5jdGlvbiBWKGUsdCl7Ti5zZXQoZSx0KX1jb25zdCBqPW5ldyBNYXA7ZnVuY3Rpb24gSyhlKXtqLmhhcyhlKXx8ai5zZXQoZSxuZXcgTWFwKTtjb25zdCB0PWouZ2V0KGUpO3JldHVybntnZXRSZXF1ZXN0c0ZvcklkZW50aXR5OmU9Pntjb25zdCBuPWZ1bmN0aW9uKGUpe3JldHVybmAke2UudXVpZH06JHtlLm5hbWV9YH0oZSk7cmV0dXJuIHQuaGFzKG4pfHx0LnNldChuLG5ldyBNYXApLHQuZ2V0KG4pfX19YXN5bmMgZnVuY3Rpb24gWChlLHQpe3JldHVybihhd2FpdCBIKGUpKS5kaXNwYXRjaChsLHQpfWZ1bmN0aW9uIEooe25hbWVzcGFjZWRUb3BpYzplLHRvcGljOnR9KXtjb25zdCBuPU0uYmluZChudWxsLGUpLHI9SyhlKSxvPVguYmluZChudWxsLGUpO3JldHVybiBhc3luYyhlLGkpPT57aWYoIWV8fCFlLmlkfHwhZS5wcm92aWRlcklkKXtjb25zdCBlPSQ7cmV0dXJue2Vycm9yOmUubWVzc2FnZX19Y29uc3R7aWQ6cyxwcm92aWRlcklkOmF9PWUsYz1uKGEpO2lmKCFjKXtjb25zdCBlPUY7cmV0dXJue2Vycm9yOmUubWVzc2FnZX19Y29uc3QgZD1yLmdldFJlcXVlc3RzRm9ySWRlbnRpdHkoaSk7bGV0IHU9ZC5nZXQoZS5pZCk7dXx8KHU9RCh0LHMsZSksZC5zZXQoZS5pZCx1KSk7Y29uc3QgZj1XKCksbD0oKT0+e2NvbnN0IGU9Zi5nZXRSZXN1bHRCdWZmZXIoKTtmLnNldFJlc3VsdEJ1ZmZlcihbXSk7Y29uc3QgdD1mLmdldFJldm9rZWRCdWZmZXIoKTtmLnNldFJldm9rZWRCdWZmZXIoW10pO2NvbnN0IG49Zi5nZXRTdGF0dXMoKTtvKHtpZDpzLHByb3ZpZGVySWQ6YSxyZXN1bHRzOmUscmV2b2tlZDp0LHN0YXR1czpufSl9O2xldCBwPSEwLGc9ITE7Zi5vbkNoYW5nZT0oKT0+e2lmKHApcmV0dXJuIHA9ITEsdm9pZCBsKCk7Z3x8KGc9ITAsc2V0VGltZW91dCgoKCk9PntnPSExLGwoKX0pLDEwMCkpfTt0cnl7Y29uc3R7cmVzdWx0czplLGNvbnRleHQ6dH09YXdhaXQgYy5vblVzZXJJbnB1dCh1LnJlcSxmLnJlcyksbj1mLmdldFN0YXR1cygpO3JldHVybntpZDpzLHByb3ZpZGVySWQ6YSxzdGF0dXM6bixyZXN1bHRzOmUsY29udGV4dDp0fX1jYXRjaChlKXtyZXR1cm57aWQ6cyxwcm92aWRlcklkOmEsZXJyb3I6ZS5tZXNzYWdlfX19fWFzeW5jIGZ1bmN0aW9uIFooZSx0LG4pe2NvbnN0IHI9bnx8YXdhaXQgSChlKSxvPXgoKSxpPXtpZGVudGl0eTpvLC4uLnQsb25Vc2VySW5wdXQ6dm9pZCAwLG9uUmVzdWx0RGlzcGF0Y2g6dm9pZCAwfTthd2FpdCByLmRpc3BhdGNoKFwiMlwiLGkpLGF3YWl0IFQoZSx7aWRlbnRpdHk6bywuLi50fSl9YXN5bmMgZnVuY3Rpb24geihlLHQpe2NvbnN0IG49YXdhaXQgSChlKTtyZXR1cm4gYXdhaXQgbi5kaXNwYXRjaChcIjNcIix0KSxJKGUsdCl9YXN5bmMgZnVuY3Rpb24gUShlLHQsbixyKXtjb25zdCBvPUIobix4KCksciksaT1NKGUsdCk7aWYoaSl7Y29uc3R7b25SZXN1bHREaXNwYXRjaDplfT1pO2lmKCFlKXJldHVybjtyZXR1cm4gZShvKX1jb25zdCBzPXtwcm92aWRlcklkOnQscmVzdWx0Om99O3JldHVybihhd2FpdCBIKGUpKS5kaXNwYXRjaChwLHMpfWFzeW5jIGZ1bmN0aW9uIFkoZSx0KXtjb25zdCBuPXsuLi50LGNvbnRleHQ6dD8uY29udGV4dHx8e319LHI9e30sbz1hc3luYyBmdW5jdGlvbiooZSx0LHtzZXRTdGF0ZTpufSl7Y29uc3Qgcj1hd2FpdCBIKGUpO2Zvcig7Oyl7Y29uc3QgZT1hd2FpdCByLmRpc3BhdGNoKFwiMVwiLHQpLG89ZS5lcnJvcjtpZihvKXRocm93IG5ldyBFcnJvcihvKTtjb25zdCBpPWU7aWYodC5pZD1pLmlkLG4oaS5zdGF0ZSksaS5kb25lKXJldHVybiBpLnZhbHVlO3lpZWxkIGkudmFsdWV9fShlLG4se3NldFN0YXRlOmU9PntyLnN0YXRlPWV9fSk7bGV0IGk9YXdhaXQgby5uZXh0KCk7cmV0dXJuIHIuaWQ9bi5pZCxyLmNsb3NlPSgpPT57IWFzeW5jIGZ1bmN0aW9uKGUsdCl7KGF3YWl0IEgoZSkpLmRpc3BhdGNoKGcse2lkOnR9KX0oZSxyLmlkKX0sci5uZXh0PSgpPT57aWYoaSl7Y29uc3QgZT1pO3JldHVybiBpPXZvaWQgMCxlfXJldHVybiBvLm5leHQoKX0scn1hc3luYyBmdW5jdGlvbiBlZShlKXtyZXR1cm4oYXdhaXQgSChlKSkuZGlzcGF0Y2goXCI0XCIsbnVsbCl9YXN5bmMgZnVuY3Rpb24gdGUoZSl7Y29uc3QgdD1hd2FpdCBIKGUpO3ZhciBuO249ZSxOLmRlbGV0ZShuKSxrKGUpLGF3YWl0IHQuZGlzY29ubmVjdCgpfWZ1bmN0aW9uIG5lKGUpe2NvbnN0e25hbWVzcGFjZWRUb3BpYzp0fT1lLG49Syh0KTtyZXR1cm4gYXN5bmMgcj0+e2lmKCFVKHQpKXJldHVybjtjb25zdCBvPW4uZ2V0UmVxdWVzdHNGb3JJZGVudGl0eShyKTtmb3IoY29uc3R7cmVxOmUsY2xvc2U6dH1vZiBvLnZhbHVlcygpKXQoKSxvLmRlbGV0ZShlLmlkKTtWKHQsKGFzeW5jIGU9Pntjb25zdHtuYW1lc3BhY2VkVG9waWM6dH09ZSxuPWF3YWl0IHJlKGUpO2Zvcihjb25zdCBlIG9mIEwodCkpYXdhaXQgWih0LGUsbik7cmV0dXJuIG59KShlKSl9fWFzeW5jIGZ1bmN0aW9uIHJlKGUpe2NvbnN0e25hbWVzcGFjZWRUb3BpYzp0fT1lLG49eSh0KSxyPWF3YWl0IGFzeW5jIGZ1bmN0aW9uKGUpe2ZvcihsZXQgdD0wO3Q8NTA7dCsrKXRyeXtyZXR1cm4gYXdhaXQgZmluLkludGVyQXBwbGljYXRpb25CdXMuQ2hhbm5lbC5jb25uZWN0KGUse3dhaXQ6ITF9KX1jYXRjaChlKXtpZig0OT09PXQpdGhyb3cgZTthd2FpdCBuZXcgUHJvbWlzZSgoZT0+c2V0VGltZW91dChlLDFlMykpKX19KG4pO3JldHVybiByLnJlZ2lzdGVyKGwsSihlKSksci5yZWdpc3RlcihnLGZ1bmN0aW9uKGUpe2NvbnN0IHQ9SyhlKTtyZXR1cm4oZSxuKT0+e2NvbnN0IHI9dC5nZXRSZXF1ZXN0c0ZvcklkZW50aXR5KG4pLG89ci5nZXQoZS5pZCk7byYmKG8uY2xvc2UoKSxyLmRlbGV0ZShlLmlkKSl9fSh0KSksci5yZWdpc3RlcihwLGZ1bmN0aW9uKGUpe3JldHVybiBhc3luYyh0LG4pPT57aWYoIXR8fCF0LnByb3ZpZGVySWR8fCF0LnJlc3VsdClyZXR1cm47Y29uc3Qgcj1NKGUsdC5wcm92aWRlcklkKTtpZighcilyZXR1cm47Y29uc3R7b25SZXN1bHREaXNwYXRjaDpvfT1yO3JldHVybiBvPyh0LnJlc3VsdC5kaXNwYXRjaGVySWRlbnRpdHk9bixvKHQucmVzdWx0KSk6dm9pZCAwfX0odCkpLHIub25EaXNjb25uZWN0aW9uKG5lKGUpKSxyfWFzeW5jIGZ1bmN0aW9uIG9lKGUpe2NvbnN0IHQ9KFwic3RyaW5nXCI9PXR5cGVvZiBlP2U6ZT8udG9waWMpfHxmLG49KFwic3RyaW5nXCI9PXR5cGVvZiBlP251bGw6ZT8udXVpZCl8fEEoKSxyPWgobix0KSxvPXt0b3BpYzp0LG5hbWVzcGFjZTpuLG5hbWVzcGFjZWRUb3BpYzpyfTtsZXQgaT1VKHIpO3JldHVybiBpfHwoaT1yZShvKSxWKHIsaSksYXdhaXQgaSkse2dldEFsbFByb3ZpZGVyczplZS5iaW5kKG51bGwscikscmVnaXN0ZXI6Wi5iaW5kKG51bGwsciksc2VhcmNoOlkuYmluZChudWxsLHIpLGRlcmVnaXN0ZXI6ei5iaW5kKG51bGwsciksZGlzcGF0Y2g6US5iaW5kKG51bGwsciksZGlzY29ubmVjdDp0ZS5iaW5kKG51bGwscil9fWNvbnN0IGllPW5ldyBNYXA7ZnVuY3Rpb24gc2UoZSl7Y29uc3QgdD1hZShlKTtpZih0KXJldHVybiB0O3Rocm93IEd9ZnVuY3Rpb24gYWUoZSl7Y29uc3QgdD1pZS5nZXQoZSk7aWYodClyZXR1cm4gdH1jb25zdCBjZT1uZXcgTWFwO2Z1bmN0aW9uIGRlKGUsdCl7Y2UuaGFzKGUpfHxjZS5zZXQoZSxuZXcgU2V0KSxjZS5nZXQoZSkuYWRkKHQpfWZ1bmN0aW9uIHVlKGUsdCl7Y29uc3Qgbj1jZS5nZXQoZSk7biYmbi5kZWxldGUodCl9dmFyIGZlPW4oNTMxNik7ZnVuY3Rpb24gbGUoZSl7cmV0dXJuWy4uLkwoZSldLm1hcCgoZT0+KHsuLi5lLG9uVXNlcklucHV0OnZvaWQgMCxvblJlc3VsdERpc3BhdGNoOnZvaWQgMH0pKSl9YXN5bmMgZnVuY3Rpb24gcGUoZSx0KXtpZihNKGUsdC5pZCkpdGhyb3cgbmV3IEVycm9yKFwicHJvdmlkZXIgd2l0aCBuYW1lIGFscmVhZHkgZXhpc3RzXCIpO2NvbnN0IG49eCgpO2F3YWl0IFQoZSx7aWRlbnRpdHk6biwuLi50fSl9ZnVuY3Rpb24gZ2UoZSx0KXtJKGUsdCl9YXN5bmMgZnVuY3Rpb24gd2UoZSx0LG4scil7Y29uc3Qgbz1NKGUsdCk7aWYoIW8pdGhyb3cgRjtjb25zdHtvblJlc3VsdERpc3BhdGNoOml9PW87aWYoIWkpcmV0dXJuO3JldHVybiBpKEIobix4KCkscikpfWFzeW5jIGZ1bmN0aW9uKmhlKGUsdCxuKXtjb25zdCByPWZ1bmN0aW9uKGUsdCl7Y29uc3Qgbj1bXSxyPVtdLG89W10saT1bXTtmb3IoY29uc3QgcyBvZiBlKXtjb25zdCBlPVcocy5zY29yZU9yZGVyKSxhPXtyZXN1bHRzOltdLHByb3ZpZGVyOntpZDpzLmlkLGlkZW50aXR5OnMuaWRlbnRpdHksdGl0bGU6cy50aXRsZSxzY29yZU9yZGVyOnMuc2NvcmVPcmRlcixpY29uOnMuaWNvbn19O24ucHVzaChhKSxyLnB1c2goZSk7Y29uc3QgYz0oYXN5bmMoKT0+e3RyeXtjb25zdHtyZXN1bHRzOm4sY29udGV4dDpyfT1hd2FpdCBzLm9uVXNlcklucHV0KHQsZS5yZXMpO2EucmVzdWx0cz1PKGEucmVzdWx0cyxuKSxhLmNvbnRleHQ9ey4uLmEuY29udGV4dCwuLi5yfX1jYXRjaChlKXthLmVycm9yPWV9Yy5kb25lPSEwfSkoKTtpLnB1c2goYyksby5wdXNoKG8ubGVuZ3RoKX1yZXR1cm57cHJvdmlkZXJSZXNwb25zZXM6bixsaXN0ZW5lclJlc3BvbnNlczpyLG9wZW5MaXN0ZW5lclJlc3BvbnNlczpvLGluaXRpYWxSZXNwb25zZVByb21pc2VzOml9fSh0LnRhcmdldHM/dC50YXJnZXRzLm1hcCgodD0+TShlLHQpKSkuZmlsdGVyKChlPT4hIWUpKTpbLi4uTChlKS5maWx0ZXIoKGU9PiFlLmhpZGRlbikpXSx0KSx7cHJvdmlkZXJSZXNwb25zZXM6byxsaXN0ZW5lclJlc3BvbnNlczppfT1yO2xldHtvcGVuTGlzdGVuZXJSZXNwb25zZXM6cyxpbml0aWFsUmVzcG9uc2VQcm9taXNlczphfT1yLGM9ZmUuRC5GZXRjaGluZztjb25zdCB1PWU9PntjPWUsbi5zZXRTdGF0ZShjKX07bGV0IGYsbD0hMTt0Lm9uQ2xvc2UoKCgpPT57bD0hMCxmJiZmKCl9KSk7ZG97bGV0IGU9ITE7aWYoYS5sZW5ndGgpe2NvbnN0IHQ9W107Zm9yKGNvbnN0IG4gb2YgYSluLmRvbmU/ZT0hMDp0LnB1c2gobik7YT10LGEubGVuZ3RofHwodShmZS5ELkZldGNoZWQpLGU9ITApfWxldCB0LG49ITE7Y29uc3Qgcj0oKT0+e249ITAsdCYmdCgpfSxwPVtdO2Zvcihjb25zdCB0IG9mIHMpe2NvbnN0IG49aVt0XSxzPW9bdF0sYT1uLmdldFN0YXR1cygpOyhhPT09ZC5PcGVufHxjPT09ZmUuRC5GZXRjaGluZyYmYT09PWQuSW5pdGlhbCkmJihwLnB1c2godCksbi5vbkNoYW5nZT1yKTtjb25zdCB1PW4uZ2V0UmVzdWx0QnVmZmVyKCk7dS5sZW5ndGgmJihuLnNldFJlc3VsdEJ1ZmZlcihbXSkscy5yZXN1bHRzPU8ocy5yZXN1bHRzLHUpLGU9ITApO2NvbnN0IGY9bi5nZXRSZXZva2VkQnVmZmVyKCk7aWYoZi5sZW5ndGgpe24uc2V0UmV2b2tlZEJ1ZmZlcihbXSk7Y29uc3QgdD1uZXcgU2V0KGYpO3MucmVzdWx0cz1zLnJlc3VsdHMuZmlsdGVyKCgoe2tleTplfSk9PiF0LmhhcyhlKSkpLGU9ITB9fWlmKHM9cCxlJiYoeWllbGQgbyksbClicmVhaztufHwocy5sZW5ndGh8fGEubGVuZ3RoKSYmYXdhaXQgUHJvbWlzZS5yYWNlKFsuLi5hLG5ldyBQcm9taXNlKChlPT57dD1lfSkpLG5ldyBQcm9taXNlKChlPT57Zj1lfSkpXSl9d2hpbGUocy5sZW5ndGh8fGEubGVuZ3RoKTtyZXR1cm4gdShmZS5ELkNvbXBsZXRlKSxvfWxldCB5ZT0wO2Z1bmN0aW9uIHZlKHtuYW1lc3BhY2VkVG9waWM6ZSx0b3BpYzp0fSxuKXt5ZSs9MTtjb25zdCByPUQodCx5ZS50b1N0cmluZygpLG4pLG89aGUoZSxyLnJlcSx7c2V0U3RhdGU6ZT0+e28uc3RhdGU9ZX19KTtyZXR1cm4gby5pZD15ZS50b1N0cmluZygpLG8uY2xvc2U9ci5jbG9zZSxvLnN0YXRlPWZlLkQuRmV0Y2hpbmcsb31jb25zdCBtZT1uZXcgTWFwO2Z1bmN0aW9uIFNlKGUsdCl7cmV0dXJuYCR7ZX06JHt0fWB9ZnVuY3Rpb24gQ2UoZSl7cmV0dXJuIGFzeW5jKHQsLi4ubik9PntpZighdClyZXR1cm57ZXJyb3I6JC5tZXNzYWdlfTtsZXQgcjtpZih0LmlkKXI9U2UoZS5uYW1lc3BhY2VkVG9waWMsdC5pZCk7ZWxzZXtjb25zdCBuPXZlKGUsdCk7cj1TZShlLm5hbWVzcGFjZWRUb3BpYyxuLmlkKSx0LmlkPW4uaWQsbWUuc2V0KHIse2dlbmVyYXRvcjpufSl9Y29uc3Qgbz1tZS5nZXQocik7Y2xlYXJUaW1lb3V0KG8udGltZW91dCk7Y29uc3QgaT1hd2FpdCBvLmdlbmVyYXRvci5uZXh0KCk7cmV0dXJuIG8udGltZW91dD1mdW5jdGlvbihlKXtyZXR1cm4gd2luZG93LnNldFRpbWVvdXQoKCgpPT57bWUuZGVsZXRlKGUpfSksMWU0KX0ociksey4uLmksaWQ6dC5pZCxzdGF0ZTpvLmdlbmVyYXRvci5zdGF0ZX19fWZ1bmN0aW9uIFBlKGUsdCxuKXtyZXR1cm4gc2UoZSkuZGlzcGF0Y2godCxnLHtpZDpufSl9ZnVuY3Rpb24gUmUoZSl7cmV0dXJuIHQ9PmZ1bmN0aW9uKGUsdCl7Y29uc3Qgbj1TZShlLHQpLHI9bWUuZ2V0KG4pO3ImJnIuZ2VuZXJhdG9yLmNsb3NlKCl9KGUsdC5pZCl9YXN5bmMgZnVuY3Rpb24gYmUoZSx0LHtpZDpuLHF1ZXJ5OnIsY29udGV4dDpvLHRhcmdldHM6aX0pe2NvbnN0IHM9c2UoZSksYT17aWQ6bixxdWVyeTpyLGNvbnRleHQ6byx0YXJnZXRzOmkscHJvdmlkZXJJZDp0LmlkfSxjPWF3YWl0IHMuZGlzcGF0Y2godC5pZGVudGl0eSxsLGEpLGQ9Yy5lcnJvcjtpZihkKXRocm93IG5ldyBFcnJvcihkKTtyZXR1cm4gY31jb25zdCBUZT1uZXcgTWFwO2Z1bmN0aW9uIEllKGUsdCxuKXtyZXR1cm5gJHtlfToke3QubmFtZX06JHt0LnV1aWR9OiR7bn1gfWNvbnN0IExlPW5ldyBNYXA7ZnVuY3Rpb24ga2UoZSx0LG4pe3JldHVybmAke2V9OiR7dH06JHtufWB9ZnVuY3Rpb24gTWUoZSx0KXtjb25zdCBuPUllLmJpbmQobnVsbCxlLHQuaWRlbnRpdHkpLHI9UGUuYmluZChudWxsLGUsdC5pZGVudGl0eSksbz1iZS5iaW5kKG51bGwsZSx0KTtyZXR1cm4gYXN5bmMoaSxzKT0+e2NvbnN0IGE9bihpLmlkKTtpZighVGUuaGFzKGEpKXtjb25zdCBlPSgpPT57cihpLmlkKSxUZS5kZWxldGUoYSl9O1RlLnNldChhLGUpLGkub25DbG9zZShlKX1jb25zdCBjPWtlKGUsdC5pZCxpLmlkKSx1PSgpPT57TGUuZGVsZXRlKGMpLHMuY2xvc2UoKX07aS5vbkNsb3NlKHUpLExlLnNldChjLChlPT57ZS5yZXN1bHRzPy5sZW5ndGgmJnMucmVzcG9uZChlLnJlc3VsdHMpLGUucmV2b2tlZD8ubGVuZ3RoJiZzLnJldm9rZSguLi5lLnJldm9rZWQpLGUuc3RhdHVzPT09ZC5PcGVuJiZzLm9wZW4oKSxlLnN0YXR1cz09PWQuQ2xvc2UmJnUoKX0pKTtjb25zdCBmPWF3YWl0IG8oaSk7cmV0dXJuIGYuc3RhdHVzPT09ZC5PcGVuJiZzLm9wZW4oKSxmLnN0YXR1cyE9PWQuQ2xvc2UmJmYuc3RhdHVzIT09ZC5Jbml0aWFsfHx1KCksZn19ZnVuY3Rpb24gQmUoZSx0KXtyZXR1cm4gYXN5bmMgbj0+e2NvbnN0IHI9c2UoZSksbz17cHJvdmlkZXJJZDp0LmlkLHJlc3VsdDpufTtyZXR1cm4gci5kaXNwYXRjaCh0LmlkZW50aXR5LHAsbyl9fWNvbnN0IE9lPW5ldyBNYXA7ZnVuY3Rpb24gV2UoZSx0KXtyZXR1cm5gJHtlfS0ke3QubmFtZX0tJHt0LnV1aWR9YH1mdW5jdGlvbiBEZShlKXtyZXR1cm4gYXN5bmModCxuKT0+e2lmKCF0fHwhdC5pZClyZXR1cm4gdm9pZCBuZXcgRXJyb3IoSlNPTi5zdHJpbmdpZnkodCkpO2lmKE0oZSx0LmlkKSl0aHJvdyBfO3QuaWRlbnRpdHk9bixhd2FpdCBhc3luYyBmdW5jdGlvbihlLHQpe2NvbnN0IG49V2UoZSx0LmlkZW50aXR5KTtPZS5oYXMobil8fE9lLnNldChuLFtdKSxPZS5nZXQobikucHVzaCh0LmlkKSxhd2FpdCBUKGUsey4uLnQsb25Vc2VySW5wdXQ6TWUoZSx0KSxvblJlc3VsdERpc3BhdGNoOkJlKGUsdCl9KX0oZSx0KX19ZnVuY3Rpb24geGUoZSl7cmV0dXJuIHQ9Pnt0JiZmdW5jdGlvbihlLHQpe2NvbnN0IG49TShlLHQpO2lmKCFuKXJldHVybjtjb25zdCByPVdlKGUsbi5pZGVudGl0eSksbz1PZS5nZXQocik7aWYobyl7Y29uc3Qgbj1vLmZpbmRJbmRleCgoZT0+ZT09PXQpKTstMSE9PW4mJihvLnNwbGljZShuLDEpLEkoZSx0KSl9fShlLHQpfX1jb25zdCBBZT1uZXcgTWFwO2Z1bmN0aW9uIEVlKGUsdCl7QWUuaGFzKGUpfHxBZS5zZXQoZSxuZXcgU2V0KSxBZS5nZXQoZSkuYWRkKHQpfWZ1bmN0aW9uIEZlKGUsdCl7Y29uc3Qgbj1BZS5nZXQoZSk7biYmbi5kZWxldGUodCl9ZnVuY3Rpb24gX2UoZSl7cmV0dXJuIGFzeW5jIHQ9PnshZnVuY3Rpb24oZSx0KXtjb25zdCBuPVdlKGUsdCkscj1PZS5nZXQobik7aWYocil7Zm9yKGNvbnN0IHQgb2YgcilJKGUsdCk7T2UuZGVsZXRlKG4pfX0oZSx0KTtjb25zdCBuPUFlLmdldChlKTtuJiZuLmZvckVhY2goKGU9PmUodCkpKX19YXN5bmMgZnVuY3Rpb24gJGUoZSl7Y29uc3R7bmFtZXNwYWNlZFRvcGljOnR9PWUsbj15KGUubmFtZXNwYWNlZFRvcGljKSxyPWF3YWl0KG89bixmaW4uSW50ZXJBcHBsaWNhdGlvbkJ1cy5DaGFubmVsLmNyZWF0ZShvKSk7dmFyIG87cmV0dXJuIHIub25Db25uZWN0aW9uKGZ1bmN0aW9uKHtuYW1lc3BhY2VkVG9waWM6ZX0pe3JldHVybiBhc3luYyB0PT57Y29uc3Qgbj1jZS5nZXQoZSk7aWYobilmb3IoY29uc3QgZSBvZiBuKWlmKCFhd2FpdCBlKHQpKXRocm93IHF9fShlKSksci5vbkRpc2Nvbm5lY3Rpb24oX2UodCkpLHIucmVnaXN0ZXIoZyxSZSh0KSksci5yZWdpc3RlcihsLGZ1bmN0aW9uKGUpe3JldHVybiB0PT57Y29uc3Qgbj1rZShlLHQucHJvdmlkZXJJZCx0LmlkKSxyPUxlLmdldChuKTtyJiZyKHQpfX0odCkpLHIucmVnaXN0ZXIoXCIyXCIsRGUodCkpLHIucmVnaXN0ZXIoXCIzXCIseGUodCkpLHIucmVnaXN0ZXIoXCI0XCIsZnVuY3Rpb24oZSl7cmV0dXJuIGFzeW5jKCk9PmxlKGUpfSh0KSksci5yZWdpc3RlcihcIjFcIixDZShlKSksci5yZWdpc3RlcihwLGZ1bmN0aW9uKGUpe3JldHVybiBhc3luYyh0LG4pPT57aWYoIXR8fCF0LnByb3ZpZGVySWR8fCF0LnJlc3VsdClyZXR1cm47Y29uc3Qgcj1NKGUsdC5wcm92aWRlcklkKTtpZighcil0aHJvdyBGO2NvbnN0e29uUmVzdWx0RGlzcGF0Y2g6b309cjtyZXR1cm4gbz8odC5yZXN1bHQuZGlzcGF0Y2hlcklkZW50aXR5PW4sbyh0LnJlc3VsdCkpOnZvaWQgMH19KHQpKSxyfWFzeW5jIGZ1bmN0aW9uIHFlKGUpe2NvbnN0IHQ9c2UoZSk7dmFyIG47bj1lLGllLmRlbGV0ZShuKSxhd2FpdCB0LmRlc3Ryb3koKSxrKGUpfWFzeW5jIGZ1bmN0aW9uIEdlKGUpe2NvbnN0IHQ9KFwic3RyaW5nXCI9PXR5cGVvZiBlP2U6ZT8udG9waWMpfHxmLG49QSgpLHI9aChuLHQpLG89e3RvcGljOnQsbmFtZXNwYWNlOm4sbmFtZXNwYWNlZFRvcGljOnJ9O2xldCBpPWFlKHIpO2l8fChpPWF3YWl0ICRlKG8pLGZ1bmN0aW9uKGUsdCl7aWUuc2V0KGUsdCl9KHIsaSkpO2NvbnN0IHM9dWUuYmluZChudWxsLHIpLGE9RmUuYmluZChudWxsLHIpLGM9Uy5iaW5kKG51bGwsciksZD1SLmJpbmQobnVsbCxyKTtyZXR1cm57Z2V0QWxsUHJvdmlkZXJzOmxlLmJpbmQobnVsbCxyKSxzZWFyY2g6dmUuYmluZChudWxsLG8pLHJlZ2lzdGVyOnBlLmJpbmQobnVsbCxyKSxkZXJlZ2lzdGVyOmdlLmJpbmQobnVsbCxyKSxvblN1YnNjcmlwdGlvbjpkZS5iaW5kKG51bGwsciksb25EaXNjb25uZWN0OkVlLmJpbmQobnVsbCxyKSxvblJlZ2lzdGVyOm0uYmluZChudWxsLHIpLG9uRGVyZWdpc3RlcjpQLmJpbmQobnVsbCxyKSxkaXNwYXRjaDp3ZS5iaW5kKG51bGwsbyksZGlzY29ubmVjdDpxZS5iaW5kKG51bGwscikscmVtb3ZlTGlzdGVuZXI6ZT0+e3MoZSksYShlKSxjKGUpLGQoZSl9fX1jb25zdHtjcmVhdGU6TmV9PW8se3N1YnNjcmliZTpIZX09cixVZT17Y3JlYXRlOk5lLHN1YnNjcmliZTpIZSxkZWZhdWx0VG9waWM6XCJhbGxcIn0sVmU9KCk9Pntjb25zdCBlPXdpbmRvdztlLnNlYXJjaD1VZSxlLmZpbiYmKGUuZmluLlNlYXJjaD1VZSl9LGplPWU9Pntjb25zdCB0PSgpPT57VmUoKSx3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihlLHQpfTtyZXR1cm4gdH07aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyl7VmUoKTtjb25zdCBlPVwibG9hZFwiLHQ9amUoZSk7d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoZSx0KTtjb25zdCBuPVwiRE9NQ29udGVudExvYWRlZFwiLHI9amUobik7d2luZG93LmFkZEV2ZW50TGlzdGVuZXIobixyKX1jb25zdCBLZT1uZXcgTWFwO2FzeW5jIGZ1bmN0aW9uIFhlKCl7YXdhaXQgYXN5bmMgZnVuY3Rpb24oZSl7S2Uuc2V0KGUsYXdhaXQgSGUoe3RvcGljOmUsdXVpZDp1LnE5LldvcmtzcGFjZX0pKX0oYSl9bGV0IEplO2FzeW5jIGZ1bmN0aW9uIFplKGUpe3JldHVybiBhd2FpdCBhc3luYyBmdW5jdGlvbigpe3JldHVybiBKZXx8KEplPVhlKCkpLEplfSgpLEtlLmdldChlKX12YXIgemU9bigzNzU4KTtjb25zdCBRZT1hc3luYyBlPT57aWYoIWUuaWNvbil0aHJvdyBuZXcgRXJyb3IoYCR7ZS5pZH0gcHJvdmlkZXIgbmVlZHMgdG8gaGF2ZSBpY29uIHByb3BlcnR5IGRlZmluZWQuYCk7YXdhaXQoMCxzLmFCKSgpO2NvbnN0IHQ9YXdhaXQgWmUoYSk7dHJ5e2NvbnN0IG49YXdhaXQgdC5yZWdpc3RlcihlKTtyZXR1cm4oMCxpLmNrKSh7YWxsb3dlZDohMH0pLG59Y2F0Y2goZSl7dGhyb3coMCxpLmNrKSh7YWxsb3dlZDohMSxyZWplY3Rpb25Db2RlOmUubWVzc2FnZX0pLGV9fSxZZT1hc3luYyBlPT57YXdhaXQoMCxzLmFCKSgpO3JldHVybihhd2FpdCBaZShhKSkuZGVyZWdpc3RlcihlKX07YXN5bmMgZnVuY3Rpb24gZXQoKXtyZXR1cm4oYXdhaXQoMCxzLlhsKSgpKS5kaXNwYXRjaChzLk1sLlNob3dIb21lLHZvaWQgMCl9YXN5bmMgZnVuY3Rpb24gdHQoKXtyZXR1cm4oYXdhaXQoMCxzLlhsKSgpKS5kaXNwYXRjaChzLk1sLkhpZGVIb21lLHZvaWQgMCl9fSwzMjk4OihlLHQsbik9PntuLmQodCx7dzooKT0+ci53fSk7dmFyIHI9big1MzE2KX0sMzc1ODooZSx0LG4pPT57dmFyIHIsbyxpO24uZCh0LHtQdDooKT0+cix5VzooKT0+byxlbDooKT0+aX0pLGZ1bmN0aW9uKGUpe2UuU3VnZ2VzdGlvbj1cInN1Z2dlc3Rpb25cIn0ocnx8KHI9e30pKSxmdW5jdGlvbihlKXtlLkNvbnRhY3Q9XCJDb250YWN0XCIsZS5DdXN0b209XCJDdXN0b21cIixlLkxpc3Q9XCJMaXN0XCIsZS5QbGFpbj1cIlBsYWluXCIsZS5TaW1wbGVUZXh0PVwiU2ltcGxlVGV4dFwifShvfHwobz17fSkpLGZ1bmN0aW9uKGUpe2UuTXVsdGlTZWxlY3Q9XCJNdWx0aVNlbGVjdFwifShpfHwoaT17fSkpfSw3NTY0OihlLHQsbik9PntuKDMyOTgpLG4oMzc1OCksbig2MTE0KSxuKDIxMDkpfSw2MTE0OihlLHQsbik9Pnt2YXIgcixvO24uZCh0LHtMOigpPT5yLFQ6KCk9Pm99KSxmdW5jdGlvbihlKXtlLlNuYXBzaG90PVwic25hcHNob3RcIixlLk1hbmlmZXN0PVwibWFuaWZlc3RcIixlLlZpZXc9XCJ2aWV3XCIsZS5FeHRlcm5hbD1cImV4dGVybmFsXCJ9KHJ8fChyPXt9KSksZnVuY3Rpb24oZSl7ZS5MYW5kaW5nUGFnZT1cImxhbmRpbmdQYWdlXCIsZS5BcHBHcmlkPVwiYXBwR3JpZFwifShvfHwobz17fSkpfSwyMTA5OihlLHQsbik9PntuLmQodCx7cDY6KCk9PnIsR286KCk9Pm8sYkk6KCk9PmksWko6KCk9PnN9KTtjb25zdCByPXtDb250YWluZXI6XCJDb250YWluZXJcIixCdXR0b246XCJCdXR0b25cIn0sbz17VGV4dDpcIlRleHRcIixJbWFnZTpcIkltYWdlXCIsTGlzdDpcIkxpc3RcIn0saT17Li4uciwuLi5vfTt2YXIgczshZnVuY3Rpb24oZSl7ZS5QcmltYXJ5PVwicHJpbWFyeVwiLGUuU2Vjb25kYXJ5PVwic2Vjb25kYXJ5XCIsZS5UZXh0T25seT1cInRleHRPbmx5XCJ9KHN8fChzPXt9KSl9LDMxNzooZSx0LG4pPT57bi5yKHQpLG4uZCh0LHtBcHBNYW5pZmVzdFR5cGU6KCk9PmkuTCxTdG9yZWZyb250VGVtcGxhdGU6KCk9PmkuVCxkZXJlZ2lzdGVyOigpPT5mLGhpZGU6KCk9PmwscmVnaXN0ZXI6KCk9PnUsc2hvdzooKT0+cH0pO3ZhciByPW4oNjUzMiksbz1uKDc0MDUpO24oNzU2NCk7dmFyIGk9big2MTE0KTtsZXQgcztjb25zdCBhPW5ldyBNYXAsYz1lPT57aWYoIWEuaGFzKGUpKXRocm93IG5ldyBFcnJvcihgU3RvcmVmcm9udCBQcm92aWRlciB3aXRoIGlkICR7ZX0gaXMgbm90IHJlZ2lzdGVyZWRgKTtyZXR1cm4gYS5nZXQoZSl9LGQ9YXN5bmMgZT0+e2NvbnN0IHQ9YXdhaXQoMCxvLlhsKSgpO2lmKGEuaGFzKGUuaWQpKXRocm93IG5ldyBFcnJvcihgU3RvcmVmcm9udCBwcm92aWRlciB3aXRoIGlkICR7ZS5pZH0gYWxyZWFkeSByZWdpc3RlcmVkYCk7cmV0dXJuIGEuc2V0KGUuaWQsZSksKGU9PntlLmlzU3RvcmVmcm9udEFjdGlvbnNSZWdpc3RlcmVkfHwoZS5pc1N0b3JlZnJvbnRBY3Rpb25zUmVnaXN0ZXJlZD0hMCxlLnJlZ2lzdGVyKG8uTWwuR2V0U3RvcmVmcm9udFByb3ZpZGVyQXBwcywoZT0+YyhlKS5nZXRBcHBzKCkpKSxlLnJlZ2lzdGVyKG8uTWwuR2V0U3RvcmVmcm9udFByb3ZpZGVyRm9vdGVyLChlPT5jKGUpLmdldEZvb3RlcigpKSksZS5yZWdpc3RlcihvLk1sLkdldFN0b3JlZnJvbnRQcm92aWRlckxhbmRpbmdQYWdlLChlPT5jKGUpLmdldExhbmRpbmdQYWdlKCkpKSxlLnJlZ2lzdGVyKG8uTWwuR2V0U3RvcmVmcm9udFByb3ZpZGVyTmF2aWdhdGlvbiwoZT0+YyhlKS5nZXROYXZpZ2F0aW9uKCkpKSxlLnJlZ2lzdGVyKG8uTWwuTGF1bmNoU3RvcmVmcm9udFByb3ZpZGVyQXBwLCgoe2lkOmUsYXBwOnR9KT0+YyhlKS5sYXVuY2hBcHAodCkpKSl9KSh0KSx0LmRpc3BhdGNoKG8uTWwuUmVnaXN0ZXJTdG9yZWZyb250UHJvdmlkZXIsZSl9LHU9ZT0+KHM9ZChlKSwoMCxyLmQ5KSh7YWxsb3dlZDohMH0pLHMpLGY9YXN5bmMgZT0+e2F3YWl0IHMsYS5kZWxldGUoZSk7cmV0dXJuKGF3YWl0KDAsby5YbCkoKSkuZGlzcGF0Y2goby5NbC5EZXJlZ2lzdGVyU3RvcmVmcm9udFByb3ZpZGVyLGUpfSxsPWFzeW5jKCk9Pnthd2FpdCBzLGF3YWl0KDAsby5hQikoKSxhd2FpdChhc3luYygpPT4oYXdhaXQoMCxvLkRtKSgpKS5kaXNwYXRjaChvLk1sLkhpZGVTdG9yZWZyb250LHZvaWQgMCkpKCl9LHA9YXN5bmMoKT0+e2F3YWl0IHMsYXdhaXQoMCxvLmFCKSgpLGF3YWl0KGFzeW5jKCk9Pihhd2FpdCgwLG8uRG0pKCkpLmRpc3BhdGNoKG8uTWwuU2hvd1N0b3JlZnJvbnQsbnVsbCkpKCl9fSw3NDA1OihlLHQsbik9PntuLmQodCx7TWw6KCk9PnMsRG06KCk9PmEsWGw6KCk9PmYsYUI6KCk9PnV9KTt2YXIgcj1uKDY2NzgpO2NvbnN0IG89ci5BeCYmXCJjb21wbGV0ZVwiIT09ZG9jdW1lbnQucmVhZHlTdGF0ZSYmbmV3IFByb21pc2UoKGU9PmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJyZWFkeXN0YXRlY2hhbmdlXCIsKCgpPT57XCJjb21wbGV0ZVwiPT09ZG9jdW1lbnQucmVhZHlTdGF0ZSYmZSgpfSkpKSk7dmFyIGk9bigxMjEpO3ZhciBzOyFmdW5jdGlvbihlKXtlLlJlZ2lzdGVyU3RvcmVmcm9udFByb3ZpZGVyPVwicmVnaXN0ZXItc3RvcmVmcm9udC1wcm92aWRlclwiLGUuRGVyZWdpc3RlclN0b3JlZnJvbnRQcm92aWRlcj1cImRlcmVnaXN0ZXItc3RvcmVmcm9udC1wcm92aWRlclwiLGUuR2V0U3RvcmVmcm9udFByb3ZpZGVycz1cImdldC1zdG9yZWZyb250LXByb3ZpZGVyc1wiLGUuSGlkZVN0b3JlZnJvbnQ9XCJoaWRlLXN0b3JlZnJvbnRcIixlLkdldFN0b3JlZnJvbnRQcm92aWRlckFwcHM9XCJnZXQtc3RvcmVmcm9udC1wcm92aWRlci1hcHBzXCIsZS5HZXRTdG9yZWZyb250UHJvdmlkZXJMYW5kaW5nUGFnZT1cImdldC1zdG9yZWZyb250LXByb3ZpZGVyLWxhbmRpbmctcGFnZVwiLGUuR2V0U3RvcmVmcm9udFByb3ZpZGVyRm9vdGVyPVwiZ2V0LXN0b3JlZnJvbnQtcHJvdmlkZXItZm9vdGVyXCIsZS5HZXRTdG9yZWZyb250UHJvdmlkZXJOYXZpZ2F0aW9uPVwiZ2V0LXN0b3JlZnJvbnQtcHJvdmlkZXItbmF2aWdhdGlvblwiLGUuTGF1bmNoU3RvcmVmcm9udFByb3ZpZGVyQXBwPVwibGF1bmNoLXN0b3JlZnJvbnQtcHJvdmlkZXItYXBwXCIsZS5TaG93U3RvcmVmcm9udD1cInNob3ctc3RvcmVmcm9udFwiLGUuQ3JlYXRlU3RvcmVmcm9udFdpbmRvdz1cImNyZWF0ZS1zdG9yZWZyb250LXdpbmRvd1wiLGUuU2hvd0hvbWU9XCJzaG93LWhvbWVcIixlLkhpZGVIb21lPVwiaGlkZS1ob21lXCIsZS5Bc3NpZ25Ib21lU2VhcmNoQ29udGV4dD1cImFzc2lnbi1ob21lLXNlYXJjaC1jb250ZXh0XCIsZS5HZXRMZWdhY3lQYWdlcz1cImdldC1sZWdhY3ktcGFnZXNcIixlLkdldExlZ2FjeVdvcmtzcGFjZXM9XCJnZXQtbGVnYWN5LXdvcmtzcGFjZXNcIixlLkdldENvbXB1dGVkUGxhdGZvcm1UaGVtZT1cImdldC1jb21wdXRlZC1wbGF0Zm9ybS10aGVtZVwifShzfHwocz17fSkpO2NvbnN0IGE9ZnVuY3Rpb24oZSl7bGV0IHQ7cmV0dXJuKCk9PntpZighci5zUyl0aHJvdyBuZXcgRXJyb3IoXCJnZXRDaGFubmVsQ2xpZW50IGNhbm5vdCBiZSB1c2VkIG91dHNpZGUgYW4gT3BlbkZpbiBlbnYuIEF2b2lkIHVzaW5nIHRoaXMgbWV0aG9kIGR1cmluZyBwcmUtcmVuZGVyaW5nLlwiKTtyZXR1cm4gdHx8KHQ9KGFzeW5jKCk9Pnthd2FpdCBvO2NvbnN0IG49YXdhaXQgZmluLkludGVyQXBwbGljYXRpb25CdXMuQ2hhbm5lbC5jb25uZWN0KGUpO3JldHVybiBuLm9uRGlzY29ubmVjdGlvbigoYXN5bmMoKT0+e3Q9dm9pZCAwfSkpLG59KSgpLnRoZW4oKGU9PmUpKS5jYXRjaCgobj0+e3Rocm93IHQ9dm9pZCAwLG5ldyBFcnJvcihgZmFpbGVkIHRvIGNvbm5lY3QgdG8gY2hhbm5lbCBwcm92aWRlciAke2V9OiAke259YCl9KSkpLHR9fShcIl9fb2Zfd29ya3NwYWNlX3Byb3RvY29sX19cIiksYz1cImlzTGF1bmNoZWRWaWFMaWJcIixkPWU9Pntjb25zdCB0PW5ldyBVUkwoZSk7cmV0dXJuIHQuc2VhcmNoUGFyYW1zLmFwcGVuZChjLFwidHJ1ZVwiKSx0LnRvU3RyaW5nKCl9LHU9YXN5bmMoKT0+e2lmKCFhd2FpdCgwLGkuSlYpKGkuaVcpKXJldHVybihyLlpLfHwtMT09PW5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIldpblwiKSkmJmF3YWl0IGZpbi5BcHBsaWNhdGlvbi5zdGFydEZyb21NYW5pZmVzdChkKHIuYVcpKSxmaW4uU3lzdGVtLm9wZW5VcmxXaXRoQnJvd3NlcihkKHIuR1gpKX0sZj1hc3luYygpPT4oYXdhaXQgdSgpLGEoKSl9LDU4MDY6KGUsdCxuKT0+e24uZCh0LHtxOTooKT0+cn0pO3ZhciByLG8saSxzPW4oNjY3OCk7IWZ1bmN0aW9uKGUpe2UuV29ya3NwYWNlPVwib3BlbmZpbi1icm93c2VyXCJ9KHJ8fChyPXt9KSksZnVuY3Rpb24oZSl7ZS5SdW5SZXF1ZXN0ZWQ9XCJydW4tcmVxdWVzdGVkXCIsZS5XaW5kb3dPcHRpb25zQ2hhbmdlZD1cIndpbmRvdy1vcHRpb25zLWNoYW5nZWRcIixlLldpbmRvd0Nsb3NlZD1cIndpbmRvdy1jbG9zZWRcIixlLldpbmRvd0NyZWF0ZWQ9XCJ3aW5kb3ctY3JlYXRlZFwifShvfHwobz17fSkpLGZ1bmN0aW9uKGUpe2UuRmluUHJvdG9jb2w9XCJmaW4tcHJvdG9jb2xcIn0oaXx8KGk9e30pKTtzLkFCLHMuQUIsci5Xb3Jrc3BhY2Usci5Xb3Jrc3BhY2V9LDY2Nzg6KGUsdCxuKT0+e3ZhciByO24uZCh0LHtzUzooKT0+byxBeDooKT0+aSxBQjooKT0+YSxvQzooKT0+YyxaSzooKT0+ZCxHWDooKT0+dSxhVzooKT0+Zix1MDooKT0+cH0pLGZ1bmN0aW9uKGUpe2UuTG9jYWw9XCJsb2NhbFwiLGUuRGV2PVwiZGV2XCIsZS5TdGFnaW5nPVwic3RhZ2luZ1wiLGUuUHJvZD1cInByb2RcIn0ocnx8KHI9e30pKTtjb25zdCBvPVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBmaW4saT0oXCJ1bmRlZmluZWRcIj09dHlwZW9mIHByb2Nlc3N8fHByb2Nlc3MuZW52Py5KRVNUX1dPUktFUl9JRCxcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93KSxzPWk/d2luZG93Lm9yaWdpbjpyLkxvY2FsLGE9byYmZmluLm1lLnV1aWQsYz1vJiZmaW4ubWUubmFtZSxkPShvJiZmaW4ubWUuZW50aXR5VHlwZSxcInByb2RcIj09PXIuTG9jYWwpLHU9KHIuRGV2LHIuU3RhZ2luZyxyLlByb2QsXCJmaW5zOi8vc3lzdGVtLWFwcHMvd29ya3NwYWNlXCIpLGY9XCJodHRwczovL2Nkbi5vcGVuZmluLmNvL3dvcmtzcGFjZS83LjMuMTAvYXBwLmpzb25cIixsPWU9PmUuc3RhcnRzV2l0aChcImh0dHA6Ly9cIil8fGUuc3RhcnRzV2l0aChcImh0dHBzOi8vXCIpP2U6cytlLHA9KGwoXCJodHRwczovL2Nkbi5vcGVuZmluLmNvL3dvcmtzcGFjZS83LjMuMTBcIiksbChcImh0dHBzOi8vY2RuLm9wZW5maW4uY28vd29ya3NwYWNlLzcuMy4xMFwiKSxcInVuZGVmaW5lZFwiIT10eXBlb2YgV09SS1NQQUNFX0RPQ1NfUExBVEZPUk1fVVJMJiZsKFdPUktTUEFDRV9ET0NTX1BMQVRGT1JNX1VSTCksXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFdPUktTUEFDRV9ET0NTX0NMSUVOVF9VUkwmJmwoV09SS1NQQUNFX0RPQ1NfQ0xJRU5UX1VSTCksXCI3LjMuMTBcIil9LDY1MzI6KGUsdCxuKT0+e24uZCh0LHtjazooKT0+YSxkOTooKT0+Y30pO3ZhciByLG89big2Njc4KSxpPW4oMTIxKTshZnVuY3Rpb24oZSl7ZS5Ccm93c2VyPVwiQnJvd3NlclwiLGUuSG9tZT1cIkhvbWVcIixlLk5vdGlmaWNhdGlvbj1cIk5vdGlmaWNhdGlvblwiLGUuU3RvcmVmcm9udD1cIlN0b3JlZnJvbnRcIixlLlBsYXRmb3JtPVwiUGxhdGZvcm1cIixlLlRoZW1pbmc9XCJUaGVtaW5nXCJ9KHJ8fChyPXt9KSk7Y29uc3Qgcz1hc3luYyhlLHQpPT57Y29uc3Qgbj17YXBpVmVyc2lvbjp0LmFwaVZlcnNpb258fG8udTAsY29tcG9uZW50TmFtZTplLGNvbXBvbmVudFZlcnNpb246by51MCwuLi50fTtmaW4uU3lzdGVtLnJlZ2lzdGVyVXNhZ2Uoe3R5cGU6XCJ3b3Jrc3BhY2UtbGljZW5zaW5nXCIsZGF0YTpufSl9LGE9YXN5bmMgZT0+e2kuT0kudXVpZD09PWkuR2kudXVpZCYmaS5PSS5uYW1lPT09aS5HaS5uYW1lfHxzKHIuSG9tZSxlKX0sYz1hc3luYyBlPT57cyhyLlN0b3JlZnJvbnQsZSl9fSwxMjE6KGUsdCxuKT0+e24uZCh0LHtHaTooKT0+YyxPSTooKT0+ZCxpVzooKT0+dSxKVjooKT0+Zn0pO3ZhciByLG8saT1uKDU4MDYpLHM9big2Njc4KTshZnVuY3Rpb24oZSl7ZS5Ib21lPVwib3BlbmZpbi1ob21lXCIsZS5Eb2NrPVwib3BlbmZpbi1kb2NrXCIsZS5TdG9yZWZyb250PVwib3BlbmZpbi1zdG9yZWZyb250XCIsZS5Ib21lSW50ZXJuYWw9XCJvcGVuZmluLWhvbWUtaW50ZXJuYWxcIixlLkJyb3dzZXJNZW51PVwib3BlbmZpbi1icm93c2VyLW1lbnVcIixlLkJyb3dzZXJJbmRpY2F0b3I9XCJvcGVuZmluLWJyb3dzZXItaW5kaWNhdG9yXCIsZS5Ccm93c2VyV2luZG93PVwiaW50ZXJuYWwtZ2VuZXJhdGVkLXdpbmRvd1wifShyfHwocj17fSkpLGZ1bmN0aW9uKGUpe2UuU2hvd249XCJzaG93blwiLGUuQm91bmRzQ2hhbmdlZD1cImJvdW5kcy1jaGFuZ2VkXCIsZS5MYXlvdXRSZWFkeT1cImxheW91dC1yZWFkeVwiLGUuRW5kVXNlckJvdW5kc0NoYW5naW5nPVwiZW5kLXVzZXItYm91bmRzLWNoYW5naW5nXCIsZS5CbHVycmVkPVwiYmx1cnJlZFwiLGUuQ2xvc2VSZXF1ZXN0ZWQ9XCJjbG9zZS1yZXF1ZXN0ZWRcIixlLkZvY3VzZWQ9XCJmb2N1c2VkXCIsZS5TaG93UmVxdWVzdGVkPVwic2hvdy1yZXF1ZXN0ZWRcIixlLlZpZXdDcmFzaGVkPVwidmlldy1jcmFzaGVkXCIsZS5WaWV3QXR0YWNoZWQ9XCJ2aWV3LWF0dGFjaGVkXCIsZS5WaWV3RGV0YWNoZWQ9XCJ2aWV3LWRldGFjaGVkXCIsZS5WaWV3UGFnZVRpdGxlVXBkYXRlZD1cInZpZXctcGFnZS10aXRsZS11cGRhdGVkXCIsZS5WaWV3RGVzdHJveWVkPVwidmlldy1kZXN0cm95ZWRcIixlLk9wdGlvbnNDaGFuZ2VkPVwib3B0aW9ucy1jaGFuZ2VkXCJ9KG98fChvPXt9KSk7ZnVuY3Rpb24gYShlKXtpZighcy5zUyl0aHJvdyBuZXcgRXJyb3IoXCJnZXRPRldpbmRvdyBjYW4gb25seSBiZSB1c2VkIGluIGFuIE9wZW5GaW4gZW52LiBBdm9pZCBjYWxsaW5nIHRoaXMgbWV0aG9kIGR1cmluZyBwcmUtcmVuZGVyaW5nLlwiKTtyZXR1cm4gZmluLldpbmRvdy53cmFwU3luYyhlKX1jb25zdCBjPXtuYW1lOnMub0MsdXVpZDpzLkFCfTtjb25zdCBkPXtuYW1lOnIuSG9tZSx1dWlkOmkucTkuV29ya3NwYWNlfSx1PShyLkRvY2ssaS5xOS5Xb3Jrc3BhY2Usci5TdG9yZWZyb250LGkucTkuV29ya3NwYWNlLHtuYW1lOmkucTkuV29ya3NwYWNlLHV1aWQ6aS5xOS5Xb3Jrc3BhY2V9KTtjb25zdCBmPWU9PmEoZSkuZ2V0T3B0aW9ucygpLnRoZW4oKCgpPT4hMCkpLmNhdGNoKCgoKT0+ITEpKX0sNTMxNjooZSx0LG4pPT57dmFyIHIsbztuLmQodCx7RDooKT0+cix3OigpPT5vfSksZnVuY3Rpb24oZSl7ZS5GZXRjaGluZz1cImZldGNoaW5nXCIsZS5GZXRjaGVkPVwiZmV0Y2hlZFwiLGUuQ29tcGxldGU9XCJjb21wbGV0ZVwifShyfHwocj17fSkpLGZ1bmN0aW9uKGUpe2UuQWN0aXZlPVwiYWN0aXZlXCIsZS5EZWZhdWx0PVwiZGVmYXVsdFwifShvfHwobz17fSkpfX0sdD17fTtmdW5jdGlvbiBuKHIpe3ZhciBvPXRbcl07aWYodm9pZCAwIT09bylyZXR1cm4gby5leHBvcnRzO3ZhciBpPXRbcl09e2V4cG9ydHM6e319O3JldHVybiBlW3JdKGksaS5leHBvcnRzLG4pLGkuZXhwb3J0c31uLmQ9KGUsdCk9Pntmb3IodmFyIHIgaW4gdCluLm8odCxyKSYmIW4ubyhlLHIpJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxyLHtlbnVtZXJhYmxlOiEwLGdldDp0W3JdfSl9LG4ubz0oZSx0KT0+T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCksbi5yPWU9PntcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfTt2YXIgcj17fTsoKCk9PntuLnIociksbi5kKHIse0FwcE1hbmlmZXN0VHlwZTooKT0+cC5MLEJ1dHRvblN0eWxlOigpPT5mLlpKLENMSUFjdGlvbjooKT0+bC5QdCxDTElGaWx0ZXJPcHRpb25UeXBlOigpPT5sLmVsLENMSVRlbXBsYXRlOigpPT5sLnlXLENvbnRhaW5lclRlbXBsYXRlRnJhZ21lbnROYW1lczooKT0+Zi5wNixIb21lOigpPT5vLExlZ2FjeTooKT0+ZSxQcmVzZW50YXRpb25UZW1wbGF0ZUZyYWdtZW50TmFtZXM6KCk9PmYuR28sU2VhcmNoVGFnQmFja2dyb3VuZDooKT0+dS53LFN0b3JlZnJvbnQ6KCk9PmQsU3RvcmVmcm9udFRlbXBsYXRlOigpPT5wLlQsVGVtcGxhdGVGcmFnbWVudFR5cGVzOigpPT5mLmJJfSk7dmFyIGU9e307bi5yKGUpLG4uZChlLHtnZXRQYWdlczooKT0+YSxnZXRXb3Jrc3BhY2VzOigpPT5jfSk7dmFyIHQsbz1uKDMxMzMpO24oNjY3OCksbigxMjEpOyFmdW5jdGlvbihlKXtlLlRhYkNyZWF0ZWQ9XCJ0YWItY3JlYXRlZFwiLGUuQ29udGFpbmVyQ3JlYXRlZD1cImNvbnRhaW5lci1jcmVhdGVkXCIsZS5Db250YWluZXJSZXNpemVkPVwiY29udGFpbmVyLXJlc2l6ZWRcIn0odHx8KHQ9e30pKTtuZXcgTWFwO3ZhciBpOyFmdW5jdGlvbihlKXtlLkN1cnJlbnRXb3Jrc3BhY2VJZD1cImN1cnJlbnRXb3Jrc3BhY2VJZFwiLGUuTGFzdEZvY3VzZWRCcm93c2VyV2luZG93PVwibGFzdEZvY3VzZWRCcm93c2VyV2luZG93XCIsZS5NYWNoaW5lTmFtZT1cIm1hY2hpbmVOYW1lXCIsZS5OZXdUYWJQYWdlTGF5b3V0PVwiTmV3VGFiUGFnZUxheW91dFwiLGUuTmV3VGFiUGFnZVNvcnQ9XCJOZXdUYWJQYWdlU29ydFwifShpfHwoaT17fSkpO3ZhciBzPW4oNzQwNSk7Y29uc3QgYT0oKT0+YXN5bmMgZnVuY3Rpb24oKXtyZXR1cm4oYXdhaXQoMCxzLkRtKSgpKS5kaXNwYXRjaChzLk1sLkdldExlZ2FjeVBhZ2VzLHZvaWQgMCl9KCksYz0oKT0+KGFzeW5jKCk9Pihhd2FpdCgwLHMuRG0pKCkpLmRpc3BhdGNoKHMuTWwuR2V0TGVnYWN5V29ya3NwYWNlcyx2b2lkIDApKSgpO3ZhciBkPW4oMzE3KSx1PW4oMzI5OCksZj1uKDIxMDkpLGw9bigzNzU4KSxwPW4oNjExNCl9KSgpLG1vZHVsZS5leHBvcnRzPXJ9KSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBEYXRhVmlldyA9IGdldE5hdGl2ZShyb290LCAnRGF0YVZpZXcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBEYXRhVmlldztcbiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdNYXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXA7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFByb21pc2UgPSBnZXROYXRpdmUocm9vdCwgJ1Byb21pc2UnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm9taXNlO1xuIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBTZXQgPSBnZXROYXRpdmUocm9vdCwgJ1NldCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNldDtcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBTeW1ib2wgPSByb290LlN5bWJvbDtcblxubW9kdWxlLmV4cG9ydHMgPSBTeW1ib2w7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFdlYWtNYXAgPSBnZXROYXRpdmUocm9vdCwgJ1dlYWtNYXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBXZWFrTWFwO1xuIiwidmFyIGJhc2VUaW1lcyA9IHJlcXVpcmUoJy4vX2Jhc2VUaW1lcycpLFxuICAgIGlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9pc0FyZ3VtZW50cycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0J1ZmZlciA9IHJlcXVpcmUoJy4vaXNCdWZmZXInKSxcbiAgICBpc0luZGV4ID0gcmVxdWlyZSgnLi9faXNJbmRleCcpLFxuICAgIGlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vaXNUeXBlZEFycmF5Jyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiB0aGUgYXJyYXktbGlrZSBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW5oZXJpdGVkIFNwZWNpZnkgcmV0dXJuaW5nIGluaGVyaXRlZCBwcm9wZXJ0eSBuYW1lcy5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TGlrZUtleXModmFsdWUsIGluaGVyaXRlZCkge1xuICB2YXIgaXNBcnIgPSBpc0FycmF5KHZhbHVlKSxcbiAgICAgIGlzQXJnID0gIWlzQXJyICYmIGlzQXJndW1lbnRzKHZhbHVlKSxcbiAgICAgIGlzQnVmZiA9ICFpc0FyciAmJiAhaXNBcmcgJiYgaXNCdWZmZXIodmFsdWUpLFxuICAgICAgaXNUeXBlID0gIWlzQXJyICYmICFpc0FyZyAmJiAhaXNCdWZmICYmIGlzVHlwZWRBcnJheSh2YWx1ZSksXG4gICAgICBza2lwSW5kZXhlcyA9IGlzQXJyIHx8IGlzQXJnIHx8IGlzQnVmZiB8fCBpc1R5cGUsXG4gICAgICByZXN1bHQgPSBza2lwSW5kZXhlcyA/IGJhc2VUaW1lcyh2YWx1ZS5sZW5ndGgsIFN0cmluZykgOiBbXSxcbiAgICAgIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7XG5cbiAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgaWYgKChpbmhlcml0ZWQgfHwgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwga2V5KSkgJiZcbiAgICAgICAgIShza2lwSW5kZXhlcyAmJiAoXG4gICAgICAgICAgIC8vIFNhZmFyaSA5IGhhcyBlbnVtZXJhYmxlIGBhcmd1bWVudHMubGVuZ3RoYCBpbiBzdHJpY3QgbW9kZS5cbiAgICAgICAgICAga2V5ID09ICdsZW5ndGgnIHx8XG4gICAgICAgICAgIC8vIE5vZGUuanMgMC4xMCBoYXMgZW51bWVyYWJsZSBub24taW5kZXggcHJvcGVydGllcyBvbiBidWZmZXJzLlxuICAgICAgICAgICAoaXNCdWZmICYmIChrZXkgPT0gJ29mZnNldCcgfHwga2V5ID09ICdwYXJlbnQnKSkgfHxcbiAgICAgICAgICAgLy8gUGhhbnRvbUpTIDIgaGFzIGVudW1lcmFibGUgbm9uLWluZGV4IHByb3BlcnRpZXMgb24gdHlwZWQgYXJyYXlzLlxuICAgICAgICAgICAoaXNUeXBlICYmIChrZXkgPT0gJ2J1ZmZlcicgfHwga2V5ID09ICdieXRlTGVuZ3RoJyB8fCBrZXkgPT0gJ2J5dGVPZmZzZXQnKSkgfHxcbiAgICAgICAgICAgLy8gU2tpcCBpbmRleCBwcm9wZXJ0aWVzLlxuICAgICAgICAgICBpc0luZGV4KGtleSwgbGVuZ3RoKVxuICAgICAgICApKSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUxpa2VLZXlzO1xuIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ubWFwYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWVcbiAqIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBtYXBwZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFycmF5TWFwKGFycmF5LCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobGVuZ3RoKTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheU1hcDtcbiIsIi8qKlxuICogQ29udmVydHMgYW4gQVNDSUkgYHN0cmluZ2AgdG8gYW4gYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGFzY2lpVG9BcnJheShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5zcGxpdCgnJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXNjaWlUb0FycmF5O1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGdldFJhd1RhZyA9IHJlcXVpcmUoJy4vX2dldFJhd1RhZycpLFxuICAgIG9iamVjdFRvU3RyaW5nID0gcmVxdWlyZSgnLi9fb2JqZWN0VG9TdHJpbmcnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG51bGxUYWcgPSAnW29iamVjdCBOdWxsXScsXG4gICAgdW5kZWZpbmVkVGFnID0gJ1tvYmplY3QgVW5kZWZpbmVkXSc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHN5bVRvU3RyaW5nVGFnID0gU3ltYm9sID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRUYWdgIHdpdGhvdXQgZmFsbGJhY2tzIGZvciBidWdneSBlbnZpcm9ubWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkVGFnIDogbnVsbFRhZztcbiAgfVxuICByZXR1cm4gKHN5bVRvU3RyaW5nVGFnICYmIHN5bVRvU3RyaW5nVGFnIGluIE9iamVjdCh2YWx1ZSkpXG4gICAgPyBnZXRSYXdUYWcodmFsdWUpXG4gICAgOiBvYmplY3RUb1N0cmluZyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldFRhZztcbiIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNBcmd1bWVudHNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqL1xuZnVuY3Rpb24gYmFzZUlzQXJndW1lbnRzKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IGFyZ3NUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzQXJndW1lbnRzO1xuIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc01hc2tlZCA9IHJlcXVpcmUoJy4vX2lzTWFza2VkJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgdG9Tb3VyY2UgPSByZXF1aXJlKCcuL190b1NvdXJjZScpO1xuXG4vKipcbiAqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGBcbiAqIFtzeW50YXggY2hhcmFjdGVyc10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcGF0dGVybnMpLlxuICovXG52YXIgcmVSZWdFeHBDaGFyID0gL1tcXFxcXiQuKis/KClbXFxde318XS9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaG9zdCBjb25zdHJ1Y3RvcnMgKFNhZmFyaSkuICovXG52YXIgcmVJc0hvc3RDdG9yID0gL15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgICBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBpZiBhIG1ldGhvZCBpcyBuYXRpdmUuICovXG52YXIgcmVJc05hdGl2ZSA9IFJlZ0V4cCgnXicgK1xuICBmdW5jVG9TdHJpbmcuY2FsbChoYXNPd25Qcm9wZXJ0eSkucmVwbGFjZShyZVJlZ0V4cENoYXIsICdcXFxcJCYnKVxuICAucmVwbGFjZSgvaGFzT3duUHJvcGVydHl8KGZ1bmN0aW9uKS4qPyg/PVxcXFxcXCgpfCBmb3IgLis/KD89XFxcXFxcXSkvZywgJyQxLio/JykgKyAnJCdcbik7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNOYXRpdmVgIHdpdGhvdXQgYmFkIHNoaW0gY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbmF0aXZlIGZ1bmN0aW9uLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTmF0aXZlKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpIHx8IGlzTWFza2VkKHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcGF0dGVybiA9IGlzRnVuY3Rpb24odmFsdWUpID8gcmVJc05hdGl2ZSA6IHJlSXNIb3N0Q3RvcjtcbiAgcmV0dXJuIHBhdHRlcm4udGVzdCh0b1NvdXJjZSh2YWx1ZSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc05hdGl2ZTtcbiIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKiBVc2VkIHRvIGlkZW50aWZ5IGB0b1N0cmluZ1RhZ2AgdmFsdWVzIG9mIHR5cGVkIGFycmF5cy4gKi9cbnZhciB0eXBlZEFycmF5VGFncyA9IHt9O1xudHlwZWRBcnJheVRhZ3NbZmxvYXQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1tmbG9hdDY0VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQ4VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2ludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50OFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDhDbGFtcGVkVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDMyVGFnXSA9IHRydWU7XG50eXBlZEFycmF5VGFnc1thcmdzVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2FycmF5VGFnXSA9XG50eXBlZEFycmF5VGFnc1thcnJheUJ1ZmZlclRhZ10gPSB0eXBlZEFycmF5VGFnc1tib29sVGFnXSA9XG50eXBlZEFycmF5VGFnc1tkYXRhVmlld1RhZ10gPSB0eXBlZEFycmF5VGFnc1tkYXRlVGFnXSA9XG50eXBlZEFycmF5VGFnc1tlcnJvclRhZ10gPSB0eXBlZEFycmF5VGFnc1tmdW5jVGFnXSA9XG50eXBlZEFycmF5VGFnc1ttYXBUYWddID0gdHlwZWRBcnJheVRhZ3NbbnVtYmVyVGFnXSA9XG50eXBlZEFycmF5VGFnc1tvYmplY3RUYWddID0gdHlwZWRBcnJheVRhZ3NbcmVnZXhwVGFnXSA9XG50eXBlZEFycmF5VGFnc1tzZXRUYWddID0gdHlwZWRBcnJheVRhZ3Nbc3RyaW5nVGFnXSA9XG50eXBlZEFycmF5VGFnc1t3ZWFrTWFwVGFnXSA9IGZhbHNlO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzVHlwZWRBcnJheWAgd2l0aG91dCBOb2RlLmpzIG9wdGltaXphdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNUeXBlZEFycmF5KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmXG4gICAgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhIXR5cGVkQXJyYXlUYWdzW2Jhc2VHZXRUYWcodmFsdWUpXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNUeXBlZEFycmF5O1xuIiwidmFyIGlzUHJvdG90eXBlID0gcmVxdWlyZSgnLi9faXNQcm90b3R5cGUnKSxcbiAgICBuYXRpdmVLZXlzID0gcmVxdWlyZSgnLi9fbmF0aXZlS2V5cycpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmtleXNgIHdoaWNoIGRvZXNuJ3QgdHJlYXQgc3BhcnNlIGFycmF5cyBhcyBkZW5zZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYmFzZUtleXMob2JqZWN0KSB7XG4gIGlmICghaXNQcm90b3R5cGUob2JqZWN0KSkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzKG9iamVjdCk7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYga2V5ICE9ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUtleXM7XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRpbWVzYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHNcbiAqIG9yIG1heCBhcnJheSBsZW5ndGggY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIGludm9rZSBgaXRlcmF0ZWVgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRpbWVzKG4sIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobik7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBuKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGluZGV4KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VUaW1lcztcbiIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udW5hcnlgIHdpdGhvdXQgc3VwcG9ydCBmb3Igc3RvcmluZyBtZXRhZGF0YS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FwIGFyZ3VtZW50cyBmb3IuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBjYXBwZWQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VVbmFyeShmdW5jKSB7XG4gIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBmdW5jKHZhbHVlKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVW5hcnk7XG4iLCJ2YXIgYXJyYXlNYXAgPSByZXF1aXJlKCcuL19hcnJheU1hcCcpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnZhbHVlc2AgYW5kIGBfLnZhbHVlc0luYCB3aGljaCBjcmVhdGVzIGFuXG4gKiBhcnJheSBvZiBgb2JqZWN0YCBwcm9wZXJ0eSB2YWx1ZXMgY29ycmVzcG9uZGluZyB0byB0aGUgcHJvcGVydHkgbmFtZXNcbiAqIG9mIGBwcm9wc2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl9IHByb3BzIFRoZSBwcm9wZXJ0eSBuYW1lcyB0byBnZXQgdmFsdWVzIGZvci5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IHZhbHVlcy5cbiAqL1xuZnVuY3Rpb24gYmFzZVZhbHVlcyhvYmplY3QsIHByb3BzKSB7XG4gIHJldHVybiBhcnJheU1hcChwcm9wcywgZnVuY3Rpb24oa2V5KSB7XG4gICAgcmV0dXJuIG9iamVjdFtrZXldO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVmFsdWVzO1xuIiwiLyoqXG4gKiBDb3BpZXMgdGhlIHZhbHVlcyBvZiBgc291cmNlYCB0byBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBzb3VyY2UgVGhlIGFycmF5IHRvIGNvcHkgdmFsdWVzIGZyb20uXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXk9W11dIFRoZSBhcnJheSB0byBjb3B5IHZhbHVlcyB0by5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBjb3B5QXJyYXkoc291cmNlLCBhcnJheSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHNvdXJjZS5sZW5ndGg7XG5cbiAgYXJyYXkgfHwgKGFycmF5ID0gQXJyYXkobGVuZ3RoKSk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYXJyYXlbaW5kZXhdID0gc291cmNlW2luZGV4XTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29weUFycmF5O1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvdmVycmVhY2hpbmcgY29yZS1qcyBzaGltcy4gKi9cbnZhciBjb3JlSnNEYXRhID0gcm9vdFsnX19jb3JlLWpzX3NoYXJlZF9fJ107XG5cbm1vZHVsZS5leHBvcnRzID0gY29yZUpzRGF0YTtcbiIsIi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbm1vZHVsZS5leHBvcnRzID0gZnJlZUdsb2JhbDtcbiIsInZhciBiYXNlSXNOYXRpdmUgPSByZXF1aXJlKCcuL19iYXNlSXNOYXRpdmUnKSxcbiAgICBnZXRWYWx1ZSA9IHJlcXVpcmUoJy4vX2dldFZhbHVlJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbmF0aXZlIGZ1bmN0aW9uIGF0IGBrZXlgIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIG1ldGhvZCB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZnVuY3Rpb24gaWYgaXQncyBuYXRpdmUsIGVsc2UgYHVuZGVmaW5lZGAuXG4gKi9cbmZ1bmN0aW9uIGdldE5hdGl2ZShvYmplY3QsIGtleSkge1xuICB2YXIgdmFsdWUgPSBnZXRWYWx1ZShvYmplY3QsIGtleSk7XG4gIHJldHVybiBiYXNlSXNOYXRpdmUodmFsdWUpID8gdmFsdWUgOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TmF0aXZlO1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByYXcgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHN5bVRvU3RyaW5nVGFnKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcblxuICB0cnkge1xuICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UmF3VGFnO1xuIiwidmFyIERhdGFWaWV3ID0gcmVxdWlyZSgnLi9fRGF0YVZpZXcnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKSxcbiAgICBQcm9taXNlID0gcmVxdWlyZSgnLi9fUHJvbWlzZScpLFxuICAgIFNldCA9IHJlcXVpcmUoJy4vX1NldCcpLFxuICAgIFdlYWtNYXAgPSByZXF1aXJlKCcuL19XZWFrTWFwJyksXG4gICAgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICB0b1NvdXJjZSA9IHJlcXVpcmUoJy4vX3RvU291cmNlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICBwcm9taXNlVGFnID0gJ1tvYmplY3QgUHJvbWlzZV0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XSc7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtYXBzLCBzZXRzLCBhbmQgd2Vha21hcHMuICovXG52YXIgZGF0YVZpZXdDdG9yU3RyaW5nID0gdG9Tb3VyY2UoRGF0YVZpZXcpLFxuICAgIG1hcEN0b3JTdHJpbmcgPSB0b1NvdXJjZShNYXApLFxuICAgIHByb21pc2VDdG9yU3RyaW5nID0gdG9Tb3VyY2UoUHJvbWlzZSksXG4gICAgc2V0Q3RvclN0cmluZyA9IHRvU291cmNlKFNldCksXG4gICAgd2Vha01hcEN0b3JTdHJpbmcgPSB0b1NvdXJjZShXZWFrTWFwKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBgdG9TdHJpbmdUYWdgIG9mIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xudmFyIGdldFRhZyA9IGJhc2VHZXRUYWc7XG5cbi8vIEZhbGxiYWNrIGZvciBkYXRhIHZpZXdzLCBtYXBzLCBzZXRzLCBhbmQgd2VhayBtYXBzIGluIElFIDExIGFuZCBwcm9taXNlcyBpbiBOb2RlLmpzIDwgNi5cbmlmICgoRGF0YVZpZXcgJiYgZ2V0VGFnKG5ldyBEYXRhVmlldyhuZXcgQXJyYXlCdWZmZXIoMSkpKSAhPSBkYXRhVmlld1RhZykgfHxcbiAgICAoTWFwICYmIGdldFRhZyhuZXcgTWFwKSAhPSBtYXBUYWcpIHx8XG4gICAgKFByb21pc2UgJiYgZ2V0VGFnKFByb21pc2UucmVzb2x2ZSgpKSAhPSBwcm9taXNlVGFnKSB8fFxuICAgIChTZXQgJiYgZ2V0VGFnKG5ldyBTZXQpICE9IHNldFRhZykgfHxcbiAgICAoV2Vha01hcCAmJiBnZXRUYWcobmV3IFdlYWtNYXApICE9IHdlYWtNYXBUYWcpKSB7XG4gIGdldFRhZyA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGJhc2VHZXRUYWcodmFsdWUpLFxuICAgICAgICBDdG9yID0gcmVzdWx0ID09IG9iamVjdFRhZyA/IHZhbHVlLmNvbnN0cnVjdG9yIDogdW5kZWZpbmVkLFxuICAgICAgICBjdG9yU3RyaW5nID0gQ3RvciA/IHRvU291cmNlKEN0b3IpIDogJyc7XG5cbiAgICBpZiAoY3RvclN0cmluZykge1xuICAgICAgc3dpdGNoIChjdG9yU3RyaW5nKSB7XG4gICAgICAgIGNhc2UgZGF0YVZpZXdDdG9yU3RyaW5nOiByZXR1cm4gZGF0YVZpZXdUYWc7XG4gICAgICAgIGNhc2UgbWFwQ3RvclN0cmluZzogcmV0dXJuIG1hcFRhZztcbiAgICAgICAgY2FzZSBwcm9taXNlQ3RvclN0cmluZzogcmV0dXJuIHByb21pc2VUYWc7XG4gICAgICAgIGNhc2Ugc2V0Q3RvclN0cmluZzogcmV0dXJuIHNldFRhZztcbiAgICAgICAgY2FzZSB3ZWFrTWFwQ3RvclN0cmluZzogcmV0dXJuIHdlYWtNYXBUYWc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VGFnO1xuIiwiLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZ2V0VmFsdWUob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VmFsdWU7XG4iLCIvKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgY2hhcmFjdGVyIGNsYXNzZXMuICovXG52YXIgcnNBc3RyYWxSYW5nZSA9ICdcXFxcdWQ4MDAtXFxcXHVkZmZmJyxcbiAgICByc0NvbWJvTWFya3NSYW5nZSA9ICdcXFxcdTAzMDAtXFxcXHUwMzZmJyxcbiAgICByZUNvbWJvSGFsZk1hcmtzUmFuZ2UgPSAnXFxcXHVmZTIwLVxcXFx1ZmUyZicsXG4gICAgcnNDb21ib1N5bWJvbHNSYW5nZSA9ICdcXFxcdTIwZDAtXFxcXHUyMGZmJyxcbiAgICByc0NvbWJvUmFuZ2UgPSByc0NvbWJvTWFya3NSYW5nZSArIHJlQ29tYm9IYWxmTWFya3NSYW5nZSArIHJzQ29tYm9TeW1ib2xzUmFuZ2UsXG4gICAgcnNWYXJSYW5nZSA9ICdcXFxcdWZlMGVcXFxcdWZlMGYnO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgY2FwdHVyZSBncm91cHMuICovXG52YXIgcnNaV0ogPSAnXFxcXHUyMDBkJztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IHN0cmluZ3Mgd2l0aCBbemVyby13aWR0aCBqb2luZXJzIG9yIGNvZGUgcG9pbnRzIGZyb20gdGhlIGFzdHJhbCBwbGFuZXNdKGh0dHA6Ly9lZXYuZWUvYmxvZy8yMDE1LzA5LzEyL2RhcmstY29ybmVycy1vZi11bmljb2RlLykuICovXG52YXIgcmVIYXNVbmljb2RlID0gUmVnRXhwKCdbJyArIHJzWldKICsgcnNBc3RyYWxSYW5nZSAgKyByc0NvbWJvUmFuZ2UgKyByc1ZhclJhbmdlICsgJ10nKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHN0cmluZ2AgY29udGFpbnMgVW5pY29kZSBzeW1ib2xzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhIHN5bWJvbCBpcyBmb3VuZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNVbmljb2RlKHN0cmluZykge1xuICByZXR1cm4gcmVIYXNVbmljb2RlLnRlc3Qoc3RyaW5nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNVbmljb2RlO1xuIiwiLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCB1bnNpZ25lZCBpbnRlZ2VyIHZhbHVlcy4gKi9cbnZhciByZUlzVWludCA9IC9eKD86MHxbMS05XVxcZCopJC87XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGluZGV4LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoPU1BWF9TQUZFX0lOVEVHRVJdIFRoZSB1cHBlciBib3VuZHMgb2YgYSB2YWxpZCBpbmRleC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgaW5kZXgsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJbmRleCh2YWx1ZSwgbGVuZ3RoKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICBsZW5ndGggPSBsZW5ndGggPT0gbnVsbCA/IE1BWF9TQUZFX0lOVEVHRVIgOiBsZW5ndGg7XG5cbiAgcmV0dXJuICEhbGVuZ3RoICYmXG4gICAgKHR5cGUgPT0gJ251bWJlcicgfHxcbiAgICAgICh0eXBlICE9ICdzeW1ib2wnICYmIHJlSXNVaW50LnRlc3QodmFsdWUpKSkgJiZcbiAgICAgICAgKHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPCBsZW5ndGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzSW5kZXg7XG4iLCJ2YXIgY29yZUpzRGF0YSA9IHJlcXVpcmUoJy4vX2NvcmVKc0RhdGEnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1ldGhvZHMgbWFzcXVlcmFkaW5nIGFzIG5hdGl2ZS4gKi9cbnZhciBtYXNrU3JjS2V5ID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgdWlkID0gL1teLl0rJC8uZXhlYyhjb3JlSnNEYXRhICYmIGNvcmVKc0RhdGEua2V5cyAmJiBjb3JlSnNEYXRhLmtleXMuSUVfUFJPVE8gfHwgJycpO1xuICByZXR1cm4gdWlkID8gKCdTeW1ib2woc3JjKV8xLicgKyB1aWQpIDogJyc7XG59KCkpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgZnVuY2AgaGFzIGl0cyBzb3VyY2UgbWFza2VkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgZnVuY2AgaXMgbWFza2VkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzTWFza2VkKGZ1bmMpIHtcbiAgcmV0dXJuICEhbWFza1NyY0tleSAmJiAobWFza1NyY0tleSBpbiBmdW5jKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc01hc2tlZDtcbiIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGEgcHJvdG90eXBlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3RvdHlwZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1Byb3RvdHlwZSh2YWx1ZSkge1xuICB2YXIgQ3RvciA9IHZhbHVlICYmIHZhbHVlLmNvbnN0cnVjdG9yLFxuICAgICAgcHJvdG8gPSAodHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yLnByb3RvdHlwZSkgfHwgb2JqZWN0UHJvdG87XG5cbiAgcmV0dXJuIHZhbHVlID09PSBwcm90bztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1Byb3RvdHlwZTtcbiIsIi8qKlxuICogQ29udmVydHMgYGl0ZXJhdG9yYCB0byBhbiBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGl0ZXJhdG9yIFRoZSBpdGVyYXRvciB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGl0ZXJhdG9yVG9BcnJheShpdGVyYXRvcikge1xuICB2YXIgZGF0YSxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIHdoaWxlICghKGRhdGEgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICByZXN1bHQucHVzaChkYXRhLnZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGl0ZXJhdG9yVG9BcnJheTtcbiIsIi8qKlxuICogQ29udmVydHMgYG1hcGAgdG8gaXRzIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGtleS12YWx1ZSBwYWlycy5cbiAqL1xuZnVuY3Rpb24gbWFwVG9BcnJheShtYXApIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBBcnJheShtYXAuc2l6ZSk7XG5cbiAgbWFwLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IFtrZXksIHZhbHVlXTtcbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwVG9BcnJheTtcbiIsInZhciBvdmVyQXJnID0gcmVxdWlyZSgnLi9fb3ZlckFyZycpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlS2V5cyA9IG92ZXJBcmcoT2JqZWN0LmtleXMsIE9iamVjdCk7XG5cbm1vZHVsZS5leHBvcnRzID0gbmF0aXZlS2V5cztcbiIsInZhciBmcmVlR2xvYmFsID0gcmVxdWlyZSgnLi9fZnJlZUdsb2JhbCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgcHJvY2Vzc2AgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVQcm9jZXNzID0gbW9kdWxlRXhwb3J0cyAmJiBmcmVlR2xvYmFsLnByb2Nlc3M7XG5cbi8qKiBVc2VkIHRvIGFjY2VzcyBmYXN0ZXIgTm9kZS5qcyBoZWxwZXJzLiAqL1xudmFyIG5vZGVVdGlsID0gKGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIC8vIFVzZSBgdXRpbC50eXBlc2AgZm9yIE5vZGUuanMgMTArLlxuICAgIHZhciB0eXBlcyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5yZXF1aXJlICYmIGZyZWVNb2R1bGUucmVxdWlyZSgndXRpbCcpLnR5cGVzO1xuXG4gICAgaWYgKHR5cGVzKSB7XG4gICAgICByZXR1cm4gdHlwZXM7XG4gICAgfVxuXG4gICAgLy8gTGVnYWN5IGBwcm9jZXNzLmJpbmRpbmcoJ3V0aWwnKWAgZm9yIE5vZGUuanMgPCAxMC5cbiAgICByZXR1cm4gZnJlZVByb2Nlc3MgJiYgZnJlZVByb2Nlc3MuYmluZGluZyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nKCd1dGlsJyk7XG4gIH0gY2F0Y2ggKGUpIHt9XG59KCkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5vZGVVdGlsO1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0VG9TdHJpbmc7XG4iLCIvKipcbiAqIENyZWF0ZXMgYSB1bmFyeSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggaXRzIGFyZ3VtZW50IHRyYW5zZm9ybWVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNmb3JtIFRoZSBhcmd1bWVudCB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlckFyZyhmdW5jLCB0cmFuc2Zvcm0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBmdW5jKHRyYW5zZm9ybShhcmcpKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvdmVyQXJnO1xuIiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxubW9kdWxlLmV4cG9ydHMgPSByb290O1xuIiwiLyoqXG4gKiBDb252ZXJ0cyBgc2V0YCB0byBhbiBhcnJheSBvZiBpdHMgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc2V0IFRoZSBzZXQgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgdmFsdWVzLlxuICovXG5mdW5jdGlvbiBzZXRUb0FycmF5KHNldCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KHNldC5zaXplKTtcblxuICBzZXQuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IHZhbHVlO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRUb0FycmF5O1xuIiwidmFyIGFzY2lpVG9BcnJheSA9IHJlcXVpcmUoJy4vX2FzY2lpVG9BcnJheScpLFxuICAgIGhhc1VuaWNvZGUgPSByZXF1aXJlKCcuL19oYXNVbmljb2RlJyksXG4gICAgdW5pY29kZVRvQXJyYXkgPSByZXF1aXJlKCcuL191bmljb2RlVG9BcnJheScpO1xuXG4vKipcbiAqIENvbnZlcnRzIGBzdHJpbmdgIHRvIGFuIGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgY29udmVydGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBzdHJpbmdUb0FycmF5KHN0cmluZykge1xuICByZXR1cm4gaGFzVW5pY29kZShzdHJpbmcpXG4gICAgPyB1bmljb2RlVG9BcnJheShzdHJpbmcpXG4gICAgOiBhc2NpaVRvQXJyYXkoc3RyaW5nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHJpbmdUb0FycmF5O1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgZnVuY2AgdG8gaXRzIHNvdXJjZSBjb2RlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc291cmNlIGNvZGUuXG4gKi9cbmZ1bmN0aW9uIHRvU291cmNlKGZ1bmMpIHtcbiAgaWYgKGZ1bmMgIT0gbnVsbCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZnVuY1RvU3RyaW5nLmNhbGwoZnVuYyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIChmdW5jICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvU291cmNlO1xuIiwiLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIGNoYXJhY3RlciBjbGFzc2VzLiAqL1xudmFyIHJzQXN0cmFsUmFuZ2UgPSAnXFxcXHVkODAwLVxcXFx1ZGZmZicsXG4gICAgcnNDb21ib01hcmtzUmFuZ2UgPSAnXFxcXHUwMzAwLVxcXFx1MDM2ZicsXG4gICAgcmVDb21ib0hhbGZNYXJrc1JhbmdlID0gJ1xcXFx1ZmUyMC1cXFxcdWZlMmYnLFxuICAgIHJzQ29tYm9TeW1ib2xzUmFuZ2UgPSAnXFxcXHUyMGQwLVxcXFx1MjBmZicsXG4gICAgcnNDb21ib1JhbmdlID0gcnNDb21ib01hcmtzUmFuZ2UgKyByZUNvbWJvSGFsZk1hcmtzUmFuZ2UgKyByc0NvbWJvU3ltYm9sc1JhbmdlLFxuICAgIHJzVmFyUmFuZ2UgPSAnXFxcXHVmZTBlXFxcXHVmZTBmJztcblxuLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIGNhcHR1cmUgZ3JvdXBzLiAqL1xudmFyIHJzQXN0cmFsID0gJ1snICsgcnNBc3RyYWxSYW5nZSArICddJyxcbiAgICByc0NvbWJvID0gJ1snICsgcnNDb21ib1JhbmdlICsgJ10nLFxuICAgIHJzRml0eiA9ICdcXFxcdWQ4M2NbXFxcXHVkZmZiLVxcXFx1ZGZmZl0nLFxuICAgIHJzTW9kaWZpZXIgPSAnKD86JyArIHJzQ29tYm8gKyAnfCcgKyByc0ZpdHogKyAnKScsXG4gICAgcnNOb25Bc3RyYWwgPSAnW14nICsgcnNBc3RyYWxSYW5nZSArICddJyxcbiAgICByc1JlZ2lvbmFsID0gJyg/OlxcXFx1ZDgzY1tcXFxcdWRkZTYtXFxcXHVkZGZmXSl7Mn0nLFxuICAgIHJzU3VyclBhaXIgPSAnW1xcXFx1ZDgwMC1cXFxcdWRiZmZdW1xcXFx1ZGMwMC1cXFxcdWRmZmZdJyxcbiAgICByc1pXSiA9ICdcXFxcdTIwMGQnO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgcmVnZXhlcy4gKi9cbnZhciByZU9wdE1vZCA9IHJzTW9kaWZpZXIgKyAnPycsXG4gICAgcnNPcHRWYXIgPSAnWycgKyByc1ZhclJhbmdlICsgJ10/JyxcbiAgICByc09wdEpvaW4gPSAnKD86JyArIHJzWldKICsgJyg/OicgKyBbcnNOb25Bc3RyYWwsIHJzUmVnaW9uYWwsIHJzU3VyclBhaXJdLmpvaW4oJ3wnKSArICcpJyArIHJzT3B0VmFyICsgcmVPcHRNb2QgKyAnKSonLFxuICAgIHJzU2VxID0gcnNPcHRWYXIgKyByZU9wdE1vZCArIHJzT3B0Sm9pbixcbiAgICByc1N5bWJvbCA9ICcoPzonICsgW3JzTm9uQXN0cmFsICsgcnNDb21ibyArICc/JywgcnNDb21ibywgcnNSZWdpb25hbCwgcnNTdXJyUGFpciwgcnNBc3RyYWxdLmpvaW4oJ3wnKSArICcpJztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggW3N0cmluZyBzeW1ib2xzXShodHRwczovL21hdGhpYXNieW5lbnMuYmUvbm90ZXMvamF2YXNjcmlwdC11bmljb2RlKS4gKi9cbnZhciByZVVuaWNvZGUgPSBSZWdFeHAocnNGaXR6ICsgJyg/PScgKyByc0ZpdHogKyAnKXwnICsgcnNTeW1ib2wgKyByc1NlcSwgJ2cnKTtcblxuLyoqXG4gKiBDb252ZXJ0cyBhIFVuaWNvZGUgYHN0cmluZ2AgdG8gYW4gYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIHVuaWNvZGVUb0FycmF5KHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLm1hdGNoKHJlVW5pY29kZSkgfHwgW107XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdW5pY29kZVRvQXJyYXk7XG4iLCJ2YXIgYmFzZUlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9fYmFzZUlzQXJndW1lbnRzJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJndW1lbnRzID0gYmFzZUlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID8gYmFzZUlzQXJndW1lbnRzIDogZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpICYmXG4gICAgIXByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodmFsdWUsICdjYWxsZWUnKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcmd1bWVudHM7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5O1xuIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLiBBIHZhbHVlIGlzIGNvbnNpZGVyZWQgYXJyYXktbGlrZSBpZiBpdCdzXG4gKiBub3QgYSBmdW5jdGlvbiBhbmQgaGFzIGEgYHZhbHVlLmxlbmd0aGAgdGhhdCdzIGFuIGludGVnZXIgZ3JlYXRlciB0aGFuIG9yXG4gKiBlcXVhbCB0byBgMGAgYW5kIGxlc3MgdGhhbiBvciBlcXVhbCB0byBgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZSgnYWJjJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhaXNGdW5jdGlvbih2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheUxpa2U7XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKSxcbiAgICBzdHViRmFsc2UgPSByZXF1aXJlKCcuL3N0dWJGYWxzZScpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIEJ1ZmZlciA9IG1vZHVsZUV4cG9ydHMgPyByb290LkJ1ZmZlciA6IHVuZGVmaW5lZDtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUlzQnVmZmVyID0gQnVmZmVyID8gQnVmZmVyLmlzQnVmZmVyIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4zLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IEJ1ZmZlcigyKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgVWludDhBcnJheSgyKSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNCdWZmZXIgPSBuYXRpdmVJc0J1ZmZlciB8fCBzdHViRmFsc2U7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNCdWZmZXI7XG4iLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFzeW5jVGFnID0gJ1tvYmplY3QgQXN5bmNGdW5jdGlvbl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScsXG4gICAgcHJveHlUYWcgPSAnW29iamVjdCBQcm94eV0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGZ1bmN0aW9uLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gU2FmYXJpIDkgd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXlzIGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gIHZhciB0YWcgPSBiYXNlR2V0VGFnKHZhbHVlKTtcbiAgcmV0dXJuIHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWcgfHwgdGFnID09IGFzeW5jVGFnIHx8IHRhZyA9PSBwcm94eVRhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0Z1bmN0aW9uO1xuIiwiLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgbG9vc2VseSBiYXNlZCBvblxuICogW2BUb0xlbmd0aGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGxlbmd0aCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTGVuZ3RoKDMpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNMZW5ndGgoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoSW5maW5pdHkpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKCczJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInICYmXG4gICAgdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTGVuZ3RoO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3Q7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdExpa2U7XG4iLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHN0cmluZ1RhZyA9ICdbb2JqZWN0IFN0cmluZ10nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3RyaW5nYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3RyaW5nLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTdHJpbmcoJ2FiYycpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTdHJpbmcoMSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzdHJpbmcnIHx8XG4gICAgKCFpc0FycmF5KHZhbHVlKSAmJiBpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IHN0cmluZ1RhZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTdHJpbmc7XG4iLCJ2YXIgYmFzZUlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vX2Jhc2VJc1R5cGVkQXJyYXknKSxcbiAgICBiYXNlVW5hcnkgPSByZXF1aXJlKCcuL19iYXNlVW5hcnknKSxcbiAgICBub2RlVXRpbCA9IHJlcXVpcmUoJy4vX25vZGVVdGlsJyk7XG5cbi8qIE5vZGUuanMgaGVscGVyIHJlZmVyZW5jZXMuICovXG52YXIgbm9kZUlzVHlwZWRBcnJheSA9IG5vZGVVdGlsICYmIG5vZGVVdGlsLmlzVHlwZWRBcnJheTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgdHlwZWQgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShuZXcgVWludDhBcnJheSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkoW10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzVHlwZWRBcnJheSA9IG5vZGVJc1R5cGVkQXJyYXkgPyBiYXNlVW5hcnkobm9kZUlzVHlwZWRBcnJheSkgOiBiYXNlSXNUeXBlZEFycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzVHlwZWRBcnJheTtcbiIsInZhciBhcnJheUxpa2VLZXlzID0gcmVxdWlyZSgnLi9fYXJyYXlMaWtlS2V5cycpLFxuICAgIGJhc2VLZXlzID0gcmVxdWlyZSgnLi9fYmFzZUtleXMnKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy4gU2VlIHRoZVxuICogW0VTIHNwZWNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5rZXlzKVxuICogZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXMobmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKlxuICogXy5rZXlzKCdoaScpO1xuICogLy8gPT4gWycwJywgJzEnXVxuICovXG5mdW5jdGlvbiBrZXlzKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0KSA6IGJhc2VLZXlzKG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5cztcbiIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBgZmFsc2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50aW1lcygyLCBfLnN0dWJGYWxzZSk7XG4gKiAvLyA9PiBbZmFsc2UsIGZhbHNlXVxuICovXG5mdW5jdGlvbiBzdHViRmFsc2UoKSB7XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHViRmFsc2U7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgY29weUFycmF5ID0gcmVxdWlyZSgnLi9fY29weUFycmF5JyksXG4gICAgZ2V0VGFnID0gcmVxdWlyZSgnLi9fZ2V0VGFnJyksXG4gICAgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyksXG4gICAgaXNTdHJpbmcgPSByZXF1aXJlKCcuL2lzU3RyaW5nJyksXG4gICAgaXRlcmF0b3JUb0FycmF5ID0gcmVxdWlyZSgnLi9faXRlcmF0b3JUb0FycmF5JyksXG4gICAgbWFwVG9BcnJheSA9IHJlcXVpcmUoJy4vX21hcFRvQXJyYXknKSxcbiAgICBzZXRUb0FycmF5ID0gcmVxdWlyZSgnLi9fc2V0VG9BcnJheScpLFxuICAgIHN0cmluZ1RvQXJyYXkgPSByZXF1aXJlKCcuL19zdHJpbmdUb0FycmF5JyksXG4gICAgdmFsdWVzID0gcmVxdWlyZSgnLi92YWx1ZXMnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1JdGVyYXRvciA9IFN5bWJvbCA/IFN5bWJvbC5pdGVyYXRvciA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGFuIGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgYXJyYXkuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9BcnJheSh7ICdhJzogMSwgJ2InOiAyIH0pO1xuICogLy8gPT4gWzEsIDJdXG4gKlxuICogXy50b0FycmF5KCdhYmMnKTtcbiAqIC8vID0+IFsnYScsICdiJywgJ2MnXVxuICpcbiAqIF8udG9BcnJheSgxKTtcbiAqIC8vID0+IFtdXG4gKlxuICogXy50b0FycmF5KG51bGwpO1xuICogLy8gPT4gW11cbiAqL1xuZnVuY3Rpb24gdG9BcnJheSh2YWx1ZSkge1xuICBpZiAoIXZhbHVlKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIGlmIChpc0FycmF5TGlrZSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcodmFsdWUpID8gc3RyaW5nVG9BcnJheSh2YWx1ZSkgOiBjb3B5QXJyYXkodmFsdWUpO1xuICB9XG4gIGlmIChzeW1JdGVyYXRvciAmJiB2YWx1ZVtzeW1JdGVyYXRvcl0pIHtcbiAgICByZXR1cm4gaXRlcmF0b3JUb0FycmF5KHZhbHVlW3N5bUl0ZXJhdG9yXSgpKTtcbiAgfVxuICB2YXIgdGFnID0gZ2V0VGFnKHZhbHVlKSxcbiAgICAgIGZ1bmMgPSB0YWcgPT0gbWFwVGFnID8gbWFwVG9BcnJheSA6ICh0YWcgPT0gc2V0VGFnID8gc2V0VG9BcnJheSA6IHZhbHVlcyk7XG5cbiAgcmV0dXJuIGZ1bmModmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvQXJyYXk7XG4iLCJ2YXIgYmFzZVZhbHVlcyA9IHJlcXVpcmUoJy4vX2Jhc2VWYWx1ZXMnKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgc3RyaW5nIGtleWVkIHByb3BlcnR5IHZhbHVlcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IHZhbHVlcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy52YWx1ZXMobmV3IEZvbyk7XG4gKiAvLyA9PiBbMSwgMl0gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqXG4gKiBfLnZhbHVlcygnaGknKTtcbiAqIC8vID0+IFsnaCcsICdpJ11cbiAqL1xuZnVuY3Rpb24gdmFsdWVzKG9iamVjdCkge1xuICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyBbXSA6IGJhc2VWYWx1ZXMob2JqZWN0LCBrZXlzKG9iamVjdCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHZhbHVlcztcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvZW1vamknKTsiLCIvKmpzbGludCBub2RlOiB0cnVlKi9cbnZhciB0b0FycmF5ID0gcmVxdWlyZSgnbG9kYXNoL3RvQXJyYXknKTtcbnZhciBlbW9qaUJ5TmFtZSA9IHJlcXVpcmUoJy4vZW1vamkuanNvbicpO1xuXG5cInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiByZWdleCB0byBwYXJzZSBlbW9qaSBpbiBhIHN0cmluZyAtIGZpbmRzIGVtb2ppLCBlLmcuIDpjb2ZmZWU6XG4gKi9cbnZhciBlbW9qaU5hbWVSZWdleCA9IC86KFthLXpBLVowLTlfXFwtXFwrXSspOi9nO1xuXG4vKipcbiAqIHJlZ2V4IHRvIHRyaW0gd2hpdGVzcGFjZVxuICogdXNlIGluc3RlYWQgb2YgU3RyaW5nLnByb3RvdHlwZS50cmltKCkgZm9yIElFOCBzdXBwb3J0XG4gKi9cbnZhciB0cmltU3BhY2VSZWdleCA9IC9eW1xcc1xcdUZFRkZcXHhBMF0rfFtcXHNcXHVGRUZGXFx4QTBdKyQvZztcblxuLyoqXG4gKiBSZW1vdmVzIGNvbG9ucyBvbiBlaXRoZXIgc2lkZVxuICogb2YgdGhlIHN0cmluZyBpZiBwcmVzZW50XG4gKiBAcGFyYW0gIHtzdHJpbmd9IHN0clxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBzdHJpcENvbG9ucyAoc3RyKSB7XG4gIHZhciBjb2xvbkluZGV4ID0gc3RyLmluZGV4T2YoJzonKTtcbiAgaWYgKGNvbG9uSW5kZXggPiAtMSkge1xuICAgIC8vIDplbW9qaTogKGh0dHA6Ly93d3cuZW1vamktY2hlYXQtc2hlZXQuY29tLylcbiAgICBpZiAoY29sb25JbmRleCA9PT0gc3RyLmxlbmd0aCAtIDEpIHtcbiAgICAgIHN0ciA9IHN0ci5zdWJzdHJpbmcoMCwgY29sb25JbmRleCk7XG4gICAgICByZXR1cm4gc3RyaXBDb2xvbnMoc3RyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RyID0gc3RyLnN1YnN0cihjb2xvbkluZGV4ICsgMSk7XG4gICAgICByZXR1cm4gc3RyaXBDb2xvbnMoc3RyKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RyO1xufVxuXG4vKipcbiAqIEFkZHMgY29sb25zIHRvIGVpdGhlciBzaWRlXG4gKiBvZiB0aGUgc3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHdyYXBDb2xvbnMgKHN0cikge1xuICByZXR1cm4gKHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnICYmIHN0ci5sZW5ndGggPiAwKSA/ICc6JyArIHN0ciArICc6JyA6IHN0cjtcbn1cblxuLyoqXG4gKiBFbnN1cmUgdGhhdCB0aGUgd29yZCBpcyB3cmFwcGVkIGluIGNvbG9uc1xuICogYnkgb25seSBhZGRpbmcgdGhlbSwgaWYgdGhleSBhcmUgbm90IHRoZXJlLlxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBlbnN1cmVDb2xvbnMgKHN0cikge1xuICByZXR1cm4gKHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnICYmIHN0clswXSAhPT0gJzonKSA/IHdyYXBDb2xvbnMoc3RyKSA6IHN0cjtcbn1cblxuLy8gTm9uIHNwYWNpbmcgbWFyaywgc29tZSBlbW90aWNvbnMgaGF2ZSB0aGVtLiBJdCdzIHRoZSAnVmFyaWFudCBGb3JtJyxcbi8vIHdoaWNoIHByb3ZpZGVzIG1vcmUgaW5mb3JtYXRpb24gc28gdGhhdCBlbW90aWNvbnMgY2FuIGJlIHJlbmRlcmVkIGFzXG4vLyBtb3JlIGNvbG9yZnVsIGdyYXBoaWNzLiBGRTBFIGlzIGEgdW5pY29kZSB0ZXh0IHZlcnNpb24sIHdoZXJlIGFzIEZFMEZcbi8vIHNob3VsZCBiZSByZW5kZXJlZCBhcyBhIGdyYXBoaWNhbCB2ZXJzaW9uLiBUaGUgY29kZSBncmFjZWZ1bGx5IGRlZ3JhZGVzLlxudmFyIE5PTl9TUEFDSU5HX01BUksgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDY1MDM5KTsgLy8gNjUwMzkgLSAn77iPJyAtIDB4RkUwRjtcbnZhciBub25TcGFjaW5nUmVnZXggPSBuZXcgUmVnRXhwKE5PTl9TUEFDSU5HX01BUkssICdnJylcblxuLy8gUmVtb3ZlIHRoZSBub24tc3BhY2luZy1tYXJrIGZyb20gdGhlIGNvZGUsIG5ldmVyIHNlbmQgYSBzdHJpcHBlZCB2ZXJzaW9uXG4vLyB0byB0aGUgY2xpZW50LCBhcyBpdCBraWxscyBncmFwaGljYWwgZW1vdGljb25zLlxuZnVuY3Rpb24gc3RyaXBOU0IgKGNvZGUpIHtcbiAgcmV0dXJuIGNvZGUucmVwbGFjZShub25TcGFjaW5nUmVnZXgsICcnKTtcbn07XG5cbi8vIFJldmVyc2VkIGhhc2ggdGFibGUsIHdoZXJlIGFzIGVtb2ppQnlOYW1lIGNvbnRhaW5zIGEgeyBoZWFydDogJ+KdpCcgfVxuLy8gZGljdGlvbmFyeSBlbW9qaUJ5Q29kZSBjb250YWlucyB7IOKdpDogJ2hlYXJ0JyB9LiBUaGUgY29kZXMgYXJlIG5vcm1hbGl6ZWRcbi8vIHRvIHRoZSB0ZXh0IHZlcnNpb24uXG52YXIgZW1vamlCeUNvZGUgPSBPYmplY3Qua2V5cyhlbW9qaUJ5TmFtZSkucmVkdWNlKGZ1bmN0aW9uKGgsaykge1xuICBoW3N0cmlwTlNCKGVtb2ppQnlOYW1lW2tdKV0gPSBrO1xuICByZXR1cm4gaDtcbn0sIHt9KTtcblxuLyoqXG4gKiBFbW9qaSBuYW1lc3BhY2VcbiAqL1xudmFyIEVtb2ppID0ge1xuICBlbW9qaTogZW1vamlCeU5hbWUsXG59O1xuXG4vKipcbiAqIGdldCBlbW9qaSBjb2RlIGZyb20gbmFtZS4gcmV0dXJuIGVtb2ppIGNvZGUgYmFjayBpZiBjb2RlIGlzIHBhc3NlZCBpbi5cbiAqIEBwYXJhbSAge3N0cmluZ30gZW1vamlcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuRW1vamkuX2dldCA9IGZ1bmN0aW9uIF9nZXQgKGVtb2ppKSB7XG4gIGlmIChlbW9qaUJ5Q29kZVtzdHJpcE5TQihlbW9qaSldKSB7XG4gICAgcmV0dXJuIGVtb2ppO1xuICB9IGVsc2UgaWYgKGVtb2ppQnlOYW1lLmhhc093blByb3BlcnR5KGVtb2ppKSkge1xuICAgIHJldHVybiBlbW9qaUJ5TmFtZVtlbW9qaV07XG4gIH1cblxuICByZXR1cm4gZW5zdXJlQ29sb25zKGVtb2ppKTtcbn07XG5cbi8qKlxuICogZ2V0IGVtb2ppIGNvZGUgZnJvbSA6ZW1vamk6IHN0cmluZyBvciBuYW1lXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGVtb2ppXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbkVtb2ppLmdldCA9IGZ1bmN0aW9uIGdldCAoZW1vamkpIHtcbiAgZW1vamkgPSBzdHJpcENvbG9ucyhlbW9qaSk7XG5cbiAgcmV0dXJuIEVtb2ppLl9nZXQoZW1vamkpO1xufTtcblxuLyoqXG4gKiBmaW5kIHRoZSBlbW9qaSBieSBlaXRoZXIgY29kZSBvciBuYW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZU9yQ29kZSBUaGUgZW1vamkgdG8gZmluZCwgZWl0aGVyIGBjb2ZmZWVgLCBgOmNvZmZlZTpgIG9yIGDimJVgO1xuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5FbW9qaS5maW5kID0gZnVuY3Rpb24gZmluZCAobmFtZU9yQ29kZSkge1xuICByZXR1cm4gRW1vamkuZmluZEJ5TmFtZShuYW1lT3JDb2RlKSB8fCBFbW9qaS5maW5kQnlDb2RlKG5hbWVPckNvZGUpO1xufTtcblxuLyoqXG4gKiBmaW5kIHRoZSBlbW9qaSBieSBuYW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgZW1vamkgdG8gZmluZCBlaXRoZXIgYGNvZmZlZWAgb3IgYDpjb2ZmZWU6YDtcbiAqIEByZXR1cm4ge29iamVjdH1cbiAqL1xuRW1vamkuZmluZEJ5TmFtZSA9IGZ1bmN0aW9uIGZpbmRCeU5hbWUgKG5hbWUpIHtcbiAgdmFyIHN0cmlwcGVkID0gc3RyaXBDb2xvbnMobmFtZSk7XG4gIHZhciBlbW9qaSA9IGVtb2ppQnlOYW1lW3N0cmlwcGVkXTtcblxuICByZXR1cm4gZW1vamkgPyAoeyBlbW9qaTogZW1vamksIGtleTogc3RyaXBwZWQgfSkgOiB1bmRlZmluZWQ7XG59O1xuXG4vKipcbiAqIGZpbmQgdGhlIGVtb2ppIGJ5IGNvZGUgKGVtb2ppKVxuICogQHBhcmFtIHtzdHJpbmd9IGNvZGUgVGhlIGVtb2ppIHRvIGZpbmQ7IGZvciBleGFtcGxlIGDimJVgIG9yIGDimJRgXG4gKiBAcmV0dXJuIHtvYmplY3R9XG4gKi9cbkVtb2ppLmZpbmRCeUNvZGUgPSBmdW5jdGlvbiBmaW5kQnlDb2RlIChjb2RlKSB7XG4gIHZhciBzdHJpcHBlZCA9IHN0cmlwTlNCKGNvZGUpO1xuICB2YXIgbmFtZSA9IGVtb2ppQnlDb2RlW3N0cmlwcGVkXTtcblxuICAvLyBsb29rdXAgZW1vamkgdG8gZW5zdXJlIHRoZSBWYXJpYW50IEZvcm0gaXMgcmV0dXJuZWRcbiAgcmV0dXJuIG5hbWUgPyAoeyBlbW9qaTogZW1vamlCeU5hbWVbbmFtZV0sIGtleTogbmFtZSB9KSA6IHVuZGVmaW5lZDtcbn07XG5cblxuLyoqXG4gKiBDaGVjayBpZiBhbiBlbW9qaSBpcyBrbm93biBieSB0aGlzIGxpYnJhcnlcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lT3JDb2RlIFRoZSBlbW9qaSB0byB2YWxpZGF0ZSwgZWl0aGVyIGBjb2ZmZWVgLCBgOmNvZmZlZTpgIG9yIGDimJVgO1xuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5FbW9qaS5oYXNFbW9qaSA9IGZ1bmN0aW9uIGhhc0Vtb2ppIChuYW1lT3JDb2RlKSB7XG4gIHJldHVybiBFbW9qaS5oYXNFbW9qaUJ5TmFtZShuYW1lT3JDb2RlKSB8fCBFbW9qaS5oYXNFbW9qaUJ5Q29kZShuYW1lT3JDb2RlKTtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgYW4gZW1vamkgd2l0aCBnaXZlbiBuYW1lIGlzIGtub3duIGJ5IHRoaXMgbGlicmFyeVxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIGVtb2ppIHRvIHZhbGlkYXRlIGVpdGhlciBgY29mZmVlYCBvciBgOmNvZmZlZTpgO1xuICogQHJldHVybiB7b2JqZWN0fVxuICovXG5FbW9qaS5oYXNFbW9qaUJ5TmFtZSA9IGZ1bmN0aW9uIGhhc0Vtb2ppQnlOYW1lIChuYW1lKSB7XG4gIHZhciByZXN1bHQgPSBFbW9qaS5maW5kQnlOYW1lKG5hbWUpO1xuICByZXR1cm4gISFyZXN1bHQgJiYgcmVzdWx0LmtleSA9PT0gc3RyaXBDb2xvbnMobmFtZSk7XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIGEgZ2l2ZW4gZW1vamkgaXMga25vd24gYnkgdGhpcyBsaWJyYXJ5XG4gKiBAcGFyYW0ge3N0cmluZ30gY29kZSBUaGUgZW1vamkgdG8gdmFsaWRhdGU7IGZvciBleGFtcGxlIGDimJVgIG9yIGDimJRgXG4gKiBAcmV0dXJuIHtvYmplY3R9XG4gKi9cbkVtb2ppLmhhc0Vtb2ppQnlDb2RlID0gZnVuY3Rpb24gaGFzRW1vamlCeUNvZGUgKGNvZGUpIHtcbiAgdmFyIHJlc3VsdCA9IEVtb2ppLmZpbmRCeUNvZGUoY29kZSk7XG4gIHJldHVybiAhIXJlc3VsdCAmJiBzdHJpcE5TQihyZXN1bHQuZW1vamkpID09PSBzdHJpcE5TQihjb2RlKTtcbn07XG5cbi8qKlxuICogZ2V0IGVtb2ppIG5hbWUgZnJvbSBjb2RlXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGVtb2ppXG4gKiBAcGFyYW0gIHtib29sZWFufSBpbmNsdWRlQ29sb25zIHNob3VsZCB0aGUgcmVzdWx0IGluY2x1ZGUgdGhlIDo6XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbkVtb2ppLndoaWNoID0gZnVuY3Rpb24gd2hpY2ggKGVtb2ppX2NvZGUsIGluY2x1ZGVDb2xvbnMpIHtcbiAgdmFyIGNvZGUgPSBzdHJpcE5TQihlbW9qaV9jb2RlKTtcbiAgdmFyIHdvcmQgPSBlbW9qaUJ5Q29kZVtjb2RlXTtcblxuICByZXR1cm4gaW5jbHVkZUNvbG9ucyA/IHdyYXBDb2xvbnMod29yZCkgOiB3b3JkO1xufTtcblxuLyoqXG4gKiBlbW9qaWZ5IGEgc3RyaW5nIChyZXBsYWNlIDplbW9qaTogd2l0aCBhbiBlbW9qaSlcbiAqIEBwYXJhbSAge3N0cmluZ30gc3RyXG4gKiBAcGFyYW0gIHtmdW5jdGlvbn0gb25fbWlzc2luZyAoZ2V0cyBlbW9qaSBuYW1lIHdpdGhvdXQgOjogYW5kIHJldHVybnMgYSBwcm9wZXIgZW1vamkgaWYgbm8gZW1vamkgd2FzIGZvdW5kKVxuICogQHBhcmFtICB7ZnVuY3Rpb259IGZvcm1hdCAod3JhcCB0aGUgcmV0dXJuZWQgZW1vamkgaW4gYSBjdXN0b20gZWxlbWVudClcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuRW1vamkuZW1vamlmeSA9IGZ1bmN0aW9uIGVtb2ppZnkgKHN0ciwgb25fbWlzc2luZywgZm9ybWF0KSB7XG4gIGlmICghc3RyKSByZXR1cm4gJyc7XG5cbiAgcmV0dXJuIHN0ci5zcGxpdChlbW9qaU5hbWVSZWdleCkgLy8gcGFyc2UgZW1vamkgdmlhIHJlZ2V4XG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIHBhcnNlRW1vamkocywgaSkge1xuICAgICAgICAgICAgICAvLyBldmVyeSBzZWNvbmQgZWxlbWVudCBpcyBhbiBlbW9qaSwgZS5nLiBcInRlc3QgOmZhc3RfZm9yd2FyZDpcIiAtPiBbIFwidGVzdCBcIiwgXCJmYXN0X2ZvcndhcmRcIiBdXG4gICAgICAgICAgICAgIGlmIChpICUgMiA9PT0gMCkgcmV0dXJuIHM7XG4gICAgICAgICAgICAgIHZhciBlbW9qaSA9IEVtb2ppLl9nZXQocyk7XG4gICAgICAgICAgICAgIHZhciBpc01pc3NpbmcgPSBlbW9qaS5pbmRleE9mKCc6JykgPiAtMTtcblxuICAgICAgICAgICAgICBpZiAoaXNNaXNzaW5nICYmIHR5cGVvZiBvbl9taXNzaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9uX21pc3Npbmcocyk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzTWlzc2luZyAmJiB0eXBlb2YgZm9ybWF0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvcm1hdChlbW9qaSwgcyk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm4gZW1vamk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmpvaW4oJycpIC8vIGNvbnZlcnQgYmFjayB0byBzdHJpbmdcbiAgO1xufTtcblxuLyoqXG4gKiByZXR1cm4gYSByYW5kb20gZW1vamlcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuRW1vamkucmFuZG9tID0gZnVuY3Rpb24gcmFuZG9tICgpIHtcbiAgdmFyIGVtb2ppS2V5cyA9IE9iamVjdC5rZXlzKGVtb2ppQnlOYW1lKTtcbiAgdmFyIHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZW1vamlLZXlzLmxlbmd0aCk7XG4gIHZhciBrZXkgPSBlbW9qaUtleXNbcmFuZG9tSW5kZXhdO1xuICB2YXIgZW1vamkgPSBFbW9qaS5fZ2V0KGtleSk7XG4gIHJldHVybiB7IGtleToga2V5LCBlbW9qaTogZW1vamkgfTtcbn1cblxuLyoqXG4gKiAgcmV0dXJuIGFuIGNvbGxlY3Rpb24gb2YgcG90ZW50aWFsIGVtb2ppIG1hdGNoZXNcbiAqICBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiAgQHJldHVybiB7QXJyYXkuPE9iamVjdD59XG4gKi9cbkVtb2ppLnNlYXJjaCA9IGZ1bmN0aW9uIHNlYXJjaCAoc3RyKSB7XG4gIHZhciBlbW9qaUtleXMgPSBPYmplY3Qua2V5cyhlbW9qaUJ5TmFtZSk7XG4gIHZhciBtYXRjaGVyID0gc3RyaXBDb2xvbnMoc3RyKVxuICB2YXIgbWF0Y2hpbmdLZXlzID0gZW1vamlLZXlzLmZpbHRlcihmdW5jdGlvbihrZXkpIHtcbiAgICByZXR1cm4ga2V5LnRvU3RyaW5nKCkuaW5kZXhPZihtYXRjaGVyKSA9PT0gMDtcbiAgfSk7XG4gIHJldHVybiBtYXRjaGluZ0tleXMubWFwKGZ1bmN0aW9uKGtleSkge1xuICAgIHJldHVybiB7XG4gICAgICBrZXk6IGtleSxcbiAgICAgIGVtb2ppOiBFbW9qaS5fZ2V0KGtleSksXG4gICAgfTtcbiAgfSk7XG59XG5cbi8qKlxuICogdW5lbW9qaWZ5IGEgc3RyaW5nIChyZXBsYWNlIGVtb2ppIHdpdGggOmVtb2ppOilcbiAqIEBwYXJhbSAge3N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbkVtb2ppLnVuZW1vamlmeSA9IGZ1bmN0aW9uIHVuZW1vamlmeSAoc3RyKSB7XG4gIGlmICghc3RyKSByZXR1cm4gJyc7XG4gIHZhciB3b3JkcyA9IHRvQXJyYXkoc3RyKTtcblxuICByZXR1cm4gd29yZHMubWFwKGZ1bmN0aW9uKHdvcmQpIHtcbiAgICByZXR1cm4gRW1vamkud2hpY2god29yZCwgdHJ1ZSkgfHwgd29yZDtcbiAgfSkuam9pbignJyk7XG59O1xuXG4vKipcbiAqIHJlcGxhY2UgZW1vamlzIHdpdGggcmVwbGFjZW1lbnQgdmFsdWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb258c3RyaW5nfSB0aGUgc3RyaW5nIG9yIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIHJlcGxhY2UgdGhlIGVtb2ppIHdpdGhcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gc2hvdWxkIHRyYWlsaW5nIHdoaXRlc3BhY2VzIGJlIGNsZWFuZWQ/IERlZmF1bHRzIGZhbHNlXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbkVtb2ppLnJlcGxhY2UgPSBmdW5jdGlvbiByZXBsYWNlIChzdHIsIHJlcGxhY2VtZW50LCBjbGVhblNwYWNlcykge1xuICBpZiAoIXN0cikgcmV0dXJuICcnO1xuXG4gIHZhciByZXBsYWNlID0gdHlwZW9mIHJlcGxhY2VtZW50ID09PSAnZnVuY3Rpb24nID8gcmVwbGFjZW1lbnQgOiBmdW5jdGlvbigpIHsgcmV0dXJuIHJlcGxhY2VtZW50OyB9O1xuICB2YXIgd29yZHMgPSB0b0FycmF5KHN0cik7XG5cbiAgdmFyIHJlcGxhY2VkID0gd29yZHMubWFwKGZ1bmN0aW9uKHdvcmQsIGlkeCkge1xuICAgIHZhciBlbW9qaSA9IEVtb2ppLmZpbmRCeUNvZGUod29yZCk7XG5cbiAgICBpZiAoZW1vamkgJiYgY2xlYW5TcGFjZXMgJiYgd29yZHNbaWR4ICsgMV0gPT09ICcgJykge1xuICAgICAgd29yZHNbaWR4ICsgMV0gPSAnJztcbiAgICB9XG5cbiAgICByZXR1cm4gZW1vamkgPyByZXBsYWNlKGVtb2ppKSA6IHdvcmQ7XG4gIH0pLmpvaW4oJycpO1xuXG4gIHJldHVybiBjbGVhblNwYWNlcyA/IHJlcGxhY2VkLnJlcGxhY2UodHJpbVNwYWNlUmVnZXgsICcnKSA6IHJlcGxhY2VkO1xufTtcblxuXG4vKipcbiAqIHJlbW92ZSBhbGwgZW1vamlzIGZyb20gYSBzdHJpbmdcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuRW1vamkuc3RyaXAgPSBmdW5jdGlvbiBzdHJpcCAoc3RyKSB7XG4gIHJldHVybiBFbW9qaS5yZXBsYWNlKHN0ciwgJycsIHRydWUpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBFbW9qaTtcbiIsImltcG9ydCB7XG4gICAgQ0xJVGVtcGxhdGUsXG4gICAgdHlwZSBDTElEaXNwYXRjaGVkU2VhcmNoUmVzdWx0LFxuICAgIHR5cGUgQ0xJRmlsdGVyLFxuICAgIHR5cGUgQ0xJU2VhcmNoTGlzdGVuZXJSZXNwb25zZSxcbiAgICB0eXBlIEhvbWVTZWFyY2hSZXNwb25zZSxcbiAgICB0eXBlIEhvbWVTZWFyY2hSZXN1bHRcbn0gZnJvbSBcIkBvcGVuZmluL3dvcmtzcGFjZVwiO1xuaW1wb3J0IHR5cGUgeyBJbnRlZ3JhdGlvbiwgSW50ZWdyYXRpb25NYW5hZ2VyLCBJbnRlZ3JhdGlvbk1vZHVsZSB9IGZyb20gXCIuLi8uLi9pbnRlZ3JhdGlvbnMtc2hhcGVzXCI7XG5pbXBvcnQgdHlwZSB7IEVtb2ppU2V0dGluZ3MgfSBmcm9tIFwiLi9zaGFwZXNcIjtcbmltcG9ydCB7IGdldEVtb2ppVGVtcGxhdGUgfSBmcm9tIFwiLi90ZW1wbGF0ZXNcIjtcbmltcG9ydCAqIGFzIGVtb2ppIGZyb20gXCJub2RlLWVtb2ppXCI7XG5cbi8qKlxuICogSW1wbGVtZW50IHRoZSBpbnRlZ3JhdGlvbiBwcm92aWRlciBmb3IgRW1vamlzLlxuICovXG5leHBvcnQgY2xhc3MgRW1vamlJbnRlZ3JhdGlvblByb3ZpZGVyIGltcGxlbWVudHMgSW50ZWdyYXRpb25Nb2R1bGU8RW1vamlTZXR0aW5ncz4ge1xuICAgIC8qKlxuICAgICAqIFByb3ZpZGVyIGlkLlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IF9QUk9WSURFUl9JRCA9IFwiZW1vamlcIjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBrZXkgdG8gdXNlIGZvciBhIGVtb2ppIHJlc3VsdC5cbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBfRU1PSklfUFJPVklERVJfREVUQUlMU19BQ1RJT04gPSBcIkVtb2ppIERldGFpbHNcIjtcblxuICAgIC8qKlxuICAgICAqIFRoZSBrZXkgdG8gdXNlIGZvciBhIGVtb2ppIGNvcHkga2V5IGFjdGlvbi5cbiAgICAgKiBAaW50ZXJuYWxcbiAgICAgKi9cbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBfRU1PSklfUFJPVklERVJfQ09QWV9LRVlfQUNUSU9OID0gXCJDb3B5IEtleVwiO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGtleSB0byB1c2UgZm9yIGEgZW1vamkgY29weSBrZXkgYWN0aW9uLlxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqL1xuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IF9FTU9KSV9QUk9WSURFUl9DT1BZX0VNT0pJX0FDVElPTiA9IFwiQ29weSBFbW9qaVwiO1xuXG4gICAgLyoqXG4gICAgKiBUaGUgaW50ZWdyYXRpb24gbWFuYWdlci5cbiAgICAqIEBpbnRlcm5hbFxuICAgICovXG4gICAgcHJpdmF0ZSBfaW50ZWdyYXRpb25NYW5hZ2VyOiBJbnRlZ3JhdGlvbk1hbmFnZXIgfCB1bmRlZmluZWQ7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbW9kdWxlIGlzIGJlaW5nIHJlZ2lzdGVyZWQuXG4gICAgICogQHBhcmFtIGludGVncmF0aW9uTWFuYWdlciBUaGUgbWFuYWdlciBmb3IgdGhlIGludGVncmF0aW9uLlxuICAgICAqIEBwYXJhbSBpbnRlZ3JhdGlvbiBUaGUgaW50ZWdyYXRpb24gZGV0YWlscy5cbiAgICAgKiBAcmV0dXJucyBOb3RoaW5nLlxuICAgICAqL1xuICAgIHB1YmxpYyBhc3luYyByZWdpc3RlcihcbiAgICAgICAgaW50ZWdyYXRpb25NYW5hZ2VyOiBJbnRlZ3JhdGlvbk1hbmFnZXIsXG4gICAgICAgIGludGVncmF0aW9uOiBJbnRlZ3JhdGlvbjxFbW9qaVNldHRpbmdzPlxuICAgICk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICB0aGlzLl9pbnRlZ3JhdGlvbk1hbmFnZXIgPSBpbnRlZ3JhdGlvbk1hbmFnZXI7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIG1vZHVsZSBpcyBiZWluZyBkZXJlZ2lzdGVyZWQuXG4gICAgICogQHBhcmFtIGludGVncmF0aW9uIFRoZSBpbnRlZ3JhdGlvbiBkZXRhaWxzLlxuICAgICAqIEByZXR1cm5zIE5vdGhpbmcuXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIGRlcmVnaXN0ZXIoaW50ZWdyYXRpb246IEludGVncmF0aW9uPEVtb2ppU2V0dGluZ3M+KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGEgbGlzdCBvZiB0aGUgc3RhdGljIGFwcGxpY2F0aW9uIGVudHJpZXMuXG4gICAgICogQHBhcmFtIGludGVncmF0aW9uIFRoZSBpbnRlZ3JhdGlvbiBkZXRhaWxzLlxuICAgICAqIEByZXR1cm5zIFRoZSBsaXN0IG9mIGFwcGxpY2F0aW9uIGVudHJpZXMuXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIGdldEFwcFNlYXJjaEVudHJpZXMoaW50ZWdyYXRpb246IEludGVncmF0aW9uPEVtb2ppU2V0dGluZ3M+KTogUHJvbWlzZTxIb21lU2VhcmNoUmVzdWx0W10+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IFtdO1xuXG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFuIGVudHJ5IGhhcyBiZWVuIHNlbGVjdGVkLlxuICAgICAqIEBwYXJhbSBpbnRlZ3JhdGlvbiBUaGUgaW50ZWdyYXRpb24gZGV0YWlscy5cbiAgICAgKiBAcGFyYW0gcmVzdWx0IFRoZSBkaXNwYXRjaGVkIHJlc3VsdC5cbiAgICAgKiBAcGFyYW0gbGFzdFJlc3BvbnNlIFRoZSBsYXN0IHJlc3BvbnNlLlxuICAgICAqIEByZXR1cm5zIFRydWUgaWYgdGhlIGl0ZW0gd2FzIGhhbmRsZWQuXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIGl0ZW1TZWxlY3Rpb24oXG4gICAgICAgIGludGVncmF0aW9uOiBJbnRlZ3JhdGlvbjxFbW9qaVNldHRpbmdzPixcbiAgICAgICAgcmVzdWx0OiBDTElEaXNwYXRjaGVkU2VhcmNoUmVzdWx0LFxuICAgICAgICBsYXN0UmVzcG9uc2U6IENMSVNlYXJjaExpc3RlbmVyUmVzcG9uc2VcbiAgICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgaWYgKHJlc3VsdC5hY3Rpb24ubmFtZSA9PT0gRW1vamlJbnRlZ3JhdGlvblByb3ZpZGVyLl9FTU9KSV9QUk9WSURFUl9DT1BZX0VNT0pJX0FDVElPTiAmJiByZXN1bHQuZGF0YS5lbW9qaSkge1xuICAgICAgICAgICAgYXdhaXQgZmluLkNsaXBib2FyZC53cml0ZVRleHQoeyBkYXRhOiByZXN1bHQuZGF0YS5lbW9qaSB9KTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5hY3Rpb24ubmFtZSA9PT0gRW1vamlJbnRlZ3JhdGlvblByb3ZpZGVyLl9FTU9KSV9QUk9WSURFUl9DT1BZX0tFWV9BQ1RJT04gJiYgcmVzdWx0LmRhdGEua2V5KSB7XG4gICAgICAgICAgICBhd2FpdCBmaW4uQ2xpcGJvYXJkLndyaXRlVGV4dCh7IGRhdGE6IHJlc3VsdC5kYXRhLmtleSB9KTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5hY3Rpb24ubmFtZSA9PT0gRW1vamlJbnRlZ3JhdGlvblByb3ZpZGVyLl9FTU9KSV9QUk9WSURFUl9ERVRBSUxTX0FDVElPTiAmJiByZXN1bHQuZGF0YS51cmwgJiYgdGhpcy5faW50ZWdyYXRpb25NYW5hZ2VyLm9wZW5VcmwpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuX2ludGVncmF0aW9uTWFuYWdlci5vcGVuVXJsKHJlc3VsdC5kYXRhLnVybCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYSBsaXN0IG9mIHNlYXJjaCByZXN1bHRzIGJhc2VkIG9uIHRoZSBxdWVyeSBhbmQgZmlsdGVycy5cbiAgICAgKiBAcGFyYW0gaW50ZWdyYXRpb24gVGhlIGludGVncmF0aW9uIGRldGFpbHMuXG4gICAgICogQHBhcmFtIHF1ZXJ5IFRoZSBxdWVyeSB0byBzZWFyY2ggZm9yLlxuICAgICAqIEBwYXJhbSBmaWx0ZXJzIFRoZSBmaWx0ZXJzIHRvIGFwcGx5LlxuICAgICAqIEBwYXJhbSBsYXN0UmVzcG9uc2UgVGhlIGxhc3Qgc2VhcmNoIHJlc3BvbnNlIHVzZWQgZm9yIHVwZGF0aW5nIGV4aXN0aW5nIHJlc3VsdHMuXG4gICAgICogQHJldHVybnMgVGhlIGxpc3Qgb2YgcmVzdWx0cyBhbmQgbmV3IGZpbHRlcnMuXG4gICAgICovXG4gICAgcHVibGljIGFzeW5jIGdldFNlYXJjaFJlc3VsdHMoXG4gICAgICAgIGludGVncmF0aW9uOiBJbnRlZ3JhdGlvbjxFbW9qaVNldHRpbmdzPixcbiAgICAgICAgcXVlcnk6IHN0cmluZyxcbiAgICAgICAgZmlsdGVyczogQ0xJRmlsdGVyW10sXG4gICAgICAgIGxhc3RSZXNwb25zZTogQ0xJU2VhcmNoTGlzdGVuZXJSZXNwb25zZVxuICAgICk6IFByb21pc2U8SG9tZVNlYXJjaFJlc3BvbnNlPiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcblxuICAgICAgICBpZiAocXVlcnkuc3RhcnRzV2l0aChcIi9lbW9qaSBcIikpIHtcbiAgICAgICAgICAgIGxldCBrZXkgPSBxdWVyeS5zbGljZSg3KTtcbiAgICBcbiAgICAgICAgICAgIGlmIChrZXkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGtleSA9IGtleS50b0xvd2VyQ2FzZSgpO1xuICAgIFxuICAgICAgICAgICAgICAgIC8vIEZpbmQgZXhhY3QgbWF0Y2ggZmlyc3QgaWYgdGhlcmUgaXMgb25lXG4gICAgICAgICAgICAgICAgY29uc3QgbWF0Y2hFbW9qaSA9IGVtb2ppLmdldChrZXkpO1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaEVtb2ppICYmICFtYXRjaEVtb2ppLnN0YXJ0c1dpdGgoXCI6XCIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh0aGlzLmNyZWF0ZVJlc3VsdChrZXksIG1hdGNoRW1vamkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgLy8gRmluZCBhbGwgb3RoZXIgcG90ZW50aWFsIG1hdGNoZXNcbiAgICAgICAgICAgICAgICBjb25zdCBzZWFyY2hSZXN1bHQgPSBlbW9qaS5zZWFyY2goa2V5KTtcbiAgICBcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHJlc3VsdCBvZiBzZWFyY2hSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5lbW9qaSAhPT0gbWF0Y2hFbW9qaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMuY3JlYXRlUmVzdWx0KHJlc3VsdC5rZXksIHJlc3VsdC5lbW9qaSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlc3VsdHNcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBzZWFyY2ggcmVzdWx0LlxuICAgICAqIEBwYXJhbSBrZXkgVGhlIGtleSBmb3IgdGhlIGVtb2ppLlxuICAgICAqIEBwYXJhbSBlbW9qaSBUaGUgZW1vamkgc3ltYm9sLlxuICAgICAqIEByZXR1cm5zIFRoZSBzZWFyY2ggcmVzdWx0LlxuICAgICAqL1xuICAgIHByaXZhdGUgY3JlYXRlUmVzdWx0KGtleTogc3RyaW5nLCBlbW9qaTogc3RyaW5nKTogSG9tZVNlYXJjaFJlc3VsdCB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBrZXk6IGBlbW9qaS0ke2tleX1gLFxuICAgICAgICAgICAgdGl0bGU6IGtleSxcbiAgICAgICAgICAgIGxhYmVsOiBcIkluZm9ybWF0aW9uXCIsXG4gICAgICAgICAgICBhY3Rpb25zOiBbXG4gICAgICAgICAgICAgICAgeyBuYW1lOiBFbW9qaUludGVncmF0aW9uUHJvdmlkZXIuX0VNT0pJX1BST1ZJREVSX0NPUFlfRU1PSklfQUNUSU9OLCBob3RrZXk6IFwiQ21kT3JDdHJsK0NcIiB9LFxuICAgICAgICAgICAgICAgIHsgbmFtZTogRW1vamlJbnRlZ3JhdGlvblByb3ZpZGVyLl9FTU9KSV9QUk9WSURFUl9ERVRBSUxTX0FDVElPTiwgaG90a2V5OiBcIkVudGVyXCIgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBwcm92aWRlcklkOiBFbW9qaUludGVncmF0aW9uUHJvdmlkZXIuX1BST1ZJREVSX0lELFxuICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICBlbW9qaSxcbiAgICAgICAgICAgICAgICB1cmw6IGBodHRwczovL2Vtb2ppcGVkaWEub3JnLyR7a2V5fS9gXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGVtcGxhdGU6IENMSVRlbXBsYXRlLkN1c3RvbSxcbiAgICAgICAgICAgIHRlbXBsYXRlQ29udGVudDoge1xuICAgICAgICAgICAgICAgIGxheW91dDogZ2V0RW1vamlUZW1wbGF0ZSh7IFxuICAgICAgICAgICAgICAgICAgICBjb3B5RW1vamlBY3Rpb246IEVtb2ppSW50ZWdyYXRpb25Qcm92aWRlci5fRU1PSklfUFJPVklERVJfQ09QWV9FTU9KSV9BQ1RJT04sIFxuICAgICAgICAgICAgICAgICAgICBjb3B5S2V5QWN0aW9uOiBFbW9qaUludGVncmF0aW9uUHJvdmlkZXIuX0VNT0pJX1BST1ZJREVSX0NPUFlfS0VZX0FDVElPTiwgXG4gICAgICAgICAgICAgICAgICAgIGRldGFpbHNBY3Rpb246IEVtb2ppSW50ZWdyYXRpb25Qcm92aWRlci5fRU1PSklfUFJPVklERVJfREVUQUlMU19BQ1RJT04gXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBrZXlUaXRsZTogXCJLZXlcIixcbiAgICAgICAgICAgICAgICAgICAgY29weUtleVRpdGxlOiBcIkNvcHkgS2V5XCIsXG4gICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgZW1vamlUaXRsZTogXCJFbW9qaVwiLFxuICAgICAgICAgICAgICAgICAgICBjb3B5RW1vamlUaXRsZTogXCJDb3B5IEVtb2ppXCIsXG4gICAgICAgICAgICAgICAgICAgIGVtb2ppLFxuICAgICAgICAgICAgICAgICAgICBkZXRhaWxzVGl0bGU6IFwiRnVydGhlciBEZXRhaWxzXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuICAgIFxuXG59XG4iLCJpbXBvcnQgeyBCdXR0b25TdHlsZSwgVGVtcGxhdGVGcmFnbWVudCB9IGZyb20gXCJAb3BlbmZpbi93b3Jrc3BhY2VcIjtcbmltcG9ydCB7IGNyZWF0ZUJ1dHRvbiwgY3JlYXRlQ29udGFpbmVyLCBjcmVhdGVUZXh0IH0gZnJvbSBcIi4uLy4uL3RlbXBsYXRlc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RW1vamlUZW1wbGF0ZShhY3Rpb25zOiB7XG4gICAgY29weUVtb2ppQWN0aW9uOiBzdHJpbmcsXG4gICAgY29weUtleUFjdGlvbjogc3RyaW5nLFxuICAgIGRldGFpbHNBY3Rpb246IHN0cmluZ1xufSk6IFRlbXBsYXRlRnJhZ21lbnQge1xuICAgIHJldHVybiBjcmVhdGVDb250YWluZXIoXCJjb2x1bW5cIiwgW1xuICAgICAgICBjcmVhdGVUZXh0KFwia2V5VGl0bGVcIiwgMTIsIHsgY29sb3I6IFwibGlnaHRncmF5XCIsIGZvbnRXZWlnaHQ6IFwiYm9sZFwiIH0pLFxuICAgICAgICBjcmVhdGVDb250YWluZXIoXCJyb3dcIiwgW1xuICAgICAgICAgICAgY3JlYXRlVGV4dChcImtleVwiLCAxMiwgeyBjb2xvcjogXCJ3aGl0ZVwiLCB3b3JkQnJlYWs6IFwiYnJlYWstYWxsXCIgfSksXG4gICAgICAgICAgICBjcmVhdGVCdXR0b24oQnV0dG9uU3R5bGUuU2Vjb25kYXJ5LCBcImNvcHlLZXlUaXRsZVwiLCBhY3Rpb25zLmNvcHlLZXlBY3Rpb24sIHsgZm9udFNpemU6IFwiMTJweFwiIH0pXG4gICAgICAgIF0sIHsganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLCBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLCBnYXA6IFwiMTBweFwiLCBtYXJnaW5Cb3R0b206IFwiMTBweFwiIH0pLFxuXG4gICAgICAgIGNyZWF0ZVRleHQoXCJlbW9qaVRpdGxlXCIsIDEyLCB7IGNvbG9yOiBcImxpZ2h0Z3JheVwiLCBmb250V2VpZ2h0OiBcImJvbGRcIiB9KSxcbiAgICAgICAgY3JlYXRlQ29udGFpbmVyKFwicm93XCIsIFtcbiAgICAgICAgICAgIGNyZWF0ZVRleHQoXCJlbW9qaVwiLCAzMiwgeyBjb2xvcjogXCJ3aGl0ZVwiIH0pLFxuICAgICAgICAgICAgY3JlYXRlQnV0dG9uKEJ1dHRvblN0eWxlLlNlY29uZGFyeSwgXCJjb3B5RW1vamlUaXRsZVwiLCBhY3Rpb25zLmNvcHlFbW9qaUFjdGlvbiwgeyBmb250U2l6ZTogXCIxMnB4XCIgfSlcbiAgICAgICAgXSwgeyBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGdhcDogXCIxMHB4XCIsIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfSksXG5cbiAgICAgICAgY3JlYXRlQ29udGFpbmVyKFwicm93XCIsIFtcbiAgICAgICAgICAgIGNyZWF0ZUJ1dHRvbihCdXR0b25TdHlsZS5QcmltYXJ5LCBcImRldGFpbHNUaXRsZVwiLCBhY3Rpb25zLmRldGFpbHNBY3Rpb24sIHsgZm9udFNpemU6IFwiMTJweFwiIH0pXG4gICAgICAgIF0sIHsganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1lbmRcIiB9KVxuICAgIF0sIHtcbiAgICAgICAgcGFkZGluZzogXCIxMHB4XCJcbiAgICB9KTtcbn0iLCJpbXBvcnQge1xuICAgIEJ1dHRvblN0eWxlLFxuICAgIEJ1dHRvblRlbXBsYXRlRnJhZ21lbnQsXG4gICAgSW1hZ2VUZW1wbGF0ZUZyYWdtZW50LFxuICAgIFBsYWluQ29udGFpbmVyVGVtcGxhdGVGcmFnbWVudCxcbiAgICBUZW1wbGF0ZUZyYWdtZW50LFxuICAgIFRlbXBsYXRlRnJhZ21lbnRUeXBlcyxcbiAgICBUZXh0VGVtcGxhdGVGcmFnbWVudCxcbn0gZnJvbSBcIkBvcGVuZmluL3dvcmtzcGFjZVwiO1xuaW1wb3J0ICogYXMgQ1NTIGZyb20gXCJjc3N0eXBlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb250YWluZXIoY29udGFpbmVyVHlwZTogXCJjb2x1bW5cIiB8IFwicm93XCIsIGNoaWxkcmVuOiBUZW1wbGF0ZUZyYWdtZW50W10sIHN0eWxlPzogQ1NTLlByb3BlcnRpZXMpOiBQbGFpbkNvbnRhaW5lclRlbXBsYXRlRnJhZ21lbnQge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFRlbXBsYXRlRnJhZ21lbnRUeXBlcy5Db250YWluZXIsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IGNvbnRhaW5lclR5cGUsXG4gICAgICAgICAgICAuLi5zdHlsZVxuICAgICAgICB9LFxuICAgICAgICBjaGlsZHJlblxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRleHQoZGF0YUtleTogc3RyaW5nLCBmb250U2l6ZTogbnVtYmVyID0gMTQsIHN0eWxlPzogQ1NTLlByb3BlcnRpZXMpOiBUZXh0VGVtcGxhdGVGcmFnbWVudCB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogVGVtcGxhdGVGcmFnbWVudFR5cGVzLlRleHQsXG4gICAgICAgIGRhdGFLZXksXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBmb250U2l6ZTogYCR7Zm9udFNpemUgPz8gMTR9cHhgLFxuICAgICAgICAgICAgLi4uc3R5bGVcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUltYWdlKGRhdGFLZXk6IHN0cmluZywgYWx0ZXJuYXRpdmVUZXh0OiBzdHJpbmcsIHN0eWxlPzogQ1NTLlByb3BlcnRpZXMpOiBJbWFnZVRlbXBsYXRlRnJhZ21lbnQge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFRlbXBsYXRlRnJhZ21lbnRUeXBlcy5JbWFnZSxcbiAgICAgICAgZGF0YUtleSxcbiAgICAgICAgYWx0ZXJuYXRpdmVUZXh0LFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgLi4uc3R5bGVcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbihidXR0b25TdHlsZTogQnV0dG9uU3R5bGUsIHRpdGxlS2V5OiBzdHJpbmcsIGFjdGlvbjogc3RyaW5nLCBzdHlsZT86IENTUy5Qcm9wZXJ0aWVzKTogQnV0dG9uVGVtcGxhdGVGcmFnbWVudCB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogVGVtcGxhdGVGcmFnbWVudFR5cGVzLkJ1dHRvbixcbiAgICAgICAgYnV0dG9uU3R5bGUsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICBjcmVhdGVUZXh0KHRpdGxlS2V5LCAxMilcbiAgICAgICAgXSxcbiAgICAgICAgYWN0aW9uOiBhY3Rpb24sXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAuLi5zdHlsZVxuICAgICAgICB9XG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ubWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdHJldHVybiBtb2R1bGU7XG59OyIsImltcG9ydCB7IEVtb2ppSW50ZWdyYXRpb25Qcm92aWRlciB9IGZyb20gXCIuL2ludGVncmF0aW9uLXByb3ZpZGVyXCI7XG5cbmV4cG9ydCBjb25zdCBpbnRlZ3JhdGlvbiA9IG5ldyBFbW9qaUludGVncmF0aW9uUHJvdmlkZXIoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=