// Props interface
interface ScrollProps {
  scrollY: number;
}

// About section component
const AboutSection = ({ scrollY }: ScrollProps) => (
  <div 
    className="w-full min-h-[80vh] bg-black px-4 sm:px-6 md:px-12 lg:px-24 pt-12 pb-16 flex items-start justify-start"
    style={{
      transform: `translateY(${Math.max(0 - scrollY * 0.2, -50)}px)`,
      opacity: Math.min(scrollY * 0.008, 1),
      transition: 'transform 0.4s ease-out, opacity 0.4s ease-out'
    }}
  >
    <div className="max-w-2xl text-left mt-8">
      <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
        Who We Are
      </h2>
      <p className="text-xl text-gray-300 text-justify">
        UiTM Blockchain Association (UBA) is a student-led organization that is dedicated to exploring blockchain technology. Our mission is to grow the student blockchain ecosystem and build a dynamic community where academics, students, professionals collaborate, innovate and leverage blockchain technology to create a positive impact.
      </p>
    </div>
  </div>
);

export default AboutSection; 