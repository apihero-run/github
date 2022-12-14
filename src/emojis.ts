import { ApiHeroEndpoint } from "./@types";

/** 
* @see https://docs.github.com/rest/reference/emojis#get-emojis


* Get emojis
* Lists all the emojis available to use on GitHub. 
*/
export const getEmojis: ApiHeroEndpoint<void, Record<string, string>> = {
  id: "emojis/get",
  clientId: "github",
  version: "1.1.5",
};
