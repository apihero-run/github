import { GitignoreTemplate, ApiHeroEndpoint } from "./@types";

/** 
* @see https://docs.github.com/rest/reference/gitignore#get-all-gitignore-templates


* Get all gitignore templates
* List all templates available to pass as an option when [creating a repository](https://docs.github.com/rest/reference/repos#create-a-repository-for-the-authenticated-user). 
*/
export const getAllTemplates: ApiHeroEndpoint<void, Array<string>> = {
  id: "gitignore/get-all-templates",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/gitignore#get-a-gitignore-template


* Get a gitignore template
* The API also allows fetching the source of a single template.
 * Use the raw [media type](https://docs.github.com/rest/overview/media-types/) to get the raw contents.
* @param name  
*/
export const getTemplate: ApiHeroEndpoint<{ name: string }, GitignoreTemplate> = {
  id: "gitignore/get-template",
  clientId: "github",
};
