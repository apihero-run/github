import { InteractionLimit, InteractionLimitResponse, ApiHeroEndpoint } from "./@types";

/** 
* @see https://docs.github.com/rest/reference/interactions#get-interaction-restrictions-for-your-public-repositories


* Get interaction restrictions for your public repositories
* Shows which type of GitHub user can interact with your public repositories and when the restriction expires. 
*/
export const getRestrictionsForAuthenticatedUser: ApiHeroEndpoint<void, InteractionLimitResponse> =
  {
    id: "interactions/get-restrictions-for-authenticated-user",
    clientId: "github",
  };

/** 
* @see https://docs.github.com/rest/reference/interactions#set-interaction-restrictions-for-your-public-repositories


* Set interaction restrictions for your public repositories
* Temporarily restricts which type of GitHub user can interact with your public repositories. Setting the interaction limit at the user level will overwrite any interaction limits that are set for individual repositories owned by the user. 
*/
export const setRestrictionsForAuthenticatedUser: ApiHeroEndpoint<
  { user: InteractionLimit },
  InteractionLimitResponse
> = {
  id: "interactions/set-restrictions-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/interactions#remove-interaction-restrictions-from-your-public-repositories


* Remove interaction restrictions from your public repositories
* Removes any interaction restrictions from your public repositories. 
*/
export const removeRestrictionsForAuthenticatedUser: ApiHeroEndpoint<void, void> = {
  id: "interactions/remove-restrictions-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/interactions#get-interaction-restrictions-for-an-organization


* Get interaction restrictions for an organization
* Shows which type of GitHub user can interact with this organization and when the restriction expires. If there is no restrictions, you will see an empty response.
* @param org - The organization name. The name is not case sensitive. 
*/
export const getRestrictionsForOrg: ApiHeroEndpoint<{ org: string }, InteractionLimitResponse> = {
  id: "interactions/get-restrictions-for-org",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/interactions#set-interaction-restrictions-for-an-organization


* Set interaction restrictions for an organization
* Temporarily restricts interactions to a certain type of GitHub user in any public repository in the given organization. You must be an organization owner to set these restrictions. Setting the interaction limit at the organization level will overwrite any interaction limits that are set for individual repositories owned by the organization.
* @param org - The organization name. The name is not case sensitive. 
*/
export const setRestrictionsForOrg: ApiHeroEndpoint<
  { org: string; payload: InteractionLimit },
  InteractionLimitResponse
> = {
  id: "interactions/set-restrictions-for-org",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/interactions#remove-interaction-restrictions-for-an-organization


* Remove interaction restrictions for an organization
* Removes all interaction restrictions from public repositories in the given organization. You must be an organization owner to remove restrictions.
* @param org - The organization name. The name is not case sensitive. 
*/
export const removeRestrictionsForOrg: ApiHeroEndpoint<{ org: string }, void> = {
  id: "interactions/remove-restrictions-for-org",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/interactions#get-interaction-restrictions-for-a-repository


* Get interaction restrictions for a repository
* Shows which type of GitHub user can interact with this repository and when the restriction expires. If there are no restrictions, you will see an empty response.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const getRestrictionsForRepo: ApiHeroEndpoint<
  { owner: string; repo: string },
  InteractionLimitResponse
> = {
  id: "interactions/get-restrictions-for-repo",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/interactions#set-interaction-restrictions-for-a-repository


* Set interaction restrictions for a repository
* Temporarily restricts interactions to a certain type of GitHub user within the given repository. You must have owner or admin access to set these restrictions. If an interaction limit is set for the user or organization that owns this repository, you will receive a `409 Conflict` response and will not be able to use this endpoint to change the interaction limit for a single repository.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const setRestrictionsForRepo: ApiHeroEndpoint<
  { owner: string; repo: string; payload: InteractionLimit },
  InteractionLimitResponse
> = {
  id: "interactions/set-restrictions-for-repo",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/interactions#remove-interaction-restrictions-for-a-repository


* Remove interaction restrictions for a repository
* Removes all interaction restrictions from the given repository. You must have owner or admin access to remove restrictions. If the interaction limit is set for the user or organization that owns this repository, you will receive a `409 Conflict` response and will not be able to use this endpoint to change the interaction limit for a single repository.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const removeRestrictionsForRepo: ApiHeroEndpoint<{ owner: string; repo: string }, void> = {
  id: "interactions/remove-restrictions-for-repo",
  clientId: "github",
};
