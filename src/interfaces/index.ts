import { HTMLAttributes, IframeHTMLAttributes } from "react";

export interface Tech {
  [key: string]: string;
}

export interface TooltipProps {
  nameClass?: string;
  tech: Tech;
}

export type Project = {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
  description: string | null;
  html_url: string;
  language: string[];
  languages_url: string;
  homepage: string | null;
};

export interface Repo {
  id: number;
  name: string;
  description: string;
  language: string[];
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

export interface Container extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export interface Iiframe extends IframeHTMLAttributes<HTMLIFrameElement> {
  src: string;
  title?: string;
}
