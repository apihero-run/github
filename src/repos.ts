import {
  Autolink,
  BranchProtection,
  BranchRestrictionPolicy,
  BranchShort,
  BranchWithProtection,
  CloneTraffic,
  CodeFrequencyStat,
  CodeownersErrors,
  Collaborator,
  CombinedCommitStatus,
  Commit,
  CommitActivity,
  CommitComment,
  CommitComparison,
  CommunityProfile,
  ContentDirectory,
  ContentFile,
  ContentSubmodule,
  ContentSymlink,
  ContentTraffic,
  Contributor,
  ContributorActivity,
  DeployKey,
  Deployment,
  DeploymentBranchPolicy,
  DeploymentReviewerType,
  DeploymentStatus,
  EmptyObject,
  Environment,
  FileCommit,
  FullRepository,
  Hook,
  HookDelivery,
  HookDeliveryItem,
  Integration,
  Language,
  MergedUpstream,
  MinimalRepository,
  Page,
  PageBuild,
  PageBuildStatus,
  PageDeployment,
  PagesHealthCheck,
  ParticipationStats,
  ProtectedBranch,
  ProtectedBranchAdminEnforced,
  ProtectedBranchPullRequestReview,
  PullRequestSimple,
  ReferrerTraffic,
  Release,
  ReleaseAsset,
  ReleaseNotesContent,
  Repository,
  RepositoryCollaboratorPermission,
  RepositoryInvitation,
  ShortBranch,
  SimpleUser,
  Status,
  StatusCheckPolicy,
  Tag,
  TagProtection,
  Team,
  Topic,
  ViewTraffic,
  WaitTimer,
  WebhookConfig,
  WebhookConfigContentType,
  WebhookConfigInsecureSsl,
  WebhookConfigSecret,
  WebhookConfigUrl,
  ApiHeroEndpoint,
} from "./@types";

/** 
* @see https://docs.github.com/rest/reference/repos#list-repositories-for-the-authenticated-user


* List repositories for the authenticated user
* Lists repositories that the authenticated user has explicit permission (`:read`, `:write`, or `:admin`) to access.
 * 
 * The authenticated user has explicit permission to access repositories they own, repositories where they are a collaborator, and repositories that they can access through an organization membership.
* @param [perPage=30] - The number of results per page (max 100).
* @param [since] - Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
* @param [page=1] - Page number of the results to fetch.
* @param [type] - Limit results to repositories of the specified type. Will cause a `422` error if used in the same request as **visibility** or **affiliation**.
* @param [direction] - The order to sort by. Default: `asc` when using `full_name`, otherwise `desc`.
* @param [sort] - The property to sort the results by.
* @param [visibility] - Limit results to repositories with the specified visibility.
* @param [affiliation='owner,collaborator,organization_member'] - Comma-separated list of values. Can include:  
\* `owner`: Repositories that are owned by the authenticated user.  
\* `collaborator`: Repositories that the user has been added to as a collaborator.  
\* `organization_member`: Repositories that the user has access to through being a member of an organization. This includes every repository on every team that the user is on.
* @param [before] - Only show notifications updated before the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`. 
*/
export const listForAuthenticatedUser: ApiHeroEndpoint<
  {
    perPage?: number;
    since?: string;
    page?: number;
    type?: "all" | "owner" | "public" | "private" | "member";
    direction?: "asc" | "desc";
    sort?: "created" | "updated" | "pushed" | "full_name";
    visibility?: "all" | "public" | "private";
    affiliation?: string;
    before?: string;
  },
  Array<Repository>
