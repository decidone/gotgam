<template>
  <div>
    <div class="input_row">
      <label for="id">아이디</label>
      <input type="text" id="id" v-model="user.userid">
    </div>
    <div class="input_row">
      <label for="password">비밀번호</label>
      <input type="password" id="password" v-model="user.password">
    </div>
    <button v-on:click="login">로그인</button>
    <router-link :to="signUp.link">가입하기</router-link>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      signUp: {
        link: "/signUp"
      },
      user: {
        userid: '',
        password: ''
      }
    }
  },
  
  methods: {
    login: function (event) {
      this.$http.post('/api/users/login1',
        this.user
      )
      .then(
        (res) => { //no error
          if(res.data.success){
            alert(res.data.name + " 님 " + res.data.message)
            this.$router.push('/') 
          }
          else{
            alert(res.data.message);
          }
        },
        )
      .catch(err => {
        alert(err);
      })

      // vuex 샘플
      // 스토어에 저장
      this.$store.commit("USER_ID", "user_id 테스트")
      // 스토어에서 불러오기
      console.log(this.$store.getters.userId);
    }
  }
}
</script>

<style>
</style>