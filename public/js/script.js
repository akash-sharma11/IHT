// Sticky header
	const header = document.getElementById("myHeader");
	const sticky = header.offsetTop;
	function makeHeaderSticky() {
		if (window.pageYOffset > sticky) {
			header.classList.add("sticky");
		} else {
			header.classList.remove("sticky");
		}
	}
	window.onscroll = function() { makeHeaderSticky(); };
	// Side Drawer
	const hamburger = document.getElementById('hamburger');
	const sideDrawer = document.getElementById('sideDrawer');
	const closeBtn = document.getElementById('closeBtn');
	const overlay = document.getElementById('overlay');
	hamburger.addEventListener('click', () => {
		sideDrawer.classList.add('active');
		overlay.classList.add('active');
	});
	closeBtn.addEventListener('click', () => {
		sideDrawer.classList.remove('active');
		overlay.classList.remove('active');
	});
	overlay.addEventListener('click', () => {
		sideDrawer.classList.remove('active');
		overlay.classList.remove('active');
	});

/* Ping-pong logo scroll */
document.addEventListener("DOMContentLoaded", function() {
    const logoRows = document.querySelectorAll('.logo-row');
    logoRows.forEach(row => {
        let direction = row.classList.contains('reverse') ? -1 : 1;
        let position = 0;
        let speed = 1; // px per frame
        let rafId;

        // Calculate maxScroll based on scrollWidth and clientWidth
        function getMaxScroll() {
            return row.scrollWidth - row.clientWidth;
        }

        function animate() {
            let maxScroll = getMaxScroll();
            position += speed * direction;
            if (position >= maxScroll) {
                direction = -1;
                position = maxScroll;
            } else if (position <= 0) {
                direction = 1;
                position = 0;
            }
            row.scrollLeft = position;
            rafId = requestAnimationFrame(animate);
        }

        // Start animation
        animate();

        // Pause on hover
        row.addEventListener('mouseenter', () => cancelAnimationFrame(rafId));
        row.addEventListener('mouseleave', () => animate());
    });
});

// Membership Scripts
document.addEventListener('DOMContentLoaded', () => {

    // Testimonial Carousel
    const carousel = document.querySelector('.testimonial-carousel');
    const dots = document.querySelectorAll('.carousel-nav .dot');
    const slides = document.querySelectorAll('.testimonial-slide');
    let currentIndex = 0;

    const updateCarousel = () => {
        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentIndex].classList.add('active');
    };

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            currentIndex = parseInt(dot.dataset.slide);
            updateCarousel();
        });
    });

    // Auto-advance carousel
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    }, 5000); // Change slide every 5 seconds

    // Sticky CTA for mobile
    const stickyCta = document.querySelector('.sticky-cta-mobile');
    const plansSection = document.getElementById('plans-section');

    const handleStickyCta = () => {
        if (window.innerWidth < 768) {
            const plansRect = plansSection.getBoundingClientRect();
            if (plansRect.top < window.innerHeight && plansRect.bottom > 0) {
                // Show sticky CTA when plans section is in view
                stickyCta.style.transform = 'translateY(0)';
            } else {
                // Hide sticky CTA when plans section is not in view
                stickyCta.style.transform = 'translateY(100%)';
            }
        } else {
            stickyCta.style.transform = 'translateY(100%)'; // Always hide on desktop
        }
    };

    window.addEventListener('scroll', handleStickyCta);
    window.addEventListener('resize', handleStickyCta);
    handleStickyCta(); // Initial check on page load
});

