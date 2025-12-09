import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

interface ImagePreviewDialogProps {
  imageUrl: string;
  altText: string;
  children: React.ReactNode;
}

export function ImagePreviewDialog({
  imageUrl,
  altText,
  children,
}: ImagePreviewDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>{altText}</DialogTitle>
        </DialogHeader>
        <div className="relative h-[80vh]">
          <Image
            src={imageUrl}
            alt={altText}
            layout="fill"
            objectFit="contain"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
