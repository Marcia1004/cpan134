document.addEventListener("DOMContentLoaded", () => {
    const list = document.getElementById("project-list");
  
    projects.forEach(project => {
      const li = document.createElement("li");
      li.textContent = project;
      list.appendChild(li);
    });
  });
  