'use server';
import { db } from '@/db';
import { redirect } from 'next/navigation';

export async function editSnippet(id: number, code: string) {
    console.log("[actions][index.tx] => (id):", id);
    console.log("[actions][index.tx] => (code):", code);
    await db.snippet.update({
        where: { id },
        data: { code}
    });
    redirect(`/snippets/${id}`);
}