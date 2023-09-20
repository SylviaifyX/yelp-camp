const camps = [
    {
      id: 1,
      name: "Mount Ulap",
      creator: "Opeyemi Agbaje",
      price: "$104.99/night",
      description: "Mount Ulap is a 7.7 kilometer moderately trafficked point-to-point trail located near tuba, benguet, Philippines that offers the chance to see a wildlife and is rated as moderate. The trait is primary used for hiking.",
      image: "./Assets/Camp Images/High Quality Images/Mount-Ulap.png"
    },
    {
      id: 2,
      name: "Calagus Islands",
      creator: "Gloria Jumai",
      price: "$104.99/night",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolore quia veniam maxime quam. Aspernatur magni in dolores at animi molestiae error. Fuga officiis necessitatibus magni modi? Esse, pariatur totam?",
      image: "./Assets/Camp Images/High Quality Images/Calagus-Islands.jpg"
    },
    {
      id: 3,
      name: "Onay Beach",
      creator: "Adediran Florish",
      price: "$104.99/night",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolore quia veniam maxime quam. Aspernatur magni in dolores at animi molestiae error. Fuga officiis necessitatibus magni modi? Esse, pariatur totam?",
      image: "./Assets/Camp Images/High Quality Images/Onay-Beach.jpg"
    },
    {
      id: 4,
      name: "Seven Sisters Waterfall",
      creator: "Ifeoma Okpara",
      price: "$104.99/night",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolore quia veniam maxime quam. Aspernatur magni in dolores at animi molestiae error. Fuga officiis necessitatibus magni modi? Esse, pariatur totam?",
      image: "./Assets/Camp Images/High Quality Images/Seven-Sisters-Waterfall.jpg"
    },
    {
      id: 5,
      name: "Latik Riverside",
      creator: "Opeyemi Agbaje",
      price: "$104.99/night",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolore quia veniam maxime quam. Aspernatur magni in dolores at animi molestiae error. Fuga officiis necessitatibus magni modi? Esse, pariatur totam?",
      image: "./Assets/Camp Images/High Quality Images/Latik-Riverside.jpg"
    },
    {
      id: 6,
      name: "Buloy Springs",
      creator: "Opeyemi Agbaje",
      price: "$104.99/night",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolore quia veniam maxime quam. Aspernatur magni in dolores at animi molestiae error. Fuga officiis necessitatibus magni modi? Esse, pariatur totam?",
      image: "./Assets/Camp Images/High Quality Images/Buloy-Springs.jpg"
    }
  ];
  
  const urlParams = new URLSearchParams(window.location.search);
  const campId = parseInt(urlParams.get("id"));
  
  const camp = camps.find((camp) => camp.id === campId);
  
  const campgroundContainer = document.getElementById("campground-container");
  
  const campgroundHtml = `
    <section class="campground">
      <img src="${camp.image}" alt="${camp.name}" class="campground-img w-full mb-3">
      <div class="flex flex-row justify-between mb-3">
        <h2 class="lg:text-2xl md:text-xl font-bold">${camp.name}</h2>
        <p class="text-gray-900 lg:text-xl text-sm">${camp.price}</p>
      </div>
      <p class="text-gray-800 mb-3">${camp.description}</p>
      <p class="text-gray-700 italic">Submitted by ${camp.creator}</p>
    </section>`;
  
  campgroundContainer.innerHTML = campgroundHtml;
  
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