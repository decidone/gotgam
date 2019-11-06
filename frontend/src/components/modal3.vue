<template>
  <div>
    <b-button class="w-100" id="show-btn" @click="showModal">곶감보기</b-button>

    <b-modal ref="my-modal" hide-footer title="서울">
      <div class="d-block">
        <p>
          지난주말 경복궁 나들이. 한참만에 다녀 온 것 같다. <br> 
          가끔은 주말에 이렇게 걷고 싶지만 사람들이 너무 많아서 발 디딜틈이 별로 없었다. <br> 
          경복궁 입장권은 1인당 3천원. 입구부터 관람객들로 북적거리는데 그 활기가 엄청나다. <br> 
          기력이 없는 내가 따라갈 수 없을 정도. 경회루, 경복궁에 오면 꼭 들리는 장소인데 가을이다 보니 운치가 더 깊어진 것 같아 그 모습 보는 시간은 좋았다. <br> 
          사진은 아쉽게도 사람들이 많았던 탓에 제대로 찍지는 못하고 크고 웅장한 은행나무 앞에서 하나 찰칵. <br> 
          북적거리는 걸 좋아하는 사람이 있다면 주말에 꼭 경복궁에 들렀으면 좋겠다. 
        </p>
      </div>
      <b-button class="mt-3" variant="outline-danger" block @click="hideModal">다른 곶감보기</b-button>
    </b-modal>
  </div>
</template>

<script>
  export default {
    methods: {
      showModal() {
        this.$refs['my-modal'].show()
      },
      hideModal() {
        this.$refs['my-modal'].hide()
      }
    }
  }
</script>