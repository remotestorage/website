import{_ as n,c as o,o as s,a4 as r,j as e,a as t}from"./chunks/framework.Bi9zwDUp.js";const v=JSON.parse('{"title":"Handling events","description":"","frontmatter":{},"headers":[],"relativePath":"rs.js/docs/getting-started/events.md","filePath":"rs.js/docs/getting-started/events.md"}'),a={name:"rs.js/docs/getting-started/events.md"},d=r(`<h1 id="handling-events" tabindex="-1">Handling events <a class="header-anchor" href="#handling-events" aria-label="Permalink to &quot;Handling events&quot;">​</a></h1><p>In order to get informed about users connecting their storage, data being transferred, the library going into offline mode, errors being thrown, and other such things, you can listen to the events emitted by the <code>RemoteStorage</code> instance, as well as <code>BaseClient</code> instances.</p><p>Simply register your event handler functions using the <code>.on()</code> method, like so:</p><pre><code>remoteStorage.on(&#39;connected&#39;, () =&gt; {
  const userAddress = remoteStorage.remote.userAddress;
  console.debug(\`\${userAddress} connected their remote storage.\`);
})

remoteStorage.on(&#39;network-offline&#39;, () =&gt; {
  console.debug(\`We&#39;re offline now.\`);
})

remoteStorage.on(&#39;network-online&#39;, () =&gt; {
  console.debug(\`Hooray, we&#39;re back online.\`);
})
</code></pre><p>Check out the <code>RemoteStorage API doc&lt;/js-api/remotestorage&gt;</code>{.interpreted-text role=&quot;doc&quot;} for a complete list of events and when they&#39;re emitted.</p>`,5),c=e("p",null,[t("Also check out "),e("em",null,"Change events"),t(" in the "),e("code",{class:"interpreted-text",role:"doc"},"BaseClient API doc</js-api/base-client>"),t(", which you can use to handle incoming data and changes from the remote storage server.")],-1),i=[d,c];function l(g,h,m,_,u,p){return s(),o("div",null,i)}const b=n(a,[["render",l]]);export{v as __pageData,b as default};
