/**
 * OFFSET® — Signature Art Direction Script
 * "THE CITY CHANGES WITH EVERY PLACE."
 * Controlled Chaos + Dynamic Atmosphere + Cinematic Motion
 */

// 1. Curated Places with Distinct Regional Atmosphere Hues
const OFFSET_PLACES = [
  {
    id: "001",
    name: "POINT OF VIEW",
    neighbourhood: "SEONGSU",
    category: "RETAIL",
    coordinates: "37°32′44″N 127°03′18″E",
    themeColor: "#586772", // Industrial Blue Grey
    themeText: "#E5ECF0",
    hours: "12:00 — 20:00 (DAILY)",
    address: "18, Yeonmujang-gil, Seongdong-gu, Seoul",
    priceRange: "$$",
    description: "창작자의 관점과 도구를 다루는 3층 규모의 아카이브 숍. 사과, 문진, 만년필 등 영감을 자극하는 오브제들이 목조 가구와 벽돌 벽체 사이에 정교하게 큐레이션되어 있습니다.",
    editorialQuote: "“The city outside is loud. This place isn't.”",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1400&auto=format&fit=crop"
    ],
    isFeatured: true
  },
  {
    id: "002",
    name: "TÉTO",
    neighbourhood: "HANNAM",
    category: "DINING",
    coordinates: "37°32′08″N 127°00′21″E",
    themeColor: "#4A252A", // Deep Burgundy
    themeText: "#F5E9EA",
    hours: "17:30 — 23:00 (TUE-SUN)",
    address: "34, Daesagwan-ro 11-gil, Yongsan-gu, Seoul",
    priceRange: "$$$",
    description: "노출 콘크리트와 흑철, 은은한 간접 조명이 교차하는 다이닝 바. 간결한 조형미 속에서 제철 식재료를 현대적으로 재해석한 코스를 차분하게 선보입니다.",
    editorialQuote: "“Darkness and precision sculpt an unexpected culinary silence.”",
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop"
    ]
  },
  {
    id: "003",
    name: "PONT",
    neighbourhood: "EULJIRO",
    category: "BAR",
    coordinates: "37°33′58″N 126°59′42″E",
    themeColor: "#4E4E3E", // Oxidized Olive
    themeText: "#EDEFE5",
    hours: "18:00 — 01:00 (MON-SAT)",
    address: "22-1, Supyo-ro, Jung-gu, Seoul",
    priceRange: "$$",
    description: "오래된 철공소 골목 끝, 붉은 벽돌과 강철 프레임으로 시간의 켜를 보존한 위스키 앤 칵테일 바. 오래된 세월과 현대적 디테일이 중첩됩니다.",
    editorialQuote: "“Raw industrial decay condensed into refined amber liquid.”",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1400&auto=format&fit=crop"
    ]
  },
  {
    id: "004",
    name: "LCDC SEOUL",
    neighbourhood: "SEONGSU",
    category: "CULTURE",
    coordinates: "37°32′31″N 127°03′35″E",
    themeColor: "#586772",
    themeText: "#E5ECF0",
    hours: "11:00 — 21:00 (DAILY)",
    address: "10, Yeonmujang 17-gil, Seongdong-gu, Seoul",
    priceRange: "$$",
    description: "옛 자동차 정비소를 복합 문화 공간으로 탈바꿈시킨 건축 프로젝트. 카페, 팝업 바, 독립 편집숍들이 중정을 감싸며 유기적인 순환 동선을 만듭니다.",
    editorialQuote: "“Connecting broken city blocks through tactile spatial journeys.”",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1400&auto=format&fit=crop"
    ]
  },
  {
    id: "005",
    name: "MMCA SEOUL",
    neighbourhood: "SAMCHEONG",
    category: "EXHIBITION",
    coordinates: "37°34′48″N 126°58′48″E",
    themeColor: "#8C8374", // Stone Beige
    themeText: "#F7F5F2",
    hours: "10:00 — 18:00 (WED, SAT ~21:00)",
    address: "30, Samcheong-ro, Jongno-gu, Seoul",
    priceRange: "$",
    description: "종친부 유적과 붉은 테라코타 외벽이 전통과 현대의 조화를 이루는 국립현대미술관 서울관. 도심 속 넓은 마당과 낮은 스카이라인이 깊은 호흡을 선사합니다.",
    editorialQuote: "“Courtyards where ancient lineage gazes into contemporary void.”",
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=1800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1400&auto=format&fit=crop"
    ]
  },
  {
    id: "006",
    name: "FELT COFFEE",
    neighbourhood: "SEOCHEON",
    category: "COFFEE",
    coordinates: "37°34′16″N 126°58′20″E",
    themeColor: "#2A2A2A", // Monolithic Black
    themeText: "#F0F0F0",
    hours: "08:00 — 20:00 (WEEKDAYS) / 10:00 — 20:00 (WEEKENDS)",
    address: "15, Jahamun-ro, Jongno-gu, Seoul",
    priceRange: "$",
    description: "블랙 큐브 형태의 파격적인 커피 바와 극도로 절제된 좌석 구성. 커피 본연의 추출과 향미에만 온전히 집중하도록 유도하는 미니멀리즘의 정점입니다.",
    editorialQuote: "“Subtracting every ornament until only pure liquid remains.”",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1400&auto=format&fit=crop"
    ]
  },
  {
    id: "007",
    name: "DESIGN LIBRARY",
    neighbourhood: "SAMCHEONG",
    category: "CULTURE",
    coordinates: "37°35′02″N 126°59′01″E",
    themeColor: "#8C8374",
    themeText: "#F7F5F2",
    hours: "12:00 — 21:00 (TUE-SAT) / 12:00 — 18:00 (SUN)",
    address: "31-18, Bukchon-ro, Jongno-gu, Seoul",
    priceRange: "FREE (MEMBERSHIP)",
    description: "북촌의 전통 한옥 구조에 현대 건축가 최욱의 철골 구조가 결합된 아카이브 라이브러리. 바우하우스부터 동시대 디자인 서적까지 깊이 있는 장서를 보유합니다.",
    editorialQuote: "“Hanok timber and black steel holding rare volumes of human thought.”",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507842229451-9f0180ce5c9e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1400&auto=format&fit=crop"
    ]
  },
  {
    id: "008",
    name: "OUDE",
    neighbourhood: "SEONGSU",
    category: "COFFEE",
    coordinates: "37°32′40″N 127°03′05″E",
    themeColor: "#586772",
    themeText: "#E5ECF0",
    hours: "11:00 — 20:00 (DAILY)",
    address: "101, Yeonmujang-gil, Seongdong-gu, Seoul",
    priceRange: "$$",
    description: "높은 층고와 통유리창, 거친 모르타르 바닥이 조화를 이루는 베이커리 카페. 실내외 경계를 허문 개방감이 성수동의 인더스트리얼 정취를 대변합니다.",
    editorialQuote: "“Afternoon light cutting across unfinished concrete and flour dust.”",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1400&auto=format&fit=crop"
    ]
  },
  {
    id: "009",
    name: "ANTHRACITE",
    neighbourhood: "HANNAM",
    category: "COFFEE",
    coordinates: "37°32′10″N 127°00′05″E",
    themeColor: "#4A252A",
    themeText: "#F5E9EA",
    hours: "09:00 — 22:00 (DAILY)",
    address: "240, Itaewon-ro, Yongsan-gu, Seoul",
    priceRange: "$$",
    description: "실내 조경과 거친 석재, 식물들이 공간을 가로지르는 한남동의 랜드마크. 콘크리트 숲 속 자연의 숨결을 입힌 건축적 실험이 돋보입니다.",
    editorialQuote: "“A dark internal garden weaving stone, coffee and oxygen.”",
    image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1400&auto=format&fit=crop"
    ]
  },
  {
    id: "010",
    name: "BAR NYX",
    neighbourhood: "YEONNAM",
    category: "BAR",
    coordinates: "37°33′45″N 126°55′28″E",
    themeColor: "#555D4E", // Dusty Moss
    themeText: "#F0F2ED",
    hours: "19:00 — 02:00 (CLOSED MON)",
    address: "14, Donggyo-ro 46-gil, Mapo-gu, Seoul",
    priceRange: "$$$",
    description: "연남동 조용한 주택가 깊숙이 자리 잡은 프라이빗 오디오 파일 리스닝 바. 아날로그 바이닐 음반과 단정한 칵테일 한 잔이 밤의 여백을 채웁니다.",
    editorialQuote: "“The weight of vinyl grooves settling over deep midnight velvet.”",
    image: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1400&auto=format&fit=crop"
    ]
  }
];