(function(){
      // helpers
      function formatINR(n){
        if (isNaN(n)) return '₹0';
        return '₹' + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
      function applyDiscount(total, pct){
        pct = Number(pct) || 0;
        total = Number(total) || 0;
        if (pct <= 0) return Math.round(total);
        return Math.round(total * (1 - pct/100));
      }

      // controls + cards
      const segBtns = Array.from(document.querySelectorAll('#durControl .seg-btn'));
      const cards = Array.from(document.querySelectorAll('#pricingGrid .card'));

      // keyboard nav for segmented control
      const segContainer = document.getElementById('durControl');
      segContainer.addEventListener('keydown', (e) => {
        const idx = segBtns.findIndex(b => b.getAttribute('aria-pressed') === 'true');
        if (e.key === 'ArrowRight'){ const next = segBtns[(idx+1)%segBtns.length]; next.click(); next.focus(); }
        if (e.key === 'ArrowLeft'){ const prev = segBtns[(idx-1+segBtns.length)%segBtns.length]; prev.click(); prev.focus(); }
      });

      function updateForYears(years){
        cards.forEach(card => {
          const data = card.querySelector('.pricing-data');
          if (!data) return;

          const rawPrice = Number(data.dataset[years + 'Price'] || data.getAttribute('data-' + years + '-price'));
          const rawDisc  = Number(data.dataset[years + 'Discount'] || data.getAttribute('data-' + years + '-discount') || 0);

          if (isNaN(rawPrice)) return;

          const discounted = applyDiscount(rawPrice, rawDisc);
          const perYear = Math.round(discounted / years);
          const savings = (rawPrice - discounted).toFixed(2);

          const priceCurrent = card.querySelector('.price-current');
          const perYearEl = card.querySelector('.per-year');
          const originalEl = card.querySelector('.original');
          const badge = card.querySelector('.discount-badge');
          const badgeText = card.querySelector('.badge-text');
          const savingsEl = card.querySelector('.savings');

          // set visible values
          if (priceCurrent) {
            priceCurrent.textContent = formatINR(discounted);

            // price pop animation: add class, remove after 220ms
            priceCurrent.classList.add('animate');
            clearTimeout(priceCurrent._popTimer);
            priceCurrent._popTimer = setTimeout(() => {
              priceCurrent.classList.remove('animate');
            }, 220);
          }
          if (perYearEl) perYearEl.textContent = formatINR(perYear) + ' / year';

          if (rawDisc && rawDisc > 0){
            if (originalEl){
              originalEl.textContent = formatINR(rawPrice);
              originalEl.style.display = 'block';
            }
            if (badge && badgeText){
              badgeText.textContent = rawDisc + '% OFF';
              badge.style.display = 'inline-flex';
              // choose badge color style
              if (rawDisc >= 15){ badge.className = 'discount-badge badge-green'; }
              else { badge.className = 'discount-badge badge-amber'; }
            }
            if (savingsEl){
              savingsEl.textContent = 'You save ' + formatINR(savings) + ' (' + rawDisc + '%)';
              savingsEl.style.display = 'block';
            }
          } else {
            if (originalEl) originalEl.style.display = 'none';
            if (badge) badge.style.display = 'none';
            if (savingsEl) savingsEl.style.display = 'none';
          }
        });
      }

      // initial
      updateForYears(5);

      // bind segmented buttons
      segBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          segBtns.forEach(b => b.setAttribute('aria-pressed','false'));
          btn.setAttribute('aria-pressed','true');
          const years = Number(btn.dataset.years) || 5;
          updateForYears(years);
        });
      });

      // demo join/details handlers (replace with real integration)
      document.querySelectorAll('#pricingGrid .join-btn').forEach(b => {
        b.addEventListener('click', (e) => {
          const card = e.currentTarget.closest('.card');
          const plan = card.getAttribute('data-plan') || 'plan';
          const price = card.querySelector('.price-current').textContent;
          alert('Proceed to checkout for ' + plan + ' — ' + price);
        });
      });
      document.querySelectorAll('#pricingGrid .details-btn').forEach(b => {
        b.addEventListener('click', (e) => {
          const card = e.currentTarget.closest('.card');
          alert(card.querySelector('.title').textContent + '\n\nFeatures:\n' + Array.from(card.querySelectorAll('.features li')).map(li => '- ' + li.textContent.trim()).join('\n'));
        });
      });

    })();

// offline page script
// Detect offline status
  window.addEventListener('offline', () => {
    // Redirect to the offline page when offline
    window.location.href = '/offline'; 
  });

  window.addEventListener('online', () => {
    // You can do something when the user goes online, e.g., reload the page
    window.location.reload();
  });

  // Optionally, check on page load if the user is offline
  if (!navigator.onLine) {
    window.location.href = '/offline'; // Redirect to offline page
  }