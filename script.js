const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

const selectedOption = document.querySelector(".selected-option");
const optionsBox = document.querySelector(".options");
const optionItems = document.querySelectorAll(".option");

selectedOption.addEventListener("click", () => {
  optionsBox.style.display =
    optionsBox.style.display === "block" ? "none" : "block";
});

optionItems.forEach((item) => {
  item.addEventListener("click", () => {
    selectedOption.innerHTML = item.innerHTML;
    optionsBox.style.display = "none";
  });
});

document.getElementById("quizForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const veins = e.target.veins.value;
  const jewelry = e.target.jewelry.value;
  const sun = e.target.sunReaction.value;

  let score = { cool: 0, warm: 0, neutral: 0 };

  if (veins === "blue") score.cool++;
  else if (veins === "green") score.warm++;
  else score.neutral++;

  if (jewelry === "silver") score.cool++;
  else if (jewelry === "gold") score.warm++;
  else score.neutral++;

  if (sun === "burn") score.cool++;
  else if (sun === "tan") score.warm++;
  else score.neutral++;

  const max = Math.max(score.cool, score.warm, score.neutral);
  let result = "";

  if (score.cool === max) result = "Your undertone is cool ❄️";
  else if (score.warm === max) result = "Your undertone is warm 🔥";
  else result = "Your undertone is neutral 🌿";

  document.getElementById("result").innerText = result;
});

 document.getElementById("skinTest").addEventListener("submit", function (e) {
    e.preventDefault();

    const answers = ["q1", "q2", "q3"];
    let scores = { dry: 0, oily: 0, combo: 0, normal: 0 };

    answers.forEach((q) => {
      const val = document.querySelector(`input[name="${q}"]:checked`);
      if (val) {
        scores[val.value]++;
      }
    });

    // پیدا کردن بیشترین امتیاز
    let skinType = Object.keys(scores).reduce((a, b) =>
      scores[a] > scores[b] ? a : b
    );

    let resultText = "";

    switch (skinType) {
      case "dry":
        resultText = "Your skin type is: Dry 🌾";
        break;
      case "oily":
        resultText = "Your skin type is: Oily ✨";
        break;
      case "combo":
        resultText = "Your skin type is: Combination 🌗";
        break;
      case "normal":
        resultText = "Your skin type is: Normal 🌸";
        break;
    }

    document.getElementById("skinResult").innerText = resultText;
  });

  const faders = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // فقط یک‌بار انیمیشن اجرا شه
      }
    });
  }, {
    threshold: 0.2 // یعنی وقتی 20٪ عنصر تو دید بیاد، انیمیشن شروع شه
  });

  
faders.forEach(fader => {
  observer.observe(fader);
});

document.querySelector('.foundation-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const undertone = document.getElementById('undertone').value;
  const skinType = document.getElementById('skinType').value;

  // گرفتن شید از المنت انتخاب شده
  const selectedShadeEl = document.querySelector('.selected-option');
  const shade = selectedShadeEl ? selectedShadeEl.textContent.trim() : null;

  if (!shade || shade === 'Select a shade') {
    alert('Please select your skin shade!');
    return;
  }

  let recommendation = `Based on your undertone (${undertone}), skin type (${skinType}), and chosen shade (${shade}), we recommend: `;

  // پیشنهاد بر اساس undertone
  if (undertone === 'cool') {
    recommendation += " a foundation with pink or blue undertones";
  } else if (undertone === 'warm') {
    recommendation += " a foundation with golden or yellow undertones";
  } else {
    recommendation += " a neutral-tone foundation that balances between pink and yellow";
  }

  // پیشنهاد بر اساس skin type
  if (skinType === 'dry') {
    recommendation += ", with a hydrating and dewy finish.";
  } else if (skinType === 'oily') {
    recommendation += ", with a matte, oil-free formula.";
  } else if (skinType === 'combination') {
    recommendation += ", that offers a natural finish and controls oil in the T-zone.";
  } else if (skinType === 'sensitive') {
    recommendation += ", that is fragrance-free and hypoallergenic.";
  }

  // نمایش پیشنهاد در پایین فرم یا هر جای مناسب
  let resultDiv = document.getElementById('foundation-result');
  if (!resultDiv) {
    resultDiv = document.createElement('div');
    resultDiv.id = 'foundation-result';
    resultDiv.style.marginTop = '20px';
    resultDiv.style.padding = '10px';
    resultDiv.style.border = '1px solid #ccc';
    resultDiv.style.borderRadius = '8px';
    resultDiv.style.background = '#fff8f4';
    document.querySelector('.foundation-form').appendChild(resultDiv);
  }

  resultDiv.innerText = recommendation;
});

const foundationCircles = document.querySelectorAll('#foundationColors .color-circle');
let selectedFoundationColor = null;

// فاندیشن انتخاب بشه
foundationCircles.forEach(circle => {
  circle.addEventListener('click', () => {
    foundationCircles.forEach(c => c.classList.remove('selected'));
    circle.classList.add('selected');
    selectedFoundationColor = circle.getAttribute('data-color');
  });
});

