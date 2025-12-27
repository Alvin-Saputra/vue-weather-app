<script setup>
const props = defineProps({
    temperature: {
        type: String,
        required: false,
    },

    weatherCondition: {
        type: String,
        required: false,
    },

});
</script>

<template>
    <div class="flex-column flex-1 text-center">
        <h1 class="text-[150px] font-light">
            {{ temperature }}
            <sup class="relative -top-20 -left-2 text-2xl font-light">°C</sup>
        </h1>
        <p class="text-4xl text-gray-200">
            {{ weatherCondition }}
        </p>
    </div>
</template>



<style lang="scss" scoped></style>