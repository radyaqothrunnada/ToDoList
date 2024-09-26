const Nama = document.getElementById('Nama');
const Email = document.getElementById('Email');
const Password = document.getElementById('Password');
const listContainer = document.getElementById('list-container');

function addTask() {
    if (Nama.value === '' || Email.value === '' || Password.value.length < 8) {
        alert("Nama, Email, atau Password tidak valid");
    } else if (!isValidEmail(Email.value)) {
        alert("Format email tidak valid. Pastikan email berakhir dengan @gmail.com");
    } else {
        let li = document.createElement("li");
        li.innerHTML = `${Nama.value} - ${Email.value}`;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        Nama.value = "";
        Email.value = "";
        Password.value = "";
        saveData();
    }
}

function isValidEmail(email) {
    const emailPattern = /@gmail\.com$/;
    return emailPattern.test(email);
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
