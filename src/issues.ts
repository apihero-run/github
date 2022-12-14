import {
  Issue,
  IssueComment,
  IssueEvent,
  IssueEventForIssue,
  Label,
  Milestone,
  SimpleUser,
  TimelineIssueEvents,
  ApiHeroEndpoint,
} from "./@types";

/** 
* @see https://docs.github.com/rest/reference/issues#list-issues-assigned-to-the-authenticated-user


* List issues assigned to the authenticated user
* List issues assigned to the authenticated user across all visible repositories including owned repositories, member
 * repositories, and organization repositories. You can use the `filter` query parameter to fetch issues that are not
 * necessarily assigned to you.
 * 
 * 
 * **Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this
 * reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by
 * the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull
 * request id, use the "[List pull requests](https://docs.github.com/rest/reference/pulls#list-pull-requests)" endpoint.
* @param [since] - Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch.
* @param [orgs] 
* @param [pulls] 
* @param [owned] 
* @param [sort] - What to sort results by. Can be either `created`, `updated`, `comments`.
* @param [state] - Indicates the state of the issues to return. Can be either `open`, `closed`, or `all`.
* @param [collab] 
* @param [filter] - Indicates which sorts of issues to return. `assigned` means issues assigned to you. `created` means issues created by you. `mentioned` means issues mentioning you. `subscribed` means issues you're subscribed to updates for. `all` or `repos` means all issues you can see, regardless of participation or creation.
* @param [labels] - A list of comma separated label names. Example: `bug,ui,@high`
* @param [direction] - The direction to sort the results by. 
*/
export const list: ApiHeroEndpoint<
  {
    since?: string;
    perPage?: number;
    page?: number;
    orgs?: boolean;
    pulls?: boolean;
    owned?: boolean;
    sort?: "created" | "updated" | "comments";
    state?: "open" | "closed" | "all";
    collab?: boolean;
    filter?: "assigned" | "created" | "mentioned" | "subscribed" | "repos" | "all";
    labels?: string;
    direction?: "asc" | "desc";
  },
  Array<Issue>,
  { Link: string }
