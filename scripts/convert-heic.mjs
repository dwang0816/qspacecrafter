import heicConvert from 'heic-convert';
import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join, extname, basename } from 'path';

const inputDir = './public/home';
const files = readdirSync(inputDir);

for (const file of files) {
  const ext = extname(file).toLowerCase();
  if (ext !== '.heic') continue;

  const inputPath = join(inputDir, file);
  const outputName = basename(file, extname(file)) + '.jpg';
  const outputPath = join(inputDir, outputName);

  console.log(`Converting: ${file} → ${outputName}`);

  try {
    const inputBuffer = readFileSync(inputPath);
    const outputBuffer = await heicConvert({
      buffer: inputBuffer,
      format: 'JPEG',
      quality: 0.9,
    });
    writeFileSync(outputPath, Buffer.from(outputBuffer));
    console.log(`  ✓ Done`);
  } catch (err) {
    console.error(`  ✗ Failed: ${err.message}`);
  }
}

console.log('\nConversion complete!');
