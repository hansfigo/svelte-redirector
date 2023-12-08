import { redirect, type Handle } from '@sveltejs/kit';

export const handle = (async ({ event, resolve }) => {
    if (event.url.pathname === '/') {
        return new Response("Simple Proxy buat gawean figo 😼")
    }

    if (event.url.pathname === '/media-maya') {
        throw redirect(301, 'https://flipbookpdf.net/web/site/c65258e34fa8c03245de30e20dea5442ab03eec0202307.pdf.html')
    }


    if (event.url.pathname === '/FpMulmed2023') {
        throw redirect(301, 'https://youtu.be/Q6JHJ1PCtm')

    }

    const response = await resolve(event);
    return response;
}) satisfies Handle;
