<template>
    <div class="wrap3">
      <select-mood-wrap></select-mood-wrap>
      <div class="container2">
        <region-home-food></region-home-food>
      </div>
    </div>
</template>

<script>
import SelectMoodWrap from './selectMoodWrap.vue';
import RegionHomeFood from './regionHomeFood.vue';

export default {
  components: {
    SelectMoodWrap,
    RegionHomeFood
  }

}
</script>

<style>
.wrap3 {
  /* max-width: 800px; */
	width: 100%;
	margin: 0 auto;
  padding: 3.4rem 0;
  box-sizing: border-box;
}

.container2 {
    max-width: 1024px;
    min-width: 320px;
    margin: 0 auto;
}
</style>