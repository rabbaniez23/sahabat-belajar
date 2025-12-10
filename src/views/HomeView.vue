<script setup>
import { ref, onMounted } from 'vue';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import logoImg from '@/assets/logo-sbc.png';
// Pastikan foto tutor sudah ada di folder assets
import fotoNaufal from '@/assets/tutor-naufal.jpg'; 
import fotoYunus from '@/assets/tutor-yunus.jpg';

const googleFormLink = ref('https://forms.google.com/your-form');

// --- 1. DATA MATERI ---
const subjects = ref([
  {
    icon: 'fa-solid fa-calculator',
    title: 'Matematika',
    desc: 'Bikin rumus rumit jadi gampang dimengerti lewat logika sederhana.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10'
  },
  {
    icon: 'fa-solid fa-book-quran',
    title: 'Ngaji & Quran',
    desc: 'Belajar baca Al-Quran dari nol sampai lancar dengan tajwid benar.',
    color: 'text-green-400',
    bg: 'bg-green-500/10'
  },
  {
    icon: 'fa-solid fa-language',
    title: 'Bahasa Arab',
    desc: 'Kuasai percakapan dasar dan bahasa Al-Quran dengan metode seru.',
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10'
  }
]);

// --- 2. DATA TUTOR (LENGKAP) ---
const tutors = ref([
  { 
    name: 'Kak Naufal Rizki Rabbani', 
    role: 'Matematika SD & SMP', 
    desc: 'Alumni UPI Bandung. Jagonya bikin anak yang benci angka jadi cinta matematika dengan metode "fun logic".', 
    image: fotoNaufal,
    // Tambahan Data Pengalaman
    experiences: [
      '3 Tahun Mengajar Bimbel Privat',
      'Asisten Dosen Matematika UPI',
      'Spesialis Persiapan UN/Olimpiade SD'
    ],
    // Link Sosmed (Ganti dengan link asli)
    instagram: 'https://instagram.com/naufal',
    whatsapp: 'https://wa.me/62812345678'
  },
  { 
    name: 'Kak Muhammad Yunus', 
    role: 'B. Arab & Tahsin Quran', 
    desc: 'Hafiz Quran yang penyabar. Belajar ngaji jadi tenang, tidak dimarahi, dan fokus pada makhrojul huruf.', 
    image: fotoYunus,
    experiences: [
      'Pengajar Tahsin Bersertifikat',
      'Alumni Pesantren Gontor',
      '5 Tahun Pengalaman Mengajar Anak'
    ],
    instagram: 'https://instagram.com/yunus',
    whatsapp: 'https://wa.me/62812345679'
  },
]);

// --- 3. DATA PAKET HARGA ---
const packages = ref([
  { 
    name: 'Private', 
    price: 'Rp 800rb', 
    unit: '/bulan', 
    popular: false, 
    benefits: ['Guru datang ke rumah', '1 Siswa 1 Guru (Fokus)', 'Jadwal Bebas Atur', 'Laporan Harian'] 
  },
  { 
    name: 'Kelompok', 
    price: 'Rp 450rb', 
    unit: '/bulan', 
    popular: true, 
    benefits: ['Belajar bareng teman (Max 3)', 'Lebih Hemat & Seru', 'Diskusi Interaktif', 'Laporan Bulanan'] 
  },
  { 
    name: 'Online', 
    price: 'Rp 350rb', 
    unit: '/bulan', 
    popular: false, 
    benefits: ['Via Zoom Premium', 'Hemat Ongkos', 'Rekaman Pembelajaran', 'Waktu Fleksibel'] 
  }
]);

