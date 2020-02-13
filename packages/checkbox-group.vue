<template>
    <div class="ax-checkbox-group">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'AxCheckboxGroup',
  props: {
    value: {
      type: Array
    }
  },
  provide () {
    return {
      CheckboxGroup: this
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
