document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeImage = document.getElementById('theme-image');

    // Check the current theme
    const currentTheme = localStorage.theme;

    // Apply the theme
    applyTheme();

    themeToggle.addEventListener('click', function() {
        // Toggle the theme
        if (localStorage.theme === 'dark') {
            localStorage.theme = 'light'; // Change to light mode
        } else {
            localStorage.theme = 'dark'; // Change to dark mode
        }

        // Apply the theme
        applyTheme();
    });

    // Function to apply the theme
    function applyTheme() {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
            themeImage.src = "./img/dark-mode.png"; // Set dark mode image
        } else {
            document.documentElement.classList.remove('dark');
            themeImage.src = "./img/light-mode.png"; // Set light mode image
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const texts = [
      "Web Developer",
      "Freelancer",
      "Web Enthusiast"
    ];
    const typingText = document.getElementById('text-changer');
    let textIndex = 0;
  
    function typeWriter(text, i, cb) {
      if (i < text.length) {
        typingText.innerHTML += text.charAt(i);
        setTimeout(function() {
          typeWriter(text, i + 1, cb)
        }, 80); // Adjust typing speed (milliseconds)
      } else {
        cb();
      }
    }
  
    function typeNextText() {
      typingText.innerHTML = ''; // Clear previous text
      typeWriter(texts[textIndex], 0, function() {
        textIndex = (textIndex + 1) % texts.length; // Move to the next text, looping back to the start if necessary
        setTimeout(typeNextText, 1500); // Delay before typing the next text (milliseconds)
      });
    }
  
    // Start typing effect with the first text
    typeNextText();
  });