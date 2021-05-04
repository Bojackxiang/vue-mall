const dev = process.env.NODE_ENV === 'development'
// const devUrl = 'http://dev-mall-pre.springboot.cn/api'
const devUrl = 'http://www.imooc.com/'

const configs = {
    baseUrl: dev  ? devUrl : devUrl
}

console.log(configs)

module.exports = configs
