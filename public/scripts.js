async function translateText() {
    const englishText = document.getElementById('englishText').value;
    const url = 'https://api.funtranslations.com/translate/valyrian.json';
    const data = { text: englishText };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(data),
        });

        if (response.ok) {
            const jsonResponse = await response.json();
            const valyrianText = jsonResponse.contents.translated;
            document.getElementById('valyrianText').innerText = valyrianText;
        } else {
            const errorResponse = await response.json();
            document.getElementById('valyrianText').innerText = `Error: ${errorResponse.error.message}`;
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('valyrianText').innerText = 'An error occurred while translating the text.';
    }
}
