export interface ProductHighlight {
  label?: string;
  title: string;
  description: string;
}

export interface ProductFeature {
  title: string;
  highlight?: string;
  description: string;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductScenario {
  title: string;
  description: string;
  image: string;
}

export interface ProductVariant {
  name: string;
  title: string;
  description: string;
  image: string;
}

export interface ProductDetail {
  heroTagline?: string;
  overview?: string;
  highlights?: ProductHighlight[];
  features?: ProductFeature[];
  specs?: ProductSpec[];
  scenarios?: ProductScenario[];
  variants?: ProductVariant[];
}

export interface Product {
  id: string;
  name: string;
  badge?: string;
  description: string;
  tagline?: string;
  image: string;
  hoverImage?: string;
  detail?: ProductDetail;
}

export interface SubCategory {
  name: string;
  description: string;
  products: Product[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  heroImage: string;
  products?: Product[];
  subCategories?: SubCategory[];
}