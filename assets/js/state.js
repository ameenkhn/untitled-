export const navItems = [
  { label: "Home", href: "../index.html" },
  { label: "Services", href: "../services.html" },
  { label: "About", href: "../about.html" },
  { label: "Gallery", href: "../gallery.html" },
  { label: "Testimonials", href: "../testimonials.html" },
  { label: "Blog", href: "https://kakkarclinic.exlyapp.com/blog", external: true },
  { label: "FAQ", href: "../faq.html" },
  { label: "Contact", href: "../contact.html" },
];

export const heroContent = {
  title: "Expert Care for",
  highlight: "Diabetic Foot & Limb Salvage",
  description:
    "Dr. Vikas Kakkar is a leading Diabetic Foot Specialist in Amritsar, specializing in advanced diabetic foot care, wound management, and limb salvage. With 25+ years of experience as a Plastic Surgeon, he helps prevent amputations, treat diabetic foot ulcers and wounds, and restore mobility through evidence-based, patient-focused care at Kakkar Clinic.",
  trustBadges: [
    { icon: "award", label: "25+ Years Clinical Experience" },
    { icon: "shield", label: "Diabetic Foot & Limb Salvage Specialist" },
    { icon: "users", label: "10,000+ Successfully Treated Patients" },
  ],
};


export const homeServices = [
  {
    image:"../assets/diabetic-foot-care.jpg",
    title: "Diabetic Foot Care",
    description:
      "Comprehensive preventive and therapeutic care for diabetic foot complications, ulcer management, and limb salvage.",
    services: [
      "Preventive Foot Assessment",
      "Neuro Scan (Neuropathy)",
      "Podoscan / 3D Foot Scan",
      "Foot Pressure Mapping",
      "Custom Insoles & Footwear",
    ],
    href: "services.html",
    color: "bg-primary/10 text-primary",
  },
  {
    image:"../assets/surgical-procedure.jpg",
    title: "Surgical Procedures",
    description:
      "Advanced surgical interventions including off-loading procedures, tenotomy, and reconstructive techniques.",
    services: [
      "Keller's Arthroplasty",
      "Flexor Tenotomy",
      "Tendo-Achilles Lengthening",
      "Flap Reconstructive Surgery",
      "Preventive Casting (TCC)",
    ],
    href: "services.html",
    color: "bg-accent/10 text-accent",
  },
  {
    image:"../assets/plasticsurgery.webp",
    title: "Plastic & Cosmetic Surgery",
    description:
      "Aesthetic and reconstructive procedures performed with precision and artistry for natural-looking results.",
    services: [
      "Facial Rejuvenation",
      "Body Contouring",
      "Scar Revision",
      "Skin Grafting",
      "Cosmetic Enhancements",
    ],
    href: "services.html",
    color: "bg-pink-500/10 text-pink-600",
  },
];

export const aboutStats = [
  { number: "25+", label: "Years Experience", icon: "award" },
  { number: "10,000+", label: "Patients Treated", icon: "users" },
  { number: "95%", label: "Limb Salvage Rate", icon: "heart" },
  { number: "500+", label: "Surgeries/Year", icon: "graduation" },
];

export const qualifications = [
  "MS (General Surgery)",
  "MCh (Plastic Surgery)",
  "Fellow - Diabetic Foot Surgery",
  "Member - ISAPS & APSI",
];

export const choice = [
  { title: "Expertise in Diabetic Foot Care", org: "25+ Years Clinical Experience"},
  { title: "Comprehensive Foot Care Solutions", org: "Advanced diagnostic and therapeutic services for all diabetic foot conditions"},
  { title: "Cutting-Edge Treatment & Technology", org: "Latest innovations in diabetic foot care and surgical techniques"},
  { title: "Trusted by Patients & Physicians", org: "Recognized for excellence in diabetic foot care by medical professionals"},
  { title: "Your Health, Our Mission", org: "Dedicated to saving limbs and improving lives through compassionate care" },
]

export const achievements = [
  { year: "1", title: "Have Your Medical History Analyzed", org: "Upon receiving your request, our diabetic foot surgeon will personally review your medical history to provide precise and tailored treatment recommendations for your condition." },
  { year: "2", title: "In-Person Consultations for Personalized Care", org: "We encourage you to visit our clinic in person for a detailed assessment and personalized care. Face-to-face consultations provide a deeper connection and foster confidence in your treatment journey." },
  { year: "3", title: "Assistance from Admission to Discharge", org: "We offer comprehensive support throughout your treatment journey, including assistance with admission, consultations, recovery, and discharge. After your treatment, our surgeon will guide you on post-treatment care and schedule follow-ups, ensuring a smooth and complete recovery." },
  { year: "4", title: "Comprehensive Post-Treatment Support and Discharge Assistance", org: "We will address all your post-hospitalization queries, organize your clinical reports, guide you through the discharge process." },
  { year: "5", title: "Post-Treatment Care and Convenient Follow-Up Support", org: "At Kakkar Clinic, we are committed to providing post-treatment support. Once you return home, you can conveniently reach out to your surgeon through phone, email, or other consultation services for any follow-up assistance." },
];

export const memberships = [
  "Indian Society of Plastic Surgeons (ISAPS)",
  "Association of Plastic Surgeons of India (APSI)",
  "Diabetic Foot Society of India",
  "International Working Group on the Diabetic Foot",
  "Indian Medical Association",
];

export const philosophyQuote =
  '"Every limb saved is a life transformed. Our mission is to combine cutting-edge medical science with compassionate care to give our patients the best possible outcomes."';

export const beforeAfterCases = [
  {
    id: 1,
    before: "assets/before1.png",
    after: "assets/ba1.jpg",
    caption: "Diabetic foot ulcer healed successfully with advanced wound care.",
  },
  {
    id: 2,
    before:"assets/before2.png",
    after:"assets/ba2.jpg",
    caption: "Chronic plantar ulcer resolved with complete skin restoration.",
  },
  {
    id: 3,
    before:"assets/before3.png",
    after:"assets/ba3.jpg",
    caption: "Severe foot wound reconstructed with excellent healing outcome.",
  },
  {
    id: 4,
    before:"assets/before4.png",
    after:"assets/ba4.jpg",
    caption: "Post-surgical foot wound healed with restored mobility.",
  },
  {
    id: 5,
    before:"assets/before5.png",
    after:"assets/ba5.jpg",
    caption: "Complex ankle wound healed, preserving function and skin integrity.",
  },
  {
    id: 6,
    before:"assets/before6.png",
    after:"assets/ba6.jpg",
    caption: "Chronic heel ulcer fully healed without complications.",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Rajesh M.",
    location: "Delhi",
    rating: 5,
    text: "Dr. Kakkar saved my foot when other doctors had given up. His expertise in diabetic foot care is unmatched. After 6 months of treatment, I'm walking again without pain.",
    service: "Diabetic Foot Care",
    date: "November 2024",
  },
  {
    id: 2,
    name: "Sunita K.",
    location: "Noida",
    rating: 5,
    text: "Excellent care and attention to detail. The staff is very supportive, and Dr. Kakkar takes time to explain everything. My wound healing was much faster than expected.",
    service: "Wound Management",
    date: "October 2024",
  },
  {
    id: 3,
    name: "Amit S.",
    location: "Gurgaon",
    rating: 5,
    text: "I was scared of amputation, but Dr. Kakkar's preventive approach and advanced treatments saved my limb. Forever grateful for his expertise and compassion.",
    service: "Limb Salvage",
    date: "September 2024",
  },
  {
    id: 4,
    name: "Priya V.",
    location: "Delhi",
    rating: 5,
    text: "The best decision I made was consulting Dr. Kakkar. His team provided comprehensive care from diagnosis to recovery. Highly recommend for anyone with diabetic foot issues.",
    service: "Preventive Care",
    date: "August 2024",
  },
  {
    id: 5,
    name: "Mahendra P.",
    location: "Faridabad",
    rating: 5,
    text: "After struggling with a non-healing ulcer for months, Dr. Kakkar's treatment finally worked. His approach is scientific yet compassionate. I'm grateful for the care I received.",
    service: "Ulcer Treatment",
    date: "July 2024",
  },
  {
    id: 6,
    name: "Kamla D.",
    location: "Ghaziabad",
    rating: 5,
    text: "The podoscan and custom insoles have transformed my life. I can walk without pain now. Dr. Kakkar's team is professional and caring. Highly recommended for anyone with foot issues.",
    service: "Custom Orthotics",
    date: "June 2024",
  },
  {
    id: 7,
    name: "Vikram T.",
    location: "Delhi",
    rating: 5,
    text: "I had almost lost hope after visiting multiple doctors. Dr. Kakkar's advanced wound care techniques healed my foot infection completely. His dedication is truly remarkable.",
    service: "Infection Management",
    date: "December 2024",
  },
  {
    id: 8,
    name: "Meena R.",
    location: "Greater Noida",
    rating: 5,
    text: "Dr. Kakkar's preventive care program helped me avoid serious complications. Regular check-ups and his guidance have kept my diabetes under control. Very satisfied with the treatment.",
    service: "Diabetic Care",
    date: "November 2024",
  },
  {
    id: 9,
    name: "Harish B.",
    location: "Delhi NCR",
    rating: 5,
    text: "The clinic is well-equipped with modern facilities. Dr. Kakkar explained my condition thoroughly and the treatment plan was clear. My foot pain is completely gone now.",
    service: "Pain Management",
    date: "October 2024",
  },
  {
    id: 10,
    name: "Anjali M.",
    location: "Noida",
    rating: 5,
    text: "Dr. Kakkar's expertise in vascular surgery saved my father's leg. The post-operative care was excellent. The entire staff was supportive throughout the recovery process.",
    service: "Vascular Surgery",
    date: "September 2024",
  },
  {
    id: 11,
    name: "Ramesh K.",
    location: "Ghaziabad",
    rating: 5,
    text: "I was recommended Dr. Kakkar by my family physician and I'm so glad I followed that advice. His treatment approach is holistic and effective. My foot ulcer healed in just 8 weeks.",
    service: "Ulcer Care",
    date: "August 2024",
  },
  {
    id: 12,
    name: "Deepa S.",
    location: "Faridabad",
    rating: 5,
    text: "The custom footwear designed by Dr. Kakkar's team has made a huge difference. I can now walk comfortably for hours. Their attention to detail is impressive.",
    service: "Custom Footwear",
    date: "July 2024",
  },
];

export const faqCategories = [
  {
    name: "General",
    questions: [
      {
        q: "What is a Diabetic Foot?",
        a: "Diabetic foot refers to foot problems caused by diabetes, including nerve damage (diabetic neuropathy), poor blood circulation, foot ulcers, and infections. These issues often develop gradually and can become serious if left untreated. At Kakkar Clinic, we provide advanced diabetic foot care to prevent infections and avoid amputations.",
      },
      {
        q: "What are the early signs of diabetic foot problems?",
        a: "According to Dr. Vikas Kakkar, early warning signs include numbness or tingling, burning sensations, cracks in the skin, foot swelling, and open wounds or ulcers. Early detection is critical—if you notice any of these symptoms, visit Kakkar Clinic immediately for timely intervention.",
      },
      {
        q: "Why do diabetics develop foot problems?",
        a: "High blood sugar levels damage nerves and blood vessels over time. This leads to reduced sensation, poor blood flow, delayed wound healing, and a higher risk of infection. As a result, minor foot injuries may go unnoticed and worsen rapidly in diabetic patients.",
      },
      {
        q: "What kind of shoes should diabetics wear?",
        a: "Diabetics should wear closed-toe, cushioned, breathable footwear that fits well and protects the feet. In some cases, custom orthotics or specialized diabetic footwear may be recommended to reduce pressure points and prevent ulcers.",
      },
      {
        q: "When should I see a doctor for diabetic foot issues?",
        a: "You should consult a doctor if you notice any wound or blister that is not healing, redness, swelling, warmth, changes in foot color or shape, loss of sensation, or sudden sharp foot pain. Early medical attention can prevent serious complications.",
      },
      {
        q: "How can diabetic foot complications be prevented?",
        a: "Preventive care includes maintaining good blood sugar control, inspecting your feet daily, wearing diabetic-friendly footwear, never walking barefoot, and scheduling regular foot checkups at Kakkar Clinic for long-term foot health management.",
      },
    ],
  },
  {
    name: "Appointments",
    questions: [
      {
        q: "How do I book an appointment?",
        a: "You can book an appointment through our website by clicking the 'Book Appointment' button, calling us directly at +91 98151 31355, or messaging us on WhatsApp. We also offer online video consultations for initial assessments.",
      },
      {
        q: "What should I bring to my first appointment?",
        a: "Please bring your medical records, any previous test results or X-rays, a list of current medications, your diabetes management history, and comfortable footwear that we can examine. If you have insurance, bring those details as well.",
      },
      {
        q: "Do you offer online consultations?",
        a: "Yes, we offer video consultations for initial assessments and follow-up appointments. This is especially helpful for patients who live far away or have mobility issues. Book an online consultation through our appointment system.",
      },
    ],
  },
  {
    name: "Procedures",
    questions: [
      {
        q: "What is involved in a preventive foot assessment?",
        a: "Our assessment includes a comprehensive examination of your feet, neurological testing (Neuro Scan), vascular evaluation, Podoscan/3D foot scanning, and pressure mapping (Pedobarography). Based on findings, we create a personalized prevention plan.",
      },
      {
        q: "How long is the recovery for diabetic foot surgery?",
        a: "Recovery time varies depending on the procedure and individual healing capacity. Minor procedures may require 2-4 weeks, while reconstructive surgeries can take 6-12 weeks. We provide detailed post-operative care instructions and follow-up appointments.",
      },
      {
        q: "Are the procedures painful?",
        a: "We use appropriate anesthesia for all procedures to ensure patient comfort. Post-operative pain is managed with medications. Many of our preventive procedures, like casting and orthotic fittings, are non-invasive and pain-free.",
      },
    ],
  },
  {
    name: "Payment & Insurance",
    questions: [
      {
        q: "What payment methods do you accept?",
        a: "We accept cash, credit/debit cards, UPI payments, and bank transfers. We also work with various health insurance providers. Please check with our reception for specific insurance coverage details.",
      },
      {
        q: "Do you offer payment plans?",
        a: "Yes, we understand that some treatments can be significant investments in your health. We offer flexible payment plans for eligible patients. Please discuss this with our administrative team during your consultation.",
      },
    ],
  },
];

export const contactCards = [
  {
    icon: "phone",
    label: "Phone",
    value: "+91 98151 31355",
    href: "tel:+919815131355",
    description: "Mon-Sat, Morning 10am-2pm | Evening 4pm-7pm",
  },
  {
    icon: "mail",
    label: "Email",
    value: "info@kakkarclinic.com",
    href: "mailto:info@kakkarclinic.com",
    description: "We reply within 24 hours",
  },
  {
    icon: "map",
    label: "Address",
    value: "Kakkar Clinic, Ram Aasre, 564, B-Block, Ranjit Avenue",
    description: "Amritsar, Punjab - 143001",
  },
  {
    icon: "clock",
    label: "Working Hours",
    value: "Mon - Sat: Morning 10am to 2pm",
    description: "Evening: 4pm to 7pm • Sunday by appointment only",
  },
  {
    icon: "phone",
    label: "Android App",
    value: "Download on Google Play",
    href: "https://play.google.com/store/apps/details?id=com.exly.kakkarclinic&hl=en_IN",
    description: "Book appointments from your Android phone",
  },
];

export const ctaBenefits = [
  { icon: "clock", text: "Same-day appointments available" },
  { icon: "shield", text: "Comprehensive care approach" },
  { icon: "phone", text: "Free initial phone consultation" },
];

