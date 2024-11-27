import * as React from "react";

export function Footer() {
  return (
    <div className="flex flex-col text-lg justify-center align-middle items-center my-2">
      <div id="done">Chores ToDo List</div>
      <div id="new-task" className="flex flex-col w-6/12">
        <p>Add todo</p>
        <input type="text" name="job" id="job" />
        <a
          href="#"
          className="hover:bg-blue-700 p-1 rounded-md bg-blue-500 w-[100px] items-center text-center"
        >
          ADD TASK
        </a>
      </div>
    </div>
  );
}
