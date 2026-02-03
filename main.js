// Translations
const translations = {
    "en": {
        title: "Find Matching Colors",
        navHome: "Make Color",
        navBrowse: "Default Color",
        browseTitle: "Browse Color Palettes",
        browseSubtitle: "Discover beautiful color combinations",
        subtitle: "Pick a base color to see beautiful combinations",
        goodContrast: "Good Contrast",
        reverseColors: "Reverse Colors",
        clickToCopyText: "Click to copy text color",
        clickToCopyBg: "Click to copy background color",
        copied: "Copied",
        understandingHarmoniesTitle: "Understanding Color Harmonies",
        understandingHarmoniesDesc: "Color harmony is the theory of combining colors in a fashion that is harmonious to the eye. In other words, what shapes come together to produce a pleasing effect? Here are the primary color harmonies used in this tool:",
        complementaryTitle: "Complementary",
        complementaryDesc: "Colors that are opposite each other on the color wheel are considered to be complementary colors (example: red and green). The high contrast of complementary colors creates a vibrant look especially when used at full saturation.",
        analogousTitle: "Analogous",
        analogousDesc: "Analogous color schemes use colors that are next to each other on the color wheel. They usually match well and create serene and comfortable designs. Analogous color schemes are often found in nature and are harmonious and pleasing to the eye.",
        triadicTitle: "Triadic",
        triadicDesc: "A triadic color scheme uses colors that are evenly spaced around the color wheel. Triadic color harmonies tend to be quite vibrant, even if you use pale or unsaturated versions of your hues.",
        monochromaticTitle: "Monochromatic",
        monochromaticDesc: "Monochromatic color schemes are derived from a single base hue and extended using its shades, tones, and tints. Tints are achieved by adding white and shades and tones are achieved by adding a darker color, gray or black.",
        howToUseTitle: "How to Use Color Matcher",
        howToUseDesc: "Using our tool is simple and intuitive. Just follow these steps to find your perfect palette:",
        step1Title: "Select a Base Color:",
        step1Desc: "Click on the color input box to open the color picker, or type a Hex code directly if you have a specific color in mind.",
        step2Title: "Explore Combinations:",
        step2Desc: "The tool automatically generates various harmonies based on your selection.",
        step3Title: "Copy to Clipboard:",
        step3Desc: "Click on any color card to copy its Hex code instantly. You can then paste it into your design software (Photoshop, Figma, CSS, etc.).",
        step4Title: "Switch Themes:",
        step4Desc: "Use the sun/moon icon in the top right corner to check how your colors look in both light and dark modes.",
        faqTitle: "Frequently Asked Questions (FAQ)",
        faq1Q: "What is a color palette generator?",
        faq1A: "A color palette generator is a tool that helps designers and artists find colors that work well together. Color Matcher allows you to input a base color and automatically generates complementary, analogous, triadic, and monochromatic color schemes.",
        faq2Q: "How do I find complementary colors?",
        faq2A: "Complementary colors are opposite each other on the color wheel. You can find them easily using Color Matcher by selecting your base color; the tool will instantly display the complementary color alongside other harmonious combinations.",
        faq3Q: "Is Color Matcher free to use?",
        faq3A: "Yes, Color Matcher is a completely free online tool for generating color palettes for your web design, graphic design, and art projects.",
        faq4Q: "Can I use these color palettes for commercial projects?",
        faq4A: "Absolutely! The color codes generated (Hex, RGB, etc.) are universal and can be used in any personal or commercial project without restriction.",
        privacyPolicy: "Privacy Policy",
        termsOfService: "Terms of Service"
    },
    "ko": {
        title: "어울리는 색상 찾기",
        navHome: "색상 만들기",
        navBrowse: "추천 색상",
        browseTitle: "색상 팔레트 둘러보기",
        browseSubtitle: "아름다운 색상 조합을 발견하세요",
        subtitle: "기준 색상을 선택하여 아름다운 조합을 확인하세요",
        goodContrast: "좋은 대비",
        reverseColors: "색상 반전",
        clickToCopyText: "텍스트 색상을 복사하려면 클릭",
        clickToCopyBg: "배경 색상을 복사하려면 클릭",
        copied: "복사됨",
        understandingHarmoniesTitle: "색상 조화의 이해",
        understandingHarmoniesDesc: "색상 조화는 눈에 조화로운 방식으로 색상을 결합하는 이론입니다. 즉, 어떤 형태들이 모여 즐거운 효과를 만들어낼까요? 이 도구에서 사용되는 주요 색상 조화는 다음과 같습니다:",
        complementaryTitle: "보색 (Complementary)",
        complementaryDesc: "색상환에서 서로 마주 보고 있는 색상을 보색이라고 합니다(예: 빨간색과 초록색). 보색의 높은 대비는 특히 채도를 높여 사용할 때 생동감 넘치는 모습을 만듭니다.",
        analogousTitle: "유사색 (Analogous)",
        analogousDesc: "유사 색상 배합은 색상환에서 서로 옆에 있는 색상을 사용합니다. 이들은 보통 잘 어울리며 차분하고 편안한 디자인을 만듭니다. 유사 색상 배합은 자연에서 자주 발견되며 눈에 조화롭고 즐겁습니다.",
        triadicTitle: "삼각 조화 (Triadic)",
        triadicDesc: "삼각 색상 배합은 색상환 주위에 균등하게 배치된 색상을 사용합니다. 삼각 색상 조화는 색조의 옅거나 채도가 낮은 버전을 사용하더라도 꽤 생동감 있는 경향이 있습니다.",
        monochromaticTitle: "단색 (Monochromatic)",
        monochromaticDesc: "단색 색상 배합은 단일 기본 색조에서 파생되며 그늘(shades), 톤(tones), 틴트(tints)를 사용하여 확장됩니다. 틴트는 흰색을 더하여 얻고, 그늘과 톤은 더 어두운 색, 회색 또는 검은색을 더하여 얻습니다.",
        howToUseTitle: "Color Matcher 사용법",
        howToUseDesc: "도구 사용법은 간단하고 직관적입니다. 완벽한 팔레트를 찾으려면 다음 단계를 따르세요:",
        step1Title: "기준 색상 선택:",
        step1Desc: "색상 입력 상자를 클릭하여 색상 선택기를 열거나, 특정 색상을 염두에 두고 있다면 Hex 코드를 직접 입력하세요.",
        step2Title: "조합 탐색:",
        step2Desc: "이 도구는 선택에 따라 다양한 조화를 자동으로 생성합니다.",
        step3Title: "클립보드에 복사:",
        step3Desc: "색상 카드를 클릭하면 Hex 코드가 즉시 복사됩니다. 그런 다음 디자인 소프트웨어(Photoshop, Figma, CSS 등)에 붙여넣을 수 있습니다.",
        step4Title: "테마 전환:",
        step4Desc: "오른쪽 상단의 해/달 아이콘을 사용하여 밝은 모드와 어두운 모드에서 색상이 어떻게 보이는지 확인하세요.",
        faqTitle: "자주 묻는 질문 (FAQ)",
        faq1Q: "색상 팔레트 생성기란 무엇인가요?",
        faq1A: "색상 팔레트 생성기는 디자이너와 예술가가 잘 어울리는 색상을 찾는 데 도움을 주는 도구입니다. Color Matcher를 사용하면 기준 색상을 입력하고 보색, 유사색, 삼각 조화 및 단색 색상 배합을 자동으로 생성할 수 있습니다.",
        faq2Q: "보색은 어떻게 찾나요?",
        faq2A: "보색은 색상환에서 서로 반대편에 있습니다. Color Matcher를 사용하여 기준 색상을 선택하면 쉽게 찾을 수 있습니다. 도구는 보색을 다른 조화로운 조합과 함께 즉시 표시합니다.",
        faq3Q: "Color Matcher는 무료인가요?",
        faq3A: "네, Color Matcher는 웹 디자인, 그래픽 디자인 및 예술 프로젝트를 위한 색상 팔레트를 생성하는 완전히 무료인 온라인 도구입니다.",
        faq4Q: "이 색상 팔레트를 상업용 프로젝트에 사용할 수 있나요?",
        faq4A: "물론입니다! 생성된 색상 코드(Hex, RGB 등)는 보편적이며 제한 없이 개인 또는 상업용 프로젝트에서 사용할 수 있습니다.",
        privacyPolicy: "개인정보처리방침",
        termsOfService: "서비스 이용약관"
    }
    // Add other languages here if needed...
};

