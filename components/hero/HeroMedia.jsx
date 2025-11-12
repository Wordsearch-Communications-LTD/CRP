// "use client";

// import RatioBox from "@/components/global/RatioBox";

// function getVimeoEmbedUrl(id) {
//   if (!id) return null;
//   return `https://player.vimeo.com/video/${id}?autoplay=1&loop=1&muted=1&background=1`;
// }

// export default function HeroMedia({
//   vimeoId = null,
//   imageUrl = null,
//   text = "",
// }) {
//   return (
//     <section className="w-full relative overflow-hidden">

//       {/* ✅ MOBILE — 4:5 ratio (0–767px) */}
//       <div className="block md:hidden">
//         <RatioBox ratio="4:5">
//           {vimeoId ? (
//             <iframe
//               src={getVimeoEmbedUrl(vimeoId)}
//               className="absolute inset-0 w-full h-full object-cover"
//               allow="autoplay; fullscreen"
//             />
//           ) : (
//             <img src={imageUrl} className="absolute inset-0 w-full h-full object-cover" />
//           )}
//         </RatioBox>
//       </div>

//       {/* ✅ TABLET — 3:2 ratio (768–1023px) */}
//       <div className="hidden md:block lg:hidden">
//         <RatioBox ratio="3:2">
//           {vimeoId ? (
//             <iframe
//               src={getVimeoEmbedUrl(vimeoId)}
//               className="absolute inset-0 w-full h-full object-cover"
//               allow="autoplay; fullscreen"
//             />
//           ) : (
//             <img src={imageUrl} className="absolute inset-0 w-full h-full object-cover" />
//           )}
//         </RatioBox>
//       </div>

//       {/* ✅ DESKTOP — 16:9 ratio (1024px+) */}
//       <div className="hidden lg:block">
//         <RatioBox ratio="16:9">
//           {vimeoId ? (
//             <iframe
//               src={getVimeoEmbedUrl(vimeoId)}
//               className="absolute inset-0 w-full h-full object-cover"
//               allow="autoplay; fullscreen"
//             />
//           ) : (
//             <img src={imageUrl} className="absolute inset-0 w-full h-full object-cover" />
//           )}
//         </RatioBox>
//       </div>

//       {/* TEXT OVERLAY */}
//       <div className="absolute inset-0 flex items-end justify-center pb-[2rem] pointer-events-none">
//         <p className="text-white text-center s-2 lighter lh-big tracking-wide max-w-[80%]">
//           {text}
//         </p>
//       </div>
//     </section>
//   );
// }
// "use client";

// import RatioBox from "@/components/global/RatioBox";

// function getVimeoEmbedUrl(id) {
//   if (!id) return null;
//   return `https://player.vimeo.com/video/${id}?autoplay=1&loop=1&muted=1&background=1`;
// }

// export default function HeroMedia({
//   vimeoId = null,
//   imageUrl = null,
//   text = "",
// }) {
//   return (
//     <section className="w-full relative overflow-hidden">

//       {/* ✅ MOBILE (0–639px) */}
//       <div className="block sm:hidden">
//         <RatioBox ratio="4:5">
//           {vimeoId ? (
//             <iframe
//               src={getVimeoEmbedUrl(vimeoId)}
//               // src={'/assets/video-hero.mp4'}
//               className="w-full h-full absolute inset-0 object-cover"
//               allow="autoplay; fullscreen"
//             />
//           ) : (
//             <img src={imageUrl} className="w-full h-full absolute inset-0 object-cover" />
//           )}
//         </RatioBox>
//       </div>

//       {/* ✅ TABLET (640–1023px) */}
//       <div className="hidden sm:block md:hidden">
//         <RatioBox ratio="3:2">
//           {vimeoId ? (
//             <iframe
//               src={getVimeoEmbedUrl(vimeoId)}
//               className="w-full h-full absolute inset-0 object-cover"
//               allow="autoplay; fullscreen"
//             />
//           ) : (
//             <img src={imageUrl} className="w-full h-full absolute inset-0 object-cover" />
//           )}
//         </RatioBox>
//       </div>

//       {/* ✅ DESKTOP (1024px+) */}
//       <div className="hidden md:block">
//         <RatioBox ratio="16:9">
//           {vimeoId ? (
//             <iframe
//               src={getVimeoEmbedUrl(vimeoId)}
//               className="w-full h-full absolute inset-0 object-cover"
//               allow="autoplay; fullscreen"
//             />
//           ) : (
//             <img src={imageUrl} className="w-full h-full absolute inset-0 object-cover" />
//           )}
//         </RatioBox>
//       </div>

//       {/* ✅ TEXT */}
//       <div className="absolute inset-0 flex items-end justify-center pb-[2rem] pointer-events-none">
//         <p className="text-white text-center s-2 lighter lh-big tracking-wide max-w-[80%]">
//           {text}
//         </p>
//       </div>
//     </section>
//   );
// }
"use client";

import RatioBox from "@/components/global/RatioBox";
import VimeoCover from "@/components/global/VimeoCover";

function getVimeoEmbedUrl(id) {
  return id
    ? `https://player.vimeo.com/video/${id}?autoplay=1&loop=1&muted=1&background=1`
    : null;
}

export default function HeroMedia({ vimeoId = null, imageUrl = null, text = "" }) {
  const vimeoUrl = getVimeoEmbedUrl(vimeoId);

  return (
    <section className="relative w-full overflow-hidden">

      {/* ✅ MOBILE — 4:5 */}
      <div className="block sm:hidden relative">
        <RatioBox ratio="4:5">
          {vimeoId ? (
            <VimeoCover url={vimeoUrl} />
          ) : (
            <img src={imageUrl} className="absolute inset-0 h-full w-full object-cover" />
          )}
        </RatioBox>
      </div>

      {/* ✅ TABLET — 3:2 */}
      <div className="hidden sm:block md:hidden relative">
        <RatioBox ratio="3:2">
          {vimeoId ? (
            <VimeoCover url={vimeoUrl} />
          ) : (
            <img src={imageUrl} className="absolute inset-0 h-full w-full object-cover" />
          )}
        </RatioBox>
      </div>

      {/* ✅ DESKTOP — 16:9 */}
      <div className="hidden md:block relative">
        <RatioBox ratio="16:9">
          {vimeoId ? (
            <VimeoCover url={vimeoUrl} />
          ) : (
            <img src={imageUrl} className="absolute inset-0 h-full w-full object-cover" />
          )}
        </RatioBox>
      </div>

      {/* ✅ TEXT OVERLAY (same for all breakpoints) */}
      <div className="absolute inset-0 flex items-end justify-center pb-[2rem] pointer-events-none">
        <p className="text-white text-center s-2 lighter lh-big tracking-wide max-w-[80%] px-4">
          {text}
        </p>
      </div>
    </section>
  );
}
