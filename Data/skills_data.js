import { FaReact, FaLaravel } from "react-icons/fa";
import { SiNextdotjs, SiExpress, SiRubyonrails, SiTailwindcss, SiNodedotjs, SiMysql, SiPostgresql } from "react-icons/si";
import { DiJavascript1, DiRubyRough, DiPhp, DiHtml5, DiCss3, DiPython } from "react-icons/di";


export const frameworks = [
  {
    id: 1,
    name: "React",
    icon: <FaReact size={25} />
  },
  {
    id: 2,
    name: "Next js",
    icon: <SiNextdotjs size={25} />
  },
  {
    id: 3,
    name: "Express",
    icon: <SiExpress size={25} />
  },
  {
    id: 4,
    name: "Laravel",
    icon: <FaLaravel size={25} />
  },
  {
    id: 5,
    name: "Rails",
    icon: <SiRubyonrails size={30} />
  },
  {
    id: 6,
    name: "Tailwind",
    icon: <SiTailwindcss size={25} />
  },
];

export const languages = [
  {
    id: 1,
    name: "JS",
    icon: <DiJavascript1 size={25} />
  },
  {
    id: 2,
    name: "Node",
    icon: <SiNodedotjs size={25} />
  },
  {
    id: 3,
    name: "HTML",
    icon: <DiHtml5 size={25} />
  },
  {
    id: 4,
    name: "CSS",
    icon: <DiCss3 size={25} />
  },
  {
    id: 5,
    name: "Ruby",
    icon: <DiRubyRough size={25} />
  },
  {
    id: 6,
    name: "PHP",
    icon: <DiPhp size={25} />
  },
  {
    id: 7,
    name: "Python",
    icon: <DiPython size={25} />
  },
];

export const databases = [
  {
    id: 1,
    name: 'MySQL',
    icon: <SiMysql size={30}/>
  },
  {
    id: 2,
    name: "PostgreSQL",
    icon: <SiPostgresql size={25}/>
  }
]