document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-links a");
  const sections = document.querySelectorAll("main .section");
  const list = document.getElementById("project-list");

  // Example project list 
  const projects = [
    "Smart Shopping List App",
    "HR Dashboard (JavaScript)",
    "Responsive Portfolio Website"
  ];

  // Populate project list
  projects.forEach(project => {
    const li = document.createElement("li");
    li.textContent = project;
    list.appendChild(li);
  });

  // Toggle sections on click
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = link.dataset.section;

      sections.forEach(section => {
        section.classList.toggle("hidden", section.id !== target);
      });
    });
  });
});
