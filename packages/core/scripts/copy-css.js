#!/usr/bin/env node
// This is an example script that can handle copying a global stylesheet from your core Stencil project into your framework packages. You would just need to call this after your build your stencil project
// Import required Node.js modules for file system and path operations
const fs = require('fs');
const path = require('path');

// Define the source CSS file path from the core distribution directory
const src = path.resolve(__dirname, '../dist/core/core.css');

// Define target directories where the CSS file should be copied to
const targets = [
  path.resolve(__dirname, '../../angular/css/placid.css'),
  path.resolve(__dirname, '../../react/dist/css/placid.css'),
  path.resolve(__dirname, '../../vue/dist/css/placid.css'),
];

try {
  // Check if the source file exists before attempting to copy
  if (!fs.existsSync(src)) {
    console.error('Source file not found:', src);
    process.exitCode = 2;
    process.exit();
  }

  // Iterate through each target directory and copy the source file
  targets.forEach(dest => {
    // Create the target directory if it doesn't exist (recursive flag allows nested creation)
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    // Copy the source file to the target destination
    fs.copyFileSync(src, dest);
    console.log('Copied', src, '→', dest);
  });

  console.log('All done.');
} catch (err) {
  // Log any errors that occur during the copy process
  console.error('Copy failed:', err);
  process.exitCode = 1;
}
