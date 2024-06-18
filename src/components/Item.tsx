import * as React from "react";
import { useMotionValue, Reorder, useDragControls } from "framer-motion";
import { ReorderIcon } from "./Icon";
import { Card, CardHeader, CardTitle } from "./ui/card";

interface Props {
    item: string;
}

export const Item = ({ item }: Props) => {
    const dragControls = useDragControls();

    return (
        <Reorder.Item
            value={item}
            id={item}
            dragListener={false}
            dragControls={dragControls}
            style={{userSelect:'none'}}
        >
            <Card>
                <CardHeader>
                    <CardTitle className="flex gap-4 items-center">
                        <ReorderIcon dragControls={dragControls} />
                        <p>I have to create a project {item}</p>
                    </CardTitle>
                </CardHeader>
            </Card>

        </Reorder.Item>
    );
};
