// @ts-nocheck
import { error, redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = ({ params, url }) => {
    const { id } = params;
    const lang = url.searchParams.get('lang') ?? "en";

    throw redirect(301, `https://${lang}.scratch-wiki.info/wiki/${id}`);
};