// Embedded Color Data
const PRESET_COLORS = [
    { "bg": "#1A1A1D", "text": "#C3073F" },
    { "bg": "#FFFFFF", "text": "#845EC2" },
    { "bg": "#FFC75F", "text": "#845EC2" },
    { "bg": "#F9F871", "text": "#0081CF" },
    { "bg": "#00C9A7", "text": "#4D8076" },
    { "bg": "#D65DB1", "text": "#FF6F91" },
    { "bg": "#FF9671", "text": "#845EC2" },
    { "bg": "#2C3E50", "text": "#E74C3C" },
    { "bg": "#ECF0F1", "text": "#2C3E50" },
    { "bg": "#3498DB", "text": "#F1C40F" },
    { "bg": "#8E44AD", "text": "#F39C12" },
    { "bg": "#2ECC71", "text": "#BE2EDD" },
    { "bg": "#16A085", "text": "#F39C12" },
    { "bg": "#27AE60", "text": "#C0392B" },
    { "bg": "#2980B9", "text": "#8E44AD" },
    { "bg": "#F1C40F", "text": "#16A085" },
    { "bg": "#E67E22", "text": "#2980B9" },
    { "bg": "#E74C3C", "text": "#2C3E50" },
    { "bg": "#ECF0F1", "text": "#BDC3C7" },
    { "bg": "#95A5A6", "text": "#2C3E50" },
    { "bg": "#34495E", "text": "#E67E22" },
    { "bg": "#1ABC9C", "text": "#9B59B6" },
    { "bg": "#000000", "text": "#F1C40F" },
    { "bg": "#191919", "text": "#ED4C67" },
    { "bg": "#12CBC4", "text": "#0652DD" },
    { "bg": "#FDA7DF", "text": "#9980FA" },
    { "bg": "#D980FA", "text": "#5758BB" },
    { "bg": "#B53471", "text": "#833471" },
    { "bg": "#6F1E51", "text": "#FEA47F" },
    { "bg": "#25CCF7", "text": "#EAB543" }
];

