import { Reaction, ApiHeroEndpoint } from "./@types";

/** 
* @see https://docs.github.com/rest/reference/reactions#list-reactions-for-a-commit-comment


* List reactions for a commit comment
* List the reactions to a [commit comment](https://docs.github.com/rest/reference/repos#comments).
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param commentId - The unique identifier of the comment.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch.
* @param [content] - Returns a single [reaction type](https://docs.github.com/rest/reference/reactions#reaction-types). Omit this parameter to list all reactions to a commit comment. 
*/
export const listForCommitComment: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
    commentId: number;
    perPage?: number;
    page?: number;
    content?: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes";
  },
  Array<Reaction>,
  { Link: string }
> = {
  id: "reactions/list-for-commit-comment",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/reactions#create-reaction-for-a-commit-comment


* Create reaction for a commit comment
* Create a reaction to a [commit comment](https://docs.github.com/rest/reference/repos#comments). A response with an HTTP `200` status means that you already added the reaction type to this commit comment.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param commentId - The unique identifier of the comment. 
*/
export const createForCommitComment: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
    commentId: number;
    reaction: {
      /**
       * The [reaction type](https://docs.github.com/rest/reference/reactions#reaction-types) to add to the commit comment.
       */
      content: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes";
    };
  },
  Reaction
> = {
  id: "reactions/create-for-commit-comment",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/reactions#list-reactions-for-an-issue


* List reactions for an issue
* List the reactions to an [issue](https://docs.github.com/rest/reference/issues).
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param issueNumber - The number that identifies the issue.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch.
* @param [content] - Returns a single [reaction type](https://docs.github.com/rest/reference/reactions#reaction-types). Omit this parameter to list all reactions to an issue. 
*/
export const listForIssue: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
    issueNumber: number;
    perPage?: number;
    page?: number;
    content?: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes";
  },
  Array<Reaction>,
  { Link: string }
> = {
  id: "reactions/list-for-issue",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/reactions#create-reaction-for-an-issue


* Create reaction for an issue
* Create a reaction to an [issue](https://docs.github.com/rest/reference/issues/). A response with an HTTP `200` status means that you already added the reaction type to this issue.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param issueNumber - The number that identifies the issue. 
*/
export const createForIssue: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
    issueNumber: number;
    reaction: {
      /**
       * The [reaction type](https://docs.github.com/rest/reference/reactions#reaction-types) to add to the issue.
       */
      content: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes";
    };
  },
  Reaction
> = {
  id: "reactions/create-for-issue",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/reactions/#list-reactions-for-a-release


* List reactions for a release
* List the reactions to a [release](https://docs.github.com/rest/reference/repos#releases).
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param releaseId - The unique identifier of the release.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch.
* @param [content] - Returns a single [reaction type](https://docs.github.com/rest/reference/reactions#reaction-types). Omit this parameter to list all reactions to a release. 
*/
export const listForRelease: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
    releaseId: number;
    perPage?: number;
    page?: number;
    content?: "+1" | "laugh" | "heart" | "hooray" | "rocket" | "eyes";
  },
  Array<Reaction>,
  { Link: string }
> = {
  id: "reactions/list-for-release",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/reactions/#create-reaction-for-a-release


* Create reaction for a release
* Create a reaction to a [release](https://docs.github.com/rest/reference/repos#releases). A response with a `Status: 200 OK` means that you already added the reaction type to this release.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param releaseId - The unique identifier of the release. 
*/
export const createForRelease: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
    releaseId: number;
    reaction: {
      /**
       * The [reaction type](https://docs.github.com/rest/reference/reactions#reaction-types) to add to the release.
       */
      content: "+1" | "laugh" | "heart" | "hooray" | "rocket" | "eyes";
    };
  },
  Reaction
> = {
  id: "reactions/create-for-release",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/reactions/#list-reactions-for-a-team-discussion-legacy

* @deprecated

* List reactions for a team discussion (Legacy)
* **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List reactions for a team discussion`](https://docs.github.com/rest/reference/reactions#list-reactions-for-a-team-discussion) endpoint.
 * 
 * List the reactions to a [team discussion](https://docs.github.com/rest/reference/teams#discussions). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
* @param teamId - The unique identifier of the team.
* @param discussionNumber - The number that identifies the discussion.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch.
* @param [content] - Returns a single [reaction type](https://docs.github.com/rest/reference/reactions#reaction-types). Omit this parameter to list all reactions to a team discussion. 
*/
export const listForTeamDiscussionLegacy: ApiHeroEndpoint<
  {
    teamId: number;
    discussionNumber: number;
    perPage?: number;
    page?: number;
    content?: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes";
  },
  Array<Reaction>,
  { Link: string }
> = {
  id: "reactions/list-for-team-discussion-legacy",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/reactions/#create-reaction-for-a-team-discussion-legacy

* @deprecated

* Create reaction for a team discussion (Legacy)
* **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`Create reaction for a team discussion`](https://docs.github.com/rest/reference/reactions#create-reaction-for-a-team-discussion) endpoint.
 * 
 * Create a reaction to a [team discussion](https://docs.github.com/rest/reference/teams#discussions). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion.
* @param teamId - The unique identifier of the team.
* @param discussionNumber - The number that identifies the discussion. 
*/
export const createForTeamDiscussionLegacy: ApiHeroEndpoint<
  {
    teamId: number;
    discussionNumber: number;
    reaction: {
      /**
       * The [reaction type](https://docs.github.com/rest/reference/reactions#reaction-types) to add to the team discussion.
       */
      content: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes";
    };
  },
  Reaction
> = {
  id: "reactions/create-for-team-discussion-legacy",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/reactions#list-reactions-for-a-pull-request-review-comment


* List reactions for a pull request review comment
* List the reactions to a [pull request review comment](https://docs.github.com/rest/reference/pulls#review-comments).
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param commentId - The unique identifier of the comment.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch.
* @param [content] - Returns a single [reaction type](https://docs.github.com/rest/reference/reactions#reaction-types). Omit this parameter to list all reactions to a pull request review comment. 
*/
export const listForPullRequestReviewComment: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
    commentId: number;
    perPage?: number;
    page?: number;
    content?: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes";
  },
  Array<Reaction>,
  { Link: string }
> = {
  id: "reactions/list-for-pull-request-review-comment",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/reactions#create-reaction-for-a-pull-request-review-comment


* Create reaction for a pull request review comment
* Create a reaction to a [pull request review comment](https://docs.github.com/rest/reference/pulls#comments). A response with an HTTP `200` status means that you already added the reaction type to this pull request review comment.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param commentId - The unique identifier of the comment. 
*/
export const createForPullRequestReviewComment: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
    commentId: number;
    reaction: {
      /**
       * The [reaction type](https://docs.github.com/rest/reference/reactions#reaction-types) to add to the pull request review comment.
       */
      content: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes";
    };
  },
  Reaction
> = {
  id: "reactions/create-for-pull-request-review-comment",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/reactions#list-reactions-for-an-issue-comment


* List reactions for an issue comment
* List the reactions to an [issue comment](https://docs.github.com/rest/reference/issues#comments).
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param commentId - The unique identifier of the comment.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch.
* @param [content] - Returns a single [reaction type](https://docs.github.com/rest/reference/reactions#reaction-types). Omit this parameter to list all reactions to an issue comment. 
*/
export const listForIssueComment: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
    commentId: number;
    perPage?: number;
    page?: number;
    content?: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes";
  },
  Array<Reaction>,
  { Link: string }
> = {
  id: "reactions/list-for-issue-comment",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/reactions#create-reaction-for-an-issue-comment


* Create reaction for an issue comment
* Create a reaction to an [issue comment](https://docs.github.com/rest/reference/issues#comments). A response with an HTTP `200` status means that you already added the reaction type to this issue comment.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param commentId - The unique identifier of the comment. 
*/
export const createForIssueComment: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
    commentId: number;
    reaction: {
      /**
       * The [reaction type](https://docs.github.com/rest/reference/reactions#reaction-types) to add to the issue comment.
       */
      content: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes";
    };
  },
  Reaction
> = {
  id: "reactions/create-for-issue-comment",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/reactions#delete-a-commit-comment-reaction


* Delete a commit comment reaction
* **Note:** You can also specify a repository by `repository_id` using the route `DELETE /repositories/:repository_id/comments/:comment_id/reactions/:reaction_id`.
 * 
 * Delete a reaction to a [commit comment](https://docs.github.com/rest/reference/repos#comments).
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param commentId - The unique identifier of the comment.
* @param reactionId - The unique identifier of the reaction. 
*/
export const deleteForCommitComment: ApiHeroEndpoint<
  { owner: string; repo: string; commentId: number; reactionId: number },
  void
> = {
  id: "reactions/delete-for-commit-comment",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/reactions#delete-an-issue-reaction


* Delete an issue reaction
* **Note:** You can also specify a repository by `repository_id` using the route `DELETE /repositories/:repository_id/issues/:issue_number/reactions/:reaction_id`.
 * 
 * Delete a reaction to an [issue](https://docs.github.com/rest/reference/issues/).
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param issueNumber - The number that identifies the issue.
* @param reactionId - The unique identifier of the reaction. 
*/
export const deleteForIssue: ApiHeroEndpoint<
  { owner: string; repo: string; issueNumber: number; reactionId: number },
  void
> = {
  id: "reactions/delete-for-issue",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/reactions/#delete-a-release-reaction


* Delete a release reaction
* **Note:** You can also specify a repository by `repository_id` using the route `DELETE delete /repositories/:repository_id/releases/:release_id/reactions/:reaction_id`.
 * 
 * Delete a reaction to a [release](https://docs.github.com/rest/reference/repos#releases).
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param releaseId - The unique identifier of the release.
* @param reactionId - The unique identifier of the reaction. 
*/
export const deleteForRelease: ApiHeroEndpoint<
  { owner: string; repo: string; releaseId: number; reactionId: number },
  void
> = {
  id: "reactions/delete-for-release",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/reactions#list-reactions-for-a-team-discussion


* List reactions for a team discussion
* List the reactions to a [team discussion](https://docs.github.com/rest/reference/teams#discussions). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
 * 
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions`.
* @param org - The organization name. The name is not case sensitive.
* @param teamSlug - The slug of the team name.
* @param discussionNumber - The number that identifies the discussion.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch.
* @param [content] - Returns a single [reaction type](https://docs.github.com/rest/reference/reactions#reaction-types). Omit this parameter to list all reactions to a team discussion. 
*/
export const listForTeamDiscussionInOrg: ApiHeroEndpoint<
  {
    org: string;
    teamSlug: string;
    discussionNumber: number;
    perPage?: number;
    page?: number;
    content?: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes";
  },
  Array<Reaction>,
  { Link: string }
> = {
  id: "reactions/list-for-team-discussion-in-org",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/reactions#create-reaction-for-a-team-discussion


* Create reaction for a team discussion
* Create a reaction to a [team discussion](https://docs.github.com/rest/reference/teams#discussions). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion.
 * 
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions`.
* @param org - The organization name. The name is not case sensitive.
* @param teamSlug - The slug of the team name.
* @param discussionNumber - The number that identifies the discussion. 
*/
export const createForTeamDiscussionInOrg: ApiHeroEndpoint<
  {
    org: string;
    teamSlug: string;
    discussionNumber: number;
    reaction: {
      /**
       * The [reaction type](https://docs.github.com/rest/reference/reactions#reaction-types) to add to the team discussion.
       */
      content: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes";
    };
  },
  Reaction
> = {
  id: "reactions/create-for-team-discussion-in-org",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/reactions#delete-a-pull-request-comment-reaction


* Delete a pull request comment reaction
* **Note:** You can also specify a repository by `repository_id` using the route `DELETE /repositories/:repository_id/pulls/comments/:comment_id/reactions/:reaction_id.`
 * 
 * Delete a reaction to a [pull request review comment](https://docs.github.com/rest/reference/pulls#review-comments).
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param commentId - The unique identifier of the comment.
* @param reactionId - The unique identifier of the reaction. 
*/
export const deleteForPullRequestComment: ApiHeroEndpoint<
  { owner: string; repo: string; commentId: number; reactionId: number },
  void
> = {
  id: "reactions/delete-for-pull-request-comment",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/reactions#delete-an-issue-comment-reaction


* Delete an issue comment reaction
* **Note:** You can also specify a repository by `repository_id` using the route `DELETE delete /repositories/:repository_id/issues/comments/:comment_id/reactions/:reaction_id`.
 * 
 * Delete a reaction to an [issue comment](https://docs.github.com/rest/reference/issues#comments).
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param commentId - The unique identifier of the comment.
* @param reactionId - The unique identifier of the reaction. 
*/
export const deleteForIssueComment: ApiHeroEndpoint<
  { owner: string; repo: string; commentId: number; reactionId: number },
  void
> = {
  id: "reactions/delete-for-issue-comment",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/reactions/#list-reactions-for-a-team-discussion-comment-legacy

* @deprecated

* List reactions for a team discussion comment (Legacy)
* **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new [`List reactions for a team discussion comment`](https://docs.github.com/rest/reference/reactions#list-reactions-for-a-team-discussion-comment) endpoint.
 * 
 * List the reactions to a [team discussion comment](https://docs.github.com/rest/reference/teams#discussion-comments). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
* @param teamId - The unique identifier of the team.
* @param discussionNumber - The number that identifies the discussion.
* @param commentNumber - The number that identifies the comment.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch.
* @param [content] - Returns a single [reaction type](https://docs.github.com/rest/reference/reactions#reaction-types). Omit this parameter to list all reactions to a team discussion comment. 
*/
export const listForTeamDiscussionCommentLegacy: ApiHeroEndpoint<
  {
    teamId: number;
    discussionNumber: number;
    commentNumber: number;
    perPage?: number;
    page?: number;
    content?: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes";
  },
  Array<Reaction>,
  { Link: string }
> = {
  id: "reactions/list-for-team-discussion-comment-legacy",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/reactions/#create-reaction-for-a-team-discussion-comment-legacy

* @deprecated

* Create reaction for a team discussion comment (Legacy)
* **Deprecation Notice:** This endpoint route is deprecated and will be removed from the Teams API. We recommend migrating your existing code to use the new "[Create reaction for a team discussion comment](https://docs.github.com/rest/reference/reactions#create-reaction-for-a-team-discussion-comment)" endpoint.
 * 
 * Create a reaction to a [team discussion comment](https://docs.github.com/rest/reference/teams#discussion-comments). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion comment.
* @param teamId - The unique identifier of the team.
* @param discussionNumber - The number that identifies the discussion.
* @param commentNumber - The number that identifies the comment. 
*/
export const createForTeamDiscussionCommentLegacy: ApiHeroEndpoint<
  {
    teamId: number;
    discussionNumber: number;
    commentNumber: number;
    reaction: {
      /**
       * The [reaction type](https://docs.github.com/rest/reference/reactions#reaction-types) to add to the team discussion comment.
       */
      content: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes";
    };
  },
  Reaction
> = {
  id: "reactions/create-for-team-discussion-comment-legacy",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/reactions#delete-team-discussion-reaction


* Delete team discussion reaction
* **Note:** You can also specify a team or organization with `team_id` and `org_id` using the route `DELETE /organizations/:org_id/team/:team_id/discussions/:discussion_number/reactions/:reaction_id`.
 * 
 * Delete a reaction to a [team discussion](https://docs.github.com/rest/reference/teams#discussions). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
* @param org - The organization name. The name is not case sensitive.
* @param teamSlug - The slug of the team name.
* @param discussionNumber - The number that identifies the discussion.
* @param reactionId - The unique identifier of the reaction. 
*/
export const deleteForTeamDiscussion: ApiHeroEndpoint<
  { org: string; teamSlug: string; discussionNumber: number; reactionId: number },
  void
> = {
  id: "reactions/delete-for-team-discussion",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/reactions#list-reactions-for-a-team-discussion-comment


* List reactions for a team discussion comment
* List the reactions to a [team discussion comment](https://docs.github.com/rest/reference/teams#discussion-comments/). OAuth access tokens require the `read:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
 * 
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `GET /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions`.
* @param org - The organization name. The name is not case sensitive.
* @param teamSlug - The slug of the team name.
* @param discussionNumber - The number that identifies the discussion.
* @param commentNumber - The number that identifies the comment.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch.
* @param [content] - Returns a single [reaction type](https://docs.github.com/rest/reference/reactions#reaction-types). Omit this parameter to list all reactions to a team discussion comment. 
*/
export const listForTeamDiscussionCommentInOrg: ApiHeroEndpoint<
  {
    org: string;
    teamSlug: string;
    discussionNumber: number;
    commentNumber: number;
    perPage?: number;
    page?: number;
    content?: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes";
  },
  Array<Reaction>,
  { Link: string }
> = {
  id: "reactions/list-for-team-discussion-comment-in-org",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/reactions#create-reaction-for-a-team-discussion-comment


* Create reaction for a team discussion comment
* Create a reaction to a [team discussion comment](https://docs.github.com/rest/reference/teams#discussion-comments). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). A response with an HTTP `200` status means that you already added the reaction type to this team discussion comment.
 * 
 * **Note:** You can also specify a team by `org_id` and `team_id` using the route `POST /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions`.
* @param org - The organization name. The name is not case sensitive.
* @param teamSlug - The slug of the team name.
* @param discussionNumber - The number that identifies the discussion.
* @param commentNumber - The number that identifies the comment. 
*/
export const createForTeamDiscussionCommentInOrg: ApiHeroEndpoint<
  {
    org: string;
    teamSlug: string;
    discussionNumber: number;
    commentNumber: number;
    reaction: {
      /**
       * The [reaction type](https://docs.github.com/rest/reference/reactions#reaction-types) to add to the team discussion comment.
       */
      content: "+1" | "-1" | "laugh" | "confused" | "heart" | "hooray" | "rocket" | "eyes";
    };
  },
  Reaction
> = {
  id: "reactions/create-for-team-discussion-comment-in-org",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/reactions#delete-team-discussion-comment-reaction


* Delete team discussion comment reaction
* **Note:** You can also specify a team or organization with `team_id` and `org_id` using the route `DELETE /organizations/:org_id/team/:team_id/discussions/:discussion_number/comments/:comment_number/reactions/:reaction_id`.
 * 
 * Delete a reaction to a [team discussion comment](https://docs.github.com/rest/reference/teams#discussion-comments). OAuth access tokens require the `write:discussion` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
* @param org - The organization name. The name is not case sensitive.
* @param teamSlug - The slug of the team name.
* @param discussionNumber - The number that identifies the discussion.
* @param reactionId - The unique identifier of the reaction.
* @param commentNumber - The number that identifies the comment. 
*/
export const deleteForTeamDiscussionComment: ApiHeroEndpoint<
  {
    org: string;
    teamSlug: string;
    discussionNumber: number;
    reactionId: number;
    commentNumber: number;
  },
  void
> = {
  id: "reactions/delete-for-team-discussion-comment",
  clientId: "github",
};
