import * as Collapsible from "@radix-ui/react-collapsible";
import { Maximize2 } from "lucide-react";
import { UploadWidgetTittle } from "./upload-widget-title";

export function UploadWidgetMinimizeButton() {
  return (
    <Collapsible.Trigger className="w-full rounded-lg group flex items-center justify-between bg-white/5 py-3 px-5 gap-5">
      <UploadWidgetTittle />
      <Maximize2
        strokeWidth={1.5}
        className=" size-4 group-hover:text-zinc-100 text-zinc-400"
      />
    </Collapsible.Trigger>
  );
}
