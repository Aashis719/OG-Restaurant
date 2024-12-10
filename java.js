
function showSidebar() {
    const sidebar = document.querySelector('#sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar() {
    const sidebar = document.querySelector('#sidebar')
    sidebar.style.display = 'none'
}


var counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 4000);

function OpenLogin() {
    const floatingLogin= document.querySelector('.login')
    floatingLogin.style.display = 'flex'
}
function HideLogin() {
    const floatingLogin = document.querySelector('.login')
    floatingLogin.style.display = 'none'
}

