#!/usr/bin/env node
// This is an example script that can handle copying a global stylesheet from your core Stencil project into your framework packages. You would just need to call this after your build your stencil project.
// Import required Node.js modules for file system and path operations
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Get the current file's directory path (needed in ES modules since __dirname isn't available)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the source CSS file path from the core distribution directory
// This is the compiled CSS output from the Stencil build
const src = path.resolve(__dirname, '../dist/core/core.css');

// Define target directories where the CSS file should be copied to
// These are the framework-specific packages that need access to the global styles
const targets = [
  path.resolve(__dirname, '../../angular/css/placid.css'),
  path.resolve(__dirname, '../../react/dist/css/placid.css'),
  path.resolve(__dirname, '../../vue/dist/css/placid.css'),
];

try {
  // Check if the source file exists before attempting to copy
  // This prevents errors if the build hasn't completed yet
  if (!fs.existsSync(src)) {
    console.error('Source file not found:', src);
    process.exitCode = 2;
    process.exit();
  }

  // Iterate through each target directory and copy the source file
  for (const dest of targets) {
    // Create the target directory if it doesn't exist (recursive flag allows nested creation)
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    // Copy the source file to the target destination
    fs.copyFileSync(src, dest);
    console.log('Copied', src, '→', dest);
  }

  console.log('All done.');
} catch (err) {
  // Log any errors that occur during the copy process
  console.error('Copy failed:', err);
  process.exitCode = 1;
}
