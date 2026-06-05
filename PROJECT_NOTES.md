# Matt Freytag Construction — Website Project Notes

## Business Info
- **Business Name:** Matt Freytag Construction
- **Phone:** 423-504-6127
- **Public Email:** sales@mattfreytagconstruction.com (forwards to mattfreytag@att.net)
- **Service Area:** Cleveland, TN and surrounding areas
- **Years in Business:** 18 years
- **Tagline:** Professional. Reliable. Built Right.
- **Hours:** Mon–Fri 7:30am–5:30pm

## Services
- Remodel
- Trim Carpentry
- Flooring
- Cabinetry
- Hardscapes
- Landscaping & Sod

---

## Tech Stack
- Pure HTML / CSS / JavaScript (static site — no framework)
- Google Fonts: Oswald + Open Sans
- Ionicons (web component) for icons
- Web3Forms for contact form submissions
- .gitignore in place — node_modules excluded

## File Structure
```
C:\Users\mattf\BusinessWebsite\
├── index.html
├── styles.css
├── script.js
├── .gitignore
├── Homepage.JPG              ← hero background photo (compressed to 788KB from 8.5MB)
├── remodel/                  ← 10 photos (1.jpg - 10.jpg)
├── trim-carpentry/           ← 10 photos
├── flooring/                 ← 8 photos
├── cabinetry/                ← 14 photos
├── hardscapes/               ← 9 photos
└── landscaping/              ← EMPTY, need good photo (current one was corrupt)
```

---

## Hosting & Domain
- **Domain:** MattFreytagConstruction.com (registered on Namecheap)
- **Hosting:** Cloudflare Workers (free tier, unlimited bandwidth) — switched from Netlify which ran out of build credits
  - Worker name: businesswebsite
  - Worker URL: businesswebsite.mattfreytag.workers.dev
- **DNS:** Namecheap nameservers pointed to Cloudflare
  - arushi.ns.cloudflare.com
  - keenan.ns.cloudflare.com
- **GitHub Repo:** github.com/MattFreytag/BusinessWebsite (auto-deploys to Cloudflare on push)
- **SSL:** Auto-provisioned by Cloudflare

## Email
- sales@mattfreytagconstruction.com set up via Namecheap free email forwarding → mattfreytag@att.net
- No separate email client needed — all mail lands in existing inbox

## Contact Form
- Provider: Web3Forms (free, 250 submissions/month)
- Access Key: 0ad5cd9f-dcf4-41cd-a416-7b9fcf87a6ea
- Submissions emailed to: mattfreytag@att.net
- Subject line: "New Lead - Matt Freytag Construction"

---

## Features Built
- One-page scrolling layout (intentional — better for local contractor SEO + UX)
- **Hero:** Navy background (#0F3460) + Homepage.JPG overlay, split business name style matching the app
- **Nav:** Home icon (house) top left links back to top, hamburger menu on mobile
- **Services:** Clean text list (no cards — intentional, cleaner look)
- **About:** 18 years, owner on every job, Cleveland TN, free estimates
- **Gallery:** Category tabs (Remodel, Trim Carpentry, Flooring, Cabinetry, Hardscapes, Landscaping & Sod) with lightbox on click — shows photos in correct portrait/landscape orientation, arrow navigation, keyboard support
- **Contact:** Phone, email, hours, Web3Forms contact form
- **Footer:** Business name, phone
- **Mobile responsive:** Optimized for phone screens

## Design Decisions
- Removed wrench icon from hero — looked like "under construction", unprofessional
- Navy color scheme (#0F3460) matches the iPhone app home screen
- One page vs separate pages — one page chosen for simplicity and local SEO
- Web3Forms over Formspree — 250 free submissions vs 50
- Generic business email on site (sales@) not personal att.net address
- Photos numbered 1.jpg, 2.jpg etc. in each folder for easy ordering
- Homepage.JPG compressed from 8.5MB → 788KB for faster loading, no visible quality loss
- Switched from Netlify to Cloudflare Workers — Netlify free tier ran out of build credits

---

## Deployment Workflow
1. Make changes to files in `C:\Users\mattf\BusinessWebsite\`
2. Preview locally by opening index.html in browser
3. When happy, push to GitHub:
   ```
   cd /c/Users/mattf/BusinessWebsite
   git add .
   git commit -m "your message"
   git push
   ```
4. Cloudflare auto-deploys within ~30 seconds
5. **Batch changes together before pushing to save tokens**

---

## Pending / To Do
- [ ] Find portrait-orientation photo for hero background on mobile
- [ ] Add landscaping & sod photos (current one was corrupt/too small)
- [ ] Add videos when ready (YouTube/Instagram embeds or local files)
- [ ] SEO optimization (page title, meta description, keywords, Google Business Profile)
- [ ] Real logo design to replace text-only hero (discussed for future)
- [ ] Google Business Profile setup (most important for local search ranking)
