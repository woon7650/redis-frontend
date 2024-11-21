import axios from 'axios'
import store from '@/store'
import { getAccessToken } from '@/store/module/user'
import router from '@/router'

//create axios instance
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    headers: {
        'Content-Type': 'application/json',
    }
})

// Add a request interceptor - 요청 인터셉터
axios.interceptors.request.use(function(config) {

    config.headers['Authorization'] = getAccessToken()

    return config;
}, function(error) {
    // Do something with request error	- 요청 에러시 실행
    return Promise.reject(error);
});

// Add a response interceptor - 응답 인터셉터
axios.interceptors.response.use(
    (response) => {
        // Any status code that lie within the range of 2xx cause this function to trigger	
        // - 200번대 응답은 여기서 처리
        // Do something with response data - 응답받은 데이터 처리
        console.log(response)
        return response
    },
    (error) => {
        try {

            console.log('99999999999999')
            if (error.response && error.response.status) {
                console.log(error.response.message)
                if (error.response.code === 'U0' || error.response.code === 'U1') {
                    console.log(error)
                }
                if (error.response.data.status === 401) {
                    //accesstoken expired -> reissue
                    if (error.response.data.code === 'A3') {
                        //재요청
                        this.$store.dispatch("reissue")
                    }

                    if (error.response.data.code === 'A1' || error.response.data.code === 'A2') {
                        //logout 처리
                    }
                }
            }

            // Any status codes that falls outside the range of 2xx cause this function to trigger
            // - 200번대 외의 응답은 여기서 처리
            // Do something with response error - 응답 에러 처리

        } catch (err) {
            console.error('axios interceptor error')
        }
        return Promise.reject(error);
    }

);

export default service