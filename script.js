function toggleDarkMode() {
    const body = document.querySelector("body");
    const switchBtn = document.querySelector(".switch");
    const bookItems = document.querySelectorAll(".book");
  
    // Get the current theme preference from local storage
    const currentTheme = localStorage.getItem("theme");
  
    // Toggle the theme based on the current preference or default to light mode
    if (currentTheme === "dark-mode") {
      body.classList.remove("dark-mode");
      switchBtn.innerHTML = "";
      switchBtn.appendChild(document.createTextNode("🌙"));
      bookItems.forEach((book) => {
        book.classList.remove("dark-mode");
      });
  
      // Remove the theme preference from local storage
      localStorage.removeItem("theme");
    } else {
      body.classList.add("dark-mode");
      switchBtn.innerHTML = "";
      switchBtn.appendChild(document.createTextNode("☀️"));
      bookItems.forEach((book) => {
        book.classList.add("dark-mode");
      });
  
      // Set the theme preference in local storage
      localStorage.setItem("theme", "dark-mode");
    }
  }
  
  // Set the initial theme based on the user's preference or default to light mode
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark-mode") {
    document.querySelector("body").classList.add("dark-mode");
    document.querySelector(".switch").innerHTML = "☀️";
    document.querySelectorAll(".book").forEach((book) => {
      book.classList.add("dark-mode");
    });
  } else {
    document.querySelector(".switch").innerHTML = "🌙";
  }