(function () {
  'use strict';
  console.log('reading js');

  const items = document.querySelectorAll(".item img");

  items.forEach(img => {
    let popup; 

    img.addEventListener("mouseenter", () => {
      document.querySelectorAll(".popup").forEach(p => p.remove());

      popup = document.createElement("div");
      popup.className = "popup";
      popup.textContent = img.dataset.desc || "No description yet!";
      img.parentElement.appendChild(popup);
    });

    img.addEventListener("mouseleave", () => {
      if (popup) {
        popup.remove();
        popup = null;
      }
    });
  });

  const images = document.querySelectorAll(".item img");

  images.forEach(img => {
    img.addEventListener("click", () => {
      const overlay = document.createElement("div");
      overlay.className = "overlay";

      const card = document.createElement("div");
      card.className = "overlay-card";

      const bigImg = document.createElement("img");
      bigImg.src = img.src;
      bigImg.alt = img.alt || "Expanded image";

      const desc = document.createElement("div");
      desc.className = "overlay-desc";
      desc.textContent = img.dataset.overlayDesc || "No description available.";

      card.appendChild(bigImg);
      card.appendChild(desc);
      overlay.appendChild(card);
      document.body.appendChild(overlay);

      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) overlay.remove();
      });

      document.addEventListener("keydown", function escClose(e) {
        if (e.key === "Escape") {
          overlay.remove();
          document.removeEventListener("keydown", escClose);
        }
      });
    });
  });
})();