// District Specific Atmospheres
const NEIGHBOURHOOD_ATMOSPHERE = {
  SEONGSU: {
    color: "#586772", // Industrial Blue Grey
    text: "#F0F4F7",
    meta: "37.5445° N / 127.0560° E",
    count: "03 PLACES",
    quote: "Raw concrete, steel frames and reconfigured industrial memory."
  },
  HANNAM: {
    color: "#4A252A", // Deep Burgundy
    text: "#F7EAEA",
    meta: "37.5340° N / 127.0026° E",
    count: "02 PLACES",
    quote: "Steep slopes, embassies, refined quietude and nocturnal discretion."
  },
  EULJIRO: {
    color: "#4E4E3E", // Oxidized Olive
    text: "#EFEFE8",
    meta: "37.5662° N / 126.9926° E",
    count: "01 PLACE",
    quote: "Heavy metal lathes, alley dust and layered 20th-century time."
  },
  SAMCHEONG: {
    color: "#8C8374", // Stone Beige
    text: "#F6F4F0",
    meta: "37.5824° N / 126.9818° E",
    count: "02 PLACES",
    quote: "Low stone eaves, palace shadows and meditative modern voids."
  },
  YEONNAM: {
    color: "#555D4E", // Dusty Moss
    text: "#F0F2ED",
    meta: "37.5658° N / 126.9248° E",
    count: "01 PLACE",
    quote: "Low-rise brick residences, quiet record bars and hidden courtyards."
  },
  SEOCHEON: {
    color: "#242424", // Monolith Graphite
    text: "#ECECEC",
    meta: "37.5786° N / 126.9701° E",
    count: "01 PLACE",
    quote: "Narrow pathways, literary remnants and monastic minimalism."
  }
};

