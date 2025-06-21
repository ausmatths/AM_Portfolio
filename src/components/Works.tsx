import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { projects } from "../constants";

interface ProjectCardProps {
  index: number;
  name: string;
  description: string;
  tags: Array<{ name: string; color: string }>;
  image: string;
  source_code_link: string;
}

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.75, type: "spring" }}
    >
      <Tilt className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'>
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />
          
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        {/* Fixed height content area */}
        <div className='mt-5 h-[200px] flex flex-col justify-between'>
          <div>
            <h3 className='text-white font-bold text-[24px] mb-2'>{name}</h3>
            <p className='mt-2 text-secondary text-[14px] leading-[20px]'>{description}</p>
          </div>

          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <section className={`${styles.padding} max-w-7xl mx-auto relative z-0`} id="work">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.25 }}
      >
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 1 }}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories on GitHub. These projects reflect my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively from AI/ML to full-stack development.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7 justify-center'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Works;