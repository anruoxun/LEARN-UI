<template>
  <div style="box-sizing:content-box">
    <div class="yl-switch-active" :class="value ? 'yl-switch-activeclose' : 'yl-switch-activeopen'"
         @click="$emit('click');" :style="{ backgroundColor: value ? inactiveColor : activeColor }">
      <div class="yl-switch-active-g" :class="value ? 'yl-switch-activeclose-g' : 'yl-switch-activeopen-g'"></div>
      <span>{{ value ? title.split("|")[1] : title.split("|")[0] }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "ylSwitch",
  props: {
    value: {
      default: false,
    },
    title: {
      type: String,
      default: "是|否",
    },
    activeColor: {
      type: String,
    },
    inactiveColor: {
      type: String,
    },
  },
  watch: {
    title: {
      handler(val) {
        // console.log(val);
      },
      immediate: true,
    },
    activeColor: {
      handler(val) {
        // console.log(val);
      },
      immediate: true,
    },
    inactiveColor: {
      handler(val) {
        // console.log(val);
      },
      immediate: true,
    },
  }
};
</script>
<style lang="scss">
.yl-switch-active {
  min-height: 25px;
  min-width: 50px;
  border-radius: 50px;
  line-height: 25px;
  padding: 0 5px;
  transition: all 0.3s;
  display: flex;
  justify-content: space-between;
  color: white;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0);

  span {
    width: 100%;
    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }
}

.yl-switch-activeclose {
  background: #ff0000;
  text-align: right;
}

.yl-switch-activeopen {
  background: #306ecc;
  text-align: left;
}

.yl-switch-active-g {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #fff;
  position: absolute;
  box-shadow: 0 3px 1px 0 rgba(0, 0, 0, 5%), 0 2px 2px 0 rgba(0, 0, 0, 10%), 0 3px 3px 0 rgba(0, 0, 0, 5%);
  transition: left 0.3s;
}

.yl-switch-activeclose-g {
  left: 0;
}

.yl-switch-activeopen-g {
  left: calc(100% - 25px);
}
</style>