// 2. LocalStorage Saved Places Manager
const Storage = {
  KEY: "offset_saved_places",

  getSaved() {
    try {
      const data = localStorage.getItem(this.KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error("Storage read error", e);
      return [];
    }
  },

  isSaved(id) {
    return this.getSaved().includes(id);
  },

  toggle(id) {
    let list = this.getSaved();
    if (list.includes(id)) {
      list = list.filter(item => item !== id);
    } else {
      list.push(id);
    }
    localStorage.setItem(this.KEY, JSON.stringify(list));
    this.updateBadge();
    return list.includes(id);
  },

  updateBadge() {
    const list = this.getSaved();
    const countEls = document.querySelectorAll(".bind-saved-count");
    countEls.forEach(el => {
      const num = list.length;
      el.textContent = num < 10 ? `0${num}` : num;
    });
  }
};

// 3. Precision Custom Cursor (Desktop Only)
class EditorialCursor {
  constructor() {
    if (window.innerWidth < 1024) return;
    this.el = document.createElement("div");
    this.el.className = "custom-cursor";
    this.el.innerHTML = `<span class="custom-cursor__label"></span>`;
    document.body.appendChild(this.el);
    this.label = this.el.querySelector(".custom-cursor__label");
    this.bindEvents();
  }

  bindEvents() {
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    let isMoving = false;

    const render = () => {
      currentX += (mouseX - currentX) * 0.22;
      currentY += (mouseY - currentY) * 0.22;
      this.el.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      requestAnimationFrame(render);
    };

    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isMoving) {
        currentX = mouseX;
        currentY = mouseY;
        isMoving = true;
        requestAnimationFrame(render);
      }
    });

    document.addEventListener("mouseover", (e) => {
      const trigger = e.target.closest("[data-cursor]");
      if (trigger) {
        const text = trigger.getAttribute("data-cursor") || "VIEW";
        this.label.textContent = text;
        this.el.classList.add("custom-cursor--expanded");
      }
    });

    document.addEventListener("mouseout", (e) => {
      const trigger = e.target.closest("[data-cursor]");
      if (trigger) {
        this.el.classList.remove("custom-cursor--expanded");
      }
    });
  }
}

