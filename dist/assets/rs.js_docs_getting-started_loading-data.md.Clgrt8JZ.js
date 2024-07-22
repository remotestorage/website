import{_ as e,c as t,o as a,a4 as o}from"./chunks/framework.Bi9zwDUp.js";const m=JSON.parse('{"title":"Loading data on app launch/startup","titleTemplate":"remoteStorage.js","description":"","frontmatter":{},"headers":[],"relativePath":"rs.js/docs/getting-started/loading-data.md","filePath":"rs.js/docs/getting-started/loading-data.md"}'),n={name:"rs.js/docs/getting-started/loading-data.md"},s=o('<h1 id="loading-data-on-app-launch-startup" tabindex="-1">Loading data on app launch/startup <a class="header-anchor" href="#loading-data-on-app-launch-startup" aria-label="Permalink to &quot;Loading data on app launch/startup&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">TODO</p><p>Unfinished doc</p></div><p>In order to load data into memory during the startup of your app, usually by creating your JavaScript framework&#39;s analog of model instances, there are generally two different approaches with remoteStorage.js:</p><h2 id="option-1-relying-solely-on-events" tabindex="-1">Option 1: Relying solely on events <a class="header-anchor" href="#option-1-relying-solely-on-events" aria-label="Permalink to &quot;Option 1: Relying solely on events&quot;">​</a></h2><p>The first approach is to handle <code>local</code> events, then <code>remote</code> events</p><h2 id="option-2-use-getall-then-update-via-events" tabindex="-1">Option 2: Use getAll(), then update via events <a class="header-anchor" href="#option-2-use-getall-then-update-via-events" aria-label="Permalink to &quot;Option 2: Use getAll(), then update via events&quot;">​</a></h2><p>The second approach is to use the getAll function to load all relevant documents on startup, and then use <code>remote</code> events to add, update, and remove items in memory when updates are being received from the remote storage.</p>',7),r=[s];function d(i,l,p,c,h,u){return a(),t("div",null,r)}const _=e(n,[["render",d]]);export{m as __pageData,_ as default};