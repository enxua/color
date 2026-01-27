const paletteContainer = document.getElementById('palette');
const generateBtn = document.getElementById('generate-btn');
const toast = document.getElementById('toast');

let colors = [];
const colorCount = 5;

class ColorColumn {
    constructor(hex = generateRandomHex()) {
        this.hex = hex;
        this.locked = false;
        this.element = this.createLayout();
        this.updateStyles();
    }

    createLayout() {
        const col = document.createElement('div');
        col.classList.add('color-column');
        
        const hexText = document.createElement('h2');
        hexText.textContent = this.hex;
        
        const lockBtn = document.createElement('button');
        lockBtn.innerHTML = this.getLockIcon();
        
        col.appendChild(hexText);
        col.appendChild(lockBtn);
        
        // Copy to clipboard on click column
        col.onclick = (e) => {
            if (e.target.tagName !== 'BUTTON' && e.target.parentElement.tagName !== 'BUTTON') {
                this.copyToClipboard();
            }
        };

        // Toggle lock
        lockBtn.onclick = (e) => {
            e.stopPropagation();
            this.toggleLock();
        };

        return col;
    }

    getLockIcon() {
        return this.locked 
            ? '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>'
            : '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path></svg>';
    }

    toggleLock() {
        this.locked = !this.locked;
        this.element.querySelector('button').innerHTML = this.getLockIcon();
    }

    updateHex(newHex) {
        if (this.locked) return;
        this.hex = newHex;
        this.element.querySelector('h2').textContent = this.hex;
        this.updateStyles();
    }

    updateStyles() {
        this.element.style.backgroundColor = this.hex;
        const isDark = isColorDark(this.hex);
        this.element.style.color = isDark ? 'white' : 'black';
    }

    copyToClipboard() {
        navigator.clipboard.writeText(this.hex).then(() => {
            showToast(`Copied ${this.hex}!`);
        });
    }
}

function generateRandomHex() {
    const chars = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += chars[Math.floor(Math.random() * 16)];
    }
    return color;
}

function isColorDark(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance < 0.5;
}

function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2000);
}

function init() {
    for (let i = 0; i < colorCount; i++) {
        const col = new ColorColumn();
        colors.push(col);
        paletteContainer.appendChild(col.element);
    }
}

function generateNewPalette() {
    colors.forEach(col => col.updateHex(generateRandomHex()));
}

// Event Listeners
generateBtn.onclick = generateNewPalette;

window.onkeydown = (e) => {
    if (e.code === 'Space') {
        generateNewPalette();
    }
};

init();
