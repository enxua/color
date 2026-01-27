// DOM Elements
const colorPicker = document.getElementById('color-picker');
const hexInput = document.getElementById('hex-input');
const copyBaseBtn = document.getElementById('copy-base-btn');
const grid = document.getElementById('grid');
const toast = document.getElementById('toast');
const themeToggleBtn = document.getElementById('theme-toggle');

// Icons
const moonIcon = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
const sunIcon = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>';

// Initialize
initTheme();
updateUI(colorPicker.value);

// Event Listeners
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

copyBaseBtn.addEventListener('click', () => {
    copyToClipboard(colorPicker.value.toUpperCase());
});

themeToggleBtn.addEventListener('click', () => {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

// Theme Logic
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    let theme = 'light';
    if (savedTheme) {
        theme = savedTheme;
    } else if (prefersDark) {
        theme = 'dark';
    }
    
    document.documentElement.setAttribute('data-theme', theme);
    updateThemeIcon(theme);
}

function updateThemeIcon(theme) {
    themeToggleBtn.innerHTML = theme === 'dark' ? sunIcon : moonIcon;
}

// Core Logic
function updateUI(baseHex) {
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
    
    // Section 1: Base BG, Match Text -> Click copies Match Text
    const topBox = document.createElement('div');
    topBox.className = 'preview-box';
    topBox.style.backgroundColor = baseHex;
    topBox.style.color = matchHex;
    topBox.innerHTML = `
        <span class="preview-text-large">Aa</span>
        <span class="preview-text-small">Click to copy text color</span>
        <div class="hex-tag" style="background: ${matchHex}; color: ${baseHex}">${matchHex.toUpperCase()}</div>
    `;
    topBox.onclick = () => copyToClipboard(matchHex.toUpperCase());

    // Section 2: Match BG, Base Text -> Click copies Match BG
    const bottomBox = document.createElement('div');
    bottomBox.className = 'preview-box';
    bottomBox.style.backgroundColor = matchHex;
    bottomBox.style.color = baseHex;
    bottomBox.innerHTML = `
        <span class="preview-text-large">Aa</span>
        <span class="preview-text-small">Click to copy background color</span>
        <div class="hex-tag" style="background: ${baseHex}; color: ${matchHex}">${matchHex.toUpperCase()}</div>
    `;
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

// Helpers
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
    let cmin = Math.min(r,g,b),
        cmax = Math.max(r,g,b),
        delta = cmax - cmin,
        h = 0,
        s = 0,
        l = 0;

    if (delta == 0)
        h = 0;
    else if (cmax == r)
        h = ((g - b) / delta) % 6;
    else if (cmax == g)
        h = (b - r) / delta + 2;
    else
        h = (r - g) / delta + 4;

    h = Math.round(h * 60);

    if (h < 0)
        h += 360;

    l = (cmax + cmin) / 2;
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    return { h, s, l };
}

function HSLToHex(h, s, l) {
    s /= 100;
    l /= 100;

    let c = (1 - Math.abs(2 * l - 1)) * s,
        x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
        m = l - c / 2,
        r = 0,
        g = 0,
        b = 0;

    if (0 <= h && h < 60) {
        r = c; g = x; b = 0;
    } else if (60 <= h && h < 120) {
        r = x; g = c; b = 0;
    } else if (120 <= h && h < 180) {
        r = 0; g = c; b = x;
    } else if (180 <= h && h < 240) {
        r = 0; g = x; b = c;
    } else if (240 <= h && h < 300) {
        r = x; g = 0; b = c;
    } else if (300 <= h && h < 360) {
        r = c; g = 0; b = x;
    }

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
    
    try {
        await navigator.clipboard.writeText(text);
        showToast(`Copied ${text}`);
    } catch (err) {
        console.warn('Clipboard API failed, trying fallback...', err);
        fallbackCopyTextToClipboard(text);
    }
}

function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    
    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        const successful = document.execCommand('copy');
        if (successful) {
            showToast(`Copied ${text}`);
        } else {
            console.error('Fallback copy failed.');
            showToast('Press Ctrl+C to copy');
        }
    } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
        showToast('Press Ctrl+C to copy');
    }

    document.body.removeChild(textArea);
}

function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}
