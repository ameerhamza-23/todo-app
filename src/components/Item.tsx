// Item.tsx
import * as React from "react";
import { useDragControls, Reorder } from "framer-motion";
import { ReorderIcon } from "./Icon";
import { Card, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";

interface Props {
  item: string;
  onDelete: (item: string) => void; // Callback function type for deletion
}

export const Item = ({ item, onDelete }: Props) => {
  const dragControls = useDragControls();

  const handleDelete = () => {
    onDelete(item); // Invoke onDelete callback with the item to be deleted
  };

  return (
    <Reorder.Item
      value={item}
      id={item}
      dragListener={false}
      dragControls={dragControls}
      style={{ userSelect: "none" }}
    >
      <Card className="md:h-[80px] h-[60px]">
        <CardHeader>
          <CardTitle className="flex gap-4 px-4 items-center w-full md:h-[80px] h-[60px]">
            <ReorderIcon dragControls={dragControls} />
            <div className="flex justify-between w-full">
              <p className="text-sm md:text-2xl">{item}</p>
              <button onClick={handleDelete}>
                <Image src="delete-5.svg" alt="delete image" width={20} height={20} />
              </button>
            </div>
          </CardTitle>
        </CardHeader>
      </Card>
    </Reorder.Item>
  );
};