export const galleryImages = [
  {
  id: 1,
  src: "assets/WhatsApp-Image-2025-02-11-at-19.48.59.jpeg",
  type: "image",
  category: "Clinic",
  caption: "Surgeons performing an operation under sterile conditions.",
  },
  {
    id: 2,
    src: "assets/WhatsApp Image 2025-12-03 at 11.24.03 AM (2).jpeg",
    type: "image",
    category: "Clinic",
    caption: "Doctor consulting a patient in a clinical examination room.",
  },
  {
    id: 3,
    src: "assets/WhatsApp Image 2025-12-03 at 11.24.04 AM (4).jpeg",
    type: "image",
    category: "Equipment",
    caption: "Doctors performing an advanced surgical or diagnostic procedure.",
  },
  {
    id: 4,
    src: "assets/WhatsApp Image 2025-12-03 at 11.24.04 AM (2).jpeg",
    type: "image",
    category: "Equipment",
    caption: "Sterile surgical instruments prepared for medical use.",
  },
  {
    id: 5,
    src: "assets/WhatsApp Image 2025-12-03 at 11.24.02 AM.jpeg",
    type: "image",
    category: "Equipment",
    caption: "Senior surgeon in clinical attire inside the hospital.",
  },
  {
    id: 6,
    src: "assets/WhatsApp Image 2025-12-03 at 11.24.05 AM (1).jpeg",
    type: "image",
    category: "Equipment",
    caption: "Patient undergoing physiotherapy or rehabilitation treatment.",
  },
  {
    id: 7,
    src: "assets/WhatsApp Image 2025-12-03 at 11.24.04 AM (6).jpeg",
    type: "image",
    category: "Equipment",
    caption: "Doctor discussing medical reports with a patient.",
  },
  {
    id: 8,
    src: "assets/WhatsApp Image 2025-12-03 at 11.24.05 AM (4).jpeg",
    type: "image",
    category: "Equipment",
    caption: "Medical team participating in a community health awareness event.",
  },
  {
    id: 9,
    src: "assets/WhatsApp Image 2025-12-03 at 11.24.05 AM (8).jpeg",
    type: "image",
    category: "Equipment",
    caption: "Doctors attending a professional medical conference.",
  },
  {
    id: 10,
    src: "assets/WhatsApp Image 2025-12-03 at 11.24.05 AM (3).jpeg",
    type: "image",
    category: "Equipment",
    caption: "Doctor addressing attendees during a medical awareness program.",
  },
  {
    id: 11,
    src: "assets/WhatsApp Image 2025-12-03 at 11.24.05 AM (6).jpeg",
    type: "image",
    category: "Equipment",
    caption: "Medical experts participating in a clinical seminar on stage.",
  },
  {
    id: 12,
    src: "assets/WhatsApp Image 2025-12-04 at 6.26.45 PM (2).jpeg",
    type: "image",
    category: "Equipment",
    caption: "Severe diabetic foot infection with tissue damage.",
  },
  {
    id: 13,
    src: "assets/WhatsApp Image 2025-12-04 at 6.26.53 PM (1).jpeg",
    type: "image",
    category: "Equipment",
    caption: "Plantar foot ulcer with necrotic tissue.",
  },
  {
    id: 14,
    src: "assets/WhatsApp Image 2025-12-04 at 6.26.49 PM (2).jpeg",
    type: "image",
    category: "Equipment",
    caption: "Deep infected wound requiring medical intervention.",
  },
  {
    id: 15,
    src: "assets/WhatsApp Image 2025-12-04 at 6.26.50 PM (2).jpeg",
    type: "image",
    category: "Procedures",
    caption: "Diabetic foot showing multiple pressure-related calluses.",
  },
  {
    id: 16,
    src: "assets/WhatsApp Image 2025-12-04 at 6.26.53 PM (2).jpeg",
    type: "image",
    category: "Procedures",
    caption: "Gangrenous toe affected by severe infection.",
  },
  {
    id: 17,
    src: "assets/WhatsApp Image 2025-12-04 at 6.26.49 PM.jpeg",
    type: "image",
    category: "Procedures",
    caption: "Severe toe infection with swelling and tissue necrosis.",
  },
  {
    id: 18,
    src: "assets/WhatsApp Image 2025-12-04 at 6.26.44 PM.jpeg",
    type: "image",
    category: "Procedures",
    caption: "Post-surgical foot wound closed with sutures.",
  },
  {
    id: 19,
    src: "assets/WhatsApp Image 2025-12-04 at 6.26.47 PM.jpeg",
    type: "image",
    category: "Procedures",
    caption: "Advanced gangrene involving the foot.",
  },
  {
    id: 20,
    src: "assets/WhatsApp Image 2025-12-04 at 6.26.51 PM.jpeg",
    type: "image",
    category: "Procedures",
    caption: "Foot wound after surgical debridement.",
  },
  {
    id: 21,
    src: "assets/WhatsApp Image 2025-12-04 at 6.26.45 PM (1).jpeg",
    type: "image",
    category: "Procedures",
    caption: "Post-amputation toe stump showing healing tissue.",
  },
  {
    id: 22,
    src: "assets/WhatsApp Image 2025-12-04 at 6.26.52 PM.jpeg",
    type: "image",
    category: "Procedures",
    caption: "Partial toe amputation due to diabetic complications.",
  },
  {
    id: 23,
    src: "assets/WhatsApp Image 2025-12-04 at 6.26.48 PM (2).jpeg",
    type: "image",
    category: "Procedures",
    caption: "Chronic diabetic foot ulcer with surrounding callus.",
  },
  {
    id: 24,
    src: "assets/WhatsApp Image 2025-12-04 at 6.26.54 PM.jpeg",
    type: "image",
    category: "Procedures",
    caption: "Clean post-debridement wound during healing phase.",
  },
  {
    id: 25,
    src: "assets/WhatsApp Image 2025-12-04 at 6.26.49 PM.jpeg",
    type: "image",
    category: "Procedures",
    caption: "Recurrent plantar foot ulcer with thickened skin.",
  },
  {
    id: 25,
    src: "assets/WhatsApp Image 2025-12-04 at 6.26.52 PM (3).jpeg",
    type: "image",
    category: "Procedures",
    caption: "Severe soft tissue injury with exposed muscle.",
  },
  {
    id: 25,
    src: "assets/WhatsApp Image 2025-12-04 at 6.26.49 PM (1).jpeg",
    type: "image",
    category: "Procedures",
    caption: "Healed surgical site after toe amputation.",
  },
  {
    id: 25,
    src: "assets/WhatsApp Image 2025-12-04 at 6.26.54 PM (1).jpeg",
    type: "image",
    category: "Procedures",
    caption: "Post-operative foot with protective dressing applied.",
  },
];

export const blogPosts = [
  {
    id: 1,
    slug: "preventing-diabetic-foot-ulcers",
    title: "10 Essential Tips for Preventing Diabetic Foot Ulcers",
    excerpt:
      "Diabetic foot ulcers are a serious complication that can lead to infection and amputation. Learn how to protect your feet with these preventive measures.",
    category: "Prevention",
    author: "Dr. Vikas Kakkar",
    date: "December 1, 2024",
    readTime: "5 min read",
    image: "../assets/10 Essential Tips for Preventing Diabetic Foot Ulcers.jpg",
    link: "blog/blog-preventing-diabetic-foot-ulcers.htm"
  },
  {
    id: 2,
    slug: "understanding-neuropathy",
    title: "Understanding Diabetic Neuropathy: Signs, Symptoms & Treatment",
    excerpt:
      "Diabetic neuropathy affects millions worldwide. Recognizing the early signs can help prevent serious complications and preserve your quality of life.",
    category: "Education",
    author: "Dr. Vikas Kakkar",
    date: "November 25, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
    link: "blog/blog-understanding-diabetic-neuropathy.html"
  },
  {
    id: 3,
    slug: "importance-of-custom-orthotics",
    title: "Why Custom Orthotics Matter for Diabetic Feet?",
    excerpt:
      "Off-the-shelf insoles may not provide the protection diabetic feet need. Discover the benefits of custom orthotics designed specifically for your feet.",
    category: "Treatment",
    author: "Dr. Vikas Kakkar",
    date: "November 18, 2024",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
    link: "blog/blog-importance-of-custom-orthotics.html"
  },
  {
    id: 4,
    slug: "wound-care-at-home",
    title: "Diabetic Wound Care: What You Can Do at Home",
    excerpt:
      "Proper wound care is crucial for healing. Learn the dos and don'ts of caring for diabetic wounds between medical appointments.",
    category: "Self-Care",
    author: "Dr. Vikas Kakkar",
    date: "November 10, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&h=400&fit=crop",
    link: "blog/blog-wound-care-at-home.html"
  },
  {
    id: 5,
    slug: "when-to-see-specialist",
    title: "When Should You See a Diabetic Foot Specialist?",
    excerpt:
      "Don't wait until it's too late. Learn the warning signs that indicate you need professional help for your diabetic foot concerns.",
    category: "Prevention",
    author: "Dr. Vikas Kakkar",
    date: "November 3, 2024",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&h=400&fit=crop",
    link: "blog/blog-when-to-see-specialist.html"
  },
  {
    id: 6,
    slug: "limb-salvage-surgery",
    title: "Limb Salvage Surgery: Saving Limbs, Saving Lives",
    excerpt:
      "Amputation is not always the only option. Learn about modern limb salvage techniques that can preserve your mobility and independence.",
    category: "Treatment",
    author: "Dr. Vikas Kakkar",
    date: "October 28, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop",
    link: "blog/blog-limb-salvage-surgery.html"
  },
  {
  id: 7,
  slug: "diabetic-plastic-surgery-limb-reconstruction",
  title: "Diabetic & Plastic Surgery: Restoring Function, Preserving Limbs",
  excerpt:
    "Advanced diabetic care combined with reconstructive plastic surgery can prevent amputations, restore function, and help patients regain independence.",
  category: "Treatment",
  author: "Dr. Vikas Kakkar",
  date: "October 28, 2024",
  readTime: "8 min read",
  image: "../assets/jcm-10-00371-g001.png",
  link: "https://kakkarclinic.exlyapp.com/blog_post/3e3645a7-197c-4d52-82d9-0154a6872dc5",
  external: true,
  }
];

export const blogCategories = ["All", "Prevention", "Education", "Treatment", "Self-Care"];

