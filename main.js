// This script removes the .html extension from the URL
if (location.pathname.endsWith(".html") && location.pathname !== "/index.html") {
    var newPath = location.pathname.replace(/.html$/, "");
    window.history.replaceState({}, document.title, newPath);
  }
  