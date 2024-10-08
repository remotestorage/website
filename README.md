# remotestorage.io

This is the remoteStorage website, running on
[remotestorage.io](https://remotestorage.io).

## Development

The website is built using [VitePress](https://vitepress.dev/). It includes the
[remoteStorage.js](https://github.com/remotestorage/remotestorage.js)
documentation via a Git submodule.

### Setup

With [Git](https://git-scm.com) and [node.js](https://nodejs.org) installed,
and an SSH key associated with your GitHub account...

Clone this repo:

```sh
git clone git@github.com:remotestorage/website.git
cd website
```

Initialize and fetch the rs.js submodule:

```sh
git submodule update --init
```

Install the dependencies:

```sh
npm install
```

### Running

Run the local dev server, which automatically updates the local preview site
whenever documents are saved:

```
npm run docs:dev
```

### Deployment

The `master` branch is automatically built and deployed to GitHub Pages.
