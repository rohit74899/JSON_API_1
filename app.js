document.addEventListener("DOMContentLoaded", async () => {
    try {
        // Fetch data from the API
        const response = await fetch('https://s3.amazonaws.com/open-to-cors/assignment.json');
        const responseData = await response.json();

        console.log('Data:', responseData);

        // Process and display data
        if (responseData && responseData.products) {
            const productsArray = Object.values(responseData.products);

            if (productsArray.length > 0) {
                const container = document.getElementById("container");
                const table = document.createElement("table");

                // Create table header
                const thead = document.createElement("thead");
                const headerRow = document.createElement("tr");
                const titleHeader = document.createElement("th");
                const priceHeader = document.createElement("th");
                titleHeader.textContent = "Title";
                priceHeader.textContent = "Price";
                headerRow.appendChild(titleHeader);
                headerRow.appendChild(priceHeader);
                thead.appendChild(headerRow);
                table.appendChild(thead);

                // Create table body
                const tbody = document.createElement("tbody");
                productsArray.forEach(product => {
                    const row = document.createElement("tr");
                    const titleCell = document.createElement("td");
                    const priceCell = document.createElement("td");
                    titleCell.textContent = product.title;
                    priceCell.textContent = product.price;
                    row.appendChild(titleCell);
                    row.appendChild(priceCell);
                    tbody.appendChild(row);
                });
                table.appendChild(tbody);

                // Append table to container
                container.appendChild(table);
            } else {
                console.log('Products array is empty.');
            }
        } else {
            console.log('Data or products property does not exist.');
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
