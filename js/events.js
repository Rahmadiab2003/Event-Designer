document.addEventListener("DOMContentLoaded", () => {
  const eventsGrid = document.getElementById("events-grid");
  const eventDialog = document.getElementById("event-dialog");
  const dialogClose = document.getElementById("dialog-close");
  const dialogContent = document.getElementById("dialog-content");
  const dialogChoose = document.getElementById("dialog-choose");
  const confirmationPopup = document.getElementById("confirmation-popup");

  let activeEvent = null;
  let isSubmitting = false;

  // 1. Render events grid dynamically
  function renderEvents() {
    if (!eventsGrid) return;
    eventsGrid.innerHTML = EVENTS_DATA.map(event => `
      <article class="event-card" data-id="${event.id}">
        <div class="event-card-image-wrapper">
          <img src="${event.image}" alt="${event.title}">
        </div>
        <div class="event-card-content">
          <h3>${event.title}</h3>
          <p>${event.shortDescription}</p>
          <span class="event-card-link">View Details &rarr;</span>
        </div>
      </article>
    `).join("");
  }

  // 2. Open dialog on card click and populate content
  function openDialog(eventId) {
    activeEvent = EVENTS_DATA.find(e => e.id === eventId);
    if (!activeEvent) return;

    dialogContent.innerHTML = `
      <img src="${activeEvent.image}" alt="${activeEvent.title}">
      <h2>${activeEvent.title}</h2>
      <p>${activeEvent.fullDescription}</p>
    `;

    // Reset choose button state
    dialogChoose.disabled = false;
    dialogChoose.textContent = "Choose";
    isSubmitting = false;

    eventDialog.showModal();
  }

  // Handle card click events
  if (eventsGrid) {
    eventsGrid.addEventListener("click", (e) => {
      const card = e.target.closest(".event-card");
      if (card) {
        const eventId = card.getAttribute("data-id");
        openDialog(eventId);
      }
    });
  }

  // 3. Manual close dialog
  function closeDialog() {
    if (isSubmitting) return; // Prevent closing while processing selection
    eventDialog.close();
  }

  if (dialogClose) {
    dialogClose.addEventListener("click", closeDialog);
  }

  // Close dialog on click outside (backdrop)
  if (eventDialog) {
    eventDialog.addEventListener("click", (e) => {
      if (e.target === eventDialog) {
        closeDialog();
      }
    });
  }

  // 4. Selection flow: Choose -> show confirmation -> auto-close after 2s
  if (dialogChoose) {
    dialogChoose.addEventListener("click", () => {
      if (isSubmitting) return;
      isSubmitting = true;

      // Update button state visually
      dialogChoose.disabled = true;
      dialogChoose.textContent = "Selecting...";

      // Show confirmation popup
      if (confirmationPopup) {
        confirmationPopup.showModal();
      }

      // After 2 seconds, close both dialog and popup
      setTimeout(() => {
        if (confirmationPopup) {
          confirmationPopup.close();
        }
        eventDialog.close();
        isSubmitting = false;
      }, 2000);
    });
  }

  // Initial render
  renderEvents();
});
