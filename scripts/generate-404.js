import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distPath = path.join(__dirname, "../dist");
const indexPath = path.join(distPath, "index.html");
const notFoundPath = path.join(distPath, "404.html");

// Read index.html
let indexContent = fs.readFileSync(indexPath, "utf8");

// Create 404.html with immediate redirect for GitHub Pages
// This handles SPA routing for custom domain (no base path)
// The redirect script runs immediately when the page loads
const redirectScript = `
    <script>
      // Single Page Apps for GitHub Pages - IMMEDIATE REDIRECT
      // Handles custom domain (no base path)
      // This script runs immediately, before any other scripts
      (function() {
        var l = window.location;
        var pathname = l.pathname;
        
        // Normalize pathname - remove trailing slash except for root
        if (pathname.endsWith("/") && pathname !== "/") {
          pathname = pathname.slice(0, -1);
        }
        
        // Get the path (everything after the domain)
        // Examples:
        // /ar -> restOfPath = "ar"
        // /en -> restOfPath = "en"
        // /en/about -> restOfPath = "en/about"
        var restOfPath = pathname.slice(1); // Remove leading slash
        
        // Build redirect path using ?/ format for SPA routing
        // The ?/ tells the SPA router to handle the path
        var redirectPath = "/?/" + restOfPath.replace(/&/g, "~and~");
        
        // Preserve existing query string (if any, and not the ?/ we just added)
        if (l.search && l.search.length > 0 && !l.search.startsWith("?/")) {
          redirectPath += "&" + l.search.slice(1).replace(/&/g, "~and~");
        }
        
        // Preserve hash
        if (l.hash) {
          redirectPath += l.hash;
        }
        
        // IMMEDIATE redirect - use replace to avoid history entry
        // This happens before React loads, so the page will redirect properly
        var fullUrl = l.protocol + "//" + l.hostname + (l.port ? ":" + l.port : "") + redirectPath;
        window.location.replace(fullUrl);
      })();
    </script>
    <noscript>
      <meta http-equiv="refresh" content="0; url=/" />
    </noscript>
`;

// Insert the redirect script immediately after opening body tag for fastest execution
// This ensures redirect happens before React loads
const notFoundContent = indexContent.replace(
  "<body>",
  "<body>" + redirectScript
);

// Write 404.html
fs.writeFileSync(notFoundPath, notFoundContent, "utf8");
console.log(
  "✓ Generated 404.html for GitHub Pages SPA routing (custom domain)"
);
