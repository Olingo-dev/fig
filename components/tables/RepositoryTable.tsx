"use client";

import { Separator } from "@/components/ui/separator";
import { Repositories } from "@/types/api.types";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { getRepositories } from "@/lib/api";
import { toast } from "sonner";
import strings from "@/lib/strings.config";
import { ErrorMessage } from "@/components/ui/error-message";

export function RepositoryTable() {
    const [loading, setLoading] = useState<boolean>(true);
    const [repositories, setRepositories] = useState<Repositories>({repositories: []})
    const [errorMessage, setErrorMessage] = useState<string>("");

    useEffect(() => {
        setLoading(true);
        getRepositories()
        .then((repositories) => {
            setLoading(false)
            console.log(repositories);
            setRepositories(repositories)
        })
        .catch((error : unknown) => {
            setLoading(false)
            if(error instanceof Error) {
                toast(error.message)
                setErrorMessage(error.message)
            } else {
                toast(strings.error.unexpected)
                setErrorMessage(strings.error.unexpected)
            }
        })
    }, [])

    if(loading) {
        return (
            <div className="space-y-2 p-8">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
            </div>
        )
    }
    if(errorMessage) {
        return (
            <div>
                <ErrorMessage message={errorMessage} />
            </div>
        )
    }
    if(repositories.repositories.length > 0) {
        return (
            <div className="p-8">
                {
                    repositories.repositories.map((repo, index) => <RepositoryElement name={repo} key={index}/>)
                }
            </div>
        )
    } 
    return (
        <div className="p-8">
                <p>{strings.repositories.empty}</p>
        </div>
    )

}
function RepositoryElement({name}: {name: string}) {
    return (
        <>
            <a className="text-sm leading-none font-medium cursor-pointer hover:text-accent transition-colors duration-250">{name}</a>
            <Separator className="my-4" />
        </>
    )
}