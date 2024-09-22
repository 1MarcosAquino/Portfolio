import { HTMLAttributes, IframeHTMLAttributes } from "react";

export interface Tech {
  [key: string]: string;
}

export interface Repo {
  id: number;
  name: string;
  description: string;
  language: string;
  homepage: string | null;
  html_url: string;
  created_at: string | Date | number;
  updated_at: string | Date | number;
}

export interface SectionProps {
  id: string;
  titlePart1: string;
  titlePart2: string;
  children: React.ReactNode;
}

export interface Container extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export interface Iiframe extends IframeHTMLAttributes<HTMLIFrameElement> {
  src: string;
  title?: string;
}
