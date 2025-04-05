import * as esbuild from 'esbuild'
import fs from 'node:fs/promises'


let results = await esbuild.build({
  entryPoints: ['./src/chess-console-stockfish.js'],
  bundle: true,
  // minify: true,
  sourcemap: true,
  logLevel: 'info',
  // platform: 'node',
  metafile: true,
  format: 'esm',
  outdir: 'client/',
})

await fs.writeFile('meta-client.json', JSON.stringify(results.metafile))
console.log("\n  esbuild metadata written to 'meta-client.json'.")