> = {
  id: "issues/list",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/issues#list-user-account-issues-assigned-to-the-authenticated-user


* List user account issues assigned to the authenticated user
* List issues across owned and member repositories assigned to the authenticated user.
 * 
 * **Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this
 * reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by
 * the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull
 * request id, use the "[List pull requests](https://docs.github.com/rest/reference/pulls#list-pull-requests)" endpoint.
* @param [since] - Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch.
* @param [labels] - A list of comma separated label names. Example: `bug,ui,@high`
* @param [direction] - The direction to sort the results by.
* @param [filter] - Indicates which sorts of issues to return. `assigned` means issues assigned to you. `created` means issues created by you. `mentioned` means issues mentioning you. `subscribed` means issues you're subscribed to updates for. `all` or `repos` means all issues you can see, regardless of participation or creation.
* @param [state] - Indicates the state of the issues to return. Can be either `open`, `closed`, or `all`.
* @param [sort] - What to sort results by. Can be either `created`, `updated`, `comments`. 
*/
export const listForAuthenticatedUser: ApiHeroEndpoint<
  {
    since?: string;
    perPage?: number;
    page?: number;
    labels?: string;
    direction?: "asc" | "desc";
    filter?: "assigned" | "created" | "mentioned" | "subscribed" | "repos" | "all";
    state?: "open" | "closed" | "all";
    sort?: "created" | "updated" | "comments";
  },
  Array<Issue>,
  { Link: string }
> = {
  id: "issues/list-for-authenticated-user",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/issues#list-organization-issues-assigned-to-the-authenticated-user


* List organization issues assigned to the authenticated user
* List issues in an organization assigned to the authenticated user.
 * 
 * **Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this
 * reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by
 * the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull
 * request id, use the "[List pull requests](https://docs.github.com/rest/reference/pulls#list-pull-requests)" endpoint.
* @param org - The organization name. The name is not case sensitive.
* @param [since] - Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch.
* @param [labels] - A list of comma separated label names. Example: `bug,ui,@high`
* @param [direction] - The direction to sort the results by.
* @param [state] - Indicates the state of the issues to return. Can be either `open`, `closed`, or `all`.
* @param [sort] - What to sort results by. Can be either `created`, `updated`, `comments`.
* @param [filter] - Indicates which sorts of issues to return. `assigned` means issues assigned to you. `created` means issues created by you. `mentioned` means issues mentioning you. `subscribed` means issues you're subscribed to updates for. `all` or `repos` means all issues you can see, regardless of participation or creation. 
*/
export const listForOrg: ApiHeroEndpoint<
  {
    org: string;
    since?: string;
    perPage?: number;
    page?: number;
    labels?: string;
    direction?: "asc" | "desc";
    state?: "open" | "closed" | "all";
    sort?: "created" | "updated" | "comments";
    filter?: "assigned" | "created" | "mentioned" | "subscribed" | "repos" | "all";
  },
  Array<Issue>,
  { Link: string }
> = {
  id: "issues/list-for-org",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/issues#list-repository-issues


* List repository issues
* List issues in a repository.
 * 
 * **Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this
 * reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by
 * the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull
 * request id, use the "[List pull requests](https://docs.github.com/rest/reference/pulls#list-pull-requests)" endpoint.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param [since] - Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch.
* @param [labels] - A list of comma separated label names. Example: `bug,ui,@high`
* @param [direction] - The direction to sort the results by.
* @param [mentioned] - A user that's mentioned in the issue.
* @param [creator] - The user that created the issue.
* @param [assignee] - Can be the name of a user. Pass in `none` for issues with no assigned user, and `*` for issues assigned to any user.
* @param [state] - Indicates the state of the issues to return. Can be either `open`, `closed`, or `all`.
* @param [sort] - What to sort results by. Can be either `created`, `updated`, `comments`.
* @param [milestone] - If an `integer` is passed, it should refer to a milestone by its `number` field. If the string `*` is passed, issues with any milestone are accepted. If the string `none` is passed, issues without milestones are returned. 
*/
export const listForRepo: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
    since?: string;
    perPage?: number;
    page?: number;
    labels?: string;
    direction?: "asc" | "desc";
    mentioned?: string;
    creator?: string;
    assignee?: string;
    state?: "open" | "closed" | "all";
    sort?: "created" | "updated" | "comments";
    milestone?: string;
  },
  Array<Issue>,
  { Link: string }
> = {
  id: "issues/list-for-repo",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/issues#create-an-issue


* Create an issue
* Any user with pull access to a repository can create an issue. If [issues are disabled in the repository](https://docs.github.com/articles/disabling-issues/), the API returns a `410 Gone` status.
 * 
 * This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const create: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
    issue: {
      /**
       * The contents of the issue.
       */
      body?: string;

      /**
       * The title of the issue.
       */
      title: string | number;

      /**
       * Labels to associate with this issue. _NOTE: Only users with push access can set labels for new issues. Labels are silently dropped otherwise._
       */
      labels?: Array<
        | string
        | {
            id?: number;
            name?: string;
            color?: string | null;
            description?: string | null;
          }
      >;

      /**
       * Login for the user that this issue should be assigned to. _NOTE: Only users with push access can set the assignee for new issues. The assignee is silently dropped otherwise. **This field is deprecated.**_
       */
      assignee?: string | null;

      /**
       * Logins for Users to assign to this issue. _NOTE: Only users with push access can set assignees for new issues. Assignees are silently dropped otherwise._
       */
      assignees?: Array<string>;
      milestone?: string | number;
    };
  },
  Issue,
  { Location: string }
> = {
  id: "issues/create",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/issues#list-labels-for-a-repository


* List labels for a repository
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listLabelsForRepo: ApiHeroEndpoint<
  { owner: string; repo: string; perPage?: number; page?: number },
  Array<Label>,
  { Link: string }
> = {
  id: "issues/list-labels-for-repo",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/issues#create-a-label


* Create a label
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const createLabel: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
    label: {
      /**
       * The name of the label. Emoji can be added to label names, using either native emoji or colon-style markup. For example, typing `:strawberry:` will render the emoji ![:strawberry:](https://github.githubassets.com/images/icons/emoji/unicode/1f353.png ":strawberry:"). For a full list of available emoji and codes, see "[Emoji cheat sheet](https://github.com/ikatyang/emoji-cheat-sheet)."
       */
      name: string;

      /**
       * The [hexadecimal color code](http://www.color-hex.com/) for the label, without the leading `#`.
       */
      color?: string;

      /**
       * A short description of the label. Must be 100 characters or fewer.
       */
      description?: string;
    };
  },
  Label,
  { Location: string }
> = {
  id: "issues/create-label",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/issues#list-assignees


* List assignees
* Lists the [available assignees](https://docs.github.com/articles/assigning-issues-and-pull-requests-to-other-github-users/) for issues in a repository.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listAssignees: ApiHeroEndpoint<
  { owner: string; repo: string; perPage?: number; page?: number },
  Array<SimpleUser>,
  { Link: string }
> = {
  id: "issues/list-assignees",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/issues#list-milestones


* List milestones
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch.
* @param [state] - The state of the milestone. Either `open`, `closed`, or `all`.
* @param [sort] - What to sort results by. Either `due_on` or `completeness`.
* @param [direction] - The direction of the sort. Either `asc` or `desc`. 
*/
export const listMilestones: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
    perPage?: number;
    page?: number;
    state?: "open" | "closed" | "all";
    sort?: "due_on" | "completeness";
    direction?: "asc" | "desc";
  },
  Array<Milestone>,
  { Link: string }
> = {
  id: "issues/list-milestones",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/issues#create-a-milestone


* Create a milestone
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const createMilestone: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
    milestone: {
      /**
       * The state of the milestone. Either `open` or `closed`.
       */
      state?: "open" | "closed";

      /**
       * The title of the milestone.
       */
      title: string;

      /**
       * The milestone due date. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
       */
      due_on?: string;

      /**
       * A description of the milestone.
       */
      description?: string;
    };
  },
  Milestone,
  { Location: string }
> = {
  id: "issues/create-milestone",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/issues#list-issue-events-for-a-repository


* List issue events for a repository
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listEventsForRepo: ApiHeroEndpoint<
  { owner: string; repo: string; perPage?: number; page?: number },
  Array<IssueEvent>,
  { Link: string }
> = {
  id: "issues/list-events-for-repo",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/issues#get-a-label


* Get a label
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param name  
*/
export const getLabel: ApiHeroEndpoint<{ owner: string; repo: string; name: string }, Label> = {
  id: "issues/get-label",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/issues#delete-a-label


* Delete a label
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param name  
*/
export const deleteLabel: ApiHeroEndpoint<{ owner: string; repo: string; name: string }, void> = {
  id: "issues/delete-label",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/issues#update-a-label


* Update a label
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param name  
*/
export const updateLabel: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
    name: string;
    label?: {
      /**
       * The [hexadecimal color code](http://www.color-hex.com/) for the label, without the leading `#`.
       */
      color?: string;

      /**
       * The new name of the label. Emoji can be added to label names, using either native emoji or colon-style markup. For example, typing `:strawberry:` will render the emoji ![:strawberry:](https://github.githubassets.com/images/icons/emoji/unicode/1f353.png ":strawberry:"). For a full list of available emoji and codes, see "[Emoji cheat sheet](https://github.com/ikatyang/emoji-cheat-sheet)."
       */
      new_name?: string;

      /**
       * A short description of the label. Must be 100 characters or fewer.
       */
      description?: string;
    };
  },
  Label
> = {
  id: "issues/update-label",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/issues#list-issue-comments-for-a-repository


* List issue comments for a repository
* By default, Issue Comments are ordered by ascending ID.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param [since] - Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch.
* @param [sort] - The property to sort the results by. `created` means when the repository was starred. `updated` means when the repository was last pushed to.
* @param [direction] - Either `asc` or `desc`. Ignored without the `sort` parameter. 
*/
export const listCommentsForRepo: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
    since?: string;
    perPage?: number;
    page?: number;
    sort?: "created" | "updated";
    direction?: "asc" | "desc";
  },
  Array<IssueComment>,
  { Link: string }
> = {
  id: "issues/list-comments-for-repo",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/issues#check-if-a-user-can-be-assigned


* Check if a user can be assigned
* Checks if a user has permission to be assigned to an issue in this repository.
 * 
 * If the `assignee` can be assigned to issues in the repository, a `204` header with no content is returned.
 * 
 * Otherwise a `404` status code is returned.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param assignee  
*/
export const checkUserCanBeAssigned: ApiHeroEndpoint<
  { owner: string; repo: string; assignee: string },
  void
> = {
  id: "issues/check-user-can-be-assigned",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/issues#get-an-issue


* Get an issue
* The API returns a [`301 Moved Permanently` status](https://docs.github.com/rest/overview/resources-in-the-rest-api#http-redirects-redirects) if the issue was
 * [transferred](https://docs.github.com/articles/transferring-an-issue-to-another-repository/) to another repository. If
 * the issue was transferred to or deleted from a repository where the authenticated user lacks read access, the API
 * returns a `404 Not Found` status. If the issue was deleted from a repository where the authenticated user has read
 * access, the API returns a `410 Gone` status. To receive webhook events for transferred and deleted issues, subscribe
 * to the [`issues`](https://docs.github.com/webhooks/event-payloads/#issues) webhook.
 * 
 * **Note**: GitHub's REST API v3 considers every pull request an issue, but not every issue is a pull request. For this
 * reason, "Issues" endpoints may return both issues and pull requests in the response. You can identify pull requests by
 * the `pull_request` key. Be aware that the `id` of a pull request returned from "Issues" endpoints will be an _issue id_. To find out the pull
 * request id, use the "[List pull requests](https://docs.github.com/rest/reference/pulls#list-pull-requests)" endpoint.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param issueNumber - The number that identifies the issue. 
*/
export const getIssue: ApiHeroEndpoint<
  { owner: string; repo: string; issueNumber: number },
  Issue
> = {
  id: "issues/get",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/issues/#update-an-issue


* Update an issue
* Issue owners and users with push access can edit an issue.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param issueNumber - The number that identifies the issue. 
*/
export const update: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
    issueNumber: number;
    issue?: {
      /**
       * The contents of the issue.
       */
      body?: string | null;

      /**
       * State of the issue. Either `open` or `closed`.
       */
      state?: "open" | "closed";

      /**
       * The title of the issue.
       */
      title?: string | number;

      /**
       * Labels to associate with this issue. Pass one or more Labels to _replace_ the set of Labels on this Issue. Send an empty array (`[]`) to clear all Labels from the Issue. _NOTE: Only users with push access can set labels for issues. Labels are silently dropped otherwise._
       */
      labels?: Array<
        | string
        | {
            id?: number;
            name?: string;
            color?: string | null;
            description?: string | null;
          }
      >;

      /**
       * Login for the user that this issue should be assigned to. **This field is deprecated.**
       */
      assignee?: string | null;

      /**
       * Logins for Users to assign to this issue. Pass one or more user logins to _replace_ the set of assignees on this Issue. Send an empty array (`[]`) to clear all assignees from the Issue. _NOTE: Only users with push access can set assignees for new issues. Assignees are silently dropped otherwise._
       */
      assignees?: Array<string>;
      milestone?: string | number;
    };
  },
  Issue
> = {
  id: "issues/update",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/issues#get-an-issue-event


* Get an issue event
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param eventId  
*/
export const getEvent: ApiHeroEndpoint<
  { owner: string; repo: string; eventId: number },
  IssueEvent
> = {
  id: "issues/get-event",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/issues#lock-an-issue


* Lock an issue
* Users with push access can lock an issue or pull request's conversation.
 * 
 * Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/rest/overview/resources-in-the-rest-api#http-verbs)."
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param issueNumber - The number that identifies the issue. 
*/
export const lock: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
    issueNumber: number;
    payload?: {
      /** 
* The reason for locking the issue or pull request conversation. Lock will fail if you don't use one of these reasons:  
\* `off-topic`  
\* `too heated`  
\* `resolved`  
\* `spam`
*/
      lock_reason?: "off-topic" | "too heated" | "resolved" | "spam";
    } | null;
  },
  void
> = {
  id: "issues/lock",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/issues#unlock-an-issue


* Unlock an issue
* Users with push access can unlock an issue's conversation.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param issueNumber - The number that identifies the issue. 
*/
export const unlock: ApiHeroEndpoint<{ owner: string; repo: string; issueNumber: number }, void> = {
  id: "issues/unlock",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/issues#get-an-issue-comment


* Get an issue comment
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param commentId - The unique identifier of the comment. 
*/
export const getComment: ApiHeroEndpoint<
  { owner: string; repo: string; commentId: number },
  IssueComment
> = {
  id: "issues/get-comment",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/issues#delete-an-issue-comment


* Delete an issue comment
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param commentId - The unique identifier of the comment. 
*/
export const deleteComment: ApiHeroEndpoint<
  { owner: string; repo: string; commentId: number },
  void
> = {
  id: "issues/delete-comment",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/issues#update-an-issue-comment


* Update an issue comment
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param commentId - The unique identifier of the comment. 
*/
export const updateComment: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
    commentId: number;
    comment: {
      /**
       * The contents of the comment.
       */
      body: string;
    };
  },
  IssueComment
> = {
  id: "issues/update-comment",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/issues#list-issue-events


* List issue events
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param issueNumber - The number that identifies the issue.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listEvents: ApiHeroEndpoint<
  { owner: string; repo: string; issueNumber: number; perPage?: number; page?: number },
  Array<IssueEventForIssue>,
  { Link: string }
> = {
  id: "issues/list-events",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/issues#list-labels-for-an-issue


* List labels for an issue
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param issueNumber - The number that identifies the issue.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listLabelsOnIssue: ApiHeroEndpoint<
  { owner: string; repo: string; issueNumber: number; perPage?: number; page?: number },
  Array<Label>,
  { Link: string }
> = {
  id: "issues/list-labels-on-issue",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/issues#add-labels-to-an-issue


* Add labels to an issue
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param issueNumber - The number that identifies the issue. 
*/
export const addLabels: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
    issueNumber: number;
    label?:
      | {
          /**
           * The names of the labels to add to the issue's existing labels. You can pass an empty array to remove all labels. Alternatively, you can pass a single label as a `string` or an `array` of labels directly, but GitHub recommends passing an object with the `labels` key. You can also replace all of the labels for an issue. For more information, see "[Set labels for an issue](https://docs.github.com/rest/reference/issues#set-labels-for-an-issue)."
           */
          labels?: Array<string>;
        }
      | Array<string>
      | {
          labels?: Array<{
            name: string;
          }>;
        }
      | string;
  },
  Array<Label>
> = {
  id: "issues/add-labels",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/issues#set-labels-for-an-issue


* Set labels for an issue
* Removes any previous labels and sets the new labels for an issue.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param issueNumber - The number that identifies the issue. 
*/
export const setLabels: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
    issueNumber: number;
    payload?:
      | {
          /**
           * The names of the labels to set for the issue. The labels you set replace any existing labels. You can pass an empty array to remove all labels. Alternatively, you can pass a single label as a `string` or an `array` of labels directly, but GitHub recommends passing an object with the `labels` key. You can also add labels to the existing labels for an issue. For more information, see "[Add labels to an issue](https://docs.github.com/rest/reference/issues#add-labels-to-an-issue)."
           */
          labels?: Array<string>;
        }
      | Array<string>
      | {
          labels?: Array<{
            name: string;
          }>;
        }
      | string;
  },
  Array<Label>
> = {
  id: "issues/set-labels",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/issues#remove-all-labels-from-an-issue


* Remove all labels from an issue
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param issueNumber - The number that identifies the issue. 
*/
export const removeAllLabels: ApiHeroEndpoint<
  { owner: string; repo: string; issueNumber: number },
  void
> = {
  id: "issues/remove-all-labels",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/issues#get-a-milestone


* Get a milestone
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param milestoneNumber - The number that identifies the milestone. 
*/
export const getMilestone: ApiHeroEndpoint<
  { owner: string; repo: string; milestoneNumber: number },
  Milestone
> = {
  id: "issues/get-milestone",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/issues#delete-a-milestone


* Delete a milestone
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param milestoneNumber - The number that identifies the milestone. 
*/
export const deleteMilestone: ApiHeroEndpoint<
  { owner: string; repo: string; milestoneNumber: number },
  void
> = {
  id: "issues/delete-milestone",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/issues#update-a-milestone


* Update a milestone
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param milestoneNumber - The number that identifies the milestone. 
*/
export const updateMilestone: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
    milestoneNumber: number;
    milestone?: {
      /**
       * The state of the milestone. Either `open` or `closed`.
       */
      state?: "open" | "closed";

      /**
       * The title of the milestone.
       */
      title?: string;

      /**
       * The milestone due date. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
       */
      due_on?: string;

      /**
       * A description of the milestone.
       */
      description?: string;
    };
  },
  Milestone
> = {
  id: "issues/update-milestone",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/issues#list-issue-comments


* List issue comments
* Issue Comments are ordered by ascending ID.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param issueNumber - The number that identifies the issue.
* @param [since] - Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listComments: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
    issueNumber: number;
    since?: string;
    perPage?: number;
    page?: number;
  },
  Array<IssueComment>,
  { Link: string }
> = {
  id: "issues/list-comments",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/issues#create-an-issue-comment


* Create an issue comment
* This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param issueNumber - The number that identifies the issue. 
*/
export const createComment: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
    issueNumber: number;
    comment: {
      /**
       * The contents of the comment.
       */
      body: string;
    };
  },
  IssueComment,
  { Location: string }
> = {
  id: "issues/create-comment",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/issues#list-timeline-events-for-an-issue


* List timeline events for an issue
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param issueNumber - The number that identifies the issue.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listEventsForTimeline: ApiHeroEndpoint<
  { owner: string; repo: string; issueNumber: number; perPage?: number; page?: number },
  Array<TimelineIssueEvents>,
  { Link: string }
> = {
  id: "issues/list-events-for-timeline",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/issues#add-assignees-to-an-issue


* Add assignees to an issue
* Adds up to 10 assignees to an issue. Users already assigned to an issue are not replaced.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param issueNumber - The number that identifies the issue. 
*/
export const addAssignees: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
    issueNumber: number;
    assignee?: {
      /**
       * Usernames of people to assign this issue to. _NOTE: Only users with push access can add assignees to an issue. Assignees are silently ignored otherwise._
       */
      assignees?: Array<string>;
    };
  },
  Issue
> = {
  id: "issues/add-assignees",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/issues#remove-assignees-from-an-issue


* Remove assignees from an issue
* Removes one or more assignees from an issue.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param issueNumber - The number that identifies the issue. 
*/
export const removeAssignees: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
    issueNumber: number;
    assignee?: {
      /**
       * Usernames of assignees to remove from an issue. _NOTE: Only users with push access can remove assignees from an issue. Assignees are silently ignored otherwise._
       */
      assignees?: Array<string>;
    };
  },
  Issue
> = {
  id: "issues/remove-assignees",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/issues#remove-a-label-from-an-issue


* Remove a label from an issue
* Removes the specified label from the issue, and returns the remaining labels on the issue. This endpoint returns a `404 Not Found` status if the label does not exist.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param issueNumber - The number that identifies the issue.
* @param name  
*/
export const removeLabel: ApiHeroEndpoint<
  { owner: string; repo: string; issueNumber: number; name: string },
  Array<Label>
> = {
  id: "issues/remove-label",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/issues#list-labels-for-issues-in-a-milestone


* List labels for issues in a milestone
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param milestoneNumber - The number that identifies the milestone.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listLabelsForMilestone: ApiHeroEndpoint<
  { owner: string; repo: string; milestoneNumber: number; perPage?: number; page?: number },
  Array<Label>,
  { Link: string }
> = {
  id: "issues/list-labels-for-milestone",
  clientId: "github",
  version: "1.1.5",
};
