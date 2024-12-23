const clientList = document.getElementById('clientList');
const apiUrl = "https://api.example.com/clients"; // Cambiar por tu API real

// Cargar clientes registrados
document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Error al cargar clientes');
        const clients = await response.json();
        renderClientList(clients);
    } catch (error) {
        console.error(error.message);
    }
});

// Renderizar lista de clientes
function renderClientList(clients) {
    clientList.innerHTML = '';
    if (clients.length === 0) {
        clientList.innerHTML = '<li>No hay clientes registrados.</li>';
        return;
    }

    clients.forEach(client => {
        const li = document.createElement('li');
        li.textContent = `(${client.clientNumber}) ${client.name} - ${client.email}`;
        clientList.appendChild(li);
    });
}
