type Content = [lead: string, emphasis: string, follow: string];

type Advantage = {
  title: string;
  description: Content;
};

type Section<T> = {
  title: string;
  description: Content[];
  content: T[];
};

export const advantages: Section<Advantage> = {
  title: "R-value, Rigidity, Ruggedness",
  description: [
    [
      "R-Blocks meet and exceed all IBC and IRC requirements for building materials.",
      "Our polyurethane ICF blocks deliver rapid payoff",
      "compared to traditional stick-frame or concrete walls from ICF blocks made with expanded polystyrene (EPS).",
    ],
    [
      "R-Blocks' advantages over EPS rapidly accelerate",
      "during construction and last long after project completion.",
      "Our durable polyurethane ICF molds deliver quantifiable benefits from:",
    ],
  ],
  content: [
    {
      title: "R-value",
      description: [
        "The insulation value of solid, reinforced concrete walls with R-Blocks is R-80",
        "nearly 6 times",
        "that of stick-framed insulated walls and more than double that of concrete walls made with EPS blocks.",
      ],
    },
    {
      title: "Rigidity",
      description: [
        "Polyurethane R-Blocks' greater thickness and density make them easier to install than EPS blocks. Minimum bracing lets you pour walls",
        "higher, straighter, and seamlessly",
        "without the risks of blowouts associated with EPS molds.",
      ],
    },
    {
      title: "Ruggedness",
      description: [
        "R-Blocks are built to last and are",
        "significantly more resistant",
        "to water, fire, bugs, and other environmental conditions. Our high-grade plastic inserts will not split or crack when attaching interior drywall or exterior materials.",
      ],
    },
  ],
};
