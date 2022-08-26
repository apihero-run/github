import { CodeOfConduct, ApiHeroEndpoint } from "./@types";

/** 
* @see https://docs.github.com/rest/reference/codes-of-conduct#get-all-codes-of-conduct


* Get all codes of conduct 
*/
export const getAllCodesOfConduct: ApiHeroEndpoint<void, Array<CodeOfConduct>> = {
  id: "codes-of-conduct/get-all-codes-of-conduct",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/codes-of-conduct#get-a-code-of-conduct


* Get a code of conduct
* @param key  
*/
export const getConductCode: ApiHeroEndpoint<{ key: string }, CodeOfConduct> = {
  id: "codes-of-conduct/get-conduct-code",
  clientId: "github",
};
