import {
  Email,
  GpgKey,
  Hovercard,
  Key,
  KeySimple,
  Link,
  PrivateUser,
  PublicUser,
  SimpleUser,
  ApiHeroEndpoint,
} from "./@types";

/** 
* @see https://docs.github.com/rest/reference/users#get-the-authenticated-user


* Get the authenticated user
* If the authenticated user is authenticated through basic authentication or OAuth with the `user` scope, then the response lists public and private profile information.
 * 
 * If the authenticated user is authenticated through OAuth without the `user` scope, then the response lists only public profile information. 
*/
export const getAuthenticated: ApiHeroEndpoint<void, PrivateUser | PublicUser> = {
  id: "users/get-authenticated",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/users/#update-the-authenticated-user


* Update the authenticated user
* **Note:** If your email is set to private and you send an `email` parameter as part of this request to update your profile, your privacy settings are still enforced: the email address will not be displayed on your public profile or via the API. 
*/
export const updateAuthenticated: ApiHeroEndpoint<
  {
    body?: {
      /**
       * The new short biography of the user.
       */
      bio?: string;

      /**
       * The new blog URL of the user.
       *
       * @example
       * "blog.example.com"
       */
      blog?: string;

      /**
       * The new name of the user.
       *
       * @example
       * "Omar Jahandar"
       */
      name?: string;

      /**
       * The publicly visible email address of the user.
       *
       * @example
       * "omar@example.com"
       */
      email?: string;

      /**
       * The new company of the user.
       *
       * @example
       * "Acme corporation"
       */
      company?: string;

      /**
       * The new hiring availability of the user.
       */
      hireable?: boolean;

      /**
       * The new location of the user.
       *
       * @example
       * "Berlin, Germany"
       */
      location?: string;

      /**
       * The new Twitter username of the user.
       *
       * @example
       * "therealomarj"
       */
      twitter_username?: string | null;
    };
  },
  PrivateUser
> = {
  id: "users/update-authenticated",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/users#list-users


* List users
* Lists all users, in the order that they signed up on GitHub. This list includes personal user accounts and organization accounts.
 * 
 * Note: Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://docs.github.com/rest/overview/resources-in-the-rest-api#link-header) to get the URL for the next page of users.
* @param [perPage=30] - The number of results per page (max 100).
* @param [since] - A user ID. Only return users with an ID greater than this ID. 
*/
export const list: ApiHeroEndpoint<
  { perPage?: number; since?: number },
  Array<SimpleUser>,
  { Link: string }
> = {
  id: "users/list",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/users#list-public-ssh-keys-for-the-authenticated-user


* List public SSH keys for the authenticated user
* Lists the public SSH keys for the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:public_key` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listPublicSshKeysForAuthenticatedUser: ApiHeroEndpoint<
  { perPage?: number; page?: number },
  Array<Key>,
  { Link: Link }
> = {
  id: "users/list-public-ssh-keys-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/users#create-a-public-ssh-key-for-the-authenticated-user


* Create a public SSH key for the authenticated user
* Adds a public SSH key to the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth, or OAuth with at least `write:public_key` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). 
*/
export const createPublicSshKeyForAuthenticatedUser: ApiHeroEndpoint<
  {
    key: {
      /**
       * The public SSH key to add to your GitHub account.
       */
      key: string;

      /**
       * A descriptive name for the new key.
       *
       * @example
       * "Personal MacBook Air"
       */
      title?: string;
    };
  },
  Key
> = {
  id: "users/create-public-ssh-key-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/users#list-users-blocked-by-the-authenticated-user


* List users blocked by the authenticated user
* List the users you've blocked on your personal account. 
*/
export const listBlockedByAuthenticatedUser: ApiHeroEndpoint<void, Array<SimpleUser>> = {
  id: "users/list-blocked-by-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/users#list-email-addresses-for-the-authenticated-user


* List email addresses for the authenticated user
* Lists all of your email addresses, and specifies which one is visible to the public. This endpoint is accessible with the `user:email` scope.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listEmailsForAuthenticatedUser: ApiHeroEndpoint<
  { perPage?: number; page?: number },
  Array<Email>,
  { Link: Link }
> = {
  id: "users/list-emails-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/users#add-an-email-address-for-the-authenticated-user


* Add an email address for the authenticated user
* This endpoint is accessible with the `user` scope. 
*/
export const addEmailForAuthenticatedUser: ApiHeroEndpoint<
  {
    email?:
      | {
          /**
           * Adds one or more email addresses to your GitHub account. Must contain at least one email address. **Note:** Alternatively, you can pass a single email address or an `array` of emails addresses directly, but we recommend that you pass an object using the `emails` key.
           *
           * @example
           * ["username@example.com"]
           */
          emails: Array<string>;
        }
      | Array<string>
      | string;
  },
  Array<Email>
> = {
  id: "users/add-email-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/users#delete-an-email-address-for-the-authenticated-user


* Delete an email address for the authenticated user
* This endpoint is accessible with the `user` scope. 
*/
export const deleteEmailForAuthenticatedUser: ApiHeroEndpoint<
  {
    email?:
      | {
          /**
           * Email addresses associated with the GitHub user account.
           *
           * @example
           * ["username@example.com"]
           */
          emails: Array<string>;
        }
      | Array<string>
      | string;
  },
  void
> = {
  id: "users/delete-email-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/users#list-gpg-keys-for-the-authenticated-user


* List GPG keys for the authenticated user
* Lists the current user's GPG keys. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:gpg_key` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listGpgKeysForAuthenticatedUser: ApiHeroEndpoint<
  { perPage?: number; page?: number },
  Array<GpgKey>,
  { Link: Link }
> = {
  id: "users/list-gpg-keys-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/users#create-a-gpg-key-for-the-authenticated-user


* Create a GPG key for the authenticated user
* Adds a GPG key to the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth, or OAuth with at least `write:gpg_key` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/). 
*/
export const createGpgKeyForAuthenticatedUser: ApiHeroEndpoint<
  {
    gpgKey: {
      /**
       * A descriptive name for the new key.
       */
      name?: string;

      /**
       * A GPG key in ASCII-armored format.
       */
      armored_public_key: string;
    };
  },
  GpgKey
> = {
  id: "users/create-gpg-key-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/users#list-followers-of-the-authenticated-user


* List followers of the authenticated user
* Lists the people following the authenticated user.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listFollowersForAuthenticatedUser: ApiHeroEndpoint<
  { perPage?: number; page?: number },
  Array<SimpleUser>,
  { Link: Link }
> = {
  id: "users/list-followers-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/users#list-the-people-the-authenticated-user-follows


* List the people the authenticated user follows
* Lists the people who the authenticated user follows.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listFollowedByAuthenticatedUser: ApiHeroEndpoint<
  { perPage?: number; page?: number },
  Array<SimpleUser>,
  { Link: Link }
> = {
  id: "users/list-followed-by-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/users#get-a-user


* Get a user
* Provides publicly available information about someone with a GitHub account.
 * 
 * GitHub Apps with the `Plan` user permission can use this endpoint to retrieve information about a user's GitHub plan. The GitHub App must be authenticated as a user. See "[Identifying and authorizing users for GitHub Apps](https://docs.github.com/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/)" for details about authentication. For an example response, see 'Response with GitHub plan information' below"
 * 
 * The `email` key in the following response is the publicly visible email address from your GitHub [profile page](https://github.com/settings/profile). When setting up your profile, you can select a primary email address to be “public” which provides an email entry for this endpoint. If you do not set a public email address for `email`, then it will have a value of `null`. You only see publicly visible email addresses when authenticated with GitHub. For more information, see [Authentication](https://docs.github.com/rest/overview/resources-in-the-rest-api#authentication).
 * 
 * The Emails API enables you to list all of your email addresses, and toggle a primary email to be visible publicly. For more information, see "[Emails API](https://docs.github.com/rest/reference/users#emails)".
* @param username - The handle for the GitHub user account. 
*/
export const getByUsername: ApiHeroEndpoint<{ username: string }, PrivateUser | PublicUser> = {
  id: "users/get-by-username",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/users#get-a-public-ssh-key-for-the-authenticated-user


* Get a public SSH key for the authenticated user
* View extended details for a single public SSH key. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:public_key` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
* @param keyId - The unique identifier of the key. 
*/
export const getPublicSshKeyForAuthenticatedUser: ApiHeroEndpoint<{ keyId: number }, Key> = {
  id: "users/get-public-ssh-key-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/users#delete-a-public-ssh-key-for-the-authenticated-user


* Delete a public SSH key for the authenticated user
* Removes a public SSH key from the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth or via OAuth with at least `admin:public_key` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
* @param keyId - The unique identifier of the key. 
*/
export const deletePublicSshKeyForAuthenticatedUser: ApiHeroEndpoint<{ keyId: number }, void> = {
  id: "users/delete-public-ssh-key-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/users#list-public-email-addresses-for-the-authenticated-user


* List public email addresses for the authenticated user
* Lists your publicly visible email address, which you can set with the [Set primary email visibility for the authenticated user](https://docs.github.com/rest/reference/users#set-primary-email-visibility-for-the-authenticated-user) endpoint. This endpoint is accessible with the `user:email` scope.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listPublicEmailsForAuthenticatedUser: ApiHeroEndpoint<
  { perPage?: number; page?: number },
  Array<Email>,
  { Link: Link }
> = {
  id: "users/list-public-emails-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/users#set-primary-email-visibility-for-the-authenticated-user


* Set primary email visibility for the authenticated user
* Sets the visibility for your primary email addresses. 
*/
export const setPrimaryEmailVisibilityForAuthenticatedUser: ApiHeroEndpoint<
  {
    email: {
      /**
       * Denotes whether an email is publicly visible.
       */
      visibility: "public" | "private";
    };
  },
  Array<Email>
> = {
  id: "users/set-primary-email-visibility-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/users#list-public-keys-for-a-user


* List public keys for a user
* Lists the _verified_ public SSH keys for a user. This is accessible by anyone.
* @param username - The handle for the GitHub user account.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listPublicKeysForUser: ApiHeroEndpoint<
  { username: string; perPage?: number; page?: number },
  Array<KeySimple>,
  { Link: Link }
> = {
  id: "users/list-public-keys-for-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/users#check-if-a-user-is-blocked-by-the-authenticated-user


* Check if a user is blocked by the authenticated user
* @param username - The handle for the GitHub user account. 
*/
export const checkBlocked: ApiHeroEndpoint<{ username: string }, void> = {
  id: "users/check-blocked",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/users#block-a-user


* Block a user
* @param username - The handle for the GitHub user account. 
*/
export const block: ApiHeroEndpoint<{ username: string }, void> = {
  id: "users/block",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/users#unblock-a-user


* Unblock a user
* @param username - The handle for the GitHub user account. 
*/
export const unblock: ApiHeroEndpoint<{ username: string }, void> = {
  id: "users/unblock",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/users#check-if-a-person-is-followed-by-the-authenticated-user


* Check if a person is followed by the authenticated user
* @param username - The handle for the GitHub user account. 
*/
export const checkPersonIsFollowedByAuthenticated: ApiHeroEndpoint<{ username: string }, void> = {
  id: "users/check-person-is-followed-by-authenticated",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/users#follow-a-user


* Follow a user
* Note that you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/rest/overview/resources-in-the-rest-api#http-verbs)."
 * 
 * Following a user requires the user to be logged in and authenticated with basic auth or OAuth with the `user:follow` scope.
* @param username - The handle for the GitHub user account. 
*/
export const follow: ApiHeroEndpoint<{ username: string }, void> = {
  id: "users/follow",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/users#unfollow-a-user


* Unfollow a user
* Unfollowing a user requires the user to be logged in and authenticated with basic auth or OAuth with the `user:follow` scope.
* @param username - The handle for the GitHub user account. 
*/
export const unfollow: ApiHeroEndpoint<{ username: string }, void> = {
  id: "users/unfollow",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/users#list-gpg-keys-for-a-user


* List GPG keys for a user
* Lists the GPG keys for a user. This information is accessible by anyone.
* @param username - The handle for the GitHub user account.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listGpgKeysForUser: ApiHeroEndpoint<
  { username: string; perPage?: number; page?: number },
  Array<GpgKey>,
  { Link: Link }
> = {
  id: "users/list-gpg-keys-for-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/users#get-a-gpg-key-for-the-authenticated-user


* Get a GPG key for the authenticated user
* View extended details for a single GPG key. Requires that you are authenticated via Basic Auth or via OAuth with at least `read:gpg_key` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
* @param gpgKeyId - The unique identifier of the GPG key. 
*/
export const getGpgKeyForAuthenticatedUser: ApiHeroEndpoint<{ gpgKeyId: number }, GpgKey> = {
  id: "users/get-gpg-key-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/users#delete-a-gpg-key-for-the-authenticated-user


* Delete a GPG key for the authenticated user
* Removes a GPG key from the authenticated user's GitHub account. Requires that you are authenticated via Basic Auth or via OAuth with at least `admin:gpg_key` [scope](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/).
* @param gpgKeyId - The unique identifier of the GPG key. 
*/
export const deleteGpgKeyForAuthenticatedUser: ApiHeroEndpoint<{ gpgKeyId: number }, void> = {
  id: "users/delete-gpg-key-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/users#list-followers-of-a-user


* List followers of a user
* Lists the people following the specified user.
* @param username - The handle for the GitHub user account.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listFollowersForUser: ApiHeroEndpoint<
  { username: string; perPage?: number; page?: number },
  Array<SimpleUser>,
  { Link: Link }
> = {
  id: "users/list-followers-for-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/users#list-the-people-a-user-follows


* List the people a user follows
* Lists the people who the specified user follows.
* @param username - The handle for the GitHub user account.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listFollowingForUser: ApiHeroEndpoint<
  { username: string; perPage?: number; page?: number },
  Array<SimpleUser>,
  { Link: Link }
> = {
  id: "users/list-following-for-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/users#get-contextual-information-for-a-user


* Get contextual information for a user
* Provides hovercard information when authenticated through basic auth or OAuth with the `repo` scope. You can find out more about someone in relation to their pull requests, issues, repositories, and organizations.
 * 
 * The `subject_type` and `subject_id` parameters provide context for the person's hovercard, which returns more information than without the parameters. For example, if you wanted to find out more about `octocat` who owns the `Spoon-Knife` repository via cURL, it would look like this:
 * 
 * ```shell
 * curl -u username:token
 * https://api.github.com/users/octocat/hovercard?subject_type=repository&subject_id=1300192
 * ```
* @param username - The handle for the GitHub user account.
* @param [subjectType] - Identifies which additional information you'd like to receive about the person's hovercard. Can be `organization`, `repository`, `issue`, `pull_request`. **Required** when using `subject_id`.
* @param [subjectId] - Uses the ID for the `subject_type` you specified. **Required** when using `subject_type`. 
*/
export const getContextForUser: ApiHeroEndpoint<
  {
    username: string;
    subjectType?: "organization" | "repository" | "issue" | "pull_request";
    subjectId?: string;
  },
  Hovercard
> = {
  id: "users/get-context-for-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/users#check-if-a-user-follows-another-user


* Check if a user follows another user
* @param username - The handle for the GitHub user account.
* @param targetUser  
*/
export const checkFollowingForUser: ApiHeroEndpoint<
  { username: string; targetUser: string },
  void
> = {
  id: "users/check-following-for-user",
  clientId: "github",
};
