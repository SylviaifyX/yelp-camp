// import { camps } from "./camp-data.js";

function toggleMenu() {
  var div = document.getElementById("nav-menu");
  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
}

var mediaQuery = window.matchMedia("(min-width: 960px)");

function handleMediaChange(e) {
  var div = document.getElementById("nav-menu");
  if (e.matches) {
    // Full screen view
    div.style.display = "none";
  }
}

mediaQuery.addListener(handleMediaChange);

// Define array to hold camp data
const camps = [
  {
    id: 1,
    name: "Mount Ulap",
    description:
      "One of the most famous hikes in Benguet is Mt Ulap in Itogon.",
    image: "./Assets/Camp Images/Compressed Images/Mount-Ulap.jpg"
  },
  {
    id: 2,
    name: "Calaguas Islands",
    description:
      "A paradise of island that can rival the white sand beauty of Boracay.",
    image: "./Assets/Camp Images/Compressed Images/Calaguas-Island.jpg"
  },
  {
    id: 3,
    name: "Onay Beach",
    description:
      "This is one of the best beach camping sites, beautiful and pristine.",
    image: "./Assets/Camp Images/Compressed Images/Onay-Beach.jpg"
  },
  {
    id: 4,
    name: "Seven Sisters Waterfall",
    description: "The Seven Sisters is the 39th tallest waterfall in Norway.",
    image: "./Assets/Camp Images/Compressed Images/Seven-Sisters-Waterfall.jpg"
  },
  {
    id: 5,
    name: "Latik Riverside",
    description:
      "Philippines is one of the most dazzling countries in all of Asia.",
    image: "./Assets/Camp Images/Compressed Images/Latik-Riverside.jpg"
  },
  {
    id: 6,
    name: "Buloy Springs",
    description:
      "This is one of the best beach camping sites, beautiful and pristine.",
    image: "./Assets/Camp Images/Compressed Images/Buloy-Springs.jpg"
  }
];

// Get html elements
const searchInput = document.getElementById("search-input");
const campContainer = document.getElementById("camp-container");

// Map through camp array to create html elements
const campElements = camps.map((camp) => {
  const campHtml = `
      <div class="max-w-sm border border-gray-300 rounded overflow-hidden p-3">
        <img src="${camp.image}" alt="${camp.name}" class="block h-70 w-full rounded-md object-cover object-center">
        <div>
          <h2 class="font-bold text-xl mb-2 pt-2">${camp.name}</h2>
          <p class="text-gray-700 text-base">${camp.description}</p>
          <div class="pt-4">
          <button class="camp-btn bg-white hover:bg-gray-100 text-gray-800 font-bold w-full text-xl py-2 px-2 mb-2 border border-gray-300 rounded" data-camp-id="${camp.id}">View Campground</button>
          </div>
        </div>
      </div>`;
  return campHtml;
});

// Insert the camp elements into the HTML
campContainer.innerHTML = campElements.join("");

// Add event listeners to the camp buttons
campContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("camp-btn")) {
    const campId = event.target.dataset.campId;
    viewCampground(campId);
  }
});

// Search function
function handleSearch() {
  // Define search param
  const searchTerm = searchInput.value.toLowerCase();

  // Filter through the camp data
  const filteredCamps = camps.filter((camp) => {
    return camp.name.toLowerCase().includes(searchTerm);
  });

  // Return error mssage if no camps found
  if (filteredCamps.length === 0) {
    campContainer.innerHTML = "No camps found";
    return;
  }

  // Return the matched data to create html elements
  const campElements = filteredCamps.map((camp) => {
    const campHtml = `
      <div class="max-w-sm border border-gray-300 rounded overflow-hidden p-3">
        <img src="${camp.image}" alt="${camp.name}" class="block h-70 w-full rounded-md object-cover object-center">
        <div>
          <h2 class="font-bold text-xl mb-2 pt-2">${camp.name}</h2>
          <p class="text-gray-700 text-base">${camp.short_description}</p>
          <div class="pt-4">
          <button class="camp-btn bg-white hover:bg-gray-100 text-gray-800 font-bold w-full text-xl py-2 px-2 mb-2 border border-gray-300 rounded" data-camp-id="${camp.id}">View Campground</button>
          </div>
        </div>
      </div>`;
    return campHtml;
  });

  // Insert the camp elements into the HTML
  campContainer.innerHTML = campElements.join("");

  // Add event listeners to the camp buttons
  campContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("camp-btn")) {
      const campId = event.target.dataset.campId;
      viewCampground(campId);
    }
  });
}

// Redirect to the individual camp page using the campId parameter
function viewCampground(campId) {
  window.location.href = `camp-ground.html?id=${campId}`;
}
