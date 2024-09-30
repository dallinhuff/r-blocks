type Detail = {
  title: string;
  description: string;
};

type Section<T> = {
  title: string;
  description: string[];
  content: T[];
};

export const icf: Section<Detail> = {
  title: "ICF Solutions",
  description: [
    "R-Blocks is the ideal ICF solution for all commercial and residential construction projects. It meets all requirements for stay-in-place forms in IRC 608.4 and delivers lifetime advantages from solid, reinforced, insulated concrete walls.",
    "Whether you choose R-Blocks for foundation walls or a complete structure, you will save significant time and money during construction and have superior results.",
    "R-Blocks' cost is competitive with that of EPS foam molds. Yet, It offers much higher value from building faster, straighter, stronger, and more durable walls with significantly higher R-value and sound dampening, among other benefits.",
    "For example, most EPS blocks are poured at intervals of no more than 4 feet during installation. R-Blocks can be poured 10+ feet at a time. Besides saving significant labor and material costs, the higher and seamless pours eliminate “cold joints” in concrete walls, virtually eliminating the probability of holes and leaks.",
    "R-Blocks need far less bracing and setup time due to the superior foam density and rigidity supporting higher concrete pours. The benefits continue long after construction. Polyurethane molds do not break down over time, as EPS molds do, ensuring lifetime value.",
  ],
  content: [
    {
      title: "",
      description:
        "Every detail sets R-Blocks apart.<br>Our process is highly refined based on over 30 years of expertise in polyurethane ICF manufacturing.",
    },
    {
      title: "Thickness",
      description:
        "Our stay-in-place molds place 2.5 inches of dense polyurethane foam on the interior and exterior of solid, reinforced concrete walls to give you the highest R-value.",
    },
    {
      title: "Width options",
      description:
        "We offer 6, 8, and 10-inch mold widths to build foundation walls to complete exterior and interior structures.",
    },
    {
      title: "Flame resistance",
      description:
        "Unlike EPS, polyurethane foam does not melt when exposed to temperatures over 200 degrees.",
    },
    {
      title: "Rigidity",
      description:
        "Polyurethane is approximately 3x stronger in tension and compression when induced by bending stresses than EPS. This prevents blowouts when pouring concrete.",
    },
    {
      title: "More robust inserts",
      description:
        "Our molds use rigid plastic inserts to place rebars before pouring concrete. The inserts have superior pull strength to attach interior drywall or exterior products such as stucco, brick, stone, or foundation plaster.",
    },
  ],
};
