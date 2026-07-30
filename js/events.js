function renderEvents(events) {
  const gridContainer = document.getElementById("events-grid");
  if (!gridContainer || !Array.isArray(events)) return;

  gridContainer.innerHTML = events
    .map(
      (event) => `
    <article class="event-card" data-id="${event.id}">
      <div class="event-card-image-wrapper">
        <img src="${event.image}" alt="${event.title}" loading="lazy">
      </div>
      <div class="event-card-content">
        <h3>${event.title}</h3>
        <p>${event.shortDescription}</p>
        <span class="event-card-link">View Details &rarr;</span>
      </div>
    </article>
  `
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", () => {
  if (typeof eventsData !== "undefined") {
    renderEvents(eventsData);
  }

  const dialog = document.getElementById("event-dialog");
  const closeBtn = document.getElementById("dialog-close");

  if (dialog && closeBtn) {
    closeBtn.addEventListener("click", () => dialog.close());

    dialog.addEventListener("click", (event) => {
      const rect = dialog.getBoundingClientRect();
      const isOutside =
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom;
      if (isOutside) {
        dialog.close();
      }
    });
  }
});


