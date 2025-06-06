const projects = [
  {
    title: "PyFlash: Flashcard App",
    short: "A modern flashcard app designed to help students.",
    description: "PyFlash is a simple, customizable desktop application that helps students create, organize, and study flashcards effectively. Built with Python and Tkinter, it provides an offline, distraction-free learning experience with features for reviewing, tracking progress, and modifying study materials.",
    github: "https://github.com/Jaya-Avaaneesh-Jayamanikandan/PyFlash",
    images: ["assets/images/Pyflash-1.png", "assets/images/Pyflash-2.png", "assets/images/Pyflash-3.png", "assets/images/Pyflash-4.png", "assets/images/Pyflash-5.png"]
  },
  {
    title: "Smart Study Planner: AI Planner App",
    short: "An innovative app for student productivity.",
    description: "Smart Study Planner is a desktop application built with Python and Tkinter that helps students efficiently plan, prioritize, and track their study goals using a clean interface and intelligent scheduling logic.",
    github: "https://github.com/Jaya-Avaaneesh-Jayamanikandan/Smart-Study-Planner",
    images: ["assets/images/SSP-1.png", "assets/images/SSP-2.png", "assets/images/SSP-3.png", "assets/images/SSP-4.png", "assets/images/SSP-5.png", "assets/images/SSP-6.png", "assets/images/SSP-7.png"]
  },
  {
    title: "Coming Soon..",
    short: "Something geat is cooking!",
    description: "Project is kept under wraps until finished ❌",
    github: "#",
    images: []
  }
];

window.onload = () => {
  const grid = document.getElementById("projectGrid");

  projects.forEach((project, index) => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.short}</p>
      <button onclick="openModal(${index})">Learn More</button>
      <button onclick="window.open('${project.github}', '_blank')">View on GitHub</button>
    `;
    grid.appendChild(card);
  });
};

function openModal(index) {
  const project = projects[index];
  document.getElementById("modalTitle").innerText = project.title;
  document.getElementById("modalDescription").innerText = project.description;

  const gallery = document.getElementById("imageGallery");
  gallery.innerHTML = '';
  project.images.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = project.title;
    gallery.appendChild(img);
  });

  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
