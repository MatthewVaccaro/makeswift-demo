import Image from 'next/image'
import NextLink from 'next/link'

import { Link, List, Select, Shape, TextInput } from '@makeswift/runtime/controls'
import chev from 'assets/chevron.svg'
import next from 'assets/next.svg'

import { runtime } from '@/lib/makeswift/runtime'

type Props = {
  category: string
  headline: string
  description: string
  link: {
    href: string
    target?: '_blank' | '_self'
  }
  cta: string
}

export function Article({ category, headline, description, link, cta }: Props) {
  return (
    <NextLink href={link.href} target={link.target}>
      <div className="group w-full cursor-pointer rounded-none border-b-2 border-[#33333310] bg-none p-6 shadow-[#33333320] transition-all duration-300 hover:scale-105 hover:rounded-2xl hover:border-white hover:bg-white hover:shadow-lg">
        <p className="text-makeswift opacity-60 transition-opacity duration-300 group-hover:opacity-100">
          {category}
          <Image
            className="inline align-top opacity-50"
            src={chev}
            alt="cheveron arrow pointing right"
          />
        </p>
        <h3 className="my-3 font-semibold leading-[45px] text-[#333]">{headline}</h3>
        <p>{description}</p>
        <button className="text-makeswift mt-8 text-base font-semibold opacity-60 transition-opacity duration-300 group-hover:opacity-100">
          {cta}
          <Image className="ml-2 inline align-top" src={next} alt="arrow pointing to the right" />
        </button>
      </div>
    </NextLink>
  )
}

export function ArticleList({ articles }: { articles: Props[] }) {
  return (
    <div className="grid grid-cols-1  gap-8 p-4  md:grid-cols-2 lg:grid-cols-3">
      {articles.map(data => (
        <Article {...data} key={data.headline} />
      ))}
    </div>
  )
}

runtime.registerComponent(ArticleList, {
  type: 'artcles',
  label: 'Articles',
  props: {
    articles: List({
      label: 'Articles',
      type: Shape({
        type: {
          category: Select({
            label: 'Category',
            options: [
              { label: 'Instagram Marketing', value: 'instagram marketing' },
              { label: 'Travel', value: 'travel' },
              { label: 'Misc', value: 'misc' },
            ],
            defaultValue: 'instagram marketing',
          }),
          headline: TextInput({ label: 'Headline', defaultValue: 'Whats this story called?' }),
          description: TextInput({
            lable: 'Description',
            defaultValue: 'Two or three lines to get someone excited!',
          }),
          cta: TextInput({ lable: 'Call to Action', defaultValue: 'Read More' }),
          link: Link(),
        },
      }),
    }),
  },
})
