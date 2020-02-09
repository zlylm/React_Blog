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

// 测试方法
export const test =(...param) => { return myHttp(['/default/getArticleList',...param]) }