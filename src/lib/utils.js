import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "sanity:client";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
export const imageUrlFor = (source) =>
  imageUrlBuilder(sanityClient).image(source);
