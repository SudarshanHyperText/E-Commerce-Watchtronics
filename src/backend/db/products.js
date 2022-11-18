import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Titan",
    price: "139",
    actualPrice: "199",
    category: "analog",
    info: "Titan Karishma Analog Blue Dial Mens Watch-NL1774SM01/NP1774SM01",
    warranty: "yes",
    stock: 3,
    stars: 4,
    url: "https://m.media-amazon.com/images/I/81BDpSIwu3L._AC_UL480_FMwebp_QL65_.jpg",
    description:
      "A mechanical watch uses a clockwork mechanism to measure the passage of time. It is a battery-less watch that is driven by a mainspring, which must be wound periodically.",
  },
  {
    _id: uuid(),
    title: "Fastrack",
    price: "79",
    actualPrice: "109",
    category: "analog",
    info: "Fastrack Casual Analog Silver Dial Mens Watch-NL3114PP02/NP3114PP02",
    warranty: "yes",
    stock: 11,
    stars: 3.5,
    url: "https://rukminim1.flixcart.com/image/580/696/l3es13k0/watch/e/l/0/1-eh-226-olive-eddy-hager-men-original-imagejcvphzytqpu.jpeg?q=50",
    description:
      "An automatic watch, or a self-winding watch, is made up of mechanically moving parts and shares similar working principles that a mechanical caliber does but adds a spinning rotor that winds the mainspring using the natural motions of the wearer’s wrist.",
  },
  {
    _id: uuid(),
    title: "boAt",
    price: "119",
    actualPrice: "169",
    category: "digital",
    info: "boAt Wave Call Smart Watch, Smart Talk with Advanced Dedicated Bluetooth Calling Chip",
    warranty: "No",
    stock: 0,
    stars: 4.5,
    url: "https://m.media-amazon.com/images/I/71A+muc-1zL._AC_UL480_FMwebp_QL65_.jpg",
    description:
      "A quartz watch uses an electronic circuit that is regulated by a quartz crystal to keep time. A crystal under the circuit creates a signal with a precise frequency, which results in an accuracy of 15-20 seconds per month.",
  },
  {
    _id: uuid(),
    title: "Sports",
    price: "199",
    actualPrice: "219",
    category: "digital",
    info: "Sports Analog Digital Sports Black Dial Multi Functional Mens Boys Watch -SK1155",
    warranty: "yes",
    stock: 7,
    stars: 4,
    url: "https://m.media-amazon.com/images/I/61fyBGuO18L._AC_UL480_FMwebp_QL65_.jpg",
    description:
      "Solar-powered watches are, in broad terms, quartz watches due to employing quartz movements. However, the underlying difference between a solar and quartz watch is that the battery in a solar watch energizes itself repeatedly from light, natural or artificial.",
  },
  {
    _id: uuid(),
    title: "Fastrack",
    price: "129",
    actualPrice: "349",
    category: "analog",
    info: "Fastrack Analog Dial Womens Watch-6270WM01",
    warranty: "yes",
    stock: 0,
    stars: 4.5,
    url: "https://m.media-amazon.com/images/I/71+c1XKHg8L._AC_UL480_FMwebp_QL65_.jpg",
    description:
      "A unique type of watch that employs the best merits of automatic and quartz calibers is Seiko’s proprietary Spring Drive movement. ",
  },

  {
    _id: uuid(),
    title: "boAt",
    price: "189",
    actualPrice: "249",
    category: "analog",
    info: "boAt Analog Digital Waterproof Fashion Sports Watch",
    warranty: "yes",
    stock: 5,
    stars: 3.5,
    url: "https://rukminim1.flixcart.com/image/580/696/kuwzssw0/watch/b/3/d/1-ls2978-limestone-men-original-imag7xhmgh9zyr6z.jpeg?q=50",
    description:
      "An analog is a traditional clock face with an hour hand, a minute hand, and sometimes a second hand and a date window. Generally, an analog watch doesn’t have any other features and suits mostly formal attire.",
  },
  {
    _id: uuid(),
    title: "Sports",
    price: "99",
    actualPrice: "149",
    category: "analog",
    info: "Sports Retro Classic Small Digital Black Dial Mens and Womens Sports Watch",
    warranty: "yes",
    stock: 0,
    stars: 4,
    url: "https://rukminim1.flixcart.com/image/580/696/jxc5a4w0/watch/q/z/h/mf13-timex-original-imafhrechsb6xwnv.jpeg?q=50",
    description:
      "Chronograph watches are among the most popular types of watches, mainly because of the stylish dial design that adds asymmetrically placed subdials.",
  },
];
