<template>
  <div class="user_info_wrap">
    <div id="userid" class="userId"></div>
    <div id="username" class="userName"></div>
    <nav class="mynav">
      <ul>
        <li>
          <a href="">내가 작성한 게시물</a>
        </li>
      </ul>
    </nav>
</div>
</template>

<script>
  export default {
    created() {
      this.$http.post('/api/mypage/info')
        .then((response) => {
          var dom1 = document.getElementById('userid');
          dom1.innerHTML = '<p class="userfont1">' + response.data.userid + '</p>';

          var dom2 = document.getElementById('username');
          dom2.innerHTML = '<p class="userfont2">' + response.data.name + '</p>';
        })
    }
  }
</script>

<style>
.user_info_wrap {
  padding-left: 4rem;
  margin-top: 3.7rem;
}

.userfont1 {
  font-size: 5em;
  font-weight: bold;
}

.userName {
  font-size: 3.5em;
  font-weight: bold;
}
</style>