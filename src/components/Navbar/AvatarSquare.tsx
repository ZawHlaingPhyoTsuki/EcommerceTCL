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
    <>
      <Avatar className="rounded-lg h-[35px] w-[35px]">
        {src ? <AvatarImage src={src} alt={alt} /> : null}
        <AvatarFallback>{fallback}</AvatarFallback>
      </Avatar>
      {title && (
        <span className="hidden lg:block text-primary text-sm">{title}</span>
      )}
    </>
  );
}