// لیست پیشنهادها
const lipstickSuggestions = [
  {
    eyeColor: 'blue',
    dressColor: 'red',
    foundationColors: 'Porcelain',
    lipstick: 'Coral Warm',
    hex: '#f88379'
  },
  {
    eyeColor: 'brown',
    dressColor: 'black',
    foundationColors: 'Ivory',
    lipstick: 'Deep Plum',
    hex: '#580f41'
  },
  {
    eyeColor: 'green',
    dressColor: 'pink',
    foundationColors: 'Porcelain',
    lipstick: 'Rosy Nude',
    hex: '#b97a7a'
  },
  {
    eyeColor: 'hazel',
    dressColor: 'white',
    foundationColors: 'Ivory',
    lipstick: 'Peachy Beige',
    hex: '#e6b7a9'
  },
  {
    eyeColor: 'brown',
    dressColor: 'green',
    foundationColors: 'Mocha',
    lipstick: 'Brick Red',
    hex: '#8b3a3a'
  },
  {
    eyeColor: 'gray',
    dressColor: 'blue',
    foundationColors: 'Porcelain',
    lipstick: 'Berry Pink',
    hex: '#b3364b'
  }
];

// گرفتن انتخاب کاربر از input های رادیویی
function getSelectedRadioValue(name) {
  const selected = document.querySelector(`input[name="${name}"]:checked`);
  return selected ? selected.value : null;
}

// تابع پیشنهاد رژلب
function suggestLipstick(eyeColor, dressColor, foundationColor) {
  return lipstickSuggestions.find(item =>
    item.eyeColor === eyeColor &&
    item.dressColor === dressColor &&
    item.foundationColors === foundationColor
  );
}

// نمایش پاپ‌آپ با نتیجه
function showSuggestion() {
  const eyeColor = getSelectedRadioValue('eyeColor');
  const dressColor = getSelectedRadioValue('dressColor');
  const foundationColor = selectedFoundationColor;

  if (!eyeColor || !dressColor || !foundationColor) {
    alert('Please select all options before getting a suggestion!');
    return;
  }

  const result = suggestLipstick(eyeColor, dressColor, foundationColor);
  const overlay = document.getElementById('lipstickOverlay');
  const circle = document.getElementById('lipColorCircle');
  const text = overlay.querySelector('p');

  if (result) {
    circle.style.backgroundColor = result.hex;
    text.innerHTML = `This shade <strong>${result.lipstick}</strong> looks amazing on you! 💄`;
  } else {
    circle.style.backgroundColor = '#d8b4b4'; // رنگ پیش‌فرض نود
    text.innerHTML = `A Nude Or Classic Pink Is Always A Good Choice 💋`;
  }

  overlay.style.display = 'flex';
}

document.getElementById('closePopup').addEventListener('click', () => {
  document.getElementById('lipstickOverlay').style.display = 'none';
});

// بستن پاپ‌آپ
//undertone
function openPopupUnderTone() {
  document.getElementById("underToneOverlay").style.display = "block";
  document.getElementById("underToneBox").style.display = "block";
   closeHamburgerMenu();
}

function closePopupUnderTone() {
  document.getElementById("underToneOverlay").style.display = "none";
  document.getElementById("underToneBox").style.display = "none";
}
//skintype
function openPopupSkin() {
  document.getElementById("skinTypeOverlay").style.display = "block";
  document.getElementById("skinTypeBox").style.display = "block";
   closeHamburgerMenu();
}

function closePopupSkin() {
  document.getElementById("skinTypeOverlay").style.display = "none";
  document.getElementById("skinTypeBox").style.display = "none";
 
}
//foundation

function openPopupFoundation() {
  document.getElementById("foundationOverlay").style.display = "block";
  document.getElementById("foundationBox").style.display = "block";
   closeHamburgerMenu();
}

function closePopupFoundation() {
  document.getElementById("foundationOverlay").style.display = "none";
  document.getElementById("foundationBox").style.display = "none";
}

//lipstick

function openPopupLipstick() {
  document.getElementById("liipstickOverlay").style.display = "block";
  document.getElementById("lipstickBox").style.display = "block";
   closeHamburgerMenu();
}

function closePopupLipstick() {
  document.getElementById("liipstickOverlay").style.display = "none";
  document.getElementById("lipstickBox").style.display = "none";
}
//
document.querySelector(".popupOverlay").classList.add("show");
document.querySelector(".popup-box").classList.add("show");

document.querySelector(".popupOverlay").classList.remove("show");
document.querySelector(".popup-box").classList.remove("show");

function showIntroOverlay() {
    document.getElementById('introOverlay').style.display = 'flex';
  }

  function hideIntroOverlay() {
    document.getElementById('introOverlay').style.display = 'none';
  }

  function closeHamburgerMenu() {
  navLinks.classList.remove("active");
}