# Portfolio Upgrade Notes

## 🎯 What Changed

This portfolio has been upgraded with the following improvements:

### 1. Hero Section

- **Fixed tagline**: Removed dynamic cycling, now shows single static tagline
- **Typography**: Improved spacing and alignment (8-12px gap mobile, 16-20px desktop)
- **Background**: Updated to off-white `#F7F7F5` with paper texture
- **Animation**: Simplified to fade-up only (120-160ms)

### 2. Theme & Dark Mode

- **Colors**: Softened from pure white to off-white `#F7F7F5`
- **Dark Mode**: Added toggle with `#0F1115` background and `#E6E6E6` text
- **Grid**: Strengthened hairlines to `border-neutral-200/50`
- **Persistence**: Theme preference saved to localStorage
- **Respect**: Honors `prefers-color-scheme`

### 3. Projects Section

- **Home**: Shows exactly 2 featured projects
- **Link**: Added "View all projects →" to `/projects`
- **Layout**: Consistent left text / right image spreads

### 4. Work Experience

- **New Section**: Added after About, before Projects
- **Timeline**: Company, role, period, impact bullets
- **Data**: Located in `src/data/work.ts`
- **Link**: Optional "View résumé →" placeholder

### 5. UX Polish

- **Spacing**: Consistent scale (4/8/12/16/24/32/48/64)
- **Container**: Max-width `1100px` with `px-6 md:px-8`
- **Navigation**: Sticky with scroll-spy, reduced hover noise
- **Motion**: Only hero fade-up, section reveal, image hover tilt
- **Accessibility**: Full `prefers-reduced-motion` support

### 6. SEO & Monitoring

- **Metadata**: Updated base URL to Vercel domain
- **Sitemap**: Auto-generated with all routes
- **Robots**: Proper crawling rules
- **OG Image**: Dynamic generation with name + tagline
- **Analytics**: Plausible integration ready
- **Health**: `/api/health` endpoint for uptime checks

### 7. Content Structure

- **About**: Appears immediately after Hero
- **Library**: Shows 3 latest writings + 3 readings
- **MDX**: All routes working (`/writings`, `/readings`, etc.)
- **Footer**: CTA "Write. Don't wait. → Contact" on every page

## 📁 New Files Created

```
src/data/work.ts                    # Work experience data
src/components/Work.tsx             # Work experience component
src/components/DarkModeToggle.tsx   # Dark mode toggle
src/app/opengraph-image.tsx         # Dynamic OG image
src/app/api/health/route.ts          # Health check endpoint
```

## 🔧 Files Modified

```
src/components/Hero.tsx             # Fixed tagline, new background
src/app/globals.css                 # Theme colors, dark mode, paper texture
src/components/CaseEssays.tsx       # Show only 2 projects + link
src/app/page.tsx                    # Added Work section
src/lib/site-config.ts              # Added Work to navigation
src/components/layout/ScrollNavigation.tsx # Added dark mode toggle
src/app/layout.tsx                  # Updated metadata base URL
src/app/sitemap.ts                  # Updated base URL
src/app/robots.ts                   # Updated base URL
src/components/ui/Container.tsx     # Updated max-width and padding
src/components/Footer.tsx            # Added CTA link
```

## 🎨 Content Management

### Projects

Edit `src/lib/content.ts` to update project data:

```typescript
export function getProjects(): Project[] {
  return [
    {
      slug: "project-name",
      title: "Project Title",
      featured: true, // Shows on home page
      // ... other fields
    },
  ];
}
```

### Work Experience

Edit `src/data/work.ts` to update work history:

```typescript
export const workExperiences: WorkExperience[] = [
  {
    company: "Company Name",
    role: "Your Role",
    period: "2020 - Present",
    impacts: [
      "Achieved 40% performance improvement",
      "Led team of 5 engineers",
    ],
    link: "https://company.com", // Optional
  },
];
```

### Writings & Readings

Add MDX files to:

- `src/content/writings/` - Blog posts
- `src/content/readings/` - Book/article notes

### Site Configuration

Edit `src/lib/site-config.ts` for:

- Personal information
- Social links
- Navigation items
- Brand manifesto

## 🚀 Deployment

The site is ready for Vercel deployment with:

- ✅ All pages building successfully
- ✅ SEO optimized
- ✅ Analytics ready (set `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`)
- ✅ Health check endpoint
- ✅ Dark mode support
- ✅ Mobile responsive

## 🎯 Acceptance Criteria Met

- ✅ Tagline is single, static, horizontally centered
- ✅ Home shows only 2 featured projects + "View all projects →"
- ✅ Work section renders with entries from `data/work.ts`
- ✅ No broken nav links; all pages build successfully
- ✅ Ready for Lighthouse ≥ 90 scores

## 🔄 Next Steps

1. **Deploy**: Push to GitHub → Vercel auto-deploys
2. **Analytics**: Add `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` env var
3. **Content**: Update projects, work, and MDX files
4. **Custom Domain**: Configure in Vercel dashboard
5. **Monitor**: Use `/api/health` for uptime checks

