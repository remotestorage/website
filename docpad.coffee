# DocPad Configuration File
# http://docpad.org/docs/config

docpadConfig = {
  plugins:
    nodesass:
      outputStyle: 'nested'
      bourbon: true
      neat: true
    ghpages:
      deployRemote: '5apps'
      deployBranch: 'master'

  environments:
    static:
      outPath: 'dist'
}

module.exports = docpadConfig