// 4. Dynamic Atmospheric Hover & Reveal Engine
class AtmosphericRevealEngine {
  constructor() {
    this.preview = document.querySelector(".cinematic-preview");
    if (!this.preview) {
      this.preview = document.createElement("div");
      this.preview.className = "cinematic-preview";
      this.preview.innerHTML = `<img class="cinematic-preview__img" src="" alt="Place Cinematic Archive">`;
      document.body.appendChild(this.preview);
    }
    this.img = this.preview.querySelector(".cinematic-preview__img");
    this.root = document.documentElement;
    this.bindEvents();
  }

  bindEvents() {
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let active = false;

    const updateLoop = () => {
      if (active) {
        targetX += (mouseX - targetX) * 0.15;
        targetY += (mouseY - targetY) * 0.15;
        this.preview.style.transform = `translate3d(${targetX + 32}px, ${targetY - 180}px, 0)`;
        requestAnimationFrame(updateLoop);
      }
    };

    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    // 1) Selected Place Row Hover: Change atmosphere tone & reveal
    document.addEventListener("mouseover", (e) => {
      const row = e.target.closest(".index-row[data-place-id]");
      if (row) {
        const placeId = row.getAttribute("data-place-id");
        const place = OFFSET_PLACES.find(p => p.id === placeId);
        if (place) {
          this.img.src = place.image;
          this.preview.classList.add("cinematic-preview--active");
          active = true;
          targetX = mouseX;
          targetY = mouseY;
          requestAnimationFrame(updateLoop);

          // Atmospheric transition
          this.root.style.setProperty("--atmosphere-bg", place.themeColor);
          this.root.style.setProperty("--atmosphere-text", place.themeText);
          document.body.classList.add("atmosphere-active");

          // Dim other sibling rows
          const siblings = row.parentElement.querySelectorAll(".index-row");
          siblings.forEach(sib => {
            if (sib !== row) sib.style.opacity = "0.2";
          });
        }
      }

      // 2) District Hover: Change atmospheric background & district tone
      const districtRow = e.target.closest(".neighbourhood-item[data-district]");
      if (districtRow) {
        const districtKey = districtRow.getAttribute("data-district");
        const atm = NEIGHBOURHOOD_ATMOSPHERE[districtKey];
        if (atm) {
          this.root.style.setProperty("--atmosphere-bg", atm.color);
          this.root.style.setProperty("--atmosphere-text", atm.text);
          document.body.classList.add("atmosphere-active");

          const descEl = document.querySelector(".neighbourhood-preview__text");
          if (descEl) descEl.textContent = atm.quote;

          const metaEl = document.querySelector(".neighbourhood-preview__coord");
          if (metaEl) metaEl.textContent = atm.meta;
        }
      }
    });

    document.addEventListener("mouseout", (e) => {
      const row = e.target.closest(".index-row[data-place-id]");
      if (row) {
        this.preview.classList.remove("cinematic-preview--active");
        active = false;
        document.body.classList.remove("atmosphere-active");
        const siblings = row.parentElement.querySelectorAll(".index-row");
        siblings.forEach(sib => sib.style.opacity = "1");
      }

      const districtRow = e.target.closest(".neighbourhood-item[data-district]");
      if (districtRow) {
        document.body.classList.remove("atmosphere-active");
      }
    });
  }
}

