export const sample_books: any[] = [
  {
    id: "1",
    name: "Выйди из зоны комфорта",
    price: 2357,
    favorite: false,
    stars: 4.5,
    imageUrl: "assets/book1.jpg",
    tags: ["психология популярная"],
    description: {
      author: "Брайан Трейси",
      publishYear: 2022,
      genre: "психология популярная",
    },
  },
  {
    id: "2",
    name: "Сам себе MBA",
    price: 8855,
    favorite: true,
    stars: 4.5,
    imageUrl: "assets/book2.jpg",
    tags: ["деловая литература"],
    description: {
      author: "Джош Кауфман",
      publishYear: 2018,
      genre: "психология популярная",
    },
  },
  {
    id: "3",
    name: "Атомные привычки. Как приобрести хорошие привычки и избавиться от плохих",
    price: 4792,
    favorite: true,
    stars: 4.8,
    imageUrl: "assets/book3.jpg",
    tags: ["психология популярная"],
    description: {
      author: "Джеймс Клир",
      publishYear: 2020,
      genre: "психология популярная",
    },
  },
];

export const sample_tags: any[] = [
  { name: "Все", count: 6 },
  { name: "психология популярная", count: 4 },
  { name: "Деловая литература", count: 2 },
];

export const sample_users: any[] = [
  {
    name: "John Doe",
    email: "john@gmail.com",
    password: "12345",
    address: "Toronto On",
    isAdmin: true,
  },
  {
    name: "Jane Doe",
    email: "Jane@gmail.com",
    password: "12345",
    address: "Shanghai",
    isAdmin: false,
  },
];
