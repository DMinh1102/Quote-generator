// ===== Quote Data (Top 50 languages by total speakers) =====
const quotes = [
  { text: "I love you", author: "in English", pronunciation: "ai luv yoo" },
  { text: "我爱你", author: "in Mandarin Chinese", pronunciation: "wǒ ài nǐ" },
  { text: "मैं तुमसे प्यार करता हूँ", author: "in Hindi", pronunciation: "main tumse pyaar karta hoon" },
  { text: "Te amo", author: "in Spanish", pronunciation: "teh ah-mo" },
  { text: "Je t'aime", author: "in French", pronunciation: "zhuh tem" },
  { text: "أحبك", author: "in Arabic", pronunciation: "uhibbuka" },
  { text: "আমি তোমাকে ভালোবাসি", author: "in Bengali", pronunciation: "ami tomake bhalobashi" },
  { text: "Eu te amo", author: "in Portuguese", pronunciation: "eh-oo chee ah-mo" },
  { text: "Я тебя люблю", author: "in Russian", pronunciation: "ya tebya lyublyu" },
  { text: "میں تم سے پیار کرتا ہوں", author: "in Urdu", pronunciation: "main tumse pyaar karta hoon" },
  { text: "Aku cinta kamu", author: "in Indonesian", pronunciation: "ah-koo chin-ta kah-moo" },
  { text: "Ich liebe dich", author: "in German", pronunciation: "ikh lee-buh dikh" },
  { text: "愛してる", author: "in Japanese", pronunciation: "ai-shee-teh-roo" },
  { text: "Nakupenda", author: "in Swahili", pronunciation: "nah-koo-pen-dah" },
  { text: "मी तुझ्यावर प्रेम करतो", author: "in Marathi", pronunciation: "mee tujhyavar prem karto" },
  { text: "నేను నిన్ను ప్రేమిస్తున్నాను", author: "in Telugu", pronunciation: "nenu ninnu premistunnanu" },
  { text: "Seni seviyorum", author: "in Turkish", pronunciation: "seh-nee seh-vee-yo-room" },
  { text: "நான் உன்னை காதலிக்கிறேன்", author: "in Tamil", pronunciation: "naan unnai kaadhalikiren" },
  { text: "我愛你", author: "in Cantonese", pronunciation: "ngóh oi néih" },
  { text: "Anh yêu em", author: "in Vietnamese", pronunciation: "ahn yew em" },
  { text: "我爱侬", author: "in Wu Chinese", pronunciation: "ngu eh nong" },
  { text: "사랑해", author: "in Korean", pronunciation: "sa-rang-hae" },
  { text: "من تو را دوست دارم", author: "in Persian", pronunciation: "man to ra doost daram" },
  { text: "Ina sonki", author: "in Hausa", pronunciation: "ee-nah son-kee" },
  { text: "Mahal kita", author: "in Filipino", pronunciation: "ma-hal kee-ta" },
  { text: "ମୁଁ ତୁମକୁ ଭଲ ପାଏ", author: "in Odia", pronunciation: "mun tumaku bhala pae" },
  { text: "Люблю тебе", author: "in Ukrainian", pronunciation: "lyublyu tebe" },
  { text: "ငါ မင်းကို ချစ်တယ်", author: "in Burmese", pronunciation: "nga min ko chit teh" },
  { text: "ฉันรักคุณ", author: "in Thai", pronunciation: "chan rak khun" },
  { text: "હું તને પ્રેમ કરું છું", author: "in Gujarati", pronunciation: "hoon tane prem karoo choo" },
  { text: "Kocham cię", author: "in Polish", pronunciation: "ko-ham cheh" },
  { text: "ನಾನು ನಿನ್ನನ್ನು ಪ್ರೀತಿಸುತ್ತೇನೆ", author: "in Kannada", pronunciation: "naanu ninnannu preetisuttene" },
  { text: "ഞാൻ നിന്നെ സ്നേഹിക്കുന്നു", author: "in Malayalam", pronunciation: "njaan ninne snehikkunnu" },
  { text: "Saya cintakan awak", author: "in Malay", pronunciation: "sah-yah chin-ta-kan ah-wak" },
  { text: "ⵏⴽⵉ ⴽⴰⵎⵓⵜⵃⴱⴱⴽ", author: "in Amazigh", pronunciation: "nek ka-mu-tuh-bek" },
  { text: "Ti amo", author: "in Italian", pronunciation: "tee ah-mo" },
  { text: "Mo nifẹ rẹ", author: "in Yoruba", pronunciation: "mo nee-feh reh" },
  { text: "ਮੈਂ ਤੈਨੂੰ ਪਿਆਰ ਕਰਦਾ ਹਾਂ", author: "in Punjabi", pronunciation: "main tenu pyaar karda haan" },
  { text: "Ik hou van je", author: "in Dutch", pronunciation: "ik how van yuh" },
  { text: "Abdi bogoh ka anjeun", author: "in Sundanese", pronunciation: "ab-dee bo-goh ka an-joon" },
  { text: "ئەز ژ تە حەز دکەم", author: "in Kurdish", pronunciation: "ez ji te hez dikem" },
  { text: "Te iubesc", author: "in Romanian", pronunciation: "teh yoo-besk" },
  { text: "Aku tresno kowe", author: "in Javanese", pronunciation: "ah-koo tres-no ko-weh" },
  { text: "Σ'αγαπώ", author: "in Greek", pronunciation: "sa-ga-pó" },
  { text: "Jag älskar dig", author: "in Swedish", pronunciation: "yag el-skar day" },
  { text: "Miluji tě", author: "in Czech", pronunciation: "mih-loo-yih tyeh" },
  { text: "Szeretlek", author: "in Hungarian", pronunciation: "seh-ret-lek" },
  { text: "Gihigugma tika", author: "in Cebuano", pronunciation: "gee-hee-goog-ma tee-ka" },
  { text: "אני אוהב אותך", author: "in Hebrew", pronunciation: "ani ohev otakh" },
  { text: "እወድሻለሁ", author: "in Amharic", pronunciation: "ewedishalehu" },
];

