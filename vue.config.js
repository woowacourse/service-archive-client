module.exports = {
  devServer: {
    proxy: {
      "/": {
        target: "http://192.168.6.211:8080", // 개발서버
      },
    },
  },
};
