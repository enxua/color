// DOM Elements
const colorPicker = document.getElementById('color-picker');
const hexInput = document.getElementById('hex-input');
const grid = document.getElementById('grid');
const toast = document.getElementById('toast');

// Initialize
updateUI(colorPicker.value);

// Event Listeners
colorPicker.addEventListener('input', (e) => {
    hexInput.value = e.target.value.toUpperCase();
    updateUI(e.target.value);
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

// Core Logic
function updateUI(baseHex) {
    grid.innerHTML = '';
    const harmonies = generateHarmonies(baseHex);
    
    harmonies.forEach(color => {
        const card = createCard(baseHex, color);
        grid.appendChild(card);
    });
}

function createCard(baseHex, matchHex) {
    const card = document.createElement('div');
    card.className = 'color-card';
    
    card.innerHTML = `
        <div class="card-preview">
            <div class="color-half" style="background-color: ${baseHex}" title="Click to copy ${baseHex}" data-color="${baseHex}"></div>
            <div class="color-half" style="background-color: ${matchHex}" title="Click to copy ${matchHex}" data-color="${matchHex}"></div>
        </div>
        <div class="card-info">
            <span class="hex-code">${baseHex.toUpperCase()}</span>
            <span class="copy-hint">Click color to copy</span>
            <span class="hex-code">${matchHex.toUpperCase()}</span>
        </div>
    `;

    // Click event delegation
    card.addEventListener('click', (e) => {
        const target = e.target;
        if (target.classList.contains('color-half')) {
            const color = target.getAttribute('data-color');
            copyToClipboard(color);
        } else {
            // If clicked elsewhere on card, copy the match color by default or just flash visual
            // Let's copy the match color for convenience if card body is clicked
            copyToClipboard(matchHex);
        }
    });

    return card;
}

function generateHarmonies(hex) {
    const hsl = hexToHSL(hex);
    const results = [];

    // 1. Complementary (Standard)
    results.push(HSLToHex((hsl.h + 180) % 360, hsl.s, hsl.l));

    // 2. Split Complementary 1
    results.push(HSLToHex((hsl.h + 150) % 360, hsl.s, hsl.l));
    
    // 3. Split Complementary 2
    results.push(HSLToHex((hsl.h + 210) % 360, hsl.s, hsl.l));

    // 4. Analogous 1
    results.push(HSLToHex((hsl.h + 30) % 360, hsl.s, hsl.l));

    // 5. Analogous 2
    results.push(HSLToHex((hsl.h - 30 + 360) % 360, hsl.s, hsl.l));

    // 6. Triadic 1
    results.push(HSLToHex((hsl.h + 120) % 360, hsl.s, hsl.l));

    // 7. Triadic 2
    results.push(HSLToHex((hsl.h + 240) % 360, hsl.s, hsl.l));

    // 8. Monochromatic Light
    results.push(HSLToHex(hsl.h, hsl.s, Math.min(hsl.l + 30, 95)));

    // 9. Monochromatic Dark
    results.push(HSLToHex(hsl.h, hsl.s, Math.max(hsl.l - 30, 10)));
    
    // 10. Square 1
    results.push(HSLToHex((hsl.h + 90) % 360, hsl.s, hsl.l));

     // 11. High Contrast
    results.push(hsl.l > 50 ? '#000000' : '#FFFFFF');
    
    // 12. Saturation Shift
    results.push(HSLToHex(hsl.h, Math.max(hsl.s - 30, 0), hsl.l));

    return results;
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

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast(`Copied ${text}`);
    });
}

function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}