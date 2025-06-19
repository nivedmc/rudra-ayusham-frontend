'use client';

import { useForm } from 'react-hook-form';

type FormData = {
    name: string;
    mobile: string;
    email: string;
    address: string;
    pincode: string;
    district: string;
};

export default function ContactFormPage() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log('Form Submitted:', data);
        alert('Form submitted successfully!');
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">Contact Details Form</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6 md:grid-cols-2">
                {/* Name */}
                <div>
                    <label className="block mb-1 font-medium">Name</label>
                    <input
                        {...register('name', { required: 'Name is required' })}
                        className="w-full rounded border p-2"
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                </div>

                {/* Mobile */}
                <div>
                    <label className="block mb-1 font-medium">Mobile Number</label>
                    <input
                        {...register('mobile', {
                            required: 'Mobile number is required',
                            pattern: {
                                value: /^[6-9]\d{9}$/,
                                message: 'Enter a valid 10-digit Indian mobile number'
                            }
                        })}
                        className="w-full rounded border p-2"
                    />
                    {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile.message}</p>}
                </div>

                {/* Email */}
                <div>
                    <label className="block mb-1 font-medium">Email Address</label>
                    <input
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: 'Enter a valid email address'
                            }
                        })}
                        className="w-full rounded border p-2"
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>

                {/* Pincode */}
                <div>
                    <label className="block mb-1 font-medium">Pincode</label>
                    <input
                        {...register('pincode', {
                            required: 'Pincode is required',
                            pattern: {
                                value: /^[1-9][0-9]{5}$/,
                                message: 'Enter a valid 6-digit pincode'
                            }
                        })}
                        className="w-full rounded border p-2"
                    />
                    {errors.pincode && <p className="text-red-500 text-sm">{errors.pincode.message}</p>}
                </div>

                {/* District */}
                <div>
                    <label className="block mb-1 font-medium">District</label>
                    <input
                        {...register('district', { required: 'District is required' })}
                        className="w-full rounded border p-2"
                    />
                    {errors.district && <p className="text-red-500 text-sm">{errors.district.message}</p>}
                </div>

                {/* Address (full width) */}
                <div className="md:col-span-2">
                    <label className="block mb-1 font-medium">Address</label>
                    <textarea
                        {...register('address', { required: 'Address is required' })}
                        className="w-full rounded border p-2"
                    />
                    {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
                </div>

                {/* Submit (full width) */}
                <div className="md:col-span-2">
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                       Pay & Place order
                    </button>
                </div>
            </form>
        </div>
    );
}
