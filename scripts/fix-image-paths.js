#!/usr/bin/env node

/**
 * Post-build script to fix image paths in HTML files
 * This script fixes image paths in the generated HTML files from Next.js static export
 * for GitHub Pages + internationalization compatibility
 */

const fs = require('fs');
const path = require('path');

// Configuration
const outputDir = path.join(process.cwd(), 'out');
const languageDirs = ['en', 'fr', 'ja', 'ko'];

// Process all HTML files in language directories
languageDirs.forEach(lang => {
  const langDir = path.join(outputDir, lang);
  
  // Skip if language directory doesn't exist
  if (!fs.existsSync(langDir)) {
    console.log(`Directory ${langDir} does not exist, skipping.`);
    return;
  }
  
  // Process files recursively
  processDirectory(langDir);
});

/**
 * Process all HTML files in a directory recursively
 */
function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Recursively process subdirectories
      processDirectory(fullPath);
    } else if (file.endsWith('.html')) {
      // Process HTML files
      fixImagePaths(fullPath);
    }
  });
}

/**
 * Fix image paths in HTML file
 */
function fixImagePaths(filePath) {
  console.log(`Processing ${filePath}`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix paths to images in the public directory
  content = content.replace(
    /(?:src|href)=["'](\/splash-reader-nextjs)?\/images\/(.*?)["']/g,
    (match, repoName, imagePath) => {
      return match.replace(/\/images\//, '../images/');
    }
  );
  
  fs.writeFileSync(filePath, content, 'utf8');
}

console.log('Image paths fixed successfully!');
