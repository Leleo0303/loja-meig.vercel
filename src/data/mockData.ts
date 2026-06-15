export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  category: string;
}

export interface Collection {
  id: string;
  title: string;
  tagline: string;
  image: string;
}

export const collections: Collection[] = [
  {
    id: 'all-black',
    title: 'ALL BLACK',
    tagline: 'A elegância do minimalismo escuro.',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'romance',
    title: 'ROMANCE',
    tagline: 'Fluidez, tons pastéis e delicadeza.',
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1000&auto=format&fit=crop',
  },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Blusinha Amarração Premium',
    price: '49,90',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop',
    category: 'ROMANCE',
  },
  {
    id: '2',
    name: 'Cropped Alfaiataria Minimal',
    price: '79,90',
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1000&auto=format&fit=crop',
    category: 'ALL BLACK',
  },
  {
    id: '3',
    name: 'Vestido Linho Soft',
    price: '139,90',
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1000&auto=format&fit=crop',
    category: 'ROMANCE',
  },
  {
    id: '4',
    name: 'Calça Wide Leg Clean',
    price: '119,90',
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1000&auto=format&fit=crop',
    category: 'ESSENTIALS',
  },
];

export const inspirationCards = [
  { id: 1, title: 'Look para Faculdade', tag: 'Casual Clean', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop' },
  { id: 2, title: 'Look para Encontro', tag: 'Romântico', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=600&auto=format&fit=crop' },
  { id: 3, title: 'Look para Fim de Semana', tag: 'Minimalista', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=600&auto=format&fit=crop' },
];