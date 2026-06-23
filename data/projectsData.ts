interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
  link?: string
}

const projectsData: Project[] = [
  {
    title: 'A Logging App like Centry',
    description: `Centry is my hobby project which is by name has same working as sentry. My main aim was to understand how applications like Sentry works. 
    So now through centry I got good sense on how logging around frontend and backend works and how to setup them up`,
    imgSrc: '/static/images/centry/centry-img.png',
    href: 'https://github.com/PoojeshShetty/centry',
  },
  {
    title: 'Code Agent',
    description: `A hobby project exploring AI-powered code agents, built to learn agent architectures, tool integration, and developer-assistant workflows.`,
    imgSrc: '/static/images/code-agent/code-agent.png',
    href: 'https://github.com/PoojeshShetty/codeagent',
  },
]

export default projectsData
