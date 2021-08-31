# remotestorage.io

This is the remoteStorage website, running on
[https://remotestorage.io](https://remotestorage.io).

## Development

The website is built using [Jekyll](https://jekyllrb.com/) and the
[Just the Docs](https://pmarsceill.github.io/just-the-docs/) theme.

### Setup

With [Git](https://git-scm.com) and
[Ruby](https://www.ruby-lang.org/en/documentation/installation) installed,
run the following command to install dependencies:

```
bundle install
```

### Running

Run the following command to build the static site to `/_site` and make it
accessible at
<a href="http://localhost:4000" target="_blank">http://localhost:4000</a>.
Changes to `.md` files should be visible automatically without refreshing.

```
bundle exec jekyll serve
```

### Deployment

The `master` branch is automatically built and deployed to GitHub Pages.
