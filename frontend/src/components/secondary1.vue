<template>
  <div class="secondary col-lg-4 col-md-4 col-12 tour-details-sidebar">
      <div class="tour-side-details">
          <ul>
              <li class="side-title">Person</li>
              <li>
                  <span>{{ myboard.peoples }}</span>
              </li>
          </ul>
          <ul>
              <li class="side-title">DAY</li>
              <li>{{ myboard.dayn }}일</li>
          </ul>
          <ul>
              <li class="side-title">Mood</li>
              <li>기쁨</li>
          </ul>
          <ul>
              <li class="side-title">WEATHER</li>
              <li>맑음</li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    created() {
      var id = this.$route.params.id;

      this.$http.get(`/api/mypage/${id}`)
        .then((response) => {
          this.myboard = response.data
        //   console.log(response.data)
        })
    },

    data() {
        return {
          myboard: {}
    }
}

}
</script>

<style>

.secondary {
    float: left;
    margin: 15px auto;
    color: #323c46;
}

.tour-details-sidebar .tour-side-details {
    padding: 15px 30px;
}

.tour-side-details {
    border: 1px solid #eeeaea;
}

.secondary.tour-details-sidebar ul {
    padding: 15px 0;
    margin: 0;
    border-bottom: 1px solid #eeeaea;
}

.tour-details-sidebar ul:last-child {
    border-bottom: none;
}

.tour-details-sidebar li.side-title, .side-title {
    margin-bottom: 10px;
    display: block;
    font-size: 1.3rem;
    font-weight: 700;
    color: #323c46;
}

.person-side {
    float: right;
    display: flex;
}
</style>