import Cookies from 'js-cookie'

const refreshToken = 'refreshToken'

export function getRefreshToken() {
    return Cookies.get(refreshToken)
}

export function removeRefreshToken() {
    Cookies.remove(refreshToken)
    return
}