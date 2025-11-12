export default function VimeoCover({ url }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <iframe
        src={url}
        className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 object-cover"
        allow="autoplay; fullscreen"
      />
    </div>
  );
}
