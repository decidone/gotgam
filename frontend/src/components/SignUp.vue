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
        <div class="input_row">
            <label for="name">이름</label>
            <input type="text" id="name" v-model="user.name">
        </div>
        <div class="input_row">
            <label for="name">나이</label>
            <input type="text" id="age" v-model="user.age">
        </div>
        <button v-on:click="signUp">가입하기</button>
  </div>
</template>

<script>
export default {
    data: function() {
        return {
            // component의 data에 user라는 객체를 준비한다.
            // user 객체 안에는 아이디, 이름, 비밀번호를 저장할 수 있는 속성이 있다.
            user: {
                userid: '',
                password: '',
                name: '',
                age: ''
            }
        }
    },

    // axios로 /api/users/signUp을 호출하여 입력 받은 데이터(this.user)를 user 객체에 저장한다. 
    methods: {
        signUp: function (event) {
            this.$http.post('/api/users/signUp1',
                this.user
            )
            .then((res) => {
                // 성공시, /login 페이지로 이동
                if (res.data.success == true) {
                    alert(res.data.message);
                    this.$router.push('/login') 
                }
                // 실패시, error 메세지
                else if (res.data.success == false) {
                    alert(res.data.message);
                }
            })
            .catch(function (error) {
                alert(error)
            })
        }
    }
}
</script>

<style>

</style>