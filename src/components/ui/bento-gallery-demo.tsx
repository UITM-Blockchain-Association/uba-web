"use client"

import InteractiveBentoGallery from "@/components/ui/interactive-bento-gallery"

const mediaItems = [
  {
    id: 1,
    type: "image",
    title: "Anurag Mishra",
    desc: "Driven, innovative, visionary",
    url: "https://kxptt4m9j4.ufs.sh/f/9YHhEDeslzkcbP3rYTiXwH7Y106CepJOsoAgQjyFi3MUfDkh",
    span: "col-span-1 row-span-1 sm:col-span-1 sm:row-span-1 md:col-span-1 md:row-span-2",
  },
  {
    id: 2,
    type: "video",
    title: "Dog Puppy",
    desc: "Adorable loyal companion.",
    url: "https://cdn.pixabay.com/video/2024/07/24/222837_large.mp4",
    span: "col-span-1 row-span-1 sm:col-span-1 sm:row-span-1 md:col-span-1 md:row-span-2",
  },
  {
    id: 3,
    type: "image",
    title: "Forest Path",
    desc: "Mystical forest trail",
    url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    span: "col-span-1 row-span-1 sm:col-span-1 sm:row-span-1 md:col-span-1 md:row-span-2",
  },
  {
    id: 4,
    type: "image",
    title: "Falling Leaves",
    desc: "Autumn scenery",
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    span: "col-span-1 row-span-1 sm:col-span-1 sm:row-span-1 md:col-span-1 md:row-span-2",
  },
  {
    id: 5,
    type: "video",
    title: "Bird Parrot",
    desc: "Vibrant feathered charm",
    url: "https://cdn.pixabay.com/video/2020/07/30/46026-447087782_large.mp4",
    span: "col-span-1 row-span-1 sm:col-span-1 sm:row-span-1 md:col-span-1 md:row-span-2",
  },
  {
    id: 6,
    type: "image",
    title: "Beach Paradise",
    desc: "Sunny tropical beach",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    span: "col-span-1 row-span-1 sm:col-span-1 sm:row-span-1 md:col-span-1 md:row-span-2",
  },
  {
    id: 7,
    type: "video",
    title: "Shiva Temple",
    desc: "Peaceful Shiva sanctuary.",
    url: "https://cdn.pixabay.com/video/2020/05/25/40130-424930032_large.mp4",
    span: "col-span-1 row-span-1 sm:col-span-1 sm:row-span-1 md:col-span-1 md:row-span-2",
  },
  {
    id: 8,
    type: "image",
    title: "Mountain Peak",
    desc: "Majestic mountain vista",
    url: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    span: "col-span-1 row-span-1 sm:col-span-1 sm:row-span-1 md:col-span-1 md:row-span-2",
  },
  {
    id: 9,
    type: "image",
    title: "Sunset Beach",
    desc: "Golden hour by the ocean",
    url: "https://images.unsplash.com/photo-1505142468610-359e7d316be0",
    span: "col-span-1 row-span-1 sm:col-span-1 sm:row-span-1 md:col-span-1 md:row-span-2",
  },
  {
    id: 10,
    type: "image",
    title: "Desert Sands",
    desc: "Endless dunes at dawn",
    url: "https://images.unsplash.com/photo-1547234935-80c7145ec969",
    span: "col-span-1 row-span-1 sm:col-span-1 sm:row-span-1 md:col-span-1 md:row-span-2",
  },
  {
    id: 11,
    type: "video",
    title: "Waterfall",
    desc: "Cascading mountain stream",
    url: "https://cdn.pixabay.com/video/2020/03/31/33001-303456114_large.mp4",
    span: "col-span-1 row-span-1 sm:col-span-1 sm:row-span-1 md:col-span-1 md:row-span-2",
  },
  {
    id: 12,
    type: "image",
    title: "Northern Lights",
    desc: "Aurora borealis display",
    url: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73",
    span: "col-span-1 row-span-1 sm:col-span-1 sm:row-span-1 md:col-span-1 md:row-span-2",
  }
]

export function BentoGridGalleryDemo() {
  return (
    <div className="h-auto max-h-[320px] sm:max-h-[360px] md:max-h-[400px] w-full overflow-y-auto bg-white/5 backdrop-blur-sm rounded-xl shadow-lg p-2 sm:p-3 md:p-4 border border-white/10">
      <InteractiveBentoGallery
        mediaItems={mediaItems}
        title="Blockchain Gallery"
        description="Drag and explore our collection of blockchain-related media"
      />
    </div>
  )
} 