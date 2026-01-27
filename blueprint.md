# Color Matcher Blueprint

## Overview
A tool that helps users find matching colors for a specific base color. Users can input a hex code or pick a color, and the app generates a curated list of harmonious 2-color combinations, visualizing them as text/background pairs.

## Features
- **Base Color Input:** Large, accessible color picker and hex input field.
- **Smart Recommendations:** Generates matching colors based on color theory (Complementary, Analogous, Triadic, Monochromatic, etc.).
- **Typography Preview:** matching colors are displayed as Text on Background to visualize contrast and readability.
- **Dual Preview:** Each card shows both combinations:
    1. Base Color as Background + Match Color as Text
    2. Match Color as Background + Base Color as Text
- **Interactivity:** Click color codes or previews to copy hex values.

## Design & Style
- **Reference:** https://2colors.colorion.co/
- **Layout:** Masonry or Grid layout of combination cards.
- **Card Design:** Split horizontally. Top half shows Base BG, Bottom half shows Match BG. large "Aa" typography.
- **Aesthetics:** Clean, minimal, focusing purely on the colors and legibility.

## Technical Details
- **Logic:** HSL color manipulation to calculate harmonies.
- **Updates:** Real-time rendering using Vanilla JS.
