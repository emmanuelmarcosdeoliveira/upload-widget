interface CompressImageParams {
  file: File;
  quality?: number;
  maxWidth?: number;
  maxHeight?: number;
}

function convertToWebp(filename: string): string {
  const lastDotIndex = filename.lastIndexOf(".");
  if (lastDotIndex === -1) {
    return `${filename}.webp`;
  }
  return `${filename.substring(0, lastDotIndex)}.webp`;
}

export function compressImage({
  file,
  maxWidth = Number.POSITIVE_INFINITY,
  maxHeight = Number.POSITIVE_INFINITY,
  quality = 1,
}: CompressImageParams) {
  const allowedTypes = [
    "image/jpeg",
    "image/png",
    "image/jpg",
    "image/webp",
    "image/avif",
  ];

  if (!allowedTypes.includes(file.type)) {
    throw new Error("Unsupported image type");
  }

  return new Promise<File>((resolved, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const compresssed = new Image();
      compresssed.onload = () => {
        const canvas = document.createElement("canvas");
        let width = compresssed.width;
        let height = compresssed.width;

        if (width > height) {
          if (width > maxWidth) {
            height *= maxWidth / width;
            width = maxWidth;
          } else {
            if (height > maxHeight) {
              width *= maxHeight / height;
              height = maxHeight;
            }
          }
        }
        canvas.width = width;
        canvas.height = height;
        const context = canvas.getContext("2d");
        if (!context) {
          reject(new Error("Failed to get canvas context"));
          return;
        }
        context.drawImage(compresssed, 0, 0, width, height);
        canvas.toBlob(
          (blob) => {
            if (!blob) {
              reject(new Error("Image compression failed"));
              return;
            }
            const compressedFile = new File([blob], convertToWebp(file.name), {
              type: "image/webp",
              lastModified: Date.now(),
            });
            resolved(compressedFile);
          },
          "image/webp",
          quality
        );
      };
      compresssed.src = event.target?.result as string;
    };
    reader.readAsDataURL(file);
  });
}
