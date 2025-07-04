## Event Explora — Find Your Next Big Event

A dynamic event listing app built using **Next.js (Pages Router)**, **TypeScript**, and **Tailwind CSS**.

🌐 **Live link:** [https://event-explora.vercel.app/](https://event-explora.vercel.app/)

The app allows users to:

* 🔍 Search events by name, location, or description
* 📍 Filter by location
* 📅 Sort events by date
* 🚀 Navigate to dynamic event detail pages via `[id].tsx`
* 🌟 SEO optimized meta tags per event
* 💻 Fully responsive UI with custom theme colors

---

## 📑 Table of Contents

| Section                                         | Location |
| ----------------------------------------------- | -------- |
| [Approach](#approach)                           | Below    |
| [Folder Structure](#folder-structure)           | Below    |
| [How to Run](#how-to-run)                       | Below    |
| [Planned Features](#planned-features)           | Below    |
| [Optional Improvements](#optional-improvements) | Below    |
| [Evaluation Criteria](#evaluation-criteria)     | Below    |

---

## 🚀 Approach

1️⃣ **Research:**
I began by exploring existing event platforms such as:

* Reskill event pages
* Meetup.com
* Devfolio

This helped gather inspiration for UI structure, layout, and key features.

2️⃣ **Theme selection:**
I chose a vibrant light color palette that suits tech communities and added it to `globals.css` via CSS variables:

```css
@theme {
  --color-background: #f6f7eb;
  --color-foreground: #393e41;
  --color-primary: #e94f37;
  --color-primary-foreground: #f6f7eb;
  --color-secondary: #393e41;
  --color-secondary-foreground: #f6f7eb;
  --color-muted: #f6f7eb;
  --color-muted-foreground: #393e41;
  --color-border: #c8ccce;
  --color-input: #c8ccce;
}
```
3️⃣ Development phases:

Phase 1: Setup Next.js, Tailwind, and custom theme

Phase 2: Build the home page with search, filter, and sort features

Phase 3: Implement dynamic route [id].tsx for event details

Phase 4: Add SEO meta tags per event

Phase 5: Refine responsiveness and deploy to Vercel

I kept a written plan of tasks and features to stay organized through each phase.

🗂 Folder Structure
![image](https://github.com/user-attachments/assets/80d2b543-9ca6-4049-aff0-030b6b6c2c96)

✨ Planned Features
🌙 Dark mode: Theme toggler for dev community

🗺 Map preview on event detail page

👀 View counter for event visits

📝 Register form for events


