/* ==========================================================================
   Frank Hung Portfolio JavaScript
   ========================================================================== */

// Items mapping local files
const projects = [
  // 1. OEM 商品包裝設計
  {
    title: "污漬清潔劑",
    category: "packaging",
    type: "image",
    src: "./works/OEM 商品包裝設計/OEM污漬清潔劑.jpg",
    description: "強調功能文字與俐落的品牌識別，突破市售清潔劑冰冷化工感，提升居家的日常美學。",
  },
  {
    title: "吸油面紙吊卡",
    category: "packaging",
    type: "image",
    src: "./works/OEM 商品包裝設計/吸油面紙吊卡包裝.jpg",
    description: "紙質吊卡設計，掛架陳列顯得清新且引人注目。",
  },
  {
    title: "日本進口浴巾",
    category: "packaging",
    type: "image",
    src: "./works/OEM 商品包裝設計/日本進口浴巾包裝-實體合成.jpg",
    description: "日系風格霧面包裝袋設計，搭配柔和的浴巾色彩代表千變萬化的四季景色。",
  },
  {
    title: "下水道去污棒",
    category: "packaging",
    type: "image",
    src: "./works/OEM 商品包裝設計/水道去污棒.jpg",
    description: "出口清潔去污棒外盒包裝貼紙設計。",
  },
  {
    title: "純棉浴巾包裝",
    category: "packaging",
    type: "image",
    src: "./works/OEM 商品包裝設計/純棉浴巾包裝.jpg",
    description: "密封防塵包裝袋，正面採用局部透明處理，兼顧賣場陳列保護與視覺質感。",
  },
  {
    title: "進口洗碗精瓶身",
    category: "packaging",
    type: "image",
    src: "./works/OEM 商品包裝設計/進口洗碗精包裝.jpg",
    description: "強調清潔力表現的瓶身貼紙設計。",
  },
  {
    title: "進口消臭劑包裝",
    category: "packaging",
    type: "image",
    src: "./works/OEM 商品包裝設計/進口消臭劑.jpg",
    description: "室內消臭劑彩盒設計，著重消臭分子的幾何插圖與清爽色調。",
  },
  {
    title: "馬桶水溶清潔塊",
    category: "packaging",
    type: "image",
    src: "./works/OEM 商品包裝設計/馬桶水溶清潔塊-單色.jpg",
    description:
      "針對量販通路的單色簡約印刷包裝設計，控制製版成本之餘，仍維持版面視覺的均衡美感與資訊可讀性。",
  },
  {
    title: "馬桶水溶清潔塊彩盒版",
    category: "packaging",
    type: "image",
    src: "./works/OEM 商品包裝設計/馬桶水溶清潔塊.jpg",
    description: "運用鮮明的色彩區分不同的配方功能，配合大面積主體特寫，提升賣場與電商縮圖辨識度。",
  },

  // 2. 商品文宣長圖
  {
    title: "OEM 污漬清潔劑",
    category: "promo",
    type: "image",
    src: "./works/商品文宣長圖/OEM污漬清潔劑-1.jpg",
    description: "聚焦產品痛點，利用大字重排與實際使用圖引導消費者。",
  },
  {
    title: "OEM 污漬清潔劑",
    category: "promo",
    type: "image",
    src: "./works/商品文宣長圖/OEM污漬清潔劑-2.jpg",
    description:
      "展示使用前後對比、安全檢測報告與使用方法說明，以清晰的格狀版面呈現，在手機裝置上也容易閱讀。",
  },
  {
    title: "進口純棉浴巾",
    category: "promo",
    type: "image",
    src: "./works/商品文宣長圖/OEM進口純棉浴巾.jpg",
    description: "以居家溫暖情境作為主軸，搭配大量文字留白，烘托出生活舒適與高級感。",
  },
  {
    title: "移動式收納櫃",
    category: "promo",
    type: "image",
    src: "./works/商品文宣長圖/家具-移動式收納櫃.jpg",
    description: "運用簡約的圖解與資訊標示，清晰傳達層架配置、承重與使用便利性，讓消費者無距離感。",
  },
  {
    title: "轉角木製書桌",
    category: "promo",
    type: "image",
    src: "./works/商品文宣長圖/家具-轉角木製書桌.jpg",
    description:
      "實木轉角書桌之情境文宣，著重書桌於現代居家角落的空間利用，以溫暖的光影合成攝影照吸引受眾。",
  },
  {
    title: "工學舒適記憶枕",
    category: "promo",
    type: "image",
    src: "./works/商品文宣長圖/工學舒適記憶枕.jpg",
    description: "戶外實拍商品行銷素材。",
  },
  {
    title: "污漬清潔劑",
    category: "promo",
    type: "image",
    src: "./works/商品文宣長圖/污漬清潔劑.jpg",
    description: "一頁式銷售文宣，強調多場景應用，建立緊湊流暢的敘事提升消費者購買慾望",
  },
  {
    title: "版位行銷推廣圖",
    category: "promo",
    type: "image",
    src: "./works/商品文宣長圖/版位行銷圖-1.jpg",
    description: "大型促銷檔期首頁入口橫幅，以鮮明且大型銷售實績字眼在極短時間內抓住眼球。",
  },
  {
    title: "版位行銷推廣圖",
    category: "promo",
    type: "image",
    src: "./works/商品文宣長圖/版位行銷圖-2.jpg",
    description: "將販賣實績成果加入行銷圖中，強化產品競爭力與市場價值。",
  },
  {
    title: "省水拖把組合",
    category: "promo",
    type: "image",
    src: "./works/商品文宣長圖/省水拖把組合.jpg",
    description: "詳細展示產品賣點及實拍產品效果實驗。",
  },
  {
    title: "簡約型居家修繕鋁梯",
    category: "promo",
    type: "image",
    src: "./works/商品文宣長圖/簡約型居家修繕鋁梯.jpg",
    description: "著重安全係數、加寬踏板與底座止滑膠墊設計，以沈穩的配色強調產品的耐用與安全。",
  },
  {
    title: "耐熱廚房器具",
    category: "promo",
    type: "image",
    src: "./works/商品文宣長圖/耐熱廚房器具.jpg",
    description: "背景使用大理石與木質元素合成，突顯餐具的北歐美感。",
  },
  {
    title: "進口美妝護膚品",
    category: "promo",
    type: "image",
    src: "./works/商品文宣長圖/進口化妝品.jpg",
    description: "運用玻璃折射與水波光影合成，打造清透、補水的奢華感。",
  },
  {
    title: "進口濃縮洗衣球",
    category: "promo",
    type: "image",
    src: "./works/商品文宣長圖/進口洗衣球-1.jpg",
    description: "以淡雅的色調呈現洗衣球溫和潔淨特徵。",
  },
  {
    title: "照明吸頂燈",
    category: "promo",
    type: "image",
    src: "./works/商品文宣長圖/進口照明吸頂燈.jpg",
    description: "以情境展示客廳、臥室、書房在不同色溫下的氛圍差異。",
  },

  // 3. 商品行銷影片 (video)
  {
    title: "日本純棉毛巾形象",
    category: "video",
    type: "video",
    src: "./works/商品行銷影片/OEM日本毛巾.mp4",
    youtubeId: "V4RUsfqG6Ns", // 填入 YouTube 影片 ID
    description: "形象短片製作，比對競品強化自家產品優勢。",
  },
  {
    title: "淨垢去汙噴霧",
    category: "video",
    type: "video",
    src: "./works/商品行銷影片/OEM淨垢噴霧-1.mp4",
    youtubeId: "Hs9cR58UKco",
    description: "縮時拍攝噴霧瓦解厚重油汙的過程，強調清潔效果的真實性。",
  },
  {
    title: "北歐風卡扣式地板",
    category: "video",
    type: "video",
    src: "./works/商品行銷影片/北歐風卡扣地板.mp4",
    youtubeId: "nYk-SH61pus",
    description:
      "主打免膠、免釘、一扣即合的快速安裝，影片以素人第一人稱視角切入，強調 DIY 的輕鬆感。",
  },
  {
    title: "可微波耐熱玻璃餐盒",
    category: "video",
    type: "video",
    src: "./works/商品行銷影片/可微波玻璃餐盒.mp4",
    youtubeId: "RRqqS7AB7w4",
    description: "拍攝豐富的美食容器情境，並重點測試耐熱及防漏特性。",
  },
  {
    title: "移動式摺疊收納架",
    category: "video",
    type: "video",
    src: "./works/商品行銷影片/可折疊移動式收納架.mp4",
    youtubeId: "kWWvRK08RkE",
    description: "配合產品快速易用的特性進行快節奏剪輯。",
  },
  {
    title: "防潮密封收納罐",
    category: "video",
    type: "video",
    src: "./works/商品行銷影片/密封收納罐.mp4",
    youtubeId: "U6VS0weAnkc",
    description: "電商行銷短片。",
  },
  {
    title: "耐熱矽膠摺疊碗",
    category: "video",
    type: "video",
    src: "./works/商品行銷影片/耐熱矽膠摺疊碗.mp4",
    youtubeId: "TqGi6UjIk_Y",
    description: "影片展示摺疊前後的易攜帶性，並模擬放入隨身包包的輕巧感。",
  },

  // 4. 電商首頁商品主圖
  {
    title: "HDMI 影音傳輸線",
    category: "banner",
    type: "image",
    src: "./works/電商首頁商品主圖/HDMI影音傳輸線.jpg",
    description: "",
  },
  {
    title: "溫和卸妝慕斯",
    category: "banner",
    type: "image",
    src: "./works/電商首頁商品主圖/卸妝慕斯.jpg",
    description: "",
  },
  {
    title: "寵物營養食品",
    category: "banner",
    type: "image",
    src: "./works/電商首頁商品主圖/寵物營養食品.jpg",
    description: "",
  },
  {
    title: "排水孔清潔錠",
    category: "banner",
    type: "image",
    src: "./works/電商首頁商品主圖/排水孔清潔錠.jpg",
    description: "",
  },
  {
    title: "收納家具角鋼架",
    category: "banner",
    type: "image",
    src: "./works/電商首頁商品主圖/收納家具角鋼架.jpg",
    description: "",
  },
  {
    title: "超強效水管清潔凝膠",
    category: "banner",
    type: "image",
    src: "./works/電商首頁商品主圖/水管清潔凝膠.jpg",
    description: "",
  },
  {
    title: "溫和植萃沐浴乳補充包",
    category: "banner",
    type: "image",
    src: "./works/電商首頁商品主圖/沐浴乳補充包.jpg",
    description: "",
  },
  {
    title: "雙效洗衣槽清潔劑",
    category: "banner",
    type: "image",
    src: "./works/電商首頁商品主圖/洗衣槽清潔劑.jpg",
    description: "",
  },
  {
    title: "衣櫃消臭防霉盒",
    category: "banner",
    type: "image",
    src: "./works/電商首頁商品主圖/消臭防霉盒.jpg",
    description: "",
  },
  {
    title: "全口電動牙刷",
    category: "banner",
    type: "image",
    src: "./works/電商首頁商品主圖/進口全口電動牙刷.jpg",
    description: "",
  },
  {
    title: "進口化妝品",
    category: "banner",
    type: "image",
    src: "./works/電商首頁商品主圖/進口化妝品1.jpg",
    description: "",
  },
  {
    title: "進口化妝品",
    category: "banner",
    type: "image",
    src: "./works/電商首頁商品主圖/進口化妝品2.jpg",
    description: "",
  },
  {
    title: "長效暖暖包",
    category: "banner",
    type: "image",
    src: "./works/電商首頁商品主圖/進口暖暖包.jpg",
    description: "",
  },
];