export const blogPostsDetailed = [
  {
    id: 1,
    slug: "preventing-diabetic-foot-ulcers",
    title: "10 Essential Tips for Preventing Diabetic Foot Ulcers",
    excerpt:
      "Diabetic foot ulcers are a serious complication that can lead to infection and amputation. Learn how to protect your feet with these preventive measures.",
    category: "Prevention",
    author: "Dr. Vikas Kakkar",
    date: "December 1, 2024",
    readTime: "5 min read",
    image: "../assets/10 Essential Tips for Preventing Diabetic Foot Ulcers.jpg",
    content: `
      <h1 style="
  font-size: 38px;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 20px 0;
  padding: 0;
  line-height: 1.2;
">
  10 Essential Tips to Prevent Diabetic Foot Ulcers
</h1>

<p style="
  font-size: 18px;
  line-height: 1.75;
  color: #475569;
  margin: 0 0 48px 0;
  max-width: 780px;
">
  Diabetic foot ulcers affect nearly 15% of individuals living with diabetes and remain
  one of the leading causes of lower-limb amputations. The encouraging reality is that
  most ulcers are preventable with consistent care, awareness, and timely intervention.
  Below are ten essential strategies to help protect your feet and maintain long-term mobility.
</p>

<!-- SECTION -->
<div style="margin-bottom: 56px;">
  <h2 style="
    font-size: 26px;
    font-weight: 600;
    color: #0f172a;
    margin: 0 0 14px 0;
    padding-left: 12px;
    border-left: 4px solid #22a087;
  ">
    1. Inspect Your Feet Daily
  </h2>

  <p style="
    font-size: 16px;
    line-height: 1.75;
    color: #334155;
    margin: 0;
    max-width: 780px;
  ">
    Examine your feet every day for cuts, blisters, redness, swelling, or nail changes.
    Use a mirror to check the soles or seek help from a family member if needed.
    Early detection is critical in preventing small issues from progressing into serious ulcers.
  </p>
</div>

<!-- SECTION -->
<div style="margin-bottom: 56px;">
  <h2 style="
    font-size: 26px;
    font-weight: 600;
    color: #0f172a;
    margin: 0 0 14px 0;
    padding-left: 12px;
    border-left: 4px solid #22a087;
  ">
    2. Keep Your Feet Clean and Dry
  </h2>

  <p style="
    font-size: 16px;
    line-height: 1.75;
    color: #334155;
    margin: 0;
    max-width: 780px;
  ">
    Wash your feet daily using lukewarm water and mild soap. Dry them thoroughly,
    especially between the toes, where moisture can encourage fungal infections.
    Apply moisturizer to prevent cracked skin, but avoid applying it between the toes.
  </p>
</div>

<!-- SECTION -->
<div style="margin-bottom: 56px;">
  <h2 style="
    font-size: 26px;
    font-weight: 600;
    color: #0f172a;
    margin: 0 0 14px 0;
    padding-left: 12px;
    border-left: 4px solid #22a087;
  ">
    3. Never Walk Barefoot
  </h2>

  <p style="
    font-size: 16px;
    line-height: 1.75;
    color: #334155;
    margin: 0;
    max-width: 780px;
  ">
    Always wear shoes or protective slippers, even indoors. Walking barefoot increases
    the risk of unnoticed cuts or injuries, particularly for individuals with neuropathy
    who may not feel pain immediately.
  </p>
</div>

<!-- SECTION -->
<div style="margin-bottom: 56px;">
  <h2 style="
    font-size: 26px;
    font-weight: 600;
    color: #0f172a;
    margin: 0 0 14px 0;
    padding-left: 12px;
    border-left: 4px solid #22a087;
  ">
    4. Wear Proper Footwear
  </h2>

  <p style="
    font-size: 16px;
    line-height: 1.75;
    color: #334155;
    margin: 0;
    max-width: 780px;
  ">
    Choose well-fitting diabetic footwear that provides adequate cushioning and support.
    Shoes should allow enough room for your toes and should never rub or create pressure points.
    Always inspect the inside of your shoes before wearing them.
  </p>
</div>

<!-- SECTION -->
<div style="margin-bottom: 56px;">
  <h2 style="
    font-size: 26px;
    font-weight: 600;
    color: #0f172a;
    margin: 0 0 14px 0;
    padding-left: 12px;
    border-left: 4px solid #22a087;
  ">
    5. Trim Toenails Carefully
  </h2>

  <p style="
    font-size: 16px;
    line-height: 1.75;
    color: #334155;
    margin: 0;
    max-width: 780px;
  ">
    Cut toenails straight across and gently file sharp edges. Avoid cutting nails too short
    or into the corners. If nails are thick, hard to reach, or difficult to see,
    professional nail care by a podiatrist is recommended.
  </p>
</div>

<!-- SECTION -->
<div style="margin-bottom: 56px;">
  <h2 style="
    font-size: 26px;
    font-weight: 600;
    color: #0f172a;
    margin: 0 0 14px 0;
    padding-left: 12px;
    border-left: 4px solid #22a087;
  ">
    6. Maintain Good Blood Sugar Control
  </h2>

  <p style="
    font-size: 16px;
    line-height: 1.75;
    color: #334155;
    margin: 0;
    max-width: 780px;
  ">
    Elevated blood glucose damages nerves and blood vessels, impairing sensation and healing.
    Keeping blood sugar levels within your target range is one of the most effective ways
    to reduce the risk of foot ulcers.
  </p>
</div>

<!-- SECTION -->
<div style="margin-bottom: 56px;">
  <h2 style="
    font-size: 26px;
    font-weight: 600;
    color: #0f172a;
    margin: 0 0 14px 0;
    padding-left: 12px;
    border-left: 4px solid #22a087;
  ">
    7. Promote Healthy Blood Circulation
  </h2>

  <p style="
    font-size: 16px;
    line-height: 1.75;
    color: #334155;
    margin: 0;
    max-width: 780px;
  ">
    Avoid crossing your legs for prolonged periods. Move your toes and ankles throughout
    the day, elevate your feet when sitting, and refrain from smoking, as it significantly
    reduces blood flow and increases amputation risk.
  </p>
</div>

<!-- SECTION -->
<div style="margin-bottom: 56px;">
  <h2 style="
    font-size: 26px;
    font-weight: 600;
    color: #0f172a;
    margin: 0 0 14px 0;
    padding-left: 12px;
    border-left: 4px solid #22a087;
  ">
    8. Schedule Regular Foot Examinations
  </h2>

  <p style="
    font-size: 16px;
    line-height: 1.75;
    color: #334155;
    margin: 0;
    max-width: 780px;
  ">
    Have your feet examined by a healthcare professional at least once a year,
    or more frequently if you have neuropathy or circulation problems.
    Regular assessments help identify risks early and guide preventive care.
  </p>
</div>

<!-- SECTION -->
<div style="margin-bottom: 56px;">
  <h2 style="
    font-size: 26px;
    font-weight: 600;
    color: #0f172a;
    margin: 0 0 14px 0;
    padding-left: 12px;
    border-left: 4px solid #22a087;
  ">
    9. Address Foot Problems Immediately
  </h2>

  <p style="
    font-size: 16px;
    line-height: 1.75;
    color: #334155;
    margin: 0;
    max-width: 780px;
  ">
    Do not ignore redness, swelling, warmth, wounds, or changes in sensation.
    Prompt medical attention can prevent minor concerns from escalating
    into severe infections or ulcers.
  </p>
</div>

<!-- SECTION -->
<div style="margin-bottom: 56px;">
  <h2 style="
    font-size: 26px;
    font-weight: 600;
    color: #0f172a;
    margin: 0 0 14px 0;
    padding-left: 12px;
    border-left: 4px solid #22a087;
  ">
    10. Use Custom Orthotics When Advised
  </h2>

  <p style="
    font-size: 16px;
    line-height: 1.75;
    color: #334155;
    margin: 0;
    max-width: 780px;
  ">
    For individuals with foot deformities or high-pressure areas,
    custom orthotics help redistribute weight and protect vulnerable regions.
    When combined with proper footwear, they significantly reduce ulcer risk.
  </p>
</div>

<!-- CONCLUSION -->
<div style="margin-bottom: 48px;">
  <h2 style="
    font-size: 26px;
    font-weight: 600;
    color: #0f172a;
    margin: 0 0 14px 0;
    padding-left: 12px;
    border-left: 4px solid #22a087;
  ">
    The Bottom Line
  </h2>

  <p style="
    font-size: 16px;
    line-height: 1.75;
    color: #334155;
    margin: 0;
    max-width: 780px;
  ">
    Preventing diabetic foot ulcers requires daily commitment, but the benefits are profound.
    With consistent care and professional guidance, most complications can be avoided.
    When it comes to diabetic foot health, prevention is always better than treatment.
  </p>
</div>
    `
  },
  {
    id: 2,
    slug: "understanding-neuropathy",
    title: "Understanding Diabetic Neuropathy: Signs, Symptoms & Treatment",
    excerpt:
      "Diabetic neuropathy affects millions worldwide. Recognizing the early signs can help prevent serious complications and preserve your quality of life.",
    category: "Education",
    author: "Dr. Vikas Kakkar",
    date: "November 25, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
    content: `
      <h1 style="
  font-size: 38px;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 20px 0;
  padding: 0;
  line-height: 1.2;
">
  Understanding Diabetic Neuropathy: Symptoms, Risks, and Prevention
</h1>

<p style="
  font-size: 18px;
  line-height: 1.75;
  color: #475569;
  margin: 0 0 48px 0;
  max-width: 780px;
">
  Diabetic neuropathy is nerve damage caused by prolonged high blood sugar levels and
  affects up to 50% of people living with diabetes. It is one of the most common yet
  under-recognized complications. Understanding neuropathy is critical because early
  detection and proper management can prevent progression, foot ulcers, and even amputations.
</p>

<!-- SECTION -->
<div style="margin-bottom: 56px;">
  <h2 style="
    font-size: 26px;
    font-weight: 600;
    color: #0f172a;
    margin: 0 0 14px 0;
    padding-left: 12px;
    border-left: 4px solid #22a087;
  ">
    What Is Diabetic Neuropathy?
  </h2>

  <p style="
    font-size: 16px;
    line-height: 1.75;
    color: #334155;
    margin: 0;
    max-width: 780px;
  ">
    Diabetic neuropathy occurs when consistently elevated blood glucose levels damage
    nerves throughout the body. While neuropathy can affect multiple organ systems,
    it most commonly impacts the nerves in the legs and feet, known as peripheral neuropathy.
    This nerve damage disrupts normal signal transmission, leading to sensory, motor,
    and autonomic dysfunction.
  </p>
</div>

<!-- SECTION -->
<div style="margin-bottom: 56px;">
  <h2 style="
    font-size: 26px;
    font-weight: 600;
    color: #0f172a;
    margin: 0 0 14px 0;
    padding-left: 12px;
    border-left: 4px solid #22a087;
  ">
    Types of Diabetic Neuropathy
  </h2>

  <p style="
    font-size: 16px;
    line-height: 1.75;
    color: #334155;
    margin: 0 0 20px 0;
    max-width: 780px;
  ">
    Diabetic neuropathy is not a single condition. It presents in several forms,
    each affecting different nerves and functions.
  </p>

  <ul style="
    margin: 0 0 28px 20px;
    padding: 0;
    font-size: 16px;
    color: #334155;
    line-height: 1.6;
  ">
    <li style="margin-bottom: 14px;">
      <strong> 1. Peripheral Neuropathy:</strong> The most common form, affecting the feet and legs first.
      Symptoms include numbness, tingling, burning sensations, and sharp pains. Loss of
      protective sensation increases the risk of unnoticed injuries, ulcers, and infections.
    </li>
    <li style="margin-bottom: 14px;">
      <strong> 2. Autonomic Neuropathy:</strong> Affects involuntary functions such as digestion,
      blood pressure, and sweating. In the feet, reduced sweating leads to dry, cracked skin
      that is more prone to infection.
    </li>
    <li style="margin-bottom: 14px;">
      <strong> 3. Proximal Neuropathy:</strong> A less common type causing pain, weakness,
      and muscle wasting in the thighs, hips, or buttocks.
    </li>
    <li style="margin-bottom: 0;">
      <strong> 4. Focal Neuropathy:</strong> Sudden weakness or pain affecting a specific nerve,
      often involving the hand, head, torso, or leg.
    </li>
  </ul>
</div>

<!-- SECTION -->
<div style="margin-bottom: 56px;">
  <h2 style="
    font-size: 26px;
    font-weight: 600;
    color: #0f172a;
    margin: 0 0 14px 0;
    padding-left: 12px;
    border-left: 4px solid #22a087;
  ">
    Common Signs and Symptoms
  </h2>

  <p style="
    font-size: 16px;
    line-height: 1.75;
    color: #334155;
    margin: 0 0 24px 0;
    max-width: 780px;
  ">
    Neuropathy symptoms typically develop gradually over several years.
    Early recognition is essential to prevent progression and complications.
  </p>

  <ul style="
    margin: 0 0 28px 20px;
    padding: 0;
    font-size: 16px;
    color: #334155;
    line-height: 1.6;
  ">
    <li style="margin-bottom: 12px;"><strong>1. Numbness or reduced sensation</strong>, especially to pain or temperature</li>
    <li style="margin-bottom: 12px;"><strong>2. Tingling or burning sensations</strong>, often described as pins and needles</li>
    <li style="margin-bottom: 12px;"><strong>3. Sharp or stabbing pain</strong>, frequently worse at night</li>
    <li style="margin-bottom: 12px;"><strong>4. Extreme sensitivity to touch</strong>, even light contact may be painful</li>
    <li style="margin-bottom: 12px;"><strong>5. Muscle weakness</strong> affecting balance and mobility</li>
    <li style="margin-bottom: 12px;"><strong>6. Loss of coordination</strong> and increased risk of falls</li>
    <li style="margin-bottom: 0;"><strong>7. Foot complications</strong> such as ulcers, infections, and deformities</li>
  </ul>
</div>

<!-- SECTION -->
<div style="margin-bottom: 56px;">
  <h2 style="
    font-size: 26px;
    font-weight: 600;
    color: #0f172a;
    margin: 0 0 14px 0;
    padding-left: 12px;
    border-left: 4px solid #22a087;
  ">
    Risk Factors for Neuropathy
  </h2>

  <ul style="
    margin: 0 0 28px 20px;
    padding: 0;
    font-size: 16px;
    color: #334155;
    line-height: 1.6;
  ">
    <li style="margin-bottom: 12px;">1. Poor long-term blood sugar control</li>
    <li style="margin-bottom: 12px;">2. Long duration of diabetes</li>
    <li style="margin-bottom: 12px;">3. Kidney disease</li>
    <li style="margin-bottom: 12px;">4. Smoking</li>
    <li style="margin-bottom: 12px;">5. Obesity</li>
    <li style="margin-bottom: 0;">6. High blood pressure and cholesterol</li>
  </ul>
</div>

<!-- SECTION -->
<div style="margin-bottom: 56px;">
  <h2 style="
    font-size: 26px;
    font-weight: 600;
    color: #0f172a;
    margin: 0 0 14px 0;
    padding-left: 12px;
    border-left: 4px solid #22a087;
  ">
    Diagnosis: The Neuro Scan
  </h2>

  <p style="
    font-size: 16px;
    line-height: 1.75;
    color: #334155;
    margin: 0 0 24px 0;
    max-width: 780px;
  ">
    Early diagnosis requires specialized testing to assess nerve function accurately.
    A comprehensive Neuro Scan may include:
  </p>

  <ul style="
    margin: 0 0 28px 20px;
    padding: 0;
    font-size: 16px;
    color: #334155;
    line-height: 1.6;
  ">
    <li style="margin-bottom: 12px;"><strong>1. Monofilament testing</strong> to assess light-touch sensation</li>
    <li style="margin-bottom: 12px;"><strong>2. Vibration perception testing</strong> to evaluate nerve sensitivity</li>
    <li style="margin-bottom: 12px;"><strong>3. Temperature sensation testing</strong> for thermal awareness</li>
    <li style="margin-bottom: 12px;"><strong>4. Nerve conduction studies</strong> to measure electrical activity</li>
    <li style="margin-bottom: 0;"><strong>5. Quantitative sensory testing</strong> for objective nerve assessment</li>
  </ul>
</div>

<!-- SECTION -->
<div style="margin-bottom: 56px;">
  <h2 style="
    font-size: 26px;
    font-weight: 600;
    color: #0f172a;
    margin: 0 0 14px 0;
    padding-left: 12px;
    border-left: 4px solid #22a087;
  ">
    Treatment and Management
  </h2>

  <ul style="
    margin: 0 0 28px 20px;
    padding: 0;
    font-size: 16px;
    color: #334155;
    line-height: 1.6;
  ">
    <li style="margin-bottom: 14px;">
      <strong>1. Blood Sugar Control:</strong> The most important factor. Maintaining target
      glucose levels can slow progression and improve early symptoms.
    </li>
    <li style="margin-bottom: 14px;">
      <strong>2. Pain Management:</strong> Medications, topical treatments, physical therapy,
      and complementary therapies may help manage neuropathic pain.
    </li>
    <li style="margin-bottom: 14px;">
      <strong>3. Foot Care:</strong> Daily inspections, protective footwear, and regular
      professional evaluations are essential to prevent complications.
    </li>
    <li style="margin-bottom: 0;">
      <strong>4. Lifestyle Modifications:</strong> Exercise, weight management, smoking cessation,
      and limiting alcohol intake support nerve health.
    </li>
  </ul>
</div>

<!-- SECTION -->
<div style="margin-bottom: 48px;">
  <h2 style="
    font-size: 26px;
    font-weight: 600;
    color: #0f172a;
    margin: 0 0 14px 0;
    padding-left: 12px;
    border-left: 4px solid #22a087;
  ">
    Living Well with Neuropathy
  </h2>

  <p style="
    font-size: 16px;
    line-height: 1.75;
    color: #334155;
    margin: 0;
    max-width: 780px;
  ">
    While diabetic neuropathy can be challenging, many individuals maintain a good quality
    of life with early diagnosis, disciplined blood sugar control, and proactive foot care.
    Regular monitoring allows timely interventions that significantly improve long-term outcomes.
  </p>
</div>

    `
  },
  {
    id: 3,
    slug: "importance-of-custom-orthotics",
    title: "Why Custom Orthotics Matter for Diabetic Feet?",
    excerpt:
      "Off-the-shelf insoles may not provide the protection diabetic feet need. Discover the benefits of custom orthotics designed specifically for your feet.",
    category: "Treatment",
    author: "Dr. Vikas Kakkar",
    date: "November 18, 2024",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
    content: `
      <h1 style="
  font-size: 38px;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 20px 0;
  padding: 0;
  line-height: 1.2;
">
  Why Custom Orthotics Matter for Diabetic Feet?
</h1>

<p style="
  font-size: 18px;
  line-height: 1.75;
  color: #475569;
  margin: 0 0 48px 0;
  max-width: 780px;
">
  For individuals living with diabetes, foot care is not optional — it is essential.
  Seemingly minor pressure points or ill-fitting footwear can quickly progress into
  serious complications. Custom orthotics play a vital role in protecting diabetic
  feet, preventing ulcers, and preserving long-term mobility.
</p>

<!-- SECTION -->
<div style="margin-bottom: 56px;">
  <h2 style="
    font-size: 26px;
    font-weight: 600;
    color: #0f172a;
    margin: 0 0 14px 0;
    padding-left: 12px;
    border-left: 4px solid #22a087
;
  ">
    Why Diabetic Feet Need Special Care?
  </h2>

  <p style="
    font-size: 16px;
    line-height: 1.75;
    color: #334155;
    margin: 0 0 24px 0;
    max-width: 780px;
  ">
    Diabetes affects nerves, circulation, and skin health. Over time, these changes make
    the feet more vulnerable to injury and slow healing. Many patients may not even feel
    pain due to neuropathy, allowing small problems to go unnoticed until they become severe.
  </p>

  <ul style="
    margin: 0 0 28px 20px;
    padding: 0;
    font-size: 16px;
    color: #334155;
    line-height: 1.6;
  ">
    <li style="margin-bottom: 12px;">1. Reduced sensation due to diabetic neuropathy</li>
    <li style="margin-bottom: 12px;">2. Poor blood circulation leading to delayed healing</li>
    <li style="margin-bottom: 12px;">3. Higher risk of pressure-related skin breakdown</li>
    <li style="margin-bottom: 12px;">4. Foot deformities caused by muscle imbalance</li>
  </ul>

  <p style="
    font-size: 16px;
    line-height: 1.75;
    color: #334155;
    margin: 0;
    max-width: 780px;
  ">
    This is why generic footwear solutions are often insufficient for diabetic patients.
  </p>
</div>

<!-- SECTION -->
<div style="margin-bottom: 56px;">
  <h2 style="
    font-size: 26px;
    font-weight: 600;
    color: #0f172a;
    margin: 0 0 14px 0;
    padding-left: 12px;
    border-left: 4px solid #22a087
;
  ">
    Limitations of Off-the-Shelf Insoles
  </h2>

  <p style="
    font-size: 16px;
    line-height: 1.75;
    color: #334155;
    margin: 0 0 24px 0;
    max-width: 780px;
  ">
    Over-the-counter insoles are designed for the average foot shape and walking pattern.
    However, diabetic feet rarely fit this “average” profile.
  </p>

  <ol style="
    margin: 0 0 28px 20px;
    padding: 0;
    font-size: 16px;
    color: #334155;
    line-height: 1.6;
  ">
    <li style="margin-bottom: 12px;">1. They do not address individual pressure points</li>
    <li style="margin-bottom: 12px;">2. No customization for deformities like bunions or hammertoes</li>
    <li style="margin-bottom: 12px;">3. Inadequate cushioning for areas with fat pad loss</li>
    <li style="margin-bottom: 12px;">4. Limited ability to off-load high-risk ulcer zones</li>
  </ol>

  <p style="
    font-size: 16px;
    line-height: 1.75;
    color: #334155;
    margin: 0;
    max-width: 780px;
  ">
    As a result, vulnerable areas remain exposed to repeated stress and friction.
  </p>
</div>

<!-- SECTION -->
<div style="margin-bottom: 40px;">
  <h2 style="
    font-size: 26px;
    font-weight: 600;
    color: #0f172a;
    margin: 0 0 14px 0;
    padding-left: 12px;
    border-left: 4px solid #22a087;
  ">
    What Are Custom Orthotics?
  </h2>

  <p style="
    font-size: 16px;
    line-height: 1.75;
    color: #334155;
    margin: 0 0 20px 0;
    max-width: 780px;
  ">
    Custom orthotics are medical-grade inserts designed specifically for your feet.
    They are created using precise measurements, scans, and pressure analysis to match
    your unique foot structure and walking pattern.
  </p>

  <p style="
    font-size: 16px;
    line-height: 1.75;
    color: #334155;
    margin: 0;
    max-width: 780px;
  ">
    At <strong>Kakkar Clinic</strong>, custom orthotics are developed using a
    comprehensive, technology-driven approach to ensure maximum protection and comfort.
  </p>
</div>
    `
  },
  {
    id: 4,
    slug: "wound-care-at-home",
    title: "Diabetic Wound Care: What You Can Do at Home",
    excerpt:
      "Proper wound care is crucial for healing. Learn the dos and don'ts of caring for diabetic wounds between medical appointments.",
    category: "Self-Care",
    author: "Dr. Vikas Kakkar",
    date: "November 10, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&h=400&fit=crop",
    content: `
      <h1 style="
  font-size: 38px;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 20px 0;
  padding: 0;
  line-height: 1.2;
">
  Diabetic Wound Care: What You Can Do at Home
</h1>

<p style="
  font-size: 18px;
  line-height: 1.75;
  color: #475569;
  margin: 0 0 48px 0;
  max-width: 780px;
">
  Proper wound care is a critical part of diabetes management. Even small cuts or blisters
  can become serious if not handled correctly. While medical supervision is essential,
  knowing how to care for diabetic wounds at home can significantly improve healing and
  prevent complications between clinic visits.
</p>

<!-- SECTION 1 -->
<div style="margin-bottom: 56px;">
  <h2 style="
    font-size: 26px;
    font-weight: 600;
    color: #0f172a;
    margin: 0 0 14px 0;
    padding-left: 12px;
    border-left: 4px solid #22a087;
  ">
    Why Diabetic Wounds Need Special Attention
  </h2>

  <p style="
    font-size: 16px;
    line-height: 1.75;
    color: #334155;
    margin: 0 0 24px 0;
    max-width: 780px;
  ">
    Diabetes affects circulation, nerve function, and immune response. These changes slow
    healing and increase the risk of infection. Reduced sensation may prevent you from
    noticing injuries early, allowing wounds to worsen before treatment begins.
  </p>

  <p style="
    font-size: 16px;
    line-height: 1.75;
    color: #334155;
    margin: 0;
    max-width: 780px;
  ">
    This is why diabetic wounds require consistent care, close monitoring, and early
    medical guidance.
  </p>
</div>

<!-- SECTION 2 -->
<div style="margin-bottom: 56px;">
  <h2 style="
    font-size: 26px;
    font-weight: 600;
    color: #0f172a;
    margin: 0 0 14px 0;
    padding-left: 12px;
    border-left: 4px solid #22a087;
  ">
    Clean the Wound Properly
  </h2>

  <p style="
    font-size: 16px;
    line-height: 1.75;
    color: #334155;
    margin: 0 0 24px 0;
    max-width: 780px;
  ">
    Gentle cleaning is the first and most important step in wound care. Avoid harsh
    antiseptics unless advised by your doctor, as they can damage healthy tissue.
  </p>

  <ol style="
    margin: 0 0 28px 20px;
    padding: 0;
    font-size: 16px;
    color: #334155;
    line-height: 1.6;
  ">
    <li style="margin-bottom: 12px;">1. Wash your hands thoroughly before touching the wound</li>
    <li style="margin-bottom: 12px;">2. Rinse the wound with clean water or saline solution</li>
    <li style="margin-bottom: 12px;">3. Gently pat dry using a clean towel or sterile gauze</li>
    <li style="margin-bottom: 12px;">4. Do not scrub or apply unapproved chemicals</li>
  </ol>
</div>

<!-- SECTION 3 -->
<div style="margin-bottom: 56px;">
  <h2 style="
    font-size: 26px;
    font-weight: 600;
    color: #0f172a;
    margin: 0 0 14px 0;
    padding-left: 12px;
    border-left: 4px solid #22a087;
  ">
    Use Appropriate Dressings
  </h2>

  <p style="
    font-size: 16px;
    line-height: 1.75;
    color: #334155;
    margin: 0 0 24px 0;
    max-width: 780px;
  ">
    Keeping a wound covered promotes healing and protects it from bacteria.
    The type of dressing used depends on the wound’s size, depth, and drainage.
  </p>

  <ol style="
    margin: 0 0 28px 20px;
    padding: 0;
    font-size: 16px;
    color: #334155;
    line-height: 1.6;
  ">
    <li style="margin-bottom: 12px;">1. Use sterile, non-stick dressings as recommended</li>
    <li style="margin-bottom: 12px;">2. Change dressings daily or when they become wet or dirty</li>
    <li style="margin-bottom: 12px;">3. Avoid tight wrapping that restricts blood flow</li>
  </ol>
</div>

<!-- SECTION 4 -->
<div style="margin-bottom: 56px;">
  <h2 style="
    font-size: 26px;
    font-weight: 600;
    color: #0f172a;
    margin: 0 0 14px 0;
    padding-left: 12px;
    border-left: 4px solid #22a087;
  ">
     Control Blood Sugar Levels
  </h2>

  <p style="
    font-size: 16px;
    line-height: 1.75;
    color: #334155;
    margin: 0;
    max-width: 780px;
  ">
    Elevated blood glucose interferes with white blood cell function and slows tissue repair.
    Maintaining blood sugar within your target range is one of the most effective ways
    to support wound healing and prevent infection.
  </p>
</div>

<!-- SECTION 5 -->
<div style="margin-bottom: 56px;">
  <h2 style="
    font-size: 26px;
    font-weight: 600;
    color: #0f172a;
    margin: 0 0 14px 0;
    padding-left: 12px;
    border-left: 4px solid #22a087;
  ">
     Reduce Pressure on the Wound
  </h2>

  <p style="
    font-size: 16px;
    line-height: 1.75;
    color: #334155;
    margin: 0 0 24px 0;
    max-width: 780px;
  ">
    Continuous pressure delays healing and increases the risk of ulcer formation,
    especially for foot wounds.
  </p>

  <ol style="
    margin: 0 0 28px 20px;
    padding: 0;
    font-size: 16px;
    color: #334155;
    line-height: 1.6;
  ">
    <li style="margin-bottom: 12px;">1. Avoid walking barefoot</li>
    <li style="margin-bottom: 12px;">2. Use protective footwear or off-loading devices</li>
    <li style="margin-bottom: 12px;">3. Limit standing or walking if advised</li>
  </ol>
</div>

<!-- SECTION 6 -->
<div style="margin-bottom: 56px;">
  <h2 style="
    font-size: 26px;
    font-weight: 600;
    color: #0f172a;
    margin: 0 0 14px 0;
    padding-left: 12px;
    border-left: 4px solid #22a087;
  ">
     Watch for Signs of Infection
  </h2>

  <p style="
    font-size: 16px;
    line-height: 1.75;
    color: #334155;
    margin: 0 0 24px 0;
    max-width: 780px;
  ">
    Early detection of infection can prevent serious complications.
    Contact your healthcare provider immediately if you notice:
  </p>

  <ol style="
    margin: 0 0 28px 20px;
    padding: 0;
    font-size: 16px;
    color: #334155;
    line-height: 1.6;
  ">
    <li style="margin-bottom: 12px;">1. Increasing redness, warmth, or swelling</li>
    <li style="margin-bottom: 12px;">2. Pus or foul-smelling discharge</li>
    <li style="margin-bottom: 12px;">3. Fever or chills</li>
    <li style="margin-bottom: 12px;">4. Worsening pain or delayed healing</li>
  </ol>
</div>

<!-- SECTION 7 -->
<div style="margin-bottom: 56px;">
  <h2 style="
    font-size: 26px;
    font-weight: 600;
    color: #0f172a;
    margin: 0 0 14px 0;
    padding-left: 12px;
    border-left: 4px solid #22a087;
  ">
     Know When to Seek Medical Help
  </h2>

  <p style="
    font-size: 16px;
    line-height: 1.75;
    color: #334155;
    margin: 0;
    max-width: 780px;
  ">
    Home care supports healing, but it does not replace professional treatment.
    Any wound that does not improve within a few days, becomes painful, or shows
    signs of infection requires prompt medical evaluation.
  </p>
</div>

<!-- SECTION 8 -->
<div style="margin-bottom: 48px;">
  <h2 style="
    font-size: 26px;
    font-weight: 600;
    color: #0f172a;
    margin: 0 0 14px 0;
    padding-left: 12px;
    border-left: 4px solid #22a087;
  ">
     The Bottom Line
  </h2>

  <p style="
    font-size: 16px;
    line-height: 1.75;
    color: #334155;
    margin: 0;
    max-width: 780px;
  ">
    Consistent, careful wound care at home plays a crucial role in preventing diabetic
    complications. By cleaning wounds properly, protecting them from pressure,
    controlling blood sugar, and seeking timely medical care, you can significantly
    improve healing outcomes and protect your long-term foot health.
  </p>
</div>



    `
  },
  {
    id: 5,
    slug: "when-to-see-specialist",
    title: "When Should You See a Diabetic Foot Specialist?",
    excerpt:
      "Diabetic foot problems often begin quietly, without pain or obvious symptoms. However, delaying professional care can allow minor issues to progress into serious complications.",
    category: "Treatment",
    author: "Dr. Vikas Kakkar",
    date: "November 3, 2024",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&h=400&fit=crop",
    content: `
      <h1 style="
  font-size: 38px;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 20px 0;
  padding: 0;
  line-height: 1.2;
">
  When Should You See a Diabetic Foot Specialist?
</h1>

<p style="
  font-size: 18px;
  line-height: 1.75;
  color: #475569;
  margin: 0 0 48px 0;
  max-width: 780px;
">
  Diabetic foot problems often begin quietly, without pain or obvious symptoms.
  Unfortunately, delaying professional care allows minor issues to progress into
  serious complications such as ulcers, infections, and amputations. Knowing when
  to seek specialist care is a critical step in protecting your feet and overall health.
</p>

<!-- SECTION -->
<div style="margin-bottom: 56px;">
  <h2 style="
    font-size: 26px;
    font-weight: 600;
    color: #0f172a;
    margin: 0 0 14px 0;
    padding-left: 12px;
    border-left: 4px solid #22a087;
  ">
    Why Seeing a Specialist Early Matters
  </h2>

  <p style="
    font-size: 16px;
    line-height: 1.75;
    color: #334155;
    margin: 0 0 24px 0;
    max-width: 780px;
  ">
    Diabetes affects nerves, blood circulation, and the body’s ability to heal.
    As a result, foot injuries may not cause pain and can worsen unnoticed.
    A diabetic foot specialist is trained to detect early warning signs and
    intervene before complications become limb-threatening.
  </p>

  <p style="
    font-size: 16px;
    line-height: 1.75;
    color: #334155;
    margin: 0;
    max-width: 780px;
  ">
    Early evaluation often leads to simpler treatment, faster recovery,
    and significantly reduced risk of hospitalization or amputation.
  </p>
</div>

<!-- SECTION -->
<div style="margin-bottom: 56px;">
  <h2 style="
    font-size: 26px;
    font-weight: 600;
    color: #0f172a;
    margin: 0 0 14px 0;
    padding-left: 12px;
    border-left: 4px solid #22a087;
  ">
    Warning Signs That Require Professional Attention
  </h2>

  <p style="
    font-size: 16px;
    line-height: 1.75;
    color: #334155;
    margin: 0 0 24px 0;
    max-width: 780px;
  ">
    Even mild or painless symptoms can indicate serious underlying problems.
    You should consult a diabetic foot specialist if you notice any of the following:
  </p>

  <ul style="
    margin: 0 0 28px 20px;
    padding: 0;
    font-size: 16px;
    color: #334155;
    line-height: 1.6;
  ">
    <li style="margin-bottom: 12px;">1. Cuts, blisters, or wounds that do not heal</li>
    <li style="margin-bottom: 12px;">2. Redness, swelling, warmth, or fluid discharge</li>
    <li style="margin-bottom: 12px;">3. Numbness, tingling, or burning sensations</li>
    <li style="margin-bottom: 12px;">4. Sudden changes in skin color or temperature</li>
    <li style="margin-bottom: 0;">5. Signs of infection such as foul odor or fever</li>
  </ul>
</div>

<!-- SECTION -->
<div style="margin-bottom: 56px;">
  <h2 style="
    font-size: 26px;
    font-weight: 600;
    color: #0f172a;
    margin: 0 0 14px 0;
    padding-left: 12px;
    border-left: 4px solid #22a087;
  ">
    Structural and Pressure-Related Foot Changes
  </h2>

  <p style="
    font-size: 16px;
    line-height: 1.75;
    color: #334155;
    margin: 0 0 24px 0;
    max-width: 780px;
  ">
    Over time, diabetes can alter foot structure and walking mechanics.
    These changes increase pressure in certain areas, making the skin more
    vulnerable to breakdown and ulcer formation.
  </p>

  <ul style="
    margin: 0 0 28px 20px;
    padding: 0;
    font-size: 16px;
    color: #334155;
    line-height: 1.6;
  ">
    <li style="margin-bottom: 12px;">1. Development of bunions, hammertoes, or claw toes</li>
    <li style="margin-bottom: 12px;">2. Flattening or collapse of the foot arch</li>
    <li style="margin-bottom: 12px;">3. Recurring corns or calluses</li>
    <li style="margin-bottom: 0;">4. Uneven shoe wear indicating gait imbalance</li>
  </ul>
</div>

<!-- SECTION -->
<div style="margin-bottom: 56px;">
  <h2 style="
    font-size: 26px;
    font-weight: 600;
    color: #0f172a;
    margin: 0 0 14px 0;
    padding-left: 12px;
    border-left: 4px solid #22a087;
  ">
    If You Have a History of Foot Complications
  </h2>

  <p style="
    font-size: 16px;
    line-height: 1.75;
    color: #334155;
    margin: 0;
    max-width: 780px;
  ">
    Individuals with a past history of foot ulcers, infections, amputations,
    or advanced neuropathy are considered high-risk. Regular visits to a
    diabetic foot specialist are essential to monitor changes and prevent recurrence.
  </p>
</div>

<!-- SECTION -->
<div style="margin-bottom: 56px;">
  <h2 style="
    font-size: 26px;
    font-weight: 600;
    color: #0f172a;
    margin: 0 0 14px 0;
    padding-left: 12px;
    border-left: 4px solid #22a087;
  ">
    How a Diabetic Foot Specialist Can Help
  </h2>

  <p style="
    font-size: 16px;
    line-height: 1.75;
    color: #334155;
    margin: 0 0 24px 0;
    max-width: 780px;
  ">
    Specialist care focuses on prevention, early detection, and advanced treatment
    tailored specifically for diabetic foot risks.
  </p>

  <ul style="
    margin: 0 0 28px 20px;
    padding: 0;
    font-size: 16px;
    color: #334155;
    line-height: 1.6;
  ">
    <li style="margin-bottom: 12px;">1. Comprehensive nerve and circulation assessment</li>
    <li style="margin-bottom: 12px;">2. Early identification of ulcer-prone pressure areas</li>
    <li style="margin-bottom: 12px;">3. Advanced wound and infection management</li>
    <li style="margin-bottom: 12px;">4. Footwear and custom orthotics guidance</li>
    <li style="margin-bottom: 0;">5. Personalized long-term foot care planning</li>
  </ul>
</div>

<!-- SECTION -->
<div style="margin-bottom: 48px;">
  <h2 style="
    font-size: 26px;
    font-weight: 600;
    color: #0f172a;
    margin: 0 0 14px 0;
    padding-left: 12px;
    border-left: 4px solid #22a087;
  ">
    The Bottom Line
  </h2>

  <p style="
    font-size: 16px;
    line-height: 1.75;
    color: #334155;
    margin: 0;
    max-width: 780px;
  ">
    When it comes to diabetic foot care, waiting can be dangerous.
    If you notice wounds, changes in sensation, foot deformities,
    or signs of infection, consulting a diabetic foot specialist early
    can prevent serious complications. Proactive, specialist-led care
    is one of the most effective ways to protect your mobility and quality of life.
  </p>
</div>



    `
  },
  {
    id: 6,
    slug: "limb-salvage-surgery",
    title: "Limb Salvage Surgery: Saving Limbs, Saving Lives",
    excerpt:
      "Amputation is not always the only option. Learn about modern limb salvage techniques that can preserve your mobility and independence.",
    category: "Treatment",
    author: "Dr. Vikas Kakkar",
    date: "October 28, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop",
    content: `
      <h1 style="
  font-size: 38px;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 20px 0;
  padding: 0;
  line-height: 1.2;
">
  Limb Salvage Surgery: Saving Limbs, Saving Lives
</h1>

<p style="
  font-size: 18px;
  line-height: 1.75;
  color: #475569;
  margin: 0 0 48px 0;
  max-width: 780px;
">
  For patients with advanced diabetic foot complications, amputation is often perceived
  as inevitable. However, advances in medical science have made limb salvage surgery a
  powerful alternative. With timely intervention and a multidisciplinary approach,
  many limbs can be saved—preserving mobility, independence, and quality of life.
</p>

<!-- SECTION -->
<div style="margin-bottom: 56px;">
  <h2 style="
    font-size: 26px;
    font-weight: 600;
    color: #0f172a;
    margin: 0 0 14px 0;
    padding-left: 12px;
    border-left: 4px solid #22a087;
  ">
    What Is Limb Salvage Surgery?
  </h2>

  <p style="
    font-size: 16px;
    line-height: 1.75;
    color: #334155;
    margin: 0;
    max-width: 780px;
  ">
    Limb salvage surgery refers to a range of advanced surgical and medical techniques
    aimed at preventing amputation in patients with severe foot or leg complications.
    The goal is to eliminate infection, restore blood flow, promote healing, and
    preserve as much functional tissue as possible.
  </p>
</div>

<!-- SECTION -->
<div style="margin-bottom: 56px;">
  <h2 style="
    font-size: 26px;
    font-weight: 600;
    color: #0f172a;
    margin: 0 0 14px 0;
    padding-left: 12px;
    border-left: 4px solid #22a087;
  ">
    When Is Limb Salvage Considered?
  </h2>

  <p style="
    font-size: 16px;
    line-height: 1.75;
    color: #334155;
    margin: 0 0 24px 0;
    max-width: 780px;
  ">
    Limb salvage is typically considered in patients facing advanced complications
    where amputation is being discussed but may not be the only option.
  </p>

  <ul style="
    margin: 0 0 28px 20px;
    padding: 0;
    font-size: 16px;
    color: #334155;
    line-height: 1.6;
  ">
    <li style="margin-bottom: 12px;">1. Non-healing diabetic foot ulcers</li>
    <li style="margin-bottom: 12px;">2. Severe infections involving deep tissues or bone</li>
    <li style="margin-bottom: 12px;">3. Critical limb ischemia due to poor blood flow</li>
    <li style="margin-bottom: 12px;">4. Gangrene limited to specific areas</li>
    <li style="margin-bottom: 0;">5. Failed previous wound treatments</li>
  </ul>
</div>

<!-- SECTION -->
<div style="margin-bottom: 56px;">
  <h2 style="
    font-size: 26px;
    font-weight: 600;
    color: #0f172a;
    margin: 0 0 14px 0;
    padding-left: 12px;
    border-left: 4px solid #22a087;
  ">
    Key Components of Limb Salvage Treatment
  </h2>

  <p style="
    font-size: 16px;
    line-height: 1.75;
    color: #334155;
    margin: 0 0 24px 0;
    max-width: 780px;
  ">
    Limb salvage is rarely a single procedure. It involves a coordinated strategy
    tailored to the patient’s condition and overall health.
  </p>

  <ul style="
    margin: 0 0 28px 20px;
    padding: 0;
    font-size: 16px;
    color: #334155;
    line-height: 1.6;
  ">
    <li style="margin-bottom: 12px;">1. Aggressive infection control and surgical debridement</li>
    <li style="margin-bottom: 12px;">2. Restoration of blood flow through vascular procedures</li>
    <li style="margin-bottom: 12px;">3. Advanced wound care and tissue reconstruction</li>
    <li style="margin-bottom: 12px;">4. Pressure off-loading and custom orthotics</li>
    <li style="margin-bottom: 0;">5. Strict blood sugar and medical risk management</li>
  </ul>
</div>

<!-- SECTION -->
<div style="margin-bottom: 56px;">
  <h2 style="
    font-size: 26px;
    font-weight: 600;
    color: #0f172a;
    margin: 0 0 14px 0;
    padding-left: 12px;
    border-left: 4px solid #22a087;
  ">
    Benefits of Limb Salvage Over Amputation
  </h2>

  <p style="
    font-size: 16px;
    line-height: 1.75;
    color: #334155;
    margin: 0 0 24px 0;
    max-width: 780px;
  ">
    Preserving a limb has far-reaching physical, emotional, and social benefits
    compared to amputation.
  </p>

  <ul style="
    margin: 0 0 28px 20px;
    padding: 0;
    font-size: 16px;
    color: #334155;
    line-height: 1.6;
  ">
    <li style="margin-bottom: 12px;">1. Maintained mobility and independence</li>
    <li style="margin-bottom: 12px;">2. Lower long-term healthcare costs</li>
    <li style="margin-bottom: 12px;">3. Reduced risk of secondary complications</li>
    <li style="margin-bottom: 12px;">4. Improved psychological well-being</li>
    <li style="margin-bottom: 0;">5. Better overall quality of life</li>
  </ul>
</div>

<!-- SECTION -->
<div style="margin-bottom: 56px;">
  <h2 style="
    font-size: 26px;
    font-weight: 600;
    color: #0f172a;
    margin: 0 0 14px 0;
    padding-left: 12px;
    border-left: 4px solid #22a087;
  ">
    The Importance of Timely Referral
  </h2>

  <p style="
    font-size: 16px;
    line-height: 1.75;
    color: #334155;
    margin: 0;
    max-width: 780px;
  ">
    The success of limb salvage depends heavily on early evaluation by an experienced
    specialist. Delays in referral often limit treatment options and increase the
    likelihood of amputation. Seeking expert care at the first sign of deterioration
    significantly improves outcomes.
  </p>
</div>

<!-- SECTION -->
<div style="margin-bottom: 48px;">
  <h2 style="
    font-size: 26px;
    font-weight: 600;
    color: #0f172a;
    margin: 0 0 14px 0;
    padding-left: 12px;
    border-left: 4px solid #22a087;
  ">
    The Bottom Line
  </h2>

  <p style="
    font-size: 16px;
    line-height: 1.75;
    color: #334155;
    margin: 0;
    max-width: 780px;
  ">
    Amputation is not always the only solution for advanced diabetic foot problems.
    With modern limb salvage techniques, many patients can retain their limbs and
    continue leading active, independent lives. Early intervention, expert care,
    and a comprehensive treatment approach are the keys to saving limbs—and lives.
  </p>
</div>


    `
  }
];

