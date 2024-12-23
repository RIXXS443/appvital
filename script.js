// Array de municipios
const municipalities = [
    { MUNICIPIOS: "25 de Mayo", Departamento: "25 de Mayo" },
    { MUNICIPIOS: "9 de Julio", Departamento: "Eldorado" },
    { MUNICIPIOS: "Alba Posse", Departamento: "25 de Mayo" },
    { MUNICIPIOS: "Almafuerte", Departamento: "Leandro N. Alem" },
    { MUNICIPIOS: "Apóstoles", Departamento: "Apóstoles" },
    // Agrega el resto de los municipios aquí...
    { MUNICIPIOS: "Tres Capones", Departamento: "Apóstoles" }
];

// Llenar el campo select con los municipios
document.addEventListener('DOMContentLoaded', () => {
    const municipalitySelect = document.getElementById('municipality');
    municipalities.forEach(muni => {
        const option = document.createElement('option');
        option.value = muni.MUNICIPIOS.trim();
        option.textContent = `${muni.MUNICIPIOS.trim()} (${muni.Departamento.trim()})`;
        municipalitySelect.appendChild(option);
    });

    document.getElementById('clientNumber').value = 100; // Inicializa número de cliente
});

const clientForm = document.getElementById('clientForm');
let clients = [];

// Registrar cliente
clientForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const client = {
        name: document.getElementById('name').value,
        address: document.getElementById('address').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        municipality: document.getElementById('municipality').value,
        clientNumber: document.getElementById('clientNumber').value
    };

    clients.push(client);
    localStorage.setItem('clients', JSON.stringify(clients)); // Guarda en LocalStorage

    alert('Cliente registrado con éxito');
    clientForm.reset();

    // Incrementar número de cliente
    document.getElementById('clientNumber').value = parseInt(client.clientNumber) + 1;
});
