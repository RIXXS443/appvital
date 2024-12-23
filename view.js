const apiGetUrl = "https://prod-21.brazilsouth.logic.azure.com/workflows/a1f66a512b30401f837963fb67c270fb/triggers/manual/paths/invoke/obtener_registros?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=wv5unUjOMZBO6-uen9yvRsJi-ao7WAkE_pB35q_0D7k";

document.addEventListener('DOMContentLoaded', async () => {
    const clientList = document.getElementById('clientList');

    try {
        const response = await fetch(apiGetUrl);

        if (response.ok) {
            const clients = await response.json();

            if (clients.length === 0) {
                clientList.innerHTML = '<li>No hay clientes registrados.</li>';
                return;
            }

            clients.forEach(client => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <strong>(${client.Numero_Cliente})</strong> ${client.Nombre} ${client.Apellido}<br>
                    <strong>Dirección:</strong> ${client.Direccion}<br>
                    <strong>Teléfono:</strong> ${client.Telefono}<br>
                    <strong>Correo:</strong> ${client.Email}<br>
                    <strong>Municipio:</strong> ${client.Municipio}
                `;
                clientList.appendChild(li);
            });
        } else {
            throw new Error('Error al obtener la lista de clientes.');
        }
    } catch (error) {
        console.error('Error:', error.message);
        clientList.innerHTML = '<li>Error al cargar los clientes.</li>';
    }
});
