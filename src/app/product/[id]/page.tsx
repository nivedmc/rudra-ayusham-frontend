'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';


export default function ProductDetails() {
    const router =useRouter();
    const [quantity, setQuantity] = useState(1);

    const product = {
        name: 'Premium Herbal Oil',
        price: '₹299',
        imageUrl: 'https://picsum.photos/seed/product/600/600',
        description:
            'Get fast delivery within 3–5 business days. Made with 100% natural ingredients. Best for skin and hair care.'
    };

    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.max(1, parseInt(e.target.value) || 1);
        setQuantity(value);
    };

    return (
        <div className="max-w-md md:max-w-4xl mx-auto p-4 md:flex gap-6 rounded-lg border border-gray-200 shadow-sm">
            {/* Left: Product Image */}
            <div className="relative aspect-square w-full md:w-1/2 mb-4 md:mb-0">
                <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className="rounded-lg object-cover"
                />
            </div>

            {/* Right: Product Content */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-1">Price: {product.price}</p>

                <label className="block mt-4 mb-2 font-medium text-gray-800">Quantity</label>
                <input
                    type="number"
                    value={quantity}
                    onChange={handleQuantityChange}
                    min={1}
                    className="w-full rounded-md border border-gray-300 p-2 text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <p className="my-6 text-sm text-gray-700">{product.description}</p>
                <button className='p-4 rounded-3xl bg-green-500 text-white' onClick={()=>router.push('checkout/')}>{"Order now"}</button>
            </div>
        </div>
    );
}
