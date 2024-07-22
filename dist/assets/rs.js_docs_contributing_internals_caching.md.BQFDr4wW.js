import{_ as e,c as t,o as a,a4 as r}from"./chunks/framework.Bi9zwDUp.js";const _=JSON.parse('{"title":"Caching","titleTemplate":"remoteStorage.js","description":"","frontmatter":{},"headers":[],"relativePath":"rs.js/docs/contributing/internals/caching.md","filePath":"rs.js/docs/contributing/internals/caching.md"}'),s={name:"rs.js/docs/contributing/internals/caching.md"},n=r('<h1 id="caching" tabindex="-1">Caching <a class="header-anchor" href="#caching" aria-label="Permalink to &quot;Caching&quot;">​</a></h1><p>The caching strategies are stored in <code>remoteStorage.caching._rootPaths</code>. For instance, on <a href="https://myfavoritedrinks.remotestorage.io/" target="_blank" rel="noreferrer">https://myfavoritedrinks.remotestorage.io/</a>, it has the value <code>{ /myfavoritedrinks/: &quot;ALL&quot; }</code>.</p><p>These rootPaths are not stored in localStorage. If you refresh the page, it is up to the app to set all caching strategies again during the page load.</p><p>The effect of the caching strategy is basically achieved through three paths:</p><ol><li>Setting caching strategy &#39;ALL&#39; for a path creates an empty node for that path, unless it already exists.</li><li>The sync process will then do a GET request, and create new nodes under any folder with an &#39;ALL&#39; strategy, when that folder is fetched.</li><li>The sync process will create a new task for any node under an &#39;ALL&#39; strategy, unless a task already exists for one of its ancestors.</li></ol><p>The result is all paths with an explicit &#39;ALL&#39; strategy will get fetched, and if they are folders, then in the next round, all its children will also be fetched, etcetera.</p>',6),o=[n];function i(c,h,l,d,g,p){return a(),t("div",null,o)}const u=e(s,[["render",i]]);export{_ as __pageData,u as default};