let currentLang = "en";

// Icons
const moonIcon = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
const sunIcon = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>';

// Toast
const toast = document.getElementById('toast');

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLanguage();
    
    // Page-specific Logic
    const browseGrid = document.getElementById('browse-grid');
    const colorPicker = document.getElementById('color-picker');
    const hexInput = document.getElementById('hex-input');
    const copyBaseBtn = document.getElementById('copy-base-btn');
    
    // 1. Browse Page
    if (browseGrid) {
        renderBrowseGrid(PRESET_COLORS);
    }
    
    // 2. Matching Page
    if (colorPicker && hexInput) {
        // Initialize with default or URL param
        const urlParams = new URLSearchParams(window.location.search);
        const colorParam = urlParams.get('color');
        let initialColor = colorPicker.value;

        if (colorParam) {
            let hex = '#' + colorParam.replace('#', '');
            if (/^#[0-9A-F]{6}$/i.test(hex)) {
                initialColor = hex;
            }
        }
        
        colorPicker.value = initialColor;
        hexInput.value = initialColor.toUpperCase();
        updateUI(initialColor); // Generate harmonies

        // Event Listeners for Matching Page
        colorPicker.addEventListener('input', (e) => {
            const val = e.target.value.toUpperCase();
            hexInput.value = val;
            updateUI(val);
        });

        hexInput.addEventListener('input', (e) => {
            let hex = e.target.value;
            if (!hex.startsWith('#')) {
                hex = '#' + hex;
            }
            if (/^#[0-9A-F]{6}$/i.test(hex)) {
                colorPicker.value = hex;
                updateUI(hex);
            }
        });

        if (copyBaseBtn) {
            copyBaseBtn.addEventListener('click', () => {
                copyToClipboard(colorPicker.value.toUpperCase());
            });
        }
    }
});

