
import express from "express";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Data for destination-in-india.ejs
const indiaDestinationsData = {
  pageTitle: "Destinations in India",
  pageDescription: "Discover popular Indian destinations for your next vacation. From serene beaches to majestic mountains, find the perfect getaway with our travel experts.",
  canonicalUrl: "https://www.intercontinentalholidays.com/destinations-in-india.htm",
  ogTitle: "Explore Top Destinations in India",
  ogDescription: "Find your next adventure from our most-loved destinations across India.",
  ogUrl: "https://www.intercontinentalholidays.com/destinations-in-india.htm",
  ogImage: "https://cdn.pixabay.com/photo/2024/05/18/01/09/ai-generated-8769302_1280.jpg",
  heroImage: "https://cdn.pixabay.com/photo/2024/05/18/01/09/ai-generated-8769302_1280.jpg",
  heroTitle: "Destinations in India",
  heroSubtitle: "Discover the best of India with our hand-picked destinations for every traveler.",
  heroButtons: [
    { url: "#", text: "Explore All Packages", class: "btn-primary" },
    { url: "#", text: "Get a Custom Plan", class: "btn-secondary" }
  ],
  destinationsTitle: "Popular Getaways",
  destinationsSubtitle: "Find your next adventure from our most-loved destinations.",
  destinations: [
    { name: "Agra", image: "/images/destination/india/Agra.avif", link: "/agra" },
    { name: "Ahmedabad", image: "/images/destination/india/Ahmedabad.avif", link: "/ahmedabad" },
    { name: "Amritsar", image: "/images/destination/india/Amritsar.avif", link: "/amritsar" },
    { name: "Andaman & Nikobar", image: "/images/destination/india/Andaman-Nikobar.avif", link: "/andaman-nikobar" },
    { name: "Aurangabad", image: "/images/destination/india/Aurangabad.avif", link: "/aurangabad" },
    { name: "Bengaluru", image: "/images/destination/india/Bengaluru.avif", link: "/bengaluru" },
    { name: "Bhimtal", image: "/images/destination/india/Bhimtal.avif", link: "/bhimtal" },
    { name: "Bhubaneswar", image: "/images/destination/india/Bhubaneswar.avif", link: "/bhubaneswar" },
    { name: "Chandigarh", image: "/images/destination/india/Chandigarh.avif", link: "/chandigarh" },
    { name: "Chennai", image: "/images/destination/india/Chennai.avif", link: "/chennai" },
    { name: "Coorg", image: "/images/destination/india/Coorg.avif", link: "/coorg" },
    { name: "Darjeeling", image: "/images/destination/india/Darjeeling.avif", link: "/darjeeling" },
    { name: "Delhi (NCR)", image: "/images/destination/india/Delhi (NCR).avif", link: "/delhi-ncr" },
    { name: "Dharamshala", image: "/images/destination/india/Dharamshala.avif", link: "/dharamshala" },
    { name: "Gangtok", image: "/images/destination/india/Gangtok.avif", link: "/gangtok" },
    { name: "Goa", image: "/images/destination/india/Goa.avif", link: "/goa" },
    { name: "Haridwar", image: "/images/destination/india/Haridwar.avif", link: "/haridwar" },
    { name: "Jaipur", image: "/images/destination/india/Jaipur.avif", link: "/jaipur" },
    { name: "Jaisalmer", image: "/images/destination/india/Jaisalmer.avif", link: "/jaisalmer" },
    { name: "Jim Corbett", image: "/images/destination/india/Jim Corbett.avif", link: "/jim-corbett" },
    { name: "Jodhpur", image: "/images/destination/india/Jodhpur.avif", link: "/jodhpur" },
    { name: "Kashmir", image: "/images/destination/india/Kashmir.avif", link: "/kashmir" },
    { name: "Kasauli", image: "/images/destination/india/Kasauli.avif", link: "/kasauli" },
    { name: "Kochi", image: "/images/destination/india/Kochi.avif", link: "/kochi" },
    { name: "Manali", image: "/images/destination/india/Manali.avif", link: "/manali" },
    { name: "Mumbai", image: "/images/destination/india/Mumbai.avif", link: "/mumbai" },
    { name: "Munnar", image: "/images/destination/india/Munnar.avif", link: "/munnar" },
    { name: "Mussoorie", image: "/images/destination/india/Mussoorie.avif", link: "/mussoorie" },
    { name: "Nanital", image: "/images/destination/india/Nanital.avif", link: "/nainital" },
    { name: "Pondicherry", image: "/images/destination/india/Pondicherry.avif", link: "/pondicherry" },
    { name: "Rishikesh", image: "/images/destination/india/Rishikesh.avif", link: "/rishikesh" },
    { name: "Varanasi", image: "/images/destination/india/Varanasi.avif", link: "/varanasi" },
    { name: "Vrindavan", image: "/images/destination/india/Vrindavan.avif", link: "/vrindavan" }
  ]

};

const footerData = {
  companyLogoUrl: 'https://static.wixstatic.com/media/92314d_f318fa39cb3b49cd8779d2d05e440c90~mv2.png/v1/crop/x_340,y_791,w_4377,h_4480/fill/w_91,h_94,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/92314d_f318fa39cb3b49cd8779d2d05e440c90~mv2.png',
  socialLinks: [
    { url: '#', label: 'Facebook', iconClass: 'fab fa-facebook-f' },
    { url: '#', label: 'Twitter', iconClass: 'fab fa-twitter' },
    { url: '#', label: 'Instagram', iconClass: 'fab fa-instagram' },
    { url: '#', label: 'LinkedIn', iconClass: 'fab fa-linkedin-in' },
    { url: '#', label: 'YouTube', iconClass: 'fab fa-youtube' }
  ],
  aboutText: 'We are a leading travel agency dedicated to creating unforgettable holiday experiences tailored to your dreams.',
  badges: [
    { iconClass: 'fas fa-shield-alt', text: 'Secure Payment' },
    { iconClass: 'fas fa-certificate', text: 'Verified & Trusted' },
    { iconClass: 'fas fa-medal', text: '1000+ Members of Trust' }
  ],
  quickLinks: [
    { url: '#', text: 'Membership' },
    { url: '#', text: 'Blog' },
    { url: '/about-us', text: 'About Us' },
    { url: '/contact-us', text: 'Contact Us' },
    { url: '#', text: 'Privacy Policy' },
    { url: '#', text: 'Terms & Conditions' }
  ],
  contactInfo: [
    { iconClass: 'fas fa-map-marker-alt', type: 'text', label: 'Registered Office:', value: 'No.02, Aman Enclave, Ghaziabad, UP-201009' },
    { iconClass: 'fas fa-building', type: 'text', label: 'Corporate Office:', value: 'A199, Sector 63 Rd, A Block, Sector 63, Noida, Uttar Pradesh 201309' },
    { iconClass: 'fas fa-phone-alt', type: 'link', href: 'tel:01204264599', value: '01204264599' },
    { iconClass: 'fas fa-envelope', type: 'link', href: 'mailto:support@Intercontinentalholidays.com', value: 'support@Intercontinentalholidays.com' }
  ],
  year: new Date().getFullYear(),
  companyName: 'InterContinental Holidays',
  legalLinks: [
    { url: '#', text: 'Privacy Policy' },
    { url: '#', text: 'Terms & Conditions' },
    { url: '#', text: 'Cancellation and Refund' },
    { url: '#', text: 'Pay Now' }
  ],
  brandTitle: 'Intercontinental Holidays Travel',
  brandTagline: 'Pioneering travel experiences, shaping memorable journeys.'
};

const headerData = {
  headerLogoUrl: 'https://static.wixstatic.com/media/92314d_f318fa39cb3b49cd8779d2d05e440c90~mv2.png',
  companyName: 'InterContinental Holidays',
  navLinks: [
    { url: '/', text: 'Home' },
    { url: '#', text: 'Destinations' },
    { url: '#', text: 'Activity' },
    { url: '/membership', text: 'Membership' },
    { url: '#', text: 'Blog' },
    { url: '/about-us', text: 'About Us' },
    { url: '/contact-us', text: 'Contact' },
    { url: '#', text: 'Redeem Voucher' }
  ],
  contactPhone: '01204264599',
  contactEmail: 'support@Intercontinentalholidays.com',
  sideNavLinks: [
    { url: '/', text: 'Home' },
    { url: '#', text: 'Destinations' },
    { url: '#', text: 'Activity' },
    { url: '/membership', text: 'Membership' },
    { url: '#', text: 'Blog' },
    { url: '/about-us', text: 'About Us' },
    { url: '/contact-us', text: 'Contact' },
    { url: '#', text: 'Redeem Voucher' }
  ],
  loginUrl: '#',
  joinMembershipUrl: '/membership'
};
// Membership page data
const membershipData = {
  metaTitle: "Intercontinental Holidays Membership Plans | Affordable Luxury Travel India",
  metaDescription: "Explore Intercontinental Holidays membership plans. Enjoy affordable luxury holidays, exclusive travel benefits, and global destinations with India’s most trusted vacation membership.",
  pageTitle: "Intercontinental Holidays Membership Plans",
  pageDescription: "Explore Intercontinental Holidays membership plans. Enjoy affordable luxury holidays, exclusive travel benefits, and global destinations with India’s most trusted vacation membership.",
  canonicalUrl: "https://www.intercontinentalholidays.com/membership.htm",
  ogTitle: "Intercontinental Holidays Membership Plans",
  ogDescription: "Discover incredible travel packages to global destinations with Intercontinental Holidays.",
  ogUrl: "https://www.intercontinentalholidays.com/membership.htm",
  ogImage: "https://www.intercontinentalholidays.com/images/memebrship-bg.png",
  heroTitle: "Your Gateway to Affordable Luxury Holidays",
  heroSubtitle: "Join Intercontinental Holidays Membership and unlock exclusive benefits, premium stays, and unforgettable travel experiences worldwide.",
  heroButtons: [
    { url: "#plans-section", icon: "fa-solid fa-plane", text: "View Plans", class: "btn-primary" },
    { url: "#", icon: "fa-solid fa-headset", text: "Talk to a Travel Advisor", class: "btn-secondary" }
  ],
  whyMemberTitle: "Why Become a Member?",
  whyMemberSubtitle: "Unlock a world of benefits designed for the modern traveler.",
  benefits: [
    { icon: "fa-solid fa-globe", title: "Global Destinations", text: "Access 100+ resorts worldwide" },
    { icon: "fa-solid fa-gem", title: "Exclusive Benefits", text: "Priority bookings, member-only deals" },
    { icon: "fa-solid fa-sack-dollar", title: "Affordable Luxury", text: "5-star vacations at competitive prices" },
    { icon: "fa-solid fa-clock", title: "Hassle-Free Planning", text: "End-to-end travel support" },
    { icon: "fa-solid fa-users", title: "Family-Friendly", text: "Packages for couples, families, groups" },
    { icon: "fa-solid fa-shield-halved", title: "Trusted & Transparent", text: "10+ years of expertise" }
  ],
  plansTitle: "Choose Your Perfect Plan",
  plansSubtitle: "Find the membership that fits your travel style and budget.",
  durations: [
    { years: 5, label: "5 Years" },
    { years: 10, label: "10 Years" },
    { years: 15, label: "15 Years" },
    { years: 30, label: "30 Years" }
  ],
  plans: [
    {
      code: "T1",
      title: "T1 — Standard Room",
      subtitle: "2 adults + 2 kids",
      topRight: "Best for small families",
      price: "₹2,99,000",
      original: "₹0",
      perYear: "₹59,800 / year",
      savings: "You save ₹0 (0%)",
      badgeClass: "badge-amber",
      pill: null,
      featured: false,
      features: [],
      pricingData: 'data-5-price="332222.22" data-5-discount="10" data-10-price="567045.45" data-10-discount="12" data-15-price="704706" data-15-discount="15" data-30-price="998750.00" data-30-discount="20"'
    },
    {
      code: "T2",
      title: "T2 — Suite",
      subtitle: "4 adults + 2 kids",
      topRight: "Most value",
      price: "₹3,99,000",
      original: "₹0",
      perYear: "₹79,800 / year",
      savings: "You save ₹0 (0%)",
      badgeClass: "badge-green",
      pill: "Popular",
      featured: true,
      features: [],
      pricingData: 'data-5-price="433695.65" data-5-discount="8" data-10-price="776666.67" data-10-discount="10" data-15-price="907954.55" data-15-discount="12" data-30-price="1218292.68" data-30-discount="18"'
    }
  ],
  includedTitle: "What's Included in Your Membership?",
  included: [
    { icon: "fa-solid fa-hotel", text: "Stays in 4★ & 5★ properties" },
    { icon: "fa-solid fa-concierge-bell", text: "Travel concierge support" },
    { icon: "fa-solid fa-utensils", text: "Dining discounts at partner hotels" },
    { icon: "fa-solid fa-champagne-glasses", text: "Special event & festival access" },
    { icon: "fa-solid fa-umbrella-beach", text: "Travel insurance add-ons" }
  ],
  testimonialsTitle: "What Our Members Say",
  testimonials: [
    { text: "“The Gold plan was perfect for our family trips. It saved us so much money on hotels and gave us access to amazing resorts.”", stars: 5, author: "- Sharma Family, Mumbai" },
    { text: "“We upgraded to Platinum and it’s worth every rupee. The VIP support is amazing and has made every trip seamless.”", stars: 5, author: "- Mr. Patel, Ahmedabad" },
    { text: "“Joining Intercontinental Holidays was the best decision for our annual vacations. The variety of destinations is incredible!”", stars: 5, author: "- Ms. Singh, Delhi" }
  ],
  howItWorksTitle: "How It Works",
  steps: [
    { icon: "fa-solid fa-list-check", title: "Choose Your Membership Plan", text: "Select the Silver, Gold, or Platinum plan that best suits your travel needs." },
    { icon: "fa-solid fa-key", title: "Get Exclusive Access", text: "Instantly unlock member-only rates for resorts, travel packages, and exclusive benefits." },
    { icon: "fa-solid fa-umbrella-beach", title: "Enjoy Luxury Holidays", text: "Book your dream vacation and enjoy a hassle-free, unforgettable luxury holiday every year." }
  ],
  faqTitle: "Frequently Asked Questions",
  faqs: [
    { q: "❓ What is included in the membership fee?", a: "Your membership fee provides a specific number of annual nights at our partner resorts, along with exclusive discounts on flights, dining, car rentals, and other travel services. Please refer to your plan details for a full list of benefits." },
    { q: "❓ Can I upgrade my plan later?", a: "Yes, you can upgrade your plan at any time. Our team will help you with the process and calculate the pro-rated fee difference." },
    { q: "❓ Are memberships refundable?", a: "Memberships are generally non-refundable once activated. We encourage you to contact our travel advisors to ensure you choose the best plan for your needs." },
    { q: "❓ How do I book my vacations?", a: "You can book your vacations through our exclusive member-only portal or by contacting your dedicated travel concierge. We guarantee a smooth and easy booking process for all members." },
    { q: "❓ Do you offer EMI payment options?", a: "Yes, we offer flexible EMI options to make our memberships more accessible. Please speak to a travel advisor for more details on available payment plans." }
  ],
  finalCtaTitle: "Start Your Journey with Intercontinental Holidays",
  finalCtaSubtitle: "Thousands of members already enjoy premium holidays with us. Don’t miss out on your exclusive benefits.",
  finalCtaButtons: [
    { url: "#plans-section", text: "Become a Member Today", class: "btn-primary" },
    { url: "#", text: "Talk to an Advisor", class: "btn-secondary" }
  ]
};
app.get('/membership', (req, res) => {
  res.render('membership', { ...membershipData, footerData, headerData });
});

