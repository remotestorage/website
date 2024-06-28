import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "remoteStorage",
  description: "An open protocol for per-user storage on the Web",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/img/icon.svg",

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting started', link: '/get' },
      { text: 'remoteStorage.js', link: '/rs.js' },
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
            { text: 'Design', link: '/contribute' },
          ]
        }
      ],
      '/rs.js/': [
        {
          text: 'Examples',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/remotestorage' },
      { icon: 'mastodon', link: 'https://kosmos.social/@remotestorage' }
    ],

    editLink: {
      pattern: ({ filePath }) => {
        if (filePath.startsWith('rs.js/')) {
          return ``
        } else {
          return `https://github.com/remotestorage/website/edit/master/${filePath}`
        }
      }
    },

    search: {
      provider: 'local'
    }
  }
})
