"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[984],{5565:(e,t,n)=>{n.d(t,{default:()=>o.a});var r=n(4146),o=n.n(r)},76046:(e,t,n)=>{var r=n(66658);n.o(r,"usePathname")&&n.d(t,{usePathname:function(){return r.usePathname}})},48173:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return m}});let r=n(60306),o=n(95155),i=r._(n(12115)),u=n(70180),l=n(71394),a=n(64116),s=n(4445),f=n(45353),c=n(12170),d=n(49544);function p(e,t,n){"undefined"!=typeof window&&(async()=>e.prefetch(t,n))().catch(e=>{})}function h(e){return"string"==typeof e?e:(0,u.formatUrl)(e)}n(42363);let m=i.default.forwardRef(function(e,t){let n,r;let{href:u,as:m,children:g,prefetch:y=null,passHref:b,replace:v,shallow:_,scroll:w,onClick:P,onMouseEnter:j,onTouchStart:x,legacyBehavior:C=!1,...E}=e;n=g,C&&("string"==typeof n||"number"==typeof n)&&(n=(0,o.jsx)("a",{children:n}));let S=i.default.useContext(l.AppRouterContext),O=!1!==y,M=null===y?s.PrefetchKind.AUTO:s.PrefetchKind.FULL,{href:I,as:k}=i.default.useMemo(()=>{let e=h(u);return{href:e,as:m?h(m):e}},[u,m]),R=i.default.useRef(I),z=i.default.useRef(k);C&&(r=i.default.Children.only(n));let A=C?r&&"object"==typeof r&&r.ref:t,[T,N,U]=(0,a.useIntersection)({rootMargin:"200px"}),L=i.default.useCallback(e=>{(z.current!==k||R.current!==I)&&(U(),z.current=k,R.current=I),T(e)},[k,I,U,T]),D=(0,f.useMergedRef)(L,A);i.default.useEffect(()=>{S&&N&&O&&p(S,I,{kind:M})},[k,I,N,O,S,M]);let F={ref:D,onClick(e){C||"function"!=typeof P||P(e),C&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),S&&!e.defaultPrevented&&function(e,t,n,r,o,u,l){let{nodeName:a}=e.currentTarget;"A"===a.toUpperCase()&&function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||(e.preventDefault(),i.default.startTransition(()=>{let e=null==l||l;"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:u,scroll:e}):t[o?"replace":"push"](r||n,{scroll:e})}))}(e,S,I,k,v,_,w)},onMouseEnter(e){C||"function"!=typeof j||j(e),C&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),S&&O&&p(S,I,{kind:M})},onTouchStart:function(e){C||"function"!=typeof x||x(e),C&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),S&&O&&p(S,I,{kind:M})}};return(0,c.isAbsoluteUrl)(k)?F.href=k:C&&!b&&("a"!==r.type||"href"in r.props)||(F.href=(0,d.addBasePath)(k)),C?i.default.cloneElement(r,F):(0,o.jsx)("a",{...E,...F,children:n})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},87970:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return _}});let r=n(60306),o=n(29955),i=n(95155),u=o._(n(12115)),l=r._(n(47650)),a=r._(n(36107)),s=n(40666),f=n(41159),c=n(83621);n(42363);let d=n(63576),p=r._(n(65514)),h=n(45353),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/tks-management/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function g(e,t,n,r,o,i,u){let l=null==e?void 0:e.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&o(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,o=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==r?void 0:r.current)&&r.current(e)}}))}function y(e){return u.use?{fetchPriority:e}:{fetchpriority:e}}"undefined"==typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let b=(0,u.forwardRef)((e,t)=>{let{src:n,srcSet:r,sizes:o,height:l,width:a,decoding:s,className:f,style:c,fetchPriority:d,placeholder:p,loading:m,unoptimized:b,fill:v,onLoadRef:_,onLoadingCompleteRef:w,setBlurComplete:P,setShowAltText:j,sizesInput:x,onLoad:C,onError:E,...S}=e,O=(0,u.useCallback)(e=>{e&&(E&&(e.src=e.src),e.complete&&g(e,p,_,w,P,b,x))},[n,p,_,w,P,E,b,x]),M=(0,h.useMergedRef)(t,O);return(0,i.jsx)("img",{...S,...y(d),loading:m,width:a,height:l,decoding:s,"data-nimg":v?"fill":"1",className:f,style:c,sizes:o,srcSet:r,src:n,ref:M,onLoad:e=>{g(e.currentTarget,p,_,w,P,b,x)},onError:e=>{j(!0),"empty"!==p&&P(!0),E&&E(e)}})});function v(e){let{isAppRouter:t,imgAttributes:n}=e,r={as:"image",imageSrcSet:n.srcSet,imageSizes:n.sizes,crossOrigin:n.crossOrigin,referrerPolicy:n.referrerPolicy,...y(n.fetchPriority)};return t&&l.default.preload?(l.default.preload(n.src,r),null):(0,i.jsx)(a.default,{children:(0,i.jsx)("link",{rel:"preload",href:n.srcSet?void 0:n.src,...r},"__nimg-"+n.src+n.srcSet+n.sizes)})}let _=(0,u.forwardRef)((e,t)=>{let n=(0,u.useContext)(d.RouterContext),r=(0,u.useContext)(c.ImageConfigContext),o=(0,u.useMemo)(()=>{var e;let t=m||r||f.imageConfigDefault,n=[...t.deviceSizes,...t.imageSizes].sort((e,t)=>e-t),o=t.deviceSizes.sort((e,t)=>e-t),i=null==(e=t.qualities)?void 0:e.sort((e,t)=>e-t);return{...t,allSizes:n,deviceSizes:o,qualities:i}},[r]),{onLoad:l,onLoadingComplete:a}=e,h=(0,u.useRef)(l);(0,u.useEffect)(()=>{h.current=l},[l]);let g=(0,u.useRef)(a);(0,u.useEffect)(()=>{g.current=a},[a]);let[y,_]=(0,u.useState)(!1),[w,P]=(0,u.useState)(!1),{props:j,meta:x}=(0,s.getImgProps)(e,{defaultLoader:p.default,imgConf:o,blurComplete:y,showAltText:w});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(b,{...j,unoptimized:x.unoptimized,placeholder:x.placeholder,fill:x.fill,onLoadRef:h,onLoadingCompleteRef:g,setBlurComplete:_,setShowAltText:P,sizesInput:e.sizes,ref:t}),x.priority?(0,i.jsx)(v,{isAppRouter:!n,imgAttributes:j}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},68571:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{cancelIdleCallback:function(){return r},requestIdleCallback:function(){return n}});let n="undefined"!=typeof self&&self.requestIdleCallback&&self.requestIdleCallback.bind(window)||function(e){let t=Date.now();return self.setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})},1)},r="undefined"!=typeof self&&self.cancelIdleCallback&&self.cancelIdleCallback.bind(window)||function(e){return clearTimeout(e)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},64116:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return a}});let r=n(12115),o=n(68571),i="function"==typeof IntersectionObserver,u=new Map,l=[];function a(e){let{rootRef:t,rootMargin:n,disabled:a}=e,s=a||!i,[f,c]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);return(0,r.useEffect)(()=>{if(i){if(s||f)return;let e=d.current;if(e&&e.tagName)return function(e,t,n){let{id:r,observer:o,elements:i}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=l.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=u.get(r)))return t;let o=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},l.push(n),u.set(n,t),t}(n);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),u.delete(r);let e=l.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&l.splice(e,1)}}}(e,e=>e&&c(e),{root:null==t?void 0:t.current,rootMargin:n})}else if(!f){let e=(0,o.requestIdleCallback)(()=>c(!0));return()=>(0,o.cancelIdleCallback)(e)}},[s,n,t,f,d.current]),[p,f,(0,r.useCallback)(()=>{c(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},45353:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return o}});let r=n(12115);function o(e,t){let n=(0,r.useRef)(()=>{}),o=(0,r.useRef)(()=>{});return(0,r.useMemo)(()=>e&&t?r=>{null===r?(n.current(),o.current()):(n.current=i(e,r),o.current=i(t,r))}:e||t,[e,t])}function i(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let n=e(t);return"function"==typeof n?n:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},53003:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return r}});let r=n(60306)._(n(12115)).default.createContext({})},675:(e,t)=>{function n(e){let{ampFirst:t=!1,hybrid:n=!1,hasQuery:r=!1}=void 0===e?{}:e;return t||n&&r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return n}})},40666:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return l}}),n(42363);let r=n(35859),o=n(41159);function i(e){return void 0!==e.default}function u(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l(e,t){var n,l;let a,s,f,{src:c,sizes:d,unoptimized:p=!1,priority:h=!1,loading:m,className:g,quality:y,width:b,height:v,fill:_=!1,style:w,overrideSrc:P,onLoad:j,onLoadingComplete:x,placeholder:C="empty",blurDataURL:E,fetchPriority:S,decoding:O="async",layout:M,objectFit:I,objectPosition:k,lazyBoundary:R,lazyRoot:z,...A}=e,{imgConf:T,showAltText:N,blurComplete:U,defaultLoader:L}=t,D=T||o.imageConfigDefault;if("allSizes"in D)a=D;else{let e=[...D.deviceSizes,...D.imageSizes].sort((e,t)=>e-t),t=D.deviceSizes.sort((e,t)=>e-t),r=null==(n=D.qualities)?void 0:n.sort((e,t)=>e-t);a={...D,allSizes:e,deviceSizes:t,qualities:r}}if(void 0===L)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let F=A.loader||L;delete A.loader,delete A.srcSet;let B="__next_img_default"in F;if(B){if("custom"===a.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=F;F=t=>{let{config:n,...r}=t;return e(r)}}if(M){"fill"===M&&(_=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[M];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[M];t&&!d&&(d=t)}let q="",W=u(b),G=u(v);if((l=c)&&"object"==typeof l&&(i(l)||void 0!==l.src)){let e=i(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(s=e.blurWidth,f=e.blurHeight,E=E||e.blurDataURL,q=e.src,!_){if(W||G){if(W&&!G){let t=W/e.width;G=Math.round(e.height*t)}else if(!W&&G){let t=G/e.height;W=Math.round(e.width*t)}}else W=e.width,G=e.height}}let V=!h&&("lazy"===m||void 0===m);(!(c="string"==typeof c?c:q)||c.startsWith("data:")||c.startsWith("blob:"))&&(p=!0,V=!1),a.unoptimized&&(p=!0),B&&!a.dangerouslyAllowSVG&&c.split("?",1)[0].endsWith(".svg")&&(p=!0);let K=u(y),H=Object.assign(_?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:I,objectPosition:k}:{},N?{}:{color:"transparent"},w),Q=U||"empty"===C?null:"blur"===C?'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:W,heightInt:G,blurWidth:s,blurHeight:f,blurDataURL:E||"",objectFit:H.objectFit})+'")':'url("'+C+'")',J=Q?{backgroundSize:H.objectFit||"cover",backgroundPosition:H.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:Q}:{},Z=function(e){let{config:t,src:n,unoptimized:r,width:o,quality:i,sizes:u,loader:l}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:a,kind:s}=function(e,t,n){let{deviceSizes:r,allSizes:o}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(n);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:o,kind:"w"}}return"number"!=typeof t?{widths:r,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))],kind:"x"}}(t,o,u),f=a.length-1;return{sizes:u||"w"!==s?u:"100vw",srcSet:a.map((e,r)=>l({config:t,src:n,quality:i,width:e})+" "+("w"===s?e:r+1)+s).join(", "),src:l({config:t,src:n,quality:i,width:a[f]})}}({config:a,src:c,unoptimized:p,width:W,quality:K,sizes:d,loader:F});return{props:{...A,loading:V?"lazy":m,fetchPriority:S,width:W,height:G,decoding:O,className:g,style:{...H,...J},sizes:Z.sizes,srcSet:Z.srcSet,src:P||Z.src},meta:{unoptimized:p,priority:h,placeholder:C,fill:_}}}},36107:(e,t,n)=>{var r=n(2818);Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return g},defaultHead:function(){return d}});let o=n(60306),i=n(29955),u=n(95155),l=i._(n(12115)),a=o._(n(31172)),s=n(53003),f=n(81147),c=n(675);function d(e){void 0===e&&(e=!1);let t=[(0,u.jsx)("meta",{charSet:"utf-8"},"charset")];return e||t.push((0,u.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")),t}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(42363);let h=["name","httpEquiv","charSet","itemProp"];function m(e,t){let{inAmpMode:n}=t;return e.reduce(p,[]).reverse().concat(d(n).reverse()).filter(function(){let e=new Set,t=new Set,n=new Set,r={};return o=>{let i=!0,u=!1;if(o.key&&"number"!=typeof o.key&&o.key.indexOf("$")>0){u=!0;let t=o.key.slice(o.key.indexOf("$")+1);e.has(t)?i=!1:e.add(t)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(let e=0,t=h.length;e<t;e++){let t=h[e];if(o.props.hasOwnProperty(t)){if("charSet"===t)n.has(t)?i=!1:n.add(t);else{let e=o.props[t],n=r[t]||new Set;("name"!==t||!u)&&n.has(e)?i=!1:(n.add(e),r[t]=n)}}}}return i}}()).reverse().map((e,t)=>{let o=e.key||t;if(r.env.__NEXT_OPTIMIZE_FONTS&&!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,l.default.cloneElement(e,t)}return l.default.cloneElement(e,{key:o})})}let g=function(e){let{children:t}=e,n=(0,l.useContext)(s.AmpStateContext),r=(0,l.useContext)(f.HeadManagerContext);return(0,u.jsx)(a.default,{reduceComponentsToState:m,headManager:r,inAmpMode:(0,c.isInAmpMode)(n),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},35859:(e,t)=>{function n(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:o,blurDataURL:i,objectFit:u}=e,l=r?40*r:t,a=o?40*o:n,s=l&&a?"viewBox='0 0 "+l+" "+a+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+s+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(s?"none":"contain"===u?"xMidYMid":"cover"===u?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+i+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},83621:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return i}});let r=n(60306)._(n(12115)),o=n(41159),i=r.default.createContext(o.imageConfigDefault)},41159:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{VALID_LOADERS:function(){return n},imageConfigDefault:function(){return r}});let n=["default","imgix","cloudinary","akamai","custom"],r={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:void 0,unoptimized:!1}},4146:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return a},getImageProps:function(){return l}});let r=n(60306),o=n(40666),i=n(87970),u=r._(n(65514));function l(e){let{props:t}=(0,o.getImgProps)(e,{defaultLoader:u.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/tks-management/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}}let a=i.Image},65514:(e,t)=>{function n(e){var t;let{config:n,src:r,width:o,quality:i}=e,u=i||(null==(t=n.qualities)?void 0:t.reduce((e,t)=>Math.abs(t-75)<Math.abs(e-75)?t:e))||75;return n.path+"?url="+encodeURIComponent(r)+"&w="+o+"&q="+u+(r.startsWith("/_next/static/media/"),"")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),n.__next_img_default=!0;let r=n},63576:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return r}});let r=n(60306)._(n(12115)).default.createContext(null)},70180:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{formatUrl:function(){return i},formatWithValidation:function(){return l},urlObjectKeys:function(){return u}});let r=n(29955)._(n(54156)),o=/https?|ftp|gopher|file/;function i(e){let{auth:t,hostname:n}=e,i=e.protocol||"",u=e.pathname||"",l=e.hash||"",a=e.query||"",s=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?s=t+e.host:n&&(s=t+(~n.indexOf(":")?"["+n+"]":n),e.port&&(s+=":"+e.port)),a&&"object"==typeof a&&(a=String(r.urlQueryToSearchParams(a)));let f=e.search||a&&"?"+a||"";return i&&!i.endsWith(":")&&(i+=":"),e.slashes||(!i||o.test(i))&&!1!==s?(s="//"+(s||""),u&&"/"!==u[0]&&(u="/"+u)):s||(s=""),l&&"#"!==l[0]&&(l="#"+l),f&&"?"!==f[0]&&(f="?"+f),""+i+s+(u=u.replace(/[?#]/g,encodeURIComponent))+(f=f.replace("#","%23"))+l}let u=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function l(e){return i(e)}},54156:(e,t)=>{function n(e){let t={};return e.forEach((e,n)=>{void 0===t[n]?t[n]=e:Array.isArray(t[n])?t[n].push(e):t[n]=[t[n],e]}),t}function r(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[n,o]=e;Array.isArray(o)?o.forEach(e=>t.append(n,r(e))):t.set(n,r(o))}),t}function i(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return n.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,n)=>e.append(n,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{assign:function(){return i},searchParamsToUrlQuery:function(){return n},urlQueryToSearchParams:function(){return o}})},31172:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let r=n(12115),o="undefined"==typeof window,i=o?()=>{}:r.useLayoutEffect,u=o?()=>{}:r.useEffect;function l(e){let{headManager:t,reduceComponentsToState:n}=e;function l(){if(t&&t.mountedInstances){let o=r.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(o,e))}}if(o){var a;null==t||null==(a=t.mountedInstances)||a.add(e.children),l()}return i(()=>{var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),()=>{var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),i(()=>(t&&(t._pendingUpdate=l),()=>{t&&(t._pendingUpdate=l)})),u(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},12170:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DecodeError:function(){return h},MiddlewareNotFoundError:function(){return b},MissingStaticPage:function(){return y},NormalizeError:function(){return m},PageNotFoundError:function(){return g},SP:function(){return d},ST:function(){return p},WEB_VITALS:function(){return n},execOnce:function(){return r},getDisplayName:function(){return a},getLocationOrigin:function(){return u},getURL:function(){return l},isAbsoluteUrl:function(){return i},isResSent:function(){return s},loadGetInitialProps:function(){return c},normalizeRepeatedSlashes:function(){return f},stringifyError:function(){return v}});let n=["CLS","FCP","FID","INP","LCP","TTFB"];function r(e){let t,n=!1;return function(){for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return n||(n=!0,t=e(...o)),t}}let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,i=e=>o.test(e);function u(){let{protocol:e,hostname:t,port:n}=window.location;return e+"//"+t+(n?":"+n:"")}function l(){let{href:e}=window.location,t=u();return e.substring(t.length)}function a(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function s(e){return e.finished||e.headersSent}function f(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function c(e,t){let n=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await c(t.Component,t.ctx)}:{};let r=await e.getInitialProps(t);if(n&&s(n))return r;if(!r)throw Error('"'+a(e)+'.getInitialProps()" should resolve to an object. But found "'+r+'" instead.');return r}let d="undefined"!=typeof performance,p=d&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class h extends Error{}class m extends Error{}class g extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class y extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class b extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function v(e){return JSON.stringify({message:e.message,stack:e.stack})}},25683:(e,t,n)=>{n.d(t,{N:()=>y});var r=n(95155),o=n(12115),i=n(39656),u=n(99234),l=n(27249);class a extends o.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function s(e){let{children:t,isPresent:n}=e,i=(0,o.useId)(),u=(0,o.useRef)(null),s=(0,o.useRef)({width:0,height:0,top:0,left:0}),{nonce:f}=(0,o.useContext)(l.Q);return(0,o.useInsertionEffect)(()=>{let{width:e,height:t,top:r,left:o}=s.current;if(n||!u.current||!e||!t)return;u.current.dataset.motionPopId=i;let l=document.createElement("style");return f&&(l.nonce=f),document.head.appendChild(l),l.sheet&&l.sheet.insertRule('\n          [data-motion-pop-id="'.concat(i,'"] {\n            position: absolute !important;\n            width: ').concat(e,"px !important;\n            height: ").concat(t,"px !important;\n            top: ").concat(r,"px !important;\n            left: ").concat(o,"px !important;\n          }\n        ")),()=>{document.head.removeChild(l)}},[n]),(0,r.jsx)(a,{isPresent:n,childRef:u,sizeRef:s,children:o.cloneElement(t,{ref:u})})}let f=e=>{let{children:t,initial:n,isPresent:l,onExitComplete:a,custom:f,presenceAffectsLayout:d,mode:p}=e,h=(0,u.M)(c),m=(0,o.useId)(),g=(0,o.useCallback)(e=>{for(let t of(h.set(e,!0),h.values()))if(!t)return;a&&a()},[h,a]),y=(0,o.useMemo)(()=>({id:m,initial:n,isPresent:l,custom:f,onExitComplete:g,register:e=>(h.set(e,!1),()=>h.delete(e))}),d?[Math.random(),g]:[l,g]);return(0,o.useMemo)(()=>{h.forEach((e,t)=>h.set(t,!1))},[l]),o.useEffect(()=>{l||h.size||!a||a()},[l]),"popLayout"===p&&(t=(0,r.jsx)(s,{isPresent:l,children:t})),(0,r.jsx)(i.t.Provider,{value:y,children:t})};function c(){return new Map}var d=n(64710),p=n(45107);let h=e=>e.key||"";function m(e){let t=[];return o.Children.forEach(e,e=>{(0,o.isValidElement)(e)&&t.push(e)}),t}var g=n(35403);let y=e=>{let{children:t,exitBeforeEnter:n,custom:i,initial:l=!0,onExitComplete:a,presenceAffectsLayout:s=!0,mode:c="sync"}=e;(0,p.V)(!n,"Replace exitBeforeEnter with mode='wait'");let y=(0,o.useMemo)(()=>m(t),[t]),b=y.map(h),v=(0,o.useRef)(!0),_=(0,o.useRef)(y),w=(0,u.M)(()=>new Map),[P,j]=(0,o.useState)(y),[x,C]=(0,o.useState)(y);(0,g.E)(()=>{v.current=!1,_.current=y;for(let e=0;e<x.length;e++){let t=h(x[e]);b.includes(t)?w.delete(t):!0!==w.get(t)&&w.set(t,!1)}},[x,b.length,b.join("-")]);let E=[];if(y!==P){let e=[...y];for(let t=0;t<x.length;t++){let n=x[t],r=h(n);b.includes(r)||(e.splice(t,0,n),E.push(n))}"wait"===c&&E.length&&(e=E),C(m(e)),j(y);return}let{forceRender:S}=(0,o.useContext)(d.L);return(0,r.jsx)(r.Fragment,{children:x.map(e=>{let t=h(e),n=y===x||b.includes(t);return(0,r.jsx)(f,{isPresent:n,initial:(!v.current||!!l)&&void 0,custom:n?void 0:i,presenceAffectsLayout:s,mode:c,onExitComplete:n?void 0:()=>{if(!w.has(t))return;w.set(t,!0);let e=!0;w.forEach(t=>{t||(e=!1)}),e&&(null==S||S(),C(_.current),a&&a())},children:e},t)})})}}}]);