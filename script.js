// ===== Quote Data =====
const quotes = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
  { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
  { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
  { text: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
  { text: "If you look at what you have in life, you'll always have more.", author: "Oprah Winfrey" },
  { text: "The mind is everything. What you think you become.", author: "Buddha" },
  { text: "An unexamined life is not worth living.", author: "Socrates" },
  { text: "Everything you've ever wanted is on the other side of fear.", author: "George Addair" },
  { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "Act as if what you do makes a difference. It does.", author: "William James" },
  { text: "What we achieve inwardly will change outer reality.", author: "Plutarch" },
  { text: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama" },
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
  { text: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { text: "The best revenge is massive success.", author: "Frank Sinatra" },
  { text: "In order to be irreplaceable one must always be different.", author: "Coco Chanel" },
  { text: "Fall seven times, stand up eight.", author: "Japanese Proverb" },
  { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
  { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
  { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
  { text: "Whether you think you can or you think you can't, you're right.", author: "Henry Ford" },
  { text: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas Edison" },
  { text: "A person who never made a mistake never tried anything new.", author: "Albert Einstein" },
];

// ===== State =====
let lastIndex = -1;
let quotesSeen = parseInt(localStorage.getItem("quotesSeen") || "0", 10);

// ===== DOM Elements =====
const quoteCard = document.getElementById("quoteCard");
const quoteText = document.getElementById("quoteText");
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
    quoteAuthor.textContent = `— ${quote.author}`;

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
  const textToCopy = `"${quote.text}" — ${quote.author}`;

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
  const tweetText = encodeURIComponent(`"${quote.text}" — ${quote.author}`);
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
copyBtn.addEventListener("click", copyQuote);
tweetBtn.addEventListener("click", shareOnTwitter);

// Keyboard shortcut: Space to generate new quote
document.addEventListener("keydown", (e) => {
  if (e.code === "Space" && e.target === document.body) {
    e.preventDefault();
    showNewQuote();
  }
});

// ===== Init =====
updateCounter();