// Dynamic data for index.ejs
const indexData = {
  pageTitle: "Intercontinental Holidays | Your Journey to Incredible Destinations",
  pageDescription: "Explore and book your dream vacation with Intercontinental Holidays. We offer a wide range of travel packages to top destinations worldwide.",
  canonicalUrl: "https://www.intercontinentalholidays.com/",
  ogTitle: "Intercontinental Holidays",
  ogDescription: "Discover incredible travel packages and destinations worldwide with Intercontinental Holidays.",
  ogUrl: "https://www.intercontinentalholidays.com/",
  ogImage: "https://www.intercontinentalholidays.com/images/intercontinental-holidays-share.jpg",
  heroVideoUrl: "https://video.wixstatic.com/video/92314d_de8613deeb334225bbf393a2e488e0a4/1080p/mp4/file.mp4",
  heroTitle: "Luxury Holidays. Lifetime Memories.",
  heroSubtitle: "Discover exclusive vacation memberships that bring you luxury, flexibility, and affordability.",
  heroButtons: [
    { url: "#", icon: "fa-solid fa-id-card", text: "Explore Membership Plans", class: "btn-primary" },
    { url: "#", icon: "fa-solid fa-map-location-dot", text: "Browse Destinations", class: "btn-secondary" }
  ],
  partnerTitle: "Travel with confidence — book with our global network of partners",
  partnerLogos: [
    {
      reverse: false,
      logos: [
        { src: "/images/logos/hotels-logo/hyatt.jpg", alt: "hyatt" },
        { src: "/images/logos/hotels-logo/radisson.jpg", alt: "radisson" },
        { src: "/images/logos/hotels-logo/regenta-royal-orchit.jpg", alt: "regenta-royal-orchit" },
        { src: "/images/logos/hotels-logo/royal-orchit.png", alt: "royal-orchit" },
        { src: "/images/logos/hotels-logo/sarover.jpg", alt: "sarover" }
      ]
    },
    {
      reverse: true,
      logos: [
        { src: "/images/logos/airlines-logo/airindia.jpg", alt: "airindia" },
        { src: "/images/logos/airlines-logo/british-airways.jpg", alt: "british-airways" },
        { src: "/images/logos/airlines-logo/emirates.jpg", alt: "emirates" },
        { src: "/images/logos/airlines-logo/indigo.jpg", alt: "indigo" },
        { src: "/images/logos/airlines-logo/singapure-airlines.jpg", alt: "singapure-airlines" },
        { src: "/images/logos/airlines-logo/qatar-airways.jpg", alt: "qatar-airways" }
      ]
    },
    {
      reverse: false,
      logos: [
        { src: "/images/logos/travel-logo/agoda.jpg", alt: "agoda" },
        { src: "/images/logos/travel-logo/cleartrip.jpg", alt: "cleartrip" },
        { src: "/images/logos/travel-logo/goibibo.jpg", alt: "goibibo" },
        { src: "/images/logos/travel-logo/make-my-trip.jpg", alt: "make-my-trip" },
        { src: "/images/logos/travel-logo/trivago.jpg", alt: "trivago" }
      ]
    }
  ],
  valueProps: [
    { icon: "🌍", title: "Affordable Luxury", description: "Experience world-class luxury without the hefty price tag. Our memberships make high-end travel accessible.", url: "#" },
    { icon: "🏖️", title: "Custom Packages", description: "Tailor your vacation to your desires. Choose from a wide range of destinations, activities, and accommodations.", url: "#" },
    { icon: "🛎️", title: "Exclusive Member Privileges", description: "Unlock members-only deals, early access to new destinations, and premium services for an unforgettable experience.", url: "#" }
  ],
  destinationsTitle: "Explore Our Popular Getaways",
  destinations: [
    { img: "/images/destination/goa.png", name: "Goa", url: "#" },
    { img: "/images/destination/kerala.png", name: "Kerala", url: "#" },
    { img: "/images/destination/dubai.png", name: "Dubai", url: "#" },
    { img: "/images/destination/singapore.png", name: "Singapore", url: "#" },
    { img: "/images/destination/Agra.png", name: "Agra", url: "#" },
    { img: "/images/destination/Delhi.png", name: "Delhi", url: "#" }
  ],
  allDestinationsUrl: "#",
  whyTrustTitle: "Why Families Trust Intercontinental Holidays",
  trustChecklist: [
    "10+ years of expertise",
    "Partnerships with 50+ hotel brands",
    "Transparent pricing",
    "24/7 Support"
  ],
  aboutUsUrl: "#",
  trustImage: "/images/trust-family1.png",
  membershipTitle: "Turn Every Vacation into a VIP Experience.",
  membershipDescription: "Unlock premium savings, access exclusive deals, and enjoy unmatched flexibility. Your dream vacation is waiting.",
  joinMembershipUrl: "#",
  testimonialsTitle: "What Our Members Say",
  testimonials: [
    { rating: "⭐⭐⭐⭐⭐", text: "An amazing experience! The team was so helpful and our resort was breathtaking. Worth every penny.", author: "- John D., California" },
    { rating: "⭐⭐⭐⭐⭐", text: "We've been members for 3 years now. The savings are incredible, and we love the flexibility to travel anywhere.", author: "- Parth Patel, Ahmedabad" },
    { rating: "⭐⭐⭐⭐⭐", text: "Seamless booking and fantastic customer service. I highly recommend Intercontinental Holidays to my friends and family.", author: "- Nikhil Tyagi, Varanasi" }
  ],
  blogTitle: "Travel Tips & Inspiration",
  blogs: [
    { img: "/images/blogImg/blog1.png", alt: "Top 10 Resorts", title: "Top 10 Luxury Resorts in India", description: "Discover the most stunning resorts for your next lavish getaway...", url: "#" },
    { img: "/images/blogImg/blog2.png", alt: "First International Trip", title: "How to Plan Your First International Trip", description: "A step-by-step guide to make your first international trip stress-free...", url: "#" },
    { img: "/images/blogImg/blog3.png", alt: "Save Money", title: "Why Vacation Memberships Save You Money", description: "Learn how joining a membership can lead to huge savings on your travels...", url: "#" }
  ],
  blogUrl: "#",
  newsletterTitle: "Get Holiday Deals in Your Inbox",
  newsletterSubtitle: "Sign up & unlock members-only offers.",
  newsletterBtnUrl: "#",
  newsletterBtnText: "Unlock Offers",
  hotelLogos: [
    { src: "/images/logos/hotels-logo/hyatt.jpg", alt: "hyatt" },
    { src: "/images/logos/hotels-logo/radisson.jpg", alt: "radisson" },
    { src: "/images/logos/hotels-logo/regenta-royal-orchit.jpg", alt: "regenta-royal-orchit" },
    { src: "/images/logos/hotels-logo/royal-orchit.png", alt: "royal-orchit" },
    { src: "/images/logos/hotels-logo/sarover.jpg", alt: "sarover" }
  ],
  airlineLogos: [
    { src: "/images/logos/airlines-logo/airindia.jpg", alt: "airindia" },
    { src: "/images/logos/airlines-logo/british-airways.jpg", alt: "british-airways" },
    { src: "/images/logos/airlines-logo/emirates.jpg", alt: "emirates" },
    { src: "/images/logos/airlines-logo/indigo.jpg", alt: "indigo" },
    { src: "/images/logos/airlines-logo/singapure-airlines.jpg", alt: "singapure-airlines" },
    { src: "/images/logos/airlines-logo/qatar-airways.jpg", alt: "qatar-airways" }
  ],
  travelLogos: [
    { src: "/images/logos/travel-logo/agoda.jpg", alt: "agoda" },
    { src: "/images/logos/travel-logo/cleartrip.jpg", alt: "cleartrip" },
    { src: "/images/logos/travel-logo/goibibo.jpg", alt: "goibibo" },
    { src: "/images/logos/travel-logo/make-my-trip.jpg", alt: "make-my-trip" },
    { src: "/images/logos/travel-logo/trivago.jpg", alt: "trivago" }
  ]
};

