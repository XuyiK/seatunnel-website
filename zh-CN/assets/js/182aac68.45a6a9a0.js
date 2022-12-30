"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[15096],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(t),d=l,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return t?a.createElement(h,r(r({ref:n},p),{},{components:t})):a.createElement(h,r({ref:n},p))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,r=new Array(o);r[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var u=2;u<o;u++)r[u]=t[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},88619:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return p},toc:function(){return c},default:function(){return d}});var a=t(87462),l=t(63366),o=(t(67294),t(3905)),r=["components"],i={},s="Set Up Develop Environment",u={unversionedId:"contribution/setup",id:"version-2.3.0/contribution/setup",title:"Set Up Develop Environment",description:"In this section, we are going to show you how to set up your development environment for SeaTunnel, and then run a simple",source:"@site/versioned_docs/version-2.3.0/contribution/setup.md",sourceDirName:"contribution",slug:"/contribution/setup",permalink:"/zh-CN/docs/2.3.0/contribution/setup",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.0/contribution/setup.md",tags:[],version:"2.3.0",frontMatter:{},sidebar:"docs",previous:{title:"spark",permalink:"/zh-CN/docs/2.3.0/other-engine/spark"},next:{title:"How To Add New License",permalink:"/zh-CN/docs/2.3.0/contribution/new-license"}},p={},c=[{value:"Prepare",id:"prepare",level:2},{value:"Set Up",id:"set-up",level:2},{value:"Clone the Source Code",id:"clone-the-source-code",level:3},{value:"Install Subproject Locally",id:"install-subproject-locally",level:3},{value:"Building seaTunnel from source",id:"building-seatunnel-from-source",level:3},{value:"Building sub module",id:"building-sub-module",level:3},{value:"Install JetBrains IDEA Scala Plugin",id:"install-jetbrains-idea-scala-plugin",level:3},{value:"Install JetBrains IDEA Lombok Plugin",id:"install-jetbrains-idea-lombok-plugin",level:3},{value:"Install JetBrains IDEA CheckStyle-IDEA Plugin",id:"install-jetbrains-idea-checkstyle-idea-plugin",level:3},{value:"Run Simple Example",id:"run-simple-example",level:2},{value:"What&#39;s More",id:"whats-more",level:2}],m={toc:c};function d(e){var n=e.components,i=(0,l.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},m,i,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"set-up-develop-environment"},"Set Up Develop Environment"),(0,o.kt)("p",null,"In this section, we are going to show you how to set up your development environment for SeaTunnel, and then run a simple\nexample in your JetBrains IntelliJ IDEA."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You can develop or test SeaTunnel code in any development environment that you like, but here we use\n",(0,o.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/idea/"},"JetBrains IDEA")," as an example to teach you to step by step environment.")),(0,o.kt)("h2",{id:"prepare"},"Prepare"),(0,o.kt)("p",null,"Before we start talking about how to set up the environment, we need to do some preparation work. Make sure you already\nhave installed the following software:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"},"Git")," installed."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.java.com/en/download/"},"Java")," ( JDK8/JDK11 are supported by now) installed and ",(0,o.kt)("inlineCode",{parentName:"li"},"JAVA_HOME")," set."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.scala-lang.org/download/2.11.12.html"},"Scala")," (only scala 2.11.12 supported by now) installed."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.jetbrains.com/idea/"},"JetBrains IDEA")," installed.")),(0,o.kt)("h2",{id:"set-up"},"Set Up"),(0,o.kt)("h3",{id:"clone-the-source-code"},"Clone the Source Code"),(0,o.kt)("p",null,"First of all, you need to clone the SeaTunnel source code from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel"},"GitHub"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git clone git@github.com:apache/incubator-seatunnel.git\n")),(0,o.kt)("h3",{id:"install-subproject-locally"},"Install Subproject Locally"),(0,o.kt)("p",null,"After cloning the source code, you should run the ",(0,o.kt)("inlineCode",{parentName:"p"},"./mvnw")," command to install the subproject to the maven local repository.\nOtherwise, your code could not start in JetBrains IntelliJ IDEA correctly."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./mvnw install -Dmaven.test.skip\n")),(0,o.kt)("h3",{id:"building-seatunnel-from-source"},"Building seaTunnel from source"),(0,o.kt)("p",null,"After you install the maven, you can use the follow command to compile and package."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mvn clean package -pl seatunnel-dist -am -Dmaven.test.skip=true\n")),(0,o.kt)("h3",{id:"building-sub-module"},"Building sub module"),(0,o.kt)("p",null,"If you want to build submodules separately,you can use the follow command to compile and package."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ssh"},"# This is an example of building the redis connector separately\n\n mvn clean package -pl seatunnel-connectors-v2/connector-redis -am -DskipTests -T 1C\n")),(0,o.kt)("h3",{id:"install-jetbrains-idea-scala-plugin"},"Install JetBrains IDEA Scala Plugin"),(0,o.kt)("p",null,"Now, you can open your JetBrains IntelliJ IDEA and explore the source code, but allow building Scala code in IDEA,\nyou should also install JetBrains IntelliJ IDEA's ",(0,o.kt)("a",{parentName:"p",href:"https://plugins.jetbrains.com/plugin/1347-scala"},"Scala plugin"),".\nSee ",(0,o.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/help/idea/managing-plugins.html#install-plugins"},"install plugins for IDEA")," if you want to."),(0,o.kt)("h3",{id:"install-jetbrains-idea-lombok-plugin"},"Install JetBrains IDEA Lombok Plugin"),(0,o.kt)("p",null,"Before running the following example, you should also install JetBrains IntelliJ IDEA's ",(0,o.kt)("a",{parentName:"p",href:"https://plugins.jetbrains.com/plugin/6317-lombok"},"Lombok plugin"),".\nSee ",(0,o.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/help/idea/managing-plugins.html#install-plugins"},"install plugins for IDEA")," if you want to."),(0,o.kt)("h3",{id:"install-jetbrains-idea-checkstyle-idea-plugin"},"Install JetBrains IDEA CheckStyle-IDEA Plugin"),(0,o.kt)("p",null,"Before coding, you should also install JetBrains IntelliJ IDEA's ",(0,o.kt)("a",{parentName:"p",href:"https://plugins.jetbrains.com/plugin/1065-checkstyle-idea"},"CheckStyle-IDEA plugin"),".\nSee ",(0,o.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/help/idea/managing-plugins.html#install-plugins"},"install plugins for IDEA")," if you want to.\nNext, you should go to ",(0,o.kt)("inlineCode",{parentName:"p"},"Preferences -> Editor -> Code style -> Scheme -> Import Scheme -> CheckStyle Configration")," and import ",(0,o.kt)("inlineCode",{parentName:"p"},"tools/checkstyle/checkStyle.xml"),"\n",(0,o.kt)("img",{loading:"lazy",alt:"checkstyle.png",src:t(28995).Z,width:"2092",height:"1222"}),"\nIf you want to change to automatically formatting, these configurations are also required."),(0,o.kt)("h2",{id:"run-simple-example"},"Run Simple Example"),(0,o.kt)("p",null,"After all the above things are done, you just finish the environment setup and can run an example we provide to you out\nof box. All examples are in module ",(0,o.kt)("inlineCode",{parentName:"p"},"seatunnel-examples"),", you could pick one you are interested in, ",(0,o.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/help/idea/run-debug-configuration.html"},"running or debugging\nit in IDEA")," as you wish."),(0,o.kt)("p",null,"Here we use ",(0,o.kt)("inlineCode",{parentName:"p"},"seatunnel-examples/seatunnel-flink-examples/src/main/java/org/apache/seatunnel/example/flink/LocalFlinkExample.java"),"\nas an example, when you run it successfully you could see the output as below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-log"},"+I[Ricky Huo, 71]\n+I[Gary, 12]\n+I[Ricky Huo, 93]\n...\n...\n+I[Ricky Huo, 83]\n")),(0,o.kt)("h2",{id:"whats-more"},"What's More"),(0,o.kt)("p",null,"All our examples use simple source and sink to make it less dependent and easy to run. You can change the example configuration\nin ",(0,o.kt)("inlineCode",{parentName:"p"},"resources/examples"),". You could change your configuration as below, if you want to use PostgreSQL as the source and\nsink to console. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-conf"},'env {\n  execution.parallelism = 1\n}\n\nsource {\n  JdbcSource {\n    driver = org.postgresql.Driver\n    url = "jdbc:postgresql://host:port/database"\n    username = postgres\n    query = "select * from test"\n  }\n}\n\nsink {\n  ConsoleSink {}\n}\n')))}d.isMDXComponent=!0},28995:function(e,n,t){n.Z=t.p+"assets/images/checkstyle-452b0e47d24b38fb32d445411da389e5.png"}}]);