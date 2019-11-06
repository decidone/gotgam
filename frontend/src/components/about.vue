<template>
  <div class="wrap6">
    <div class="about">

      <strong class="tit_intro">곳곳의 감성, 곶감을 소개합니다.</strong>

      <div class="intro">
        <div class="container6">
          <h1 style="color: #1e1e1e">곶 감</h1>
          <p style="margin: 20px; color: #1e1e1e">나 의 발 자 취</p>
        </div>
      </div>

      <div class="wrap_cont">
        <div class="area_tit">
          <h4 class="tit_corp">곶감 소개</h4>
        </div>
        <div class="area_cont">
          <strong class="subject_corp">곶감이란?</strong>
          <p class="desc_info">
            곧감과 유사한 발음에서 비롯된 곶감. 언제든지 떠날 준비가 되어 있는 사람들을 위해 마련한 사이트입니다. <br>
            한 번쯤 가벼운 마음으로 우리의 고장을 둘러보러 걸음을 옮겨보는 것은 어떨까요?
          </p>
        </div>
        <div class="area_cont">
          <strong class="subject_corp">곶감은 이렇습니다.</strong>
          <ul class="item_info item_info3">
            <li class="info_cont">
              <em class="emph_tit">문화</em>
              <p class="desc_cont">
                문화를 재발견 하는 일은 곶감이 가장 잘하는 일입니다. <br>
                곶감은 여러분의 가까이에 국내 여행지를 중점으로 우리 고유 문화를 알리기 위해 있습니다. <br>
                소중한 우리의 문화를 널리 알리기 위해 그 중심에 곶감이 있겠습니다.
              </p>
            </li>
            <li class="info_cont">
              <em class="emph_tit">편의</em>
              <p class="desc_cont">
                기존의 방향대로 많은 사람들을 위해 편의를 가치로 둡니다. <br>
                어려운 여행지의 선택에도 망설임 없이 곶감과 함께 뛰어들어보세요.
              </p>
            </li>
            <li class="info_cont">
              <em class="emph_tit">감정</em>
              <p class="desc_cont">
                여러분이 여행을 다니며 느낀 감정을 함께 공유해주세요. <br>
                때로는 혼자서 때로는 많은 이들과 같이 여러분의 걸음이 헛되지 않도록 곶감이 함께 하겠습니다.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style>
  .wrap6 {
    /* max-width: 800px; */
    width: 100%;
    margin: 0 auto;
    padding: 3.4rem 0;
    box-sizing: border-box;
  }

  .about {
    max-width: 1160px;
    min-width: 320px;
    margin: 0 auto;
  }

  .tit_intro {
    display: block;
    font-size: 22px;
    line-height: 34px;
    color: #1e1e1e;
    padding-bottom: 2rem;
  }

  .intro {
    background-image: linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(240, 238, 231, 0.7)), url("https://picsum.photos/g/3000/2000");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    padding: 100px 0;
  }

  .container6 {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
  }

  .wrap_cont {
    overflow: visible;
    position: relative;
    width: 1160px;
    margin: 0 auto;
    clear: both;
    *zoom: 1
  }

  .wrap_cont:after {
    display: block;
    visibility: hidden;
    height: 0;
    font-size: 0;
    clear: both;
    content: '';
  }

  .area_tit {
    float: left;
    width: 300px;
  }

  .tit_corp {
    padding-top: 53px;
  }

  .area_tit .tit_corp {
    display: block;
    padding: 73px 40px 0 0;
    font-size: 18px;
    line-height: 30px;
    color: #1e1e1e;
    vertical-align: top;
  }

  .area_cont .subject_corp {
    display: block;
    padding-top: 73px;
    font-size: 18px;
    line-height: 30px;
    color: #1e1e1e
  }

  .wrap_cont .area_cont .subject_corp+.desc_info {
    padding-top: 19px;
  }

  .area_cont+.area_cont {
    margin-top: 60px;
    border-top: 1px solid #e6e6e6
  }

  .area_cont {
    float: right;
    width: 860px;
  }

  .item_info {
    overflow: hidden;
    padding-top: 40px
  }

  .item_info.item_info3 .info_cont {
    width: 220px;
    margin-left: 100px
  }

  .item_info .info_cont:first-child {
    margin-left: 0;
  }

  .item_info.item_info3 .info_cont {
    width: 220px;
  }

  .item_info .info_cont {
    float: left;
  }

  .info_cont .emph_tit {
    display: table-cell;
    width: 185px;
    height: 185px;
    padding: 0 20px;
    border: 1px solid #1e1e1e;
    border-radius: 185px;
    font-weight: bold;
    text-align: center;
    color: #1e1e1e;
    vertical-align: middle;
    box-sizing: border-box
  }

  .item_info3 .info_cont .emph_tit {
    width: 220px;
    height: 220px;
    font-size: 18px
  }

  .item_info3 .info_cont .desc_cont {
    padding-top: 24px;
    font-size: 14px;
    line-height: 24px;
  }



  .about .area_cont .thumb_g {
    display: block;
    margin-top: 27px
  }

  .culture_slide .list_slide {
    width: 1160px;
    height: 500px
  }

  .culture_slide .info_page {
    right: 29px
  }

  .item_info3 .info_cont .emph_tit {
    width: 220px;
    height: 220px;
    font-size: 18px
  }
</style>