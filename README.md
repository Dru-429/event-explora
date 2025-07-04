
# Event Explora

*A modern event listing application built with Next.js (Pages Router), TypeScript, and Tailwind CSS.*

**Live Demo:** [https://event-explora.vercel.app/](https://event-explora.vercel.app/)

---

## Overview

Event Explora allows users to:

- Search events by name, location, or description
- Filter events by location
- Sort events by date
- View dynamic event detail pages (`[id].tsx`)
- Benefit from SEO-optimized meta tags per event
- Enjoy a fully responsive UI with custom theme colors

---

## Table of Contents

- [Event Explora](#event-explora)
  - [Overview](#overview)
  - [Table of Contents](#table-of-contents)
  - [Approach](#approach)
  - [Folder Structure](#folder-structure)
  - [Planned Features](#planned-features)

---

## Approach

**Research:**
Explored popular event platforms (Reskill, Meetup.com, Devfolio) to identify best practices for UI, layout, and features.

**Theme Selection:**
Chose a vibrant, accessible color palette tailored for tech communities. Theme variables are defined in `globals.css`:

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

**Development Phases:**

1. Setup Next.js, Tailwind CSS, and custom theme
2. Build the home page with search, filter, and sort features
3. Implement dynamic event detail route (`[id].tsx`)
4. Add SEO meta tags per event
5. Refine responsiveness and deploy to Vercel

---

## Folder Structure

![Folder Structure](https://github.com/user-attachments/assets/80d2b543-9ca6-4049-aff0-030b6b6c2c96)

---

## Planned Features

**Dark mode**  
Add a theme toggler so users can switch between light and dark themes.

**Map preview**  
Embed a map (e.g., Google Maps) on the event detail page to visually show the event location.

**View counter**  
Display how many people have opened or viewed a particular event page.

**Register form**  
Include a “Register Now” form on the event detail page so users can sign up for the event directly from the app.


