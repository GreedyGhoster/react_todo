import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { AiOutlineCheck } from "react-icons/ai";
import { useState, useContext } from "react";
import { TaskContext } from "./ToDo";

export default function Task() {
  const [taskComplete, setTaskComplete] = useState(false);
  const [taskVisible, setTaskVisible] = useState(true);
  const task = useContext(TaskContext);
  return (
    <>
      {taskVisible === true ? (
        <div className="task-form">
          <div className={taskComplete ? "task-complete" : "task"}>
            <div className={taskComplete ? "task-do-complete" : "task-do"}>
              <h3
                className={
                  taskComplete ? "task-do-text-complete" : "task-do-text"
                }
              >
                {task}
              </h3>
            </div>
            <AiOutlineCheck
              onClick={() => setTaskComplete(!taskComplete)}
              className="task-complete-icon"
            />
            <MdDeleteForever
              className="task-delete-icon"
              onClick={() => setTaskVisible(!taskVisible)}
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
