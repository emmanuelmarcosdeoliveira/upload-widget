import { UploadCloud } from "lucide-react";
import { usePendingUploads } from "../store/uploads";

export function UploadWidgetTittle() {
  const { globalPercentage, isThereAnyPendingUploads } = usePendingUploads();
  return (
    <div className="flex items-center gap-1.5 text-sm font-medium">
      <UploadCloud strokeWidth={1.5} className="size-4 text-zinc-400" />
      {isThereAnyPendingUploads ? (
        <span className="flex items-baseline gap-1 ">
          Uploading
          <span className="tex-xs text-zinc-400 tabular-nums">
            {globalPercentage}%
          </span>
        </span>
      ) : (
        <span>Upload Files</span>
      )}
    </div>
  );
}
