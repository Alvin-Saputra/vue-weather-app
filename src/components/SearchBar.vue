<script setup>
import { ref } from 'vue';

const city = ref('');

const emit = defineEmits(['search-city']);
const onSearch = () => {
    if (!city.value) {
        return;
    }
    emit('search-city', city.value);
};

</script>

<template>
    <div class="join w-full max-w-md ">
        <input v-model="city" type="text" placeholder="Search city..."
            class="input input-bordered join-item w-full bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <button v-on:click="onSearch" class="btn   bg-blue-600 hover:bg-blue-700 text-white">
            🔍
        </button>
    </div>
</template>


<style lang="scss" scoped></style>