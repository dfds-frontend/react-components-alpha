export default async function postJsonAsync(url, options) {
    const response = await fetch(url, {
        method: 'post',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(options),
    });

    let json = await response.json();

    return { data: json, status: response.status };
}
