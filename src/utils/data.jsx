import {
  DjangoIcon,
  JavaScriptIcon,
  NextJsIcon,
  PostgreSQLIcon,
  PythonIcon,
  ReactIcon,
  ReduxIcon,
  TypeScriptIcon,
  TailwindIcon,
  SassIcon,
  StyledComponentIcon,
  FastAPIIcon,
} from '../assets/svgs'
import PhpIcon from '../assets/svgs/PhpIcon'

// import TypeScriptIcon from '../assets/svgs/TypescriptIcon'
DjangoIcon

export const programs = [
  {
    name: 'TypeScript',
    icon: <TypeScriptIcon />,
  },
  {
    name: 'Python',
    icon: <PythonIcon />,
  },

  {
    name: 'JavaScript',
    icon: <JavaScriptIcon />,
  },
  {
    name: 'PHP',
    icon: <PhpIcon />
  },
]

export const libraries = [
  {
    name: 'React',
    icon: <ReactIcon />,
  },
  {
    name: 'Styled-Components',
    icon: <StyledComponentIcon />,
  },

  {
    name: 'Django',
    icon: <DjangoIcon />,
  },
  {
    name: 'Redux Toolkit',
    icon: <ReduxIcon />,
  },
  {
    name: 'NextJs',
    icon: <NextJsIcon />,
  },
  {
    name: 'PostgreSQL',
    icon: <PostgreSQLIcon />,
  },
  {
    name: 'Tailwindcss',
    icon: <TailwindIcon />,
  },

  {
    name: 'Sass',
    icon: <SassIcon />,
  },
  {
    name: 'FastAPI',
    icon: <FastAPIIcon />,
  },
]

export const projectLang = ['All', 'JavaScript', 'TypeScript', 'Python', 'PHP']
