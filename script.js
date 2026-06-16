fetch('/projects')
.then(res => res.json())
.then(data => {

    const container = document.getElementById('project-list');

    data.forEach(project => {

        const div = document.createElement('div');
        div.className = 'project';

        div.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        `;

        container.appendChild(div);
    });
});