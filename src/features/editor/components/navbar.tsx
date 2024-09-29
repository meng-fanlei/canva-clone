"use client";

import {
  ChevronDown,
  Download,
  File,
  MousePointerClick,
  Redo2,
  Undo2,
} from "lucide-react";
import { BsCloudCheck } from "react-icons/bs";
// import { File } from "react-icons/ci";

import { Button } from "@/components/ui/button";
import { Logo } from "./logo";

import { Hint } from "@/components/hint";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";

export const Navbar = () => {
  return (
    <nav className="w-full flex items-center p-4 h-[68px] gap-x-8 border-b lg:pl-[34px]">
      <Logo />
      <div className="w-full h-full flex items-center gap-x-1">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="sm" variant="ghost">
              File
              <ChevronDown className="size-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="min-w-60">
            <DropdownMenuItem
              onClick={() => {}}
              className="flex items-center gap-x-2"
            >
              <File className="size-8" />
              <div>
                <p>Open</p>
                <p className="text-xs text-muted-foreground">
                  Open a JSON file
                </p>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Separator orientation="vertical" className="mx-2" />
        <Hint label="Select" side="bottom" sideOffset={10}>
          <Button variant="ghost" size="icon" onClick={() => {}}>
            <MousePointerClick className="size-4" />
          </Button>
        </Hint>
        <Hint label="Undo" side="bottom" sideOffset={10}>
          <Button variant="ghost" size="icon" onClick={() => {}}>
            <Undo2 className="size-4" />
          </Button>
        </Hint>
        <Hint label="Redo" side="bottom" sideOffset={10}>
          <Button variant="ghost" size="icon" onClick={() => {}}>
            <Redo2 className="size-4" />
          </Button>
        </Hint>
        <Separator orientation="vertical" className="mx-2" />
        <div className="flex items-center gap-x-2">
          <BsCloudCheck className="size-5" />
          <div className="text-xs text-muted-foreground">Saved</div>
        </div>
        <div className="ml-auto flex items-center gap-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="sm" variant="ghost">
                Export
                <Download className="size-4 ml-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-60">
              <DropdownMenuItem className="flex items-center gap-x-2">
                <File className="size-8" onClick={() => {}} />
                <div>
                  <p>JSON</p>
                  <p className="text-xs text-muted-foreground">
                    Save for later editing
                  </p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-x-2">
                <File className="size-8" onClick={() => {}} />
                <div>
                  <p>PNG</p>
                  <p className="text-xs text-muted-foreground">
                    Best for sharing on the web
                  </p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-x-2">
                <File className="size-8" onClick={() => {}} />
                <div>
                  <p>JPG</p>
                  <p className="text-xs text-muted-foreground">
                    Best for printing
                  </p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-x-2">
                <File className="size-8" onClick={() => {}} />
                <div>
                  <p>SVG</p>
                  <p className="text-xs text-muted-foreground">
                    Best fot editing in vector software
                  </p>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};
