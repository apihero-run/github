import { ApplicationGrant, Authorization, Link, ApiHeroEndpoint } from "./@types";

/** 
* @see https://docs.github.com/rest/reference/oauth-authorizations#list-your-authorizations

* @deprecated

* List your authorizations
* **Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://docs.github.com/rest/reference/oauth-authorizations), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
* @param [perPage=30] - The number of results per page (max 100).
* @param [clientId] - The client ID of your GitHub app.
* @param [page=1] - Page number of the results to fetch. 
*/
export const listAuthorizations: ApiHeroEndpoint<
  { perPage?: number; clientId?: string; page?: number },
  Array<Authorization>,
  { Link: Link }
> = {
  id: "oauth-authorizations/list-authorizations",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/oauth-authorizations#create-a-new-authorization

* @deprecated

* Create a new authorization
* **Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://docs.github.com/rest/reference/oauth-authorizations), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/developers/apps/authorizing-oauth-apps#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
 * 
 * **Warning:** Apps must use the [web application flow](https://docs.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow) to obtain OAuth tokens that work with GitHub SAML organizations. OAuth tokens created using the Authorizations API will be unable to access GitHub SAML organizations. For more information, see the [blog post](https://developer.github.com/changes/2019-11-05-deprecated-passwords-and-authorizations-api).
 * 
 * Creates OAuth tokens using [Basic Authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication). If you have two-factor authentication setup, Basic Authentication for this endpoint requires that you use a one-time password (OTP) and your username and password instead of tokens. For more information, see "[Working with two-factor authentication](https://docs.github.com/rest/overview/other-authentication-methods#working-with-two-factor-authentication)."
 * 
 * To create tokens for a particular OAuth application using this endpoint, you must authenticate as the user you want to create an authorization for and provide the app's client ID and secret, found on your OAuth application's settings page. If your OAuth application intends to create multiple tokens for one user, use `fingerprint` to differentiate between them.
 * 
 * You can also create tokens on GitHub from the [personal access tokens settings](https://github.com/settings/tokens) page. Read more about these tokens in [the GitHub Help documentation](https://docs.github.com/articles/creating-an-access-token-for-command-line-use).
 * 
 * Organizations that enforce SAML SSO require personal access tokens to be allowed. Read more about allowing tokens in [the GitHub Help documentation](https://docs.github.com/articles/about-identity-and-access-management-with-saml-single-sign-on). 
*/
export const createAuthorization: ApiHeroEndpoint<
  {
    authorization?: {
      /**
       * A note to remind you what the OAuth token is for.
       *
       * @example
       * "Update all gems"
       */
      note?: string;

      /**
       * A list of scopes that this authorization is in.
       *
       * @example
       * ["public_repo"]
       *
       * @example
       * ["user"]
       */
      scopes?: Array<string> | null;

      /**
       * A URL to remind you what app the OAuth token is for.
       */
      note_url?: string;

      /**
       * The OAuth app client key for which to create the token.
       */
      client_id?: string;

      /**
       * A unique string to distinguish an authorization from others created for the same client ID and user.
       */
      fingerprint?: string;

      /**
       * The OAuth app client secret for which to create the token.
       */
      client_secret?: string;
    };
  },
  Authorization,
  { Location: string }
> = {
  id: "oauth-authorizations/create-authorization",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/oauth-authorizations#list-your-grants

* @deprecated

* List your grants
* **Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://docs.github.com/rest/reference/oauth-authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/developers/apps/authorizing-oauth-apps#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
 * 
 * You can use this API to list the set of OAuth applications that have been granted access to your account. Unlike the [list your authorizations](https://docs.github.com/rest/reference/oauth-authorizations#list-your-authorizations) API, this API does not manage individual tokens. This API will return one entry for each OAuth application that has been granted access to your account, regardless of the number of tokens an application has generated for your user. The list of OAuth applications returned matches what is shown on [the application authorizations settings screen within GitHub](https://github.com/settings/applications#authorized). The `scopes` returned are the union of scopes authorized for the application. For example, if an application has one token with `repo` scope and another token with `user` scope, the grant will return `["repo", "user"]`.
* @param [clientId] - The client ID of your GitHub app.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listGrants: ApiHeroEndpoint<
  { clientId?: string; perPage?: number; page?: number },
  Array<ApplicationGrant>,
  { Link: Link }
> = {
  id: "oauth-authorizations/list-grants",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/oauth-authorizations#get-a-single-grant

* @deprecated

* Get a single grant
* **Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://docs.github.com/rest/reference/oauth-authorizations), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
* @param grantId - The unique identifier of the grant. 
*/
export const getGrant: ApiHeroEndpoint<{ grantId: number }, ApplicationGrant> = {
  id: "oauth-authorizations/get-grant",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/oauth-authorizations#delete-a-grant

* @deprecated

* Delete a grant
* **Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://docs.github.com/rest/reference/oauth-authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/developers/apps/authorizing-oauth-apps#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/rest/reference/oauth-authorizations/) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
 * 
 * Deleting an OAuth application's grant will also delete all OAuth tokens associated with the application for your user. Once deleted, the application has no access to your account and is no longer listed on [the application authorizations settings screen within GitHub](https://github.com/settings/applications#authorized).
* @param grantId - The unique identifier of the grant. 
*/
export const deleteGrant: ApiHeroEndpoint<{ grantId: number }, void> = {
  id: "oauth-authorizations/delete-grant",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/oauth-authorizations#get-a-single-authorization

* @deprecated

* Get a single authorization
* **Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://docs.github.com/rest/reference/oauth-authorizations), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
* @param authorizationId - The unique identifier of the authorization. 
*/
export const getAuthorization: ApiHeroEndpoint<{ authorizationId: number }, Authorization> = {
  id: "oauth-authorizations/get-authorization",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/oauth-authorizations#delete-an-authorization

* @deprecated

* Delete an authorization
* **Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://docs.github.com/rest/reference/oauth-authorizations), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
* @param authorizationId - The unique identifier of the authorization. 
*/
export const deleteAuthorization: ApiHeroEndpoint<{ authorizationId: number }, void> = {
  id: "oauth-authorizations/delete-authorization",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/oauth-authorizations#update-an-existing-authorization

* @deprecated

* Update an existing authorization
* **Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://docs.github.com/rest/reference/oauth-authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/developers/apps/authorizing-oauth-apps#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
 * 
 * If you have two-factor authentication setup, Basic Authentication for this endpoint requires that you use a one-time password (OTP) and your username and password instead of tokens. For more information, see "[Working with two-factor authentication](https://docs.github.com/rest/overview/other-authentication-methods#working-with-two-factor-authentication)."
 * 
 * You can only send one of these scope keys at a time.
* @param authorizationId - The unique identifier of the authorization. 
*/
export const updateAuthorization: ApiHeroEndpoint<
  {
    authorizationId: number;
    authorization?: {
      /**
       * A note to remind you what the OAuth token is for.
       *
       * @example
       * "Update all gems"
       */
      note?: string;

      /**
       * A list of scopes that this authorization is in.
       *
       * @example
       * ["public_repo"]
       *
       * @example
       * ["user"]
       */
      scopes?: Array<string> | null;

      /**
       * A URL to remind you what app the OAuth token is for.
       */
      note_url?: string;

      /**
       * A list of scopes to add to this authorization.
       */
      add_scopes?: Array<string>;

      /**
       * A unique string to distinguish an authorization from others created for the same client ID and user.
       */
      fingerprint?: string;

      /**
       * A list of scopes to remove from this authorization.
       */
      remove_scopes?: Array<string>;
    };
  },
  Authorization
> = {
  id: "oauth-authorizations/update-authorization",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/oauth-authorizations#get-or-create-an-authorization-for-a-specific-app

* @deprecated

* Get-or-create an authorization for a specific app
* **Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://docs.github.com/rest/reference/oauth-authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/developers/apps/authorizing-oauth-apps#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
 * 
 * **Warning:** Apps must use the [web application flow](https://docs.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow) to obtain OAuth tokens that work with GitHub SAML organizations. OAuth tokens created using the Authorizations API will be unable to access GitHub SAML organizations. For more information, see the [blog post](https://developer.github.com/changes/2019-11-05-deprecated-passwords-and-authorizations-api).
 * 
 * Creates a new authorization for the specified OAuth application, only if an authorization for that application doesn't already exist for the user. The URL includes the 20 character client ID for the OAuth app that is requesting the token. It returns the user's existing authorization for the application if one is present. Otherwise, it creates and returns a new one.
 * 
 * If you have two-factor authentication setup, Basic Authentication for this endpoint requires that you use a one-time password (OTP) and your username and password instead of tokens. For more information, see "[Working with two-factor authentication](https://docs.github.com/rest/overview/other-authentication-methods#working-with-two-factor-authentication)."
 * 
 * **Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://docs.github.com/rest/reference/oauth-authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/developers/apps/authorizing-oauth-apps#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
* @param clientId - The client ID of the OAuth app. 
*/
export const getOrCreateAuthorizationForApp: ApiHeroEndpoint<
  {
    clientId: string;
    client: {
      /**
       * A note to remind you what the OAuth token is for.
       *
       * @example
       * "Update all gems"
       */
      note?: string;

      /**
       * A list of scopes that this authorization is in.
       *
       * @example
       * ["public_repo"]
       *
       * @example
       * ["user"]
       */
      scopes?: Array<string> | null;

      /**
       * A URL to remind you what app the OAuth token is for.
       */
      note_url?: string;

      /**
       * A unique string to distinguish an authorization from others created for the same client ID and user.
       */
      fingerprint?: string;

      /**
       * The OAuth app client secret for which to create the token.
       */
      client_secret: string;
    };
  },
  Authorization,
  { Location: string }
> = {
  id: "oauth-authorizations/get-or-create-authorization-for-app",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/oauth-authorizations#get-or-create-an-authorization-for-a-specific-app-and-fingerprint

* @deprecated

* Get-or-create an authorization for a specific app and fingerprint
* **Deprecation Notice:** GitHub will discontinue the [OAuth Authorizations API](https://docs.github.com/rest/reference/oauth-authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/developers/apps/authorizing-oauth-apps#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).
 * 
 * **Warning:** Apps must use the [web application flow](https://docs.github.com/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow) to obtain OAuth tokens that work with GitHub SAML organizations. OAuth tokens created using the Authorizations API will be unable to access GitHub SAML organizations. For more information, see the [blog post](https://developer.github.com/changes/2019-11-05-deprecated-passwords-and-authorizations-api).
 * 
 * This method will create a new authorization for the specified OAuth application, only if an authorization for that application and fingerprint do not already exist for the user. The URL includes the 20 character client ID for the OAuth app that is requesting the token. `fingerprint` is a unique string to distinguish an authorization from others created for the same client ID and user. It returns the user's existing authorization for the application if one is present. Otherwise, it creates and returns a new one.
 * 
 * If you have two-factor authentication setup, Basic Authentication for this endpoint requires that you use a one-time password (OTP) and your username and password instead of tokens. For more information, see "[Working with two-factor authentication](https://docs.github.com/rest/overview/other-authentication-methods#working-with-two-factor-authentication)."
* @param clientId - The client ID of the OAuth app.
* @param fingerprint  
*/
export const getOrCreateAuthorizationForAppAndFingerprint: ApiHeroEndpoint<
  {
    clientId: string;
    fingerprint: string;
    payload: {
      /**
       * A note to remind you what the OAuth token is for.
       *
       * @example
       * "Update all gems"
       */
      note?: string;

      /**
       * A list of scopes that this authorization is in.
       *
       * @example
       * ["public_repo"]
       *
       * @example
       * ["user"]
       */
      scopes?: Array<string> | null;

      /**
       * A URL to remind you what app the OAuth token is for.
       */
      note_url?: string;

      /**
       * The OAuth app client secret for which to create the token.
       */
      client_secret: string;
    };
  },
  Authorization,
  { Location: string }
> = {
  id: "oauth-authorizations/get-or-create-authorization-for-app-and-fingerprint",
  clientId: "github",
};
