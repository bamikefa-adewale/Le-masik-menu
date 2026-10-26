"use client";

import NextLink from "next/link";
import React from "react";

export interface LinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  to?: string;
  href?: string;
  children?: React.ReactNode;
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { to, href, ...props },
  ref,
) {
  const target = to || href || "/";
  return <NextLink ref={ref} href={target} {...props} />;
});
