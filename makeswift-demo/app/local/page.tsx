import { Product } from '@/components/Product/Product.makeswift'

export default function Index() {
  return (
    <div className="m-4 grid grid-cols-4">
      <Product productId={1} link={{ href: '', target: '_self' }} />
      <Product productId={2} link={{ href: '', target: '_self' }} />
      <Product productId={3} link={{ href: '', target: '_self' }} />
      <Product productId={4} link={{ href: '', target: '_self' }} />
    </div>
  )
}
