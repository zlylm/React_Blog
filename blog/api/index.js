import axios from 'axios'

//请求拦截器
axios.interceptors.request.use(config=>{
    return config;
}, error => {})

// 响应拦截器
axios.interceptors.response.use(response=>{
    return response;
}, error => {})


const Axios = axios.create({
    baseURL: 'http://127.0.0.1:7001',
    timeout:5000
})

const myHttp = ( [url, data={}, method='post'] = [...config] ) => {
        return new Promise((resolve, reject) => {
            Axios({
                url,
                data,
                method
            })
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                console.log(err)
            })
        })
}

// 文章列表
export const getArticleList =(...param) => { return myHttp(['/default/getArticleList',...param]) }
// 文章详情
export const getArticleById = (...param) => { return myHttp(['/default/getArticleById',...param]) }
// 获取文章分类标签
export const getTypeNameList = (...param) => { return myHttp(['/default/getTypeNameList',...param]) }
// 根据文章分类获取相应的文章列表
export const getArticleByTypeId = (...param) => { return myHttp(['/default/getArticleByTypeId',...param]) }
