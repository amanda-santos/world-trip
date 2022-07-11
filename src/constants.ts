export type TravelType = {
  name: string;
  imageSrc: string;
};

export const TRAVEL_TYPES: TravelType[] = [
  {
    name: "vida noturna",
    imageSrc: "/assets/travel-types/cocktail.svg",
  },
  {
    name: "praia",
    imageSrc: "/assets/travel-types/surf.svg",
  },
  {
    name: "moderno",
    imageSrc: "/assets/travel-types/building.svg",
  },
  {
    name: "clássico",
    imageSrc: "/assets/travel-types/museum.svg",
  },
  {
    name: "e mais...",
    imageSrc: "/assets/travel-types/earth.svg",
  },
];
