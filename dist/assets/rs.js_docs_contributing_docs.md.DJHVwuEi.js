import{_ as e,c as t,o as a,a4 as s}from"./chunks/framework.Bi9zwDUp.js";const g=JSON.parse('{"title":"Documentation","titleTemplate":"remoteStorage.js","description":"","frontmatter":{},"headers":[],"relativePath":"rs.js/docs/contributing/docs.md","filePath":"rs.js/docs/contributing/docs.md"}'),i={name:"rs.js/docs/contributing/docs.md"},o=s('<div class="danger custom-block"><p class="custom-block-title">DEPRECATED</p><p>Needs a complete rewrite for the new TypeDoc + VitePress setup</p></div><h1 id="documentation" tabindex="-1">Documentation <a class="header-anchor" href="#documentation" aria-label="Permalink to &quot;Documentation&quot;">​</a></h1><p>The documentation for remoteStorage.js is generated from <a href="http://docutils.sourceforge.net/rst.html" target="_blank" rel="noreferrer">reStructuredText</a> files in the <code>doc/</code> folder, as well as <a href="https://typedoc.org/" target="_blank" rel="noreferrer">TypeDoc</a> code comments, which are being pulled in via special declarations in those files.</p><p>We use <a href="http://www.sphinx-doc.org/" target="_blank" rel="noreferrer">Sphinx</a> to generate the documentation website, and the <a href="https://pypi.python.org/pypi/sphinx-js/" target="_blank" rel="noreferrer">sphinx-js</a> extension for handling the TypeDoc part.</p><h2 id="how-to-write-restructuredtext-and-typedoc" tabindex="-1">How to write reStructuredText and TypeDoc <a class="header-anchor" href="#how-to-write-restructuredtext-and-typedoc" aria-label="Permalink to &quot;How to write reStructuredText and TypeDoc&quot;">​</a></h2><p>For learning both the basics and advances features of reStructuredText, we highly recommend the <a href="http://www.sphinx-doc.org/en/stable/rest.html" target="_blank" rel="noreferrer">reStructuredText Primer</a> on the Sphinx website.</p><p>For TypeDoc, you can find guides as well as a detailed reference <a href="https://typedoc.org/" target="_blank" rel="noreferrer">on the project&#39;s website</a>.</p><h2 id="automatic-builds-and-publishing" tabindex="-1">Automatic builds and publishing <a class="header-anchor" href="#automatic-builds-and-publishing" aria-label="Permalink to &quot;Automatic builds and publishing&quot;">​</a></h2><p>The documentation is published via <a href="https://readthedocs.org/" target="_blank" rel="noreferrer">Read the Docs</a>. Whenever the Git repository&#39;s <code>master</code> branch is pushed to GitHub, RTD will automatically build a new version of the site and publish it to <a href="https://remotestoragejs.readthedocs.io" target="_blank" rel="noreferrer">remotestoragejs.readthedocs.io</a>.</p><p>This means that if you want to contribute to the documentation, you don&#39;t necessarily have to set up Sphinx and sphinx-js locally (especially for small changes). However, if you want to preview what your local changes look like when they are rendered as HTML, you will have to set up local builds first.</p><h2 id="how-to-build-the-docs-on-your-machine" tabindex="-1">How to build the docs on your machine <a class="header-anchor" href="#how-to-build-the-docs-on-your-machine" aria-label="Permalink to &quot;How to build the docs on your machine&quot;">​</a></h2><h3 id="setup" tabindex="-1">Setup <a class="header-anchor" href="#setup" aria-label="Permalink to &quot;Setup&quot;">​</a></h3><ol><li><p><a href="https://pip.pypa.io/en/stable/installing/" target="_blank" rel="noreferrer">Install Python and PIP</a> (likely already installed)</p></li><li><p>Install sphinx-js and extensions (from repository root):</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> doc/requirements.txt</span></span></code></pre></div></li><li><p>Install TypeScript and TypeDoc globally (so Sphinx can use them):</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> typescript</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> typedoc</span></span></code></pre></div></li></ol><h3 id="build" tabindex="-1">Build <a class="header-anchor" href="#build" aria-label="Permalink to &quot;Build&quot;">​</a></h3><p>Run the following command to automatically watch and build the documentation:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> autobuild-docs</span></span></code></pre></div><p>This will start a web server, serving rendered HTML docs on <a href="http://localhost:8000" target="_blank" rel="noreferrer">http://localhost:8000</a>.</p><p>::: hint ::: title Hint :::</p><p>The autobuild cannot watch for changes in TypeDoc comments as of now, so you will need to re-run the command, or change something in a <code>.rst</code> file in order for code documentation changes to be re-built. :::</p><h2 id="how-to-build-the-docs-using-readthedocs-docker-image" tabindex="-1">How to build the docs using ReadTheDocs&#39; Docker image <a class="header-anchor" href="#how-to-build-the-docs-using-readthedocs-docker-image" aria-label="Permalink to &quot;How to build the docs using ReadTheDocs\\&#39; Docker image&quot;">​</a></h2><p>This is useful for troubleshooting when the ReadTheDocs build is failing.</p><h3 id="setup-1" tabindex="-1">Setup <a class="header-anchor" href="#setup-1" aria-label="Permalink to &quot;Setup&quot;">​</a></h3><ol><li><p><a href="https://docs.docker.com/get-docker/" target="_blank" rel="noreferrer">Install Docker</a></p></li><li><p>Pull the latest version of <code>readthedocs/build</code> image with the <code>latest</code> tag from Docker Hub:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pull</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> readthedocs/build:latest</span></span></code></pre></div></li></ol><h3 id="build-1" tabindex="-1">Build <a class="header-anchor" href="#build-1" aria-label="Permalink to &quot;Build&quot;">​</a></h3><ol><li><p>Enter a <code>bash</code> session while attaching this project as a volume:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -it</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ${PWD}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:/app</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> readthedocs/build:latest</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bash</span></span></code></pre></div></li><li><p>Run the <code>build-with-conda.sh</code> script to setup conda environment and build the docs like ReadTheDocs:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /app/doc/build-with-conda.sh</span></span></code></pre></div></li></ol>',25),n=[o];function l(h,r,d,p,c,u){return a(),t("div",null,n)}const b=e(i,[["render",l]]);export{g as __pageData,b as default};