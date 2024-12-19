import{_ as a,c as n,a2 as p,o as e}from"./chunks/framework.BQmytedh.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"zh/系统架构/配置说明/mqtt-server.md","filePath":"zh/系统架构/配置说明/mqtt-server.md"}'),l={name:"zh/系统架构/配置说明/mqtt-server.md"};function t(i,s,c,o,r,d){return e(),n("div",null,s[0]||(s[0]=[p(`<h2 id="配置说明" tabindex="-1">配置说明 <a class="header-anchor" href="#配置说明" aria-label="Permalink to &quot;配置说明&quot;">​</a></h2><h3 id="基础配置" tabindex="-1">基础配置 <a class="header-anchor" href="#基础配置" aria-label="Permalink to &quot;基础配置&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 定义MQTT Broker集群的名称，用于标识和管理</span></span>
<span class="line"><span>cluster_name = &quot;mqtt-broker&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 设置当前Broker的唯一标识符，用于集群内区分不同的Broker节点</span></span>
<span class="line"><span>broker_id = 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span># gRPC服务的端口号，默认9981</span></span>
<span class="line"><span>grpc_port = 9981</span></span>
<span class="line"><span></span></span>
<span class="line"><span># HTTP服务的端口号，默认9982，提供可以查询当前运行状态</span></span>
<span class="line"><span>http_port = 9982</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 元数据服务地址,可以配置多个</span></span>
<span class="line"><span>placement_center = [&quot;127.0.0.1:1228&quot;]</span></span></code></pre></div><h3 id="网络配置" tabindex="-1">网络配置 <a class="header-anchor" href="#网络配置" aria-label="Permalink to &quot;网络配置&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[network]</span></span>
<span class="line"><span># MQTT协议, 默认1883和8883</span></span>
<span class="line"><span>tcp_port = 1883</span></span>
<span class="line"><span>tcps_port = 8883</span></span>
<span class="line"><span></span></span>
<span class="line"><span># WebSocket协议, 默认8083和8084</span></span>
<span class="line"><span>websocket_port = 8083</span></span>
<span class="line"><span>websockets_port = 8084</span></span>
<span class="line"><span></span></span>
<span class="line"><span># quid udp协议, 默认908s</span></span>
<span class="line"><span>quic_port = 9083</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 设置tls安全通信的证书和密钥, 默认无证书</span></span>
<span class="line"><span>tls_cert = &quot;./config/example/certs/cert.pem&quot;</span></span>
<span class="line"><span>tls_key = &quot;./config/example/certs/key.pem&quot;</span></span></code></pre></div><h3 id="tcp协议相关配置" tabindex="-1">TCP协议相关配置 <a class="header-anchor" href="#tcp协议相关配置" aria-label="Permalink to &quot;TCP协议相关配置&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[tcp_thread]</span></span>
<span class="line"><span># 接受客户端连接的线程数量, 默认1</span></span>
<span class="line"><span>accept_thread_num = 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 处理客户端请求的线程数量, 默认1</span></span>
<span class="line"><span>handler_thread_num = 10</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 发送响应给客户端的线程数量, 默认1</span></span>
<span class="line"><span>response_thread_num = 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 最大连接数限制, 默认1000</span></span>
<span class="line"><span>max_connection_num = 1000</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 请求队列大小, 默认2000</span></span>
<span class="line"><span>request_queue_size = 2000</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 响应队列大小, 默认2000</span></span>
<span class="line"><span>response_queue_size = 2000</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 尝试获取锁的最大次数, 默认30</span></span>
<span class="line"><span>lock_max_try_mut_times = 30</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 尝试获取锁之间的时间间隔（毫秒）, 默认50</span></span>
<span class="line"><span>lock_try_mut_sleep_time_ms = 50</span></span></code></pre></div><h3 id="系统配置" tabindex="-1">系统配置 <a class="header-anchor" href="#系统配置" aria-label="Permalink to &quot;系统配置&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[system]</span></span>
<span class="line"><span># 运行时工作线程数, 默认16</span></span>
<span class="line"><span>runtime_worker_threads = 128</span></span>
<span class="line"><span># 默认用户名</span></span>
<span class="line"><span>default_user = &quot;admin&quot;</span></span>
<span class="line"><span># 默认robustmq</span></span>
<span class="line"><span>default_password = &quot;pwd123&quot;</span></span></code></pre></div><h3 id="存储配置" tabindex="-1">存储配置 <a class="header-anchor" href="#存储配置" aria-label="Permalink to &quot;存储配置&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[storage]</span></span>
<span class="line"><span># 存储类型, 默认为memory, 支持memory, mysql</span></span>
<span class="line"><span>storage_type = &quot;memory&quot;</span></span>
<span class="line"><span>mysql_addr = &quot;&quot;</span></span></code></pre></div><h3 id="认证配置" tabindex="-1">认证配置 <a class="header-anchor" href="#认证配置" aria-label="Permalink to &quot;认证配置&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[auth]</span></span>
<span class="line"><span>storage_type = &quot;placement&quot;</span></span>
<span class="line"><span>journal_addr = &quot;&quot;</span></span>
<span class="line"><span>mysql_addr = &quot;&quot;</span></span></code></pre></div><h3 id="日志配置" tabindex="-1">日志配置 <a class="header-anchor" href="#日志配置" aria-label="Permalink to &quot;日志配置&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[log]</span></span>
<span class="line"><span># 日志配置文件路径, 默认./config/log4rs.yaml</span></span>
<span class="line"><span>log_config = &quot;./config/log4rs.yaml&quot;</span></span>
<span class="line"><span># 日志文件保存路径, 当前./logs目录</span></span>
<span class="line"><span>log_path = &quot;/tmp/robust/mqtt-broker/logs&quot;</span></span></code></pre></div>`,15)]))}const m=a(l,[["render",t]]);export{h as __pageData,m as default};
