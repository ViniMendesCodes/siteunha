document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('contactForm').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Formulário enviado com sucesso!');
    });
});
document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('.dropbtn').addEventListener('click', function() {
        document.querySelector('.dropdown-content').classList.toggle('show');
    });
});

// Fechar o dropdown se o usuário clicar fora dele
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName('dropdown-content');
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
