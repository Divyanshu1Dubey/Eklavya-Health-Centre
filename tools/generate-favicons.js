const path = require('path');
const fs = require('fs');
const sharp = require('sharp');
const pngToIco = require('png-to-ico');

async function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

async function generate() {
  const src = path.resolve(__dirname, '..', 'public', 'img', 'Eklavya Healthcare Centre logo design.png');
  const outDir = path.resolve(__dirname, '..', 'public', 'img', 'favicon');

  await ensureDir(outDir);

  const sizes = [16, 32, 48, 180, 256];
  const pngPaths = [];

  for (const size of sizes) {
    const out = path.join(outDir, `eklavya-logo-${size}x${size}.png`);
    await sharp(src).resize(size, size, { fit: 'cover' }).png({ quality: 90 }).toFile(out);
    pngPaths.push(out);
    console.log('Wrote', out);
  }

  // Create an ICO from 16,32,48
  const icoPath = path.join(outDir, 'eklavya-favicon.ico');
  try {
    const icoBuffer = await pngToIco([
      path.join(outDir, 'eklavya-logo-16x16.png'),
      path.join(outDir, 'eklavya-logo-32x32.png'),
      path.join(outDir, 'eklavya-logo-48x48.png')
    ]);
    fs.writeFileSync(icoPath, icoBuffer);
    console.log('Wrote', icoPath);
  } catch (err) {
    console.error('Failed to create ICO', err);
  }

  console.log('Favicons generated in', outDir);
}

generate().catch((err) => {
  console.error(err);
  process.exit(1);
});
