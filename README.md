# FOSSEE Workshops

This branch is called ui-modernization for a reason. It is not trying to reinvent the platform or add a bunch of new features. The original site works fine under the hood but it looks outdated, the cards have no visual hierarchy, spacing is inconsistent, and on mobile it was not the smoothest to use. This branch just fixes that. The idea was to bring it up to a point where it feels like a reasonably modern web app without overcomplicating things or tanking performance. Better typography, a consistent color system, cards that are easier to scan, and a layout that actually works on a phone. The other branch deals with deeper usability changes. This one is strictly the visual overhaul.

## Demo

https://github.com/user-attachments/assets/YOUR-VIDEO-ID-HERE

replace the above with your actual GitHub-hosted screen recording link before submitting.

## Setup

Clone the repo and navigate to the frontend directory:

```bash
git clone https://github.com/FOSSEE/workshop_booking.git
cd workshop_booking/frontend
npm install
npm run dev
```

The React frontend will start on port 5173. The Django backend would need separate setup with Python and the requirements.txt, but this branch focuses on the frontend UI work.

## My approach

I wanted the site to look like it was built this decade, not 2015. The biggest change was typography. Space Grotesk for headings gives it personality without being weird, while Inter keeps body text clean and readable. I used an off-white background instead of pure white so the white cards stand out more. For workshop statuses, I went with teal for accepted, amber for proposed, and gray for completed. These colors are accessible and easy to recognize at a glance. Each card has a colored top border matching its status, so you can scan the grid without reading every card.

The trade-off was adding Space Grotesk, which means an extra font request and about 100ms loading overhead. The visual upgrade was worth it. On mobile, I made the filter sidebar a drawer that slides in instead of taking up permanent screen space. A persistent panel would cramp the content too much. The hardest part was keeping those status colors consistent everywhere. I used CSS variables for teal, amber, and gray, then referenced them across badges, card borders, and hover states instead of hardcoding hex values. Tracking down every place status colors appeared and making them pull from the same source took some work.

## What changed

The typography now uses Space Grotesk for headings and Inter for body text, with an off-white background to reduce eye strain. Workshop statuses use a consistent color system. Teal for accepted, amber for proposed, and gray for completed. These are applied to badges, card borders, and status indicators through CSS variables. Cards have colored top borders that match their status, making it easy to scan the grid. The layout is cleaner with better spacing and a sticky navbar.

On mobile, navigation is a hamburger menu that slides in from the right. Card grids collapse to single columns on smaller screens. The filter sidebar becomes a drawer instead of a persistent panel. I also fixed specific issues: the dashboard button has proper tap targets on mobile, filter chips display correctly, and loading performance improved with React.memo and useCallback.

## Before and After

| Before | After |
| --- | --- |
| ![Before 1](assets/screenshots/before1.png) | ![After 1](assets/screenshots/after1.png) |
| ![Before 2](assets/screenshots/before2.png) | ![After 2](assets/screenshots/after2.png) |
| ![Before 3](assets/screenshots/before3.png) | ![After 3](assets/screenshots/after3.png) |
| ![Before 4](assets/screenshots/before4.png) | ![After 4](assets/screenshots/after4.png) |
| ![Before 5](assets/screenshots/before5.png) | ![After 5](assets/screenshots/after5.png) |
| ![Before 6](assets/screenshots/before6.png) | ![After 6](assets/screenshots/after6.png) |
| ![Before 7](assets/screenshots/before7.png) | ![After 7](assets/screenshots/after7.png) |

## Submission Checklist

- [x] Code is readable and well-structured
- [ ] Git history shows progressive work (no single commit dumps)
- [ ] README includes reasoning answers and setup instructions
- [ ] Screenshots or live demo link included
- [ ] Code is documented where necessary
