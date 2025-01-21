const apiGetUrl = "https://prod-21.brazilsouth.logic.azure.com/workflows/a1f66a512b30401f837963fb67c270fb/triggers/manual/paths/invoke/obtener_registros?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=wv5unUjOMZBO6-uen9yvRsJi-ao7WAkE_pB35q_0D7k";

document.addEventListener('DOMContentLoaded', async () => {
    const clientTableBody = document.querySelector('#clientTable tbody');

    try {
        const response = await fetch(apiGetUrl);

        if (response.ok) {
            const clients = await response.json();

            if (clients.length === 0) {
                clientTableBody.innerHTML = '<tr><td colspan="6">No hay clientes registrados en el sistema.</td></tr>';
                return;
            }

            clients.forEach(client => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${client.Numero_Cliente}</td>
                    <td>${client.Nombre}</td>
                    <td>${client.Apellido}</td>
                    <td>${client.Direccion}</td>
                    <td>${client.Telefono}</td>
                    <td>${client.Municipio.trim()}</td>
                `;
                clientTableBody.appendChild(row);
            });
        } else {
            throw new Error('Error al obtener la lista de clientes.');
        }
    } catch (error) {
        console.error('Error:', error.message);
        clientTableBody.innerHTML = '<tr><td colspan="6">Error al cargar los clientes.</td></tr>';
    }
});
