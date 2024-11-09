import React from "react";
import { MDBlock } from "../Functions/Markdown";

interface contentMappingProps {
  content: (string | JSX.Element)[];
}

export const ContentMapping: React.FC<contentMappingProps> = ({ content }) => {
  return (
    <>
      {content.map((item, i: number) => (
        <React.Fragment key={`${item}${i}`}>
          {typeof item === "string" && <MDBlock>{item}</MDBlock>}
          {typeof item === "object" && item}
        </React.Fragment>
      ))}
    </>
  );
};