// Document Ready
document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

// App Initialization
function initApp() {
  // 1. Render Portfolio Grid
  renderPortfolio(projects);

  // 2. Setup Category Filters
  setupFilters();

  // 3. Setup Scroll Reveal Elements
  setupScrollReveal();

  // 4. Setup Interactive Career Timeline
  setupTimeline();

  // 5. Setup Navigation behavior
  setupNavbar();

  // 6. Setup Lightbox Trigger Event
  setupLightbox();
}

/* ==========================================================================
   Navigation Bar Interaction
   ========================================================================== */
function setupNavbar() {
  const navbar = document.getElementById("navbar");
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  const navItems = document.querySelectorAll(".nav-item");

  // Scroll styling
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Mobile menu toggle
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  // Close mobile menu when clicking nav items
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      menuToggle.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });
}

/* ==========================================================================
   Portfolio Rendering & Filtering
   ========================================================================== */
function renderPortfolio(items) {
  const grid = document.getElementById("portfolio-grid");
  grid.innerHTML = "";

  if (items.length === 0) {
    grid.innerHTML = `<div class="no-results">無相符的作品</div>`;
    return;
  }

  items.forEach((proj, idx) => {
    // Create card container
    const card = document.createElement("div");
    card.className = `portfolio-card reveal-element`;
    card.setAttribute("data-category", proj.category);
    card.setAttribute("data-id", idx);

    // Determine badge / icon overlay for media types
    let badgeHTML = "";
    if (proj.type === "video" || proj.youtubeId) {
      badgeHTML = `
                <div class="card-media-badge" title="影音作品">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                </div>
            `;
    }

    // Render card inner content
    let thumbnailSrc = proj.src;

    if (proj.youtubeId) {
      thumbnailSrc = `https://img.youtube.com/vi/${proj.youtubeId}/hqdefault.jpg`;
    }

    card.innerHTML = `
            <div class="card-image-wrapper">
                <img src="${thumbnailSrc}" alt="${proj.title}" class="card-image" loading="lazy">
                <div class="card-overlay"></div>
                ${badgeHTML}
            </div>
            <div class="card-info">
                <div class="card-category">${getCategoryName(proj.category)}</div>
                <h3 class="card-title">${proj.title}</h3>
                <p class="card-desc-snippet">${proj.description.substring(0, 45)}...</p>
            </div>
        `;

    grid.appendChild(card);

    // Add event listener to open Lightbox
    card.addEventListener("click", () => {
      openLightbox(proj);
    });

    // Trigger reveal opacity
    setTimeout(() => {
      card.classList.add("loaded", "active");
    }, idx * 40); // Staggered entry animation
  });
}

