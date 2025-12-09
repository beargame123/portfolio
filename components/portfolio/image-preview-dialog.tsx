import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface ImagePreviewDialogProps {
  imageUrl: string | string[]
  altText: string
  children: React.ReactNode
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
        {Array.isArray(imageUrl) ? (
          <Carousel className="w-full">
            <CarouselContent>
              {imageUrl.map((url, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-[80vh]">
                    <Image
                      src={url}
                      alt={`${altText} - ${index + 1}`}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        ) : (
          <div className="relative h-[80vh]">
            <Image
              src={imageUrl}
              alt={altText}
              layout="fill"
              objectFit="contain"
            />
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
