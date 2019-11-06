<template>
  <div>
    <!-- accordion_info_detail -->
    <div class="accordion_info_detail">
        <AccordionInfoDetailTitle1></AccordionInfoDetailTitle1>

        <b-list-group>
          <b-list-group-item href="#">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">교통수단</h5>
            </div>
            <p class="mb-1">
              <ul>
                <li>
                  <dl>
                    <dd>{{ myboard.daytraffic }}</dd>
                  </dl>
                </li>
              </ul>
            </p>
            <small>자가용이 있으면 주차시설이 잘 되어있기 때문에 추천드립니다.</small>
          </b-list-group-item>
          <b-list-group-item href="#">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">맛집</h5>
              <!-- <strong class="text-muted">존앤진피자</strong> -->
            </div>
            <p class="mb-1">{{ myboard.dayfood }}</p>
          </b-list-group-item>
          <b-list-group-item href="#foobar">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">비용</h5>
              <small class="text-muted">₩23000</small>
            </div>
            <p class="mb-1">
              <ul>
                <li>
                  <dl>
                    <dt>교통비</dt>
                    <dd>₩5000</dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dd>{{ myboard.daypay }}</dd>
                  </dl>
                </li>
              </ul>
            </p>
          </b-list-group-item>
        </b-list-group>
    </div>
  </div>
</template>

<script>
  import AccordionInfoDetailTitle1 from './accordionInfoDetailTitle1.vue';
  export default {
    components: {
      AccordionInfoDetailTitle1
    },

    created() {
      var id = this.$route.params.id;

      this.$http.get(`/api/mypage/${id}`)
        .then((response) => {
          this.myboard = response.data
          // console.log(response.data)
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
  .accordion_info_detail {
    margin-top: 20px;
  }

  .list-group-item.active {
    background: #25333c;
    border-color: #25333c;
  }
</style>