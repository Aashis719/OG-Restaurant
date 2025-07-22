function showSidebar() {
    const sidebar = document.querySelector('#sidebar');
    sidebar.style.display = 'flex';
 
    // Close on click outside
    document.addEventListener('click', handleOutsideClick);

    // Close on clicking any anchor inside sidebar
    const links = sidebar.querySelectorAll('a');
    links.forEach(link => { 
        link.addEventListener('click', hideSidebar);
    });
} 

function hideSidebar() {
    const sidebar = document.querySelector('#sidebar');
    sidebar.style.display = 'none';

    // Remove outside click listener when sidebar is closed 
    document.removeEventListener('click', handleOutsideClick);
}

function handleOutsideClick(event) {
    const sidebar = document.querySelector('#sidebar');
    const infoButton = document.querySelector('#info'); // Prevent closing when clicking the "info" button.

    if (
        sidebar && 
        !sidebar.contains(event.target) &&
        !infoButton.contains(event.target)
    ) {
        hideSidebar();
    }
}
var counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 4000);

document.getElementById('reservationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
    })
    .then(response => {
        if (response.ok) {
            form.reset();
            window.location.href = "/success.html"; // ✅ Redirect to success page
        } else {
            alert("Submission failed. Please try again.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("There was an error submitting the form.");
    });
});