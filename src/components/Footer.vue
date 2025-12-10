<template>
  <footer class="relative bg-[#020617] pt-20 pb-10 mt-auto overflow-hidden">
    
    <div class="absolute top-0 left-1/4 w-64 h-64 bg-planet-teal/10 rounded-full blur-[100px] pointer-events-none"></div>
    <div class="absolute bottom-0 right-1/4 w-64 h-64 bg-nebula-purple/10 rounded-full blur-[100px] pointer-events-none"></div>

    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-planet-teal to-transparent opacity-50"></div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        
        <div class="text-center md:text-left">
          <div class="flex items-center justify-center md:justify-start gap-3 mb-4 group cursor-pointer">
            <div class="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-planet-teal group-hover:rotate-12 transition-all duration-300">
              <i class="fa-solid fa-rocket text-2xl text-planet-teal group-hover:text-deep-space"></i>
            </div>
            <h3 class="text-2xl font-bold font-heading text-white">Sahabat Belajar</h3>
          </div>
          <p class="text-gray-400 text-sm leading-relaxed mb-6">
            Partner belajar terbaik untuk siswa SD & SMP di Bandung. 
            Membantu anak meraih prestasi dengan metode belajar yang ceria dan tanpa tekanan.
          </p>
          <div class="flex justify-center md:justify-start gap-4">
            <a href="#" class="social-btn bg-[#1877F2]"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="#" class="social-btn bg-[#E1306C]"><i class="fa-brands fa-instagram"></i></a>
            <a href="#" class="social-btn bg-[#1DA1F2]"><i class="fa-brands fa-twitter"></i></a>
            <a href="#" class="social-btn bg-[#25D366]"><i class="fa-brands fa-whatsapp"></i></a>
          </div>
        </div>

        <div class="text-center md:text-left">
          <h4 class="text-lg font-bold text-white font-heading mb-6 flex items-center justify-center md:justify-start gap-2">
            <i class="fa-solid fa-link text-starlight"></i> Jelajahi
          </h4>
          <ul class="space-y-3 text-gray-400 text-sm">
            <li><a href="#home" class="hover:text-planet-teal hover:pl-2 transition-all duration-300">Beranda</a></li>
            <li><a href="#materi" class="hover:text-planet-teal hover:pl-2 transition-all duration-300">Materi Spesial</a></li>
            <li><a href="#tutor" class="hover:text-planet-teal hover:pl-2 transition-all duration-300">Profil Tutor</a></li>
            <li><a href="#paket" class="hover:text-planet-teal hover:pl-2 transition-all duration-300">Pilihan Paket</a></li>
            <li><a href="#faq" class="hover:text-planet-teal hover:pl-2 transition-all duration-300">Tanya Jawab (FAQ)</a></li>
          </ul>
        </div>

        <div class="text-center md:text-left">
          <h4 class="text-lg font-bold text-white font-heading mb-6 flex items-center justify-center md:justify-start gap-2">
            <i class="fa-solid fa-headset text-rocket-red"></i> Hubungi Kami
          </h4>
          <ul class="space-y-4 text-gray-400 text-sm">
            <li class="flex flex-col md:flex-row items-center md:items-start gap-3">
              <i class="fa-solid fa-location-dot text-planet-teal mt-1"></i>
              <span>Jl. Pendidikan No. 123, Bandung,<br>Jawa Barat, Indonesia</span>
            </li>
            <li class="flex flex-col md:flex-row items-center md:items-start gap-3">
              <i class="fa-brands fa-whatsapp text-planet-teal mt-1"></i>
              <span>+62 812-3456-7890 (Admin)</span>
            </li>
            <li class="flex flex-col md:flex-row items-center md:items-start gap-3">
              <i class="fa-regular fa-envelope text-planet-teal mt-1"></i>
              <span>tanya@sahabatbelajar.com</span>
            </li>
          </ul>
        </div>

      </div>

      <div class="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <p>&copy; 2025 Sahabat Belajar Course. All Rights Reserved.</p>
        <div class="flex gap-6">
          <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" class="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Tombol Sosmed Custom */
.social-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%; /* Bulat */
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: all 0.3s ease;
  opacity: 0.8;
}

.social-btn:hover {
  opacity: 1;
  transform: translateY(-3px); /* Naik dikit pas di-hover */
  box-shadow: 0 5px 15px rgba(255, 255, 255, 0.1);
}
</style>