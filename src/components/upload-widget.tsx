import * as Collapsible from "@radix-ui/react-collapsible";
import { motion, useCycle } from "motion/react";
import UploadWidgetDropzone from "./upload-widget-dropzone";
import UploadWidgetHeader from "./upload-widget-header";
import { UploadWidgetMinimizeButton } from "./upload-widget-minimize-button";
import UploadWidgetUploadList from "./upload-widget-upload-list";

export default function UploadWidget() {
  const [isWidgetOpen, toggleWidgetOpen] = useCycle(false, true);
  return (
    <Collapsible.Root asChild onOpenChange={() => toggleWidgetOpen()}>
      <motion.div
        data-progress={!isWidgetOpen}
        animate={isWidgetOpen ? "open" : "closed"}
        variants={{
          closed: { width: "max-content", height: 44 },
          open: { width: 360, height: "auto" },
        }}
        className="
  bg-zinc-900 overflow-hidden
  data-[state=open]:shadow-shape
  data-[state=closed]:rounded-3xl!
  data-[state=open]:rounded-xl
  data-[state=closed]:data-[progress=true]:animated-border
  data-[state=closed]:data-[progress=true]:animated-border-spin
  max-w-90
"
      >
        {!isWidgetOpen && <UploadWidgetMinimizeButton />}

        <Collapsible.Content>
          <UploadWidgetHeader />
          <div className="flex flex-col gap-4 py-3">
            <UploadWidgetDropzone />
            <div className="h-0.5 w-full bg-zinc-800 border-t border-black/50" />
            <UploadWidgetUploadList />
          </div>
        </Collapsible.Content>
      </motion.div>
    </Collapsible.Root>
  );
}
