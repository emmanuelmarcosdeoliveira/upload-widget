import * as Collapsible from "@radix-ui/react-collapsible";
import { motion, useCycle } from "motion/react";
import UploadWidgetDropzone from "./upload-widget-dropzone";
import UploadWidgetHeader from "./upload-widget-header";
import { UploadWidgetMinimizeButton } from "./upload-widget-minimize-button";
import UploadWidgetUploadList from "./upload-widget-upload-list";

export default function UploadWidget() {
  const [isWidgetOpen, toggleWidgetOpen] = useCycle(false, true);
  return (
    <Collapsible.Root onOpenChange={() => toggleWidgetOpen()}>
      {!isWidgetOpen && <UploadWidgetMinimizeButton />}

      <motion.div
        animate={isWidgetOpen ? "open" : "closed"}
        variants={{
          closed: {
            width: "max-content",
            height: 44,
            transition: {
              type: "inertia",
            },
          },
          open: {
            width: 360,
            height: "auto",
            transition: { duration: 0.1 },
          },
        }}
        className="bg-zinc-900  overflow-hidden shadow-shape max-w-90 rounded-xl"
      >
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
