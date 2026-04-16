# Dr. Sandeep K. Sahu – Endocrinologist Portfolio Website

A premium, high-converting multi-page doctor portfolio website built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone or extract this project
cd doctor-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🏗️ Project Structure

```
doctor-portfolio/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Root layout (Navbar + Footer + StickyCTA)
│   ├── page.tsx                  # Home page
│   ├── globals.css               # Global styles, animations, glassmorphism
│   ├── about/page.tsx            # About doctor page
│   ├── services/
│   │   ├── page.tsx              # Services listing
│   │   └── [slug]/page.tsx       # Individual service detail
│   ├── blogs/
│   │   ├── page.tsx              # Blog listing
│   │   └── [slug]/page.tsx       # Blog article detail
│   ├── patient-corner/page.tsx   # FAQs + resources
│   ├── contact/page.tsx          # Contact form + clinic info
│   ├── sitemap.ts                # Auto-generated sitemap
│   └── robots.ts                 # Robots.txt
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx            # Sticky, responsive navbar
│   │   ├── Footer.tsx            # Full footer with links
│   │   └── StickyCTA.tsx         # Floating call/book buttons
│   └── sections/
│       ├── HeroSection.tsx       # Home hero with doctor card
│       ├── StatsSection.tsx      # Key statistics bar
│       ├── AboutPreview.tsx      # Home about preview
│       ├── ServicesSection.tsx   # Services grid
│       ├── WhyChooseUs.tsx       # Trust signals
│       ├── TestimonialsSection.tsx
│       ├── BlogPreview.tsx       # Latest blog posts
│       └── CTASection.tsx        # Call to action
│
├── data/
│   ├── doctor.ts                 # Doctor profile data
│   ├── services.ts               # All 6 services with full content
│   └── index.ts                  # Testimonials, blogs, FAQs, resources
│
├── public/images/                # Place your images here
│   ├── doctor/                   # dr-sahu.jpg etc.
│   ├── clinic/
│   ├── services/
│   └── blogs/
│
├── tailwind.config.ts            # Tailwind + custom design tokens
└── package.json
```

---

## 📄 Pages

| Route | Description |
|-------|-------------|
| `/` | Home – Hero, About preview, Services, Why Us, Testimonials, Blog preview, CTA |
| `/about` | Full doctor biography, qualifications timeline, expertise |
| `/services` | Services grid with all 6 specializations |
| `/services/[slug]` | Individual service: overview, symptoms, treatments, CTA |
| `/blogs` | Blog listing with featured post |
| `/blogs/[slug]` | Full blog article with author card and related posts |
| `/patient-corner` | FAQs accordion, educational resources, visit preparation |
| `/contact` | Appointment form, clinic details, map embed, call CTA |

---

## 🖼️ Adding Doctor Photos

Place images in `/public/images/`:

1. **Doctor photo**: `/public/images/doctor/dr-sahu.jpg`
   - Recommended: 800x1000px portrait
   - Then uncomment the `<Image>` tag in `HeroSection.tsx` and `AboutPreview.tsx`

2. **Blog images**: `/public/images/blogs/[blog-slug].jpg`
   - Recommended: 1200x630px (16:9)

3. **Clinic photos**: `/public/images/clinic/exterior.jpg`, `interior.jpg`

---

## 🗺️ Google Maps Integration

In `app/contact/page.tsx`, replace the map placeholder with:

```jsx
<iframe
  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_URL_HERE"
  width="100%"
  height="256"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
```

Get embed URL from: Google Maps → Share → Embed a map

---

## 📝 Updating Content

All content is centralized in `/data/`:

### Doctor Info (`data/doctor.ts`)
```ts
export const doctor = {
  name: "Dr. Sandeep K. Sahu",
  phone: "+91 7008512773",
  address: "...",
  // etc.
};
```

### Services (`data/services.ts`)
Add/edit services with full symptom lists, treatments, and key facts.

### Blogs (`data/index.ts`)
Add blog entries with slug, title, content, category, and metadata.

### FAQs & Testimonials (`data/index.ts`)
Edit the `faqs` and `testimonials` arrays.

---

## 🎨 Design System

### Colors
- **Primary**: Blue `#1D6ECF` (trust, medical)
- **Accent**: Teal `#0D9488` (health, vitality)
- **Text**: Slate `#1E293B`
- **Background**: Near-white `#FAFBFF`

### Typography
- **Headings**: Playfair Display (serif, premium)
- **Body**: DM Sans (clean, readable)

### Key CSS Classes
```css
.glass          /* Glassmorphism card */
.gradient-text  /* Blue gradient text */
.card           /* Standard card with hover effect */
.btn-primary    /* Blue pill button */
.btn-secondary  /* Outlined pill button */
.section-tag    /* Small labeled badge */
.expertise-badge /* Skill pill */
.stat-card      /* Statistics display card */
.service-card   /* Service listing card */
```

---

## 📱 Mobile Features

- Responsive at all breakpoints (mobile-first)
- Hamburger menu with smooth slide animation
- Quick-call button always visible on mobile
- Floating CTA buttons (Call Now + Book Appointment)
- Touch-friendly tap targets

---

## ⚡ Performance & SEO

- `next/image` optimized images (when configured)
- Static page generation for services and blogs
- Semantic HTML throughout
- Meta tags per page
- Auto-generated XML sitemap at `/sitemap.xml`
- Robots.txt at `/robots.txt`
- Open Graph tags for social sharing

---

## 🔧 Customization

### Add a New Service
1. Add entry to `data/services.ts`
2. Route auto-generates via `generateStaticParams()`

### Add a New Blog Post
1. Add entry to `data/index.ts` blogs array
2. Route auto-generates via `generateStaticParams()`

### Change Phone Number / Address
Update `data/doctor.ts` — it propagates everywhere automatically.

---

## 📦 Build for Production

```bash
npm run build
npm start
```

Or deploy to Vercel:
```bash
npx vercel
```

---

## 📞 Clinic Contact

**SAI SHREE HEALTH CARE**  
Near Shreema Hospital, Ring Road  
Mangalabag, Cuttack – 753001  
📞 +91 7008512773

---

*Built for Dr. Sandeep K. Sahu – MBBS, MD, DM (Endocrinology)*
