import {
  AppPermissions,
  Authorization,
  HookDelivery,
  HookDeliveryItem,
  Installation,
  InstallationToken,
  Integration,
  Link,
  MarketplaceListingPlan,
  MarketplacePurchase,
  Repository,
  UserMarketplacePurchase,
  WebhookConfig,
  WebhookConfigContentType,
  WebhookConfigInsecureSsl,
  WebhookConfigSecret,
  WebhookConfigUrl,
  ApiHeroEndpoint,
} from "./@types";

/** 
* @see https://docs.github.com/rest/reference/apps#get-the-authenticated-app


* Get the authenticated app
* Returns the GitHub App associated with the authentication credentials used. To see how many app installations are associated with this GitHub App, see the `installations_count` in the response. For more details about your app's installations, see the "[List installations for the authenticated app](https://docs.github.com/rest/reference/apps#list-installations-for-the-authenticated-app)" endpoint.
 * 
 * You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. 
*/
export const getAuthenticated: ApiHeroEndpoint<void, Integration> = {
  id: "apps/get-authenticated",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/apps#get-a-webhook-configuration-for-an-app


* Get a webhook configuration for an app
* Returns the webhook configuration for a GitHub App. For more information about configuring a webhook for your app, see "[Creating a GitHub App](/developers/apps/creating-a-github-app)."
 * 
 * You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. 
*/
export const getWebhookConfigForApp: ApiHeroEndpoint<void, WebhookConfig> = {
  id: "apps/get-webhook-config-for-app",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/apps#update-a-webhook-configuration-for-an-app


* Update a webhook configuration for an app
* Updates the webhook configuration for a GitHub App. For more information about configuring a webhook for your app, see "[Creating a GitHub App](/developers/apps/creating-a-github-app)."
 * 
 * You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. 
*/
export const updateWebhookConfigForApp: ApiHeroEndpoint<
  {
    hook: {
      url?: WebhookConfigUrl;
      secret?: WebhookConfigSecret;
      content_type?: WebhookConfigContentType;
      insecure_ssl?: WebhookConfigInsecureSsl;
    };
  },
  WebhookConfig
> = {
  id: "apps/update-webhook-config-for-app",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/apps/#get-an-app


* Get an app
* **Note**: The `:app_slug` is just the URL-friendly name of your GitHub App. You can find this on the settings page for your GitHub App (e.g., `https://github.com/settings/apps/:app_slug`).
 * 
 * If the GitHub App you specify is public, you can access this endpoint without authenticating. If the GitHub App you specify is private, you must authenticate with a [personal access token](https://docs.github.com/articles/creating-a-personal-access-token-for-the-command-line/) or an [installation access token](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.
* @param appSlug  
*/
export const getBySlug: ApiHeroEndpoint<{ appSlug: string }, Integration> = {
  id: "apps/get-by-slug",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/apps#list-installations-for-the-authenticated-app


* List installations for the authenticated app
* You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
 * 
 * The permissions the installation has are included under the `permissions` key.
* @param [perPage=30] - The number of results per page (max 100).
* @param [outdated] 
* @param [since] - Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
* @param [page=1] - Page number of the results to fetch. 
*/
export const listInstallations: ApiHeroEndpoint<
  { perPage?: number; outdated?: string; since?: string; page?: number },
  Array<Installation>,
  { Link: Link }
> = {
  id: "apps/list-installations",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/apps#revoke-an-installation-access-token


* Revoke an installation access token
* Revokes the installation token you're using to authenticate as an installation and access this endpoint.
 * 
 * Once an installation token is revoked, the token is invalidated and cannot be used. Other endpoints that require the revoked installation token must have a new installation token to work. You can create a new token using the "[Create an installation access token for an app](https://docs.github.com/rest/reference/apps#create-an-installation-access-token-for-an-app)" endpoint.
 * 
 * You must use an [installation access token](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint. 
*/
export const revokeInstallationAccessToken: ApiHeroEndpoint<void, void> = {
  id: "apps/revoke-installation-access-token",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/apps#list-app-installations-accessible-to-the-user-access-token


* List app installations accessible to the user access token
* Lists installations of your GitHub App that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access.
 * 
 * You must use a [user-to-server OAuth access token](https://docs.github.com/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint.
 * 
 * The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.
 * 
 * You can find the permissions for the installation under the `permissions` key.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listInstallationsForAuthenticatedUser: ApiHeroEndpoint<
  { perPage?: number; page?: number },
  {
    total_count: number;
    installations: Array<Installation>;
  },
  { Link: Link }
> = {
  id: "apps/list-installations-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/apps#list-deliveries-for-an-app-webhook


* List deliveries for an app webhook
* Returns a list of webhook deliveries for the webhook configured for a GitHub App.
 * 
 * You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
* @param [perPage=30] - The number of results per page (max 100).
* @param [cursor] - Used for pagination: the starting delivery from which the page of deliveries is fetched. Refer to the `link` header for the next and previous page cursors. 
*/
export const listWebhookDeliveries: ApiHeroEndpoint<
  { perPage?: number; cursor?: string },
  Array<HookDeliveryItem>
> = {
  id: "apps/list-webhook-deliveries",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/apps#get-an-organization-installation-for-the-authenticated-app


* Get an organization installation for the authenticated app
* Enables an authenticated GitHub App to find the organization's installation information.
 * 
 * You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
* @param org - The organization name. The name is not case sensitive. 
*/
export const getOrgInstallation: ApiHeroEndpoint<{ org: string }, Installation> = {
  id: "apps/get-org-installation",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/apps#list-repositories-accessible-to-the-app-installation


* List repositories accessible to the app installation
* List repositories that an app installation can access.
 * 
 * You must use an [installation access token](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-an-installation) to access this endpoint.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listReposAccessibleToInstallation: ApiHeroEndpoint<
  { perPage?: number; page?: number },
  {
    total_count: number;
    repositories: Array<Repository>;

    /**
     *
     * @example
     * "selected"
     */
    repository_selection?: string;
  },
  { Link: Link }
> = {
  id: "apps/list-repos-accessible-to-installation",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/apps#list-plans


* List plans
* Lists all plans that are part of your GitHub Marketplace listing.
 * 
 * GitHub Apps must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) with their client ID and client secret to access this endpoint.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listPlans: ApiHeroEndpoint<
  { perPage?: number; page?: number },
  Array<MarketplaceListingPlan>,
  { Link: Link }
> = {
  id: "apps/list-plans",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/apps#list-subscriptions-for-the-authenticated-user


* List subscriptions for the authenticated user
* Lists the active subscriptions for the authenticated user. You must use a [user-to-server OAuth access token](https://docs.github.com/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint. . OAuth Apps must authenticate using an [OAuth token](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/).
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listSubscriptionsForAuthenticatedUser: ApiHeroEndpoint<
  { perPage?: number; page?: number },
  Array<UserMarketplacePurchase>,
  { Link: Link }
> = {
  id: "apps/list-subscriptions-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/apps#get-a-user-installation-for-the-authenticated-app


* Get a user installation for the authenticated app
* Enables an authenticated GitHub App to find the user’s installation information.
 * 
 * You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
* @param username - The handle for the GitHub user account. 
*/
export const getUserInstallation: ApiHeroEndpoint<{ username: string }, Installation> = {
  id: "apps/get-user-installation",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/apps#delete-an-app-authorization


* Delete an app authorization
* OAuth application owners can revoke a grant for their OAuth application and a specific user. You must use [Basic Authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. You must also provide a valid OAuth `access_token` as an input parameter and the grant for the token's owner will be deleted.
 * Deleting an OAuth application's grant will also delete all OAuth tokens associated with the application for the user. Once deleted, the application will have no access to the user's account and will no longer be listed on [the application authorizations settings screen within GitHub](https://github.com/settings/applications#authorized).
* @param clientId - The client ID of the GitHub app. 
*/
export const deleteAuthorization: ApiHeroEndpoint<
  {
    clientId: string;
    grant: {
      /**
       * The OAuth access token used to authenticate to the GitHub API.
       */
      access_token: string;
    };
  },
  void
> = {
  id: "apps/delete-authorization",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/apps#check-a-token


* Check a token
* OAuth applications can use a special API method for checking OAuth token validity without exceeding the normal rate limits for failed login attempts. Authentication works differently with this particular endpoint. You must use [Basic Authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) to use this endpoint, where the username is the OAuth application `client_id` and the password is its `client_secret`. Invalid tokens will return `404 NOT FOUND`.
* @param clientId - The client ID of the GitHub app. 
*/
export const checkToken: ApiHeroEndpoint<
  {
    clientId: string;
    token: {
      /**
       * The access_token of the OAuth application.
       */
      access_token: string;
    };
  },
  Authorization
> = {
  id: "apps/check-token",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/apps#delete-an-app-token


* Delete an app token
* OAuth application owners can revoke a single token for an OAuth application. You must use [Basic Authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password.
* @param clientId - The client ID of the GitHub app. 
*/
export const deleteToken: ApiHeroEndpoint<
  {
    clientId: string;
    token: {
      /**
       * The OAuth access token used to authenticate to the GitHub API.
       */
      access_token: string;
    };
  },
  void
> = {
  id: "apps/delete-token",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/apps#reset-a-token


* Reset a token
* OAuth applications can use this API method to reset a valid OAuth token without end-user involvement. Applications must save the "token" property in the response because changes take effect immediately. You must use [Basic Authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. Invalid tokens will return `404 NOT FOUND`.
* @param clientId - The client ID of the GitHub app. 
*/
export const resetToken: ApiHeroEndpoint<
  {
    clientId: string;
    payload: {
      /**
       * The access_token of the OAuth application.
       */
      access_token: string;
    };
  },
  Authorization
> = {
  id: "apps/reset-token",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/apps#create-a-github-app-from-a-manifest


* Create a GitHub App from a manifest
* Use this endpoint to complete the handshake necessary when implementing the [GitHub App Manifest flow](https://docs.github.com/apps/building-github-apps/creating-github-apps-from-a-manifest/). When you create a GitHub App with the manifest flow, you receive a temporary `code` used to retrieve the GitHub App's `id`, `pem` (private key), and `webhook_secret`.
* @param code  
*/
export const createFromManifest: ApiHeroEndpoint<
  { code: string },
  Integration & {
    pem: string;
    client_id: string;
    client_secret: string;
    webhook_secret: string | null;
  }
> = {
  id: "apps/create-from-manifest",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/apps#get-a-delivery-for-an-app-webhook


* Get a delivery for an app webhook
* Returns a delivery for the webhook configured for a GitHub App.
 * 
 * You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
* @param deliveryId  
*/
export const getWebhookDelivery: ApiHeroEndpoint<{ deliveryId: number }, HookDelivery> = {
  id: "apps/get-webhook-delivery",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/apps#list-plans-stubbed


* List plans (stubbed)
* Lists all plans that are part of your GitHub Marketplace listing.
 * 
 * GitHub Apps must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) with their client ID and client secret to access this endpoint.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listPlansStubbed: ApiHeroEndpoint<
  { perPage?: number; page?: number },
  Array<MarketplaceListingPlan>,
  { Link: Link }
> = {
  id: "apps/list-plans-stubbed",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/apps#get-a-repository-installation-for-the-authenticated-app


* Get a repository installation for the authenticated app
* Enables an authenticated GitHub App to find the repository's installation information. The installation's account type will be either an organization or a user account, depending which account the repository belongs to.
 * 
 * You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
* @param repo - The name of the repository. The name is not case sensitive.
* @param owner - The account owner of the repository. The name is not case sensitive. 
*/
export const getRepoInstallation: ApiHeroEndpoint<{ repo: string; owner: string }, Installation> = {
  id: "apps/get-repo-installation",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/apps#list-subscriptions-for-the-authenticated-user-stubbed


* List subscriptions for the authenticated user (stubbed)
* Lists the active subscriptions for the authenticated user. You must use a [user-to-server OAuth access token](https://docs.github.com/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint. . OAuth Apps must authenticate using an [OAuth token](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/).
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listSubscriptionsForAuthenticatedUserStubbed: ApiHeroEndpoint<
  { perPage?: number; page?: number },
  Array<UserMarketplacePurchase>,
  { Link: Link }
> = {
  id: "apps/list-subscriptions-for-authenticated-user-stubbed",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/apps#get-an-installation-for-the-authenticated-app


* Get an installation for the authenticated app
* Enables an authenticated GitHub App to find an installation's information using the installation id.
 * 
 * You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
* @param installationId - The unique identifier of the installation. 
*/
export const getInstallation: ApiHeroEndpoint<{ installationId: number }, Installation> = {
  id: "apps/get-installation",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/apps#delete-an-installation-for-the-authenticated-app


* Delete an installation for the authenticated app
* Uninstalls a GitHub App on a user, organization, or business account. If you prefer to temporarily suspend an app's access to your account's resources, then we recommend the "[Suspend an app installation](https://docs.github.com/rest/reference/apps/#suspend-an-app-installation)" endpoint.
 * 
 * You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
* @param installationId - The unique identifier of the installation. 
*/
export const deleteInstallation: ApiHeroEndpoint<{ installationId: number }, void> = {
  id: "apps/delete-installation",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/apps#create-a-scoped-access-token


* Create a scoped access token
* Use a non-scoped user-to-server OAuth access token to create a repository scoped and/or permission scoped user-to-server OAuth access token. You can specify which repositories the token can access and which permissions are granted to the token. You must use [Basic Authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) when accessing this endpoint, using the OAuth application's `client_id` and `client_secret` as the username and password. Invalid tokens will return `404 NOT FOUND`.
* @param clientId - The client ID of the GitHub app. 
*/
export const scopeToken: ApiHeroEndpoint<
  {
    clientId: string;
    scoped: {
      /**
       * The name of the user or organization to scope the user-to-server access token to. **Required** unless `target_id` is specified.
       *
       * @example
       * "octocat"
       */
      target?: string;

      /**
       * The ID of the user or organization to scope the user-to-server access token to. **Required** unless `target` is specified.
       *
       * @example
       * 1
       */
      target_id?: number;
      permissions?: AppPermissions;

      /**
       * The OAuth access token used to authenticate to the GitHub API.
       *
       * @example
       * "e72e16c7e42f292c6912e7710c838347ae178b4a"
       */
      access_token: string;

      /**
       * The list of repository names to scope the user-to-server access token to. `repositories` may not be specified if `repository_ids` is specified.
       *
       * @example
       * ["rails"]
       */
      repositories?: Array<string>;

      /**
       * The list of repository IDs to scope the user-to-server access token to. `repository_ids` may not be specified if `repositories` is specified.
       *
       * @example
       * [1]
       */
      repository_ids?: Array<number>;
    };
  },
  Authorization
> = {
  id: "apps/scope-token",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/apps#get-a-subscription-plan-for-an-account


* Get a subscription plan for an account
* Shows whether the user or organization account actively subscribes to a plan listed by the authenticated GitHub App. When someone submits a plan change that won't be processed until the end of their billing cycle, you will also see the upcoming pending change.
 * 
 * GitHub Apps must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) with their client ID and client secret to access this endpoint.
* @param accountId - account_id parameter 
*/
export const getSubscriptionPlanForAccount: ApiHeroEndpoint<
  { accountId: number },
  MarketplacePurchase
> = {
  id: "apps/get-subscription-plan-for-account",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/apps#redeliver-a-delivery-for-an-app-webhook


* Redeliver a delivery for an app webhook
* Redeliver a delivery for the webhook configured for a GitHub App.
 * 
 * You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
* @param deliveryId  
*/
export const redeliverWebhookDelivery: ApiHeroEndpoint<{ deliveryId: number }, {}> = {
  id: "apps/redeliver-webhook-delivery",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/apps#list-accounts-for-a-plan


* List accounts for a plan
* Returns user and organization accounts associated with the specified plan, including free plans. For per-seat pricing, you see the list of accounts that have purchased the plan, including the number of seats purchased. When someone submits a plan change that won't be processed until the end of their billing cycle, you will also see the upcoming pending change.
 * 
 * GitHub Apps must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) with their client ID and client secret to access this endpoint.
* @param planId - The unique identifier of the plan.
* @param [perPage=30] - The number of results per page (max 100).
* @param [sort] - The property to sort the results by. `created` means when the repository was starred. `updated` means when the repository was last pushed to.
* @param [page=1] - Page number of the results to fetch.
* @param [direction] - To return the oldest accounts first, set to `asc`. Ignored without the `sort` parameter. 
*/
export const listAccountsForPlan: ApiHeroEndpoint<
  {
    planId: number;
    perPage?: number;
    sort?: "created" | "updated";
    page?: number;
    direction?: "asc" | "desc";
  },
  Array<MarketplacePurchase>,
  { Link: Link }
> = {
  id: "apps/list-accounts-for-plan",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/apps#suspend-an-app-installation


* Suspend an app installation
* Suspends a GitHub App on a user, organization, or business account, which blocks the app from accessing the account's resources. When a GitHub App is suspended, the app's access to the GitHub API or webhook events is blocked for that account.
 * 
 * You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
* @param installationId - The unique identifier of the installation. 
*/
export const suspendInstallation: ApiHeroEndpoint<{ installationId: number }, void> = {
  id: "apps/suspend-installation",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/apps#unsuspend-an-app-installation


* Unsuspend an app installation
* Removes a GitHub App installation suspension.
 * 
 * You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
* @param installationId - The unique identifier of the installation. 
*/
export const unsuspendInstallation: ApiHeroEndpoint<{ installationId: number }, void> = {
  id: "apps/unsuspend-installation",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/apps/#create-an-installation-access-token-for-an-app


* Create an installation access token for an app
* Creates an installation access token that enables a GitHub App to make authenticated API requests for the app's installation on an organization or individual account. Installation tokens expire one hour from the time you create them. Using an expired token produces a status code of `401 - Unauthorized`, and requires creating a new installation token. By default the installation token has access to all repositories that the installation can access. To restrict the access to specific repositories, you can provide the `repository_ids` when creating the token. When you omit `repository_ids`, the response does not contain the `repositories` key.
 * 
 * You must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint.
* @param installationId - The unique identifier of the installation. 
*/
export const createInstallationAccessToken: ApiHeroEndpoint<
  {
    installationId: number;
    accessToken?: {
      permissions?: AppPermissions;

      /**
       * List of repository names that the token should have access to
       *
       * @example
       * ["rails"]
       */
      repositories?: Array<string>;

      /**
       * List of repository IDs that the token should have access to
       *
       * @example
       * [1]
       */
      repository_ids?: Array<number>;
    };
  },
  InstallationToken
> = {
  id: "apps/create-installation-access-token",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/apps#get-a-subscription-plan-for-an-account-stubbed


* Get a subscription plan for an account (stubbed)
* Shows whether the user or organization account actively subscribes to a plan listed by the authenticated GitHub App. When someone submits a plan change that won't be processed until the end of their billing cycle, you will also see the upcoming pending change.
 * 
 * GitHub Apps must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) with their client ID and client secret to access this endpoint.
* @param accountId - account_id parameter 
*/
export const getSubscriptionPlanForAccountStubbed: ApiHeroEndpoint<
  { accountId: number },
  MarketplacePurchase
> = {
  id: "apps/get-subscription-plan-for-account-stubbed",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/apps#list-repositories-accessible-to-the-user-access-token


* List repositories accessible to the user access token
* List repositories that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access for an installation.
 * 
 * The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.
 * 
 * You must use a [user-to-server OAuth access token](https://docs.github.com/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site), created for a user who has authorized your GitHub App, to access this endpoint.
 * 
 * The access the user has to each repository is included in the hash under the `permissions` key.
* @param installationId - The unique identifier of the installation.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listInstallationReposForAuthenticatedUser: ApiHeroEndpoint<
  { installationId: number; perPage?: number; page?: number },
  {
    total_count: number;
    repositories: Array<Repository>;
    repository_selection?: string;
  },
  { Link: Link }
> = {
  id: "apps/list-installation-repos-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/apps#list-accounts-for-a-plan-stubbed


* List accounts for a plan (stubbed)
* Returns repository and organization accounts associated with the specified plan, including free plans. For per-seat pricing, you see the list of accounts that have purchased the plan, including the number of seats purchased. When someone submits a plan change that won't be processed until the end of their billing cycle, you will also see the upcoming pending change.
 * 
 * GitHub Apps must use a [JWT](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/#authenticating-as-a-github-app) to access this endpoint. OAuth Apps must use [basic authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) with their client ID and client secret to access this endpoint.
* @param planId - The unique identifier of the plan.
* @param [perPage=30] - The number of results per page (max 100).
* @param [sort] - The property to sort the results by. `created` means when the repository was starred. `updated` means when the repository was last pushed to.
* @param [page=1] - Page number of the results to fetch.
* @param [direction] - To return the oldest accounts first, set to `asc`. Ignored without the `sort` parameter. 
*/
export const listAccountsForPlanStubbed: ApiHeroEndpoint<
  {
    planId: number;
    perPage?: number;
    sort?: "created" | "updated";
    page?: number;
    direction?: "asc" | "desc";
  },
  Array<MarketplacePurchase>,
  { Link: Link }
> = {
  id: "apps/list-accounts-for-plan-stubbed",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/apps#add-a-repository-to-an-app-installation


* Add a repository to an app installation
* Add a single repository to an installation. The authenticated user must have admin access to the repository.
 * 
 * You must use a personal access token (which you can create via the [command line](https://docs.github.com/github/authenticating-to-github/creating-a-personal-access-token) or [Basic Authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication)) to access this endpoint.
* @param installationId - The unique identifier of the installation.
* @param repositoryId - The unique identifier of the repository. 
*/
export const addRepoToInstallationForAuthenticatedUser: ApiHeroEndpoint<
  { installationId: number; repositoryId: number },
  void
> = {
  id: "apps/add-repo-to-installation-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/apps#remove-a-repository-from-an-app-installation


* Remove a repository from an app installation
* Remove a single repository from an installation. The authenticated user must have admin access to the repository.
 * 
 * You must use a personal access token (which you can create via the [command line](https://docs.github.com/github/authenticating-to-github/creating-a-personal-access-token) or [Basic Authentication](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication)) to access this endpoint.
* @param installationId - The unique identifier of the installation.
* @param repositoryId - The unique identifier of the repository. 
*/
export const removeRepoFromInstallationForAuthenticatedUser: ApiHeroEndpoint<
  { installationId: number; repositoryId: number },
  void
> = {
  id: "apps/remove-repo-from-installation-for-authenticated-user",
  clientId: "github",
};