// --- 4. DATA FAQ ---
const faqs = ref([
  { q: 'Apakah bisa ganti guru kalau tidak cocok?', a: 'Bisa banget! Kami garansi ganti tutor sampai anak merasa nyaman dan "klik".' },
  { q: 'Area jangkauan guru ke rumah di mana saja?', a: 'Saat ini kami melayani seluruh area Kota Bandung dan Cimahi. Di luar itu bisa ambil kelas Online.' },
  { q: 'Apakah ada PR tambahan?', a: 'Kami fokus membantu menuntaskan PR sekolah agar anak tidak stres. Tapi jika orang tua minta latihan tambahan, kami siap berikan.' },
  { q: 'Berapa durasi belajarnya?', a: 'Setiap sesi durasinya 90 menit. Cukup efektif untuk materi + latihan soal.' }
]);

// --- ANIMASI BINTANG & SCROLL ---
onMounted(() => {
  const starsContainer = document.getElementById('stars-container');
  if (starsContainer) {
    for (let i = 0; i < 60; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      const size = Math.random() * 2 + 1;
      star.style.width = size + 'px';
      star.style.height = size + 'px';
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      star.style.animationDuration = (Math.random() * 5 + 3) + 's';
      starsContainer.appendChild(star);
    }
  }
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('active');
    });
  });
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
});
</script>

