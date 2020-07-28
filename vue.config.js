module.exports = {
    devServer: {
        disableHostCheck: true,
        port: 4000,
        proxy: {
            "/": {
                target: "http://172.17.0.1:8081", // 개발서버
            },
        },
    },
};