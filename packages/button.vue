<template>
    <button class="ax-button" :class="[`ax-button--${type}`,{
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled':disabled
        }]"
        :disabled="disabled"
        @click="handleClick"
    >
        <i v-if="icon" :class="icon"></i>
        <span v-if="$slots.default"><slot></slot></span>
    </button>
</template>

<script>
export default {
  name: 'AxButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss" scoped>
    /*基础属性  */
    .ax-button {
        display: inline-block;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        background: #fff;
        border: 1px solid #dcdfe6;
        color: #606266;
        -webkit-appearance: none;
        text-align: center;
        box-sizing: border-box;
        outline: none;
        margin: 0;
        transition: 0.1s;
        font-weight: 500;
        /* 静止元素的文字被选中   */
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        padding: 12px 20px ;
        font-size: 14px;
        border-radius: 4px;
        &:hover,
        &:focus {
            color: #409eff;
            border-color: #c6e2ff;
            background-color: #ecf5ff;
        }
    }
    .ax-button--primary {
        color: #fff;
        background-color: #409eff;
        border-color: #409eff;
        &:hover,
        &:focus {
            background: #66b1ff;
            border-color: #66b1ff;
            color: #fff;
        }
    }
    .ax-button--success {
        color: #fff;
        background-color: #67c23a;
        border-color: #67c23a;
        &:hover,
        &:focus {
            background: #85ce61;
            border-color: #85ce61;
            color: #fff;
        }
    }
    .ax-button--info {
        color: #fff;
        background-color: #909399;
        border-color: #909399;
        &:hover,
        &:focus {
            background: #a6a9ad;
            border-color: #a6a9ad;
            color: #fff;
        }
    }
    .ax-button--warning {
        color: #fff;
        background-color: #e6a23e;
        border-color: #e6a23e;
        &:hover,
        &:focus {
            background: #a6a9ad;
            border-color: #a6a9ad;
            color: #fff;
        }
    }
    .ax-button--danger {
        color: #fff;
        background-color: #f56c6c;
        border-color: #f56c6c;
        &:hover,
        &:focus {
            background: #f78989;
            border-color: #f78989;
            color: #fff;
        }
    }
    /*plain属性*/
    .ax-button.is-plain {
        &:hover,
        &:focus {
            color: #409eff;
            border-color: #409eff;
            background-color: #fff;
        }
    }
    .ax-button--primary.is-plain {
        color: #409eff;
        background-color: #ecf5ff;
        border-color: #b3d8ff;
        &:hover,
        &:focus {
            background: #409eff;
            border-color: #409eff;
            color: #fff;
        }
    }
    .ax-button--success.is-plain {
        color: #67c23a;
        background-color: #f0f9eb;
        border-color: #c2e7b0;
        &:hover,
        &:focus {
            background: #67c23a;
            border-color: #67c23a;
            color: #fff;
        }
    }
    .ax-button--info.is-plain {
        color: #909399;
        background-color: #f4f4f5;
        border-color: #d3d4d6;
        &:hover,
        &:focus {
            background: #909399;
            border-color: #909399;
            color: #fff;
        }
    }
    .ax-button--warning.is-plain {
        color: #e6a23e;
        background-color: #fdf6ec;
        border-color: #f5dab1;
        &:hover,
        &:focus {
            background: #e6a23e;
            border-color: #e6a23e;
            color: #fff;
        }
    }
    .ax-button--danger.is-plain {
        color: #f56c6c;
        background-color: #fef0f0;
        border-color: #fbc4c4;
        &:hover,
        &:focus {
            background: #f56c6c;
            border-color: #f56c6c;
            color: #fff;
        }
    }
    /*圆角属性*/
    .ax-button.is-round {
        border-radius: 20px;
        /*padding: 12px 23px;*/
    }
    /*圆形属性*/
    .ax-button.is-circle {
        border-radius: 50%;
        padding: 12px;
    }
    /*处理文字图标同时有的情况*/
    .ax-button [class*=ax-icon-]+span {
        margin-left: 10px;
    }
    /*禁用属性*/
    .ax-button.is-disabled,
    .ax-button.is-disabled:focus,
    .ax-button.is-disabled:hover {
        color: #c0c4cc;
        cursor: not-allowed;
        background-image: none;
        background-color: #fff;
        border-color: #ebeef5;
    }
    .ax-button.is-disabled,
    .ax-button.is-disabled:focus,
    .ax-button.is-disabled:hover {
        color: #c0c4cc;
        cursor: not-allowed;
        background-image: none;
        background-color: #fff;
        border-color: #ebeef5;
    }

    .ax-button--primary.is-disabled,
    .ax-button--primary.is-disabled:active,
    .ax-button--primary.is-disabled:focus,
    .ax-button--primary.is-disabled:hover {
        color: #fff;
        background-color: #a0cfff;
        border-color: #a0cfff;
    }

    .ax-button--success.is-disabled,
    .ax-button--success.is-disabled:active,
    .ax-button--success.is-disabled:focus,
    .ax-button--success.is-disabled:hover {
        color: #fff;
        background-color: #b3e19d;
        border-color: #b3e19d;
    }

    .ax-button--info.is-disabled,
    .ax-button--info.is-disabled:active,
    .ax-button--info.is-disabled:focus,
    .ax-button--info.is-disabled:hover {
        color: #fff;
        background-color: #c8c9cc;
        border-color: #c8c9cc;
    }

    .ax-button--warning.is-disabled,
    .ax-button--warning.is-disabled:active,
    .ax-button--warning.is-disabled:focus,
    .ax-button--warning.is-disabled:hover {
        color: #fff;
        background-color: #f3d19e;
        border-color: #f3d19e;
    }

    .ax-button--danger.is-disabled,
    .ax-button--danger.is-disabled:active,
    .ax-button--danger.is-disabled:focus,
    .ax-button--danger.is-disabled:hover {
        color: #fff;
        background-color: #fab6b6;
        border-color: #fab6b6;
    }
</style>
