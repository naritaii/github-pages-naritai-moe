    // Use JavaScript to load and insert the header
    const headerContainer = document.getElementById("header-placeholder");
    const headerURL = "header.html";

    fetch(headerURL)
        .then(response => response.text())
        .then(data => {
            headerContainer.innerHTML = data;
        });
  