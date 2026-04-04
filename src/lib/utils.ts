import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import bcrypt from "bcryptjs";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const comparePasswords = async (
  password: string,
  userPassword: string,
) => {
  const passwordMatch = await bcrypt.compare(password, userPassword);
  return passwordMatch;
};
