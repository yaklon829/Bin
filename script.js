/* ✅ LOGO 進場動畫（Hero 區） */
const heroInner = document.querySelector('.hero-inner');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        heroInner.style.opacity = "1";
        heroInner.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.3 }
);

observer.observe(heroInner);


/* ✅ 工程試算（簡化版） */
function updateQuote() {
  let ceiling = Number(document.getElementById("ceiling").value) || 0;
  let wall = Number(document.getElementById("wall").value) || 0;
  let door = Number(document.getElementById("door").value) || 0;
  let light = Number(document.getElementById("light").value) || 0;
  let socket = Number(document.getElementById("socket").value) || 0;

  // ✅ 你可以自由調整這些單價
  const price = {
    ceiling: 1200, // 天花板（坪）
    wall: 900,     // 牆面（坪）
    door: 1800,    // 門片（組）
    light: 350,    // 崁燈（盞）
    socket: 250    // 插座（組）
  };

  let total =
    ceiling * price.ceiling +
    wall * price.wall +
    door * price.door +
    light * price.light +
    socket * price.socket;

  document.getElementById("total").innerText = total.toLocaleString();
}


/* ✅ 作品展示（橫向自動滑動） */
const track = document.getElementById("galleryTrack");
let scrollAmount = 0;

function autoSlide() {
  scrollAmount += 1;
  track.style.transform = `translateX(-${scrollAmount}px)`;

  // ✅ 如果滑到一半就重置（無限循環）
  if (scrollAmount > track.scrollWidth / 2) {
    scrollAmount = 0;
  }
}

let slideInterval = setInterval(autoSlide, 30);

/* 滑鼠移上去暫停 */
track.addEventListener("mouseover", () => clearInterval(slideInterval));

/* 滑鼠移開繼續 */
track.addEventListener("mouseout", () => {
  slideInterval = setInterval(autoSlide, 30);
});
