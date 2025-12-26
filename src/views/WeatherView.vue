<script setup>
// Tidak perlu script khusus untuk tes ini
import lottieAnim from '@/assets/animation/Thunderstorm.json'
</script>

<template>
    <div class="flex flex-col gap-5 min-h-screen ">
        <div class="flex justify-center mt-8">
            <div class="join w-full max-w-md ">
                <input type="text" placeholder="Search city..."
                    class="input input-bordered join-item w-full bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <button class="btn   bg-blue-600 hover:bg-blue-700 text-white">
                    🔍
                </button>
            </div>
        </div>
        <div class="flex gap-5 m-20 items-center">
            <!-- Temperature Information -->
            <div class="flex-column flex-1 text-center">
                <h1 class="text-[150px] font-light">
                    16
                    <sup class="relative -top-20 -left-2 text-2xl font-light">°C</sup>
                </h1>
                <p class="text-4xl text-gray-200">
                    ThunderStorm
                </p>
            </div>


            <div class="flex-1">
                <Vue3Lottie :animationData="lottieAnim" :height="400" :width="400" />
            </div>
        </div>

        <!-- <div class="shadow-xl border">
            <div class="card-body">
                <h2 class="card-title text-2xl">Row Kedua</h2>

                <p class="text-[18px]">
                    Teks ini ukurannya pas 18px (custom).
                </p>

                <div class="card-actions justify-end">
                    <button class="btn btn-primary text-lg font-bold">Aksi Besar</button>
                </div>
            </div>
        </div> -->

    </div>
</template>

<style scoped>
/* Kosongkan saja, kita pakai utility classes Tailwind sepenuhnya */
</style>
