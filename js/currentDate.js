const currentDate = new Date();
console.log(currentDate);

const currentYear = currentDate.getFullYear();
document.getElementById("currentYear").innerHTML = currentYear;


document.getElementById("lastModified").textContent = document.lastModified;
