"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[3751],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||l;return t?r.createElement(f,a(a({ref:n},s),{},{components:t})):r.createElement(f,a({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<l;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},87605:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},assets:function(){return s},toc:function(){return p},default:function(){return m}});var r=t(87462),o=t(63366),l=(t(67294),t(3905)),a=["components"],i={sidebar_position:2},c="Run Job With Local Mode",u={unversionedId:"seatunnel-engine/local-mode",id:"version-2.3.0/seatunnel-engine/local-mode",title:"Run Job With Local Mode",description:"Only for test.",source:"@site/versioned_docs/version-2.3.0/seatunnel-engine/local-mode.md",sourceDirName:"seatunnel-engine",slug:"/seatunnel-engine/local-mode",permalink:"/docs/2.3.0/seatunnel-engine/local-mode",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.0/seatunnel-engine/local-mode.md",tags:[],version:"2.3.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"Deployment SeaTunnel Engine",permalink:"/docs/2.3.0/seatunnel-engine/deployment"},next:{title:"Run Job With Cluster Mode",permalink:"/docs/2.3.0/seatunnel-engine/cluster-mode"}},s={},p=[{value:"Deploy SeaTunnel Engine Local Mode",id:"deploy-seatunnel-engine-local-mode",level:2},{value:"Submit Job",id:"submit-job",level:2}],d={toc:p};function m(e){var n=e.components,t=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"run-job-with-local-mode"},"Run Job With Local Mode"),(0,l.kt)("p",null,"Only for test."),(0,l.kt)("p",null,"The most recommended way to use SeaTunnel Engine in the production environment is ",(0,l.kt)("a",{parentName:"p",href:"/docs/2.3.0/seatunnel-engine/cluster-mode"},"Cluster Mode"),"."),(0,l.kt)("h2",{id:"deploy-seatunnel-engine-local-mode"},"Deploy SeaTunnel Engine Local Mode"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/2.3.0/start-v2/locally/deployment"},"Deploy a SeaTunnel Engine Local Mode reference")),(0,l.kt)("h2",{id:"submit-job"},"Submit Job"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$SEATUNNEL_HOME/bin/seatunnel.sh --config $SEATUNNEL_HOME/config/v2.batch.config.template -e local\n")))}m.isMDXComponent=!0}}]);