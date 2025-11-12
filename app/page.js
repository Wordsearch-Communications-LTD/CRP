 
import SectionWhyChoose from "@/components/sections/SectionWhyChoose";
import HeroMedia from "../components/hero/HeroMedia";
import SectionNatureHero from "@/components/sections/SectionNatureHero";
import MultiContentHero from "@/components/sections/MultiContentHero";
import StandardTextBlock from "@/components/sections/StandardTextBlock";
import TwoColumnContent from "@/components/sections/TwoColumnContent";
import FlexStatementBanner from "@/components/sections/FlexStatementBanner";
import StatementHero from "@/components/sections/StatementHero";
import BannerInfographic4Stack from "@/components/sections/BannerInfographic4Stack";
import MultiCards4Stack from "@/components/sections/MultiCards4Stack";
import EventsSlider from "@/components/sections/EventsSlider";
import SliderEvents from "@/components/sections/EventsSlider";
import BannerInfostats3Stack from "@/components/sections/BannerInfostats3Stack";
import CompCtaBanner from "@/components/sections/CompCtaBanner";
import AvailabilityCards from "@/components/sections/AvailabilityCards";
import StaticImageStack from "@/components/sections/StaticImageStack";
import CompanyTicker from "@/components/sections/CompanyTicker";
import AgentContacts from "@/components/sections/AgentContacts";

