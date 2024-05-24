const jsonObject = [
  {
    name: "Audi 8",
    price: 500,
    quantity: 100,
    thumbnail: "http://template1030.tapato.vn/images_uploads/audi6-1_117.jpg",
  },
  {
    name: "Audi 8",
    price: 500,
    quantity: 100,
    thumbnail: "http://template1030.tapato.vn/images_uploads/audi6-1_117.jpg",
  },
  {
    name: "Audi 8",
    price: 500,
    quantity: 100,
    thumbnail: "http://template1030.tapato.vn/images_uploads/audi6-1_117.jpg",
  },
  {
    name: "Audi 8",
    price: 500,
    quantity: 100,
    thumbnail: "http://template1030.tapato.vn/images_uploads/audi6-1_117.jpg",
  },
  {
    name: "Audi 8",
    price: 500,
    quantity: 100,
    thumbnail: "http://template1030.tapato.vn/images_uploads/audi6-1_117.jpg",
  },
  {
    name: "Audi 8",
    price: 500,
    quantity: 100,
    thumbnail: "http://template1030.tapato.vn/images_uploads/audi6-1_117.jpg",
  },
];
const boxCar = document.querySelector(".box-car");
if (boxCar) {
  const html = jsonObject
    .map((item) => {
      return `<div class="car-item">
      <img
        src=${item.thumbnail}
        alt=""
      />
      <div class="content-car">
        <div class="name-car">${item.name}</div>
        <div class="price-car">${item.price}$</div>
      </div>
      <hr />
      <div class="notice-car">
        <div class="quantity-car">Stock: ${item.quantity}</div>
        <button class="order-btn">Đặt hàng</button>
      </div>
    </div>`;
    })
    .join("");
  boxCar.innerHTML = html;
}
const toast = document.querySelector(".toast");
const toastRemaining = document.querySelector(".toast-remaining");
const arrowRight = document.querySelector(".arrowRight");
if (arrowRight) {
  arrowRight.addEventListener("click", () => {
    toast.style.display = "block";
    toastRemaining.style.display = "block";
  });
  const dark = document.querySelector(".toast-remaining");
  dark.addEventListener("click", () => {
    toast.style.display = "none";
    toastRemaining.style.display = "none";
  });
}
document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form from submitting

  // Get input elements
  const email = document.querySelector(".email");
  const phone = document.querySelector(".number");
  const name = document.querySelector(".name-input");
  const age = document.querySelector(".age");
  const job = document.querySelector(".job");

  // Get input values
  const emailInput = email.value;
  const phoneInput = phone.value;
  const nameInput = name.value;
  const ageInput = age.value;
  const jobInput = job.value;

  // Simple email regex for validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // Simple phone regex (e.g., for 10 digits)
  const phoneRegex = /^\d{10}$/;
  const ageRegex = /^(?:1[01][0-9]|120|[1-9]?[0-9])$/;

  // Reset previous error styles and messages
  email.style.border = "";
  phone.style.border = "";
  age.style.border = "";
  name.style.border = "";
  job.style.border = "";
  document.querySelector(".email-error").style.visibility = "hidden";
  document.querySelector(".phone-error").style.visibility = "hidden";
  document.querySelector(".age-error").style.visibility = "hidden";
  document.querySelector(".name-error").style.visibility = "hidden";
  document.querySelector(".job-error").style.visibility = "hidden";
  // Validate email
  if (nameInput === "") {
    name.style.border = "solid 1px #e60000";
    document.querySelector(".name-error").style.visibility = "visible";
  }
  if (jobInput === "") {
    job.style.border = "solid 1px #e60000";
    document.querySelector(".job-error").style.visibility = "visible";
  }
  // Validate email
  if (!ageRegex.test(ageInput)) {
    age.style.border = "solid 1px #e60000";
    document.querySelector(".age-error").style.visibility = "visible";
  }
  // Validate email
  if (!emailRegex.test(emailInput)) {
    email.style.border = "solid 1px #e60000";
    document.querySelector(".email-error").style.visibility = "visible";
  }

  // Validate phone
  if (!phoneRegex.test(phoneInput)) {
    phone.style.border = "solid 1px #e60000";
    document.querySelector(".phone-error").style.visibility = "visible";
  }
});

var byline = document.getElementById("byline");
bylineText = byline.innerHTML;
bylineArr = bylineText.split("");
byline.innerHTML = "";

var span;
var letter;

for (i = 0; i < bylineArr.length; i++) {
  span = document.createElement("span");
  letter = document.createTextNode(bylineArr[i]);
  if (bylineArr[i] == " ") {
    byline.appendChild(letter);
  } else {
    span.appendChild(letter);
    byline.appendChild(span);
  }
}
document.addEventListener("DOMContentLoaded", () => {
  const star = document.querySelector(".star");
  const wars = document.querySelector(".wars");
  const byline = document.querySelector(".byline");

  const handleAnimationEnd = () => {
    star.style.animation = "none";
    wars.style.animation = "none";
    byline.style.animation = "none";
  };

  star.addEventListener("animationend", handleAnimationEnd);
  wars.addEventListener("animationend", handleAnimationEnd);
  byline.addEventListener("animationend", handleAnimationEnd);
});
