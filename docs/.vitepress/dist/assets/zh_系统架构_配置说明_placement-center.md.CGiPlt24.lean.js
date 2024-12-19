import{_ as s,c as n,a2 as e,o as p}from"./chunks/framework.BQmytedh.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"zh/系统架构/配置说明/placement-center.md","filePath":"zh/系统架构/配置说明/placement-center.md"}'),t={name:"zh/系统架构/配置说明/placement-center.md"};function l(i,a,c,o,r,d){return p(),n("div",null,a[0]||(a[0]=[e(`<h2 id="配置说明" tabindex="-1">配置说明 <a class="header-anchor" href="#配置说明" aria-label="Permalink to &quot;配置说明&quot;">​</a></h2><h3 id="集群名称" tabindex="-1">集群名称 <a class="header-anchor" href="#集群名称" aria-label="Permalink to &quot;集群名称&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 定义集群名称，用于标识当前集群, 默认名字placement-center</span></span>
<span class="line"><span>cluster_name = &quot;placement-test&quot;</span></span></code></pre></div><h3 id="节点相关配置" tabindex="-1">节点相关配置 <a class="header-anchor" href="#节点相关配置" aria-label="Permalink to &quot;节点相关配置&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[node]</span></span>
<span class="line"><span># 定义节点ID，用于唯一标识当前节点，默认1</span></span>
<span class="line"><span>node_id = 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 定义节点的网络地址，默认127.0.0.1</span></span>
<span class="line"><span>addr = &quot;127.0.0.1&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 定义节点列表，包含节点ID和对应的gRPC地址</span></span>
<span class="line"><span>nodes = { 1 = &quot;127.0.0.1:1228&quot; }</span></span></code></pre></div><h3 id="网络相关配置" tabindex="-1">网络相关配置 <a class="header-anchor" href="#网络相关配置" aria-label="Permalink to &quot;网络相关配置&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[network]</span></span>
<span class="line"><span># 定义节点的gRPC服务端口</span></span>
<span class="line"><span>grpc_port = 1228</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 定义节点的HTTP服务端口，用于获取集群状态,节点等信息</span></span>
<span class="line"><span>http_port = 1227</span></span></code></pre></div><h3 id="进程相关参数" tabindex="-1">进程相关参数 <a class="header-anchor" href="#进程相关参数" aria-label="Permalink to &quot;进程相关参数&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[system]</span></span>
<span class="line"><span># 定义运行时线程数量 runtime_work_threads * 2</span></span>
<span class="line"><span>runtime_work_threads = 100</span></span></code></pre></div><h3 id="broker-节点心跳检测相关参数" tabindex="-1">Broker 节点心跳检测相关参数 <a class="header-anchor" href="#broker-节点心跳检测相关参数" aria-label="Permalink to &quot;Broker 节点心跳检测相关参数&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[heartbeat]</span></span>
<span class="line"><span># 定义心跳超时时间，单位为毫秒，用于检测节点故障，默认30000</span></span>
<span class="line"><span>heartbeat_timeout_ms = 30000</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 定义心跳检查时间间隔，单位为毫秒，用于定期检查节点状态，默认1000</span></span>
<span class="line"><span>heartbeat_check_time_ms = 1000</span></span></code></pre></div><h3 id="rocksdb-相关配置" tabindex="-1">RocksDB 相关配置 <a class="header-anchor" href="#rocksdb-相关配置" aria-label="Permalink to &quot;RocksDB 相关配置&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[rocksdb]</span></span>
<span class="line"><span># 定义数据存储路径，rocksdb</span></span>
<span class="line"><span>data_path = &quot;/tmp/robust/placement-center/data&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 配置RocksDB数据库的最大打开文件数,支持大量并发读取操作，默认10000</span></span>
<span class="line"><span>max_open_files = 10000</span></span></code></pre></div><h3 id="日志配置-指定日志路径和配置文件" tabindex="-1">日志配置，指定日志路径和配置文件 <a class="header-anchor" href="#日志配置-指定日志路径和配置文件" aria-label="Permalink to &quot;日志配置，指定日志路径和配置文件&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[log]</span></span>
<span class="line"><span># 日志配置文件路径，默认./config/log4rs.yaml</span></span>
<span class="line"><span>log_config = &quot;./config/log4rs.yaml&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 日志文件存储目录，默认目录./logs/placement-center</span></span>
<span class="line"><span>log_path = &quot;/tmp/robust/placement-center/logs&quot;</span></span></code></pre></div>`,15)]))}const b=s(t,[["render",l]]);export{u as __pageData,b as default};
