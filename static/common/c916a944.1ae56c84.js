"use strict";
!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="4e495c9f-41b7-5ffb-8e96-072838eff52d")}catch(e){}}();
(self.webpackChunkmarket_activity_ui=self.webpackChunkmarket_activity_ui||[]).push([[5336],{"1POC":(e,t,n)=>{n.d(t,{f:()=>d,j:()=>h});var r=(0,n("WCX4").P)(),o=r.platform,i=o.isMobile,a=o.isPc,c=o.isTablet,u=r.hybrid,s=u.isHybrid,l=u.clientType,f=u.clientVersion,h={isMobile:i,isPc:a,isTablet:c},d=function(e,t){if(!s)return!1;if(!l||!f)return!1;for(var n={iOS:e,Android:t}[l].split("."),r=f.split("."),o=0;o<3;){if(+r[o]>+n[o])return!0;if(+r[o]<+n[o])return!1;o++}return!0}},r0qV:(e,t,n)=>{n.d(t,{r:()=>s});var r=n("sViW"),o=n("BK7R"),i=n("3yYM"),a=n.n(i),c=n("sJaZ"),u=n("VGH2"),s=function(){var e=(0,r.A)(a().mark((function e(t){var n,r,i,s,l,f,h,d,p,m,g,v,w,y,b,x;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.title,r=t.desc,i=t.url,s=void 0===i?"":i,l=t.image,f=void 0===l?u.Gx:l,h=t.callback,d=void 0===h?function(){}:h,p=t.trackTags,m=void 0===p?{}:p,g=t.directShare,v=t.source,w=void 0===v?"":v,y=t.withShareQuery,b=void 0===y||y,x=t.widthShareQuery,(void 0===x?b:x)&&(s=(0,u.Xx)(s,(0,o.A)({utm_medium:"app_share_link".concat(g?"_".concat(g):"")},w&&{utm_source:w}))),e.prev=3,e.next=6,(0,u.u4)({trackTags:m,shareType:"share_link",shareStage:c.Qu.click,shareTarget:g});case 6:return e.next=8,u.yS.share((0,o.A)({type:c.I9.link,title:null!==n&&void 0!==n?n:r,content:null!==r&&void 0!==r?r:n,link:s,directShare:g},f&&{imageLink:f}));case 8:return d({success:!0,target:g}),e.next=11,(0,u.u4)({trackTags:m,shareType:"share_link",shareStage:c.Qu.success});case 11:e.next=17;break;case 13:e.prev=13,e.t0=e.catch(3),console.error("web-share-sdk",e.t0),d({success:!1,error:e.t0,target:g});case 17:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(t){return e.apply(this,arguments)}}()},o7Qp:(e,t,n)=>{n.d(t,{x:()=>l});var r=n("sViW"),o=n("3yYM"),i=n.n(o),a=n("XORh"),c=n.n(a),u=n("sJaZ"),s=n("VGH2"),l=c()(function(){var e=(0,r.A)(i().mark((function e(t,n){var o,a,c;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=t.simulate,a=void 0===o||o,c=function(){var e=(0,r.A)(i().mark((function e(){var o,a,c,l,f,h,d,p,m,g,v,w,y,b,x,k,P,A,T;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.url,a=t.title,c=t.desc,l=t.image,f=t.callback,h=void 0===f?function(){}:f,d=t.trackTags,p=void 0===d?{}:d,m=t.withShareQuery,g=void 0===m||m,v=t.widthShareQuery,w=void 0===v?g:v,y=(n||(o?u.I9.link:u.I9.image)).toLowerCase(),w&&o&&(o=(0,s.Xx)(o,{utm_medium:"navigator_share_".concat(y)})),e.prev=4,e.next=7,(0,s.u4)({trackTags:p,shareType:"share_".concat(y),shareStage:u.Qu.click});case 7:if(b=function(){var e=(0,r.A)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={url:o,title:null!==a&&void 0!==a?a:c,text:null!==c&&void 0!==c?c:a},t&&window.navigator.canShare({files:[t]})&&(n.files=[t]),e.next=4,(null===window||void 0===window?void 0:window.navigator).share(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),"string"!==typeof l||!l.startsWith("#")){e.next=12;break}return e.next=11,(0,s.by)(l);case 11:l=e.sent;case 12:if(!(0,s.fk)(l)){e.next=21;break}return e.next=15,(0,s.Lc)(l);case 15:return x=e.sent,k=(0,s.Z)(x),e.next=19,b(k);case 19:e.next=38;break;case 21:if(!(null===l||void 0===l?void 0:l.startsWith("http"))){e.next=30;break}return e.next=24,(0,s.Wj)(l);case 24:return P=e.sent,A=(0,s.Z)(P),e.next=28,b(A);case 28:e.next=38;break;case 30:if(!(null===l||void 0===l?void 0:l.startsWith("data:image"))){e.next=36;break}return T=(0,s.Z)(l),e.next=34,b(T);case 34:e.next=38;break;case 36:return e.next=38,b();case 38:return e.next=40,(0,s.u4)({trackTags:p,shareType:"share_".concat(y),shareStage:u.Qu.success});case 40:h({success:!0}),e.next=47;break;case 43:e.prev=43,e.t0=e.catch(4),console.error("web-share-sdk",e.t0),h({success:!1,error:e.t0});case 47:case"end":return e.stop()}}),e,null,[[4,43]])})));return function(){return e.apply(this,arguments)}}(),a?(document.body.addEventListener("click",c),document.body.click(),document.body.removeEventListener("click",c)):c();case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),3e3)},sJaZ:(e,t,n)=>{var r,o,i,a;n.d(t,{Dp:()=>o,I9:()=>i,Qu:()=>a,We:()=>r}),function(e){e.twitter="twitter",e.weibo="weibo",e.qq="qq",e.linkedin="linkedin",e.facebook="facebook",e.instagram="instagram",e.vk="vk",e.telegram="telegram",e.reddit="reddit",e.whatsapp="whatsapp",e.copy="copy",e.sms="sms",e.wechat="wechat",e.wechat_moments="wechat_moments",e.download="download",e.system="system"}(r||(r={})),function(e){e[e.app=0]="app",e[e.system=1]="system"}(o||(o={})),function(e){e.link="LINK",e.image="IMAGE"}(i||(i={})),function(e){e.show="show",e.click="click",e.success="success"}(a||(a={}))},VGH2:(e,t,n)=>{n.d(t,{Gx:()=>V,Xx:()=>Z,Z:()=>X,yS:()=>D,Dt:()=>J,Cc:()=>F,Lc:()=>Q,lF:()=>N,h$:()=>O,by:()=>q,Wj:()=>G,fk:()=>$,S$:()=>H,Ah:()=>z,u4:()=>K});var r=n("sViW"),o=n("2URn"),i=n("BK7R"),a=n("QUKP"),c=n("gZfF"),u=n("3yYM"),s=n.n(u),l=n("JBtm"),f=n("Cjys"),h=n("0TSx"),d=n("n3+s"),p=n("Utn3"),m=n("1POC"),g=function(){var e=function(e){var t=/\.([^\.\/]*?)$/g.exec(e.split("?")[0]);return t?t[1]:""},t=function(e,t){var n=window.getComputedStyle(e).getPropertyValue(t);return parseFloat(n.replace("px",""))};return{escape:function(e){return e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")},parseExtension:e,mimeType:function(t){var n=e(t).toLowerCase();return function(){var e="application/font-woff",t="image/jpeg";return{woff:e,woff2:e,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:t,jpeg:t,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"}}()[n]||""},dataAsUrl:function(e,t){return"data:".concat(t,";base64,").concat(e)},isDataUrl:function(e){return-1!==e.search(/^(data:)/)},canvasToBlob:function(e){return e.toBlob?new Promise((function(t){e.toBlob(t)})):function(e){return new Promise((function(t){for(var n=window.atob(e.toDataURL().split(",")[1]),r=n.length,o=new Uint8Array(r),i=0;i<r;i++)o[i]=n.charCodeAt(i);t(new Blob([o],{type:"image/png"}))}))}(e)},resolveUrl:function(e,t){var n;if(e.startsWith("http"))return e;var r=new URL(t),o=e.replace(/^\.?\//,""),i=e.startsWith("/")?"".concat(r.origin,"/"):null===(n=r.href.match(/^.*\//))||void 0===n?void 0:n[0];return"".concat(i).concat(o)},getAndEncode:function(e){return P.impl.options.cacheBust&&(e+=(/\?/.test(e)?"&":"?")+(new Date).getTime()),new Promise((function(t){var n,r=new XMLHttpRequest;if(r.onreadystatechange=function(){if(4!==r.readyState)return;if(200!==r.status)return void(n?t(n):i("cannot fetch resource: ".concat(e,", status: ").concat(r.status)));var o=new FileReader;o.onloadend=function(){var e=o.result.split(/,/)[1];t(e)},o.readAsDataURL(r.response)},r.ontimeout=function(){n?t(n):i("timeout of ".concat(3e4,"ms occured while fetching resource: ").concat(e))},r.responseType="blob",r.timeout=3e4,r.open("GET",e,!0),r.send(),P.impl.options.imagePlaceholder){var o=P.impl.options.imagePlaceholder.split(/,/);o&&o[1]&&(n=o[1])}function i(e){console.error(e),t("")}}))},uid:function(){var e=0;return function(){return"u".concat("0000".concat((Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)).concat(e++)}}(),delay:function(e){return function(t){return new Promise((function(n){setTimeout((function(){n(t)}),e)}))}},asArray:function(e){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t},escapeXhtml:function(e){return e.replace(/#/g,"%23").replace(/\n/g,"%0A")},makeImage:function(e){return new Promise((function(t,n){var r=new Image;r.onload=function(){t(r)},r.onerror=n,r.src=e}))},width:function(e){var n=t(e,"border-left-width"),r=t(e,"border-right-width");return e.scrollWidth+n+r},height:function(e){var n=t(e,"border-top-width"),r=t(e,"border-bottom-width");return e.scrollHeight+n+r}}}(),v=function(){var e=function(e){return-1!==e.search(o)},t=function(e){for(var t,n=[];null!==(t=o.exec(e));)n.push(t[1]);return n.filter((function(e){return!g.isDataUrl(e)}))},n=function(e,t,n,r){return Promise.resolve(t).then((function(e){return n?g.resolveUrl(e,n):e})).then(r||g.getAndEncode).then((function(e){return g.dataAsUrl(e,g.mimeType(t))})).then((function(n){return e.replace((r=t,new RegExp("(url\\(['\"]?)(".concat(g.escape(r),")(['\"]?\\))"),"g")),"$1".concat(n,"$3"));var r}))},r=function(e){return e.filter((function(e){return!b.some((function(t){return e.includes(".".concat(t))}))}))},o=/url\(['"]?([^'"]+?)['"]?\)/g;return{inlineAll:function(o,i,a){return e(o)?Promise.resolve(o).then(t).then(r).then((function(e){var t=Promise.resolve(o);return e.forEach((function(e){t=t.then((function(t){return n(t,e,i,a)}))})),t})):Promise.resolve(o)},shouldProcess:e,impl:{readUrls:t,inline:n}}}(),w=function(){var e=function(){return Promise.resolve(g.asArray(document.styleSheets)).then((function(e){var t=[];return e.forEach((function(e){try{g.asArray(e.cssRules||[]).forEach(t.push.bind(t))}catch(n){console.log("Error while reading CSS rules from ".concat(e.href),n.toString())}})),t})).then((function(e){var t=new Set;return e.filter((function(e){return e.type===CSSRule.FONT_FACE_RULE})).filter((function(e){return v.shouldProcess(e.style.getPropertyValue("src"))})).filter((function(e){return function(e,t){var n,r=e.style.getPropertyValue("src");if(Object.keys(x).some((function(e){return n=e,r.includes(e)}))&&!t.has(n)){var o=x[n].fontWeight;return e.style.setProperty("font-weight",o),t.add(n),!0}return!1}(e,t)}))})).then((function(t){return t.map(e)}));function e(e){return{resolve:function(){var t=(e.parentStyleSheet||{}).href;return v.inlineAll(e.cssText,t)},src:function(){return e.style.getPropertyValue("src")}}}};return{resolveAll:function(){return e(document).then((function(e){return Promise.all(e.map((function(e){return e.resolve()})))})).then((function(e){return e.join("\n")}))},impl:{readAll:e}}}(),y=function(){var e=function(e){return{inline:function(t){return g.isDataUrl(e.src)?Promise.resolve():Promise.resolve(e.src+"?v="+Math.random()).then(t||g.getAndEncode).then((function(t){return g.dataAsUrl(t,g.mimeType(e.src))})).then((function(t){return new Promise((function(n,r){e.onload=n,e.onerror=r,e.src=t}))})).catch((function(e){return console.log(e)}))}}};return{inlineAll:function t(n){return(0,o.A)(n,Element)?r(n).then((function(){return(0,o.A)(n,HTMLImageElement)?e(n).inline():Promise.all(g.asArray(n.childNodes).map((function(e){return t(e)})))})):Promise.resolve(n);function r(e){var t=e.style.getPropertyValue("background");return t?v.inlineAll(t).then((function(t){e.style.setProperty("background",t,e.style.getPropertyPriority("background"))})).then((function(){return e})):Promise.resolve(e)}},impl:{newImage:e}}}(),b=["eot","woff","svg"],x={"BinancePlex-Light.woff2":{fontWeight:"200 300"},"BinancePlex-Regular.woff2":{fontWeight:"400"},"BinancePlex-Medium.woff2":{fontWeight:"500"},"BinancePlex-SemiBold.woff2":{fontWeight:"600 800"},"digital-numbers-regular.ttf":{fontWeight:"400"},"IBMPlexSans-Bold.woff2":{fontWeight:"700"},"BinancePlex-Bold.woff2":{fontWeight:"900"}},k={imagePlaceholder:void 0,cacheBust:!0},P={toSvg:A,toPng:function(e,t){return T(e,t||{}).then((function(e){return e.toDataURL()}))},toJpeg:function(e,t){return T(e,t=t||{}).then((function(e){return e.toDataURL("image/jpeg",t.quality||1)}))},impl:{fontFaces:w,images:y,util:g,inliner:v,options:{}}};function A(e,t){return function(e){"undefined"===typeof e.imagePlaceholder?P.impl.options.imagePlaceholder=k.imagePlaceholder:P.impl.options.imagePlaceholder=e.imagePlaceholder;"undefined"===typeof e.cacheBust?P.impl.options.cacheBust=k.cacheBust:P.impl.options.cacheBust=e.cacheBust}(t=t||{}),Promise.resolve(e).then((function(e){return S(e,t.filter,!0)})).then(_).then(E).then((function(e){return t.bgcolor&&(e.style.backgroundColor=t.bgcolor),t.width&&(e.style.width="".concat(t.width,"px")),t.height&&(e.style.height="".concat(t.height,"px")),t.style&&Object.keys(t.style).forEach((function(n){e.style[n]=t.style[n]})),e})).then((function(n){return r=n,o=t.width||g.width(e),i=t.height||g.height(e),Promise.resolve(r).then((function(e){return e.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),(new XMLSerializer).serializeToString(e)})).then(g.escapeXhtml).then((function(e){return'<foreignObject x="0" y="0" width="100%" height="100%">'.concat(e,"</foreignObject>")})).then((function(e){return'<svg xmlns="http://www.w3.org/2000/svg" width="'.concat(o,'" height="').concat(i,'">').concat(e,"</svg>")})).then((function(e){return"data:image/svg+xml;charset=utf-8,".concat(e)}));var r,o,i}))}function T(e,t){var n=(null===t||void 0===t?void 0:t.scale)||3;return A(e,t).then(g.makeImage).then(g.delay(100)).then(function(){var o=(0,r.A)(s().mark((function r(o){var i,a,c;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:i=document.createElement("canvas"),a=i.getContext("2d"),i.width=g.width(e)*n,i.height=g.height(e)*n,a.scale(n,n),t.bgcolor&&(a.fillStyle=t.bgcolor,a.fillRect(0,0,i.width,i.height)),c=0;case 7:if(!(c<n)){r.next=14;break}return r.next=10,new Promise((function(e){return setTimeout(e,100)}));case 10:a.drawImage(o,0,0);case 11:c++,r.next=7;break;case 14:return r.abrupt("return",i);case 15:case"end":return r.stop()}}),r)})));return function(e){return o.apply(this,arguments)}}())}function S(e,t,n){var r=function(e,t){return(0,o.A)(t,Element)?Promise.resolve().then((function(){!function(e,t){var n,r;e.cssText?t.cssText=e.cssText:(n=e,r=t,g.asArray(n).forEach((function(e){r.setProperty(e,n.getPropertyValue(e),n.getPropertyPriority(e))})))}(window.getComputedStyle(e),t.style)})).then((function(){[":before",":after"].forEach((function(n){!function(n){var r=window.getComputedStyle(e,n),o=r.getPropertyValue("content");if(""!==o&&"none"!==o){var i=g.uid();t.className="".concat(t.className," ").concat(i);var a=document.createElement("style");a.appendChild(function(e,t,n){var r=".".concat(e,":").concat(t),o=n.cssText?function(e){var t=e.getPropertyValue("content");return"".concat(e.cssText," content: ").concat(t,";")}(n):function(e){return"".concat(g.asArray(e).map(t).join("; "),";");function t(t){return"".concat(t,": ").concat(e.getPropertyValue(t)).concat(e.getPropertyPriority(t)?" !important":"")}}(n);return document.createTextNode("".concat(r,"{").concat(o,"}"))}(i,n,r)),t.appendChild(a)}}(n)}))})).then((function(){(0,o.A)(e,HTMLTextAreaElement)&&(t.innerHTML=e.value);(0,o.A)(e,HTMLInputElement)&&t.setAttribute("value",e.value)})).then((function(){if(!(0,o.A)(t,SVGElement))return;if(t.setAttribute("xmlns","http://www.w3.org/2000/svg"),!(0,o.A)(t,SVGRectElement))return;["width","height"].forEach((function(e){var n=t.getAttribute(e);n&&t.style.setProperty(e,n)}))})).then((function(){return t})):t};return n||!t||t(e)?Promise.resolve(e).then((function(e){return(0,o.A)(e,HTMLCanvasElement)?g.makeImage(e.toDataURL()):e.cloneNode(!1)})).then((function(n){return function(e,t,n){var r=e.childNodes;return 0===r.length?Promise.resolve(t):function(e,t,n){var r=Promise.resolve();return t.forEach((function(t){r=r.then((function(){return S(t,n)})).then((function(t){t&&e.appendChild(t)}))})),r}(t,g.asArray(r),n).then((function(){return t}))}(e,n,t)})).then((function(t){return r(e,t)})):Promise.resolve()}function _(e){return w.resolveAll().then((function(t){var n=document.createElement("style");return e.appendChild(n),n.appendChild(document.createTextNode(t)),e}))}function E(e){return y.inlineAll(e).then((function(){return e}))}const L=P;var B,C,I=n("sJaZ"),j=m.j.isMobile,U=m.j.isPc,M=(0,h.S)(),R=M.isHybrid,W=M.clientType,V="https://public.bnbstatic.com/images/common/ogImageExchange.jpg",Q=function(){var e=(0,r.A)(s().mark((function e(t){var n,r,o,i=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:{},r="png"===n.imageType?L.toPng:L.toJpeg,e.next=4,r(t,{scale:null===n||void 0===n?void 0:n.scale});case 4:if(o=e.sent,!/(Safari|iPhone|iPad|iPod|iOS)/i.test(window.navigator.userAgent)){e.next=9;break}return e.next=8,r(t,{scale:null===n||void 0===n?void 0:n.scale});case 8:o=e.sent;case 9:return e.abrupt("return",o);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=(0,f.vt)((0,f.Q)(p)),H="undefined"===typeof window,N=!H&&j&&!!(null===(B=null===window||void 0===window?void 0:window.navigator)||void 0===B?void 0:B.share),O=(!H&&(null===(C=null===window||void 0===window?void 0:window.navigator)||void 0===C||C.msSaveOrOpenBlob),N||R),q=function(){var e=(0,r.A)(s().mark((function e(t){var n,r,o,i=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:{},r=document.getElementById(t.slice(1)),e.next=4,Q(r,n);case 4:return o=e.sent,e.abrupt("return",o);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(e){return new Promise((function(t,n){var r=document.createElement("img");r.crossOrigin="Anonymous",r.onload=function(){var e=document.createElement("canvas");e.width=r.width,e.height=r.height,e.getContext("2d").drawImage(r,0,0),t(e.toDataURL())},r.onerror=function(e){return n(e)},r.src=Z(e,{ts:Date.now()})}))},X=function(e){var t=function(e){for(var t=e.split(","),n=t[0].match(/:(.*?);/)[1],r=atob(t[1]),o=r.length,i=new Uint8Array(o);o--;)i[o]=r.charCodeAt(o);return new Blob([i],{type:n})}(e);return new File([t],"share.jpg",{type:"image/jpeg"})},Z=function(e,t){if(!e)return String();var n=e.split("?")[0],r=e.split("?")[1],o=(0,i.A)({},l.parse(r),t);return"".concat(n,"?").concat(l.stringify(o))},F=function(e){return Z(e,{utm_medium:"web_share_qrcode"})},J=function(e){return Z(e,{utm_medium:"web_share_copy"})},$="object"===typeof HTMLElement?function(e){return(0,o.A)(e,HTMLElement)}:function(e){return e&&"object"===typeof e&&1===e.nodeType&&"string"===typeof e.nodeName},K=function(e){var t=e.trackTags,n=void 0===t?{}:t,r=e.shareStage,o=e.shareType,u=e.shareTarget,s=(0,c.A)(e,["trackTags","shareStage","shareType","shareTarget"]),l=n.pageName,f=n.showId,h=n.clickId,p=n.successId,m=n.shareTarget,g=(0,c.A)(n,["pageName","showId","clickId","successId","shareTarget"]);l||(l="undefined"!==typeof location?"".concat(location.origin).concat(location.pathname):"web_share_sdk_default_page_name");var v=(r===I.Qu.show?f:r===I.Qu.click?h:p)||"web_share_sdk_default_id",w=R?W:N?"navigator":U?"pc":"h5";return(r===I.Qu.show?d.Rk:d.qL)((0,a.A)((0,i.A)({},s,g),{pageName:l,elementID:v,_share_stage:r,_share_type:o,_share_target:m||u||"all",_share_channel:w}))},Y="undefined"!==typeof Sentry,z=function(e,t){if(!H&&Y)try{Sentry.withScope((function(n){n.setTags(e),Sentry.captureException(t)}))}catch(n){console.error(n)}};!function(){var e=(0,r.A)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.resolve(O));case 1:case"end":return e.stop()}}),e)})))}()}}]);
//# debugId=4e495c9f-41b7-5ffb-8e96-072838eff52d
