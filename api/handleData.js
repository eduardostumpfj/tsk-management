export async function getAllData() {
    const resp = await fetch('DUMMY_DATA/projects.json');
    const data = await resp.json();

    return data;
}