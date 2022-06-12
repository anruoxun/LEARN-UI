<template>
  <div style="box-sizing:content-box">
    <div class="active" :class="value ? 'activeclose' : 'activeopen'" @click="$emit('click')" :style="{ backgroundColor: value ? inactiveColor : activeColor }">
      <div class="active-g" :class="value ? 'activeclose-g' : 'activeopen-g'"></div>
      <span>{{ value ? title.split("|")[0] : title.split("|")[1] }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "lSwitch",
  props: {
    value: {
      default: false,
    },
    title: {
      type: String,
      default: "√|×",
    },
    activeColor: {
      type: String,
      default: "#ff0000",
    },
    inactiveColor: {
      type: String,
      default: "#306ecc",
    },
  },
  watch: {
    title: {
      handler(val) {
        console.log(val);
      },
      immediate: true,
    },
    activeColor: {
      handler(val) {
        console.log(val);
      },
      immediate: true,
    },
    inactiveColor: {
      handler(val) {
        console.log(val);
      },
      immediate: true,
    },
  },
  data() {
    return {};
  },
  created() {},
};
</script>
<style scope lang="scss">
.active {
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
.activeclose {
  background: #306ecc;
  text-align: right;
}
.activeopen {
  background: #ff0000;
  text-align: left;
}
.active-g {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #fff;
  position: absolute;
  box-shadow: 0 3px 1px 0 rgba(0, 0, 0, 5%), 0 2px 2px 0 rgba(0, 0, 0, 10%), 0 3px 3px 0 rgba(0, 0, 0, 5%);
  transition: left 0.3s;
}
.activeclose-g {
  left: 0;
}
.activeopen-g {
  left: calc(100% - 25px);
}
</style>
