const camps =[
    {
        id: 1,
        name:"Mount Ulap",
        creator: "Opeyemi Agbaje",
        price: "$104.99/night",
        description:"Mount Ulap is a 7.7 kilometer moderately trafficked piont-to-point trail located near tuba, benguet, Phillipines that offers the chance to see a widelife and is rated as moderate. The trait isprimary used for hiking.",
         Image:"./Assets/Camp Images/High Quality Images/Mount Ulap.png"

    },

    {
        id: 2,
        name:"Calagus Island",
        creator: "Opeyemi Agbaje",
        price: "$104.99/night",
        description:"Lorem ipsum dolor sit amet consecteur adipiscing elit. Incidunt dolore quia veniam maxime quam. Aspernatur magni in dolores at animi molestiae error.Fgaofficilis necessitatibus magnin modi?Esse,pariatur totam?",
         Image:"./Assets/Camp Images/High Quality Images/Calagus Island.jpg"
        },

        {
            id: 3,
            name:"Onay Beach",
            creator: "Opeyemi Agbaje",
            price: "$104.99/night",
            description:"Lorem ipsum dolor sit amet consecteur adipiscing elit. Incidunt dolore quia veniam maxime quam. Aspernatur magni in dolores at animi molestiae error.Fgaofficilis necessitatibus magnin modi?Esse,pariatur totam?",
             Image:"./Assets/Camp Images/High Quality Images/Onay Beach.jpg"
            },

            {
                id: 4,
                name:"Seven Sisters Waterfall",
                creator: "Opeyemi Agbaje",
                price: "$104.99/night",
                description:"Lorem ipsum dolor sit amet consecteur adipiscing elit. Incidunt dolore quia veniam maxime quam. Aspernatur magni in dolores at animi molestiae error.Fgaofficilis necessitatibus magnin modi?Esse,pariatur totam?",
                 Image:"./Assets/Camp Images/High Quality Images/Seven Sisters Waterfall.jpg"
                },
                {
                    id: 5,
                    name:"Latik Riverside",
                    creator: "Opeyemi Agbaje",
                    price: "$104.99/night",
                    description:"Lorem ipsum dolor sit amet consecteur adipiscing elit. Incidunt dolore quia veniam maxime quam. Aspernatur magni in dolores at animi molestiae error.Fgaofficilis necessitatibus magnin modi?Esse,pariatur totam?",
                     Image:"./Assets/Camp Images/High Quality Images/Latik Riverside.jpg"
                    },
                    {
                        id: 6,
                        name:"Buloy Springs",
                        creator: "Opeyemi Agbaje",
                        price: "$104.99/night",
                        description:"Lorem ipsum dolor sit amet consecteur adipiscing elit. Incidunt dolore quia veniam maxime quam. Aspernatur magni in dolores at animi molestiae error.Fgaofficilis necessitatibus magnin modi?Esse,pariatur totam?",
                         Image:"./Assets/Camp Images/High Quality Images/Buloy Springs.jpg"
                        }
];

const urlParms= new URLSearchParams(window.location.search);
const campId = parseInt(urlParams.get("id"));

const camp = camps.find((camp)=> camp.id === campId);

const campgroundContainer = document.getElementById("campground-container");

const campgroundHtml =`
<section class="campground">
<img src "${camp.Image}" alt="${camp.name}" class="campground-img w-full mb-3>
<div class="flex flex-row justify-between mb-3">
<h2 class="lg:text-2xl md:text-xl font-bold">${camp.name}</h2>
<p class ="text-gray-900 lg: text-xl text-sm">${camp.price}</p>
</section>`;

campgroundContainer.innerHTML = campgroundHtml;

function toggleMenu() {
    var div =
    document.getElementById("nav-menu");
    if (div.style.display === "none") {
        div.style.display ="block";
    }else {
        div.style.display ="none";
    }
}

var mediaQuery =
window.matchMedia("(min-width:960px)");

function handleMediaChange(e) {
    var div =
    document.getElementById("nav-menu");
    if (e.matches) {
        //full screen view
        div.style.display ="none";
    }
}

mediaQuery.addListener(handleMediaChange);
