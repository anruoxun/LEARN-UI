<template>
  <button class="l-button" :class="{ [`icon-${iconPosition}`]: true }" @click="$emit('click')">
    <l-icon v-if="loading" class="loading" name="loading"></l-icon>
    <l-icon v-if="icon && !loading" :name="icon"></l-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import lIcon from "./icon";
export default {
  name: "lButton",
  components: {
    lIcon,
  },
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false,
    },
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        return value === "left" || value === "right";
      },
    },
  },
};
</script>

<style lang="scss">
@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.l-button {
  height: var(--button-height);
  font-size: var(--font-size);
  padding: 0 1em;
  border-radius: var(--border-radius);
  background-color: var(--button-color);
  border: 1px solid var(--button-color);
  color: white;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  .icon {
    fill: white;
  }
  &:hover {
    background-color: var(--button-color-hover);
    color: var(--button-color);
    border-color: var(--button-color);
    .icon {
      fill: var(--button-color);
    }
  }
  &:active {
    background-color: var(--button-color-active);
    color: var(--button-color);
    color: white;
  }
  &:focus {
    outline: none;
  }
  > .content {
    order: 2;
  }
  > .icon {
    order: 1;
    margin-right: 0.3em;
  }
  &.icon-right {
    > .content {
      order: 1;
    }
    > .icon {
      order: 2;
      margin-right: 0em;
      margin-left: 0.3em;
    }
  }
  .loading {
    animation: loading 2s infinite linear;
  }
}
</style>
