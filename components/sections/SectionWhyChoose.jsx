"use client";

import RatioBox from "@/components/global/RatioBox";
import { VideoElement } from "./VideoElement";

function getVimeoEmbedUrl(id) {
  return id
    ? `https://player.vimeo.com/video/${id}?autoplay=1&loop=1&muted=1&background=1`
    : null;
}

function getLocalVideoIframe(src) {
  return `/video-player.html?src=${encodeURIComponent(src)}`;
}

export default function SectionWhyChoose({
  vimeoId = null,
  localSrc = null,
}) {
  const vimeoUrl = getVimeoEmbedUrl(vimeoId);
  const localIframe = !vimeoId && localSrc ? getLocalVideoIframe(localSrc) : null;

  return (
    <section className="relative w-full overflow-hidden">
      
      {/* ✅ MOBILE 1:1 */}
      <div className="block sm:hidden relative">
        <RatioBox ratio="1:1">
          <VideoElement vimeoUrl={vimeoUrl} localIframe={localIframe} />
        </RatioBox>

        <div className="absolute top-[2.5rem] left-1/2 -translate-x-1/2 pointer-events-none">
          <h2 className="text-center s-2 medium lh-normal wide text-[#7A7A7A]">
            Why choose Cambridge Research Park?
          </h2>
        </div>
      </div>

      {/* ✅ TABLET & DESKTOP 5:2 */}
      <div className="hidden sm:block relative">
        <RatioBox ratio="5:2">
          <VideoElement vimeoUrl={vimeoUrl} localIframe={localIframe} />
        </RatioBox>

        <div className="absolute w-[70%] top-[64px] left-1/2 -translate-x-1/2 pointer-events-none">
          <h2 className="text-center s-2 medium lh-normal wide text-[#7A7A7A]">
            Why choose Cambridge Research Park?
          </h2>
        </div>
      </div>

    </section>
  );
}
