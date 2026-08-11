// Release script: bumps version, builds, commits, tags, and pushes.
// Usage:
//   node release.js          → patch (1.0.0 → 1.0.1)
//   node release.js minor    → minor (1.0.0 → 1.1.0)
//   node release.js major    → major (1.0.0 → 2.0.0)

import { execSync } from 'child_process'
import { readFileSync, writeFileSync } from 'fs'

const bump = process.argv[2] ?? 'patch'
if (!['patch', 'minor', 'major'].includes(bump)) {
  console.error(`Invalid bump type "${bump}". Use patch, minor, or major.`)
  process.exit(1)
}

// Read and bump version
const pkgPath = new URL('./package.json', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1')
const pkg = JSON.parse(readFileSync(pkgPath, 'utf8'))
let [major, minor, patch] = pkg.version.split('.').map(Number)
if (bump === 'major') { major++; minor = 0; patch = 0 }
else if (bump === 'minor') { minor++; patch = 0 }
else { patch++ }
const newVersion = `${major}.${minor}.${patch}`
pkg.version = newVersion
writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n')
console.log(`Bumped version: ${pkg.version.replace(newVersion, '')}${newVersion}`)

const run = (cmd) => execSync(cmd, { stdio: 'inherit' })

// Build
console.log('\nBuilding...')
run('npm run build')

// Commit + tag + push
console.log('\nCommitting...')
run('git add -A')
run(`git commit -m "v${newVersion}"`)
run(`git tag v${newVersion}`)
run('git push origin main --tags')

console.log(`\nReleased v${newVersion}`)
console.log(`\nTo update a consuming app:`)
console.log(`  1. Change "prodevui": "github:Laamin95/prodevui#v${newVersion}" in package.json`)
console.log(`  2. Run npm install`)
