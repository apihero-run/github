import { BaseGist, GistComment, GistCommit, GistSimple, Link, ApiHeroEndpoint } from "./@types";

/** 
* @see https://docs.github.com/rest/reference/gists#list-gists-for-the-authenticated-user


* List gists for the authenticated user
* Lists the authenticated user's gists or if called anonymously, this endpoint returns all public gists:
* @param [perPage=30] - The number of results per page (max 100).
* @param [since] - Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
* @param [page=1] - Page number of the results to fetch. 
*/
export const list: ApiHeroEndpoint<
  { perPage?: number; since?: string; page?: number },
  Array<BaseGist>,
  { Link: Link }
> = {
  id: "gists/list",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/gists#create-a-gist


* Create a gist
* Allows you to add a new gist with one or more files.
 * 
 * **Note:** Don't name your files "gistfile" with a numerical suffix. This is the format of the automatic naming scheme that Gist uses internally. 
*/
export const create: ApiHeroEndpoint<
  {
    gist: {
      /**
       * Names and content for the files that make up the gist
       *
       * @example
       * {
       *   "hello.rb": {
       *     "content": "puts \"Hello, World!\""
       *   }
       * }
       */
      files: Record<
        string,
        {
          /**
           * Content of the file
           */
          content: string;
        }
      >;
      public?: boolean | "true" | "false";

      /**
       * Description of the gist
       *
       * @example
       * "Example Ruby script"
       */
      description?: string;
    };
  },
  GistSimple,
  { Location: string }
> = {
  id: "gists/create",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/gists#list-public-gists


* List public gists
* List public gists sorted by most recently updated to least recently updated.
 * 
 * Note: With [pagination](https://docs.github.com/rest/overview/resources-in-the-rest-api#pagination), you can fetch up to 3000 gists. For example, you can fetch 100 pages with 30 gists per page or 30 pages with 100 gists per page.
* @param [perPage=30] - The number of results per page (max 100).
* @param [since] - Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
* @param [page=1] - Page number of the results to fetch. 
*/
export const listPublic: ApiHeroEndpoint<
  { perPage?: number; since?: string; page?: number },
  Array<BaseGist>,
  { Link: Link }
> = {
  id: "gists/list-public",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/gists#list-starred-gists


* List starred gists
* List the authenticated user's starred gists:
* @param [perPage=30] - The number of results per page (max 100).
* @param [since] - Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
* @param [page=1] - Page number of the results to fetch. 
*/
export const listStarred: ApiHeroEndpoint<
  { perPage?: number; since?: string; page?: number },
  Array<BaseGist>,
  { Link: Link }
> = {
  id: "gists/list-starred",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/gists#get-a-gist


* Get a gist
* @param gistId - The unique identifier of the gist. 
*/
export const getGists: ApiHeroEndpoint<{ gistId: string }, GistSimple> = {
  id: "gists/get",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/gists#delete-a-gist


* Delete a gist
* @param gistId - The unique identifier of the gist. 
*/
export const deleteGists: ApiHeroEndpoint<{ gistId: string }, void> = {
  id: "gists/delete",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/gists/#update-a-gist


* Update a gist
* Allows you to update or delete a gist file and rename gist files. Files from the previous version of the gist that aren't explicitly changed during an edit are unchanged.
* @param gistId - The unique identifier of the gist. 
*/
export const update: ApiHeroEndpoint<
  {
    gistId: string;
    gist: {
      /**
       * Names of files to be updated
       *
       * @example
       * {
       *   "hello.rb": {
       *     "content": "blah",
       *     "filename": "goodbye.rb"
       *   }
       * }
       */
      files?: Record<
        string,
        {
          /**
           * The new content of the file
           */
          content?: string;

          /**
           * The new filename for the file
           */
          filename?: string | null;
        }
      >;

      /**
       * Description of the gist
       *
       * @example
       * "Example Ruby script"
       */
      description?: string;
    };
  },
  GistSimple
> = {
  id: "gists/update",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/gists#check-if-a-gist-is-starred


* Check if a gist is starred
* @param gistId - The unique identifier of the gist. 
*/
export const checkIsStarred: ApiHeroEndpoint<{ gistId: string }, void> = {
  id: "gists/check-is-starred",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/gists#star-a-gist


* Star a gist
* Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/rest/overview/resources-in-the-rest-api#http-verbs)."
* @param gistId - The unique identifier of the gist. 
*/
export const star: ApiHeroEndpoint<{ gistId: string }, void> = {
  id: "gists/star",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/gists#unstar-a-gist


* Unstar a gist
* @param gistId - The unique identifier of the gist. 
*/
export const unstar: ApiHeroEndpoint<{ gistId: string }, void> = {
  id: "gists/unstar",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/gists#list-gist-forks


* List gist forks
* @param gistId - The unique identifier of the gist.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listForks: ApiHeroEndpoint<
  { gistId: string; perPage?: number; page?: number },
  Array<GistSimple>,
  { Link: Link }
> = {
  id: "gists/list-forks",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/gists#fork-a-gist


* Fork a gist
* **Note**: This was previously `/gists/:gist_id/fork`.
* @param gistId - The unique identifier of the gist. 
*/
export const fork: ApiHeroEndpoint<{ gistId: string }, BaseGist, { Location: string }> = {
  id: "gists/fork",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/gists#get-a-gist-revision


* Get a gist revision
* @param gistId - The unique identifier of the gist.
* @param sha  
*/
export const getRevision: ApiHeroEndpoint<{ gistId: string; sha: string }, GistSimple> = {
  id: "gists/get-revision",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/gists#list-gists-for-a-user


* List gists for a user
* Lists public gists for the specified user:
* @param username - The handle for the GitHub user account.
* @param [perPage=30] - The number of results per page (max 100).
* @param [since] - Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
* @param [page=1] - Page number of the results to fetch. 
*/
export const listForUser: ApiHeroEndpoint<
  { username: string; perPage?: number; since?: string; page?: number },
  Array<BaseGist>,
  { Link: Link }
> = {
  id: "gists/list-for-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/gists#list-gist-commits


* List gist commits
* @param gistId - The unique identifier of the gist.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listCommits: ApiHeroEndpoint<
  { gistId: string; perPage?: number; page?: number },
  Array<GistCommit>,
  { Link: string }
> = {
  id: "gists/list-commits",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/gists#list-gist-comments


* List gist comments
* @param gistId - The unique identifier of the gist.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listComments: ApiHeroEndpoint<
  { gistId: string; perPage?: number; page?: number },
  Array<GistComment>,
  { Link: Link }
> = {
  id: "gists/list-comments",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/gists#create-a-gist-comment


* Create a gist comment
* @param gistId - The unique identifier of the gist. 
*/
export const createComment: ApiHeroEndpoint<
  {
    gistId: string;
    comment: {
      /**
       * The comment text.
       *
       * @example
       * "Body of the attachment"
       */
      body: string;
    };
  },
  GistComment,
  { Location: string }
> = {
  id: "gists/create-comment",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/gists#get-a-gist-comment


* Get a gist comment
* @param gistId - The unique identifier of the gist.
* @param commentId - The unique identifier of the comment. 
*/
export const getComment: ApiHeroEndpoint<{ gistId: string; commentId: number }, GistComment> = {
  id: "gists/get-comment",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/gists#delete-a-gist-comment


* Delete a gist comment
* @param gistId - The unique identifier of the gist.
* @param commentId - The unique identifier of the comment. 
*/
export const deleteComment: ApiHeroEndpoint<{ gistId: string; commentId: number }, void> = {
  id: "gists/delete-comment",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/gists#update-a-gist-comment


* Update a gist comment
* @param gistId - The unique identifier of the gist.
* @param commentId - The unique identifier of the comment. 
*/
export const updateComment: ApiHeroEndpoint<
  {
    gistId: string;
    commentId: number;
    comment: {
      /**
       * The comment text.
       *
       * @example
       * "Body of the attachment"
       */
      body: string;
    };
  },
  GistComment
> = {
  id: "gists/update-comment",
  clientId: "github",
};
