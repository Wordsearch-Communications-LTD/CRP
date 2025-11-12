import RatioBox from "./RatioBox";

export default function ImageWithRatio({
  src,
  alt = "",
  ratio = "16:9",
  className = "",
  imgClassName = "",
}) {
  return (
    <RatioBox ratio={ratio} className={className}>
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover ${imgClassName}`}
      />
    </RatioBox>
  );
}
