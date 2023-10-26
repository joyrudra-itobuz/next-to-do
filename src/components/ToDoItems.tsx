"use client";

import React from "react";

type ToDoItemProps = {
  id: string;
  title: string;
  isComplete: boolean;
  toggleStatus: (id: string, isComplete: boolean) => Promise<void>;
};

export default function ToDoItems({
  id,
  title,
  isComplete,
  toggleStatus,
}: ToDoItemProps) {
  return (
    <li
      key={id}
      className={
        "text-xl flex gap-3 items-center cursor-pointer border border-dashed p-2 rounded-x " +
        (isComplete ? " bg-gray-600" : "")
      }
    >
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
    </li>
  );
}
