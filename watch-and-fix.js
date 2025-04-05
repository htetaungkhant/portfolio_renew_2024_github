// watch-and-fix.js
const chokidar = require('chokidar');
const { execSync } = require('child_process');
const path = require('path');
const { glob } = require('node:fs/promises');

// Directories to watch - for Next.js 15 app router
const watchDirs = [
  './app',
  './assets',
  './components',
  './data',
  './lib',
  './types'
];

// File extensions to watch
const extensions = ['.js', '.jsx', '.ts', '.tsx'];

async function startWatcher() {
  // Create a watcher
  const files = await Array.fromAsync(glob(watchDirs.map(dir => 
      path.join(dir, `**/*{${extensions.join(',')}}`)
  )));
  const watcher = chokidar.watch(files, {
    //   ignored: [/node_modules/, /\.git/, /\.next/, /\.module\.scss$/],
    //   depth: 0,
    //   ignoreInitial: false
    ignored: /node_modules|\.git|\.next/,
    persistent: true,
  });

  console.log('🔍 Watching for file changes to automatically fix import paths...');

  // On file change, run ESLint fix
  watcher.on('change', filepath => {
    // Skip SCSS module files
    if (filepath.endsWith('.module.scss')) {
      return;
    }
    
    try {
      console.log(`📝 File changed: ${filepath} - calling ESLint fix...`);
      execSync(`npx eslint --fix "${filepath}"`, { stdio: 'inherit' });
      // execSync(`npm run lintfile:fix "${filepath}"`, { stdio: 'inherit' });
      console.log(`✅ ESLint fix applied to ${filepath}`);
    } catch (error) {
      console.error(`❌ Error applying ESLint fix to ${filepath}:`, error.message);
    }
  });
}

// Start the watcher
startWatcher().catch(console.error);