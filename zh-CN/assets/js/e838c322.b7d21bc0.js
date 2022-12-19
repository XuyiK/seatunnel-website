"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[82881],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||r;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},34658:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return u},toc:function(){return p},default:function(){return h}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),i=["components"],l={},s="A tutorial to help you develop a SeaTunnel Connector hand-by-hand while avoiding pitfalls",c={permalink:"/zh-CN/blog/2022/09/20/A-tutorial-to-help-you develop-a-SeaTunnel-Connector-hand-by-hand-while-avoiding -pitfalls",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/blog/2022-09-20-A-tutorial-to-help-you develop-a-SeaTunnel-Connector-hand-by-hand-while-avoiding -pitfalls.md",source:"@site/blog/2022-09-20-A-tutorial-to-help-you develop-a-SeaTunnel-Connector-hand-by-hand-while-avoiding -pitfalls.md",title:"A tutorial to help you develop a SeaTunnel Connector hand-by-hand while avoiding pitfalls",description:"SeaTunnel Connector Acess Plan",date:"2022-09-20T00:00:00.000Z",formattedDate:"2022\u5e749\u670820\u65e5",tags:[],readingTime:12.055,truncated:!1,authors:[],frontMatter:{},prevItem:{title:"Mafengwo finally chose Apache SeaTunnel after analyzing these 9 points of how it works!",permalink:"/zh-CN/blog/During the joint Apache SeaTunnel & IoTDB Meetup on October 15,"},nextItem:{title:"Code Demo for SeaTunnel Connector Development Process",permalink:"/zh-CN/blog/2022/09/19/Code-Demo-for-SeaTunnel-Connector-Development-Process"}},u={authorsImageUrls:[]},p=[{value:"SeaTunnel Connector Acess Plan",id:"seatunnel-connector-acess-plan",level:2},{value:"Speaker",id:"speaker",level:2},{value:"This presentation is divided into 5 parts:",id:"this-presentation-is-divided-into-5-parts",level:2},{value:"1. About the Connector Access Incentive Plan",id:"1-about-the-connector-access-incentive-plan",level:2},{value:"2. Preparations Before Claiming/Developing Connectors",id:"2-preparations-before-claimingdeveloping-connectors",level:2},{value:"01. What is a connector?",id:"01-what-is-a-connector",level:3},{value:"02. How to claim a connector",id:"02-how-to-claim-a-connector",level:3},{value:"03. Compile the project",id:"03-compile-the-project",level:3},{value:"04. Understand Connector related code structure",id:"04-understand-connector-related-code-structure",level:3},{value:"Engineering Code structure",id:"engineering-code-structure",level:4},{value:"05. See how other people develop connectors",id:"05-see-how-other-people-develop-connectors",level:3},{value:"3. Small Issues/Tasks During Development",id:"3-small-issuestasks-during-development",level:2},{value:"01. Source-related development",id:"01-source-related-development",level:3},{value:"02. Sink-related development",id:"02-sink-related-development",level:3},{value:"03. Connector related",id:"03-connector-related",level:3},{value:"04. How to seek help",id:"04-how-to-seek-help",level:3},{value:"4. Notes on Writing E2E Tests",id:"4-notes-on-writing-e2e-tests",level:2},{value:"01. E2E Failed \u2014 Test Case Network Address Conflict",id:"01-e2e-failed--test-case-network-address-conflict",level:3},{value:"02. E2E failure \u2014 Spark jar package conflict",id:"02-e2e-failure--spark-jar-package-conflict",level:3},{value:"03. E2E failure \u2014 Connector jar package conflict",id:"03-e2e-failure--connector-jar-package-conflict",level:3},{value:"04. Insufficient E2E \u2014 Sink Logic Verification",id:"04-insufficient-e2e--sink-logic-verification",level:3},{value:"05. Insufficient E2E \u2014 Source validation data",id:"05-insufficient-e2e--source-validation-data",level:3},{value:"06. E2E stability improvement",id:"06-e2e-stability-improvement",level:3},{value:"07. A method to speed up E2E",id:"07-a-method-to-speed-up-e2e",level:3},{value:"5. Checks Before Submitting a PR",id:"5-checks-before-submitting-a-pr",level:2}],d={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/1400/0*4fOZaPYhwL2pdUpK",alt:null})),(0,r.kt)("h2",{id:"seatunnel-connector-acess-plan"},"SeaTunnel Connector Acess Plan"),(0,r.kt)("p",null,"During the recent live event of the SeaTunnel Connector Access Plan, Beluga open source engineer Wang Hailin shared the \u201cSeaTunnel Connector Access Plan and Development Guide to Avoiding Pit,\u201d and taught everyone how to develop a connector from scratch, including the whole process \u2014 from preparation to testing, and final PR."),(0,r.kt)("h2",{id:"speaker"},"Speaker"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/1100/0*LRtFiJkgV5DEWOAa",alt:null}),"\n",(0,r.kt)("strong",{parentName:"p"},"Wang Hailin")),(0,r.kt)("p",null,"Wailin Hailin is an open-source enthusiast, SkyWalking Committer, DolphinScheduler, and SeaTunnel contributor. His current work focuses on performance monitoring, data processing, and more. He likes to study related technical implementations and participate in community exchanges and contributions."),(0,r.kt)("h2",{id:"this-presentation-is-divided-into-5-parts"},"This presentation is divided into 5 parts:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"About the connector access incentive program"),(0,r.kt)("li",{parentName:"ol"},"Preparation before claiming/developing connector"),(0,r.kt)("li",{parentName:"ol"},"Small things in development"),(0,r.kt)("li",{parentName:"ol"},"Considerations for writing E2E Tests"),(0,r.kt)("li",{parentName:"ol"},"Preparations to submit a PR")),(0,r.kt)("h2",{id:"1-about-the-connector-access-incentive-plan"},"1. About the Connector Access Incentive Plan"),(0,r.kt)("p",null,"Firstly, let me introduce the SeaTunnel Connector Access Incentive Program, and the steps to develop a connector from start to finish (even for novices). This includes the whole process of preparation for development, testing, and final PR."),(0,r.kt)("p",null,"The SeaTunnel community released a new connector API not long ago, which supports running on various engines, including Flink, Spark, and more. This eliminates the need for repeated development of the old version."),(0,r.kt)("p",null,"After the new API is released, the old connector needs to be migrated, or the new connector should be supported."),(0,r.kt)("p",null,"In order to motivate the community to actively participate in the SeaTunnel Connector Access work and help build SeaTunnel into a more efficient data integration platform, the SeaTunnel community-initiated activities, sponsored by Beluga Open Source."),(0,r.kt)("p",null,"The activities have three modes: simple, medium, and hard for the task of accessing the connector. The threshold is low."),(0,r.kt)("p",null,"You can see which tasks need to be claimed on the activity issue list, as well as segmentation based on difficulty and priority. You can choose the activity you are comfortable with. You can start contributing based on the difficulty level.\n",(0,r.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/1400/0*laqub6yhNDOqPaGc",alt:null})),(0,r.kt)("p",null,"The ecological construction of SeaTunnel can become more complete and advanced only with the help of your contributions. You are welcome to participate actively."),(0,r.kt)("p",null,"In order to express our gratitude, our event has set up a link where points can be exchanged for physical prizes. The more points you get, the more prized you can win!"),(0,r.kt)("p",null,"Presently, we\u2019ve seen many small partners participate in the event and submit their connectors. It\u2019s not too late to join as there is still a significant period of time before the event ends. Based on the difficulty of the activity, the deadline may be relaxed or extended."),(0,r.kt)("h2",{id:"2-preparations-before-claimingdeveloping-connectors"},"2. Preparations Before Claiming/Developing Connectors"),(0,r.kt)("p",null,"So, how do you get involved with this amazing activity?"),(0,r.kt)("p",null,"By first getting to know the basics of a connector."),(0,r.kt)("h3",{id:"01-what-is-a-connector"},"01. What is a connector?"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/750/0*IjdxVOKUu649s7vQ",alt:null}),"\nA connector is composed of Source and SInk (Source + Sink)."),(0,r.kt)("p",null,"In the above figure, the connectors are connected to various data sources at the upper and lower layers. The source is responsible for reading data from external data sources, while the sink is responsible for writing data to external sources."),(0,r.kt)("p",null,"There is also an abstraction layer between the source and the sink."),(0,r.kt)("p",null,"Through this abstraction later, the data types of various data sources can be uniformly converted into the data format of SeaTunnelRow. This allows users to arbitrarily assemble various sources and sinks, so as to realize the integration of heterogeneous data sources, and data synchronization between multiple data sources."),(0,r.kt)("h3",{id:"02-how-to-claim-a-connector"},"02. How to claim a connector"),(0,r.kt)("p",null,"After understanding the basic concepts, the next step is to claim the connector."),(0,r.kt)("p",null,"GitHub link: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel/issues/1946"},"https://github.com/apache/incubator-seatunnel/issues/1946")),(0,r.kt)("p",null,"You can use the above-mentioned GitHub link to see our plans for connecting to the connector. You can make any additions at any time."),(0,r.kt)("p",null,"First, find a connector that has not been claimed. To avoid conflicts, search the entire issue to see if anyone has submitted a PR."),(0,r.kt)("p",null,"After claiming the connector, we suggest that you create an issue of the corresponding feature, synchronize the problems you encountered in the development, and discuss the design of your solution."),(0,r.kt)("p",null,"If you encounter any problems and need help, you can describe them in the issue, and the community can take it up together. Participate in the discussions to help solve the problem. This is also added to the record of the function implementation process, which makes it easy to refer to when maintaining and modifying in the future."),(0,r.kt)("h3",{id:"03-compile-the-project"},"03. Compile the project"),(0,r.kt)("p",null,"After claiming the connector, it\u2019s time to prepare the development environment."),(0,r.kt)("p",null,"First, fork the SeaTunnel project to the local development environment and compile it."),(0,r.kt)("p",null,"Here\u2019s the compilation reference documentation: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel/blob/dev/docs/en/contribution/setup.md"},"https://github.com/apache/incubator-seatunnel/blob/dev/docs/en/contribution/setup.md")),(0,r.kt)("p",null,"Run the testcase in the documentation after the compilation is successful. You might encounter some issues/problems during the first contact compilation process, such as the following compilation errors:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/1400/0*rGkqQzdfwd6Dp-mR",alt:null}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/1400/0*r2X63dr2YBTxZGen",alt:null})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The solution to the above exceptions:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"rm {your_maven_dir}/repository/org/apache/seatunnel\n./mvnw clean\nRecompile it\n")),(0,r.kt)("h3",{id:"04-understand-connector-related-code-structure"},"04. Understand Connector related code structure"),(0,r.kt)("p",null,"The success of project compilation means that the development environment is ready. Next, let\u2019s take a look at the project code structure and API interface structure of the connector."),(0,r.kt)("h4",{id:"engineering-code-structure"},"Engineering Code structure"),(0,r.kt)("p",null,"After the project is compiled, there are three parts related to the connector. The first part is the code implementation and dependency management of the new connector module."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"seatunnel-connectors-v2 stores the connector submodule"),(0,r.kt)("li",{parentName:"ul"},"seatunnel-connectors-v2-dist manages connectors-v2 maven dependencies")),(0,r.kt)("p",null,"The second part is the example. When testing locally, you can build a corresponding case on the example to test the connector."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"seatunnel-flink-connector-v2-example example running on Flink"),(0,r.kt)("li",{parentName:"ul"},"seatunnel-spark-connector-v2-example example running on Spark")),(0,r.kt)("p",null,"The third part is the E2E-testcase: adding targeted test cases on the respective running engines of Spark or Flink, and verifying the functional logic of the connector through automated testing."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"seatunnel-flink-connector-v2-e2e testcase running on Flink"),(0,r.kt)("li",{parentName:"ul"},"seatunnel-spark-connector-v2-e2e testcase running on Spark")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Code structure (interfaces, base classes)")),(0,r.kt)("p",null,"The public interfaces and base classes used in the development are fully described in our readme. For example, API function usage scenarios."),(0,r.kt)("p",null,"Here\u2019s the link: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel/blob/dev/seatunnel-connectors-v2/README.en.md"},"https://github.com/apache/incubator-seatunnel/blob/dev/seatunnel-connectors-v2/README.en.md")),(0,r.kt)("h3",{id:"05-see-how-other-people-develop-connectors"},"05. See how other people develop connectors"),(0,r.kt)("p",null,"After going through the above steps, don\u2019t rush to start the work. Instead, first, check out how others do it."),(0,r.kt)("p",null,"We strongly recommend you check out the connector novice development tutorial shared on the community's official account:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[SeaTunnel Connector Minimalist Development Process]"),(0,r.kt)("li",{parentName:"ul"},"[New API Connector Development Analysis]"),(0,r.kt)("li",{parentName:"ul"},"[The way of decoupling Apache SeaTunnel (Incubating) and the computing engine \u2014 what we\u2019ve done to reconstruct the API]")),(0,r.kt)("p",null,"In addition, you can refer to the merged Connector code to see the scope of changes, the public interfaces and dependencies used, and the test cases."),(0,r.kt)("h2",{id:"3-small-issuestasks-during-development"},"3. Small Issues/Tasks During Development"),(0,r.kt)("p",null,"Next, you have to officially enter the connector development process. What problems may be encountered during the development process?"),(0,r.kt)("p",null,"The connector is divided into the source and sink ends \u2014 you can choose either one or both."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/640/0*QxOnCYLu4AcvKw58",alt:null})),(0,r.kt)("h3",{id:"01-source-related-development"},"01. Source-related development"),(0,r.kt)("p",null,"The first thing to pay attention to when developing a source is to determine the reading mode of the source: is it streaming or batch? Is support still required?"),(0,r.kt)("p",null,"Use the Source#getBoundedness interface to mark the modes supported by the source."),(0,r.kt)("p",null,"For example, Kafka naturally supports streaming reading, but it can also support batch mode reading by obtaining lastOffset in the source."),(0,r.kt)("p",null,"Another question to be aware of: does the source require concurrent reads? If it is single concurrency, after the source is started, a reader will be created to read the data from the data source."),(0,r.kt)("p",null,"If you want to achieve multi-concurrency, you need to implement an enumerator interface through which data blocks are allocated to readers, and the readers each read their allocated data blocks."),(0,r.kt)("p",null,"For example, the Kafka source uses partition sharding, and the jdbc source uses fields for range query sharding. It should be noted here that if it is a concurrent reading method, the stability of the data block distribution rules must be ensured."),(0,r.kt)("p",null,"This is because currently, the connector has a corresponding enumerator on each shard in actual operation, and it is necessary to ensure that the enumerator has data in each shard."),(0,r.kt)("p",null,"Thirdly, does the source need to support resumable transfer/state restoration?"),(0,r.kt)("p",null,"If you want to support this, you need to implement:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Source#restoreEnumerator"),": restore state"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Enumerator#snapshotState"),": storage shard allocation"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Reader#snapshotState"),": stores the read position")),(0,r.kt)("h3",{id:"02-sink-related-development"},"02. Sink-related development"),(0,r.kt)("p",null,"If the sink is a common sink implementation, use Sink#createWriter to write our data according to the concurrency of the source."),(0,r.kt)("p",null,"If you need to support failure recovery, you need to implement:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Sink#restoreWriter"),": restore state"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Writer#snapshotState"),": snapshot state")),(0,r.kt)("p",null,"If you want to support a two-phase commit, you need to implement the following interfaces:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sink#createCommitter"),(0,r.kt)("li",{parentName:"ul"},"Writer#prepareCommit: pre-commit"),(0,r.kt)("li",{parentName:"ul"},"Committer#commit: abort Phase 2 commit")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/640/0*GpYdUR2mTlur8jHQ",alt:null})),(0,r.kt)("h3",{id:"03-connector-related"},"03. Connector related"),(0,r.kt)("p",null,"Next, let\u2019s take a look at some of the general problems, especially when the first contribution is made with different styles for each environment, there are often various problems. Therefore, it is recommended that you import tools/checkstyle/checkStyle.xml from the project during development, and use a unified coding format."),(0,r.kt)("p",null,"Whether it is a source or a sink, it will involve defining the data format. The community is pushing for a unified data format definition."),(0,r.kt)("p",null,"To define Schema, please refer to PR: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel/pull/2392"},"https://github.com/apache/incubator-seatunnel/pull/2392"),"\nTo define the Format, please refer to PR: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel/pull/2435"},"https://github.com/apache/incubator-seatunnel/pull/2435")),(0,r.kt)("p",null,"If you feel that the compilation speed is slow, you can temporarily annotate the old version of the connector-related module in order to speed up both development and debugging."),(0,r.kt)("h3",{id:"04-how-to-seek-help"},"04. How to seek help"),(0,r.kt)("p",null,"When you encounter problems during development and need help, you can:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Describe the problem in your Issue and call active contributors"),(0,r.kt)("li",{parentName:"ul"},"Discuss on mailing lists and Slack"),(0,r.kt)("li",{parentName:"ul"},"Communicate through the WeChat group (if you have not joined, please follow the SeaTunnel official account to join the group, and add a small assistant WeChat seatunnel1)"),(0,r.kt)("li",{parentName:"ul"},"There may be a community docking group for docking third-party components (allowing you to do more with less)")),(0,r.kt)("h2",{id:"4-notes-on-writing-e2e-tests"},"4. Notes on Writing E2E Tests"),(0,r.kt)("p",null,"E2E testing is very important. It is often called the gatekeeper of connector quality."),(0,r.kt)("p",null,"This is because, if the connector you wrote is not tested, it could be difficult for the community to judge whether there are problems with the implementation of the static code."),(0,r.kt)("p",null,"Therefore, E2E testing is not only functional verification but also a process of checking data logic, which can reduce the pressure on the community to review code and ensure basic functional correctness."),(0,r.kt)("p",null,"In E2E testing, these are some of the problems that may be encountered:"),(0,r.kt)("h3",{id:"01-e2e-failed--test-case-network-address-conflict"},"01. E2E Failed \u2014 Test Case Network Address Conflict"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Because the E2E network deployment structure has the following characteristics:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"External components that Spark, Flink, and e2e-test case depend on (for example, MySQL), use the container networkAliases(host) as the access address"),(0,r.kt)("li",{parentName:"ul"},"e2e-test case on both sides of Spark and Flink may run in parallel under the same host"),(0,r.kt)("li",{parentName:"ul"},"External components that e2e-test case depends on, need to map ports to hosts for e2e-test case to access")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Therefore, E2E has to pay attention to:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The external components e2e-test case depends on the ports mapped to the external networkAliases, and so cannot be the same in the test cases on both sides of Spark and Flink"),(0,r.kt)("li",{parentName:"ul"},"e2e-test case uses localhost, the above-mapped port, to access external components"),(0,r.kt)("li",{parentName:"ul"},"e2e\u2019s configuration file uses networkAliases(host), the external components that depend on port access in the container")),(0,r.kt)("p",null,"Here\u2019s the E2E Testcase reference PR: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel/pull/2429"},"https://github.com/apache/incubator-seatunnel/pull/2429")),(0,r.kt)("h3",{id:"02-e2e-failure--spark-jar-package-conflict"},"02. E2E failure \u2014 Spark jar package conflict"),(0,r.kt)("p",null,"Spark uses the parent first-class loader by default, which may conflict with the package referenced by the connector. For this, the userClassPathFirst classloader can be configured in the Connector environment."),(0,r.kt)("p",null,"However, the current packaging structure of SeaTunnel will cause userClassPathFirst to not work properly, so we created an issue, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel/pull/2474"},"https://github.com/apache/incubator-seatunnel/pull/2474"),", to track this issue. Everyone is welcome to contribute solutions."),(0,r.kt)("p",null,"Currently, this can only be resolved by replacing conflicting packages in the spark jars directory with the documentation."),(0,r.kt)("h3",{id:"03-e2e-failure--connector-jar-package-conflict"},"03. E2E failure \u2014 Connector jar package conflict"),(0,r.kt)("p",null,"Both the old and new versions of Connector are dependent on the E2E project and cause conflicts."),(0,r.kt)("p",null,"PR ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel/pull/2414"},"https://github.com/apache/incubator-seatunnel/pull/2414")," has resolved this issue."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Version conflict between Connector-v2:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Mainly occurs during E2E, because the E2E project depends on all Connectors"),(0,r.kt)("li",{parentName:"ul"},"We may plan to provide a separate test project for each Connector (or version) in the future")),(0,r.kt)("h3",{id:"04-insufficient-e2e--sink-logic-verification"},"04. Insufficient E2E \u2014 Sink Logic Verification"),(0,r.kt)("p",null,"The FakeSource of the Connector-v2 version can only generate random data of a few fixed columns at present, and the community partners are optimizing it to make it better. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel/pull/2406"},"https://github.com/apache/incubator-seatunnel/pull/2406\n"),"\nThat said, we can temporarily solve this problem by simulating the data of the specified content through Transform sql:\n",(0,r.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/1400/0*_uvD-JWrVbABolAq",alt:null})),(0,r.kt)("h3",{id:"05-insufficient-e2e--source-validation-data"},"05. Insufficient E2E \u2014 Source validation data"),(0,r.kt)("p",null,"The Assert Sink can configure column rules, but cannot do row-level value checking. For this problem, you can temporarily use other connector sinks with external storage for query verification data."),(0,r.kt)("h3",{id:"06-e2e-stability-improvement"},"06. E2E stability improvement"),(0,r.kt)("p",null,"In many cases, when E2E starts, you might use Thread.sleep to wait for resource initialization. Here, sleep will cause fewer initialization failures but more time-wasting issues."),(0,r.kt)("p",null,"In addition, due to the instability of resources, network, and other issues, you might be able to run it now but not later.\n",(0,r.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/1400/0*iBxwGDaHfXROqtEt",alt:null}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/1400/0*c2yFYbeVWPvHV7SY",alt:null}),"\nTo avoid this problem, Thread.sleep can be replaced with Awaitility."),(0,r.kt)("h3",{id:"07-a-method-to-speed-up-e2e"},"07. A method to speed up E2E"),(0,r.kt)("p",null,"At present, I see that most people run E2E tests separately for both source and sink. If you want to speed up the PR process, it is recommended that you combine both the sink and source into one E2E testcase for verification, and run the testcase only once."),(0,r.kt)("h2",{id:"5-checks-before-submitting-a-pr"},"5. Checks Before Submitting a PR"),(0,r.kt)("p",null,"After completing the previous steps, please make sure you do some checks before submitting PR \u2014 including the following aspects:"),(0,r.kt)("p",null,"Complete recompile project:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Codestyle validation, dependency validation"),(0,r.kt)("li",{parentName:"ul"},"The successful compilation before does not mean that it can be compiled successfully now")),(0,r.kt)("p",null,"Running E2E locally succeeds:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Both Flink and Spark are verified")),(0,r.kt)("p",null,"Supplement or change the document and review it again before submitting:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Review for places not covered by tests"),(0,r.kt)("li",{parentName:"ul"},"Places that hav been reviewed before and needs to be checked again"),(0,r.kt)("li",{parentName:"ul"},"Review for including all files, not just code")),(0,r.kt)("p",null,"The above operations and steps can greatly save CI resources, speed up PR Merged, and reduce the costs of community reviews."))}h.isMDXComponent=!0}}]);