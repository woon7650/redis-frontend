<template >
    <v-card class="mt-sm-8 mt-md-5 mt-7 bg-transparent" style="margin:20%">
      <div class="card-padding pb-0">
        <h4 class="text-h4 font-weight-bolder text-typo mb-2">Login</h4>
      </div>
      <div class="card-padding pb-4">
        <v-text-field
          label="Id"
          color="#e91e63"
          outlined
          dense
          v-model="userId"
          class="font-size-input input-style py-0"
        ></v-text-field>
  
        <v-text-field
          label="Password"
          color="#e91e63"
          outlined
          dense
          v-model="userPassword"
          type="password"
          class="font-size-input input-style py-0"
        ></v-text-field>
  
        <v-btn
          elevation="0"
          :ripple="false"
          height="43"
          class="
            font-weight-bold
            text-uppercase
            btn-primary
            bg-gradient-primary
            py-2
            px-6
            me-2
            mt-7
            mb-2
            w-100
          "
          color="#5e72e4"
          small
          @click="requestSignIn()"
          >로그인</v-btn
        >
        <div class="text-center">
          <p class="text-sm text-body font-weight-light mt-3 mb-0">
            <a
              href="javascript:;"
              class="
                text-primary text-gradient text-decoration-none
                font-weight-bold
              "
              @click="$router.push('/signUp')"
              >회원가입</a
            >
          </p>
        </div>
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
          userId : this.userId,
          userPassword : this.userPassword,
          
        }
        this.$store.dispatch('login', parameter).then((response)=>{
          console.log(response)
        })
      },
    },
  }
  </script>
  