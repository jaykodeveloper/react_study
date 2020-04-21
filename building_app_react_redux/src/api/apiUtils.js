export async function handleResponse(res) {
    console.log(res);
    if (res.ok) {
        return res.json();
    }
    if (res.status === 400) {
        const err = await res.text();
        throw new Error(err);
    }
    throw new Error("Network res was not okay!")
}

// In a real app, would likely call an error logging service
export function handleError(err) {
    console.error("Api call failed!!!!", err);
    throw err;
}