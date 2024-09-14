import { Canvas, iMatrix, Point, util } from "fabric";
import { useCallback, useEffect } from "react";

interface UseAutoResizeProps {
  canvas: Canvas | null;
  container: HTMLDivElement | null;
}

export const useAutoResize = ({ canvas, container }: UseAutoResizeProps) => {
  const autoZoom = useCallback(() => {
    if (!canvas || !container) {
      return;
    }

    const width = container.offsetWidth;
    const height = container.offsetHeight;

    canvas.setDimensions({ width, height });

    const center = canvas.getCenterPoint();

    const zoomRation = 0.85;

    const localWorkspace = canvas
      .getObjects()
      .find((objec) => objec.name === "clip");

    if (!localWorkspace) {
      return;
    }

    const scale = util.findScaleToFit(localWorkspace!, { width, height });

    const zoom = zoomRation * scale;

    canvas.setViewportTransform(iMatrix);
    canvas.zoomToPoint(new Point(center.x, center.y), zoom);

    const workSpaceCenter = localWorkspace.getCenterPoint();
    const viewportTransform = canvas.viewportTransform;

    if (
      canvas.width === undefined ||
      canvas.height === undefined ||
      !viewportTransform
    ) {
      return;
    }

    viewportTransform[4] =
      canvas.width / 2 - workSpaceCenter.x * viewportTransform[0];
    viewportTransform[5] =
      canvas.height / 2 - workSpaceCenter.y * viewportTransform[3];

    canvas.setViewportTransform(viewportTransform);

    localWorkspace.clone().then((cloned) => {
      canvas.clipPath = cloned;
      canvas.renderAll();
    });
  }, [canvas, container]);

  useEffect(() => {
    let resizeObserver: ResizeObserver | null = null;

    if (canvas && container) {
      resizeObserver = new ResizeObserver(() => {
        autoZoom();
      });
      resizeObserver.observe(container);
    }

    return () => {
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [canvas, container, autoZoom]);

  return { autoZoom };
};
