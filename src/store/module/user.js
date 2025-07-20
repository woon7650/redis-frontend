import { login, signup, reissue } from '@/api/auth_api'
import { selectUserInfo } from '@/api/user_api'

const getDefaultState = () => {
    return {
        userId: null,
        userName: null,
        accessToken: null
    }
}

export const user = {
    state: () => ({
        userId: null,
        userName: null,
        accessToken: null
    }),

    getters: {
        getUser(state) {
            const user = {
                userId: state.userId,
                userName: state.userName
            }
        },
        getAccessToken(state) {
            const accessToken = {
                accessToken: state.accessToken
            }
        }
    },

    mutations: {
        RESET_STATE: (state) => {
            Object.assign(state, getDefaultState())
        },
        SET_USER: (state, userVO) => {
            state.userId = userVO.userId,
                state.userName = userVO.userName
        },
        SET_ACCESS_TOKEN: (state, token) => {
            state.accessToken = token
        }
    },

    actions: {

        login({ commit, dispatch }, pararmeter) {
            return new Promise((resolve, reject) => {
                login(pararmeter)
                    .then((response) => {
                        alert("로그인 성공")
                        resolve(true);
                    })
                    .catch((error) => {
                        alert(error.response.data.message)
                        reject(error)
                    });
            })
        },

        signup({ commit, dispatch }, pararmeter) {
            return new Promise((resolve, reject) => {
                signup(pararmeter)
                    .then((response) => {
                        console.log(response)
                        alert('회원가입 성공');
                        resolve(true);
                    })
                    .catch((error) => {
                        alert('회원가입 실패');
                        reject(error)
                    });
            })
        },
        reissue({ commit }, data) {
            return new Promise((resolve, reject) => {
                reissue(data)
                    .then((response) => {
                        console.log(response)
                        alert('토큰 재발급 성공');
                        resolve()
                    })
                    .catch((error) => {
                        alert('토큰 재발급 실패');
                        reject(error)
                    })
            })
        },

        selectUserInfo({ commit }, data) {
            return new Promise((resolve, reject) => {
                selectUserInfo(data)
                    .then((response) => {
                        console.log(response)
                        resolve()
                    })
                    .catch((error) => {
                        reject(error)
                    })
            })
        }

    }
}