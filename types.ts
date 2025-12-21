import { ComponentType } from 'react';

export type LucideIcon = ComponentType<any>;

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TechItem {
  name: string;
  color: string;
  icon?: string; // URL or simplified string for icon logic
}

export interface NavItem {
  label: string;
  href: string;
}