import { faker } from "@faker-js/faker";

// const meals = new Array(20).fill(0).map(() => {
//   const name = faker.food.dish();
//   return {
//     id: faker.string.uuid(),
//     name: name,
//     description: faker.food.description(),
//     ingredient: faker.food.ingredient(),
//     price: faker.commerce.price({
//       min: 10,
//       max: 100,
//       symbol: "$",
//     }),
//     images: [
//       faker.image.urlLoremFlickr({
//         category: "pizza",
//         height: 400,
//         width: 400,
//       }),
//     ],
//   };
// });

export const meals = [
  {
    id: "349d7d0c-32a2-4805-8b68-11dd4b68baa2",
    name: "Pasta With Tomato And Basil",
    description:
      "A special magenta oyster sauce from Saint Pierre and Miquelon. To support the strong flavor it is sided with a tablespoon of tikka masala.",
    ingredient: "nashi pear",
    price: "$35.29",
    images: ["https://loremflickr.com/400/400/pizza?lock=4612170786698550"],
  },
  {
    id: "65ebe5e7-3be3-4994-bc8b-00b3cd8390cb",
    name: "Quail With Dragonfruit Sauce",
    description:
      "Tender emu skewers, glazed with a sweet and tangy sprout sauce, served over a bed of fragrant jasmine rice.",
    ingredient: "rockmelon",
    price: "$45.79",
    images: ["https://loremflickr.com/400/400/pizza?lock=4221964249187848"],
  },
  {
    id: "9fcd34e4-9f9a-4e7b-86f7-c5bfab9f2f0f",
    name: "Snowpea-infused Kangaroo Roast",
    description:
      "Grilled venison kebabs, marinated in Polish spices and served with a fresh cauliflower and dragonfruit salad.",
    ingredient: "bonza",
    price: "$84.49",
    images: ["https://loremflickr.com/400/400/pizza?lock=2570828303300595"],
  },
  {
    id: "89977686-05bb-4e85-a907-8b0774adc9a0",
    name: "Sushi",
    description:
      "A robust moist stew featuring Filipino flavors, loaded with tangy meat, fluffy vegetables, and a rich, bitter broth.",
    ingredient: "tomatoes",
    price: "$43.25",
    images: ["https://loremflickr.com/400/400/pizza?lock=2394113437507077"],
  },
  {
    id: "4e393821-a9c5-4c83-a5de-815b0f639651",
    name: "Souvlaki",
    description:
      "A succulent duck steak, encased in a tender piri piri crust, served with a side of dill mashed brussels sprouts.",
    ingredient: "cheddar",
    price: "$78.09",
    images: ["https://loremflickr.com/400/400/pizza?lock=6889624710284840"],
  },
  {
    id: "53e83708-3772-4f52-bcd9-8568ef0c50fa",
    name: "Pomegranate-infused Pork Roast",
    description:
      "Hearty cornichons and turkey stew, slow-cooked with sweet laurel and kohlrabi for a comforting, flavorful meal.",
    ingredient: "alfalfa",
    price: "$40.59",
    images: ["https://loremflickr.com/400/400/pizza?lock=6016744424536131"],
  },
  {
    id: "84cec08e-7fba-44e9-9d36-00ecd5746a6e",
    name: "Pennsylvania Dutch Olives Soup",
    description:
      "Tenderly braised goose in a rich cinnamon and zucchini sauce, served with a side of creamy radish.",
    ingredient: "clams",
    price: "$29.35",
    images: ["https://loremflickr.com/400/400/pizza?lock=4693248989887672"],
  },
  {
    id: "d353f436-1771-4040-9251-e24eb75c114e",
    name: "Pork Sausage Roll",
    description:
      "Tenderly braised kangaroo in a rich parsley and jerusalem artichoke sauce, served with a side of creamy iceberg lettuce.",
    ingredient: "licorice",
    price: "$55.89",
    images: ["https://loremflickr.com/400/400/pizza?lock=2466049463479632"],
  },
  {
    id: "45c4911d-1bb3-4077-814b-c01a7bfbee86",
    name: "Thelma's Special Radicchio",
    description:
      "Grilled chicken kebabs, marinated in Ukrainian spices and served with a fresh kohlrabi and blackberry salad.",
    ingredient: "jewfish",
    price: "$33.70",
    images: ["https://loremflickr.com/400/400/pizza?lock=3164639632534353"],
  },
  {
    id: "661a1f50-5b9b-4c61-bc69-930ff4ea239f",
    name: "Souvlaki",
    description:
      "A heartwarming American soup, featuring fresh capers and an aromatic blend of traditional spices.",
    ingredient: "mussels",
    price: "$12.79",
    images: ["https://loremflickr.com/400/400/pizza?lock=8540621962021942"],
  },
  {
    id: "f11bcb5e-d2a6-4dbf-82e6-164629e648ab",
    name: "Barbecue Ribs",
    description:
      "Three white wine vinegar with kohlrabi, endive, cucumber, carob carrot and mustard. With a side of baked apple, and your choice of soy flour or buckwheat noodles.",
    ingredient: "tuna",
    price: "$64.20",
    images: ["https://loremflickr.com/400/400/pizza?lock=6152113849224106"],
  },
  {
    id: "df57e106-2295-4305-ab7c-297dbe82c071",
    name: "Caprese Salad",
    description:
      "Fresh fennel seeds with a pinch of pepper, topped by a caramelized aubergine with whipped cream",
    ingredient: "cassia bark",
    price: "$58.89",
    images: ["https://loremflickr.com/400/400/pizza?lock=8352404222206986"],
  },
  {
    id: "b198b419-380e-40ce-9b32-d33e50ef9c20",
    name: "Lemon And Mulberry Tart",
    description:
      "Three sunflower seeds with leeks, butternut lettuce, beans, iceberg lettuce and star anise. With a side of baked avocado, and your choice of lobster or trout.",
    ingredient: "buckwheat flour",
    price: "$31.20",
    images: ["https://loremflickr.com/400/400/pizza?lock=1949489547259371"],
  },
  {
    id: "4e792ae4-5763-4c89-980f-7da53649be17",
    name: "Hummus",
    description:
      "Juicy salmon, grilled to your liking and drizzled with a bold lemon grass sauce, served alongside roasted spinach.",
    ingredient: "paprik",
    price: "$61.06",
    images: ["https://loremflickr.com/400/400/pizza?lock=822916979206529"],
  },
  {
    id: "8fe20506-b413-4706-bfc3-408423583aef",
    name: "Linguine With Clams",
    description:
      "A special fuchsia bush tomato from Estonia. To support the strong flavor it is sided with a tablespoon of amchoor.",
    ingredient: "nasturtium",
    price: "$58.27",
    images: ["https://loremflickr.com/400/400/pizza?lock=3974412285918127"],
  },
  {
    id: "d1f7bdff-8057-4c87-8e37-ac5b6a598ae0",
    name: "Mango Pie",
    description:
      "Hearty ricotta and quail stew, slow-cooked with colombo and hijiki for a comforting, flavorful meal.",
    ingredient: "quinoa",
    price: "$46.39",
    images: ["https://loremflickr.com/400/400/pizza?lock=6588687484112615"],
  },
  {
    id: "2cdc0974-788b-40d0-8e25-518de9aea8ca",
    name: "Bunny Chow",
    description:
      "A robust fresh stew featuring Hyderabad flavors, loaded with savory meat, tangy vegetables, and a sour, bitter broth.",
    ingredient: "margarine",
    price: "$97.00",
    images: ["https://loremflickr.com/400/400/pizza?lock=8185785432481563"],
  },
  {
    id: "67322d9c-4dae-4a6c-9131-4ec06b7de3be",
    name: "Pasta And Beans",
    description:
      "A heartwarming Portuguese soup, featuring fresh butter beans and an aromatic blend of traditional spices.",
    ingredient: "snowpeas",
    price: "$66.89",
    images: ["https://loremflickr.com/400/400/pizza?lock=3336190000626780"],
  },
  {
    id: "4a3976b5-fff3-4dd8-8e02-d230c743a396",
    name: "Pears And Quail Pie",
    description:
      "Baked sprouts-stuffed ostrich, seasoned with zahtar and rich herbs, accompanied by roasted cabbage medley.",
    ingredient: "snapper",
    price: "$94.35",
    images: ["https://loremflickr.com/400/400/pizza?lock=115899510152944"],
  },
  {
    id: "1ed8f46a-25b0-4881-9d33-ebe5a7bf65b5",
    name: "Salmon With Pear Sauce",
    description:
      "A special pink almonds from Switzerland. To support the strong flavor it is sided with a tablespoon of vanilla.",
    ingredient: "asian noodles",
    price: "$19.59",
    images: ["https://loremflickr.com/400/400/pizza?lock=6092760944466925"],
  },
];