// --- Theme & Language ---
function initTheme() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (!themeToggleBtn) return;

    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    let theme = savedTheme || (prefersDark ? 'dark' : 'light');
    
    document.documentElement.setAttribute('data-theme', theme);
    themeToggleBtn.innerHTML = theme === 'dark' ? sunIcon : moonIcon;

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        themeToggleBtn.innerHTML = newTheme === 'dark' ? sunIcon : moonIcon;
    });
}

function initLanguage() {
    const langSelect = document.getElementById('lang-select');
    if (!langSelect) return;

    langSelect.addEventListener('change', (e) => {
        currentLang = e.target.value;
        updateLanguage();
        // If on matching page, re-render cards to update tooltips/text
        const colorPicker = document.getElementById('color-picker');
        if (colorPicker) updateUI(colorPicker.value);
    });
}

function updateLanguage() {
    const texts = translations[currentLang] || translations["en"];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (texts[key]) el.textContent = texts[key];
    });
}

// --- Browse Page Logic ---
function renderBrowseGrid(colors) {
    const browseGrid = document.getElementById('browse-grid');
    if (!browseGrid) return;
    
    browseGrid.innerHTML = '';
    colors.forEach(pair => {
        const card = document.createElement('div');
        card.className = 'color-card';
        card.style.cursor = 'pointer';
        
        const preview = document.createElement('div');
        preview.className = 'preview-box';
        preview.style.backgroundColor = pair.bg;
        preview.style.color = pair.text;
        preview.style.minHeight = '200px';
        preview.innerHTML = `
            <span class="preview-text-large">Aa</span>
            <div class="hex-tag" style="background: rgba(0,0,0,0.5); color: #fff; left: 12px; right: auto;">${pair.bg}</div>
            <div class="hex-tag" style="background: rgba(255,255,255,0.8); color: #000;">${pair.text}</div>
        `;
        
        card.onclick = () => {
            const cleanHex = pair.bg.replace('#', '');
            window.location.href = `matching.html?color=${cleanHex}`;
        };
        
        card.appendChild(preview);
        browseGrid.appendChild(card);
    });
}

// --- Matching Page Logic ---
function updateUI(baseHex) {
    const grid = document.getElementById('grid');
    if (!grid) return;

    grid.innerHTML = '';
    const harmonies = generateHarmonies(baseHex);
    
    harmonies.forEach(color => {
        if (color.toUpperCase() !== baseHex.toUpperCase()) {
             const card = createCard(baseHex, color);
             grid.appendChild(card);
        }
    });
}

function createCard(baseHex, matchHex) {
    const card = document.createElement('div');
    card.className = 'color-card';
    const texts = translations[currentLang] || translations["en"];
    
    const topBox = document.createElement('div');
    topBox.className = 'preview-box';
    topBox.style.backgroundColor = baseHex;
    topBox.style.color = matchHex;
    topBox.innerHTML = `
        <span class="preview-text-large">Aa</span>
        <span class="preview-text-small">${texts.goodContrast}</span>
        <div class="hex-tag" style="background: ${matchHex}; color: ${baseHex}">${matchHex.toUpperCase()}</div>
    `;
    topBox.title = texts.clickToCopyText;
    topBox.onclick = () => copyToClipboard(matchHex.toUpperCase());

    const bottomBox = document.createElement('div');
    bottomBox.className = 'preview-box';
    bottomBox.style.backgroundColor = matchHex;
    bottomBox.style.color = baseHex;
    bottomBox.innerHTML = `
        <span class="preview-text-large">Aa</span>
        <span class="preview-text-small">${texts.reverseColors}</span>
        <div class="hex-tag" style="background: ${baseHex}; color: ${matchHex}">${matchHex.toUpperCase()}</div>
    `;
    bottomBox.title = texts.clickToCopyBg;
    bottomBox.onclick = () => copyToClipboard(matchHex.toUpperCase());

    card.appendChild(topBox);
    card.appendChild(bottomBox);

    return card;
}

