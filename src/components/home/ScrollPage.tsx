// Props interface
interface ScrollProps {
  scrollY: number;
}

import ShinyButton from "@/components/ui/ShinyButton";

// Scroll page component
const ScrollPage = ({ scrollY }: ScrollProps) => {
  // Calculate visibility threshold for animations
  const visibilityThreshold = 300;
  const isVisible = scrollY > visibilityThreshold;
  
  return (
    <div 
      className="w-full min-h-[80vh] bg-black px-4 sm:px-6 md:px-12 lg:px-24 pt-12 pb-16 flex items-start justify-between"
      style={{
        transform: `translateY(${Math.max(0 - scrollY * 0.2, -50)}px)`,
        opacity: Math.min(scrollY * 0.008, 1),
        transition: 'transform 0.4s ease-out, opacity 0.4s ease-out'
      }}
    >
      <div className="max-w-2xl text-left mt-8">
        {/* Mobile 3D logo - visible only on mobile */}
        <div className="md:hidden flex justify-center mb-8">
          <img 
            src="/uba3d.png" 
            alt="UBA 3D Logo" 
            className="w-auto h-[200px] object-contain"
            style={{
              transform: isVisible 
                ? `rotate(${Math.min(scrollY - visibilityThreshold, 20) * 0.05}deg) scale(${1 + Math.min(scrollY - visibilityThreshold, 300) * 0.001})`
                : 'rotate(-15deg) scale(0.8)',
              opacity: isVisible ? Math.min((scrollY - visibilityThreshold) * 0.01, 1) : 0,
              transition: 'transform 0.6s ease-out, opacity 0.6s ease-out'
            }}
          />
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
          About Us
        </h2>
        <p className="text-xl text-gray-300 text-justify">
          UiTM Blockchain Association (UBA) is a student-led organization that is dedicated to exploring blockchain technology. Our mission is to grow the student blockchain ecosystem and build a dynamic community where academics, students, professionals collaborate, innovate and leverage blockchain technology to create a positive impact.
        </p>
        
        {/* Add ShinyButton at the bottom of the text */}
        <div className="mt-8 flex justify-center md:justify-start">
          <ShinyButton 
            text="Join Us Now" 
            onClick={() => window.open('https://forms.gle/your-form-link', '_blank')}
            className="w-auto text-lg px-6 py-2"
          />
        </div>
      </div>
      <div className="hidden md:block relative mt-8">
        <img 
          src="/uba3d.png" 
          alt="UBA 3D Logo" 
          className="w-auto h-[300px] object-contain"
          style={{
            transform: isVisible 
              ? `rotate(${Math.min(scrollY - visibilityThreshold, 20) * 0.05}deg) scale(${1 + Math.min(scrollY - visibilityThreshold, 300) * 0.001})`
              : 'translateX(100px) rotate(-15deg) scale(0.8)',
            opacity: isVisible ? Math.min((scrollY - visibilityThreshold) * 0.01, 1) : 0,
            transition: 'transform 0.6s ease-out, opacity 0.6s ease-out'
          }}
        />
      </div>
    </div>
  );
};

export default ScrollPage;