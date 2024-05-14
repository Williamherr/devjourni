import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function UserAvatar({
  src,
  alt,
  fallBack,
}: {
  src: string;
  alt: string;
  fallBack: string;
}) {
  return (
    <Avatar>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>{fallBack}</AvatarFallback>
    </Avatar>
  );
}
