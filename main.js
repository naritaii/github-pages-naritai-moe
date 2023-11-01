// Function to load the header
function loadHeader() {
    const headerContainer = document.getElementById("header-placeholder");
    const headerURL = "header.html";

    fetch(headerURL)
        .then(response => response.text())
        .then(data => {
            headerContainer.innerHTML = data;

            // Get the current page's URL
            const currentPage = window.location.pathname.replace(/^\//, ''); // Remove the leading slash

            // Highlight the link for the current page
            const links = headerContainer.querySelectorAll("a");
            links.forEach(link => {
                const linkHref = link.getAttribute("href").replace(/^\//, ''); // Remove the leading slash
                if (linkHref === currentPage) {
                    link.classList.add("current-page");
                }
            });
        });
}

// Load the header when the page loads
window.addEventListener("load", loadHeader);
