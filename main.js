// Function to load the header
function loadHeader() {
    const headerContainer = document.getElementById("header-placeholder");
    const headerURL = "header.html";

    fetch(headerURL)
        .then(response => response.text())
        .then(data => {
            headerContainer.innerHTML = data;

            // Highlight the link for the current page
            const currentPage = window.location.pathname;
            const links = headerContainer.querySelectorAll("a");
            links.forEach(link => {
                if (link.getAttribute("href") === currentPage) {
                    link.classList.add("current-page");
                }
            });
        });
}

// Load the header when the page loads
window.addEventListener("load", loadHeader);
