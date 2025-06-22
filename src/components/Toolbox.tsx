import { FaAws, FaReact, FaToolbox } from 'react-icons/fa';
import {
  SiCss3,
  SiDocker,
  SiHtml5,
  SiKubernetes,
  SiMongodb,
  SiNestjs,
  SiNodedotjs,
  SiPostgresql,
  SiRedis,
  SiTypescript,
} from 'react-icons/si';
import type { Tool } from '../types';
import Shelf from './Shelf';
import ToolDisplay from './ToolIcon';

const frontendTools: Tool[] = [
  {
    id: 'react',
    label: 'React',
    icon: FaReact,
  },
  {
    id: 'html',
    label: 'HTML',
    icon: SiHtml5,
  },
  {
    id: 'css',
    label: 'CSS',
    icon: SiCss3,
  },
];

const backendTools: Tool[] = [
  {
    id: 'typescript',
    label: 'Typescript',
    icon: SiTypescript,
  },
  {
    id: 'nodejs',
    label: 'Node.js',
    icon: SiNodedotjs,
  },
  {
    id: 'nestjs',
    label: 'NestJS',
    icon: SiNestjs,
  },
];

const databaseTools: Tool[] = [
  {
    id: 'postgres',
    label: 'PostgreSQL',
    icon: SiPostgresql,
  },
  {
    id: 'redis',
    label: 'Redis',
    icon: SiRedis,
  },
  {
    id: 'mongo',
    label: 'MongoDB',
    icon: SiMongodb,
  },
];

const otherTools: Tool[] = [
  {
    id: 'docker',
    label: 'Docker',
    icon: SiDocker,
  },
  {
    id: 'k8s',
    label: 'Kubernetes',
    icon: SiKubernetes,
  },
  {
    id: 'aws',
    label: 'AWS',
    icon: FaAws,
  },
];

const ToolBox = () => {
  return (
    <div
      id="tech"
      className="flex flex-col gap-12 md:gap-14 text-slate-200  md:w-full px-8  md:px-56 border-emerald-500 rounded-4xl"
    >
      <h3 className="flex text-center items-center justify-center gap-2 text-3xl">
        <span>
          <FaToolbox />
        </span>
        <span>My Toolbox</span>
      </h3>
      <div>
        <div className="flex justify-around mb-1">
          {frontendTools.map((tool) => (
            <ToolDisplay key={tool.id} tool={tool} />
          ))}
        </div>
        <Shelf />
      </div>

      <div>
        <div className="flex justify-around mb-1">
          {backendTools.map((tool) => (
            <ToolDisplay key={tool.id} tool={tool} />
          ))}
        </div>
        <Shelf />
      </div>

      <div>
        <div className="flex justify-around mb-1">
          {databaseTools.map((tool) => (
            <ToolDisplay key={tool.id} tool={tool} />
          ))}
        </div>
        <Shelf />
      </div>

      <div>
        <div className="flex justify-around mb-1">
          {otherTools.map((tool) => (
            <ToolDisplay key={tool.id} tool={tool} />
          ))}
        </div>
        <Shelf />
      </div>
    </div>
  );
};

export default ToolBox;