// Convert category key to Chinese label
function getCategoryName(category) {
  const categoryMap = {
    packaging: "包裝設計",
    promo: "產品行銷圖",
    banner: "電商主圖",
    video: "影片拍攝剪輯",
  };

  // 若找不到對應鍵，則回傳預設值
  return categoryMap[category] || "設計作品";
}

// Filter Action
function setupFilters() {
  const buttons = document.querySelectorAll(".filter-btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      // Remove active class from all buttons
      buttons.forEach((b) => b.classList.remove("active"));
      // Add active class to clicked button
      btn.classList.add("active");

      const filterValue = btn.getAttribute("data-filter");

      // Staggered exit animation before filtering
      const cards = document.querySelectorAll(".portfolio-card");
      cards.forEach((card) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(15px)";
      });

      setTimeout(() => {
        if (filterValue === "all") {
          renderPortfolio(projects);
        } else {
          const filtered = projects.filter((p) => p.category === filterValue);
          renderPortfolio(filtered);
        }
      }, 300); // Wait for transition
    });
  });
}

/* ==========================================================================
   Interactive Experience Timeline (Accordion-Style)
   ========================================================================== */
function setupTimeline() {
  const items = document.querySelectorAll(".timeline-item");

  // Default activate the first item
  if (items.length > 0) {
    items[0].classList.add("active");
  }

  items.forEach((item) => {
    item.addEventListener("click", () => {
      // If already active, just collapse it
      if (item.classList.contains("active")) {
        item.classList.remove("active");
        return;
      }

      // Collapse all other timeline items
      items.forEach((other) => {
        other.classList.remove("active");
      });

      // Expand clicked item
      item.classList.add("active");
    });
  });
}

