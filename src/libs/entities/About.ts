import { StringWithoutHtml } from "~/libs/parser";

export interface About {
  fields: {
    title: string;
    summary: string;
    conceptTitle: string;
    concept: string;
    historyTitle: string;
    history: string;
    createdAt: string;
    updatedAt: string;
    og: {
      title: string;
      description: StringWithoutHtml;
    };
  };
}
