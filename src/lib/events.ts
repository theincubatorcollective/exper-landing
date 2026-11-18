export type EventCard = {
  slug: string;
  title: string;
  kicker: string;
  tone: "red" | "blue" | "amber";
  day: string; // e.g. "Sat 14 Nov"
  time: string; // e.g. "19:00 GMT"
  venue: string;
  genre: string;
  price: string; // e.g. "£28.00"
  fee: string; // e.g. "£2.80"
};

export const events: EventCard[] = [
  {
    slug: "afterimage",
    title: "Afterimage",
    kicker: "A night in motion",
    tone: "red",
    day: "Sat 5 Dec",
    time: "19:00 GMT",
    venue: "The Relay Hall, London",
    genre: "Music · Electronic",
    price: "£28.00",
    fee: "£2.80",
  },
  {
    slug: "soft-signal",
    title: "Soft Signal",
    kicker: "Sound without edges",
    tone: "blue",
    day: "Sun 6 Dec",
    time: "18:00 GMT",
    venue: "Static Room, London",
    genre: "Music · Live",
    price: "£18.00",
    fee: "£1.80",
  },
  {
    slug: "low-light-assembly",
    title: "Low Light Assembly",
    kicker: "Closer to the sound",
    tone: "amber",
    day: "Fri 11 Dec",
    time: "20:00 GMT",
    venue: "Copper House, London",
    genre: "Music · Jazz",
    price: "£24.00",
    fee: "£2.40",
  },
];

export const categories = [
  "All experiences",
  "Music",
  "Art & culture",
  "Food & drink",
  "Workshops",
  "After dark",
];
