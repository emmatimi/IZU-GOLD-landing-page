
import React from 'react';

export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  price?: string;
}

export interface Category {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}