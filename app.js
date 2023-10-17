async function loadWord() {
  const url = "https://random-word-api.herokuapp.com/word?";
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data[0];
  } catch (error) {
    return "Unable to load from API";
  }
}

async function displayWord() {
  const word = await loadWord();
  const el = document.querySelector("#word");
  el.textContent = word;
}

displayWord();

window.addEventListener("load", () => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js");
  }
});
