import {
  ActionsEnterprisePermissions,
  AllowedActions,
  AuditLogEvent,
  AuthenticationToken,
  EnabledOrganizations,
  Link,
  OrganizationSimple,
  Runner,
  RunnerApplication,
  RunnerGroupsEnterprise,
  RunnerLabel,
  ScimEnterpriseGroup,
  ScimEnterpriseUser,
  ScimGroupListEnterprise,
  ScimUserListEnterprise,
  SelectedActions,
  ServerStatistics,
  ApiHeroEndpoint,
} from "./@types";

/** 
* @see https://docs.github.com/rest/reference/enterprise-admin#get-the-audit-log-for-an-enterprise


* Get the audit log for an enterprise
* Gets the audit log for an enterprise. To use this endpoint, you must be an enterprise admin, and you must use an access token with the `admin:enterprise` scope.
* @param enterprise - The slug version of the enterprise name. You can also substitute this value with the enterprise id.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch.
* @param [order] - The order of audit log events. To list newest events first, specify `desc`. To list oldest events first, specify `asc`.

The default is `desc`.
* @param [include] - The event types to include:

- `web` - returns web (non-Git) events.
- `git` - returns Git events.
- `all` - returns both web and Git events.

The default is `web`.
* @param [phrase] - A search phrase. For more information, see [Searching the audit log](https://docs.github.com/github/setting-up-and-managing-organizations-and-teams/reviewing-the-audit-log-for-your-organization#searching-the-audit-log).
* @param [after] - A cursor, as given in the [Link header](https://docs.github.com/rest/overview/resources-in-the-rest-api#link-header). If specified, the query only searches for events after this cursor.
* @param [before] - A cursor, as given in the [Link header](https://docs.github.com/rest/overview/resources-in-the-rest-api#link-header). If specified, the query only searches for events before this cursor. 
*/
export const getAuditLog: ApiHeroEndpoint<
  {
    enterprise: string;
    perPage?: number;
    page?: number;
    order?: "desc" | "asc";
    include?: "web" | "git" | "all";
    phrase?: string;
    after?: string;
    before?: string;
  },
  Array<AuditLogEvent>
