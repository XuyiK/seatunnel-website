"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[77878],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return c}});var a=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),u=s(n),c=l,k=u["".concat(p,".").concat(c)]||u[c]||m[c]||r;return n?a.createElement(k,i(i({ref:e},d),{},{components:n})):a.createElement(k,i({ref:e},d))}));function c(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:l,i[1]=o;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},70836:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},assets:function(){return d},toc:function(){return m},default:function(){return c}});var a=n(87462),l=n(63366),r=(n(67294),n(3905)),i=["components"],o={},p="SftpFile",s={unversionedId:"connector-v2/source/SftpFile",id:"connector-v2/source/SftpFile",title:"SftpFile",description:"Sftp file source connector",source:"@site/docs/connector-v2/source/SftpFile.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/SftpFile",permalink:"/zh-CN/docs/connector-v2/source/SftpFile",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/source/SftpFile.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"S3File",permalink:"/zh-CN/docs/connector-v2/source/S3File"},next:{title:"Snowflake",permalink:"/zh-CN/docs/connector-v2/source/Snowflake"}},d={},m=[{value:"Support Those Engines",id:"support-those-engines",level:2},{value:"Key Features",id:"key-features",level:2},{value:"Description",id:"description",level:2},{value:"Supported DataSource Info",id:"supported-datasource-info",level:2},{value:"Data Type Mapping",id:"data-type-mapping",level:2},{value:"Source Options",id:"source-options",level:2},{value:"file_format_type string",id:"file_format_type-string",level:3},{value:"compress_codec string",id:"compress_codec-string",level:3},{value:"schema config",id:"schema-config",level:3},{value:"fields Config",id:"fields-config",level:4},{value:"How to Create a Sftp Data Synchronization Jobs",id:"how-to-create-a-sftp-data-synchronization-jobs",level:2}],u={toc:m};function c(t){var e=t.components,n=(0,l.Z)(t,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sftpfile"},"SftpFile"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Sftp file source connector")),(0,r.kt)("h2",{id:"support-those-engines"},"Support Those Engines"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Spark",(0,r.kt)("br",null),"\nFlink",(0,r.kt)("br",null),"\nSeaTunnel Zeta",(0,r.kt)("br",null))),(0,r.kt)("h2",{id:"key-features"},"Key Features"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.kt)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"batch")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.kt)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"stream")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.kt)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"exactly-once")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.kt)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"column projection")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,r.kt)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"parallelism")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,r.kt)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"support user-defined split")),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","file format type",(0,r.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","text"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","csv"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","json"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","excel"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","xml")))),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Read data from sftp file server."),(0,r.kt)("h2",{id:"supported-datasource-info"},"Supported DataSource Info"),(0,r.kt)("p",null,"In order to use the SftpFile connector, the following dependencies are required.\nThey can be downloaded via install-plugin.sh or from the Maven central repository."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Datasource"),(0,r.kt)("th",{parentName:"tr",align:null},"Supported Versions"),(0,r.kt)("th",{parentName:"tr",align:null},"Dependency"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SftpFile"),(0,r.kt)("td",{parentName:"tr",align:null},"universal"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/org.apache.seatunnel/connector-file-sftp"},"Download"))))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you use spark/flink, In order to use this connector, You must ensure your spark/flink cluster already integrated hadoop. The tested hadoop version is 2.x."),(0,r.kt)("p",{parentName:"div"},"If you use SeaTunnel Engine, It automatically integrated the hadoop jar when you download and install SeaTunnel Engine. You can check the jar package under ${SEATUNNEL_HOME}/lib to confirm this."),(0,r.kt)("p",{parentName:"div"},"We made some trade-offs in order to support more file types, so we used the HDFS protocol for internal access to Sftp and this connector need some hadoop dependencies.\nIt only supports hadoop version ",(0,r.kt)("strong",{parentName:"p"},"2.9.X+"),"."))),(0,r.kt)("h2",{id:"data-type-mapping"},"Data Type Mapping"),(0,r.kt)("p",null,"The File does not have a specific type list, and we can indicate which SeaTunnel data type the corresponding data needs to be converted to by specifying the Schema in the config."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"SeaTunnel Data type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"STRING")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SHORT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"INT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BIGINT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DOUBLE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DECIMAL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FLOAT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DATE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TIME")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TIMESTAMP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BYTES")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ARRAY")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MAP")))),(0,r.kt)("h2",{id:"source-options"},"Source Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"host"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"The target sftp host is required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"port"),(0,r.kt)("td",{parentName:"tr",align:null},"Int"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"The target sftp port is required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"user"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"The target sftp username is required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"password"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"The target sftp password is required")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"The source file path.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"file_format_type"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Please check #file_format_type below")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"file_filter_pattern"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Filter pattern, which used for filtering files.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"delimiter/field_delimiter"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"\\001"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"delimiter")," parameter will deprecate after version 2.3.5, please use ",(0,r.kt)("strong",{parentName:"td"},"field_delimiter")," instead. ",(0,r.kt)("br",null)," Field delimiter, used to tell connector how to slice and dice fields when reading text files. ",(0,r.kt)("br",null)," Default ",(0,r.kt)("inlineCode",{parentName:"td"},"\\001"),", the same as hive's default delimiter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"parse_partition_from_path"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"Control whether parse the partition keys and values from file path ",(0,r.kt)("br",null)," For example if you read a file from path ",(0,r.kt)("inlineCode",{parentName:"td"},"oss://hadoop-cluster/tmp/seatunnel/parquet/name=tyrantlucifer/age=26")," ",(0,r.kt)("br",null)," Every record data from file will be added these two fields: ",(0,r.kt)("br",null),"      name       age  ",(0,r.kt)("br",null)," tyrantlucifer  26   ",(0,r.kt)("br",null)," Tips: ",(0,r.kt)("strong",{parentName:"td"},"Do not define partition fields in schema option"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"date_format"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"yyyy-MM-dd"),(0,r.kt)("td",{parentName:"tr",align:null},"Date type format, used to tell connector how to convert string to date, supported as the following formats: ",(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"td"},"yyyy-MM-dd")," ",(0,r.kt)("inlineCode",{parentName:"td"},"yyyy.MM.dd")," ",(0,r.kt)("inlineCode",{parentName:"td"},"yyyy/MM/dd")," ",(0,r.kt)("br",null)," default ",(0,r.kt)("inlineCode",{parentName:"td"},"yyyy-MM-dd"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"datetime_format"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"yyyy-MM-dd HH:mm:ss"),(0,r.kt)("td",{parentName:"tr",align:null},"Datetime type format, used to tell connector how to convert string to datetime, supported as the following formats: ",(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"td"},"yyyy-MM-dd HH:mm:ss")," ",(0,r.kt)("inlineCode",{parentName:"td"},"yyyy.MM.dd HH:mm:ss")," ",(0,r.kt)("inlineCode",{parentName:"td"},"yyyy/MM/dd HH:mm:ss")," ",(0,r.kt)("inlineCode",{parentName:"td"},"yyyyMMddHHmmss")," ",(0,r.kt)("br",null)," default ",(0,r.kt)("inlineCode",{parentName:"td"},"yyyy-MM-dd HH:mm:ss"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"time_format"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"HH:mm:ss"),(0,r.kt)("td",{parentName:"tr",align:null},"Time type format, used to tell connector how to convert string to time, supported as the following formats: ",(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"td"},"HH:mm:ss")," ",(0,r.kt)("inlineCode",{parentName:"td"},"HH:mm:ss.SSS")," ",(0,r.kt)("br",null)," default ",(0,r.kt)("inlineCode",{parentName:"td"},"HH:mm:ss"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"skip_header_row_number"),(0,r.kt)("td",{parentName:"tr",align:null},"Long"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"Skip the first few lines, but only for the txt and csv. ",(0,r.kt)("br",null)," For example, set like following: ",(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"td"},"skip_header_row_number = 2")," ",(0,r.kt)("br",null)," then SeaTunnel will skip the first 2 lines from source files")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"read_columns"),(0,r.kt)("td",{parentName:"tr",align:null},"list"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"The read column list of the data source, user can use it to implement field projection.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sheet_name"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Reader the sheet of the workbook,Only used when file_format is excel.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"xml_row_tag"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the tag name of the data rows within the XML file, only used when file_format is xml.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"xml_use_attr_format"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies whether to process data using the tag attribute format, only used when file_format is xml.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"schema"),(0,r.kt)("td",{parentName:"tr",align:null},"Config"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Please check #schema below")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"compress_codec"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"The compress codec of files and the details that supported as the following shown: ",(0,r.kt)("br",null)," - txt: ",(0,r.kt)("inlineCode",{parentName:"td"},"lzo")," ",(0,r.kt)("inlineCode",{parentName:"td"},"None")," ",(0,r.kt)("br",null)," - json: ",(0,r.kt)("inlineCode",{parentName:"td"},"lzo")," ",(0,r.kt)("inlineCode",{parentName:"td"},"None")," ",(0,r.kt)("br",null)," - csv: ",(0,r.kt)("inlineCode",{parentName:"td"},"lzo")," ",(0,r.kt)("inlineCode",{parentName:"td"},"None")," ",(0,r.kt)("br",null)," - orc: ",(0,r.kt)("inlineCode",{parentName:"td"},"lzo")," ",(0,r.kt)("inlineCode",{parentName:"td"},"snappy")," ",(0,r.kt)("inlineCode",{parentName:"td"},"lz4")," ",(0,r.kt)("inlineCode",{parentName:"td"},"zlib")," ",(0,r.kt)("inlineCode",{parentName:"td"},"None")," ",(0,r.kt)("br",null)," - parquet: ",(0,r.kt)("inlineCode",{parentName:"td"},"lzo")," ",(0,r.kt)("inlineCode",{parentName:"td"},"snappy")," ",(0,r.kt)("inlineCode",{parentName:"td"},"lz4")," ",(0,r.kt)("inlineCode",{parentName:"td"},"gzip")," ",(0,r.kt)("inlineCode",{parentName:"td"},"brotli")," ",(0,r.kt)("inlineCode",{parentName:"td"},"zstd")," ",(0,r.kt)("inlineCode",{parentName:"td"},"None")," ",(0,r.kt)("br",null)," Tips: excel type does Not support any compression format")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"common-options"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Source plugin common parameters, please refer to ",(0,r.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/source/common-options"},"Source Common Options")," for details.")))),(0,r.kt)("h3",{id:"file_format_type-string"},"file_format_type ","[string]"),(0,r.kt)("p",null,"File type, supported as the following file types:\n",(0,r.kt)("inlineCode",{parentName:"p"},"text")," ",(0,r.kt)("inlineCode",{parentName:"p"},"csv")," ",(0,r.kt)("inlineCode",{parentName:"p"},"parquet")," ",(0,r.kt)("inlineCode",{parentName:"p"},"orc")," ",(0,r.kt)("inlineCode",{parentName:"p"},"json")," ",(0,r.kt)("inlineCode",{parentName:"p"},"excel")," ",(0,r.kt)("inlineCode",{parentName:"p"},"xml"),"\nIf you assign file type to ",(0,r.kt)("inlineCode",{parentName:"p"},"json"),", you should also assign schema option to tell connector how to parse data to the row you want.\nFor example:\nupstream data is the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"code":  200, "data":  "get success", "success":  true}\n')),(0,r.kt)("p",null,"You can also save multiple pieces of data in one file and split them by newline:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"lines",lines:!0},'{"code":  200, "data":  "get success", "success":  true}\n{"code":  300, "data":  "get failed", "success":  false}\n')),(0,r.kt)("p",null,"you should assign schema as the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hocon"},"schema {\n    fields {\n        code = int\n        data = string\n        success = boolean\n    }\n}\n")),(0,r.kt)("p",null,"connector will generate data as the following:\n| code |    data     | success |\n|------|-------------|---------|\n| 200  | get success | true    |\nIf you assign file type to ",(0,r.kt)("inlineCode",{parentName:"p"},"parquet")," ",(0,r.kt)("inlineCode",{parentName:"p"},"orc"),", schema option not required, connector can find the schema of upstream data automatically.\nIf you assign file type to ",(0,r.kt)("inlineCode",{parentName:"p"},"text")," ",(0,r.kt)("inlineCode",{parentName:"p"},"csv"),", you can choose to specify the schema information or not.\nFor example, upstream data is the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"tyrantlucifer#26#male\n")),(0,r.kt)("p",null,"If you do not assign data schema connector will treat the upstream data as the following:\n|        content        |\n|-----------------------|\n| tyrantlucifer#26#male |\nIf you assign data schema, you should also assign the option ",(0,r.kt)("inlineCode",{parentName:"p"},"field_delimiter")," too except CSV file type\nyou should assign schema and delimiter as the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-hocon"},'field_delimiter = "#"\nschema {\n    fields {\n        name = string\n        age = int\n        gender = string \n    }\n}\n')),(0,r.kt)("p",null,"connector will generate data as the following:\n|     name      | age | gender |\n|---------------|-----|--------|\n| tyrantlucifer | 26  | male   |"),(0,r.kt)("h3",{id:"compress_codec-string"},"compress_codec ","[string]"),(0,r.kt)("p",null,"The compress codec of files and the details that supported as the following shown:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"txt: ",(0,r.kt)("inlineCode",{parentName:"li"},"lzo")," ",(0,r.kt)("inlineCode",{parentName:"li"},"none")),(0,r.kt)("li",{parentName:"ul"},"json: ",(0,r.kt)("inlineCode",{parentName:"li"},"lzo")," ",(0,r.kt)("inlineCode",{parentName:"li"},"none")),(0,r.kt)("li",{parentName:"ul"},"csv: ",(0,r.kt)("inlineCode",{parentName:"li"},"lzo")," ",(0,r.kt)("inlineCode",{parentName:"li"},"none")),(0,r.kt)("li",{parentName:"ul"},"orc/parquet:",(0,r.kt)("br",{parentName:"li"}),"automatically recognizes the compression type, no additional settings required.")),(0,r.kt)("h3",{id:"schema-config"},"schema ","[config]"),(0,r.kt)("h4",{id:"fields-config"},"fields ","[Config]"),(0,r.kt)("p",null,"The schema of upstream data."),(0,r.kt)("h2",{id:"how-to-create-a-sftp-data-synchronization-jobs"},"How to Create a Sftp Data Synchronization Jobs"),(0,r.kt)("p",null,"The following example demonstrates how to create a data synchronization job that reads data from sftp and prints it on the local client:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Set the basic configuration of the task to be performed\nenv {\n  parallelism = 1\n  job.mode = "BATCH"\n}\n\n# Create a source to connect to sftp\nsource {\n  SftpFile {\n    host = "sftp"\n    port = 22\n    user = seatunnel\n    password = pass\n    path = "tmp/seatunnel/read/json"\n    file_format_type = "json"\n    result_table_name = "sftp"\n    schema = {\n      fields {\n        c_map = "map<string, string>"\n        c_array = "array<int>"\n        c_string = string\n        c_boolean = boolean\n        c_tinyint = tinyint\n        c_smallint = smallint\n        c_int = int\n        c_bigint = bigint\n        c_float = float\n        c_double = double\n        c_bytes = bytes\n        c_date = date\n        c_decimal = "decimal(38, 18)"\n        c_timestamp = timestamp\n        c_row = {\n          C_MAP = "map<string, string>"\n          C_ARRAY = "array<int>"\n          C_STRING = string\n          C_BOOLEAN = boolean\n          C_TINYINT = tinyint\n          C_SMALLINT = smallint\n          C_INT = int\n          C_BIGINT = bigint\n          C_FLOAT = float\n          C_DOUBLE = double\n          C_BYTES = bytes\n          C_DATE = date\n          C_DECIMAL = "decimal(38, 18)"\n          C_TIMESTAMP = timestamp\n        }\n      }\n    }\n  }\n}\n\n# Console printing of the read sftp data\nsink {\n  Console {\n    parallelism = 1\n  }\n}\n')))}c.isMDXComponent=!0}}]);