type Quote = {
  quote: [lead: string, emphasis: string, follow: string];
  image: string;
  attribution: [name: string, title: string];
};

export const quotes: Quote[] = [
  {
    quote: [
      '"Over the 23 years I have been practicing as a structural engineer, I have designed many structures using ICF forms. R-Blocks and its polyurethane foam mold have the highest R-value, fire resistance, and longevity. I recommend it for any commercial or residential project, knowing that',
      "it’s the best product on the market",
      '."',
    ],
    image: "/img/Adam_Huff.png",
    attribution: ["Adam Huff, S.E.", "Licenced Structural Engineer"],
  },
  {
    quote: [
      "\"As a contractor, R-Blocks' benefits include happier customers, straighter walls, and getting jobs done faster.",
      "This has been a great product",
      '."',
    ],
    image: "/img/Jason_Mair.png",
    attribution: ["Jason Mair", "Contractor, BTM Concrete"],
  },
];
