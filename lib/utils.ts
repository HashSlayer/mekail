import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// cn function: Merges class names using clsx and tailwind-merge
// This is useful for combining Tailwind classes dynamically
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

