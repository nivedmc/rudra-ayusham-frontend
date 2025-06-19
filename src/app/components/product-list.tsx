'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';

type Product = {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
};

const dummyProducts: Product[] = [
  {
    id: '1',
    name: 'Product One',
    price: '$29.99',
    imageUrl: 'https://picsum.photos/seed/prod1/400/400'
  },
  {
    id: '2',
    name: 'Product Two',
    price: '$49.99',
    imageUrl: 'https://picsum.photos/seed/prod2/400/400'
  }
];

export default function ProductShowcase() {
    const router = useRouter();
  return (
    <div className="grid grid-cols-1 gap-6 px-4 py-6 sm:grid-cols-2">
      {dummyProducts.map((product) => (
        <div
          key={product.id}
          onClick={()=>router.push(`product/234`)}
          className="cursor-pointer rounded-xl sm:w-60 sm:h-60 border border-gray-200 p-4 shadow-sm transition hover:shadow-md dark:border-neutral-700"
        >
          <div className="relative aspect-square w-full mb-4">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="rounded-lg object-cover "
            />
          </div>
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{product.price}</p>
        </div>
      ))}
    </div>
  );
}
