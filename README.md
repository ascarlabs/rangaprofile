# Rangaswamy Yagateela — Portfolio Website

An elegant, professional single-page portfolio for **Rangaswamy Yagateela**, SAP BTP Developer at Anand PAG, with expertise in the Cloud Application Programming Model (CAPM) and interests in AI/ML.

## Highlights

- Modern hero with animated gradient background, orbit ring, and typewriter role
- Sections: Hero, About, Experience, Skills, Education, Contact
- Dark / Light theme toggle (preference persisted in `localStorage`)
- Smooth scroll-reveal animations with `IntersectionObserver`
- Animated stat counters
- Fully responsive (mobile, tablet, desktop)
- Zero dependencies — pure HTML, CSS, and vanilla JS
- Accessible: honors `prefers-reduced-motion`, semantic HTML, keyboard navigation

## File Structure

```
Ranga/
├── index.html      # Markup
├── styles.css      # Theming, layout, animations
├── script.js       # Interactions (theme, reveal, typewriter, counters)
└── README.md       # This file
```

## Run Locally

No build step is required. Open `index.html` directly in a browser:

```bash
open index.html
```

Or serve with any static server for best results:

```bash
# Python 3
python3 -m http.server 8080

# Node (npx)
npx serve .
```

Then visit <http://localhost:8080>.

## Customization

### 1. Update contact details
In `index.html`, look for the `Contact` section and replace:

- `rangaswamy.yagateela@example.com` with the real email
- The `https://www.linkedin.com` URL with the real LinkedIn profile
- The `https://github.com` URL with the real GitHub profile

### 2. Adjust colors
Edit the CSS variables at the top of `styles.css` inside `:root`:

```css
--accent: #6a8dff;
--accent-2: #9b7bff;
--accent-3: #42e5c8;
```

### 3. Change rotating roles
Edit the `roles` array in `script.js`:

```js
const roles = [
  'SAP BTP Developer',
  'CAPM Engineer',
  'AI/ML Enthusiast',
  // add more...
];
```

### 4. Add a profile photo
Replace the `.avatar-initials` element in `index.html` with an `<img>`:

```html
<div class="avatar-inner">
  <img src="assets/ranga.jpg" alt="Rangaswamy Yagateela" />
</div>
```

And in `styles.css`, add:

```css
.avatar-inner img { width: 100%; height: 100%; object-fit: cover; border-radius: 50%; }
```

## Deployment

The site is static and can be deployed to any host:

- **GitHub Pages** — push to a repo, enable Pages on `main`
- **Netlify** / **Vercel** — drag-and-drop the folder or connect the repo
- **Cloudflare Pages**, **Surge.sh**, etc.

## Credits

- Typography: [Inter](https://rsms.me/inter/), [Playfair Display](https://fonts.google.com/specimen/Playfair+Display), [JetBrains Mono](https://www.jetbrains.com/lp/mono/) via Google Fonts
- Built with care using plain web standards.
