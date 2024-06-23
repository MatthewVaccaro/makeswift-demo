'use client'

import Image from 'next/image'
import NextLink from 'next/link'
import React, { ReactNode, useMemo, useState } from 'react'

import { Color, Link, List, Shape, Slot, Style, TextInput } from '@makeswift/runtime/controls'
import makeshiftShort from 'assets/makeshift-short.svg'

import { runtime } from '@/lib/makeswift/runtime'

type Tab = {
  name: string
  subline?: string
  visual: ReactNode
  link?: {
    href: string
    target: '_blank' | '_self'
  }
}
type Props = { tabs: Tab[]; color: string }
export function FeatureTabs({ tabs, color }: Props) {
  const [index, setIndex] = useState<number>(0)
  const currentTab = useMemo(() => tabs[index], [index])

  return (
    <div className="flex h-screen max-h-[800px] w-full flex-col justify-between px-2 sm:px-8 md:px-16 lg:px-[150px]">
      <div>
        <section className="mx-auto w-full min-w-max overflow-hidden rounded-xl border-2 border-[#ffffff20] bg-[#33333310] px-2 md:w-auto md:min-w-[600px]">
          <div className="relative mx-auto flex justify-between gap-3">
            {tabs.map((tab, i) => (
              <button
                key={tab.name}
                onClick={() => setIndex(i)}
                className={`relative z-20 h-full py-3 text-center font-semibold text-[#333]  transition-all duration-300 ${i !== index && 'hover:scale-110'}`}
                style={{
                  width: `${100 / tabs.length}%`,
                  color: i === index ? color : '#333333',
                }}
              >
                {tab.name}
              </button>
            ))}
            <div className="absolute top-0 z-0 flex h-full w-full items-center px-2">
              <div
                style={{
                  width: `${100 / tabs.length}%`,
                  left: `${(100 / tabs.length) * index}%`,
                  transition: 'all .5s cubic-bezier(0.5, -0.1, 0.265, 1.5)',
                }}
                className="absolute z-0 h-9 rounded-lg bg-white"
              />
            </div>
          </div>
        </section>
        {currentTab?.subline && (
          <div className="flex w-full flex-col items-center  justify-center gap-2 md:flex-row md:items-baseline">
            <h6 className="mt-4 text-center text-[#33333375]">{currentTab.subline}</h6>
            {currentTab?.link && (
              <NextLink
                style={{ color }}
                className=" inline-block text-xl font-semibold transition-opacity duration-300 hover:opacity-75"
                href={currentTab.link.href}
                target={currentTab.link.target}
              >
                Learn More
              </NextLink>
            )}
          </div>
        )}
      </div>
      <section className="enterenceAnimation h-[600px] w-full">{tabs[index]?.visual}</section>
    </div>
  )
}

type IllustrationProps = {
  headline: string
  subline: string
}
export const Illustration = ({ headline, subline }: IllustrationProps) => {
  return (
    <div className="mx-auto flex h-full w-full max-w-[1000px] overflow-hidden rounded-t-3xl bg-white shadow-2xl">
      <div className="bg-makeswift h-full w-[80px] sm:w-[150px] md:w-[247px]" />
      <div className="w-full px-4 pt-8 sm:px-8 md:px-16">
        <Image src={makeshiftShort} alt="makeshift logo but just the thunderbolt I" />
        <h3 className="mb-3 font-semibold text-[#333]"> {headline} </h3>
        <p className="text-[#333] opacity-70">{subline}</p>
        <div className="mt-16 grid grid-cols-1  gap-8 md:grid-cols-2">
          <div className="h-48 w-full rounded-lg bg-[#333] opacity-25" />
          <div className="h-48 w-full rounded-lg bg-[#333] opacity-25" />
          <div className="h-48 w-full rounded-lg bg-[#333] opacity-25" />
          <div className="h-48 w-full rounded-lg bg-[#333] opacity-25" />
        </div>
      </div>
    </div>
  )
}

runtime.registerComponent(FeatureTabs, {
  type: 'featureTabs',
  label: 'Feature Tabs',
  props: {
    color: Color({
      label: 'Brand color',
      defaultValue: '#EA3BA7',
    }),
    tabs: List({
      label: 'tabs',
      type: Shape({
        type: {
          name: TextInput({ lable: 'Tab Name', defaultValue: 'tab' }),
          subline: TextInput({ lable: 'subline', defaultValue: '' }),
          link: Link(),
          visual: Slot(),
        },
      }),
    }),
  },
})
