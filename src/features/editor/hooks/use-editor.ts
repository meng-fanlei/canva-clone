import { Canvas, FabricObject, Rect, Shadow } from "fabric";
import { useCallback, useState } from "react";
import { useAutoResize } from "./use-auto-resize";

export const useEditor = () => {
  const [canvas, setCanvas] = useState<Canvas | null>(null);
  const [container, setContainer] = useState<HTMLDivElement | null>(null);

  useAutoResize({ canvas, container });

  const init = useCallback(
    ({
      initialCanvas,
      initialContainer,
    }: {
      initialCanvas: Canvas;
      initialContainer: HTMLDivElement;
    }) => {
      FabricObject.ownDefaults = {
        ...FabricObject.ownDefaults,
        cornerColor: "#FFF",
        cornerStyle: "circle",
        borderColor: "#3b82f6",
        borderScaleFactor: 1.5,
        transparentCorners: false,
        borderOpacityWhenMoving: 1,
        cornerStrokeColor: "#3b82f6",
      };

      const initialWorkspace = new Rect({
        name: "clip",
        width: 900,
        height: 1200,
        fill: "white",
        selectable: false,
        hasControls: false,
        shadow: new Shadow({
          color: "rgb(0,0,0,0.8)",
          blur: 5,
        }),
      });

      initialCanvas.setDimensions({
        width: initialContainer.offsetWidth,
        height: initialContainer.offsetHeight,
      });

      initialCanvas.add(initialWorkspace);
      initialCanvas.centerObject(initialWorkspace);
      initialCanvas.clipPath = initialWorkspace;

      setCanvas(initialCanvas);
      setContainer(initialContainer);

      const rect = new Rect({
        width: 100,
        height: 100,
        fill: "black",
      });
      initialCanvas.add(rect);
      initialCanvas.centerObject(rect);
    },
    []
  );

  return { init };
};
