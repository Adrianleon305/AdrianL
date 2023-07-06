
document.addEventListener("DOMContentLoaded", function() {
  const checkbox = document.getElementById("toggle-checkbox");
  const body = document.body;

  checkbox.addEventListener("change", function() {
    body.classList.toggle("light-mode");
  });

  const toggleLabel = document.querySelector(".toggle-label");

  toggleLabel.addEventListener("mouseenter", function() {
    const message = body.classList.contains("light-mode") ? "" : "";

    const tooltip = document.createElement("div");
    tooltip.classList.add("tooltip");
    tooltip.textContent = message;

    document.body.appendChild(tooltip);

    const toggleLabelRect = toggleLabel.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();

    const tooltipTop = toggleLabelRect.top - tooltipRect.height - 10;
    const tooltipLeft = Math.max(
      10,
      Math.min(
        toggleLabelRect.left + toggleLabelRect.width / 2 - tooltipRect.width / 2,
        window.innerWidth - tooltipRect.width - 10
      )
    );

    tooltip.style.top = tooltipTop + "px";
    tooltip.style.left = tooltipLeft + "px";
  });

  toggleLabel.addEventListener("mouseleave", function() {
    const tooltip = document.querySelector(".tooltip");
    if (tooltip) {
      tooltip.parentNode.removeChild(tooltip);
    }
  });
});

const toggleCheckbox = document.querySelector("#toggle-checkbox");
const logoImage = document.querySelector(".logo");
const topTextElements = document.querySelectorAll(".top-text");
const tiktokIcon = document.querySelector(".fa-tiktok");
const versionLink = document.querySelector(".version-link");

toggleCheckbox.addEventListener("change", function () {
  const isChecked = toggleCheckbox.checked;

  if (isChecked) {
    document.body.classList.add("dark-mode");
    if (logoImage) {
      logoImage.src = "imagenes/L1.png";
    }
    topTextElements.forEach((element) => {
      element.style.color = "#00a5ff";
    });
    if (tiktokIcon) {
      tiktokIcon.style.color = "#fff";
    }
    if (versionLink) {
      versionLink.style.color = "#fff";
    }
  } else {
    document.body.classList.remove("dark-mode");
    if (logoImage) {
      logoImage.src = "imagenes/L2.png";
    }
    topTextElements.forEach((element) => {
      element.style.color = "#124168";
    });
    if (tiktokIcon) {
      tiktokIcon.style.color = "#ea5ecc";
    }
    if (versionLink) {
      versionLink.style.color = "#000";
    }
  }
});


