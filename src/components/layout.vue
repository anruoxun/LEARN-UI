<template>
  <div class="yl-layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'ylLayout',
  components: {},
  data() {
    return {
      layoutClass: {
        'yl-hasSider': false,
      }
    };
  },
  computed: {},
  created() {
  },
  mounted() {
    this.$children.forEach((vm) => {
      if (vm.$options.name === 'ylSider') {
        this.layoutClass['yl-hasSider'] = true
      }
    })
  },
  methods: {},
  filters: {}
}

</script>
<style lang='scss'>
.yl-layout {
  display: flex;
  flex-direction: column;
  //border: 1px solid red;
  flex-grow: 1;

  &.yl-hasSider {
    flex-direction: row;
  }
}
</style>
