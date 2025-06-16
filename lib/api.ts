"use server";
import { env } from "@/config/env";
import { Repositories, RepositoryTags } from "@/types/api.types";

const protocol = env.FIG_USE_HTTPS ? "https://" : "http://";
let REGISTRY_URL = `${protocol}${env.FIG_REGISTRY_HOST}:${env.FIG_REGISTRY_PORT}`;

const REGISTRY_API_SPECIFICATION = {
    REPOSITORIES: `${REGISTRY_URL}/v2/_catalog`,
    REPOSITORY_TAGS: (name : string) => `${REGISTRY_URL}/v2/${name}/tags/list`
}

export const getRepositories = async () : Promise<Repositories> => {
    console.log(REGISTRY_URL)
    const res = await fetch(REGISTRY_API_SPECIFICATION.REPOSITORIES, {
        headers: {
            "Content-Type": "application/json",
        }
    });
    if (!res.ok) {
        throw new Error(`Failed to fetch repositories: ${res.statusText}`);
    }
    const data = (await res.json()) as Repositories;
    return data;
}
export const getTagsFromReposiory = async (name: string) : Promise<RepositoryTags> => {
    const res = await fetch(REGISTRY_API_SPECIFICATION.REPOSITORY_TAGS(name))
    if (!res.ok) {
        throw new Error(`Failed to fetch repositories: ${res.statusText}`);
    }
    const data = (await res.json()) as RepositoryTags;
    return data;
}