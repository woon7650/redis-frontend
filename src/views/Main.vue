<template >
    <v-card class="mt-sm-8 mt-md-5 mt-7 bg-transparent" style="margin:20%">
      <div class="card-padding pb-0">
        <h4 class="text-h4 font-weight-bolder text-typo mb-2">Main</h4>
      </div>
      <div class="card-padding pb-4">
        로그인 완료        
      </div>
    </v-card>
  </template>
  <script>

  export default {
    name: 'sign-up-illustration',
    data() {
      return {
        checkbox: false,
        userId: '',
        userPassword: '',
      }
    },
    methods: {
      requestSignIn() {
        const parameter = {
          id : this.userId,
          password : this.userPassword,
          
        }
        this.$store.dispatch('login', parameter).then((response)=>{
          console.log(response)
        })
      },
    },
  }
  </script>
  