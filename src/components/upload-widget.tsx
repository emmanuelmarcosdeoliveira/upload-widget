import UploadWidgetHeader from "./upload-widget-header";
import UploadWidgetDropzone from "./upload-widget-dropzone";
import UploadWidgetUploadList from "./upload-widget-upload-list";

export default function UploadWidget() {
  return (
    <div className="bg-zinc-900 w-full overflow-hidden shadow-shape max-w-[360px] rounded-xl">
      <UploadWidgetHeader />
      <div className="flex flex-col gap-4 py-3">
        <UploadWidgetDropzone />
        <div className="h-0.5 w-full bg-zinc-800 border-t border-black/50" />
        <UploadWidgetUploadList />
      </div>
    </div>
  );
}
