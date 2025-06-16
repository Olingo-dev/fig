"use client";
import { useParams } from 'next/navigation';

export default function RepositoryPage() {
    const params = useParams<{name: string}>()
    return (
        <div>
            <h1>Repository: {params.name}</h1>
        </div>
    );
}