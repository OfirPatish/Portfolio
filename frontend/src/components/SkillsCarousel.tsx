import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { FaReact, FaNodeJs, FaAws, FaDocker, FaGitAlt } from "react-icons/fa";
import {
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiGraphql,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiJest,
} from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

// Array of skills with their names and corresponding icons
const skills = [
  { name: "React", icon: FaReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "GraphQL", icon: SiGraphql },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Redux", icon: SiRedux },
  { name: "TailwindCSS", icon: SiTailwindcss },
  { name: "Jest", icon: SiJest },
  { name: "Docker", icon: FaDocker },
  { name: "AWS", icon: FaAws },
  { name: "Git", icon: FaGitAlt },
  { name: "C++", icon: TbBrandCpp },
  // Add more skills with their corresponding icons as needed
];

// SkillsCarousel component: Displays a carousel of skills using Swiper
const SkillsCarousel: React.FC = () => {
  return (
    <div className="w-full bg-dark-blue py-16">
      <div className="container mx-auto">
        {/* Swiper carousel configuration */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={40}
          slidesPerView={5}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
        >
          {/* Map through skills array to create slides */}
          {skills.map((skill, index) => (
            <SwiperSlide key={index}>
              <div className="text-center">
                {/* Render skill icon */}
                <skill.icon className="text-6xl text-white mx-auto mb-3" />
                {/* Render skill name */}
                <span className="text-lg font-semibold text-white">{skill.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SkillsCarousel;
