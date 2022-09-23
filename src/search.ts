import {
  CodeSearchResultItem,
  CommitSearchResultItem,
  IssueSearchResultItem,
  LabelSearchResultItem,
  RepoSearchResultItem,
  TopicSearchResultItem,
  UserSearchResultItem,
  ApiHeroEndpoint,
} from "./@types";

/** 
* @see https://docs.github.com/rest/reference/search#search-code


* Search code
* Searches for query terms inside of a file. This method returns up to 100 results [per page](https://docs.github.com/rest/overview/resources-in-the-rest-api#pagination).
 * 
 * When searching for code, you can get text match metadata for the file **content** and file **path** fields when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://docs.github.com/rest/reference/search#text-match-metadata).
 * 
 * For example, if you want to find the definition of the `addClass` function inside [jQuery](https://github.com/jquery/jquery) repository, your query would look something like this:
 * 
 * `q=addClass+in:file+language:js+repo:jquery/jquery`
 * 
 * This query searches for the keyword `addClass` within a file's contents. The query limits the search to files where the language is JavaScript in the `jquery/jquery` repository.
 * 
 * #### Considerations for code search
 * 
 * Due to the complexity of searching code, there are a few restrictions on how searches are performed:
 * 
 * *   Only the _default branch_ is considered. In most cases, this will be the `master` branch.
 * *   Only files smaller than 384 KB are searchable.
 * *   You must always include at least one search term when searching source code. For example, searching for [`language:go`](https://github.com/search?utf8=%E2%9C%93&q=language%3Ago&type=Code) is not valid, while [`amazing
 * language:go`](https://github.com/search?utf8=%E2%9C%93&q=amazing+language%3Ago&type=Code) is.
* @param q - The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as the web interface for GitHub. To learn more about the format of the query, see [Constructing a search query](https://docs.github.com/rest/reference/search#constructing-a-search-query). See "[Searching code](https://docs.github.com/search-github/searching-on-github/searching-code)" for a detailed list of qualifiers.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch.
* @param [sort] - Sorts the results of your query. Can only be `indexed`, which indicates how recently a file has been indexed by the GitHub search infrastructure. Default: [best match](https://docs.github.com/rest/reference/search#ranking-search-results)
* @param [order] - Determines whether the first search result returned is the highest number of matches (`desc`) or lowest number of matches (`asc`). This parameter is ignored unless you provide `sort`. 
*/
export const code: ApiHeroEndpoint<
  { q: string; perPage?: number; page?: number; sort?: "indexed"; order?: "desc" | "asc" },
  {
    items: Array<CodeSearchResultItem>;
    total_count: number;
    incomplete_results: boolean;
  }