export const servicesPageCategories = [
  {
    category: "Preventive Surgical Procedures",
    image: "../assets/Preventive Surgical Procedures.png",
    color: "bg-primary/10 text-primary",
    services: [
      {
        name: "Surgical Off-loading Procedures",
        description:
          "Targeted surgical techniques to redistribute pressure and prevent recurrent foot ulceration.",
        href: "services/surgical-offloading.html",
      },
      {
        name: "Keller's Arthroplasty",
        description:
          "Surgical procedure to relieve pressure and prevent ulceration in high-risk areas of the foot.",
        href: "services/kellers-arthroplasty.html",
      },
      {
        name: "Flexor Tenotomy",
        description:
          "Minimally invasive procedure to correct toe deformities and reduce pressure points.",
        href: "services/flexor-tenotomy.html",
      },
      {
        name: "Tendo-Achilles Lengthening (TAL)",
        description:
          "Surgical lengthening to reduce forefoot pressure and improve foot mechanics.",
        href: "services/tal.html",
      },
      {
        name: "Flap Reconstructive Surgery",
        description:
          "Advanced tissue reconstruction for high-risk or recurrent ulcer areas.",
        href: "services/flap-surgery.html",
      },
    ],
  },
  {
    category: "Preventive Casting Techniques",
    image:"../assets/Preventive Casting Techniques doctor.jpg",
    color: "bg-accent/10 text-accent",
    services: [
      {
        name: "Total Contact Cast (TCC)",
        description:
          "Gold standard for off-loading diabetic foot ulcers to promote healing.",
        href: "services/tcc.html",
      },
      {
        name: "Walking Cast / Removable Walker Boot",
        description:
          "Protective casting options for various stages of healing and mobility needs.",
        href: "services/walking-cast.html",
      },
    ],
  },
  {
    category: "Preventive Foot Assessment & Diagnostics",
    image:"../assets/Preventive Foot Assessment & Diagnostics.png",
    color: "bg-blue-500/10 text-blue-600",
    services: [
      {
        name: "Neuro Scan (Neuropathy Screening)",
        description:
          "Comprehensive neurological assessment to detect early signs of diabetic neuropathy.",
        href: "services/neuro-scan.html",
      },
      {
        name: "Podoscan / 3D Foot Scan",
        description:
          "Advanced 3D imaging for detailed foot structure analysis and custom orthotic design.",
        href: "services/podoscan.html",
      },
      {
        name: "Foot Pressure Mapping (Pedobarography)",
        description:
          "Dynamic pressure analysis to identify high-risk areas and optimize off-loading strategies.",
        href: "services/pedobarography.html",
      },
    ],
  },
  {
    category: "Preventive Footwear & Orthotics",
    image:"../assets/Preventive Footwear & Orthotics.webp",
    color: "bg-green-500/10 text-green-600",
    services: [
      {
        name: "Custom Insoles",
        description:
          "Precision-made insoles based on your foot scan for optimal support and pressure distribution.",
        href: "services/custom-insoles.html",
      },
      {
        name: "Special Diabetic Footwear",
        description:
          "Therapeutic footwear designed specifically for diabetic foot protection.",
        href: "services/diabetic-footwear.html",
      },
      {
        name: "Off-loading Insoles",
        description:
          "Specialized insoles to reduce pressure on ulcer-prone areas and aid healing.",
        href: "services/offloading-insoles.html",
      },
    ],
  },
  {
    category: "Plastic & Cosmetic Surgery",
    image:"../assets/What-Is-the-Difference-Between-Cosmetic-Surgery-and-Plastic-Surgery-Dr-Rajat-Gupta-Plastic-Surgeon-in-Delhi-01.jpg",
    color: "bg-pink-500/10 text-pink-600",
    services: [
      {
        name: "Facial Rejuvenation",
        description:
          "Comprehensive facial aesthetic procedures for natural, youthful results.",
        href: "services/facial-rejuvenation.html",
      },
      {
        name: "Body Contouring",
        description:
          "Sculpting procedures to enhance body proportions and contours.",
        href: "services/body-contouring.html",
      },
      {
        name: "Scar Revision",
        description:
          "Advanced techniques to minimize scar appearance and improve skin texture.",
        href: "services/scar-revision.html",
      },
    ],
  },
];


