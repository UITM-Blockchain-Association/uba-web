// Props interface
interface ScrollProps {
  scrollY: number;
}

// Import the Pixelify Sans font directly in the component
import { Pixelify_Sans } from "next/font/google";
import { FocusCards } from "@/components/ui/focus-cards";
import CountUp from "@/components/ui/CountUp";
import { LogosSlider } from "@/components/ui/logos-slider";

// Initialize the font
const pixelifyFont = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["700"],
});

// Scroll page component
const ScrollPage = ({ scrollY }: ScrollProps) => {
  // Calculate visibility threshold for animations
  const visibilityThreshold = 300;
  const isVisible = scrollY > visibilityThreshold;
  const isCountupVisible = scrollY > 1100;
  const isLogosVisible = scrollY > 1500;
  
  return (
    <div 
      className="w-full min-h-[80vh] bg-black px-4 sm:px-6 md:px-12 lg:px-24 pt-12 pb-16 flex flex-col"
      style={{
        transform: `translateY(${Math.max(0 - scrollY * 0.2, -50)}px)`,
        opacity: Math.min(scrollY * 0.008, 1),
        transition: 'transform 0.4s ease-out, opacity 0.4s ease-out'
      }}
    >
      <div className="flex items-start justify-between w-full">
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
          
          <h2 className={`${pixelifyFont.className} text-4xl md:text-5xl font-bold mb-8 text-white tracking-wide`}>
            About Us
          </h2>
          <p className="text-xl text-gray-300 text-justify">
            UiTM Blockchain Association (UBA) is a student-led organization that is dedicated to exploring blockchain technology. Our mission is to grow the student blockchain ecosystem and build a dynamic community where academics, students, professionals collaborate, innovate and leverage blockchain technology to create a positive impact.
          </p>
          
          {/* Modern button */}
          <div className="mt-8 flex justify-center md:justify-start">
            <button
              onClick={() => window.open('https://forms.gle/your-form-link', '_blank')}
              className={`
                ${pixelifyFont.className}
                px-6 py-3 
                text-lg font-semibold text-white 
                bg-gradient-to-r from-blue-500 to-indigo-600
                rounded-md 
                shadow-lg
                hover:shadow-xl
                hover:translate-y-[-2px]
                active:translate-y-[1px]
                transition-all duration-300
                focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50
              `}
            >
              Join Us Now
            </button>
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

      {/* Masonry Gallery Section */}
      <div className="mt-32 w-full">
        <div className="text-center mb-10">
          <h3 className={`${pixelifyFont.className} text-3xl font-bold text-white mb-3`}>UBA Highlights</h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            Capturing our journey in blockchain innovation and community building
          </p>
        </div>
        <div className="pt-4 pb-8">
          <FocusCards />
        </div>
      </div>

      {/* Glass Card Section */}
      <div className="mt-20 w-full flex justify-center">
        <div 
          className="backdrop-blur-md bg-white/10 rounded-xl p-8 shadow-2xl border border-white/20 max-w-4xl w-full transform hover:scale-[1.01] transition-all duration-500 relative overflow-hidden"
          style={{
            opacity: Math.max(0, Math.min((scrollY - 1000) * 0.003, 1)),
            transform: `
              perspective(1000px) 
              rotateX(${Math.max(0, Math.min(20 - (scrollY - 1000) * 0.04, 20))}deg) 
              scale(${Math.max(0.8, Math.min((scrollY - 1000) * 0.0005 + 0.8, 1))})
              translateY(${Math.max(0, 50 - (scrollY - 1000) * 0.1)}px)
            `,
            transformOrigin: 'center',
            filter: `blur(${Math.max(0, 2 - (scrollY - 1000) * 0.01)}px)`,
            transition: 'transform 0.4s ease-out, opacity 0.5s ease-out, filter 0.5s ease-out'
          }}
        >
          {/* Shimmer effect */}
          <div 
            className="absolute inset-0 w-full h-full"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
              transform: isCountupVisible ? 
                `translateX(${100 + Math.min((scrollY - 1100) * 0.1, 100)}%)` : 
                'translateX(-100%)',
              transition: 'transform 1.5s ease-in-out',
              opacity: Math.min((scrollY - 1000) * 0.005, 1)
            }}
          />
          
          <div className="flex flex-col items-center relative z-10">
            <div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
              style={{
                opacity: Math.max(0, Math.min((scrollY - 1100) * 0.004, 1)),
                transform: `translateY(${Math.max(0, 30 - (scrollY - 1100) * 0.1)}px)`,
                transition: 'transform 0.6s ease-out, opacity 0.6s ease-out',
                transitionDelay: '0.2s'
              }}
            >
              <div className="flex flex-col items-center">
                <div 
                  className="text-5xl font-bold text-white mb-2 flex items-baseline"
                  style={{
                    opacity: Math.max(0, Math.min((scrollY - 1150) * 0.004, 1)),
                    transform: `translateY(${Math.max(0, 20 - (scrollY - 1150) * 0.1)}px)`,
                    transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
                    transitionDelay: '0.3s'
                  }}
                >
                  <CountUp
                    from={0}
                    to={100}
                    separator=","
                    direction="up"
                    duration={1}
                    startWhen={isCountupVisible}
                    className="count-up-text"
                  />
                  <span className="ml-1">+</span>
                </div>
                <p 
                  className="text-gray-300 text-center"
                  style={{
                    opacity: Math.max(0, Math.min((scrollY - 1150) * 0.004, 1)),
                    transition: 'opacity 0.5s ease-out',
                    transitionDelay: '0.4s'
                  }}
                >
                  Active Members
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div 
                  className="text-5xl font-bold text-white mb-2 flex items-baseline"
                  style={{
                    opacity: Math.max(0, Math.min((scrollY - 1200) * 0.004, 1)),
                    transform: `translateY(${Math.max(0, 20 - (scrollY - 1200) * 0.1)}px)`,
                    transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
                    transitionDelay: '0.5s'
                  }}
                >
                  <CountUp
                    from={0}
                    to={25}
                    separator=","
                    direction="up"
                    duration={1.5}
                    startWhen={isCountupVisible}
                    className="count-up-text"
                  />
                  <span className="ml-1">+</span>
                </div>
                <p 
                  className="text-gray-300 text-center"
                  style={{
                    opacity: Math.max(0, Math.min((scrollY - 1200) * 0.004, 1)),
                    transition: 'opacity 0.5s ease-out',
                    transitionDelay: '0.6s'
                  }}
                >
                  Events
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div 
                  className="text-5xl font-bold text-white mb-2 flex items-baseline"
                  style={{
                    opacity: Math.max(0, Math.min((scrollY - 1250) * 0.004, 1)),
                    transform: `translateY(${Math.max(0, 20 - (scrollY - 1250) * 0.1)}px)`,
                    transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
                    transitionDelay: '0.7s'
                  }}
                >
                  7/2022
                </div>
                <p 
                  className="text-gray-300 text-center"
                  style={{
                    opacity: Math.max(0, Math.min((scrollY - 1250) * 0.004, 1)),
                    transition: 'opacity 0.5s ease-out',
                    transitionDelay: '0.8s'
                  }}
                >
                  Established
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partners Logos Slider - moved to end of page */}
      <div 
        className="mt-36 w-full max-w-6xl mx-auto mb-12" 
        style={{
          opacity: Math.max(0, Math.min((scrollY - 1500) * 0.003, 1)),
          transform: `translateY(${Math.max(0, 50 - (scrollY - 1500) * 0.1)}px)`,
          transition: 'transform 0.6s ease-out, opacity 0.6s ease-out'
        }}
      >
        <div className="text-center mb-10">
          <h3 className={`${pixelifyFont.className} text-3xl font-bold text-white mb-3`}>Our Partners</h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            Collaborating with industry leaders in blockchain and technology
          </p>
        </div>
        <LogosSlider />
      </div>

    </div>
  );
};

export default ScrollPage;