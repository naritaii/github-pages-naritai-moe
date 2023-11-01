// This script removes the .html extension from the URL
if (location.pathname.endsWith(".html") && location.pathname !== "/index.html") {
    var newPath = location.pathname.replace(/.html$/, "");
    if (newPath.endsWith("/")) {
      newPath = newPath + "index.html";
    } else {
      newPath = newPath + ".html";
    }
    window.history.replaceState({}, document.title, newPath);
  }
  