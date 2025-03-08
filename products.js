// Toggle Hamburger Menu
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Highlight Active Link
const currentPage = window.location.pathname.split("/").pop(); // Get the current page filename
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

// Autocomplete Search Bar
const products = [
  "iPhone 15 Pro Max",
  "Samsung Galaxy S24 Ultra",
  "MacBook Pro 16-inch",
  "Dell XPS 13",
  "Sony WH-1000XM5",
  "Bose QuietComfort 45",
  "Apple Watch Ultra",
  "Google Pixel 8 Pro",
  "PlayStation 5",
  "Xbox Series X",
  "Nintendo Switch OLED",
  "Canon EOS R5",
  "DJI Mavic 3 Pro",
  "LG OLED C3",
  "Samsung QLED QN90B",
];

const searchInput = document.getElementById("search-input");
const autocompleteResults = document.getElementById("autocomplete-results");
const searchButton = document.getElementById("search-button");

function filterProducts(query) {
  return products.filter((product) =>
    product.toLowerCase().includes(query.toLowerCase())
  );
}

function showAutocompleteResults(results) {
  autocompleteResults.innerHTML = "";
  if (results.length > 0) {
    results.slice(0, 6).forEach((result) => {
      const div = document.createElement("div");
      div.textContent = result;
      div.addEventListener("click", () => {
        searchInput.value = result;
        autocompleteResults.style.display = "none";
      });
      autocompleteResults.appendChild(div);
    });
    autocompleteResults.style.display = "block";
  } else {
    autocompleteResults.style.display = "none";
  }
}

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim();
  if (query.length > 0) {
    const results = filterProducts(query);
    showAutocompleteResults(results);
  } else {
    autocompleteResults.style.display = "none";
  }
});

searchButton.addEventListener("click", () => {
  const query = searchInput.value.trim();
  if (query.length > 0) {
    alert(`You searched for: ${query}`);
    // Add your search logic here (e.g., redirect to search results page)
  }
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".search-bar")) {
    autocompleteResults.style.display = "none";
  }
});