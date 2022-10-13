import { ApiHeroEndpoint } from "./@types";

/** 
* @see https://docs.github.com/rest/reference/markdown#render-a-markdown-document


* Render a Markdown document 
*/
export const render: ApiHeroEndpoint<
  {
    markdown: {
      /**
       * The rendering mode. Can be either `markdown` or `gfm`.
       *
       * @example
       * "markdown"
       */
      mode?: "markdown" | "gfm";

      /**
       * The Markdown text to render in HTML.
       */
      text: string;

      /**
       * The repository context to use when creating references in `gfm` mode.  For example, setting `context` to `octo-org/octo-repo` will change the text `#42` into an HTML link to issue 42 in the `octo-org/octo-repo` repository.
       */
      context?: string;
    };
  },
  string,
  { "Content-Type": string; "Content-Length": string; "X-CommonMarker-Version": string }
> = {
  id: "markdown/render",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/markdown#render-a-markdown-document-in-raw-mode


* Render a Markdown document in raw mode
* You must send Markdown as plain text (using a `Content-Type` header of `text/plain` or `text/x-markdown`) to this endpoint, rather than using JSON format. In raw mode, [GitHub Flavored Markdown](https://github.github.com/gfm/) is not supported and Markdown will be rendered in plain format like a README.md file. Markdown content must be 400 KB or less. 
*/
export const renderRaw: ApiHeroEndpoint<
  { raw?: string },
  string,
  { "X-CommonMarker-Version": string }
> = {
  id: "markdown/render-raw",
  clientId: "github",
  version: "1.1.5",
};
