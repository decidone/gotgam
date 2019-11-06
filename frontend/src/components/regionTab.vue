<template>
  <div>
    <tabs
      :tabs="tabs"
      :currentTab="currentTab"
      :wrapper-class="'default-tabs'"
      :tab-class="'default-tabs__item'"
      :tab-active-class="'default-tabs__item_active'"
      :line-class="'default-tabs__active-line'"
      @onClick="handleClick"
    />

    <!-- .content7 -->
    <div class="content7">
      <!-- tab1 -->
      <div v-if="currentTab === 'tab1'">

        <!-- carousel -->
        <carousel :auto="3000" :watch-items="list">
          <carousel-item v-for="(item, index) in list" :key="item.name">
            <p>
              {{index + 1}} {{item.url}}
            </p>
          </carousel-item>
        </carousel>
        <!-- carousel end -->

        <!-- .best_card_wrap -->
        <region-home></region-home>
        <region-home-food></region-home-food>

      </div>
      <!-- tab1 end -->

      <!-- tab2 -->
      <div v-if="currentTab === 'tab2'">
        <origin-info></origin-info>
      </div>
      <!-- tab2 end -->

      <!-- tab3 -->
      <div v-if="currentTab === 'tab3'">
        <region-map></region-map>
      </div>
      <!-- tab3 end -->

      <!-- tab4 -->
      <div v-if="currentTab === 'tab4'">
        <travel-gotgam></travel-gotgam>
      </div>
      <!-- tab4 end -->
    </div>

    <!-- .content7 end -->
  </div>
</template>

<script>
import Tabs from "vue-tabs-with-active-line";
import { Carousel, CarouselItem } from "vue-l-carousel";
import RegionHome from './regionHome.vue';
import RegionHomeFood from './regionHomeFood.vue';
import OriginInfo from './originInfo.vue';
import RegionMap from './regionMap.vue';
import TravelGotgam from './travelGotgam.vue';

export default {
  components: {
    Tabs,
    carousel: Carousel,
    "carousel-item": CarouselItem,
    RegionHome,
    RegionHomeFood,
    OriginInfo,
    RegionMap,
    TravelGotgam
  },

  data() {
    return {
      tabs: [
        { title: "홈", value: "tab1" },
        { title: "기본 정보", value: "tab2" },
        { title: "지도 보기", value: "tab3" },
        { title: "곶감 여행기", value: "tab4" }
      ],
      currentTab: "tab4",

      auto: 3000,

      list: [{ url: "남산타워" }, { url: "광화문" }, { url: "url3" }]
    };
  },

  methods: {
    handleClick(newTab) {
      this.currentTab = newTab;
    }
  }
};
</script>

<style>
/* tab */

button {
  width: 25%;
  box-sizing: border-box;
}

.tabs {
  position: relative;
  margin: 0 auto;
}

.tabs__item {
  display: inline-block;
  margin: 0;
  padding: 10px;
  padding-bottom: 8px;
  font-size: 16px;
  letter-spacing: 0.8px;
  color: gray;
  text-decoration: none;
  border: none;
  background-color: transparent;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  transition: all 0.25s;
}

.tabs__item_active {
  color: #ff4401;
}

.tabs__item:hover {
  border-bottom: 2px solid #ffb195;
  color: #ffb195;
}

.tabs__item:focus {
  outline: none;
  border-bottom: 2px solid #ff4401;
  color: #ff4401;
}

.tabs__item:first-child {
  margin-left: 0;
}

.tabs__item:last-child {
  margin-right: 0;
}

.tabs__active-line {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  background-color: #ff4401;
  transition: transform 0.4s ease, width 0.4s ease;
}

/* content7 */

.content7 {
  padding-top: 50px;
}

/* v-carousel */

.v-carousel {
  width: 100%;
  height: 15rem;
  overflow: hidden;
  position: relative;
  margin-bottom: 3.4rem;
}

.v-carousel-items {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.v-carousel-item {
  width: 100%;
  height: 100%;
  color: #fff;
}

.v-carousel-item:nth-of-type(1) {
  background: url('../assets/seoul1.jpg') center center;
  background-size: cover;
}

.v-carousel-item:nth-of-type(2) {
  background: url('../assets/seoul2.jpg') center center;
  background-size: cover;
}

.v-carousel-item:nth-of-type(3) {
  background: url('../assets/seoul3.jpg') center center;
  background-size: cover;
}

.v-carousel-item p {
  text-align: center;
  line-height: 15rem;
  font-size: 1.5rem;
  font-weight: 700;
}

.v-carousel-dots {
  position: absolute;
  bottom: 10px;
  left: 0;
  width: 100%;
  text-align: center;
}

.v-carousel-dot {
  cursor: pointer;
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.5);
}

.v-carousel-dot.active {
  background: #ff4401;
  cursor: default;
}

.v-carousel-nav {
  cursor: pointer;
  position: absolute;
  line-height: 30px;
  color: #ff4401;
  padding: 0 5px;
  background: rgba(225, 225, 225, 0.5);
  top: 50%;
  margin-top: -15px;
}

.v-carousel-nav.prev {
  left: 0;
}

.v-carousel-nav.next {
  right: 0;
}

.v-carousel-item {
  width: 100%;
  float: left;
}
</style>
