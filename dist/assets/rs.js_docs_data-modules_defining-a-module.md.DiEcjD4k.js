import{_ as s,c as i,o as a,a4 as e}from"./chunks/framework.Bi9zwDUp.js";const g=JSON.parse('{"title":"Defining a module","titleTemplate":"remoteStorage.js","description":"","frontmatter":{},"headers":[],"relativePath":"rs.js/docs/data-modules/defining-a-module.md","filePath":"rs.js/docs/data-modules/defining-a-module.md"}'),n={name:"rs.js/docs/data-modules/defining-a-module.md"},t=e(`<h1 id="defining-a-module" tabindex="-1">Defining a module <a class="header-anchor" href="#defining-a-module" aria-label="Permalink to &quot;Defining a module&quot;">​</a></h1><p>A data module is just a JavaScript object containing a module name and a builder function.</p><p>The builder function receives two <a href="./../api/baseclient/classes/BaseClient.html">BaseClient</a> instances when loaded: one for private data stored in <code>/my-module-name/</code> and one for public data stored in <code>/public/my-module-name/</code>. A module must return an object, with the properties and functions to be used in an app as <code>exports</code>:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Bookmarks</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;bookmarks&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">builder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">privateClient</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">publicClient</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    exports: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      addBookmark</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}};</span></span></code></pre></div><p>You can then load the module into your <a href="./../api/remotestorage/classes/RemoteStorage.html">RemoteStorage</a> instance, either on initialization or later using the <code>addModule()</code> function:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> remoteStorage</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> RemoteStorage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ modules: [ Bookmarks ] });</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// or later:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">remoteStorage.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addModule</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Bookmarks);</span></span></code></pre></div><p>The module will then be accessible on the instance by its name, allowing you to call the functions and properties that it exports:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">remoteStorage.bookmarks.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addBookmark</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre></div>`,8),l=[t];function p(h,o,d,k,r,c){return a(),i("div",null,l)}const u=s(n,[["render",p]]);export{g as __pageData,u as default};