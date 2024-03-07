"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[2086],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return c}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),u=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=u(t.components);return a.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),d=u(n),c=r,k=d["".concat(s,".").concat(c)]||d[c]||m[c]||l;return n?a.createElement(k,i(i({ref:e},p),{},{components:n})):a.createElement(k,i({ref:e},p))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86814:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return p},toc:function(){return m},default:function(){return c}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={},s="Pulsar",u={unversionedId:"connector-v2/sink/Pulsar",id:"connector-v2/sink/Pulsar",title:"Pulsar",description:"Pulsar sink connector",source:"@site/docs/connector-v2/sink/Pulsar.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Pulsar",permalink:"/zh-CN/docs/connector-v2/sink/Pulsar",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/sink/Pulsar.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"PostgreSql",permalink:"/zh-CN/docs/connector-v2/sink/PostgreSql"},next:{title:"Rabbitmq",permalink:"/zh-CN/docs/connector-v2/sink/Rabbitmq"}},p={},m=[{value:"Support Those Engines",id:"support-those-engines",level:2},{value:"Key features",id:"key-features",level:2},{value:"Description",id:"description",level:2},{value:"Supported DataSource Info",id:"supported-datasource-info",level:2},{value:"Sink Options",id:"sink-options",level:2},{value:"Parameter Interpretation",id:"parameter-interpretation",level:2},{value:"client.service-url String",id:"clientservice-url-string",level:3},{value:"admin.service-url String",id:"adminservice-url-string",level:3},{value:"auth.plugin-class String",id:"authplugin-class-string",level:3},{value:"auth.params String",id:"authparams-string",level:3},{value:"format String",id:"format-string",level:3},{value:"field_delimiter String",id:"field_delimiter-string",level:3},{value:"semantics Enum",id:"semantics-enum",level:3},{value:"transaction_timeout Int",id:"transaction_timeout-int",level:3},{value:"pulsar.config Map",id:"pulsarconfig-map",level:3},{value:"message.routing.mode Enum",id:"messageroutingmode-enum",level:3},{value:"partition_key_fields String",id:"partition_key_fields-string",level:3},{value:"common options",id:"common-options",level:3},{value:"Task Example",id:"task-example",level:2},{value:"Simple:",id:"simple",level:3},{value:"Changelog",id:"changelog",level:2},{value:"next version",id:"next-version",level:3}],d={toc:m};function c(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"pulsar"},"Pulsar"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Pulsar sink connector")),(0,l.kt)("h2",{id:"support-those-engines"},"Support Those Engines"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Spark",(0,l.kt)("br",null),"\nFlink",(0,l.kt)("br",null),"\nSeatunnel Zeta",(0,l.kt)("br",null))),(0,l.kt)("h2",{id:"key-features"},"Key features"),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"exactly-once"))),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Sink connector for Apache Pulsar."),(0,l.kt)("h2",{id:"supported-datasource-info"},"Supported DataSource Info"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Datasource"),(0,l.kt)("th",{parentName:"tr",align:null},"Supported Versions"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Pulsar"),(0,l.kt)("td",{parentName:"tr",align:null},"Universal")))),(0,l.kt)("h2",{id:"sink-options"},"Sink Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"topic"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"sink pulsar topic")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"client.service-url"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Service URL provider for Pulsar service.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"admin.service-url"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"The Pulsar service HTTP URL for the admin endpoint.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"auth.plugin-class"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the authentication plugin.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"auth.params"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Parameters for the authentication plugin.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"format"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"json"),(0,l.kt)("td",{parentName:"tr",align:null},"Data format. The default format is json. Optional text format.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"field_delimiter"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},","),(0,l.kt)("td",{parentName:"tr",align:null},"Customize the field delimiter for data format.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"semantics"),(0,l.kt)("td",{parentName:"tr",align:null},"Enum"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"AT_LEAST_ONCE"),(0,l.kt)("td",{parentName:"tr",align:null},"Consistency semantics for writing to pulsar.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"transaction_timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"Int"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"600"),(0,l.kt)("td",{parentName:"tr",align:null},"The transaction timeout is specified as 10 minutes by default.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pulsar.config"),(0,l.kt)("td",{parentName:"tr",align:null},"Map"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"In addition to the above parameters that must be specified by the Pulsar producer client.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"message.routing.mode"),(0,l.kt)("td",{parentName:"tr",align:null},"Enum"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"RoundRobinPartition"),(0,l.kt)("td",{parentName:"tr",align:null},"Default routing mode for messages to partition.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"partition_key_fields"),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Configure which fields are used as the key of the pulsar message.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"common-options"),(0,l.kt)("td",{parentName:"tr",align:null},"config"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Source plugin common parameters, please refer to ",(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/sink/common-options"},"Source Common Options")," for details.")))),(0,l.kt)("h2",{id:"parameter-interpretation"},"Parameter Interpretation"),(0,l.kt)("h3",{id:"clientservice-url-string"},"client.service-url ","[String]"),(0,l.kt)("p",null,"Service URL provider for Pulsar service.\nTo connect to Pulsar using client libraries, you need to specify a Pulsar protocol URL.\nYou can assign Pulsar protocol URLs to specific clusters and use the Pulsar scheme."),(0,l.kt)("p",null,"For example, ",(0,l.kt)("inlineCode",{parentName:"p"},"localhost"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"pulsar://localhost:6650,localhost:6651"),"."),(0,l.kt)("h3",{id:"adminservice-url-string"},"admin.service-url ","[String]"),(0,l.kt)("p",null,"The Pulsar service HTTP URL for the admin endpoint."),(0,l.kt)("p",null,"For example, ",(0,l.kt)("inlineCode",{parentName:"p"},"http://my-broker.example.com:8080"),", or ",(0,l.kt)("inlineCode",{parentName:"p"},"https://my-broker.example.com:8443")," for TLS."),(0,l.kt)("h3",{id:"authplugin-class-string"},"auth.plugin-class ","[String]"),(0,l.kt)("p",null,"Name of the authentication plugin."),(0,l.kt)("h3",{id:"authparams-string"},"auth.params ","[String]"),(0,l.kt)("p",null,"Parameters for the authentication plugin."),(0,l.kt)("p",null,"For example, ",(0,l.kt)("inlineCode",{parentName:"p"},"key1:val1,key2:val2")),(0,l.kt)("h3",{id:"format-string"},"format ","[String]"),(0,l.kt)("p",null,'Data format. The default format is json. Optional text format. The default field separator is ",".\nIf you customize the delimiter, add the "field_delimiter" option.'),(0,l.kt)("h3",{id:"field_delimiter-string"},"field_delimiter ","[String]"),(0,l.kt)("p",null,"Customize the field delimiter for data format.The default field_delimiter is ','."),(0,l.kt)("h3",{id:"semantics-enum"},"semantics ","[Enum]"),(0,l.kt)("p",null,"Consistency semantics for writing to pulsar.\nAvailable options are EXACTLY_ONCE,NON,AT_LEAST_ONCE, default AT_LEAST_ONCE.\nIf semantic is specified as EXACTLY_ONCE, we will use 2pc to guarantee the message is sent to pulsar exactly once.\nIf semantic is specified as NON, we will directly send the message to pulsar, the data may duplicat/lost if\njob restart/retry or network error."),(0,l.kt)("h3",{id:"transaction_timeout-int"},"transaction_timeout ","[Int]"),(0,l.kt)("p",null,"The transaction timeout is specified as 10 minutes by default.\nIf the transaction does not commit within the specified timeout, the transaction will be automatically aborted.\nSo you need to ensure that the timeout is greater than the checkpoint interval."),(0,l.kt)("h3",{id:"pulsarconfig-map"},"pulsar.config ","[Map]"),(0,l.kt)("p",null,"In addition to the above parameters that must be specified by the Pulsar producer client,\nthe user can also specify multiple non-mandatory parameters for the producer client,\ncovering all the producer parameters specified in the official Pulsar document."),(0,l.kt)("h3",{id:"messageroutingmode-enum"},"message.routing.mode ","[Enum]"),(0,l.kt)("p",null,"Default routing mode for messages to partition.\nAvailable options are SinglePartition,RoundRobinPartition.\nIf you choose SinglePartition, If no key is provided, The partitioned producer will randomly pick one single partition and publish all the messages into that partition, If a key is provided on the message, the partitioned producer will hash the key and assign message to a particular partition.\nIf you choose RoundRobinPartition, If no key is provided, the producer will publish messages across all partitions in round-robin fashion to achieve maximum throughput.\nPlease note that round-robin is not done per individual message but rather it's set to the same boundary of batching delay, to ensure batching is effective."),(0,l.kt)("h3",{id:"partition_key_fields-string"},"partition_key_fields ","[String]"),(0,l.kt)("p",null,"Configure which fields are used as the key of the pulsar message."),(0,l.kt)("p",null,"For example, if you want to use value of fields from upstream data as key, you can assign field names to this property."),(0,l.kt)("p",null,"Upstream data is the following:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"age"),(0,l.kt)("th",{parentName:"tr",align:null},"data"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Jack"),(0,l.kt)("td",{parentName:"tr",align:null},"16"),(0,l.kt)("td",{parentName:"tr",align:null},"data-example1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mary"),(0,l.kt)("td",{parentName:"tr",align:null},"23"),(0,l.kt)("td",{parentName:"tr",align:null},"data-example2")))),(0,l.kt)("p",null,"If name is set as the key, then the hash value of the name column will determine which partition the message is sent to."),(0,l.kt)("p",null,"If not set partition key fields, the null message key will be sent to."),(0,l.kt)("p",null,'The format of the message key is json, If name is set as the key, for example \'{"name":"Jack"}\'.'),(0,l.kt)("p",null,"The selected field must be an existing field in the upstream."),(0,l.kt)("h3",{id:"common-options"},"common options"),(0,l.kt)("p",null,"Source plugin common parameters, please refer to ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/connector-v2/sink/common-options"},"Source Common Options")," for details."),(0,l.kt)("h2",{id:"task-example"},"Task Example"),(0,l.kt)("h3",{id:"simple"},"Simple:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"This example defines a SeaTunnel synchronization task that automatically generates data through FakeSource and sends it to Pulsar Sink. FakeSource generates a total of 16 rows of data (row.num=16), with each row having two fields, name (string type) and age (int type). The final target topic is test_topic will also be 16 rows of data in the topic. And if you have not yet installed and deployed SeaTunnel, you need to follow the instructions in ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/start-v2/locally/deployment"},"Install SeaTunnel")," to install and deploy SeaTunnel. And then follow the instructions in ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/start-v2/locally/quick-start-seatunnel-engine"},"Quick Start With SeaTunnel Engine")," to run this job.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hocon"},'# Defining the runtime environment\nenv {\n  # You can set flink configuration here\n  execution.parallelism = 1\n  job.mode = "BATCH"\n}\n\nsource {\n  FakeSource {\n    parallelism = 1\n    result_table_name = "fake"\n    row.num = 16\n    schema = {\n      fields {\n        name = "string"\n        age = "int"\n      }\n    }\n  }\n}\n\nsink {\n  Pulsar {\n    topic = "example"\n    client.service-url = "localhost:pulsar://localhost:6650"\n    admin.service-url = "http://my-broker.example.com:8080"\n    result_table_name = "test"\n    pulsar.config = {\n        sendTimeoutMs = 30000\n    }\n  }\n}\n')),(0,l.kt)("h2",{id:"changelog"},"Changelog"),(0,l.kt)("h3",{id:"next-version"},"next version"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Add Pulsar Sink Connector")))}c.isMDXComponent=!0}}]);