import RatioBox from "./RatioBox";

export default function ImageWithRatio({
  src,
  alt = "",
  ratio = "16:9",
  className = "",
  imgClassName = "",
}) {
  return (
    <RatioBox ratio={ratio} className={`zoom-parent ${className}`.trim()}>
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover zoom-child ${imgClassName}`.trim()}
      />
    </RatioBox>
  );
}
