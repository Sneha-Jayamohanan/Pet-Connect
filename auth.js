// ============================================================
// auth.js — Login & Signup Logic
// Stores users in localStorage, validates on login
// ============================================================

// ── Helpers ────────────────────────────────────────────────
function getUsers() {
  return JSON.parse(localStorage.getItem('petconnect_users') || '[]');
}
function saveUsers(users) {
  localStorage.setItem('petconnect_users', JSON.stringify(users));
}
function showErr(id, msg) {
  var el = document.getElementById(id);
  if (el) { el.textContent = msg; el.classList.add('show'); }
}
function clearErrs() {
  document.querySelectorAll('.form-error').forEach(function (el) {
    el.textContent = ''; el.classList.remove('show');
  });
}

// ── SIGNUP ─────────────────────────────────────────────────
function handleSignup(e) {
  e.preventDefault();
  clearErrs();

  var name     = document.getElementById('signupName').value.trim();
  var email    = document.getElementById('signupEmail').value.trim().toLowerCase();
  var password = document.getElementById('signupPassword').value;
  var confirm  = document.getElementById('signupConfirm').value;
  var ok = true;

  if (!name || name.length < 2)          { showErr('nameErr',    'Please enter your full name (min 2 chars).'); ok = false; }
  if (!email || !email.includes('@'))     { showErr('emailErr',   'Please enter a valid email address.');        ok = false; }
  if (!password || password.length < 6)  { showErr('passErr',    'Password must be at least 6 characters.');   ok = false; }
  if (password !== confirm)              { showErr('confirmErr', 'Passwords do not match.');                    ok = false; }
  if (!ok) return;

  var users    = getUsers();
  var existing = users.find(function (u) { return u.email === email; });
  if (existing) { showErr('emailErr', 'This email is already registered. Please log in.'); return; }

  var newUser = { id: Date.now(), name: name, email: email, password: password };
  users.push(newUser);
  saveUsers(users);
  localStorage.setItem('petconnect_current_user', JSON.stringify(newUser));
  window.location.href = 'index.html';
}

// ── LOGIN ───────────────────────────────────────────────────
function handleLogin(e) {
  e.preventDefault();
  clearErrs();

  var email    = document.getElementById('loginEmail').value.trim().toLowerCase();
  var password = document.getElementById('loginPassword').value;
  var ok = true;

  if (!email || !email.includes('@')) { showErr('emailErr', 'Please enter a valid email address.'); ok = false; }
  if (!password)                      { showErr('passErr',  'Please enter your password.');         ok = false; }
  if (!ok) return;

  var users = getUsers();
  var user  = users.find(function (u) { return u.email === email && u.password === password; });
  if (!user) { showErr('passErr', 'Incorrect email or password. Please try again.'); return; }

  localStorage.setItem('petconnect_current_user', JSON.stringify(user));
  window.location.href = 'index.html';
}

// ── Init ────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
  var signupForm = document.getElementById('signupForm');
  var loginForm  = document.getElementById('loginForm');
  if (signupForm) signupForm.addEventListener('submit', handleSignup);
  if (loginForm)  loginForm.addEventListener('submit', handleLogin);
});
