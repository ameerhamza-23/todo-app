"use client"
import { Reorder, useDragControls } from "framer-motion";
import { useState } from "react";

export default function Test() {

    const controls = useDragControls()
    const [items, setItems] = useState([1, 2, 3, 4, 5])
    return (
        <Reorder.Group axis="y" values={items} onReorder={setItems}>
            {items.map((item) => (
                <Reorder.Item key={item} value={item} dragListener={false} dragControls={controls}>
                    <div className="p-4 flex justify-between border-2 border-black text-center">
                        <h1>
                            {item}
                        </h1>
                        <span className="border-red border-2" onPointerDown={(e) => controls.start(e)}>drag me</span>

                    </div>

                </Reorder.Item>
            ))}
        </Reorder.Group>

    )
}