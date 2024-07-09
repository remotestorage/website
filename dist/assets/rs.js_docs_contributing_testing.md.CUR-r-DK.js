import{_ as e,c as t,o as s,a4 as o}from"./chunks/framework.Bi9zwDUp.js";const b=JSON.parse('{"title":"Testing","titleTemplate":"remoteStorage.js","description":"","frontmatter":{},"headers":[],"relativePath":"rs.js/docs/contributing/testing.md","filePath":"rs.js/docs/contributing/testing.md"}'),i={name:"rs.js/docs/contributing/testing.md"},a=o('<h1 id="testing" tabindex="-1">Testing <a class="header-anchor" href="#testing" aria-label="Permalink to &quot;Testing&quot;">​</a></h1><p>Before contributing to remoteStorage.js, make sure your patch passes the test suite, and your code style passes the code linting suite.</p><p>We use the <a href="https://github.com/silverbucket/jaribu" target="_blank" rel="noreferrer">Jaribu</a> framework for our test suites and <a href="http://jshint.com/about/" target="_blank" rel="noreferrer">JSHint</a> for linting. Both are set as dev dependencies in <code>package.json</code>, so after installing those via <code>npm install</code>, you can use the following command to run everything at once:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span></span></code></pre></div><p>Or you can use the Jaribu executable directly in order to run the suite for a single file:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./node_modules/.bin/jaribu</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test/unit/cachinglayer-suite.js</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>We&#39;re in the process of porting the tests to Mocha/Chai. Also see <code>npm run test:mocha</code>.</p></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>If you add <code>./node_modules/.bin</code> to your <code>PATH</code>, you can call executables in any npm project directly. For example in <code>~/.bashrc</code>, add the line <code>export PATH=$PATH:./node_modules/.bin</code> (and run <code>source ~/.bashrc</code> to load that change in open terminal sessions). Then you can just run <code>jaribu test/unit/foo_suite.js</code>.</p></div><h2 id="continous-integration" tabindex="-1">Continous integration <a class="header-anchor" href="#continous-integration" aria-label="Permalink to &quot;Continous integration&quot;">​</a></h2><p>The rs.js test suite is run by GitHub Actions on every push to our repo on GitHub. When you open a pull request, your code will be tested there, too. You can check out the build status and history at <a href="https://github.com/remotestorage/remotestorage.js/actions" target="_blank" rel="noreferrer">https://github.com/remotestorage/remotestorage.js/actions</a>, and the CI settings in <code>.github/workflows/test-and-lint.yml</code>.</p>',10),n=[a];function r(c,l,d,h,u,p){return s(),t("div",null,n)}const m=e(i,[["render",r]]);export{b as __pageData,m as default};
