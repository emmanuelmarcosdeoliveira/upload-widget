import * as Progress from "@radix-ui/react-progress";
import { Download, ImageUp, Link2, RefreshCcw, X } from "lucide-react";
import { motion } from "motion/react";
import { useUploads, type Upload } from "../store/uploads";
import { downloadUrl } from "../utils/download-url";
import formatFileSize from "../utils/format-bytes";
import Button from "./ui/button";

interface UploadWidgetUploadItemProps {
  uploadId: string;
  upload: Upload;
}

export function UploadWidgetUploadItem({
  uploadId,
  upload,
}: UploadWidgetUploadItemProps) {
  const cancelUpload = useUploads((store) => store.cancelUpload);
  const retryUpload = useUploads((store) => store.retryUpload);
  const progress = Math.min(
    upload.compressedSizeInBytes
      ? Math.round(
          (upload.uploadSizeInBytes * 100) / upload.compressedSizeInBytes
        )
      : 0,
    100
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="p-3 rounded-lg flex flex-col gap-3 shadow-space bg-white/5 relative overflow-hidden"
    >
      <div className="flex flex-col gap-1">
        <span className="flex text-xs font-medium items-center gap-1">
          <ImageUp strokeWidth={1.5} className="size-3   text-zinc-300" />
          <span className="max-w-44 truncate">{upload.name}</span>
        </span>
        <span className=" flex items-center text-[10px] text-zinc-400 gap-1.5">
          <span className="line-through">
            {formatFileSize(upload.originalSizeInBytes)}
          </span>
          <div className="size-1 rounded-full bg-zinc-400" />
          <span>{formatFileSize(upload.compressedSizeInBytes ?? 0)}</span>
          {upload.compressedSizeInBytes && (
            <span className="text-green-400 ml-1">
              -
              {Math.round(
                ((upload.originalSizeInBytes - upload.compressedSizeInBytes) *
                  100) /
                  upload.originalSizeInBytes
              )}
              %
            </span>
          )}
          <div className="size-1 rounded-full bg-zinc-400" />
          {upload.status === "success" && <span>100%</span>}
          {upload.status === "progress" && <span>{progress}%</span>}
          {upload.status === "error" && (
            <span className="text-red-400">Error</span>
          )}
          {upload.status === "canceled" && (
            <span className="text-amber-400">Canceled</span>
          )}
        </span>
      </div>
      <Progress.Root
        value={progress}
        data-status={upload.status}
        className="bg-zinc-800 group rounded-full h-1 overflow-hidden group"
      >
        <Progress.Indicator
          className="bg-indigo-500 group-data-[status=error]:bg-red-400 
          group-data-[status=canceled]:bg-amber-400
          group-data-[status=success]:bg-green-400 transition-all
         h-1"
          style={{
            width: upload.status === "progress" ? `${progress}%` : "100%",
          }}
        />
      </Progress.Root>

      <div className="absolute top-2 right-2 flex items-center gap-1">
        <Button
          aria-disabled={!upload.remoteUrl}
          size="icon-sm"
          onClick={() => {
            if (upload.remoteUrl) {
              downloadUrl(upload.remoteUrl);
            }
          }}
        >
          <Download className="size-4" strokeWidth={1.5} />
          <span className="sr-only">Download compress image</span>
        </Button>
        <Button
          disabled={!upload.remoteUrl}
          onClick={() =>
            upload.remoteUrl && navigator.clipboard.writeText(upload.remoteUrl)
          }
          size="icon-sm"
        >
          <Link2 className="size-4" strokeWidth={1.5} />
          <span className="sr-only">Copy remote URL</span>
        </Button>

        <Button
          onClick={() => retryUpload(uploadId)}
          disabled={!["canceled", "error"].includes(upload.status)}
          size="icon-sm"
        >
          <RefreshCcw className="size-4" strokeWidth={1.5} />
          <span className="sr-only">Retry upload</span>
        </Button>
        <Button
          disabled={upload.status !== "progress"}
          onClick={() => cancelUpload(uploadId)}
          size="icon-sm"
        >
          <X className="size-4" strokeWidth={1.5} />
          <span className="sr-only">Cancel upload</span>
        </Button>
      </div>
    </motion.div>
  );
}
