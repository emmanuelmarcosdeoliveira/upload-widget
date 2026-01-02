import { UploadWidgetUploadItem } from "./upload-widget-upload-item";

export default function UploadWidgetUploadList() {
  const isUploadingListEmpty = false;

  return (
    <div className="px-3 flex flex-col gap-3 h-48">
      <span className="text-xs font-medium">
        Upload Files <span className="text-zinc-400">(3)</span>
      </span>
      {isUploadingListEmpty ? (
        <span className="text-xs text-zinc-400">No uploads added</span>
      ) : (
        <div className="flex flex-col gap-2 ">
          <UploadWidgetUploadItem />
          <UploadWidgetUploadItem />
          <UploadWidgetUploadItem />
        </div>
      )}
    </div>
  );
}
