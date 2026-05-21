// ============================================================
// adopt.js — Adoption Form Page Logic
// Auto-fills pet and user info, handles validation & success
// ============================================================

// Pet image map — matches pet names to good Unsplash photos
var petImages = {
  'Bruno':    'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=85&fit=crop&crop=face',
  'Bella':    'https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=800&q=85&fit=crop&crop=face',
  'Max':      'https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=800&q=85&fit=crop',
  'Whiskers': 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&q=85&fit=crop',
  'Thunder':  'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800&q=85&fit=crop',
  'Thumper':  'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=800&q=85&fit=crop',
  'Ziggy':    'https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=800&q=85&fit=crop',
  'default':  'https://images.unsplash.com/photo-1444212477490-ca407925329e?w=800&q=85&fit=crop'
};

function showErr(id, msg) {
  var el = document.getElementById(id);
  if (el) { el.textContent = msg; el.classList.add('show'); }
}
function clearErrs() {
  document.querySelectorAll('.form-error').forEach(function (el) {
    el.textContent = ''; el.classList.remove('show');
  });
}

document.addEventListener('DOMContentLoaded', function () {

  // ── Auth guard ────────────────────────────────────────────
  var user = JSON.parse(localStorage.getItem('petconnect_current_user') || 'null');
  if (!user) { window.location.href = 'login.html'; return; }

  // ── Nav state ─────────────────────────────────────────────
  var greet     = document.getElementById('userGreet');
  var logoutBtn = document.getElementById('logoutBtn');
  var ham       = document.getElementById('hamburger');
  var navL      = document.getElementById('navLinks');

  if (greet)     { greet.textContent = '👋 ' + user.name.split(' ')[0]; greet.style.display = 'inline'; }
  if (logoutBtn) {
    logoutBtn.style.display = 'inline-block';
    logoutBtn.addEventListener('click', function () {
      localStorage.removeItem('petconnect_current_user');
      window.location.href = 'login.html';
    });
  }
  if (ham && navL) ham.addEventListener('click', function () { navL.classList.toggle('open'); });

  // ── Custom cursor ─────────────────────────────────────────
  var cursor = document.getElementById('cursor');
  if (cursor) {
    document.addEventListener('mousemove', function (e) {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top  = e.clientY + 'px';
    });
    document.querySelectorAll('a, button').forEach(function (el) {
      el.addEventListener('mouseenter', function () { cursor.classList.add('hover'); });
      el.addEventListener('mouseleave', function () { cursor.classList.remove('hover'); });
    });
  }

  // ── Auto-fill pet name and image ──────────────────────────
  var petName = localStorage.getItem('petconnect_adopt_pet') || '';
  var petImg  = petImages[petName] || petImages['default'];

  document.getElementById('adoptPetName').textContent = petName || 'Unknown Pet';
  document.getElementById('formPetName').value        = petName;
  document.getElementById('adoptPetImg').src          = petImg;

  // ── Auto-fill user info ───────────────────────────────────
  document.getElementById('adoptUserName').value = user.name;
  document.getElementById('adoptEmail').value    = user.email;

  // ── Form submission ───────────────────────────────────────
  var form = document.getElementById('adoptForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      clearErrs();

      var userName = document.getElementById('adoptUserName').value.trim();
      var email    = document.getElementById('adoptEmail').value.trim();
      var ok = true;

      if (!userName || userName.length < 2) { showErr('nameErr',  'Please enter your full name.'); ok = false; }
      if (!email || !email.includes('@'))   { showErr('emailErr', 'Please enter a valid email.'); ok = false; }
      if (!ok) return;

      // Show success panel, hide form
      document.getElementById('adoptFormCard').style.display = 'none';
      var success = document.getElementById('adoptSuccess');
      success.classList.add('show');
      document.getElementById('successName').textContent = userName;
      document.getElementById('successPet').textContent  = petName || 'your pet';

      // Clean up storage
      localStorage.removeItem('petconnect_adopt_pet');
    });
  }

});
