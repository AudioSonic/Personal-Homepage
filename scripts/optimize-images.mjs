import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const sourceRoot = path.join(root, "assets");
const outputRoot = path.join(root, "assets", "optimized");
const widths = [640, 1280];
const extensions = new Set([".png", ".jpg", ".jpeg"]);

async function walk(directory) {
    const entries = await fs.readdir(directory, { withFileTypes: true });
    const files = [];

    for (const entry of entries) {
        const fullPath = path.join(directory, entry.name);
        if (entry.isDirectory() && entry.name !== "optimized") {
            files.push(...await walk(fullPath));
        } else if (entry.isFile() && extensions.has(path.extname(entry.name).toLowerCase())) {
            files.push(fullPath);
        }
    }

    return files;
}

const sources = await walk(sourceRoot);
await fs.mkdir(outputRoot, { recursive: true });

for (const source of sources) {
    const relative = path.relative(sourceRoot, source);
    const parsed = path.parse(relative);
    const outputDirectory = path.join(outputRoot, parsed.dir);
    await fs.mkdir(outputDirectory, { recursive: true });

    const image = sharp(source);
    const metadata = await image.metadata();
    const targetWidths = widths.filter((width) => !metadata.width || width < metadata.width);
    if (metadata.width && !targetWidths.includes(metadata.width)) {
        targetWidths.push(metadata.width);
    }

    for (const width of targetWidths) {
        const output = path.join(outputDirectory, `${parsed.name}-${width}.webp`);
        await sharp(source)
            .resize({ width, withoutEnlargement: true })
            .webp({ quality: 78, effort: 5 })
            .toFile(output);
    }
}

console.log(`Optimized ${sources.length} source images into ${outputRoot}`);
