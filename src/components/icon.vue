<template>
  <svg class="icon">
    <use :xlink:href="`#icon-${name}`"></use>
  </svg>
<!--  <i class="icon" :class="`icon-${name}`"></i>-->
</template>

<script>
export default {
  name: "ylIcon",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.icon {
  width: 1em;
  height: 1em;
}
</style>
