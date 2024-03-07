"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[77985],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),p=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),c=p(n),m=r,k=c["".concat(u,".").concat(m)]||c[m]||s[m]||l;return n?a.createElement(k,i(i({ref:e},d),{},{components:n})):a.createElement(k,i({ref:e},d))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9605:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return p},assets:function(){return d},toc:function(){return s},default:function(){return m}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={},u="Vertica",p={unversionedId:"connector-v2/sink/Vertica",id:"connector-v2/sink/Vertica",title:"Vertica",description:"JDBC Vertica Sink Connector",source:"@site/docs/connector-v2/sink/Vertica.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Vertica",permalink:"/zh-CN/docs/connector-v2/sink/Vertica",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/sink/Vertica.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Tablestore",permalink:"/zh-CN/docs/connector-v2/sink/Tablestore"},next:{title:"Sink Common Options",permalink:"/zh-CN/docs/connector-v2/sink/common-options"}},d={},s=[{value:"Support Those Engines",id:"support-those-engines",level:2},{value:"Description",id:"description",level:2},{value:"Using Dependency",id:"using-dependency",level:2},{value:"For Spark/Flink Engine",id:"for-sparkflink-engine",level:3},{value:"For SeaTunnel Zeta Engine",id:"for-seatunnel-zeta-engine",level:3},{value:"Key Features",id:"key-features",level:2},{value:"Supported DataSource Info",id:"supported-datasource-info",level:2},{value:"Database Dependency",id:"database-dependency",level:2},{value:"Data Type Mapping",id:"data-type-mapping",level:2},{value:"Sink Options",id:"sink-options",level:2},{value:"Tips",id:"tips",level:3},{value:"Task Example",id:"task-example",level:2},{value:"Simple:",id:"simple",level:3},{value:"Generate Sink SQL",id:"generate-sink-sql",level:3},{value:"Exactly-once :",id:"exactly-once-",level:3}],c={toc:s};function m(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"vertica"},"Vertica"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"JDBC Vertica Sink Connector")),(0,l.kt)("h2",{id:"support-those-engines"},"Support Those Engines"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Spark",(0,l.kt)("br",null),"\nFlink",(0,l.kt)("br",null),"\nSeaTunnel Zeta",(0,l.kt)("br",null))),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Write data through jdbc. Support Batch mode and Streaming mode, support concurrent writing, support exactly-once\nsemantics (using XA transaction guarantee)."),(0,l.kt)("h2",{id:"using-dependency"},"Using Dependency"),(0,l.kt)("h3",{id:"for-sparkflink-engine"},"For Spark/Flink Engine"),(0,l.kt)("blockquote",null,(0,l.kt)("ol",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ol"},"You need to ensure that the ",(0,l.kt)("a",{parentName:"li",href:"https://www.vertica.com/download/vertica/client-drivers/"},"jdbc driver jar package")," has been placed in directory ",(0,l.kt)("inlineCode",{parentName:"li"},"${SEATUNNEL_HOME}/plugins/"),"."))),(0,l.kt)("h3",{id:"for-seatunnel-zeta-engine"},"For SeaTunnel Zeta Engine"),(0,l.kt)("blockquote",null,(0,l.kt)("ol",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ol"},"You need to ensure that the ",(0,l.kt)("a",{parentName:"li",href:"https://www.vertica.com/download/vertica/client-drivers/"},"jdbc driver jar package")," has been placed in directory ",(0,l.kt)("inlineCode",{parentName:"li"},"${SEATUNNEL_HOME}/lib/"),"."))),(0,l.kt)("h2",{id:"key-features"},"Key Features"),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"exactly-once")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"cdc"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"Xa transactions")," to ensure ",(0,l.kt)("inlineCode",{parentName:"p"},"exactly-once"),". So only support ",(0,l.kt)("inlineCode",{parentName:"p"},"exactly-once")," for the database which is\nsupport ",(0,l.kt)("inlineCode",{parentName:"p"},"Xa transactions"),". You can set ",(0,l.kt)("inlineCode",{parentName:"p"},"is_exactly_once=true")," to enable it.")),(0,l.kt)("h2",{id:"supported-datasource-info"},"Supported DataSource Info"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Datasource"),(0,l.kt)("th",{parentName:"tr",align:null},"Supported Versions"),(0,l.kt)("th",{parentName:"tr",align:null},"Driver"),(0,l.kt)("th",{parentName:"tr",align:null},"Url"),(0,l.kt)("th",{parentName:"tr",align:null},"Maven"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Vertica"),(0,l.kt)("td",{parentName:"tr",align:null},"Different dependency version has different driver class."),(0,l.kt)("td",{parentName:"tr",align:null},"com.vertica.jdbc.Driver"),(0,l.kt)("td",{parentName:"tr",align:null},"jdbc:vertica://localhost:5433/vertica"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.vertica.com/download/vertica/client-drivers/"},"Download"))))),(0,l.kt)("h2",{id:"database-dependency"},"Database Dependency"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Please download the support list corresponding to 'Maven' and copy it to the '$SEATNUNNEL_HOME/plugins/jdbc/lib/' working directory",(0,l.kt)("br",null),"\nFor example Vertica datasource: cp vertica-jdbc-xxx.jar $SEATNUNNEL_HOME/plugins/jdbc/lib/")),(0,l.kt)("h2",{id:"data-type-mapping"},"Data Type Mapping"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Vertica Data Type"),(0,l.kt)("th",{parentName:"tr",align:null},"SeaTunnel Data Type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BIT(1)",(0,l.kt)("br",null),"INT UNSIGNED"),(0,l.kt)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TINYINT",(0,l.kt)("br",null),"TINYINT UNSIGNED",(0,l.kt)("br",null),"SMALLINT",(0,l.kt)("br",null),"SMALLINT UNSIGNED",(0,l.kt)("br",null),"MEDIUMINT",(0,l.kt)("br",null),"MEDIUMINT UNSIGNED",(0,l.kt)("br",null),"INT",(0,l.kt)("br",null),"INTEGER",(0,l.kt)("br",null),"YEAR"),(0,l.kt)("td",{parentName:"tr",align:null},"INT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"INT UNSIGNED",(0,l.kt)("br",null),"INTEGER UNSIGNED",(0,l.kt)("br",null),"BIGINT"),(0,l.kt)("td",{parentName:"tr",align:null},"BIGINT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BIGINT UNSIGNED"),(0,l.kt)("td",{parentName:"tr",align:null},"DECIMAL(20,0)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DECIMAL(x,y)(Get the designated column's specified column size.<38)"),(0,l.kt)("td",{parentName:"tr",align:null},"DECIMAL(x,y)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DECIMAL(x,y)(Get the designated column's specified column size.>38)"),(0,l.kt)("td",{parentName:"tr",align:null},"DECIMAL(38,18)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DECIMAL UNSIGNED"),(0,l.kt)("td",{parentName:"tr",align:null},"DECIMAL((Get the designated column's specified column size)+1,",(0,l.kt)("br",null),"(Gets the designated column's number of digits to right of the decimal point.)))")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FLOAT",(0,l.kt)("br",null),"FLOAT UNSIGNED"),(0,l.kt)("td",{parentName:"tr",align:null},"FLOAT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DOUBLE",(0,l.kt)("br",null),"DOUBLE UNSIGNED"),(0,l.kt)("td",{parentName:"tr",align:null},"DOUBLE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CHAR",(0,l.kt)("br",null),"VARCHAR",(0,l.kt)("br",null),"TINYTEXT",(0,l.kt)("br",null),"MEDIUMTEXT",(0,l.kt)("br",null),"TEXT",(0,l.kt)("br",null),"LONGTEXT",(0,l.kt)("br",null),"JSON"),(0,l.kt)("td",{parentName:"tr",align:null},"STRING")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DATE"),(0,l.kt)("td",{parentName:"tr",align:null},"DATE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TIME"),(0,l.kt)("td",{parentName:"tr",align:null},"TIME")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DATETIME",(0,l.kt)("br",null),"TIMESTAMP"),(0,l.kt)("td",{parentName:"tr",align:null},"TIMESTAMP")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TINYBLOB",(0,l.kt)("br",null),"MEDIUMBLOB",(0,l.kt)("br",null),"BLOB",(0,l.kt)("br",null),"LONGBLOB",(0,l.kt)("br",null),"BINARY",(0,l.kt)("br",null),"VARBINAR",(0,l.kt)("br",null),"BIT(n)"),(0,l.kt)("td",{parentName:"tr",align:null},"BYTES")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GEOMETRY",(0,l.kt)("br",null),"UNKNOWN"),(0,l.kt)("td",{parentName:"tr",align:null},"Not supported yet")))),(0,l.kt)("h2",{id:"sink-options"},"Sink Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"url"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"The URL of the JDBC connection. Refer to a case: jdbc:vertica://localhost:5433/vertica")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"driver"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"The jdbc class name used to connect to the remote data source,",(0,l.kt)("br",null)," if you use Vertical the value is ",(0,l.kt)("inlineCode",{parentName:"td"},"com.vertica.jdbc.Driver"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"user"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Connection instance user name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Connection instance password")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Use this sql write upstream input datas to database. e.g ",(0,l.kt)("inlineCode",{parentName:"td"},"INSERT ..."),",",(0,l.kt)("inlineCode",{parentName:"td"},"query")," have the higher priority")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"database"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Use this ",(0,l.kt)("inlineCode",{parentName:"td"},"database")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"table-name")," auto-generate sql and receive upstream input datas write to database.",(0,l.kt)("br",null),"This option is mutually exclusive with ",(0,l.kt)("inlineCode",{parentName:"td"},"query")," and has a higher priority.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Use database and this table-name auto-generate sql and receive upstream input datas write to database.",(0,l.kt)("br",null),"This option is mutually exclusive with ",(0,l.kt)("inlineCode",{parentName:"td"},"query")," and has a higher priority.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"primary_keys"),(0,l.kt)("td",{parentName:"tr",align:null},"Array"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"This option is used to support operations such as ",(0,l.kt)("inlineCode",{parentName:"td"},"insert"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"delete"),", and ",(0,l.kt)("inlineCode",{parentName:"td"},"update")," when automatically generate sql.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"support_upsert_by_query_primary_key_exist"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Choose to use INSERT sql, UPDATE sql to process update events(INSERT, UPDATE_AFTER) based on query primary key exists. This configuration is only used when database unsupport upsert syntax. ",(0,l.kt)("strong",{parentName:"td"},"Note"),": that this method has low performance")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"connection_check_timeout_sec"),(0,l.kt)("td",{parentName:"tr",align:null},"Int"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"30"),(0,l.kt)("td",{parentName:"tr",align:null},"The time in seconds to wait for the database operation used to validate the connection to complete.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max_retries"),(0,l.kt)("td",{parentName:"tr",align:null},"Int"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of retries to submit failed (executeBatch)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"batch_size"),(0,l.kt)("td",{parentName:"tr",align:null},"Int"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"1000"),(0,l.kt)("td",{parentName:"tr",align:null},"For batch writing, when the number of buffered records reaches the number of ",(0,l.kt)("inlineCode",{parentName:"td"},"batch_size")," or the time reaches ",(0,l.kt)("inlineCode",{parentName:"td"},"checkpoint.interval"),(0,l.kt)("br",null),", the data will be flushed into the database")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"is_exactly_once"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to enable exactly-once semantics, which will use Xa transactions. If on, you need to",(0,l.kt)("br",null),"set ",(0,l.kt)("inlineCode",{parentName:"td"},"xa_data_source_class_name"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"generate_sink_sql"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Generate sql statements based on the database table you want to write to")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"xa_data_source_class_name"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"The xa data source class name of the database Driver, for example, vertical is ",(0,l.kt)("inlineCode",{parentName:"td"},"com.vertical.cj.jdbc.VerticalXADataSource"),", and",(0,l.kt)("br",null),"please refer to appendix for other data sources")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max_commit_attempts"),(0,l.kt)("td",{parentName:"tr",align:null},"Int"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of retries for transaction commit failures")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"transaction_timeout_sec"),(0,l.kt)("td",{parentName:"tr",align:null},"Int"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-1"),(0,l.kt)("td",{parentName:"tr",align:null},"The timeout after the transaction is opened, the default is -1 (never timeout). Note that setting the timeout may affect",(0,l.kt)("br",null),"exactly-once semantics")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"auto_commit"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"Automatic transaction commit is enabled by default")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"properties"),(0,l.kt)("td",{parentName:"tr",align:null},"Map"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Additional connection configuration parameters,when properties and URL have the same parameters, the priority is determined by the ",(0,l.kt)("br",null),"specific implementation of the driver. For example, in MySQL, properties take precedence over the URL.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"common-options"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Sink plugin common parameters, please refer to ",(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/sink/common-options"},"Sink Common Options")," for details")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enable_upsert"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable upsert by primary_keys exist, If the task has no key duplicate data, setting this parameter to ",(0,l.kt)("inlineCode",{parentName:"td"},"false")," can speed up data import")))),(0,l.kt)("h3",{id:"tips"},"Tips"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"If partition_column is not set, it will run in single concurrency, and if partition_column is set, it will be executed  in parallel according to the concurrency of tasks.")),(0,l.kt)("h2",{id:"task-example"},"Task Example"),(0,l.kt)("h3",{id:"simple"},"Simple:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"This example defines a SeaTunnel synchronization task that automatically generates data through FakeSource and sends it to JDBC Sink. FakeSource generates a total of 16 rows of data (row.num=16), with each row having two fields, name (string type) and age (int type). The final target table is test_table will also be 16 rows of data in the table. Before run this job, you need create database test and table test_table in your vertical. And if you have not yet installed and deployed SeaTunnel, you need to follow the instructions in ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/start-v2/locally/deployment"},"Install SeaTunnel")," to install and deploy SeaTunnel. And then follow the instructions in ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/start-v2/locally/quick-start-seatunnel-engine"},"Quick Start With SeaTunnel Engine")," to run this job.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'# Defining the runtime environment\nenv {\n  parallelism = 1\n  job.mode = "BATCH"\n}\n\nsource {\n  # This is a example source plugin **only for test and demonstrate the feature source plugin**\n  FakeSource {\n    parallelism = 1\n    result_table_name = "fake"\n    row.num = 16\n    schema = {\n      fields {\n        name = "string"\n        age = "int"\n      }\n    }\n  }\n  # If you would like to get more information about how to configure seatunnel and see full list of source plugins,\n  # please go to https://seatunnel.apache.org/docs/category/source-v2\n}\n\ntransform {\n  # If you would like to get more information about how to configure seatunnel and see full list of transform plugins,\n    # please go to https://seatunnel.apache.org/docs/category/transform-v2\n}\n\nsink {\n    jdbc {\n        url = "jdbc:vertica://localhost:5433/vertica"\n        driver = "com.vertica.jdbc.Driver"\n        user = "root"\n        password = "123456"\n        query = "insert into test_table(name,age) values(?,?)"\n        }\n  # If you would like to get more information about how to configure seatunnel and see full list of sink plugins,\n  # please go to https://seatunnel.apache.org/docs/category/sink-v2\n}\n')),(0,l.kt)("h3",{id:"generate-sink-sql"},"Generate Sink SQL"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"This example  not need to write complex sql statements, you can configure the database name table name to automatically generate add statements for you")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'sink {\n    jdbc {\n        url = "jdbc:vertica://localhost:5433/vertica"\n        driver = "com.vertica.jdbc.Driver"\n        user = "root"\n        password = "123456"\n        # Automatically generate sql statements based on database table names\n        generate_sink_sql = true\n        database = test\n        table = test_table\n    }\n}\n')),(0,l.kt)("h3",{id:"exactly-once-"},"Exactly-once :"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"For accurate write scene we guarantee accurate once")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'sink {\n    jdbc {\n        url = "jdbc:vertica://localhost:5433/vertica"\n        driver = "com.vertica.jdbc.Driver"\n    \n        max_retries = 0\n        user = "root"\n        password = "123456"\n        query = "insert into test_table(name,age) values(?,?)"\n    \n        is_exactly_once = "true"\n    \n        xa_data_source_class_name = "com.vertical.cj.jdbc.VerticalXADataSource"\n    }\n}\n')))}m.isMDXComponent=!0}}]);