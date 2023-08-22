export class Book {
  id!: string;
  name!: string;
  price!: number;
  tags?: string[];
  favorite!: boolean;
  stars!: number;
  imageUrl!: string;
  description?: {
    author: string;
    publishYear: number;
    genre: string;
  };
}
