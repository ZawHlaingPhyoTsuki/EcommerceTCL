import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface AvatarSquareProps {
  src?: string | null;
  alt: string;
  title?: string;
  fallback: string;
}

export default function AvatarSquare({
  src,
  alt,
  title,
  fallback,
}: AvatarSquareProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="relative flex-shrink-0">
        <Avatar className="h-[35px] w-[35px] rounded-lg border-2 dark:border-primary overflow-hidden">
          {src ? (
            <AvatarImage
              src={src}
              alt={alt}
              className="h-full w-full object-cover"
            />
          ) : null}
          <AvatarFallback className="bg-background text-primary text-xs font-medium flex items-center justify-center h-full w-full">
            {fallback}
          </AvatarFallback>
        </Avatar>
      </div>
      {title && (
        <span className="hidden lg:block text-primary text-sm">{title}</span>
      )}
    </div>
  );
}