const aboutUsData = {
  pageTitle: "About Intercontinental Holidays – Making Every Journey Extraordinary",
  pageDescription: "Affordable luxury holidays, trusted memberships, and unforgettable travel experiences for over a decade.",
  canonicalUrl: "https://www.intercontinentalholidays.com/about-us",
  ogTitle: "About Intercontinental Holidays",
  ogDescription: "Learn about our mission, vision, team, and why families trust Intercontinental Holidays.",
  ogUrl: "https://www.intercontinentalholidays.com/about-us",
  ogImage: "https://www.intercontinentalholidays.com/images/intercontinental-holidays-share.jpg",

  aboutHeroTitle: "About Intercontinental Holidays – Making Every Journey Extraordinary",
  aboutHeroSubtitle: "Affordable luxury holidays, trusted memberships, and unforgettable travel experiences for over a decade.",
  aboutHeroButtons: [
    { url: "#", text: "Explore Membership Plans", class: "btn-primary" },
    { url: "#", text: "Contact a Travel Advisor", class: "btn-secondary" }
  ],

  aboutStoryTitle: "Who We Are",
  aboutStoryText: "At Intercontinental Holidays India Pvt. Ltd., we believe travel is not just about moving from one place to another—it’s about creating stories, discovering cultures, and building memories that last a lifetime. For over a decade, we’ve been helping families, couples, and explorers turn their travel dreams into unforgettable experiences. With a network of 100+ premium resorts and global destinations, we specialize in holiday memberships, luxury travel packages, and customized itineraries tailored to your lifestyle and budget.",
  aboutStoryImg: "", // Add image URL if you want to show the image

  mvv: [
    { icon: "🎯", title: "Our Mission", text: "Making luxury holidays accessible & stress-free." },
    { icon: "🌍", title: "Our Vision", text: "To be India’s most trusted vacation membership brand." },
    { icon: "🤝", title: "Our Values", text: "Transparency, trust, customer happiness, and innovation." }
  ],

  growthTitle: "Our Growth & Reach",
  growthStats: [
    { icon: "🌐", value: "100+", label: "Resorts & Hotels" },
    { icon: "🧳", value: "Thousands", label: "of Happy Members" },
    { icon: "🕐", value: "10+ Years", label: "of Experience" },
    { icon: "🤝", value: "Trusted", label: "by Global Partners" }
  ],

  trustTitle: "Trust, Transparency & Excellence",
  trustSubtitle: "We understand that booking holidays is about trust. That’s why we are committed to:",
  trustChecklist: [
    "Clear, upfront pricing with no hidden charges",
    "Registered & legally compliant operations (India Pvt. Ltd. registered company)",
    "Ethical travel practices & long-term customer relationships"
  ],
  trustFooter: "Our members choose us not just for holidays, but for peace of mind.",

  whyChooseTitle: "Why Travelers Choose Us",
  trustFactors: [
    { icon: "🏖️", title: "Affordable Luxury", text: "5-star experiences at competitive prices" },
    { icon: "✈️", title: "Customized Packages", text: "Tailor-made trips that fit your needs" },
    { icon: "🔑", title: "Exclusive Memberships", text: "Priority access to premium resorts & offers" },
    { icon: "🕒", title: "24/7 Support", text: "Dedicated travel assistance from experts" },
    { icon: "🤝", title: "Transparency & Trust", text: "No hidden charges, only clear commitments" },
    { icon: "👨‍👩‍👧", title: "Loved by Families", text: "Thousands of satisfied members across India" }
  ],

  teamTitle: "Meet Our Team",
  teamMembers: [
    { img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2", name: "Jane Doe", role: "Founder & CEO – Passionate Traveler" },
    { img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2", name: "John Smith", role: "Head of Operations – Logistics Expert" },
    { img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2", name: "Emily White", role: "Lead Travel Planner – Destination Curator" }
  ],

  testimonialsTitle: "What Our Members Say",
  testimonials: [
    {
      text: "“Intercontinental Holidays made our honeymoon unforgettable! The team handled everything with such care.”",
      img: "https://cdn.pixabay.com/photo/2020/01/02/19/30/bride-4736670_640.jpg",
      author: "Riya & Ankit",
      location: "Delhi"
    },
    {
      text: "“As a business traveler, I’ve never experienced such smooth and personalized planning. Highly recommended!”",
      img: "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_640.jpg",
      author: "Mr. Mehta",
      location: "Mumbai"
    }
  ],

  aboutCtaTitle: "Ready to Begin Your Journey?",
  aboutCtaSubtitle: "Join our growing family of travelers today and unlock a world of exclusive benefits.",
  aboutCtaButtons: [
    { url: "#", text: "View Membership Plans", class: "btn-primary" },
    { url: "#", text: "Talk to a Travel Advisor", class: "btn-secondary-white" }
  ]
};

const contactUsData = {
  pageTitle: "Contact Intercontinental Holidays | Your Journey to Incredible Destinations",
  pageDescription: "Get in touch with Intercontinental Holidays for travel advice, membership queries, and support.",
  canonicalUrl: "https://www.intercontinentalholidays.com/contact-us",
  ogTitle: "Contact Intercontinental Holidays",
  ogDescription: "Reach out for travel planning, membership, and support.",
  ogUrl: "https://www.intercontinentalholidays.com/contact-us",
  ogImage: "https://www.intercontinentalholidays.com/images/intercontinental-holidays-share.jpg",

  heroTitle: "Get in Touch with Intercontinental Holidays",
  heroSubtitle: "We’re here to answer your questions, guide your travel plans, and make your holidays stress-free.",

  contactInfo: [
    {
      iconClass: "fas fa-map-marker-alt",
      type: "address",
      label: "Corporate Office:",
      value: "Intercontinental Holidays India Pvt. Ltd., A199, Sector 63 Rd, A Block, Sector 63, Noida, Uttar Pradesh 201309"
    },
    {
      iconClass: "fas fa-phone-alt",
      type: "phone",
      label: "Phone Support:",
      value: "01204264599",
      details: "(Mon–Sat, 10 AM – 7 PM IST)"
    },
    {
      iconClass: "fas fa-envelope",
      type: "email",
      label: "Email Us:",
      value: "support@intercontinentalholidays.com"
    },
    {
      iconClass: "fab fa-whatsapp",
      type: "whatsapp",
      label: "WhatsApp / Chat Support:",
      details: "Connect with our team instantly.",
      url: "#"
    }
  ],

  subjects: ["Membership", "Packages", "Support", "Other"],
  privacyNote: "Your details are safe with us. We never share your information.",

  mapTitle: "Visit us at our corporate office or connect online from anywhere.",
  mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.2217270696547!2d77.37529857517035!3d28.623116030755106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceff640423abf%3A0x3b248e412b5fd296!2sA199%2C%20Sector%2063%20Rd%2C%20A%20Block%2C%20Sector%2063%2C%20Noida%2C%20Uttar%20Pradesh%20201309!5e0!3m2!1sen!2sin!4v1757056857699!5m2!1sen!2sin",

  whyContactTitle: "Why Contact Us?",
  whyContactCards: [
    { icon: "✅", title: "24/7 Assistance", text: "Our team is always here to support your journey, no matter the time zone." },
    { icon: "✅", title: "Expert Guidance", text: "Certified travel planners provide tailored recommendations and advice." },
    { icon: "✅", title: "Tailored Solutions", text: "Every query is handled personally to ensure a customized and satisfying response." },
    { icon: "✅", title: "Fast Response", text: "We pride ourselves on resolving most queries within 24 hours." }
  ],

  finalCtaTitle: "Let’s Plan Your Next Adventure Together",
  finalCtaSubtitle: "Reach out today and unlock exclusive travel benefits with Intercontinental Holidays.",
  finalCtaButtons: [
    { url: "#", text: "View Membership Plans", class: "btn-primary" },
    { url: "#", text: "Talk to a Travel Expert", class: "btn-secondary-white" }
  ]
};

// Data for international-destination.ejs
const internationalDestinationsData = {
  pageTitle: "International Destinations | Intercontinental Holidays",
  pageDescription: "Explore our curated international destinations. From exotic beaches to bustling cityscapes, find your next global adventure with our luxury travel packages.",
  canonicalUrl: "https://www.intercontinentalholidays.com/international-destination.htm",
  ogTitle: "International Destinations",
  ogDescription: "Discover incredible travel packages to global destinations with Intercontinental Holidays.",
  ogUrl: "https://www.intercontinentalholidays.com/international-destination.htm",
  ogImage: "https://cdn.pixabay.com/photo/2020/02/27/17/24/connection-4885313_1280.jpg",
  heroImage: "/images/destination/international/singapore.avif",
  heroTitle: "International Destinations",
  heroSubtitle: "Discover a world of luxury travel with our exclusive international packages.",
  heroButtons: [
    { url: "#", text: "Explore All Packages", class: "btn-primary" },
    { url: "#", text: "Get a Custom Plan", class: "btn-secondary" }
  ],
  destinationsTitle: "Popular International Getaways",
  destinationsSubtitle: "Find your next global adventure from our most-loved destinations.",
  destinations: [
    { name: "Singapore", image: "/images/destination/international/singapore.avif", link: "/singapore" },
    { name: "Thailand", image: "/images/destination/international/Thailand.avif", link: "/thailand" },
    { name: "Georgia", image: "/images/destination/international/Georgia.avif", link: "/georgia" },
    { name: "Istanbul", image: "/images/destination/international/Istanbul.avif", link: "/istanbul" },
    { name: "Italy", image: "/images/destination/international/Italy.avif", link: "/italy" },
    { name: "New York", image: "/images/destination/international/New york.avif", link: "/new-york" },
    { name: "Netherlands", image: "/images/destination/international/Netherlands.avif", link: "/netherlands" },
    { name: "Kazakhstan", image: "/images/destination/international/Kazakhstan.avif", link: "/kazakhstan" },
    { name: "Azerbaijan", image: "/images/destination/international/Azerbaijan.avif", link: "/azerbaijan" },
    { name: "Malaysia", image: "/images/destination/international/Malaysia.avif", link: "/malaysia" },
    { name: "Dubai", image: "/images/destination/international/Dubai.avif", link: "/dubai" },
    { name: "Srilanka", image: "/images/destination/international/Srilanka.avif", link: "/srilanka" },
    { name: "Bali", image: "/images/destination/international/Bali.avif", link: "/bali" },
    { name: "Bangkok", image: "/images/destination/international/Bangkok.avif", link: "/bangkok" },
    { name: "Paris", image: "/images/destination/international/Paris.avif", link: "/paris" },
    { name: "Denmark", image: "/images/destination/international/Denmark.avif", link: "/denmark" },
    { name: "New Zealand", image: "/images/destination/international/New Zealand.avif", link: "/new-zealand" },
    { name: "Maldives", image: "/images/destination/international/Maldives.avif", link: "/maldives" },
    { name: "Phu Quoc", image: "/images/destination/international/Phu Quoc.avif", link: "/phu-quoc" },
    { name: "Turkey", image: "/images/destination/international/Turkey.avif", link: "/turkey" },
    { name: "Egypt", image: "/images/destination/international/Egypt.avif", link: "/egypt" },
    { name: "Hong Kong", image: "/images/destination/international/Hong kong.avif", link: "/hong-kong" }
  ]
};

// Data for Amritsar hotels page
const amritsarHotelsData = {
  pageTitle: "Hotels in Amritsar | Intercontinental Holidays",
  pageDescription: "Explore our curated list of top hotels in Amritsar, including Ramada, Hyatt, and Radisson Blu. Book your perfect stay with Intercontinental Holidays.",
  canonicalUrl: "https://www.intercontinentalholidays.com/amritsar-hotels.htm",
  ogTitle: "Top Hotels in Amritsar",
  ogDescription: "Discover the finest accommodations in Amritsar with Intercontinental Holidays.",
  ogUrl: "https://www.intercontinentalholidays.com/amritsar-hotels.htm",
  ogImage: "/images/destination/india/Amritsar.avif",
  heroImage: "/images/destination/india/Amritsar.avif",
  heroTitle: "Hotels in Amritsar",
  heroSubtitle: "Discover the finest accommodations for your stay in the holy city of Amritsar.",
  heroButtons: [
    { url: "#", text: "Book a Stay", class: "btn-primary" },
    { url: "#", text: "Talk to an Advisor", class: "btn-secondary" }
  ],
  hotelsTitle: "Partner Hotels in Amritsar",
  hotelsSubtitle: "Choose from our list of trusted and luxurious hotel partners.",
  hotels: [
    {
      name: "Ramada By Wyndham",
      image: "/images/hotels/amritsar/Ramada By Wyndham.avif",
      alt: "Ramada By Wyndham Amritsar",
      link: "#"
    },
    {
      name: "Hyatt Amritsar",
      image: "/images/hotels/amritsar/Hyatt Amritsar.avif",
      alt: "Hyatt Amritsar",
      link: "#"
    },
    {
      name: "Radisson Blu",
      image: "/images/hotels/amritsar/Radisson blu.avif",
      alt: "Radisson Blu Amritsar",
      link: "#"
    },
    {
      name: "Taj Swarna Amritsar",
      image: "/images/hotels/amritsar/swarana Amrritsar.avif",
      alt: "Taj Swarna Amritsar",
      link: "#"
    }
  ]
};

// Data for Agra hotels page
const agraHotelsData = {
  pageTitle: "Hotels in Agra | Intercontinental Holidays",
  pageDescription: "Explore our curated list of top hotels in Agra, including ITC Mughal, Radisson, and Taj Hotel. Book your perfect stay with Intercontinental Holidays.",
  canonicalUrl: "https://www.intercontinentalholidays.com/agra-hotels.htm",
  ogTitle: "Top Hotels in Agra",
  ogDescription: "Discover the finest accommodations in Agra with Intercontinental Holidays.",
  ogUrl: "https://www.intercontinentalholidays.com/agra-hotels.htm",
  ogImage: "/images/destination/india/Agra.avif",
  heroImage: "/images/destination/india/Agra.avif",
  heroTitle: "Hotels in Agra",
  heroSubtitle: "Discover the finest accommodations for your stay in the city of the Taj Mahal.",
  heroButtons: [
    { url: "#", text: "Book a Stay", class: "btn-primary" },
    { url: "#", text: "Talk to an Advisor", class: "btn-secondary" }
  ],
  hotelsTitle: "Partner Hotels in Agra",
  hotelsSubtitle: "Choose from our list of trusted and luxurious hotel partners.",
  hotels: [
    {
      name: "ITC Mughal",
      image: "/images/hotels/agra/ITC Mughal.avif",
      alt: "ITC Mughal Agra",
      link: "#"
    },
    {
      name: "Radisson",
      image: "/images/hotels/agra/Radisson.avif",
      alt: "Radisson Agra",
      link: "#"
    },
    {
      name: "Taj Hotel",
      image: "/images/hotels/agra/Taj Hotel.avif",
      alt: "Taj Hotel Agra",
      link: "#"
    },
    {
      name: "Trident Agra",
      image: "/images/hotels/agra/Trident Agra.avif",
      alt: "Trident Agra",
      link: "#"
    }
  ]
};

// Similarly, define data for other hotel pages like Ahmedabad, Andaman & Nicobar, Aurangabad, etc.
// For brevity, only Amritsar and Agra are fully defined here.

const ahmedabadHotelsData = {
  pageTitle: "Hotels in Ahmedabad | Intercontinental Holidays",
  pageDescription: "Explore our curated list of top hotels in Ahmedabad, including Hyatt, Novotel, and Lemon Tree. Book your perfect stay with Intercontinental Holidays.",
  canonicalUrl: "https://www.intercontinentalholidays.com/ahmedabad-hotels.htm",
  ogTitle: "Top Hotels in Ahmedabad",
  ogDescription: "Discover the finest accommodations in Ahmedabad with Intercontinental Holidays.",
  ogUrl: "https://www.intercontinentalholidays.com/ahmedabad-hotels.htm",
  ogImage: "/images/destination/india/Ahmedabad.avif",
  heroImage: "/images/destination/india/Ahmedabad.avif",
  heroTitle: "Hotels in Ahmedabad",
  heroSubtitle: "Discover the finest accommodations for your stay in the vibrant city of Ahmedabad.",
  heroButtons: [
    { url: "#", text: "Book a Stay", class: "btn-primary" },
    { url: "#", text: "Talk to an Advisor", class: "btn-secondary" }
  ],
  hotelsTitle: "Partner Hotels in Ahmedabad",
  hotelsSubtitle: "Choose from our list of trusted and luxurious hotel partners.",
  hotels: [
    {
      name: "Hyatt Ahmedabad",
      image: "/images/hotels/ahmedabad/Hyatt Ahmedabad.avif",
      alt: "Hyatt Ahmedabad",
      link: "#"
    },
    {
      name: "Novotel Ahmedabad",
      image: "/images/hotels/ahmedabad/Novotel Ahmedabad.avif",
      alt: "Novotel Ahmedabad",
      link: "#"
    },
    {
      name: "Lemon Tree Ahmedabad",
      image: "/images/hotels/ahmedabad/Lemon Tree Ahmedabad.avif",
      alt: "Lemon Tree Ahmedabad",
      link: "#"
    },
    {
      name: "The House of MG",
      image: "/images/hotels/ahmedabad/The House of MG.avif",
      alt: "The House of MG Ahmedabad",
      link: "#"
    }
  ]
};

const andamanNicobarHotelsData = {
  pageTitle: "Hotels in Andaman & Nicobar | Intercontinental Holidays",
  pageDescription: "Explore our curated list of top hotels in Andaman & Nicobar, including SeaShell, Fortune Resort, and Taj Exotica. Book your perfect stay with Intercontinental Holidays.",
  canonicalUrl: "https://www.intercontinentalholidays.com/andaman-nicobar-hotels.htm",
  ogTitle: "Top Hotels in Andaman & Nicobar",
  ogDescription: "Discover the finest accommodations in Andaman & Nicobar with Intercontinental Holidays.",
  ogUrl: "https://www.intercontinentalholidays.com/andaman-nicobar-hotels.htm",
  ogImage: "/images/destination/india/Andaman & Nicobar.avif",
  heroImage: "/images/destination/india/Andaman & Nicobar.avif",
  heroTitle: "Hotels in Andaman & Nicobar",
  heroSubtitle: "Discover the finest accommodations for your stay in the tropical paradise of Andaman & Nicobar.",
  heroButtons: [
    { url: "#", text: "Book a Stay", class: "btn-primary" },
    { url: "#", text: "Talk to an Advisor", class: "btn-secondary" }
  ],
  hotelsTitle: "Partner Hotels in Andaman & Nicobar",
  hotelsSubtitle: "Choose from our list of trusted and luxurious hotel partners.",
  hotels: [
    {
      name: "SeaShell Port Blair",
      image: "/images/hotels/andaman-nicobar/SeaShell Port Blair.avif",
      alt: "SeaShell Port Blair",
      link: "#"
    },
    {
      name: "Fortune Resort Bay Island",
      image: "/images/hotels/andaman-nicobar/Fortune Resort Bay Island.avif",
      alt: "Fortune Resort Bay Island",
      link: "#"
    },
    {
      name: "Taj Exotica Resort & Spa",
      image: "/images/hotels/andaman-nicobar/Taj Exotica Resort & Spa.avif",
      alt: "Taj Exotica Resort & Spa Andaman",
      link: "#"
    },
    {
      name: "Silver Sand Beach Resort",
      image: "/images/hotels/andaman-nicobar/Silver Sand Beach Resort.avif",
      alt: "Silver Sand Beach Resort Andaman",
      link: "#"
    }
  ]
};

const aurangabadHotelsData = {
  pageTitle: "Hotels in Aurangabad | Intercontinental Holidays",
  pageDescription: "Explore our curated list of top hotels in Aurangabad, including Vivanta, Lemon Tree, and The Gateway. Book your perfect stay with Intercontinental Holidays.",
  canonicalUrl: "https://www.intercontinentalholidays.com/aurangabad-hotels.htm",
  ogTitle: "Top Hotels in Aurangabad",
  ogDescription: "Discover the finest accommodations in Aurangabad with Intercontinental Holidays.",
  ogUrl: "https://www.intercontinentalholidays.com/aurangabad-hotels.htm",
  ogImage: "/images/destination/india/Aurangabad.avif",
  heroImage: "/images/destination/india/Aurangabad.avif",
  heroTitle: "Hotels in Aurangabad",
  heroSubtitle: "Discover the finest accommodations for your stay in the historical city of Aurangabad.",
  heroButtons: [
    { url: "#", text: "Book a Stay", class: "btn-primary" },
    { url: "#", text: "Talk to an Advisor", class: "btn-secondary" }
  ],
  hotelsTitle: "Partner Hotels in Aurangabad",
  hotelsSubtitle: "Choose from our list of trusted and luxurious hotel partners.",
  hotels: [
    {
      name: "Vivanta Aurangabad",
      image: "/images/hotels/aurangabad/Vivanta Aurangabad.avif",
      alt: "Vivanta Aurangabad",
      link: "#"
    },
    {
      name: "Lemon Tree Aurangabad",
      image: "/images/hotels/aurangabad/Lemon Tree Aurangabad.avif",
      alt: "Lemon Tree Aurangabad",
      link: "#"
    },
    {
      name: "The Gateway Hotel Ambad",
      image: "/images/hotels/aurangabad/The Gateway Hotel Ambad.avif",
      alt: "The Gateway Hotel Ambad Aurangabad",
      link: "#"
    },
    {
      name: "Hotel Rama International",
      image: "/images/hotels/aurangabad/Hotel Rama International.avif",
      alt: "Hotel Rama International Aurangabad",
      link: "#"
    }
  ]
};

// Similarly, define data for other hotel pages like Bengaluru, Bhimtal, Bhubaneswar, etc.
// For brevity, only a few are fully defined here.

const bengaluruHotelsData = {
  pageTitle: "Hotels in Bengaluru | Intercontinental Holidays",
  pageDescription: "Explore our curated list of top hotels in Bengaluru, including The Leela, ITC Gardenia, and Taj West End. Book your perfect stay with Intercontinental Holidays.",
  canonicalUrl: "https://www.intercontinentalholidays.com/bengaluru-hotels.htm",
  ogTitle: "Top Hotels in Bengaluru",
  ogDescription: "Discover the finest accommodations in Bengaluru with Intercontinental Holidays.",
  ogUrl: "https://www.intercontinentalholidays.com/bengaluru-hotels.htm",
  ogImage: "/images/destination/india/Bengaluru.avif",
  heroImage: "/images/destination/india/Bengaluru.avif",
  heroTitle: "Hotels in Bengaluru",
  heroSubtitle: "Discover the finest accommodations for your stay in the Silicon Valley of India.",
  heroButtons: [
    { url: "#", text: "Book a Stay", class: "btn-primary" },
    { url: "#", text: "Talk to an Advisor", class: "btn-secondary" }
  ],
  hotelsTitle: "Partner Hotels in Bengaluru",
  hotelsSubtitle: "Choose from our list of trusted and luxurious hotel partners.",
  hotels: [
    {
      name: "The Leela Palace Bengaluru",
      image: "/images/hotels/bengaluru/The Leela Palace Bengaluru.avif",
      alt: "The Leela Palace Bengaluru",
      link: "#"
    },
    {
      name: "ITC Gardenia",
      image: "/images/hotels/bengaluru/ITC Gardenia.avif",
      alt: "ITC Gardenia Bengaluru",
      link: "#"
    },
    {
      name: "Taj West End",
      image: "/images/hotels/bengaluru/Taj West End.avif",
      alt: "Taj West End Bengaluru",
      link: "#"
    },
    {
      name: "Shangri-La Hotel Bengaluru",
      image: "/images/hotels/bengaluru/Shangri-La Hotel Bengaluru.avif",
      alt: "Shangri-La Hotel Bengaluru",
      link: "#"
    }
  ]
};

const bhimtalHotelsData = {
  pageTitle: "Hotels in Bhimtal | Intercontinental Holidays",
  pageDescription: "Explore our curated list of top hotels in Bhimtal, including The Naini Retreat, The Bhimtal Lake Resort, and The Golden Palms. Book your perfect stay with Intercontinental Holidays.",
  canonicalUrl: "https://www.intercontinentalholidays.com/bhimtal-hotels.htm",
  ogTitle: "Top Hotels in Bhimtal",
  ogDescription: "Discover the finest accommodations in Bhimtal with Intercontinental Holidays.",
  ogUrl: "https://www.intercontinentalholidays.com/bhimtal-hotels.htm",
  ogImage: "/images/destination/india/Bhimtal.avif",
  heroImage: "/images/destination/india/Bhimtal.avif",
  heroTitle: "Hotels in Bhimtal",
  heroSubtitle: "Discover the finest accommodations for your stay in the serene town of Bhimtal.",
  heroButtons: [
    { url: "#", text: "Book a Stay", class: "btn-primary" },
    { url: "#", text: "Talk to an Advisor", class: "btn-secondary" }
  ],
  hotelsTitle: "Partner Hotels in Bhimtal",
  hotelsSubtitle: "Choose from our list of trusted and luxurious hotel partners.",
  hotels: [
    {
      name: "The Naini Retreat",
      image: "/images/hotels/bhimtal/The Naini Retreat.avif",
      alt: "The Naini Retreat Bhimtal",
      link: "#"
    },
    {
      name: "The Bhimtal Lake Resort",
      image: "/images/hotels/bhimtal/The Bhimtal Lake Resort.avif",
      alt: "The Bhimtal Lake Resort",
      link: "#"
    },
    {
      name: "The Golden Palms",
      image: "/images/hotels/bhimtal/The Golden Palms.avif",
      alt: "The Golden Palms Bhimtal",
      link: "#"
    },
    {
      name: "Hotel Himalaya",
      image: "/images/hotels/bhimtal/Hotel Himalaya.avif",
      alt: "Hotel Himalaya Bhimtal",
      link: "#"
    }
  ]
};

// Similarly, define data for other hotel pages like Bhubaneswar, Chandigarh, Chennai, etc.
// For brevity, only a few are fully defined here.

const bhubaneswarHotelsData = {
  pageTitle: "Hotels in Bhubaneswar | Intercontinental Holidays",
  pageDescription: "Explore our curated list of top hotels in Bhubaneswar, including Mayfair Lagoon, Trident, and The Crown. Book your perfect stay with Intercontinental Holidays.",
  canonicalUrl: "https://www.intercontinentalholidays.com/bhubaneswar-hotels.htm",
  ogTitle: "Top Hotels in Bhubaneswar",
  ogDescription: "Discover the finest accommodations in Bhubaneswar with Intercontinental Holidays.",
  ogUrl: "https://www.intercontinentalholidays.com/bhubaneswar-hotels.htm",
  ogImage: "/images/destination/india/Bhubaneswar.avif",
  heroImage: "/images/destination/india/Bhubaneswar.avif",
  heroTitle: "Hotels in Bhubaneswar",
  heroSubtitle: "Discover the finest accommodations for your stay in the temple city of Bhubaneswar.",
  heroButtons: [
    { url: "#", text: "Book a Stay", class: "btn-primary" },
    { url: "#", text: "Talk to an Advisor", class: "btn-secondary" }
  ],
  hotelsTitle: "Partner Hotels in Bhubaneswar",
  hotelsSubtitle: "Choose from our list of trusted and luxurious hotel partners.",
  hotels: [
    {
      name: "Mayfair Lagoon",
      image: "/images/hotels/bhubaneswar/Mayfair Lagoon.avif",
      alt: "Mayfair Lagoon Bhubaneswar",
      link: "#"
    },
    {
      name: "Trident Bhubaneswar",
      image: "/images/hotels/bhubaneswar/Trident Bhubaneswar.avif",
      alt: "Trident Bhubaneswar",
      link: "#"
    },
    {
      name: "The Crown Bhubaneswar",
      image: "/images/hotels/bhubaneswar/The Crown Bhubaneswar.avif",
      alt: "The Crown Bhubaneswar",
      link: "#"
    },
    {
      name: "Swosti Premium",
      image: "/images/hotels/bhubaneswar/Swosti Premium.avif",
      alt: "Swosti Premium Bhubaneswar",
      link: "#"
    }
  ]
};

const chandigarhHotelsData = {
  pageTitle: "Hotels in Chandigarh | Intercontinental Holidays",
  pageDescription: "Explore our curated list of top hotels in Chandigarh, including JW Marriott, Taj Chandigarh, and The Lalit. Book your perfect stay with Intercontinental Holidays.",
  canonicalUrl: "https://www.intercontinentalholidays.com/chandigarh-hotels.htm",
  ogTitle: "Top Hotels in Chandigarh",
  ogDescription: "Discover the finest accommodations in Chandigarh with Intercontinental Holidays.",
  ogUrl: "https://www.intercontinentalholidays.com/chandigarh-hotels.htm",
  ogImage: "/images/destination/india/Chandigarh.avif",
  heroImage: "/images/destination/india/Chandigarh.avif",
  heroTitle: "Hotels in Chandigarh",
  heroSubtitle: "Discover the finest accommodations for your stay in the city beautiful, Chandigarh.",
  heroButtons: [
    { url: "#", text: "Book a Stay", class: "btn-primary" },
    { url: "#", text: "Talk to an Advisor", class: "btn-secondary" }
  ],
  hotelsTitle: "Partner Hotels in Chandigarh",
  hotelsSubtitle: "Choose from our list of trusted and luxurious hotel partners.",
  hotels: [
    {
      name: "JW Marriott Chandigarh",
      image: "/images/hotels/chandigarh/JW Marriott Chandigarh.avif",
      alt: "JW Marriott Chandigarh",
      link: "#"
    },
    {
      name: "Taj Chandigarh",
      image: "/images/hotels/chandigarh/Taj Chandigarh.avif",
      alt: "Taj Chandigarh",
      link: "#"
    },
    {
      name: "The Lalit Chandigarh",
      image: "/images/hotels/chandigarh/The Lalit Chandigarh.avif",
      alt: "The Lalit Chandigarh",
      link: "#"
    },
    {
      name: "Hotel Mountview",
      image: "/images/hotels/chandigarh/Hotel Mountview.avif",
      alt: "Hotel Mountview Chandigarh",
      link: "#"
    }
  ]
};
const chennaiHotelsData = {
  pageTitle: "Hotels in Chennai | Intercontinental Holidays",
  pageDescription: "Explore our curated list of top hotels in Chennai, including ITC Grand Chola, The Leela Palace, and Taj Coromandel. Book your perfect stay with Intercontinental Holidays.",
  canonicalUrl: "https://www.intercontinentalholidays.com/chennai-hotels.htm",
  ogTitle: "Top Hotels in Chennai",
  ogDescription: "Discover the finest accommodations in Chennai with Intercontinental Holidays.",
  ogUrl: "https://www.intercontinentalholidays.com/chennai-hotels.htm",
  ogImage: "/images/destination/india/Chennai.avif",
  heroImage: "/images/destination/india/Chennai.avif",
  heroTitle: "Hotels in Chennai",
  heroSubtitle: "Discover the finest accommodations for your stay in the cultural capital of South India.",
  heroButtons: [
    { url: "#", text: "Book a Stay", class: "btn-primary" },
    { url: "#", text: "Talk to an Advisor", class: "btn-secondary" }
  ],
  hotelsTitle: "Partner Hotels in Chennai",
  hotelsSubtitle: "Choose from our list of trusted and luxurious hotel partners.",
  hotels: [
    {
      name: "ITC Grand Chola",
      image: "/images/hotels/chennai/ITC Grand Chola.avif",
      alt: "ITC Grand Chola Chennai",
      link: "#"
    },
    {
      name: "The Leela Palace Chennai",
      image: "/images/hotels/chennai/The Leela Palace Chennai.avif",
      alt: "The Leela Palace Chennai",
      link: "#"
    },
    {
      name: "Taj Coromandel",
      image: "/images/hotels/chennai/Taj Coromandel.avif",
      alt: "Taj Coromandel Chennai",
      link: "#"
    },
    {
      name: "The Westin Chennai",
      image: "/images/hotels/chennai/The Westin Chennai.avif",
      alt: "The Westin Chennai",
      link: "#"
    }
  ]
};

const coorgHotelsData = {
  pageTitle: "Hotels in Coorg | Intercontinental Holidays",
  pageDescription: "Explore our curated list of top hotels in Coorg, including Taj Madikeri, The Tamara Coorg, and Evolve Back. Book your perfect stay with Intercontinental Holidays.",
  canonicalUrl: "https://www.intercontinentalholidays.com/coorg-hotels.htm",
  ogTitle: "Top Hotels in Coorg",
  ogDescription: "Discover the finest accommodations in Coorg with Intercontinental Holidays.",
  ogUrl: "https://www.intercontinentalholidays.com/coorg-hotels.htm",
  ogImage: "/images/destination/india/Coorg.avif",
  heroImage: "/images/destination/india/Coorg.avif",
  heroTitle: "Hotels in Coorg",
  heroSubtitle: "Discover the finest accommodations for your stay in the scenic hill station of Coorg.",
  heroButtons: [
    { url: "#", text: "Book a Stay", class: "btn-primary" },
    { url: "#", text: "Talk to an Advisor", class: "btn-secondary" }
  ],
  hotelsTitle: "Partner Hotels in Coorg",
  hotelsSubtitle: "Choose from our list of trusted and luxurious hotel partners.",
  hotels: [
    {
      name: "Taj Madikeri Resort & Spa",
      image: "/images/hotels/coorg/Taj Madikeri Resort & Spa.avif",
      alt: "Taj Madikeri Resort & Spa Coorg",
      link: "#"
    },
    {
      name: "The Tamara Coorg",
      image: "/images/hotels/coorg/The Tamara Coorg.avif",
      alt: "The Tamara Coorg",
      link: "#"
    },
    {
      name: "Evolve Back Coorg",
      image: "/images/hotels/coorg/Evolve Back Coorg.avif",
      alt: "Evolve Back Coorg",
      link: "#"
    },
    {
      name: "Club Mahindra Madikeri",
      image: "/images/hotels/coorg/Club Mahindra Madikeri.avif",
      alt: "Club Mahindra Madikeri",
      link: "#"
    }
  ]
};

const darjeelingHotelsData = {
  pageTitle: "Hotels in Darjeeling | Intercontinental Holidays",
  pageDescription: "Explore our curated list of top hotels in Darjeeling, including Mayfair Darjeeling, The Elgin, and Windamere Hotel. Book your perfect stay with Intercontinental Holidays.",
  canonicalUrl: "https://www.intercontinentalholidays.com/darjeeling-hotels.htm",
  ogTitle: "Top Hotels in Darjeeling",
  ogDescription: "Discover the finest accommodations in Darjeeling with Intercontinental Holidays.",
  ogUrl: "https://www.intercontinentalholidays.com/darjeeling-hotels.htm",
  ogImage: "/images/destination/india/Darjeeling.avif",
  heroImage: "/images/destination/india/Darjeeling.avif",
  heroTitle: "Hotels in Darjeeling",
  heroSubtitle: "Discover the finest accommodations for your stay in the queen of hill stations, Darjeeling.",
  heroButtons: [
    { url: "#", text: "Book a Stay", class: "btn-primary" },
    { url: "#", text: "Talk to an Advisor", class: "btn-secondary" }
  ],
  hotelsTitle: "Partner Hotels in Darjeeling",
  hotelsSubtitle: "Choose from our list of trusted and luxurious hotel partners.",
  hotels: [
    {
      name: "Mayfair Darjeeling",
      image: "/images/hotels/darjeeling/Mayfair Darjeeling.avif",
      alt: "Mayfair Darjeeling",
      link: "#"
    },
    {
      name: "The Elgin Darjeeling",
      image: "/images/hotels/darjeeling/The Elgin Darjeeling.avif",
      alt: "The Elgin Darjeeling",
      link: "#"
    },
    {
      name: "Windamere Hotel",
      image: "/images/hotels/darjeeling/Windamere Hotel.avif",
      alt: "Windamere Hotel Darjeeling",
      link: "#"
    },
    {
      name: "The Oberoi Grand",
      image: "/images/hotels/darjeeling/The Oberoi Grand.avif",
      alt: "The Oberoi Grand Darjeeling",
      link: "#"
    }
  ]
};

const delhiNcrHotelsData = {
  pageTitle: "Hotels in Delhi NCR | Intercontinental Holidays",
  pageDescription: "Explore our curated list of top hotels in Delhi NCR, including The Leela, ITC Maurya, and Taj Mahal Hotel. Book your perfect stay with Intercontinental Holidays.",
  canonicalUrl: "https://www.intercontinentalholidays.com/delhi-ncr-hotels.htm",
  ogTitle: "Top Hotels in Delhi NCR",
  ogDescription: "Discover the finest accommodations in Delhi NCR with Intercontinental Holidays.",
  ogUrl: "https://www.intercontinentalholidays.com/delhi-ncr-hotels.htm",
  ogImage: "/images/destination/india/Delhi NCR.avif",
  heroImage: "/images/destination/india/Delhi NCR.avif",
  heroTitle: "Hotels in Delhi NCR",
  heroSubtitle: "Discover the finest accommodations for your stay in the bustling capital region of India.",
  heroButtons: [
    { url: "#", text: "Book a Stay", class: "btn-primary" },
    { url: "#", text: "Talk to an Advisor", class: "btn-secondary" }
  ],
  hotelsTitle: "Partner Hotels in Delhi NCR",
  hotelsSubtitle: "Choose from our list of trusted and luxurious hotel partners.",
  hotels: [
    {
      name: "The Leela Palace New Delhi",
      image: "/images/hotels/delhi-ncr/The Leela Palace New Delhi.avif",
      alt: "The Leela Palace New Delhi",
      link: "#"
    },
    {
      name: "ITC Maurya",
      image: "/images/hotels/delhi-ncr/ITC Maurya.avif",
      alt: "ITC Maurya New Delhi",
      link: "#"
    },
    {
      name: "Taj Mahal Hotel",
      image: "/images/hotels/delhi-ncr/Taj Mahal Hotel.avif",
      alt: "Taj Mahal Hotel New Delhi",
      link: "#"
    },
    {
      name: "The Oberoi New Delhi",
      image: "/images/hotels/delhi-ncr/The Oberoi New Delhi.avif",
      alt: "The Oberoi New Delhi",
      link: "#"
    }
  ]
};

const dharamshalaHotelsData = {
  pageTitle: "Hotels in Dharamshala | Intercontinental Holidays",
  pageDescription: "Explore our curated list of top hotels in Dharamshala, including Fortune Park Moksha, The Pavilion, and Hotel Bhagsu. Book your perfect stay with Intercontinental Holidays.",
  canonicalUrl: "https://www.intercontinentalholidays.com/dharamshala-hotels.htm",
  ogTitle: "Top Hotels in Dharamshala",
  ogDescription: "Discover the finest accommodations in Dharamshala with Intercontinental Holidays.",
  ogUrl: "https://www.intercontinentalholidays.com/dharamshala-hotels.htm",
  ogImage: "/images/destination/india/Dharamshala.avif",
  heroImage: "/images/destination/india/Dharamshala.avif",
  heroTitle: "Hotels in Dharamshala",
  heroSubtitle: "Discover the finest accommodations for your stay in the serene town of Dharamshala.",
  heroButtons: [
    { url: "#", text: "Book a Stay", class: "btn-primary" },
    { url: "#", text: "Talk to an Advisor", class: "btn-secondary" }
  ],
  hotelsTitle: "Partner Hotels in Dharamshala",
  hotelsSubtitle: "Choose from our list of trusted and luxurious hotel partners.",
  hotels: [
    {
      name: "Fortune Park Moksha",
      image: "/images/hotels/dharamshala/Fortune Park Moksha.avif",
      alt: "Fortune Park Moksha Dharamshala",
      link: "#"
    },
    {
      name: "The Pavilion Dharamshala",
      image: "/images/hotels/dharamshala/The Pavilion Dharamshala.avif",
      alt: "The Pavilion Dharamshala",
      link: "#"
    },
    {
      name: "Hotel Bhagsu",
      image: "/images/hotels/dharamshala/Hotel Bhagsu.avif",
      alt: "Hotel Bhagsu Dharamshala",
      link: "#"
    },
    {
      name: "Club Mahindra Dharamshala",
      image: "/images/hotels/dharamshala/Club Mahindra Dharamshala.avif",
      alt: "Club Mahindra Dharamshala",
      link: "#"
    }
  ]
};

const gangtokHotelsData = {
  pageTitle: "Hotels in Gangtok | Intercontinental Holidays",
  pageDescription: "Explore our curated list of top hotels in Gangtok, including The Elgin Nor-Khill, Mayfair Spa Resort & Casino, and The Royal Plaza. Book your perfect stay with Intercontinental Holidays.",
  canonicalUrl: "https://www.intercontinentalholidays.com/gangtok-hotels.htm",
  ogTitle: "Top Hotels in Gangtok",
  ogDescription: "Discover the finest accommodations in Gangtok with Intercontinental Holidays.",
  ogUrl: "https://www.intercontinentalholidays.com/gangtok-hotels.htm",
  ogImage: "/images/destination/india/Gangtok.avif",
  heroImage: "/images/destination/india/Gangtok.avif",
  heroTitle: "Hotels in Gangtok",
  heroSubtitle: "Discover the finest accommodations for your stay in the picturesque town of Gangtok.",
  heroButtons: [
    { url: "#", text: "Book a Stay", class: "btn-primary" },
    { url: "#", text: "Talk to an Advisor", class: "btn-secondary" }
  ],
  hotelsTitle: "Partner Hotels in Gangtok",
  hotelsSubtitle: "Choose from our list of trusted and luxurious hotel partners.",
  hotels: [
    {
      name: "The Elgin Nor-Khill",
      image: "/images/hotels/gangtok/The Elgin Nor-Khill.avif",
      alt: "The Elgin Nor-Khill Gangtok",
      link: "#"
    },
    {
      name: "Mayfair Spa Resort & Casino",
      image: "/images/hotels/gangtok/Mayfair Spa Resort & Casino.avif",
      alt: "Mayfair Spa Resort & Casino Gangtok",
      link: "#"
    },
    {
      name: "The Royal Plaza",
      image: "/images/hotels/gangtok/The Royal Plaza.avif",
      alt: "The Royal Plaza Gangtok",
      link: "#"
    },
    {
      name: "Hotel Tashi Delek",
      image: "/images/hotels/gangtok/Hotel Tashi Delek.avif",
      alt: "Hotel Tashi Delek Gangtok",
      link: "#"
    }
  ]
};

const goaHotelsData = {
  pageTitle: "Hotels in Goa | Intercontinental Holidays",
  pageDescription: "Explore our curated list of top hotels in Goa, including Taj Exotica, The Leela, and Park Hyatt. Book your perfect stay with Intercontinental Holidays.",
  canonicalUrl: "https://www.intercontinentalholidays.com/goa-hotels.htm",
  ogTitle: "Top Hotels in Goa",
  ogDescription: "Discover the finest accommodations in Goa with Intercontinental Holidays.",
  ogUrl: "https://www.intercontinentalholidays.com/goa-hotels.htm",
  ogImage: "/images/destination/india/Goa.avif",
  heroImage: "/images/destination/india/Goa.avif",
  heroTitle: "Hotels in Goa",
  heroSubtitle: "Discover the finest accommodations for your stay in the beach paradise of Goa.",
  heroButtons: [
    { url: "#", text: "Book a Stay", class: "btn-primary" },
    { url: "#", text: "Talk to an Advisor", class: "btn-secondary" }
  ],
  hotelsTitle: "Partner Hotels in Goa",
  hotelsSubtitle: "Choose from our list of trusted and luxurious hotel partners.",
  hotels: [
    {
      name: "Taj Exotica Resort & Spa",
      image: "/images/hotels/goa/Taj Exotica Resort & Spa.avif",
      alt: "Taj Exotica Resort & Spa Goa",
      link: "#"
    },
    {
      name: "The Leela Goa",
      image: "/images/hotels/goa/The Leela Goa.avif",
      alt: "The Leela Goa",
      link: "#"
    },
    {
      name: "Park Hyatt Goa Resort & Spa",
      image: "/images/hotels/goa/Park Hyatt Goa Resort & Spa.avif",
      alt: "Park Hyatt Goa Resort & Spa",
      link: "#"
    },
    {
      name: "Alila Diwa Goa",
      image: "/images/hotels/goa/Alila Diwa Goa.avif",
      alt: "Alila Diwa Goa",
      link: "#"
    }
  ]
};

const haridwarHotelsData = {
  pageTitle: "Hotels in Haridwar | Intercontinental Holidays",
  pageDescription: "Explore our curated list of top hotels in Haridwar, including Taj Gateway, Ganga Lahari, and Haveli Hari Ganga. Book your perfect stay with Intercontinental Holidays.",
  canonicalUrl: "https://www.intercontinentalholidays.com/haridwar-hotels.htm",
  ogTitle: "Top Hotels in Haridwar",
  ogDescription: "Discover the finest accommodations in Haridwar with Intercontinental Holidays.",
  ogUrl: "https://www.intercontinentalholidays.com/haridwar-hotels.htm",
  ogImage: "/images/destination/india/Haridwar.avif",
  heroImage: "/images/destination/india/Haridwar.avif",
  heroTitle: "Hotels in Haridwar",
  heroSubtitle: "Discover the finest accommodations for your stay in the holy city of Haridwar.",
  heroButtons: [
    { url: "#", text: "Book a Stay", class: "btn-primary" },
    { url: "#", text: "Talk to an Advisor", class: "btn-secondary" }
  ],
  hotelsTitle: "Partner Hotels in Haridwar",
  hotelsSubtitle: "Choose from our list of trusted and luxurious hotel partners.",
  hotels: [
    {
      name: "Taj Gateway Hotel",
      image: "/images/hotels/haridwar/Taj Gateway Hotel.avif",
      alt: "Taj Gateway Hotel Haridwar",
      link: "#"
    },
    {
      name: "Ganga Lahari",
      image: "/images/hotels/haridwar/Ganga Lahari.avif",
      alt: "Ganga Lahari Haridwar",
      link: "#"
    },
    {
      name: "Haveli Hari Ganga",
      image: "/images/hotels/haridwar/Haveli Hari Ganga.avif",
      alt: "Haveli Hari Ganga Haridwar",
      link: "#"
    },
    {
      name: "Aalia on the Ganges",
      image: "/images/hotels/haridwar/Aalia on the Ganges.avif",
      alt: "Aalia on the Ganges Haridwar",
      link: "#"
    }
  ]
};

// Similarly, define data for other hotel pages like Jaipur, Jaisalmer, Jim Corbett, etc.
// For brevity, only a few are fully defined here.

const jaipurHotelsData = {
  pageTitle: "Hotels in Jaipur | Intercontinental Holidays",
  pageDescription: "Explore our curated list of top hotels in Jaipur, including Rambagh Palace, ITC Rajputana, and The Oberoi Rajvilas. Book your perfect stay with Intercontinental Holidays.",
  canonicalUrl: "https://www.intercontinentalholidays.com/jaipur-hotels.htm",
  ogTitle: "Top Hotels in Jaipur",
  ogDescription: "Discover the finest accommodations in Jaipur with Intercontinental Holidays.",
  ogUrl: "https://www.intercontinentalholidays.com/jaipur-hotels.htm",
  ogImage: "/images/destination/india/Jaipur.avif",
  heroImage: "/images/destination/india/Jaipur.avif",
  heroTitle: "Hotels in Jaipur",
  heroSubtitle: "Discover the finest accommodations for your stay in the pink city of Jaipur.",
  heroButtons: [
    { url: "#", text: "Book a Stay", class: "btn-primary" },
    { url: "#", text: "Talk to an Advisor", class: "btn-secondary" }
  ],
  hotelsTitle: "Partner Hotels in Jaipur",
  hotelsSubtitle: "Choose from our list of trusted and luxurious hotel partners.",
  hotels: [
    {
      name: "Rambagh Palace",
      image: "/images/hotels/jaipur/Rambagh Palace.avif",
      alt: "Rambagh Palace Jaipur",
      link: "#"
    },
    {
      name: "ITC Rajputana",
      image: "/images/hotels/jaipur/ITC Rajputana.avif",
      alt: "ITC Rajputana Jaipur",
      link: "#"
    },
    {
      name: "The Oberoi Rajvilas",
      image: "/images/hotels/jaipur/The Oberoi Rajvilas.avif",
      alt: "The Oberoi Rajvilas Jaipur",
      link: "#"
    },
    {
      name: "Trident Jaipur",
      image: "/images/hotels/jaipur/Trident Jaipur.avif",
      alt: "Trident Jaipur",
      link: "#"
    }
  ]
};

const jaisalmerHotelsData = {
  pageTitle: "Hotels in Jaisalmer | Intercontinental Holidays",
  pageDescription: "Explore our curated list of top hotels in Jaisalmer, including Suryagarh, The Serai, and Jaisalmer Marriott Resort & Spa. Book your perfect stay with Intercontinental Holidays.",
  canonicalUrl: "https://www.intercontinentalholidays.com/jaisalmer-hotels.htm",
  ogTitle: "Top Hotels in Jaisalmer",
  ogDescription: "Discover the finest accommodations in Jaisalmer with Intercontinental Holidays.",
  ogUrl: "https://www.intercontinentalholidays.com/jaisalmer-hotels.htm",
  ogImage: "/images/destination/india/Jaisalmer.avif",
  heroImage: "/images/destination/india/Jaisalmer.avif",
  heroTitle: "Hotels in Jaisalmer",
  heroSubtitle: "Discover the finest accommodations for your stay in the golden city of Jaisalmer.",
  heroButtons: [
    { url: "#", text: "Book a Stay", class: "btn-primary" },
    { url: "#", text: "Talk to an Advisor", class: "btn-secondary" }
  ],
  hotelsTitle: "Partner Hotels in Jaisalmer",
  hotelsSubtitle: "Choose from our list of trusted and luxurious hotel partners.",
  hotels: [
    {
      name: "Suryagarh",
      image: "/images/hotels/jaisalmer/Suryagarh.avif",
      alt: "Suryagarh Jaisalmer",
      link: "#"
    },
    {
      name: "The Serai",
      image: "/images/hotels/jaisalmer/The Serai.avif",
      alt: "The Serai Jaisalmer",
      link: "#"
    },
    {
      name: "Jaisalmer Marriott Resort & Spa",
      image: "/images/hotels/jaisalmer/Jaisalmer Marriott Resort & Spa.avif",
      alt: "Jaisalmer Marriott Resort & Spa",
      link: "#"
    },
    {
      name: "Hotel Rang Mahal",
      image: "/images/hotels/jaisalmer/Hotel Rang Mahal.avif",
      alt: "Hotel Rang Mahal Jaisalmer",
      link: "#"
    }
  ]
};

const jimCorbettHotelsData = {
  pageTitle: "Hotels in Jim Corbett | Intercontinental Holidays",
  pageDescription: "Explore our curated list of top hotels in Jim Corbett, including The Riverview Retreat, Corbett Wild Iris Spa & Resort, and Jim's Jungle Retreat. Book your perfect stay with Intercontinental Holidays.",
  canonicalUrl: "https://www.intercontinentalholidays.com/jim-corbett-hotels.htm",
  ogTitle: "Top Hotels in Jim Corbett",
  ogDescription: "Discover the finest accommodations in Jim Corbett with Intercontinental Holidays.",
  ogUrl: "https://www.intercontinentalholidays.com/jim-corbett-hotels.htm",
  ogImage: "/images/destination/india/Jim Corbett.avif",
  heroImage: "/images/destination/india/Jim Corbett.avif",
  heroTitle: "Hotels in Jim Corbett",
  heroSubtitle: "Discover the finest accommodations for your stay in the wildlife haven of Jim Corbett.",
  heroButtons: [
    { url: "#", text: "Book a Stay", class: "btn-primary" },
    { url: "#", text: "Talk to an Advisor", class: "btn-secondary" }
  ],
  hotelsTitle: "Partner Hotels in Jim Corbett",
  hotelsSubtitle: "Choose from our list of trusted and luxurious hotel partners.",
  hotels: [
    {
      name: "The Riverview Retreat",
      image: "/images/hotels/jim-corbett/The Riverview Retreat.avif",
      alt: "The Riverview Retreat Jim Corbett",
      link: "#"
    },
    {
      name: "Corbett Wild Iris Spa & Resort",
      image: "/images/hotels/jim-corbett/Corbett Wild Iris Spa & Resort.avif",
      alt: "Corbett Wild Iris Spa & Resort Jim Corbett",
      link: "#"
    },
    {
      name: "Jim's Jungle Retreat",
      image: "/images/hotels/jim-corbett/Jim's Jungle Retreat.avif",
      alt: "Jim's Jungle Retreat Jim Corbett",
      link: "#"
    },
    {
      name: "Aahana - The Corbett Wilderness",
      image: "/images/hotels/jim-corbett/Aahana - The Corbett Wilderness.avif",
      alt: "Aahana - The Corbett Wilderness Jim Corbett",
      link: "#"
    }
  ]
};

const jodhpurHotelsData = {
  pageTitle: "Hotels in Jodhpur | Intercontinental Holidays",
  pageDescription: "Explore our curated list of top hotels in Jodhpur, including Umaid Bhawan Palace, RAAS Jodhpur, and Ajit Bhawan. Book your perfect stay with Intercontinental Holidays.",
  canonicalUrl: "https://www.intercontinentalholidays.com/jodhpur-hotels.htm",
  ogTitle: "Top Hotels in Jodhpur",
  ogDescription: "Discover the finest accommodations in Jodhpur with Intercontinental Holidays.",
  ogUrl: "https://www.intercontinentalholidays.com/jodhpur-hotels.htm",
  ogImage: "/images/destination/india/Jodhpur.avif",
  heroImage: "/images/destination/india/Jodhpur.avif",
  heroTitle: "Hotels in Jodhpur",
  heroSubtitle: "Discover the finest accommodations for your stay in the blue city of Jodhpur.",
  heroButtons: [
    { url: "#", text: "Book a Stay", class: "btn-primary" },
    { url: "#", text: "Talk to an Advisor", class: "btn-secondary" }
  ],
  hotelsTitle: "Partner Hotels in Jodhpur",
  hotelsSubtitle: "Choose from our list of trusted and luxurious hotel partners.",
  hotels: [
    {
      name: "Umaid Bhawan Palace",
      image: "/images/hotels/jodhpur/Umaid Bhawan Palace.avif",
      alt: "Umaid Bhawan Palace Jodhpur",
      link: "#"
    },
    {
      name: "RAAS Jodhpur",
      image: "/images/hotels/jodhpur/RAAS Jodhpur.avif",
      alt: "RAAS Jodhpur",
      link: "#"
    },
    {
      name: "Ajit Bhawan",
      image: "/images/hotels/jodhpur/Ajit Bhawan.avif",
      alt: "Ajit Bhawan Jodhpur",
      link: "#"
    },
    {
      name: "The Ummed Jodhpur",
      image: "/images/hotels/jodhpur/The Ummed Jodhpur.avif",
      alt: "The Ummed Jodhpur",
      link: "#"
    }
  ]
};

const kasauliHotelsData = {
  pageTitle: "Hotels in Kasauli | Intercontinental Holidays",
  pageDescription: "Explore our curated list of top hotels in Kasauli, including Kasauli Castle, The Kasauli Resort, and Hotel Horizon. Book your perfect stay with Intercontinental Holidays.",
  canonicalUrl: "https://www.intercontinentalholidays.com/kasauli-hotels.htm",
  ogTitle: "Top Hotels in Kasauli",
  ogDescription: "Discover the finest accommodations in Kasauli with Intercontinental Holidays.",
  ogUrl: "https://www.intercontinentalholidays.com/kasauli-hotels.htm",
  ogImage: "/images/destination/india/Kasauli.avif",
  heroImage: "/images/destination/india/Kasauli.avif",
  heroTitle: "Hotels in Kasauli",
  heroSubtitle: "Discover the finest accommodations for your stay in the charming hill station of Kasauli.",
  heroButtons: [
    { url: "#", text: "Book a Stay", class: "btn-primary" },
    { url: "#", text: "Talk to an Advisor", class: "btn-secondary" }
  ],
  hotelsTitle: "Partner Hotels in Kasauli",
  hotelsSubtitle: "Choose from our list of trusted and luxurious hotel partners.",
  hotels: [
    {
      name: "Kasauli Castle",
      image: "/images/hotels/kasauli/Kasauli Castle.avif",
      alt: "Kasauli Castle Kasauli",
      link: "#"
    },
    {
      name: "The Kasauli Resort",
      image: "/images/hotels/kasauli/The Kasauli Resort.avif",
      alt: "The Kasauli Resort",
      link: "#"
    },
    {
      name: "Hotel Horizon",
      image: "/images/hotels/kasauli/Hotel Horizon.avif",
      alt: "Hotel Horizon Kasauli",
      link: "#"
    },
    {
      name: "Club Mahindra Kasauli",
      image: "/images/hotels/kasauli/Club Mahindra Kasauli.avif",
      alt: "Club Mahindra Kasauli",
      link: "#"
    }
  ]
};

app.get('/amritsar', (req, res) => {
  res.render('destination/india/amritsar', {
    ...amritsarHotelsData,
    headerData,
    footerData
  });
});

app.get('/agra', (req, res) => {
  res.render('destination/india/agra', {
    ...agraHotelsData,
    headerData,
    footerData
  });
});

app.get('/ahmedabad', (req, res) => {
  res.render('destination/india/ahmedabad', {
    ...ahmedabadHotelsData,
    headerData,
    footerData
  });
});

app.get('/andaman-nicobar', (req, res) => {
  res.render('destination/india/andaman-nicobar', {
    ...andamanNicobarHotelsData,
    headerData,
    footerData
  });
});

app.get('/aurangabad', (req, res) => {
  res.render('destination/india/aurangabad', {
    ...aurangabadHotelsData,
    headerData,
    footerData
  });
});

app.get('/bengaluru', (req, res) => {
  res.render('destination/india/bengaluru', {
    ...bengaluruHotelsData,
    headerData,
    footerData
  });
});

app.get('/bhimtal', (req, res) => {
  res.render('destination/india/bhimtal', {
    ...bhimtalHotelsData,
    headerData,
    footerData
  });
});

app.get('/bhubaneswar', (req, res) => {
  res.render('destination/india/bhubaneswar', {
    ...bhubaneswarHotelsData,
    headerData,
    footerData
  });
});

app.get('/chandigarh', (req, res) => {
  res.render('destination/india/chandigarh', {
    ...chandigarhHotelsData,
    headerData,
    footerData
  });
});

app.get('/chennai', (req, res) => {
  res.render('destination/india/chennai', {
    ...chennaiHotelsData,
    headerData,
    footerData
  });
});

app.get('/coorg', (req, res) => {
  res.render('destination/india/coorg', {
    ...coorgHotelsData,
    headerData,
    footerData
  });
});

app.get('/darjeeling', (req, res) => {
  res.render('destination/india/darjeeling', {
    ...darjeelingHotelsData,
    headerData,
    footerData
  });
});

app.get('/delhi-ncr', (req, res) => {
  res.render('destination/india/delhi-ncr', {
    ...delhiNcrHotelsData,
    headerData,
    footerData
  });
});

app.get('/dharamshala', (req, res) => {
  res.render('destination/india/dharamshala', {
    ...dharamshalaHotelsData,
    headerData,
    footerData
  });
});

app.get('/gangtok', (req, res) => {
  res.render('destination/india/gangtok', {
    ...gangtokHotelsData,
    headerData,
    footerData
  });
});

app.get('/goa', (req, res) => {
  res.render('destination/india/goa', {
    ...goaHotelsData,
    headerData,
    footerData
  });
});

app.get('/haridwar', (req, res) => {
  res.render('destination/india/haridwar', {
    ...haridwarHotelsData,
    headerData,
    footerData
  });
});

app.get('/jaipur', (req, res) => {
  res.render('destination/india/jaipur', {
    ...jaipurHotelsData,
    headerData,
    footerData
  });
});

app.get('/jaisalmer', (req, res) => {
  res.render('destination/india/jaisalmer', {
    ...jaisalmerHotelsData,
    headerData,
    footerData
  });
});

app.get('/jim-corbett', (req, res) => {
  res.render('destination/india/jim-corbett', {
    ...jimCorbettHotelsData,
    headerData,
    footerData
  });
});

app.get('/jodhpur', (req, res) => {
  res.render('destination/india/jodhpur', {
    ...jodhpurHotelsData,
    headerData,
    footerData
  });
});

app.get('/kasauli', (req, res) => {
  res.render('destination/india/kasauli', {
    ...kasauliHotelsData,
    headerData,
    footerData
  });
});

app.get('/kashmir', (req, res) => {
  res.render('destination/india/kashmir', {
    ...kashmirHotelsData,
    headerData,
    footerData
  });
});

app.get('/kochi', (req, res) => {
  res.render('destination/india/kochi', {
    ...kochiHotelsData,
    headerData,
    footerData
  });
});

app.get('/manali', (req, res) => {
  res.render('destination/india/manali', {
    ...manaliHotelsData,
    headerData,
    footerData
  });
});

app.get('/mumbai', (req, res) => {
  res.render('destination/india/mumbai', {
    ...mumbaiHotelsData,
    headerData,
    footerData
  });
});

app.get('/munnar', (req, res) => {
  res.render('destination/india/munnar', {
    ...munnarHotelsData,
    headerData,
    footerData
  });
});

app.get('/mussoorie', (req, res) => {
  res.render('destination/india/mussoorie', {
    ...mussoorieHotelsData,
    headerData,
    footerData
  });
});

app.get('/nanital', (req, res) => {
  res.render('destination/india/nanital', {
    ...nanitalHotelsData,
    headerData,
    footerData
  });
});

app.get('/pondicherry', (req, res) => {
  res.render('destination/india/pondicherry', {
    ...pondicherryHotelsData,
    headerData,
    footerData
  });
});

app.get('/rishikesh', (req, res) => {
  res.render('destination/india/rishikesh', {
    ...rishikeshHotelsData,
    headerData,
    footerData
  });
});

app.get('/varanasi', (req, res) => {
  res.render('destination/india/varanasi', {
    ...varanasiHotelsData,
    headerData,
    footerData
  });
});

app.get('/vrindavan', (req, res) => {
  res.render('destination/india/vrindavan', {
    ...vrindavanHotelsData,
    headerData,
    footerData
  });
});

app.get('/international-destination', (req, res) => {
  res.render('international-destination', { ...internationalDestinationsData, footerData, headerData });
});

app.get('/', (req, res) => {
  res.render('index', { ...indexData, footerData, headerData });
});

app.get('/about-us', (req, res) => {
  res.render('about-us', { ...aboutUsData, footerData, headerData });
});

app.get('/contact-us', (req, res) => {
  res.render('contact-us', { ...contactUsData, footerData, headerData });
});


app.get('/destination-in-india', (req, res) => {
  res.render('destination-in-india', {
    ...indiaDestinationsData,
    headerData,
    footerData
  });
});


/* international destination hotel pages */
const azerbaijanHotelsData = {
  pageTitle: "Hotels in Azerbaijan | Intercontinental Holidays",
  pageDescription: "Explore our curated list of top hotels in Azerbaijan, including Fairmont Baku, Four Seasons Hotel Baku, and JW Marriott Absheron Baku. Book your perfect stay with Intercontinental Holidays.",
  canonicalUrl: "https://www.intercontinentalholidays.com/azerbaijan-hotels.htm",
  ogTitle: "Top Hotels in Azerbaijan",
  ogDescription: "Discover the finest accommodations in Azerbaijan with Intercontinental Holidays.",
  ogUrl: "https://www.intercontinentalholidays.com/azerbaijan-hotels.htm",
  ogImage: "/images/destination/international/Azerbaijan.avif",
  heroImage: "/images/destination/international/Azerbaijan.avif",
  heroTitle: "Hotels in Azerbaijan",
  heroSubtitle: "Discover the finest accommodations for your stay in the vibrant country of Azerbaijan.",
  heroButtons: [
    { url: "#", text: "Book a Stay", class: "btn-primary" },
    { url: "#", text: "Talk to an Advisor", class: "btn-secondary" }
  ],
  hotelsTitle: "Partner Hotels in Azerbaijan",
  hotelsSubtitle: "Choose from our list of trusted and luxurious hotel partners.",
  hotels: [
    {
      name: "West Shine Hotel",
      image: "/images/hotels/azerbaijan/West Shine Hotel.avif",
      alt: "West Shine Hotel Azerbaijan",
      link: "#"
    },
    {
      name: "Premier Palace  Baku",
      image: "/images/hotels/azerbaijan/Premier Palace Baku.avif",
      alt: "Premier Palace  Baku Azerbaijan",
      link: "#"
    },
    {
      name: "Excelsior Hotel & Spa",
      image: "/images/hotels/azerbaijan/Excelsior Hotel & Spa.avif",
      alt: "Excelsior Hotel & Spa Azerbaijan",
      link: "#"
    },
    {
      name: "Hilton Baku",
      image: "/images/hotels/azerbaijan/Hilton Baku.avif",
      alt: "Hilton Baku Azerbaijan",
      link: "#"
    }
  ]
};

app.get('/azerbaijan', (req, res) => {
  res.render('destination/international/azerbaijan', {
    ...azerbaijanHotelsData,
    headerData,
    footerData
  });
});

/*like we are doing for india destination hotel pages, we can add more international destination hotel pages here
same as the azerbaijanHotelsData above*/

/* Static Pages */

const privacyPolicyData = {
  pageTitle: "Privacy Policy | Intercontinental Holidays",
  pageDescription: "Read the privacy policy of Intercontinental Holidays to understand how we handle your personal information.",
  canonicalUrl: "https://www.intercontinentalholidays.com/privacy-policy.htm",
  ogTitle: "Privacy Policy",
  ogDescription: "Learn about Intercontinental Holidays' commitment to protecting your privacy and personal data.",
  ogUrl: "https://www.intercontinentalholidays.com/privacy-policy.htm",
  ogImage: "/images/logo/ico-logo.png",
  heroImage: "/images/destination/india/privacy-policy.avif",
}

app.get('/privacy-policy', (req, res) => {
  res.render('privacy-policy', { ...privacyPolicyData, footerData, headerData });
});

const termsConditionsData = {
  pageTitle: "Terms and Conditions | Intercontinental Holidays",
  pageDescription: "Read the terms and conditions for using Intercontinental Holidays' services and website.",
  canonicalUrl: "https://www.intercontinentalholidays.com/terms-conditions.htm",
  ogTitle: "Terms and Conditions",
  ogDescription: "Understand the terms and conditions for using Intercontinental Holidays' services.",
  ogUrl: "https://www.intercontinentalholidays.com/terms-conditions.htm",
  ogImage: "/images/logo/ico-logo.png",
  heroImage: "/images/destination/india/terms-conditions.avif",
}

app.get('/terms-conditions', (req, res) => {
  res.render('terms-conditions', { ...termsConditionsData, footerData, headerData });
});

const notFoundData = {
  pageTitle: "404 Not Found | Intercontinental Holidays",
  pageDescription: "The page you are looking for does not exist. Return to the homepage of Intercontinental Holidays.",
  canonicalUrl: "https://www.intercontinentalholidays.com/404.htm",
  ogTitle: "404 Not Found",
  ogDescription: "The page you are looking for does not exist.",
  ogUrl: "https://www.intercontinentalholidays.com/404.htm",
  ogImage: "/images/logo/ico-logo.png",
  heroImage: "/images/destination/india/404.avif",
}

const serverErrorData = {
  pageTitle: "500 Internal Server Error | Intercontinental Holidays",
  pageDescription: "An unexpected error occurred on the server. Please try again later or contact support.",
  canonicalUrl: "https://www.intercontinentalholidays.com/500.htm",
  ogTitle: "500 Internal Server Error",
  ogDescription: "An unexpected error occurred on the server.",
  ogUrl: "https://www.intercontinentalholidays.com/500.htm",
  ogImage: "/images/logo/ico-logo.png",
  heroImage: "/images/destination/india/500.avif",
}

const offlineData = {
  pageTitle: "Offline | Intercontinental Holidays",
  pageDescription: "You are currently offline. Please check your internet connection and try again.",
  canonicalUrl: "https://www.intercontinentalholidays.com/offline.htm",
  ogTitle: "Offline",
  ogDescription: "You are currently offline.",
  ogUrl: "https://www.intercontinentalholidays.com/offline.htm",
  ogImage: "/images/logo/ico-logo.png",
  heroImage: "/images/destination/india/offline.avif",
} 

app.get('/offline', (req, res) => {
  res.render('offline', { ...offlineData, footerData, headerData });
});

// Handle 404 for undefined routes
app.use((req, res) => {
  res.status(404).render('404', { ...notFoundData, footerData, headerData });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('500', { ...serverErrorData, footerData, headerData });
});

app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-store');
  next();
});

app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  next();
});

app.use((req, res, next) => {
  res.setHeader('X-Frame-Options', 'DENY');
  next();
});

app.use((req, res, next) => {
  res.setHeader('X-XSS-Protection', '1; mode=block');
  next();
});

app.use((req, res, next) => {
  res.setHeader('Referrer-Policy', 'no-referrer');
  next();
});

app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', "default-src 'self'; img-src 'self' data: https:; script-src 'self' https://cdnjs.cloudflare.com; style-src 'self' 'unsafe-inline' https://cdnjs.cloudflare.com; font-src 'self' https://cdnjs.cloudflare.com;");
  next();
});

app.use((req, res, next) => {
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  next();
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});