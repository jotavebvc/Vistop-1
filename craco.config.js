const path = require("path");

module.exports = {
  webpack: {
    alias: {
      Src: path.resolve(__dirname, 'src/'),
      Images: path.resolve(__dirname, 'src/assets/images/'),
      Scss: path.resolve(__dirname, 'src/assets/scss/'),
      Components: path.resolve(__dirname, 'src/components/'),
      Pages: path.resolve(__dirname, 'src/pages/')
    }
  }
}
