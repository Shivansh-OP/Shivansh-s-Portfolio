// Dark Mode

document.addEventListener('DOMContentLoaded', function() {
    const ThemeToggle = document.getElementById('ThemeToggle');
    const ThemeImage = document.getElementById('ThemeImage');
    const MenuOpenImage = document.getElementById('MenuOpenImage'); // Hamburger menu open image 
    const MenuCloseImage = document.getElementById('MenuCloseImage'); // Hamburger menu close image

    // Check the current theme
    const CurrentTheme = localStorage.theme;

    // Apply the theme
    ApplyTheme();

    ThemeToggle.addEventListener('click', function() {
        // Toggle the theme
        if (localStorage.theme === 'dark') {
            localStorage.theme = 'light'; // Change to light mode
        } else {
            localStorage.theme = 'dark'; // Change to dark mode
        }

        // Apply the theme
        ApplyTheme();
    });

    // Function to apply the theme
    function ApplyTheme() {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
            ThemeImage.src = "./img/darkMode.png"; // Set dark mode image
            MenuOpenImage.src = "./img/hamburgerMenuOpenBlack.png"; // Set black hamburger menu open image
            MenuCloseImage.src = "./img/hamburgerMenuCloseBlack.png"; // Set black hamburger menu close image
        } else {
            document.documentElement.classList.remove('dark');
            ThemeImage.src = "./img/lightMode.png"; // Set light mode image
            MenuOpenImage.src = "./img/hamburgerMenuOpenWhite.png"; // Set white hamburger menu open image
            MenuCloseImage.src = "./img/hamburgerMenuCloseWhite.png"; // Set white hamburger menu close image
        }
    }
});


// Hamburger Menu 

document.addEventListener('DOMContentLoaded', function() {
    const MenuToggle = document.getElementById('MenuToggle');
    const DropDownMenu = document.getElementById('DropDownMenu');
    const MenuOpenImage = document.getElementById('MenuOpenImage');
    const MenuCloseImage = document.getElementById('MenuCloseImage');

    MenuToggle.addEventListener('click', function() {
      DropDownMenu.classList.toggle('hidden');
      MenuOpenImage.classList.toggle('hidden');
      MenuCloseImage.classList.toggle('hidden');
    });
});


// Typing Effect 

document.addEventListener('DOMContentLoaded', function() {
    const Texts = [
      "Web Developer",
      "Freelancer",
      "Web Enthusiast"
    ];
    const TypingText = document.getElementById('text-changer');
    let TextIndex = 0;
  
    function TypeWriter(text, i, cb) {
      if (i < text.length) {
        TypingText.innerHTML += text.charAt(i);
        setTimeout(function() {
          TypeWriter(text, i + 1, cb)
        }, 80); // Adjust typing speed (milliseconds)
      } else {
        cb();
      }
    }
  
    function TypeNextText() {
      TypingText.innerHTML = ''; // Clear previous text
      TypeWriter(Texts[TextIndex], 0, function() {
        TextIndex = (TextIndex + 1) % Texts.length; // Move to the next text, looping back to the start if necessary
        setTimeout(TypeNextText, 1500); // Delay before typing the next text (milliseconds)
      });
    }
  
    // Start typing effect with the first text
    TypeNextText();
});
