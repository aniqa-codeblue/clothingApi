

async function callApiController(endpoint, method = "GET", data = null) {
    const apiUrl = "https://api/webhook/lead-check"; // Adjust API URL

    const options = {
        method: method,
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer YOUR_ACCESS_TOKEN", // Optional for authentication
        },
    };

    if (data) {
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(apiUrl, options);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error calling API:", error);
        return null;
    }
}

// Example usage:
callApiController("Email Leads received", "GET")
    .then(data => console.log("API Response:", data))
    .catch(error => console.error("Fetch Error:", error));







async function callApiController(name, email, phone, airtable_name, record_id_to_be_duplicated) {
    try {
        fetch('https://api/webhook/lead-check', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
            },
            body: JSON.stringify({
                name,
                email,
                phone,
                airtable_name,
                record_id_to_be_duplicated
            })
        });

        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}

{
    try {
        const response = await fetch('http://127.0.0.1:8000/api/submit-form', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            },
            body: formData
        });
        return await response.json();
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}