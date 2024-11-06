type Feature = { title: string; icon: string; description: string };

type Section<T> = {
  title: string;
  description: string;
  content: T[];
};

export const features: Section<Feature> = {
  title: "The R-Blocks Difference",
  description: "The advantages of polyurethane R-Blocks are immediate and long-term. Compared to EPS foam molds, you get far greater:",
  content: [
    {
      title: "Durability",
      icon: `<svg class="flex-shrink-0 mt-2 size-8 text-[#ff0]" xmlns="http://www.w3.org/2000/svg" height="10" width="10" viewBox="0 0 512 512"><path fill="#f0f000" d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8l0 378.1C394 378 431.1 230.1 432 141.4L256 66.8s0 0 0 0z"/></svg>`,
      description: `R-Blocks’ solid, reinforced concrete walls are superiorly resilient to seismic activity
                    and can withstand sheer-force winds of 160+ mph.
                    Also, the high-density polyurethane foam is significantly more resistant to water and insects.`,
    },
    {
      title: "Sound abatement",
      icon: `<svg class="flex-shrink-0 mt-2 size-8 text-[#ff0]" xmlns="http://www.w3.org/2000/svg" height="10" width="11.25" viewBox="0 0 576 512"><path fill="#f0f000" d="M301.1 34.8C312.6 40 320 51.4 320 64l0 384c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352 64 352c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l67.8 0L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"/></svg>`,
      description: `Our stay-in-place polyurethane forms have vastly better sound dampening with a rating above STC 50.
                    You can save time and money by not installing liner panels to reach low sound transmission levels.`,
    },
    {
      title: "Easy installation",
      icon: `<svg class="flex-shrink-0 mt-2 size-8 text-[#ff0]" xmlns="http://www.w3.org/2000/svg" height="10" width="8.75" viewBox="0 0 448 512"><path fill="#f0f000" d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288l111.5 0L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7l-111.5 0L349.4 44.6z"/></svg>`,
      description: `R-Blocks' density and rigidity produce straighter walls (no bows or bulging).
                    They also do not require a covering during installation, saving time and money as
                    foundations and walls with R-Blocks can remain exposed during installation.`,
    },
    {
      title: "Precision manufacturing",
      icon: `<svg class="flex-shrink-0 mt-2 size-8 text-[#ff0]" xmlns="http://www.w3.org/2000/svg" height="10" width="11.25" viewBox="0 0 576 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#f0f000" d="M400 0L176 0c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8L24 64C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9L192 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l192 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-26.1 0C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24L446.4 64c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112l84.4 0c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6l84.4 0c-5.1 66.3-31.1 111.2-63 142.3z"/></svg>`,
      description: `Our process combines extremely tight molding and exact temperatures to create dense polyurethane foam.
                    By contrast, the density of EPS blocks is far lower because steam is injected into the molds to fuse the EPS beads.`,
    },
    {
      title: "Flame resistance",
      icon: `<svg class="flex-shrink-0 mt-2 size-8 text-[#ff0]" xmlns="http://www.w3.org/2000/svg" height="10" width="7.5" viewBox="0 0 384 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#f0f000" d="M153.6 29.9l16-21.3C173.6 3.2 180 0 186.7 0C198.4 0 208 9.6 208 21.3V43.5c0 13.1 5.4 25.7 14.9 34.7L307.6 159C356.4 205.6 384 270.2 384 337.7C384 434 306 512 209.7 512H192C86 512 0 426 0 320v-3.8c0-48.8 19.4-95.6 53.9-130.1l3.5-3.5c4.2-4.2 10-6.6 16-6.6C85.9 176 96 186.1 96 198.6V288c0 35.3 28.7 64 64 64s64-28.7 64-64v-3.9c0-18-7.2-35.3-19.9-48l-38.6-38.6c-24-24-37.5-56.7-37.5-90.7c0-27.7 9-54.8 25.6-76.9z"/></svg>`,
      description: `Polyurethane R-Blocks have the highest fire protection rating (Class A) and a smoke index below 450,
                    which allows their use in all applications, including interior or exterior walls.
                    Excellent flame resistance saves time and money since you don’t need to cover surfaces not seen by the public,
                    such as elevator shafts.`,
    },
  ],
};