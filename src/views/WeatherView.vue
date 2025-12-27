<script setup>
// Tidak perlu script khusus untuk tes ini
import lottieAnim from '@/assets/animation/Thunderstorm.json'
import SearchBar from '@/components/SearchBar.vue'
import WeatherCardInfo from '@/components/WeatherCardInfo.vue'
import WeatherModel from '@/models/WeatherModel';
import { getWeatherByCity } from '@/service/weatherService';
import { ref } from 'vue';

const errorMessage = ref('');
const temperature = ref('');
const weatherCondition = ref('');

// Ini fungsi callback yang Anda maksud.
// Fungsi ini TETAP di Parent, tidak perlu di-pass ke Child.
const handleSearch = async (cityName) => {
  try {
    errorMessage.value = '';
    console.log(`Mencari cuaca untuk: ${cityName}`); // Debugging
    
    // Panggil Service
    const data = await getWeatherByCity(cityName);
    const weatherData =  WeatherModel(data); 
    temperature.value = weatherData.temp;
    weatherCondition.value = weatherData.description;

    
  } catch (error) {
    errorMessage.value = 'Kota tidak ditemukan';

  }
};
</script>

<template>
    <div class="flex flex-col gap-5 min-h-screen ">
        <div class="flex justify-center mt-8">
            <SearchBar @search-city="handleSearch"></SearchBar>
        </div>
        <div class="flex gap-5 m-20 items-center">

            <WeatherCardInfo temperature="28" weatherCondition="Thunderstorm"></WeatherCardInfo>
            <div class="flex-1">
                <Vue3Lottie :animationData="lottieAnim" :height="400" :width="400" />
            </div>
        </div>

    </div>
</template>

<style scoped>
/* Kosongkan saja, kita pakai utility classes Tailwind sepenuhnya */
</style>
