module.exports = {
    devServer: {
        proxy: {
            "/": {
                target: "http://172.30.1.25:8080", // 개발서버
            },
        },
    },
};
