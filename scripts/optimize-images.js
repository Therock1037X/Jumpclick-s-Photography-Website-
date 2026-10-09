import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const inputBase = path.resolve('image data');
const outputWebBase = path.resolve('public/gallery/web');
const outputThumbBase = path.resolve('public/gallery/thumb');
const publicLogoDir = path.resolve('public/images');
const dataOutputFile = path.resolve('src/data/galleryData.js');

const categoryMap = {
  '001 WEDDING': { id: 'wedding', name: 'Cinematic Wedding', tag: 'Wedding' },
  '002 ENGAGEMENT': { id: 'engagement', name: 'Engagement & Rings', tag: 'Engagement' },
  '003 PREEWEDDING': { id: 'prewedding', name: 'Pre-Wedding & Destination', tag: 'Pre-Wedding' },
  '004 BIRTHDAY': { id: 'birthday', name: 'Milestone Events & Birthdays', tag: 'Event' },
  '005 MATERNITY': { id: 'maternity', name: 'Maternity Fine Art', tag: 'Maternity' },
  '006 BABY SHOOT': { id: 'baby', name: 'Newborn & Baby Chronicles', tag: 'Baby' },
  '007 BRIDAL SHOOT': { id: 'bridal', name: 'Editorial Bridal Portraits', tag: 'Bridal' },
};

async function processAll() {
  console.log('Starting image processing...');
  
  fs.mkdirSync(outputWebBase, { recursive: true });
  fs.mkdirSync(outputThumbBase, { recursive: true });
  fs.mkdirSync(publicLogoDir, { recursive: true });
  fs.mkdirSync(path.dirname(dataOutputFile), { recursive: true });

  // Process Logo
  const logoSrc = path.join(inputBase, 'logo', 'Jump-clicks-logo_1.1.jpg');
  if (fs.existsSync(logoSrc)) {
    await sharp(logoSrc)
      .resize({ width: 800, withoutEnlargement: true })
      .webp({ quality: 90 })
      .toFile(path.join(publicLogoDir, 'logo.webp'));
    await sharp(logoSrc)
      .resize({ width: 800, withoutEnlargement: true })
      .png({ quality: 90 })
      .toFile(path.join(publicLogoDir, 'logo.png'));
    console.log('Logo processed successfully.');
  }

  const allItems = [];
  const folders = fs.readdirSync(inputBase);

  for (const folder of folders) {
    const meta = categoryMap[folder];
    if (!meta) continue;

    const folderPath = path.join(inputBase, folder);
    const files = fs.readdirSync(folderPath).filter(f => {
      const ext = path.extname(f).toLowerCase();
      return ['.jpg', '.jpeg', '.png'].includes(ext) && !f.toLowerCase().includes('thumbs.db');
    });

    console.log(`Processing folder: ${folder} (${files.length} images)`);

    const outWebCatDir = path.join(outputWebBase, meta.id);
    const outThumbCatDir = path.join(outputThumbBase, meta.id);
    fs.mkdirSync(outWebCatDir, { recursive: true });
    fs.mkdirSync(outThumbCatDir, { recursive: true });

    let idx = 0;
    for (const file of files) {
      idx++;
      const srcFile = path.join(folderPath, file);
      const safeName = `${meta.id}_${idx}.webp`;
      const webOut = path.join(outWebCatDir, safeName);
      const thumbOut = path.join(outThumbCatDir, safeName);

      try {
        const metadata = await sharp(srcFile).metadata();
        const isPortrait = (metadata.height || 0) > (metadata.width || 0);

        // Web high-res (max 1920 width/height)
        await sharp(srcFile)
          .rotate() // auto-orient based on EXIF
          .resize({
            width: isPortrait ? 1440 : 1920,
            height: isPortrait ? 1920 : 1440,
            fit: 'inside',
            withoutEnlargement: true
          })
          .webp({ quality: 82 })
          .toFile(webOut);

        // Thumb (max 640 width/height)
        await sharp(srcFile)
          .rotate()
          .resize({
            width: isPortrait ? 600 : 800,
            height: isPortrait ? 800 : 600,
            fit: 'inside',
            withoutEnlargement: true
          })
          .webp({ quality: 78 })
          .toFile(thumbOut);

        allItems.push({
          id: `${meta.id}-${idx}`,
          title: `${meta.tag} #${idx}`,
          category: meta.id,
          categoryName: meta.name,
          src: `/gallery/web/${meta.id}/${safeName}`,
          thumb: `/gallery/thumb/${meta.id}/${safeName}`,
          orientation: isPortrait ? 'portrait' : 'landscape',
          aspectRatio: metadata.width && metadata.height ? (metadata.width / metadata.height).toFixed(2) : '1.5',
          featured: idx <= 3, // Feature the top 3 from each category on home
        });
      } catch (err) {
        console.error(`Error processing ${srcFile}:`, err.message);
      }
    }
  }

  const jsContent = `// Auto-generated gallery dataset from Jumpclicks original photographic archive
export const galleryCategories = [
  { id: 'all', label: 'All Works' },
  { id: 'wedding', label: 'Weddings', count: ${allItems.filter(i => i.category === 'wedding').length} },
  { id: 'engagement', label: 'Engagements', count: ${allItems.filter(i => i.category === 'engagement').length} },
  { id: 'prewedding', label: 'Pre-Wedding', count: ${allItems.filter(i => i.category === 'prewedding').length} },
  { id: 'bridal', label: 'Bridal Editorial', count: ${allItems.filter(i => i.category === 'bridal').length} },
  { id: 'maternity', label: 'Maternity', count: ${allItems.filter(i => i.category === 'maternity').length} },
  { id: 'baby', label: 'Baby & Newborn', count: ${allItems.filter(i => i.category === 'baby').length} },
  { id: 'birthday', label: 'Events & Birthday', count: ${allItems.filter(i => i.category === 'birthday').length} },
];

export const galleryItems = ${JSON.stringify(allItems, null, 2)};
`;

  fs.writeFileSync(dataOutputFile, jsContent, 'utf-8');
  console.log(`Successfully processed ${allItems.length} images! galleryData.js generated.`);
}

processAll().catch(console.error);
