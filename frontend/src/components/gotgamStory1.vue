<template>
  <div class="section4_contents row">
    <div class="s4_contents_wrap col-12 col-md-6">
      <svg data-v-9004fbdc="" xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 50 50"
        data-v-701be175="">
        <g fill="#ff4401">
          <path
            d="M23.7324679 8.07453187C27.2220325 8.27548472 29.9997014 11.1777038 29.9997014 14.7166729 29.9997014 18.3852035 27.0150769 21.3693595 23.3465928 21.3693595 19.7719055 21.3693595 16.9744992 18.5856879 16.695267 14.7505635 16.218735 8.21918789 19.5118904 2.88809409 22.4768275.308141156 22.655375.152469281 22.9227018.155234672 23.0993753.314047359 23.3639842.553953516 23.5447812.737937844 23.9407825 1.14171938 24.2419517 1.44795347 24.6713269 1.88557866 25.3648442 2.57909419 25.5246395 2.73884433 25.5479836 2.99014097 25.4193109 3.17646909 23.7182647 5.64565659 23.6720467 7.42132903 23.7324679 8.07453187zM7.08453164 8.07453188C10.5745161 8.27459423 13.352235 11.1772817 13.352235 14.7166725 13.352235 18.3852031 10.3676095 21.3693591 6.69907852 21.3693591 3.12439106 21.3693591.326562891 18.5856875.0463910156 14.7510316L.0463910156 14.7505631C-.429202641 8.21782847 2.86442241 2.88762558 5.82935972.307672219 6.00785981.152937797 6.27518798.155234672 6.45190669.314047359 6.71646905.554375531 6.89778145.738875297 7.29509395 1.14354731 7.59584423 1.44978183 8.02475006 1.88693808 8.71690659 2.57909419 8.87665627 2.73884433 8.89957842 2.99014097 8.77137511 3.17646909 7.06850053 5.64884395 7.02364102 7.4231565 7.08453164 8.07453188z">
          </path>
        </g>
      </svg>
      <div class="s4_contents">
        <p class="s4_normal">
          Q. 곶감을 선택하게 된 이유? <br> <br>
          현재 슬럼프와 잦은 몸살로 인해 의욕을 잃어가던 중 문득 힐링을 받고 싶어 방문하게 됐다. 곶감의 기분에 따른 여행지 선택은 탁월했으며 그 와중에도 소소하게나마 내 감정을 남들과 공유한다는 사실은 무척이나 색다른 경험으로 다가왔다. 사람들이 자신의 기분 따라 가는 지역과 활동 역시 다 제각각이었지만 누군가가 나보다 먼저 이곳에 와서 나와 같은 기분을 느끼고 힐링을 받아갔다는 사실만으로도 큰 위안이 되었던 것 같다.
        </p>
        <p class="s4_bold">
          Yu Jin In Suwon
        </p>
      </div>
    </div>
    <div class="s4_contnets_photo col-12 col-md-6">
      <div class="s4_background1"></div>
    </div>
  </div>
</template>

<script>
export default {
    
}
</script>

<style>
@keyframes fadeIn {
    0% {opacity: 0;}
    100% {opacity: 1;}
}

.section4_contents {
    display: flex;
    animation: fadeIn 0.5s;
}

.s4_contents_wrap {
    /* flex: 1; */
    display: flex;
}

.s4_contents {
    /* flex: 1; */
    display: flex;
    flex-direction: column;
    padding: 1.2rem 2.2rem 0 0;
}

.s4_contents .s4_normal {
    margin-bottom: 1rem;
    font-weight: 400;
    font-size: .9rem;
    line-height: 1.4rem;
}

.s4_contents .s4_bold {
    font-weight: 700;
    font-size: .9rem;
    line-height: 1.4rem;
}

.s4_contnets_photo {
    /* flex: 1; */
    display: flex;
}

.s4_background1 {
    background: url(../assets/story1.jpg) no-repeat;
    padding-top: 60%;
    background-size: cover;
    background-position: 50%;
    position: relative;
    width: 100%;
    display: flex;
    border-radius: 13px;
}
</style>