/* ==========================================================================
   Scroll Reveal Animations
   ========================================================================== */
function setupScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal-element");

  const observerOptions = {
    root: null, // viewport
    threshold: 0.1, // 10% of element visible
    rootMargin: "0px 0px -50px 0px", // trigger slightly before entering screen fully
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); // Trigger only once
      }
    });
  }, observerOptions);

  revealElements.forEach((el) => {
    observer.observe(el);
  });
}

/* ==========================================================================
   Lightbox Overlay Trigger & Video/YouTube Controller
   ========================================================================== */
const lightbox = document.getElementById("lightbox");
const lightboxMedia = document.getElementById("lightbox-media-container");
const lightboxTitle = document.getElementById("lightbox-title");
const lightboxDesc = document.getElementById("lightbox-description");
const lightboxClose = document.getElementById("lightbox-close");

function setupLightbox() {
  // Close button click
  lightboxClose.addEventListener("click", closeLightbox);

  // Click outside media area to close
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox || e.target.classList.contains("lightbox-content")) {
      closeLightbox();
    }
  });

  // Keyboard press Escape to close
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.classList.contains("active")) {
      closeLightbox();
    }
  });
}

function openLightbox(proj) {
  // Reset contents
  lightboxMedia.innerHTML = "";
  lightboxMedia.className = "lightbox-media-container"; // reset classes
  lightboxTitle.textContent = proj.title;
  lightboxDesc.textContent = proj.description;

  // Load media type
  if (proj.youtubeId) {
    // YouTube embed mode
    lightboxMedia.innerHTML = `
            <div class="lightbox-iframe-wrapper">    
                <iframe width="560" height="315" 
                src="https://www.youtube.com/embed/${proj.youtubeId}?autoplay=1&mute=1" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        `;
  } else if (proj.type === "video") {
    // Local MP4 video mode
    lightboxMedia.innerHTML = `
            <video controls autoplay playsinline>
                <source src="${proj.src}" type="video/mp4">
                您的瀏覽器不支援 HTML5 影片播放。
            </video>
        `;
  } else {
    // Image mode
    const img = document.createElement("img");
    img.src = proj.src;
    img.alt = proj.title;

    // Custom treatment for long promotional infographics (category: promo)
    if (proj.category === "promo") {
      lightboxMedia.classList.add("scrollable-image");
    }

    lightboxMedia.appendChild(img);
  }

  // Activate lightbox overlay in DOM
  lightbox.classList.add("active");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden"; // Prevent background body scroll
}

function closeLightbox() {
  // Remove active class
  lightbox.classList.remove("active");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = ""; // Restore background body scroll

  // Destroy media elements to halt video play/audio stream instantly
  setTimeout(() => {
    lightboxMedia.innerHTML = "";
  }, 500); // Matches transition duration
}
