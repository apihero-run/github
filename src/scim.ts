import { ScimUser, ScimUserList, ApiHeroEndpoint } from "./@types";

/** 
* @see https://docs.github.com/rest/reference/scim#list-scim-provisioned-identities


* List SCIM provisioned identities
* Retrieves a paginated list of all provisioned organization members, including pending invitations. If you provide the `filter` parameter, the resources for all matching provisions members are returned.
 * 
 * When a user with a SAML-provisioned external identity leaves (or is removed from) an organization, the account's metadata is immediately removed. However, the returned list of user accounts might not always match the organization or enterprise member list you see on GitHub. This can happen in certain cases where an external identity associated with an organization will not match an organization member:
 * - When a user with a SCIM-provisioned external identity is removed from an organization, the account's metadata is preserved to allow the user to re-join the organization in the future.
 * - When inviting a user to join an organization, you can expect to see their external identity in the results before they accept the invitation, or if the invitation is cancelled (or never accepted).
 * - When a user is invited over SCIM, an external identity is created that matches with the invitee's email address. However, this identity is only linked to a user account when the user accepts the invitation by going through SAML SSO.
 * 
 * The returned list of external identities can include an entry for a `null` user. These are unlinked SAML identities that are created when a user goes through the following Single Sign-On (SSO) process but does not sign in to their GitHub account after completing SSO:
 * 
 * 1. The user is granted access by the IdP and is not a member of the GitHub organization.
 * 
 * 1. The user attempts to access the GitHub organization and initiates the SAML SSO process, and is not currently signed in to their GitHub account.
 * 
 * 1. After successfully authenticating with the SAML SSO IdP, the `null` external identity entry is created and the user is prompted to sign in to their GitHub account:
 * - If the user signs in, their GitHub account is linked to this entry.
 * - If the user does not sign in (or does not create a new account when prompted), they are not added to the GitHub organization, and the external identity `null` entry remains in place.
* @param org - The organization name. The name is not case sensitive.
* @param [startIndex] - Used for pagination: the index of the first result to return.
* @param [count] - Used for pagination: the number of results to return.
* @param [filter] - Filters results using the equals query parameter operator (`eq`). You can filter results that are equal to `id`, `userName`, `emails`, and `external_id`. For example, to search for an identity with the `userName` Octocat, you would use this query:

`?filter=userName%20eq%20\"Octocat\"`.

To filter results for the identity with the email `octocat@github.com`, you would use this query:

`?filter=emails%20eq%20\"octocat@github.com\"`. 
*/
export const listProvisionedIdentities: ApiHeroEndpoint<
  { org: string; startIndex?: number; count?: number; filter?: string },
  ScimUserList
