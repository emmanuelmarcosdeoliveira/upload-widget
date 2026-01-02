import * as Collapsible from "@radix-ui/react-collapsible";
import { useState } from "react";
import UploadWidgetDropzone from "./upload-widget-dropzone";
import UploadWidgetHeader from "./upload-widget-header";
import { UploadWidgetMinimizeButton } from "./upload-widget-minimize-button";
import UploadWidgetUploadList from "./upload-widget-upload-list";

export default function UploadWidget() {
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);
  return (
    <Collapsible.Root onOpenChange={setIsWidgetOpen}>
      {!isWidgetOpen && <UploadWidgetMinimizeButton />}

      <div className="bg-zinc-900  overflow-hidden shadow-shape w-90 rounded-xl">
        <Collapsible.Content>
          <UploadWidgetHeader />
          <div className="flex flex-col gap-4 py-3">
            <UploadWidgetDropzone />
            <div className="h-0.5 w-full bg-zinc-800 border-t border-black/50" />
            <UploadWidgetUploadList />
          </div>
        </Collapsible.Content>
      </div>
    </Collapsible.Root>
  );
}
