"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Reorder, useDragControls } from "framer-motion";
import { Item } from "@/components/Item";

export default function Home() {
  const controls = useDragControls();
  const [items, setItems] = useState<string[]>([]);
  const [current, setCurrent] = useState("");

  const handleClick = () => {
    if (current.trim()) {
      setItems((prevItems) => [...prevItems, current]);
      setCurrent(""); // Clear the input field after adding the item
    }
  };

  return (
    <div className="w-full flex justify-center h-full">
      <div className="w-1/2">
        <div className="flex justify-between">
          <Input
            placeholder="Add a new task"
            className="w-5/6"
            value={current}
            onChange={(e) => setCurrent(e.target.value)}
          />
          <Button className="w-24 text-gray-200" onClick={handleClick}>
            Create Task
          </Button>
        </div>
        <div className="pt-10">
          <Reorder.Group
            axis="y"
            onReorder={setItems}
            values={items}
            className="flex flex-col gap-4"
          >
            {items.map((item) => (
              <Item key={item} item={item} />
            ))}
          </Reorder.Group>
        </div>
      </div>
    </div>
  );
}
