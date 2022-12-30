"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[26417],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,f=c["".concat(u,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},75423:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return s},assets:function(){return p},toc:function(){return d},default:function(){return m}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=["components"],i={},u="Contribute Transform Guide",s={unversionedId:"contribution/contribute-transform-v2-guide",id:"version-2.3.0/contribution/contribute-transform-v2-guide",title:"Contribute Transform Guide",description:"This document describes how to understand, develop and contribute a transform.",source:"@site/versioned_docs/version-2.3.0/contribution/contribute-transform-v2-guide.md",sourceDirName:"contribution",slug:"/contribution/contribute-transform-v2-guide",permalink:"/zh-CN/docs/2.3.0/contribution/contribute-transform-v2-guide",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.3.0/contribution/contribute-transform-v2-guide.md",tags:[],version:"2.3.0",frontMatter:{},sidebar:"docs",previous:{title:"Coding guide",permalink:"/zh-CN/docs/2.3.0/contribution/coding-guide"},next:{title:"FAQ",permalink:"/zh-CN/docs/2.3.0/faq"}},p={},d=[{value:"Concepts",id:"concepts",level:2},{value:"DataType transform",id:"datatype-transform",level:3},{value:"Data transform",id:"data-transform",level:3},{value:"Translation",id:"translation",level:3},{value:"Core APIs",id:"core-apis",level:2},{value:"SeaTunnelTransform",id:"seatunneltransform",level:3},{value:"SingleFieldOutputTransform",id:"singlefieldoutputtransform",level:3},{value:"MultipleFieldOutputTransform",id:"multiplefieldoutputtransform",level:3},{value:"AbstractSeaTunnelTransform",id:"abstractseatunneltransform",level:3},{value:"Develop a Transform",id:"develop-a-transform",level:2},{value:"Example: copy field to new field",id:"example-copy-field-to-new-field",level:3},{value:"Transform Test Tool",id:"transform-test-tool",level:2}],c={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"contribute-transform-guide"},"Contribute Transform Guide"),(0,o.kt)("p",null,"This document describes how to understand, develop and contribute a transform."),(0,o.kt)("p",null,"We also provide the ",(0,o.kt)("a",{parentName:"p",href:"../../../seatunnel-e2e/seatunnel-transforms-v2-e2e"},"transform e2e test"),"\nto verify the data input and output by the transform."),(0,o.kt)("h2",{id:"concepts"},"Concepts"),(0,o.kt)("p",null,"Using SeaTunnel you can read or write data through the connector, but if you need to\nprocess your data after reading or before writing, then need to use transform."),(0,o.kt)("p",null,"Use transform to make simple edits to your data rows or fields, such as split field,\nchange field values, add or remove field."),(0,o.kt)("h3",{id:"datatype-transform"},"DataType transform"),(0,o.kt)("p",null,"Transform receives datatype input from upstream(source or transform) and outputs new datatype to\ndownstream(sink or transform), this process is datatype transform."),(0,o.kt)("p",null,"Example 1\uff1aRemove fields"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"| A         | B         | C         |\n|-----------|-----------|-----------|\n| STRING    | INT       | BOOLEAN   |\n\n| A         | B         |\n|-----------|-----------|\n| STRING    | INT       |\n")),(0,o.kt)("p",null,"Example 2\uff1aSort fields"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"| B         | C         | A         |\n|-----------|-----------|-----------|\n| INT       | BOOLEAN   | STRING    |\n\n| A         | B         | C         |\n|-----------|-----------|-----------|\n| STRING    | INT       | BOOLEAN   |\n")),(0,o.kt)("p",null,"Example 3\uff1aUpdate fields datatype"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"| A         | B         | C         |\n|-----------|-----------|-----------|\n| STRING    | INT       | BOOLEAN   |\n\n\n| A         | B         | C         |\n|-----------|-----------|-----------|\n| STRING    | STRING    | STRING    |\n")),(0,o.kt)("p",null,"Example 4\uff1aAdd new fields"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"| A         | B         | C         |\n|-----------|-----------|-----------|\n| STRING    | INT       | BOOLEAN   |\n\n\n| A         | B         | C         | D         |\n|-----------|-----------|-----------|-----------|\n| STRING    | INT       | BOOLEAN   | DOUBLE    |\n")),(0,o.kt)("h3",{id:"data-transform"},"Data transform"),(0,o.kt)("p",null,"After datatype transformed, Transform will receives data-row input from upstream(source or transform),\nedit into data-row with ","[new datatype]","(#DataType transform) and outputs to downstream (sink or transform).\nThis process is data transform."),(0,o.kt)("h3",{id:"translation"},"Translation"),(0,o.kt)("p",null,"Transform is decoupled from the execution engine, any transform implement can run into all engines\nwithout change the code & config, which requires the translation layer to adapt transform and execution engine."),(0,o.kt)("p",null,"Example\uff1aTranslation datatype & data"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'Original:\n\n| A         | B         | C         |\n|-----------|-----------|-----------|\n| STRING    | INT       | BOOLEAN   |\n\nDatatype translation:\n\n| A                 | B                 | C                 |\n|-------------------|-------------------|-------------------|\n| ENGINE<STRING>    | ENGINE<INT>       | ENGINE<BOOLEAN>   |\n\nData translation:\n\n| A                 | B                 | C                 |\n|-------------------|-------------------|-------------------|\n| ENGINE<"test">    | ENGINE<1>         |  ENGINE<false>    |\n')),(0,o.kt)("h2",{id:"core-apis"},"Core APIs"),(0,o.kt)("h3",{id:"seatunneltransform"},"SeaTunnelTransform"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"SeaTunnelTransform")," provides all major and primary APIs, you can subclass it to do whatever transform."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Receive datatype input from upstream.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"    /**\n     * Set the data type info of input data.\n     *\n     * @param inputDataType The data type info of upstream input.\n     */\n     void setTypeInfo(SeaTunnelDataType<T> inputDataType);\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Outputs new datatype to downstream.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"    /**\n     * Get the data type of the records produced by this transform.\n     *\n     * @return Produced data type.\n     */\n    SeaTunnelDataType<T> getProducedType();\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Edit input data and outputs new data to downstream.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"    /**\n     * Transform input data to {@link this#getProducedType()} types data.\n     *\n     * @param row the data need be transform.\n     * @return transformed data.\n     */\n    T map(T row);\n")),(0,o.kt)("h3",{id:"singlefieldoutputtransform"},"SingleFieldOutputTransform"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"SingleFieldOutputTransform")," abstract single field change operator"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Define output field")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"    /**\n     * Outputs new field\n     *\n     * @return\n     */\n    protected abstract String getOutputFieldName();\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Define output field datatype")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"    /**\n     * Outputs new field datatype\n     *\n     * @return\n     */\n    protected abstract SeaTunnelDataType getOutputFieldDataType();\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Define output field value")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"    /**\n     * Outputs new field value\n     * \n     * @param inputRow The inputRow of upstream input.\n     * @return\n     */\n    protected abstract Object getOutputFieldValue(SeaTunnelRowAccessor inputRow);\n")),(0,o.kt)("h3",{id:"multiplefieldoutputtransform"},"MultipleFieldOutputTransform"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"MultipleFieldOutputTransform")," abstract multiple fields change operator"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Define output fields")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"    /**\n     * Outputs new fields\n     *\n     * @return\n     */\n    protected abstract String[] getOutputFieldNames();\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Define output fields datatype")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"    /**\n     * Outputs new fields datatype\n     *\n     * @return\n     */\n    protected abstract SeaTunnelDataType[] getOutputFieldDataTypes();\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Define output field values")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"    /**\n     * Outputs new fields value\n     *\n     * @param inputRow The inputRow of upstream input.\n     * @return\n     */\n    protected abstract Object[] getOutputFieldValues(SeaTunnelRowAccessor inputRow);\n")),(0,o.kt)("h3",{id:"abstractseatunneltransform"},"AbstractSeaTunnelTransform"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"AbstractSeaTunnelTransform")," abstract datatype & fields change operator"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Transform input row type and outputs new row type")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"    /**\n     * Outputs transformed row type.\n     *\n     * @param inputRowType upstream input row type\n     * @return\n     */\n    protected abstract SeaTunnelRowType transformRowType(SeaTunnelRowType inputRowType);\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Transform input row data and outputs new row data")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"    /**\n     * Outputs transformed row data.\n     * \n     * @param inputRow upstream input row data\n     * @return\n     */\n    protected abstract SeaTunnelRow transformRow(SeaTunnelRow inputRow);\n")),(0,o.kt)("h2",{id:"develop-a-transform"},"Develop a Transform"),(0,o.kt)("p",null,"It must implement one of the following APIs:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"SeaTunnelTransform"),(0,o.kt)("li",{parentName:"ul"},"AbstractSeaTunnelTransform"),(0,o.kt)("li",{parentName:"ul"},"SingleFieldOutputTransform"),(0,o.kt)("li",{parentName:"ul"},"MultipleFieldOutputTransform")),(0,o.kt)("p",null,"Add implement subclass into module ",(0,o.kt)("inlineCode",{parentName:"p"},"seatunnel-transforms-v2"),"."),(0,o.kt)("h3",{id:"example-copy-field-to-new-field"},"Example: copy field to new field"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@AutoService(SeaTunnelTransform.class)\npublic class CopyFieldTransform extends SingleFieldOutputTransform {\n\n    private String srcField;\n    private int srcFieldIndex;\n    private SeaTunnelDataType srcFieldDataType;\n    private String destField;\n\n    @Override\n    public String getPluginName() {\n        return "Copy";\n    }\n\n    @Override\n    protected void setConfig(Config pluginConfig) {\n        this.srcField = pluginConfig.getString("src_field");\n        this.destField = pluginConfig.getString("dest_fields");\n    }\n\n    @Override\n    protected void setInputRowType(SeaTunnelRowType inputRowType) {\n        srcFieldIndex = inputRowType.indexOf(srcField);\n        srcFieldDataType = inputRowType.getFieldType(srcFieldIndex);\n    }\n\n    @Override\n    protected String getOutputFieldName() {\n        return destField;\n    }\n\n    @Override\n    protected SeaTunnelDataType getOutputFieldDataType() {\n        return srcFieldDataType;\n    }\n\n    @Override\n    protected Object getOutputFieldValue(SeaTunnelRowAccessor inputRow) {\n        return inputRow.getField(srcFieldIndex);\n    }\n}\n')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"getPluginName")," method is used to identify the transform name."),(0,o.kt)("li",{parentName:"ol"},"The @AutoService is used to generate the ",(0,o.kt)("inlineCode",{parentName:"li"},"META-INF/services/org.apache.seatunnel.api.transform.SeaTunnelTransform"),"\nfile automatically."),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"setConfig")," method is used to inject user configs.")),(0,o.kt)("h2",{id:"transform-test-tool"},"Transform Test Tool"),(0,o.kt)("p",null,"Once you add a new plugin, it is recommended to add e2e tests for it.\nWe have a ",(0,o.kt)("inlineCode",{parentName:"p"},"seatunnel-e2e/seatunnel-transforms-v2-e2e")," module to help you to do this."),(0,o.kt)("p",null,"For example, if you want to add an e2e test for ",(0,o.kt)("inlineCode",{parentName:"p"},"CopyFieldTransform"),", you can create a new test in\n",(0,o.kt)("inlineCode",{parentName:"p"},"seatunnel-e2e/seatunnel-transforms-v2-e2e")," module and extend the ",(0,o.kt)("inlineCode",{parentName:"p"},"TestSuiteBase")," class in the test."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public class TestCopyFieldTransformIT extends TestSuiteBase {\n\n    @TestTemplate\n    public void testCopyFieldTransform(TestContainer container) {\n        Container.ExecResult execResult = container.executeJob("/copy_transform.conf");\n        Assertions.assertEquals(0, execResult.getExitCode());\n    }\n}\n')),(0,o.kt)("p",null,"Once your testcase implements the ",(0,o.kt)("inlineCode",{parentName:"p"},"TestSuiteBase")," interface and use ",(0,o.kt)("inlineCode",{parentName:"p"},"@TestTemplate")," annotation startup,\nit will running job to all engines, and you just need to execute the executeJob method with your SeaTunnel configuration file,\nit will submit the SeaTunnel job."))}m.isMDXComponent=!0}}]);