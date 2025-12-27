<script setup>
import { ref } from 'vue';

// 1. Definisikan event yang bisa dikirim komponen ini
const emit = defineEmits(['search-city']);
const city = ref('');

// 2. Fungsi untuk mengirim nama kota ke WeatherView
const onSearch = () => {
    if (city.value.trim()) {
        emit('search-city', city.value);
    }
};
</script>

<template>
    <div class="join w-full max-w-md">
        <input 
            v-model="city" 
            @keyup.enter="onSearch"
            type="text" 
            placeholder="Search city..."
            class="input input-bordered join-item w-full bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" 
        />
        <button 
            @click="onSearch" 
            class="btn bg-blue-600 hover:bg-blue-700 text-white">
            🔍
        </button>
    </div>
</template>