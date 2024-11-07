// index.js

function DropdownMenu(selector, options = {}) {
  const triggers = document.querySelectorAll(selector);
  const eventType = options.eventType || "click";

  triggers.forEach((trigger) => {
    const menu = trigger.nextElementSibling;

    if (!menu) {
      console.warn("No menu found for trigger:", trigger);
      return;
    }

    if (eventType === "hover") {
      trigger.addEventListener("mouseenter", () => {
        menu.style.display = "block";
      });

      trigger.addEventListener("mouseleave", () => {
        menu.style.display = "none";
      });

      menu.addEventListener("mouseenter", () => {
        menu.style.display = "block";
      });

      menu.addEventListener("mouseleave", () => {
        menu.style.display = "none";
      });
    } else {
      trigger.addEventListener("click", (e) => {
        e.preventDefault();
        menu.style.display = menu.style.display === "block" ? "none" : "block";
      });

      // Optional: Close the menu if clicked outside
      document.addEventListener("click", (e) => {
        if (!trigger.contains(e.target) && !menu.contains(e.target)) {
          menu.style.display = "none";
        }
      });
    }
  });
}

// Export the function for use in other files
export default DropdownMenu;
