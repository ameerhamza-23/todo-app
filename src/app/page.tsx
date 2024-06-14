"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Reorder, useDragControls } from "framer-motion";

export default function Home() {
  const [tasks, setTasks] = useState([1, 2, 3, 4, 5,6,7,8,9,10]);

  const handlePointerDown = (event, controls) => {
    event.preventDefault(); // Prevent default behavior
    controls.start(event); // Start drag for the specific item
  };

  return (
    <div className="w-full flex justify-center h-full">
      <div className="w-1/2">
        <div className="flex justify-between">
          <Input placeholder="Add a new task" className="w-5/6" />
          <Button className="w-24">Create Task</Button>
        </div>
        <div className="pt-10">
          <Reorder.Group values={tasks} onReorder={setTasks} className="flex flex-col gap-4">
            {tasks.map((task) => {
              const controls = useDragControls();
              return (
                <Reorder.Item
                  key={task}
                  value={task}
                  dragControls={controls}
                  dragListener={false}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex gap-4 items-center">
                        <div
                          className="w-4 h-4 hover:cursor-pointer"
                          onPointerDown={(e) => handlePointerDown(e, controls)}
                        >
                          <img src="dial.svg" alt="no-image" />
                        </div>
                        <p>I have to create a project {task}</p>
                      </CardTitle>
                    </CardHeader>
                  </Card>
                </Reorder.Item>
              );
            })}
          </Reorder.Group>
        </div>
      </div>
    </div>
  );
}
