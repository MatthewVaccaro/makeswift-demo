import NextLink from 'next/link'

import { Link, TextInput } from '@makeswift/runtime/controls'

import { runtime } from '@/lib/makeswift/runtime'

type Props = {
  message: string
  cta: string
  link: {
    href: string
    target?: '_blank' | '_self'
  }
}

export function Banner({ message, cta, link }: Props) {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-6 bg-gradient-to-r from-[#1D59F8] to-[#E75D9F] p-5 sm:flex-row ">
      <h3 className="text-center text-xl font-semibold text-white">{message}</h3>
      <NextLink href={link.href} target={link.target}>
        <button className="font-base  text-nowrap rounded-xl border-2 border-white px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-[#ffffff20]">
          {cta}
        </button>
      </NextLink>
    </div>
  )
}

runtime.registerComponent(Banner, {
  type: 'banner',
  label: 'Banner',
  props: {
    message: TextInput({ label: 'Message', defaultValue: 'Lets party 🎉' }),
    cta: TextInput({ label: 'Call to action', defaultValue: 'Learn more' }),
    link: Link(),
  },
})
