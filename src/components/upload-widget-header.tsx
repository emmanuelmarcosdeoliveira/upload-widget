import * as Collapsible from "@radix-ui/react-collapsible";
import { Minimize2 } from "lucide-react";
import Button from "./ui/button";
import { UploadWidgetTittle } from "./upload-widget-title";

export default function UploadWidgetHeader() {
  return (
    <div className="w-full p-4 py-2 bg-white/2 border-zinc-800 border-b flex itens-center justify-between">
      <UploadWidgetTittle />
      <Collapsible.Trigger asChild>
        <Button className="-mr-2" size="icon">
          <Minimize2 strokeWidth={1.5} className=" size-4" />
        </Button>
      </Collapsible.Trigger>
    </div>
  );
}
