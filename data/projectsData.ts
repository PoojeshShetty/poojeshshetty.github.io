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
  // {
  //   title: 'The Time Machine',
  //   description: `Imagine being able to travel back in time or to the future. Simple turn the knob
  //   to the desired date and press "Go". No more worrying about lost keys or
  //   forgotten headphones with this simple yet affordable solution.`,
  //   imgSrc: '/static/images/time-machine.jpg',
  //   href: '/blog/the-time-machine',
  // },
]

export default projectsData
