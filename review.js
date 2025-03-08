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

// Review Form Submission
const reviewForm = document.getElementById("review-form");

reviewForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const name = document.getElementById("review-name").value;
  const rating = document.getElementById("review-rating").value;
  const message = document.getElementById("review-message").value;
  
  // Create a new review card
  const reviewCard = document.createElement("div");
  reviewCard.classList.add("review-card");
  
  const reviewRating = document.createElement("div");
  reviewRating.classList.add("review-rating");
  reviewRating.textContent = "★".repeat(rating) + "☆".repeat(5 - rating);
  
  const reviewText = document.createElement("p");
  reviewText.classList.add("review-text");
  reviewText.textContent = message;
  
  const reviewAuthor = document.createElement("p");
  reviewAuthor.classList.add("review-author");
  reviewAuthor.textContent = `- ${name}`;
  
  reviewCard.appendChild(reviewRating);
  reviewCard.appendChild(reviewText);
  reviewCard.appendChild(reviewAuthor);
  
  // Add the new review card to the review list
  const reviewList = document.querySelector(".review-list");
  reviewList.appendChild(reviewCard);
  
  // Reset the form
  reviewForm.reset();
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

