<template>
    <div class="ax-radio-group">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'AxRadioGroup',
  provide () {
    return {
      RadioGroup: this
    }
  },
  props: {
    value: null
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
