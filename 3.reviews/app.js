// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jp" +
      "g",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before " +
      "they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia ho" +
      "odie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jp" +
      "g",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier" +
      " gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.phot" +
      "o booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jp" +
      "g",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bi" +
      "t, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclet" +
      "te post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jp" +
      "g",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray" +
      " stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up " +
      "3 wolf moon tote bag street art shabby chic. ",
  },
];

// select from DOM
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// initial first load
window.addEventListener("DOMContentLoaded", () => {
  showPerson();
});

function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// show next
nextBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
    showPerson(currentItem);
  }
  showPerson(currentItem);
});

// show previous
prevBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
    showPerson(currentItem);
  }
  showPerson(currentItem);
});

// show random review
randomBtn.addEventListener("click", () => {
  currentItem = generateRandomREview();
  showPerson(currentItem);
});

function generateRandomREview() {
  return Math.floor(Math.random() * reviews.length);
}
