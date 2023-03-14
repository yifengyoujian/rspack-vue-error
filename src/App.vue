<script setup lang="ts">
import { ref } from 'vue'

const number = ref(0)
</script>

<template>
    <button @click="number++">自增 {{ number }}</button>
</template>

<style lang="less">
button {
    width: 100px;
    height: 100px;
    background-color: #000;
    color: #fff;
    font-size: 20px;
}
</style>