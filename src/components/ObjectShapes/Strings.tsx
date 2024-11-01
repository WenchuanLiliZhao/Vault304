export const Labels_BrainWave = {
  mathematics: "mathematics",
  philosophy: "philosophy",
  readingNotes: "reading nots"
} as const;

export const Labels_Person = {
  contributor: "contributor",
  historicalAuthor: "historical author"
} as const;

export const Labels_Design = {
  digitalCodex: "Digital Codex",
  uiuxDesign: "UI/UX Design",
  graphicDesign: "graphic design",
  illustration: "illustration"
} as const;

// You can then define Label type as a union of all values
export type Label = 
  | typeof Labels_BrainWave[keyof typeof Labels_BrainWave]
  | typeof Labels_Person[keyof typeof Labels_Person]
  | typeof Labels_Design[keyof typeof Labels_Design];
