<template>
  <div class="yl-col" :class="colClass" :style="colStyle">
    <slot></slot>
  </div>
</template>
<script>
let validator = (value) => {
  if (value.constructor == Number && value <= 24) {
    value = JSON.parse(JSON.stringify({span: value, offset: value}))
  }
  let keys = Object.keys(value)
  let valid = true
  keys.forEach(key => {
    if (['span', 'offset'].indexOf(key) === -1) {
      valid = false
    }
  })
  return valid
}
export default {
  name: 'ylCol',
  props: {
    tag: {
      type: String
    },
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    },
    xs: {type: [Number, Object], validator,},
    sm: {type: [Number, Object], validator,},
    md: {type: [Number, Object], validator,},
    lg: {type: [Number, Object], validator,},
    xl: {type: [Number, Object], validator,}
  },
  data() {
    return {
      gutter: 0,
    }
  },
  methods: {
    createClasses(obj, str = '') {
      if (!obj) {
        return []
      }
      let array = []
      if (obj.span) {
        array.push(`yl-col-${str}${obj.span}`)
      }
      if (obj.offset) {
        array.push(`yl-offset-${str}${obj.offset}`)
      }
      if (obj.constructor == Number && obj <= 24) {
        array.push(`yl-col-${str}${obj}`, `yl-offset-${str}${obj}`)
      }
      return array
    }
  },
  computed: {
    colClass() {
      let {span, offset, xs, sm, md, lg, xl} = this
      let createClasses = this.createClasses
      return [
        ...createClasses({span, offset}),
        ...createClasses(xs, 'xs-'),
        ...createClasses(sm, 'sm-'),
        ...createClasses(md, 'md-'),
        ...createClasses(lg, 'lg-'),
        ...createClasses(xl, 'xl-'),
        this.tag
      ]
    },
    colStyle() {
      return {
        paddingLeft: this.gutter / 2 + 'px',
        paddingRight: this.gutter / 2 + 'px',
      }
    }
  }
}
</script>
<style lang="scss">
.yl-col {
  //border: 1px red solid;
  $class-prefix: yl-col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }
  $class-prefix: yl-offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n / 24) * 100%;
    }
  }
  @media (min-width: 577px) {
    $class-prefix: yl-col-xs-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: yl-offset-xs-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  @media (min-width: 768px) {
    $class-prefix: yl-col-sm-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: yl-offset-sm-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  @media (min-width: 992px) {
    $class-prefix: yl-col-md-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: yl-offset-md-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  @media (min-width: 1200px) {
    $class-prefix: yl-col-lg-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: yl-offset-lg-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
  @media (min-width: 1920px) {
    $class-prefix: yl-col-xl-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: yl-offset-xl-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
}
</style>
