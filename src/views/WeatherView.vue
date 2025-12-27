<script setup>
// Tidak perlu script khusus untuk tes ini
import lottieAnim from '@/assets/animation/Thunderstorm.json'
import SearchBar from '@/components/SearchBar.vue'
import WeatherCardInfo from '@/components/WeatherCardInfo.vue'


</script>

<template>
    <div class="flex flex-col gap-5 min-h-screen ">
        <div class="flex justify-center mt-8">
            <SearchBar></SearchBar>
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
