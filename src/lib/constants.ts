export const defaultSort = {
  title: "Relevance",
  slug: null,
  sortKey: "RELEVANCE",
  reverse: false,
};

export const sorting = [
  defaultSort,
  {
    title: "Trending",
    slug: "trending-desc",
    sortKey: "BEST_SELLING",
    reverse: false,
  }, // asc
  {
    title: "Latest arrivals",
    slug: "latest-desc",
    sortKey: "CREATED_AT",
    reverse: true,
  },
  {
    title: "Price: Low to high",
    slug: "price-asc",
    sortKey: "PRICE",
    reverse: false,
  }, // asc
  {
    title: "Price: High to low",
    slug: "price-desc",
    sortKey: "PRICE",
    reverse: true,
  },
];

export const collections = [
  {
    title: "All",
    slug: null,
  },
 {
  title: "Bags",
  slug: "bags",
 },
 {
  title: "Drinkware",
  slug: "drinkware",
 },
 {
  title: "Electronics",
  slug: "electronics",
 },
 {
  title: "Footwear",
  slug: "footwear",
 },
 {
  title: "Headwear",
  slug: "headwear",
 },
 {
  title: "Hoodies",
  slug: "hoodies",
 },
 {
  title: "Jackets",
  slug: "jackets",
 },{
  title: "Kids",
  slug: "kids",
 },{
  title: "Pets",
  slug: "pets",
 },{
  title: "Shirts",
  slug: "shirts",
 },{
  title: "Stickers",
  slug: "stickers",
 },
]

// Bags;
// Drinkware;

// Electronics;
// Footware;
// Headwear;
// Hoodies;
// Jackets;
// Kids;
// Pets;
// Shirts;
// Stickers;