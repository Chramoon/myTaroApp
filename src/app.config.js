export default defineAppConfig({
  pages: ["pages/pagesMain/index"],
  subpackages: [
    {
      root: "pages/packageA/",
      pages: ["page/Cat", "page/Dog"],
    },
    {
      root: "pages/packageB/",
      pages: ["page/Apple", "page/Banana"],
    },
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
});
