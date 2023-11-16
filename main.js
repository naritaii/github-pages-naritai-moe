async function loadHeaderContent() {
    const headerURL = "header.html";
async function loadHeaderContent() {
    const headerURL = "header.html";
    const headerContainer = document.getElementById("header-placeholder");

    // Display a placeholder or loading state while fetching the content
    headerContainer.innerHTML = '<div class="header-placeholder-skeleton"></div>';

    // Display a placeholder or loading state while fetching the content
    headerContainer.innerHTML = '<div class="header-placeholder-skeleton"></div>';

    try {
        const response = await fetch(headerURL);
        const data = await response.text();
        headerContainer.innerHTML = data;
    try {
        const response = await fetch(headerURL);
        const data = await response.text();
        headerContainer.innerHTML = data;

        // Highlight the current page link after the header content is loaded
        highlightCurrentPageLink();
    } catch (error) {
        console.error('Error fetching header content:', error);
        // Handle error or display a fallback content
    }
}

function highlightCurrentPageLink() {
    // Get the current page's URL
    const currentPage = window.location.pathname.replace(/^\//, ''); // Remove the leading slash
        // Highlight the current page link after the header content is loaded
        highlightCurrentPageLink();
    } catch (error) {
        console.error('Error fetching header content:', error);
        // Handle error or display a fallback content
    }
}

function highlightCurrentPageLink() {
    // Get the current page's URL
    const currentPage = window.location.pathname.replace(/^\//, ''); // Remove the leading slash

    // Highlight the link for the current page
    const links = document.querySelectorAll("#header-placeholder a");
    links.forEach(link => {
        const linkHref = link.getAttribute("href").replace(/^\//, ''); // Remove the leading slash
        if (linkHref === currentPage || (currentPage === '' && linkHref === 'index.html')) {
            link.classList.add("current-page");
            const highlighter = document.querySelector('.highlighter');
            highlighter.style.transition = "width 0.3s"; // Enable width transition
            highlighter.style.width = "0"; // Set initial width to 0
            highlighter.style.transform = `translateX(${link.offsetLeft}px)`; // Adjust position

            // Adding a delay to ensure the width transition starts after resetting to 0
            setTimeout(() => {
                highlighter.style.width = `${link.offsetWidth}px`; // Set full width
            }, 50);
        }
    });
}

document.addEventListener("DOMContentLoaded", loadHeaderContent);
