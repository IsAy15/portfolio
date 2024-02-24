const toggleSwitch = document.getElementById("theme-switch");
const themeIcon = document.getElementById("theme-icon");

// Vérifier le mode actuel au chargement de la page
if (!localStorage.getItem("theme")) {
  console.log("Theme not found");
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    enableDarkMode();
    toggleSwitch.checked = true;
  } else {
    disableDarkMode();
    toggleSwitch.checked = false;
  }
} else {
  if (localStorage.getItem("theme") == "dark") {
    enableDarkMode();
    toggleSwitch.checked = true;
  } else {
    disableDarkMode();
    toggleSwitch.checked = false;
  }
}

// Fonction pour activer le mode sombre
function enableDarkMode() {
  const darkStylesheet = document.createElement("link");
  darkStylesheet.href = "assets/css/dark.css";
  darkStylesheet.rel = "stylesheet";
  darkStylesheet.id = "dark-stylesheet";
  document.head.appendChild(darkStylesheet);
  themeIcon.classList.remove("fa-sun");
  themeIcon.classList.add("fa-moon");
  localStorage.setItem("theme", "dark");
}

// Fonction pour désactiver le mode sombre
function disableDarkMode() {
  const darkStylesheet = document.getElementById("dark-stylesheet");
  if (darkStylesheet) {
    darkStylesheet.parentNode.removeChild(darkStylesheet);
  }
  themeIcon.classList.remove("fa-moon");
  themeIcon.classList.add("fa-sun");
  localStorage.setItem("theme", "light");
}

// Fonction pour basculer entre les modes
function switchTheme(e) {
  themeIcon.classList.add("animated");
  console.log("Changement de theme");
  if (e.target.checked) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
  setTimeout(() => {
    themeIcon.classList.remove("animated");
  }, 500);
}

// Ajouter un écouteur d'événements au bouton de bascule
toggleSwitch.addEventListener("change", switchTheme);
