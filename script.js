// Array de municipios
const municipalities = [{"MUNICIPIOS":"25 de Mayo  ","Departamento":" 25 de Mayo"},{"MUNICIPIOS":"9 de Julio  ","Departamento":" Eldorado"},{"MUNICIPIOS":"Alba Posse  ","Departamento":" 25 de Mayo"},{"MUNICIPIOS":"Almafuerte  ","Departamento":" Leandro N. Alem"},{"MUNICIPIOS":"Apóstoles  ","Departamento":" Apóstoles"},{"MUNICIPIOS":"Aristóbulo del Valle  ","Departamento":" Cainguás"},{"MUNICIPIOS":"Arroyo del Medio  ","Departamento":" Leandro N. Alem"},{"MUNICIPIOS":"Azara  ","Departamento":" Apóstoles"},{"MUNICIPIOS":"Bernardo de Irigoyen  ","Departamento":" General Manuel Belgrano"},{"MUNICIPIOS":"Bonpland  ","Departamento":" Candelaria"},{"MUNICIPIOS":"Caá Yarí  ","Departamento":" Leandro N. Alem"},{"MUNICIPIOS":"Campo Grande  ","Departamento":" Cainguás"},{"MUNICIPIOS":"Campo Ramón  ","Departamento":" Oberá"},{"MUNICIPIOS":"Campo Viera  ","Departamento":" Oberá"},{"MUNICIPIOS":"Candelaria  ","Departamento":" Candelaria"},{"MUNICIPIOS":"Capioví  ","Departamento":" Libertador General San Martín"},{"MUNICIPIOS":"Caraguatay  ","Departamento":" Montecarlo"},{"MUNICIPIOS":"Cerro Azul  ","Departamento":" Leandro N. Alem"},{"MUNICIPIOS":"Cerro Corá  ","Departamento":" Candelaria"},{"MUNICIPIOS":"Colonia Alberdi  ","Departamento":" Oberá"},{"MUNICIPIOS":"Colonia Aurora  ","Departamento":" 25 de Mayo"},{"MUNICIPIOS":"Colonia Delicia  ","Departamento":" Eldorado"},{"MUNICIPIOS":"Colonia Polana  ","Departamento":" San Ignacio"},{"MUNICIPIOS":"Colonia Victoria  ","Departamento":" Eldorado"},{"MUNICIPIOS":"Colonia Wanda  ","Departamento":" Iguazú"},{"MUNICIPIOS":"Comandante Andresito  ","Departamento":" General Manuel Belgrano"},{"MUNICIPIOS":"Concepción de la Sierra  ","Departamento":" Concepción"},{"MUNICIPIOS":"Corpus  ","Departamento":" San Ignacio"},{"MUNICIPIOS":"Dos Arroyos  ","Departamento":" Leandro N. Alem"},{"MUNICIPIOS":"Dos de Mayo  ","Departamento":" Cainguás"},{"MUNICIPIOS":"El Alcázar  ","Departamento":" Libertador General San Martín"},{"MUNICIPIOS":"El Soberbio  ","Departamento":" Guaraní"},{"MUNICIPIOS":"Eldorado  ","Departamento":" Eldorado"},{"MUNICIPIOS":"Fachinal  ","Departamento":" Capital"},{"MUNICIPIOS":"Florentino Ameghino  ","Departamento":" San Javier"},{"MUNICIPIOS":"Garuhapé  ","Departamento":" Libertador General San Martín"},{"MUNICIPIOS":"Garupá  ","Departamento":" Capital"},{"MUNICIPIOS":"General Alvear  ","Departamento":" Oberá"},{"MUNICIPIOS":"General Urquiza  ","Departamento":" San Ignacio"},{"MUNICIPIOS":"Gobernador López  ","Departamento":" Leandro N. Alem"},{"MUNICIPIOS":"Gobernador Roca  ","Departamento":" San Ignacio"},{"MUNICIPIOS":"Guaraní  ","Departamento":" Oberá"},{"MUNICIPIOS":"Hipólito Yrigoyen  ","Departamento":" San Ignacio"},{"MUNICIPIOS":"Itacaruaré  ","Departamento":" San Javier"},{"MUNICIPIOS":"Jardín América  ","Departamento":" San Ignacio"},{"MUNICIPIOS":"Leandro N. Alem  ","Departamento":" Leandro N. Alem"},{"MUNICIPIOS":"Loreto  ","Departamento":" Candelaria"},{"MUNICIPIOS":"Los Helechos  ","Departamento":" Oberá"},{"MUNICIPIOS":"Mártires  ","Departamento":" Candelaria"},{"MUNICIPIOS":"Mojón Grande  ","Departamento":" San Javier"},{"MUNICIPIOS":"Montecarlo  ","Departamento":" Montecarlo"},{"MUNICIPIOS":"Oberá  ","Departamento":" Oberá"},{"MUNICIPIOS":"Olegario Víctor Andrade  ","Departamento":" Leandro N. Alem"},{"MUNICIPIOS":"Panambí  ","Departamento":" Oberá"},{"MUNICIPIOS":"Posadas  ","Departamento":" Capital"},{"MUNICIPIOS":"Profundidad  ","Departamento":" Candelaria"},{"MUNICIPIOS":"Puerto Esperanza  ","Departamento":" Iguazú"},{"MUNICIPIOS":"Puerto Iguazú  ","Departamento":" Iguazú"},{"MUNICIPIOS":"Puerto Leoni  ","Departamento":" Libertador General San Martín"},{"MUNICIPIOS":"Puerto Libertad  ","Departamento":" Iguazú"},{"MUNICIPIOS":"Puerto Piray  ","Departamento":" Montecarlo"},{"MUNICIPIOS":"Puerto Rico  ","Departamento":" Libertador General San Martín"},{"MUNICIPIOS":"Ruiz de Montoya  ","Departamento":" Libertador General San Martín"},{"MUNICIPIOS":"San Antonio  ","Departamento":" General Manuel Belgrano"},{"MUNICIPIOS":"San Ignacio  ","Departamento":" San Ignacio"},{"MUNICIPIOS":"San Javier  ","Departamento":" San Javier"},{"MUNICIPIOS":"San José  ","Departamento":" Apóstoles"},{"MUNICIPIOS":"San Martín  ","Departamento":" Oberá"},{"MUNICIPIOS":"San Pedro  ","Departamento":" San Pedro"},{"MUNICIPIOS":"San Vicente  ","Departamento":" Guaraní"},{"MUNICIPIOS":"Santa Ana  ","Departamento":" Candelaria"},{"MUNICIPIOS":"Santa María  ","Departamento":" Concepción"},{"MUNICIPIOS":"Santiago de Liniers  ","Departamento":" Eldorado"},{"MUNICIPIOS":"Santo Pipó  ","Departamento":" San Ignacio"},{"MUNICIPIOS":"Tres Capones  ","Departamento":" Apóstoles"}];

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
