<template>
  <div>
    <b-button class="w-100" id="show-btn" @click="showModal">곶감보기</b-button>

    <b-modal ref="my-modal" hide-footer title="순천">
      <div class="d-block">
        <p>
          2019년 10월경 바쁘게 지내느라 여름휴가도 못가고 몸도 마음도 지쳐있던 찰나 중요한 프로젝트를 마무리하고 필을 받아 차를 끌고 남쪽으로 떠났습니다. <br> 
          회사에는 일주일 휴가를 내고 기분은 싱숭생숭한 채로 무작정 들른 곳은 순천! <br> 
          예전에 전국을 유람할 때 잠깐 들렸던 곳인데 많이 변해 있더군요. <br> 
          처음 방문한 곳은 순천만 습지로 자연 생태공원이었습니다. 드넓은 습지로 희귀한 식물들과 철새들이 즐겨 찾는 곳이죠. <br> 
          다만 순천에 도착한 시간이 아무래도 늦은 오후다 보니 정원만 구경하고 해가져서 제대로 둘러보지도 못했네요. <br> 
          내일을 기약하며 인근 맛집을 검색해서 간 곳은 순천 꼬막 맛집! 언제와도 기분 좋은 순천이네요~!
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