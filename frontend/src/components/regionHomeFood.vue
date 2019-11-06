<template>
  <!-- .best_food_wrap -->
  <div class="best_food_wrap">
      <!-- .best_food_title -->
      <div class="best_food_title">
        <h2>곶감 검증 맛집</h2>
      </div>
      <!-- .best_food_title END -->

      <!-- .best_food_subtitle -->
      <div class="best_food_subtitle">
          <p>광고성 추천글이 아닌 현지인들이 직접 추천해주는 곶감 검증 맛집!</p>
      </div>
      <!-- .best_food_subtitle END -->

      <!-- .best_food_body -->
      <div class="best_food_body">
          <div class="best_food_inner">

              <!-- .food_card -->
              <div class="food_card">
                  <!-- .food_card_inner -->
                  <div class="food_card_inner">

                      <div class="food_image1"></div>

                      <!-- .food_card_content -->
                      <div class="food_card_content">
                          <div class="food_types">
                              <p><span>서울</span> 마포구 양화로18길 3</p>
                              <p>일식</p>
                          </div>

                          <!-- .food_card_store -->
                          <div class="food_card_store">
                              <h4>스시메이진</h4>
                          </div>
                          <!-- .food_card_store END -->

                          <!-- .food_card_foot -->
                          <div class="food_card_foot">
                              <!-- .food_card_foot_inner -->
                              <div class="food_card_foot_inner">
                                  <!-- .food_card_foot_wrap -->
                                  <div class="food_card_foot_wrap">
                                      <p class="store_time">11:30 - 22:00</p>
                                      <p class="store_tel">02-3144-7072</p>
                                  </div>
                                  <!-- .food_card_foot_wrap END -->
                              </div>
                              <!-- .food_card_foot_inner END -->
                          </div>
                          <!-- .food_card_foot END -->

                      </div>
                      <!-- .food_card_content END -->

                  </div>
                  <!-- .food_card_inner END -->
              </div>
              <!-- .food_card END -->

              <!-- .food_card -->
              <div class="food_card">
                  <!-- .food_card_inner -->
                  <div class="food_card_inner">

                      <div class="food_image2"></div>

                      <!-- .food_card_content -->
                      <div class="food_card_content">
                          <div class="food_types">
                              <p><span>경기 수원시</span> 영통구 센트럴타운로 85</p>
                              <p>디저트</p>
                          </div>

                          <!-- .food_card_store -->
                          <div class="food_card_store">
                              <h4>카페드로잉 광교점</h4>
                          </div>
                          <!-- .food_card_store END -->

                          <!-- .food_card_foot -->
                          <div class="food_card_foot">
                              <!-- .food_card_foot_inner -->
                              <div class="food_card_foot_inner">
                                  <!-- .food_card_foot_wrap -->
                                  <div class="food_card_foot_wrap">
                                      <p class="store_time">09:30 - 23:30</p>
                                      <p class="store_tel">031-213-5129</p>
                                  </div>
                                  <!-- .food_card_foot_wrap END -->
                              </div>
                              <!-- .food_card_foot_inner END -->
                          </div>
                          <!-- .food_card_foot END -->

                      </div>
                      <!-- .food_card_content END -->

                  </div>
                  <!-- .food_card_inner END -->
              </div>
              <!-- .food_card END -->

              <!-- .food_card -->
              <div class="food_card">
                  <!-- .food_card_inner -->
                  <div class="food_card_inner">

                      <div class="food_image3"></div>

                      <!-- .food_card_content -->
                      <div class="food_card_content">
                          <div class="food_types">
                              <p><span>충남 홍성군</span> 홍북읍 청사로174번길 21</p>
                              <p>브런치</p>
                          </div>

                          <!-- .food_card_store -->
                          <div class="food_card_store">
                              <h4>OiOiOi</h4>
                          </div>
                          <!-- .food_card_store END -->

                          <!-- .food_card_foot -->
                          <div class="food_card_foot">
                              <!-- .food_card_foot_inner -->
                              <div class="food_card_foot_inner">
                                  <!-- .food_card_foot_wrap -->
                                  <div class="food_card_foot_wrap">
                                      <p class="store_time">10:00 - 18:00</p>
                                      <p class="store_tel">010-3526-3962</p>
                                  </div>
                                  <!-- .food_card_foot_wrap END -->
                              </div>
                              <!-- .food_card_foot_inner END -->
                          </div>
                          <!-- .food_card_foot END -->

                      </div>
                      <!-- .food_card_content END -->

                  </div>
                  <!-- .food_card_inner END -->
              </div>
              <!-- .food_card END -->

          </div>
      </div>
      <!-- .best_food_body END -->
  </div>
</template>

<script>
export default {

}
</script>

<style>
.best_food_wrap {
    padding: 3.4rem 0;
    border-top: 1px solid #e4e5ec;
    margin: 0 auto;
}

.best_food_wrap h2 {
    font-weight: 700;
    font-size: 1.9rem;
    line-height: 2.4rem;
    margin: 0;
    padding: 0;
}

.best_food_subtitle {
    margin-top: .6rem;
}

.best_food_subtitle p {
    font-weight: 400;
    font-size: 1.1rem;
    line-height: 1.4rem;
}

.best_food_body {
    margin-top: 2.2rem;
}

.best_food_inner {
    display: flex;
    flex-wrap: wrap;
    margin: -6px;
}

.food_card {
    width: 33.3%;
    display: flex;
    border: 1px solid transparent;
    box-sizing: border-box;
    /* min-width: 286px;
    max-width: 430px; */
}

.food_card_inner {
    display: flex;
    flex-direction: column;
    width: 100%;
    border: 1px solid #e4e5ec;
    cursor: pointer;
}

.food_image1 {
    background: url(../assets/food1.jpeg) no-repeat;
    display: flex;
    overflow: hidden;
    background-size: cover;
    background-position: 50%;
    position: relative;
    width: 100%;
    padding-top: 70%;
}

.food_image2 {
    background: url(../assets/food2.jpeg) no-repeat;
    display: flex;
    overflow: hidden;
    background-size: cover;
    background-position: 50%;
    position: relative;
    width: 100%;
    padding-top: 70%;
}

.food_image3 {
    background: url(../assets/food3.jpeg) no-repeat;
    display: flex;
    overflow: hidden;
    background-size: cover;
    background-position: 50%;
    position: relative;
    width: 100%;
    padding-top: 70%;
}

.food_card_content {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 1rem;
    text-align: left;
}

.food_types {
    display: flex;
}

.food_types p {
    font-weight: 600;
    font-size: .65rem;
    line-height: 1.15rem;
    color: #898ea2;
    text-transform: uppercase;
}

.food_types p span {
    color: #ff4401;
}

.food_types p:nth-of-type(2)::before {
    margin-left: 0.3rem;
    content: "| ";
}

.food_card_store {
    display: flex;
    height: 46px;
    overflow: hidden;
}

.food_card_store h4 {
    font-weight: 600;
    font-size: 1.3rem;
    line-height: 2.2rem;
    margin: 0;
}

.food_card_foot {
    display: flex;
    align-items: center;
    margin-bottom: -.6rem;
}

.food_card_foot_inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

.food_card_foot_wrap {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.food_card_foot_wrap p {
    font-weight: 400;
    color: #898ea2;
    font-size: .8rem;
    line-height: 1.15rem;
}

.food_card_foot_wrap p:nth-of-type(1)::before {
    content: "Time. ";
}

.food_card_foot_wrap p:nth-of-type(2)::before {
    content: "| Tel. ";
    margin-left: 0.3rem;
}
</style>