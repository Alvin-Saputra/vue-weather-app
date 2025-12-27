<script setup>
import lottieAnimThunderStorm from '@/assets/animation/Thunderstorm.json';
import lottieAnimRain from '@/assets/animation/Rain.json';
import lottieAnimSunny from '@/assets/animation/Sunny.json';
import lottieAnimSnow from '@/assets/animation/Snow.json';
import lottieAnimFog from '@/assets/animation/Fog.json';

const props = defineProps({
    weatherName: {
        type: String,
        required: false,
    },
});
</script>

<template>
    <div class="flex-1">
        <Vue3Lottie v-if="weatherName == 'thunderstorm'" :animationData="lottieAnimThunderStorm" :height="400"
            :width="400" />
        <Vue3Lottie v-else-if="weatherName == 'clear sky'" :animationData="lottieAnimSunny" :height="400"
            :width="400" />
        <Vue3Lottie
            v-else-if="weatherName == 'few clouds' || weatherName == 'scattered clouds' || weatherName == 'broken clouds' || weatherName == 'Clouds'"
            :animationData="lottieAnimRain" :height="400" :width="400" />
        <Vue3Lottie v-else-if="weatherName == 'shower rain' || weatherName == 'rain'" :animationData="lottieAnimRain"
            :height="400" :width="400" />
        <Vue3Lottie v-else-if="weatherName == 'snow'" :animationData="lottieAnimSnow" :height="400" :width="400" />
        <Vue3Lottie v-else-if="weatherName == 'mist'" :animationData="lottieAnimFog" :height="400" :width="400" />
    </div>
</template>



<style lang="scss" scoped></style>