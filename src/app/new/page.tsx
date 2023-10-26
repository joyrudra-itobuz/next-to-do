import { prisma } from "@/db";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

async function createToDo(data: FormData) {
  "use server";

  const title = data.get("title")?.valueOf();

  if (typeof title !== "string" || !title.length) {
    throw new Error("Invalid Title");
  }

  await prisma.toDo.create({ data: { title, isComplete: false } });

  redirect("/");
}

export default function toDo() {
  return (
    <main className="p-3">
      <header>
        <h1 className="text-2xl mb-10 border max-w-max px-2 py-1 border-dashed cursor-default">
          New
        </h1>
      </header>
      <form action={createToDo} className="flex flex-col gap-5">
        <input
          className="w-full bg-transparent border p-2 border-dashed"
          type="text"
          name="title"
        />
        <div className="flex gap-2 justify-end">
          <Link
            href={".."}
            className="text-xl border px-3 py-1 border-dashed hover:bg-white hover:text-black transition-all duration-400"
          >
            Go Back
          </Link>
          <button
            type="submit"
            className="text-xl border px-3 py-1 border-dashed hover:bg-white hover:text-black transition-all duration-400"
          >
            Save
          </button>
        </div>
      </form>
    </main>
  );
}
