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

// --- 2. DATA TUTOR (REVISI DESIGN) ---
const tutors = ref([
  { 
    name: 'Kak Naufal Rizki', 
    role: 'Tutor Matematika', 
    desc: 'Mahasiwa UPI Bandung. Spesialis mengubah "Matematika itu susah" jadi "Ah, ternyata gampang!" lewat metode logika praktis.', 
    image: fotoNaufal,
    experiences: [
      '3+ Tahun Mengajar Privat',
      'Asisten Dosen Matematika',
      'Spesialis UN/Olimpiade'
    ],
    instagram: 'https://instagram.com/naufal',
    whatsapp: 'https://wa.me/62812345678'
  },
  { 
    name: 'Kak M. Yunus', 
    role: 'Tutor B. Arab', 
    desc: 'Hafiz Quran yang sabar. Mengajar dengan hati, fokus pada makhrojul huruf tanpa membuat anak merasa tertekan.', 
    image: fotoYunus,
    experiences: [
      'Bersertifikat Metode Ummi',
      'Mahasiswa Universitas Muhammadiyah Bandung',
      '5 Tahun Pengalaman'
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

    <section id="home" class="relative min-h-screen flex items-center pt-24 px-6 md:px-12">
      <div class="container mx-auto z-10">
        
        <div class="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
          
          <div class="w-full md:w-5/12 flex justify-center md:justify-end relative group order-1 md:order-1">
            <div class="absolute inset-0 bg-planet-teal blur-[80px] opacity-30 group-hover:opacity-50 transition-opacity duration-700 rounded-full"></div>
            <img :src="logoImg" alt="Maskot SBC" class="relative w-64 h-64 md:w-[450px] md:h-[450px] object-contain drop-shadow-2xl animate-float">
          </div>

          <div class="w-full md:w-7/12 text-center md:text-left order-2 md:order-2">
            <!-- <div class="inline-block px-4 py-1 bg-white/10 rounded-full border border-planet-teal/30 mb-4 backdrop-blur-sm animate-pulse-slow">
              <span class="text-planet-teal font-bold text-sm tracking-wide">✨ PARTNER BELAJAR TERBAIK</span>
            </div> -->

            <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-heading leading-tight">
              Belajar Jadi Seru <br>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-starlight via-yellow-300 to-planet-teal">
                Tanpa Beban!
              </span>
            </h1>
            
            <p class="text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
              Bantu anak SD & SMP mengejar materi sekolah dengan metode 
              <span class="text-white font-bold">Fun Learning</span>. 
              Guru sabar datang ke rumah atau via online yang interaktif.
            </p>
            
            <div class="flex flex-col md:flex-row gap-4 justify-center md:justify-start items-center">
              <a :href="googleFormLink" class="w-full md:w-auto bg-gradient-to-r from-starlight to-yellow-500 hover:scale-105 text-deep-space font-bold py-4 px-8 rounded-full text-lg shadow-[0_0_20px_rgba(251,191,36,0.5)] transition-all flex items-center justify-center gap-2">
                <i class="fa-solid fa-rocket"></i> Daftar Sekarang
              </a>
              <a href="#paket" class="w-full md:w-auto border border-white/20 hover:bg-white/10 hover:border-planet-teal text-white font-bold py-4 px-8 rounded-full text-lg backdrop-blur-sm transition-all flex items-center justify-center gap-2">
                <i class="fa-solid fa-tags"></i> Lihat Paket
              </a>
            </div>

             <div class="mt-10 flex items-center justify-center md:justify-start gap-8 border-t border-white/10 pt-6">
                <div class="text-center md:text-left">
                  <h3 class="text-2xl font-bold text-white">-</h3>
                  <p class="text-xs text-gray-400 uppercase tracking-wider">Siswa Happy</p>
                </div>
                <div class="text-center md:text-left">
                  <h3 class="text-2xl font-bold text-white">2</h3>
                  <p class="text-xs text-gray-400 uppercase tracking-wider">Tutor Ahli</p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>

    <section id="materi" class="py-20 px-6 relative">
      <div class="container mx-auto">
        <div class="text-center mb-16 reveal">
          <h2 class="text-3xl md:text-4xl font-bold font-heading mb-3">Materi Spesial</h2>
          <p class="text-gray-400">Fokus pada mapel yang paling sering bikin pusing.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="(subj, i) in subjects" :key="i" 
               class="glass-card p-8 rounded-3xl reveal hover:-translate-y-2 transition-transform duration-300 border-t-4 shadow-lg group"
               :class="i === 0 ? 'border-blue-400' : i === 1 ? 'border-green-400' : 'border-yellow-400'">
            <div :class="`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${subj.bg} ${subj.color} text-3xl group-hover:scale-110 transition-transform duration-300`">
              <i :class="subj.icon"></i>
            </div>
            <h3 class="text-xl font-bold mb-3 font-heading">{{ subj.title }}</h3>
            <p class="text-gray-400 text-sm leading-relaxed">{{ subj.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="tutor" class="py-24 px-6 relative overflow-hidden">
      <div class="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] -translate-y-1/2 -z-10"></div>

      <div class="container mx-auto">
        <div class="text-center mb-20 reveal">
          <span class="text-planet-teal font-bold tracking-widest text-sm uppercase mb-2 block">Mentor Terbaik</span>
          <h2 class="text-3xl md:text-5xl font-bold font-heading mb-4 text-white">Kenalan Yuk!</h2>
          <p class="text-gray-400 max-w-2xl mx-auto">Mereka bukan sekadar guru, tapi kakak yang siap mendengarkan kesulitanmu.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div v-for="(tutor, i) in tutors" :key="i" 
               class="glass-card p-6 md:p-8 rounded-[2rem] reveal group relative overflow-hidden hover:bg-white/5 transition-all duration-500 border border-white/5 hover:border-planet-teal/30">
            
            <div class="absolute top-0 right-0 w-40 h-40 bg-planet-teal/5 rounded-bl-[100px] -mr-10 -mt-10 transition-all group-hover:bg-planet-teal/10 pointer-events-none"></div>

            <div class="relative z-10 flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start">
              
              <div class="w-full md:w-5/12 aspect-[3/4] md:aspect-[4/5] rounded-2xl overflow-hidden relative shadow-2xl group-inner flex-shrink-0">
                <div class="absolute inset-0 bg-gradient-to-t from-deep-space via-transparent to-transparent opacity-60 z-10"></div>
                <img :src="tutor.image" class="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700">
                
                <div class="absolute bottom-3 left-3 z-20">
                   <div class="bg-white/10 backdrop-blur-md border border-white/20 text-starlight text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg">
                      <i class="fa-solid fa-star text-yellow-400 mr-1"></i> {{ tutor.role }}
                   </div>
                </div>
              </div>

              <div class="w-full md:w-7/12 text-left pt-2">
                <h3 class="text-2xl md:text-3xl font-bold text-white mb-2 font-heading group-hover:text-planet-teal transition-colors">{{ tutor.name }}</h3>
                
                <p class="text-gray-300 text-sm italic mb-6 leading-relaxed border-l-2 border-planet-teal pl-4">
                  "{{ tutor.desc }}"
                </p>

                <div class="mb-6">
                  <h4 class="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Experience</h4>
                  <ul class="space-y-2">
                    <li v-for="(exp, idx) in tutor.experiences" :key="idx" class="text-sm text-gray-300 flex items-center gap-2">
                      <div class="w-1.5 h-1.5 rounded-full bg-planet-teal"></div> {{ exp }}
                    </li>
                  </ul>
                </div>

                <div class="flex gap-3">
                  <a :href="tutor.whatsapp" target="_blank" class="flex-1 bg-white/5 hover:bg-green-600 border border-white/10 text-white py-2 rounded-xl text-center text-sm font-bold transition-all group/btn">
                    <i class="fa-brands fa-whatsapp text-green-400 group-hover/btn:text-white mr-1"></i> Chat
                  </a>
                  <a :href="tutor.instagram" target="_blank" class="flex-1 bg-white/5 hover:bg-pink-600 border border-white/10 text-white py-2 rounded-xl text-center text-sm font-bold transition-all group/btn">
                    <i class="fa-brands fa-instagram text-pink-400 group-hover/btn:text-white mr-1"></i> Profile
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="paket" class="py-20 px-6">
      <div class="container mx-auto">
        <div class="text-center mb-12 reveal">
          <h2 class="text-3xl md:text-4xl font-bold font-heading">Pilihan Paket Hemat</h2>
          <p class="text-gray-400">Investasi terbaik untuk masa depan buah hati.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div v-for="(pkg, i) in packages" :key="i" 
               :class="['p-8 rounded-[2rem] relative reveal transition-all duration-300 group', 
               pkg.popular ? 'bg-gradient-to-br from-indigo-900/80 to-purple-900/80 border border-planet-teal/30 shadow-[0_10px_40px_-10px_rgba(76,29,149,0.5)] z-10 transform md:-translate-y-4' : 'glass-card hover:bg-white/5 hover:border-white/20']">
            
            <div v-if="pkg.popular" class="absolute top-0 right-0 bg-starlight text-deep-space text-xs font-bold px-4 py-1.5 rounded-bl-2xl rounded-tr-2xl shadow-lg">
              🔥 PALING LARIS
            </div>
            
            <h3 class="text-lg font-bold mb-4 font-heading text-gray-300 uppercase tracking-widest">{{ pkg.name }}</h3>
            <div class="flex items-baseline gap-1 mb-8 border-b border-white/10 pb-8">
              <span class="text-4xl font-bold text-white group-hover:text-starlight transition-colors">{{ pkg.price }}</span>
              <span class="text-sm text-gray-400">{{ pkg.unit }}</span>
            </div>

            <ul class="space-y-4 mb-8 text-sm text-left">
              <li v-for="benefit in pkg.benefits" :key="benefit" class="flex items-start gap-3 text-gray-300">
                <i class="fa-solid fa-circle-check text-planet-teal mt-1"></i> {{ benefit }}
              </li>
            </ul>

            <a :href="googleFormLink" target="_blank" class="block w-full py-4 rounded-xl font-bold transition-all text-center relative overflow-hidden group/btn" 
                    :class="pkg.popular ? 'bg-starlight text-deep-space hover:bg-yellow-400 shadow-lg' : 'bg-white/10 hover:bg-white/20 text-white'">
              <span class="relative z-10">Pilih Paket Ini</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section id="faq" class="py-20 px-6 bg-black/20">
      <div class="container mx-auto max-w-4xl">
        <div class="text-center mb-12 reveal">
          <h2 class="text-3xl md:text-4xl font-bold font-heading mb-3">Sering Ditanyakan</h2>
          <div class="h-1 w-20 bg-rocket-red mx-auto rounded-full"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div v-for="(item, i) in faqs" :key="i" 
               class="glass-card p-6 rounded-2xl reveal hover:bg-white/5 border-l-4 border-l-planet-teal transition-all hover:pl-8 cursor-default">
            <h3 class="font-bold text-lg mb-3 flex gap-3 items-start text-white">
              <i class="fa-solid fa-circle-question text-planet-teal mt-1"></i>
              {{ item.q }}
            </h3>
            <p class="text-gray-400 text-sm leading-relaxed pl-8">{{ item.a }}</p>
          </div>
        </div>
      </div>
    </section>

    <Footer />

  </div>
</template>

<style scoped>
/* --- ANIMASI CSS --- */
@keyframes pan {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.animate-pan { animation: pan 20s ease infinite; }

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}
.animate-float { animation: float 6s ease-in-out infinite; }

@keyframes floatSlow {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
}
.animate-float-slow { animation: floatSlow 10s ease-in-out infinite; }

@keyframes spinSlow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.animate-spin-slow { animation: spinSlow 30s linear infinite; }

@keyframes fly {
  0% { transform: translate(0, 0) rotate(45deg); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translate(100vw, -100vh) rotate(45deg); opacity: 0; }
}
.animate-fly {
  animation: fly 15s linear infinite;
  bottom: -50px;
  left: -50px;
}

@keyframes drift {
  from { transform: translateX(-100px); opacity: 0; }
  20% { opacity: 0.5; }
  80% { opacity: 0.5; }
  to { transform: translateX(100vw); opacity: 0; }
}
.animate-drift { animation: drift 40s linear infinite; }

@keyframes pulseSlow {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(0.98); }
}
.animate-pulse-slow { animation: pulseSlow 3s infinite ease-in-out; }

/* UTILITY CLASSES */
.glass-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}

/* BINTANG BACKGROUND */
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