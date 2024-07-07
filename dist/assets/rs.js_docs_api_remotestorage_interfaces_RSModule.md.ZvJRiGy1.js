import{_ as s,c as a,o as i,a4 as e}from"./chunks/framework.Bi9zwDUp.js";const g=JSON.parse('{"title":"Interface: RSModule","description":"","frontmatter":{},"headers":[],"relativePath":"rs.js/docs/api/remotestorage/interfaces/RSModule.md","filePath":"rs.js/docs/api/remotestorage/interfaces/RSModule.md"}'),t={name:"rs.js/docs/api/remotestorage/interfaces/RSModule.md"},n=e(`<h1 id="interface-rsmodule" tabindex="-1">Interface: RSModule <a class="header-anchor" href="#interface-rsmodule" aria-label="Permalink to &quot;Interface: RSModule&quot;">​</a></h1><p>Represents a data module</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;examples&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  builder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">privateClient</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">publicClient</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      exports: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        addItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">          // Generate a random ID/path</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">          const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> path</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Array</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)].</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> String.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fromCharCode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Math.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">floor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Math.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">random</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 95</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 32</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">join</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">          // Store the object, and ensure it conforms to the JSON Schema</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">          // type \`example-item\`</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          privateClient.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">storeObject</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;example-item&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, path, item);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="builder" tabindex="-1">builder() <a class="header-anchor" href="#builder" aria-label="Permalink to &quot;builder()&quot;">​</a></h3><blockquote><p><strong>builder</strong>: (<code>privateClient</code>, <code>publicClient</code>) =&gt; <code>object</code></p></blockquote><p>A module builder function, which defines the actual module</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><p>• <strong>privateClient</strong>: <a href="./../../baseclient/classes/BaseClient.html"><code>BaseClient</code></a></p><p>• <strong>publicClient</strong>: <a href="./../../baseclient/classes/BaseClient.html"><code>BaseClient</code></a></p><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>object</code></p><h5 id="exports" tabindex="-1">exports <a class="header-anchor" href="#exports" aria-label="Permalink to &quot;exports&quot;">​</a></h5><blockquote><p><strong>exports</strong>: <code>object</code></p></blockquote><h6 id="index-signature" tabindex="-1">Index signature <a class="header-anchor" href="#index-signature" aria-label="Permalink to &quot;Index signature&quot;">​</a></h6><p>[<code>key</code>: <code>string</code>]: <code>any</code></p><h4 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p><a href="https://github.com/remotestorage/remotestorage.js/blob/3de8d4bbce43ac52d4397495ab2bcfd7d34f7308/src/remotestorage.ts#L91" target="_blank" rel="noreferrer">remotestorage.ts:91</a></p><hr><h3 id="name" tabindex="-1">name <a class="header-anchor" href="#name" aria-label="Permalink to &quot;name&quot;">​</a></h3><blockquote><p><strong>name</strong>: <code>string</code></p></blockquote><p>The module&#39;s name, which is also the category (i.e. base folder) for document URLs on the remote storage</p><h4 id="source-1" tabindex="-1">Source <a class="header-anchor" href="#source-1" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p><a href="https://github.com/remotestorage/remotestorage.js/blob/3de8d4bbce43ac52d4397495ab2bcfd7d34f7308/src/remotestorage.ts#L87" target="_blank" rel="noreferrer">remotestorage.ts:87</a></p>`,25),h=[n];function l(r,p,k,o,d,c){return i(),a("div",null,h)}const u=s(t,[["render",l]]);export{g as __pageData,u as default};
