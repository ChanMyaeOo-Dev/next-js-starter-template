import React from 'react'
import { Button, Label, TextInput } from "flowbite-react";
import { useForm } from 'react-hook-form';
import { createProduct, PRODUCT_API_URL, updateProduct } from '@/services/product_service';
import { useSWRConfig } from 'swr';
import { useRouter } from 'next/navigation';

const ProductForm = ({ currentPageAction = "", product = {} }) => {
    const { mutate } = useSWRConfig();
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const res = currentPageAction == "edit" ?
                await updateProduct(product.id, data)
                :
                await createProduct(data);
            if (!res.ok) {
                throw new Error(res.statusText);
            }
            if (res.ok) {
                mutate(PRODUCT_API_URL);
                router.push('/products');
            }
        } catch (e) {
            console.log(e.message);
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex max-w-md flex-col gap-4">
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="name">Product Name</Label>
                </div>
                <TextInput id="title" type="text" defaultValue={product.title} {...register("title", {
                    required: "Product title is required.",
                })} />
                {errors.title && <p className="mt-2 text-red-500">
                    {errors.title.message}
                </p>}
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="price">Product Price</Label>
                </div>
                <TextInput id="price" type="number" defaultValue={product.price} {...register("price", {
                    required: "Product price is required.",
                })} />
                {errors.price && <p className="mt-2 text-red-500">
                    {errors.price.message}
                </p>}
            </div>
            <Button type="submit" disabled={isSubmitting}>
                {currentPageAction == "edit" ? isSubmitting ? "Updating..." : "Update" : isSubmitting ? "Creating..." : "Create"}
            </Button>
        </form>
    );
}

export default ProductForm