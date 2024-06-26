/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

async function createAirtableRecord(env, body) {
	try{
		const result = fetch(`https://api.airtable.com/v0/${env.AIRTABLE_BASE_ID}/${encodeURIComponent(env.AIRTABLE_TABLE_NAME)}`, {
			methdod: 'POST',
			body: JSON.stringify(body),
			headers: {
				Authorization: `Bearer ${env.AIRTABLE_ACCESS_TOKEN}`,
				'Content-Type': 'application/json',
			}
		})
		return result;
	} catch(error){
		console.error(error);
	}
}

async function submitHandler(request, env) {
	if(request.method !== "POST"){
		return new Response("Method Not Allowed", {status: 405})
	}
	const body = await request.formData();

	const {
		name,
		email,
		message
	} = Object.fromEntries(body);

	const reqBody = {
		fields: {
			"Name": name,
			"Email": email,
			"Message": message
		}
	}
	await createAirtableRecord(env, reqBody);
}

export default {
	async fetch(request, env) {
		const url = new URL(request.url);
		if(url.pathname === "/submit") {
			await submitHandler(request, env);
		}
		return new Response('Not Found', {status: 404});
	},
};
