<template>
  <!-- travel_gotgam_wrap -->
  <div class="travel_gotgam_wrap2">
    <!-- travel_gotgom_title -->
    <div class="travel_gotgam_title2">
       <my-info></my-info>
    </div>
    <!-- travel_gotgam_title end -->

    <!-- travel_gotgam_body -->
    <div class="travel_gotgam_body2">
      <!-- travel_gotgam_inner -->
      <div class="travel_gotgam_inner" v-for="(my, idx) in mys" v-bind:key="idx">

        <!-- travel_gotgam_list -->
        <router-link :to="{ name: 'myPageDetail', params: { id: my.id }}">
          <div class="travel_gotgam_list">
            <!-- travel_gotgam_list_inner -->
            <div class="travel_gotgam_list_inner">

              <!-- travel_gotgam_img -->
              <div class="travel_gotgam_list_img">
                <div class="travel_gotgam_img">
                  <!-- <img v-bind:src="movie.poster" class="travel_gotgam_img"> -->
                </div>
              </div>

              <!-- travel_gotgam_list_content -->
              <div class="travel_gotgam_list_content">
                <!-- list_content_title -->
                <div class="list_content_title">
                  <p>{{ my.maintitle }}</p>
                </div>
                <!-- list_content_title end -->

                <!-- list_content_info -->
                <div class="list_content_info">
                  <!-- <p><span>작성자: </span> {{movie.director}}</p> -->
                </div>
                <!-- list_content_info end -->
              </div>
              <!-- travel_gotgam_list_content end -->

            </div>
            <!-- travel_gotgam_list_inner end -->
          </div>
        </router-link>
        <!-- travel_gotgam_list end -->

      </div>
      <!-- travel_gotgam_inner end -->
    </div>
    <!-- travel_gotgam_body end -->
  </div>
</template>

<script>
import MyInfo from './myinfo.vue';

  export default {
    components: {
      MyInfo
    },

    created() {
        this.$http.post('/api/mypage/')
        .then((response) => {
          this.mys = response.data
          console.log(response.data)
        })
    },

    data() {
      return {
        mys: [],
        gotgamdetail: {
          link: "/myPageDetail"
        }
      }
    }
  }
</script>

<style>
  a {
    text-decoration: none;
    color: #2c3250;
  }

  a:hover {
    text-decoration: none;
    color: #2c3250;
  }

  .travel_gotgam_wrap2 {
    width: 100%;
    height: 100%;
    padding: 2.4rem 0;
    margin: 0 auto;
  }

  .travel_gotgam_wrap2::after {
    content: '';
    display: table;
    clear: both;
  }

  .travel_gotgam_title2 {
    width: 30%;
    float: left;
  }

  .travel_gotgam_title2 h2 {
    font-weight: 700;
    font-size: 1.9rem;
    line-height: 2.4rem;
    margin: 0;
    padding: 0;
  }

  .travel_gotgam_body2 {
    width: 70%;
    height: 100%;
    margin: 0 auto;
    margin-top: 2.2rem;
    float: right;
    padding: 0 2rem;
    border-left: 1px solid #ddd;
  }

  .travel_gotgam_list {
    width: 100%;
    height: 16rem;
    flex: 1;
    display: flex;
    margin: 3rem 0;
  }

  .travel_gotgam_list_inner {
    width: 100%;
    height: 100%;
    display: flex;
    border: 1px solid #ddd;
    box-sizing: border-box;
    padding: 1.5rem;
  }

  .travel_gotgam_list_img {
    width: 35%;
    padding-right: 3rem;
    box-sizing: border-box;
  }

  .travel_gotgam_img {
    width: 100%;
    height: 100%;
    /* background: url(../assets/section3_img2.jpg) no-repeat; */
    background-size: cover;
  }

  .travel_gotgam_list_content {
    width: 55%;
    box-sizing: border-box;
    padding-right: 3rem;
  }

  .travel_gotgam_list_content>div {
    margin: 1.2rem 0;
  }

  .list_content_title {
    font-size: 1.3rem;
    font-weight: 600;
  }

  .my_gotgam_wrap {
    width: 10%;
    box-sizing: border-box;
    border: 1px solid #ddd;
  }
</style>