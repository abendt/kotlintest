(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{129:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),s=(n(0),n(159)),a={id:"ktor",title:"Ktor",sidebar_label:"Ktor",slug:"ktor.html"},i={unversionedId:"extensions/ktor",id:"extensions/ktor",isDocsHomePage:!1,title:"Ktor",description:"The `kotest-assertions-ktor` module provides response matchers for a Ktor application. There are matchers",source:"@site/docs/extensions/ktor.md",slug:"/extensions/ktor.html",permalink:"/docs/extensions/ktor.html",editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/extensions/ktor.md",version:"current",sidebar_label:"Ktor",sidebar:"extensions",previous:{title:"Spring",permalink:"/docs/extensions/spring.html"},next:{title:"System Extensions",permalink:"/docs/extensions/system_extensions.html"}},c=[],p={rightToc:c};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"The ",Object(s.b)("inlineCode",{parentName:"p"},"kotest-assertions-ktor")," module provides response matchers for a ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://ktor.io"}),"Ktor")," application. There are matchers\nfor both ",Object(s.b)("inlineCode",{parentName:"p"},"TestApplicationResponse")," if you are using the server side test support, and for ",Object(s.b)("inlineCode",{parentName:"p"},"HttpResponse")," if you are using the ktor\nHTTP client."),Object(s.b)("p",null,"To add Ktor matchers, add the following dependency to your project"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-groovy"}),"io.kotest.extensions:kotest-assertions-ktor:${version}\n")),Object(s.b)("p",null,Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"http://search.maven.org/#search%7Cga%7C1%7Ckotest-assertions-ktor"}),Object(s.b)("img",{src:"https://img.shields.io/maven-central/v/io.kotest.extensions/kotest-assertions-ktor.svg?label=latest%20release"})),"\n",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://oss.sonatype.org/content/repositories/snapshots/io/kotest/extensions/kotest-assertions-ktor/"}),Object(s.b)("img",{src:"https://img.shields.io/nexus/s/https/oss.sonatype.org/io.kotest.extensions/kotest-assertions-ktor.svg?label=latest%20snapshot"}))),Object(s.b)("p",null,"An example of using the matchers with the server side test support:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-kotlin"}),'withTestApplication({ module(testing = true) }) {\n   handleRequest(HttpMethod.Get, "/").apply {\n      response shouldHaveStatus HttpStatusCode.OK\n      response shouldNotHaveContent "failure"\n      response.shouldHaveHeader(name = "Authorization", value = "Bearer")\n      response.shouldNotHaveCookie(name = "Set-Cookie", cookieValue = "id=1234")\n   }\n}\n')),Object(s.b)("p",null,"And an example of using the client support:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-kotlin"}),'val client = HttpClient(CIO)\nval resp = client.post("http://mydomain.com/foo")\nresponse.shouldHaveStatus(HttpStatusCode.OK)\nresponse.shouldHaveHeader(name = "Authorization", value = "Bearer")\n\n')))}l.isMDXComponent=!0},159:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,d=u["".concat(a,".").concat(m)]||u[m]||b[m]||s;return n?o.a.createElement(d,i(i({ref:t},p),{},{components:n})):o.a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var p=2;p<s;p++)a[p]=n[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);