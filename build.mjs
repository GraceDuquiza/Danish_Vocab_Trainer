import { cp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { transform } from "esbuild";
import { minify as minifyHtml } from "html-minifier-terser";
import JavaScriptObfuscator from "javascript-obfuscator";

const sourceDirectory = path.dirname(fileURLToPath(import.meta.url));
const outputDirectory = path.join(sourceDirectory, "dist");

const htmlFiles = ["index.html", "cookie-policy.html"];
const javascriptFiles = [
    "verber.js",
    "substantiver.js",
    "adjektiver.js",
    "adverbKonjunktion.js",
    "skriveguide.js",
    "Grammatik_Adverbiel.js",
    "Grammatik_Substantiv.js",
    "Grammatik_Adjektiv.js",
    "Grammatik_Pronomen.js",
    "Grammatik_Verber.js",
    "Grammatik_Konjunktion.js",
    "Grammatik_Præpositioner.js",
    "Grammatik_Ordstilling.js",
    "script.js",
    "quiz.js",
    "sw.js"
];

function sourcePath(file) {
    return path.join(sourceDirectory, file);
}

function outputPath(file) {
    return path.join(outputDirectory, file);
}

async function buildHtml(file) {
    const source = await readFile(sourcePath(file), "utf8");
    const output = await minifyHtml(source, {
        collapseWhitespace: true,
        conservativeCollapse: true,
        decodeEntities: true,
        keepClosingSlash: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        sortAttributes: true,
        sortClassName: true,
        useShortDoctype: true
    });

    await writeFile(outputPath(file), output, "utf8");
}

async function buildCss() {
    const source = await readFile(sourcePath("style.css"), "utf8");
    const result = await transform(source, {
        charset: "utf8",
        legalComments: "none",
        loader: "css",
        minify: true,
        sourcemap: false
    });

    await writeFile(outputPath("style.css"), result.code, "utf8");
}

async function buildJavascript(file) {
    const source = await readFile(sourcePath(file), "utf8");
    const minified = await transform(source, {
        charset: "utf8",
        legalComments: "none",
        loader: "js",
        minifyIdentifiers: false,
        minifySyntax: true,
        minifyWhitespace: true,
        sourcemap: false,
        target: "es2020"
    });
    const obfuscated = JavaScriptObfuscator.obfuscate(minified.code, {
        compact: true,
        identifierNamesGenerator: "hexadecimal",
        renameGlobals: false,
        selfDefending: false,
        simplify: true,
        sourceMap: false,
        splitStrings: false,
        stringArray: true,
        stringArrayCallsTransform: true,
        stringArrayEncoding: ["base64"],
        stringArrayRotate: true,
        stringArrayShuffle: true,
        stringArrayThreshold: 1,
        stringArrayWrappersChainedCalls: true,
        stringArrayWrappersCount: 2,
        target: "browser-no-eval",
        unicodeEscapeSequence: false
    }).getObfuscatedCode();

    await writeFile(outputPath(file), obfuscated, "utf8");
}

async function listFiles(directory) {
    const entries = await readdir(directory, { withFileTypes: true });
    const files = await Promise.all(entries.map(async entry => {
        const entryPath = path.join(directory, entry.name);
        return entry.isDirectory() ? listFiles(entryPath) : [entryPath];
    }));

    return files.flat();
}

async function verifyNoSourceMaps() {
    const generatedFiles = await listFiles(outputDirectory);
    const sourceMapFiles = generatedFiles.filter(file => file.endsWith(".map"));

    if (sourceMapFiles.length > 0) {
        throw new Error(`Unexpected source maps generated: ${sourceMapFiles.join(", ")}`);
    }

    for (const file of generatedFiles.filter(file => /\.(?:css|html|js)$/u.test(file))) {
        const content = await readFile(file, "utf8");
        if (/sourceMappingURL/iu.test(content)) {
            throw new Error(`Source map reference found in ${file}`);
        }
    }
}

async function build() {
    if (path.dirname(outputDirectory) !== sourceDirectory || path.basename(outputDirectory) !== "dist") {
        throw new Error("Refusing to clean an unexpected output directory.");
    }

    await rm(outputDirectory, { recursive: true, force: true });
    await mkdir(outputDirectory, { recursive: true });

    await Promise.all([
        ...htmlFiles.map(buildHtml),
        ...javascriptFiles.map(buildJavascript),
        buildCss(),
        cp(sourcePath("icons"), outputPath("icons"), { recursive: true }),
        readFile(sourcePath("manifest.webmanifest"), "utf8").then(content =>
            writeFile(outputPath("manifest.webmanifest"), JSON.stringify(JSON.parse(content)), "utf8")
        ),
        writeFile(outputPath(".nojekyll"), "", "utf8")
    ]);

    await verifyNoSourceMaps();
    console.log(`Production site built in ${outputDirectory}`);
}

await build();
