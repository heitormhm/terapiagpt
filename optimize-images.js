const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imageDir = path.join(__dirname, 'img');

async function optimizeImages() {
    try {
        const files = fs.readdirSync(imageDir);
        
        for (const file of files) {
            if (file.match(/\.(jpg|jpeg|png)$/i)) {
                const inputPath = path.join(imageDir, file);
                const outputPath = path.join(imageDir, `optimized-${file}`);
                
                await sharp(inputPath)
                    .resize(800, 800, {
                        fit: 'inside',
                        withoutEnlargement: true
                    })
                    .jpeg({ quality: 80 })
                    .toFile(outputPath);
                
                console.log(`Optimized: ${file}`);
            }
        }
    } catch (error) {
        console.error('Error optimizing images:', error);
    }
}

optimizeImages();
