import { login, signup } from '@/api/user_api'

const getDefaultState = () => {
    return {
        userId: null,
        userName: null,
    }
}

export const user = {
    state: () => ({
        userId: null,
        userName: null
    }),

    getters: {
        getUser(state) {
            const user = {
                userId: state.userId,
                userName: state.userName
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
        }
    }
}