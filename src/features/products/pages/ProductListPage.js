"use client";
import { PRODUCT_API_URL, productFetcher } from '@/services/product_service';
import React from 'react'
import useSWR from 'swr'
import ProductCard from '../components/ProductCard';
import { DashboardBreadcrumb } from '@/components/DashboardBreadcrumb';
import Link from 'next/link';
import { Button } from 'flowbite-react';

const ProductListPage = () => {
    const breadcrumbLinks = [
        {
            href: "/",
            name: "Home",
        }
    ];
    const { data, error, isLoading } = useSWR(PRODUCT_API_URL, productFetcher);

    if (isLoading) {
        return "loading";
    }
    if (data.length <= 0) {
        return "Empty Product.";
    }
    return (
        <>
            <div className='flex items-center justify-between mb-7'>
                <DashboardBreadcrumb currentPageTitle="Products" links={breadcrumbLinks} />
                <Link href="/products/create">
                    <Button>+ Create New Product</Button>
                </Link>
            </div>
            <div className='grid grid-cols-4 gap-6'>
                {data.sort((a, b) => b.id - a.id).map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </>
    )
}

export default ProductListPage