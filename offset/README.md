# OFFSET® — A Curated Index of Places in Seoul

서울의 주목할 만한 공간을 선별하고 기록하는 디지털 공간 인덱스.

## Overview
- **Category**: Lifestyle / Local Discovery / Place Curation
- **Tagline**: A CURATED INDEX OF PLACES IN SEOUL.
- **Visual Direction**: Editorial, Minimal, Precise, Architectural, Contemporary
- **Color System**: INK (`#111111`), PAPER (`#F1F0EB`), GREY (`#8A8A86`), LINE (`#CBCAC4`)

## Directory Structure
```
offset/
├── index.html                  # Editorial Cover, Selected Places, Featured, Neighbourhoods, Categories
├── pages/
│   ├── places.html             # Place Index (Asymmetric 12-col Grid & Text Filter)
│   ├── place-detail.html       # Magazine Feature Article View
│   ├── search.html             # Minimalist Editorial Search
│   └── saved.html              # Saved Index (LocalStorage based)
├── assets/
│   ├── images/
│   │   ├── places/
│   │   └── neighbourhoods/
│   └── js/
│       └── main.js             # Data, Hover Reveal, Filter, Search, LocalStorage
├── README.md
└── .gitignore
```

## Rules
- Pure HTML5 Semantic Elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`)
- BEM CSS in each HTML `<style>` block (No external frameworks, no standalone `.css` files)
- Pure Vanilla JS (`assets/js/main.js`)
