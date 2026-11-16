const statusEl = document.getElementById('status');
const listEl = document.getElementById('user-list');

async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }

        const users = await response.json();

        statusEl.style.display = 'none';
        users.forEach(user => {
            const li = document.createElement('li');
            li.textContent = `${user.name} (${user.email})`;
            listEl.appendChild(li);
        });
    } catch (error) {
        statusEl.textContent = `Не удалось загрузить данные: ${error.message}`;
        statusEl.style.color = 'red';
    }
}

fetchUsers();