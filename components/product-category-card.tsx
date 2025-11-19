import Image from 'next/image'
import Link from 'next/link'

interface ProductCategoryCardProps {
  name: string
  image: string
  slug: string
}

export function ProductCategoryCard({ name, image, slug }: ProductCategoryCardProps) {
  return (
    <Link href={`/productos/${slug}`}>
      <div className="group relative bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
        <div className="aspect-[4/3] relative overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-semibold text-white text-balance">
            {name}
          </h3>
        </div>
      </div>
    </Link>
  )
}
