<template>
    <div class="sidebar">
        <div class="sidebar-backdrop" @click="closeSidebarPanel" v-if="open"></div>
        <transition :name="`slide-${position}`">
            <div v-if="open"
                 :class="['sidebar-panel', `sidebar-${position}`]">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>
<script>
    export default {
        props: {
            open: { type: Boolean, default: true },
            position: { type: String, default: 'left' }
         },
        methods: {
            closeSidebarPanel() {
                this.$emit('toggle', {'active': false})
            }
        },
    }
</script>
<style>
    .slide-left-enter-active,
    .slide-left-leave-active,
    .slide-right-enter-active,
    .slide-right-leave-active
    {
        transition: transform 0.2s ease;
    }

    .slide-left-enter,
    .slide-left-leave-to {
        transform: translateX(-100%);
        transition: all 150ms ease-in 0s
    }

    .slide-right-enter,
    .slide-right-leave-to {
        transform: translateX(+100%);
        transition: all 150ms ease-in 0s
    }

    .sidebar-backdrop {
        background-color: rgba(0,0,0,.5);
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        cursor: pointer;
    }

    .sidebar-panel {
        overflow-y: auto;
        background-color: #130f40;
        position: fixed;
        top: 0;
        height: 100vh;
        z-index: calc(1000 * 2);
        padding: 3rem 20px 2rem 20px;
        width: 300px;
    }

    .sidebar-panel.sidebar-left {
        left: 0;
        right: none;
    }

    .sidebar-panel.sidebar-right {
        right: 0;
        left: none;
    }
</style>