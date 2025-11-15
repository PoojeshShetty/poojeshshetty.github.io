import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import { Button } from '@headlessui/react'
import Image from 'next/image'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* Profile Image */}
            <div className="flex justify-center">
              <div className="relative h-64 w-64 md:h-80 md:w-80">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-purple-500/20 blur-2xl"></div>
                <Image
                  src="/static/images/plain-bg-profile.jpg"
                  width="500"
                  height="500"
                  alt="Profile"
                  className="relative h-full w-full rounded-2xl border-2 border-cyan-400/30 object-cover"
                />
              </div>
            </div>

            {/* Personal Info Content */}
            <div className="space-y-6">
              <div>
                <h1 className="mb-4 text-5xl font-bold text-balance md:text-6xl">
                  Hi, I'm Poojesh Shetty
                </h1>
                <p className="text-xl leading-relaxed text-balance text-gray-400">
                  I'm a frontend developer, curious and driven by the joy of building. This website
                  is my space to document what I create, explore, and learn. Half of the times I am
                  either confused on what to learn or where to start.
                </p>
              </div>

              {/* <div className="flex flex-wrap gap-4">
                <Link href="#resume">
                  <Button className="gap-2 bg-cyan-400 font-semibold text-slate-950 hover:bg-cyan-500">
                    Download Resume
                  </Button>
                </Link>
                <Button className="border-cyan-400/30 bg-transparent text-cyan-400 hover:bg-cyan-400/10">
                  Get in touch
                </Button>
              </div> */}

              {/* Social Links */}
              {/* <div className="flex gap-4 pt-4">
                <a
                  href="#"
                  className="rounded-lg bg-slate-800 p-3 transition hover:bg-slate-700 hover:text-cyan-400"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="rounded-lg bg-slate-800 p-3 transition hover:bg-slate-700 hover:text-cyan-400"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="rounded-lg bg-slate-800 p-3 transition hover:bg-slate-700 hover:text-cyan-400"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div> */}
            </div>
          </div>
        </section>
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Latest
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl leading-8 font-bold tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base leading-6 font-medium">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read more: "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base leading-6 font-medium">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
