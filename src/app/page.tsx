"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Reorder, useDragControls } from "framer-motion";
import { Item } from "@/components/Item";

export default function Home() {
  const initialItems = ["🍅 Tomato", "🥒 Cucumber", "🧀 Cheese", "🥬 Lettuce"];
  const controls = useDragControls();
  const [items, setItems] = useState(initialItems);

  return (
    <div className="w-full flex justify-center h-full">
      <div className="w-1/2">
        <div className="flex justify-between">
          <Input placeholder="Add a new task" className="w-5/6" />
          <Button className="w-24">Create Task</Button>
        </div>
        <div className="pt-10">
          <Reorder.Group axis="y" onReorder={setItems} values={items} className="flex flex-col gap-4">
            {items.map((item) => (
              <Item key={item} item={item} />
            ))}
          </Reorder.Group>
        </div>
      </div>
    </div>
  );
}
