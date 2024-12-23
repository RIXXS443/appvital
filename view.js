const apiGetUrl = "https://prod-21.brazilsouth.logic.azure.com/workflows/a1f66a512b30401f837963fb67c270fb/triggers/manual/paths/invoke/obtener_registros?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=wv5unUjOMZBO6-uen9yvRsJi-ao7WAkE_pB35q_0D7k";

document.addEventListener('DOMContentLoaded', async () => {
    const clientTableBody = document.querySelector('#clientTable tbody');

    try {
        const response = await fetch(apiGetUrl);

        if (response.ok) {
            const clients = await response.json();

            if (clients.length === 0) {
                // Mostrar mensaje si no hay datos
                clientTableBody.innerHTML = '<tr><td colspan="7">No hay clientes registrados en el sistema.</td></tr>';
                return;
            }

            // Iterar sobre los clientes y crear filas en la tabla
            clients.forEach(client => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${client.Numero_Cliente}</td>
                    <td>${client.Nombre}</td>
                    <td>${client.Apellido}</td>
                    <td>${client.Direccion}</td>
                    <td>${client.Telefono}</td>
                    <td>${client.Email}</td>
                    <td>${client.Municipio.trim()}</td>
                `;
                clientTableBody.appendChild(row);
            });
        } else {
            throw new Error('Error al obtener la lista de clientes.');
        }
    } catch (error) {
        console.error('Error:', error.message);
        clientTableBody.innerHTML = '<tr><td colspan="7">Error al cargar los clientes.</td></tr>';
    }
});

// Función para filtrar la tabla
function filterTable() {
    const input = document.getElementById('search');
    const filter = input.value.toLowerCase();
    const table = document.getElementById('clientTable');
    const rows = table.getElementsByTagName('tr');

    for (let i = 1; i < rows.length; i++) { // Empieza en 1 para omitir el encabezado
        const cells = rows[i].getElementsByTagName('td');
        let match = false;

        for (let j = 0; j < cells.length; j++) {
            if (cells[j]) {
                const text = cells[j].textContent || cells[j].innerText;
                if (text.toLowerCase().includes(filter)) {
                    match = true;
                    break;
                }
            }
        }

        rows[i].style.display = match ? '' : 'none'; // Muestra u oculta la fila
    }
}
