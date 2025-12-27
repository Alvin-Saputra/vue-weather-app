<script setup>
import { ref } from 'vue';

import SearchBar from '@/components/SearchBar.vue';
import WeatherCardInfo from '@/components/WeatherCardInfo.vue';
import { getWeatherByCity } from '@/service/weatherService'; // Import Service
import WeatherModel from '@/models/WeatherModel'; // Import Model
import animationSection from '@/components/animationSection.vue';

// 1. State reaktif untuk menyimpan data cuaca
const weatherData = ref(null);

// 2. Fungsi untuk menangani pencarian dari SearchBar
const handleSearch = async (city) => {
    try {
        const response = await getWeatherByCity(city);
        // Format data menggunakan Model yang sudah Anda buat
        weatherData.value = new WeatherModel(response);
    } catch (error) {
        console.error("Gagal mengambil data cuaca:", error);
        alert("Kota tidak ditemukan atau terjadi kesalahan.");
    }
};
</script>

<template>
    <div class="flex flex-col gap-5 min-h-screen">
        <div class="flex justify-center mt-8">
            <SearchBar @search-city="handleSearch"></SearchBar>
        </div>

        <div v-if="weatherData" class="flex gap-5 m-20 items-center">
            <WeatherCardInfo :temperature="weatherData.temp.toString()"
                :weatherDescription="weatherData.weatherDescription">
            </WeatherCardInfo>

            <animationSection :weatherName="weatherData.weatherName"></animationSection>
        </div>

        <div v-else class="text-center mt-20 text-white">
            Silakan cari kota untuk melihat cuaca.
        </div>
    </div>
</template>