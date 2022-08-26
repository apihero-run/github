import { ApiOverview, Root, ApiHeroEndpoint } from "./@types";

/** 
* @see https://docs.github.com/rest/overview/resources-in-the-rest-api#root-endpoint


* GitHub API Root
* Get Hypermedia links to resources accessible in GitHub's REST API 
*/
export const root: ApiHeroEndpoint<void, Root> = {
  id: "meta/root",
  clientId: "github",
};

/** 


* Get the Zen of GitHub
* Get a random sentence from the Zen of GitHub 
*/
export const getZen: ApiHeroEndpoint<void, string> = {
  id: "meta/get-zen",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/meta#get-github-meta-information


* Get GitHub meta information
* Returns meta information about GitHub, including a list of GitHub's IP addresses. For more information, see "[About GitHub's IP addresses](https://docs.github.com/articles/about-github-s-ip-addresses/)."
 * 
 * **Note:** The IP addresses shown in the documentation's response are only example values. You must always query the API directly to get the latest list of IP addresses. 
*/
export const getMeta: ApiHeroEndpoint<void, ApiOverview> = {
  id: "meta/get",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/meta#get-octocat


* Get Octocat
* Get the octocat as ASCII art
* @param [s] - The words to show in Octocat's speech bubble 
*/
export const getOctocat: ApiHeroEndpoint<{ s?: string }, string> = {
  id: "meta/get-octocat",
  clientId: "github",
};
