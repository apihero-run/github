import {
  AuditLogEvent,
  CredentialAuthorization,
  HookDelivery,
  HookDeliveryItem,
  Installation,
  OrganizationCustomRepositoryRole,
  OrganizationFull,
  OrganizationInvitation,
  OrganizationSimple,
  OrgHook,
  OrgMembership,
  SimpleUser,
  Team,
  TeamSimple,
  WebhookConfig,
  WebhookConfigContentType,
  WebhookConfigInsecureSsl,
  WebhookConfigSecret,
  WebhookConfigUrl,
  ApiHeroEndpoint,
} from "./@types";

/** 
* @see https://docs.github.com/rest/reference/orgs#list-organizations-for-the-authenticated-user


* List organizations for the authenticated user
* List organizations for the authenticated user.
 * 
 * **OAuth scope requirements**
 * 
 * This only lists organizations that your authorization allows you to operate on in some way (e.g., you can list teams with `read:org` scope, you can publicize your organization membership with `user` scope, etc.). Therefore, this API requires at least `user` or `read:org` scope. OAuth requests with insufficient scope receive a `403 Forbidden` response.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listForAuthenticatedUser: ApiHeroEndpoint<
  { perPage?: number; page?: number },
  Array<OrganizationSimple>,
  { Link: string }
> = {
  id: "orgs/list-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/orgs#get-an-organization


* Get an organization
* To see many of the organization response values, you need to be an authenticated organization owner with the `admin:org` scope. When the value of `two_factor_requirement_enabled` is `true`, the organization requires all members, billing managers, and outside collaborators to enable [two-factor authentication](https://docs.github.com/articles/securing-your-account-with-two-factor-authentication-2fa/).
 * 
 * GitHub Apps with the `Organization plan` permission can use this endpoint to retrieve information about an organization's GitHub plan. See "[Authenticating with GitHub Apps](https://docs.github.com/apps/building-github-apps/authenticating-with-github-apps/)" for details. For an example response, see 'Response with GitHub plan information' below."
* @param org - The organization name. The name is not case sensitive. 
*/
export const getOrgs: ApiHeroEndpoint<{ org: string }, OrganizationFull> = {
  id: "orgs/get",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/orgs/#update-an-organization


* Update an organization
* **Parameter Deprecation Notice:** GitHub will replace and discontinue `members_allowed_repository_creation_type` in favor of more granular permissions. The new input parameters are `members_can_create_public_repositories`, `members_can_create_private_repositories` for all organizations and `members_can_create_internal_repositories` for organizations associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+. For more information, see the [blog post](https://developer.github.com/changes/2019-12-03-internal-visibility-changes).
 * 
 * Enables an authenticated organization owner with the `admin:org` scope to update the organization's profile and member privileges.
* @param org - The organization name. The name is not case sensitive. 
*/
export const update: ApiHeroEndpoint<
  {
    org: string;
    payload?: {
      /**
       *
       * @example
       * "\"http://github.blog\""
       */
      blog?: string;

      /**
       * The shorthand name of the company.
       */
      name?: string;

      /**
       * The publicly visible email address.
       */
      email?: string;

      /**
       * The company name.
       */
      company?: string;

      /**
       * The location.
       */
      location?: string;

      /**
       * The description of the company.
       */
      description?: string;

      /**
       * Billing email address. This address is not publicized.
       */
      billing_email?: string;

      /**
       * The Twitter username of the company.
       */
      twitter_username?: string;

      /**
       * Whether repositories that belong to the organization can use repository projects.
       */
      has_repository_projects?: boolean;

      /**
       * Whether organization members can create GitHub Pages sites. Existing published sites will not be impacted.
       */
      members_can_create_pages?: boolean;

      /**
       * Whether an organization can use organization projects.
       */
      has_organization_projects?: boolean;

      /**
       * Default permission level members have for organization repositories.
       */
      default_repository_permission?: "read" | "write" | "admin" | "none";

      /**
       * Whether organization members can create public GitHub Pages sites. Existing published sites will not be impacted.
       */
      members_can_create_public_pages?: boolean;

      /**
       * Whether of non-admin organization members can create repositories. **Note:** A parameter can override this parameter. See `members_allowed_repository_creation_type` in this table for details.
       */
      members_can_create_repositories?: boolean;

      /**
       * Whether organization members can create private GitHub Pages sites. Existing published sites will not be impacted.
       */
      members_can_create_private_pages?: boolean;

      /**
       * Whether organization members can fork private organization repositories.
       */
      members_can_fork_private_repositories?: boolean;

      /**
       * Whether organization members can create public repositories, which are visible to anyone. For more information, see "[Restricting repository creation in your organization](https://docs.github.com/github/setting-up-and-managing-organizations-and-teams/restricting-repository-creation-in-your-organization)" in the GitHub Help documentation.
       */
      members_can_create_public_repositories?: boolean;

      /**
       * Whether organization members can create private repositories, which are visible to organization members with permission. For more information, see "[Restricting repository creation in your organization](https://docs.github.com/github/setting-up-and-managing-organizations-and-teams/restricting-repository-creation-in-your-organization)" in the GitHub Help documentation.
       */
      members_can_create_private_repositories?: boolean;

      /**
       * Specifies which types of repositories non-admin organization members can create. `private` is only available to repositories that are part of an organization on GitHub Enterprise Cloud.
       **Note:** This parameter is deprecated and will be removed in the future. Its return value ignores internal repositories. Using this parameter overrides values set in `members_can_create_repositories`. See the parameter deprecation notice in the operation description for details.
       */
      members_allowed_repository_creation_type?: "all" | "private" | "none";

      /**
       * Whether organization members can create internal repositories, which are visible to all enterprise members. You can only allow members to create internal repositories if your organization is associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+. For more information, see "[Restricting repository creation in your organization](https://docs.github.com/github/setting-up-and-managing-organizations-and-teams/restricting-repository-creation-in-your-organization)" in the GitHub Help documentation.
       */
      members_can_create_internal_repositories?: boolean;
    };
  },
  OrganizationFull
> = {
  id: "orgs/update",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/orgs#list-organizations


* List organizations
* Lists all organizations, in the order that they were created on GitHub.
 * 
 * **Note:** Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://docs.github.com/rest/overview/resources-in-the-rest-api#link-header) to get the URL for the next page of organizations.
* @param [perPage=30] - The number of results per page (max 100).
* @param [since] - An organization ID. Only return organizations with an ID greater than this ID. 
*/
export const list: ApiHeroEndpoint<
  { perPage?: number; since?: number },
  Array<OrganizationSimple>,
  { Link: string }
> = {
  id: "orgs/list",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/orgs#list-organization-webhooks


* List organization webhooks
* @param org - The organization name. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listWebhooks: ApiHeroEndpoint<
  { org: string; perPage?: number; page?: number },
  Array<OrgHook>,
  { Link: string }
> = {
  id: "orgs/list-webhooks",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/orgs#create-an-organization-webhook


* Create an organization webhook
* Here's how you can create a hook that posts payloads in JSON format:
* @param org - The organization name. The name is not case sensitive. 
*/
export const createWebhook: ApiHeroEndpoint<
  {
    org: string;
    hook: {
      /**
       * Must be passed as "web".
       */
      name: string;

      /**
       * Determines if notifications are sent when the webhook is triggered. Set to `true` to send notifications.
       */
      active?: boolean;

      /**
       * Key/value pairs to provide settings for this webhook. [These are defined below](https://docs.github.com/rest/reference/orgs#create-hook-config-params).
       */
      config: {
        url: WebhookConfigUrl;
        secret?: WebhookConfigSecret;

        /**
         *
         * @example
         * "\"password\""
         */
        password?: string;

        /**
         *
         * @example
         * "\"kdaigle\""
         */
        username?: string;
        content_type?: WebhookConfigContentType;
        insecure_ssl?: WebhookConfigInsecureSsl;
      };

      /**
       * Determines what [events](https://docs.github.com/webhooks/event-payloads) the hook is triggered for.
       */
      events?: Array<string>;
    };
  },
  OrgHook,
  { Location: string }
> = {
  id: "orgs/create-webhook",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/orgs#list-users-blocked-by-an-organization


* List users blocked by an organization
* List the users blocked by an organization.
* @param org - The organization name. The name is not case sensitive. 
*/
export const listBlockedUsers: ApiHeroEndpoint<{ org: string }, Array<SimpleUser>> = {
  id: "orgs/list-blocked-users",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/orgs#list-organization-members


* List organization members
* List all users who are members of an organization. If the authenticated user is also a member of this organization then both concealed and public members will be returned.
* @param org - The organization name. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch.
* @param [filter] - Filter members returned in the list. `2fa_disabled` means that only members without [two-factor authentication](https://github.com/blog/1614-two-factor-authentication) enabled will be returned. This options is only available for organization owners.
* @param [role] - Filter members returned by their role. 
*/
export const listMembers: ApiHeroEndpoint<
  {
    org: string;
    perPage?: number;
    page?: number;
    filter?: "2fa_disabled" | "all";
    role?: "all" | "admin" | "member";
  },
  Array<SimpleUser>,
  { Link: string }
> = {
  id: "orgs/list-members",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/orgs#get-audit-log


* Get the audit log for an organization
* Gets the audit log for an organization. For more information, see "[Reviewing the audit log for your organization](https://docs.github.com/github/setting-up-and-managing-organizations-and-teams/reviewing-the-audit-log-for-your-organization)."
 * 
 * This endpoint is available for organizations on GitHub Enterprise Cloud. To use this endpoint, you must be an organization owner, and you must use an access token with the `admin:org` scope. GitHub Apps must have the `organization_administration` read permission to use this endpoint.
 * 
 * By default, the response includes up to 30 events from the past three months. Use the `phrase` parameter to filter results and retrieve older events. For example, use the `phrase` parameter with the `created` qualifier to filter events based on when the events occurred. For more information, see "[Reviewing the audit log for your organization](https://docs.github.com/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization#searching-the-audit-log)."
 * 
 * Use pagination to retrieve fewer or more than 30 events. For more information, see "[Resources in the REST API](https://docs.github.com/rest/overview/resources-in-the-rest-api#pagination)."
* @param org - The organization name. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [order] - The order of audit log events. To list newest events first, specify `desc`. To list oldest events first, specify `asc`.

The default is `desc`.
* @param [include] - The event types to include:

- `web` - returns web (non-Git) events.
- `git` - returns Git events.
- `all` - returns both web and Git events.

The default is `web`.
* @param [after] - A cursor, as given in the [Link header](https://docs.github.com/rest/overview/resources-in-the-rest-api#link-header). If specified, the query only searches for events after this cursor.
* @param [before] - A cursor, as given in the [Link header](https://docs.github.com/rest/overview/resources-in-the-rest-api#link-header). If specified, the query only searches for events before this cursor.
* @param [phrase] - A search phrase. For more information, see [Searching the audit log](https://docs.github.com/github/setting-up-and-managing-organizations-and-teams/reviewing-the-audit-log-for-your-organization#searching-the-audit-log). 
*/
export const getAuditLog: ApiHeroEndpoint<
  {
    org: string;
    perPage?: number;
    order?: "desc" | "asc";
    include?: "web" | "git" | "all";
    after?: string;
    before?: string;
    phrase?: string;
  },
  Array<AuditLogEvent>
> = {
  id: "orgs/get-audit-log",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/orgs#list-organization-memberships-for-the-authenticated-user


* List organization memberships for the authenticated user
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch.
* @param [state] - Indicates the state of the memberships to return. Can be either `active` or `pending`. If not specified, the API returns both active and pending memberships. 
*/
export const listMembershipsForAuthenticatedUser: ApiHeroEndpoint<
  { perPage?: number; page?: number; state?: "active" | "pending" },
  Array<OrgMembership>,
  { Link: string }
> = {
  id: "orgs/list-memberships-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/orgs#list-organizations-for-a-user


* List organizations for a user
* List [public organization memberships](https://docs.github.com/articles/publicizing-or-concealing-organization-membership) for the specified user.
 * 
 * This method only lists _public_ memberships, regardless of authentication. If you need to fetch all of the organization memberships (public and private) for the authenticated user, use the [List organizations for the authenticated user](https://docs.github.com/rest/reference/orgs#list-organizations-for-the-authenticated-user) API instead.
* @param username - The handle for the GitHub user account.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listForUser: ApiHeroEndpoint<
  { username: string; perPage?: number; page?: number },
  Array<OrganizationSimple>,
  { Link: string }
> = {
  id: "orgs/list-for-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/orgs#list-pending-organization-invitations


* List pending organization invitations
* The return hash contains a `role` field which refers to the Organization Invitation role and will be one of the following values: `direct_member`, `admin`, `billing_manager`, `hiring_manager`, or `reinstate`. If the invitee is not a GitHub member, the `login` field in the return hash will be `null`.
* @param org - The organization name. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listPendingInvitations: ApiHeroEndpoint<
  { org: string; perPage?: number; page?: number },
  Array<OrganizationInvitation>,
  { Link: string }
> = {
  id: "orgs/list-pending-invitations",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/orgs#create-an-organization-invitation


* Create an organization invitation
* Invite people to an organization by using their GitHub user ID or their email address. In order to create invitations in an organization, the authenticated user must be an organization owner.
 * 
 * This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.
* @param org - The organization name. The name is not case sensitive. 
*/
export const createInvitation: ApiHeroEndpoint<
  {
    org: string;
    invitation?: {
      /** 
* The role for the new member. 
\* `admin` - Organization owners with full administrative rights to the organization and complete access to all repositories and teams.  
\* `direct_member` - Non-owner organization members with ability to see other members and join teams by invitation.  
\* `billing_manager` - Non-owner organization members with ability to manage the billing settings of your organization.
*/
      role?: "admin" | "direct_member" | "billing_manager";

      /**
       * **Required unless you provide `invitee_id`**. Email address of the person you are inviting, which can be an existing GitHub user.
       */
      email?: string;

      /**
       * Specify IDs for the teams you want to invite new members to.
       */
      team_ids?: Array<number>;

      /**
       * **Required unless you provide `email`**. GitHub user ID for the person you are inviting.
       */
      invitee_id?: number;
    };
  },
  OrganizationInvitation
> = {
  id: "orgs/create-invitation",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/orgs#list-app-installations-for-an-organization


* List app installations for an organization
* Lists all GitHub Apps in an organization. The installation count includes all GitHub Apps installed on repositories in the organization. You must be an organization owner with `admin:read` scope to use this endpoint.
* @param org - The organization name. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listAppInstallations: ApiHeroEndpoint<
  { org: string; perPage?: number; page?: number },
  {
    total_count: number;
    installations: Array<Installation>;
  },
  { Link: string }
> = {
  id: "orgs/list-app-installations",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/orgs#list-public-organization-members


* List public organization members
* Members of an organization can choose to have their membership publicized or not.
* @param org - The organization name. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listPublicMembers: ApiHeroEndpoint<
  { org: string; perPage?: number; page?: number },
  Array<SimpleUser>,
  { Link: string }
> = {
  id: "orgs/list-public-members",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/orgs#get-an-organization-webhook


* Get an organization webhook
* Returns a webhook configured in an organization. To get only the webhook `config` properties, see "[Get a webhook configuration for an organization](/rest/reference/orgs#get-a-webhook-configuration-for-an-organization)."
* @param org - The organization name. The name is not case sensitive.
* @param hookId - The unique identifier of the hook. 
*/
export const getWebhook: ApiHeroEndpoint<{ org: string; hookId: number }, OrgHook> = {
  id: "orgs/get-webhook",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/orgs#delete-an-organization-webhook


* Delete an organization webhook
* @param org - The organization name. The name is not case sensitive.
* @param hookId - The unique identifier of the hook. 
*/
export const deleteWebhook: ApiHeroEndpoint<{ org: string; hookId: number }, void> = {
  id: "orgs/delete-webhook",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/orgs#update-an-organization-webhook


* Update an organization webhook
* Updates a webhook configured in an organization. When you update a webhook, the `secret` will be overwritten. If you previously had a `secret` set, you must provide the same `secret` or set a new `secret` or the secret will be removed. If you are only updating individual webhook `config` properties, use "[Update a webhook configuration for an organization](/rest/reference/orgs#update-a-webhook-configuration-for-an-organization)."
* @param org - The organization name. The name is not case sensitive.
* @param hookId - The unique identifier of the hook. 
*/
export const updateWebhook: ApiHeroEndpoint<
  {
    org: string;
    hookId: number;
    hook?: {
      /**
       *
       * @example
       * "\"web\""
       */
      name?: string;

      /**
       * Determines if notifications are sent when the webhook is triggered. Set to `true` to send notifications.
       */
      active?: boolean;

      /**
       * Key/value pairs to provide settings for this webhook. [These are defined below](https://docs.github.com/rest/reference/orgs#update-hook-config-params).
       */
      config?: {
        url: WebhookConfigUrl;
        secret?: WebhookConfigSecret;
        content_type?: WebhookConfigContentType;
        insecure_ssl?: WebhookConfigInsecureSsl;
      };

      /**
       * Determines what [events](https://docs.github.com/webhooks/event-payloads) the hook is triggered for.
       */
      events?: Array<string>;
    };
  },
  OrgHook
> = {
  id: "orgs/update-webhook",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/orgs#get-an-organization-membership-for-the-authenticated-user


* Get an organization membership for the authenticated user
* @param org - The organization name. The name is not case sensitive. 
*/
export const getMembershipForAuthenticatedUser: ApiHeroEndpoint<{ org: string }, OrgMembership> = {
  id: "orgs/get-membership-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/orgs#update-an-organization-membership-for-the-authenticated-user


* Update an organization membership for the authenticated user
* @param org - The organization name. The name is not case sensitive. 
*/
export const updateMembershipForAuthenticatedUser: ApiHeroEndpoint<
  {
    org: string;
    payload: {
      /**
       * The state that the membership should be in. Only `"active"` will be accepted.
       */
      state: "active";
    };
  },
  OrgMembership
> = {
  id: "orgs/update-membership-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/orgs#check-if-a-user-is-blocked-by-an-organization


* Check if a user is blocked by an organization
* @param org - The organization name. The name is not case sensitive.
* @param username - The handle for the GitHub user account. 
*/
export const checkBlockedUser: ApiHeroEndpoint<{ org: string; username: string }, void> = {
  id: "orgs/check-blocked-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/orgs#block-a-user-from-an-organization


* Block a user from an organization
* @param org - The organization name. The name is not case sensitive.
* @param username - The handle for the GitHub user account. 
*/
export const blockUser: ApiHeroEndpoint<{ org: string; username: string }, void> = {
  id: "orgs/block-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/orgs#unblock-a-user-from-an-organization


* Unblock a user from an organization
* @param org - The organization name. The name is not case sensitive.
* @param username - The handle for the GitHub user account. 
*/
export const unblockUser: ApiHeroEndpoint<{ org: string; username: string }, void> = {
  id: "orgs/unblock-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/orgs#list-security-manager-teams


* List security manager teams
* Lists teams that are security managers for an organization. For more information, see "[Managing security managers in your organization](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization)."
 * 
 * To use this endpoint, you must be an administrator or security manager for the organization, and you must use an access token with the `read:org` scope.
 * 
 * GitHub Apps must have the `administration` organization read permission to use this endpoint.
* @param org - The organization name. The name is not case sensitive. 
*/
export const listSecurityManagerTeams: ApiHeroEndpoint<{ org: string }, Array<TeamSimple>> = {
  id: "orgs/list-security-manager-teams",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/orgs#list-failed-organization-invitations


* List failed organization invitations
* The return hash contains `failed_at` and `failed_reason` fields which represent the time at which the invitation failed and the reason for the failure.
* @param org - The organization name. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listFailedInvitations: ApiHeroEndpoint<
  { org: string; perPage?: number; page?: number },
  Array<OrganizationInvitation>,
  { Link: string }
> = {
  id: "orgs/list-failed-invitations",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/orgs#check-organization-membership-for-a-user


* Check organization membership for a user
* Check if a user is, publicly or privately, a member of the organization.
* @param org - The organization name. The name is not case sensitive.
* @param username - The handle for the GitHub user account. 
*/
export const checkMembershipForUser: ApiHeroEndpoint<{ org: string; username: string }, void> = {
  id: "orgs/check-membership-for-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/orgs#remove-an-organization-member


* Remove an organization member
* Removing a user from this list will remove them from all teams and they will no longer have any access to the organization's repositories.
* @param org - The organization name. The name is not case sensitive.
* @param username - The handle for the GitHub user account. 
*/
export const removeMember: ApiHeroEndpoint<{ org: string; username: string }, void> = {
  id: "orgs/remove-member",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/orgs#ping-an-organization-webhook


* Ping an organization webhook
* This will trigger a [ping event](https://docs.github.com/webhooks/#ping-event) to be sent to the hook.
* @param org - The organization name. The name is not case sensitive.
* @param hookId - The unique identifier of the hook. 
*/
export const pingWebhook: ApiHeroEndpoint<{ org: string; hookId: number }, void> = {
  id: "orgs/ping-webhook",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/orgs#list-outside-collaborators-for-an-organization


* List outside collaborators for an organization
* List all users who are outside collaborators of an organization.
* @param org - The organization name. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch.
* @param [filter] - Filter the list of outside collaborators. `2fa_disabled` means that only outside collaborators without [two-factor authentication](https://github.com/blog/1614-two-factor-authentication) enabled will be returned. 
*/
export const listOutsideCollaborators: ApiHeroEndpoint<
  { org: string; perPage?: number; page?: number; filter?: "2fa_disabled" | "all" },
  Array<SimpleUser>,
  { Link: string }
> = {
  id: "orgs/list-outside-collaborators",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/orgs#get-a-webhook-configuration-for-an-organization


* Get a webhook configuration for an organization
* Returns the webhook configuration for an organization. To get more information about the webhook, including the `active` state and `events`, use "[Get an organization webhook ](/rest/reference/orgs#get-an-organization-webhook)."
 * 
 * Access tokens must have the `admin:org_hook` scope, and GitHub Apps must have the `organization_hooks:read` permission.
* @param org - The organization name. The name is not case sensitive.
* @param hookId - The unique identifier of the hook. 
*/
export const getWebhookConfigForOrg: ApiHeroEndpoint<
  { org: string; hookId: number },
  WebhookConfig
> = {
  id: "orgs/get-webhook-config-for-org",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/orgs#update-a-webhook-configuration-for-an-organization


* Update a webhook configuration for an organization
* Updates the webhook configuration for an organization. To update more information about the webhook, including the `active` state and `events`, use "[Update an organization webhook ](/rest/reference/orgs#update-an-organization-webhook)."
 * 
 * Access tokens must have the `admin:org_hook` scope, and GitHub Apps must have the `organization_hooks:write` permission.
* @param org - The organization name. The name is not case sensitive.
* @param hookId - The unique identifier of the hook. 
*/
export const updateWebhookConfigForOrg: ApiHeroEndpoint<
  {
    org: string;
    hookId: number;
    payload?: {
      url?: WebhookConfigUrl;
      secret?: WebhookConfigSecret;
      content_type?: WebhookConfigContentType;
      insecure_ssl?: WebhookConfigInsecureSsl;
    };
  },
  WebhookConfig
> = {
  id: "orgs/update-webhook-config-for-org",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/orgs#get-organization-membership-for-a-user


* Get organization membership for a user
* In order to get a user's membership with an organization, the authenticated user must be an organization member. The `state` parameter in the response can be used to identify the user's membership status.
* @param org - The organization name. The name is not case sensitive.
* @param username - The handle for the GitHub user account. 
*/
export const getMembershipForUser: ApiHeroEndpoint<
  { org: string; username: string },
  OrgMembership
> = {
  id: "orgs/get-membership-for-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/orgs#set-organization-membership-for-a-user


* Set organization membership for a user
* Only authenticated organization owners can add a member to the organization or update the member's role.
 * 
 * *   If the authenticated user is _adding_ a member to the organization, the invited user will receive an email inviting them to the organization. The user's [membership status](https://docs.github.com/rest/reference/orgs#get-organization-membership-for-a-user) will be `pending` until they accept the invitation.
 * 
 * *   Authenticated users can _update_ a user's membership by passing the `role` parameter. If the authenticated user changes a member's role to `admin`, the affected user will receive an email notifying them that they've been made an organization owner. If the authenticated user changes an owner's role to `member`, no email will be sent.
 * 
 * **Rate limits**
 * 
 * To prevent abuse, the authenticated user is limited to 50 organization invitations per 24 hour period. If the organization is more than one month old or on a paid plan, the limit is 500 invitations per 24 hour period.
* @param org - The organization name. The name is not case sensitive.
* @param username - The handle for the GitHub user account. 
*/
export const setMembershipForUser: ApiHeroEndpoint<
  {
    org: string;
    username: string;
    membership?: {
      /** 
* The role to give the user in the organization. Can be one of:  
\* `admin` - The user will become an owner of the organization.  
\* `member` - The user will become a non-owner member of the organization.
*/
      role?: "admin" | "member";
    };
  },
  OrgMembership
> = {
  id: "orgs/set-membership-for-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/orgs#remove-organization-membership-for-a-user


* Remove organization membership for a user
* In order to remove a user's membership with an organization, the authenticated user must be an organization owner.
 * 
 * If the specified user is an active member of the organization, this will remove them from the organization. If the specified user has been invited to the organization, this will cancel their invitation. The specified user will receive an email notification in both cases.
* @param org - The organization name. The name is not case sensitive.
* @param username - The handle for the GitHub user account. 
*/
export const removeMembershipForUser: ApiHeroEndpoint<{ org: string; username: string }, void> = {
  id: "orgs/remove-membership-for-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/orgs#list-saml-sso-authorizations-for-an-organization


* List SAML SSO authorizations for an organization
* Listing and deleting credential authorizations is available to organizations with GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products).
 * 
 * An authenticated organization owner with the `read:org` scope can list all credential authorizations for an organization that uses SAML single sign-on (SSO). The credentials are either personal access tokens or SSH keys that organization members have authorized for the organization. For more information, see [About authentication with SAML single sign-on](https://docs.github.com/en/articles/about-authentication-with-saml-single-sign-on).
* @param org - The organization name. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [login] - Limits the list of credentials authorizations for an organization to a specific login
* @param [page] - Page token 
*/
export const listSamlSsoAuthorizations: ApiHeroEndpoint<
  { org: string; perPage?: number; login?: string; page?: number },
  Array<CredentialAuthorization>
> = {
  id: "orgs/list-saml-sso-authorizations",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/orgs#check-public-organization-membership-for-a-user


* Check public organization membership for a user
* @param org - The organization name. The name is not case sensitive.
* @param username - The handle for the GitHub user account. 
*/
export const checkPublicMembershipForUser: ApiHeroEndpoint<
  { org: string; username: string },
  void
> = {
  id: "orgs/check-public-membership-for-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/orgs#set-public-organization-membership-for-the-authenticated-user


* Set public organization membership for the authenticated user
* The user can publicize their own membership. (A user cannot publicize the membership for another user.)
 * 
 * Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/rest/overview/resources-in-the-rest-api#http-verbs)."
* @param org - The organization name. The name is not case sensitive.
* @param username - The handle for the GitHub user account. 
*/
export const setPublicMembershipForAuthenticatedUser: ApiHeroEndpoint<
  { org: string; username: string },
  void
> = {
  id: "orgs/set-public-membership-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/orgs#remove-public-organization-membership-for-the-authenticated-user


* Remove public organization membership for the authenticated user
* @param org - The organization name. The name is not case sensitive.
* @param username - The handle for the GitHub user account. 
*/
export const removePublicMembershipForAuthenticatedUser: ApiHeroEndpoint<
  { org: string; username: string },
  void
> = {
  id: "orgs/remove-public-membership-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/orgs#list-deliveries-for-an-organization-webhook


* List deliveries for an organization webhook
* Returns a list of webhook deliveries for a webhook configured in an organization.
* @param org - The organization name. The name is not case sensitive.
* @param hookId - The unique identifier of the hook.
* @param [perPage=30] - The number of results per page (max 100).
* @param [cursor] - Used for pagination: the starting delivery from which the page of deliveries is fetched. Refer to the `link` header for the next and previous page cursors. 
*/
export const listWebhookDeliveries: ApiHeroEndpoint<
  { org: string; hookId: number; perPage?: number; cursor?: string },
  Array<HookDeliveryItem>
> = {
  id: "orgs/list-webhook-deliveries",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/orgs#cancel-an-organization-invitation


* Cancel an organization invitation
* Cancel an organization invitation. In order to cancel an organization invitation, the authenticated user must be an organization owner.
 * 
 * This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications).
* @param org - The organization name. The name is not case sensitive.
* @param invitationId - The unique identifier of the invitation. 
*/
export const cancelInvitation: ApiHeroEndpoint<{ org: string; invitationId: number }, void> = {
  id: "orgs/cancel-invitation",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/orgs#convert-an-organization-member-to-outside-collaborator


* Convert an organization member to outside collaborator
* When an organization member is converted to an outside collaborator, they'll only have access to the repositories that their current team membership allows. The user will no longer be a member of the organization. For more information, see "[Converting an organization member to an outside collaborator](https://docs.github.com/articles/converting-an-organization-member-to-an-outside-collaborator/)". Converting an organization member to an outside collaborator may be restricted by enterprise administrators. For more information, see "[Enforcing repository management policies in your enterprise](https://docs.github.com/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-outside-collaborators-to-repositories)."
* @param org - The organization name. The name is not case sensitive.
* @param username - The handle for the GitHub user account. 
*/
export const convertMemberToOutsideCollaborator: ApiHeroEndpoint<
  {
    org: string;
    username: string;
    outsideCollaborator?: {
      /**
       * When set to `true`, the request will be performed asynchronously. Returns a 202 status code when the job is successfully queued.
       */
      async?: boolean;
    };
  },
  {}
> = {
  id: "orgs/convert-member-to-outside-collaborator",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/orgs#remove-outside-collaborator-from-an-organization


* Remove outside collaborator from an organization
* Removing a user from this list will remove them from all the organization's repositories.
* @param org - The organization name. The name is not case sensitive.
* @param username - The handle for the GitHub user account. 
*/
export const removeOutsideCollaborator: ApiHeroEndpoint<{ org: string; username: string }, void> = {
  id: "orgs/remove-outside-collaborator",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/orgs#list-custom-repository-roles-in-an-organization


* List custom repository roles in an organization
* List the custom repository roles available in this organization. In order to see custom
 * repository roles in an organization, the authenticated user must be an organization owner.
 * 
 * For more information on custom repository roles, see "[Managing custom repository roles for an organization](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/managing-custom-repository-roles-for-an-organization)".
* @param organizationId  
*/
export const listCustomRoles: ApiHeroEndpoint<
  { organizationId: string },
  {
    /**
     * The number of custom roles in this organization
     *
     * @example
     * 3
     */
    total_count?: number;
    custom_roles?: Array<OrganizationCustomRepositoryRole>;
  }
> = {
  id: "orgs/list-custom-roles",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/orgs#list-organization-invitation-teams


* List organization invitation teams
* List all teams associated with an invitation. In order to see invitations in an organization, the authenticated user must be an organization owner.
* @param org - The organization name. The name is not case sensitive.
* @param invitationId - The unique identifier of the invitation.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listInvitationTeams: ApiHeroEndpoint<
  { org: string; invitationId: number; perPage?: number; page?: number },
  Array<Team>,
  { Link: string }
> = {
  id: "orgs/list-invitation-teams",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/orgs#add-a-security-manager-team


* Add a security manager team
* Adds a team as a security manager for an organization. For more information, see "[Managing security for an organization](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization) for an organization."
 * 
 * To use this endpoint, you must be an administrator for the organization, and you must use an access token with the `write:org` scope.
 * 
 * GitHub Apps must have the `administration` organization read-write permission to use this endpoint.
* @param org - The organization name. The name is not case sensitive.
* @param teamSlug - The slug of the team name. 
*/
export const addSecurityManagerTeam: ApiHeroEndpoint<{ org: string; teamSlug: string }, void> = {
  id: "orgs/add-security-manager-team",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/orgs#remove-a-security-manager-team


* Remove a security manager team
* Removes the security manager role from a team for an organization. For more information, see "[Managing security managers in your organization](https://docs.github.com/organizations/managing-peoples-access-to-your-organization-with-roles/managing-security-managers-in-your-organization) team from an organization."
 * 
 * To use this endpoint, you must be an administrator for the organization, and you must use an access token with the `admin:org` scope.
 * 
 * GitHub Apps must have the `administration` organization read-write permission to use this endpoint.
* @param org - The organization name. The name is not case sensitive.
* @param teamSlug - The slug of the team name. 
*/
export const removeSecurityManagerTeam: ApiHeroEndpoint<{ org: string; teamSlug: string }, void> = {
  id: "orgs/remove-security-manager-team",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/orgs#get-a-webhook-delivery-for-an-organization-webhook


* Get a webhook delivery for an organization webhook
* Returns a delivery for a webhook configured in an organization.
* @param org - The organization name. The name is not case sensitive.
* @param deliveryId 
* @param hookId - The unique identifier of the hook. 
*/
export const getWebhookDelivery: ApiHeroEndpoint<
  { org: string; deliveryId: number; hookId: number },
  HookDelivery
> = {
  id: "orgs/get-webhook-delivery",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/orgs#remove-a-saml-sso-authorization-for-an-organization


* Remove a SAML SSO authorization for an organization
* Listing and deleting credential authorizations is available to organizations with GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products).
 * 
 * An authenticated organization owner with the `admin:org` scope can remove a credential authorization for an organization that uses SAML SSO. Once you remove someone's credential authorization, they will need to create a new personal access token or SSH key and authorize it for the organization they want to access.
* @param org - The organization name. The name is not case sensitive.
* @param credentialId  
*/
export const removeSamlSsoAuthorization: ApiHeroEndpoint<
  { org: string; credentialId: number },
  void
> = {
  id: "orgs/remove-saml-sso-authorization",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/orgs#redeliver-a-delivery-for-an-organization-webhook


* Redeliver a delivery for an organization webhook
* Redeliver a delivery for a webhook configured in an organization.
* @param org - The organization name. The name is not case sensitive.
* @param deliveryId 
* @param hookId - The unique identifier of the hook. 
*/
export const redeliverWebhookDelivery: ApiHeroEndpoint<
  { org: string; deliveryId: number; hookId: number },
  {}
> = {
  id: "orgs/redeliver-webhook-delivery",
  clientId: "github",
};
