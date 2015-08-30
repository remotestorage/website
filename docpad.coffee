# DocPad Configuration File
# http://docpad.org/docs/config

docpadConfig = {
  plugins:
    nodesass:
      outputStyle: 'nested'
      bourbon: true

  environments:
    static:
      outPath: 'dist'
}

module.exports = docpadConfig
