<template>
  <div class="wrap2">
      <visual-wrap></visual-wrap>
      <div class="container2">
        <region-tab></region-tab>
      </div>
  </div>
</template>

<script>
import VisualWrap from './visualWrap.vue';
import RegionTab from './regionTab.vue';

export default {
    components: {
        VisualWrap,
        RegionTab
    }
}
</script>

<style>
.wrap2 {
    width: 100%;
}

.container2 {
    max-width: 1024px;
    min-width: 320px;
    margin: 0 auto;
}
</style>