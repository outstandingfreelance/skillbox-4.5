export enum IconName {
  like = "like",
  dislike = "dislike",
  comment = "comment",
  share = "share",
  vite = "vite",
}

interface IIconProps {
  alt: string;
  size?: number;
  name: IconName;
}

export function Icon({ alt, size, name }: IIconProps) {
  return (
    <img style={{ width: size, height: size }} src={`public/icons/${name}.svg`} alt={alt} />
  );
}