export const serviceDetails = {
  "preventive-surgical": {
    title: "Preventive Surgical Procedures",
    subtitle: "Proactive surgical interventions to prevent diabetic foot complications",
    description:
      "Our preventive surgical procedures are designed to address biomechanical abnormalities and high-risk conditions before they lead to ulceration or amputation. These carefully planned interventions can significantly reduce the risk of serious complications in diabetic patients.",
    image:"../assets/Preventive Surgical Procedures.jpg",
    category: "Surgical Procedures",
    categoryColor: "bg-primary/10 text-primary",
    duration: "30-90 minutes",
    recovery: "2-6 weeks",
    indications: [
      "High-risk foot deformities that predispose to ulceration",
      "Recurrent ulcers in specific pressure areas",
      "Toe deformities causing friction and skin breakdown",
      "Equinus contracture with forefoot pressure overload",
      "Previous partial amputation requiring prophylactic procedures",
    ],
    procedureSteps: [
      "Comprehensive pre-operative assessment including vascular studies and biomechanical analysis to identify all risk factors.",
      "Detailed surgical planning with consideration of wound healing potential and patient mobility goals.",
      "Procedure performed under appropriate anesthesia with meticulous tissue handling to optimize healing.",
      "Application of appropriate off-loading device or cast to protect the surgical site.",
      "Regular follow-up monitoring with progressive weight-bearing as healing allows.",
    ],
    candidates: [
      "Diabetic patients with identified biomechanical abnormalities",
      "Patients with adequate vascular supply for healing",
      "Those with recurrent ulcers despite conservative management",
      "Patients committed to post-operative compliance and follow-up",
      "Individuals seeking to preserve limb function and mobility",
    ],
    benefits: ["Prevents future ulceration", "Reduces amputation risk", "Improves foot function", "Long-term cost savings"],
    faqs: [
      {
        question: "How do I know if I need preventive surgery?",
        answer:
          "Your doctor will evaluate your foot structure, pressure points, and history of ulcers to determine if preventive surgery could benefit you. Risk factors include toe deformities, high-pressure areas, and recurrent wounds.",
      },
      {
        question: "Is the surgery painful?",
        answer:
          "The procedure is performed under anesthesia, so you won't feel pain during surgery. Post-operative discomfort is managed with appropriate pain medication and typically subsides within a few days.",
      },
      {
        question: "How long until I can walk normally?",
        answer:
          "Recovery varies by procedure, but most patients begin protected weight-bearing within 2-4 weeks and return to normal activities within 6-8 weeks with proper healing.",
      },
    ],
    relatedServices: [
      { name: "Keller's Arthroplasty", href: "kellers-arthroplasty.html" },
      { name: "Flexor Tenotomy", href: "flexor-tenotomy.html" },
      { name: "TAL", href: "tal.html" },
      { name: "Flap Surgery", href: "flap-surgery.html" },
    ],
  },
  "surgical-offloading": {
    title: "Surgical Off-loading Procedures",
    subtitle: "Advanced surgical techniques to redistribute pressure and promote healing",
    description:
      "Surgical off-loading procedures are specialized interventions designed to permanently reduce pressure on vulnerable areas of the diabetic foot. By modifying bone structure or tendon tension, these procedures address the root cause of pressure-related complications.",
    image: "../assets/Surgical Offloading Procedures.png",
    category: "Surgical Procedures",
    categoryColor: "bg-primary/10 text-primary",
    duration: "45-120 minutes",
    recovery: "4-8 weeks",
    indications: [
      "Non-healing ulcers due to excessive plantar pressure",
      "Bony prominences creating localized pressure points",
      "Charcot foot deformity with rocker-bottom configuration",
      "Failed conservative off-loading approaches",
      "Metatarsal head prominence with recurrent ulceration",
    ],
    procedureSteps: [
      "Thorough biomechanical evaluation with pressure mapping to identify exact areas of concern.",
      "Preoperative vascular assessment to ensure adequate blood supply for healing.",
      "Surgical correction of the underlying structural abnormality causing pressure overload.",
      "Immediate post-operative off-loading with TCC or specialized boot.",
      "Progressive rehabilitation with custom orthotic fitting once healed.",
    ],
    candidates: [
      "Patients with identifiable structural causes of pressure ulcers",
      "Those with adequate healing capacity and blood flow",
      "Individuals who have not responded to conservative treatment",
      "Patients able to comply with post-operative restrictions",
      "Those motivated to prevent future complications",
    ],
    benefits: ["Permanent pressure reduction", "Promotes wound healing", "Prevents recurrence", "Preserves foot function"],
    faqs: [
      {
        question: "What's the difference between surgical and non-surgical off-loading?",
        answer:
          "Non-surgical off-loading uses devices like casts or special shoes to temporarily reduce pressure. Surgical off-loading permanently changes foot structure to eliminate pressure points, offering a long-term solution.",
      },
      {
        question: "Will I need special shoes after surgery?",
        answer:
          "Most patients benefit from custom orthotics or diabetic footwear after healing to optimize pressure distribution and protect the surgical correction.",
      },
      {
        question: "Can this surgery prevent amputation?",
        answer:
          "Yes, by addressing the underlying cause of recurrent ulcers, surgical off-loading can significantly reduce the risk of progression to amputation.",
      },
    ],
    relatedServices: [
      { name: "Keller's Arthroplasty", href: "kellers-arthroplasty.html" },
      { name: "Total Contact Cast", href: "tcc.html" },
      { name: "Custom Insoles", href: "custom-insoles.html" },
    ],
  },
  "kellers-arthroplasty": {
    title: "Keller's Arthroplasty",
    subtitle: "Joint-preserving surgery to relieve pressure on the great toe",
    description:
      "Keller's Arthroplasty is a surgical procedure that removes a portion of the proximal phalanx of the great toe to relieve pressure, reduce deformity, and prevent or heal ulcers. This time-tested technique is particularly effective for diabetic patients with rigid hallux deformities.",
    image:"../assets/Keller’s Arthroplasty.jpg",
    category: "Preventive Surgical Procedures",
    categoryColor: "bg-primary/10 text-primary",
    duration: "30-45 minutes",
    recovery: "3-4 weeks",
    indications: [
      "Rigid hallux valgus with ulceration risk",
      "Hallux rigidus causing pressure on the tip of the toe",
      "Non-healing ulcer on the great toe due to deformity",
      "Severe arthritis of the first metatarsophalangeal joint",
      "Previous failed conservative treatment for toe deformity",
    ],
    procedureSteps: [
      "Local or regional anesthesia is administered for patient comfort.",
      "A small incision is made over the affected joint.",
      "The base of the proximal phalanx is carefully excised to decompress the joint.",
      "Soft tissue is balanced to maintain toe alignment.",
      "Wound closure with appropriate dressing and protective splinting.",
      "Transition to protective footwear as healing progresses.",
    ],
    candidates: [
      "Diabetic patients with great toe deformity",
      "Those with adequate blood supply to the foot",
      "Patients with ulcers or pre-ulcerative lesions on the great toe",
      "Individuals with limited joint mobility making fusion unnecessary",
      "Patients seeking to avoid more extensive surgery",
    ],
    benefits: ["Immediate pressure relief", "Minimally invasive", "Quick recovery time", "Preserves toe function"],
    faqs: [
      {
        question: "Will I be able to walk after Keller's Arthroplasty?",
        answer:
          "Yes, most patients can begin protected walking within a few days using a special post-operative shoe. Full normal walking typically resumes within 3-4 weeks.",
      },
      {
        question: "Is this procedure permanent?",
        answer:
          "Yes, the procedure provides permanent relief. The removed bone does not regrow, and the pressure reduction is long-lasting.",
      },
      {
        question: "Will my toe look different after surgery?",
        answer:
          "The toe may appear slightly shorter, but this is usually not noticeable in shoes. The cosmetic result is generally good while achieving the functional goal of pressure relief.",
      },
    ],
    relatedServices: [
      { name: "Flexor Tenotomy", href: "flexor-tenotomy.html" },
      { name: "TAL", href: "tal.html" },
      { name: "Custom Insoles", href: "custom-insoles.html" },
    ],
  },
  "flexor-tenotomy": {
    title: "Flexor Tenotomy",
    subtitle: "Minimally invasive procedure to correct claw and hammer toe deformities",
    description:
      "Flexor tenotomy is a quick, minimally invasive procedure that releases tight flexor tendons to straighten curled toes. This simple intervention can prevent or heal tip-of-toe ulcers in diabetic patients with neuropathy and toe deformities.",
    image:"../assets/Flexor Tenotomy.jpeg",
    category: "Preventive Surgical Procedures",
    categoryColor: "bg-primary/10 text-primary",
    duration: "10-15 minutes per toe",
    recovery: "1-2 weeks",
    indications: [
      "Claw toe or hammer toe deformity",
      "Ulcer at the tip of the toe due to deformity",
      "Callus formation on toe tips from curled position",
      "Failure of conservative measures like padding and footwear",
      "Multiple toe deformities requiring correction",
    ],
    procedureSteps: [
      "Local anesthetic is injected at the base of the affected toe.",
      "A tiny stab incision is made on the bottom of the toe.",
      "The flexor tendon is identified and divided, allowing the toe to straighten.",
      "No stitches are typically required – just a small dressing.",
      "The patient can walk immediately in a protective sandal.",
      "Dressing changes at home until the small wound heals.",
    ],
    candidates: [
      "Patients with flexible or semi-rigid toe deformities",
      "Those with tip-of-toe ulcers or calluses",
      "Diabetic patients with peripheral neuropathy",
      "Individuals wanting a quick, office-based procedure",
      "Patients who cannot tolerate more extensive surgery",
    ],
    benefits: ["Minimally invasive", "Immediate weight bearing", "No stitches required", "Quick healing time"],
    faqs: [
      {
        question: "Is flexor tenotomy painful?",
        answer:
          "The procedure is performed under local anesthesia, so you won't feel pain during the procedure. Afterward, most patients experience only mild discomfort that resolves quickly.",
      },
      {
        question: "Can multiple toes be treated at once?",
        answer: "Yes, multiple toes can be treated in the same session. This is common in patients with multiple toe deformities.",
      },
      {
        question: "Will my toe be floppy after the procedure?",
        answer:
          "The toe will be straighter and more relaxed, but not floppy. Most patients find the toe functions better after the tight tendon is released.",
      },
    ],
    relatedServices: [
      { name: "Keller's Arthroplasty", href: "kellers-arthroplasty.html" },
      { name: "Custom Insoles", href: "custom-insoles.html" },
      { name: "Diabetic Footwear", href: "diabetic-footwear.html" },
    ],
  },
  tal: {
    title: "Tendo-Achilles Lengthening (TAL)",
    subtitle: "Surgical release to reduce forefoot pressure and improve mobility",
    description:
      "Tendo-Achilles Lengthening (TAL) is a procedure that lengthens a tight Achilles tendon to reduce excessive pressure on the front of the foot. This is crucial for diabetic patients with equinus deformity, where the tight tendon contributes to forefoot ulcers.",
    image:"../assets/Tendo-Achilles Lengthening (TAL).png",
    category: "Preventive Surgical Procedures",
    categoryColor: "bg-primary/10 text-primary",
    duration: "20-30 minutes",
    recovery: "6-8 weeks",
    indications: [
      "Equinus deformity (inability to dorsiflex the ankle)",
      "Forefoot ulcers due to excessive pressure from tight heel cord",
      "Charcot foot with associated Achilles contracture",
      "Failed stretching and physical therapy for tight Achilles",
      "Recurrent metatarsal head ulcers despite off-loading",
    ],
    procedureSteps: [
      "Patient positioning and local or regional anesthesia administration.",
      "Three small percutaneous incisions are made along the Achilles tendon.",
      "Partial cuts are made at different levels to allow controlled lengthening.",
      "The ankle is gently dorsiflexed to achieve the desired lengthening.",
      "Application of a below-knee cast in neutral position for protection.",
      "Gradual progression from non-weight bearing to full weight bearing over 6 weeks.",
    ],
    candidates: [
      "Patients with documented equinus contracture on examination",
      "Those with forefoot ulcers and elevated plantar pressures",
      "Individuals with Charcot foot requiring tendon balancing",
      "Patients who have failed conservative stretching programs",
      "Those with adequate vascular supply for healing",
    ],
    benefits: ["Reduces forefoot pressure", "Prevents recurrent ulcers", "Improves gait mechanics", "Minimally invasive technique"],
    faqs: [
      {
        question: "Will TAL weaken my calf muscle?",
        answer:
          "You may notice some initial weakness, but with proper rehabilitation, most patients regain full strength. The benefit of reduced forefoot pressure typically far outweighs any minor weakness.",
      },
      {
        question: "How long will I be in a cast?",
        answer:
          "A cast or walking boot is typically worn for 6 weeks to protect the healing tendon. During this time, you'll gradually progress from non-weight bearing to full weight bearing.",
      },
      {
        question: "Can the tendon re-tighten over time?",
        answer:
          "With proper stretching exercises and appropriate footwear, most patients maintain the lengthening. Regular follow-up helps monitor for any recurrence.",
      },
    ],
    relatedServices: [
      { name: "Total Contact Cast", href: "tcc.html" },
      { name: "Walking Cast", href: "walking-cast.html" },
      { name: "Pressure Mapping", href: "pedobarography.html" },
    ],
  },
  "flap-surgery": {
    title: "Flap Reconstructive Surgery",
    subtitle: "Advanced tissue coverage for complex diabetic foot wounds",
    description:
      "Flap reconstructive surgery involves transferring healthy tissue to cover wounds that cannot heal on their own. For high-risk or recurrent ulcer areas in diabetic feet, this technique provides durable soft tissue coverage and can be limb-saving.",
    image: "../assets/FlapReconstructiveSurgery.png",
    category: "Preventive Surgical Procedures",
    categoryColor: "bg-primary/10 text-primary",
    duration: "2-4 hours",
    recovery: "8-12 weeks",
    indications: [
      "Large or deep ulcers with exposed bone or tendon",
      "Wounds over weight-bearing surfaces requiring durable coverage",
      "Recurrent ulcers at the same location despite treatment",
      "Post-surgical defects requiring soft tissue reconstruction",
      "Wounds that have failed to respond to conservative care",
    ],
    procedureSteps: [
      "Comprehensive wound assessment and vascular evaluation to ensure adequate blood supply.",
      "Debridement of all non-viable tissue to create a clean wound bed.",
      "Selection of appropriate flap based on wound location and size – local, regional, or free flap.",
      "Meticulous surgical transfer of the tissue flap with attention to blood supply.",
      "Careful wound closure and application of protective dressing.",
      "Close monitoring in the immediate post-operative period for flap viability.",
      "Gradual rehabilitation with protected weight bearing as healing allows.",
    ],
    candidates: [
      "Patients with complex wounds not amenable to simpler treatments",
      "Those with adequate vascular supply (may require revascularization first)",
      "Individuals motivated to comply with post-operative restrictions",
      "Patients with reasonable nutritional status for healing",
      "Those seeking limb salvage as an alternative to amputation",
    ],
    benefits: ["Durable wound coverage", "Limb-saving potential", "Restores tissue padding", "Prevents recurrence"],
    faqs: [
      {
        question: "What is the success rate for flap surgery in diabetic patients?",
        answer:
          "With proper patient selection and surgical technique, success rates exceed 80%. The key factors are adequate blood supply, infection control, and post-operative compliance.",
      },
      {
        question: "How long is the hospital stay?",
        answer: "Most patients stay 3-7 days for monitoring, depending on the complexity of the procedure and flap type used.",
      },
      {
        question: "Will I need additional surgeries?",
        answer:
          "Some flaps require a secondary procedure (debulking) to optimize appearance, but many patients achieve good results with a single surgery.",
      },
    ],
    relatedServices: [
      { name: "Total Contact Cast", href: "tcc.html" },
      { name: "Preventive Surgery", href: "preventive-surgical.html" },
      { name: "Walking Cast", href: "walking-cast.html" },
    ],
  },
  "preventive-casting": {
    title: "Preventive Casting Techniques",
    subtitle: "Specialized casting methods to off-load and protect the diabetic foot",
    description:
      "Preventive casting techniques are cornerstone treatments for diabetic foot ulcers. By redistributing pressure and immobilizing the foot, these methods create an optimal environment for healing while allowing safe mobility.",
    image:"../assets/Preventive Casting Techniques doctor.jpg",
    category: "Casting Techniques",
    categoryColor: "bg-accent/10 text-accent",
    duration: "30-60 minutes",
    recovery: "Varies by condition",
    indications: [
      "Plantar ulcers requiring off-loading for healing",
      "Charcot neuroarthropathy (acute or subacute)",
      "Post-operative protection after foot surgery",
      "Infected wounds requiring immobilization",
      "Failed healing with other off-loading methods",
    ],
    procedureSteps: [
      "Assessment of the wound or condition to determine appropriate casting type.",
      "Wound care and dressing application if an ulcer is present.",
      "Application of protective padding to bony prominences.",
      "Careful application of the cast material with proper technique.",
      "Education on cast care and warning signs to watch for.",
      "Regular follow-up for cast changes and wound monitoring.",
    ],
    candidates: [
      "Patients with diabetic foot ulcers needing off-loading",
      "Those with acute Charcot foot requiring immobilization",
      "Post-operative patients needing protected weight bearing",
      "Individuals committed to following casting restrictions",
      "Patients with adequate home support for cast care",
    ],
    benefits: ["Proven healing rates", "Enforced compliance", "Protects from injury", "Allows safe mobility"],
    faqs: [
      {
        question: "How often will the cast need to be changed?",
        answer:
          "Typically every 1-2 weeks for wound monitoring, or more frequently if there are concerns about infection or fit.",
      },
      {
        question: "Can I shower with the cast?",
        answer:
          "Traditional casts cannot get wet. We provide instructions for keeping the cast dry. Some removable options may allow for bathing with the cast off.",
      },
      {
        question: "What if my foot swells or I have pain?",
        answer:
          "Elevate your leg and contact us immediately. Increased pain or swelling may indicate a problem requiring cast removal and assessment.",
      },
    ],
    relatedServices: [
      { name: "Total Contact Cast", href: "tcc.html" },
      { name: "Walking Cast", href: "walking-cast.html" },
      { name: "Custom Insoles", href: "custom-insoles.html" },
    ],
  },
  tcc: {
    title: "Total Contact Cast (TCC)",
    subtitle: "The gold standard for healing diabetic foot ulcers",
    description:
      "Total Contact Cast (TCC) is considered the gold standard for off-loading plantar diabetic foot ulcers. By distributing pressure evenly across the entire sole and ensuring compliance, TCC achieves healing rates superior to other methods.",
    image:"../assets/Total Contact Cast (TCC).jpg",
    category: "Casting Techniques",
    categoryColor: "bg-accent/10 text-accent",
    duration: "45-60 minutes",
    recovery: "4-12 weeks to heal",
    indications: [
      "Non-infected plantar diabetic foot ulcers",
      "Neuropathic ulcers in patients with sensory loss",
      "Ulcers that have failed to heal with other methods",
      "Midfoot Charcot neuroarthropathy",
      "Post-surgical off-loading requirements",
    ],
    procedureSteps: [
      "Thorough wound assessment and debridement of any callus or non-viable tissue.",
      "Application of appropriate wound dressing based on ulcer characteristics.",
      "Placement of minimal padding over bony prominences to prevent pressure points.",
      "Application of well-molded plaster or fiberglass cast in total contact with the plantar surface.",
      "Cast extended to below the knee for stability and to prevent removal.",
      "Education on weight bearing limits and warning signs.",
      "Weekly cast changes for wound monitoring and care.",
    ],
    candidates: [
      "Patients with Grade 1 or 2 plantar ulcers (Wagner classification)",
      "Those without active infection or significant ischemia",
      "Patients able to balance and walk safely in a cast",
      "Individuals without severe visual impairment preventing self-monitoring",
      "Those committed to weekly follow-up appointments",
    ],
    benefits: ["Highest healing rates", "Ensures compliance", "Equal pressure distribution", "Proven effectiveness"],
    faqs: [
      {
        question: "Why is TCC better than a removable cast?",
        answer:
          "TCC ensures complete compliance – patients cannot remove it, guaranteeing continuous off-loading. Studies show significantly better healing rates with TCC compared to removable devices.",
      },
      {
        question: "Can I drive with a TCC?",
        answer: "No, you should not drive while wearing a TCC. Arrange for alternative transportation to your appointments.",
      },
      {
        question: "What happens if the cast gets wet?",
        answer:
          "A wet cast must be replaced immediately as it can cause skin maceration and infection. Use a cast cover when bathing.",
      },
    ],
    relatedServices: [
      { name: "Walking Cast", href: "walking-cast.html" },
      { name: "Pressure Mapping", href: "pedobarography.html" },
      { name: "Custom Insoles", href: "custom-insoles.html" },
    ],
  },
  "walking-cast": {
    title: "Walking Cast / Removable Walker Boot",
    subtitle: "Versatile off-loading solutions for healing and protection",
    description:
      "Walking casts and removable walker boots provide effective off-loading while offering flexibility for wound care and bathing. These devices are essential tools in the diabetic foot treatment arsenal, suitable for various conditions and healing stages.",
    image: "../assets/walking-boot-cast.png",
    category: "Casting Techniques",
    categoryColor: "bg-accent/10 text-accent",
    duration: "30-45 minutes fitting",
    recovery: "Varies by condition",
    indications: [
      "Diabetic foot ulcers in compliant patients",
      "Post-operative protection after foot surgery",
      "Charcot foot (subacute or chronic stages)",
      "Fractures requiring protected weight bearing",
      "Transition from TCC as ulcer heals",
    ],
    procedureSteps: [
      "Assessment of the condition and selection of appropriate device.",
      "Wound care and dressing if applicable.",
      "Fitting of the walking cast or boot with attention to pressure distribution.",
      "Adjustments to straps and padding for optimal fit.",
      "Gait training to ensure safe ambulation.",
      "Education on wear schedule and importance of compliance.",
      "Regular follow-up to monitor healing and adjust as needed.",
    ],
    candidates: [
      "Patients needing off-loading but requiring removability",
      "Those with conditions requiring frequent wound inspection",
      "Individuals who can reliably keep the device on as instructed",
      "Patients transitioning out of a TCC",
      "Those with balance or mobility concerns making TCC unsafe",
    ],
    benefits: ["Removable for care", "Adjustable fit", "Allows wound checks", "Good for transitions"],
    faqs: [
      {
        question: "How many hours a day should I wear the walking boot?",
        answer:
          "Ideally, wear it at all times when weight bearing or standing. You may remove it only for sleeping, bathing, and wound care if approved by your doctor.",
      },
      {
        question: "Can I get the boot wet?",
        answer:
          "The boot itself can handle some moisture, but remove it for bathing. Never wear it in the shower as this can damage the padding and affect fit.",
      },
      {
        question: "How do I know if the boot fits correctly?",
        answer:
          "A properly fitted boot should feel snug but not tight, with no areas of excessive pressure. If you notice any redness or pressure marks, contact us for adjustment.",
      },
    ],
    relatedServices: [
      { name: "Total Contact Cast", href: "tcc.html" },
      { name: "Custom Insoles", href: "custom-insoles.html" },
      { name: "Diabetic Footwear", href: "diabetic-footwear.html" },
    ],
  },
  "foot-assessment": {
    title: "Preventive Foot Assessment & Diagnostics",
    subtitle: "Comprehensive evaluation to identify and prevent foot complications",
    description:
      "Our preventive foot assessment combines clinical examination with advanced diagnostic technology to identify risk factors before they lead to serious problems. Early detection is the key to preventing diabetic foot complications.",
    image:" ../assets/Preventive Foot Assessment & Diagnostics.png",
    category: "Assessment & Diagnostics",
    categoryColor: "bg-blue-500/10 text-blue-600",
    duration: "45-60 minutes",
    recovery: "N/A - diagnostic",
    indications: [
      "All diabetic patients (recommended annually or more frequently based on risk)",
      "History of previous foot ulcers or amputation",
      "Known peripheral neuropathy or vascular disease",
      "Foot deformities or callus formation",
      "Symptoms like numbness, tingling, or cold feet",
    ],
    procedureSteps: [
      "Detailed medical history review focusing on diabetes control and complications.",
      "Visual inspection of both feet for deformities, skin changes, and nail conditions.",
      "Neurological testing using monofilaments, tuning fork, and reflexes.",
      "Vascular assessment including pulse examination and ankle-brachial index.",
      "Biomechanical evaluation of foot structure and gait.",
      "Advanced diagnostics as indicated (Neuro Scan, Podoscan, Pressure Mapping).",
      "Risk stratification and personalized prevention plan development.",
    ],
    candidates: [
      "All patients with diabetes (Type 1 and Type 2)",
      "Those with prediabetes and risk factors",
      "Patients with peripheral neuropathy from any cause",
      "Individuals with foot pain, numbness, or changes",
      "Anyone concerned about their foot health",
    ],
    benefits: ["Early risk detection", "Personalized prevention", "Comprehensive evaluation", "Prevents complications"],
    faqs: [
      {
        question: "How often should I have a foot assessment?",
        answer:
          "Low-risk patients should have annual assessments. Moderate-risk patients every 3-6 months, and high-risk patients every 1-3 months. Your doctor will determine your schedule.",
      },
      {
        question: "Is the assessment painful?",
        answer:
          "The assessment is non-invasive and should not be painful. Some tests check your ability to feel light touch or vibration, which may feel unusual but not painful.",
      },
      {
        question: "What should I bring to my assessment?",
        answer:
          "Wear shoes and socks you typically wear. Bring a list of medications, your glucose log, and any questions you have about foot care.",
      },
    ],
    relatedServices: [
      { name: "Neuro Scan", href: "neuro-scan.html" },
      { name: "Podoscan", href: "podoscan.html" },
      { name: "Pressure Mapping", href: "pedobarography.html" },
    ],
  },
  "neuro-scan": {
    title: "Neuro Scan (Neuropathy Screening)",
    subtitle: "Advanced neurological assessment for early neuropathy detection",
    description:
      "Our Neuro Scan provides comprehensive neurological assessment to detect diabetic peripheral neuropathy at its earliest stages. Early detection allows for interventions that can slow progression and prevent the complications of sensory loss.",
    image:"../assets/Neuro Scan (Neuropathy Screening).webp",
    category: "Assessment & Diagnostics",
    categoryColor: "bg-blue-500/10 text-blue-600",
    duration: "30-45 minutes",
    recovery: "N/A - diagnostic",
    indications: [
      "All diabetic patients as part of annual screening",
      "Symptoms of numbness, tingling, or burning in feet",
      "History of foot ulcers (indicates likely neuropathy)",
      "Unexplained balance problems or frequent falls",
      "Poor blood sugar control increasing neuropathy risk",
    ],
    procedureSteps: [
      "Review of symptoms including any sensory changes, pain, or weakness.",
      "Quantitative sensory testing to measure detection thresholds for touch, vibration, and temperature.",
      "Monofilament testing at key points to assess protective sensation.",
      "Nerve conduction studies if indicated for detailed nerve function assessment.",
      "Autonomic function testing for sweating and temperature regulation.",
      "Risk score calculation and detailed report generation.",
      "Discussion of results and management recommendations.",
    ],
    candidates: [
      "All patients with diabetes duration >5 years",
      "Those with poor glycemic control (high HbA1c)",
      "Patients with symptoms suggesting neuropathy",
      "Individuals with other diabetic complications",
      "Anyone with unexplained foot problems or gait changes",
    ],
    benefits: ["Early detection", "Quantitative results", "Tracks progression", "Guides treatment"],
    faqs: [
      {
        question: "What does it feel like to have neuropathy?",
        answer:
          "Common symptoms include numbness, tingling ('pins and needles'), burning sensations, or pain, often starting in the toes and progressing upward. Some patients have no symptoms initially.",
      },
      {
        question: "Can neuropathy be reversed?",
        answer:
          "While nerve damage is often permanent, early detection and improved glucose control can slow or stop progression. Some symptoms may improve with treatment.",
      },
      {
        question: "Is the testing uncomfortable?",
        answer:
          "Most tests are painless. Nerve conduction studies involve small electrical impulses that feel like brief tingling – slightly uncomfortable but well tolerated.",
      },
    ],
    relatedServices: [
      { name: "Foot Assessment", href: "foot-assessment.html" },
      { name: "Podoscan", href: "podoscan.html" },
      { name: "Diabetic Footwear", href: "diabetic-footwear.html" },
    ],
  },
  podoscan: {
    title: "Podoscan / 3D Foot Scan",
    subtitle: "Precision 3D imaging for custom orthotic design",
    description:
      "Our Podoscan technology creates detailed 3D images of your feet, capturing every contour with millimeter accuracy. This data is essential for designing custom orthotics and insoles that perfectly match your unique foot anatomy.",
    image:"../assets/Podoscan  Foot Scan.jpg",
    category: "Assessment & Diagnostics",
    categoryColor: "bg-blue-500/10 text-blue-600",
    duration: "10-15 minutes",
    recovery: "N/A - diagnostic",
    indications: [
      "Need for custom orthotics or insoles",
      "Foot deformities requiring detailed assessment",
      "Pre-operative surgical planning",
      "Monitoring changes in foot structure over time",
      "Fitting for custom diabetic footwear",
    ],
    procedureSteps: [
      "You stand or sit on the scanning platform as directed.",
      "The scanner captures multiple images of your feet from all angles.",
      "3D model is generated in real-time showing your exact foot shape.",
      "Measurements are automatically extracted – arch height, width, length, etc.",
      "Data is saved for comparison with future scans.",
      "Results are used to design custom orthotics or footwear.",
    ],
    candidates: [
      "Patients requiring custom insoles or orthotics",
      "Those with foot deformities or structural abnormalities",
      "Diabetic patients needing precision-fit footwear",
      "Athletes or active individuals with specific needs",
      "Anyone interested in understanding their foot structure",
    ],
    benefits: ["Precision measurement", "Non-contact scanning", "Quick and easy", "Perfect fit guarantee"],
    faqs: [
      {
        question: "Does the scan involve radiation?",
        answer:
          "No, the Podoscan uses optical technology (light and cameras) – no radiation is involved. It's completely safe and can be repeated as often as needed.",
      },
      {
        question: "Do I need to prepare for the scan?",
        answer:
          "Simply arrive with clean, bare feet. If you have very long toenails, trimming them may help with accuracy.",
      },
      {
        question: "How is this different from a foot tracing?",
        answer:
          "Unlike flat tracings, 3D scanning captures the entire contour of your foot including arch shape and height, allowing for much more accurate orthotic design.",
      },
    ],
    relatedServices: [
      { name: "Custom Insoles", href: "custom-insoles.html" },
      { name: "Diabetic Footwear", href: "diabetic-footwear.html" },
      { name: "Pressure Mapping", href: "pedobarography.html" },
    ],
  },
  pedobarography: {
    title: "Foot Pressure Mapping (Pedobarography)",
    subtitle: "Dynamic analysis to identify high-pressure ulcer risk areas",
    description:
      "Pedobarography measures the pressure distribution under your feet while standing and walking. This dynamic assessment identifies high-pressure areas at risk for ulceration, enabling targeted off-loading interventions.",
    image:"../assets/Foot Pressure Mapping (Pedobarography).jpg",
    category: "Assessment & Diagnostics",
    categoryColor: "bg-blue-500/10 text-blue-600",
    duration: "20-30 minutes",
    recovery: "N/A - diagnostic",
    indications: [
      "Risk assessment for plantar ulcer development",
      "Planning for custom orthotic or footwear prescription",
      "Post-operative assessment after pressure-reducing surgery",
      "Evaluating effectiveness of current off-loading devices",
      "Recurrent ulcers requiring pressure analysis",
    ],
    procedureSteps: [
      "Calibration of the pressure platform for accurate measurements.",
      "Static standing assessment to measure pressure at rest.",
      "Dynamic walking assessment – multiple passes across the platform.",
      "Data collection with synchronized video for gait analysis.",
      "Computer analysis generating color-coded pressure maps.",
      "Peak pressure identification and comparison with normal values.",
      "Discussion of results and off-loading recommendations.",
    ],
    candidates: [
      "Diabetic patients with neuropathy (loss of protective sensation)",
      "Those with foot deformities causing abnormal pressure distribution",
      "Patients with history of plantar ulcers",
      "Individuals with calluses indicating high-pressure areas",
      "Anyone needing evidence-based orthotic prescription",
    ],
    benefits: ["Identifies risk areas", "Guides treatment", "Objective measurements", "Tracks improvement"],
    faqs: [
      {
        question: "What do the pressure maps show?",
        answer:
          "The maps use colors (like a heat map) to show pressure levels. Red indicates high pressure, yellow moderate, and blue/green low pressure. High-pressure areas are at greater ulcer risk.",
      },
      {
        question: "Will I walk barefoot for the test?",
        answer:
          "Yes, initial testing is done barefoot to see your natural pressure pattern. Additional tests may be done with your orthotics or shoes to evaluate their effectiveness.",
      },
      {
        question: "How accurate is pressure mapping?",
        answer:
          "Modern platforms measure pressure with excellent accuracy and reproducibility. Results correlate well with actual ulcer risk when combined with clinical assessment.",
      },
    ],
    relatedServices: [
      { name: "Custom Insoles", href: "custom-insoles.html" },
      { name: "Off-loading Insoles", href: "offloading-insoles.html" },
      { name: "Podoscan", href: "podoscan.html" },
    ],
  },
  "footwear-orthotics": {
    title: "Preventive Footwear & Orthotics",
    subtitle: "Customized solutions to protect your feet every step of the way",
    description:
      "Proper footwear and orthotics are fundamental to diabetic foot protection. Our comprehensive footwear program provides personalized solutions ranging from custom insoles to therapeutic shoes, all designed to reduce pressure and prevent complications.",
    image:"../assets/Preventive Footwear & Orthotics.webp",
    category: "Footwear & Orthotics",
    categoryColor: "bg-green-500/10 text-green-600",
    duration: "30-60 minutes fitting",
    recovery: "N/A",
    indications: [
      "All diabetic patients with peripheral neuropathy",
      "History of foot ulcers requiring protective footwear",
      "Foot deformities needing accommodation",
      "High-pressure areas identified on pressure mapping",
      "Post-healing maintenance after ulcer resolution",
    ],
    procedureSteps: [
      "Comprehensive foot assessment and risk evaluation.",
      "3D foot scanning for precise measurements.",
      "Pressure mapping to identify off-loading needs.",
      "Selection of appropriate footwear type and style.",
      "Custom orthotic fabrication based on scan and pressure data.",
      "Fitting session with gait assessment.",
      "Education on proper wear and foot care.",
      "Follow-up to ensure comfort and efficacy.",
    ],
    candidates: [
      "All diabetic patients (benefits from proper footwear)",
      "Those with loss of protective sensation",
      "Patients with foot deformities or bunions",
      "Individuals with arthritis affecting foot function",
      "Anyone with foot pain or fatigue when walking",
    ],
    benefits: ["Prevents ulcers", "Reduces pressure", "Improves comfort", "Enhances mobility"],
    faqs: [
      {
        question: "How often should I replace my diabetic shoes?",
        answer:
          "Typically every 12-18 months, or sooner if they show significant wear. Inspect your shoes regularly for worn areas that could affect protection.",
      },
      {
        question: "Are diabetic shoes covered by insurance?",
        answer:
          "Many insurance plans cover therapeutic footwear for qualifying diabetic patients. Our team can help verify your coverage and handle documentation.",
      },
      {
        question: "Can diabetic shoes look stylish?",
        answer:
          "Yes! Modern diabetic footwear comes in many attractive styles. While protection is the priority, you don't have to sacrifice appearance.",
      },
    ],
    relatedServices: [
      { name: "Custom Insoles", href: "custom-insoles.html" },
      { name: "Diabetic Footwear", href: "diabetic-footwear.html" },
      { name: "Off-loading Insoles", href: "offloading-insoles.html" },
    ],
  },
  "custom-insoles": {
    title: "Custom Insoles",
    subtitle: "Precision-crafted insoles designed for your unique feet",
    description:
      "Our custom insoles are manufactured using your 3D foot scan and pressure mapping data to provide optimal support, cushioning, and pressure redistribution. Each pair is unique to your feet and your specific needs.",
    image:"../assets/custom-made-insoles.jpg",
    category: "Footwear & Orthotics",
    categoryColor: "bg-green-500/10 text-green-600",
    duration: "2-3 weeks fabrication",
    recovery: "N/A",
    indications: [
      "Diabetic neuropathy requiring pressure redistribution",
      "Plantar fasciitis or heel pain",
      "Flat feet or high arches causing discomfort",
      "Leg length discrepancy",
      "Arthritis affecting foot mechanics",
    ],
    procedureSteps: [
      "Initial consultation to understand your needs and symptoms.",
      "Comprehensive foot examination including gait analysis.",
      "3D foot scanning to capture precise measurements.",
      "Pressure mapping to identify areas needing off-loading.",
      "Material selection based on your activity level and condition.",
      "Fabrication in our lab using CAD/CAM technology.",
      "Fitting and adjustment for optimal comfort.",
      "Break-in period guidance and follow-up.",
    ],
    candidates: [
      "Diabetic patients needing protective insoles",
      "Athletes seeking performance optimization",
      "Workers who stand for long hours",
      "Patients with foot pain or fatigue",
      "Anyone with abnormal foot mechanics",
    ],
    benefits: ["Perfect fit", "Targeted pressure relief", "Long-lasting support", "Multiple material options"],
    faqs: [
      {
        question: "How long do custom insoles last?",
        answer:
          "With normal use, custom insoles typically last 2-5 years. Diabetic patients may need replacement sooner (annually) due to material compression.",
      },
      {
        question: "Can I use my custom insoles in different shoes?",
        answer:
          "Yes, if the shoes have similar sizing and depth. We recommend having insoles for each pair of frequently worn shoes.",
      },
      {
        question: "Will custom insoles fit in my regular shoes?",
        answer:
          "Custom insoles work best in shoes with removable insoles and adequate depth. We can recommend appropriate footwear to pair with your orthotics.",
      },
    ],
    relatedServices: [
      { name: "Podoscan", href: "podoscan.html" },
      { name: "Pressure Mapping", href: "pedobarography.html" },
      { name: "Diabetic Footwear", href: "diabetic-footwear.html" },
    ],
  },
  "diabetic-footwear": {
    title: "Special Diabetic Footwear",
    subtitle: "Therapeutic shoes designed specifically for diabetic foot protection",
    description:
      "Diabetic footwear is specially engineered with extra depth, seamless interiors, and protective features to prevent ulcers in at-risk feet. Combined with custom insoles, these shoes provide the ultimate protection for daily activities.",
    image:"../assets/custom-made-insoles.jpg",
    category: "Footwear & Orthotics",
    categoryColor: "bg-green-500/10 text-green-600",
    duration: "1-2 weeks for custom orders",
    recovery: "N/A",
    indications: [
      "Diabetes with peripheral neuropathy",
      "History of foot ulcers or amputation",
      "Foot deformities like bunions, hammertoes, or Charcot foot",
      "Need for extra-depth shoes to accommodate orthotics",
      "Inability to feel foot injuries in regular shoes",
    ],
    procedureSteps: [
      "Foot assessment to determine protection level needed.",
      "Measurement of foot length, width, and depth requirements.",
      "Selection from our range of therapeutic footwear options.",
      "Custom modifications if needed (stretching, padding, etc.).",
      "Fitting with your custom insoles.",
      "Gait assessment to ensure proper function.",
      "Education on breaking in new shoes safely.",
      "Follow-up to address any fit issues.",
    ],
    candidates: [
      "All diabetic patients with loss of protective sensation",
      "Those with foot deformities requiring accommodation",
      "Patients who have healed from foot ulcers",
      "Individuals needing extra-depth for orthotics",
      "Anyone at risk for foot complications",
    ],
    benefits: ["Extra depth for insoles", "Seamless interior", "Protective construction", "Multiple width options"],
    faqs: [
      {
        question: "What makes diabetic shoes different from regular shoes?",
        answer:
          "Diabetic shoes feature extra depth, seamless linings to prevent friction, firm heel counters for stability, and protective toe boxes. They're designed to accommodate insoles and prevent injury.",
      },
      {
        question: "Can I get diabetic shoes that look normal?",
        answer:
          "Absolutely! Today's diabetic footwear comes in many stylish options including dress shoes, casual styles, and athletic shoes – all with therapeutic features.",
      },
      {
        question: "How do I know my diabetic shoes fit correctly?",
        answer:
          "Shoes should feel snug but not tight, with about a thumb's width of space at the toe. No pressure points should be felt. Our fitting specialists ensure proper fit.",
      },
    ],
    relatedServices: [
      { name: "Custom Insoles", href: "custom-insoles.html" },
      { name: "Off-loading Insoles", href: "offloading-insoles.html" },
      { name: "Podoscan", href: "podoscan.html" },
    ],
  },
  "offloading-insoles": {
    title: "Off-loading Insoles / Pressure-reducing Insoles",
    subtitle: "Specialized insoles to protect high-pressure areas and promote healing",
    description:
      "Off-loading insoles are specifically designed to reduce pressure on vulnerable or healing areas of the foot. Using strategic cutouts, softer materials, and advanced cushioning, these insoles protect at-risk spots from the forces of walking.",
    image:"../assets/Off-loading Insoles Pressure-reducing Insoles.jpg",
    category: "Footwear & Orthotics",
    categoryColor: "bg-green-500/10 text-green-600",
    duration: "1-2 weeks fabrication",
    recovery: "N/A",
    indications: [
      "Active or healing plantar ulcers requiring pressure reduction",
      "High-pressure areas identified on pedobarography",
      "Post-ulcer maintenance to prevent recurrence",
      "Localized calluses from excessive pressure",
      "Bony prominences at risk for breakdown",
    ],
    procedureSteps: [
      "Pressure mapping to precisely identify high-pressure zones.",
      "3D foot scanning for accurate insole fabrication.",
      "Design of off-loading features targeting specific areas.",
      "Selection of appropriate multi-density materials.",
      "Fabrication with pressure-reducing cutouts or soft spots.",
      "Fitting and pressure re-test to verify effectiveness.",
      "Education on proper use and care.",
      "Regular follow-up to monitor and adjust.",
    ],
    candidates: [
      "Patients with active ulcers transitioning from TCC",
      "Those with healed ulcers at risk for recurrence",
      "Individuals with pressure hot spots on mapping",
      "Patients with metatarsal head prominence",
      "Anyone with localized areas of high pressure",
    ],
    benefits: ["Targeted pressure relief", "Promotes ulcer healing", "Prevents recurrence", "Customized protection"],
    faqs: [
      {
        question: "How do off-loading insoles work?",
        answer:
          "They use a combination of cutouts (apertures), softer materials in specific zones, and strategic contouring to shift pressure away from vulnerable areas to surrounding healthier tissue.",
      },
      {
        question: "Can I use these in any shoes?",
        answer:
          "Off-loading insoles work best in shoes with adequate depth and a rigid sole. They're often paired with diabetic shoes or athletic shoes for best results.",
      },
      {
        question: "How often should off-loading insoles be replaced?",
        answer:
          "Due to the compression of specialized materials, off-loading insoles typically need replacement every 6-12 months, or sooner if cushioning decreases.",
      },
    ],
    relatedServices: [
      { name: "Pressure Mapping", href: "pedobarography.html" },
      { name: "Total Contact Cast", href: "tcc.html" },
      { name: "Diabetic Footwear", href: "diabetic-footwear.html" },
    ],
  },
  "facial-rejuvenation": {
  title: "Facial Rejuvenation",
  subtitle: "Advanced aesthetic treatments to restore youthful facial appearance",
  description:
    "Our facial rejuvenation services combine advanced cosmetic techniques to address signs of aging, improve skin texture, and enhance facial harmony. Treatments are customized to deliver natural-looking, long-lasting results.",
  image:"../assets/face-rejuvenation.webp",
  category: "Plastic & Cosmetic Surgery",
  categoryColor: "bg-pink-500/10 text-pink-600",
  duration: "30 minutes – 2 hours",
  recovery: "Few days to 2 weeks",
  indications: [
    "Fine lines and wrinkles",
    "Loss of facial volume or sagging skin",
    "Uneven skin tone or texture",
    "Age-related facial changes",
    "Desire for non-surgical or minimally invasive enhancement",
  ],
  procedureSteps: [
    "Comprehensive facial assessment to understand skin quality, structure, and aesthetic goals.",
    "Personalized treatment planning using surgical or non-surgical techniques.",
    "Procedure performed with precision to ensure symmetry and natural results.",
    "Post-procedure skin care guidance and recovery planning.",
    "Follow-up visits to assess healing and optimize outcomes.",
  ],
  candidates: [
    "Individuals seeking a youthful and refreshed appearance",
    "Patients with realistic aesthetic expectations",
    "Those in good general health",
    "Patients looking for minimally invasive cosmetic solutions",
    "Individuals committed to post-procedure care",
  ],
  benefits: [
    "Youthful, refreshed appearance",
    "Improved skin texture and tone",
    "Boosted confidence",
    "Natural-looking results",
  ],
  faqs: [
    {
      question: "Are facial rejuvenation procedures permanent?",
      answer:
        "Results vary depending on the procedure. Some treatments offer long-lasting results, while others may require maintenance sessions to sustain the outcome.",
    },
    {
      question: "Will my face look natural?",
      answer:
        "Yes. All procedures are planned to enhance your natural features while maintaining facial harmony.",
    },
    {
      question: "How soon can I return to daily activities?",
      answer:
        "Most patients resume normal activities within a few days, depending on the treatment type.",
    },
  ],
  relatedServices: [
    { name: "Body Contouring", href: "body-contouring.html" },
    { name: "Scar Revision", href: "scar-revision.html" },
  ],
},
"body-contouring": {
  title: "Body Contouring",
  subtitle: "Sculpting procedures to enhance body shape and proportions",
  description:
    "Body contouring procedures are designed to reshape and refine body areas by removing excess fat and improving contours. These treatments help achieve a more balanced and aesthetically pleasing body profile.",
  image: "../assets/Body-Contouring-by-Royalty-Wellness-Medspa-in-Memphis-TN.webp",
  category: "Plastic & Cosmetic Surgery",
  categoryColor: "bg-pink-500/10 text-pink-600",
  duration: "1–4 hours",
  recovery: "2–6 weeks",
  indications: [
    "Localized fat deposits resistant to diet and exercise",
    "Loose or sagging skin after weight loss",
    "Desire for improved body proportions",
    "Post-pregnancy body changes",
    "Asymmetry in body contours",
  ],
  procedureSteps: [
    "Detailed consultation and body assessment to define contouring goals.",
    "Customized surgical or non-surgical treatment planning.",
    "Procedure performed using advanced techniques for optimal sculpting.",
    "Application of compression garments as needed.",
    "Post-procedure monitoring and recovery guidance.",
  ],
  candidates: [
    "Individuals close to their ideal body weight",
    "Patients with stable weight",
    "Those seeking contour refinement rather than weight loss",
    "Patients in good overall health",
    "Individuals committed to post-procedure care",
  ],
  benefits: [
    "Improved body contours",
    "Enhanced confidence and body image",
    "Long-lasting aesthetic improvement",
    "Clothing fits better",
  ],
  faqs: [
    {
      question: "Is body contouring a weight-loss procedure?",
      answer:
        "No. Body contouring is intended to reshape and refine specific areas, not for overall weight loss.",
    },
    {
      question: "Are results permanent?",
      answer:
        "Results are long-lasting when combined with a healthy lifestyle and stable weight.",
    },
    {
      question: "When will I see final results?",
      answer:
        "Initial improvements are visible early, with final results developing over several months as swelling subsides.",
    },
  ],
  relatedServices: [
    { name: "Facial Rejuvenation", href: "facial-rejuvenation.html" },
    { name: "Scar Revision", href: "scar-revision.html" },
  ],
},
"scar-revision": {
  title: "Scar Revision",
  subtitle: "Advanced techniques to improve scar appearance and skin texture",
  description:
    "Scar revision procedures aim to reduce the visibility of scars caused by injury, surgery, or acne. Using advanced medical and cosmetic techniques, scars are softened, flattened, and blended with surrounding skin.",
  image: "../assets/scar-revision-2024.webp",
  category: "Plastic & Cosmetic Surgery",
  categoryColor: "bg-pink-500/10 text-pink-600",
  duration: "30 minutes – 1 hour",
  recovery: "1–3 weeks",
  indications: [
    "Prominent or raised scars",
    "Post-surgical scars",
    "Acne scars",
    "Traumatic injury scars",
    "Scars causing cosmetic or functional concern",
  ],
  procedureSteps: [
    "Detailed scar evaluation including size, depth, and skin type.",
    "Selection of appropriate revision technique (surgical or non-surgical).",
    "Precise treatment to minimize scar visibility.",
    "Post-procedure wound care instructions.",
    "Follow-up visits to monitor healing and results.",
  ],
  candidates: [
    "Individuals dissatisfied with scar appearance",
    "Patients with fully healed scars",
    "Those in good general health",
    "Patients with realistic expectations",
    "Individuals seeking cosmetic improvement",
  ],
  benefits: [
    "Reduced scar visibility",
    "Improved skin texture",
    "Enhanced aesthetic appearance",
    "Boosted self-confidence",
  ],
  faqs: [
    {
      question: "Can scars be completely removed?",
      answer:
        "Scars cannot be completely removed, but their appearance can be significantly improved.",
    },
    {
      question: "Is scar revision painful?",
      answer:
        "Most procedures involve minimal discomfort and are performed under local anesthesia.",
    },
    {
      question: "How many sessions are required?",
      answer:
        "This depends on the scar type and treatment method. Some scars improve in one session, while others require multiple treatments.",
    },
  ],
  relatedServices: [
    { name: "Facial Rejuvenation", href: "facial-rejuvenation.html" },
    { name: "Body Contouring", href: "body-contouring.html" },
  ],
},
};

export const newsletterCopy =
  "Subscribe to our newsletter for health tips and updates.";

export const siteMeta = {
  title:
    "Kakkar Clinic - Dr. Vikas Kakkar | Diabetic Foot Care & Limb Salvage Specialist",
  description:
    "Expert diabetic foot care, limb salvage surgery, and plastic surgery by Dr. Vikas Kakkar. 25+ years experience. Book your appointment today.",
  keywords:
    "diabetic foot care, limb salvage, plastic surgery, Dr Vikas Kakkar, wound care, Delhi",
};
