function getValue(id) {
  return document.getElementById(id).value.trim();
}


function updateResume() {

  document.getElementById("r-name").textContent =
    getValue("name") || "Your Name";

  document.getElementById("r-title").textContent =
    getValue("title") || "Professional Title";

  document.getElementById("r-email").textContent =
    getValue("email") || "email@example.com";

  document.getElementById("r-phone").textContent =
    getValue("phone") || "+91 XXXXX XXXXX";

  document.getElementById("r-location").textContent =
    getValue("location") || "India";

  document.getElementById("r-education").textContent =
    getValue("education") || "Your education details";

  document.getElementById("r-experience").textContent =
    getValue("experience") || "Your experience details";

  document.getElementById("r-certificates").textContent =
    getValue("certificates") || "Your certificates";


  // LinkedIn
  let linkedin = getValue("linkedin");

  if (linkedin) {

    if (!linkedin.startsWith("http")) {
      linkedin = "https://" + linkedin;
    }

    document.getElementById("r-linkedin").href = linkedin;
    document.getElementById("r-linkedin").textContent = "LinkedIn";

  } else {

    document.getElementById("r-linkedin").href = "#";
    document.getElementById("r-linkedin").textContent = "LinkedIn";

  }


  // GitHub
  let github = getValue("github");

  if (github) {

    if (!github.startsWith("http")) {
      github = "https://" + github;
    }

    document.getElementById("r-github").href = github;
    document.getElementById("r-github").textContent = "GitHub";

  } else {

    document.getElementById("r-github").href = "#";
    document.getElementById("r-github").textContent = "GitHub";

  }


  // Summary
  let objective = getValue("objective");

  document.getElementById("r-summary").textContent =
    objective || "Motivated professional seeking opportunities to apply technical skills and contribute to meaningful projects.";


  // Skills
  let skills = getValue("skills");

  let skillArray = skills
    .split(",")
    .map(skill => skill.trim())
    .filter(skill => skill !== "");

  let skillHTML = "";

  skillArray.forEach(skill => {
    skillHTML += `<span>${skill}</span>`;
  });

  document.getElementById("r-skills").innerHTML =
    skillHTML || "<span>HTML</span><span>CSS</span><span>JavaScript</span>";


  // Projects
  let projects = getValue("projects");

  let projectArray = projects
    .split("\n")
    .map(project => project.trim())
    .filter(project => project !== "");

  let projectHTML = "";

  projectArray.forEach(project => {

    projectHTML += `
      <div class="project">
        <strong>${project}</strong>
      </div>
    `;

  });

  document.getElementById("r-projects").innerHTML =
    projectHTML || "Your projects will appear here.";
}


/* AI STYLE SUMMARY */

function generateSummary() {

  let name = getValue("name");
  let title = getValue("title");
  let skills = getValue("skills");

  if (!name || !title || !skills) {

    alert("Please enter Name, Professional Title and Skills first.");

    return;
  }

  let summary =
    `${title} with a strong interest in technology and continuous learning. ` +
    `Skilled in ${skills}. ` +
    `Passionate about building practical projects, solving problems, ` +
    `and developing professional technical skills. ` +
    `Seeking opportunities to contribute to innovative projects and grow as a professional.`;

  document.getElementById("objective").value = summary;

  updateResume();

  alert("✨ AI Summary Generated!");

}


/* CLEAR */

function clearForm() {

  let inputs = document.querySelectorAll("input, textarea");

  inputs.forEach(input => {
    input.value = "";
  });

  updateResume();

}


/* PDF / PRINT */

function downloadResume() {

  updateResume();

  window.print();

}


/* AUTO UPDATE */

document.querySelectorAll("input, textarea").forEach(element => {

  element.addEventListener("input", updateResume);

});


updateResume();
