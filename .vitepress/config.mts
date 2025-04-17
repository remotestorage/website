import { defineConfig } from 'vitepress'
import rsjsConfig from '../rs.js/docs/.vitepress/config.mts'

type Item = {
  text: string;
  link: string;
  items?: Item[];
};

const prefixLinks = (array: Item[], prefix: string) => {
  array.forEach(item => {
    if (item.link) {
      item.link = prefix + item.link;
    }
    if (item.items) {
      prefixLinks(item.items, prefix);
    }
  });
};

const rsjsSidebarConfig = rsjsConfig.themeConfig.sidebar
prefixLinks(rsjsSidebarConfig, '/rs.js/docs')

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "remoteStorage",
  description: "An open protocol for per-user storage on the Web",
  srcExclude: ['./wiki', './rs.js/*.md'],
  ignoreDeadLinks: [
    /^http:\/\/localhost/,
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.svg",
    externalLinkIcon: true,
    outline: { level: [2, 3] },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting started', link: '/get' },
      { text: 'remoteStorage.js', link: '/rs.js/docs' },
      { text: 'Forums', link: 'https://community.remotestorage.io' },
    ],

    sidebar: {
      '/': [
        {
          items: [
            { text: 'Getting started', link: '/get' },
            { text: 'How it works',
              items: [
                { text: 'Unhosted Web Apps', link: '/unhosted' },
                { text: 'Protocol', link: '/protocol' },
              ]
            },
            { text: 'Apps', link: '/apps' },
            { text: 'Servers', link: '/servers' },
            { text: 'Contribute', link: '/contribute' },
            { text: 'Design', link: '/design' },
          ]
        }
      ],
      '/rs.js/': rsjsSidebarConfig
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/remotestorage' },
      { icon: 'mastodon', link: 'https://kosmos.social/@remotestorage' }
    ],

    editLink: {
      pattern: ({ filePath }) => {
        if (filePath.startsWith('rs.js/')) {
          if (filePath.startsWith('rs.js/docs/api/')) {
            return '/rs.js/docs/contributing/docs';
          } else {
            return `https://github.com/remotestorage/remotestorage.js/edit/master/${filePath.slice(6)}`;
          }
        } else {
          return `https://github.com/remotestorage/website/edit/master/${filePath}`
        }
      }
    },

    search: {
      provider: 'local'
    }
  },

  async transformPageData(pageData, { siteConfig }) {
    if (pageData.relativePath.startsWith('rs.js')) {
      pageData.titleTemplate = 'remoteStorage.js'
    }
    return pageData;
  },

  async transformHtml(code, id, ctx) {
    if (id.endsWith('404.html')) {
      const redirectScript = `
        <script>
          if (window.location.pathname.endsWith('/') && window.location.pathname !== '/') {
            window.location.replace(window.location.pathname.slice(0, -1));
          }
        </script>
      `;
      return code.replace('</head>', `${redirectScript}</head>`);
    }
    return code;
  }
})
