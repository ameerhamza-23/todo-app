// Home.tsx
"use client"

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Reorder } from "framer-motion";
import { Item } from "@/components/Item";
import { getTasksFromLocalStorage, saveTasksToLocalStorage } from "@/lib/localStorage";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

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
      setCurrent("");
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
          <Button className="md:w-24 hidden md:block text-primary-foreground bg-primary md:flex-grow w-full" onClick={handleClick}>
            Create Task
          </Button>
          <div className="md:hidden w-full">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="w-full bg-primary text-primary-foreground">Create Task</Button>
              </DialogTrigger>
              <DialogContent className="max-w-[400px] rounded-lg">
                <DialogHeader>
                  <DialogTitle>Add a new task</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="items-center">
                    <Input
                      id="name"
                      defaultValue="Pedro Duarte"
                      className="w-full"
                      placeholder="Add a new task"
                      value={current}
                      onChange={(e) => setCurrent(e.target.value)}
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button onClick={handleClick} type="submit">Create</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>


        </div>
        <div className="pt-10">
          <Reorder.Group axis="y" onReorder={reorderItems} values={items} className="flex flex-col gap-4">
            {items.map((item) => (
              <Item key={item} item={item} onDelete={removeItem} />
            ))}
          </Reorder.Group>
        </div>
      </div>
    </div>
  );
}
