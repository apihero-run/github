import { License, LicenseContent, LicenseSimple, ApiHeroEndpoint } from "./@types";

/** 
* @see https://docs.github.com/rest/reference/licenses#get-all-commonly-used-licenses


* Get all commonly used licenses
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch.
* @param [featured]  
*/
export const getAllCommonlyUsed: ApiHeroEndpoint<
  { perPage?: number; page?: number; featured?: boolean },
  Array<LicenseSimple>
> = {
  id: "licenses/get-all-commonly-used",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/licenses#get-a-license


* Get a license
* @param license  
*/
export const getLicense: ApiHeroEndpoint<{ license: string }, License> = {
  id: "licenses/get",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/licenses/#get-the-license-for-a-repository


* Get the license for a repository
* This method returns the contents of the repository's license file, if one is detected.
 * 
 * Similar to [Get repository content](https://docs.github.com/rest/reference/repos#get-repository-content), this method also supports [custom media types](https://docs.github.com/rest/overview/media-types) for retrieving the raw license content or rendered license HTML.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const getForRepo: ApiHeroEndpoint<{ owner: string; repo: string }, LicenseContent> = {
  id: "licenses/get-for-repo",
  clientId: "github",
};
