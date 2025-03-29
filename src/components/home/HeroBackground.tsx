import Image from "next/image";

// Props interface
interface ScrollProps {
  scrollY: number;
}

// Component for the hero background with gradient overlays
const HeroBackground = ({ scrollY }: ScrollProps) => (
  <div className="absolute inset-0 -z-10">
    <Image
      src="/gambar/background.jpg"
      alt="Background"
      fill
      priority
      className="object-cover"
      quality={100}
    />
    <div 
      className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"
      style={{
        opacity: Math.min(0.5 + scrollY * 0.001, 0.9),
        transition: 'opacity 0.3s ease-out'
      }}
    />
    <div 
      className="absolute bottom-0 left-0 right-0 h-[30vh] bg-gradient-to-t from-black via-black/80 to-transparent"
      style={{
        transform: `translateY(${Math.min(scrollY * 0.15, 20)}px)`,
        opacity: Math.min(0.3 + scrollY * 0.003, 1),
        transition: 'transform 0.3s ease-out, opacity 0.3s ease-out'
      }}
    />
  </div>
);

export default HeroBackground; 