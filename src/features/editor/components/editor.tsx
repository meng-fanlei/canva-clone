"use client";

import { Canvas } from "fabric";
import { useEffect, useRef } from "react";

import { useEditor } from "../hooks/use-editor";
import { Navbar } from "./navbar";
import { Sidebar } from "./sidebar";

export const Editor = () => {
  const { init } = useEditor();

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = new Canvas(canvasRef.current!, {
      controlsAboveOverlay: true,
      preserveObjectStacking: true,
    });

    init({
      initialCanvas: canvas,
      initialContainer: containerRef.current!,
    });

    return () => {
      canvas.dispose();
    };
  }, [init]);

  return (
    <div className="h-full flex flex-col">
      <Navbar />
      <div className="absolute h-[calc(100%-68px)] w-full top-[68px] flex">
        <Sidebar />
        <div className="flex-1 h-full bg-muted" ref={containerRef}>
          <canvas ref={canvasRef} />
        </div>
      </div>
    </div>
  );
};
