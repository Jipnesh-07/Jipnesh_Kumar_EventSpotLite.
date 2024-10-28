import {
  discordBlack,
  facebook,
 
  instagram,

  
  telegram,
  twitter,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Events",
    url: "#",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "FAQs",
    url: "#faqs",
  },
  {
    id: "3",
    title: "Contact",
    url: "#contact",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];




export const events = [
  {
    id: "1",
    name: "Downtown Music Fest",
    description:
      "Experience an exciting evening with live performances from local bands and artists, showcasing a variety of musical genres and talent. Perfect for music enthusiasts and those looking to enjoy a lively atmosphere.",
    date: "October 29, 2024",
    location: "Downtown Park",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    imageUrl: "./assets/hero/music.jpg",
  },
  {
    id: "2",
    name: "Art Walk",
    description:
      "Join us for a cultural journey through the city’s art district, where you can explore local galleries, admire unique art pieces, and meet talented artists in their studios. A great event for art lovers and the creatively curious.",
    date: "November 3, 2024",
    location: "City Art District",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    imageUrl: "../src/assets/hero/art.jpg",
  },
  {
    id: "3",
    name: "Food Truck Fiesta",
    description:
      "Indulge in the city’s finest street food as the best food trucks gather in one place, offering a mouth-watering variety of cuisines. Perfect for foodies who love exploring diverse flavors.",
    date: "November 5, 2024",
    location: "Riverfront Plaza",
    backgroundUrl: "../src/assets/benefits/card-3.svg",
    imageUrl: "../src/assets/hero/foodtruck.jpg",
  },
  {
    id: "4",
    name: "Film Under the Stars",
    description:
      "Enjoy a night of classic cinema under the open sky. Bring your blankets and relax as we screen some of the most beloved films in an outdoor setting.",
    date: "November 8, 2024",
    location: "Greenway Amphitheater",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    imageUrl: "../src/assets/hero/film.jpg",
  },
  {
    id: "5",
    name: "Craft Beer Festival",
    description:
      "Sample a wide selection of craft beers from local breweries, featuring seasonal specialties and unique brews. This event is a must for beer aficionados and socializers.",
    date: "November 12, 2024",
    location: "Market Square",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    imageUrl: "../src/assets/hero/beer.jpg",
  },
  {
    id: "6",
    name: "Holiday Makers Market",
    description:
      "Kick off the holiday season by shopping for handmade gifts and crafts from local artisans. Discover unique items and support the local community.",
    date: "November 15, 2024",
    location: "Central Marketplace",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    imageUrl: "../src/assets/hero/market.jpg",
  },
  {
    id: "7",
    name: "Comedy Night",
    description:
      "Laugh the night away with stand-up performances from some of the funniest comedians in the region. A perfect night out for those who love humor and a good time.",
    date: "November 20, 2024",
    location: "Comedy Club",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    imageUrl: "../src/assets/hero/comedynight.jpg",
  },
  {
    id: "8",
    name: "Yoga in the Park",
    description:
      "Refresh your mind and body with a calming yoga session amidst nature. Suitable for all skill levels, this event is designed for relaxation and self-care.",
    date: "November 25, 2024",
    location: "Willow Park",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    imageUrl: "../src/assets/hero/yoga.jpg",
  },
  {
    id: "9",
    name: "New Year's Countdown",
    description:
      "Join us for an unforgettable night as we ring in the New Year together with live music, food, and a spectacular midnight fireworks display.",
    date: "December 31, 2024",
    location: "City Plaza",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    imageUrl: "../src/assets/hero/newyear.jpg",
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
