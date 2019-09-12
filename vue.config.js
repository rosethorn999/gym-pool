// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/scss/_variables.scss";
          @import "@/scss/_mixins.scss";
        `
      }
    }
  },
  pluginOptions: {
    i18n: {
      locale: "zh-tw",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: false
    }
  },
  pages: {
    index: {
      entry: "./src/pages/Home/main.js",
      template: "public/index.html",
      title: "Home",
      chunks: ["chunk-vendors", "chunk-common", "index"]
    },
    manage: {
      entry: "./src/pages/Manage/main.js",
      template: "public/index.html",
      title: "Manage",
      chunks: ["chunk-vendors", "chunk-common", "manage"]
    }
  }
};