// 5. Scroll Theme Transition Observer
function initScrollToneObserver() {
  const sections = document.querySelectorAll("[data-tone]");
  if (!sections.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const tone = entry.target.getAttribute("data-tone");
        document.body.setAttribute("data-current-tone", tone);
      }
    });
  }, {
    threshold: 0.35
  });

  sections.forEach(sec => observer.observe(sec));
}

// 6. Initializer
document.addEventListener("DOMContentLoaded", () => {
  Storage.updateBadge();
  new EditorialCursor();
  new AtmosphericRevealEngine();
  initScrollToneObserver();

  const body = document.body;
  if (body.classList.contains("page-home")) {
    initHomePage();
  } else if (body.classList.contains("page-places")) {
    initPlacesPage();
  } else if (body.classList.contains("page-detail")) {
    initDetailPage();
  } else if (body.classList.contains("page-search")) {
    initSearchPage();
  } else if (body.classList.contains("page-saved")) {
    initSavedPage();
  }
});

// [PAGE 1] HOME
function initHomePage() {
  const indexTable = document.querySelector(".selected-index__table");
  if (indexTable) {
    const list = OFFSET_PLACES.slice(0, 8);
    const basePath = window.location.pathname.includes("/pages/") ? "" : "pages/";
    indexTable.innerHTML = list.map(place => `
      <a href="${basePath}place-detail.html?id=${place.id}" 
         class="index-row" 
         data-place-id="${place.id}"
         data-cursor="VIEW">
        <span class="index-row__num">${place.id}</span>
        <span class="index-row__name">${place.name}</span>
        <span class="index-row__meta">${place.neighbourhood}</span>
        <span class="index-row__cat">${place.category}</span>
        <span class="index-row__arrow" aria-hidden="true">↗</span>
      </a>
    `).join("");
  }
}

// [PAGE 2] PLACE INDEX (EDITORIAL SPREAD & CONTRAST)
function initPlacesPage() {
  const gridContainer = document.querySelector(".editorial-grid");
  const countEl = document.querySelector(".bind-places-count");
  const catLinks = document.querySelectorAll(".filter-text__cat");
  const areaLinks = document.querySelectorAll(".filter-text__area");

  const params = new URLSearchParams(window.location.search);
  let currentCat = (params.get("category") || "ALL").toUpperCase();
  let currentArea = (params.get("area") || "ALL").toUpperCase();

  function updateFilterUI() {
    catLinks.forEach(link => {
      const cat = link.getAttribute("data-category");
      link.classList.toggle("filter-text__link--active", cat === currentCat);
    });
    areaLinks.forEach(link => {
      const area = link.getAttribute("data-area");
      link.classList.toggle("filter-text__link--active", area === currentArea);
    });
  }

  function renderGrid() {
    let filtered = OFFSET_PLACES;
    if (currentCat !== "ALL") {
      filtered = filtered.filter(p => p.category === currentCat);
    }
    if (currentArea !== "ALL") {
      filtered = filtered.filter(p => p.neighbourhood === currentArea);
    }

    if (countEl) {
      countEl.textContent = filtered.length < 10 ? `0${filtered.length}` : filtered.length;
    }

    if (!gridContainer) return;

    if (filtered.length === 0) {
      gridContainer.innerHTML = `
        <div class="empty-editorial">
          <p class="empty-editorial__title">NO SPACES RECORDED IN THIS SECTOR.</p>
          <p class="empty-editorial__desc">선택하신 축에 해당하는 아카이브가 없습니다.</p>
        </div>
      `;
      return;
    }

    // Dynamic Asymmetric Rhythms with Offsets
    gridContainer.innerHTML = filtered.map((place, idx) => {
      let colClass = "editorial-cell--offset-a";
      if (idx % 4 === 0) {
        colClass = "editorial-cell--featured-col"; // Massive 9-col
      } else if (idx % 3 === 0) {
        colClass = "editorial-cell--offset-b";
      } else if (idx % 2 === 0) {
        colClass = "editorial-cell--offset-c";
      }

      return `
        <article class="editorial-cell ${colClass}" data-cursor="EXPLORE">
          <a href="place-detail.html?id=${place.id}" class="editorial-cell__link">
            <div class="editorial-cell__image-frame">
              <img src="${place.image}" alt="${place.name} architectural space" class="editorial-cell__img" loading="lazy">
              <span class="editorial-cell__index">${place.id}</span>
            </div>
            <div class="editorial-cell__content">
              <div class="editorial-cell__header">
                <h3 class="editorial-cell__title">${place.name}</h3>
                <span class="editorial-cell__category">${place.category}</span>
              </div>
              <div class="editorial-cell__meta">
                <span>${place.neighbourhood}</span>
                <span>${place.coordinates}</span>
              </div>
            </div>
          </a>
        </article>
      `;
    }).join("");
  }

  catLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      currentCat = link.getAttribute("data-category");
      updateFilterUI();
      renderGrid();
    });
  });

  areaLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      currentArea = link.getAttribute("data-area");
      updateFilterUI();
      renderGrid();
    });
  });

  updateFilterUI();
  renderGrid();
}

