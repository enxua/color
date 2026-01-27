# Color Matcher Blueprint

## Overview
A tool that helps users find matching colors for a specific base color. Users can input a hex code or pick a color, and the app generates a curated list of harmonious 2-color combinations.

## Features
- **Base Color Input:** Large, accessible color picker and hex input field.
- **Smart Recommendations:** Generates matching colors based on color theory (Complementary, Analogous, Triadic, Monochromatic, etc.).
- **Visual Display:** Grid layout of 2-color cards (Base Color + Matched Color).
- **Interactivity:** Click to copy hex codes. Real-time updates when base color changes.

## Design & Style
- **Reference:** https://2colors.colorion.co/
- **Layout:** Sticky header for controls, masonry or grid layout for results.
- **Card Design:** Split vertically or horizontally showing the two colors side-by-side.
- **Aesthetics:** Clean, minimal, focusing purely on the colors.

## Technical Details
- **Logic:** HSL color manipulation to calculate harmonies.
- **Updates:** Real-time rendering using Vanilla JS.