export default function Home() {
  const sample = [
  {
    id: "b1000",
    image: { src: "/assets/asset-1.jpg", alt: "Building 1000 frontage" },
    title: "Building 1000",
    rows: [
      { badge: { label: "LAB", tone: "blue" }, value: "4,663 sq ft available" },
      { badge: { label: "OFFICE", tone: "red" }, value: "5,405 sq ft available" },
    ],
    href: "/buildings/1000",
  },
  {
    id: "b2000",
    image: { src: "/assets/asset-1.jpg", alt: "Building 2000 lobby" },
    title: "Building 2000",
    rows: [{ badge: { label: "LAB", tone: "blue" }, value: "4,663 sq ft available" }],
    href: "/buildings/2000",
  },
];
  const items = [
  {
    icon: "/assets/icon.png",
    title: "Carbon-conscious construction",
    body:
      "Targeting embodied carbon levels to benchmark standards that prevent emissions.",
  },
  {
    icon: "/assets/icon.png",
    title: "Biodiversity boost",
    body:
      "Enhanced landscaping, native planting and habitat creation is delivering a 10.8% Biodiversity Net Gain.",
  },
  {
    icon: "/assets/icon.png",
    title: "Sustainable transport",
    body:
      "EV-ready parking with infrastructure to scale to 100%, as well as cycle storage and end-of-trip amenities.",
  },
  {
    icon: "/assets/icon.png",
    title: "Energy and water efficiency",
    body:
      "Well-insulated buildings feature solar panels, rooflights, LED lighting, electric heating & cooling.",
  },
];
 const mock = [
    {
      image: "/img/meadows.png",
      title: "Wild meadows",
      text: "Native grasses and flowers attract pollinators and insects..."
    },
    {
      image: "/img/meadows.png",
      title: "Wild meadows",
      text: "Native grasses and flowers attract pollinators..."
    },
    {
      image: "/img/meadows.png",
      title: "Wild meadows",
      text: "Native grasses and flowers attract pollinators..."
    },
    {
      image: "/img/meadows.png",
      title: "A tucked-away bird hide",
      text: "I have one line extra. Hahahahaha"
    }
  ];
  const sampleStats = [
  {
    id: "s1",
    stat: "1,500+",
    label: "employees",
  },
  {
    id: "s2",
    stat: "100",
    label: "acres of nature",
  },
  {
    id: "s3",
    stat: "12",
    label: "Pioneering companies of campus",
  },
];
  const logos = [
    { src: "/assets/logo.png", alt: "STEMCELL" },
    { src: "/assets/logo-1.png", alt: "SMC Ltd." },
        { src: "/assets/logo.png", alt: "STEMCELL" },
    { src: "/assets/logo-1.png", alt: "SMC Ltd." },
        { src: "/assets/logo.png", alt: "STEMCELL" },
    { src: "/assets/logo-1.png", alt: "SMC Ltd." },
        { src: "/assets/logo.png", alt: "STEMCELL" },
    { src: "/assets/logo-1.png", alt: "SMC Ltd." },
   
  ];

  return (
    <main>
      <HeroMedia
  vimeoId="1129475346"
  text="420,000 sq ft of office, R&D and lab space set within 112 acres of nature"
/>
<SectionWhyChoose
 localSrc ="/assets/video-hero.mp4"
/>
<SectionNatureHero
  label="NATURE"
  title="Immersed in nature, experience"
  subtitle="a unique working environment"
  vimeoId="11294753462"            // or localVideo="/videos/nature.mp4" or imageUrl="/img/goose.jpg"
  backgroundGradient="linear-gradient(180deg,#EBCED9 0%, #CDBAD0 100%)" // optional override
/>
<MultiContentHero
  vimeoId="1129475346"

  bg="grad-blue-light"         // ✅ controlled from your utilities

  label="Spaces to bring"
  title="Spaces to bring"
  subtitle="your ideas to life"

  subtitleGradient="blue"      // ✅ uses .text-gradient-blue

  desc="Find the workplace for your people and plans at Cambridge Research Park. Options range from high-specification labs to mid-tech facilities and light-industrial units. Buildings include ancillary offices, or move straight into a fully equipped business suite. 
Explore our campus map to view current availability and future developments"

  cta1={{ label: "VIEW VIRTUAL TOUR", href: "/tour" }}
  cta2={{ label: "VIEW FLYTHROUGH", href: "/fly" }}
/>
<StandardTextBlock
  bgClassName="bg-grad-orange-lite-linear"
  headingLine1="Join in, and feel"
  headingLine2="the difference"
  headingGradient=""
  body={`Find the workplace for your people and plans at Cambridge Research Park. 
Options range from high-specification labs to mid-tech facilities and light industrial units.`}
  cta1={{ label: "VIEW VIRTUAL TOUR", href: "/tour" }}
  cta2={{ label: "VIEW FLYTHROUGH", href: "/fly" }}
/>
 <TwoColumnContent
        bgClassName="bg-grad-orange-lite-linear"   // background from Figma
        headingLine1="Join in, and feel"
        headingLine2="the difference"
        body={`Share your workplace with resident geese, song thrushes, butterflies and our own working beehives.
Set within 112 acres – including a 38-acre nature reserve – our campus blends specialist workspaces with a uniquely green landscape that sparks creativity, restores focus and supports the wellbeing of your talented people.`}

        cta1={{ label: "VIEW VIRTUAL TOUR", href: "/tour" }}
        cta2={{ label: "VIEW FLYTHROUGH", href: "/fly" }}

        rightType="none"   // ✅ This section has NO right content (Figma example)
      />
      <TwoColumnContent
  bgClassName="bg-grad-orange-lite-linear"
  headingLine1="Join in, and feel"
  headingLine2="the difference"
  body="Share your workplace with resident geese, song thrushes, butterflies and our own working beehives.  Set within 112 acres – including a 38-acre nature reserve – our campus blends specialist workspaces with a uniquely green landscape that sparks creativity, restores focus and supports the wellbeing of your talented people."
  cta1={{ label: "VIEW VIRTUAL TOUR", href: "/tour" }}
  cta2={{ label: "VIEW FLYTHROUGH", href: "/fly" }}

  rightType="image"
  rightImage="/assets/asset-1.jpg"
/>
<TwoColumnContent
  bgClassName="bg-grad-orange-lite-linear"
  headingLine1="Join in, and feel"
  headingLine2="the difference"
  body="..."
  cta1={{ label: "VIEW VIRTUAL TOUR", href: "/tour" }}
  cta2={{ label: "VIEW FLYTHROUGH", href: "/fly" }}

  rightType="video"
  rightVideo="/assets/video-hero.mp4"
/>
<TwoColumnContent
  bgClassName="bg-grad-orange-lite-linear"
  headingLine1="Join in, and feel"
  headingLine2="the difference"
  body="..."
  rightType="text"
  rightText="Through charity partnerships and volunteering opportunities, campus occupiers can contribute to local causes and be part of wider social change."
/>
<FlexStatementBanner
  bg="bg-grad-pink-lite"
  textColor1="text-grad-red"
  textColor2="text-grad-red"
  line1="Fresh air. Green spaces."
     line2="Better ideas"
/>
<FlexStatementBanner
  bg="bg-grad-blue-light"
  textColor1="text-grad-purple"
  textColor2="text-grad-purple"
  line1="Fresh air. Green spaces."
    line2="Better ideas"/>
<FlexStatementBanner
  bg="bg-[#5BFFD6]"
  textColor1="text-[#263479]"
  textColor2="text-[#263479]"
    line2="Better ideas"
/>

<StatementHero
  bg="bg-grad-blue-light"
  textColor1="text-grad-red"
  textColor2="text-grad-blue"
  line1="90,000 sq m of specialist R&D workspace"
  
/>
<StatementHero
  backgroundImage="/assets/asset-1.jpg"
  textColor1="text-white"
  textColor2="text-white"
/>
<StatementHero
  vimeoId="1129475346"
    line1="90,000 sq m of specialist R&D workspace"
  textColor1="text-grad-red"
  textColor2="text-grad-red"
  cta={{ label: "FIND YOUR CAMPUS SPACE", href: "/campus" }}
/>
 <BannerInfographic4Stack
        items={items}
        sectionBgClass="bg-grad-dark-teal"   // the strip gradient behind cards
        paddingClass="section-padding"
        maxWidthClass="container-max"
      />
 <MultiCards4Stack
  bg="bg-grad-blue-2"
  text="white"
  items={[
    {
      mediaType: "image",
      image: "/assets/asset-1.jpg",
      title: "Wild meadows",
      text: "Native grasses attract pollinators...",
    }, {
      mediaType: "image",
      image: "/assets/asset-1.jpg",
      title: "Wild meadows",
      text: "Native grasses attract pollinators...",
    }, {
      mediaType: "image",
      image: "/assets/asset-1.jpg",
      title: "Wild meadows",
      text: "Native grasses attract pollinators...",
    }, {
      mediaType: "image",
      image: "/assets/asset-1.jpg",
      title: "Wild meadows",
      text: "Native grasses attract pollinators...",
    },
    
  ]}
/>
<SliderEvents
  heading="What’s on"
  bg="bg-grad-blue-2"
  textColor="white"
  items={[
    {
      id: "1",
      media: { type: "image", src: "/assets/asset-1.jpg", alt: "Weekly yoga" },
      title: "Weekly yoga",
      excerpt:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "2",
      media: { type: "image", src: "/assets/asset-1.jpg", alt: "Weekly Christmas Market" },
      title: "Reserve Walking Tours",
      excerpt:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    {
      id: "3",
      media: { type: "image", src: "/assets/asset-1.jpg", alt: "Reserve Walking Tours" },
      title: "Reserve Walking Tours",
      excerpt:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    },
    // …more, we’ll loop anyway
  ]}
/>
 
<BannerInfostats3Stack
  bg="grad-blue-light"
  textColor="dark"
  items={[
    { id: 1, stat: "1,500+", label: "employees" },
    { id: 2, stat: "100", label: "acres of nature" },
    { id: 3, stat: "XX", label: "companies on campus" },
  ]}
/>
<CompCtaBanner
  bg="grad-blue-light"
  textColor="dark"
  message="For more information about the events:"
  ctaLabel="Get in touch"
  href="/contact"
/>
 <AvailabilityCards
      bg="grad-green-lite"     // section background; pulled from WP in real use
      textColor="dark"
      cards={sample}
    />
<StaticImageStack
  bg="grad-green-lite"
  textColor="dark"
  items={[
    { id: "a", image: { src: "/assets/asset-1.jpg", alt: "Building 1000" }, badge: { label: "OFFICE", tone: "red" } },
    { id: "b", image: { src: "/assets/asset-1.jpg", alt: "Building 2000" }, badge: { label: "LAB", tone: "blue" } },
    { id: "c", image: { src: "/assets/asset-1.jpg", alt: "Building 3000" }, badge: { label: "R&D", tone: "green" } },
  ]}
  cta={{ label: "Get in touch", href: "/contact", tone: "blue" }}
/>
  <AgentContacts
      bg="grad-blue-lite"
      text="dark"
      columns={[
        {
          eyebrow: "A development by",
          logo: { src: "/logos/royal-london.svg", alt: "Royal London" },
          agents: [],
        },
        {
          eyebrow: "Get in touch to find your campus space",
          logo: { src: "/logos/cbre.svg", alt: "CBRE" },
          agents: [
            {
              name: "Jeremy Rodale",
              phone: "+44 (0)7766 780 590",
              email: "jeremy.rodale@cbre.com",
            },
            {
              name: "Chris Williams",
              phone: "+44 (0)7796 694 501",
              email: "chris.williams@cbre.com",
            },
            {
              name: "Emma Stratton",
              phone: "+44 (0)782 5204 325",
              email: "emma.stratton@cbre.com",
            },
          ],
        },
        {
          logo: { src: "/logos/jll.svg", alt: "JLL" },
          agents: [
            {
              name: "Zelda Dislere",
              role: "Facilities Manager",
              email: "zelda.dislere@jll.com",
            },
          ],
        }, {
          logo: { src: "/logos/jll.svg", alt: "fill" },
          agents: [
            {
              name: "Zelda Dislere",
              role: "Facilities Manager",
              email: "zelda.dislere@jll.com",
            },
          ],
        },
      ]}
    />
  <CompanyTicker
      heading={"You're In Good Company"}
      bg="stone"          // any key from BG_MAP, e.g. "grad-blue-light"
      textColor="dark"    // "white" or "dark"
      logos={logos}
      speed={10}          // tweak for Figma feel
    />

    </main>
  );
}
