const configs = require("./src/config");

module.exports = {
    
    devServer: {
        host: 'localhost', //  访问的接口
        port: 8080,
        proxy: {
            '/api': {
                target: 'http://mall-pre.springboot.cn',
                changeOrigin: true,
                pathRewrite: {
                    '/api': ''
                }
            }
        }
    }
}

// 通过服务器代理来解决 前后端跨域的问题

/*
访问        localhost/api/servicetime 
实际访问：   localhost/activity/servicetime
*/