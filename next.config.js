const path = require("path");

module.exports = {
  trailingSlash: false,

  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },

  images: {
    domains: [allowedImageWordPressDomain, "via.placeholder.com"],
  },
};
