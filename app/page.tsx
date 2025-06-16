import { RepositoryTable } from "@/components/tables/RepositoryTable";
import strings from "@/lib/strings.config";

export default function Home() {
  return (
    <section>
      <h1 className="text-xl px-8 rounded-md mb-2">{strings.repositories.title}</h1>  
      <RepositoryTable />
    </section>
  );
}
