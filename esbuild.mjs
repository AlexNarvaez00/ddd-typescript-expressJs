import * as esbuild from 'esbuild'

await esbuild.build({
    entryPoints: ['./src/ExpressApp.ts'],
    bundle: true,
    platform: 'node',
    minify: true,
    outfile: './dist/index.js',
})
