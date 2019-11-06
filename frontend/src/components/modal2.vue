<template>
  <div>
    <b-button class="w-100" id="show-btn" @click="showModal">곶감보기</b-button>

    <b-modal ref="my-modal" hide-footer title="부산">
      <div class="d-block">
        <p>
          엉망진창 나홀로 부산여행기 3일차에 접어들었다. <br> 
          초코바 입에 물고 해운대 시외버스 터미널로 이동! <br> 
          얼마전 인터넷 서핑을 하다 발견한 대룡마을에 가기 위해서이다. <br> 
          동해선 광역전철을 타고 일광역에서 내려 마을버시를 타는 방법도 가능할 듯 한데, 운행 시간을 맞추기가 까다로워 보여 시외버스를 이용하기로 했다. <br> 
          3400원을 내고 명례행 티켓을 구매한 후 시간이 되어 버스에 올라탔더니 총 40분이 소요됐다. <br> 
          휴가를 내고 평일에 다녀와서 그런지 아무도 없어 모험하는듯한 기분도 들고. <br> 
          주말에 왔으면 카페나 식당 정도는 열지 않았을까 하는 아쉬운 마음이. <br> 
          이런 일을 겪게 되는 것이 비수기에 떠나는 여행의 단점이라고 할 수 있겠다. 
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