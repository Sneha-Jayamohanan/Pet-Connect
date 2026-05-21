// ============================================================
// main.js — Homepage JavaScript
// Handles: custom cursor, hero 3D tilt, CTA tilt,
//          scroll-reveal, hamburger menu, auth state in nav
// ============================================================

document.addEventListener('DOMContentLoaded', function () {

  // ── 1. CUSTOM CURSOR ───────────────────────────────────────
  var cursor = document.getElementById('cursor');

  document.addEventListener('mousemove', function (e) {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';
  });

  // Grow on interactive elements
  document.querySelectorAll('a, button, .cat-card, .feat-card, .step-card').forEach(function (el) {
    el.addEventListener('mouseenter', function () { cursor.classList.add('hover'); });
    el.addEventListener('mouseleave', function () { cursor.classList.remove('hover'); });
  });

  // ── 2. HERO 3D MOUSE TILT ──────────────────────────────────
  // Moving the mouse gently tilts the hero text in 3D space
  var heroSection = document.getElementById('heroSection');
  var heroContent = document.getElementById('heroContent');

  if (heroSection && heroContent) {
    heroSection.addEventListener('mousemove', function (e) {
      var r  = heroSection.getBoundingClientRect();
      var cx = (e.clientX - r.left) / r.width  - 0.5;  // -0.5 to +0.5
      var cy = (e.clientY - r.top)  / r.height - 0.5;
      // Tilt up to ±7° on X axis, ±10° on Y axis
      heroContent.style.transform =
        'rotateX(' + (cy * -7) + 'deg) rotateY(' + (cx * 10) + 'deg)';
    });

    heroSection.addEventListener('mouseleave', function () {
      // Smoothly return to flat
      heroContent.style.transition = 'transform .65s cubic-bezier(.25,.46,.45,.94)';
      heroContent.style.transform  = 'rotateX(0deg) rotateY(0deg)';
      // Remove the extra transition after it completes
      setTimeout(function () { heroContent.style.transition = ''; }, 700);
    });
  }

  // ── 3. CTA BANNER 3D TILT ──────────────────────────────────
  var cta = document.getElementById('ctaBanner');
  if (cta) {
    cta.addEventListener('mousemove', function (e) {
      var r  = cta.getBoundingClientRect();
      var cx = (e.clientX - r.left) / r.width  - 0.5;
      var cy = (e.clientY - r.top)  / r.height - 0.5;
      cta.style.transform = 'perspective(1000px) rotateX(' + (cy * -4) + 'deg) rotateY(' + (cx * 6) + 'deg)';
    });
    cta.addEventListener('mouseleave', function () {
      cta.style.transition = 'transform .5s ease';
      cta.style.transform  = 'perspective(1000px) rotateX(0) rotateY(0)';
      setTimeout(function () { cta.style.transition = ''; }, 600);
    });
  }

  // ── 4. SCROLL-REVEAL ───────────────────────────────────────
  // Adds .visible to .reveal elements as they scroll into view
  var revealEls = document.querySelectorAll('.reveal');
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);   // only animate once
      }
    });
  }, { threshold: 0.10 });
  revealEls.forEach(function (el) { io.observe(el); });

  // ── 5. HAMBURGER MENU ──────────────────────────────────────
  var ham  = document.getElementById('hamburger');
  var navL = document.getElementById('navLinks');
  if (ham && navL) {
    ham.addEventListener('click', function () { navL.classList.toggle('open'); });
  }

  // ── 6. AUTH NAV STATE ──────────────────────────────────────
  var user      = JSON.parse(localStorage.getItem('petconnect_current_user') || 'null');
  var greet     = document.getElementById('userGreet');
  var logoutBtn = document.getElementById('logoutBtn');
  var loginLink = document.getElementById('loginLink');

  if (user) {
    if (greet)     { greet.textContent = '👋 ' + user.name.split(' ')[0]; greet.style.display = 'inline'; }
    if (logoutBtn) { logoutBtn.style.display = 'inline-block'; }
    if (loginLink) { loginLink.style.display = 'none'; }
  }
  if (logoutBtn) {
    logoutBtn.addEventListener('click', function () {
      localStorage.removeItem('petconnect_current_user');
      window.location.href = 'login.html';
    });
  }

});