function generateHarmonies(hex) {
    const hsl = hexToHSL(hex);
    const results = new Set(); 
    const add = (h, s, l) => results.add(HSLToHex(h, s, l).toUpperCase());

    add((hsl.h + 180) % 360, hsl.s, hsl.l); 
    results.add(hsl.l > 50 ? '#000000' : '#FFFFFF'); 
    add((hsl.h + 30) % 360, hsl.s, hsl.l); 
    add((hsl.h - 30 + 360) % 360, hsl.s, hsl.l);
    add((hsl.h + 120) % 360, hsl.s, hsl.l); 
    add((hsl.h + 240) % 360, hsl.s, hsl.l);
    add((hsl.h + 150) % 360, hsl.s, hsl.l); 
    add((hsl.h + 210) % 360, hsl.s, hsl.l);
    add(hsl.h, hsl.s, Math.min(hsl.l + 40, 95)); 
    add(hsl.h, hsl.s, Math.max(hsl.l - 40, 10)); 
    add((hsl.h + 90) % 360, hsl.s, hsl.l); 
    add(hsl.h, Math.max(hsl.s - 40, 5), hsl.l); 

    return Array.from(results);
}

function hexToHSL(H) {
    let r = 0, g = 0, b = 0;
    if (H.length == 4) {
        r = "0x" + H[1] + H[1];
        g = "0x" + H[2] + H[2];
        b = "0x" + H[3] + H[3];
    } else if (H.length == 7) {
        r = "0x" + H[1] + H[2];
        g = "0x" + H[3] + H[4];
        b = "0x" + H[5] + H[6];
    }
    r /= 255;
    g /= 255;
    b /= 255;
    let cmin = Math.min(r,g,b), cmax = Math.max(r,g,b), delta = cmax - cmin, h = 0, s = 0, l = 0;

    if (delta == 0) h = 0;
    else if (cmax == r) h = ((g - b) / delta) % 6;
    else if (cmax == g) h = (b - r) / delta + 2;
    else h = (r - g) / delta + 4;

    h = Math.round(h * 60);
    if (h < 0) h += 360;

    l = (cmax + cmin) / 2;
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    return { h, s, l };
}

function HSLToHex(h, s, l) {
    s /= 100; l /= 100;
    let c = (1 - Math.abs(2 * l - 1)) * s, x = c * (1 - Math.abs(((h / 60) % 2) - 1)), m = l - c / 2, r = 0, g = 0, b = 0;

    if (0 <= h && h < 60) { r = c; g = x; b = 0; }
    else if (60 <= h && h < 120) { r = x; g = c; b = 0; }
    else if (120 <= h && h < 180) { r = 0; g = c; b = x; }
    else if (180 <= h && h < 240) { r = 0; g = x; b = c; }
    else if (240 <= h && h < 300) { r = x; g = 0; b = c; }
    else if (300 <= h && h < 360) { r = c; g = 0; b = x; }

    r = Math.round((r + m) * 255).toString(16);
    g = Math.round((g + m) * 255).toString(16);
    b = Math.round((b + m) * 255).toString(16);

    if (r.length == 1) r = "0" + r;
    if (g.length == 1) g = "0" + g;
    if (b.length == 1) b = "0" + b;

    return "#" + r + g + b;
}

async function copyToClipboard(text) {
    if (!text) return;
    const texts = translations[currentLang] || translations["en"];
    
    try {
        await navigator.clipboard.writeText(text);
        showToast(`${texts.copied} ${text}`);
    } catch (err) {
        console.warn('Clipboard API failed, trying fallback...', err);
        fallbackCopyTextToClipboard(text);
    }
}

function fallbackCopyTextToClipboard(text) {
    const texts = translations[currentLang] || translations["en"];
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        const successful = document.execCommand('copy');
        if (successful) showToast(`${texts.copied} ${text}`);
        else showToast('Press Ctrl+C to copy');
    } catch (err) {
        showToast('Press Ctrl+C to copy');
    }
    document.body.removeChild(textArea);
}

function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}