// [PAGE 3] PLACE DETAIL (ATMOSPHERIC FEATURE ARTICLE)
function initDetailPage() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id") || "001";
  const place = OFFSET_PLACES.find(p => p.id === id) || OFFSET_PLACES[0];

  document.title = `${place.name} — OFFSET®`;

  // Bind Atmospheric Tone
  document.documentElement.style.setProperty("--detail-theme", place.themeColor);
  document.documentElement.style.setProperty("--detail-text", place.themeText);

  // Bind Metadata
  document.querySelectorAll(".bind-place-id").forEach(el => el.textContent = place.id);
  document.querySelectorAll(".bind-place-name").forEach(el => el.textContent = place.name);
  document.querySelectorAll(".bind-place-neighbourhood").forEach(el => el.textContent = place.neighbourhood);
  document.querySelectorAll(".bind-place-coordinates").forEach(el => el.textContent = place.coordinates);
  document.querySelectorAll(".bind-place-category").forEach(el => el.textContent = place.category);
  document.querySelectorAll(".bind-place-hours").forEach(el => el.textContent = place.hours);
  document.querySelectorAll(".bind-place-address").forEach(el => el.textContent = place.address);
  document.querySelectorAll(".bind-place-price").forEach(el => el.textContent = place.priceRange);
  document.querySelectorAll(".bind-place-description").forEach(el => el.textContent = place.description);
  document.querySelectorAll(".bind-place-quote").forEach(el => el.textContent = place.editorialQuote);

  const heroImg = document.querySelector(".bind-hero-img");
  if (heroImg) {
    heroImg.src = place.image;
    heroImg.alt = `${place.name} main architectural photograph`;
  }

  const galleryGrid = document.querySelector(".asymmetric-gallery");
  if (galleryGrid && place.gallery) {
    galleryGrid.innerHTML = place.gallery.map((src, i) => `
      <figure class="gallery-item gallery-item--${i + 1}" data-cursor="PLATE 0${i + 1}">
        <img src="${src}" alt="${place.name} observation plate ${i + 1}" class="gallery-item__img" loading="lazy">
        <figcaption class="gallery-item__caption">FIG. 0${i + 1} — ARCHITECTURAL ARCHIVE, ${place.neighbourhood}</figcaption>
      </figure>
    `).join("");
  }

  // Save Place Action
  const saveBtn = document.querySelector(".btn-save-place");
  if (saveBtn) {
    function updateSaveState() {
      const isSaved = Storage.isSaved(place.id);
      saveBtn.classList.toggle("btn-save-place--saved", isSaved);
      saveBtn.querySelector(".save-text").textContent = isSaved ? "SAVED IN ARCHIVE [✓]" : "SAVE THIS SCENE [+]";
      saveBtn.setAttribute("aria-pressed", isSaved ? "true" : "false");
    }
    updateSaveState();

    saveBtn.addEventListener("click", () => {
      Storage.toggle(place.id);
      updateSaveState();
    });
  }
}

