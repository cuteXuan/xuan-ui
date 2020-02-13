<template>
    <div class="ax-form">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'AxForm',
  props: {
    model: {
      type: Object,
      require: true
    },
    labelWidth: {
      type: String,
      default: '80px'
    }
  },
  provide () {
    return {
      Form: this
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
