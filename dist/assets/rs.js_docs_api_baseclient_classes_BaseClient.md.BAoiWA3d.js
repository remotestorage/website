import{_ as e,c as a,o as t,a4 as o}from"./chunks/framework.Bi9zwDUp.js";const m=JSON.parse('{"title":"Class: BaseClient","description":"","frontmatter":{},"headers":[],"relativePath":"rs.js/docs/api/baseclient/classes/BaseClient.md","filePath":"rs.js/docs/api/baseclient/classes/BaseClient.md"}'),r={name:"rs.js/docs/api/baseclient/classes/BaseClient.md"},s=o('<h1 id="class-baseclient" tabindex="-1">Class: BaseClient <a class="header-anchor" href="#class-baseclient" aria-label="Permalink to &quot;Class: BaseClient&quot;">​</a></h1><p>Provides a high-level interface to access data below a given root path.</p><h2 id="extends" tabindex="-1">Extends <a class="header-anchor" href="#extends" aria-label="Permalink to &quot;Extends&quot;">​</a></h2><ul><li><code>EventHandling</code></li></ul><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="base" tabindex="-1">base <a class="header-anchor" href="#base" aria-label="Permalink to &quot;base&quot;">​</a></h3><blockquote><p><strong>base</strong>: <code>string</code></p></blockquote><p>Base path, which this <a href="./BaseClient.html">BaseClient</a> operates on.</p><p>For the module&#39;s privateClient this would be <code>&lt;moduleName&gt;</code>, for the corresponding publicClient <code>/public/&lt;moduleName&gt;/</code>.</p><h4 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p><a href="https://github.com/remotestorage/remotestorage.js/blob/e2bff1869cf784e0b2712889b7313d816e139b0c/src/baseclient.ts#L32" target="_blank" rel="noreferrer">baseclient.ts:32</a></p><hr><h3 id="storage" tabindex="-1">storage <a class="header-anchor" href="#storage" aria-label="Permalink to &quot;storage&quot;">​</a></h3><blockquote><p><strong>storage</strong>: <a href="./../../remotestorage/classes/RemoteStorage.html"><code>RemoteStorage</code></a></p></blockquote><p>The <a href="./../../remotestorage/classes/RemoteStorage.html">RemoteStorage</a> instance this <a href="./BaseClient.html">BaseClient</a> operates on.</p><h4 id="source-1" tabindex="-1">Source <a class="header-anchor" href="#source-1" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p><a href="https://github.com/remotestorage/remotestorage.js/blob/e2bff1869cf784e0b2712889b7313d816e139b0c/src/baseclient.ts#L24" target="_blank" rel="noreferrer">baseclient.ts:24</a></p><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="cache" tabindex="-1">cache() <a class="header-anchor" href="#cache" aria-label="Permalink to &quot;cache()&quot;">​</a></h3><blockquote><p><strong>cache</strong>(<code>path</code>, <code>strategy</code>): <a href="./BaseClient.html"><code>BaseClient</code></a></p></blockquote><p>Set caching strategy for a given path and its children.</p><p>See :ref:<code>caching-strategies</code> for a detailed description of the available strategies.</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><p>• <strong>path</strong>: <code>string</code></p><p>Path to cache</p><p>• <strong>strategy</strong>: <code>&quot;ALL&quot;</code> | <code>&quot;SEEN&quot;</code> | <code>&quot;FLUSH&quot;</code>= <code>&#39;ALL&#39;</code></p><p>Caching strategy. One of &#39;ALL&#39;, &#39;SEEN&#39;, or &#39;FLUSH&#39;. Defaults to &#39;ALL&#39;.</p><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./BaseClient.html"><code>BaseClient</code></a></p><p>The same instance this is called on to allow for method chaining</p><h4 id="source-2" tabindex="-1">Source <a class="header-anchor" href="#source-2" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p><a href="https://github.com/remotestorage/remotestorage.js/blob/e2bff1869cf784e0b2712889b7313d816e139b0c/src/baseclient.ts#L321" target="_blank" rel="noreferrer">baseclient.ts:321</a></p><hr><h3 id="declaretype" tabindex="-1">declareType() <a class="header-anchor" href="#declaretype" aria-label="Permalink to &quot;declareType()&quot;">​</a></h3><blockquote><p><strong>declareType</strong>(<code>alias</code>, <code>uriOrSchema</code>, <code>schema</code>?): <code>void</code></p></blockquote><p>Declare a remoteStorage object type using a JSON schema.</p><p>See :doc:<code>Defining data types &lt;/data-modules/defining-data-types&gt;</code> for more info.</p><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><p>• <strong>alias</strong>: <code>string</code></p><p>A type alias/shortname</p><p>• <strong>uriOrSchema</strong>: <code>string</code> | <code>JsonSchema</code></p><p>• <strong>schema?</strong>: <code>JsonSchema</code></p><p>A JSON Schema object describing the object type</p><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>void</code></p><h4 id="source-3" tabindex="-1">Source <a class="header-anchor" href="#source-3" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p><a href="https://github.com/remotestorage/remotestorage.js/blob/e2bff1869cf784e0b2712889b7313d816e139b0c/src/baseclient.ts#L358" target="_blank" rel="noreferrer">baseclient.ts:358</a></p><hr><h3 id="flush" tabindex="-1">flush() <a class="header-anchor" href="#flush" aria-label="Permalink to &quot;flush()&quot;">​</a></h3><blockquote><p><strong>flush</strong>(<code>path</code>): <code>unknown</code></p></blockquote><p>TODO: document</p><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><p>• <strong>path</strong>: <code>string</code></p><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>unknown</code></p><h4 id="source-4" tabindex="-1">Source <a class="header-anchor" href="#source-4" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p><a href="https://github.com/remotestorage/remotestorage.js/blob/e2bff1869cf784e0b2712889b7313d816e139b0c/src/baseclient.ts#L345" target="_blank" rel="noreferrer">baseclient.ts:345</a></p><hr><h3 id="getall" tabindex="-1">getAll() <a class="header-anchor" href="#getall" aria-label="Permalink to &quot;getAll()&quot;">​</a></h3><blockquote><p><strong>getAll</strong>(<code>path</code>, <code>maxAge</code>?): <code>Promise</code>&lt;<code>unknown</code>&gt;</p></blockquote><p>Get all objects directly below a given path.</p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><p>• <strong>path</strong>: <code>string</code></p><p>Path to the folder. Must end in a forward slash.</p><p>• <strong>maxAge?</strong>: <code>number</code> | <code>false</code></p><p>(optional) Either <code>false</code> or the maximum age of cached objects in milliseconds. See :ref:<code>max-age</code>.</p><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>unknown</code>&gt;</p><p>A promise for an object</p><h4 id="source-5" tabindex="-1">Source <a class="header-anchor" href="#source-5" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p><a href="https://github.com/remotestorage/remotestorage.js/blob/e2bff1869cf784e0b2712889b7313d816e139b0c/src/baseclient.ts#L100" target="_blank" rel="noreferrer">baseclient.ts:100</a></p><hr><h3 id="getfile" tabindex="-1">getFile() <a class="header-anchor" href="#getfile" aria-label="Permalink to &quot;getFile()&quot;">​</a></h3><blockquote><p><strong>getFile</strong>(<code>path</code>, <code>maxAge</code>?): <code>Promise</code>&lt;<code>unknown</code>&gt;</p></blockquote><p>Get the file at the given path. A file is raw data, as opposed to a JSON object (use :func:<code>getObject</code> for that).</p><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><p>• <strong>path</strong>: <code>string</code></p><p>Relative path from the module root (without leading slash).</p><p>• <strong>maxAge?</strong>: <code>number</code> | <code>false</code></p><p>(optional) Either <code>false</code> or the maximum age of the cached file in milliseconds. See :ref:<code>max-age</code>.</p><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>unknown</code>&gt;</p><p>A promise for an object</p><h4 id="source-6" tabindex="-1">Source <a class="header-anchor" href="#source-6" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p><a href="https://github.com/remotestorage/remotestorage.js/blob/e2bff1869cf784e0b2712889b7313d816e139b0c/src/baseclient.ts#L144" target="_blank" rel="noreferrer">baseclient.ts:144</a></p><hr><h3 id="getitemurl" tabindex="-1">getItemURL() <a class="header-anchor" href="#getitemurl" aria-label="Permalink to &quot;getItemURL()&quot;">​</a></h3><blockquote><p><strong>getItemURL</strong>(<code>path</code>): <code>string</code></p></blockquote><p>Retrieve full URL of a document. Useful for example for sharing the public URL of an item in the <code>/public</code> folder. TODO: refactor this into the Remote interface</p><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><p>• <strong>path</strong>: <code>string</code></p><p>Path relative to the module root.</p><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>string</code></p><p>The full URL of the item, including the storage origin</p><h4 id="source-7" tabindex="-1">Source <a class="header-anchor" href="#source-7" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p><a href="https://github.com/remotestorage/remotestorage.js/blob/e2bff1869cf784e0b2712889b7313d816e139b0c/src/baseclient.ts#L297" target="_blank" rel="noreferrer">baseclient.ts:297</a></p><hr><h3 id="getlisting" tabindex="-1">getListing() <a class="header-anchor" href="#getlisting" aria-label="Permalink to &quot;getListing()&quot;">​</a></h3><blockquote><p><strong>getListing</strong>(<code>path</code>?, <code>maxAge</code>?): <code>Promise</code>&lt;<code>unknown</code>&gt;</p></blockquote><p>Get a list of child nodes below a given path.</p><h4 id="parameters-6" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-6" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><p>• <strong>path?</strong>: <code>string</code></p><p>The path to query. It MUST end with a forward slash.</p><p>• <strong>maxAge?</strong>: <code>number</code> | <code>false</code></p><p>(optional) Either <code>false</code> or the maximum age of cached listing in milliseconds. See :ref:<code>max-age</code>.</p><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>unknown</code>&gt;</p><p>A promise for an object representing child nodes</p><h4 id="source-8" tabindex="-1">Source <a class="header-anchor" href="#source-8" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p><a href="https://github.com/remotestorage/remotestorage.js/blob/e2bff1869cf784e0b2712889b7313d816e139b0c/src/baseclient.ts#L79" target="_blank" rel="noreferrer">baseclient.ts:79</a></p><hr><h3 id="getobject" tabindex="-1">getObject() <a class="header-anchor" href="#getobject" aria-label="Permalink to &quot;getObject()&quot;">​</a></h3><blockquote><p><strong>getObject</strong>(<code>path</code>, <code>maxAge</code>?): <code>Promise</code>&lt;<code>unknown</code>&gt;</p></blockquote><p>Get a JSON object from the given path.</p><h4 id="parameters-7" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-7" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><p>• <strong>path</strong>: <code>string</code></p><p>Relative path from the module root (without leading slash).</p><p>• <strong>maxAge?</strong>: <code>number</code> | <code>false</code></p><p>(optional) Either <code>false</code> or the maximum age of cached object in milliseconds. See :ref:<code>max-age</code>.</p><h4 id="returns-7" tabindex="-1">Returns <a class="header-anchor" href="#returns-7" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>unknown</code>&gt;</p><p>A promise, which resolves with the requested object (or <code>null</code> if non-existent)</p><h4 id="source-9" tabindex="-1">Source <a class="header-anchor" href="#source-9" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p><a href="https://github.com/remotestorage/remotestorage.js/blob/e2bff1869cf784e0b2712889b7313d816e139b0c/src/baseclient.ts#L203" target="_blank" rel="noreferrer">baseclient.ts:203</a></p><hr><h3 id="remove" tabindex="-1">remove() <a class="header-anchor" href="#remove" aria-label="Permalink to &quot;remove()&quot;">​</a></h3><blockquote><p><strong>remove</strong>(<code>path</code>): <code>Promise</code>&lt;<code>unknown</code>&gt;</p></blockquote><p>Remove node at given path from storage. Triggers synchronization.</p><h4 id="parameters-8" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-8" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><p>• <strong>path</strong>: <code>string</code></p><p>Path relative to the module root.</p><h4 id="returns-8" tabindex="-1">Returns <a class="header-anchor" href="#returns-8" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>unknown</code>&gt;</p><h4 id="source-10" tabindex="-1">Source <a class="header-anchor" href="#source-10" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p><a href="https://github.com/remotestorage/remotestorage.js/blob/e2bff1869cf784e0b2712889b7313d816e139b0c/src/baseclient.ts#L278" target="_blank" rel="noreferrer">baseclient.ts:278</a></p><hr><h3 id="scope" tabindex="-1">scope() <a class="header-anchor" href="#scope" aria-label="Permalink to &quot;scope()&quot;">​</a></h3><blockquote><p><strong>scope</strong>(<code>path</code>): <a href="./BaseClient.html"><code>BaseClient</code></a></p></blockquote><p>Instantiate a new client, scoped to a subpath of the current client&#39;s path.</p><h4 id="parameters-9" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-9" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><p>• <strong>path</strong>: <code>string</code></p><p>The path to scope the new client to</p><h4 id="returns-9" tabindex="-1">Returns <a class="header-anchor" href="#returns-9" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./BaseClient.html"><code>BaseClient</code></a></p><p>A new client operating on a subpath of the current base path</p><h4 id="source-11" tabindex="-1">Source <a class="header-anchor" href="#source-11" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p><a href="https://github.com/remotestorage/remotestorage.js/blob/e2bff1869cf784e0b2712889b7313d816e139b0c/src/baseclient.ts#L65" target="_blank" rel="noreferrer">baseclient.ts:65</a></p><hr><h3 id="storefile" tabindex="-1">storeFile() <a class="header-anchor" href="#storefile" aria-label="Permalink to &quot;storeFile()&quot;">​</a></h3><blockquote><p><strong>storeFile</strong>(<code>mimeType</code>, <code>path</code>, <code>body</code>): <code>Promise</code>&lt;<code>string</code>&gt;</p></blockquote><p>Store raw data at a given path.</p><h4 id="parameters-10" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-10" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><p>• <strong>mimeType</strong>: <code>string</code></p><p>MIME media type of the data being stored</p><p>• <strong>path</strong>: <code>string</code></p><p>Path relative to the module root</p><p>• <strong>body</strong>: <code>string</code> | <code>ArrayBuffer</code> | <code>ArrayBufferView</code></p><p>Raw data to store</p><h4 id="returns-10" tabindex="-1">Returns <a class="header-anchor" href="#returns-10" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>string</code>&gt;</p><p>A promise for the created/updated revision (ETag)</p><h4 id="source-12" tabindex="-1">Source <a class="header-anchor" href="#source-12" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p><a href="https://github.com/remotestorage/remotestorage.js/blob/e2bff1869cf784e0b2712889b7313d816e139b0c/src/baseclient.ts#L167" target="_blank" rel="noreferrer">baseclient.ts:167</a></p><hr><h3 id="storeobject" tabindex="-1">storeObject() <a class="header-anchor" href="#storeobject" aria-label="Permalink to &quot;storeObject()&quot;">​</a></h3><blockquote><p><strong>storeObject</strong>(<code>typeAlias</code>, <code>path</code>, <code>object</code>): <code>Promise</code>&lt;<code>unknown</code>&gt;</p></blockquote><p>Store object at given path. Triggers synchronization.</p><p>See <code>declareType()</code> and :doc:<code>data types &lt;/data-modules/defining-data-types&gt;</code> for an explanation of types</p><p>For any given <code>path</code>, must not be called more frequently than once per second.</p><h4 id="parameters-11" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-11" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><p>• <strong>typeAlias</strong>: <code>string</code></p><p>Unique type of this object within this module.</p><p>• <strong>path</strong>: <code>string</code></p><p>Path relative to the module root.</p><p>• <strong>object</strong>: <code>object</code></p><p>A JavaScript object to be stored at the given path. Must be serializable as JSON.</p><h4 id="returns-11" tabindex="-1">Returns <a class="header-anchor" href="#returns-11" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>unknown</code>&gt;</p><p>Resolves with revision on success. Rejects with a ValidationError, if validations fail.</p><h4 id="source-13" tabindex="-1">Source <a class="header-anchor" href="#source-13" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p><a href="https://github.com/remotestorage/remotestorage.js/blob/e2bff1869cf784e0b2712889b7313d816e139b0c/src/baseclient.ts#L240" target="_blank" rel="noreferrer">baseclient.ts:240</a></p><hr><h3 id="validate" tabindex="-1">validate() <a class="header-anchor" href="#validate" aria-label="Permalink to &quot;validate()&quot;">​</a></h3><blockquote><p><strong>validate</strong>(<code>object</code>): <code>object</code></p></blockquote><p>Validate an object against the associated schema.</p><h4 id="parameters-12" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-12" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><p>• <strong>object</strong></p><p>JS object to validate. Must have a <code>@context</code> property.</p><h4 id="returns-12" tabindex="-1">Returns <a class="header-anchor" href="#returns-12" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>object</code></p><p>An object containing information about validation errors</p><h4 id="source-14" tabindex="-1">Source <a class="header-anchor" href="#source-14" aria-label="Permalink to &quot;Source&quot;">​</a></h4><p><a href="https://github.com/remotestorage/remotestorage.js/blob/e2bff1869cf784e0b2712889b7313d816e139b0c/src/baseclient.ts#L380" target="_blank" rel="noreferrer">baseclient.ts:380</a></p>',194),c=[s];function n(i,l,d,h,p,b){return t(),a("div",null,c)}const g=e(r,[["render",n]]);export{m as __pageData,g as default};
