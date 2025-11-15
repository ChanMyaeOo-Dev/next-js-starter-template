"use client";
import React from 'react'
import { DashboardBreadcrumb } from '@/components/DashboardBreadcrumb';
import { Button } from 'flowbite-react';
import { useParams, useRouter } from 'next/navigation';
import ProductForm from '../components/ProductForm';
import useSWR from 'swr';
import { PRODUCT_API_URL, productFetcher } from '@/services/product_service';

const ProductEditPage = () => {
    const router = useRouter();
    const { id } = useParams();
    const { data: product, error: productFetchError, isLoading: productIsLoading } = useSWR(PRODUCT_API_URL + '/' + id, productFetcher);
    if (productIsLoading) {
        return "loading";
    }
    const breadcrumbLinks = [
        {
            href: "/",
            name: "Home",
        },
        {
            href: "/products",
            name: "Products",
        },
        {
            href: "/products/" + id,
            name: product.id,
        }
    ];

    return (
        <>
            <div className='flex items-center justify-between mb-7'>
                <DashboardBreadcrumb currentPageTitle="Product Edit" links={breadcrumbLinks} />
                <Button onClick={() => router.back()}>- Back</Button>
            </div >
            <ProductForm currentPageAction="edit" product={product} />
        </>
    )
}

export default ProductEditPage