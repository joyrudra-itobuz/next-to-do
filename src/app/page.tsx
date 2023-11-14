import ToDoItems from "@/components/ToDoItems";
import { prisma } from "@/db";
import Link from "next/link";

async function toggleStatus(id: string, isComplete: boolean) {
  "use server";

  await prisma.toDo.update({ where: { id }, data: { isComplete } });
}

async function handleDelete(id: string) {
  "use server";

  await prisma.toDo.delete({ where: { id } });
}

export default async function Home() {
  const toDos = await prisma.toDo.findMany();

  return (
    <main className="p-3">
      <header className="flex justify-between">
        <h1 className="text-2xl">Next ToDo</h1>
        <Link
          href={"/new"}
          className="text-xl border px-3 py-1 border-dashed hover:bg-white hover:text-black transition-all duration-400"
        >
          New
        </Link>
      </header>
      <div className="my-10 border border-dashed"></div>
      <ul className="flex flex-col gap-3">
        {toDos.map((toDo) => {
          return (
            <ToDoItems
              key={toDo.id}
              {...toDo}
              toggleStatus={toggleStatus}
              handleDelete={handleDelete}
            />
          );
        })}
      </ul>
    </main>
  );
}
