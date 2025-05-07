  // Mobile Menu Toggle
  document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });


    // Add scroll effect to header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.padding = '0.5rem 0';
            header.style.backgroundColor = '#ff4d4d';
        } else {
            header.style.padding = '1rem 0';
            header.style.backgroundColor = 'var(--primary-color)';
        }
    });

    // Add animation to cards on scroll
    const cards = document.querySelectorAll('.card');
    const animateOnScroll = () => {
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const triggerBottom = window.innerHeight * 0.8;
            
            if (cardTop < triggerBottom) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    };

    // Initial setup for card animations
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    // Run animation on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Run once on load
    animateOnScroll();
});

// Testimonial Slider (if you want to add a slider in the future)
// This is a placeholder for potential future enhancement
class TestimonialSlider {
    constructor() {
        this.testimonials = document.querySelectorAll('.testimonial');
        this.currentIndex = 0;
        
        // For future implementation
    }
    
    // Methods for slider functionality
}


function sendHibahToWhatsApp() {
    const phone = "60149775244"; 

    const nama = document.getElementById("hh_nama").value;
    const nohp = document.getElementById("hh_hp").value;
    const lahir = document.getElementById("hh_lahir").value;
    const jantina = document.getElementById("hh_jantina").value;
    const harta = document.getElementById("hh_harta").value;
    const alamat = document.getElementById("hh_alamat").value;

    const msg = `Assalamualaikum, saya ingin mohon hibah harta. Berikut adalah maklumat saya:%0A` +
                `Nama Penuh: ${nama}%0A` +
                `No. Telefon: ${nohp}%0A` +
                `Tarikh Lahir: ${lahir}%0A` +
                `Jantina: ${jantina}%0A` +
                `Jenis Harta: ${harta}%0A` +
                `Alamat: ${alamat}`;

    window.open(`https://wa.me/${phone}?text=${msg}`, "_blank");
    return false;
}


function sendQuotationToWhatsApp() {
    const phone = "60149775244"; 

    const nama = document.getElementById("nama").value;
    const tarikh = document.getElementById("tarikh").value;
    const nohp = document.getElementById("nohp").value;
    const alamat = document.getElementById("alamat").value;
    const kerja = document.getElementById("kerja").value;
    const plan = document.getElementById("plan").value;
    const rokok = document.getElementById("rokok").value;
    const jantina = document.getElementById("jantina").value;

    const msg = `Assalamualaikum, saya ingin mendapatkan quotation. Berikut adalah maklumat saya:%0A` +
                `Nama: ${nama}%0A` +
                `Tarikh Lahir: ${tarikh}%0A` +
                `No. Telefon: ${nohp}%0A` +
                `Alamat: ${alamat}%0A` +
                `Pekerjaan: ${kerja}%0A` +
                `Plan Dipilih: ${plan}%0A` +
                `Status Merokok: ${rokok}%0A` +
                `Jantina: ${jantina}`;

    window.open(`https://wa.me/${phone}?text=${msg}`, "_blank");
    return false;
}


function sendRecruitmentToWhatsApp() {
    const phone = "60149775244";  

    const nama = document.getElementById("namapenuh").value;
    const nohp = document.getElementById("nohprekrut").value;
    const jantina = document.getElementById("jantinarekrut").value;
    const pendidikan = document.getElementById("pendidikan").value;

    const msg = `Assalamualaikum, saya berminat dengan peluang kerjaya takaful. Berikut maklumat saya:%0A` +
                `Nama Penuh: ${nama}%0A` +
                `No. Telefon: ${nohp}%0A` +
                `Jantina: ${jantina}%0A` +
                `Pendidikan Tertinggi: ${pendidikan}`;

    window.open(`https://wa.me/${phone}?text=${msg}`, "_blank");
    return false;
}