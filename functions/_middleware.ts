import staticFormsPlugin from "@cloudflare/pages-plugin-static-forms";

export const onRequest: PagesFunction = staticFormsPlugin({
  respondWith: ({ formData, name }) => {
    console.log("Why don't logs work?");
    const personName: FormDataEntryValue | null = formData.get('name');
    const email: FormDataEntryValue | null = formData.get('email');
    const message: FormDataEntryValue | null = formData.get('message');
    console.log(`Name: ${personName}`);
    return new Response(`Hello, ${email}! Thank you for submitting the ${name} form.`);
  }
});