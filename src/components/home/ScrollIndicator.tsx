// Props interface
interface ScrollProps {
  scrollY: number;
}

// Scroll indicator component
const ScrollIndicator = ({ scrollY }: ScrollProps) => (
  <div 
    className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce"
    style={{
      opacity: Math.max(1 - scrollY * 0.01, 0),
      visibility: scrollY > 100 ? 'hidden' : 'visible',
      transition: 'opacity 0.3s ease-out, visibility 0.3s ease-out'
    }}
  >
    <div className="text-white opacity-70">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M12 5v14M19 12l-7 7-7-7"/>
      </svg>
    </div>
  </div>
);

export default ScrollIndicator; 