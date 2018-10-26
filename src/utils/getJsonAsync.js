export default async function getJsonAsync(url) {
    const response = await fetch(url);

    let json = await response.json();

    return { data: json, status: response.status };
}
