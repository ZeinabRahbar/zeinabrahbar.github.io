# zeinabrahbar.github.io

## Personal academic website & portfolio

This repository hosts the source for my personal website — a research portfolio covering my work in **Graph Neural Networks**, **Geometric Deep Learning**, and **Multimodal Representation Learning**.

🔗 **Live site:** [zeinabrahbar.github.io](https://zeinabrahbar.github.io)

---

## About

AI researcher with an M.Sc. in Computer Engineering (Artificial Intelligence) from the University of Isfahan. Research focus:

- Graph Neural Networks (GNNs) & latent graph learning
- Multimodal learning for biomedical applications
- Graph signal processing and efficient graph-structured data processing
- Visual Question Answering (VQA) using graph-based representations

---

## Structure

Plain HTML/CSS/JS, no framework, no build step, no npm dependency — served directly by GitHub Pages.

```
.
├── index.html            Page content and structure
├── assets/
│   ├── css/styles.css    Design system + component styles
│   └── js/main.js        Sticky-nav scroll-spy, mobile menu toggle
├── robots.txt
├── sitemap.xml
└── .nojekyll              Tells GitHub Pages to skip Jekyll processing
```

## Local development

No build tools required. Either open `index.html` directly in a browser, or serve it locally:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Updating content

All page copy lives directly in `index.html`, organized by section (`#research`, `#experience`, `#projects`, `#education`, `#skills`, `#contact`). Design tokens (colors, type, spacing) are defined once as CSS custom properties at the top of `assets/css/styles.css`.
