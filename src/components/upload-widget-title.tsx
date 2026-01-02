import { UploadCloud } from "lucide-react";

export function UploadWidgetTittle() {
  const isThereAnyPendingUpload = true;
  const globalUploadPercentage = 66;
  return (
    <div className="flex items-center gap-1.5 text-sm font-medium">
      <UploadCloud strokeWidth={1.5} className="size-4 text-zinc-400" />
      {isThereAnyPendingUpload ? (
        <span className="flex items-baseline gap-1 ">
          Uploading
          <span className="tex-xs text-zinc-400 tabular-nums">
            {globalUploadPercentage}%
          </span>
        </span>
      ) : (
        <span>Upload Files</span>
      )}
    </div>
  );
}
