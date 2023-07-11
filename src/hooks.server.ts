import { redirect, type Handle } from '@sveltejs/kit';

export const handle = (async ({ event, resolve }) => {
    if (event.url.pathname === '/') {
        return new Response("Simple Proxy buat gawean figo 😼")
    }

    if (event.url.pathname === '/media-maya') {
        throw redirect(301, 'https://mikiflix.vercel.app/')
    }

    const response = await resolve(event);
    return response;
}) satisfies Handle;