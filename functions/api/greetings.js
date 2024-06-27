// GET requests to /filename would return "Hello, world!"
export const onRequestGet = () => {
    return new Response("Hello, world!")
  }
  
  // POST requests to /filename with a JSON-encoded body would return "Hello, <name>!"
  export const onRequestPost = async ({ request, env }) => {
    const { name, email, message } = await request.json();
    const url = env.FORM_SUBMISSION_URL;
    let response = "Original";

    const data = new URLSearchParams();
    data.append("Name", name);
    data.append("Email", email);
    data.append("Message", message);

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: data
    })
    .then(response => response.text())
    .then((response) => {
        if (response === "Success"){
            response = `${name}, your message has been successfully submitted!`;
        }
        else{
            response = `Sorry, there has been an error :(`;
        }
    })
    .catch((error) => {
        response = `Sorry, there has been an error :(`;
    })
    console.log(`Response: ${response}`)
    return new Response(response);
  }