> = {
  id: "enterprise-admin/get-audit-log",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/enterprise-admin#list-scim-provisioned-identities-for-an-enterprise


* List SCIM provisioned identities for an enterprise
* **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
 * 
 * Retrieves a paginated list of all provisioned enterprise members, including pending invitations.
 * 
 * When a user with a SAML-provisioned external identity leaves (or is removed from) an enterprise, the account's metadata is immediately removed. However, the returned list of user accounts might not always match the organization or enterprise member list you see on GitHub. This can happen in certain cases where an external identity associated with an organization will not match an organization member:
 * - When a user with a SCIM-provisioned external identity is removed from an enterprise, the account's metadata is preserved to allow the user to re-join the organization in the future.
 * - When inviting a user to join an organization, you can expect to see their external identity in the results before they accept the invitation, or if the invitation is cancelled (or never accepted).
 * - When a user is invited over SCIM, an external identity is created that matches with the invitee's email address. However, this identity is only linked to a user account when the user accepts the invitation by going through SAML SSO.
 * 
 * The returned list of external identities can include an entry for a `null` user. These are unlinked SAML identities that are created when a user goes through the following Single Sign-On (SSO) process but does not sign in to their GitHub account after completing SSO:
 * 
 * 1. The user is granted access by the IdP and is not a member of the GitHub enterprise.
 * 
 * 1. The user attempts to access the GitHub enterprise and initiates the SAML SSO process, and is not currently signed in to their GitHub account.
 * 
 * 1. After successfully authenticating with the SAML SSO IdP, the `null` external identity entry is created and the user is prompted to sign in to their GitHub account:
 * - If the user signs in, their GitHub account is linked to this entry.
 * - If the user does not sign in (or does not create a new account when prompted), they are not added to the GitHub enterprise, and the external identity `null` entry remains in place.
* @param enterprise - The slug version of the enterprise name. You can also substitute this value with the enterprise id.
* @param [startIndex] - Used for pagination: the index of the first result to return.
* @param [filter] - filter results
* @param [count] - Used for pagination: the number of results to return. 
*/
export const listProvisionedIdentitiesEnterprise: ApiHeroEndpoint<
  { enterprise: string; startIndex?: number; filter?: string; count?: number },
  ScimUserListEnterprise
> = {
  id: "enterprise-admin/list-provisioned-identities-enterprise",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/enterprise-admin#provision-and-invite-a-scim-enterprise-user


* Provision and invite a SCIM enterprise user
* **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
 * 
 * Provision enterprise membership for a user, and send organization invitation emails to the email address.
 * 
 * You can optionally include the groups a user will be invited to join. If you do not provide a list of `groups`, the user is provisioned for the enterprise, but no organization invitation emails will be sent.
* @param enterprise - The slug version of the enterprise name. You can also substitute this value with the enterprise id. 
*/
export const provisionAndInviteEnterpriseUser: ApiHeroEndpoint<
  {
    enterprise: string;
    user: {
      name: {
        /**
         * The first name of the user.
         */
        givenName: string;

        /**
         * The last name of the user.
         */
        familyName: string;
      };

      /**
       * List of user emails.
       */
      emails: Array<{
        /**
         * The type of email address.
         */
        type: string;

        /**
         * The email address.
         */
        value: string;

        /**
         * Whether this email address is the primary address.
         */
        primary: boolean;
      }>;

      /**
       * List of SCIM group IDs the user is a member of.
       */
      groups?: Array<{
        value?: string;
      }>;

      /**
       * The SCIM schema URIs.
       */
      schemas: Array<string>;

      /**
       * The username for the user.
       */
      userName: string;
    };
  },
  ScimEnterpriseUser
> = {
  id: "enterprise-admin/provision-and-invite-enterprise-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/enterprise-admin#list-provisioned-scim-groups-for-an-enterprise


* List provisioned SCIM groups for an enterprise
* **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
* @param enterprise - The slug version of the enterprise name. You can also substitute this value with the enterprise id.
* @param [startIndex] - Used for pagination: the index of the first result to return.
* @param [filter] - filter results
* @param [excludedAttributes] - attributes to exclude
* @param [count] - Used for pagination: the number of results to return. 
*/
export const listProvisionedGroupsEnterprise: ApiHeroEndpoint<
  {
    enterprise: string;
    startIndex?: number;
    filter?: string;
    excludedAttributes?: string;
    count?: number;
  },
  ScimGroupListEnterprise
> = {
  id: "enterprise-admin/list-provisioned-groups-enterprise",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/enterprise-admin#provision-a-scim-enterprise-group-and-invite-users


* Provision a SCIM enterprise group and invite users
* **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
 * 
 * Provision an enterprise group, and invite users to the group. This sends invitation emails to the email address of the invited users to join the GitHub organization that the SCIM group corresponds to.
* @param enterprise - The slug version of the enterprise name. You can also substitute this value with the enterprise id. 
*/
export const provisionAndInviteEnterpriseGroup: ApiHeroEndpoint<
  {
    enterprise: string;
    group: {
      members?: Array<{
        /**
         * The SCIM user ID for a user.
         */
        value: string;
      }>;

      /**
       * The SCIM schema URIs.
       */
      schemas: Array<string>;

      /**
       * The name of the SCIM group. This must match the GitHub organization that the group maps to.
       */
      displayName: string;
    };
  },
  ScimEnterpriseGroup
> = {
  id: "enterprise-admin/provision-and-invite-enterprise-group",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#list-self-hosted-runners-for-an-enterprise


* List self-hosted runners for an enterprise
* Lists all self-hosted runners configured for an enterprise.
 * 
 * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
* @param enterprise - The slug version of the enterprise name. You can also substitute this value with the enterprise id.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listSelfHostedRunnersForEnterprise: ApiHeroEndpoint<
  { enterprise: string; perPage?: number; page?: number },
  {
    runners?: Array<Runner>;
    total_count?: number;
  },
  { Link: Link }
> = {
  id: "enterprise-admin/list-self-hosted-runners-for-enterprise",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#get-github-actions-permissions-for-an-enterprise


* Get GitHub Actions permissions for an enterprise
* Gets the GitHub Actions permissions policy for organizations and allowed actions and reusable workflows in an enterprise.
 * 
 * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
* @param enterprise - The slug version of the enterprise name. You can also substitute this value with the enterprise id. 
*/
export const getGithubActionsPermissionsEnterprise: ApiHeroEndpoint<
  { enterprise: string },
  ActionsEnterprisePermissions
> = {
  id: "enterprise-admin/get-github-actions-permissions-enterprise",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#set-github-actions-permissions-for-an-enterprise


* Set GitHub Actions permissions for an enterprise
* Sets the GitHub Actions permissions policy for organizations and allowed actions and reusable workflows in an enterprise.
 * 
 * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
* @param enterprise - The slug version of the enterprise name. You can also substitute this value with the enterprise id. 
*/
export const setGithubActionsPermissionsEnterprise: ApiHeroEndpoint<
  {
    enterprise: string;
    action: {
      allowed_actions?: AllowedActions;
      enabled_organizations: EnabledOrganizations;
    };
  },
  void
> = {
  id: "enterprise-admin/set-github-actions-permissions-enterprise",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#list-self-hosted-runner-groups-for-an-enterprise


* List self-hosted runner groups for an enterprise
* Lists all self-hosted runner groups for an enterprise.
 * 
 * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
* @param enterprise - The slug version of the enterprise name. You can also substitute this value with the enterprise id.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch.
* @param [visibleToOrganization] - Only return runner groups that are allowed to be used by this organization. 
*/
export const listSelfHostedRunnerGroupsForEnterprise: ApiHeroEndpoint<
  { enterprise: string; perPage?: number; page?: number; visibleToOrganization?: string },
  {
    total_count: number;
    runner_groups: Array<RunnerGroupsEnterprise>;
  }
> = {
  id: "enterprise-admin/list-self-hosted-runner-groups-for-enterprise",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#create-self-hosted-runner-group-for-an-enterprise


* Create a self-hosted runner group for an enterprise
* Creates a new self-hosted runner group for an enterprise.
 * 
 * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
* @param enterprise - The slug version of the enterprise name. You can also substitute this value with the enterprise id. 
*/
export const createSelfHostedRunnerGroupForEnterprise: ApiHeroEndpoint<
  {
    enterprise: string;
    runnerGroup: {
      /**
       * Name of the runner group.
       */
      name: string;

      /**
       * List of runner IDs to add to the runner group.
       * Unique identifier of the runner.
       */
      runners?: Array<number>;

      /**
       * Visibility of a runner group. You can select all organizations or select individual organization.
       */
      visibility?: "selected" | "all";

      /**
       * List of workflows the runner group should be allowed to run. This setting will be ignored unless `restricted_to_workflows` is set to `true`.
       * Name of workflow the runner group should be allowed to run. Note that a ref, tag, or long SHA is required.
       *
       * @example
       * ["octo-org/octo-repo/.github/workflows/deploy.yaml@main"]
       */
      selected_workflows?: Array<string>;

      /**
       * If `true`, the runner group will be restricted to running only the workflows specified in the `selected_workflows` array.
       */
      restricted_to_workflows?: boolean;

      /**
       * List of organization IDs that can access the runner group.
       * Unique identifier of the organization.
       */
      selected_organization_ids?: Array<number>;

      /**
       * Whether the runner group can be used by `public` repositories.
       */
      allows_public_repositories?: boolean;
    };
  },
  RunnerGroupsEnterprise
> = {
  id: "enterprise-admin/create-self-hosted-runner-group-for-enterprise",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#list-runner-applications-for-an-enterprise


* List runner applications for an enterprise
* Lists binaries for the runner application that you can download and run.
 * 
 * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
* @param enterprise - The slug version of the enterprise name. You can also substitute this value with the enterprise id. 
*/
export const listRunnerApplicationsForEnterprise: ApiHeroEndpoint<
  { enterprise: string },
  Array<RunnerApplication>
> = {
  id: "enterprise-admin/list-runner-applications-for-enterprise",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#get-a-self-hosted-runner-for-an-enterprise


* Get a self-hosted runner for an enterprise
* Gets a specific self-hosted runner configured in an enterprise.
 * 
 * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
* @param runnerId - Unique identifier of the self-hosted runner.
* @param enterprise - The slug version of the enterprise name. You can also substitute this value with the enterprise id. 
*/
export const getSelfHostedRunnerForEnterprise: ApiHeroEndpoint<
  { runnerId: number; enterprise: string },
  Runner
> = {
  id: "enterprise-admin/get-self-hosted-runner-for-enterprise",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#delete-self-hosted-runner-from-an-enterprise


* Delete a self-hosted runner from an enterprise
* Forces the removal of a self-hosted runner from an enterprise. You can use this endpoint to completely remove the runner when the machine you were using no longer exists.
 * 
 * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
* @param runnerId - Unique identifier of the self-hosted runner.
* @param enterprise - The slug version of the enterprise name. You can also substitute this value with the enterprise id. 
*/
export const deleteSelfHostedRunnerFromEnterprise: ApiHeroEndpoint<
  { runnerId: number; enterprise: string },
  void
> = {
  id: "enterprise-admin/delete-self-hosted-runner-from-enterprise",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#create-a-remove-token-for-an-enterprise


* Create a remove token for an enterprise
* Returns a token that you can pass to the `config` script to remove a self-hosted runner from an enterprise. The token expires after one hour.
 * 
 * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
 * 
 * #### Example using remove token
 * 
 * To remove your self-hosted runner from an enterprise, replace `TOKEN` with the remove token provided by this
 * endpoint.
 * 
 * ```
 * ./config.sh remove --token TOKEN
 * ```
* @param enterprise - The slug version of the enterprise name. You can also substitute this value with the enterprise id. 
*/
export const createRemoveTokenForEnterprise: ApiHeroEndpoint<
  { enterprise: string },
  AuthenticationToken
> = {
  id: "enterprise-admin/create-remove-token-for-enterprise",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/enterprise-admin#get-scim-provisioning-information-for-an-enterprise-user


* Get SCIM provisioning information for an enterprise user
* **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
* @param scimUserId - The unique identifier of the SCIM user.
* @param enterprise - The slug version of the enterprise name. You can also substitute this value with the enterprise id. 
*/
export const getProvisioningInformationForEnterpriseUser: ApiHeroEndpoint<
  { scimUserId: string; enterprise: string },
  ScimEnterpriseUser
> = {
  id: "enterprise-admin/get-provisioning-information-for-enterprise-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/enterprise-admin#set-scim-information-for-a-provisioned-enterprise-user


* Set SCIM information for a provisioned enterprise user
* **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
 * 
 * Replaces an existing provisioned user's information. You must provide all the information required for the user as if you were provisioning them for the first time. Any existing user information that you don't provide will be removed. If you want to only update a specific attribute, use the [Update an attribute for a SCIM user](#update-an-attribute-for-an-enterprise-scim-user) endpoint instead.
 * 
 * You must at least provide the required values for the user: `userName`, `name`, and `emails`.
 * 
 * **Warning:** Setting `active: false` removes the user from the enterprise, deletes the external identity, and deletes the associated `{scim_user_id}`.
* @param scimUserId - The unique identifier of the SCIM user.
* @param enterprise - The slug version of the enterprise name. You can also substitute this value with the enterprise id. 
*/
export const setInformationForProvisionedEnterpriseUser: ApiHeroEndpoint<
  {
    scimUserId: string;
    enterprise: string;
    user: {
      name: {
        /**
         * The first name of the user.
         */
        givenName: string;

        /**
         * The last name of the user.
         */
        familyName: string;
      };

      /**
       * List of user emails.
       */
      emails: Array<{
        /**
         * The type of email address.
         */
        type: string;

        /**
         * The email address.
         */
        value: string;

        /**
         * Whether this email address is the primary address.
         */
        primary: boolean;
      }>;

      /**
       * List of SCIM group IDs the user is a member of.
       */
      groups?: Array<{
        value?: string;
      }>;

      /**
       * The SCIM schema URIs.
       */
      schemas: Array<string>;

      /**
       * The username for the user.
       */
      userName: string;
    };
  },
  ScimEnterpriseUser
> = {
  id: "enterprise-admin/set-information-for-provisioned-enterprise-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/enterprise-admin#delete-a-scim-user-from-an-enterprise


* Delete a SCIM user from an enterprise
* **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
* @param scimUserId - The unique identifier of the SCIM user.
* @param enterprise - The slug version of the enterprise name. You can also substitute this value with the enterprise id. 
*/
export const deleteUserFromEnterprise: ApiHeroEndpoint<
  { scimUserId: string; enterprise: string },
  void
> = {
  id: "enterprise-admin/delete-user-from-enterprise",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/enterprise-admin#update-an-attribute-for-a-scim-enterprise-user


* Update an attribute for a SCIM enterprise user
* **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
 * 
 * Allows you to change a provisioned user's individual attributes. To change a user's values, you must provide a specific `Operations` JSON format that contains at least one of the `add`, `remove`, or `replace` operations. For examples and more information on the SCIM operations format, see the [SCIM specification](https://tools.ietf.org/html/rfc7644#section-3.5.2).
 * 
 * **Note:** Complicated SCIM `path` selectors that include filters are not supported. For example, a `path` selector defined as `"path": "emails[type eq \"work\"]"` will not work.
 * 
 * **Warning:** If you set `active:false` using the `replace` operation (as shown in the JSON example below), it removes the user from the enterprise, deletes the external identity, and deletes the associated `:scim_user_id`.
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
* @param scimUserId - The unique identifier of the SCIM user.
* @param enterprise - The slug version of the enterprise name. You can also substitute this value with the enterprise id. 
*/
export const updateAttributeForEnterpriseUser: ApiHeroEndpoint<
  {
    scimUserId: string;
    enterprise: string;
    user: {
      /**
       * The SCIM schema URIs.
       */
      schemas: Array<string>;

      /**
       * Array of [SCIM operations](https://tools.ietf.org/html/rfc7644#section-3.5.2).
       */
      Operations: Array<{}>;
    };
  },
  ScimEnterpriseUser
> = {
  id: "enterprise-admin/update-attribute-for-enterprise-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/enterprise-admin#get-scim-provisioning-information-for-an-enterprise-group


* Get SCIM provisioning information for an enterprise group
* **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
* @param enterprise - The slug version of the enterprise name. You can also substitute this value with the enterprise id.
* @param scimGroupId - Identifier generated by the GitHub SCIM endpoint.
* @param [excludedAttributes] - Attributes to exclude. 
*/
export const getProvisioningInformationForEnterpriseGroup: ApiHeroEndpoint<
  { enterprise: string; scimGroupId: string; excludedAttributes?: string },
  ScimEnterpriseGroup
> = {
  id: "enterprise-admin/get-provisioning-information-for-enterprise-group",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/enterprise-admin#set-scim-information-for-a-provisioned-enterprise-group


* Set SCIM information for a provisioned enterprise group
* **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
 * 
 * Replaces an existing provisioned group’s information. You must provide all the information required for the group as if you were provisioning it for the first time. Any existing group information that you don't provide will be removed, including group membership. If you want to only update a specific attribute, use the [Update an attribute for a SCIM enterprise group](#update-an-attribute-for-a-scim-enterprise-group) endpoint instead.
* @param enterprise - The slug version of the enterprise name. You can also substitute this value with the enterprise id.
* @param scimGroupId - Identifier generated by the GitHub SCIM endpoint. 
*/
export const setInformationForProvisionedEnterpriseGroup: ApiHeroEndpoint<
  {
    enterprise: string;
    scimGroupId: string;
    group: {
      members?: Array<{
        /**
         * The SCIM user ID for a user.
         */
        value: string;
      }>;

      /**
       * The SCIM schema URIs.
       */
      schemas: Array<string>;

      /**
       * The name of the SCIM group. This must match the GitHub organization that the group maps to.
       */
      displayName: string;
    };
  },
  ScimEnterpriseGroup
> = {
  id: "enterprise-admin/set-information-for-provisioned-enterprise-group",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/enterprise-admin#delete-a-scim-group-from-an-enterprise


* Delete a SCIM group from an enterprise
* **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
* @param enterprise - The slug version of the enterprise name. You can also substitute this value with the enterprise id.
* @param scimGroupId - Identifier generated by the GitHub SCIM endpoint. 
*/
export const deleteScimGroupFromEnterprise: ApiHeroEndpoint<
  { enterprise: string; scimGroupId: string },
  void
> = {
  id: "enterprise-admin/delete-scim-group-from-enterprise",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/enterprise-admin#update-an-attribute-for-a-scim-enterprise-group


* Update an attribute for a SCIM enterprise group
* **Note:** The SCIM API endpoints for enterprise accounts are currently in beta and are subject to change.
 * 
 * Allows you to change a provisioned group’s individual attributes. To change a group’s values, you must provide a specific Operations JSON format that contains at least one of the add, remove, or replace operations. For examples and more information on the SCIM operations format, see the [SCIM specification](https://tools.ietf.org/html/rfc7644#section-3.5.2).
* @param enterprise - The slug version of the enterprise name. You can also substitute this value with the enterprise id.
* @param scimGroupId - Identifier generated by the GitHub SCIM endpoint. 
*/
export const updateAttributeForEnterpriseGroup: ApiHeroEndpoint<
  {
    enterprise: string;
    scimGroupId: string;
    group: {
      /**
       * The SCIM schema URIs.
       */
      schemas: Array<string>;

      /**
       * Array of [SCIM operations](https://tools.ietf.org/html/rfc7644#section-3.5.2).
       */
      Operations: Array<{
        op: "add" | "Add" | "remove" | "Remove" | "replace" | "Replace";
        path?: string;

        /**
         * Can be any value - string, number, array or object.
         */
        value?: {};
      }>;
    };
  },
  ScimEnterpriseGroup
> = {
  id: "enterprise-admin/update-attribute-for-enterprise-group",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#list-selected-organizations-enabled-for-github-actions-in-an-enterprise


* List selected organizations enabled for GitHub Actions in an enterprise
* Lists the organizations that are selected to have GitHub Actions enabled in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
 * 
 * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
* @param enterprise - The slug version of the enterprise name. You can also substitute this value with the enterprise id.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listSelectedOrganizationsEnabledGithubActionsEnterprise: ApiHeroEndpoint<
  { enterprise: string; perPage?: number; page?: number },
  {
    total_count: number;
    organizations: Array<OrganizationSimple>;
  }
> = {
  id: "enterprise-admin/list-selected-organizations-enabled-github-actions-enterprise",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#set-selected-organizations-enabled-for-github-actions-in-an-enterprise


* Set selected organizations enabled for GitHub Actions in an enterprise
* Replaces the list of selected organizations that are enabled for GitHub Actions in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
 * 
 * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
* @param enterprise - The slug version of the enterprise name. You can also substitute this value with the enterprise id. 
*/
export const setSelectedOrganizationsEnabledGithubActionsEnterprise: ApiHeroEndpoint<
  {
    enterprise: string;
    permission: {
      /**
       * List of organization IDs to enable for GitHub Actions.
       * Unique identifier of the organization.
       */
      selected_organization_ids: Array<number>;
    };
  },
  void
> = {
  id: "enterprise-admin/set-selected-organizations-enabled-github-actions-enterprise",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#create-a-registration-token-for-an-enterprise


* Create a registration token for an enterprise
* Returns a token that you can pass to the `config` script. The token expires after one hour.
 * 
 * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
 * 
 * #### Example using registration token
 * 
 * Configure your self-hosted runner, replacing `TOKEN` with the registration token provided by this endpoint.
 * 
 * ```
 * ./config.sh --url https://github.com/enterprises/octo-enterprise --token TOKEN
 * ```
* @param enterprise - The slug version of the enterprise name. You can also substitute this value with the enterprise id. 
*/
export const createRegistrationTokenForEnterprise: ApiHeroEndpoint<
  { enterprise: string },
  AuthenticationToken
> = {
  id: "enterprise-admin/create-registration-token-for-enterprise",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#list-labels-for-a-self-hosted-runner-for-an-enterprise


* List labels for a self-hosted runner for an enterprise
* Lists all labels for a self-hosted runner configured in an enterprise.
 * 
 * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
* @param runnerId - Unique identifier of the self-hosted runner.
* @param enterprise - The slug version of the enterprise name. You can also substitute this value with the enterprise id. 
*/
export const listLabelsForSelfHostedRunnerForEnterprise: ApiHeroEndpoint<
  { runnerId: number; enterprise: string },
  {
    labels: Array<RunnerLabel>;
    total_count: number;
  }
> = {
  id: "enterprise-admin/list-labels-for-self-hosted-runner-for-enterprise",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#add-custom-labels-to-a-self-hosted-runner-for-an-enterprise


* Add custom labels to a self-hosted runner for an enterprise
* Add custom labels to a self-hosted runner configured in an enterprise.
 * 
 * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
* @param runnerId - Unique identifier of the self-hosted runner.
* @param enterprise - The slug version of the enterprise name. You can also substitute this value with the enterprise id. 
*/
export const addCustomLabelsToSelfHostedRunnerForEnterprise: ApiHeroEndpoint<
  {
    runnerId: number;
    enterprise: string;
    label: {
      /**
       * The names of the custom labels to add to the runner.
       */
      labels: Array<string>;
    };
  },
  {
    labels: Array<RunnerLabel>;
    total_count: number;
  }
> = {
  id: "enterprise-admin/add-custom-labels-to-self-hosted-runner-for-enterprise",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#set-custom-labels-for-a-self-hosted-runner-for-an-enterprise


* Set custom labels for a self-hosted runner for an enterprise
* Remove all previous custom labels and set the new custom labels for a specific
 * self-hosted runner configured in an enterprise.
 * 
 * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
* @param runnerId - Unique identifier of the self-hosted runner.
* @param enterprise - The slug version of the enterprise name. You can also substitute this value with the enterprise id. 
*/
export const setCustomLabelsForSelfHostedRunnerForEnterprise: ApiHeroEndpoint<
  {
    runnerId: number;
    enterprise: string;
    payload: {
      /**
       * The names of the custom labels to set for the runner. You can pass an empty array to remove all custom labels.
       */
      labels: Array<string>;
    };
  },
  {
    labels: Array<RunnerLabel>;
    total_count: number;
  }
> = {
  id: "enterprise-admin/set-custom-labels-for-self-hosted-runner-for-enterprise",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#remove-all-custom-labels-from-a-self-hosted-runner-for-an-enterprise


* Remove all custom labels from a self-hosted runner for an enterprise
* Remove all custom labels from a self-hosted runner configured in an
 * enterprise. Returns the remaining read-only labels from the runner.
 * 
 * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
* @param runnerId - Unique identifier of the self-hosted runner.
* @param enterprise - The slug version of the enterprise name. You can also substitute this value with the enterprise id. 
*/
export const removeAllCustomLabelsFromSelfHostedRunnerForEnterprise: ApiHeroEndpoint<
  { runnerId: number; enterprise: string },
  {
    labels: Array<RunnerLabel>;
    total_count: number;
  }
> = {
  id: "enterprise-admin/remove-all-custom-labels-from-self-hosted-runner-for-enterprise",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/enterprise-admin#get-github-enterprise-server-statistics


* Get GitHub Enterprise Server statistics
* Returns aggregate usage metrics for your GitHub Enterprise Server 3.5+ instance for a specified time period up to 365 days.
 * 
 * To use this endpoint, your GitHub Enterprise Server instance must be connected to GitHub Enterprise Cloud using GitHub Connect. You must enable Server Statistics, and for the API request provide your enterprise account name or organization name connected to the GitHub Enterprise Server. For more information, see "[Enabling Server Statistics for your enterprise](/admin/configuration/configuring-github-connect/enabling-server-statistics-for-your-enterprise)" in the GitHub Enterprise Server documentation.
 * 
 * You'll need to use a personal access token:
 * - If you connected your GitHub Enterprise Server to an enterprise account and enabled Server Statistics, you'll need a personal access token with the `read:enterprise` permission.
 * - If you connected your GitHub Enterprise Server to an organization account and enabled Server Statistics, you'll need a personal access token with the `read:org` permission.
 * 
 * For more information on creating a personal access token, see "[Creating a personal access token](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)."
* @param enterpriseOrOrg - The slug version of the enterprise name or the login of an organization.
* @param [dateEnd] - A cursor, as given in the [Link header](https://docs.github.com/rest/overview/resources-in-the-rest-api#link-header). If specified, the query only searches for events before this cursor.
* @param [dateStart] - A cursor, as given in the [Link header](https://docs.github.com/rest/overview/resources-in-the-rest-api#link-header). If specified, the query only searches for events after this cursor. 
*/
export const getServerStatistics: ApiHeroEndpoint<
  { enterpriseOrOrg: string; dateEnd?: string; dateStart?: string },
  ServerStatistics
> = {
  id: "enterprise-admin/get-server-statistics",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#get-allowed-actions-for-an-enterprise


* Get allowed actions and reusable workflows for an enterprise
* Gets the selected actions and reusable workflows that are allowed in an enterprise. To use this endpoint, the enterprise permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
 * 
 * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
* @param enterprise - The slug version of the enterprise name. You can also substitute this value with the enterprise id. 
*/
export const getAllowedActionsEnterprise: ApiHeroEndpoint<{ enterprise: string }, SelectedActions> =
  {
    id: "enterprise-admin/get-allowed-actions-enterprise",
    clientId: "github",
  };

/** 
* @see https://docs.github.com/rest/reference/actions#set-allowed-actions-for-an-enterprise


* Set allowed actions and reusable workflows for an enterprise
* Sets the actions and reusable workflows that are allowed in an enterprise. To use this endpoint, the enterprise permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
 * 
 * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
* @param enterprise - The slug version of the enterprise name. You can also substitute this value with the enterprise id. 
*/
export const setAllowedActionsEnterprise: ApiHeroEndpoint<
  { enterprise: string; permission: SelectedActions },
  void
> = {
  id: "enterprise-admin/set-allowed-actions-enterprise",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#get-a-self-hosted-runner-group-for-an-enterprise


* Get a self-hosted runner group for an enterprise
* Gets a specific self-hosted runner group for an enterprise.
 * 
 * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
* @param runnerGroupId - Unique identifier of the self-hosted runner group.
* @param enterprise - The slug version of the enterprise name. You can also substitute this value with the enterprise id. 
*/
export const getSelfHostedRunnerGroupForEnterprise: ApiHeroEndpoint<
  { runnerGroupId: number; enterprise: string },
  RunnerGroupsEnterprise
> = {
  id: "enterprise-admin/get-self-hosted-runner-group-for-enterprise",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#delete-a-self-hosted-runner-group-from-an-enterprise


* Delete a self-hosted runner group from an enterprise
* Deletes a self-hosted runner group for an enterprise.
 * 
 * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
* @param runnerGroupId - Unique identifier of the self-hosted runner group.
* @param enterprise - The slug version of the enterprise name. You can also substitute this value with the enterprise id. 
*/
export const deleteSelfHostedRunnerGroupFromEnterprise: ApiHeroEndpoint<
  { runnerGroupId: number; enterprise: string },
  void
> = {
  id: "enterprise-admin/delete-self-hosted-runner-group-from-enterprise",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#update-a-self-hosted-runner-group-for-an-enterprise


* Update a self-hosted runner group for an enterprise
* Updates the `name` and `visibility` of a self-hosted runner group in an enterprise.
 * 
 * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
* @param runnerGroupId - Unique identifier of the self-hosted runner group.
* @param enterprise - The slug version of the enterprise name. You can also substitute this value with the enterprise id. 
*/
export const updateSelfHostedRunnerGroupForEnterprise: ApiHeroEndpoint<
  {
    runnerGroupId: number;
    enterprise: string;
    runnerGroup?: {
      /**
       * Name of the runner group.
       */
      name?: string;

      /**
       * Visibility of a runner group. You can select all organizations or select individual organizations.
       */
      visibility?: "selected" | "all";

      /**
       * List of workflows the runner group should be allowed to run. This setting will be ignored unless `restricted_to_workflows` is set to `true`.
       * Name of workflow the runner group should be allowed to run. Note that a ref, tag, or long SHA is required.
       *
       * @example
       * ["octo-org/octo-repo/.github/workflows/deploy.yaml@main"]
       */
      selected_workflows?: Array<string>;

      /**
       * If `true`, the runner group will be restricted to running only the workflows specified in the `selected_workflows` array.
       */
      restricted_to_workflows?: boolean;

      /**
       * Whether the runner group can be used by `public` repositories.
       */
      allows_public_repositories?: boolean;
    };
  },
  RunnerGroupsEnterprise
> = {
  id: "enterprise-admin/update-self-hosted-runner-group-for-enterprise",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#remove-a-custom-label-from-a-self-hosted-runner-for-an-enterprise


* Remove a custom label from a self-hosted runner for an enterprise
* Remove a custom label from a self-hosted runner configured
 * in an enterprise. Returns the remaining labels from the runner.
 * 
 * This endpoint returns a `404 Not Found` status if the custom label is not
 * present on the runner.
 * 
 * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
* @param runnerId - Unique identifier of the self-hosted runner.
* @param enterprise - The slug version of the enterprise name. You can also substitute this value with the enterprise id.
* @param name - The name of a self-hosted runner's custom label. 
*/
export const removeCustomLabelFromSelfHostedRunnerForEnterprise: ApiHeroEndpoint<
  { runnerId: number; enterprise: string; name: string },
  {
    labels: Array<RunnerLabel>;
    total_count: number;
  }
> = {
  id: "enterprise-admin/remove-custom-label-from-self-hosted-runner-for-enterprise",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#enable-a-selected-organization-for-github-actions-in-an-enterprise


* Enable a selected organization for GitHub Actions in an enterprise
* Adds an organization to the list of selected organizations that are enabled for GitHub Actions in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
 * 
 * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
* @param orgId - The unique identifier of the organization.
* @param enterprise - The slug version of the enterprise name. You can also substitute this value with the enterprise id. 
*/
export const enableSelectedOrganizationGithubActionsEnterprise: ApiHeroEndpoint<
  { orgId: number; enterprise: string },
  void
> = {
  id: "enterprise-admin/enable-selected-organization-github-actions-enterprise",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#disable-a-selected-organization-for-github-actions-in-an-enterprise


* Disable a selected organization for GitHub Actions in an enterprise
* Removes an organization from the list of selected organizations that are enabled for GitHub Actions in an enterprise. To use this endpoint, the enterprise permission policy for `enabled_organizations` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an enterprise](#set-github-actions-permissions-for-an-enterprise)."
 * 
 * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
* @param orgId - The unique identifier of the organization.
* @param enterprise - The slug version of the enterprise name. You can also substitute this value with the enterprise id. 
*/
export const disableSelectedOrganizationGithubActionsEnterprise: ApiHeroEndpoint<
  { orgId: number; enterprise: string },
  void
> = {
  id: "enterprise-admin/disable-selected-organization-github-actions-enterprise",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#list-self-hosted-runners-in-a-group-for-an-enterprise


* List self-hosted runners in a group for an enterprise
* Lists the self-hosted runners that are in a specific enterprise group.
 * 
 * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
* @param runnerGroupId - Unique identifier of the self-hosted runner group.
* @param enterprise - The slug version of the enterprise name. You can also substitute this value with the enterprise id.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listSelfHostedRunnersInGroupForEnterprise: ApiHeroEndpoint<
  { runnerGroupId: number; enterprise: string; perPage?: number; page?: number },
  {
    runners: Array<Runner>;
    total_count: number;
  },
  { Link: Link }
> = {
  id: "enterprise-admin/list-self-hosted-runners-in-group-for-enterprise",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-enterprise


* Set self-hosted runners in a group for an enterprise
* Replaces the list of self-hosted runners that are part of an enterprise runner group.
 * 
 * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
* @param runnerGroupId - Unique identifier of the self-hosted runner group.
* @param enterprise - The slug version of the enterprise name. You can also substitute this value with the enterprise id. 
*/
export const setSelfHostedRunnersInGroupForEnterprise: ApiHeroEndpoint<
  {
    runnerGroupId: number;
    enterprise: string;
    payload: {
      /**
       * List of runner IDs to add to the runner group.
       * Unique identifier of the runner.
       */
      runners: Array<number>;
    };
  },
  void
> = {
  id: "enterprise-admin/set-self-hosted-runners-in-group-for-enterprise",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#list-organization-access-to-a-self-hosted-runner-group-in-a-enterprise


* List organization access to a self-hosted runner group in an enterprise
* Lists the organizations with access to a self-hosted runner group.
 * 
 * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
* @param runnerGroupId - Unique identifier of the self-hosted runner group.
* @param enterprise - The slug version of the enterprise name. You can also substitute this value with the enterprise id.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listOrgAccessToSelfHostedRunnerGroupInEnterprise: ApiHeroEndpoint<
  { runnerGroupId: number; enterprise: string; perPage?: number; page?: number },
  {
    total_count: number;
    organizations: Array<OrganizationSimple>;
  }
> = {
  id: "enterprise-admin/list-org-access-to-self-hosted-runner-group-in-enterprise",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#set-organization-access-to-a-self-hosted-runner-group-in-an-enterprise


* Set organization access for a self-hosted runner group in an enterprise
* Replaces the list of organizations that have access to a self-hosted runner configured in an enterprise.
 * 
 * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
* @param runnerGroupId - Unique identifier of the self-hosted runner group.
* @param enterprise - The slug version of the enterprise name. You can also substitute this value with the enterprise id. 
*/
export const setOrgAccessToSelfHostedRunnerGroupInEnterprise: ApiHeroEndpoint<
  {
    runnerGroupId: number;
    enterprise: string;
    payload: {
      /**
       * List of organization IDs that can access the runner group.
       * Unique identifier of the organization.
       */
      selected_organization_ids: Array<number>;
    };
  },
  void
> = {
  id: "enterprise-admin/set-org-access-to-self-hosted-runner-group-in-enterprise",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#add-a-self-hosted-runner-to-a-group-for-an-enterprise


* Add a self-hosted runner to a group for an enterprise
* Adds a self-hosted runner to a runner group configured in an enterprise.
 * 
 * You must authenticate using an access token with the `manage_runners:enterprise`
 * scope to use this endpoint.
* @param runnerId - Unique identifier of the self-hosted runner.
* @param runnerGroupId - Unique identifier of the self-hosted runner group.
* @param enterprise - The slug version of the enterprise name. You can also substitute this value with the enterprise id. 
*/
export const addSelfHostedRunnerToGroupForEnterprise: ApiHeroEndpoint<
  { runnerId: number; runnerGroupId: number; enterprise: string },
  void
> = {
  id: "enterprise-admin/add-self-hosted-runner-to-group-for-enterprise",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-enterprise


* Remove a self-hosted runner from a group for an enterprise
* Removes a self-hosted runner from a group configured in an enterprise. The runner is then returned to the default group.
 * 
 * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
* @param runnerId - Unique identifier of the self-hosted runner.
* @param runnerGroupId - Unique identifier of the self-hosted runner group.
* @param enterprise - The slug version of the enterprise name. You can also substitute this value with the enterprise id. 
*/
export const removeSelfHostedRunnerFromGroupForEnterprise: ApiHeroEndpoint<
  { runnerId: number; runnerGroupId: number; enterprise: string },
  void
> = {
  id: "enterprise-admin/remove-self-hosted-runner-from-group-for-enterprise",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#add-organization-access-to-a-self-hosted-runner-group-in-an-enterprise


* Add organization access to a self-hosted runner group in an enterprise
* Adds an organization to the list of selected organizations that can access a self-hosted runner group. The runner group must have `visibility` set to `selected`. For more information, see "[Create a self-hosted runner group for an enterprise](#create-a-self-hosted-runner-group-for-an-enterprise)."
 * 
 * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
* @param orgId - The unique identifier of the organization.
* @param runnerGroupId - Unique identifier of the self-hosted runner group.
* @param enterprise - The slug version of the enterprise name. You can also substitute this value with the enterprise id. 
*/
export const addOrgAccessToSelfHostedRunnerGroupInEnterprise: ApiHeroEndpoint<
  { orgId: number; runnerGroupId: number; enterprise: string },
  void
> = {
  id: "enterprise-admin/add-org-access-to-self-hosted-runner-group-in-enterprise",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#remove-organization-access-to-a-self-hosted-runner-group-in-an-enterprise


* Remove organization access to a self-hosted runner group in an enterprise
* Removes an organization from the list of selected organizations that can access a self-hosted runner group. The runner group must have `visibility` set to `selected`. For more information, see "[Create a self-hosted runner group for an enterprise](#create-a-self-hosted-runner-group-for-an-enterprise)."
 * 
 * You must authenticate using an access token with the `manage_runners:enterprise` scope to use this endpoint.
* @param orgId - The unique identifier of the organization.
* @param runnerGroupId - Unique identifier of the self-hosted runner group.
* @param enterprise - The slug version of the enterprise name. You can also substitute this value with the enterprise id. 
*/
export const removeOrgAccessToSelfHostedRunnerGroupInEnterprise: ApiHeroEndpoint<
  { orgId: number; runnerGroupId: number; enterprise: string },
  void
> = {
  id: "enterprise-admin/remove-org-access-to-self-hosted-runner-group-in-enterprise",
  clientId: "github",
};
