export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: string;
}

export interface MenuCategory {
  name: string;
  icon: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    name: "Breakfast",
    icon: "🍳",
    items: [
      { id: "b1", name: "Poha", price: 39, category: "Breakfast" },
    ],
  },
  {
    name: "Hot Beverages",
    icon: "☕",
    items: [
      { id: "hb1", name: "Chai", price: 15, category: "Hot Beverages" },
      { id: "hb2", name: "Black Tea", price: 25, category: "Hot Beverages" },
      { id: "hb3", name: "Coffee", price: 29, category: "Hot Beverages" },
      { id: "hb4", name: "Lemon Tea", price: 29, category: "Hot Beverages" },
      { id: "hb5", name: "Ginger Honey Tea", price: 29, category: "Hot Beverages" },
      { id: "hb6", name: "Hot Chocolate", price: 59, category: "Hot Beverages" },
    ],
  },
  {
    name: "Cold Beverages & Shakes",
    icon: "🥤",
    items: [
      { id: "cb1", name: "Cold Coffee", price: 39, category: "Cold Beverages & Shakes" },
      { id: "cb2", name: "Lemon Iced Tea", price: 39, category: "Cold Beverages & Shakes" },
      { id: "cb3", name: "Peach Iced Tea", price: 39, category: "Cold Beverages & Shakes" },
      { id: "cb4", name: "Oreo Shake", price: 69, category: "Cold Beverages & Shakes" },
      { id: "cb5", name: "KitKat Shake", price: 79, category: "Cold Beverages & Shakes" },
    ],
  },
  {
    name: "Mojito",
    icon: "🍹",
    items: [
      { id: "m1", name: "Strawberry Mojito", price: 39, category: "Mojito" },
      { id: "m2", name: "Mango Mojito", price: 39, category: "Mojito" },
      { id: "m3", name: "Blackcurrant Mojito", price: 39, category: "Mojito" },
      { id: "m4", name: "Kiwi Mojito", price: 39, category: "Mojito" },
      { id: "m5", name: "Litchi Mojito", price: 39, category: "Mojito" },
      { id: "m6", name: "Guava Mojito", price: 39, category: "Mojito" },
      { id: "m7", name: "Pineapple Mojito", price: 39, category: "Mojito" },
    ],
  },
  {
    name: "Sodas",
    icon: "🥂",
    items: [
      { id: "s1", name: "Pineapple Soda", price: 29, category: "Sodas" },
      { id: "s2", name: "Kala Khatta Soda", price: 29, category: "Sodas" },
      { id: "s3", name: "Jeera Masala Soda", price: 29, category: "Sodas" },
      { id: "s4", name: "Plain / Limbu Soda", price: 29, category: "Sodas" },
    ],
  },
  {
    name: "Snacks & Starters",
    icon: "🍟",
    items: [
      { id: "ss1", name: "French Fries", price: 79, category: "Snacks & Starters" },
      { id: "ss2", name: "Veggie Sticks", price: 79, category: "Snacks & Starters" },
      { id: "ss3", name: "Chilly Garlic Poppers", price: 79, category: "Snacks & Starters" },
      { id: "ss4", name: "Peri Peri Fries", price: 89, category: "Snacks & Starters" },
      { id: "ss5", name: "Cheese Fries", price: 89, category: "Snacks & Starters" },
      { id: "ss6", name: "Cheese Peri Peri", price: 99, category: "Snacks & Starters" },
      { id: "ss7", name: "Hash Brown", price: 99, category: "Snacks & Starters" },
      { id: "ss8", name: "Hara Bhara Kabab", price: 99, category: "Snacks & Starters" },
    ],
  },
  {
    name: "Burgers",
    icon: "🍔",
    items: [
      { id: "bg1", name: "Veg Burger", price: 49, category: "Burgers" },
      { id: "bg2", name: "Veg Cheese Burger", price: 59, category: "Burgers" },
      { id: "bg3", name: "Veg Mayo Burger", price: 59, category: "Burgers" },
      { id: "bg4", name: "Tandoori Burger", price: 69, category: "Burgers" },
      { id: "bg5", name: "Tandoori Cheese Burger", price: 79, category: "Burgers" },
      { id: "bg6", name: "Garlic Mint Burger", price: 99, category: "Burgers" },
      { id: "bg7", name: "Aioli Burger", price: 99, category: "Burgers" },
    ],
  },
  {
    name: "Momos",
    icon: "🥟",
    items: [
      { id: "mo1", name: "Steam Momos", price: 69, category: "Momos" },
      { id: "mo2", name: "Fried Momos", price: 89, category: "Momos" },
      { id: "mo3", name: "Tandoori Momos", price: 99, category: "Momos" },
      { id: "mo4", name: "Gravy Steam Momos", price: 119, category: "Momos" },
      { id: "mo5", name: "Gravy Fried Momos", price: 149, category: "Momos" },
      { id: "mo6", name: "Gravy Tandoori Momos", price: 149, category: "Momos" },
    ],
  },
  {
    name: "Sandwiches",
    icon: "🥪",
    items: [
      { id: "sw1", name: "Veg Sandwich", price: 39, category: "Sandwiches" },
      { id: "sw2", name: "Cheese Sandwich", price: 49, category: "Sandwiches" },
      { id: "sw3", name: "Schezwan Sandwich", price: 49, category: "Sandwiches" },
      { id: "sw4", name: "Mint Sandwich", price: 49, category: "Sandwiches" },
      { id: "sw5", name: "Veg Grill Sandwich", price: 49, category: "Sandwiches" },
      { id: "sw6", name: "Cheese Grill Sandwich", price: 59, category: "Sandwiches" },
      { id: "sw7", name: "Schezwan Grill Sandwich", price: 59, category: "Sandwiches" },
      { id: "sw8", name: "Mint Grill Sandwich", price: 59, category: "Sandwiches" },
    ],
  },
  {
    name: "Pizzas",
    icon: "🍕",
    items: [
      { id: "pz1", name: "Margherita Pizza", price: 109, category: "Pizzas" },
      { id: "pz2", name: "Tandoori Paneer Pizza", price: 129, category: "Pizzas" },
    ],
  },
  {
    name: "Pasta",
    icon: "🍝",
    items: [
      { id: "pa1", name: "Alfredo Pasta", price: 129, category: "Pasta" },
      { id: "pa2", name: "Penne Arrabbiata", price: 129, category: "Pasta" },
    ],
  },
  {
    name: "Garlic Bread",
    icon: "🧄",
    items: [
      { id: "gb1", name: "Garlic Bread", price: 79, category: "Garlic Bread" },
      { id: "gb2", name: "Cheese Garlic Bread", price: 99, category: "Garlic Bread" },
    ],
  },
  {
    name: "Maggi",
    icon: "🍜",
    items: [
      { id: "mg1", name: "Classic Maggi", price: 29, category: "Maggi" },
      { id: "mg2", name: "Cheese Maggi", price: 39, category: "Maggi" },
      { id: "mg3", name: "Veg Maggi", price: 39, category: "Maggi" },
      { id: "mg4", name: "Peri Peri Maggi", price: 39, category: "Maggi" },
      { id: "mg5", name: "Peri Peri Cheese Maggi", price: 49, category: "Maggi" },
      { id: "mg6", name: "Peri Peri Veg Maggi", price: 49, category: "Maggi" },
      { id: "mg7", name: "Veg Peri Peri Cheese Maggi", price: 59, category: "Maggi" },
    ],
  },
];
