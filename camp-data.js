const campsData = [
    {
        id: 1,
        image: "./Assets/MountUlap.jpg",
        name: "Mount Ulap",
        long_description: "One of the Most famous hikes in Benguet is Mt Ulap in Itogon.",
        btn: "View more"

    },
    {
        id: 2,
        image: "./Assets/CalaguasIsland.jpg",
        name: "Calagus island",
        long_description: "A paradise of island that can rival the white sand beauty of Boracay.",
        btn: "View more"
    },
    {
        id: 3,
        image: "./Assets/OnayBeach.jpg",
        name: "Onay Beach",
        long_description: "This is one of the best beach camping sites, beautiful and pristine.",
        btn: "View more"
    },
    {
        id: 4,
        image: "./Assets/SevenSistersWaterfall.jpg",
        name: "Seven Sisters Waterfall",
        long_description: "The Seven Sisters is the 39th tallest waterfall in Norway.",
        btn: "View more"
    },
    {
        id: 5,
        image: "./Assets/LatikRiverside.jpg",
        name: "Latik Riverside",
        long_description: "Philippines is one of the most dazzling countries in all asia.",
        btn: "View more"
    },
    {
        id: 6,
        image: "./Assets/BuloySprings.jpg",
        name: "Buloy Springs",
        long_description: "This is one of the best beach-camping sites,beautiful and pristine.",
        btn: "View more"
    },
];


const dataHolder = document.querySelector(".Holder")
campsData.forEach((dataInfo, i) => {
    dataHolder.innerHTML +=`<div class="campdata border-2  rounded-xl p-[18px]">
        <div class="w-[100%]">
        <img class="object-cover h-auto w-full rounded-xl"
        src=${dataInfo.image} alt="">
        </div>
        <div class="cardbody flex flex-col space-y-[8px]">
         <h1 class="font-bold">${dataInfo.name}</h1>
        <p>${dataInfo.long_description}</p>
        <button class="border border-gray-200 p-[10px] text-center">${dataInfo.btn}</button>
         </div>
    </div>`
})

// using the map method

// const showCard = campsData.map((dataInfo, index) => {

//     return `<div class="campdata  w-[100px] border-2  border-red-500 rounded-xl p-[18px] flex flex-col gap-[17px]">
//     <div class="w-[100%]">
//         <img class="object-cover h-auto w-full rounded-xl"
//             src=${dataInfo.image} alt="">
//     </div>
//     <div class="cardbody flex flex-col space-y-[8px]">
//         <h1 class="font-bold">${dataInfo.name}</h1>
//         <p>${dataInfo.long_description}</p>
//         <button class="border border-gray-200 p-[10px] text-center">${dataInfo.btn}</button>
//     </div>
// </div>`
// })

// dataHolder.innerHTML = showCard.join("")