> = {
  id: "repos/list-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#create-a-repository-for-the-authenticated-user


* Create a repository for the authenticated user
* Creates a new repository for the authenticated user.
 * 
 * **OAuth scope requirements**
 * 
 * When using [OAuth](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), authorizations must include:
 * 
 * *   `public_repo` scope or `repo` scope to create a public repository. Note: For GitHub AE, use `repo` scope to create an internal repository.
 * *   `repo` scope to create a private repository. 
*/
export const createForAuthenticatedUser: ApiHeroEndpoint<
  {
    repo: {
      /**
       * The name of the repository.
       *
       * @example
       * "Team Environment"
       */
      name: string;

      /**
       * Whether the repository is private.
       */
      private?: boolean;

      /**
       * The id of the team that will be granted access to this repository. This is only valid when creating a repository in an organization.
       */
      team_id?: number;

      /**
       * Whether the wiki is enabled.
       *
       * @example
       * true
       */
      has_wiki?: boolean;

      /**
       * A URL with more information about the repository.
       */
      homepage?: string;

      /**
       * Whether the repository is initialized with a minimal README.
       */
      auto_init?: boolean;

      /**
       * Whether issues are enabled.
       *
       * @example
       * true
       */
      has_issues?: boolean;

      /**
       * A short description of the repository.
       */
      description?: string;

      /**
       * Whether this repository acts as a template that can be used to generate new repositories.
       *
       * @example
       * true
       */
      is_template?: boolean;

      /**
       * Whether projects are enabled.
       *
       * @example
       * true
       */
      has_projects?: boolean;

      /**
       * Whether downloads are enabled.
       *
       * @example
       * true
       */
      has_downloads?: boolean;

      /**
       * Whether to allow Auto-merge to be used on pull requests.
       *
       * @example
       * false
       */
      allow_auto_merge?: boolean;

      /**
       * The license keyword of the open source license for this repository.
       *
       * @example
       * "mit"
       */
      license_template?: string;

      /**
       * Whether to allow merge commits for pull requests.
       *
       * @example
       * true
       */
      allow_merge_commit?: boolean;

      /**
       * Whether to allow rebase merges for pull requests.
       *
       * @example
       * true
       */
      allow_rebase_merge?: boolean;

      /**
       * Whether to allow squash merges for pull requests.
       *
       * @example
       * true
       */
      allow_squash_merge?: boolean;

      /**
       * The desired language or platform to apply to the .gitignore.
       *
       * @example
       * "Haskell"
       */
      gitignore_template?: string;

      /**
       * Whether to delete head branches when pull requests are merged
       *
       * @example
       * false
       */
      delete_branch_on_merge?: boolean;
    };
  },
  Repository,
  { Location: string }
> = {
  id: "repos/create-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#list-public-repositories


* List public repositories
* Lists all public repositories in the order that they were created.
 * 
 * Note:
 * - For GitHub Enterprise Server, this endpoint will only list repositories available to all users on the enterprise.
 * - Pagination is powered exclusively by the `since` parameter. Use the [Link header](https://docs.github.com/rest/overview/resources-in-the-rest-api#link-header) to get the URL for the next page of repositories.
* @param [since] - A repository ID. Only return repositories with an ID greater than this ID. 
*/
export const listPublic: ApiHeroEndpoint<
  { since?: number },
  Array<MinimalRepository>,
  { Link: string }
> = {
  id: "repos/list-public",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#list-organization-repositories


* List organization repositories
* Lists repositories for the specified organization.
* @param org - The organization name. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch.
* @param [direction] - The order to sort by. Default: `asc` when using `full_name`, otherwise `desc`.
* @param [sort] - The property to sort the results by.
* @param [type] - Specifies the types of repositories you want returned. If your organization is associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+, `type` can also be `internal`. However, the `internal` value is not yet supported when a GitHub App calls this API with an installation access token. 
*/
export const listForOrg: ApiHeroEndpoint<
  {
    org: string;
    perPage?: number;
    page?: number;
    direction?: "asc" | "desc";
    sort?: "created" | "updated" | "pushed" | "full_name";
    type?: "all" | "public" | "private" | "forks" | "sources" | "member" | "internal";
  },
  Array<MinimalRepository>,
  { Link: string }
> = {
  id: "repos/list-for-org",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#create-an-organization-repository


* Create an organization repository
* Creates a new repository in the specified organization. The authenticated user must be a member of the organization.
 * 
 * **OAuth scope requirements**
 * 
 * When using [OAuth](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), authorizations must include:
 * 
 * *   `public_repo` scope or `repo` scope to create a public repository. Note: For GitHub AE, use `repo` scope to create an internal repository.
 * *   `repo` scope to create a private repository
* @param org - The organization name. The name is not case sensitive. 
*/
export const createInOrg: ApiHeroEndpoint<
  {
    org: string;
    repo: {
      /**
       * The name of the repository.
       */
      name: string;

      /**
       * Whether the repository is private.
       */
      private?: boolean;

      /**
       * The id of the team that will be granted access to this repository. This is only valid when creating a repository in an organization.
       */
      team_id?: number;

      /**
       * Either `true` to enable the wiki for this repository or `false` to disable it.
       */
      has_wiki?: boolean;

      /**
       * A URL with more information about the repository.
       */
      homepage?: string;

      /**
       * Pass `true` to create an initial commit with empty README.
       */
      auto_init?: boolean;

      /**
       * Either `true` to enable issues for this repository or `false` to disable them.
       */
      has_issues?: boolean;

      /**
       * Can be `public` or `private`. If your organization is associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+, `visibility` can also be `internal`. Note: For GitHub Enterprise Server and GitHub AE, this endpoint will only list repositories available to all users on the enterprise. For more information, see "[Creating an internal repository](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/about-repository-visibility#about-internal-repositories)" in the GitHub Help documentation.
       */
      visibility?: "public" | "private" | "internal";

      /**
       * A short description of the repository.
       */
      description?: string;

      /**
       * Either `true` to make this repo available as a template repository or `false` to prevent it.
       */
      is_template?: boolean;

      /**
       * Either `true` to enable projects for this repository or `false` to disable them. **Note:** If you're creating a repository in an organization that has disabled repository projects, the default is `false`, and if you pass `true`, the API returns an error.
       */
      has_projects?: boolean;

      /**
       * Either `true` to allow auto-merge on pull requests, or `false` to disallow auto-merge.
       */
      allow_auto_merge?: boolean;

      /**
       * Choose an [open source license template](https://choosealicense.com/) that best suits your needs, and then use the [license keyword](https://docs.github.com/articles/licensing-a-repository/#searching-github-by-license-type) as the `license_template` string. For example, "mit" or "mpl-2.0".
       */
      license_template?: string;

      /**
       * Either `true` to allow merging pull requests with a merge commit, or `false` to prevent merging pull requests with merge commits.
       */
      allow_merge_commit?: boolean;

      /**
       * Either `true` to allow rebase-merging pull requests, or `false` to prevent rebase-merging.
       */
      allow_rebase_merge?: boolean;

      /**
       * Either `true` to allow squash-merging pull requests, or `false` to prevent squash-merging.
       */
      allow_squash_merge?: boolean;

      /**
       * Desired language or platform [.gitignore template](https://github.com/github/gitignore) to apply. Use the name of the template without the extension. For example, "Haskell".
       */
      gitignore_template?: string;

      /**
       * Either `true` to allow automatically deleting head branches when pull requests are merged, or `false` to prevent automatic deletion.
       */
      delete_branch_on_merge?: boolean;

      /**
       * Either `true` to allow squash-merge commits to use pull request title, or `false` to use commit message.
       */
      use_squash_pr_title_as_default?: boolean;
    };
  },
  Repository,
  { Location: string }
> = {
  id: "repos/create-in-org",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#get-a-repository


* Get a repository
* The `parent` and `source` objects are present when the repository is a fork. `parent` is the repository this repository was forked from, `source` is the ultimate source for the network.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const getRepo: ApiHeroEndpoint<{ owner: string; repo: string }, FullRepository> = {
  id: "repos/get",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#delete-a-repository


* Delete a repository
* Deleting a repository requires admin access. If OAuth is used, the `delete_repo` scope is required.
 * 
 * If an organization owner has configured the organization to prevent members from deleting organization-owned
 * repositories, you will get a `403 Forbidden` response.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const deleteRepo: ApiHeroEndpoint<{ owner: string; repo: string }, void> = {
  id: "repos/delete",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos/#update-a-repository


* Update a repository
* **Note**: To edit a repository's topics, use the [Replace all repository topics](https://docs.github.com/rest/reference/repos#replace-all-repository-topics) endpoint.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const update: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
    payload?: {
      /**
       * The name of the repository.
       */
      name?: string;

      /**
       * Either `true` to make the repository private or `false` to make it public. Default: `false`.
       **Note**: You will get a `422` error if the organization restricts [changing repository visibility](https://docs.github.com/articles/repository-permission-levels-for-an-organization#changing-the-visibility-of-repositories) to organization owners and a non-owner tries to change the value of private.
       */
      private?: boolean;

      /**
       * `true` to archive this repository. **Note**: You cannot unarchive repositories through the API.
       */
      archived?: boolean;

      /**
       * Either `true` to enable the wiki for this repository or `false` to disable it.
       */
      has_wiki?: boolean;

      /**
       * A URL with more information about the repository.
       */
      homepage?: string;

      /**
       * Either `true` to enable issues for this repository or `false` to disable them.
       */
      has_issues?: boolean;

      /**
       * Can be `public` or `private`. If your organization is associated with an enterprise account using GitHub Enterprise Cloud or GitHub Enterprise Server 2.20+, `visibility` can also be `internal`."
       */
      visibility?: "public" | "private" | "internal";

      /**
       * A short description of the repository.
       */
      description?: string;

      /**
       * Either `true` to make this repo available as a template repository or `false` to prevent it.
       */
      is_template?: boolean;

      /**
       * Either `true` to enable projects for this repository or `false` to disable them. **Note:** If you're creating a repository in an organization that has disabled repository projects, the default is `false`, and if you pass `true`, the API returns an error.
       */
      has_projects?: boolean;

      /**
       * Either `true` to allow private forks, or `false` to prevent private forks.
       */
      allow_forking?: boolean;

      /**
       * Updates the default branch for this repository.
       */
      default_branch?: string;

      /**
       * Either `true` to allow auto-merge on pull requests, or `false` to disallow auto-merge.
       */
      allow_auto_merge?: boolean;

      /**
       * Either `true` to allow merging pull requests with a merge commit, or `false` to prevent merging pull requests with merge commits.
       */
      allow_merge_commit?: boolean;

      /**
       * Either `true` to allow rebase-merging pull requests, or `false` to prevent rebase-merging.
       */
      allow_rebase_merge?: boolean;

      /**
       * Either `true` to allow squash-merging pull requests, or `false` to prevent squash-merging.
       */
      allow_squash_merge?: boolean;

      /**
       * Either `true` to always allow a pull request head branch that is behind its base branch to be updated even if it is not required to be up to date before merging, or false otherwise.
       */
      allow_update_branch?: boolean;

      /**
       * Specify which security and analysis features to enable or disable. For example, to enable GitHub Advanced Security, use this data in the body of the PATCH request: `{"security_and_analysis": {"advanced_security": {"status": "enabled"}}}`. If you have admin permissions for a private repository covered by an Advanced Security license, you can check which security and analysis features are currently enabled by using a `GET /repos/{owner}/{repo}` request.
       */
      security_and_analysis?: {
        /**
         * Use the `status` property to enable or disable secret scanning for this repository. For more information, see "[About secret scanning](/code-security/secret-security/about-secret-scanning)."
         */
        secret_scanning?: {
          /**
           * Can be `enabled` or `disabled`.
           */
          status?: string;
        };

        /**
         * Use the `status` property to enable or disable GitHub Advanced Security for this repository. For more information, see "[About GitHub Advanced Security](/github/getting-started-with-github/learning-about-github/about-github-advanced-security)."
         */
        advanced_security?: {
          /**
           * Can be `enabled` or `disabled`.
           */
          status?: string;
        };

        /**
         * Use the `status` property to enable or disable secret scanning push protection for this repository. For more information, see "[Protecting pushes with secret scanning](/code-security/secret-scanning/protecting-pushes-with-secret-scanning)."
         */
        secret_scanning_push_protection?: {
          /**
           * Can be `enabled` or `disabled`.
           */
          status?: string;
        };
      } | null;

      /**
       * Either `true` to allow automatically deleting head branches when pull requests are merged, or `false` to prevent automatic deletion.
       */
      delete_branch_on_merge?: boolean;

      /**
       * Either `true` to allow squash-merge commits to use pull request title, or `false` to use commit message.
       */
      use_squash_pr_title_as_default?: boolean;
    };
  },
  FullRepository
> = {
  id: "repos/update",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#list-repositories-for-a-user


* List repositories for a user
* Lists public repositories for the specified user. Note: For GitHub AE, this endpoint will list internal repositories for the specified user.
* @param username - The handle for the GitHub user account.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch.
* @param [type] - Limit results to repositories of the specified type.
* @param [direction] - The order to sort by. Default: `asc` when using `full_name`, otherwise `desc`.
* @param [sort] - The property to sort the results by. 
*/
export const listForUser: ApiHeroEndpoint<
  {
    username: string;
    perPage?: number;
    page?: number;
    type?: "all" | "owner" | "member";
    direction?: "asc" | "desc";
    sort?: "created" | "updated" | "pushed" | "full_name";
  },
  Array<MinimalRepository>,
  { Link: string }
> = {
  id: "repos/list-for-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#enable-git-lfs-for-a-repository


* Enable Git LFS for a repository
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const enableLfsForRepo: ApiHeroEndpoint<{ owner: string; repo: string }, {}> = {
  id: "repos/enable-lfs-for-repo",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#disable-git-lfs-for-a-repository


* Disable Git LFS for a repository
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const disableLfsForRepo: ApiHeroEndpoint<{ owner: string; repo: string }, void> = {
  id: "repos/disable-lfs-for-repo",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#list-deploy-keys


* List deploy keys
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listDeployKeys: ApiHeroEndpoint<
  { owner: string; repo: string; perPage?: number; page?: number },
  Array<DeployKey>,
  { Link: string }
> = {
  id: "repos/list-deploy-keys",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#create-a-deploy-key


* Create a deploy key
* You can create a read-only deploy key.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const createDeployKey: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
    key: {
      /**
       * The contents of the key.
       */
      key: string;

      /**
       * A name for the key.
       */
      title?: string;

      /** 
* If `true`, the key will only be able to read repository contents. Otherwise, the key will be able to read and write.  
  
Deploy keys with write access can perform the same actions as an organization member with admin access, or a collaborator on a personal repository. For more information, see "[Repository permission levels for an organization](https://docs.github.com/articles/repository-permission-levels-for-an-organization/)" and "[Permission levels for a user account repository](https://docs.github.com/articles/permission-levels-for-a-user-account-repository/)."
*/
      read_only?: boolean;
    };
  },
  DeployKey,
  { Location: string }
> = {
  id: "repos/create-deploy-key",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#list-repository-tags


* List repository tags
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listTags: ApiHeroEndpoint<
  { owner: string; repo: string; perPage?: number; page?: number },
  Array<Tag>,
  { Link: string }
> = {
  id: "repos/list-tags",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#list-forks


* List forks
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch.
* @param [sort] - The sort order. Can be either `newest`, `oldest`, or `stargazers`. 
*/
export const listForks: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
    perPage?: number;
    page?: number;
    sort?: "newest" | "oldest" | "stargazers" | "watchers";
  },
  Array<MinimalRepository>,
  { Link: string }
> = {
  id: "repos/list-forks",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#create-a-fork


* Create a fork
* Create a fork for the authenticated user.
 * 
 * **Note**: Forking a Repository happens asynchronously. You may have to wait a short period of time before you can access the git objects. If this takes longer than 5 minutes, be sure to contact [GitHub Support](https://support.github.com/contact?tags=dotcom-rest-api).
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const createFork: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
    fork?: {
      /**
       * When forking from an existing repository, a new name for the fork.
       */
      name?: string;

      /**
       * Optional parameter to specify the organization name if forking into an organization.
       */
      organization?: string;
    } | null;
  },
  FullRepository
> = {
  id: "repos/create-fork",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#list-repository-webhooks


* List repository webhooks
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listWebhooks: ApiHeroEndpoint<
  { owner: string; repo: string; perPage?: number; page?: number },
  Array<Hook>,
  { Link: string }
> = {
  id: "repos/list-webhooks",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#create-a-repository-webhook


* Create a repository webhook
* Repositories can have multiple webhooks installed. Each webhook should have a unique `config`. Multiple webhooks can
 * share the same `config` as long as those webhooks do not have any `events` that overlap.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const createWebhook: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
    hook?: {
      /**
       * Use `web` to create a webhook. Default: `web`. This parameter only accepts the value `web`.
       */
      name?: string;

      /**
       * Determines if notifications are sent when the webhook is triggered. Set to `true` to send notifications.
       */
      active?: boolean;

      /**
       * Key/value pairs to provide settings for this webhook. [These are defined below](https://docs.github.com/rest/reference/repos#create-hook-config-params).
       */
      config?: {
        url?: WebhookConfigUrl;

        /**
         *
         * @example
         * "\"abc\""
         */
        token?: string;

        /**
         *
         * @example
         * "\"sha256\""
         */
        digest?: string;
        secret?: WebhookConfigSecret;
        content_type?: WebhookConfigContentType;
        insecure_ssl?: WebhookConfigInsecureSsl;
      };

      /**
       * Determines what [events](https://docs.github.com/webhooks/event-payloads) the hook is triggered for.
       */
      events?: Array<string>;
    } | null;
  },
  Hook,
  { Location: string }
> = {
  id: "repos/create-webhook",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#get-a-github-pages-site


* Get a GitHub Pages site
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const getPages: ApiHeroEndpoint<{ owner: string; repo: string }, Page> = {
  id: "repos/get-pages",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#create-a-github-pages-site


* Create a GitHub Pages site
* Configures a GitHub Pages site. For more information, see "[About GitHub Pages](/github/working-with-github-pages/about-github-pages)."
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const createPagesSite: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
    page: {
      /**
       * The source branch and directory used to publish your Pages site.
       */
      source?: {
        /**
         * The repository directory that includes the source files for the Pages site. Allowed paths are `/` or `/docs`. Default: `/`
         */
        path?: "/" | "/docs";

        /**
         * The repository branch used to publish your site's source files.
         */
        branch: string;
      };

      /**
       * The process in which the Page will be built. Possible values are `"legacy"` and `"workflow"`.
       */
      build_type?: "legacy" | "workflow";
    };
  },
  Page
> = {
  id: "repos/create-pages-site",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#update-information-about-a-github-pages-site


* Update information about a GitHub Pages site
* Updates information for a GitHub Pages site. For more information, see "[About GitHub Pages](/github/working-with-github-pages/about-github-pages).
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const updateInformationAboutPagesSite: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
    payload: {
      /**
       * Specify a custom domain for the repository. Sending a `null` value will remove the custom domain. For more about custom domains, see "[Using a custom domain with GitHub Pages](https://docs.github.com/articles/using-a-custom-domain-with-github-pages/)."
       */
      cname?: string | null;

      /**
       * Configures access controls for the GitHub Pages site. If public is set to `true`, the site is accessible to anyone on the internet. If set to `false`, the site will only be accessible to users who have at least `read` access to the repository that published the site. This includes anyone in your Enterprise if the repository is set to `internal` visibility. This feature is only available to repositories in an organization on an Enterprise plan.
       */
      public?: boolean;
      source?:
        | "gh-pages"
        | "master"
        | "master /docs"
        | {
            /**
             * The repository directory that includes the source files for the Pages site. Allowed paths are `/` or `/docs`.
             */
            path: "/" | "/docs";

            /**
             * The repository branch used to publish your site's source files.
             */
            branch: string;
          };

      /**
       * The process by which the GitHub Pages site will be built. `workflow` means that the site is built by a custom GitHub Actions workflow. `legacy` means that the site is built by GitHub when changes are pushed to a specific branch.
       */
      build_type?: "legacy" | "workflow";

      /**
       * Specify whether HTTPS should be enforced for the repository.
       */
      https_enforced?: boolean;
    };
  },
  void
> = {
  id: "repos/update-information-about-pages-site",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#delete-a-github-pages-site


* Delete a GitHub Pages site
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const deletePagesSite: ApiHeroEndpoint<{ owner: string; repo: string }, void> = {
  id: "repos/delete-pages-site",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#list-repository-teams


* List repository teams
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listTeams: ApiHeroEndpoint<
  { owner: string; repo: string; perPage?: number; page?: number },
  Array<Team>,
  { Link: string }
> = {
  id: "repos/list-teams",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#merge-a-branch


* Merge a branch
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const merge: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
    merge: {
      /**
       * The name of the base branch that the head will be merged into.
       */
      base: string;

      /**
       * The head to merge. This can be a branch name or a commit SHA1.
       */
      head: string;

      /**
       * Commit message to use for the merge commit. If omitted, a default message will be used.
       */
      commit_message?: string;
    };
  },
  Commit
> = {
  id: "repos/merge",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#get-a-repository-readme


* Get a repository README
* Gets the preferred README for a repository.
 * 
 * READMEs support [custom media types](https://docs.github.com/rest/reference/repos#custom-media-types) for retrieving the raw content or rendered HTML.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param [ref] - The name of the commit/branch/tag. Default: the repository’s default branch (usually `master`) 
*/
export const getReadme: ApiHeroEndpoint<
  { owner: string; repo: string; ref?: string },
  ContentFile
> = {
  id: "repos/get-readme",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#get-all-repository-topics


* Get all repository topics
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const getAllTopics: ApiHeroEndpoint<
  { owner: string; repo: string; perPage?: number; page?: number },
  Topic
> = {
  id: "repos/get-all-topics",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#replace-all-repository-topics


* Replace all repository topics
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const replaceAllTopics: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
    payload: {
      /**
       * An array of topics to add to the repository. Pass one or more topics to _replace_ the set of existing topics. Send an empty array (`[]`) to clear all topics from the repository. **Note:** Topic `names` cannot contain uppercase letters.
       */
      names: Array<string>;
    };
  },
  Topic
> = {
  id: "repos/replace-all-topics",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#list-repository-invitations-for-the-authenticated-user


* List repository invitations for the authenticated user
* When authenticating as a user, this endpoint will list all currently open repository invitations for that user.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listInvitationsForAuthenticatedUser: ApiHeroEndpoint<
  { perPage?: number; page?: number },
  Array<RepositoryInvitation>,
  { Link: string }
> = {
  id: "repos/list-invitations-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#list-commits


* List commits
* **Signature verification object**
 * 
 * The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:
 * 
 * | Name | Type | Description |
 * | ---- | ---- | ----------- |
 * | `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |
 * | `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. |
 * | `signature` | `string` | The signature that was extracted from the commit. |
 * | `payload` | `string` | The value that was signed. |
 * 
 * These are the possible values for `reason` in the `verification` object:
 * 
 * | Value | Description |
 * | ----- | ----------- |
 * | `expired_key` | The key that made the signature is expired. |
 * | `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |
 * | `gpgverify_error` | There was an error communicating with the signature verification service. |
 * | `gpgverify_unavailable` | The signature verification service is currently unavailable. |
 * | `unsigned` | The object does not include a signature. |
 * | `unknown_signature_type` | A non-PGP signature was found in the commit. |
 * | `no_user` | No user was associated with the `committer` email address in the commit. |
 * | `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
 * | `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |
 * | `unknown_key` | The key that made the signature has not been registered with any user's account. |
 * | `malformed_signature` | There was an error parsing the signature. |
 * | `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |
 * | `valid` | None of the above errors applied, so the signature is considered to be verified. |
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [since] - Only show notifications updated after the given time. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
* @param [page=1] - Page number of the results to fetch.
* @param [sha] - SHA or branch to start listing commits from. Default: the repository’s default branch (usually `master`).
* @param [until] - Only commits before this date will be returned. This is a timestamp in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DDTHH:MM:SSZ`.
* @param [author] - GitHub login or email address by which to filter by commit author.
* @param [path] - Only commits containing this file path will be returned. 
*/
export const listCommits: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
    perPage?: number;
    since?: string;
    page?: number;
    sha?: string;
    until?: string;
    author?: string;
    path?: string;
  },
  Array<Commit>,
  { Link: string }
> = {
  id: "repos/list-commits",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#list-branches


* List branches
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch.
* @param [_protected] - Setting to `true` returns only protected branches. When set to `false`, only unprotected branches are returned. Omitting this parameter returns all branches. 
*/
export const listBranches: ApiHeroEndpoint<
  { owner: string; repo: string; perPage?: number; page?: number; _protected?: boolean },
  Array<ShortBranch>,
  { Link: string }
> = {
  id: "repos/list-branches",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#list-commit-comments-for-a-repository


* List commit comments for a repository
* Commit Comments use [these custom media types](https://docs.github.com/rest/reference/repos#custom-media-types). You can read more about the use of media types in the API [here](https://docs.github.com/rest/overview/media-types/).
 * 
 * Comments are ordered by ascending ID.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listCommitCommentsForRepo: ApiHeroEndpoint<
  { owner: string; repo: string; perPage?: number; page?: number },
  Array<CommitComment>,
  { Link: string }
> = {
  id: "repos/list-commit-comments-for-repo",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#list-releases


* List releases
* This returns a list of releases, which does not include regular Git tags that have not been associated with a release. To get a list of Git tags, use the [Repository Tags API](https://docs.github.com/rest/reference/repos#list-repository-tags).
 * 
 * Information about published releases are available to everyone. Only users with push access will receive listings for draft releases.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listReleases: ApiHeroEndpoint<
  { owner: string; repo: string; perPage?: number; page?: number },
  Array<Release>,
  { Link: string }
> = {
  id: "repos/list-releases",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#create-a-release


* Create a release
* Users with push access to the repository can create a release.
 * 
 * This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const createRelease: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
    release: {
      /**
       * Text describing the contents of the tag.
       */
      body?: string;

      /**
       * The name of the release.
       */
      name?: string;

      /**
       * `true` to create a draft (unpublished) release, `false` to create a published one.
       */
      draft?: boolean;

      /**
       * The name of the tag.
       */
      tag_name: string;

      /**
       * `true` to identify the release as a prerelease. `false` to identify the release as a full release.
       */
      prerelease?: boolean;

      /**
       * Specifies the commitish value that determines where the Git tag is created from. Can be any branch or commit SHA. Unused if the Git tag already exists. Default: the repository's default branch (usually `master`).
       */
      target_commitish?: string;

      /**
       * Whether to automatically generate the name and body for this release. If `name` is specified, the specified name will be used; otherwise, a name will be automatically generated. If `body` is specified, the body will be pre-pended to the automatically generated notes.
       */
      generate_release_notes?: boolean;

      /**
       * If specified, a discussion of the specified category is created and linked to the release. The value must be a category that already exists in the repository. For more information, see "[Managing categories for discussions in your repository](https://docs.github.com/discussions/managing-discussions-for-your-community/managing-categories-for-discussions-in-your-repository)."
       */
      discussion_category_name?: string;
    };
  },
  Release,
  { Location: string }
> = {
  id: "repos/create-release",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#transfer-a-repository


* Transfer a repository
* A transfer request will need to be accepted by the new owner when transferring a personal repository to another user. The response will contain the original `owner`, and the transfer will continue asynchronously. For more details on the requirements to transfer personal and organization-owned repositories, see [about repository transfers](https://docs.github.com/articles/about-repository-transfers/).
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const transfer: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
    transfer: {
      /**
       * ID of the team or teams to add to the repository. Teams can only be added to organization-owned repositories.
       */
      team_ids?: Array<number>;

      /**
       * The username or organization name the repository will be transferred to.
       */
      new_owner: string;
    };
  },
  MinimalRepository
> = {
  id: "repos/transfer",
  clientId: "github",
};

/** 
* @see https://docs.github.com/v3/repos#list-autolinks


* List all autolinks of a repository
* This returns a list of autolinks configured for the given repository.
 * 
 * Information about autolinks are only available to repository administrators.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param [page=1] - Page number of the results to fetch. 
*/
export const listAutolinks: ApiHeroEndpoint<
  { owner: string; repo: string; page?: number },
  Array<Autolink>
> = {
  id: "repos/list-autolinks",
  clientId: "github",
};

/** 
* @see https://docs.github.com/v3/repos#create-an-autolink


* Create an autolink reference for a repository
* Users with admin access to the repository can create an autolink.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const createAutolink: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
    autolink: {
      /**
       * The prefix appended by alphanumeric characters will generate a link any time it is found in an issue, pull request, or commit.
       */
      key_prefix: string;

      /**
       * The URL must contain `<num>` for the reference number. `<num>` matches alphanumeric characters `A-Z` (case insensitive), `0-9`, and `-`.
       */
      url_template: string;
    };
  },
  Autolink,
  { Location: string }
> = {
  id: "repos/create-autolink",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#list-repository-languages


* List repository languages
* Lists languages for the specified repository. The value shown for each language is the number of bytes of code written in that language.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const listLanguages: ApiHeroEndpoint<{ owner: string; repo: string }, Language> = {
  id: "repos/list-languages",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#create-a-repository-dispatch-event


* Create a repository dispatch event
* You can use this endpoint to trigger a webhook event called `repository_dispatch` when you want activity that happens outside of GitHub to trigger a GitHub Actions workflow or GitHub App webhook. You must configure your GitHub Actions workflow or GitHub App to run when the `repository_dispatch` event occurs. For an example `repository_dispatch` webhook payload, see "[RepositoryDispatchEvent](https://docs.github.com/webhooks/event-payloads/#repository_dispatch)."
 * 
 * The `client_payload` parameter is available for any extra information that your workflow might need. This parameter is a JSON payload that will be passed on when the webhook event is dispatched. For example, the `client_payload` can include a message that a user would like to send using a GitHub Actions workflow. Or the `client_payload` can be used as a test to debug your workflow.
 * 
 * This endpoint requires write access to the repository by providing either:
 * 
 * - Personal access tokens with `repo` scope. For more information, see "[Creating a personal access token for the command line](https://docs.github.com/articles/creating-a-personal-access-token-for-the-command-line)" in the GitHub Help documentation.
 * - GitHub Apps with both `metadata:read` and `contents:read&write` permissions.
 * 
 * This input example shows how you can use the `client_payload` as a test to debug your workflow.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const createDispatchEvent: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
    dispatch: {
      /**
       * A custom webhook event name. Must be 100 characters or fewer.
       */
      event_type: string;

      /**
       * JSON payload with extra information about the webhook event that your action or workflow may use.
       */
      client_payload?: {};
    };
  },
  void
> = {
  id: "repos/create-dispatch-event",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#list-deployments


* List deployments
* Simple filtering of deployments is available via query parameters:
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch.
* @param [environment] - The name of the environment that was deployed to (e.g., `staging` or `production`).
* @param [sha='none'] - The SHA recorded at creation time.
* @param [ref='none'] - The name of the ref. This can be a branch, tag, or SHA.
* @param [task='none'] - The name of the task for the deployment (e.g., `deploy` or `deploy:migrations`). 
*/
export const listDeployments: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
    perPage?: number;
    page?: number;
    environment?: string | null;
    sha?: string;
    ref?: string;
    task?: string;
  },
  Array<Deployment>,
  { Link: string }
> = {
  id: "repos/list-deployments",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#create-a-deployment


* Create a deployment
* Deployments offer a few configurable parameters with certain defaults.
 * 
 * The `ref` parameter can be any named branch, tag, or SHA. At GitHub we often deploy branches and verify them
 * before we merge a pull request.
 * 
 * The `environment` parameter allows deployments to be issued to different runtime environments. Teams often have
 * multiple environments for verifying their applications, such as `production`, `staging`, and `qa`. This parameter
 * makes it easier to track which environments have requested deployments. The default environment is `production`.
 * 
 * The `auto_merge` parameter is used to ensure that the requested ref is not behind the repository's default branch. If
 * the ref _is_ behind the default branch for the repository, we will attempt to merge it for you. If the merge succeeds,
 * the API will return a successful merge commit. If merge conflicts prevent the merge from succeeding, the API will
 * return a failure response.
 * 
 * By default, [commit statuses](https://docs.github.com/rest/commits/statuses) for every submitted context must be in a `success`
 * state. The `required_contexts` parameter allows you to specify a subset of contexts that must be `success`, or to
 * specify contexts that have not yet been submitted. You are not required to use commit statuses to deploy. If you do
 * not require any contexts or create any commit statuses, the deployment will always succeed.
 * 
 * The `payload` parameter is available for any extra information that a deployment system might need. It is a JSON text
 * field that will be passed on when a deployment event is dispatched.
 * 
 * The `task` parameter is used by the deployment system to allow different execution paths. In the web world this might
 * be `deploy:migrations` to run schema changes on the system. In the compiled world this could be a flag to compile an
 * application with debugging enabled.
 * 
 * Users with `repo` or `repo_deployment` scopes can create a deployment for a given ref.
 * 
 * #### Merged branch response
 * You will see this response when GitHub automatically merges the base branch into the topic branch instead of creating
 * a deployment. This auto-merge happens when:
 * *   Auto-merge option is enabled in the repository
 * *   Topic branch does not include the latest changes on the base branch, which is `master` in the response example
 * *   There are no merge conflicts
 * 
 * If there are no new commits in the base branch, a new request to create a deployment should give a successful
 * response.
 * 
 * #### Merge conflict response
 * This error happens when the `auto_merge` option is enabled and when the default branch (in this case `master`), can't
 * be merged into the branch that's being deployed (in this case `topic-branch`), due to merge conflicts.
 * 
 * #### Failed commit status checks
 * This error happens when the `required_contexts` parameter indicates that one or more contexts need to have a `success`
 * status for the commit to be deployed, but one or more of the required contexts do not have a state of `success`.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const createDeployment: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
    deployment: {
      /**
       * The ref to deploy. This can be a branch, tag, or SHA.
       */
      ref: string;

      /**
       * Specifies a task to execute (e.g., `deploy` or `deploy:migrations`).
       */
      task?: string;
      payload?: string;

      /**
       * Attempts to automatically merge the default branch into the requested ref, if it's behind the default branch.
       */
      auto_merge?: boolean;

      /**
       * Short description of the deployment.
       */
      description?: string | null;

      /**
       * Name for the target deployment environment (e.g., `production`, `staging`, `qa`).
       */
      environment?: string;

      /**
       * The [status](https://docs.github.com/rest/commits/statuses) contexts to verify against commit status checks. If you omit this parameter, GitHub verifies all unique contexts before creating a deployment. To bypass checking entirely, pass an empty array. Defaults to all unique contexts.
       */
      required_contexts?: Array<string>;

      /**
       * Specifies if the given environment is specific to the deployment and will no longer exist at some point in the future. Default: `false`
       */
      transient_environment?: boolean;

      /**
       * Specifies if the given environment is one that end-users directly interact with. Default: `true` when `environment` is `production` and `false` otherwise.
       */
      production_environment?: boolean;
    };
  },
  | Deployment
  | {
      message?: string;
    }
> = {
  id: "repos/create-deployment",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#list-repository-invitations


* List repository invitations
* When authenticating as a user with admin rights to a repository, this endpoint will list all currently open repository invitations.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listInvitations: ApiHeroEndpoint<
  { owner: string; repo: string; perPage?: number; page?: number },
  Array<RepositoryInvitation>,
  { Link: string }
> = {
  id: "repos/list-invitations",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#list-repository-contributors


* List repository contributors
* Lists contributors to the specified repository and sorts them by the number of commits per contributor in descending order. This endpoint may return information that is a few hours old because the GitHub REST API v3 caches contributor data to improve performance.
 * 
 * GitHub identifies contributors by author email address. This endpoint groups contribution counts by GitHub user, which includes all associated email addresses. To improve performance, only the first 500 author email addresses in the repository link to GitHub users. The rest will appear as anonymous contributors without associated GitHub user information.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch.
* @param [anon] - Set to `1` or `true` to include anonymous contributors in results. 
*/
export const listContributors: ApiHeroEndpoint<
  { owner: string; repo: string; perPage?: number; page?: number; anon?: string },
  Array<Contributor>,
  { Link: string }
> = {
  id: "repos/list-contributors",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#get-all-environments


* Get all environments
* Get all environments for a repository.
 * 
 * Anyone with read access to the repository can use this endpoint. If the repository is private, you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const getAllEnvironments: ApiHeroEndpoint<
  { owner: string; repo: string; perPage?: number; page?: number },
  {
    /**
     * The number of environments in this repository
     *
     * @example
     * 5
     */
    total_count?: number;
    environments?: Array<Environment>;
  }
> = {
  id: "repos/get-all-environments",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#list-github-pages-builds


* List GitHub Pages builds
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listPagesBuilds: ApiHeroEndpoint<
  { owner: string; repo: string; perPage?: number; page?: number },
  Array<PageBuild>,
  { Link: string }
> = {
  id: "repos/list-pages-builds",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#request-a-github-pages-build


* Request a GitHub Pages build
* You can request that your site be built from the latest revision on the default branch. This has the same effect as pushing a commit to your default branch, but does not require an additional commit. Manually triggering page builds can be helpful when diagnosing build warnings and failures.
 * 
 * Build requests are limited to one concurrent build per repository and one concurrent build per requester. If you request a build while another is still in progress, the second request will be queued until the first completes.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const requestPagesBuild: ApiHeroEndpoint<{ owner: string; repo: string }, PageBuildStatus> =
  {
    id: "repos/request-pages-build",
    clientId: "github",
  };

/** 
* @see https://docs.github.com/rest/reference/repos#get-a-dns-health-check-for-github-pages


* Get a DNS health check for GitHub Pages
* Gets a health check of the DNS settings for the `CNAME` record configured for a repository's GitHub Pages.
 * 
 * The first request to this endpoint returns a `202 Accepted` status and starts an asynchronous background task to get the results for the domain. After the background task completes, subsequent requests to this endpoint return a `200 OK` status with the health check results in the response.
 * 
 * Users must have admin or owner permissions. GitHub Apps must have the `pages:write` and `administration:write` permission to use this endpoint.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const getPagesHealthCheck: ApiHeroEndpoint<
  { owner: string; repo: string },
  PagesHealthCheck | EmptyObject
> = {
  id: "repos/get-pages-health-check",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#get-a-repository-directory-readme


* Get a repository README for a directory
* Gets the README from a repository directory.
 * 
 * READMEs support [custom media types](https://docs.github.com/rest/reference/repos#custom-media-types) for retrieving the raw content or rendered HTML.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param dir - The alternate path to look for a README file
* @param repo - The name of the repository. The name is not case sensitive.
* @param [ref] - The name of the commit/branch/tag. Default: the repository’s default branch (usually `master`) 
*/
export const getReadmeInDirectory: ApiHeroEndpoint<
  { owner: string; dir: string; repo: string; ref?: string },
  ContentFile
> = {
  id: "repos/get-readme-in-directory",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#list-repository-collaborators


* List repository collaborators
* For organization-owned repositories, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners.
 * Organization members with write, maintain, or admin privileges on the organization-owned repository can use this endpoint.
 * 
 * Team members will include the members of child teams.
 * 
 * You must authenticate using an access token with the `read:org` and `repo` scopes with push access to use this
 * endpoint. GitHub Apps must have the `members` organization permission and `metadata` repository permission to use this
 * endpoint.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch.
* @param [affiliation] - Filter collaborators returned by their affiliation. `outside` means all outside collaborators of an organization-owned repository. `direct` means all collaborators with permissions to an organization-owned repository, regardless of organization membership status. `all` means all collaborators the authenticated user can see. 
*/
export const listCollaborators: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
    perPage?: number;
    page?: number;
    affiliation?: "outside" | "direct" | "all";
  },
  Array<Collaborator>,
  { Link: string }
> = {
  id: "repos/list-collaborators",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#get-a-commit


* Get a commit
* Returns the contents of a single commit reference. You must have `read` access for the repository to use this endpoint.
 * 
 * **Note:** If there are more than 300 files in the commit diff, the response will include pagination link headers for the remaining files, up to a limit of 3000 files. Each page contains the static commit information, and the only changes are to the file listing.
 * 
 * You can pass the appropriate [media type](https://docs.github.com/rest/overview/media-types/#commits-commit-comparison-and-pull-requests) to  fetch `diff` and `patch` formats. Diffs with binary data will have no `patch` property.
 * 
 * To return only the SHA-1 hash of the commit reference, you can provide the `sha` custom [media type](https://docs.github.com/rest/overview/media-types/#commits-commit-comparison-and-pull-requests) in the `Accept` header. You can use this endpoint to check if a remote reference's SHA-1 hash is the same as your local reference's SHA-1 hash by providing the local SHA-1 reference as the ETag.
 * 
 * **Signature verification object**
 * 
 * The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:
 * 
 * | Name | Type | Description |
 * | ---- | ---- | ----------- |
 * | `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |
 * | `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. |
 * | `signature` | `string` | The signature that was extracted from the commit. |
 * | `payload` | `string` | The value that was signed. |
 * 
 * These are the possible values for `reason` in the `verification` object:
 * 
 * | Value | Description |
 * | ----- | ----------- |
 * | `expired_key` | The key that made the signature is expired. |
 * | `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |
 * | `gpgverify_error` | There was an error communicating with the signature verification service. |
 * | `gpgverify_unavailable` | The signature verification service is currently unavailable. |
 * | `unsigned` | The object does not include a signature. |
 * | `unknown_signature_type` | A non-PGP signature was found in the commit. |
 * | `no_user` | No user was associated with the `committer` email address in the commit. |
 * | `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
 * | `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |
 * | `unknown_key` | The key that made the signature has not been registered with any user's account. |
 * | `malformed_signature` | There was an error parsing the signature. |
 * | `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |
 * | `valid` | None of the above errors applied, so the signature is considered to be verified. |
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param ref - ref parameter
* @param repo - The name of the repository. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const getCommit: ApiHeroEndpoint<
  { owner: string; ref: string; repo: string; perPage?: number; page?: number },
  Commit
> = {
  id: "repos/get-commit",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#get-a-deploy-key


* Get a deploy key
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param keyId - The unique identifier of the key.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const getDeployKey: ApiHeroEndpoint<
  { owner: string; keyId: number; repo: string },
  DeployKey
> = {
  id: "repos/get-deploy-key",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#delete-a-deploy-key


* Delete a deploy key
* Deploy keys are immutable. If you need to update a key, remove the key and create a new one instead.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param keyId - The unique identifier of the key.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const deleteDeployKey: ApiHeroEndpoint<
  { owner: string; keyId: number; repo: string },
  void
> = {
  id: "repos/delete-deploy-key",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#download-a-repository-archive


* Download a repository archive (tar)
* Gets a redirect URL to download a tar archive for a repository. If you omit `:ref`, the repository’s default branch (usually
 * `master`) will be used. Please make sure your HTTP framework is configured to follow redirects or you will need to use
 * the `Location` header to make a second `GET` request.
 * **Note**: For private repositories, these links are temporary and expire after five minutes.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param ref 
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const downloadTarballArchive: ApiHeroEndpoint<
  { owner: string; ref: string; repo: string },
  void
> = {
  id: "repos/download-tarball-archive",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#get-page-views


* Get page views
* Get the total number of views and breakdown per day or week for the last 14 days. Timestamps are aligned to UTC midnight of the beginning of the day or week. Week begins on Monday.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param [per] - The time frame to display results for. 
*/
export const getViews: ApiHeroEndpoint<
  { owner: string; repo: string; per?: "" | "day" | "week" },
  ViewTraffic
> = {
  id: "repos/get-views",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#download-a-repository-archive


* Download a repository archive (zip)
* Gets a redirect URL to download a zip archive for a repository. If you omit `:ref`, the repository’s default branch (usually
 * `master`) will be used. Please make sure your HTTP framework is configured to follow redirects or you will need to use
 * the `Location` header to make a second `GET` request.
 * **Note**: For private repositories, these links are temporary and expire after five minutes.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param ref 
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const downloadZipballArchive: ApiHeroEndpoint<
  { owner: string; ref: string; repo: string },
  void
> = {
  id: "repos/download-zipball-archive",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#sync-a-fork-branch-with-the-upstream-repository


* Sync a fork branch with the upstream repository
* Sync a branch of a forked repository to keep it up-to-date with the upstream repository.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const mergeUpstream: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
    mergeUpstream: {
      /**
       * The name of the branch which should be updated to match upstream.
       */
      branch: string;
    };
  },
  MergedUpstream
> = {
  id: "repos/merge-upstream",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#create-a-commit-status


* Create a commit status
* Users with push access in a repository can create commit statuses for a given SHA.
 * 
 * Note: there is a limit of 1000 statuses per `sha` and `context` within a repository. Attempts to create more than 1000 statuses will result in a validation error.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param sha 
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const createCommitStatus: ApiHeroEndpoint<
  {
    owner: string;
    sha: string;
    repo: string;
    status: {
      /**
       * The state of the status.
       */
      state: "error" | "failure" | "pending" | "success";

      /**
       * A string label to differentiate this status from the status of other systems. This field is case-insensitive.
       */
      context?: string;

      /** 
* The target URL to associate with this status. This URL will be linked from the GitHub UI to allow users to easily see the source of the status.  
For example, if your continuous integration system is posting build status, you would want to provide the deep link for the build output for this specific SHA:  
`http://ci.example.com/user/repo/build/sha`
*/
      target_url?: string | null;

      /**
       * A short description of the status.
       */
      description?: string | null;
    };
  },
  Status,
  { Location: string }
> = {
  id: "repos/create-commit-status",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#get-repository-clones


* Get repository clones
* Get the total number of clones and breakdown per day or week for the last 14 days. Timestamps are aligned to UTC midnight of the beginning of the day or week. Week begins on Monday.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param [per] - The time frame to display results for. 
*/
export const getClones: ApiHeroEndpoint<
  { owner: string; repo: string; per?: "" | "day" | "week" },
  CloneTraffic
> = {
  id: "repos/get-clones",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#get-repository-content


* Get repository content
* Gets the contents of a file or directory in a repository. Specify the file path or directory in `:path`. If you omit
 * `:path`, you will receive the contents of the repository's root directory. See the description below regarding what the API response includes for directories.
 * 
 * Files and symlinks support [a custom media type](https://docs.github.com/rest/reference/repos#custom-media-types) for
 * retrieving the raw content or rendered HTML (when supported). All content types support [a custom media
 * type](https://docs.github.com/rest/reference/repos#custom-media-types) to ensure the content is returned in a consistent
 * object format.
 * 
 * **Note**:
 * *   To get a repository's contents recursively, you can [recursively get the tree](https://docs.github.com/rest/reference/git#trees).
 * *   This API has an upper limit of 1,000 files for a directory. If you need to retrieve more files, use the [Git Trees
 * API](https://docs.github.com/rest/reference/git#get-a-tree).
 * 
 * #### Size limits
 * If the requested file's size is:
 * * 1 MB or smaller: All features of this endpoint are supported.
 * * Between 1-100 MB: Only the `raw` or `object` [custom media types](https://docs.github.com/rest/repos/contents#custom-media-types-for-repository-contents) are supported. Both will work as normal, except that when using the `object` media type, the `content` field will be an empty string and the `encoding` field will be `"none"`. To get the contents of these larger files, use the `raw` media type.
 * * Greater than 100 MB: This endpoint is not supported.
 * 
 * #### If the content is a directory
 * The response will be an array of objects, one object for each item in the directory.
 * When listing the contents of a directory, submodules have their "type" specified as "file". Logically, the value
 * _should_ be "submodule". This behavior exists in API v3 [for backwards compatibility purposes](https://git.io/v1YCW).
 * In the next major version of the API, the type will be returned as "submodule".
 * 
 * #### If the content is a symlink
 * If the requested `:path` points to a symlink, and the symlink's target is a normal file in the repository, then the
 * API responds with the content of the file (in the format shown in the example. Otherwise, the API responds with an object
 * describing the symlink itself.
 * 
 * #### If the content is a submodule
 * The `submodule_git_url` identifies the location of the submodule repository, and the `sha` identifies a specific
 * commit within the submodule repository. Git uses the given URL when cloning the submodule repository, and checks out
 * the submodule at that specific commit.
 * 
 * If the submodule repository is not hosted on github.com, the Git URLs (`git_url` and `_links["git"]`) and the
 * github.com URLs (`html_url` and `_links["html"]`) will have null values.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param path - path parameter
* @param repo - The name of the repository. The name is not case sensitive.
* @param [ref] - The name of the commit/branch/tag. Default: the repository’s default branch (usually `master`) 
*/
export const getContent: ApiHeroEndpoint<
  { owner: string; path: string; repo: string; ref?: string },
  ContentDirectory | ContentFile | ContentSymlink | ContentSubmodule
> = {
  id: "repos/get-content",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#create-or-update-file-contents


* Create or update file contents
* Creates a new file or replaces an existing file in a repository.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param path - path parameter
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const createOrUpdateFileContents: ApiHeroEndpoint<
  {
    owner: string;
    path: string;
    repo: string;
    content: {
      /**
       * **Required if you are updating a file**. The blob SHA of the file being replaced.
       */
      sha?: string;

      /**
       * The author of the file. Default: The `committer` or the authenticated user if you omit `committer`.
       */
      author?: {
        /**
         *
         * @example
         * "\"2013-01-15T17:13:22+05:00\""
         */
        date?: string;

        /**
         * The name of the author or committer of the commit. You'll receive a `422` status code if `name` is omitted.
         */
        name: string;

        /**
         * The email of the author or committer of the commit. You'll receive a `422` status code if `email` is omitted.
         */
        email: string;
      };

      /**
       * The branch name. Default: the repository’s default branch (usually `master`)
       */
      branch?: string;

      /**
       * The new file content, using Base64 encoding.
       */
      content: string;

      /**
       * The commit message.
       */
      message: string;

      /**
       * The person that committed the file. Default: the authenticated user.
       */
      committer?: {
        /**
         *
         * @example
         * "\"2013-01-05T13:13:22+05:00\""
         */
        date?: string;

        /**
         * The name of the author or committer of the commit. You'll receive a `422` status code if `name` is omitted.
         */
        name: string;

        /**
         * The email of the author or committer of the commit. You'll receive a `422` status code if `email` is omitted.
         */
        email: string;
      };
    };
  },
  FileCommit
> = {
  id: "repos/create-or-update-file-contents",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#delete-a-file


* Delete a file
* Deletes a file in a repository.
 * 
 * You can provide an additional `committer` parameter, which is an object containing information about the committer. Or, you can provide an `author` parameter, which is an object containing information about the author.
 * 
 * The `author` section is optional and is filled in with the `committer` information if omitted. If the `committer` information is omitted, the authenticated user's information is used.
 * 
 * You must provide values for both `name` and `email`, whether you choose to use `author` or `committer`. Otherwise, you'll receive a `422` status code.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param path - path parameter
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const deleteFile: ApiHeroEndpoint<
  {
    owner: string;
    path: string;
    repo: string;
    content: {
      /**
       * The blob SHA of the file being replaced.
       */
      sha: string;

      /**
       * object containing information about the author.
       */
      author?: {
        /**
         * The name of the author (or committer) of the commit
         */
        name?: string;

        /**
         * The email of the author (or committer) of the commit
         */
        email?: string;
      };

      /**
       * The branch name. Default: the repository’s default branch (usually `master`)
       */
      branch?: string;

      /**
       * The commit message.
       */
      message: string;

      /**
       * object containing information about the committer.
       */
      committer?: {
        /**
         * The name of the author (or committer) of the commit
         */
        name?: string;

        /**
         * The email of the author (or committer) of the commit
         */
        email?: string;
      };
    };
  },
  FileCommit
> = {
  id: "repos/delete-file",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#get-a-repository-webhook


* Get a repository webhook
* Returns a webhook configured in a repository. To get only the webhook `config` properties, see "[Get a webhook configuration for a repository](/rest/reference/repos#get-a-webhook-configuration-for-a-repository)."
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param hookId - The unique identifier of the hook. 
*/
export const getWebhook: ApiHeroEndpoint<{ owner: string; repo: string; hookId: number }, Hook> = {
  id: "repos/get-webhook",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#delete-a-repository-webhook


* Delete a repository webhook
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param hookId - The unique identifier of the hook. 
*/
export const deleteWebhook: ApiHeroEndpoint<{ owner: string; repo: string; hookId: number }, void> =
  {
    id: "repos/delete-webhook",
    clientId: "github",
  };

/** 
* @see https://docs.github.com/rest/reference/repos#update-a-repository-webhook


* Update a repository webhook
* Updates a webhook configured in a repository. If you previously had a `secret` set, you must provide the same `secret` or set a new `secret` or the secret will be removed. If you are only updating individual webhook `config` properties, use "[Update a webhook configuration for a repository](/rest/reference/repos#update-a-webhook-configuration-for-a-repository)."
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param hookId - The unique identifier of the hook. 
*/
export const updateWebhook: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
    hookId: number;
    hook: {
      /**
       * Determines if notifications are sent when the webhook is triggered. Set to `true` to send notifications.
       */
      active?: boolean;

      /**
       * Key/value pairs to provide settings for this webhook. [These are defined below](https://docs.github.com/rest/reference/repos#create-hook-config-params).
       */
      config?: {
        url: WebhookConfigUrl;

        /**
         *
         * @example
         * "\"The Serious Room\""
         */
        room?: string;
        secret?: WebhookConfigSecret;

        /**
         *
         * @example
         * "\"bar@example.com\""
         */
        address?: string;
        content_type?: WebhookConfigContentType;
        insecure_ssl?: WebhookConfigInsecureSsl;
      };

      /**
       * Determines what [events](https://docs.github.com/webhooks/event-payloads) the hook is triggered for. This replaces the entire array of events.
       */
      events?: Array<string>;

      /**
       * Determines a list of events to be added to the list of events that the Hook triggers for.
       */
      add_events?: Array<string>;

      /**
       * Determines a list of events to be removed from the list of events that the Hook triggers for.
       */
      remove_events?: Array<string>;
    };
  },
  Hook
> = {
  id: "repos/update-webhook",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#get-the-latest-release


* Get the latest release
* View the latest published full release for the repository.
 * 
 * The latest release is the most recent non-prerelease, non-draft release, sorted by the `created_at` attribute. The `created_at` attribute is the date of the commit used for the release, and not the date when the release was drafted or published.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const getLatestRelease: ApiHeroEndpoint<{ owner: string; repo: string }, Release> = {
  id: "repos/get-latest-release",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#list-tag-protection-state-of-a-repository


* List tag protection states for a repository
* This returns the tag protection states of a repository.
 * 
 * This information is only available to repository administrators.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const listTagProtection: ApiHeroEndpoint<
  { owner: string; repo: string },
  Array<TagProtection>
> = {
  id: "repos/list-tag-protection",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#create-tag-protection-state-for-a-repository


* Create a tag protection state for a repository
* This creates a tag protection state for a repository.
 * This endpoint is only available to repository administrators.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const createTagProtection: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
    protection: {
      /**
       * An optional glob pattern to match against when enforcing tag protection.
       */
      pattern: string;
    };
  },
  TagProtection
> = {
  id: "repos/create-tag-protection",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#create-a-github-pages-deployment


* Create a GitHub Pages deployment
* Create a GitHub Pages deployment for a repository.
 * 
 * Users must have write permissions. GitHub Apps must have the `pages:write` permission to use this endpoint.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const createPagesDeployment: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
    deployment: {
      /**
       * The OIDC token issued by GitHub Actions certifying the origin of the deployment.
       */
      oidc_token: string;

      /**
       * The target environment for this GitHub Pages deployment.
       */
      environment?: string;

      /**
       * The URL of an artifact that contains the .zip or .tar of static assets to deploy. The artifact belongs to the repository.
       */
      artifact_url: string;

      /**
       * A unique string that represents the version of the build for this deployment.
       */
      pages_build_version: string;
    };
  },
  PageDeployment
> = {
  id: "repos/create-pages-deployment",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#get-the-hourly-commit-count-for-each-day


* Get the hourly commit count for each day
* Each array contains the day number, hour number, and number of commits:
 * 
 * *   `0-6`: Sunday - Saturday
 * *   `0-23`: Hour of day
 * *   Number of commits
 * 
 * For example, `[2, 14, 25]` indicates that there were 25 total commits, during the 2:00pm hour on Tuesdays. All times are based on the time zone of individual commits.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const getPunchCardStats: ApiHeroEndpoint<
  { owner: string; repo: string },
  Array<CodeFrequencyStat>
> = {
  id: "repos/get-punch-card-stats",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#get-a-branch


* Get a branch
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param branch - The name of the branch.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const getBranch: ApiHeroEndpoint<
  { owner: string; branch: string; repo: string },
  BranchWithProtection
> = {
  id: "repos/get-branch",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#list-codeowners-errors


* List CODEOWNERS errors
* List any syntax errors that are detected in the CODEOWNERS
 * file.
 * 
 * For more information about the correct CODEOWNERS syntax,
 * see "[About code owners](https://docs.github.com/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners)."
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param [ref] - A branch, tag or commit name used to determine which version of the CODEOWNERS file to use. Default: the repository's default branch (e.g. `main`) 
*/
export const codeownersErrors: ApiHeroEndpoint<
  { owner: string; repo: string; ref?: string },
  CodeownersErrors
> = {
  id: "repos/codeowners-errors",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#get-community-profile-metrics


* Get community profile metrics
* This endpoint will return all community profile metrics, including an
 * overall health score, repository description, the presence of documentation, detected
 * code of conduct, detected license, and the presence of ISSUE\_TEMPLATE, PULL\_REQUEST\_TEMPLATE,
 * README, and CONTRIBUTING files.
 * 
 * The `health_percentage` score is defined as a percentage of how many of
 * these four documents are present: README, CONTRIBUTING, LICENSE, and
 * CODE_OF_CONDUCT. For example, if all four documents are present, then
 * the `health_percentage` is `100`. If only one is present, then the
 * `health_percentage` is `25`.
 * 
 * `content_reports_enabled` is only returned for organization-owned repositories.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const getCommunityProfileMetrics: ApiHeroEndpoint<
  { owner: string; repo: string },
  CommunityProfile
> = {
  id: "repos/get-community-profile-metrics",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#compare-two-commits


* Compare two commits
* The `basehead` param is comprised of two parts: `base` and `head`. Both must be branch names in `repo`. To compare branches across other repositories in the same network as `repo`, use the format `<USERNAME>:branch`.
 * 
 * The response from the API is equivalent to running the `git log base..head` command; however, commits are returned in chronological order. Pass the appropriate [media type](https://docs.github.com/rest/overview/media-types/#commits-commit-comparison-and-pull-requests) to fetch diff and patch formats.
 * 
 * The response also includes details on the files that were changed between the two commits. This includes the status of the change (for example, if a file was added, removed, modified, or renamed), and details of the change itself. For example, files with a `renamed` status have a `previous_filename` field showing the previous filename of the file, and files with a `modified` status have a `patch` field showing the changes made to the file.
 * 
 * **Working with large comparisons**
 * 
 * To process a response with a large number of commits, you can use (`per_page` or `page`) to paginate the results. When using paging, the list of changed files is only returned with page 1, but includes all changed files for the entire comparison. For more information on working with pagination, see "[Traversing with pagination](/rest/guides/traversing-with-pagination)."
 * 
 * When calling this API without any paging parameters (`per_page` or `page`), the returned list is limited to 250 commits and the last commit in the list is the most recent of the entire comparison. When a paging parameter is specified, the first commit in the returned list of each page is the earliest.
 * 
 * **Signature verification object**
 * 
 * The response will include a `verification` object that describes the result of verifying the commit's signature. The following fields are included in the `verification` object:
 * 
 * | Name | Type | Description |
 * | ---- | ---- | ----------- |
 * | `verified` | `boolean` | Indicates whether GitHub considers the signature in this commit to be verified. |
 * | `reason` | `string` | The reason for verified value. Possible values and their meanings are enumerated in table below. |
 * | `signature` | `string` | The signature that was extracted from the commit. |
 * | `payload` | `string` | The value that was signed. |
 * 
 * These are the possible values for `reason` in the `verification` object:
 * 
 * | Value | Description |
 * | ----- | ----------- |
 * | `expired_key` | The key that made the signature is expired. |
 * | `not_signing_key` | The "signing" flag is not among the usage flags in the GPG key that made the signature. |
 * | `gpgverify_error` | There was an error communicating with the signature verification service. |
 * | `gpgverify_unavailable` | The signature verification service is currently unavailable. |
 * | `unsigned` | The object does not include a signature. |
 * | `unknown_signature_type` | A non-PGP signature was found in the commit. |
 * | `no_user` | No user was associated with the `committer` email address in the commit. |
 * | `unverified_email` | The `committer` email address in the commit was associated with a user, but the email address is not verified on her/his account. |
 * | `bad_email` | The `committer` email address in the commit is not included in the identities of the PGP key that made the signature. |
 * | `unknown_key` | The key that made the signature has not been registered with any user's account. |
 * | `malformed_signature` | There was an error parsing the signature. |
 * | `invalid` | The signature could not be cryptographically verified using the key whose key-id was found in the signature. |
 * | `valid` | None of the above errors applied, so the signature is considered to be verified. |
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param basehead - The base branch and head branch to compare. This parameter expects the format `{base}...{head}`.
* @param repo - The name of the repository. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const compareCommits: ApiHeroEndpoint<
  { owner: string; basehead: string; repo: string; perPage?: number; page?: number },
  CommitComparison
> = {
  id: "repos/compare-commits",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#get-all-contributor-commit-activity


* Get all contributor commit activity
* 
 * Returns the `total` number of commits authored by the contributor. In addition, the response includes a Weekly Hash (`weeks` array) with the following information:
 * 
 * *   `w` - Start of the week, given as a [Unix timestamp](http://en.wikipedia.org/wiki/Unix_time).
 * *   `a` - Number of additions
 * *   `d` - Number of deletions
 * *   `c` - Number of commits
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const getContributorsStats: ApiHeroEndpoint<
  { owner: string; repo: string },
  Array<ContributorActivity> | {}
> = {
  id: "repos/get-contributors-stats",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#get-latest-pages-build


* Get latest Pages build
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const getLatestPagesBuild: ApiHeroEndpoint<{ owner: string; repo: string }, PageBuild> = {
  id: "repos/get-latest-pages-build",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#get-a-release-by-tag-name


* Get a release by tag name
* Get a published release with the specified tag.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param tag - tag parameter
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const getReleaseByTag: ApiHeroEndpoint<
  { owner: string; tag: string; repo: string },
  Release
> = {
  id: "repos/get-release-by-tag",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#get-the-weekly-commit-count


* Get the weekly commit count
* Returns the total commit counts for the `owner` and total commit counts in `all`. `all` is everyone combined, including the `owner` in the last 52 weeks. If you'd like to get the commit counts for non-owners, you can subtract `owner` from `all`.
 * 
 * The array order is oldest week (index 0) to most recent week.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const getParticipationStats: ApiHeroEndpoint<
  { owner: string; repo: string },
  ParticipationStats
> = {
  id: "repos/get-participation-stats",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#get-the-combined-status-for-a-specific-reference


* Get the combined status for a specific reference
* Users with pull access in a repository can access a combined view of commit statuses for a given ref. The ref can be a SHA, a branch name, or a tag name.
 * 
 * 
 * Additionally, a combined `state` is returned. The `state` is one of:
 * 
 * *   **failure** if any of the contexts report as `error` or `failure`
 * *   **pending** if there are no statuses or a context is `pending`
 * *   **success** if the latest status for all contexts is `success`
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param ref - ref parameter
* @param repo - The name of the repository. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const getCombinedStatusForRef: ApiHeroEndpoint<
  { owner: string; ref: string; repo: string; perPage?: number; page?: number },
  CombinedCommitStatus
> = {
  id: "repos/get-combined-status-for-ref",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#get-the-weekly-commit-activity


* Get the weekly commit activity
* Returns a weekly aggregate of the number of additions and deletions pushed to a repository.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const getCodeFrequencyStats: ApiHeroEndpoint<
  { owner: string; repo: string },
  Array<CodeFrequencyStat> | {}
> = {
  id: "repos/get-code-frequency-stats",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#check-if-vulnerability-alerts-are-enabled-for-a-repository


* Check if vulnerability alerts are enabled for a repository
* Shows whether dependency alerts are enabled or disabled for a repository. The authenticated user must have admin read access to the repository. For more information, see "[About security alerts for vulnerable dependencies](https://docs.github.com/en/articles/about-security-alerts-for-vulnerable-dependencies)".
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const checkVulnerabilityAlerts: ApiHeroEndpoint<{ owner: string; repo: string }, void> = {
  id: "repos/check-vulnerability-alerts",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#enable-vulnerability-alerts


* Enable vulnerability alerts
* Enables dependency alerts and the dependency graph for a repository. The authenticated user must have admin access to the repository. For more information, see "[About security alerts for vulnerable dependencies](https://docs.github.com/en/articles/about-security-alerts-for-vulnerable-dependencies)".
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const enableVulnerabilityAlerts: ApiHeroEndpoint<{ owner: string; repo: string }, void> = {
  id: "repos/enable-vulnerability-alerts",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#disable-vulnerability-alerts


* Disable vulnerability alerts
* Disables dependency alerts and the dependency graph for a repository. The authenticated user must have admin access to the repository. For more information, see "[About security alerts for vulnerable dependencies](https://docs.github.com/en/articles/about-security-alerts-for-vulnerable-dependencies)".
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const disableVulnerabilityAlerts: ApiHeroEndpoint<{ owner: string; repo: string }, void> = {
  id: "repos/disable-vulnerability-alerts",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#get-a-commit-comment


* Get a commit comment
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param commentId - The unique identifier of the comment.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const getCommitComment: ApiHeroEndpoint<
  { owner: string; commentId: number; repo: string },
  CommitComment
> = {
  id: "repos/get-commit-comment",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#delete-a-commit-comment


* Delete a commit comment
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param commentId - The unique identifier of the comment.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const deleteCommitComment: ApiHeroEndpoint<
  { owner: string; commentId: number; repo: string },
  void
> = {
  id: "repos/delete-commit-comment",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#update-a-commit-comment


* Update a commit comment
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param commentId - The unique identifier of the comment.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const updateCommitComment: ApiHeroEndpoint<
  {
    owner: string;
    commentId: number;
    repo: string;
    comment: {
      /**
       * The contents of the comment
       */
      body: string;
    };
  },
  CommitComment
> = {
  id: "repos/update-commit-comment",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#ping-a-repository-webhook


* Ping a repository webhook
* This will trigger a [ping event](https://docs.github.com/webhooks/#ping-event) to be sent to the hook.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param hookId - The unique identifier of the hook. 
*/
export const pingWebhook: ApiHeroEndpoint<{ owner: string; repo: string; hookId: number }, void> = {
  id: "repos/ping-webhook",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#test-the-push-repository-webhook


* Test the push repository webhook
* This will trigger the hook with the latest push to the current repository if the hook is subscribed to `push` events. If the hook is not subscribed to `push` events, the server will respond with 204 but no test POST will be generated.
 * 
 * **Note**: Previously `/repos/:owner/:repo/hooks/:hook_id/test`
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param hookId - The unique identifier of the hook. 
*/
export const testPushWebhook: ApiHeroEndpoint<
  { owner: string; repo: string; hookId: number },
  void
> = {
  id: "repos/test-push-webhook",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#get-a-release


* Get a release
* **Note:** This returns an `upload_url` key corresponding to the endpoint for uploading release assets. This key is a [hypermedia resource](https://docs.github.com/rest/overview/resources-in-the-rest-api#hypermedia).
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param releaseId - The unique identifier of the release.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const getRelease: ApiHeroEndpoint<
  { owner: string; releaseId: number; repo: string },
  Release
> = {
  id: "repos/get-release",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#delete-a-release


* Delete a release
* Users with push access to the repository can delete a release.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param releaseId - The unique identifier of the release.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const deleteRelease: ApiHeroEndpoint<
  { owner: string; releaseId: number; repo: string },
  void
> = {
  id: "repos/delete-release",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#update-a-release


* Update a release
* Users with push access to the repository can edit a release.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param releaseId - The unique identifier of the release.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const updateRelease: ApiHeroEndpoint<
  {
    owner: string;
    releaseId: number;
    repo: string;
    release?: {
      /**
       * Text describing the contents of the tag.
       */
      body?: string;

      /**
       * The name of the release.
       */
      name?: string;

      /**
       * `true` makes the release a draft, and `false` publishes the release.
       */
      draft?: boolean;

      /**
       * The name of the tag.
       */
      tag_name?: string;

      /**
       * `true` to identify the release as a prerelease, `false` to identify the release as a full release.
       */
      prerelease?: boolean;

      /**
       * Specifies the commitish value that determines where the Git tag is created from. Can be any branch or commit SHA. Unused if the Git tag already exists. Default: the repository's default branch (usually `master`).
       */
      target_commitish?: string;

      /**
       * If specified, a discussion of the specified category is created and linked to the release. The value must be a category that already exists in the repository. If there is already a discussion linked to the release, this parameter is ignored. For more information, see "[Managing categories for discussions in your repository](https://docs.github.com/discussions/managing-discussions-for-your-community/managing-categories-for-discussions-in-your-repository)."
       */
      discussion_category_name?: string;
    };
  },
  Release
> = {
  id: "repos/update-release",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#get-the-last-year-of-commit-activity


* Get the last year of commit activity
* Returns the last year of commit activity grouped by week. The `days` array is a group of commits per day, starting on `Sunday`.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const getCommitActivityStats: ApiHeroEndpoint<
  { owner: string; repo: string },
  Array<CommitActivity> | {}
> = {
  id: "repos/get-commit-activity-stats",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#get-top-referral-paths


* Get top referral paths
* Get the top 10 popular contents over the last 14 days.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const getTopPaths: ApiHeroEndpoint<
  { owner: string; repo: string },
  Array<ContentTraffic>
> = {
  id: "repos/get-top-paths",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#list-commit-statuses-for-a-reference


* List commit statuses for a reference
* Users with pull access in a repository can view commit statuses for a given ref. The ref can be a SHA, a branch name, or a tag name. Statuses are returned in reverse chronological order. The first status in the list will be the latest one.
 * 
 * This resource is also available via a legacy route: `GET /repos/:owner/:repo/statuses/:ref`.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param ref - ref parameter
* @param repo - The name of the repository. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listCommitStatusesForRef: ApiHeroEndpoint<
  { owner: string; ref: string; repo: string; perPage?: number; page?: number },
  Array<Status>,
  { Link: string }
> = {
  id: "repos/list-commit-statuses-for-ref",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#get-a-webhook-configuration-for-a-repository


* Get a webhook configuration for a repository
* Returns the webhook configuration for a repository. To get more information about the webhook, including the `active` state and `events`, use "[Get a repository webhook](/rest/reference/orgs#get-a-repository-webhook)."
 * 
 * Access tokens must have the `read:repo_hook` or `repo` scope, and GitHub Apps must have the `repository_hooks:read` permission.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param hookId - The unique identifier of the hook. 
*/
export const getWebhookConfigForRepo: ApiHeroEndpoint<
  { owner: string; repo: string; hookId: number },
  WebhookConfig
> = {
  id: "repos/get-webhook-config-for-repo",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#update-a-webhook-configuration-for-a-repository


* Update a webhook configuration for a repository
* Updates the webhook configuration for a repository. To update more information about the webhook, including the `active` state and `events`, use "[Update a repository webhook](/rest/reference/orgs#update-a-repository-webhook)."
 * 
 * Access tokens must have the `write:repo_hook` or `repo` scope, and GitHub Apps must have the `repository_hooks:write` permission.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param hookId - The unique identifier of the hook. 
*/
export const updateWebhookConfigForRepo: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
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
  id: "repos/update-webhook-config-for-repo",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#decline-a-repository-invitation


* Decline a repository invitation
* @param invitationId - The unique identifier of the invitation. 
*/
export const declineInvitationForAuthenticatedUser: ApiHeroEndpoint<
  { invitationId: number },
  void
> = {
  id: "repos/decline-invitation-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#accept-a-repository-invitation


* Accept a repository invitation
* @param invitationId - The unique identifier of the invitation. 
*/
export const acceptInvitationForAuthenticatedUser: ApiHeroEndpoint<{ invitationId: number }, void> =
  {
    id: "repos/accept-invitation-for-authenticated-user",
    clientId: "github",
  };

/** 
* @see https://docs.github.com/v3/repos#get-autolink


* Get an autolink reference of a repository
* This returns a single autolink reference by ID that was configured for the given repository.
 * 
 * Information about autolinks are only available to repository administrators.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param autolinkId - The unique identifier of the autolink.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const getAutolink: ApiHeroEndpoint<
  { owner: string; autolinkId: number; repo: string },
  Autolink
> = {
  id: "repos/get-autolink",
  clientId: "github",
};

/** 
* @see https://docs.github.com/v3/repos#delete-autolink


* Delete an autolink reference from a repository
* This deletes a single autolink reference by ID that was configured for the given repository.
 * 
 * Information about autolinks are only available to repository administrators.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param autolinkId - The unique identifier of the autolink.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const deleteAutolink: ApiHeroEndpoint<
  { owner: string; autolinkId: number; repo: string },
  void
> = {
  id: "repos/delete-autolink",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#get-github-pages-build


* Get GitHub Pages build
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param buildId 
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const getPagesBuild: ApiHeroEndpoint<
  { owner: string; buildId: number; repo: string },
  PageBuild
> = {
  id: "repos/get-pages-build",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#generate-release-notes


* Generate release notes content for a release
* Generate a name and body describing a [release](https://docs.github.com/rest/reference/repos#releases). The body content will be markdown formatted and contain information like the changes since last release and users who contributed. The generated release notes are not saved anywhere. They are intended to be generated and used when creating a new release.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const generateReleaseNotes: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
    generateNote: {
      /**
       * The tag name for the release. This can be an existing tag or a new one.
       */
      tag_name: string;

      /**
       * Specifies the commitish value that will be the target for the release's tag. Required if the supplied tag_name does not reference an existing tag. Ignored if the tag_name already exists.
       */
      target_commitish?: string;

      /**
       * The name of the previous tag to use as the starting point for the release notes. Use to manually specify the range for the set of changes considered as part this release.
       */
      previous_tag_name?: string;

      /**
       * Specifies a path to a file in the repository containing configuration settings used for generating the release notes. If unspecified, the configuration file located in the repository at '.github/release.yml' or '.github/release.yaml' will be used. If that is not present, the default configuration will be used.
       */
      configuration_file_path?: string;
    };
  },
  ReleaseNotesContent
> = {
  id: "repos/generate-release-notes",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#enable-automated-security-fixes


* Enable automated security fixes
* Enables automated security fixes for a repository. The authenticated user must have admin access to the repository. For more information, see "[Configuring automated security fixes](https://docs.github.com/en/articles/configuring-automated-security-fixes)".
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const enableAutomatedSecurityFixes: ApiHeroEndpoint<{ owner: string; repo: string }, void> =
  {
    id: "repos/enable-automated-security-fixes",
    clientId: "github",
  };

/** 
* @see https://docs.github.com/rest/reference/repos#disable-automated-security-fixes


* Disable automated security fixes
* Disables automated security fixes for a repository. The authenticated user must have admin access to the repository. For more information, see "[Configuring automated security fixes](https://docs.github.com/en/articles/configuring-automated-security-fixes)".
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const disableAutomatedSecurityFixes: ApiHeroEndpoint<{ owner: string; repo: string }, void> =
  {
    id: "repos/disable-automated-security-fixes",
    clientId: "github",
  };

/** 
* @see https://docs.github.com/rest/reference/repos#rename-a-branch


* Rename a branch
* Renames a branch in a repository.
 * 
 * **Note:** Although the API responds immediately, the branch rename process might take some extra time to complete in the background. You won't be able to push to the old branch name while the rename process is in progress. For more information, see "[Renaming a branch](https://docs.github.com/github/administering-a-repository/renaming-a-branch)".
 * 
 * The permissions required to use this endpoint depends on whether you are renaming the default branch.
 * 
 * To rename a non-default branch:
 * 
 * * Users must have push access.
 * * GitHub Apps must have the `contents:write` repository permission.
 * 
 * To rename the default branch:
 * 
 * * Users must have admin or owner permissions.
 * * GitHub Apps must have the `administration:write` repository permission.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param branch - The name of the branch.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const renameBranch: ApiHeroEndpoint<
  {
    owner: string;
    branch: string;
    repo: string;
    rename: {
      /**
       * The new name of the branch.
       */
      new_name: string;
    };
  },
  BranchWithProtection
> = {
  id: "repos/rename-branch",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#check-if-a-user-is-a-repository-collaborator


* Check if a user is a repository collaborator
* For organization-owned repositories, the list of collaborators includes outside collaborators, organization members that are direct collaborators, organization members with access through team memberships, organization members with access through default organization permissions, and organization owners.
 * 
 * Team members will include the members of child teams.
 * 
 * You must authenticate using an access token with the `read:org` and `repo` scopes with push access to use this
 * endpoint. GitHub Apps must have the `members` organization permission and `metadata` repository permission to use this
 * endpoint.
* @param username - The handle for the GitHub user account.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const checkCollaborator: ApiHeroEndpoint<
  { username: string; owner: string; repo: string },
  void
> = {
  id: "repos/check-collaborator",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#add-a-repository-collaborator


* Add a repository collaborator
* This endpoint triggers [notifications](https://docs.github.com/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.
 * 
 * Adding an outside collaborator may be restricted by enterprise administrators. For more information, see "[Enforcing repository management policies in your enterprise](https://docs.github.com/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-repository-management-policies-in-your-enterprise#enforcing-a-policy-for-inviting-outside-collaborators-to-repositories)."
 * 
 * For more information on permission levels, see "[Repository permission levels for an organization](https://docs.github.com/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization#permission-levels-for-repositories-owned-by-an-organization)". There are restrictions on which permissions can be granted to organization members when an organization base role is in place. In this case, the permission being given must be equal to or higher than the org base permission. Otherwise, the request will fail with:
 * 
 * ```
 * Cannot assign {member} permission of {role name}
 * ```
 * 
 * Note that, if you choose not to pass any parameters, you'll need to set `Content-Length` to zero when calling out to this endpoint. For more information, see "[HTTP verbs](https://docs.github.com/rest/overview/resources-in-the-rest-api#http-verbs)."
 * 
 * The invitee will receive a notification that they have been invited to the repository, which they must accept or decline. They may do this via the notifications page, the email they receive, or by using the [repository invitations API endpoints](https://docs.github.com/rest/reference/repos#invitations).
 * 
 * **Updating an existing collaborator's permission level**
 * 
 * The endpoint can also be used to change the permissions of an existing collaborator without first removing and re-adding the collaborator. To change the permissions, use the same endpoint and pass a different `permission` parameter. The response will be a `204`, with no other indication that the permission level changed.
 * 
 * **Rate limits**
 * 
 * You are limited to sending 50 invitations to a repository per 24 hour period. Note there is no limit if you are inviting organization members to an organization repository.
* @param username - The handle for the GitHub user account.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const addCollaborator: ApiHeroEndpoint<
  {
    username: string;
    owner: string;
    repo: string;
    collaborator?: {
      /**
       * The permission to grant the collaborator. **Only valid on organization-owned repositories.** In addition to the enumerated values, you can also specify a custom repository role name, if the owning organization has defined any.
       */
      permission?: "pull" | "push" | "admin" | "maintain" | "triage";
    };
  },
  RepositoryInvitation
> = {
  id: "repos/add-collaborator",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#remove-a-repository-collaborator


* Remove a repository collaborator
* @param username - The handle for the GitHub user account.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const removeCollaborator: ApiHeroEndpoint<
  { username: string; owner: string; repo: string },
  void
> = {
  id: "repos/remove-collaborator",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#get-top-referral-sources


* Get top referral sources
* Get the top 10 referrers over the last 14 days.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const getTopReferrers: ApiHeroEndpoint<
  { owner: string; repo: string },
  Array<ReferrerTraffic>
> = {
  id: "repos/get-top-referrers",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#list-pull-requests-associated-with-a-commit


* List pull requests associated with a commit
* Lists the merged pull request that introduced the commit to the repository. If the commit is not present in the default branch, additionally returns open pull requests associated with the commit. The results may include open and closed pull requests.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param commitSha - The SHA of the commit.
* @param repo - The name of the repository. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listPullRequestsAssociatedWithCommit: ApiHeroEndpoint<
  { owner: string; commitSha: string; repo: string; perPage?: number; page?: number },
  Array<PullRequestSimple>,
  { Link: string }
> = {
  id: "repos/list-pull-requests-associated-with-commit",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#list-deliveries-for-a-repository-webhook


* List deliveries for a repository webhook
* Returns a list of webhook deliveries for a webhook configured in a repository.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param hookId - The unique identifier of the hook.
* @param [perPage=30] - The number of results per page (max 100).
* @param [cursor] - Used for pagination: the starting delivery from which the page of deliveries is fetched. Refer to the `link` header for the next and previous page cursors. 
*/
export const listWebhookDeliveries: ApiHeroEndpoint<
  { owner: string; repo: string; hookId: number; perPage?: number; cursor?: string },
  Array<HookDeliveryItem>
> = {
  id: "repos/list-webhook-deliveries",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#get-a-release-asset


* Get a release asset
* To download the asset's binary content, set the `Accept` header of the request to [`application/octet-stream`](https://docs.github.com/rest/overview/media-types). The API will either redirect the client to the location, or stream it directly if possible. API clients should handle both a `200` or `302` response.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param assetId - The unique identifier of the asset.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const getReleaseAsset: ApiHeroEndpoint<
  { owner: string; assetId: number; repo: string },
  ReleaseAsset
> = {
  id: "repos/get-release-asset",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#delete-a-release-asset


* Delete a release asset
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param assetId - The unique identifier of the asset.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const deleteReleaseAsset: ApiHeroEndpoint<
  { owner: string; assetId: number; repo: string },
  void
> = {
  id: "repos/delete-release-asset",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#update-a-release-asset


* Update a release asset
* Users with push access to the repository can edit a release asset.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param assetId - The unique identifier of the asset.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const updateReleaseAsset: ApiHeroEndpoint<
  {
    owner: string;
    assetId: number;
    repo: string;
    asset?: {
      /**
       * The file name of the asset.
       */
      name?: string;

      /**
       * An alternate short description of the asset. Used in place of the filename.
       */
      label?: string;

      /**
       *
       * @example
       * "\"uploaded\""
       */
      state?: string;
    };
  },
  ReleaseAsset
> = {
  id: "repos/update-release-asset",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#create-a-repository-using-a-template


* Create a repository using a template
* Creates a new repository using a repository template. Use the `template_owner` and `template_repo` route parameters to specify the repository to use as the template. The authenticated user must own or be a member of an organization that owns the repository. To check if a repository is available to use as a template, get the repository's information using the [Get a repository](https://docs.github.com/rest/reference/repos#get-a-repository) endpoint and check that the `is_template` key is `true`.
 * 
 * **OAuth scope requirements**
 * 
 * When using [OAuth](https://docs.github.com/apps/building-oauth-apps/understanding-scopes-for-oauth-apps/), authorizations must include:
 * 
 * *   `public_repo` scope or `repo` scope to create a public repository. Note: For GitHub AE, use `repo` scope to create an internal repository.
 * *   `repo` scope to create a private repository
* @param templateRepo 
* @param templateOwner  
*/
export const createUsingTemplate: ApiHeroEndpoint<
  {
    templateRepo: string;
    templateOwner: string;
    generate: {
      /**
       * The name of the new repository.
       */
      name: string;

      /**
       * The organization or person who will own the new repository. To create a new repository in an organization, the authenticated user must be a member of the specified organization.
       */
      owner?: string;

      /**
       * Either `true` to create a new private repository or `false` to create a new public one.
       */
      private?: boolean;

      /**
       * A short description of the new repository.
       */
      description?: string;

      /**
       * Set to `true` to include the directory structure and files from all branches in the template repository, and not just the default branch. Default: `false`.
       */
      include_all_branches?: boolean;
    };
  },
  Repository,
  { Location: string }
> = {
  id: "repos/create-using-template",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#get-a-deployment


* Get a deployment
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param deploymentId - deployment_id parameter
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const getDeployment: ApiHeroEndpoint<
  { owner: string; deploymentId: number; repo: string },
  Deployment
> = {
  id: "repos/get-deployment",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#delete-a-deployment


* Delete a deployment
* If the repository only has one deployment, you can delete the deployment regardless of its status. If the repository has more than one deployment, you can only delete inactive deployments. This ensures that repositories with multiple deployments will always have an active deployment. Anyone with `repo` or `repo_deployment` scopes can delete a deployment.
 * 
 * To set a deployment as inactive, you must:
 * 
 * *   Create a new deployment that is active so that the system has a record of the current state, then delete the previously active deployment.
 * *   Mark the active deployment as inactive by adding any non-successful deployment status.
 * 
 * For more information, see "[Create a deployment](https://docs.github.com/rest/reference/repos/#create-a-deployment)" and "[Create a deployment status](https://docs.github.com/rest/reference/repos#create-a-deployment-status)."
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param deploymentId - deployment_id parameter
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const deleteDeployment: ApiHeroEndpoint<
  { owner: string; deploymentId: number; repo: string },
  void
> = {
  id: "repos/delete-deployment",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#delete-a-repository-invitation


* Delete a repository invitation
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param invitationId - The unique identifier of the invitation.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const deleteInvitation: ApiHeroEndpoint<
  { owner: string; invitationId: number; repo: string },
  void
> = {
  id: "repos/delete-invitation",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#update-a-repository-invitation


* Update a repository invitation
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param invitationId - The unique identifier of the invitation.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const updateInvitation: ApiHeroEndpoint<
  {
    owner: string;
    invitationId: number;
    repo: string;
    invitation?: {
      /**
       * The permissions that the associated user will have on the repository. Valid values are `read`, `write`, `maintain`, `triage`, and `admin`.
       */
      permissions?: "read" | "write" | "maintain" | "triage" | "admin";
    };
  },
  RepositoryInvitation
> = {
  id: "repos/update-invitation",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#get-branch-protection


* Get branch protection
* Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param branch - The name of the branch.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const getBranchProtection: ApiHeroEndpoint<
  { owner: string; branch: string; repo: string },
  BranchProtection
> = {
  id: "repos/get-branch-protection",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#update-branch-protection


* Update branch protection
* Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 * 
 * Protecting a branch requires admin or owner permissions to the repository.
 * 
 * **Note**: Passing new arrays of `users` and `teams` replaces their previous values.
 * 
 * **Note**: The list of users, apps, and teams in total is limited to 100 items.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param branch - The name of the branch.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const updateBranchProtection: ApiHeroEndpoint<
  {
    owner: string;
    branch: string;
    repo: string;
    payload: {
      /**
       * Restrict who can push to the protected branch. User, app, and team `restrictions` are only available for organization-owned repositories. Set to `null` to disable.
       */
      restrictions: {
        /**
         * The list of app `slug`s with push access
         */
        apps?: Array<string>;

        /**
         * The list of team `slug`s with push access
         */
        teams: Array<string>;

        /**
         * The list of user `login`s with push access
         */
        users: Array<string>;
      } | null;

      /**
       * Enforce all configured restrictions for administrators. Set to `true` to enforce required status checks for repository administrators. Set to `null` to disable.
       */
      enforce_admins: boolean | null;

      /**
       * Allows deletion of the protected branch by anyone with write access to the repository. Set to `false` to prevent deletion of the protected branch. Default: `false`. For more information, see "[Enabling force pushes to a protected branch](https://docs.github.com/en/github/administering-a-repository/enabling-force-pushes-to-a-protected-branch)" in the GitHub Help documentation.
       */
      allow_deletions?: boolean;

      /**
       * If set to `true`, the `restrictions` branch protection settings which limits who can push will also block pushes which create new branches, unless the push is initiated by a user, team, or app which has the ability to push. Set to `true` to restrict new branch creation. Default: `false`.
       */
      block_creations?: boolean;

      /**
       * Permits force pushes to the protected branch by anyone with write access to the repository. Set to `true` to allow force pushes. Set to `false` or `null` to block force pushes. Default: `false`. For more information, see "[Enabling force pushes to a protected branch](https://docs.github.com/en/github/administering-a-repository/enabling-force-pushes-to-a-protected-branch)" in the GitHub Help documentation."
       */
      allow_force_pushes?: boolean | null;

      /**
       * Require status checks to pass before merging. Set to `null` to disable.
       */
      required_status_checks: {
        /**
         * The list of status checks to require in order to merge into this branch.
         */
        checks?: Array<{
          /**
           * The ID of the GitHub App that must provide this check. Omit this field to automatically select the GitHub App that has recently provided this check, or any app if it was not set by a GitHub App. Pass -1 to explicitly allow any app to set the status.
           */
          app_id?: number;

          /**
           * The name of the required check
           */
          context: string;
        }>;

        /**
         * Require branches to be up to date before merging.
         */
        strict: boolean;

        /** 
* **Deprecated**: The list of status checks to require in order to merge into this branch. If any of these checks have recently been set by a particular GitHub App, they will be required to come from that app in future for the branch to merge. Use `checks` instead of `contexts` for more fine-grained control.

* @deprecated
*/
        contexts: Array<string>;
      } | null;

      /**
       * Enforces a linear commit Git history, which prevents anyone from pushing merge commits to a branch. Set to `true` to enforce a linear commit history. Set to `false` to disable a linear commit Git history. Your repository must allow squash merging or rebase merging before you can enable a linear commit history. Default: `false`. For more information, see "[Requiring a linear commit history](https://docs.github.com/github/administering-a-repository/requiring-a-linear-commit-history)" in the GitHub Help documentation.
       */
      required_linear_history?: boolean;

      /**
       * Require at least one approving review on a pull request, before merging. Set to `null` to disable.
       */
      required_pull_request_reviews: {
        /**
         * Set to `true` if you want to automatically dismiss approving reviews when someone pushes a new commit.
         */
        dismiss_stale_reviews?: boolean;

        /**
         * Specify which users, teams, and apps can dismiss pull request reviews. Pass an empty `dismissal_restrictions` object to disable. User and team `dismissal_restrictions` are only available for organization-owned repositories. Omit this parameter for personal repositories.
         */
        dismissal_restrictions?: {
          /**
           * The list of app `slug`s with dismissal access
           */
          apps?: Array<string>;

          /**
           * The list of team `slug`s with dismissal access
           */
          teams?: Array<string>;

          /**
           * The list of user `login`s with dismissal access
           */
          users?: Array<string>;
        };

        /**
         * Blocks merging pull requests until [code owners](https://docs.github.com/articles/about-code-owners/) review them.
         */
        require_code_owner_reviews?: boolean;

        /**
         * Allow specific users, teams, or apps to bypass pull request requirements.
         */
        bypass_pull_request_allowances?: {
          /**
           * The list of app `slug`s allowed to bypass pull request requirements.
           */
          apps?: Array<string>;

          /**
           * The list of team `slug`s allowed to bypass pull request requirements.
           */
          teams?: Array<string>;

          /**
           * The list of user `login`s allowed to bypass pull request requirements.
           */
          users?: Array<string>;
        };

        /**
         * Specify the number of reviewers required to approve pull requests. Use a number between 1 and 6 or 0 to not require reviewers.
         */
        required_approving_review_count?: number;
      } | null;

      /**
       * Requires all conversations on code to be resolved before a pull request can be merged into a branch that matches this rule. Set to `false` to disable. Default: `false`.
       */
      required_conversation_resolution?: boolean;
    };
  },
  ProtectedBranch
> = {
  id: "repos/update-branch-protection",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#delete-branch-protection


* Delete branch protection
* Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param branch - The name of the branch.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const deleteBranchProtection: ApiHeroEndpoint<
  { owner: string; branch: string; repo: string },
  void
> = {
  id: "repos/delete-branch-protection",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#list-release-assets


* List release assets
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param releaseId - The unique identifier of the release.
* @param repo - The name of the repository. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listReleaseAssets: ApiHeroEndpoint<
  { owner: string; releaseId: number; repo: string; perPage?: number; page?: number },
  Array<ReleaseAsset>,
  { Link: string }
> = {
  id: "repos/list-release-assets",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#upload-a-release-asset


* Upload a release asset
* This endpoint makes use of [a Hypermedia relation](https://docs.github.com/rest/overview/resources-in-the-rest-api#hypermedia) to determine which URL to access. The endpoint you call to upload release assets is specific to your release. Use the `upload_url` returned in
 * the response of the [Create a release endpoint](https://docs.github.com/rest/reference/repos#create-a-release) to upload a release asset.
 * 
 * You need to use an HTTP client which supports [SNI](http://en.wikipedia.org/wiki/Server_Name_Indication) to make calls to this endpoint.
 * 
 * Most libraries will set the required `Content-Length` header automatically. Use the required `Content-Type` header to provide the media type of the asset. For a list of media types, see [Media Types](https://www.iana.org/assignments/media-types/media-types.xhtml). For example:
 * 
 * `application/zip`
 * 
 * GitHub expects the asset data in its raw binary form, rather than JSON. You will send the raw binary content of the asset as the request body. Everything else about the endpoint is the same as the rest of the API. For example,
 * you'll still need to pass your authentication to be able to upload an asset.
 * 
 * When an upstream failure occurs, you will receive a `502 Bad Gateway` status. This may leave an empty asset with a state of `starter`. It can be safely deleted.
 * 
 * **Notes:**
 * *   GitHub renames asset filenames that have special characters, non-alphanumeric characters, and leading or trailing periods. The "[List assets for a release](https://docs.github.com/rest/reference/repos#list-assets-for-a-release)"
 * endpoint lists the renamed filenames. For more information and help, contact [GitHub Support](https://support.github.com/contact?tags=dotcom-rest-api).
 * *   If you upload an asset with the same filename as another uploaded asset, you'll receive an error and must delete the old file before you can re-upload the new asset.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param releaseId - The unique identifier of the release.
* @param name 
* @param repo - The name of the repository. The name is not case sensitive.
* @param [label]  
*/
export const uploadReleaseAsset: ApiHeroEndpoint<
  { owner: string; releaseId: number; name: string; repo: string; label?: string; asset?: string },
  ReleaseAsset
> = {
  id: "repos/upload-release-asset",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#list-commit-comments


* List commit comments
* Use the `:commit_sha` to specify the commit that will have its comments listed.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param commitSha - The SHA of the commit.
* @param repo - The name of the repository. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listCommentsForCommit: ApiHeroEndpoint<
  { owner: string; commitSha: string; repo: string; perPage?: number; page?: number },
  Array<CommitComment>,
  { Link: string }
> = {
  id: "repos/list-comments-for-commit",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#create-a-commit-comment


* Create a commit comment
* Create a comment for a commit using its `:commit_sha`.
 * 
 * This endpoint triggers [notifications](https://docs.github.com/en/github/managing-subscriptions-and-notifications-on-github/about-notifications). Creating content too quickly using this endpoint may result in secondary rate limiting. See "[Secondary rate limits](https://docs.github.com/rest/overview/resources-in-the-rest-api#secondary-rate-limits)" and "[Dealing with secondary rate limits](https://docs.github.com/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits)" for details.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param commitSha - The SHA of the commit.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const createCommitComment: ApiHeroEndpoint<
  {
    owner: string;
    commitSha: string;
    repo: string;
    comment: {
      /**
       * The contents of the comment.
       */
      body: string;

      /**
       * **Deprecated**. Use **position** parameter instead. Line number in the file to comment on.
       */
      line?: number;

      /**
       * Relative path of the file to comment on.
       */
      path?: string;

      /**
       * Line index in the diff to comment on.
       */
      position?: number;
    };
  },
  CommitComment,
  { Location: string }
> = {
  id: "repos/create-commit-comment",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#get-an-environment


* Get an environment
* Anyone with read access to the repository can use this endpoint. If the repository is private, you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param environmentName - The name of the environment
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const getEnvironment: ApiHeroEndpoint<
  { owner: string; environmentName: string; repo: string },
  Environment
> = {
  id: "repos/get-environment",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#create-or-update-an-environment


* Create or update an environment
* Create or update an environment with protection rules, such as required reviewers. For more information about environment protection rules, see "[Environments](/actions/reference/environments#environment-protection-rules)."
 * 
 * **Note:** Although you can use this operation to specify that only branches that match specified name patterns can deploy to this environment, you must use the UI to set the name patterns. For more information, see "[Environments](/actions/reference/environments#deployment-branches)."
 * 
 * **Note:** To create or update secrets for an environment, see "[Secrets](/rest/reference/actions#secrets)."
 * 
 * You must authenticate using an access token with the repo scope to use this endpoint.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param environmentName - The name of the environment
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const createOrUpdateEnvironment: ApiHeroEndpoint<
  {
    owner: string;
    environmentName: string;
    repo: string;
    environment?: {
      /**
       * The people or teams that may review jobs that reference the environment. You can list up to six users or teams as reviewers. The reviewers must have at least read access to the repository. Only one of the required reviewers needs to approve the job for it to proceed.
       */
      reviewers?: Array<{
        /**
         * The id of the user or team who can review the deployment
         *
         * @example
         * 4532992
         */
        id?: number;
        type?: DeploymentReviewerType;
      }> | null;
      wait_timer?: WaitTimer;
      deployment_branch_policy?: DeploymentBranchPolicy;
    } | null;
  },
  Environment
> = {
  id: "repos/create-or-update-environment",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#delete-an-environment


* Delete an environment
* You must authenticate using an access token with the repo scope to use this endpoint.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param environmentName - The name of the environment
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const deleteAnEnvironment: ApiHeroEndpoint<
  { owner: string; environmentName: string; repo: string },
  void
> = {
  id: "repos/delete-an-environment",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#get-repository-permissions-for-a-user


* Get repository permissions for a user
* Checks the repository permission of a collaborator. The possible repository permissions are `admin`, `write`, `read`, and `none`.
* @param username - The handle for the GitHub user account.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const getCollaboratorPermissionLevel: ApiHeroEndpoint<
  { username: string; owner: string; repo: string },
  RepositoryCollaboratorPermission
> = {
  id: "repos/get-collaborator-permission-level",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#delete-tag-protection-state-for-a-repository


* Delete a tag protection state for a repository
* This deletes a tag protection state for a repository.
 * This endpoint is only available to repository administrators.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param tagProtectionId - The unique identifier of the tag protection.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const deleteTagProtection: ApiHeroEndpoint<
  { owner: string; tagProtectionId: number; repo: string },
  void
> = {
  id: "repos/delete-tag-protection",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#list-deployment-statuses


* List deployment statuses
* Users with pull access can view deployment statuses for a deployment:
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param deploymentId - deployment_id parameter
* @param repo - The name of the repository. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listDeploymentStatuses: ApiHeroEndpoint<
  { owner: string; deploymentId: number; repo: string; perPage?: number; page?: number },
  Array<DeploymentStatus>,
  { Link: string }
> = {
  id: "repos/list-deployment-statuses",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#create-a-deployment-status


* Create a deployment status
* Users with `push` access can create deployment statuses for a given deployment.
 * 
 * GitHub Apps require `read & write` access to "Deployments" and `read-only` access to "Repo contents" (for private repos). OAuth Apps require the `repo_deployment` scope.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param deploymentId - deployment_id parameter
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const createDeploymentStatus: ApiHeroEndpoint<
  {
    owner: string;
    deploymentId: number;
    repo: string;
    status: {
      /**
       * The state of the status. When you set a transient deployment to `inactive`, the deployment will be shown as `destroyed` in GitHub.
       */
      state: "error" | "failure" | "inactive" | "in_progress" | "queued" | "pending" | "success";

      /**
       * The full URL of the deployment's output. This parameter replaces `target_url`. We will continue to accept `target_url` to support legacy uses, but we recommend replacing `target_url` with `log_url`. Setting `log_url` will automatically set `target_url` to the same value. Default: `""`
       */
      log_url?: string;

      /**
       * The target URL to associate with this status. This URL should contain output to keep the user updated while the task is running or serve as historical information for what happened in the deployment. **Note:** It's recommended to use the `log_url` parameter, which replaces `target_url`.
       */
      target_url?: string;

      /**
       * A short description of the status. The maximum description length is 140 characters.
       */
      description?: string;

      /**
       * Name for the target deployment environment, which can be changed when setting a deploy status. For example, `production`, `staging`, or `qa`.
       */
      environment?: "production" | "staging" | "qa";

      /**
       * Adds a new `inactive` status to all prior non-transient, non-production environment deployments with the same repository and `environment` name as the created status's deployment. An `inactive` status is only added to deployments that had a `success` state. Default: `true`
       */
      auto_inactive?: boolean;

      /**
       * Sets the URL for accessing your environment. Default: `""`
       */
      environment_url?: string;
    };
  },
  DeploymentStatus,
  { Location: string }
> = {
  id: "repos/create-deployment-status",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#list-branches-for-head-commit


* List branches for HEAD commit
* Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 * 
 * Returns all branches where the given commit SHA is the HEAD, or latest commit for the branch.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param commitSha - The SHA of the commit.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const listBranchesForHeadCommit: ApiHeroEndpoint<
  { owner: string; commitSha: string; repo: string },
  Array<BranchShort>
> = {
  id: "repos/list-branches-for-head-commit",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#get-a-delivery-for-a-repository-webhook


* Get a delivery for a repository webhook
* Returns a delivery for a webhook configured in a repository.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param deliveryId 
* @param repo - The name of the repository. The name is not case sensitive.
* @param hookId - The unique identifier of the hook. 
*/
export const getWebhookDelivery: ApiHeroEndpoint<
  { owner: string; deliveryId: number; repo: string; hookId: number },
  HookDelivery
> = {
  id: "repos/get-webhook-delivery",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#get-access-restrictions


* Get access restrictions
* Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 * 
 * Lists who has access to this protected branch.
 * 
 * **Note**: Users, apps, and teams `restrictions` are only available for organization-owned repositories.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param branch - The name of the branch.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const getAccessRestrictions: ApiHeroEndpoint<
  { owner: string; branch: string; repo: string },
  BranchRestrictionPolicy
> = {
  id: "repos/get-access-restrictions",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#delete-access-restrictions


* Delete access restrictions
* Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 * 
 * Disables the ability to restrict who can push to this branch.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param branch - The name of the branch.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const deleteAccessRestrictions: ApiHeroEndpoint<
  { owner: string; branch: string; repo: string },
  void
> = {
  id: "repos/delete-access-restrictions",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#get-admin-branch-protection


* Get admin branch protection
* Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param branch - The name of the branch.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const getAdminBranchProtection: ApiHeroEndpoint<
  { owner: string; branch: string; repo: string },
  ProtectedBranchAdminEnforced
> = {
  id: "repos/get-admin-branch-protection",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#set-admin-branch-protection


* Set admin branch protection
* Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 * 
 * Adding admin enforcement requires admin or owner permissions to the repository and branch protection to be enabled.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param branch - The name of the branch.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const setAdminBranchProtection: ApiHeroEndpoint<
  { owner: string; branch: string; repo: string },
  ProtectedBranchAdminEnforced
> = {
  id: "repos/set-admin-branch-protection",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#delete-admin-branch-protection


* Delete admin branch protection
* Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 * 
 * Removing admin enforcement requires admin or owner permissions to the repository and branch protection to be enabled.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param branch - The name of the branch.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const deleteAdminBranchProtection: ApiHeroEndpoint<
  { owner: string; branch: string; repo: string },
  void
> = {
  id: "repos/delete-admin-branch-protection",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#list-apps-with-access-to-the-protected-branch


* Get apps with access to the protected branch
* Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 * 
 * Lists the GitHub Apps that have push access to this branch. Only installed GitHub Apps with `write` access to the `contents` permission can be added as authorized actors on a protected branch.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param branch - The name of the branch.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const getAppsWithAccessToProtectedBranch: ApiHeroEndpoint<
  { owner: string; branch: string; repo: string },
  Array<Integration>
> = {
  id: "repos/get-apps-with-access-to-protected-branch",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#add-app-access-restrictions


* Add app access restrictions
* Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 * 
 * Grants the specified apps push access for this branch. Only installed GitHub Apps with `write` access to the `contents` permission can be added as authorized actors on a protected branch.
 * 
 * | Type    | Description                                                                                                                                                |
 * | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
 * | `array` | The GitHub Apps that have push access to this branch. Use the app's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param branch - The name of the branch.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const addAppAccessRestrictions: ApiHeroEndpoint<
  {
    owner: string;
    branch: string;
    repo: string;
    app?:
      | {
          /**
           * apps parameter
           */
          apps: Array<string>;
        }
      | Array<string>;
  },
  Array<Integration>
> = {
  id: "repos/add-app-access-restrictions",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#set-app-access-restrictions


* Set app access restrictions
* Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 * 
 * Replaces the list of apps that have push access to this branch. This removes all apps that previously had push access and grants push access to the new list of apps. Only installed GitHub Apps with `write` access to the `contents` permission can be added as authorized actors on a protected branch.
 * 
 * | Type    | Description                                                                                                                                                |
 * | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
 * | `array` | The GitHub Apps that have push access to this branch. Use the app's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param branch - The name of the branch.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const setAppAccessRestrictions: ApiHeroEndpoint<
  {
    owner: string;
    branch: string;
    repo: string;
    restriction?:
      | {
          /**
           * apps parameter
           */
          apps: Array<string>;
        }
      | Array<string>;
  },
  Array<Integration>
> = {
  id: "repos/set-app-access-restrictions",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#remove-app-access-restrictions


* Remove app access restrictions
* Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 * 
 * Removes the ability of an app to push to this branch. Only installed GitHub Apps with `write` access to the `contents` permission can be added as authorized actors on a protected branch.
 * 
 * | Type    | Description                                                                                                                                                |
 * | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
 * | `array` | The GitHub Apps that have push access to this branch. Use the app's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param branch - The name of the branch.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const removeAppAccessRestrictions: ApiHeroEndpoint<
  {
    owner: string;
    branch: string;
    repo: string;
    app?:
      | {
          /**
           * apps parameter
           */
          apps: Array<string>;
        }
      | Array<string>;
  },
  Array<Integration>
> = {
  id: "repos/remove-app-access-restrictions",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#list-teams-with-access-to-the-protected-branch


* Get teams with access to the protected branch
* Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 * 
 * Lists the teams who have push access to this branch. The list includes child teams.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param branch - The name of the branch.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const getTeamsWithAccessToProtectedBranch: ApiHeroEndpoint<
  { owner: string; branch: string; repo: string },
  Array<Team>
> = {
  id: "repos/get-teams-with-access-to-protected-branch",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#add-team-access-restrictions


* Add team access restrictions
* Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 * 
 * Grants the specified teams push access for this branch. You can also give push access to child teams.
 * 
 * | Type    | Description                                                                                                                                |
 * | ------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
 * | `array` | The teams that can have push access. Use the team's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param branch - The name of the branch.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const addTeamAccessRestrictions: ApiHeroEndpoint<
  {
    owner: string;
    branch: string;
    repo: string;
    team?:
      | {
          /**
           * teams parameter
           */
          teams: Array<string>;
        }
      | Array<string>;
  },
  Array<Team>
> = {
  id: "repos/add-team-access-restrictions",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#set-team-access-restrictions


* Set team access restrictions
* Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 * 
 * Replaces the list of teams that have push access to this branch. This removes all teams that previously had push access and grants push access to the new list of teams. Team restrictions include child teams.
 * 
 * | Type    | Description                                                                                                                                |
 * | ------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
 * | `array` | The teams that can have push access. Use the team's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param branch - The name of the branch.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const setTeamAccessRestrictions: ApiHeroEndpoint<
  {
    owner: string;
    branch: string;
    repo: string;
    restriction?:
      | {
          /**
           * teams parameter
           */
          teams: Array<string>;
        }
      | Array<string>;
  },
  Array<Team>
> = {
  id: "repos/set-team-access-restrictions",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#remove-team-access-restrictions


* Remove team access restrictions
* Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 * 
 * Removes the ability of a team to push to this branch. You can also remove push access for child teams.
 * 
 * | Type    | Description                                                                                                                                         |
 * | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
 * | `array` | Teams that should no longer have push access. Use the team's `slug`. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param branch - The name of the branch.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const removeTeamAccessRestrictions: ApiHeroEndpoint<
  {
    owner: string;
    branch: string;
    repo: string;
    team?:
      | {
          /**
           * teams parameter
           */
          teams: Array<string>;
        }
      | Array<string>;
  },
  Array<Team>
> = {
  id: "repos/remove-team-access-restrictions",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#list-users-with-access-to-the-protected-branch


* Get users with access to the protected branch
* Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 * 
 * Lists the people who have push access to this branch.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param branch - The name of the branch.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const getUsersWithAccessToProtectedBranch: ApiHeroEndpoint<
  { owner: string; branch: string; repo: string },
  Array<SimpleUser>
> = {
  id: "repos/get-users-with-access-to-protected-branch",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#add-user-access-restrictions


* Add user access restrictions
* Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 * 
 * Grants the specified people push access for this branch.
 * 
 * | Type    | Description                                                                                                                   |
 * | ------- | ----------------------------------------------------------------------------------------------------------------------------- |
 * | `array` | Usernames for people who can have push access. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param branch - The name of the branch.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const addUserAccessRestrictions: ApiHeroEndpoint<
  {
    owner: string;
    branch: string;
    repo: string;
    user?:
      | {
          /**
           * users parameter
           */
          users: Array<string>;
        }
      | Array<string>;
  },
  Array<SimpleUser>
> = {
  id: "repos/add-user-access-restrictions",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#set-user-access-restrictions


* Set user access restrictions
* Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 * 
 * Replaces the list of people that have push access to this branch. This removes all people that previously had push access and grants push access to the new list of people.
 * 
 * | Type    | Description                                                                                                                   |
 * | ------- | ----------------------------------------------------------------------------------------------------------------------------- |
 * | `array` | Usernames for people who can have push access. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param branch - The name of the branch.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const setUserAccessRestrictions: ApiHeroEndpoint<
  {
    owner: string;
    branch: string;
    repo: string;
    restriction?:
      | {
          /**
           * users parameter
           */
          users: Array<string>;
        }
      | Array<string>;
  },
  Array<SimpleUser>
> = {
  id: "repos/set-user-access-restrictions",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#remove-user-access-restrictions


* Remove user access restrictions
* Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 * 
 * Removes the ability of a user to push to this branch.
 * 
 * | Type    | Description                                                                                                                                   |
 * | ------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
 * | `array` | Usernames of the people who should no longer have push access. **Note**: The list of users, apps, and teams in total is limited to 100 items. |
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param branch - The name of the branch.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const removeUserAccessRestrictions: ApiHeroEndpoint<
  {
    owner: string;
    branch: string;
    repo: string;
    user?:
      | {
          /**
           * users parameter
           */
          users: Array<string>;
        }
      | Array<string>;
  },
  Array<SimpleUser>
> = {
  id: "repos/remove-user-access-restrictions",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#get-commit-signature-protection


* Get commit signature protection
* Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 * 
 * When authenticated with admin or owner permissions to the repository, you can use this endpoint to check whether a branch requires signed commits. An enabled status of `true` indicates you must sign commits on this branch. For more information, see [Signing commits with GPG](https://docs.github.com/articles/signing-commits-with-gpg) in GitHub Help.
 * 
 * **Note**: You must enable branch protection to require signed commits.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param branch - The name of the branch.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const getCommitSignatureProtection: ApiHeroEndpoint<
  { owner: string; branch: string; repo: string },
  ProtectedBranchAdminEnforced
> = {
  id: "repos/get-commit-signature-protection",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#create-commit-signature-protection


* Create commit signature protection
* Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 * 
 * When authenticated with admin or owner permissions to the repository, you can use this endpoint to require signed commits on a branch. You must enable branch protection to require signed commits.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param branch - The name of the branch.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const createCommitSignatureProtection: ApiHeroEndpoint<
  { owner: string; branch: string; repo: string },
  ProtectedBranchAdminEnforced
> = {
  id: "repos/create-commit-signature-protection",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#delete-commit-signature-protection


* Delete commit signature protection
* Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 * 
 * When authenticated with admin or owner permissions to the repository, you can use this endpoint to disable required signed commits on a branch. You must enable branch protection to require signed commits.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param branch - The name of the branch.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const deleteCommitSignatureProtection: ApiHeroEndpoint<
  { owner: string; branch: string; repo: string },
  void
> = {
  id: "repos/delete-commit-signature-protection",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#get-a-deployment-status


* Get a deployment status
* Users with pull access can view a deployment status for a deployment:
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param deploymentId - deployment_id parameter
* @param statusId 
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const getDeploymentStatus: ApiHeroEndpoint<
  { owner: string; deploymentId: number; statusId: number; repo: string },
  DeploymentStatus
> = {
  id: "repos/get-deployment-status",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#redeliver-a-delivery-for-a-repository-webhook


* Redeliver a delivery for a repository webhook
* Redeliver a webhook delivery for a webhook configured in a repository.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param deliveryId 
* @param repo - The name of the repository. The name is not case sensitive.
* @param hookId - The unique identifier of the hook. 
*/
export const redeliverWebhookDelivery: ApiHeroEndpoint<
  { owner: string; deliveryId: number; repo: string; hookId: number },
  {}
> = {
  id: "repos/redeliver-webhook-delivery",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#get-status-checks-protection


* Get status checks protection
* Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param branch - The name of the branch.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const getStatusChecksProtection: ApiHeroEndpoint<
  { owner: string; branch: string; repo: string },
  StatusCheckPolicy
> = {
  id: "repos/get-status-checks-protection",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#remove-status-check-protection


* Remove status check protection
* Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param branch - The name of the branch.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const removeStatusCheckProtection: ApiHeroEndpoint<
  { owner: string; branch: string; repo: string },
  void
> = {
  id: "repos/remove-status-check-protection",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#update-status-check-protection


* Update status check protection
* Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 * 
 * Updating required status checks requires admin or owner permissions to the repository and branch protection to be enabled.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param branch - The name of the branch.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const updateStatusCheckProtection: ApiHeroEndpoint<
  {
    owner: string;
    branch: string;
    repo: string;
    protection?: {
      /**
       * The list of status checks to require in order to merge into this branch.
       */
      checks?: Array<{
        /**
         * The ID of the GitHub App that must provide this check. Omit this field to automatically select the GitHub App that has recently provided this check, or any app if it was not set by a GitHub App. Pass -1 to explicitly allow any app to set the status.
         */
        app_id?: number;

        /**
         * The name of the required check
         */
        context: string;
      }>;

      /**
       * Require branches to be up to date before merging.
       */
      strict?: boolean;

      /** 
* **Deprecated**: The list of status checks to require in order to merge into this branch. If any of these checks have recently been set by a particular GitHub App, they will be required to come from that app in future for the branch to merge. Use `checks` instead of `contexts` for more fine-grained control.

* @deprecated
*/
      contexts?: Array<string>;
    };
  },
  StatusCheckPolicy
> = {
  id: "repos/update-status-check-protection",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#get-pull-request-review-protection


* Get pull request review protection
* Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param branch - The name of the branch.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const getPullRequestReviewProtection: ApiHeroEndpoint<
  { owner: string; branch: string; repo: string },
  ProtectedBranchPullRequestReview
> = {
  id: "repos/get-pull-request-review-protection",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#delete-pull-request-review-protection


* Delete pull request review protection
* Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param branch - The name of the branch.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const deletePullRequestReviewProtection: ApiHeroEndpoint<
  { owner: string; branch: string; repo: string },
  void
> = {
  id: "repos/delete-pull-request-review-protection",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#update-pull-request-review-protection


* Update pull request review protection
* Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
 * 
 * Updating pull request review enforcement requires admin or owner permissions to the repository and branch protection to be enabled.
 * 
 * **Note**: Passing new arrays of `users` and `teams` replaces their previous values.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param branch - The name of the branch.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const updatePullRequestReviewProtection: ApiHeroEndpoint<
  {
    owner: string;
    branch: string;
    repo: string;
    protection?: {
      /**
       * Set to `true` if you want to automatically dismiss approving reviews when someone pushes a new commit.
       */
      dismiss_stale_reviews?: boolean;

      /**
       * Specify which users, teams, and apps can dismiss pull request reviews. Pass an empty `dismissal_restrictions` object to disable. User and team `dismissal_restrictions` are only available for organization-owned repositories. Omit this parameter for personal repositories.
       */
      dismissal_restrictions?: {
        /**
         * The list of app `slug`s with dismissal access
         */
        apps?: Array<string>;

        /**
         * The list of team `slug`s with dismissal access
         */
        teams?: Array<string>;

        /**
         * The list of user `login`s with dismissal access
         */
        users?: Array<string>;
      };

      /**
       * Blocks merging pull requests until [code owners](https://docs.github.com/articles/about-code-owners/) have reviewed.
       */
      require_code_owner_reviews?: boolean;

      /**
       * Allow specific users, teams, or apps to bypass pull request requirements.
       */
      bypass_pull_request_allowances?: {
        /**
         * The list of app `slug`s allowed to bypass pull request requirements.
         */
        apps?: Array<string>;

        /**
         * The list of team `slug`s allowed to bypass pull request requirements.
         */
        teams?: Array<string>;

        /**
         * The list of user `login`s allowed to bypass pull request requirements.
         */
        users?: Array<string>;
      };

      /**
       * Specifies the number of reviewers required to approve pull requests. Use a number between 1 and 6 or 0 to not require reviewers.
       */
      required_approving_review_count?: number;
    };
  },
  ProtectedBranchPullRequestReview
> = {
  id: "repos/update-pull-request-review-protection",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#get-all-status-check-contexts


* Get all status check contexts
* Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param branch - The name of the branch.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const getAllStatusCheckContexts: ApiHeroEndpoint<
  { owner: string; branch: string; repo: string },
  Array<string>
> = {
  id: "repos/get-all-status-check-contexts",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#add-status-check-contexts


* Add status check contexts
* Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param branch - The name of the branch.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const addStatusCheckContexts: ApiHeroEndpoint<
  {
    owner: string;
    branch: string;
    repo: string;
    context?:
      | {
          /**
           * contexts parameter
           */
          contexts: Array<string>;
        }
      | Array<string>;
  },
  Array<string>
> = {
  id: "repos/add-status-check-contexts",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#set-status-check-contexts


* Set status check contexts
* Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param branch - The name of the branch.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const setStatusCheckContexts: ApiHeroEndpoint<
  {
    owner: string;
    branch: string;
    repo: string;
    requiredStatusCheck?:
      | {
          /**
           * contexts parameter
           */
          contexts: Array<string>;
        }
      | Array<string>;
  },
  Array<string>
> = {
  id: "repos/set-status-check-contexts",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/repos#remove-status-check-contexts


* Remove status check contexts
* Protected branches are available in public repositories with GitHub Free and GitHub Free for organizations, and in public and private repositories with GitHub Pro, GitHub Team, GitHub Enterprise Cloud, and GitHub Enterprise Server. For more information, see [GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products) in the GitHub Help documentation.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param branch - The name of the branch.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const removeStatusCheckContexts: ApiHeroEndpoint<
  {
    owner: string;
    branch: string;
    repo: string;
    context?:
      | {
          /**
           * contexts parameter
           */
          contexts: Array<string>;
        }
      | Array<string>;
  },
  Array<string>
> = {
  id: "repos/remove-status-check-contexts",
  clientId: "github",
};
