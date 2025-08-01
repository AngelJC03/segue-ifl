const fs = require('fs');
const path = require('path');

const galleryDir = path.join(__dirname, '../public/assets/Photo-Gallery-Pics');
const outputPath = path.join(__dirname, '../src/assets/json/galleryManifest.json');

function isImage(file) {
  return /\.(jpe?g|png|gif|webp)$/i.test(file);
}

const manifest = {};

fs.readdirSync(galleryDir, { withFileTypes: true }).forEach(folder => {
  if (folder.isDirectory()) {
    const folderName = folder.name;
    const folderPath = path.join(galleryDir, folderName);
    const images = fs
      .readdirSync(folderPath)
      .filter(isImage)
      .map(file => `/assets/Photo-Gallery-Pics/${folderName}/${file}`);

    manifest[folderName] = images;
  }
});

fs.writeFileSync(outputPath, JSON.stringify(manifest, null, 2));
console.log(`✅ Gallery manifest written to ${outputPath}`);