<template>
  <div class="min-h-screen font-body text-white flex flex-col relative overflow-x-hidden">
    
    <div class="fixed inset-0 z-[-2] bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a] bg-[length:400%_400%] animate-pan"></div>
    
    <div class="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
        <div id="stars-container" class="absolute inset-0"></div>
        
        <i class="fa-solid fa-moon text-yellow-100 text-6xl md:text-8xl absolute top-20 right-10 md:right-32 opacity-80 animate-float-slow drop-shadow-[0_0_30px_rgba(255,255,0,0.3)]"></i>
        
        <i class="fa-solid fa-earth-asia text-blue-400 text-7xl absolute bottom-32 -left-10 opacity-40 animate-spin-slow blur-sm"></i>
        
        <i class="fa-solid fa-rocket text-rocket-red text-4xl absolute animate-fly opacity-80 z-0"></i>

        <i class="fa-solid fa-cloud text-white/10 text-9xl absolute top-1/3 left-10 animate-drift"></i>
        <i class="fa-solid fa-cloud text-white/5 text-8xl absolute bottom-1/4 right-20 animate-drift" style="animation-delay: 5s;"></i>
    </div>

    <Navbar />

    <section id="home" class="relative min-h-screen flex items-center justify-center pt-20 px-4">
      <div class="container mx-auto text-center z-10">
        
        <div class="mb-6 inline-block relative group">
          <div class="absolute inset-0 bg-planet-teal blur-[50px] opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
          <img :src="logoImg" alt="Maskot SBC" class="relative w-48 h-48 md:w-72 md:h-72 object-contain drop-shadow-2xl animate-float">
        </div>
        
        <h1 class="text-4xl md:text-6xl font-bold mb-6 font-heading leading-tight">
          Les Privat & Bimbel <br>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-starlight to-planet-teal">
            Terbaik di Bandung
          </span>
        </h1>
        
        <p class="text-base md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Bantu anak SD & SMP mengejar ketinggalan materi sekolah. 
          Guru sabar datang ke rumah atau belajar online yang interaktif.
          <br><span class="text-starlight font-bold">#PahamTanpaDrama</span>
        </p>
        
        <div class="flex flex-col md:flex-row gap-4 justify-center items-center">
          <a :href="googleFormLink" class="w-full md:w-auto bg-starlight hover:bg-yellow-400 text-deep-space font-bold py-4 px-10 rounded-full text-lg shadow-[0_0_20px_rgba(251,191,36,0.5)] hover:-translate-y-1 transition-all">
            <i class="fa-solid fa-rocket mr-2"></i> Daftar Sekarang
          </a>
          <a href="#paket" class="w-full md:w-auto border border-white/20 hover:bg-white/10 text-white font-bold py-4 px-10 rounded-full text-lg backdrop-blur-sm transition-all">
            Lihat Paket
          </a>
        </div>
      </div>
    </section>

    <section id="materi" class="py-20 px-4 relative">
      <div class="container mx-auto">
        <div class="text-center mb-16 reveal">
          <h2 class="text-3xl md:text-4xl font-bold font-heading mb-3">Materi Spesial</h2>
          <p class="text-gray-400">Fokus pada mapel yang paling sering bikin pusing.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="(subj, i) in subjects" :key="i" 
               class="glass-card p-8 rounded-3xl reveal hover:-translate-y-2 transition-transform duration-300 border-t-4"
               :class="i === 0 ? 'border-blue-400' : i === 1 ? 'border-green-400' : 'border-yellow-400'">
            <div :class="`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${subj.bg} ${subj.color} text-3xl`">
              <i :class="subj.icon"></i>
            </div>
            <h3 class="text-xl font-bold mb-3 font-heading">{{ subj.title }}</h3>
            <p class="text-gray-400 text-sm leading-relaxed">{{ subj.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="tutor" class="py-20 px-4">
      <div class="container mx-auto">
        <div class="text-center mb-16 reveal">
          <h2 class="text-3xl md:text-4xl font-bold font-heading mb-2">Guru Favorit Kami</h2>
          <div class="h-1 w-20 bg-planet-teal mx-auto rounded-full"></div>
          <p class="text-gray-400 mt-4">Berpengalaman, Sabar, dan Bersahabat.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div v-for="(tutor, i) in tutors" :key="i" 
               class="glass-card p-8 rounded-3xl reveal hover:border-planet-teal transition-all group relative overflow-hidden flex flex-col items-center">
            
            <div class="w-40 h-40 rounded-full overflow-hidden border-4 border-white/10 mb-6 group-hover:scale-105 group-hover:border-planet-teal transition-all duration-500 shadow-2xl relative">
              <img :src="tutor.image" class="w-full h-full object-cover">
              <div class="absolute bottom-2 right-2 bg-blue-500 text-white w-8 h-8 flex items-center justify-center rounded-full text-sm border-2 border-[#0f172a]">
                <i class="fa-solid fa-check"></i>
              </div>
            </div>

            <h3 class="text-2xl font-bold text-white mb-1 font-heading">{{ tutor.name }}</h3>
            <p class="text-planet-teal text-sm font-bold uppercase tracking-widest mb-4">{{ tutor.role }}</p>
            <p class="text-gray-300 text-center mb-6 italic">"{{ tutor.desc }}"</p>

            <div class="w-full bg-white/5 rounded-xl p-4 mb-6 text-left">
              <h4 class="text-sm font-bold text-starlight mb-3 flex items-center gap-2">
                <i class="fa-solid fa-briefcase"></i> Pengalaman:
              </h4>
              <ul class="space-y-2">
                <li v-for="(exp, idx) in tutor.experiences" :key="idx" class="text-sm text-gray-300 flex items-start gap-2">
                  <i class="fa-solid fa-caret-right text-planet-teal mt-1"></i> {{ exp }}
                </li>
              </ul>
            </div>

            <div class="flex gap-4 mt-auto">
              <a :href="tutor.whatsapp" target="_blank" class="flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold transition-all shadow-lg hover:-translate-y-1">
                <i class="fa-brands fa-whatsapp text-lg"></i>
              </a>
              <a :href="tutor.instagram" target="_blank" class="flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold transition-all shadow-lg hover:-translate-y-1">
                <i class="fa-brands fa-instagram text-lg"></i>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>

    <section id="paket" class="py-20 px-4">
      <div class="container mx-auto">
        <div class="text-center mb-12 reveal">
          <h2 class="text-3xl md:text-4xl font-bold font-heading">Pilihan Paket Hemat</h2>
          <p class="text-gray-400">Investasi terbaik untuk masa depan buah hati.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div v-for="(pkg, i) in packages" :key="i" 
               :class="['p-8 rounded-3xl relative reveal transition-all hover:-translate-y-2', 
               pkg.popular ? 'bg-gradient-to-b from-indigo-900 to-purple-900 border border-white/20 shadow-2xl z-10 transform md:scale-105' : 'glass-card border border-white/10']">
            
            <div v-if="pkg.popular" class="absolute top-0 right-0 bg-starlight text-deep-space text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">TERLARIS</div>
            
            <h3 class="text-xl font-bold mb-2 font-heading">{{ pkg.name }}</h3>
            <div class="flex items-baseline gap-1 mb-6">
              <span class="text-3xl font-bold text-white">{{ pkg.price }}</span>
              <span class="text-sm text-gray-400">{{ pkg.unit }}</span>
            </div>

            <ul class="space-y-4 mb-8 text-sm text-left">
              <li v-for="benefit in pkg.benefits" :key="benefit" class="flex items-center gap-3 text-gray-300">
                <i class="fa-solid fa-circle-check text-planet-teal"></i> {{ benefit }}
              </li>
            </ul>

            <a :href="googleFormLink" target="_blank" class="block w-full py-3 rounded-xl font-bold transition-all text-center" 
                    :class="pkg.popular ? 'bg-starlight text-deep-space hover:bg-yellow-400 shadow-lg' : 'bg-white/10 hover:bg-white/20 text-white'">
              Pilih Paket
            </a>
          </div>
        </div>
      </div>
    </section>

    <section id="faq" class="py-20 px-4 bg-black/20">
      <div class="container mx-auto max-w-4xl">
        <div class="text-center mb-12 reveal">
          <h2 class="text-3xl md:text-4xl font-bold font-heading mb-3">Sering Ditanyakan</h2>
          <div class="h-1 w-20 bg-rocket-red mx-auto rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div v-for="(item, i) in faqs" :key="i" 
               class="glass-card p-6 rounded-2xl reveal hover:bg-white/5 border-l-4 border-l-planet-teal transition-all">
            <h3 class="font-bold text-lg mb-2 flex gap-2 items-start">
              <span class="text-planet-teal mt-1"><i class="fa-solid fa-circle-question"></i></span>
              {{ item.q }}
            </h3>
            <p class="text-gray-400 text-sm pl-7 leading-relaxed">{{ item.a }}</p>
          </div>
        </div>
      </div>
    </section>

    <Footer />

  </div>
</template>

<style scoped>
/* --- ANIMASI CSS --- */

/* 1. Langit Berubah Warna (Pan) */
@keyframes pan {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.animate-pan {
  animation: pan 20s ease infinite;
}

/* 2. Maskot Melayang (Float) */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}
.animate-float {
  animation: float 6s ease-in-out infinite;
}

/* 3. Bulan Bergerak Pelan (Float Slow) */
@keyframes floatSlow {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
}
.animate-float-slow {
  animation: floatSlow 10s ease-in-out infinite;
}

/* 4. Planet Berputar (Spin Slow) */
@keyframes spinSlow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.animate-spin-slow {
  animation: spinSlow 30s linear infinite;
}

/* 5. Roket Terbang (Fly) */
@keyframes fly {
  0% { transform: translate(0, 0) rotate(45deg); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translate(100vw, -100vh) rotate(45deg); opacity: 0; }
}
.animate-fly {
  /* Roket terbang setiap 15 detik */
  animation: fly 15s linear infinite;
  bottom: -50px;
  left: -50px;
}

/* 6. Awan Berjalan (Drift) */
@keyframes drift {
  from { transform: translateX(-100px); opacity: 0; }
  20% { opacity: 0.5; }
  80% { opacity: 0.5; }
  to { transform: translateX(100vw); opacity: 0; }
}
.animate-drift {
  animation: drift 40s linear infinite;
}

/* GLASS CARD */
.glass-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}

/* BINTANG */
:deep(.star) {
  position: absolute;
  background: white;
  border-radius: 50%;
  animation: twinkle linear infinite;
  opacity: 0;
}

@keyframes twinkle {
  0% { opacity: 0; transform: translateY(0); }
  50% { opacity: 1; }
  100% { opacity: 0; transform: translateY(-50px); }
}

/* SCROLL REVEAL */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
}
.reveal.active {
  opacity: 1;
  transform: translateY(0);
}
</style>