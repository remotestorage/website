import{_ as s,c as a,o as e,a4 as i}from"./chunks/framework.Bi9zwDUp.js";const E=JSON.parse('{"title":"Class: Access","titleTemplate":"remoteStorage.js","description":"","frontmatter":{},"headers":[],"relativePath":"rs.js/docs/api/access/classes/Access.md","filePath":"rs.js/docs/api/access/classes/Access.md"}'),t={name:"rs.js/docs/api/access/classes/Access.md"},c=i(`<h1 id="class-access" tabindex="-1">Class: Access <a class="header-anchor" href="#class-access" aria-label="Permalink to &quot;Class: Access&quot;">​</a></h1><p>This class is for requesting and managing access to modules/folders on the remote. It gets initialized as <code>remoteStorage.access</code>.</p><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="claim" tabindex="-1">claim() <a class="header-anchor" href="#claim" aria-label="Permalink to &quot;claim()&quot;">​</a></h3><blockquote><p><strong>claim</strong>(<code>scope</code>, <code>mode</code>): <code>void</code></p></blockquote><p>Claim access on a given scope with given mode.</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><p>• <strong>scope</strong>: <code>string</code></p><p>An access scope, such as <code>contacts</code> or <code>calendar</code></p><p>• <strong>mode</strong>: <code>AccessMode</code></p><p>Access mode. Either <code>r</code> for read-only or <code>rw</code> for read/write</p><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h4><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">remoteStorage.access.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">claim</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;contacts&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;r&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">remoteStorage.access.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">claim</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;pictures&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;rw&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><p>Claiming root access, meaning complete access to all files and folders of a storage, can be done using an asterisk for the scope:</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">remoteStorage.access.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">claim</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;*&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;rw&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h4 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p><a href="https://github.com/remotestorage/remotestorage.js/blob/65f5343823175e12058c01e23219a8cc9d34932b/src/access.ts#L73" target="_blank" rel="noreferrer">access.ts:73</a></p>`,19),o=[c];function r(l,n,h,d,p,k){return e(),a("div",null,o)}const m=s(t,[["render",r]]);export{E as __pageData,m as default};
