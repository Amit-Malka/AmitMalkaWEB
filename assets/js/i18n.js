// i18n.js
// Handles language switching, translation loading, and direction

const SUPPORTED_LANGS = ['en', 'he'];
const DEFAULT_LANG = 'en';
let currentLang = localStorage.getItem('lang') || DEFAULT_LANG;
let translations = {};

function setDirection(lang) {
  const html = document.documentElement;
  if (lang === 'he') {
    html.setAttribute('dir', 'rtl');
    html.setAttribute('lang', 'he');
  } else {
    html.setAttribute('dir', 'ltr');
    html.setAttribute('lang', 'en');
  }
}

function updateTexts() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[key]) {
      if (el.placeholder !== undefined) {
        el.placeholder = translations[key];
      } else {
        el.innerHTML = translations[key];
      }
    }
  });
}

function loadTranslations(lang, callback) {
  fetch(`assets/js/i18n/${lang}.json`)
    .then(res => res.json())
    .then(data => {
      translations = data;
      setDirection(lang);
      updateTexts();
      if (callback) callback();
    })
    .catch(() => {
      if (lang !== DEFAULT_LANG) loadTranslations(DEFAULT_LANG, callback);
    });
}

function switchLanguage(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) lang = DEFAULT_LANG;
  localStorage.setItem('lang', lang);
  currentLang = lang;
  loadTranslations(lang);
}

// Expose for global use
window.switchLanguage = switchLanguage;
window.getCurrentLanguage = () => currentLang;

// Initial load
loadTranslations(currentLang); 