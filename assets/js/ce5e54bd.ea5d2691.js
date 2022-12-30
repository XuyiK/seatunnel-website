"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[91689],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return k}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(n),k=i,c=u["".concat(p,".").concat(k)]||u[k]||d[k]||l;return n?a.createElement(c,r(r({ref:t},m),{},{components:n})):a.createElement(c,r({ref:t},m))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var s=2;s<l;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},31547:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},assets:function(){return m},toc:function(){return d},default:function(){return k}});var a=n(87462),i=n(63366),l=(n(67294),n(3905)),r=["components"],o={},p="LocalFile",s={unversionedId:"connector-v2/sink/LocalFile",id:"version-2.3.0/connector-v2/sink/LocalFile",title:"LocalFile",description:"Local file sink connector",source:"@site/versioned_docs/version-2.3.0/connector-v2/sink/LocalFile.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/LocalFile",permalink:"/docs/2.3.0/connector-v2/sink/LocalFile",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.0/connector-v2/sink/LocalFile.md",tags:[],version:"2.3.0",frontMatter:{},sidebar:"docs",previous:{title:"Kudu",permalink:"/docs/2.3.0/connector-v2/sink/Kudu"},next:{title:"Maxcompute",permalink:"/docs/2.3.0/connector-v2/sink/Maxcompute"}},m={},d=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"path string",id:"path-string",level:3},{value:"file_name_expression string",id:"file_name_expression-string",level:3},{value:"file_format string",id:"file_format-string",level:3},{value:"filename_time_format string",id:"filename_time_format-string",level:3},{value:"field_delimiter string",id:"field_delimiter-string",level:3},{value:"row_delimiter string",id:"row_delimiter-string",level:3},{value:"partition_by array",id:"partition_by-array",level:3},{value:"partition_dir_expression string",id:"partition_dir_expression-string",level:3},{value:"is_partition_field_write_in_file boolean",id:"is_partition_field_write_in_file-boolean",level:3},{value:"sink_columns array",id:"sink_columns-array",level:3},{value:"is_enable_transaction boolean",id:"is_enable_transaction-boolean",level:3},{value:"batch_size int",id:"batch_size-int",level:3},{value:"common options",id:"common-options",level:3},{value:"Example",id:"example",level:2},{value:"Changelog",id:"changelog",level:2},{value:"2.2.0-beta 2022-09-26",id:"220-beta-2022-09-26",level:3},{value:"2.3.0-beta 2022-10-20",id:"230-beta-2022-10-20",level:3},{value:"2.3.0 2022-12-30",id:"230-2022-12-30",level:3}],u={toc:d};function k(e){var t=e.components,n=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"localfile"},"LocalFile"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Local file sink connector")),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Output data to local file."),(0,l.kt)("h2",{id:"key-features"},"Key features"),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/docs/2.3.0/concept/connector-v2-features"},"exactly-once"))),(0,l.kt)("p",null,"By default, we use 2PC commit to ensure ",(0,l.kt)("inlineCode",{parentName:"p"},"exactly-once")),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"/docs/2.3.0/concept/connector-v2-features"},"schema projection")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","file format",(0,l.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","text"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","csv"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","parquet"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","orc"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","json")))),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"path"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"file_name_expression"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},'"${transactionId}"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"file_format"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},'"text"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"filename_time_format"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},'"yyyy.MM.dd"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"field_delimiter"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"'\\001'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"row_delimiter"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},'"\\n"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"partition_by"),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"partition_dir_expression"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},'"${k0}=${v0}/${k1}=${v1}/.../${kn}=${vn}/"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"is_partition_field_write_in_file"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sink_columns"),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"When this parameter is empty, all fields are sink columns")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"is_enable_transaction"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"batch_size"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"1000000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"common-options"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h3",{id:"path-string"},"path ","[string]"),(0,l.kt)("p",null,"The target dir path is required."),(0,l.kt)("h3",{id:"file_name_expression-string"},"file_name_expression ","[string]"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"file_name_expression")," describes the file expression which will be created into the ",(0,l.kt)("inlineCode",{parentName:"p"},"path"),". We can add the variable ",(0,l.kt)("inlineCode",{parentName:"p"},"${now}")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"${uuid}")," in the ",(0,l.kt)("inlineCode",{parentName:"p"},"file_name_expression"),", like ",(0,l.kt)("inlineCode",{parentName:"p"},"test_${uuid}_${now}"),",\n",(0,l.kt)("inlineCode",{parentName:"p"},"${now}")," represents the current time, and its format can be defined by specifying the option ",(0,l.kt)("inlineCode",{parentName:"p"},"filename_time_format"),"."),(0,l.kt)("p",null,"Please note that, If ",(0,l.kt)("inlineCode",{parentName:"p"},"is_enable_transaction")," is ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),", we will auto add ",(0,l.kt)("inlineCode",{parentName:"p"},"${transactionId}_")," in the head of the file."),(0,l.kt)("h3",{id:"file_format-string"},"file_format ","[string]"),(0,l.kt)("p",null,"We supported as the following file types:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"text")," ",(0,l.kt)("inlineCode",{parentName:"p"},"csv")," ",(0,l.kt)("inlineCode",{parentName:"p"},"parquet")," ",(0,l.kt)("inlineCode",{parentName:"p"},"orc")," ",(0,l.kt)("inlineCode",{parentName:"p"},"json")),(0,l.kt)("p",null,"Please note that, The final file name will ends with the file_format's suffix, the suffix of the text file is ",(0,l.kt)("inlineCode",{parentName:"p"},"txt"),"."),(0,l.kt)("h3",{id:"filename_time_format-string"},"filename_time_format ","[string]"),(0,l.kt)("p",null,"When the format in the ",(0,l.kt)("inlineCode",{parentName:"p"},"file_name_expression")," parameter is ",(0,l.kt)("inlineCode",{parentName:"p"},"xxxx-${now}")," , ",(0,l.kt)("inlineCode",{parentName:"p"},"filename_time_format")," can specify the time format of the path, and the default value is ",(0,l.kt)("inlineCode",{parentName:"p"},"yyyy.MM.dd")," . The commonly used time formats are listed as follows:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Symbol"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"y"),(0,l.kt)("td",{parentName:"tr",align:null},"Year")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"M"),(0,l.kt)("td",{parentName:"tr",align:null},"Month")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"d"),(0,l.kt)("td",{parentName:"tr",align:null},"Day of month")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"H"),(0,l.kt)("td",{parentName:"tr",align:null},"Hour in day (0-23)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"m"),(0,l.kt)("td",{parentName:"tr",align:null},"Minute in hour")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"s"),(0,l.kt)("td",{parentName:"tr",align:null},"Second in minute")))),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"https://docs.oracle.com/javase/tutorial/i18n/format/simpleDateFormat.html"},"Java SimpleDateFormat")," for detailed time format syntax."),(0,l.kt)("h3",{id:"field_delimiter-string"},"field_delimiter ","[string]"),(0,l.kt)("p",null,"The separator between columns in a row of data. Only needed by ",(0,l.kt)("inlineCode",{parentName:"p"},"text")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"csv")," file format."),(0,l.kt)("h3",{id:"row_delimiter-string"},"row_delimiter ","[string]"),(0,l.kt)("p",null,"The separator between rows in a file. Only needed by ",(0,l.kt)("inlineCode",{parentName:"p"},"text")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"csv")," file format."),(0,l.kt)("h3",{id:"partition_by-array"},"partition_by ","[array]"),(0,l.kt)("p",null,"Partition data based on selected fields"),(0,l.kt)("h3",{id:"partition_dir_expression-string"},"partition_dir_expression ","[string]"),(0,l.kt)("p",null,"If the ",(0,l.kt)("inlineCode",{parentName:"p"},"partition_by")," is specified, we will generate the corresponding partition directory based on the partition information, and the final file will be placed in the partition directory."),(0,l.kt)("p",null,"Default ",(0,l.kt)("inlineCode",{parentName:"p"},"partition_dir_expression")," is ",(0,l.kt)("inlineCode",{parentName:"p"},"${k0}=${v0}/${k1}=${v1}/.../${kn}=${vn}/"),". ",(0,l.kt)("inlineCode",{parentName:"p"},"k0")," is the first partition field and ",(0,l.kt)("inlineCode",{parentName:"p"},"v0")," is the value of the first partition field."),(0,l.kt)("h3",{id:"is_partition_field_write_in_file-boolean"},"is_partition_field_write_in_file ","[boolean]"),(0,l.kt)("p",null,"If ",(0,l.kt)("inlineCode",{parentName:"p"},"is_partition_field_write_in_file")," is ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),", the partition field and the value of it will be write into data file."),(0,l.kt)("p",null,"For example, if you want to write a Hive Data File, Its value should be ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,l.kt)("h3",{id:"sink_columns-array"},"sink_columns ","[array]"),(0,l.kt)("p",null,"Which columns need be write to file, default value is all of the columns get from ",(0,l.kt)("inlineCode",{parentName:"p"},"Transform")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"Source"),".\nThe order of the fields determines the order in which the file is actually written."),(0,l.kt)("h3",{id:"is_enable_transaction-boolean"},"is_enable_transaction ","[boolean]"),(0,l.kt)("p",null,"If ",(0,l.kt)("inlineCode",{parentName:"p"},"is_enable_transaction")," is true, we will ensure that data will not be lost or duplicated when it is written to the target directory."),(0,l.kt)("p",null,"Please note that, If ",(0,l.kt)("inlineCode",{parentName:"p"},"is_enable_transaction")," is ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),", we will auto add ",(0,l.kt)("inlineCode",{parentName:"p"},"${transactionId}_")," in the head of the file."),(0,l.kt)("p",null,"Only support ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," now."),(0,l.kt)("h3",{id:"batch_size-int"},"batch_size ","[int]"),(0,l.kt)("p",null,"The maximum number of rows in a file. For SeaTunnel Engine, the number of lines in the file is determined by ",(0,l.kt)("inlineCode",{parentName:"p"},"batch_size")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"checkpoint.interval")," jointly decide. If the value of ",(0,l.kt)("inlineCode",{parentName:"p"},"checkpoint.interval")," is large enough, sink writer will write rows in a file until the rows in the file larger than ",(0,l.kt)("inlineCode",{parentName:"p"},"batch_size"),". If ",(0,l.kt)("inlineCode",{parentName:"p"},"checkpoint.interval")," is small, the sink writer will create a new file when a new checkpoint trigger."),(0,l.kt)("h3",{id:"common-options"},"common options"),(0,l.kt)("p",null,"Sink plugin common parameters, please refer to ",(0,l.kt)("a",{parentName:"p",href:"/docs/2.3.0/connector-v2/sink/common-options"},"Sink Common Options")," for details."),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("p",null,"For text file format"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'\nLocalFile {\n    path = "/tmp/hive/warehouse/test2"\n    field_delimiter = "\\t"\n    row_delimiter = "\\n"\n    partition_by = ["age"]\n    partition_dir_expression = "${k0}=${v0}"\n    is_partition_field_write_in_file = true\n    file_name_expression = "${transactionId}_${now}"\n    file_format = "text"\n    sink_columns = ["name","age"]\n    filename_time_format = "yyyy.MM.dd"\n    is_enable_transaction = true\n}\n\n')),(0,l.kt)("p",null,"For parquet file format"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'\nLocalFile {\n    path = "/tmp/hive/warehouse/test2"\n    partition_by = ["age"]\n    partition_dir_expression = "${k0}=${v0}"\n    is_partition_field_write_in_file = true\n    file_name_expression = "${transactionId}_${now}"\n    file_format = "parquet"\n    sink_columns = ["name","age"]\n    filename_time_format = "yyyy.MM.dd"\n    is_enable_transaction = true\n}\n\n')),(0,l.kt)("p",null,"For orc file format"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'\nLocalFile {\n    path = "/tmp/hive/warehouse/test2"\n    partition_by = ["age"]\n    partition_dir_expression = "${k0}=${v0}"\n    is_partition_field_write_in_file = true\n    file_name_expression = "${transactionId}_${now}"\n    file_format = "orc"\n    sink_columns = ["name","age"]\n    filename_time_format = "yyyy.MM.dd"\n    is_enable_transaction = true\n}\n\n')),(0,l.kt)("h2",{id:"changelog"},"Changelog"),(0,l.kt)("h3",{id:"220-beta-2022-09-26"},"2.2.0-beta 2022-09-26"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Add Local File Sink Connector")),(0,l.kt)("h3",{id:"230-beta-2022-10-20"},"2.3.0-beta 2022-10-20"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"[BugFix]"," Fix the bug of incorrect path in windows environment (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/2980"},"2980"),")"),(0,l.kt)("li",{parentName:"ul"},"[BugFix]"," Fix filesystem get error (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/3117"},"3117"),")"),(0,l.kt)("li",{parentName:"ul"},"[BugFix]"," Solved the bug of can not parse '\\t' as delimiter from config file (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-seatunnel/pull/3083"},"3083"),")")),(0,l.kt)("h3",{id:"230-2022-12-30"},"2.3.0 2022-12-30"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"[BugFix]"," Fixed the following bugs that failed to write data to files (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel/pull/3258"},"3258"),")"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"When field from upstream is null it will throw NullPointerException"),(0,l.kt)("li",{parentName:"ul"},"Sink columns mapping failed"),(0,l.kt)("li",{parentName:"ul"},"When restore writer from states getting transaction directly failed"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"[Improve]"," Support setting batch size for every file (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel/pull/3625"},"3625"),")"))))}k.isMDXComponent=!0}}]);