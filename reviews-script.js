let reviews = [
    {
        "reviewNo": 0,
        "image": 'ayo-ogunseinde.jpg',
        "name": "Ayo Ogunseinde",
        "job": "Writer",
        "review": "'The Auberge continues to be a wonderful as always. Went there to celebrate a wedding anniversary and it was great all around - the food, the service, the location were all perfect.'"
    },
    {
        "reviewNo": 1,
        "image": 'ian-dooley.jpg',
        "name": "Ian Dooley",
        "job": "Youtuber",
        "review": "'We went for an anniversary dinner with family. I requested a quiet table and they seated us on the patio which was fine because they have a/c out there. Service was very attentive and food was excellent. A very enjoyable evening.'"
    },
    {
        "reviewNo": 2,
        "image": 'michael-dam.jpg',
        "name": "Michael Dam",
        "job": "Actress",
        "review": "'Absolutely unbelievable experience at Boca, as always. The attention to detail was amazing as always. The team always blows us away and the food was absolutely wonderful and fresh.'"
    },
    {
        "reviewNo": 3,
        "image": 'rafaella-mendes.jpg',
        "name": "Rafaella Mendes",
        "job": "Software Developer",
        "review": "'Great service, willing to adjust plates offered to your dietary restrictions. Tried the beef tartare, grilled octopus, trout and roasted duck and sorbet and berried for desert. All of them were great with a lot of flavor and texture. Favorite were octopus and trout.'"
    },
    {
        "reviewNo": 4,
        "image": 'joseph-gonzalez.jpg',
        "name": "Joseph Gonzalez",
        "job": "Gym Trainer",
        "review": "'My girlfriend and I did the Omakase 7 course menu (if one person at the table does it, the whole table must also participate). Every course was fantastic. For me the standouts were the tuna/truffle cracker, the sushi, the seabass and the duck ramen. However, the dessert was also mind-numbingly delicious. Very attentive and professional service.'"
    },
    {
        "reviewNo": 5,
        "image": 'toa-heftiba.jpg',
        "name": "Toa Heftiba",
        "job": "C.A.",
        "review": "'Amazing experience - fantastic food and service was phenomenal. Our sever, Marco, was outstanding: extremely polite, quick to respond and great personality. Food was superb and Bouchard is definitely a staple of Newport. We cant wait to come back! Five stars.'"
    }
]
let lenRev = reviews.length;
const leftBtn = document.getElementById("left-btn");
const rightBtn = document.getElementById("right-btn");
const randomBtn = document.querySelector(".random");
let imageTag = document.querySelector("img");
let custNameBox = document.querySelector("#cust-name");
let custJobBox = document.querySelector("#cust-job");
let reviewBox = document.querySelector("#review");
let currentCust;
// Event Listeners

document.addEventListener("DOMContentLoaded", randomReview)
leftBtn.addEventListener("click", previousReview);
rightBtn.addEventListener("click", nextReview);
randomBtn.addEventListener("click", randomReview);

// Functions

function showCustomer(num){
    let myCustomer = reviews[num];
    imageTag.src = myCustomer.image;
    custNameBox.innerHTML = myCustomer.name;
    custJobBox.innerHTML = myCustomer.job;
    reviewBox.innerHTML = myCustomer.review;
    currentCust = myCustomer.reviewNo;
    if (currentCust === 0){
        leftBtn.style.color = "rgb(212, 212, 212)";
        rightBtn.style.color = "blue";
    }
    else if(currentCust === lenRev-1){
        rightBtn.style.color = "rgb(212, 212, 212)";
        leftBtn.style.color = "blue";
    }
    else{
        rightBtn.style.color = "blue";
        leftBtn.style.color = "blue";
    }
    console.log(currentCust);
}
function previousReview(){
    if (currentCust <= 0){
        currentCust = 0;
    }
    else{
        currentCust--;
    }
    showCustomer(currentCust);
}
function nextReview(){
    if (currentCust >= lenRev-1){
        currentCust = lenRev-1;
    }
    else{
        currentCust++;
    }
    showCustomer(currentCust);
}
function randomReview(){
    let randomNumber = Math.floor(Math.random()*lenRev);
    showCustomer(randomNumber);
}