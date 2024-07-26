import{_ as o,c as r,o as s,a5 as a,j as e,a as t}from"./chunks/framework.CTkMpXT2.js";const i="/assets/webfinger-connect.D9I3dd-i.png",n="/assets/oauth-dialog.qL5q4qP8.png",c="/assets/screenshot-folder-description.CYwttkp4.png",E=JSON.parse('{"title":"The remoteStorage Protocol","description":"","frontmatter":{},"headers":[],"relativePath":"protocol.md","filePath":"protocol.md"}'),h={name:"protocol.md"},l=a('<h1 id="the-remotestorage-protocol" tabindex="-1">The remoteStorage Protocol <a class="header-anchor" href="#the-remotestorage-protocol" aria-label="Permalink to &quot;The remoteStorage Protocol&quot;">​</a></h1><p>remoteStorage is a creative combination of existing protocols and standards. It aims to re-use existing technologies as much as possible, adding just a small layer of standardization on top to facilitate its usage for per-user storage with simple permissions and offline-capable data sync.</p><h2 id="discovery-webfinger" tabindex="-1">Discovery: <a href="https://webfinger.net/" target="_blank" rel="noreferrer">WebFinger</a> <a class="header-anchor" href="#discovery-webfinger" aria-label="Permalink to &quot;Discovery: [WebFinger](https://webfinger.net/)&quot;">​</a></h2><p>In order for apps to know where to ask for permissions and sync data, you give them a user address, which looks the same as an email or XMPP address (and could be one, too). With that address, apps retrieve storage information for the username on that domain/host.</p>',4),p=e("p",null,[e("img",{src:i,role:"presentation",style:{height:"200px",padding:"20px"}})],-1),d=a('<p><a href="https://client.webfinger.net/lookup?resource=tony%405apps.com" target="_blank" rel="noreferrer">Check out a live example for a 5apps user</a>.</p><h2 id="authorization-oauth-2-0" tabindex="-1">Authorization: <a href="https://oauth.net/" target="_blank" rel="noreferrer">OAuth 2.0</a> <a class="header-anchor" href="#authorization-oauth-2-0" aria-label="Permalink to &quot;Authorization: [OAuth 2.0](https://oauth.net/)&quot;">​</a></h2><p>User data is scoped by so-called categories, which are essentially base directories, for which you can give either read-only or read/write permission. Apps will use OAuth scopes to ask for access to one or more categories.</p><p>In this example screenshot, <a href="https://litewrite.net/" target="_blank" rel="noreferrer">Litewrite</a> is asking for read/write access to the &quot;documents&quot; category, using the OAuth scope <code>documents:rw</code>. If you allow access, the app will retrieve a bearer token, with which it can read and write to your storage, until you revoke that access on your server.</p>',4),_=e("p",null,[e("img",{src:n,role:"presentation",style:{height:"340px",padding:"20px"}})],-1),f=e("h2",{id:"data-storage-sync-http-rest",tabindex:"-1"},[t("Data Storage & Sync: "),e("a",{href:"https://en.wikipedia.org/wiki/Representational_state_transfer",target:"_blank",rel:"noreferrer"},"HTTP REST"),t(),e("a",{class:"header-anchor",href:"#data-storage-sync-http-rest","aria-label":'Permalink to "Data Storage & Sync: [HTTP REST](https://en.wikipedia.org/wiki/Representational_state_transfer)"'},"​")],-1),g=e("p",null,"remoteStorage defines a simple key/value store for apps to save and retrieve data. The basic operations are GET/PUT/DELETE requests for specific files/documents.",-1),u=e("p",null,"In addition to that – and the only special feature aside from plain HTTP – there are directory listings, formatted as JSON-LD. They contain both the content type and size, as well as ETags, which can be used to implement sync mechanisms. The files and listings themselves also carry ETag headers for sync/caching and conditional requests.",-1),m=e("p",null,[e("img",{src:c,role:"presentation",style:{height:"340px",padding:"20px"}})],-1),b=e("h2",{id:"specification",tabindex:"-1"},[t("Specification "),e("a",{class:"header-anchor",href:"#specification","aria-label":'Permalink to "Specification"'},"​")],-1),y=e("p",null,[t("Visit the "),e("a",{href:"https://datatracker.ietf.org/doc/html/draft-dejong-remotestorage",target:"_blank",rel:"noreferrer"},"IETF Datatracker"),t(" or "),e("a",{href:"https://github.com/remotestorage/spec",target:"_blank",rel:"noreferrer"},"GitHub"),t(" for the full protocol specification.")],-1),T=[l,p,d,_,f,g,u,m,b,y];function k(w,S,P,x,v,q){return s(),r("div",null,T)}const D=o(h,[["render",k]]);export{E as __pageData,D as default};
