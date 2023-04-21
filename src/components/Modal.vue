<template>
    <div>
    <swipe-modal
      v-model="isModal"
      contents-height="50vh"
      border-top-radius="16px"
    >
        <slot />
    </swipe-modal>
    </div>
</template>
<script setup>
import { ref } from "vue";
import swipeModal from '@takuma-ru/vue-swipe-modal'
const isModal = ref(false)
</script>
<style lang="">
    
</style>