// [PAGE 4] SEARCH
function initSearchPage() {
  const input = document.querySelector(".editorial-search__input");
  const resultList = document.querySelector(".search-results-list");
  const emptyState = document.querySelector(".search-empty");
  const countEl = document.querySelector(".search-count");

  function performSearch(query) {
    const q = query.trim().toLowerCase();
    if (!q) {
      if (resultList) resultList.innerHTML = "";
      if (emptyState) emptyState.style.display = "none";
      if (countEl) countEl.textContent = "00";
      return;
    }

    const matches = OFFSET_PLACES.filter(p => 
      p.name.toLowerCase().includes(q) ||
      p.neighbourhood.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.address.toLowerCase().includes(q)
    );

    if (countEl) {
      countEl.textContent = matches.length < 10 ? `0${matches.length}` : matches.length;
    }

    if (matches.length === 0) {
      if (resultList) resultList.innerHTML = "";
      if (emptyState) emptyState.style.display = "block";
    } else {
      if (emptyState) emptyState.style.display = "none";
      if (resultList) {
        resultList.innerHTML = matches.map(place => `
          <a href="place-detail.html?id=${place.id}" 
             class="index-row" 
             data-place-id="${place.id}"
             data-cursor="VIEW">
            <span class="index-row__num">${place.id}</span>
            <span class="index-row__name">${place.name}</span>
            <span class="index-row__meta">${place.neighbourhood}</span>
            <span class="index-row__cat">${place.category}</span>
            <span class="index-row__arrow" aria-hidden="true">↗</span>
          </a>
        `).join("");
      }
    }
  }

  if (input) {
    input.focus();
    input.addEventListener("input", (e) => {
      performSearch(e.target.value);
    });

    const params = new URLSearchParams(window.location.search);
    const qParam = params.get("q");
    if (qParam) {
      input.value = qParam;
      performSearch(qParam);
    }
  }
}

// [PAGE 5] SAVED
function initSavedPage() {
  const savedListContainer = document.querySelector(".saved-index__list");
  const emptyView = document.querySelector(".saved-empty");
  const countEl = document.querySelector(".bind-saved-total");

  function renderSaved() {
    const savedIds = Storage.getSaved();
    const savedPlaces = OFFSET_PLACES.filter(p => savedIds.includes(p.id));

    if (countEl) {
      countEl.textContent = savedPlaces.length < 10 ? `0${savedPlaces.length}` : savedPlaces.length;
    }

    if (savedPlaces.length === 0) {
      if (savedListContainer) savedListContainer.innerHTML = "";
      if (emptyView) emptyView.style.display = "block";
    } else {
      if (emptyView) emptyView.style.display = "none";
      if (savedListContainer) {
        savedListContainer.innerHTML = savedPlaces.map(place => `
          <div class="index-row-saved">
            <a href="place-detail.html?id=${place.id}" class="index-row" data-place-id="${place.id}" data-cursor="VIEW">
              <span class="index-row__num">${place.id}</span>
              <span class="index-row__name">${place.name}</span>
              <span class="index-row__meta">${place.neighbourhood}</span>
              <span class="index-row__cat">${place.category}</span>
              <span class="index-row__arrow" aria-hidden="true">↗</span>
            </a>
            <button type="button" class="btn-remove-saved" data-remove-id="${place.id}" aria-label="Remove ${place.name}">
              DISCARD [—]
            </button>
          </div>
        `).join("");
      }
    }
  }

  document.addEventListener("click", (e) => {
    const removeBtn = e.target.closest(".btn-remove-saved");
    if (removeBtn) {
      const id = removeBtn.getAttribute("data-remove-id");
      if (id) {
        Storage.toggle(id);
        renderSaved();
      }
    }
  });

  renderSaved();
}
