import strings from "@/lib/strings.config";
import { Frown } from "lucide-react"

function ErrorMessage({message} : {message: string}) {
    const SIZE = 48;
    return (
        <div className="flex flex-row items-center p-8">
            <Frown className="mr-4 text-accent" size={SIZE}/>
            <div>
                <h2 className="text-lg font-bold">{strings.error.title}</h2>
                <p>{message}</p>
            </div>
        </div>
    )
}
export {
    ErrorMessage
}