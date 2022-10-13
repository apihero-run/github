import {
  ExternalGroup,
  ExternalGroups,
  GroupMapping,
  MinimalRepository,
  OrganizationInvitation,
  SimpleUser,
  Team,
  TeamDiscussion,
  TeamDiscussionComment,
  TeamFull,
  TeamMembership,
  TeamProject,
  TeamRepository,
  ApiHeroEndpoint,
} from "./@types";

/** 
* @see https://docs.github.com/rest/reference/teams#list-teams-for-the-authenticated-user


* List teams for the authenticated user
* List all of the teams across all of the organizations to which the authenticated user belongs. This method requires `user`, `repo`, or `read:org` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/) when authenticating via [OAuth](https://docs.github.com/apps/building-oauth-apps/).
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listForAuthenticatedUser: ApiHeroEndpoint<
  { perPage?: number; page?: number },
  Array<TeamFull>,
  { Link: string }
> = {
  id: "teams/list-for-authenticated-user",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/teams/#get-a-team-legacy

* @deprecated

* Get a team (Legacy)
* **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the [Get a team by name](https://docs.github.com/rest/reference/teams#get-a-team-by-name) endpoint.
* @param teamId - The unique identifier of the team. 
*/
export const getLegacy: ApiHeroEndpoint<{ teamId: number }, TeamFull> = {
  id: "teams/get-legacy",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/teams/#delete-a-team-legacy

* @deprecated

* Delete a team (Legacy)
* **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Delete a team](https://docs.github.com/rest/reference/teams#delete-a-team) endpoint.
 * 
 * To delete a team, the authenticated user must be an organization owner or team maintainer.
 * 
 * If you are an organization owner, deleting a parent team will delete all of its child teams as well.
* @param teamId - The unique identifier of the team. 
*/
export const deleteLegacy: ApiHeroEndpoint<{ teamId: number }, void> = {
  id: "teams/delete-legacy",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/teams/#update-a-team-legacy

* @deprecated

* Update a team (Legacy)
* **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Update a team](https://docs.github.com/rest/reference/teams#update-a-team) endpoint.
 * 
 * To edit a team, the authenticated user must either be an organization owner or a team maintainer.
 * 
 * **Note:** With nested teams, the `privacy` for parent teams cannot be `secret`.
* @param teamId - The unique identifier of the team. 
*/
export const updateLegacy: ApiHeroEndpoint<
  {
    teamId: number;
    team: {
      /**
       * The name of the team.
       */
      name: string;

      /** 
* The level of privacy this team should have. Editing teams without specifying this parameter leaves `privacy` intact. The options are:  
**For a non-nested team:**  
\* `secret` - only visible to organization owners and members of this team.  
\* `closed` - visible to all members of this organization.  
**For a parent or child team:**  
\* `closed` - visible to all members of this organization.
*/
      privacy?: "secret" | "closed";

      /**
       * **Deprecated**. The permission that new repositories will be added to the team with when none is specified.
       */
      permission?: "pull" | "push" | "admin";

      /**
       * The description of the team.
       */
      description?: string;

      /**
       * The ID of a team to set as the parent team.
       */
      parent_team_id?: number | null;
    };
  },
  TeamFull
> = {
  id: "teams/update-legacy",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/teams#list-teams


* List teams
* Lists all teams in an organization that are visible to the authenticated user.
* @param org - The organization name. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const list: ApiHeroEndpoint<
  { org: string; perPage?: number; page?: number },
  Array<Team>,
  { Link: string }
> = {
  id: "teams/list",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/teams#create-a-team


* Create a team
* To create a team, the authenticated user must be a member or owner of `{org}`. By default, organization members can create teams. Organization owners can limit team creation to organization owners. For more information, see "[Setting team creation permissions](https://docs.github.com/en/articles/setting-team-creation-permissions-in-your-organization)."
 * 
 * When you create a new team, you automatically become a team maintainer without explicitly adding yourself to the optional array of `maintainers`. For more information, see "[About teams](https://docs.github.com/en/github/setting-up-and-managing-organizations-and-teams/about-teams)".
* @param org - The organization name. The name is not case sensitive. 
*/
export const create: ApiHeroEndpoint<
  {
    org: string;
    team: {
      /**
       * The name of the team.
       */
      name: string;

      /** 
* The level of privacy this team should have. The options are:  
**For a non-nested team:**  
\* `secret` - only visible to organization owners and members of this team.  
\* `closed` - visible to all members of this organization.  
Default: `secret`  
**For a parent or child team:**  
\* `closed` - visible to all members of this organization.  
Default for child team: `closed`
*/
      privacy?: "secret" | "closed";

      /**
       * **Deprecated**. The permission that new repositories will be added to the team with when none is specified.
       */
      permission?: "pull" | "push";

      /**
       * The full name (e.g., "organization-name/repository-name") of repositories to add the team to.
       */
      repo_names?: Array<string>;

      /**
       * The description of the team.
       */
      description?: string;

      /**
       * List GitHub IDs for organization members who will become team maintainers.
       */
      maintainers?: Array<string>;

      /**
       * The ID of a team to set as the parent team.
       */
      parent_team_id?: number;
    };
  },
  TeamFull
> = {
  id: "teams/create",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/teams/#list-team-repositories-legacy

* @deprecated

* List team repositories (Legacy)
* **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [List team repositories](https://docs.github.com/rest/reference/teams#list-team-repositories) endpoint.
* @param teamId - The unique identifier of the team.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listReposLegacy: ApiHeroEndpoint<
  { teamId: number; perPage?: number; page?: number },
  Array<MinimalRepository>,
  { Link: string }
> = {
  id: "teams/list-repos-legacy",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/teams/#list-child-teams-legacy

* @deprecated

* List child teams (Legacy)
* **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List child teams`](https://docs.github.com/rest/reference/teams#list-child-teams) endpoint.
* @param teamId - The unique identifier of the team.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listChildLegacy: ApiHeroEndpoint<
  { teamId: number; perPage?: number; page?: number },
  Array<Team>,
  { Link: string }
> = {
  id: "teams/list-child-legacy",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/teams#list-team-members-legacy

* @deprecated

* List team members (Legacy)
* **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List team members`](https://docs.github.com/rest/reference/teams#list-team-members) endpoint.
 * 
 * Team members will include the members of child teams.
* @param teamId - The unique identifier of the team.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch.
* @param [role] - Filters members returned by their role in the team. 
*/
export const listMembersLegacy: ApiHeroEndpoint<
  { teamId: number; perPage?: number; page?: number; role?: "member" | "maintainer" | "all" },
  Array<SimpleUser>,
  { Link: string }
> = {
  id: "teams/list-members-legacy",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/teams/#list-team-projects-legacy

* @deprecated

* List team projects (Legacy)
* **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List team projects`](https://docs.github.com/rest/reference/teams#list-team-projects) endpoint.
 * 
 * Lists the organization projects for a team.
* @param teamId - The unique identifier of the team.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listProjectsLegacy: ApiHeroEndpoint<
  { teamId: number; perPage?: number; page?: number },
  Array<TeamProject>,
  { Link: string }
> = {
  id: "teams/list-projects-legacy",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/teams#list-external-idp-groups-for-an-organization


* List external groups in an organization
* Lists external groups available in an organization. You can query the groups using the `display_name` parameter, only groups with a `group_name` containing the text provided in the `display_name` parameter will be returned.  You can also limit your page results using the `per_page` parameter. GitHub generates a url-encoded `page` token using a cursor value for where the next page begins. For more information on cursor pagination, see "[Offset and Cursor Pagination explained](https://dev.to/jackmarchant/offset-and-cursor-pagination-explained-b89)."
 * 
 * You can manage team membership with your identity provider using Enterprise Managed Users for GitHub Enterprise Cloud. For more information, see "[GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products)" in the GitHub Help documentation.
* @param org - The organization name. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page] - Page token
* @param [displayName] - Limits the list to groups containing the text in the group name 
*/
export const listExternalIdpGroupsForOrg: ApiHeroEndpoint<
  { org: string; perPage?: number; page?: number; displayName?: string },
  ExternalGroups,
  { Link: string }
> = {
  id: "teams/list-external-idp-groups-for-org",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/teams#list-idp-groups-for-an-organization


* List IdP groups for an organization
* Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 * 
 * List IdP groups available in an organization. You can limit your page results using the `per_page` parameter. GitHub generates a url-encoded `page` token using a cursor value for where the next page begins. For more information on cursor pagination, see "[Offset and Cursor Pagination explained](https://dev.to/jackmarchant/offset-and-cursor-pagination-explained-b89)."
* @param org - The organization name. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page] - Page token 
*/
export const listIdpGroupsForOrg: ApiHeroEndpoint<
  { org: string; perPage?: number; page?: string },
  GroupMapping,
  { Link: string }
> = {
  id: "teams/list-idp-groups-for-org",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/teams#list-discussions-legacy

* @deprecated

* List discussions (Legacy)
* **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List discussions`](https://docs.github.com/rest/reference/teams#list-discussions) endpoint.
 * 
 * List all discussions on a team's page. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
* @param teamId - The unique identifier of the team.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch.
* @param [direction] - The direction to sort the results by. 
*/
export const listDiscussionsLegacy: ApiHeroEndpoint<
  { teamId: number; perPage?: number; page?: number; direction?: "asc" | "desc" },
  Array<TeamDiscussion>,
  { Link: string }
> = {
  id: "teams/list-discussions-legacy",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/teams#create-a-discussion-legacy

* @deprecated

* Create a discussion (Legacy)
* **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`Create a discussion`](https://docs.github.com/rest/reference/teams#create-a-discussion) endpoint.
 * 
 * Creates a new discussion post on a team's page. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
 * 
 * This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.
* @param teamId - The unique identifier of the team. 
*/
export const createDiscussionLegacy: ApiHeroEndpoint<
  {
    teamId: number;
    discussion: {
      /**
       * The discussion post's body text.
       */
      body: string;

      /**
       * The discussion post's title.
       */
      title: string;

      /**
       * Private posts are only visible to team members, organization owners, and team maintainers. Public posts are visible to all members of the organization. Set to `true` to create a private post.
       */
      private?: boolean;
    };
  },
  TeamDiscussion
> = {
  id: "teams/create-discussion-legacy",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/teams#list-pending-team-invitations-legacy

* @deprecated

* List pending team invitations (Legacy)
* **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List pending team invitations`](https://docs.github.com/rest/reference/teams#list-pending-team-invitations) endpoint.
 * 
 * The return hash contains a `role` field which refers to the Organization Invitation role and will be one of the following values: `direct_member`, `admin`, `billing_manager`, `hiring_manager`, or `reinstate`. If the invitee is not a GitHub member, the `login` field in the return hash will be `null`.
* @param teamId - The unique identifier of the team.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listPendingInvitationsLegacy: ApiHeroEndpoint<
  { teamId: number; perPage?: number; page?: number },
  Array<OrganizationInvitation>,
  { Link: string }
> = {
  id: "teams/list-pending-invitations-legacy",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/teams#get-a-team-by-name


* Get a team by name
* Gets a team using the team's `slug`. GitHub generates the `slug` from the team `name`.
 * 
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}`.
* @param org - The organization name. The name is not case sensitive.
* @param teamSlug - The slug of the team name. 
*/
export const getByName: ApiHeroEndpoint<{ org: string; teamSlug: string }, TeamFull> = {
  id: "teams/get-by-name",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/teams#delete-a-team


* Delete a team
* To delete a team, the authenticated user must be an organization owner or team maintainer.
 * 
 * If you are an organization owner, deleting a parent team will delete all of its child teams as well.
 * 
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}`.
* @param org - The organization name. The name is not case sensitive.
* @param teamSlug - The slug of the team name. 
*/
export const deleteInOrg: ApiHeroEndpoint<{ org: string; teamSlug: string }, void> = {
  id: "teams/delete-in-org",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/teams#update-a-team


* Update a team
* To edit a team, the authenticated user must either be an organization owner or a team maintainer.
 * 
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `PATCH /organizations/{org_id}/team/{team_id}`.
* @param org - The organization name. The name is not case sensitive.
* @param teamSlug - The slug of the team name. 
*/
export const updateInOrg: ApiHeroEndpoint<
  {
    org: string;
    teamSlug: string;
    team?: {
      /**
       * The name of the team.
       */
      name?: string;

      /** 
* The level of privacy this team should have. Editing teams without specifying this parameter leaves `privacy` intact. When a team is nested, the `privacy` for parent teams cannot be `secret`. The options are:  
**For a non-nested team:**  
\* `secret` - only visible to organization owners and members of this team.  
\* `closed` - visible to all members of this organization.  
**For a parent or child team:**  
\* `closed` - visible to all members of this organization.
*/
      privacy?: "secret" | "closed";

      /**
       * **Deprecated**. The permission that new repositories will be added to the team with when none is specified.
       */
      permission?: "pull" | "push" | "admin";

      /**
       * The description of the team.
       */
      description?: string;

      /**
       * The ID of a team to set as the parent team.
       */
      parent_team_id?: number | null;
    };
  },
  TeamFull
> = {
  id: "teams/update-in-org",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/teams#list-team-repositories


* List team repositories
* Lists a team's repositories visible to the authenticated user.
 * 
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/repos`.
* @param org - The organization name. The name is not case sensitive.
* @param teamSlug - The slug of the team name.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listReposInOrg: ApiHeroEndpoint<
  { org: string; teamSlug: string; perPage?: number; page?: number },
  Array<MinimalRepository>,
  { Link: string }
> = {
  id: "teams/list-repos-in-org",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/teams#list-child-teams


* List child teams
* Lists the child teams of the team specified by `{team_slug}`.
 * 
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/teams`.
* @param org - The organization name. The name is not case sensitive.
* @param teamSlug - The slug of the team name.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listChildInOrg: ApiHeroEndpoint<
  { org: string; teamSlug: string; perPage?: number; page?: number },
  Array<Team>,
  { Link: string }
> = {
  id: "teams/list-child-in-org",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/teams#get-team-member-legacy

* @deprecated

* Get team member (Legacy)
* The "Get team member" endpoint (described below) is deprecated.
 * 
 * We recommend using the [Get team membership for a user](https://docs.github.com/rest/reference/teams#get-team-membership-for-a-user) endpoint instead. It allows you to get both active and pending memberships.
 * 
 * To list members in a team, the team must be visible to the authenticated user.
* @param teamId - The unique identifier of the team.
* @param username - The handle for the GitHub user account. 
*/
export const getMemberLegacy: ApiHeroEndpoint<{ teamId: number; username: string }, void> = {
  id: "teams/get-member-legacy",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/teams#add-team-member-legacy

* @deprecated

* Add team member (Legacy)
* The "Add team member" endpoint (described below) is deprecated.
 * 
 * We recommend using the [Add or update team membership for a user](https://docs.github.com/rest/reference/teams#add-or-update-team-membership-for-a-user) endpoint instead. It allows you to invite new organization members to your teams.
 * 
 * Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 * 
 * To add someone to a team, the authenticated user must be an organization owner or a team maintainer in the team they're changing. The person being added to the team must be a member of the team's organization.
 * 
 * **Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub](https://docs.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."
 * 
 * Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/rest/overview/resources-in-the-rest-api#http-verbs)."
* @param teamId - The unique identifier of the team.
* @param username - The handle for the GitHub user account. 
*/
export const addMemberLegacy: ApiHeroEndpoint<{ teamId: number; username: string }, void> = {
  id: "teams/add-member-legacy",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/teams#remove-team-member-legacy

* @deprecated

* Remove team member (Legacy)
* The "Remove team member" endpoint (described below) is deprecated.
 * 
 * We recommend using the [Remove team membership for a user](https://docs.github.com/rest/reference/teams#remove-team-membership-for-a-user) endpoint instead. It allows you to remove both active and pending memberships.
 * 
 * Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 * 
 * To remove a team member, the authenticated user must have 'admin' permissions to the team or be an owner of the org that the team is associated with. Removing a team member does not delete the user, it just removes them from the team.
 * 
 * **Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub](https://docs.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."
* @param teamId - The unique identifier of the team.
* @param username - The handle for the GitHub user account. 
*/
export const removeMemberLegacy: ApiHeroEndpoint<{ teamId: number; username: string }, void> = {
  id: "teams/remove-member-legacy",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/teams#external-idp-group-info-for-an-organization


* Get an external group
* Displays information about the specific group's usage.  Provides a list of the group's external members as well as a list of teams that this group is connected to.
 * 
 * You can manage team membership with your identity provider using Enterprise Managed Users for GitHub Enterprise Cloud. For more information, see "[GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products)" in the GitHub Help documentation.
* @param org - The organization name. The name is not case sensitive.
* @param groupId - The unique identifier of the group. 
*/
export const externalIdpGroupInfoForOrg: ApiHeroEndpoint<
  { org: string; groupId: number },
  ExternalGroup
> = {
  id: "teams/external-idp-group-info-for-org",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/teams#list-team-members


* List team members
* Team members will include the members of child teams.
 * 
 * To list members in a team, the team must be visible to the authenticated user.
* @param org - The organization name. The name is not case sensitive.
* @param teamSlug - The slug of the team name.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch.
* @param [role] - Filters members returned by their role in the team. 
*/
export const listMembersInOrg: ApiHeroEndpoint<
  {
    org: string;
    teamSlug: string;
    perPage?: number;
    page?: number;
    role?: "member" | "maintainer" | "all";
  },
  Array<SimpleUser>,
  { Link: string }
> = {
  id: "teams/list-members-in-org",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/teams/#check-team-permissions-for-a-repository-legacy

* @deprecated

* Check team permissions for a repository (Legacy)
* **Note**: Repositories inherited through a parent team will also be checked.
 * 
 * **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Check team permissions for a repository](https://docs.github.com/rest/reference/teams#check-team-permissions-for-a-repository) endpoint.
 * 
 * You can also get information about the specified repository, including what permissions the team grants on it, by passing the following custom [media type](https://docs.github.com/rest/overview/media-types/) via the `Accept` header:
* @param teamId - The unique identifier of the team.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const checkPermissionsForRepoLegacy: ApiHeroEndpoint<
  { teamId: number; owner: string; repo: string },
  TeamRepository
> = {
  id: "teams/check-permissions-for-repo-legacy",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/teams/#add-or-update-team-repository-permissions-legacy

* @deprecated

* Add or update team repository permissions (Legacy)
* **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new "[Add or update team repository permissions](https://docs.github.com/rest/reference/teams#add-or-update-team-repository-permissions)" endpoint.
 * 
 * To add a repository to a team or update the team's permission on a repository, the authenticated user must have admin access to the repository, and must be able to see the team. The repository must be owned by the organization, or a direct fork of a repository owned by the organization. You will get a `422 Unprocessable Entity` status if you attempt to add a repository to a team that is not owned by the organization.
 * 
 * Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/rest/overview/resources-in-the-rest-api#http-verbs)."
* @param teamId - The unique identifier of the team.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const addOrUpdateRepoPermissionsLegacy: ApiHeroEndpoint<
  {
    teamId: number;
    owner: string;
    repo: string;
    payload?: {
      /**
       * The permission to grant the team on this repository. If no permission is specified, the team's `permission` attribute will be used to determine what permission to grant the team on this repository.
       */
      permission?: "pull" | "push" | "admin";
    };
  },
  void
> = {
  id: "teams/add-or-update-repo-permissions-legacy",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/teams/#remove-a-repository-from-a-team-legacy

* @deprecated

* Remove a repository from a team (Legacy)
* **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Remove a repository from a team](https://docs.github.com/rest/reference/teams#remove-a-repository-from-a-team) endpoint.
 * 
 * If the authenticated user is an organization owner or a team maintainer, they can remove any repositories from the team. To remove a repository from a team as an organization member, the authenticated user must have admin access to the repository and must be able to see the team. NOTE: This does not delete the repository, it just removes it from the team.
* @param teamId - The unique identifier of the team.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const removeRepoLegacy: ApiHeroEndpoint<
  { teamId: number; owner: string; repo: string },
  void
> = {
  id: "teams/remove-repo-legacy",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/teams#list-team-projects


* List team projects
* Lists the organization projects for a team.
 * 
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/projects`.
* @param org - The organization name. The name is not case sensitive.
* @param teamSlug - The slug of the team name.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listProjectsInOrg: ApiHeroEndpoint<
  { org: string; teamSlug: string; perPage?: number; page?: number },
  Array<TeamProject>,
  { Link: string }
> = {
  id: "teams/list-projects-in-org",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/teams/#check-team-permissions-for-a-project-legacy

* @deprecated

* Check team permissions for a project (Legacy)
* **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Check team permissions for a project](https://docs.github.com/rest/reference/teams#check-team-permissions-for-a-project) endpoint.
 * 
 * Checks whether a team has `read`, `write`, or `admin` permissions for an organization project. The response includes projects inherited from a parent team.
* @param teamId - The unique identifier of the team.
* @param projectId - The unique identifier of the project. 
*/
export const checkPermissionsForProjectLegacy: ApiHeroEndpoint<
  { teamId: number; projectId: number },
  TeamProject
> = {
  id: "teams/check-permissions-for-project-legacy",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/teams/#add-or-update-team-project-permissions-legacy

* @deprecated

* Add or update team project permissions (Legacy)
* **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Add or update team project permissions](https://docs.github.com/rest/reference/teams#add-or-update-team-project-permissions) endpoint.
 * 
 * Adds an organization project to a team. To add a project to a team or update the team's permission on a project, the authenticated user must have `admin` permissions for the project. The project and team must be part of the same organization.
* @param teamId - The unique identifier of the team.
* @param projectId - The unique identifier of the project. 
*/
export const addOrUpdateProjectPermissionsLegacy: ApiHeroEndpoint<
  {
    teamId: number;
    projectId: number;
    project?: {
      /**
       * The permission to grant to the team for this project. Default: the team's `permission` attribute will be used to determine what permission to grant the team on this project. Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/rest/overview/resources-in-the-rest-api#http-verbs)."
       */
      permission?: "read" | "write" | "admin";
    };
  },
  void
> = {
  id: "teams/add-or-update-project-permissions-legacy",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/teams/#remove-a-project-from-a-team-legacy

* @deprecated

* Remove a project from a team (Legacy)
* **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Remove a project from a team](https://docs.github.com/rest/reference/teams#remove-a-project-from-a-team) endpoint.
 * 
 * Removes an organization project from a team. An organization owner or a team maintainer can remove any project from the team. To remove a project from a team as an organization member, the authenticated user must have `read` access to both the team and project, or `admin` access to the team or project. **Note:** This endpoint removes the project from the team, but does not delete it.
* @param teamId - The unique identifier of the team.
* @param projectId - The unique identifier of the project. 
*/
export const removeProjectLegacy: ApiHeroEndpoint<{ teamId: number; projectId: number }, void> = {
  id: "teams/remove-project-legacy",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/teams#get-team-membership-for-a-user-legacy

* @deprecated

* Get team membership for a user (Legacy)
* **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Get team membership for a user](https://docs.github.com/rest/reference/teams#get-team-membership-for-a-user) endpoint.
 * 
 * Team members will include the members of child teams.
 * 
 * To get a user's membership with a team, the team must be visible to the authenticated user.
 * 
 * **Note:**
 * The response contains the `state` of the membership and the member's `role`.
 * 
 * The `role` for organization owners is set to `maintainer`. For more information about `maintainer` roles, see [Create a team](https://docs.github.com/rest/reference/teams#create-a-team).
* @param teamId - The unique identifier of the team.
* @param username - The handle for the GitHub user account. 
*/
export const getMembershipForUserLegacy: ApiHeroEndpoint<
  { teamId: number; username: string },
  TeamMembership
> = {
  id: "teams/get-membership-for-user-legacy",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/teams#add-or-update-team-membership-for-a-user-legacy

* @deprecated

* Add or update team membership for a user (Legacy)
* **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Add or update team membership for a user](https://docs.github.com/rest/reference/teams#add-or-update-team-membership-for-a-user) endpoint.
 * 
 * Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 * 
 * If the user is already a member of the team's organization, this endpoint will add the user to the team. To add a membership between an organization member and a team, the authenticated user must be an organization owner or a team maintainer.
 * 
 * **Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub](https://docs.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."
 * 
 * If the user is unaffiliated with the team's organization, this endpoint will send an invitation to the user via email. This newly-created membership will be in the "pending" state until the user accepts the invitation, at which point the membership will transition to the "active" state and the user will be added as a member of the team. To add a membership between an unaffiliated user and a team, the authenticated user must be an organization owner.
 * 
 * If the user is already a member of the team, this endpoint will update the role of the team member's role. To update the membership of a team member, the authenticated user must be an organization owner or a team maintainer.
* @param teamId - The unique identifier of the team.
* @param username - The handle for the GitHub user account. 
*/
export const addOrUpdateMembershipForUserLegacy: ApiHeroEndpoint<
  {
    teamId: number;
    username: string;
    membership?: {
      /**
       * The role that this user should have in the team.
       */
      role?: "member" | "maintainer";
    };
  },
  TeamMembership
> = {
  id: "teams/add-or-update-membership-for-user-legacy",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/teams#remove-team-membership-for-a-user-legacy

* @deprecated

* Remove team membership for a user (Legacy)
* **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Remove team membership for a user](https://docs.github.com/rest/reference/teams#remove-team-membership-for-a-user) endpoint.
 * 
 * Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 * 
 * To remove a membership between a user and a team, the authenticated user must have 'admin' permissions to the team or be an owner of the organization that the team is associated with. Removing team membership does not delete the user, it just removes their membership from the team.
 * 
 * **Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub](https://docs.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."
* @param teamId - The unique identifier of the team.
* @param username - The handle for the GitHub user account. 
*/
export const removeMembershipForUserLegacy: ApiHeroEndpoint<
  { teamId: number; username: string },
  void
> = {
  id: "teams/remove-membership-for-user-legacy",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/teams#list-discussions


* List discussions
* List all discussions on a team's page. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
 * 
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/discussions`.
* @param org - The organization name. The name is not case sensitive.
* @param teamSlug - The slug of the team name.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch.
* @param [direction] - The direction to sort the results by.
* @param [pinned] - Pinned discussions only filter 
*/
export const listDiscussionsInOrg: ApiHeroEndpoint<
  {
    org: string;
    teamSlug: string;
    perPage?: number;
    page?: number;
    direction?: "asc" | "desc";
    pinned?: string;
  },
  Array<TeamDiscussion>,
  { Link: string }
> = {
  id: "teams/list-discussions-in-org",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/teams#create-a-discussion


* Create a discussion
* Creates a new discussion post on a team's page. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
 * 
 * This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.
 * 
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/{org_id}/team/{team_id}/discussions`.
* @param org - The organization name. The name is not case sensitive.
* @param teamSlug - The slug of the team name. 
*/
export const createDiscussionInOrg: ApiHeroEndpoint<
  {
    org: string;
    teamSlug: string;
    discussion: {
      /**
       * The discussion post's body text.
       */
      body: string;

      /**
       * The discussion post's title.
       */
      title: string;

      /**
       * Private posts are only visible to team members, organization owners, and team maintainers. Public posts are visible to all members of the organization. Set to `true` to create a private post.
       */
      private?: boolean;
    };
  },
  TeamDiscussion
> = {
  id: "teams/create-discussion-in-org",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/teams#list-pending-team-invitations


* List pending team invitations
* The return hash contains a `role` field which refers to the Organization Invitation role and will be one of the following values: `direct_member`, `admin`, `billing_manager`, `hiring_manager`, or `reinstate`. If the invitee is not a GitHub member, the `login` field in the return hash will be `null`.
 * 
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/invitations`.
* @param org - The organization name. The name is not case sensitive.
* @param teamSlug - The slug of the team name.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listPendingInvitationsInOrg: ApiHeroEndpoint<
  { org: string; teamSlug: string; perPage?: number; page?: number },
  Array<OrganizationInvitation>,
  { Link: string }
> = {
  id: "teams/list-pending-invitations-in-org",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/teams#list-idp-groups-for-a-team-legacy

* @deprecated

* List IdP groups for a team (Legacy)
* **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List IdP groups for a team`](https://docs.github.com/rest/reference/teams#list-idp-groups-for-a-team) endpoint.
 * 
 * Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 * 
 * List IdP groups connected to a team on GitHub.
* @param teamId - The unique identifier of the team. 
*/
export const listIdpGroupsForLegacy: ApiHeroEndpoint<{ teamId: number }, GroupMapping> = {
  id: "teams/list-idp-groups-for-legacy",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/teams#create-or-update-idp-group-connections-legacy

* @deprecated

* Create or update IdP group connections (Legacy)
* **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`Create or update IdP group connections`](https://docs.github.com/rest/reference/teams#create-or-update-idp-group-connections) endpoint.
 * 
 * Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 * 
 * Creates, updates, or removes a connection between a team and an IdP group. When adding groups to a team, you must include all new and existing groups to avoid replacing existing groups with the new ones. Specifying an empty `groups` array will remove all connections for a team.
* @param teamId - The unique identifier of the team. 
*/
export const createOrUpdateIdpGroupConnectionsLegacy: ApiHeroEndpoint<
  {
    teamId: number;
    teamSync: {
      /**
       * The IdP groups you want to connect to a GitHub team. When updating, the new `groups` object will replace the original one. You must include any existing groups that you don't want to remove.
       */
      groups: Array<{
        /**
         *
         * @example
         * "\"caceab43fc9ffa20081c\""
         */
        id?: string;

        /**
         *
         * @example
         * "\"external-team-6c13e7288ef7\""
         */
        name?: string;

        /**
         * ID of the IdP group.
         */
        group_id: string;

        /**
         * Name of the IdP group.
         */
        group_name: string;

        /**
         *
         * @example
         * "\"moar cheese pleese\""
         */
        description?: string;

        /**
         * Description of the IdP group.
         */
        group_description: string;
      }>;

      /**
       *
       * @example
       * "\"I am not a timestamp\""
       */
      synced_at?: string;
    };
  },
  GroupMapping
> = {
  id: "teams/create-or-update-idp-group-connections-legacy",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/teams#list-external-idp-group-team-connection


* List a connection between an external group and a team
* Lists a connection between a team and an external group.
 * 
 * You can manage team membership with your identity provider using Enterprise Managed Users for GitHub Enterprise Cloud. For more information, see "[GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products)" in the GitHub Help documentation.
* @param org - The organization name. The name is not case sensitive.
* @param teamSlug - The slug of the team name. 
*/
export const listLinkedExternalIdpGroupsToTeamForOrg: ApiHeroEndpoint<
  { org: string; teamSlug: string },
  ExternalGroups
> = {
  id: "teams/list-linked-external-idp-groups-to-team-for-org",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/teams#unlink-external-idp-group-team-connection


* Remove the connection between an external group and a team
* Deletes a connection between a team and an external group.
 * 
 * You can manage team membership with your IdP using Enterprise Managed Users for GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
* @param org - The organization name. The name is not case sensitive.
* @param teamSlug - The slug of the team name. 
*/
export const unlinkExternalIdpGroupFromTeamForOrg: ApiHeroEndpoint<
  { org: string; teamSlug: string },
  void
> = {
  id: "teams/unlink-external-idp-group-from-team-for-org",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/teams#link-external-idp-group-team-connection


* Update the connection between an external group and a team
* Creates a connection between a team and an external group.  Only one external group can be linked to a team.
 * 
 * You can manage team membership with your identity provider using Enterprise Managed Users for GitHub Enterprise Cloud. For more information, see "[GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products)" in the GitHub Help documentation.
* @param org - The organization name. The name is not case sensitive.
* @param teamSlug - The slug of the team name. 
*/
export const linkExternalIdpGroupToTeamForOrg: ApiHeroEndpoint<
  {
    org: string;
    teamSlug: string;
    payload: {
      /**
       * External Group Id
       *
       * @example
       * 1
       */
      group_id: number;
    };
  },
  ExternalGroup
> = {
  id: "teams/link-external-idp-group-to-team-for-org",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/teams#get-a-discussion-legacy

* @deprecated

* Get a discussion (Legacy)
* **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Get a discussion](https://docs.github.com/rest/reference/teams#get-a-discussion) endpoint.
 * 
 * Get a specific discussion on a team's page. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
* @param teamId - The unique identifier of the team.
* @param discussionNumber - The number that identifies the discussion. 
*/
export const getDiscussionLegacy: ApiHeroEndpoint<
  { teamId: number; discussionNumber: number },
  TeamDiscussion
> = {
  id: "teams/get-discussion-legacy",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/teams#delete-a-discussion-legacy

* @deprecated

* Delete a discussion (Legacy)
* **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`Delete a discussion`](https://docs.github.com/rest/reference/teams#delete-a-discussion) endpoint.
 * 
 * Delete a discussion from a team's page. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
* @param teamId - The unique identifier of the team.
* @param discussionNumber - The number that identifies the discussion. 
*/
export const deleteDiscussionLegacy: ApiHeroEndpoint<
  { teamId: number; discussionNumber: number },
  void
> = {
  id: "teams/delete-discussion-legacy",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/teams#update-a-discussion-legacy

* @deprecated

* Update a discussion (Legacy)
* **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Update a discussion](https://docs.github.com/rest/reference/teams#update-a-discussion) endpoint.
 * 
 * Edits the title and body text of a discussion post. Only the parameters you provide are updated. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
* @param teamId - The unique identifier of the team.
* @param discussionNumber - The number that identifies the discussion. 
*/
export const updateDiscussionLegacy: ApiHeroEndpoint<
  {
    teamId: number;
    discussionNumber: number;
    discussion?: {
      /**
       * The discussion post's body text.
       */
      body?: string;

      /**
       * The discussion post's title.
       */
      title?: string;
    };
  },
  TeamDiscussion
> = {
  id: "teams/update-discussion-legacy",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/teams/#check-team-permissions-for-a-repository


* Check team permissions for a repository
* Checks whether a team has `admin`, `push`, `maintain`, `triage`, or `pull` permission for a repository. Repositories inherited through a parent team will also be checked.
 * 
 * You can also get information about the specified repository, including what permissions the team grants on it, by passing the following custom [media type](https://docs.github.com/rest/overview/media-types/) via the `application/vnd.github.v3.repository+json` accept header.
 * 
 * If a team doesn't have permission for the repository, you will receive a `404 Not Found` response status.
 * 
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/repos/{owner}/{repo}`.
* @param org - The organization name. The name is not case sensitive.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param teamSlug - The slug of the team name. 
*/
export const checkPermissionsForRepoInOrg: ApiHeroEndpoint<
  { org: string; owner: string; repo: string; teamSlug: string },
  TeamRepository
> = {
  id: "teams/check-permissions-for-repo-in-org",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/teams/#add-or-update-team-repository-permissions


* Add or update team repository permissions
* To add a repository to a team or update the team's permission on a repository, the authenticated user must have admin access to the repository, and must be able to see the team. The repository must be owned by the organization, or a direct fork of a repository owned by the organization. You will get a `422 Unprocessable Entity` status if you attempt to add a repository to a team that is not owned by the organization. Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/rest/overview/resources-in-the-rest-api#http-verbs)."
 * 
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `PUT /organizations/{org_id}/team/{team_id}/repos/{owner}/{repo}`.
 * 
 * For more information about the permission levels, see "[Repository permission levels for an organization](https://docs.github.com/en/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization#permission-levels-for-repositories-owned-by-an-organization)".
* @param org - The organization name. The name is not case sensitive.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param teamSlug - The slug of the team name. 
*/
export const addOrUpdateRepoPermissionsInOrg: ApiHeroEndpoint<
  {
    org: string;
    owner: string;
    repo: string;
    teamSlug: string;
    payload?: {
      /**
       * The permission to grant the team on this repository. In addition to the enumerated values, you can also specify a custom repository role name, if the owning organization has defined any. If no permission is specified, the team's `permission` attribute will be used to determine what permission to grant the team on this repository.
       */
      permission?: "pull" | "push" | "admin" | "maintain" | "triage";
    };
  },
  void
> = {
  id: "teams/add-or-update-repo-permissions-in-org",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/teams/#remove-a-repository-from-a-team


* Remove a repository from a team
* If the authenticated user is an organization owner or a team maintainer, they can remove any repositories from the team. To remove a repository from a team as an organization member, the authenticated user must have admin access to the repository and must be able to see the team. This does not delete the repository, it just removes it from the team.
 * 
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/repos/{owner}/{repo}`.
* @param org - The organization name. The name is not case sensitive.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param teamSlug - The slug of the team name. 
*/
export const removeRepoInOrg: ApiHeroEndpoint<
  { org: string; owner: string; repo: string; teamSlug: string },
  void
> = {
  id: "teams/remove-repo-in-org",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/teams#check-team-permissions-for-a-project


* Check team permissions for a project
* Checks whether a team has `read`, `write`, or `admin` permissions for an organization project. The response includes projects inherited from a parent team.
 * 
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/projects/{project_id}`.
* @param org - The organization name. The name is not case sensitive.
* @param projectId - The unique identifier of the project.
* @param teamSlug - The slug of the team name. 
*/
export const checkPermissionsForProjectInOrg: ApiHeroEndpoint<
  { org: string; projectId: number; teamSlug: string },
  TeamProject
> = {
  id: "teams/check-permissions-for-project-in-org",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/teams#add-or-update-team-project-permissions


* Add or update team project permissions
* Adds an organization project to a team. To add a project to a team or update the team's permission on a project, the authenticated user must have `admin` permissions for the project. The project and team must be part of the same organization.
 * 
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `PUT /organizations/{org_id}/team/{team_id}/projects/{project_id}`.
* @param org - The organization name. The name is not case sensitive.
* @param projectId - The unique identifier of the project.
* @param teamSlug - The slug of the team name. 
*/
export const addOrUpdateProjectPermissionsInOrg: ApiHeroEndpoint<
  {
    org: string;
    projectId: number;
    teamSlug: string;
    project?: {
      /**
       * The permission to grant to the team for this project. Default: the team's `permission` attribute will be used to determine what permission to grant the team on this project. Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/rest/overview/resources-in-the-rest-api#http-verbs)."
       */
      permission?: "read" | "write" | "admin";
    } | null;
  },
  void
> = {
  id: "teams/add-or-update-project-permissions-in-org",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/teams#remove-a-project-from-a-team


* Remove a project from a team
* Removes an organization project from a team. An organization owner or a team maintainer can remove any project from the team. To remove a project from a team as an organization member, the authenticated user must have `read` access to both the team and project, or `admin` access to the team or project. This endpoint removes the project from the team, but does not delete the project.
 * 
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/projects/{project_id}`.
* @param org - The organization name. The name is not case sensitive.
* @param projectId - The unique identifier of the project.
* @param teamSlug - The slug of the team name. 
*/
export const removeProjectInOrg: ApiHeroEndpoint<
  { org: string; projectId: number; teamSlug: string },
  void
> = {
  id: "teams/remove-project-in-org",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/teams#get-team-membership-for-a-user


* Get team membership for a user
* Team members will include the members of child teams.
 * 
 * To get a user's membership with a team, the team must be visible to the authenticated user.
 * 
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/memberships/{username}`.
 * 
 * **Note:**
 * The response contains the `state` of the membership and the member's `role`.
 * 
 * The `role` for organization owners is set to `maintainer`. For more information about `maintainer` roles, see see [Create a team](https://docs.github.com/rest/reference/teams#create-a-team).
* @param org - The organization name. The name is not case sensitive.
* @param username - The handle for the GitHub user account.
* @param teamSlug - The slug of the team name. 
*/
export const getMembershipForUserInOrg: ApiHeroEndpoint<
  { org: string; username: string; teamSlug: string },
  TeamMembership
> = {
  id: "teams/get-membership-for-user-in-org",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/teams#add-or-update-team-membership-for-a-user


* Add or update team membership for a user
* Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 * 
 * Adds an organization member to a team. An authenticated organization owner or team maintainer can add organization members to a team.
 * 
 * **Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub](https://docs.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."
 * 
 * An organization owner can add someone who is not part of the team's organization to a team. When an organization owner adds someone to a team who is not an organization member, this endpoint will send an invitation to the person via email. This newly-created membership will be in the "pending" state until the person accepts the invitation, at which point the membership will transition to the "active" state and the user will be added as a member of the team.
 * 
 * If the user is already a member of the team, this endpoint will update the role of the team member's role. To update the membership of a team member, the authenticated user must be an organization owner or a team maintainer.
 * 
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `PUT /organizations/{org_id}/team/{team_id}/memberships/{username}`.
* @param org - The organization name. The name is not case sensitive.
* @param username - The handle for the GitHub user account.
* @param teamSlug - The slug of the team name. 
*/
export const addOrUpdateMembershipForUserInOrg: ApiHeroEndpoint<
  {
    org: string;
    username: string;
    teamSlug: string;
    membership?: {
      /**
       * The role that this user should have in the team.
       */
      role?: "member" | "maintainer";
    };
  },
  TeamMembership
> = {
  id: "teams/add-or-update-membership-for-user-in-org",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/teams#remove-team-membership-for-a-user


* Remove team membership for a user
* Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 * 
 * To remove a membership between a user and a team, the authenticated user must have 'admin' permissions to the team or be an owner of the organization that the team is associated with. Removing team membership does not delete the user, it just removes their membership from the team.
 * 
 * **Note:** When you have team synchronization set up for a team with your organization's identity provider (IdP), you will see an error if you attempt to use the API for making changes to the team's membership. If you have access to manage group membership in your IdP, you can manage GitHub team membership through your identity provider, which automatically adds and removes team members in an organization. For more information, see "[Synchronizing teams between your identity provider and GitHub](https://docs.github.com/articles/synchronizing-teams-between-your-identity-provider-and-github/)."
 * 
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/memberships/{username}`.
* @param org - The organization name. The name is not case sensitive.
* @param username - The handle for the GitHub user account.
* @param teamSlug - The slug of the team name. 
*/
export const removeMembershipForUserInOrg: ApiHeroEndpoint<
  { org: string; username: string; teamSlug: string },
  void
> = {
  id: "teams/remove-membership-for-user-in-org",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/teams#list-idp-groups-for-a-team


* List IdP groups for a team
* Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 * 
 * List IdP groups connected to a team on GitHub.
 * 
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/team-sync/group-mappings`.
* @param org - The organization name. The name is not case sensitive.
* @param teamSlug - The slug of the team name. 
*/
export const listIdpGroupsInOrg: ApiHeroEndpoint<{ org: string; teamSlug: string }, GroupMapping> =
  {
    id: "teams/list-idp-groups-in-org",
    clientId: "github",
    version: "1.1.5",
  };

/** 
* @see https://docs.github.com/rest/reference/teams#create-or-update-idp-group-connections


* Create or update IdP group connections
* Team synchronization is available for organizations using GitHub Enterprise Cloud. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 * 
 * Creates, updates, or removes a connection between a team and an IdP group. When adding groups to a team, you must include all new and existing groups to avoid replacing existing groups with the new ones. Specifying an empty `groups` array will remove all connections for a team.
 * 
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `PATCH /organizations/{org_id}/team/{team_id}/team-sync/group-mappings`.
* @param org - The organization name. The name is not case sensitive.
* @param teamSlug - The slug of the team name. 
*/
export const createOrUpdateIdpGroupConnectionsInOrg: ApiHeroEndpoint<
  {
    org: string;
    teamSlug: string;
    teamSync: {
      /**
       * The IdP groups you want to connect to a GitHub team. When updating, the new `groups` object will replace the original one. You must include any existing groups that you don't want to remove.
       */
      groups?: Array<{
        /**
         * ID of the IdP group.
         */
        group_id: string;

        /**
         * Name of the IdP group.
         */
        group_name: string;

        /**
         * Description of the IdP group.
         */
        group_description: string;
      }>;
    };
  },
  GroupMapping
> = {
  id: "teams/create-or-update-idp-group-connections-in-org",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/teams#list-discussion-comments-legacy

* @deprecated

* List discussion comments (Legacy)
* **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [List discussion comments](https://docs.github.com/rest/reference/teams#list-discussion-comments) endpoint.
 * 
 * List all comments on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
* @param teamId - The unique identifier of the team.
* @param discussionNumber - The number that identifies the discussion.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch.
* @param [direction] - The direction to sort the results by. 
*/
export const listDiscussionCommentsLegacy: ApiHeroEndpoint<
  {
    teamId: number;
    discussionNumber: number;
    perPage?: number;
    page?: number;
    direction?: "asc" | "desc";
  },
  Array<TeamDiscussionComment>,
  { Link: string }
> = {
  id: "teams/list-discussion-comments-legacy",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/teams#create-a-discussion-comment-legacy

* @deprecated

* Create a discussion comment (Legacy)
* **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Create a discussion comment](https://docs.github.com/rest/reference/teams#create-a-discussion-comment) endpoint.
 * 
 * Creates a new comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
 * 
 * This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.
* @param teamId - The unique identifier of the team.
* @param discussionNumber - The number that identifies the discussion. 
*/
export const createDiscussionCommentLegacy: ApiHeroEndpoint<
  {
    teamId: number;
    discussionNumber: number;
    comment: {
      /**
       * The discussion comment's body text.
       */
      body: string;
    };
  },
  TeamDiscussionComment
> = {
  id: "teams/create-discussion-comment-legacy",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/teams#get-a-discussion


* Get a discussion
* Get a specific discussion on a team's page. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
 * 
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}`.
* @param org - The organization name. The name is not case sensitive.
* @param teamSlug - The slug of the team name.
* @param discussionNumber - The number that identifies the discussion. 
*/
export const getDiscussionInOrg: ApiHeroEndpoint<
  { org: string; teamSlug: string; discussionNumber: number },
  TeamDiscussion
> = {
  id: "teams/get-discussion-in-org",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/teams#delete-a-discussion


* Delete a discussion
* Delete a discussion from a team's page. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
 * 
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}`.
* @param org - The organization name. The name is not case sensitive.
* @param teamSlug - The slug of the team name.
* @param discussionNumber - The number that identifies the discussion. 
*/
export const deleteDiscussionInOrg: ApiHeroEndpoint<
  { org: string; teamSlug: string; discussionNumber: number },
  void
> = {
  id: "teams/delete-discussion-in-org",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/teams#update-a-discussion


* Update a discussion
* Edits the title and body text of a discussion post. Only the parameters you provide are updated. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
 * 
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `PATCH /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}`.
* @param org - The organization name. The name is not case sensitive.
* @param teamSlug - The slug of the team name.
* @param discussionNumber - The number that identifies the discussion. 
*/
export const updateDiscussionInOrg: ApiHeroEndpoint<
  {
    org: string;
    teamSlug: string;
    discussionNumber: number;
    discussion?: {
      /**
       * The discussion post's body text.
       */
      body?: string;

      /**
       * The discussion post's title.
       */
      title?: string;
    };
  },
  TeamDiscussion
> = {
  id: "teams/update-discussion-in-org",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/teams#list-discussion-comments


* List discussion comments
* List all comments on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
 * 
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments`.
* @param org - The organization name. The name is not case sensitive.
* @param teamSlug - The slug of the team name.
* @param discussionNumber - The number that identifies the discussion.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch.
* @param [direction] - The direction to sort the results by. 
*/
export const listDiscussionCommentsInOrg: ApiHeroEndpoint<
  {
    org: string;
    teamSlug: string;
    discussionNumber: number;
    perPage?: number;
    page?: number;
    direction?: "asc" | "desc";
  },
  Array<TeamDiscussionComment>,
  { Link: string }
> = {
  id: "teams/list-discussion-comments-in-org",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/teams#create-a-discussion-comment


* Create a discussion comment
* Creates a new comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
 * 
 * This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.
 * 
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments`.
* @param org - The organization name. The name is not case sensitive.
* @param teamSlug - The slug of the team name.
* @param discussionNumber - The number that identifies the discussion. 
*/
export const createDiscussionCommentInOrg: ApiHeroEndpoint<
  {
    org: string;
    teamSlug: string;
    discussionNumber: number;
    comment: {
      /**
       * The discussion comment's body text.
       */
      body: string;
    };
  },
  TeamDiscussionComment
> = {
  id: "teams/create-discussion-comment-in-org",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/teams#get-a-discussion-comment-legacy

* @deprecated

* Get a discussion comment (Legacy)
* **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Get a discussion comment](https://docs.github.com/rest/reference/teams#get-a-discussion-comment) endpoint.
 * 
 * Get a specific comment on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
* @param teamId - The unique identifier of the team.
* @param discussionNumber - The number that identifies the discussion.
* @param commentNumber - The number that identifies the comment. 
*/
export const getDiscussionCommentLegacy: ApiHeroEndpoint<
  { teamId: number; discussionNumber: number; commentNumber: number },
  TeamDiscussionComment
> = {
  id: "teams/get-discussion-comment-legacy",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/teams#delete-a-discussion-comment-legacy

* @deprecated

* Delete a discussion comment (Legacy)
* **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Delete a discussion comment](https://docs.github.com/rest/reference/teams#delete-a-discussion-comment) endpoint.
 * 
 * Deletes a comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
* @param teamId - The unique identifier of the team.
* @param discussionNumber - The number that identifies the discussion.
* @param commentNumber - The number that identifies the comment. 
*/
export const deleteDiscussionCommentLegacy: ApiHeroEndpoint<
  { teamId: number; discussionNumber: number; commentNumber: number },
  void
> = {
  id: "teams/delete-discussion-comment-legacy",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/teams#update-a-discussion-comment-legacy

* @deprecated

* Update a discussion comment (Legacy)
* **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [Update a discussion comment](https://docs.github.com/rest/reference/teams#update-a-discussion-comment) endpoint.
 * 
 * Edits the body text of a discussion comment. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
* @param teamId - The unique identifier of the team.
* @param discussionNumber - The number that identifies the discussion.
* @param commentNumber - The number that identifies the comment. 
*/
export const updateDiscussionCommentLegacy: ApiHeroEndpoint<
  {
    teamId: number;
    discussionNumber: number;
    commentNumber: number;
    comment: {
      /**
       * The discussion comment's body text.
       */
      body: string;
    };
  },
  TeamDiscussionComment
> = {
  id: "teams/update-discussion-comment-legacy",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/teams#get-a-discussion-comment


* Get a discussion comment
* Get a specific comment on a team discussion. OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
 * 
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments/{comment_number}`.
* @param org - The organization name. The name is not case sensitive.
* @param teamSlug - The slug of the team name.
* @param discussionNumber - The number that identifies the discussion.
* @param commentNumber - The number that identifies the comment. 
*/
export const getDiscussionCommentInOrg: ApiHeroEndpoint<
  { org: string; teamSlug: string; discussionNumber: number; commentNumber: number },
  TeamDiscussionComment
> = {
  id: "teams/get-discussion-comment-in-org",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/teams#delete-a-discussion-comment


* Delete a discussion comment
* Deletes a comment on a team discussion. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
 * 
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `DELETE /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments/{comment_number}`.
* @param org - The organization name. The name is not case sensitive.
* @param teamSlug - The slug of the team name.
* @param discussionNumber - The number that identifies the discussion.
* @param commentNumber - The number that identifies the comment. 
*/
export const deleteDiscussionCommentInOrg: ApiHeroEndpoint<
  { org: string; teamSlug: string; discussionNumber: number; commentNumber: number },
  void
> = {
  id: "teams/delete-discussion-comment-in-org",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/teams#update-a-discussion-comment


* Update a discussion comment
* Edits the body text of a discussion comment. OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
 * 
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `PATCH /organizations/{org_id}/team/{team_id}/discussions/{discussion_number}/comments/{comment_number}`.
* @param org - The organization name. The name is not case sensitive.
* @param teamSlug - The slug of the team name.
* @param discussionNumber - The number that identifies the discussion.
* @param commentNumber - The number that identifies the comment. 
*/
export const updateDiscussionCommentInOrg: ApiHeroEndpoint<
  {
    org: string;
    teamSlug: string;
    discussionNumber: number;
    commentNumber: number;
    comment: {
      /**
       * The discussion comment's body text.
       */
      body: string;
    };
  },
  TeamDiscussionComment
> = {
  id: "teams/update-discussion-comment-in-org",
  clientId: "github",
  version: "1.1.5",
};
