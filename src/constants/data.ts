import { CheckIcon, ConstructionIcon, PauseIcon } from "lucide-vue-next";

const technologies = [
  {
    id: 1,
    name: "git",
    longName: "Git",
    uri: "https://github.com/",
    icon: undefined,
  },
  {
    id: 2,
    name: "css",
    longName: "CSS",
    uri: "",
    icon: undefined,
  },
  {
    id: 3,
    name: "laravel",
    longName: "Laravel",
    uri: "",
    icon: undefined,
  },
  {
    id: 4,
    name: "tailwind-css",
    longName: "Tailwind CSS",
    uri: "",
    icon: undefined,
  },
  {
    id: 5,
    name: "asm-x86",
    longName: "Assembly x86",
    uri: "",
    icon: undefined,
  },
  {
    id: 6,
    name: "php",
    longName: "PHP",
    uri: "",
    icon: undefined,
  },
  {
    id: 7,
    name: "docker",
    longName: "Docker",
    uri: "",
    icon: undefined,
  },
  {
    id: 8,
    name: "bash",
    longName: "Bash",
    uri: "",
    icon: undefined,
  },
  {
    id: 9,
    name: "vue",
    longName: "Vue",
    uri: "",
    icon: undefined,
  },
  {
    id: 10,
    name: "pinia",
    longName: "Pinia",
    uri: "",
    icon: undefined,
  },

  {
    id: 11,
    name: "livewire",
    longName: "Livewire",
    uri: "",
    icon: undefined,
  },
  {
    id: 12,
    name: "blade",
    longName: "Blade",
    uri: "",
    icon: undefined,
  },
  {
    id: 13,
    name: "tailwind-motion",
    longName: "Tailwind Motion",
    uri: "",
    icon: undefined,
  },
  {
    id: 14,
    name: "axios",
    longName: "Axios",
    uri: "",
    icon: undefined,
  },
  {
    id: 15,
    name: "vite",
    longName: "Vite",
    uri: "",
    icon: undefined,
  },
];

const projectStatus = [
  {
    id: 0,
    name: "WIP",
    icon: ConstructionIcon,
  },
  {
    id: 1,
    name: "Done",
    icon: CheckIcon,
  },
  {
    id: 2,
    name: "Paused",
    icon: PauseIcon,
  },
];

const projects = [
  {
    title: "Passmed",
    status: 0,
    description: "SaaS for medical records management.",
    stack: [],
  },
  {
    title: "Tetris",
    status: 1,
    description: "Text-mode tetris for MS-DOS, just for experimental purposes!",
  },
  {
    title: "Lupobenchmark",
    status: 0,
    description: "PC Benchmark database and benchmarking tool.",
  },
];

export { projects, projectStatus, technologies };
