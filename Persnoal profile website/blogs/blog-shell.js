const readingBar = document.querySelector("[data-reading-progress]");
const articleNode = document.querySelector("[data-article]");

function updateReadingProgress() {
  if (!readingBar || !articleNode) {
    return;
  }

  const articleTop = articleNode.offsetTop;
  const articleHeight = articleNode.offsetHeight - window.innerHeight;
  const distance = window.scrollY - articleTop;

  if (articleHeight <= 0) {
    readingBar.style.width = "100%";
    return;
  }

  const progress = Math.max(0, Math.min(1, distance / articleHeight));
  readingBar.style.width = `${progress * 100}%`;
}

window.addEventListener("scroll", updateReadingProgress, { passive: true });
window.addEventListener("resize", updateReadingProgress);
updateReadingProgress();
