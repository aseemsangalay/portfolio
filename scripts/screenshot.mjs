import { chromium } from 'playwright';
import { mkdirSync } from 'fs';
import { join } from 'path';

const BASE_URL = 'http://localhost:3002';

const VIEWPORTS = [
  { name: 'desktop',      width: 1440, height: 900  },
  { name: 'laptop',       width: 1280, height: 800  },
  { name: 'mobile',       width: 390,  height: 844  },
  { name: 'mobile-small', width: 375,  height: 667  },
];

const PAGES = [
  { name: 'home',          path: '/'              },
  { name: 'experience',    path: '/experience'    },
  { name: 'projects',      path: '/projects'      },
  { name: 'research',      path: '/research'      },
  { name: 'brain',         path: '/brain'         },
  { name: 'brain-notes',   path: '/brain/notes'   },
  { name: 'brain-reading', path: '/brain/reading' },
  { name: 'contact',       path: '/contact'       },
  { name: 'writings',      path: '/writings'      },
];

const OUT_DIR = join(process.cwd(), 'screenshots');

async function capture() {
  const browser = await chromium.launch();

  for (const vp of VIEWPORTS) {
    const ctx = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 1,
    });
    const page = await ctx.newPage();

    for (const pg of PAGES) {
      const dir = join(OUT_DIR, pg.name, vp.name);
      mkdirSync(dir, { recursive: true });

      const url = BASE_URL + pg.path;
      console.log(`  → ${vp.name} ${pg.path}`);

      try {
        await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
        // Let animations settle
        await page.waitForTimeout(800);

        // Viewport screenshot
        await page.screenshot({
          path: join(dir, 'viewport.png'),
          fullPage: false,
        });

        // Full-page screenshot
        await page.screenshot({
          path: join(dir, 'full.png'),
          fullPage: true,
        });
      } catch (err) {
        console.warn(`    SKIP ${url}: ${err.message}`);
        // Write a placeholder so we know the page was skipped
        mkdirSync(dir, { recursive: true });
      }
    }

    await ctx.close();
  }

  await browser.close();
  console.log('\nDone. Screenshots saved to ./screenshots/');
}

capture().catch(err => { console.error(err); process.exit(1); });