// ===== State =====
let lastIndex = -1;
let quotesSeen = parseInt(localStorage.getItem("quotesSeen") || "0", 10);

// ===== DOM Elements =====
const quoteCard = document.getElementById("quoteCard");
const quoteText = document.getElementById("quoteText");
const quotePronunciation = document.getElementById("quotePronunciation");
const quoteAuthor = document.getElementById("quoteAuthor");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const tweetBtn = document.getElementById("tweetBtn");
const quoteCountEl = document.getElementById("quoteCount");
const toast = document.getElementById("toast");

// ===== Functions =====

/**
 * Pick a random quote index that isn't the same as the last one shown.
 */
function getRandomIndex() {
  if (quotes.length <= 1) return 0;
  let index;
  do {
    index = Math.floor(Math.random() * quotes.length);
  } while (index === lastIndex);
  return index;
}

/**
 * Display a new random quote with a smooth fade transition.
 */
function showNewQuote() {
  const index = getRandomIndex();
  lastIndex = index;
  const quote = quotes[index];

  // Fade out
  quoteCard.classList.add("fade-out");

  setTimeout(() => {
    quoteText.textContent = quote.text;
    quotePronunciation.textContent = `[ ${quote.pronunciation} ]`;
    quoteAuthor.textContent = `I love you — ${quote.author}`;

    // Fade in
    quoteCard.classList.remove("fade-out");

    // Update counter
    quotesSeen++;
    localStorage.setItem("quotesSeen", quotesSeen.toString());
    updateCounter();
  }, 400);
}

/**
 * Copy the current quote to the clipboard.
 */
async function copyQuote() {
  if (lastIndex === -1) {
    showToast("Generate a quote first!");
    return;
  }

  const quote = quotes[lastIndex];
  const textToCopy = `"${quote.text}" (${quote.pronunciation}) — ${quote.author}`;

  try {
    await navigator.clipboard.writeText(textToCopy);
    showToast("✓ Copied to clipboard!");
  } catch {
    // Fallback for older browsers
    const textarea = document.createElement("textarea");
    textarea.value = textToCopy;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    showToast("✓ Copied to clipboard!");
  }
}

/**
 * Share the current quote on Twitter/X.
 */
function shareOnTwitter() {
  if (lastIndex === -1) {
    showToast("Generate a quote first!");
    return;
  }

  const quote = quotes[lastIndex];
  const tweetText = encodeURIComponent(`"${quote.text}" (${quote.pronunciation}) — ${quote.author}`);
  const url = `https://twitter.com/intent/tweet?text=${tweetText}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

/**
 * Show a toast notification.
 */
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

/**
 * Update the quote counter display.
 */
function updateCounter() {
  quoteCountEl.innerHTML = `Quotes seen: <strong>${quotesSeen}</strong>`;
}

// ===== Event Listeners =====
generateBtn.addEventListener("click", showNewQuote);

// Keyboard shortcut: Space to generate new quote
document.addEventListener("keydown", (e) => {
  if (e.code === "Space" && e.target === document.body) {
    e.preventDefault();
    showNewQuote();
  }
});

// ===== Init =====
updateCounter();

// ===== Day Counter =====
function updateDayCounter() {
  const startDate = new Date(2025, 2, 25); // March 25, 2025
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const diffTime = today - startDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  document.getElementById("dayNumber").textContent = diffDays;
}
updateDayCounter();
