// GET requests to /filename would return "Hello, world!"
export const onRequestGet = () => {
    return new Response("Hello, world!")
  }
  
  // POST requests to /filename with a JSON-encoded body would return "Hello, <name>!"
  export const onRequestPost = async ({ request, env }) => {
    const { name, email, message } = await request.json();
    const url = env.FORM_SUBMISSION_URL;
    let resp = `Original`;

    const data = new URLSearchParams();
    data.append("Name", name);
    data.append("Email", email);
    data.append("Message", message);

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: data
    })
    .then(response => {
        console.log(`In First then! ${response}`);
        response.text()})
    .then((response) => {
        console.log('In 2nd then!')
        if (response === "Success"){
            resp = `${name}, your message has been successfully submitted!`;
        }
        else{
            resp = `Sorry, there has been an error :(`;
        }
        return new Response(resp);
    })
    .catch((error) => {
        resp = `Sorry, there has been an error :(`;
        return new Response(resp);
    })
  }