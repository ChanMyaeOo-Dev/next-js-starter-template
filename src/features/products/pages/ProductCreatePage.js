"use client";
import React from 'react'
import { DashboardBreadcrumb } from '@/components/DashboardBreadcrumb';
import { Button } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import ProductForm from '../components/ProductForm';

const ProductCreatePage = () => {
    let router = useRouter();
    const breadcrumbLinks = [
        {
            href: "/",
            name: "Home",
        },
        {
            href: "/products",
            name: "Products",
        }
    ];

    return (
        <>
            <div className='flex items-center justify-between mb-7'>
                <DashboardBreadcrumb currentPageTitle="Product Create" links={breadcrumbLinks} />
                <Button onClick={() => router.back()}>- Back</Button>
            </div >
            <ProductForm />
        </>
    )
}

export default ProductCreatePage