> = {
  id: "search/code",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/search#search-users


* Search users
* Find users via various criteria. This method returns up to 100 results [per page](https://docs.github.com/rest/overview/resources-in-the-rest-api#pagination).
 * 
 * When searching for users, you can get text match metadata for the issue **login**, **email**, and **name** fields when you pass the `text-match` media type. For more details about highlighting search results, see [Text match metadata](https://docs.github.com/rest/reference/search#text-match-metadata). For more details about how to receive highlighted search results, see [Text match metadata](https://docs.github.com/rest/reference/search#text-match-metadata).
 * 
 * For example, if you're looking for a list of popular users, you might try this query:
 * 
 * `q=tom+repos:%3E42+followers:%3E1000`
 * 
 * This query searches for users with the name `tom`. The results are restricted to users with more than 42 repositories and over 1,000 followers.
* @param q - The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as the web interface for GitHub. To learn more about the format of the query, see [Constructing a search query](https://docs.github.com/rest/reference/search#constructing-a-search-query). See "[Searching users](https://docs.github.com/search-github/searching-on-github/searching-users)" for a detailed list of qualifiers.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch.
* @param [order] - Determines whether the first search result returned is the highest number of matches (`desc`) or lowest number of matches (`asc`). This parameter is ignored unless you provide `sort`.
* @param [sort] - Sorts the results of your query by number of `followers` or `repositories`, or when the person `joined` GitHub. Default: [best match](https://docs.github.com/rest/reference/search#ranking-search-results) 
*/
export const users: ApiHeroEndpoint<
  {
    q: string;
    perPage?: number;
    page?: number;
    order?: "desc" | "asc";
    sort?: "followers" | "repositories" | "joined";
  },
  {
    items: Array<UserSearchResultItem>;
    total_count: number;
    incomplete_results: boolean;
  }
> = {
  id: "search/users",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/search#search-issues-and-pull-requests


* Search issues and pull requests
* Find issues by state and keyword. This method returns up to 100 results [per page](https://docs.github.com/rest/overview/resources-in-the-rest-api#pagination).
 * 
 * When searching for issues, you can get text match metadata for the issue **title**, issue **body**, and issue **comment body** fields when you pass the `text-match` media type. For more details about how to receive highlighted
 * search results, see [Text match metadata](https://docs.github.com/rest/reference/search#text-match-metadata).
 * 
 * For example, if you want to find the oldest unresolved Python bugs on Windows. Your query might look something like this.
 * 
 * `q=windows+label:bug+language:python+state:open&sort=created&order=asc`
 * 
 * This query searches for the keyword `windows`, within any open issue that is labeled as `bug`. The search runs across repositories whose primary language is Python. The results are sorted by creation date in ascending order, which means the oldest issues appear first in the search results.
 * 
 * **Note:** For [user-to-server](https://docs.github.com/developers/apps/identifying-and-authorizing-users-for-github-apps#user-to-server-requests) GitHub App requests, you can't retrieve a combination of issues and pull requests in a single query. Requests that don't include the `is:issue` or `is:pull-request` qualifier will receive an HTTP `422 Unprocessable Entity` response. To get results for both issues and pull requests, you must send separate queries for issues and pull requests. For more information about the `is` qualifier, see "[Searching only issues or pull requests](https://docs.github.com/github/searching-for-information-on-github/searching-issues-and-pull-requests#search-only-issues-or-pull-requests)."
* @param q - The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as the web interface for GitHub. To learn more about the format of the query, see [Constructing a search query](https://docs.github.com/rest/reference/search#constructing-a-search-query). See "[Searching issues and pull requests](https://docs.github.com/search-github/searching-on-github/searching-issues-and-pull-requests)" for a detailed list of qualifiers.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch.
* @param [order] - Determines whether the first search result returned is the highest number of matches (`desc`) or lowest number of matches (`asc`). This parameter is ignored unless you provide `sort`.
* @param [sort] - Sorts the results of your query by the number of `comments`, `reactions`, `reactions-+1`, `reactions--1`, `reactions-smile`, `reactions-thinking_face`, `reactions-heart`, `reactions-tada`, or `interactions`. You can also sort results by how recently the items were `created` or `updated`, Default: [best match](https://docs.github.com/rest/reference/search#ranking-search-results) 
*/
export const issuesAndPullRequests: ApiHeroEndpoint<
  {
    q: string;
    perPage?: number;
    page?: number;
    order?: "desc" | "asc";
    sort?:
      | "comments"
      | "reactions"
      | "reactions-+1"
      | "reactions--1"
      | "reactions-smile"
      | "reactions-thinking_face"
      | "reactions-heart"
      | "reactions-tada"
      | "interactions"
      | "created"
      | "updated";
  },
  {
    items: Array<IssueSearchResultItem>;
    total_count: number;
    incomplete_results: boolean;
  }
> = {
  id: "search/issues-and-pull-requests",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/search#search-labels


* Search labels
* Find labels in a repository with names or descriptions that match search keywords. Returns up to 100 results [per page](https://docs.github.com/rest/overview/resources-in-the-rest-api#pagination).
 * 
 * When searching for labels, you can get text match metadata for the label **name** and **description** fields when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://docs.github.com/rest/reference/search#text-match-metadata).
 * 
 * For example, if you want to find labels in the `linguist` repository that match `bug`, `defect`, or `enhancement`. Your query might look like this:
 * 
 * `q=bug+defect+enhancement&repository_id=64778136`
 * 
 * The labels that best match the query appear first in the search results.
* @param q - The search keywords. This endpoint does not accept qualifiers in the query. To learn more about the format of the query, see [Constructing a search query](https://docs.github.com/rest/reference/search#constructing-a-search-query).
* @param repositoryId - The id of the repository.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch.
* @param [order] - Determines whether the first search result returned is the highest number of matches (`desc`) or lowest number of matches (`asc`). This parameter is ignored unless you provide `sort`.
* @param [sort] - Sorts the results of your query by when the label was `created` or `updated`. Default: [best match](https://docs.github.com/rest/reference/search#ranking-search-results) 
*/
export const labels: ApiHeroEndpoint<
  {
    q: string;
    repositoryId: number;
    perPage?: number;
    page?: number;
    order?: "desc" | "asc";
    sort?: "created" | "updated";
  },
  {
    items: Array<LabelSearchResultItem>;
    total_count: number;
    incomplete_results: boolean;
  }
> = {
  id: "search/labels",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/search#search-topics


* Search topics
* Find topics via various criteria. Results are sorted by best match. This method returns up to 100 results [per page](https://docs.github.com/rest/overview/resources-in-the-rest-api#pagination). See "[Searching topics](https://docs.github.com/articles/searching-topics/)" for a detailed list of qualifiers.
 * 
 * When searching for topics, you can get text match metadata for the topic's **short\_description**, **description**, **name**, or **display\_name** field when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://docs.github.com/rest/reference/search#text-match-metadata).
 * 
 * For example, if you want to search for topics related to Ruby that are featured on https://github.com/topics. Your query might look like this:
 * 
 * `q=ruby+is:featured`
 * 
 * This query searches for topics with the keyword `ruby` and limits the results to find only topics that are featured. The topics that are the best match for the query appear first in the search results.
* @param q - The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as the web interface for GitHub. To learn more about the format of the query, see [Constructing a search query](https://docs.github.com/rest/reference/search#constructing-a-search-query).
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const topics: ApiHeroEndpoint<
  { q: string; perPage?: number; page?: number },
  {
    items: Array<TopicSearchResultItem>;
    total_count: number;
    incomplete_results: boolean;
  }
> = {
  id: "search/topics",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/search#search-commits


* Search commits
* Find commits via various criteria on the default branch (usually `master`). This method returns up to 100 results [per page](https://docs.github.com/rest/overview/resources-in-the-rest-api#pagination).
 * 
 * When searching for commits, you can get text match metadata for the **message** field when you provide the `text-match` media type. For more details about how to receive highlighted search results, see [Text match
 * metadata](https://docs.github.com/rest/reference/search#text-match-metadata).
 * 
 * For example, if you want to find commits related to CSS in the [octocat/Spoon-Knife](https://github.com/octocat/Spoon-Knife) repository. Your query would look something like this:
 * 
 * `q=repo:octocat/Spoon-Knife+css`
* @param q - The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as the web interface for GitHub. To learn more about the format of the query, see [Constructing a search query](https://docs.github.com/rest/reference/search#constructing-a-search-query). See "[Searching commits](https://docs.github.com/search-github/searching-on-github/searching-commits)" for a detailed list of qualifiers.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch.
* @param [order] - Determines whether the first search result returned is the highest number of matches (`desc`) or lowest number of matches (`asc`). This parameter is ignored unless you provide `sort`.
* @param [sort] - Sorts the results of your query by `author-date` or `committer-date`. Default: [best match](https://docs.github.com/rest/reference/search#ranking-search-results) 
*/
export const commits: ApiHeroEndpoint<
  {
    q: string;
    perPage?: number;
    page?: number;
    order?: "desc" | "asc";
    sort?: "author-date" | "committer-date";
  },
  {
    items: Array<CommitSearchResultItem>;
    total_count: number;
    incomplete_results: boolean;
  }
> = {
  id: "search/commits",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/search#search-repositories


* Search repositories
* Find repositories via various criteria. This method returns up to 100 results [per page](https://docs.github.com/rest/overview/resources-in-the-rest-api#pagination).
 * 
 * When searching for repositories, you can get text match metadata for the **name** and **description** fields when you pass the `text-match` media type. For more details about how to receive highlighted search results, see [Text match metadata](https://docs.github.com/rest/reference/search#text-match-metadata).
 * 
 * For example, if you want to search for popular Tetris repositories written in assembly code, your query might look like this:
 * 
 * `q=tetris+language:assembly&sort=stars&order=desc`
 * 
 * This query searches for repositories with the word `tetris` in the name, the description, or the README. The results are limited to repositories where the primary language is assembly. The results are sorted by stars in descending order, so that the most popular repositories appear first in the search results.
* @param q - The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as the web interface for GitHub. To learn more about the format of the query, see [Constructing a search query](https://docs.github.com/rest/reference/search#constructing-a-search-query). See "[Searching for repositories](https://docs.github.com/articles/searching-for-repositories/)" for a detailed list of qualifiers.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch.
* @param [order] - Determines whether the first search result returned is the highest number of matches (`desc`) or lowest number of matches (`asc`). This parameter is ignored unless you provide `sort`.
* @param [sort] - Sorts the results of your query by number of `stars`, `forks`, or `help-wanted-issues` or how recently the items were `updated`. Default: [best match](https://docs.github.com/rest/reference/search#ranking-search-results) 
*/
export const repos: ApiHeroEndpoint<
  {
    q: string;
    perPage?: number;
    page?: number;
    order?: "desc" | "asc";
    sort?: "stars" | "forks" | "help-wanted-issues" | "updated";
  },
  {
    items: Array<RepoSearchResultItem>;
    total_count: number;
    incomplete_results: boolean;
  }
> = {
  id: "search/repos",
  clientId: "github",
};
