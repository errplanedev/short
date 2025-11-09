import { error, redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = ({ params }) => {
    const { id } = params;
    throw redirect(301, `https://scratch.mit.edu/discuss/topic/${id}/`);
};