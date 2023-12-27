import { h } from "preact";
import { Meetup } from "~/libs/entities/Meetup";
import { Post } from "~/libs/entities/Post";

// https://vike.dev/pageContext#typescript
declare global {
  export namespace Vike {
    export interface PageContext {
      Page: (_: PageProps) => h.JSX.Element;
      pageProps?: PageProps;
      data?: {
        title?: string;
        description?: string;
        ogImageUrl?: string;
        isPrivate?: boolean; // ページを限定公開にする際に使用してください。
        postList?: Post[];
        post?: Post;
        meetupList?: Meetup[];
        recentMeetup?: Meetup;
      };
      abortReason?: string;
      abortStatusCode?: number;
      is404?: boolean;
    }
  }
}

export type PageProps<P extends Record<string, any> = Record<string, any>> =
  P & {};
