"use client";

import { HiTrash } from "react-icons/hi";

type ToDoItemProps = {
  id: string;
  title: string;
  isComplete: boolean;
  toggleStatus: (id: string, isComplete: boolean) => Promise<void>;
  handleDelete: (id: string) => Promise<void>;
};

export default function ToDoItems({
  id,
  title,
  isComplete,
  toggleStatus,
  handleDelete,
}: ToDoItemProps) {
  return (
    <li
      key={id}
      className={
        "text-xl flex gap-3 justify-between items-center cursor-pointer border border-dashed p-2 rounded-x " +
        (isComplete ? " bg-gray-600" : "")
      }
    >
      <div className="flex gap-2">
        <input
          id={id}
          type="checkbox"
          className="cursor-pointer peer"
          defaultChecked={isComplete}
          onChange={(e) => toggleStatus(id, e.target.checked)}
        />
        <label
          htmlFor={id}
          className=" peer-checked:line-through peer-checked:italic peer-checked:text-gray-700 "
        >
          {title}
        </label>
      </div>
      <button onClick={(e) => handleDelete(id)}>
        <HiTrash />
      </button>
    </li>
  );
}
