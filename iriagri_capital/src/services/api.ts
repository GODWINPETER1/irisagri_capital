export const sendContact = async (data: any) => {

    const res = await fetch("http://localhost:5000/api/contact" , {
        method: "POST",
        headers: { "content-type" : "application/json"},
        body: JSON.stringify(data),
    });
    return res.json();
}