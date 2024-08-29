import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaSass } from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiMui,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiDocker,
  SiCloudflare,
  SiAngular,
  SiNextdotjs,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

// Array of skills with their names and corresponding icons
const skills = [
  { name: "React", icon: FaReact },
  { name: "Angular", icon: SiAngular },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss3 },
  { name: "Sass", icon: FaSass },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Bootstrap", icon: SiBootstrap },
  { name: "Material-UI", icon: SiMui },
  { name: "Redux", icon: SiRedux },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express.js", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "MySQL", icon: SiMysql },
  { name: "REST API", icon: TbApi },
  { name: "Docker", icon: SiDocker },
  { name: "Cloudflare", icon: SiCloudflare },
  { name: "Git", icon: FaGitAlt },
  { name: "GitHub", icon: FaGithub },
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
          slidesPerView={3}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 5,
            },
          }}
        >
          {/* Map through skills array to create slides */}
          {skills.map((skill, index) => (
            <SwiperSlide key={index}>
              <div className="text-center">
                {/* Render skill icon */}
                <skill.icon className="text-5xl sm:text-6xl text-white mx-auto mb-2 sm:mb-3" />
                {/* Render skill name */}
                <span className="text-sm sm:text-lg font-semibold text-white">{skill.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SkillsCarousel;
