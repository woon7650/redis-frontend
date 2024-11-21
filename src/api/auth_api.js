import request from '@/util/request'

export function login(data) {
    return request({
        url: '/auth/login',
        method: 'post',
        data
    })
}

export function signup(data) {
    return request({
        url: '/auth/signup',
        method: 'post',
        data
    })
}


export function reissue(data) {
    return request({
        url: '/auth/reissue',
        method: 'post',
        data
    })
}


export function logout(data) {
    return request({
        url: '/auth/logout',
        method: 'post',
        data
    })
}