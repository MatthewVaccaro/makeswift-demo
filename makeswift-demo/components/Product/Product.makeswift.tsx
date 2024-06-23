'use client'

import NextImage from 'next/image'
import NextLink from 'next/link'
import { useEffect, useState } from 'react'

import { Image, Link, Number } from '@makeswift/runtime/controls'
import makeswiftShort from 'assets/makeshift-short.svg'

import { runtime } from '@/lib/makeswift/runtime'

type ImageWithDimensions = {
  url: string
  dimensions: {
    width: number
    height: number
  }
}

type ProductInfo = {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

type Props = {
  productId: number
  link: {
    href: string
    target: '_blank' | '_self'
  }
  brand: ImageWithDimensions
}

export const Product = ({ productId, link, brand }: Props) => {
  const [product, setProduct] = useState<ProductInfo | undefined>(undefined)

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`).then(async res => {
      setProduct(await res.json())
    })
  }, [productId])

  return (
    <div className="group relative h-[375px] w-[250px] overflow-hidden rounded-xl border-2 border-[#333] border-opacity-15 shadow-xl">
      {product && (
        <>
          <div className="group absolute flex h-full w-full items-end justify-end bg-white">
            <NextImage
              style={{
                transition: 'all 1s ease-in-out',
              }}
              className="productLoadIn translate-x-32 translate-y-6 object-contain group-hover:translate-x-[-25px] group-hover:translate-y-[-24px] group-hover:scale-110"
              src={product?.image}
              alt={product?.description}
              width={200}
              height={200}
            />
          </div>
          <div className=" relative z-10 flex h-full w-full flex-col gap-3 p-3">
            {brand && (
              <NextImage
                style={{ transition: 'all 1s ease-in-out' }}
                className="logoLoadIn origin-top-left group-hover:scale-75"
                src={brand.url}
                width={Math.min(brand.dimensions.width, 45)}
                height={Math.min(brand.dimensions.height, 45)}
                alt="makeshift logo but just the thunderbolt I"
              />
            )}
            <h6
              style={{ transition: 'all 1s ease-in-out' }}
              className="contentLoadIn mt-auto w-3/4 cursor-default font-semibold text-[#333] group-hover:translate-x-[-20px] group-hover:text-white group-hover:opacity-0"
            >
              {product.title}
            </h6>
            <p
              style={{ transition: 'all 1s ease-in-out' }}
              className="contentLoadIn cursor-default font-medium text-[#333] opacity-65 group-hover:translate-x-[-20px] group-hover:text-white group-hover:opacity-0"
            >
              ${product.price.toFixed(2)}
            </p>
            {link && (
              <NextLink
                href={link.href}
                target={link.target}
                style={{ transition: 'all .5s ease-in-out' }}
                className="block rounded-md border-none bg-[#111] bg-opacity-80 py-3 text-center text-white backdrop-blur-lg hover:scale-105 hover:bg-opacity-95 hover:duration-300 group-hover:translate-y-[-12px]"
              >
                Shop Now
              </NextLink>
            )}
          </div>
        </>
      )}
    </div>
  )
}

runtime.registerComponent(Product, {
  type: 'product',
  label: 'Product',
  props: {
    productId: Number({
      label: 'Product Id',
      defaultValue: 1,
      min: 1,
      max: 999,
    }),
    link: Link(),
    brand: Image({
      label: 'brand',
      format: Image.Format.WithDimensions,
    }),
  },
})
