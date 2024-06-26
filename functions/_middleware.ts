import staticFormsPlugin from "@cloudflare/pages-plugin-static-forms";

export const onRequest: PagesFunction = staticFormsPlugin({
  respondWith: ({ formData, name }) => {
    const email = formData.get('email')
    console.log(email)
    return new Response(`Hello, ${email}! Thank you for submitting the ${name} form.`)
  }
});