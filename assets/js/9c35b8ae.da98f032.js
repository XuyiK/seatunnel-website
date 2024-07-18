"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[25663],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>h});var a=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(t),g=o,h=p["".concat(l,".").concat(g)]||p[g]||d[g]||r;return t?a.createElement(h,s(s({ref:n},c),{},{components:t})):a.createElement(h,s({ref:n},c))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=g;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var u=2;u<r;u++)s[u]=t[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},36258:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var a=t(58168),o=(t(96540),t(15680));const r={sidebar_position:5},s=void 0,i={unversionedId:"seatunnel-engine/hybrid-cluster-deployment",id:"seatunnel-engine/hybrid-cluster-deployment",title:"hybrid-cluster-deployment",description:"----------------",source:"@site/docs/seatunnel-engine/hybrid-cluster-deployment.md",sourceDirName:"seatunnel-engine",slug:"/seatunnel-engine/hybrid-cluster-deployment",permalink:"/docs/seatunnel-engine/hybrid-cluster-deployment",draft:!1,editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/seatunnel-engine/hybrid-cluster-deployment.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docs",previous:{title:"local-mode-deployment",permalink:"/docs/seatunnel-engine/local-mode-deployment"},next:{title:"separated-cluster-deployment",permalink:"/docs/seatunnel-engine/separated-cluster-deployment"}},l={},u=[{value:"1. Download",id:"1-download",level:2},{value:"2. Configure SEATUNNEL_HOME",id:"2-configure-seatunnel_home",level:2},{value:"3. Configure The JVM Options For The SeaTunnel Engine",id:"3-configure-the-jvm-options-for-the-seatunnel-engine",level:2},{value:"4. Configure The SeaTunnel Engine",id:"4-configure-the-seatunnel-engine",level:2},{value:"4.1 Backup Count Setting For Data In Imap",id:"41-backup-count-setting-for-data-in-imap",level:3},{value:"4.2 Slot Configuration",id:"42-slot-configuration",level:3},{value:"4.3 Checkpoint Manager",id:"43-checkpoint-manager",level:3},{value:"4.4 Expiration Configuration For Historical Jobs",id:"44-expiration-configuration-for-historical-jobs",level:3},{value:"4.5 Class Loader Cache Mode",id:"45-class-loader-cache-mode",level:3},{value:"5. Configure The SeaTunnel Engine Network Service",id:"5-configure-the-seatunnel-engine-network-service",level:2},{value:"5.1 Cluster Name",id:"51-cluster-name",level:3},{value:"5.2 Network",id:"52-network",level:3},{value:"TCP",id:"tcp",level:4},{value:"Alternatively, Hazelcast provides several other service discovery methods. For more details, please refer to Hazelcast Network",id:"alternatively-hazelcast-provides-several-other-service-discovery-methods-for-more-details-please-refer-to-hazelcast-network",level:2},{value:"sidebar_position: 5",id:"sidebar_position-5",level:2},{value:"5.3 IMap Persistence Configuration",id:"53-imap-persistence-configuration",level:3},{value:"6. Configure The SeaTunnel Engine Client",id:"6-configure-the-seatunnel-engine-client",level:2},{value:"6.1 cluster-name",id:"61-cluster-name",level:3},{value:"6.2 network",id:"62-network",level:3},{value:"7. Start The SeaTunnel Engine Server Node",id:"7-start-the-seatunnel-engine-server-node",level:2},{value:"8. Install The SeaTunnel Engine Client",id:"8-install-the-seatunnel-engine-client",level:2},{value:"9. Submit And Manage Jobs",id:"9-submit-and-manage-jobs",level:2}],c={toc:u},p="wrapper";function d(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,a.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("hr",null),(0,o.yg)("h1",{id:"deploy-seatunnel-engine-hybrid-mode-cluster"},"Deploy SeaTunnel Engine Hybrid Mode Cluster"),(0,o.yg)("p",null,"The Master service and Worker service of SeaTunnel Engine are mixed in the same process, and all nodes can run jobs and participate in the election to become master. The master node is also running synchronous tasks simultaneously. In this mode, the Imap (which saves the status information of the task to provide support for the task's fault tolerance) data will be distributed across all nodes."),(0,o.yg)("p",null,"Usage Recommendation: It is recommended to use the ",(0,o.yg)("a",{parentName:"p",href:"/docs/seatunnel-engine/separated-cluster-deployment"},"Separated Cluster Mode"),". In the hybrid cluster mode, the Master node needs to run tasks synchronously. When the task scale is large, it will affect the stability of the Master node. Once the Master node crashes or the heartbeat times out, it will cause the Master node to switch, and the Master node switch will cause all running tasks to perform fault tolerance, further increasing the load on the cluster. Therefore, we recommend using the ",(0,o.yg)("a",{parentName:"p",href:"/docs/seatunnel-engine/separated-cluster-deployment"},"Separated Cluster Mode"),"."),(0,o.yg)("h2",{id:"1-download"},"1. Download"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"/docs/seatunnel-engine/download-seatunnel"},"Download And Create The SeaTunnel Installation Package")),(0,o.yg)("h2",{id:"2-configure-seatunnel_home"},"2. Configure SEATUNNEL_HOME"),(0,o.yg)("p",null,"You can configure ",(0,o.yg)("inlineCode",{parentName:"p"},"SEATUNNEL_HOME")," by adding the ",(0,o.yg)("inlineCode",{parentName:"p"},"/etc/profile.d/seatunnel.sh")," file. The content of ",(0,o.yg)("inlineCode",{parentName:"p"},"/etc/profile.d/seatunnel.sh")," is as follows:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"export SEATUNNEL_HOME=${seatunnel install path}\nexport PATH=$PATH:$SEATUNNEL_HOME/bin\n")),(0,o.yg)("h2",{id:"3-configure-the-jvm-options-for-the-seatunnel-engine"},"3. Configure The JVM Options For The SeaTunnel Engine"),(0,o.yg)("p",null,"The SeaTunnel Engine supports two methods for setting JVM options:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Add the JVM options to ",(0,o.yg)("inlineCode",{parentName:"p"},"$SEATUNNEL_HOME/config/jvm_options"),"."),(0,o.yg)("p",{parentName:"li"},"Modify the JVM parameters in the ",(0,o.yg)("inlineCode",{parentName:"p"},"$SEATUNNEL_HOME/config/jvm_options")," file.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Add JVM options when starting the SeaTunnel Engine. For example, ",(0,o.yg)("inlineCode",{parentName:"p"},'seatunnel-cluster.sh -DJvmOption="-Xms2G -Xmx2G"')))),(0,o.yg)("h2",{id:"4-configure-the-seatunnel-engine"},"4. Configure The SeaTunnel Engine"),(0,o.yg)("p",null,"The SeaTunnel Engine provides many functions that need to be configured in the ",(0,o.yg)("inlineCode",{parentName:"p"},"seatunnel.yaml")," file."),(0,o.yg)("h3",{id:"41-backup-count-setting-for-data-in-imap"},"4.1 Backup Count Setting For Data In Imap"),(0,o.yg)("p",null,"The SeaTunnel Engine implements cluster management based on ",(0,o.yg)("a",{parentName:"p",href:"https://docs.hazelcast.com/imdg/4.1/"},"Hazelcast IMDG"),". The cluster's status data (job running status, resource status) is stored in the ",(0,o.yg)("a",{parentName:"p",href:"https://docs.hazelcast.com/imdg/4.1/data-structures/map"},"Hazelcast IMap"),".\nThe data stored in the Hazelcast IMap is distributed and stored on all nodes in the cluster. Hazelcast partitions the data stored in the Imap. Each partition can specify the number of backups.\nTherefore, the SeaTunnel Engine can implement cluster HA without using other services (such as Zookeeper)."),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"backup count")," is a parameter that defines the number of synchronous backups. For example, if it is set to 1, the backup of the partition will be placed on one other member. If it is set to 2, it will be placed on two other members."),(0,o.yg)("p",null,"We recommend that the value of ",(0,o.yg)("inlineCode",{parentName:"p"},"backup count")," be ",(0,o.yg)("inlineCode",{parentName:"p"},"min(1, max(5, N/2))"),". ",(0,o.yg)("inlineCode",{parentName:"p"},"N")," is the number of cluster nodes."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"seatunnel:\n    engine:\n        backup-count: 1\n        # Other configurations\n")),(0,o.yg)("h3",{id:"42-slot-configuration"},"4.2 Slot Configuration"),(0,o.yg)("p",null,"The number of slots determines the number of task groups that the cluster node can run in parallel. The formula for the number of slots required for a task is N = 2 + P (the parallelism configured by the task). By default, the number of slots in the SeaTunnel Engine is dynamic, that is, there is no limit on the number. We recommend that the number of slots be set to twice the number of CPU cores on the node."),(0,o.yg)("p",null,"Configuration of dynamic slot number (default):"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"seatunnel:\n    engine:\n        slot-service:\n            dynamic-slot: true\n        # Other configurations\n")),(0,o.yg)("p",null,"Configuration of static slot number:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"seatunnel:\n    engine:\n        slot-service:\n            dynamic-slot: false\n            slot-num: 20\n")),(0,o.yg)("h3",{id:"43-checkpoint-manager"},"4.3 Checkpoint Manager"),(0,o.yg)("p",null,"Like Flink, the SeaTunnel Engine supports the Chandy\u2013Lamport algorithm. Therefore, it is possible to achieve data synchronization without data loss and duplication."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"interval")),(0,o.yg)("p",null,"The interval between two checkpoints, in milliseconds. If the ",(0,o.yg)("inlineCode",{parentName:"p"},"checkpoint.interval")," parameter is configured in the job configuration file's ",(0,o.yg)("inlineCode",{parentName:"p"},"env"),", the one set in the job configuration file will be used."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"timeout")),(0,o.yg)("p",null,"The timeout for checkpoints. If the checkpoint cannot be completed within the timeout, a checkpoint failure will be triggered and the job will fail. If the ",(0,o.yg)("inlineCode",{parentName:"p"},"checkpoint.timeout")," parameter is configured in the job configuration file's ",(0,o.yg)("inlineCode",{parentName:"p"},"env"),", the one set in the job configuration file will be used."),(0,o.yg)("p",null,"Example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"seatunnel:\n    engine:\n        backup-count: 1\n        print-execution-info-interval: 10\n        slot-service:\n            dynamic-slot: true\n        checkpoint:\n            interval: 300000\n            timeout: 10000\n")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"checkpoint storage")),(0,o.yg)("p",null,"Checkpoints are a fault-tolerant recovery mechanism. This mechanism ensures that the program can recover on its own even if an exception occurs suddenly during operation. Checkpoints are triggered at regular intervals. Each time a checkpoint is performed, each task is required to report its own status information (such as which offset was read when reading from Kafka) to the checkpoint thread, which writes it to a distributed storage (or shared storage). When a task fails and is automatically fault-tolerant and restored, or when a previously suspended task is restored using the seatunnel.sh -r command, the status information of the corresponding job will be loaded from the checkpoint storage and the job will be restored based on this status information."),(0,o.yg)("p",null,"If the cluster has more than one node, the checkpoint storage must be a distributed storage or shared storage so that the task status information in the storage can be loaded on another node in case of a node failure."),(0,o.yg)("p",null,"For information about checkpoint storage, you can refer to ",(0,o.yg)("a",{parentName:"p",href:"/docs/seatunnel-engine/checkpoint-storage"},"Checkpoint Storage")),(0,o.yg)("h3",{id:"44-expiration-configuration-for-historical-jobs"},"4.4 Expiration Configuration For Historical Jobs"),(0,o.yg)("p",null,"The information of each completed job, such as status, counters, and error logs, is stored in the IMap object. As the number of running jobs increases, the memory usage will increase, and eventually, the memory will overflow. Therefore, you can adjust the ",(0,o.yg)("inlineCode",{parentName:"p"},"history-job-expire-minutes")," parameter to address this issue. The time unit for this parameter is minutes. The default value is 1440 minutes, which is one day."),(0,o.yg)("p",null,"Example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"seatunnel:\n  engine:\n    history-job-expire-minutes: 1440\n")),(0,o.yg)("h3",{id:"45-class-loader-cache-mode"},"4.5 Class Loader Cache Mode"),(0,o.yg)("p",null,"This configuration primarily addresses the issue of resource leakage caused by constantly creating and attempting to destroy the class loader.\nIf you encounter exceptions related to metaspace overflow, you can try enabling this configuration.\nTo reduce the frequency of class loader creation, after enabling this configuration, SeaTunnel will not attempt to release the corresponding class loader when a job is completed, allowing it to be used by subsequent jobs. This is more effective when the number of Source/Sink connectors used in the running job is not excessive.\nThe default value is false.\nExample"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"seatunnel:\n  engine:\n    classloader-cache-mode: true\n")),(0,o.yg)("h2",{id:"5-configure-the-seatunnel-engine-network-service"},"5. Configure The SeaTunnel Engine Network Service"),(0,o.yg)("p",null,"All SeaTunnel Engine network-related configurations are in the ",(0,o.yg)("inlineCode",{parentName:"p"},"hazelcast.yaml")," file."),(0,o.yg)("h3",{id:"51-cluster-name"},"5.1 Cluster Name"),(0,o.yg)("p",null,"The SeaTunnel Engine node uses the ",(0,o.yg)("inlineCode",{parentName:"p"},"cluster-name")," to determine if another node is in the same cluster as itself. If the cluster names of the two nodes are different, the SeaTunnel Engine will reject the service request."),(0,o.yg)("h3",{id:"52-network"},"5.2 Network"),(0,o.yg)("p",null,"Based on ",(0,o.yg)("a",{parentName:"p",href:"https://docs.hazelcast.com/imdg/4.1/clusters/discovery-mechanisms"},"Hazelcast"),", a SeaTunnel Engine cluster is a network composed of cluster members running the SeaTunnel Engine server. Cluster members automatically join together to form a cluster. This automatic joining occurs through various discovery mechanisms used by cluster members to detect each other."),(0,o.yg)("p",null,"Please note that once the cluster is formed, communication between cluster members always occurs via TCP/IP, regardless of the discovery mechanism used."),(0,o.yg)("p",null,"The SeaTunnel Engine utilizes the following discovery mechanisms:"),(0,o.yg)("h4",{id:"tcp"},"TCP"),(0,o.yg)("p",null,"You can configure the SeaTunnel Engine as a full TCP/IP cluster. For detailed configuration information, please refer to the ",(0,o.yg)("a",{parentName:"p",href:"/docs/seatunnel-engine/tcp"},"Discovering Members by TCP section"),"."),(0,o.yg)("p",null,"An example ",(0,o.yg)("inlineCode",{parentName:"p"},"hazelcast.yaml")," file is as follows:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"hazelcast:\n  cluster-name: seatunnel\n  network:\n    join:\n      tcp-ip:\n        enabled: true\n        member-list:\n          - hostname1\n    port:\n      auto-increment: false\n      port: 5801\n  properties:\n    hazelcast.logging.type: log4j2\n")),(0,o.yg)("p",null,"TCP is the recommended method for use in a standalone SeaTunnel Engine cluster."),(0,o.yg)("h2",{id:"alternatively-hazelcast-provides-several-other-service-discovery-methods-for-more-details-please-refer-to-hazelcast-network"},"Alternatively, Hazelcast provides several other service discovery methods. For more details, please refer to ",(0,o.yg)("a",{parentName:"h2",href:"https://docs.hazelcast.com/imdg/4.1/clusters/setting-up-clusters"},"Hazelcast Network")),(0,o.yg)("h2",{id:"sidebar_position-5"},"sidebar_position: 5"),(0,o.yg)("h3",{id:"53-imap-persistence-configuration"},"5.3 IMap Persistence Configuration"),(0,o.yg)("p",null,"In SeaTunnel, we use IMap (a distributed Map that enables the writing and reading of data across nodes and processes. For more information, please refer to ",(0,o.yg)("a",{parentName:"p",href:"https://docs.hazelcast.com/imdg/4.2/data-structures/map"},"hazelcast map"),") to store the status of each task and task, allowing us to recover tasks and achieve task fault tolerance in the event of a node failure."),(0,o.yg)("p",null,"By default, the information in Imap is only stored in memory. We can set the replica count for Imap data. For more details, please refer to (4.1 Backup count setting for data in Imap). If the replica count is set to 2, it means that each data will be stored in two different nodes simultaneously. In the event of a node failure, the data in Imap will be automatically replenished to the set replica count on other nodes. However, when all nodes are stopped, the data in Imap will be lost. When the cluster nodes are restarted, all previously running tasks will be marked as failed, and users will need to manually resume them using the seatunnel.sh -r command."),(0,o.yg)("p",null,"To address this issue, we can persist the data in Imap to an external storage such as HDFS or OSS. This way, even if all nodes are stopped, the data in Imap will not be lost. When the cluster nodes are restarted, all previously running tasks will be automatically restored."),(0,o.yg)("p",null,"The following describes how to use the MapStore persistence configuration. For more details, please refer to ",(0,o.yg)("a",{parentName:"p",href:"https://docs.hazelcast.com/imdg/4.2/data-structures/map"},"hazelcast map")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"type")),(0,o.yg)("p",null,"The type of IMap persistence, currently only supporting ",(0,o.yg)("inlineCode",{parentName:"p"},"hdfs"),"."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"namespace")),(0,o.yg)("p",null,"It is used to distinguish the storage location of different business data, such as the name of an OSS bucket."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"clusterName")),(0,o.yg)("p",null,"This parameter is mainly used for cluster isolation, allowing you to distinguish between different clusters, such as cluster1 and cluster2, and can also be used to distinguish different business data."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"fs.defaultFS")),(0,o.yg)("p",null,"We use the hdfs api to read and write files, so providing the hdfs configuration is required for using this storage."),(0,o.yg)("p",null,"If using HDFS, you can configure it as follows:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"map:\n    engine*:\n       map-store:\n         enabled: true\n         initial-mode: EAGER\n         factory-class-name: org.apache.seatunnel.engine.server.persistence.FileMapStoreFactory\n         properties:\n           type: hdfs\n           namespace: /tmp/seatunnel/imap\n           clusterName: seatunnel-cluster\n           storage.type: hdfs\n           fs.defaultFS: hdfs://localhost:9000\n")),(0,o.yg)("p",null,"If there is no HDFS and the cluster has only one node, you can configure it to use local files as follows:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"map:\n    engine*:\n       map-store:\n         enabled: true\n         initial-mode: EAGER\n         factory-class-name: org.apache.seatunnel.engine.server.persistence.FileMapStoreFactory\n         properties:\n           type: hdfs\n           namespace: /tmp/seatunnel/imap\n           clusterName: seatunnel-cluster\n           storage.type: hdfs\n           fs.defaultFS: file:///\n")),(0,o.yg)("p",null,"If using OSS, you can configure it as follows:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"map:\n    engine*:\n       map-store:\n         enabled: true\n         initial-mode: EAGER\n         factory-class-name: org.apache.seatunnel.engine.server.persistence.FileMapStoreFactory\n         properties:\n           type: hdfs\n           namespace: /tmp/seatunnel/imap\n           clusterName: seatunnel-cluster\n           storage.type: oss\n           block.size: block size(bytes)\n           oss.bucket: oss://bucket name/\n           fs.oss.accessKeyId: OSS access key id\n           fs.oss.accessKeySecret: OSS access key secret\n           fs.oss.endpoint: OSS endpoint\n           fs.oss.credentials.provider: org.apache.hadoop.fs.aliyun.oss.AliyunCredentialsProvider\n")),(0,o.yg)("h2",{id:"6-configure-the-seatunnel-engine-client"},"6. Configure The SeaTunnel Engine Client"),(0,o.yg)("p",null,"All SeaTunnel Engine client configurations are in the ",(0,o.yg)("inlineCode",{parentName:"p"},"hazelcast-client.yaml"),"."),(0,o.yg)("h3",{id:"61-cluster-name"},"6.1 cluster-name"),(0,o.yg)("p",null,"The client must have the same ",(0,o.yg)("inlineCode",{parentName:"p"},"cluster-name")," as the SeaTunnel Engine. Otherwise, the SeaTunnel Engine will reject the client's request."),(0,o.yg)("h3",{id:"62-network"},"6.2 network"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"cluster-members")),(0,o.yg)("p",null,"You need to add the addresses of all SeaTunnel Engine server nodes here."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"hazelcast-client:\n  cluster-name: seatunnel\n  properties:\n      hazelcast.logging.type: log4j2\n  network:\n    cluster-members:\n      - hostname1:5801\n")),(0,o.yg)("h2",{id:"7-start-the-seatunnel-engine-server-node"},"7. Start The SeaTunnel Engine Server Node"),(0,o.yg)("p",null,"It can be started with the ",(0,o.yg)("inlineCode",{parentName:"p"},"-d")," parameter through the daemon."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"mkdir -p $SEATUNNEL_HOME/logs\n./bin/seatunnel-cluster.sh -d\n")),(0,o.yg)("p",null,"The logs will be written to ",(0,o.yg)("inlineCode",{parentName:"p"},"$SEATUNNEL_HOME/logs/seatunnel-engine-server.log")),(0,o.yg)("h2",{id:"8-install-the-seatunnel-engine-client"},"8. Install The SeaTunnel Engine Client"),(0,o.yg)("p",null,"You only need to copy the ",(0,o.yg)("inlineCode",{parentName:"p"},"$SEATUNNEL_HOME")," directory on the SeaTunnel Engine node to the client node and configure ",(0,o.yg)("inlineCode",{parentName:"p"},"SEATUNNEL_HOME")," in the same way as the SeaTunnel Engine server node."),(0,o.yg)("h2",{id:"9-submit-and-manage-jobs"},"9. Submit And Manage Jobs"),(0,o.yg)("p",null,"Now that the cluster is deployed, you can complete the submission and management of jobs through the following tutorials: ",(0,o.yg)("a",{parentName:"p",href:"/docs/seatunnel-engine/user-command"},"Submit And Manage Jobs")))}d.isMDXComponent=!0}}]);