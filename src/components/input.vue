<template>
  <div class="yl-input"
       :class="{error,'yl-input-prefix':prefixIcon || $slots.prefix,'yl-input-suffix':suffixIcon || $slots.suffix}">
    <input
        :type="showPassword ? 'password': 'text'"
        :value="value"
        :disabled="disabled"
        :readonly="readonly"
        @change="$emit('input',$event.target.value,$event)"
        @input="$emit('input',$event.target.value,$event)"
        @focus="$emit('focus',$event.target.value,$event)"
        @blur="$emit('blur',$event.target.value,$event)"
    >
    <span v-if="$slots.prefix" class="yl-input-prefix-icon">
      <slot name="prefix"></slot>
    </span>
    <span v-else-if="prefixIcon.length" class="yl-input-prefix-icon">
      <icon :name="prefixIcon"></icon>
    </span>
    <span v-if="$slots.suffix" class="yl-input-suffix-icon">
      <slot name="suffix"></slot>
    </span>
    <span v-else-if="suffixIcon.length" class="yl-input-suffix-icon">
      <icon :name="suffixIcon"></icon>
    </span>
    <template v-if="error">
      <span class="error-message">
        <icon name="error" class="icon-error"></icon>
        <span class="errorMessage">{{ error }}</span>
      </span>
    </template>
  </div>
</template>

<script>
import Icon from "./icon";

export default {
  name: "ylInput",
  components: {
    Icon,
  },
  props: {
    value: {
      type: [String, Number],
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String,
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    prefixIcon: {
      type: String,
      default: ''
    },
    suffixIcon: {
      type: String,
      default: ''
    },
  }
}
</script>

<style scoped lang="scss">
$height: 32px;
$border-color: #c2cedf;
$border-color-hover: #66b1ff;
$border-radius: 4px;
$font-size: 12px;
$red: #F1453D;
.yl-input {
  font-size: $font-size;
  display: inline-flex;
  align-items: center;
  line-height: $font-size;

  //> :not(:last-child) {
  //  margin-right: .5em;
  //}

  > input {
    height: 32px;
    border: 1px solid $border-color;
    border-radius: 4px;
    padding: 0 8px;
    font-size: inherit;

    &:hover {
      border-color: $border-color-hover;
    }

    &:focus {
      border-color: $border-color-hover;
      outline: none;
    }

    &[disabled], &[readonly] {
      border-color: #bbb;
      color: #bbb;
      cursor: not-allowed;
    }
  }

  &.error {
    > input {
      border-color: $red;
    }
  }

  .error-message {
    display: contents;
  }

  .icon-error {
    fill: $red;
  }

  .errorMessage {
    color: $red;
  }
}

.yl-input-suffix {
  position: relative;

  > input {
    padding-right: 30px;
  }

  .yl-input-suffix-icon {
    right: 5px;
  }
}

.yl-input-prefix {
  position: relative;

  > input {
    padding-left: 30px;
  }

  .yl-input-prefix-icon {
    left: 5px;
  }
}

.yl-input-prefix-icon,
.yl-input-suffix-icon {
  position: absolute;
  top: 0px;
  display: inline-block;
  height: 100%;
  width: 25px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: #c0c4cc;
  }
}
</style>
