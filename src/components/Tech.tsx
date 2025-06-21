import { technologies } from "../constants";
import { styles } from "../styles";
import { motion } from "framer-motion";

const TechBall = ({ name, icon, index }: { name: string; icon: string; index: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ 
      delay: index * 0.1, 
      duration: 0.5,
      type: "spring",
      stiffness: 125
    }}
    className="relative w-28 h-28 group cursor-pointer"
  >
    {/* Glowing background effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#915EFF] to-[#915EFF] rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300 blur-sm"></div>
    
    {/* Main ball */}
    <div className="relative w-full h-full bg-gradient-to-br from-[#232631] to-[#1a1a2e] rounded-full border border-[#915EFF]/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-xl">
      {/* Tech icon */}
      <img 
        src={icon} 
        alt={name}
        className="w-12 h-12 object-contain filter brightness-110"
        onError={(e) => {
          // Fallback for broken images
          e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24' fill='%23915EFF'%3E%3Cpath d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'/%3E%3C/svg%3E`;
        }}
      />
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
    </div>
    
    {/* Tech name tooltip */}
    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <span className="text-white text-xs font-medium bg-[#232631] px-2 py-1 rounded-md whitespace-nowrap border border-[#915EFF]/30">
        {name}
      </span>
    </div>
  </motion.div>
);

const Tech = () => {
  return (
    <section className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.25 }}
        className="text-center mb-20"
      >
        <p className={styles.sectionSubText}>My technical skills</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>

      <div className='flex flex-row flex-wrap justify-center gap-12 pb-16'>
        {technologies.map((technology, index) => (
          <TechBall
            key={technology.name}
            name={technology.name}
            icon={technology.icon}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Tech;