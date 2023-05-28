<template>
    <div class="collapse-container" :class="{ 'collapse-container-reverse': btnBottom }">
        <div class="collapse-head">
            <slot name="head" :foldStatus="foldStatus">
                <span @click="handleChangeStatus" class="fold-btn" :class="['fold-btn-' + btnPosition]">
                    <i :class="[foldStatus ? 'arrow-up' : 'arrow-down']"></i>
                    <span class="fold-btn-text"> {{ collapseText }}</span>
                </span>
            </slot>
        </div>
        <div class="collapse-content-warp" v-show="!foldStatus" :class="{ 'warp-hidden': foldStatus }">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VCollapsePro',
    props: {
        fold: {
            type: Boolean,
            default: false//折叠状态，默认展开
        },
        unfoldText: {
            type: String,
            default: '展开'
        },
        foldText: {
            type: String,
            default: '收起'
        },
        btnPosition: {
            type: String,
            default: 'top-left'//top-left;top-center;top-right;bottom-left;bottom-center;bottom-right
        },
    },
    data() {
        return {
            foldStatus: this.fold,
        }
    },
    computed: {
        collapseText() {
            return this.foldStatus ? this.unfoldText : this.foldText
        },
        // 按钮在底部
        btnBottom() {
            return ['bottom-left', 'bottom-center', 'bottom-right'].includes(this.btnPosition)
        }
    },
    methods: {
        handleChangeStatus() {
            this.foldStatus = !this.foldStatus
        },
        // 供外部调用
        updateFoldStatus(status) {
            this.foldStatus = status
        }
    },
    watch: {
        foldStatus() {
            this.$emit('collapseStatusChange', this.foldStatus)
        }
    }
}
</script>

<style scoped>
.collapse-container {
    display: flex;
    flex-direction: column;
}

.collapse-container-reverse {
    flex-direction: column-reverse;
}

.collapse-content-warp {
    height: auto;
}

.collapse-head {
    position: relative;
    min-height: 20px;
}

.warp-hidden {
    display: none;
    transition: 1s;
}

.fold-btn {
    font-size: 14px;
    color: #409eff;
    padding-left: 10px;
    position: absolute;
    cursor: pointer;
}


.fold-btn-top-left,
.fold-btn-bottom-left {
    left: 0;
}

.fold-btn-top-center,
.fold-btn-bottom-center {
    left: 50%;
    transform: translateX(-50%);
}

.fold-btn-top-right,
.fold-btn-bottom-right {
    right: 0%;
}

.arrow-up::before {
    position: absolute;
    left: 0;
    top: 10px;
    width: 8px;
    height: 8px;
    margin-top: -2px;
    border-right: 1px solid #409eff;
    border-bottom: 1px solid #409eff;
    -webkit-transform: rotate(225deg);
    content: '';
}

.arrow-down:before {
    position: absolute;
    left: 0;
    top: 2px;
    width: 8px;
    height: 8px;
    border-right: 1px solid #409eff;
    border-bottom: 1px solid #409eff;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    content: '';
}

.fold-btn-text {
    padding-left: 5px;
}
</style>