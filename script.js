/* ===================================================
   1. GLOBAL CONSTANTS (WALIMA - 31 JAN 2027)
=================================================== */
const EVENT_DATE = new Date("2027-01-31T19:00:00").getTime();


function initDoorReveal() {
  const doors = document.getElementById('doors');
  const doorVideo = document.getElementById('door-video');
  const heroVideo = document.getElementById('hero-bg-video');
  const audio = document.getElementById('audio');

  if (!doors) return;

  let isOpened = false;

  function startAudio() {
    if (!audio) return;
    audio.muted = false;
    audio.play().catch(() => {});
  }

  function playHeroVideo() {
    if (heroVideo) {
      heroVideo.muted = true;
      heroVideo.currentTime = 0;
      const promise = heroVideo.play();
      if (promise !== undefined) {
        promise.catch(err => console.log("Hero video play error:", err));
      }
    }
  }

  function triggerOpen() {
    if (isOpened) return;
    isOpened = true;

    startAudio();

    const hint = doors.querySelector('.door-overlay');
    if (hint) hint.style.opacity = '0';

    if (doorVideo) {
      doorVideo.muted = true; 
      doorVideo.setAttribute('playsinline', '');
      
      doorVideo.play().then(() => {
        const checkSparkleTime = () => {
          if (doorVideo.currentTime >= 3.8 || doorVideo.ended) {
            doorVideo.removeEventListener('timeupdate', checkSparkleTime);
            doors.classList.add('open');
            // Jab doors hat jayein, tab hero video fresh play ho
            playHeroVideo();
            setTimeout(() => doors.classList.add('gone'), 1200);
          }
        };
        doorVideo.addEventListener('timeupdate', checkSparkleTime);
      }).catch(() => {
        doors.classList.add('open');
        playHeroVideo();
        setTimeout(() => doors.classList.add('gone'), 1200);
      });
    } else {
      doors.classList.add('open');
      playHeroVideo();
      setTimeout(() => doors.classList.add('gone'), 1200);
    }
  }

  doors.addEventListener('click', triggerOpen);
}
/* ===================================================
   3. ROSE GOLD GLITTER HEART SCRATCH CARD
=================================================== */
function renderGlitterHeartScratch() {
  // Checks both possible canvas IDs
  const canvas = document.getElementById('scratchCanvas') || document.getElementById('scratch');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = canvas.width = 280;
  const h = canvas.height = 260;

  ctx.clearRect(0, 0, w, h);

  // 1. Draw Symmetric Heart Path
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(140, 230);
  ctx.bezierCurveTo(20, 160, 0, 95, 30, 45);
  ctx.bezierCurveTo(55, 5, 115, 15, 140, 60);
  ctx.bezierCurveTo(165, 15, 225, 5, 250, 45);
  ctx.bezierCurveTo(280, 95, 260, 160, 140, 230);
  ctx.closePath();
  ctx.clip(); 

  // 2. Rose Gold Metallic Gradient
  const grad = ctx.createLinearGradient(0, 0, w, h);
  grad.addColorStop(0, '#D4A396');
  grad.addColorStop(0.3, '#F3D2C9');
  grad.addColorStop(0.5, '#B88679');
  grad.addColorStop(0.8, '#E8C4B8');
  grad.addColorStop(1, '#A06D60');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);

  // 3. Sparkle Glitter Texture Effect
  ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
  for (let i = 0; i < 350; i++) {
    const x = Math.random() * w;
    const y = Math.random() * h;
    const size = Math.random() * 2.2;
    ctx.fillRect(x, y, size, size);
  }
  ctx.restore();

  // 4. Erase/Scratch Logic
  let isScratching = false;

  function getPos(e) {
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  }

  function scratch(e) {
    if (!isScratching) return;
    if (e.type.startsWith('touch')) e.preventDefault();
    const pos = getPos(e);
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, 22, 0, Math.PI * 2);
    ctx.fill();
  }

  canvas.addEventListener('mousedown', (e) => { isScratching = true; scratch(e); });
  window.addEventListener('mouseup', () => isScratching = false);
  canvas.addEventListener('mousemove', scratch);

  canvas.addEventListener('touchstart', (e) => { isScratching = true; scratch(e); }, { passive: false });
  window.addEventListener('touchend', () => isScratching = false);
  canvas.addEventListener('touchmove', scratch, { passive: false });
}


/* ===================================================
   4. WALIMA COUNTDOWN TIMER
=================================================== */
function tickCountdown() {
  const container = document.getElementById('countdown');
  const dd = document.getElementById('dd');
  const hh = document.getElementById('hh');
  const mm = document.getElementById('mm');
  const ss = document.getElementById('ss');

  if (!container || !dd || !hh || !mm || !ss) return;

  const now = new Date().getTime();
  const diff = EVENT_DATE - now;

  if (diff <= 0) {
    container.innerHTML = '<div class="cd-cell"><div class="cd-num">Today!</div></div>';
    return;
  }

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((diff % (1000 * 60)) / 1000);

  const p = n => String(n).padStart(2, '0');

  dd.textContent = p(d);
  hh.textContent = p(h);
  mm.textContent = p(m);
  ss.textContent = p(s);
}





/* ===================================================
   6. INITIALIZE ALL ON DOM LOAD
=================================================== */
document.addEventListener('DOMContentLoaded', () => {
  initDoorReveal();
  renderGlitterHeartScratch();
  
  
  // Start live countdown
  tickCountdown();
  setInterval(tickCountdown, 1000);
});