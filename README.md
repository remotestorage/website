# remotestorage.io

This is the remoteStorage website, running on
[https://remotestorage.io](https://remotestorage.io).

## Development

### Setup

Install [Git](https://git-scm.com) and [Ruby](https://www.ruby-lang.org/en/documentation/installation), then run the following command to install dependencies:

```
bundle install
```

### Running

```
bundle exec jekyll serve
```

Run the following command to build the static site to `/_site` and make it accessible at <a href="http://localhost:4000" target="_blank">http://localhost:4000</a>. Changes to `.md` files will be visible automatically without refreshing.

Note: If you have npm, a shorter command can be `npm start`.

### Deployment

Deploying to production can be done by pushing a 5apps Deploy Git remote.
Please ask someone for access, in case you want to be able to run those
deployments.
