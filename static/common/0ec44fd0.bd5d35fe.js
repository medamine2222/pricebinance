"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="65c304e2-d335-522b-808c-b238c480b9a8")}catch(e){}}();
(self.webpackChunkmarket_activity_ui=self.webpackChunkmarket_activity_ui||[]).push([[9389],{xOkS:(e,t,n)=>{n.d(t,{I:()=>o});var i=n("DTvD"),o=n.n(i)().createContext({isReady:!1,isLoading:!1,themisHelper:void 0,config:{}})},fhHH:(e,t,n)=>{n.d(t,{m:()=>d});var i=n("BK7R"),o=n("DTvD"),r=n("BNuK"),a=n("decL"),l=n("ohKi"),c=n("6pFG"),u=n("Y5bC"),s={DOWNLOAD_URL_ANDROID:"https://ftp.binance.com/pack/Binance.apk",DOWNLOAD_URL_APPSTORE:"https://apps.apple.com/hk/app/binance/id1436799971?l=en",DOWNLOAD_URL_GOOGLEPLAY:"https://play.google.com/store/apps/details?id=com.binance.dev",DOWNLOAD_URL_MAC:"https://ftp.binance.com/electron-desktop/mac/production/binance.dmg",DOWNLOAD_URL_WINDOWS:"https://ftp.binance.com/pc_pack/Binance.exe",DOWNLOAD_URL_WINDOWS_BETA:"https://ftp.binance.com/electron-desktop/windows/production/binance-setup.exe"},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=(0,r.Gz)(),d=(0,i.A)({},s,(0,u.EV)()||{}).DOWNLOAD_URL_APPSTORE,p=(0,o.useMemo)((function(){return t&&"ios"===n&&d?d:/binance\.com/i.test(a.A5)?(0,l.eG)("/download",c.rh,{params:e}):(0,l.hL)("/download",{params:e})}),[n]);return{downloadLink:p}}},WS14:(e,t,n)=>{n.d(t,{x:()=>h});var i=n("BK7R"),o=n("QUKP"),r=n("aVXY"),a=n("DTvD"),l=n("HS2I"),c=n("nn0X"),u=n("4E8j"),s=n("EFG+"),d=n("TwBv");function p(){var e=(0,d.V)(),t=e.isHybrid,n=e.bridge,i=(0,u.S)().clientVersion,o=t&&(0,s.RO)(i,"2.57.0"),l=(0,r.A)((0,a.useState)("light"),2),c=l[0],p=l[1];return(0,a.useEffect)((function(){o&&(n.getAppConfig().then((function(e){(null===e||void 0===e?void 0:e.themeMode)&&p(e.themeMode)})).catch((function(e){console.log("Error while getting hybrid theme",e)})),n.on("theme-change",(function(e){var t=e.theme;t&&p(t)})))}),[o]),o?c:null}var m=n("zJWh"),f=n("LKsJ"),v=function(e){return[f.CV.LIGHT,f.CV.DARK].includes(e)},h=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=(0,r.A)((0,a.useState)(!1),2),u=n[0],s=n[1],d=(0,c.DP)(),h=d.isLight,g=d.toggleTheme,k=p(),w=(0,a.useMemo)((function(){return m.U.read(f.k4)}),[]),x=e||k||w;(0,a.useEffect)((function(){s(!1)}),[x]),(0,a.useEffect)((function(){var t=function(t){return w&&e&&w!==e&&m.U.writeCookieWithDomainLevelV2(f.k4,w,365,!0,"High"),""};return window.addEventListener("beforeunload",t,{once:!0}),function(){window.removeEventListener("beforeunload",t)}}),[]),(0,a.useEffect)((function(){u||t||(s(!0),v(x)&&x===f.CV.LIGHT!==h&&g())}),[h,t,x,u,g]);var A=(0,l.useTheme)(),b=A.theme,y=A.setTheme,L=A.toggleTheme,_=(0,l.useAllConfig)().setConfig;return(0,a.useEffect)((function(){!u&&t&&(s(!0),v(x)&&(b!==x&&y(x),e&&_((function(t){return(0,o.A)((0,i.A)({},t),{header:(0,o.A)((0,i.A)({},null===t||void 0===t?void 0:t.header),{theme:e}),footer:(0,o.A)((0,i.A)({},null===t||void 0===t?void 0:t.footer),{theme:e})})}))))}),[u,t,b,e,x]),(0,a.useEffect)((function(){t&&(v(b)&&(h?f.CV.LIGHT:f.CV.DARK)!==b&&g())}),[t,h,b]),{isLight:h,toggleTheme:t?L:g,themeChecked:u}}},"jj/5":(e,t,n)=>{n.d(t,{iO:()=>w,m$:()=>x,wi:()=>A});var i=n("sViW"),o=n("BK7R"),r=n("aVXY"),a=n("3yYM"),l=n.n(a),c=n("DTvD"),u=n("jqTx"),s=n("HS2I"),d=n("44NZ"),p=n("+vuS"),m=n("w98F"),f=n("xOkS"),v=n("zJWh"),h=function(){var e=(0,i.A)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.resolve(v.U.read("bnc-uuid")||""));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=n("0HvA"),k={},w=function(e,t){var n=e,a=(0,r.A)((0,c.useState)(n.trace_id),2),f=a[0],v=a[1];(0,c.useEffect)((function(){"undefined"===typeof f&&h().then((function(e){v(e||"")}))}),[f]);var k=function(){var e=(0,m.b)().isLoading,t=(null===s.useUserBaseDetail||void 0===s.useUserBaseDetail?void 0:(0,s.useUserBaseDetail)())||{},n=t.value,i=t.loading,o=(0,d.v)().userBaseInfo,r=p.q&&e||!!i;return{isLoading:r,baseInfo:r?void 0:n||o,load:function(){return Promise.resolve()}}}(),w=k.isLoading,x=k.baseInfo,A=n.uid||(null===x||void 0===x?void 0:x.userId),b=(0,r.A)((0,c.useState)(!0),2),y=b[0],L=b[1],_=(0,r.A)((0,c.useState)(!1),2),D=_[0],E=_[1],C=(0,r.A)((0,c.useState)(),2),S=C[0],j=C[1],T=(0,r.A)((0,c.useState)({}),2),I=T[0],B=T[1];return(0,c.useEffect)((function(){(0,i.A)(l().mark((function e(){var i;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!w&&"undefined"!==typeof f){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,u.Ay.init((0,o.A)({},n,f?{trace_id:f}:{},A?{uid:A}:{}),t,B);case 5:i=e.sent,j(i),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),g.vF.error("[utils | Themis] init error"),g.vF.error(e.t0);case 13:return e.prev=13,L(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[2,9,13,16]])})))()}),[f,A,w]),(0,c.useEffect)((function(){return S&&E(!0),function(){S&&S.unsubscribe(B)}}),[S]),{isLoading:y,isReady:D,themisHelper:S,config:I}},x=function(){return(0,c.useContext)(f.I)},A=function(){var e=function(){var e=x(),t=e.isReady,n=e.isLoading,i=e.themisHelper;return{config:(0,c.useMemo)((function(){return(null===i||void 0===i?void 0:i.getStrategiesConfig())||k}),[i]),isReady:t,isLoading:n}}(),t=e.config,n=e.isReady,i=e.isLoading,o=t.experiments;return{experiments:void 0===o?k:o,isReady:n,isLoading:i}}},ly0D:(e,t,n)=>{n.d(t,{G:()=>d});var i,o=n("sViW"),r=n("3yYM"),a=n.n(r),l=n("ohKi"),c=1e3,u=3e3;function s(){return(new Date).getTime()}function d(e){return p.apply(this,arguments)}function p(){return p=(0,o.A)(a().mark((function e(t){var n,o,r=arguments;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:u,o=!(r.length>2&&void 0!==r[2])||r[2],e.abrupt("return",new Promise((function(e){var r=!1,a=!1,u=s(),d=function(){(document.removeEventListener("visibilitychange",d,!1),"visible"!==document.visibilityState)&&(s()-u<=n&&(a=!0),e(a))};document.addEventListener("visibilitychange",d,!1),setTimeout((function(){e(!1)}),n),i?window.location.href=t:(o&&setTimeout((function(){r||a||(window.location.href=t)}),Math.min(n/2,c)),(i=document.createElement("iframe")).style.display="none",i.onload=function(){r=!0},i.src=(0,l.hL)(t,{params:{timestamp:+new Date}}),document.body.appendChild(i))})));case 2:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}},PoV5:(e,t,n)=>{n.d(t,{x:()=>s});var i=n("sViW"),o=n("3yYM"),r=n.n(o),a=n("tLF3"),l=n("w98F"),c=n("0HvA"),u=n("LSWm"),s=function(){var e=function(){var e=(0,l.b)(),t=e.isLoggedIn,n=e.isLoading,o=(0,a.A)(t?"useUserBaseDetail":null,(0,i.A)(r().mark((function e(){var t;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.sD)();case 3:if((null===(t=e.sent)||void 0===t?void 0:t.success)&&(null===t||void 0===t?void 0:t.data)){e.next=6;break}throw new Error("Invalid User Detail data");case 6:return e.abrupt("return",t.data);case 9:return e.prev=9,e.t0=e.catch(0),c.vF.error("[utils | useUserBaseDetail] error fetching user base detail"),c.vF.error(e.t0),e.abrupt("return",null);case 14:case"end":return e.stop()}}),e,null,[[0,9]])})))),s=o.data,d=void 0===s?null:s,p=o.isValidating;return{isLoading:n||p,data:d}}(),t=e.data;return{isLoading:e.isLoading,isSubAccount:!(null===t||void 0===t?void 0:t.isAssetSubAccount)&&!(null===t||void 0===t?void 0:t.isNoEmailSubUser)&&!!(null===t||void 0===t?void 0:t.subUser)}}},GqfJ:(e,t,n)=>{n.d(t,{A:()=>x});var i=n("BK7R"),o=n("aVXY"),r=n("sViW"),a=n("3yYM"),l=n.n(a),c=n("DTvD"),u=n.n(c),s=n("A1pX"),d=n("2XPn"),p=n("xj71"),m={api:"/bapi/composite/v1/friendly/growth-activity/validation/userCountryCheck",onApiError:function(){},onCheckOver:function(){}},f=n("kxKT"),v=n("LCuF"),h=n("yhUQ"),g=n("cJDP"),k=n("1eoB"),w=n("ycr1");const x=function(e){var t=e.desc,n=e.ctaText,a=e.onClick,x=void 0===a?function(){}:a,A=e.closable,b=void 0!==A&&A,y=e.apiCheckFailedText,L=void 0===y?"":y,_=e.api,D=e.onCheckOver,E=e.maskStyleSx,C=void 0===E?{}:E,S=(0,o.A)((0,c.useState)(!1),2),j=S[0],T=S[1],I=(0,w.A)().enqueueNotification,B=(0,c.useCallback)((function(e){var t=e.isRestricted,n=e.errorCode;t&&T(!0),D&&D({isRestricted:t,errorCode:n})}),[D]);!function(e){var t=(0,s.A)({},m,e),n=t.api,i=t.onApiError,a=t.onCheckOver,u=(0,o.A)((0,c.useState)(!0),2),f=u[0],v=u[1];(0,c.useEffect)((function(){var e=function(){var e=(0,r.A)(l().mark((function e(){var t,o,r,c;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,(0,d.J)("string"===typeof n?function(){return(0,p.bE)(n)}:n,1e3,10,i);case 3:r=e.sent,c=["236401","236402"].some((function(e){var t;return e===(null===r||void 0===r||null===(t=r.data)||void 0===t?void 0:t.errorCode)})),v(!1),a({isRestricted:c,errorCode:null===r||void 0===r||null===(t=r.data)||void 0===t?void 0:t.errorCode,country:null===r||void 0===r||null===(o=r.data)||void 0===o?void 0:o.country});case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[])}({api:_,onApiError:(0,c.useCallback)((function(){L&&I(L,{variant:"error",anchorOrigin:{vertical:"top",horizontal:"right"}})}),[L]),onCheckOver:B});var R=b||x;return u().createElement(f.A,{width:"298px",visible:j,maskStyles:(0,i.A)({bg:"#1E2329B3 !important",zIndex:"10000"},C)},u().createElement(v.A,{p:"29px 24px 24px",textAlign:"center"},u().createElement(k.A,{size:80}),"string"===typeof t?u().createElement(h.A,{mt:"16px",variant:"subtitle1",color:"t.primary",sx:{whiteSpace:"pre-line"}},t):t,R&&u().createElement(g.A,{mt:"24px",width:"100%",p:"10px 12px",onClick:b?function(e){x&&x(e),T(!1)}:x},n)))}},"pv4/":(e,t,n)=>{n.d(t,{A:()=>l});var i=n("M5j3"),o=n("DTvD"),r=n.n(o),a=n("w/Qz");const l=function(e){return r().createElement(a.A,(0,i.A)({width:"64",height:"64",viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),r().createElement("rect",{width:"64",height:"64",rx:"32",fill:"#14151A"}),r().createElement("path",{d:"M16 32L19.6129 28.3871L23.2258 32L19.6129 35.6129L16 32Z",fill:"#F0B90B"}),r().createElement("path",{d:"M22.1935 25.8065L32 16L41.8065 25.8065L38.1935 29.4194L32 23.2258L25.8065 29.4194L22.1935 25.8065Z",fill:"#F0B90B"}),r().createElement("path",{d:"M28.3871 32L32 28.3871L35.6129 32L32 35.6129L28.3871 32Z",fill:"#F0B90B"}),r().createElement("path",{d:"M25.8065 34.5806L22.1935 38.1935L32 48L41.8065 38.1935L38.1935 34.5806L32 40.7742L25.8065 34.5806Z",fill:"#F0B90B"}),r().createElement("path",{d:"M40.7742 32L44.3871 28.3871L48 32L44.3871 35.6129L40.7742 32Z",fill:"#F0B90B"}))}},"6wEY":(e,t,n)=>{n.d(t,{e:()=>l});var i=n("Y9i2"),o=n("fqkG"),r=n("XaLc"),a=n("6pFG"),l=function(){i.lL?o.A.back():(0,r.Z)({web:"/",hybrid:a.rh})}},"44NZ":(e,t,n)=>{n.d(t,{v:()=>u});var i=n("BK7R"),o=n("QUKP"),r=n("aVXY"),a=n("DTvD"),l=n("HIvj"),c={emailPrefix:"",formatEmail:"",tradeLevel:0,lastLoginTime:0,lastLoginIp:"",idPhoto:"-1",authenticationType:1,commissionStatus:!1,kycStatus:"-",withdrawWhiteStatus:!1},u=function(){var e=(0,l.Py)(),t=(0,r.A)((0,a.useState)((0,i.A)({},c,e)),2),n=t[0],u=t[1];return(0,a.useEffect)((function(){var t=e.email,n=e.commissionStatus,r=e.idPhoto,a=function(e){if(!e)return{emailPrefix:"**",formatEmail:"******"};var t=e.substr(0,2),n=e.split("@");return{emailPrefix:t,formatEmail:"".concat(t,"***@").concat(n[1])}}(t),l=a.emailPrefix,c=a.formatEmail;void 0!==r&&u((0,o.A)((0,i.A)({},e),{emailPrefix:l,commissionStatus:!!n,formatEmail:c,kycStatus:"1"===r}))}),[e]),{userBaseInfo:n,setUserBaseInfo:u}}},BOzF:(e,t,n)=>{n.d(t,{A:()=>je});var i=n("BK7R"),o=n("QUKP"),r=n("gZfF"),a=n("N/Z2"),l=n("jg1C"),c=n("DTvD"),u=n.n(c),s=n("g80r"),d=(n("LNcM"),n("qrhQ")),p=n("PbIZ"),m=n.n(p),f=n("BK9r"),v=n("uHCZ"),h=n("SFPm"),g=n("WS14"),k=n("JfTh"),w=n("ohKi"),x=n("jj/5"),A=n("xOkS");const b=function(e){var t=e.params,n=e.options,i=e.children,o=(0,x.iO)(t,n),r=o.isReady,a=o.isLoading,l=o.themisHelper,c=o.config;return u().createElement(A.I.Provider,{value:{isReady:r,isLoading:a,themisHelper:l,config:c}},i)};var y=n("aVXY"),L=n("6wEY"),_=n("ZJJD"),D=n("0HvA"),E=n("+91c"),C=n("yhUQ"),S=n("kxKT"),j=n("LCuF"),T=n("cJDP"),I=n("1eoB"),B=n("ycr1"),R=function(e){var t=e.content,n=e.defaultRender;return"string"===typeof t?n(t):t},F=function(e){var t=e.title,n=e.desc;return n?u().createElement(u().Fragment,null,u().createElement(R,{content:t,defaultRender:function(e){return u().createElement(C.A,{mt:"8px",variant:"subtitle1",color:"t.primary"},e)}}),u().createElement(R,{content:n,defaultRender:function(e){return u().createElement(C.A,{mt:"8px",variant:"body1",color:"t.primary"},e)}})):u().createElement(R,{content:t,defaultRender:function(e){return u().createElement(C.A,{mt:"16px",variant:"subtitle1",color:"t.primary",sx:{whiteSpace:"pre-line"}},e)}})};const O=function(e){var t=e.apiParams,n=e.checkFn,o=void 0===n?function(e){return e.passed}:n,r=e.callback,a=e.nonLoginTitle,l=e.nonLoginDesc,s=e.loggedInTitle,d=e.loggedInDesc,p=e.nonLoginButtonText,m=e.loggedInButtonText,f=e.closableButtonText,v=void 0===f?"OK":f,h=e.closableCheckFn,g=void 0===h?function(){return!1}:h,k=e.onCTAClick,w=e.apiCheckFailedText,x=void 0===w?"Unexpected Error":w,A=e.maskStyleSx,b=void 0===A?{}:A,C=(0,y.A)((0,c.useState)(!1),2),R=C[0],O=C[1],P=(0,y.A)((0,c.useState)(!1),2),M=P[0],W=P[1],V=(0,B.A)().enqueueNotification,K=(0,_.v)(),J=K.login,U=K.isLoggedIn,H=K.isLoading,N=(0,c.useCallback)((function(){x&&V(x,{variant:"error",anchorOrigin:{vertical:"top",horizontal:"right"}}),D.vF.error("[CSR] User Eligibility Check failed")}),[x,V]),Y=(0,E._)(t,N),G=Y.isChecking,Z=Y.userEligibility;return(0,c.useEffect)((function(){!G&&Z&&(o(Z)||(O(!0),W(!!(null===g||void 0===g?void 0:g(Z)))),null===r||void 0===r||r(Z))}),[G,Z]),H?null:u().createElement(S.A,{width:"298px",visible:R,maskStyles:(0,i.A)({bg:"#1E2329B3 !important",backdropFilter:"blur(10px)",zIndex:10005},b)},u().createElement(j.A,{p:"29px 24px 24px",textAlign:"center"},u().createElement(I.A,{size:80}),u().createElement(F,{title:U&&s||a,desc:U&&d||l}),u().createElement(T.A,{mt:"24px",width:"100%",p:"10px 12px",onClick:function(){k?(M&&O(!1),k()):M?O(!1):U?(0,L.e)():J()}},M?v||p:U&&m||p)))};var P=n("PoV5"),M=n("b4zg"),W=n("k5JY"),V=n("YgAF"),K=n("D4P9");const J=function(e){var t=e.title,n=e.desc,i=e.buttonText,o=e.onCTAClick,r=(0,P.x)(),a=r.isLoading,l=r.isSubAccount;return u().createElement(W.A,{visible:!a&&l},u().createElement(V.A,{title:t,description:n,icon:u().createElement(M.A,{name:"GeneralWarning"}),actions:u().createElement(K.A,{style:{width:"100%"},onClick:function(){o?o():(0,L.e)()}},i)}))};var U=n("sViW"),H=n("3yYM"),N=n.n(H),Y=n("A1pX"),G=n("Pac+"),Z=n("Y9i2"),z=n("15Ml"),q=n("fLtG"),X=n("ly0D"),Q=n("decL"),$=n("fhHH"),ee="universal_link_fallback",te="universal_link_fallback_stay_web",ne=function(){var e;return+((null===window||void 0===window||null===(e=window.sessionStorage)||void 0===e?void 0:e.getItem(te))||0)>Date.now()},ie={autoJump:!1,timeout:3e3,fallbackOpenDeeplink:!0,fallbackRedirectDownload:!0,stayWebDuration:12e5},oe={dpDetected:"universal_link_fallback_detected",usePageDefaultDeeplink:"universal_link_fallback_usePageDefaultDeeplink",appAutoJump:"universal_link_fallback_app_auto_jump",appJumpInit:"universal_link_fallback_app_jump_init",appJumpSuccess:"universal_link_fallback_app_jump_success",appJumpFailed:"universal_link_fallback_app_jump_failed",fallbackRedirectDownload:"universal_link_fallback_redirect_download",userSelectWeb:"universal_link_fallback_user_select_web",userSelectApp:"universal_link_fallback_user_select_app",userClickDownload:"universal_link_fallback_user_click_download"},re=["pageName","extraInfo"],ae=n("n3+s"),le=n("C6y2"),ce=n("T3Fm"),ue=n("pv4/"),se="universal_link_popup_download_click",de="universal_link_popup_app_click",pe="universal_link_popup_web_click";const me=ce.o?function(e){var t=e.image,n=e.title,r=e.subtitle,a=e.stayWebButtonText,l=e.appJumpButtonText,s=e.downloadButtonText,d=e.appJumpSettings,p=e.pageTrackSettings,m=e.onClose,v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0,n=(0,f.K7)(),r=n.query,a=r._dp,l=r.utm_medium,u=r.utm_campaign,s=n.pathname,d=(0,c.useMemo)((function(){return(0,z.X)()}),[]),p=(0,c.useMemo)((function(){return(0,Y.A)({},(0,o.A)((0,i.A)({},oe),{pageName:s}),(0,G.A)(t||{},re))}),[]),m=(0,c.useCallback)((function(e,t){return(0,q.u)(e,(0,Y.A)({},(0,G.A)(p,re),t))}),[p]),v=(0,c.useMemo)((function(){return(0,Y.A)({},ie,e)}),[]),h=v.defaultDeeplink,g=v.autoJump,k=v.timeout,x=v.fallbackOpenDeeplink,A=v.onCallback,b=v.fallbackRedirectDownload,L=v.stayWebDuration,_=(0,$.m)((0,i.A)({utm_source:ee},l?{utm_medium:l}:{},u?{utm_campaign:u}:{}),!1).downloadLink,D=(0,y.A)((0,c.useState)(""),2),E=D[0],C=D[1];(0,c.useEffect)((function(){var e="";if(d){if(a){var t="";try{var n;t=(null===window||void 0===window||null===(n=window.atob)||void 0===n?void 0:n.call(window,a))||""}catch(o){console.error("Invalid _dp value :",o),t=""}/^(\/.+|bnc)/.test(t)&&(e=t.startsWith("/")?"bnc://app.binance.com".concat(t):t,m("ModuleView",{elementID:p.dpDetected,extraInfo:{deeplink:e}}))}if(!e&&h&&!ne()){var i=(0,Q.bk)(["_dp"]);(e=/^bnc/.test(null===h||void 0===h?void 0:h.toString())?h:Z.ZL?(0,w.um)(i,{},/\.binance\.com/i.test(i)?{}:{needDynamic:!0}):"")&&m("ModuleView",{elementID:p.usePageDefaultDeeplink,extraInfo:{deeplink:e}})}}C(e||"")}),[h,a,d]);var S=function(){var e=(0,U.A)(N().mark((function e(){var t;return N().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=!1,!E){e.next=7;break}return m("ModuleView",{elementID:p.appJumpInit,extraInfo:{deeplink:E}}),e.next=5,(0,X.G)(E,k,x);case 5:t=e.sent,m("ModuleView",{elementID:t?p.appJumpSuccess:p.appJumpFailed,extraInfo:{deeplink:E}});case 7:A&&A(t),!t&&b&&(m("ModuleView",{elementID:p.fallbackRedirectDownload,extraInfo:{deeplink:E}}),window.location.href=_);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,c.useEffect)((function(){E&&g&&(m("ModuleView",{elementID:p.appAutoJump,extraInfo:{deeplink:E}}),S())}),[E,g]),{hasDeeplink:!!E,handleClickStayWeb:function(){var e;m("webClick",{elementID:p.userSelectWeb}),h&&L&&(null===window||void 0===window?void 0:window.sessionStorage)&&(null===window||void 0===window||null===(e=window.sessionStorage)||void 0===e||e.setItem(te,(Date.now()+L).toString()));var t=(0,Q.bk)(["_dp"]);window.history.replaceState({},document.title,t),C("")},handleClickAppJump:function(){m("webClick",{elementID:p.userSelectApp,extraInfo:{deeplink:E}}),S()},handleClickDownload:function(){m("webClick",{elementID:p.userClickDownload}),window.location.href=_}}}(d,p),h=v.hasDeeplink,g=v.handleClickStayWeb,k=v.handleClickAppJump,x=v.handleClickDownload,A=(0,y.A)((0,c.useState)(!1),2),b=A[0],L=A[1];(0,c.useEffect)((function(){var e;Z.ZL&&h&&(L(!0),(0,ae.Rk)({pageName:(null===p||void 0===p?void 0:p.pageName)||(null===window||void 0===window||null===(e=window.location)||void 0===e?void 0:e.pathname),elementID:"universal_link_fallback_popup_shown"}))}),[h]);var _=function(e){e===de&&k(),e===pe&&g(),e===se&&x(),L(!1),null===m||void 0===m||m()};return Z.ZL?u().createElement(S.A,{visible:b,sx:{p:4,width:"300px",maxWidth:"90%"}},u().createElement(le.A,{flexDirection:"column",alignItems:"center"},t||u().createElement(ue.A,{size:"64px"}),u().createElement(C.A,{variant:"headline6",color:"t.primary",mt:"3"},n||"View in Binance App"),r?u().createElement(C.A,{mt:"2",variant:"body2",color:"t.primary",textAlign:"center"},r):null,u().createElement(le.A,{mt:"5",width:"100%",alignItems:"center"},u().createElement(T.A,{sz:"large",colorStyle:"secondary",sx:{flex:1},onClick:function(){return _(pe)}},a||"Stay here"),u().createElement(T.A,{sz:"large",sx:{flex:1,marginInlineStart:"8px"},onClick:function(){return _(de)}},l||"OK")),u().createElement(T.A,{mt:"2",variant:"text",sz:"large",onClick:function(){return _(se)}},s||"Download Binance App"))):null}:function(){return null};var fe=n("VpKJ"),ve=n("HDxn"),he=n("XaLc"),ge=n("GqfJ"),ke=n("c+5G"),we=n("+14B");const xe=function(e){var t=e.api,n=e.onCheckOver,r=(0,we.A)().t,a=(0,_.v)({returnToUrl:Q.nk}),c=a.login,u=a.isLoggedIn||!1;return(0,l.jsx)(ge.A,(0,o.A)((0,i.A)({},t?{api:t}:{}),{onCheckOver:n,desc:u?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(C.A,{mt:"8px",variant:"subtitle1",color:"t.primary",children:r("common-country-restriction-title")}),(0,l.jsx)(C.A,{mt:"8px",variant:"body1",color:"t.primary",children:r("common-country-restriction-desc")})]}):r("common-country-restriction-nonLogin"),ctaText:r(u?"common-country-restriction-homepage":"btn-ok"),onClick:function(){u?(0,he.Z)({web:"https://".concat(window.location.host),ios:"".concat(ke.YI,"/main/main"),android:"".concat(ke.YI,"/main/main")}):c()},closable:!1,apiCheckFailedText:r("common-country-restriction-checkfail")}))};var Ae=n("hw5f"),be=n("al9N"),ye=function(){return(0,be.q)(ke.K5),(0,l.jsx)(u().Fragment,{})},Le=n("XLaE"),_e=n("Lp65"),De=n("eeEA");const Ee=function(e){var t=e.children;return(0,l.jsx)(Le.t,{onError:function(e){var t;D.vF.log("CSR ErrorBoundary",{path:null===window||void 0===window||null===(t=window.location)||void 0===t?void 0:t.pathname,error:e,errMsg:null===e||void 0===e?void 0:e.message}),D.vF.log(e)},fallback:function(){return(0,l.jsx)(_e.A,{style:{width:"100vw",height:"80vh",justifyContent:"center",alignItems:"center",backgroundColor:"var(--color-bg1)"},children:(0,l.jsx)(De.Ay,{className:"typography-subtitle1",style:{color:"var(--color-textPrimary)"},children:"An error occured, please try again later."})})},children:t})};function Ce(){var e=(0,a.A)(["\n            #__APP_HEADER {\n              ","\n            }\n            #__APP_FOOTER {\n              ","\n            }\n            body {\n              background-color: ",";\n            }\n          "]);return Ce=function(){return e},e}var Se=(0,h.S)().isHybrid;const je=function(e){return function(t){var n=t.withThemis,o=void 0!==n&&n,a=(0,r.A)(t,["withThemis"]);return o?(0,l.jsx)(b,{params:(0,i.A)({env:ke.lF},(0,d.A)(null===o||void 0===o?void 0:o.params)?o.params:{}),options:(0,i.A)({authHeader:ke.d9},(0,d.A)(null===o||void 0===o?void 0:o.options)?o.options:{}),children:(0,l.jsx)(e,(0,i.A)({},a))}):(0,l.jsx)(e,(0,i.A)({},a))}}((Te=function(e){var t,n,a=(0,k.B)().t,u=(0,k.B)("widget-common").t,s=e.metaData,p=void 0===s?{}:s,h=e.path,g=void 0===h?"":h,x=e.host,A=void 0===x?"":x,b=e.linkData,y=void 0===b?[]:b,L=e.withChat,_=void 0===L||L,D=e.universalLinkFallback,E=void 0!==D&&D,S=e.withCountryRestriction,j=void 0!==S&&S,T=e.withUserEligibility,I=void 0!==T&&T,B=e.withSubAccountRestriction,R=void 0!==B&&B,F=p.metaTitleKey,P=p.metaDescriptionKey,M=p.metaKeywordsKey,W=(0,f.K7)().matches,V=null===W||void 0===W||null===(t=W[0])||void 0===t||null===(n=t.route)||void 0===n?void 0:n.path.includes("your-crypto-journey-2021"),K=(0,fe.My)({canonicalBase:A,langRules:[{test:"/:pre/:after*",path:"/#lang/:after"}]})({req:{path:g}}),U=p.ogImage||"".concat(ke.Vm,"/static/images/common/ogImage.jpg"),H=p.ogUrl||"https://www.binance.com";setTimeout((function(){return m()().observe()}));var N=(0,Ae.Qf)().isMobile,Y=(0,c.useState)(!1),G=Y[0],Z=Y[1],z=!Se&&_&&!V,q=(0,c.useMemo)((function(){var e=p.noIndex,t=void 0!==e&&e,n=p.noFollow,i=void 0!==n&&n;if(!t&&!i)return null;var o=[t&&"noindex",i&&"nofollow"].filter(Boolean).join(",");return(0,l.jsx)("meta",{name:"robots",content:o})}),[p.noIndex,p.noFollow]),X=F?a(F):p.metaTitle||p.title,Q=P?a(P):p.description,$=M?a(M):p.keywords;return(0,l.jsxs)(Ee,{children:[(0,l.jsxs)(v.A,{children:[(0,l.jsx)("link",{rel:"preconnect",href:ke.K5}),y.map((function(e){var t=e.rel,n=e.href,a=(0,r.A)(e,["rel","href"]);return(0,c.createElement)("link",(0,o.A)((0,i.A)({},a),{rel:t,href:n,key:"".concat(t,"-").concat(n)}))})),(0,l.jsx)("title",{children:X}),$?(0,l.jsx)("meta",{name:"keywords",content:$}):null,Q?(0,l.jsx)(c.Fragment,{children:(0,l.jsx)("meta",{name:"description",content:Q})}):null,q,(0,l.jsx)("meta",{property:"og:url",content:H}),(0,l.jsx)("meta",{property:"og:type",content:"website"}),(0,l.jsx)("meta",{property:"og:title",content:X}),(0,l.jsx)("meta",{property:"og:site_name",content:ke.qt}),(0,l.jsx)("meta",{property:"og:image",content:U}),(0,l.jsx)("meta",{property:"twitter:title",content:X}),(0,l.jsx)("meta",{property:"twitter:site",content:ke.qt}),(0,l.jsx)("meta",{property:"twitter:image",content:U}),(0,l.jsx)("meta",{property:"twitter:image:src",content:U}),(0,l.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),N&&(0,l.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"}),K.map((function(e){var t=e.lang,n=(0,r.A)(e,["lang"]);return(0,l.jsx)("link",(0,i.A)({},n),t)})),p.alternateLanguageMap&&(0,l.jsxs)(l.Fragment,{children:[Object.keys(p.alternateLanguageMap||{}).map((function(e){return(0,l.jsx)("link",{rel:"alternate",hrefLang:e,href:(0,w.hL)("".concat(A).concat(g),{params:{hl:e}})},e)})),(0,l.jsx)("link",{rel:"alternate",hrefLang:"x-default",href:(0,w.hL)("".concat(A).concat(g),{params:{hl:"en"}})})]})]}),j&&(0,l.jsx)(xe,(0,i.A)({},"object"===typeof j?j:{})),I&&(0,l.jsx)(O,(0,i.A)({checkFn:function(e){return e.compliancePassed},nonLoginTitle:G?(0,l.jsx)(C.A,{mt:"16px",variant:"subtitle1",color:"t.primary",sx:{whiteSpace:"pre-line"},children:u("popup-orionRestriction-nonLogin-desc",null,null,{announcementLink:(0,l.jsx)(ve.A,{href:"/support/announcement",target:"_blank"}),termLink:(0,l.jsx)(ve.A,{href:"/terms",target:"_blank"})})}):u("popup-complianceRestriction-nonLogin-desc"),loggedInTitle:a("common-country-restriction-title"),loggedInDesc:G?(0,l.jsx)(C.A,{mt:"8px",variant:"body1",color:"t.primary",children:u("popup-orionRestriction-login-desc",null,null,{announcementLink:(0,l.jsx)(ve.A,{href:"/support/announcement",target:"_blank"}),termLink:(0,l.jsx)(ve.A,{href:"/terms",target:"_blank"})})}):u("popup-complianceRestriction-login-desc"),nonLoginButtonText:u("common-text-ok"),loggedInButtonText:u("common-text-backToHomepage"),callback:function(e){var t=e.compliancePassed,n=e.orionPassed;t&&!n&&Z(!0)}},"object"===typeof I?I:{})),R&&(0,l.jsx)(J,(0,i.A)({title:a("common-subAccount-restriction-title"),desc:a("common-subAccount-restriction-desc"),buttonText:a("common-country-restriction-homepage")},"object"===typeof R?R:{})),z&&(0,l.jsx)(ye,{}),e.children,E?(0,l.jsx)(me,(0,i.A)({title:u("popup-universalLink-title"),subtitle:u("popup-universalLink-subtitle"),stayWebButtonText:u("popup-universalLink-cta-stayWeb"),appJumpButtonText:u("popup-universalLink-cta-appJump"),downloadButtonText:u("popup-universalLink-cta-downloadApp")},(0,d.A)(E)?E:{})):null]})},function(e){var t=e.withHeader,n=e.withFooter,o=(e.withThemeToggle,e.theme),a=(0,r.A)(e,["withHeader","withFooter","withThemeToggle","theme"]),c=(0,g.x)(o,!0).isLight;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.Global,{styles:(0,s.css)(Ce(),!Se&&t?"":"display: none;",n?"":"display: none;",c?"#ffffff":"#181A20")}),(0,l.jsx)(Te,(0,i.A)({},a))]})}));var Te}}]);
//# debugId=65c304e2-d335-522b-808c-b238c480b9a8
