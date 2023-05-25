<template>
  <div href="#" class="grid__item grid__item--c1">
    <div class="stack">
      <div class="stack__deco"></div>
      <div class="stack__deco"></div>
      <div class="stack__deco"></div>
      <div class="stack__deco"></div>
      <div class="stack__figure">
        <img
          class="stack__img"
          src="http://127.0.0.1:5500/img/3.png"
          alt="Image"
        />
      </div>
    </div>
    <div class="grid__item-caption">
      <h3 class="grid__item-title">anaerobic</h3>
      <div class="column column--left">
        <span class="column__text">Period</span>
        <span class="column__text">Subjects</span>
        <span class="column__text">Result</span>
      </div>
      <div class="column column--right">
        <span class="column__text">2045</span>
        <span class="column__text">133456</span>
        <span class="column__text">Positive</span>
      </div>
    </div>
  </div>

</template>

<script setup>
const animate = (dom) => {
  const ELEMENT = document.querySelector(dom);
  const { $PolarisFx } = useNuxtApp();
  new $PolarisFx(ELEMENT);
};

onMounted(() => {
  animate(".grid__item");
});
</script>

<style lang="scss" scoped></style>
