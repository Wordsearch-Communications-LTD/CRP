export function VideoElement({ vimeoUrl, localIframe }) {
  if (vimeoUrl) {
    return (
      <iframe
        src={vimeoUrl}
        className="absolute inset-0 w-full h-full object-cover"
        allow="autoplay; fullscreen"
      />
    );
  }

  if (localIframe) {
    return (
      <iframe
        src={localIframe}
        className="absolute inset-0 w-full h-full object-cover"
        allow="autoplay; fullscreen"
      />
    );
  }

  return null;
}
