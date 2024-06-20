// Home.tsx
"use client"

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Reorder } from "framer-motion";
import { Item } from "@/components/Item";
import { getTasksFromLocalStorage, saveTasksToLocalStorage } from "@/lib/localStorage";

export default function Home() {
  const [items, setItems] = useState<string[]>([]);
  const [current, setCurrent] = useState("");

  useEffect(() => {
    const localTasks = getTasksFromLocalStorage();
    setItems(localTasks);
  }, []);

  const addItem = (item: string) => {
    const newItems = [...items, item];
    setItems(newItems);
    saveTasksToLocalStorage(newItems);
  };

  const removeItem = (itemToRemove: string) => {
    const newItems = items.filter((item) => item !== itemToRemove);
    setItems(newItems);
    saveTasksToLocalStorage(newItems);
  };

  const reorderItems = (newItems: string[]) => {
    setItems(newItems);
    saveTasksToLocalStorage(newItems);
  };

  const handleClick = () => {
    if (current.trim()) {
      addItem(current);
      setCurrent(""); // Clear the input field after adding the item
    }
  };

  return (
    <div className="w-full flex justify-center h-full">
      <div className="md:w-1/2 w-3/4">
        <div className="md:flex md:justify-between md:gap-4">
          <Input
            placeholder="Add a new task"
            className="w-5/6 bg-secondary hidden md:block"
            value={current}
            onChange={(e) => setCurrent(e.target.value)}
          />
          <Button className="md:w-24 text-primary-foreground bg-primary md:flex-grow w-full" onClick={handleClick}>
            Create Task
          </Button>
        </div>
        <div className="pt-10">
          <Reorder.Group axis="y" onReorder={reorderItems} values={items} className="flex flex-col gap-4">
            {items.map((item) => (
              <Item key={item} item={item} onDelete={removeItem} /> // Pass removeItem function as prop
            ))}
          </Reorder.Group>
        </div>
      </div>
    </div>
  );
}
