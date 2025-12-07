document.addEventListener('DOMContentLoaded', function() {
    const title = document.querySelector('h1');
    const text = title.innerHTML;
    const typingSpeed = 100; // Velocidade da digitação em milissegundos
    title.innerHTML = '';

    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            title.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, typingSpeed);
        } else {
            // Adiciona a classe do cursor piscando quando o texto termina
            title.classList.add('typing-done');
        }
    }

    typeWriter();

    const skills = document.querySelectorAll('.skills-container span');
    skills.forEach(skill => {
        const skillName = skill.textContent.trim();
        skill.setAttribute('data-skill', skillName);
        skill.addEventListener('click', () => {
            console.log(`Habilidade clicada: ${skill.getAttribute('data-skill')}`);
        });
    });
});
