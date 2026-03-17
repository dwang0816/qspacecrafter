import heicConvert from 'heic-convert';
import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync, copyFileSync } from 'fs';
import { join, extname, basename } from 'path';

const galleryRoot = './public/gallery';
const outputDir = './public/gallery/photos';

mkdirSync(outputDir, { recursive: true });

// Recursively collect all image files (skip the output dir itself and videos)
function collectImages(dir) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry);
    if (statSync(fullPath).isDirectory()) {
      // Skip the output folder
      if (fullPath.replace(/\\/g, '/').endsWith('gallery/photos')) continue;
      results.push(...collectImages(fullPath));
    } else {
      const ext = extname(entry).toLowerCase();
      if (['.heic', '.jpg', '.jpeg', '.png'].includes(ext)) {
        results.push(fullPath);
      }
    }
  }
  return results;
}

const images = collectImages(galleryRoot);
console.log(`Found ${images.length} images total`);

let counter = 1;
const manifest = [];

for (const imgPath of images) {
  const ext = extname(imgPath).toLowerCase();
  const paddedNum = String(counter).padStart(3, '0');

  if (ext === '.heic') {
    const outputName = `g${paddedNum}.jpg`;
    const outputPath = join(outputDir, outputName);
    console.log(`Converting: ${basename(imgPath)} → ${outputName}`);
    try {
      const inputBuffer = readFileSync(imgPath);
      const outputBuffer = await heicConvert({ buffer: inputBuffer, format: 'JPEG', quality: 0.88 });
      writeFileSync(outputPath, Buffer.from(outputBuffer));
      manifest.push({ file: outputName, original: basename(imgPath) });
      counter++;
    } catch (err) {
      console.error(`  ✗ Failed: ${err.message}`);
    }
  } else {
    // JPG or PNG — just copy with new name
    const outputExt = ext === '.png' ? '.png' : '.jpg';
    const outputName = `g${paddedNum}${outputExt}`;
    const outputPath = join(outputDir, outputName);
    console.log(`Copying:    ${basename(imgPath)} → ${outputName}`);
    copyFileSync(imgPath, outputPath);
    manifest.push({ file: outputName, original: basename(imgPath) });
    counter++;
  }
}

// Write a manifest so we know what each file is
writeFileSync(join(outputDir, 'manifest.json'), JSON.stringify(manifest, null, 2));
console.log(`\nDone! ${counter - 1} images → ${outputDir}`);
console.log('Manifest written to manifest.json');
