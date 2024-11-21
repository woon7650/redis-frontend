import request from '@/util/request'


export function selectUserInfo(data) {
    return request({
        url: '/select/info',
        method: 'post',
        data
    })
}