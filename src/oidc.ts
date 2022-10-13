import { EmptyObject, OidcCustomSub, ApiHeroEndpoint } from "./@types";

/** 
* @see https://docs.github.com/rest/actions/oidc#get-the-customization-template-for-an-oidc-subject-claim-for-an-organization


* Get the customization template for an OIDC subject claim for an organization
* Gets the customization template for an OpenID Connect (OIDC) subject claim.
 * You must authenticate using an access token with the `read:org` scope to use this endpoint.
 * GitHub Apps must have the `organization_administration:write` permission to use this endpoint.
* @param org - The organization name. The name is not case sensitive. 
*/
export const getOidcCustomSubTemplateForOrg: ApiHeroEndpoint<{ org: string }, OidcCustomSub> = {
  id: "oidc/get-oidc-custom-sub-template-for-org",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/actions/oidc#set-the-customization-template-for-an-oidc-subject-claim-for-an-organization


* Set the customization template for an OIDC subject claim for an organization
* Creates or updates the customization template for an OpenID Connect (OIDC) subject claim.
 * You must authenticate using an access token with the `write:org` scope to use this endpoint.
 * GitHub Apps must have the `admin:org` permission to use this endpoint.
* @param org - The organization name. The name is not case sensitive. 
*/
export const updateOidcCustomSubTemplateForOrg: ApiHeroEndpoint<
  { org: string; customization: OidcCustomSub },
  EmptyObject
> = {
  id: "oidc/update-oidc-custom-sub-template-for-org",
  clientId: "github",
  version: "1.1.5",
};
