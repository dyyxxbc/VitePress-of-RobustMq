import{_ as a,c as n,a2 as e,o as p}from"./chunks/framework.BQmytedh.js";const i="/assets/doc-image9.DNd-2Sma.png",t="/assets/doc-image10.fdK7oYtW.png",l="/assets/doc-image11.CNAiFJn_.png",c="/assets/doc-image12.8rtDcVa7.png",r="/assets/doc-image13.D7R3x5DT.png",P=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"zh/贡献指南/GitHub 贡献指南.md","filePath":"zh/贡献指南/GitHub 贡献指南.md"}'),o={name:"zh/贡献指南/GitHub 贡献指南.md"};function d(h,s,u,m,g,_){return p(),n("div",null,s[0]||(s[0]=[e('<h2 id="_1、创建-issue" tabindex="-1">1、创建 ISSUE <a class="header-anchor" href="#_1、创建-issue" aria-label="Permalink to &quot;1、创建 ISSUE&quot;">​</a></h2><p>ISSUE 范围两类，需求和小的 Fixed，所以在标题层面，需要通过：RBIP-*和 MINOR 两个前缀来区分。</p><p>RBIP-*： 是标识有特性和功能添加，比如 RBIP-09，RBIP-10，后面的序号是递增的。 <img src="'+i+'" alt="image"></p><p>MINOR：标识是修复或者增加一些小的功能。则可以 MINOR：开头，接标题。 <img src="'+t+'" alt="image"></p><h2 id="_2、创建-pull-request" tabindex="-1">2、创建 Pull Request <a class="header-anchor" href="#_2、创建-pull-request" aria-label="Permalink to &quot;2、创建 Pull Request&quot;">​</a></h2><p>如果 PR 有关联的 ISSUE，必须在 PR 的内容中添加上：</p><p>close #issue_number close 是固定的前缀， #也是固定的前缀，issue_number 表示这个 PR 关联的 ISSUE 编号。比如：</p><p><img src="'+l+'" alt="image"> #297，#292 就是对应的 ISSUE 编号。</p><p>比如需要提交一个解决 ISSUE #297 的 PR，则 PR 内容需要包含</p><p>close #297 此时，当该 PR 被 MERGE 时，这个 ISSUE 会自动被关闭。PR 合并后，PR 和 ISSUE 效果如下：</p><p>PR： <img src="'+c+'" alt="image"></p><p>ISSUE： <img src="'+r+`" alt="image"></p><h2 id="_3、提交-pr-失败的原因" tabindex="-1">3、提交 PR 失败的原因 <a class="header-anchor" href="#_3、提交-pr-失败的原因" aria-label="Permalink to &quot;3、提交 PR 失败的原因&quot;">​</a></h2><h4 id="license-错误" tabindex="-1">License 错误 <a class="header-anchor" href="#license-错误" aria-label="Permalink to &quot;License 错误&quot;">​</a></h4><p>License checker / license-header-check (pull_request) 失败。 有的文件没加 License, 需要加一下,最好每次提交前执行下检查命令.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>cargo install hawkeye</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 当前项目下执行, 检测有哪些文件没有加 License</span></span>
<span class="line"><span>hawkeye check</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 自动没每个代码文件加上 License</span></span>
<span class="line"><span>hawkeye format</span></span></code></pre></div><h4 id="标题格式错误" tabindex="-1">标题格式错误 <a class="header-anchor" href="#标题格式错误" aria-label="Permalink to &quot;标题格式错误&quot;">​</a></h4><p>PR Title Checker / check (pull_request_target) 这个失败是 PR 的标题格式错误</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>前缀: 标题</span></span>
<span class="line"><span>前缀有这些选项：feat|fix|test|refactor|chore|style|docs|perf|build|ci|revert</span></span>
<span class="line"><span></span></span>
<span class="line"><span>feat: 新功能（feature）</span></span>
<span class="line"><span>例如：feat: Compatible with Rocksdb</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fix: 修复 bug</span></span>
<span class="line"><span>docs: 文档变更</span></span>
<span class="line"><span>style: 代码风格变动（不影响代码逻辑）,用于提交仅格式化、标点符号、空白等不影响代码运行的变更。</span></span>
<span class="line"><span>refactor: 代码重构（既不是新增功能也不是修复bug的代码更改）</span></span>
<span class="line"><span>perf: 性能优化</span></span>
<span class="line"><span>test: 添加或修改测试</span></span>
<span class="line"><span>chore: 杂项（构建过程或辅助工具的变动）</span></span>
<span class="line"><span>build: 构建系统或外部依赖项的变更</span></span>
<span class="line"><span>ci: 持续集成配置的变更,配置文件和脚本的修改。</span></span>
<span class="line"><span>revert: 回滚</span></span></code></pre></div>`,19)]))}const f=a(o,[["render",d]]);export{P as __pageData,f as default};
