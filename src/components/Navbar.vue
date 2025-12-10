<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isOpen = ref(false); // Status menu mobile (buka/tutup)
const isScrolled = ref(false);

// Deteksi scroll buat efek kaca
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => window.addEventListener('scroll', handleScroll));
onUnmounted(() => window.removeEventListener('scroll', handleScroll));
</script>

<template>
  <nav :class="[
      'fixed w-full z-50 transition-all duration-300',
      isScrolled ? 'bg-[#0f172a]/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
    ]">
    <div class="container mx-auto px-6 flex justify-between items-center">
      
      <a href="#" class="flex items-center gap-2 group z-50">
        <i class="fa-solid fa-rocket text-starlight text-2xl group-hover:animate-bounce"></i>
        <span class="text-xl font-bold font-heading text-white">Sahabat Belajar</span>
      </a>

      <div class="hidden md:flex gap-8 text-sm font-bold text-gray-300 items-center">
        <a href="#home" class="hover:text-planet-teal transition-colors">Beranda</a>
        <a href="#materi" class="hover:text-planet-teal transition-colors">Materi</a>
        <a href="#tutor" class="hover:text-planet-teal transition-colors">Tutor</a>
        <a href="#paket" class="hover:text-planet-teal transition-colors">Harga</a>
        <a href="#faq" class="hover:text-planet-teal transition-colors">FAQ</a>
        <a href="https://wa.me/628123456789" target="_blank" class="bg-gradient-to-r from-planet-teal to-blue-500 hover:scale-105 text-deep-space font-bold py-2 px-6 rounded-full transition-all shadow-lg">
          Daftar
        </a>
      </div>

      <button @click="isOpen = !isOpen" class="md:hidden text-white text-2xl z-50 focus:outline-none">
        <i :class="isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"></i>
      </button>

      <div v-show="isOpen" 
           class="absolute top-0 left-0 w-full h-screen bg-[#0f172a] flex flex-col items-center justify-center gap-8 text-xl font-bold text-white md:hidden transition-all duration-300 z-40">
        <a @click="isOpen = false" href="#home">Beranda</a>
        <a @click="isOpen = false" href="#materi">Materi</a>
        <a @click="isOpen = false" href="#tutor">Tutor</a>
        <a @click="isOpen = false" href="#paket">Harga</a>
        <a @click="isOpen = false" href="https://wa.me/628123456789" class="text-planet-teal">Daftar Sekarang</a>
      </div>

    </div>
  </nav>
</template>