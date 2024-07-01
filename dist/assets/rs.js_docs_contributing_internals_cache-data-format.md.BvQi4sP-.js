import{_ as e,c as t,o as n,a4 as o}from"./chunks/framework.Bi9zwDUp.js";const f=JSON.parse('{"title":"Data format of the local cache","description":"","frontmatter":{},"headers":[],"relativePath":"rs.js/docs/contributing/internals/cache-data-format.md","filePath":"rs.js/docs/contributing/internals/cache-data-format.md"}'),a={name:"rs.js/docs/contributing/internals/cache-data-format.md"},s=o(`<h1 id="data-format-of-the-local-cache" tabindex="-1">Data format of the local cache <a class="header-anchor" href="#data-format-of-the-local-cache" aria-label="Permalink to &quot;Data format of the local cache&quot;">​</a></h1><p>This section describes the structure and concepts of the local cache.</p><h2 id="storing-up-to-4-revisions-of-each-node" tabindex="-1">Storing up to 4 revisions of each node <a class="header-anchor" href="#storing-up-to-4-revisions-of-each-node" aria-label="Permalink to &quot;Storing up to 4 revisions of each node&quot;">​</a></h2><p>Each cache node represents the versioning state of either one document or one folder. The versioning state is represented by one or more of the <code>common</code>, <code>local</code>, <code>remote</code>, and <code>push</code> revisions. Local changes are stored in <code>local</code>, and in <code>push</code> while an outgoing request is active. Remote changes that have either not been fetched yet, or have not been merged with local changes yet, are stored in <code>remote</code>.</p><h2 id="automerge" tabindex="-1">autoMerge <a class="header-anchor" href="#automerge" aria-label="Permalink to &quot;autoMerge&quot;">​</a></h2><p>The <code>sync.autoMerge</code> function will try to merge local and remote changes into the common revision of a node. It may emit change events with a &#39;conflict&#39; origin to indicate that an unpushed local change was overruled by a remote change.</p><p>When consulting the base client about the current value of a node, you will get either its &#39;local&#39; revision if it exists, or its &#39;common&#39; revision otherwise. The following are versioning tree diagrams of how local and remote revisions of a node can interact:</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>//in sync:</span></span>
<span class="line"><span>1)  . . . . [common]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//dirty:</span></span>
<span class="line"><span>2)  . . . . [common]</span></span>
<span class="line"><span>                \\</span></span>
<span class="line"><span>                 \\ . . . . [remote]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//local change:</span></span>
<span class="line"><span>3)  . . . . [common] . . . . [local]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//conflict (should autoMerge):</span></span>
<span class="line"><span>4) . . . . [common] . . . . [local]</span></span>
<span class="line"><span>               \\</span></span>
<span class="line"><span>                \\ . . . . [remote]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//pushing:</span></span>
<span class="line"><span>5)  . . . . [common] . . . . [push] . . . . [local]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//pushing, and known dirty (should abort the push, or just wait for the conflict to occur):</span></span>
<span class="line"><span>6)  . . . . [common] . . . . [push] . . . . [local]</span></span>
<span class="line"><span>                \\</span></span>
<span class="line"><span>                 \\ . . . . [remote]</span></span></code></pre></div><p>Each of <code>local</code>, <code>push</code>, <code>remote</code>, and <code>common</code> can have have following properties:</p><ul><li>for documents: <ul><li>body</li><li>contentType</li><li>contentLength</li><li>revision</li><li>timestamp</li></ul></li><li>for folders: <ul><li>itemsMap (itemName -&gt; true, or itemName -&gt; false to indicate an unmerged deletion)</li><li>revision</li><li>timestamp</li></ul></li></ul><p>NB: The timestamp represents the last sync time, not the last modified time. It is used by the <code>isOutdated</code> function in <code>src/cachinglayer.js</code> to determine if the data needs to be fetched from remote again, or can be served from cache.</p><h2 id="keep-revert-conflict-resolution" tabindex="-1">&quot;keep/revert&quot; conflict resolution <a class="header-anchor" href="#keep-revert-conflict-resolution" aria-label="Permalink to &quot;\\&quot;keep/revert\\&quot; conflict resolution&quot;">​</a></h2><p>RemoteStorage implements a hub-and-spokes versioning system, with one central remoteStorage server (the hub) and any number of clients (the spokes). The clients will typically be unhosted web apps based on this JS lib (remotestorage.js), but they don&#39;t have to be; they can also be based on other client implementations, they can be hosted web apps, desktop apps, native smartphone apps, etcetera. New versions of subtrees always start at one of these clients. They are then sent to the server, and from there to all the other clients. The server assigns the revision numbers and sends them to the initiating client using HTTP ETag response headers in response to PUT requests. remotestorage.js is a library that attempts to make it easy to build remoteStorage applications, by hiding both the push/pull synchronization and the version merging from the app developer. Versioning conflicts between the local client and the remote server are initially resolved as a &#39;remote wins&#39;, to which the client code may respond with an explicit revert (putting the old, local version back), any type of custom merge (putting the result of the merge in place), or by doing nothing (&quot;keep&quot;), and leaving the remote result in place. This system is called &quot;keep/revert&quot;, since the library takes a pro-active action (&#39;remote wins&#39;), which the app can then either keep, or revert.</p><p>Sync is tree-based: syncing a node is equivalent to syncing all its children. There are two parts at play, that interact: transporting the diffs to and from the remote server, and merging the local and remote versions into one common version. Each document starts out as non-existing in both its local and remote versions. From there on, it can be created, updated, and deleted any number of times throughout its history, both locally and remotely. If at some point in time it either does not exist neither locally nor remotely, or its body and content-type are the same byte-for-byte on both sides, then the two stores are in agreement. If the document exists in only one of the stores, or the document&#39;s body or its content-type differs between the two stores, then the document is in conflict.</p><p>The library is always aware of the latest local version, but it may or may not be aware of the latest remote version, and therefore of whether a conflict or agreement exists for the document. Likewise, the server is not necessarily aware of the latest local version, if there are changes that haven&#39;t been pushed out yet; nor does it care, though, since the server does not get involved in conflict resolution. It only serializes conditional updates from all clients into one canonical versioning history.</p><p>The lack of sync between client and server can be fixed by doing a GET, PUT, or DELETE. A GET will return the current remote version; a conditional PUT or DELETE will push out the change, while at the same time checking if any unfetched remote changes exist. If they do, then the push will fail, and the library will fetch instead. After this, the library has a latest known common revision of the document, possibly a local version if it was changed since then, and possibly a remote version if it was changed since then, but the newer version has yet to be retrieved.</p><p>Before resolving a conflict, both revision histories are squashed. This means that creating+deleting a document becomes a noop, and deleting+creating, or updating it multiple times, becomes one single update. Then, if the document was changed in different ways locally and remotely, it goes into conflict state; if it was changed only locally or only remotely, then the change is automatically accepted by the other store (whether client to server or server to client). Note that in the case of a successful conditional push request, this will already have happened.</p><p>Conflicts that are discovered by a document fetch, fire their &#39;keep/revert&#39; event immediately. Conflicts that are discovered through a parent folder fetch, or through a conditional push, fire their &#39;keep/revert&#39; event after the new remote version is fetched.</p><p>The library&#39;s conflict resolution strategy is &#39;remote wins&#39;. This means that the module will receive them in the form of change events with origin &#39;conflict&#39;. When receiving such a change event, the module can still decide to revert it explicitly.</p><p>As noted before, merging a subtree is done by merging each document that exists within that subtree, in either or both stores. When the library fetches a folder listing, it can detect a remote child change, which then may or may not result in a conflict. When a folder listing comes in, which has changed since the last time it was retrieved, four types of information may be discovered:</p><ul><li>which of the documents directly within the folder changed their remote revision since the last check (new ETag on a document item)</li><li>in which previously empty subtrees at least one document was created (new folder item)</li><li>in which subtrees all previously existing documents were deleted (folder item disappeared)</li><li>in which subtrees at least one document was either created, updated, or deleted (new ETag on a folder item)</li></ul><p>All of these can occur in a folder that was at the same time either unchanged, updated, or deleted locally. When updated, it might be that different items were changed locally and remotely, or that the same item was changed on both sides, either in the same way, or in different ways.</p><p>The library handles all these cases so the module developer does not need to worry about them.</p><h2 id="implications-for-module-design" tabindex="-1">Implications for module design <a class="header-anchor" href="#implications-for-module-design" aria-label="Permalink to &quot;Implications for module design&quot;">​</a></h2><p>There are a number of important implications for module design:</p><ul><li>First of all, this sync process follows the &#39;asynchronous synchronization&#39; design principle (<a href="https://github.com/offlinefirst/research/issues/9" target="_blank" rel="noreferrer">https://github.com/offlinefirst/research/issues/9</a>). Don&#39;t wait for it to finish. The module should work with the local copy of the data, and handle incoming updates through evented programming. The only exception to this is where a body of data is too big to cache locally, and the module needs to expose on-demand access of remote data to the app. In all other cases, the module should expose the local version as &#39;the truth&#39;.</li><li>Even then, IndexedDB is not fast enough to access from a button click. Make sure to put an in-memory caching layer in the module, and return control to the app immediately. An example of this approach is the SyncedMap data structure used in <a href="https://github.com/michielbdejong/meute" target="_blank" rel="noreferrer">https://github.com/michielbdejong/meute</a>.</li><li>Use folders and subfolders. This allows the tree-based sync algorithm to shine and efficiently detect changes in any of potentially thousands of documents by checking the ETag from one single HTTP request to the root folder of the tree.</li><li>Use meaningful collections. Multiple clients can each edit a different document without ever entering in conflict with each other. But editing the same document is interpreted as a conflict. For instance, when two calendar apps both schedule an event on a certain date, this would be a conflict if the module stores one document per day. However, if the module stores one document per event, and instead uses one /folder/ for each day, then the two events can co-exist on the same day without generating a conflict. Documents are a unit of conflict, but folders are not. Another example is storing todo-list items with long UUID hashes instead of their list index numbers as document names. Editing item &quot;5&quot; would conflict with inserting a new item &quot;5&quot;. But if both items have a long unique name, then they don&#39;t clash with each other. So make sure to choose unique item names for items that should not conflict.</li></ul>`,26),i=[s];function r(l,c,h,d,p,m){return n(),t("div",null,i)}const g=e(a,[["render",r]]);export{f as __pageData,g as default};
