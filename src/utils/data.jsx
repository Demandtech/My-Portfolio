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
    icon: <PhpIcon />,
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

export const projectLang = ['All', 'JavaScript', 'TypeScript', 'Python']

export const experiences = [
  {
    position: 'Front-end Developer',
    company: 'Spotmate',
    year: 2023,
    about:
      "Spotmate is a social media platform that allows you to engage with like-minded individuals, whether you're a yoga enthusiast, a fitness beginner, or a fiction lover. It's a place where you can connect, share, and explore your interests with a community of people who have similar passions.",
  },
  {
    position: 'Front-end Developer Intern',
    company: 'HNG Intership',
    year: 2022,
    about:
      'A focused on collaboration. We worked as a team to create real-world applications, like the open-source software ZuriChat, which is for communication and collaboration. We also developed a user-friendly web app called KitchenDiary, which lets you make printable recipe cards. It was all about teamwork and building practical stuff.',
  },
  {
    position: 'Front-end Developer Trainee',
    company: 'Zuri',
    year: 2022,
    about:
      'A focused on collaboration. We worked as a team to create real-world applications, like the open-source software ZuriChat, which is for communication and collaboration. We also developed a user-friendly web app called KitchenDiary, which lets you make printable recipe cards. It was all about teamwork and building practical stuff.',
  },
  {
    position: 'Front-end Developer Trainee',
    company: 'Kodecamp',
    year: 2022,
    about:
      'A focused on collaboration. We worked as a team to create real-world applications, like the open-source software ZuriChat, which is for communication and collaboration. We also developed a user-friendly web app called KitchenDiary, which lets you make printable recipe cards. It was all about teamwork and building practical stuff.',
  },
]

export const roadmaps = [
  {
    title: 'HTML',
    date: 'Decemeber 2021',
    text: 'I began my journey with HTML under the guidance of a mentor I found on Twitter. From there, I continued to expand my knowledge of HTML by utilizing resources such as W3Schools and FreeCodeCamp.',
  },
  {
    title: 'CSS',
    date: 'March 2022',
    text: '',
  },
  {
    title: 'Javascript',
    date: 'June 2022',
    text: '',
  },
  {
    title: 'React',
    date: 'Decemeber 2022',
    text: '',
  },
  {
    title: 'TypeScript',
    date: 'Febuary 2023',
    text: '',
  },
  {
    title: 'Next Js',
    date: 'Jun 2023',
    text: '',
  },
  {
    title: 'Python',
    date: 'October 2023',
    text: '',
  },
]

export const pages = [
  {
    title: 'Roadmap',
    text: 'A chronolology of the major milestones I reached in my career as a web developer; different skills I learned, how I felt as a beginner, the things I did and how I did them over the year to develop the confidence I have now',
    href: '/roadmap'
  },
  {
    title: 'Projects',
    text: "Discover many projects I've built; typically web apps, and other type of reusable components",
    href: '/projects',
  },
  {
    title: 'Experience',
    text: "My experience as a professional software engineer, featuring companies and organisations I've worked, different roles I've taken, and some notable achievements",
    href: '/experience',
  },
  {
    title: 'About me',
    text: 'A short story about me; things I like and my motivation in web development',
    href: '/about',
  },
  {
    title: 'Education',
    text: 'Read about my educational-background, the institutions that I attended and qualifications I earned',
    href: '/education',
  },
]
