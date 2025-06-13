import { Settings, Book, Archive} from "lucide-react"
import { NavigationItem } from "@/types/NavigationItem"
const navigationItems: NavigationItem[] = [
    {
        title: "Repositories",
        url: "/",
        icon: Archive,
        group: "Registry",
        
    },
    {
        title: "Settings",
        url: "/#",
        icon: Settings,
        group: "",
    },
    {
        title: "Documentation",
        url: "https://docs.olingo.dev",
        icon: Book,
        group: "",
    },
];

export default navigationItems;