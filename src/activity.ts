import {
  Event,
  Feed,
  Link,
  MinimalRepository,
  Repository,
  RepositorySubscription,
  SimpleUser,
  Stargazer,
  StarredRepository,
  Thread,
  ThreadSubscription,
  ApiHeroEndpoint,
} from "./@types";

/** 
* @see https://docs.github.com/rest/reference/activity#get-feeds


* Get feeds
* GitHub provides several timeline resources in [Atom](http://en.wikipedia.org/wiki/Atom_(standard)) format. The Feeds API lists all the feeds available to the authenticated user:
 * 
 * *   **Timeline**: The GitHub global public timeline
 * *   **User**: The public timeline for any user, using [URI template](https://docs.github.com/rest/overview/resources-in-the-rest-api#hypermedia)
 * *   **Current user public**: The public timeline for the authenticated user
 * *   **Current user**: The private timeline for the authenticated user
 * *   **Current user actor**: The private timeline for activity created by the authenticated user
 * *   **Current user organizations**: The private timeline for the organizations the authenticated user is a member of.
 * *   **Security advisories**: A collection of public announcements that provide information about security-related vulnerabilities in software on GitHub.
 * 
 * **Note**: Private feeds are only returned when [authenticating via Basic Auth](https://docs.github.com/rest/overview/other-authentication-methods#basic-authentication) since current feed URIs use the older, non revocable auth tokens. 
*/
export const getFeeds: ApiHeroEndpoint<void, Feed> = {
  id: "activity/get-feeds",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/activity#list-public-events


* List public events
* We delay the public events feed by five minutes, which means the most recent event returned by the public events API actually occurred at least five minutes ago.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listPublicEvents: ApiHeroEndpoint<
  { perPage?: number; page?: number },
  Array<Event>
> = {
  id: "activity/list-public-events",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/activity#list-repositories-starred-by-the-authenticated-user


* List repositories starred by the authenticated user
* Lists repositories the authenticated user has starred.
 * 
 * You can also find out _when_ stars were created by passing the following custom [media type](https://docs.github.com/rest/overview/media-types/) via the `Accept` header:
* @param [perPage=30] - The number of results per page (max 100).
* @param [direction] - The direction to sort the results by.
* @param [sort] - The property to sort the results by. `created` means when the repository was starred. `updated` means when the repository was last pushed to.
* @param [page=1] - Page number of the results to fetch. 
*/
export const listReposStarredByAuthenticatedUser: ApiHeroEndpoint<
  { perPage?: number; direction?: "asc" | "desc"; sort?: "created" | "updated"; page?: number },
  Array<Repository>,
  { Link: Link }
> = {
  id: "activity/list-repos-starred-by-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/activity#list-notifications-for-the-authenticated-user


* List notifications for the authenticated user
* List all notifications for the current user, sorted by most recently updated.
* @param [perPage=30] - The number of results per page (max 100).
* @param [participating=false] - If `true`, only shows notifications in which the user is directly participating or mentioned.
* @param [since] - Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
* @param [before] - Only show notifications updated before the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
* @param [all=false] - If `true`, show notifications marked as read.
* @param [page=1] - Page number of the results to fetch. 
*/
export const listNotificationsForAuthenticatedUser: ApiHeroEndpoint<
  {
    perPage?: number;
    participating?: boolean;
    since?: string;
    before?: string;
    all?: boolean;
    page?: number;
  },
  Array<Thread>,
  { Link: Link }
> = {
  id: "activity/list-notifications-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/activity#mark-notifications-as-read


* Mark notifications as read
* Marks all notifications as "read" removes it from the [default view on GitHub](https://github.com/notifications). If the number of notifications is too large to complete in one request, you will receive a `202 Accepted` status and GitHub will run an asynchronous process to mark notifications as "read." To check whether any "unread" notifications remain, you can use the [List notifications for the authenticated user](https://docs.github.com/rest/reference/activity#list-notifications-for-the-authenticated-user) endpoint and pass the query parameter `all=false`. 
*/
export const markNotificationsAsRead: ApiHeroEndpoint<
  {
    body?: {
      /**
       * Whether the notification has been read.
       */
      read?: boolean;

      /**
       * Describes the last point that notifications were checked. Anything updated since this time will not be marked as read. If you omit this parameter, all notifications are marked as read. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`. Default: The current timestamp.
       */
      last_read_at?: string;
    };
  },
  {
    message?: string;
  }
> = {
  id: "activity/mark-notifications-as-read",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/activity#list-public-organization-events


* List public organization events
* @param org - The organization name. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listPublicOrgEvents: ApiHeroEndpoint<
  { org: string; perPage?: number; page?: number },
  Array<Event>
> = {
  id: "activity/list-public-org-events",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/activity#list-repositories-watched-by-the-authenticated-user


* List repositories watched by the authenticated user
* Lists repositories the authenticated user is watching.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listWatchedReposForAuthenticatedUser: ApiHeroEndpoint<
  { perPage?: number; page?: number },
  Array<MinimalRepository>,
  { Link: Link }
> = {
  id: "activity/list-watched-repos-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/activity#list-events-for-the-authenticated-user


* List events for the authenticated user
* If you are authenticated as the given user, you will see your private events. Otherwise, you'll only see public events.
* @param username - The handle for the GitHub user account.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listEventsForAuthenticatedUser: ApiHeroEndpoint<
  { username: string; perPage?: number; page?: number },
  Array<Event>
> = {
  id: "activity/list-events-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/activity#list-repositories-starred-by-a-user


* List repositories starred by a user
* Lists repositories a user has starred.
 * 
 * You can also find out _when_ stars were created by passing the following custom [media type](https://docs.github.com/rest/overview/media-types/) via the `Accept` header:
* @param username - The handle for the GitHub user account.
* @param [perPage=30] - The number of results per page (max 100).
* @param [direction] - The direction to sort the results by.
* @param [sort] - The property to sort the results by. `created` means when the repository was starred. `updated` means when the repository was last pushed to.
* @param [page=1] - Page number of the results to fetch. 
*/
export const listReposStarredByUser: ApiHeroEndpoint<
  {
    username: string;
    perPage?: number;
    direction?: "asc" | "desc";
    sort?: "created" | "updated";
    page?: number;
  },
  Array<StarredRepository> | Array<Repository>,
  { Link: Link }
> = {
  id: "activity/list-repos-starred-by-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/activity#list-repository-events


* List repository events
* @param repo - The name of the repository. The name is not case sensitive.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listRepoEvents: ApiHeroEndpoint<
  { repo: string; owner: string; perPage?: number; page?: number },
  Array<Event>
> = {
  id: "activity/list-repo-events",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/activity#check-if-a-repository-is-starred-by-the-authenticated-user


* Check if a repository is starred by the authenticated user
* @param repo - The name of the repository. The name is not case sensitive.
* @param owner - The account owner of the repository. The name is not case sensitive. 
*/
export const checkRepoIsStarredByAuthenticatedUser: ApiHeroEndpoint<
  { repo: string; owner: string },
  void
> = {
  id: "activity/check-repo-is-starred-by-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/activity#star-a-repository-for-the-authenticated-user


* Star a repository for the authenticated user
* Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/rest/overview/resources-in-the-rest-api#http-verbs)."
* @param repo - The name of the repository. The name is not case sensitive.
* @param owner - The account owner of the repository. The name is not case sensitive. 
*/
export const starRepoForAuthenticatedUser: ApiHeroEndpoint<{ repo: string; owner: string }, void> =
  {
    id: "activity/star-repo-for-authenticated-user",
    clientId: "github",
  };

/** 
* @see https://docs.github.com/rest/reference/activity#unstar-a-repository-for-the-authenticated-user


* Unstar a repository for the authenticated user
* @param repo - The name of the repository. The name is not case sensitive.
* @param owner - The account owner of the repository. The name is not case sensitive. 
*/
export const unstarRepoForAuthenticatedUser: ApiHeroEndpoint<
  { repo: string; owner: string },
  void
> = {
  id: "activity/unstar-repo-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/activity#list-public-events-for-a-network-of-repositories


* List public events for a network of repositories
* @param repo - The name of the repository. The name is not case sensitive.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listPublicEventsForRepoNetwork: ApiHeroEndpoint<
  { repo: string; owner: string; perPage?: number; page?: number },
  Array<Event>
> = {
  id: "activity/list-public-events-for-repo-network",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/activity#list-public-events-for-a-user


* List public events for a user
* @param username - The handle for the GitHub user account.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listPublicEventsForUser: ApiHeroEndpoint<
  { username: string; perPage?: number; page?: number },
  Array<Event>
> = {
  id: "activity/list-public-events-for-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/activity#list-repositories-watched-by-a-user


* List repositories watched by a user
* Lists repositories a user is watching.
* @param username - The handle for the GitHub user account.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listReposWatchedByUser: ApiHeroEndpoint<
  { username: string; perPage?: number; page?: number },
  Array<MinimalRepository>,
  { Link: Link }
> = {
  id: "activity/list-repos-watched-by-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/activity#list-stargazers


* List stargazers
* Lists the people that have starred the repository.
 * 
 * You can also find out _when_ stars were created by passing the following custom [media type](https://docs.github.com/rest/overview/media-types/) via the `Accept` header:
* @param repo - The name of the repository. The name is not case sensitive.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listStargazersForRepo: ApiHeroEndpoint<
  { repo: string; owner: string; perPage?: number; page?: number },
  Array<SimpleUser> | Array<Stargazer>,
  { Link: Link }
> = {
  id: "activity/list-stargazers-for-repo",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/activity#list-watchers


* List watchers
* Lists the people watching the specified repository.
* @param repo - The name of the repository. The name is not case sensitive.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listWatchersForRepo: ApiHeroEndpoint<
  { repo: string; owner: string; perPage?: number; page?: number },
  Array<SimpleUser>,
  { Link: Link }
> = {
  id: "activity/list-watchers-for-repo",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/activity#list-events-received-by-the-authenticated-user


* List events received by the authenticated user
* These are events that you've received by watching repos and following users. If you are authenticated as the given user, you will see private events. Otherwise, you'll only see public events.
* @param username - The handle for the GitHub user account.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listReceivedEventsForUser: ApiHeroEndpoint<
  { username: string; perPage?: number; page?: number },
  Array<Event>
> = {
  id: "activity/list-received-events-for-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/activity#get-a-thread


* Get a thread
* @param threadId - The unique identifier of the pull request thread. 
*/
export const getThread: ApiHeroEndpoint<{ threadId: number }, Thread> = {
  id: "activity/get-thread",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/activity#mark-a-thread-as-read


* Mark a thread as read
* @param threadId - The unique identifier of the pull request thread. 
*/
export const markThreadAsRead: ApiHeroEndpoint<{ threadId: number }, any> = {
  id: "activity/mark-thread-as-read",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/activity#get-a-repository-subscription


* Get a repository subscription
* @param repo - The name of the repository. The name is not case sensitive.
* @param owner - The account owner of the repository. The name is not case sensitive. 
*/
export const getRepoSubscription: ApiHeroEndpoint<
  { repo: string; owner: string },
  RepositorySubscription
> = {
  id: "activity/get-repo-subscription",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/activity#set-a-repository-subscription


* Set a repository subscription
* If you would like to watch a repository, set `subscribed` to `true`. If you would like to ignore notifications made within a repository, set `ignored` to `true`. If you would like to stop watching a repository, [delete the repository's subscription](https://docs.github.com/rest/reference/activity#delete-a-repository-subscription) completely.
* @param repo - The name of the repository. The name is not case sensitive.
* @param owner - The account owner of the repository. The name is not case sensitive. 
*/
export const setRepoSubscription: ApiHeroEndpoint<
  {
    repo: string;
    owner: string;
    repo?: {
      /**
       * Determines if all notifications should be blocked from this repository.
       */
      ignored?: boolean;

      /**
       * Determines if notifications should be received from this repository.
       */
      subscribed?: boolean;
    };
  },
  RepositorySubscription
> = {
  id: "activity/set-repo-subscription",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/activity#delete-a-repository-subscription


* Delete a repository subscription
* This endpoint should only be used to stop watching a repository. To control whether or not you wish to receive notifications from a repository, [set the repository's subscription manually](https://docs.github.com/rest/reference/activity#set-a-repository-subscription).
* @param repo - The name of the repository. The name is not case sensitive.
* @param owner - The account owner of the repository. The name is not case sensitive. 
*/
export const deleteRepoSubscription: ApiHeroEndpoint<{ repo: string; owner: string }, void> = {
  id: "activity/delete-repo-subscription",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/activity#list-repository-notifications-for-the-authenticated-user


* List repository notifications for the authenticated user
* List all notifications for the current user.
* @param repo - The name of the repository. The name is not case sensitive.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [participating=false] - If `true`, only shows notifications in which the user is directly participating or mentioned.
* @param [since] - Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
* @param [before] - Only show notifications updated before the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
* @param [all=false] - If `true`, show notifications marked as read.
* @param [page=1] - Page number of the results to fetch. 
*/
export const listRepoNotificationsForAuthenticatedUser: ApiHeroEndpoint<
  {
    repo: string;
    owner: string;
    perPage?: number;
    participating?: boolean;
    since?: string;
    before?: string;
    all?: boolean;
    page?: number;
  },
  Array<Thread>,
  { Link: Link }
> = {
  id: "activity/list-repo-notifications-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/activity#mark-repository-notifications-as-read


* Mark repository notifications as read
* Marks all notifications in a repository as "read" removes them from the [default view on GitHub](https://github.com/notifications). If the number of notifications is too large to complete in one request, you will receive a `202 Accepted` status and GitHub will run an asynchronous process to mark notifications as "read." To check whether any "unread" notifications remain, you can use the [List repository notifications for the authenticated user](https://docs.github.com/rest/reference/activity#list-repository-notifications-for-the-authenticated-user) endpoint and pass the query parameter `all=false`.
* @param repo - The name of the repository. The name is not case sensitive.
* @param owner - The account owner of the repository. The name is not case sensitive. 
*/
export const markRepoNotificationsAsRead: ApiHeroEndpoint<
  {
    repo: string;
    owner: string;
    repo?: {
      /**
       * Describes the last point that notifications were checked. Anything updated since this time will not be marked as read. If you omit this parameter, all notifications are marked as read. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`. Default: The current timestamp.
       */
      last_read_at?: string;
    };
  },
  {
    url?: string;
    message?: string;
  }
> = {
  id: "activity/mark-repo-notifications-as-read",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/activity#list-organization-events-for-the-authenticated-user


* List organization events for the authenticated user
* This is the user's organization dashboard. You must be authenticated as the user to view this.
* @param org - The organization name. The name is not case sensitive.
* @param username - The handle for the GitHub user account.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listOrgEventsForAuthenticatedUser: ApiHeroEndpoint<
  { org: string; username: string; perPage?: number; page?: number },
  Array<Event>
> = {
  id: "activity/list-org-events-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/activity#list-public-events-received-by-a-user


* List public events received by a user
* @param username - The handle for the GitHub user account.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listReceivedPublicEventsForUser: ApiHeroEndpoint<
  { username: string; perPage?: number; page?: number },
  Array<Event>
> = {
  id: "activity/list-received-public-events-for-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/activity#get-a-thread-subscription-for-the-authenticated-user


* Get a thread subscription for the authenticated user
* This checks to see if the current user is subscribed to a thread. You can also [get a repository subscription](https://docs.github.com/rest/reference/activity#get-a-repository-subscription).
 * 
 * Note that subscriptions are only generated if a user is participating in a conversation--for example, they've replied to the thread, were **@mentioned**, or manually subscribe to a thread.
* @param threadId - The unique identifier of the pull request thread. 
*/
export const getThreadSubscriptionForAuthenticatedUser: ApiHeroEndpoint<
  { threadId: number },
  ThreadSubscription
> = {
  id: "activity/get-thread-subscription-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/activity#set-a-thread-subscription


* Set a thread subscription
* If you are watching a repository, you receive notifications for all threads by default. Use this endpoint to ignore future notifications for threads until you comment on the thread or get an **@mention**.
 * 
 * You can also use this endpoint to subscribe to threads that you are currently not receiving notifications for or to subscribed to threads that you have previously ignored.
 * 
 * Unsubscribing from a conversation in a repository that you are not watching is functionally equivalent to the [Delete a thread subscription](https://docs.github.com/rest/reference/activity#delete-a-thread-subscription) endpoint.
* @param threadId - The unique identifier of the pull request thread. 
*/
export const setThreadSubscription: ApiHeroEndpoint<
  {
    threadId: number;
    threadId?: {
      /**
       * Whether to block all notifications from a thread.
       */
      ignored?: boolean;
    };
  },
  ThreadSubscription
> = {
  id: "activity/set-thread-subscription",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/activity#delete-a-thread-subscription


* Delete a thread subscription
* Mutes all future notifications for a conversation until you comment on the thread or get an **@mention**. If you are watching the repository of the thread, you will still receive notifications. To ignore future notifications for a repository you are watching, use the [Set a thread subscription](https://docs.github.com/rest/reference/activity#set-a-thread-subscription) endpoint and set `ignore` to `true`.
* @param threadId - The unique identifier of the pull request thread. 
*/
export const deleteThreadSubscription: ApiHeroEndpoint<{ threadId: number }, void> = {
  id: "activity/delete-thread-subscription",
  clientId: "github",
};
