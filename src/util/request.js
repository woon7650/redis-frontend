import axios from 'axios'


//create axios instance
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    headers: {
        'Content-Type': 'application/json',
    }
})

// Add a request interceptor - 요청 인터셉터
axios.interceptors.request.use(function(config) {
    // Do something before request is sent - 요청 날리기 전 실행
    return config;
}, function(error) {
    // Do something with request error	- 요청 에러시 실행
    return Promise.reject(error);
});

// Add a response interceptor - 응답 인터셉터
axios.interceptors.response.use(function(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger	
    // - 200번대 응답은 여기서 처리
    // Do something with response data - 응답받은 데이터 처리
    return response;
}, function(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // - 200번대 외의 응답은 여기서 처리
    // Do something with response error - 응답 에러 처리
    return Promise.reject(error);
});

export default service