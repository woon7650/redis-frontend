<template>
    <v-card class="mt-sm-8 mt-md-5 mt-7 bg-transparent" style="margin:20%">
    
        <div class="card-padding pb-0">
    
            <h4 class="text-h4 font-weight-bolder text-typo mb-2">회원가입</h4>
    
        </div>
    
        <div class="card-padding pb-4">
    
            <v-text-field label="Id" color="#e91e63" outlined dense v-model="userId" class="font-size-input input-style py-0"></v-text-field>
    
            <v-text-field label="Name" color="#e91e63" outlined dense v-model="userName" class="font-size-input input-style py-0"></v-text-field>
    
            <v-text-field label="Password" color="#e91e63" outlined dense v-model="userPassword" type="password" class="font-size-input input-style py-0"></v-text-field>
    
            <v-text-field label="Email" color="#e91e63" outlined dense v-model="userEmail"  class="font-size-input input-style py-0"></v-text-field>
    
    
    
    
    
            <div class="text-center">
    
                <p class="text-sm text-body font-weight-light mt-3 mb-0">
    
                    <a href="javascript:;" class="
    
                    text-primary text-gradient text-decoration-none
    
                    font-weight-bold
    
                  " @click="requestSignUp()">회원가입</a
    
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
            userName: '',
            userEmail: ''
        }
    },
    methods: {
        requestSignUp() {
            const parameter = {
                id: this.userId,
                password: this.userPassword,
                email: this.userEmail,
                name: this.userName

            }
            this.$store.dispatch('signup', parameter).then((response) => {
               
                this.$router.push('/');
            })
        },
    },
}
</script>
  