export const getData = async (url: string) => {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });
        const res = await response.json();
        return res;
    } catch (error) {
        console.log('request error: ' + error);
    }
}
