"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[71117],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>y});var a=n(96540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=m(n),d=l,y=u["".concat(p,".").concat(d)]||u[d]||g[d]||r;return n?a.createElement(y,i(i({ref:t},s),{},{components:n})):a.createElement(y,i({ref:t},s))}));function y(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var m=2;m<r;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},30657:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var a=n(58168),l=(n(96540),n(15680));const r={},i="Hudi",o={unversionedId:"connector-v2/sink/Hudi",id:"connector-v2/sink/Hudi",title:"Hudi",description:"Hudi sink connector",source:"@site/docs/connector-v2/sink/Hudi.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Hudi",permalink:"/docs/connector-v2/sink/Hudi",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/sink/Hudi.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Http",permalink:"/docs/connector-v2/sink/Http"},next:{title:"Apache Iceberg",permalink:"/docs/connector-v2/sink/Iceberg"}},p={},m=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"table_name string",id:"table_name-string",level:3},{value:"table_dfs_path string",id:"table_dfs_path-string",level:3},{value:"table_type enum",id:"table_type-enum",level:3},{value:"conf_files_path string",id:"conf_files_path-string",level:3},{value:"op_type enum",id:"op_type-enum",level:3},{value:"batch_interval_ms Int",id:"batch_interval_ms-int",level:3},{value:"insert_shuffle_parallelism Int",id:"insert_shuffle_parallelism-int",level:3},{value:"upsert_shuffle_parallelism Int",id:"upsert_shuffle_parallelism-int",level:3},{value:"min_commits_to_keep Int",id:"min_commits_to_keep-int",level:3},{value:"max_commits_to_keep Int",id:"max_commits_to_keep-int",level:3},{value:"common options",id:"common-options",level:3},{value:"Examples",id:"examples",level:2},{value:"Changelog",id:"changelog",level:2},{value:"2.2.0-beta 2022-09-26",id:"220-beta-2022-09-26",level:3}],s={toc:m},u="wrapper";function g(e){let{components:t,...n}=e;return(0,l.yg)(u,(0,a.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"hudi"},"Hudi"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Hudi sink connector")),(0,l.yg)("h2",{id:"description"},"Description"),(0,l.yg)("p",null,"Used to write data to Hudi."),(0,l.yg)("h2",{id:"key-features"},"Key features"),(0,l.yg)("ul",{className:"contains-task-list"},(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"exactly-once")),(0,l.yg)("li",{parentName:"ul",className:"task-list-item"},(0,l.yg)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.yg)("a",{parentName:"li",href:"/docs/concept/connector-v2-features"},"cdc"))),(0,l.yg)("h2",{id:"options"},"Options"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"name"),(0,l.yg)("th",{parentName:"tr",align:null},"type"),(0,l.yg)("th",{parentName:"tr",align:null},"required"),(0,l.yg)("th",{parentName:"tr",align:null},"default value"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"table_name"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"table_dfs_path"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"yes"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"conf_files_path"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"record_key_fields"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"partition_fields"),(0,l.yg)("td",{parentName:"tr",align:null},"string"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"table_type"),(0,l.yg)("td",{parentName:"tr",align:null},"enum"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"copy_on_write")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"op_type"),(0,l.yg)("td",{parentName:"tr",align:null},"enum"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"insert")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"batch_interval_ms"),(0,l.yg)("td",{parentName:"tr",align:null},"Int"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"1000")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"insert_shuffle_parallelism"),(0,l.yg)("td",{parentName:"tr",align:null},"Int"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"2")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"upsert_shuffle_parallelism"),(0,l.yg)("td",{parentName:"tr",align:null},"Int"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"2")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"min_commits_to_keep"),(0,l.yg)("td",{parentName:"tr",align:null},"Int"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"20")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"max_commits_to_keep"),(0,l.yg)("td",{parentName:"tr",align:null},"Int"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"30")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"common-options"),(0,l.yg)("td",{parentName:"tr",align:null},"config"),(0,l.yg)("td",{parentName:"tr",align:null},"no"),(0,l.yg)("td",{parentName:"tr",align:null},"-")))),(0,l.yg)("h3",{id:"table_name-string"},"table_name ","[string]"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"table_name")," The name of hudi table."),(0,l.yg)("h3",{id:"table_dfs_path-string"},"table_dfs_path ","[string]"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"table_dfs_path")," The dfs root path of hudi table,such as 'hdfs://nameserivce/data/hudi/hudi_table/'."),(0,l.yg)("h3",{id:"table_type-enum"},"table_type ","[enum]"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"table_type")," The type of hudi table. The value is 'copy_on_write' or 'merge_on_read'."),(0,l.yg)("h3",{id:"conf_files_path-string"},"conf_files_path ","[string]"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"conf_files_path")," The environment conf file path list(local path), which used to init hdfs client to read hudi table file. The example is '/home/test/hdfs-site.xml;/home/test/core-site.xml;/home/test/yarn-site.xml'."),(0,l.yg)("h3",{id:"op_type-enum"},"op_type ","[enum]"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"op_type")," The operation type of hudi table. The value is 'insert' or 'upsert' or 'bulk_insert'."),(0,l.yg)("h3",{id:"batch_interval_ms-int"},"batch_interval_ms ","[Int]"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"batch_interval_ms")," The interval time of batch write to hudi table."),(0,l.yg)("h3",{id:"insert_shuffle_parallelism-int"},"insert_shuffle_parallelism ","[Int]"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"insert_shuffle_parallelism")," The parallelism of insert data to hudi table."),(0,l.yg)("h3",{id:"upsert_shuffle_parallelism-int"},"upsert_shuffle_parallelism ","[Int]"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"upsert_shuffle_parallelism")," The parallelism of upsert data to hudi table."),(0,l.yg)("h3",{id:"min_commits_to_keep-int"},"min_commits_to_keep ","[Int]"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"min_commits_to_keep")," The min commits to keep of hudi table."),(0,l.yg)("h3",{id:"max_commits_to_keep-int"},"max_commits_to_keep ","[Int]"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"max_commits_to_keep")," The max commits to keep of hudi table."),(0,l.yg)("h3",{id:"common-options"},"common options"),(0,l.yg)("p",null,"Source plugin common parameters, please refer to ",(0,l.yg)("a",{parentName:"p",href:"/docs/connector-v2/sink/common-options"},"Source Common Options")," for details."),(0,l.yg)("h2",{id:"examples"},"Examples"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-hocon"},'source {\n\n  Hudi {\n    table_dfs_path = "hdfs://nameserivce/data/hudi/hudi_table/"\n    table_type = "copy_on_write"\n    conf_files_path = "/home/test/hdfs-site.xml;/home/test/core-site.xml;/home/test/yarn-site.xml"\n    use.kerberos = true\n    kerberos.principal = "test_user@xxx"\n    kerberos.principal.file = "/home/test/test_user.keytab"\n  }\n\n}\n')),(0,l.yg)("h2",{id:"changelog"},"Changelog"),(0,l.yg)("h3",{id:"220-beta-2022-09-26"},"2.2.0-beta 2022-09-26"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Add Hudi Source Connector")))}g.isMDXComponent=!0}}]);