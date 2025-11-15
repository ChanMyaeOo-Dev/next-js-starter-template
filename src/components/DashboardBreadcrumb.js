"use client";

import { Breadcrumb, BreadcrumbItem } from "flowbite-react";
import { HiHome } from "react-icons/hi";

export function DashboardBreadcrumb({ currentPageTitle = "", links = [] }) {
  return (
    <Breadcrumb aria-label="Default breadcrumb example">
      {
        links.map((link, index) => (
          <BreadcrumbItem key={link.href} href={link.href} icon={index == 0 ? HiHome : null}>
            {link.name}
          </BreadcrumbItem>
        ))
      }
      <BreadcrumbItem>{currentPageTitle}</BreadcrumbItem>
    </Breadcrumb>
  );
}