> = {
  id: "scim/list-provisioned-identities",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/scim#provision-and-invite-a-scim-user


* Provision and invite a SCIM user
* Provision organization membership for a user, and send an activation email to the email address.
* @param org - The organization name. The name is not case sensitive. 
*/
export const provisionAndInviteUser: ApiHeroEndpoint<
  {
    org: string;
    user: {
      name: {
        formatted?: string;
        givenName: string;
        familyName: string;
      };
      active?: boolean;

      /**
       * user emails
       *
       * @example
       * [{
       *   "value": "someone@example.com",
       *   "primary": true
       * }]
       *
       * @example
       * [{
       *   "value": "another@example.com",
       *   "primary": false
       * }]
       */
      emails: Array<{
        type?: string;
        value: string;
        primary?: boolean;
      }>;
      groups?: Array<string>;
      schemas?: Array<string>;

      /**
       * Configured by the admin. Could be an email, login, or username
       *
       * @example
       * "someone@example.com"
       */
      userName: string;
      externalId?: string;

      /**
       * The name of the user, suitable for display to end-users
       *
       * @example
       * "Jon Doe"
       */
      displayName?: string;
    };
  },
  ScimUser
> = {
  id: "scim/provision-and-invite-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/scim#get-scim-provisioning-information-for-a-user


* Get SCIM provisioning information for a user
* @param org - The organization name. The name is not case sensitive.
* @param scimUserId - The unique identifier of the SCIM user. 
*/
export const getProvisioningInformationForUser: ApiHeroEndpoint<
  { org: string; scimUserId: string },
  ScimUser
> = {
  id: "scim/get-provisioning-information-for-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/scim#set-scim-information-for-a-provisioned-user


* Update a provisioned organization membership
* Replaces an existing provisioned user's information. You must provide all the information required for the user as if you were provisioning them for the first time. Any existing user information that you don't provide will be removed. If you want to only update a specific attribute, use the [Update an attribute for a SCIM user](https://docs.github.com/rest/reference/scim#update-an-attribute-for-a-scim-user) endpoint instead.
 * 
 * You must at least provide the required values for the user: `userName`, `name`, and `emails`.
 * 
 * **Warning:** Setting `active: false` removes the user from the organization, deletes the external identity, and deletes the associated `{scim_user_id}`.
* @param org - The organization name. The name is not case sensitive.
* @param scimUserId - The unique identifier of the SCIM user. 
*/
export const setInformationForProvisionedUser: ApiHeroEndpoint<
  {
    org: string;
    scimUserId: string;
    user: {
      name: {
        formatted?: string;
        givenName: string;
        familyName: string;
      };
      active?: boolean;

      /**
       * user emails
       *
       * @example
       * [{
       *   "value": "someone@example.com",
       *   "primary": true
       * }]
       *
       * @example
       * [{
       *   "value": "another@example.com",
       *   "primary": false
       * }]
       */
      emails: Array<{
        type?: string;
        value: string;
        primary?: boolean;
      }>;
      groups?: Array<string>;
      schemas?: Array<string>;

      /**
       * Configured by the admin. Could be an email, login, or username
       *
       * @example
       * "someone@example.com"
       */
      userName: string;
      externalId?: string;

      /**
       * The name of the user, suitable for display to end-users
       *
       * @example
       * "Jon Doe"
       */
      displayName?: string;
    };
  },
  ScimUser
> = {
  id: "scim/set-information-for-provisioned-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/scim#delete-a-scim-user-from-an-organization


* Delete a SCIM user from an organization
* @param org - The organization name. The name is not case sensitive.
* @param scimUserId - The unique identifier of the SCIM user. 
*/
export const deleteUserFromOrg: ApiHeroEndpoint<{ org: string; scimUserId: string }, void> = {
  id: "scim/delete-user-from-org",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/scim#update-an-attribute-for-a-scim-user


* Update an attribute for a SCIM user
* Allows you to change a provisioned user's individual attributes. To change a user's values, you must provide a specific `Operations` JSON format that contains at least one of the `add`, `remove`, or `replace` operations. For examples and more information on the SCIM operations format, see the [SCIM specification](https://tools.ietf.org/html/rfc7644#section-3.5.2).
 * 
 * **Note:** Complicated SCIM `path` selectors that include filters are not supported. For example, a `path` selector defined as `"path": "emails[type eq \"work\"]"` will not work.
 * 
 * **Warning:** If you set `active:false` using the `replace` operation (as shown in the JSON example below), it removes the user from the organization, deletes the external identity, and deletes the associated `:scim_user_id`.
 * 
 * ```
 * {
 * "Operations":[{
 * "op":"replace",
 * "value":{
 * "active":false
 * }
 * }]
 * }
 * ```
* @param org - The organization name. The name is not case sensitive.
* @param scimUserId - The unique identifier of the SCIM user. 
*/
export const updateAttributeForUser: ApiHeroEndpoint<
  {
    org: string;
    scimUserId: string;
    user: {
      schemas?: Array<string>;

      /**
       * Set of operations to be performed
       *
       * @example
       * [{
       *   "op": "replace",
       *   "value": {
       *     "active": false
       *   }
       * }]
       */
      Operations: Array<{
        op: "add" | "remove" | "replace";
        path?: string;
        value?:
          | {
              active?: boolean | null;
              userName?: string | null;
              givenName?: string | null;
              externalId?: string | null;
              familyName?: string | null;
            }
          | string;
      }>;
    };
  },
  ScimUser
> = {
  id: "scim/update-attribute-for-user",
  clientId: "github",
};
