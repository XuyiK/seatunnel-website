"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[99107],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return c}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=p(n),c=r,k=m["".concat(s,".").concat(c)]||m[c]||u[c]||l;return n?a.createElement(k,i(i({ref:e},d),{},{components:n})):a.createElement(k,i({ref:e},d))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},78954:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return d},toc:function(){return u},default:function(){return c}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={},s="Postgre CDC",p={unversionedId:"connector-v2/source/Postgre-CDC",id:"connector-v2/source/Postgre-CDC",title:"Postgre CDC",description:"Postgre CDC source connector",source:"@site/docs/connector-v2/source/Postgre-CDC.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/Postgre-CDC",permalink:"/zh-CN/docs/connector-v2/source/Postgre-CDC",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/source/Postgre-CDC.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Phoenix",permalink:"/zh-CN/docs/connector-v2/source/Phoenix"},next:{title:"PostgreSQL",permalink:"/zh-CN/docs/connector-v2/source/PostgreSQL"}},d={},u=[{value:"Support Those Engines",id:"support-those-engines",level:2},{value:"Key features",id:"key-features",level:2},{value:"Description",id:"description",level:2},{value:"Supported DataSource Info",id:"supported-datasource-info",level:2},{value:"Using Dependency",id:"using-dependency",level:2},{value:"Install Jdbc Driver",id:"install-jdbc-driver",level:3},{value:"For Spark/Flink Engine",id:"for-sparkflink-engine",level:4},{value:"For SeaTunnel Zeta Engine",id:"for-seatunnel-zeta-engine",level:4},{value:"Data Type Mapping",id:"data-type-mapping",level:2},{value:"Source Options",id:"source-options",level:2},{value:"Task Example",id:"task-example",level:2},{value:"Simple",id:"simple",level:3},{value:"Support custom primary key for table",id:"support-custom-primary-key-for-table",level:3},{value:"Changelog",id:"changelog",level:2},{value:"next version",id:"next-version",level:3}],m={toc:u};function c(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"postgre-cdc"},"Postgre CDC"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Postgre CDC source connector")),(0,l.kt)("h2",{id:"support-those-engines"},"Support Those Engines"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"SeaTunnel Zeta",(0,l.kt)("br",null),"\nFlink ",(0,l.kt)("br",null))),(0,l.kt)("h2",{id:"key-features"},"Key features"),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"batch")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"stream")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"exactly-once")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"column projection")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"parallelism")),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"li",href:"../../concept/connector-v2-features.md"},"support user-defined split"))),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"The Postgre CDC connector allows for reading snapshot data and incremental data from Postgre database. This document\ndescribes how to set up the Postgre CDC connector to run SQL queries against Postgre databases."),(0,l.kt)("h2",{id:"supported-datasource-info"},"Supported DataSource Info"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Datasource"),(0,l.kt)("th",{parentName:"tr",align:null},"Supported versions"),(0,l.kt)("th",{parentName:"tr",align:null},"Driver"),(0,l.kt)("th",{parentName:"tr",align:null},"Url"),(0,l.kt)("th",{parentName:"tr",align:null},"Maven"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PostgreSQL"),(0,l.kt)("td",{parentName:"tr",align:null},"Different dependency version has different driver class."),(0,l.kt)("td",{parentName:"tr",align:null},"org.postgresql.Driver"),(0,l.kt)("td",{parentName:"tr",align:null},"jdbc:postgresql://localhost:5432/test"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/org.postgresql/postgresql"},"Download"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PostgreSQL"),(0,l.kt)("td",{parentName:"tr",align:null},"If you want to manipulate the GEOMETRY type in PostgreSQL."),(0,l.kt)("td",{parentName:"tr",align:null},"org.postgresql.Driver"),(0,l.kt)("td",{parentName:"tr",align:null},"jdbc:postgresql://localhost:5432/test"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://mvnrepository.com/artifact/net.postgis/postgis-jdbc"},"Download"))))),(0,l.kt)("h2",{id:"using-dependency"},"Using Dependency"),(0,l.kt)("h3",{id:"install-jdbc-driver"},"Install Jdbc Driver"),(0,l.kt)("h4",{id:"for-sparkflink-engine"},"For Spark/Flink Engine"),(0,l.kt)("blockquote",null,(0,l.kt)("ol",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ol"},"You need to ensure that the ",(0,l.kt)("a",{parentName:"li",href:"https://mvnrepository.com/artifact/org.postgresql/postgresql"},"jdbc driver jar package")," has been placed in directory ",(0,l.kt)("inlineCode",{parentName:"li"},"${SEATUNNEL_HOME}/plugins/"),"."))),(0,l.kt)("h4",{id:"for-seatunnel-zeta-engine"},"For SeaTunnel Zeta Engine"),(0,l.kt)("blockquote",null,(0,l.kt)("ol",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ol"},"You need to ensure that the ",(0,l.kt)("a",{parentName:"li",href:"https://mvnrepository.com/artifact/org.postgresql/postgresql"},"jdbc driver jar package")," has been placed in directory ",(0,l.kt)("inlineCode",{parentName:"li"},"${SEATUNNEL_HOME}/lib/"),"."))),(0,l.kt)("p",null,"Please download and put Postgre driver in ",(0,l.kt)("inlineCode",{parentName:"p"},"${SEATUNNEL_HOME}/lib/")," dir. For example: cp postgresql-xxx.jar ",(0,l.kt)("inlineCode",{parentName:"p"},"$SEATNUNNEL_HOME/lib/")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Here are the steps to enable CDC (Change Data Capture) in PostgreSQL:")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},'Ensure the wal_level is set to logical: Modify the postgresql.conf configuration file by adding "wal_level = logical",\nrestart the PostgreSQL server for the changes to take effect.\nAlternatively, you can use SQL commands to modify the configuration directly:')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER SYSTEM SET wal_level TO 'logical';\nSELECT pg_reload_conf();\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Change the REPLICA policy of the specified table to FULL")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE your_table_name REPLICA IDENTITY FULL;\n")),(0,l.kt)("h2",{id:"data-type-mapping"},"Data Type Mapping"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"PostgreSQL Data type"),(0,l.kt)("th",{parentName:"tr",align:null},"SeaTunnel Data type"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BOOL",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_BOOL",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},"ARRAY","<","BOOLEAN",">")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BYTEA",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},"BYTES")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_BYTEA",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},"ARRAY","<","TINYINT",">")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"INT2",(0,l.kt)("br",null),"SMALLSERIAL",(0,l.kt)("br",null),"INT4",(0,l.kt)("br",null),"SERIAL",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},"INT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_INT2",(0,l.kt)("br",null),"_INT4",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},"ARRAY","<","INT",">")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"INT8",(0,l.kt)("br",null),"BIGSERIAL",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},"BIGINT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_INT8",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},"ARRAY","<","BIGINT",">")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FLOAT4",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},"FLOAT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_FLOAT4",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},"ARRAY","<","FLOAT",">")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"FLOAT8",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},"DOUBLE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_FLOAT8",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},"ARRAY","<","DOUBLE",">")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NUMERIC(Get the designated column's specified column size>0)"),(0,l.kt)("td",{parentName:"tr",align:null},"DECIMAL(Get the designated column's specified column size,Gets the number of digits in the specified column to the right of the decimal point)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NUMERIC(Get the designated column's specified column size<0)"),(0,l.kt)("td",{parentName:"tr",align:null},"DECIMAL(38, 18)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BPCHAR",(0,l.kt)("br",null),"CHARACTER",(0,l.kt)("br",null),"VARCHAR",(0,l.kt)("br",null),"TEXT",(0,l.kt)("br",null),"GEOMETRY",(0,l.kt)("br",null),"GEOGRAPHY",(0,l.kt)("br",null),"JSON",(0,l.kt)("br",null),"JSONB"),(0,l.kt)("td",{parentName:"tr",align:null},"STRING")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"_BPCHAR",(0,l.kt)("br",null),"_CHARACTER",(0,l.kt)("br",null),"_VARCHAR",(0,l.kt)("br",null),"_TEXT"),(0,l.kt)("td",{parentName:"tr",align:null},"ARRAY","<","STRING",">")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TIMESTAMP",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},"TIMESTAMP")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TIME",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},"TIME")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DATE",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},"DATE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"OTHER DATA TYPES"),(0,l.kt)("td",{parentName:"tr",align:null},"NOT SUPPORTED YET")))),(0,l.kt)("h2",{id:"source-options"},"Source Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"base-url"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"The URL of the JDBC connection. Refer to a case: ",(0,l.kt)("inlineCode",{parentName:"td"},"jdbc:postgresql://localhost:5432/postgres_cdc?loggerLevel=OFF"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"username"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the database to use when connecting to the database server.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Password to use when connecting to the database server.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"database-names"),(0,l.kt)("td",{parentName:"tr",align:null},"List"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Database name of the database to monitor.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table-names"),(0,l.kt)("td",{parentName:"tr",align:null},"List"),(0,l.kt)("td",{parentName:"tr",align:null},"Yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Table name of the database to monitor. The table name needs to include the database name, for example: ",(0,l.kt)("inlineCode",{parentName:"td"},"database_name.table_name"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table-names-config"),(0,l.kt)("td",{parentName:"tr",align:null},"List"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},'Table config list. for example: [{"table": "db1.schema1.table1","primaryKeys":','["key1"]',"}]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"startup.mode"),(0,l.kt)("td",{parentName:"tr",align:null},"Enum"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"INITIAL"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional startup mode for Postgre CDC consumer, valid enumerations are ",(0,l.kt)("inlineCode",{parentName:"td"},"initial"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"earliest"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"latest")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"specific"),". ",(0,l.kt)("br",null)," ",(0,l.kt)("inlineCode",{parentName:"td"},"initial"),": Synchronize historical data at startup, and then synchronize incremental data.",(0,l.kt)("br",null)," ",(0,l.kt)("inlineCode",{parentName:"td"},"earliest"),": Startup from the earliest offset possible.",(0,l.kt)("br",null)," ",(0,l.kt)("inlineCode",{parentName:"td"},"latest"),": Startup from the latest offset.",(0,l.kt)("br",null)," ",(0,l.kt)("inlineCode",{parentName:"td"},"specific"),": Startup from user-supplied specific offsets.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"snapshot.split.size"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"8096"),(0,l.kt)("td",{parentName:"tr",align:null},"The split size (number of rows) of table snapshot, captured tables are split into multiple splits when read the snapshot of table.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"snapshot.fetch.size"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"1024"),(0,l.kt)("td",{parentName:"tr",align:null},"The maximum fetch size for per poll when read table snapshot.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"slot.name"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the PostgreSQL logical decoding slot that was created for streaming changes from a particular plug-in for a particular database/schema. The server uses this slot to stream events to the connector that you are configuring. Default is seatunnel.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"decoding.plugin.name"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"pgoutput"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the Postgres logical decoding plug-in installed on the server,Supported values are decoderbufs, wal2json, wal2json_rds, wal2json_streaming,wal2json_rds_streaming and pgoutput.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"server-time-zone"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"UTC"),(0,l.kt)("td",{parentName:"tr",align:null},"The session time zone in database server. If not set, then ZoneId.systemDefault() is used to determine the server time zone.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"connect.timeout.ms"),(0,l.kt)("td",{parentName:"tr",align:null},"Duration"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"30000"),(0,l.kt)("td",{parentName:"tr",align:null},"The maximum time that the connector should wait after trying to connect to the database server before timing out.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"connect.max-retries"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"The max retry times that the connector should retry to build database server connection.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"connection.pool.size"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"20"),(0,l.kt)("td",{parentName:"tr",align:null},"The jdbc connection pool size.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"chunk-key.even-distribution.factor.upper-bound"),(0,l.kt)("td",{parentName:"tr",align:null},"Double"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null},"The upper bound of the chunk key distribution factor. This factor is used to determine whether the table data is evenly distributed. If the distribution factor is calculated to be less than or equal to this upper bound (i.e., (MAX(id) - MIN(id) + 1) / row count), the table chunks would be optimized for even distribution. Otherwise, if the distribution factor is greater, the table will be considered as unevenly distributed and the sampling-based sharding strategy will be used if the estimated shard count exceeds the value specified by ",(0,l.kt)("inlineCode",{parentName:"td"},"sample-sharding.threshold"),". The default value is 100.0.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"chunk-key.even-distribution.factor.lower-bound"),(0,l.kt)("td",{parentName:"tr",align:null},"Double"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"0.05"),(0,l.kt)("td",{parentName:"tr",align:null},"The lower bound of the chunk key distribution factor. This factor is used to determine whether the table data is evenly distributed. If the distribution factor is calculated to be greater than or equal to this lower bound (i.e., (MAX(id) - MIN(id) + 1) / row count), the table chunks would be optimized for even distribution. Otherwise, if the distribution factor is less, the table will be considered as unevenly distributed and the sampling-based sharding strategy will be used if the estimated shard count exceeds the value specified by ",(0,l.kt)("inlineCode",{parentName:"td"},"sample-sharding.threshold"),". The default value is 0.05.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sample-sharding.threshold"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"1000"),(0,l.kt)("td",{parentName:"tr",align:null},"This configuration specifies the threshold of estimated shard count to trigger the sample sharding strategy. When the distribution factor is outside the bounds specified by ",(0,l.kt)("inlineCode",{parentName:"td"},"chunk-key.even-distribution.factor.upper-bound")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"chunk-key.even-distribution.factor.lower-bound"),", and the estimated shard count (calculated as approximate row count / chunk size) exceeds this threshold, the sample sharding strategy will be used. This can help to handle large datasets more efficiently. The default value is 1000 shards.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"inverse-sampling.rate"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"1000"),(0,l.kt)("td",{parentName:"tr",align:null},"The inverse of the sampling rate used in the sample sharding strategy. For example, if this value is set to 1000, it means a 1/1000 sampling rate is applied during the sampling process. This option provides flexibility in controlling the granularity of the sampling, thus affecting the final number of shards. It's especially useful when dealing with very large datasets where a lower sampling rate is preferred. The default value is 1000.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"exactly_once"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Enable exactly once semantic.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"format"),(0,l.kt)("td",{parentName:"tr",align:null},"Enum"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"DEFAULT"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional output format for Postgre CDC, valid enumerations are ",(0,l.kt)("inlineCode",{parentName:"td"},"DEFAULT"),"\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"COMPATIBLE_DEBEZIUM_JSON"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"debezium"),(0,l.kt)("td",{parentName:"tr",align:null},"Config"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Pass-through ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/debezium/debezium/blob/1.6/documentation/modules/ROOT/pages/connectors/postgresql.adoc#connector-configuration-properties"},"Debezium's properties")," to Debezium Embedded Engine which is used to capture data changes from Postgre server.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"common-options"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"Source plugin common parameters, please refer to ",(0,l.kt)("a",{parentName:"td",href:"/zh-CN/docs/connector-v2/source/common-options"},"Source Common Options")," for details")))),(0,l.kt)("h2",{id:"task-example"},"Task Example"),(0,l.kt)("h3",{id:"simple"},"Simple"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Support multi-table reading")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'\n\nenv {\n  # You can set engine configuration here\n  execution.parallelism = 1\n  job.mode = "STREAMING"\n  checkpoint.interval = 5000\n  read_limit.bytes_per_second=7000000\n  read_limit.rows_per_second=400\n}\n\nsource {\n  Postgres-CDC {\n    result_table_name = "customers_Postgre_cdc"\n    username = "postgres"\n    password = "postgres"\n    database-names = ["postgres_cdc"]\n    schema-names = ["inventory"]\n    table-names = ["postgres_cdc.inventory.postgres_cdc_table_1,postgres_cdc.inventory.postgres_cdc_table_2"]\n    base-url = "jdbc:postgresql://postgres_cdc_e2e:5432/postgres_cdc?loggerLevel=OFF"\n  }\n}\n\ntransform {\n\n}\n\nsink {\n  jdbc {\n    source_table_name = "customers_Postgre_cdc"\n    url = "jdbc:postgresql://postgres_cdc_e2e:5432/postgres_cdc?loggerLevel=OFF"\n    driver = "org.postgresql.Driver"\n    user = "postgres"\n    password = "postgres"\n\n    generate_sink_sql = true\n    # You need to configure both database and table\n    database = postgres_cdc\n    chema = "inventory"\n    tablePrefix = "sink_"\n    primary_keys = ["id"]\n  }\n}\n')),(0,l.kt)("h3",{id:"support-custom-primary-key-for-table"},"Support custom primary key for table"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'source {\n  Postgres-CDC {\n    result_table_name = "customers_mysql_cdc"\n    username = "postgres"\n    password = "postgres"\n    database-names = ["postgres_cdc"]\n    schema-names = ["inventory"]\n    table-names = ["postgres_cdc.inventory.full_types_no_primary_key"]\n    base-url = "jdbc:postgresql://postgres_cdc_e2e:5432/postgres_cdc?loggerLevel=OFF"\n    decoding.plugin.name = "decoderbufs"\n    exactly_once = false\n    table-names-config = [\n      {\n        table = "postgres_cdc.inventory.full_types_no_primary_key"\n        primaryKeys = ["id"]\n      }\n    ]\n  }\n}\n')),(0,l.kt)("h2",{id:"changelog"},"Changelog"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Add Postgre CDC Source Connector")),(0,l.kt)("h3",{id:"next-version"},"next version"))}c.isMDXComponent=!0}}]);