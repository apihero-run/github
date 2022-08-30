import {
  ActionsCacheList,
  ActionsCacheUsageByRepository,
  ActionsCacheUsageOrgEnterprise,
  ActionsEnabled,
  ActionsGetDefaultWorkflowPermissions,
  ActionsOidcCustomIssuerPolicyForEnterprise,
  ActionsOrganizationPermissions,
  ActionsPublicKey,
  ActionsRepositoryPermissions,
  ActionsSecret,
  ActionsSetDefaultWorkflowPermissions,
  ActionsWorkflowAccessToRepository,
  AllowedActions,
  Artifact,
  AuthenticationToken,
  CodeScanningRef,
  Deployment,
  EmptyObject,
  EnabledRepositories,
  EnvironmentApprovals,
  Job,
  MinimalRepository,
  OptOutOidcCustomSub,
  OrganizationActionsSecret,
  PendingDeployment,
  Repository,
  Runner,
  RunnerApplication,
  RunnerGroupsOrg,
  RunnerLabel,
  SelectedActions,
  Workflow,
  WorkflowRun,
  WorkflowRunUsage,
  WorkflowUsage,
  ApiHeroEndpoint,
} from "./@types";

/** 
* @see https://docs.github.com/rest/reference/actions#list-self-hosted-runners-for-an-organization


* List self-hosted runners for an organization
* Lists all self-hosted runners configured in an organization.
 * 
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
* @param org - The organization name. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listSelfHostedRunnersForOrg: ApiHeroEndpoint<
  { org: string; perPage?: number; page?: number },
  {
    runners: Array<Runner>;
    total_count: number;
  },
  { Link: string }
> = {
  id: "actions/list-self-hosted-runners-for-org",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#list-organization-secrets


* List organization secrets
* Lists all secrets available in an organization without revealing their encrypted values. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
* @param org - The organization name. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listOrgSecrets: ApiHeroEndpoint<
  { org: string; perPage?: number; page?: number },
  {
    secrets: Array<OrganizationActionsSecret>;
    total_count: number;
  },
  { Link: string }
> = {
  id: "actions/list-org-secrets",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#get-github-actions-cache-usage-for-an-organization


* Get GitHub Actions cache usage for an organization
* Gets the total GitHub Actions cache usage for an organization.
 * The data fetched using this API is refreshed approximately every 5 minutes, so values returned from this endpoint may take at least 5 minutes to get updated.
 * You must authenticate using an access token with the `read:org` scope to use this endpoint. GitHub Apps must have the `organization_admistration:read` permission to use this endpoint.
* @param org - The organization name. The name is not case sensitive. 
*/
export const getActionsCacheUsageForOrg: ApiHeroEndpoint<
  { org: string },
  ActionsCacheUsageOrgEnterprise,
  { Link: string }
> = {
  id: "actions/get-actions-cache-usage-for-org",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#get-github-actions-permissions-for-an-organization


* Get GitHub Actions permissions for an organization
* Gets the GitHub Actions permissions policy for repositories and allowed actions and reusable workflows in an organization.
 * 
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
* @param org - The organization name. The name is not case sensitive. 
*/
export const getGithubActionsPermissionsOrganization: ApiHeroEndpoint<
  { org: string },
  ActionsOrganizationPermissions
> = {
  id: "actions/get-github-actions-permissions-organization",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#set-github-actions-permissions-for-an-organization


* Set GitHub Actions permissions for an organization
* Sets the GitHub Actions permissions policy for repositories and allowed actions and reusable workflows in an organization.
 * 
 * If the organization belongs to an enterprise that has set restrictive permissions at the enterprise level, such as `allowed_actions` to `selected` actions and reusable workflows, then you cannot override them for the organization.
 * 
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
* @param org - The organization name. The name is not case sensitive. 
*/
export const setGithubActionsPermissionsOrganization: ApiHeroEndpoint<
  {
    org: string;
    action: {
      allowed_actions?: AllowedActions;
      enabled_repositories: EnabledRepositories;
    };
  },
  void
> = {
  id: "actions/set-github-actions-permissions-organization",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#list-self-hosted-runner-groups-for-an-organization


* List self-hosted runner groups for an organization
* The self-hosted runner groups REST API is available with GitHub Enterprise Cloud. For more information, see "[GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products)."
 * 
 * Lists all self-hosted runner groups configured in an organization and inherited from an enterprise.
 * 
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
* @param org - The organization name. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch.
* @param [visibleToRepository] - Only return runner groups that are allowed to be used by this repository. 
*/
export const listSelfHostedRunnerGroupsForOrg: ApiHeroEndpoint<
  { org: string; perPage?: number; page?: number; visibleToRepository?: string },
  {
    total_count: number;
    runner_groups: Array<RunnerGroupsOrg>;
  }
> = {
  id: "actions/list-self-hosted-runner-groups-for-org",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#create-a-self-hosted-runner-group-for-an-organization


* Create a self-hosted runner group for an organization
* The self-hosted runner groups REST API is available with GitHub Enterprise Cloud and GitHub Enterprise Server. For more information, see "[GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products)."
 * 
 * Creates a new self-hosted runner group for an organization.
 * 
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
* @param org - The organization name. The name is not case sensitive. 
*/
export const createSelfHostedRunnerGroupForOrg: ApiHeroEndpoint<
  {
    org: string;
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
       * Visibility of a runner group. You can select all repositories, select individual repositories, or limit access to private repositories.
       */
      visibility?: "selected" | "all" | "private";

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
       * List of repository IDs that can access the runner group.
       * Unique identifier of the repository.
       */
      selected_repository_ids?: Array<number>;

      /**
       * Whether the runner group can be used by `public` repositories.
       */
      allows_public_repositories?: boolean;
    };
  },
  RunnerGroupsOrg
> = {
  id: "actions/create-self-hosted-runner-group-for-org",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#list-workflow-runs-for-a-repository


* List workflow runs for a repository
* Lists all workflow runs for a repository. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/rest/overview/resources-in-the-rest-api#parameters).
 * 
 * Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch.
* @param [branch] - Returns workflow runs associated with a branch. Use the name of the branch of the `push`.
* @param [checkSuiteId] - Returns workflow runs with the `check_suite_id` that you specify.
* @param [excludePullRequests=false] - If `true` pull requests are omitted from the response (empty array).
* @param [created] - Returns workflow runs created within the given date-time range. For more information on the syntax, see "[Understanding the search syntax](https://docs.github.com/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax#query-for-dates)."
* @param [actor] - Returns someone's workflow runs. Use the login for the user who created the `push` associated with the check suite or workflow run.
* @param [status] - Returns workflow runs with the check run `status` or `conclusion` that you specify. For example, a conclusion can be `success` or a status can be `in_progress`. Only GitHub can set a status of `waiting` or `requested`. For a list of the possible `status` and `conclusion` options, see "[Create a check run](https://docs.github.com/rest/reference/checks#create-a-check-run)."
* @param [event] - Returns workflow run triggered by the event you specify. For example, `push`, `pull_request` or `issue`. For more information, see "[Events that trigger workflows](https://docs.github.com/en/actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows)." 
*/
export const listWorkflowRunsForRepo: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
    perPage?: number;
    page?: number;
    branch?: string;
    checkSuiteId?: number;
    excludePullRequests?: boolean;
    created?: string;
    actor?: string;
    status?:
      | "completed"
      | "action_required"
      | "cancelled"
      | "failure"
      | "neutral"
      | "skipped"
      | "stale"
      | "success"
      | "timed_out"
      | "in_progress"
      | "queued"
      | "requested"
      | "waiting";
    event?: string;
  },
  {
    total_count: number;
    workflow_runs: Array<WorkflowRun>;
  },
  { Link: string }
> = {
  id: "actions/list-workflow-runs-for-repo",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/actions/cache#list-github-actions-caches-for-a-repository


* List GitHub Actions caches for a repository
* Lists the GitHub Actions caches for a repository.
 * You must authenticate using an access token with the `repo` scope to use this endpoint.
 * GitHub Apps must have the `actions:read` permission to use this endpoint.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch.
* @param [direction] - The direction to sort the results by.
* @param [key] - An explicit key or prefix for identifying the cache
* @param [sort] - The property to sort the results by. `created_at` means when the cache was created. `last_accessed_at` means when the cache was last accessed. `size_in_bytes` is the size of the cache in bytes.
* @param [ref] - The Git reference for the results you want to list. The `ref` for a branch can be formatted either as `refs/heads/<branch name>` or simply `<branch name>`. To reference a pull request use `refs/pull/<number>/merge`. 
*/
export const getActionsCacheList: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
    perPage?: number;
    page?: number;
    direction?: "asc" | "desc";
    key?: string;
    sort?: "created_at" | "last_accessed_at" | "size_in_bytes";
    ref?: CodeScanningRef;
  },
  ActionsCacheList,
  { Link: string }
> = {
  id: "actions/get-actions-cache-list",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/actions/cache#delete-github-actions-caches-for-a-repository-using-a-cache-key


* Delete GitHub Actions caches for a repository (using a cache key)
* Deletes one or more GitHub Actions caches for a repository, using a complete cache key. By default, all caches that match the provided key are deleted, but you can optionally provide a Git ref to restrict deletions to caches that match both the provided key and the Git ref.
 * 
 * You must authenticate using an access token with the `repo` scope to use this endpoint.
 * 
 * GitHub Apps must have the `actions:write` permission to use this endpoint.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param key - A key for identifying the cache.
* @param repo - The name of the repository. The name is not case sensitive.
* @param [ref] - The Git reference for the results you want to list. The `ref` for a branch can be formatted either as `refs/heads/<branch name>` or simply `<branch name>`. To reference a pull request use `refs/pull/<number>/merge`. 
*/
export const deleteActionsCacheByKey: ApiHeroEndpoint<
  { owner: string; key: string; repo: string; ref?: CodeScanningRef },
  ActionsCacheList
> = {
  id: "actions/delete-actions-cache-by-key",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#list-runner-applications-for-an-organization


* List runner applications for an organization
* Lists binaries for the runner application that you can download and run.
 * 
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
* @param org - The organization name. The name is not case sensitive. 
*/
export const listRunnerApplicationsForOrg: ApiHeroEndpoint<
  { org: string },
  Array<RunnerApplication>
> = {
  id: "actions/list-runner-applications-for-org",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#list-self-hosted-runners-for-a-repository


* List self-hosted runners for a repository
* Lists all self-hosted runners configured in a repository. You must authenticate using an access token with the `repo` scope to use this endpoint.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listSelfHostedRunnersForRepo: ApiHeroEndpoint<
  { owner: string; repo: string; perPage?: number; page?: number },
  {
    runners: Array<Runner>;
    total_count: number;
  },
  { Link: string }
> = {
  id: "actions/list-self-hosted-runners-for-repo",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#list-repository-secrets


* List repository secrets
* Lists all secrets available in a repository without revealing their encrypted values. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listRepoSecrets: ApiHeroEndpoint<
  { owner: string; repo: string; perPage?: number; page?: number },
  {
    secrets: Array<ActionsSecret>;
    total_count: number;
  },
  { Link: string }
> = {
  id: "actions/list-repo-secrets",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#get-an-organization-public-key


* Get an organization public key
* Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
* @param org - The organization name. The name is not case sensitive. 
*/
export const getOrgPublicKey: ApiHeroEndpoint<{ org: string }, ActionsPublicKey> = {
  id: "actions/get-org-public-key",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#get-a-self-hosted-runner-for-an-organization


* Get a self-hosted runner for an organization
* Gets a specific self-hosted runner configured in an organization.
 * 
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
* @param org - The organization name. The name is not case sensitive.
* @param runnerId - Unique identifier of the self-hosted runner. 
*/
export const getSelfHostedRunnerForOrg: ApiHeroEndpoint<{ org: string; runnerId: number }, Runner> =
  {
    id: "actions/get-self-hosted-runner-for-org",
    clientId: "github",
  };

/** 
* @see https://docs.github.com/rest/reference/actions#delete-a-self-hosted-runner-from-an-organization


* Delete a self-hosted runner from an organization
* Forces the removal of a self-hosted runner from an organization. You can use this endpoint to completely remove the runner when the machine you were using no longer exists.
 * 
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
* @param org - The organization name. The name is not case sensitive.
* @param runnerId - Unique identifier of the self-hosted runner. 
*/
export const deleteSelfHostedRunnerFromOrg: ApiHeroEndpoint<
  { org: string; runnerId: number },
  void
> = {
  id: "actions/delete-self-hosted-runner-from-org",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#list-artifacts-for-a-repository


* List artifacts for a repository
* Lists all artifacts for a repository. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listArtifactsForRepo: ApiHeroEndpoint<
  { owner: string; repo: string; perPage?: number; page?: number },
  {
    artifacts: Array<Artifact>;
    total_count: number;
  },
  { Link: string }
> = {
  id: "actions/list-artifacts-for-repo",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#list-repository-workflows


* List repository workflows
* Lists the workflows in a repository. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listRepoWorkflows: ApiHeroEndpoint<
  { owner: string; repo: string; perPage?: number; page?: number },
  {
    workflows: Array<Workflow>;
    total_count: number;
  },
  { Link: string }
> = {
  id: "actions/list-repo-workflows",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#get-default-workflow-permissions


* Get default workflow permissions for an organization
* Gets the default workflow permissions granted to the `GITHUB_TOKEN` when running workflows in an organization,
 * as well as whether GitHub Actions can submit approving pull request reviews. For more information, see
 * "[Setting the permissions of the GITHUB_TOKEN for your organization](https://docs.github.com/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#setting-the-permissions-of-the-github_token-for-your-organization)."
 * 
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
* @param org - The organization name. The name is not case sensitive. 
*/
export const getGithubActionsDefaultWorkflowPermissionsOrganization: ApiHeroEndpoint<
  { org: string },
  ActionsGetDefaultWorkflowPermissions
> = {
  id: "actions/get-github-actions-default-workflow-permissions-organization",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#set-default-workflow-permissions


* Set default workflow permissions for an organization
* Sets the default workflow permissions granted to the `GITHUB_TOKEN` when running workflows in an organization, and sets if GitHub Actions
 * can submit approving pull request reviews. For more information, see
 * "[Setting the permissions of the GITHUB_TOKEN for your organization](https://docs.github.com/organizations/managing-organization-settings/disabling-or-limiting-github-actions-for-your-organization#setting-the-permissions-of-the-github_token-for-your-organization)."
 * 
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
* @param org - The organization name. The name is not case sensitive. 
*/
export const setGithubActionsDefaultWorkflowPermissionsOrganization: ApiHeroEndpoint<
  { org: string; permission?: ActionsSetDefaultWorkflowPermissions },
  void
> = {
  id: "actions/set-github-actions-default-workflow-permissions-organization",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#create-a-remove-token-for-an-organization


* Create a remove token for an organization
* Returns a token that you can pass to the `config` script to remove a self-hosted runner from an organization. The token expires after one hour.
 * 
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
 * 
 * #### Example using remove token
 * 
 * To remove your self-hosted runner from an organization, replace `TOKEN` with the remove token provided by this
 * endpoint.
 * 
 * ```
 * ./config.sh remove --token TOKEN
 * ```
* @param org - The organization name. The name is not case sensitive. 
*/
export const createRemoveTokenForOrg: ApiHeroEndpoint<{ org: string }, AuthenticationToken> = {
  id: "actions/create-remove-token-for-org",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#get-an-organization-secret


* Get an organization secret
* Gets a single organization secret without revealing its encrypted value. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
* @param org - The organization name. The name is not case sensitive.
* @param secretName - The name of the secret. 
*/
export const getOrgSecret: ApiHeroEndpoint<
  { org: string; secretName: string },
  OrganizationActionsSecret
> = {
  id: "actions/get-org-secret",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#create-or-update-an-organization-secret


* Create or update an organization secret
* Creates or updates an organization secret with an encrypted value. Encrypt your secret using
 * [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). You must authenticate using an access
 * token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to
 * use this endpoint.
 * 
 * #### Example encrypting a secret using Node.js
 * 
 * Encrypt your secret using the [tweetsodium](https://github.com/github/tweetsodium) library.
 * 
 * ```
 * const sodium = require('tweetsodium');
 * 
 * const key = "base64-encoded-public-key";
 * const value = "plain-text-secret";
 * 
 * // Convert the message and key to Uint8Array's (Buffer implements that interface)
 * const messageBytes = Buffer.from(value);
 * const keyBytes = Buffer.from(key, 'base64');
 * 
 * // Encrypt using LibSodium.
 * const encryptedBytes = sodium.seal(messageBytes, keyBytes);
 * 
 * // Base64 the encrypted secret
 * const encrypted = Buffer.from(encryptedBytes).toString('base64');
 * 
 * console.log(encrypted);
 * ```
 * 
 * 
 * #### Example encrypting a secret using Python
 * 
 * Encrypt your secret using [pynacl](https://pynacl.readthedocs.io/en/latest/public/#nacl-public-sealedbox) with Python 3.
 * 
 * ```
 * from base64 import b64encode
 * from nacl import encoding, public
 * 
 * def encrypt(public_key: str, secret_value: str) -> str:
 * """Encrypt a Unicode string using the public key."""
 * public_key = public.PublicKey(public_key.encode("utf-8"), encoding.Base64Encoder())
 * sealed_box = public.SealedBox(public_key)
 * encrypted = sealed_box.encrypt(secret_value.encode("utf-8"))
 * return b64encode(encrypted).decode("utf-8")
 * ```
 * 
 * #### Example encrypting a secret using C#
 * 
 * Encrypt your secret using the [Sodium.Core](https://www.nuget.org/packages/Sodium.Core/) package.
 * 
 * ```
 * var secretValue = System.Text.Encoding.UTF8.GetBytes("mySecret");
 * var publicKey = Convert.FromBase64String("2Sg8iYjAxxmI2LvUXpJjkYrMxURPc8r+dB7TJyvvcCU=");
 * 
 * var sealedPublicKeyBox = Sodium.SealedPublicKeyBox.Create(secretValue, publicKey);
 * 
 * Console.WriteLine(Convert.ToBase64String(sealedPublicKeyBox));
 * ```
 * 
 * #### Example encrypting a secret using Ruby
 * 
 * Encrypt your secret using the [rbnacl](https://github.com/RubyCrypto/rbnacl) gem.
 * 
 * ```ruby
 * require "rbnacl"
 * require "base64"
 * 
 * key = Base64.decode64("+ZYvJDZMHUfBkJdyq5Zm9SKqeuBQ4sj+6sfjlH4CgG0=")
 * public_key = RbNaCl::PublicKey.new(key)
 * 
 * box = RbNaCl::Boxes::Sealed.from_public_key(public_key)
 * encrypted_secret = box.encrypt("my_secret")
 * 
 * # Print the base64 encoded secret
 * puts Base64.strict_encode64(encrypted_secret)
 * ```
* @param org - The organization name. The name is not case sensitive.
* @param secretName - The name of the secret. 
*/
export const createOrUpdateOrgSecret: ApiHeroEndpoint<
  {
    org: string;
    secretName: string;
    secret: {
      /**
       * ID of the key you used to encrypt the secret.
       */
      key_id?: string;

      /**
       * Which type of organization repositories have access to the organization secret. `selected` means only the repositories specified by `selected_repository_ids` can access the secret.
       */
      visibility: "all" | "private" | "selected";

      /**
       * Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get an organization public key](https://docs.github.com/rest/reference/actions#get-an-organization-public-key) endpoint.
       */
      encrypted_value?: string;

      /**
       * An array of repository ids that can access the organization secret. You can only provide a list of repository ids when the `visibility` is set to `selected`. You can manage the list of selected repositories using the [List selected repositories for an organization secret](https://docs.github.com/rest/reference/actions#list-selected-repositories-for-an-organization-secret), [Set selected repositories for an organization secret](https://docs.github.com/rest/reference/actions#set-selected-repositories-for-an-organization-secret), and [Remove selected repository from an organization secret](https://docs.github.com/rest/reference/actions#remove-selected-repository-from-an-organization-secret) endpoints.
       */
      selected_repository_ids?: Array<number>;
    };
  },
  EmptyObject
> = {
  id: "actions/create-or-update-org-secret",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#delete-an-organization-secret


* Delete an organization secret
* Deletes a secret in an organization using the secret name. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
* @param org - The organization name. The name is not case sensitive.
* @param secretName - The name of the secret. 
*/
export const deleteOrgSecret: ApiHeroEndpoint<{ org: string; secretName: string }, void> = {
  id: "actions/delete-org-secret",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#get-github-actions-cache-usage-for-a-repository


* Get GitHub Actions cache usage for a repository
* Gets GitHub Actions cache usage for a repository.
 * The data fetched using this API is refreshed approximately every 5 minutes, so values returned from this endpoint may take at least 5 minutes to get updated.
 * Anyone with read access to the repository can use this endpoint. If the repository is private, you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const getActionsCacheUsage: ApiHeroEndpoint<
  { owner: string; repo: string },
  ActionsCacheUsageByRepository
> = {
  id: "actions/get-actions-cache-usage",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#get-github-actions-permissions-for-a-repository


* Get GitHub Actions permissions for a repository
* Gets the GitHub Actions permissions policy for a repository, including whether GitHub Actions is enabled and the actions and reusable workflows allowed to run in the repository.
 * 
 * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration` repository permission to use this API.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const getGithubActionsPermissionsRepository: ApiHeroEndpoint<
  { owner: string; repo: string },
  ActionsRepositoryPermissions
> = {
  id: "actions/get-github-actions-permissions-repository",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#set-github-actions-permissions-for-a-repository


* Set GitHub Actions permissions for a repository
* Sets the GitHub Actions permissions policy for enabling GitHub Actions and allowed actions and reusable workflows in the repository.
 * 
 * If the repository belongs to an organization or enterprise that has set restrictive permissions at the organization or enterprise levels, such as `allowed_actions` to `selected` actions and reusable workflows, then you cannot override them for the repository.
 * 
 * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration` repository permission to use this API.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const setGithubActionsPermissionsRepository: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
    action: {
      enabled: ActionsEnabled;
      allowed_actions?: AllowedActions;
    };
  },
  void
> = {
  id: "actions/set-github-actions-permissions-repository",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#get-a-job-for-a-workflow-run


* Get a job for a workflow run
* Gets a specific job in a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param jobId - The unique identifier of the job.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const getJobForWorkflowRun: ApiHeroEndpoint<
  { owner: string; jobId: number; repo: string },
  Job
> = {
  id: "actions/get-job-for-workflow-run",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#get-a-workflow-run


* Get a workflow run
* Gets a specific workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param runId - The unique identifier of the workflow run.
* @param repo - The name of the repository. The name is not case sensitive.
* @param [excludePullRequests=false] - If `true` pull requests are omitted from the response (empty array). 
*/
export const getWorkflowRun: ApiHeroEndpoint<
  { owner: string; runId: number; repo: string; excludePullRequests?: boolean },
  WorkflowRun
> = {
  id: "actions/get-workflow-run",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#delete-a-workflow-run


* Delete a workflow run
* Delete a specific workflow run. Anyone with write access to the repository can use this endpoint. If the repository is
 * private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:write` permission to use
 * this endpoint.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param runId - The unique identifier of the workflow run.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const deleteWorkflowRun: ApiHeroEndpoint<
  { owner: string; runId: number; repo: string },
  void
> = {
  id: "actions/delete-workflow-run",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#list-selected-repositories-enabled-for-github-actions-in-an-organization


* List selected repositories enabled for GitHub Actions in an organization
* Lists the selected repositories that are enabled for GitHub Actions in an organization. To use this endpoint, the organization permission policy for `enabled_repositories` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)."
 * 
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
* @param org - The organization name. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listSelectedRepositoriesEnabledGithubActionsOrganization: ApiHeroEndpoint<
  { org: string; perPage?: number; page?: number },
  {
    total_count: number;
    repositories: Array<Repository>;
  }
> = {
  id: "actions/list-selected-repositories-enabled-github-actions-organization",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#set-selected-repositories-enabled-for-github-actions-in-an-organization


* Set selected repositories enabled for GitHub Actions in an organization
* Replaces the list of selected repositories that are enabled for GitHub Actions in an organization. To use this endpoint, the organization permission policy for `enabled_repositories` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)."
 * 
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
* @param org - The organization name. The name is not case sensitive. 
*/
export const setSelectedRepositoriesEnabledGithubActionsOrganization: ApiHeroEndpoint<
  {
    org: string;
    permission: {
      /**
       * List of repository IDs to enable for GitHub Actions.
       * Unique identifier of the repository.
       */
      selected_repository_ids: Array<number>;
    };
  },
  void
> = {
  id: "actions/set-selected-repositories-enabled-github-actions-organization",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#get-github-actions-cache-usage-for-an-enterprise


* Get GitHub Actions cache usage for an enterprise
* Gets the total GitHub Actions cache usage for an enterprise.
 * The data fetched using this API is refreshed approximately every 5 minutes, so values returned from this endpoint may take at least 5 minutes to get updated.
 * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
* @param enterprise - The slug version of the enterprise name. You can also substitute this value with the enterprise id. 
*/
export const getActionsCacheUsageForEnterprise: ApiHeroEndpoint<
  { enterprise: string },
  ActionsCacheUsageOrgEnterprise,
  { Link: string }
> = {
  id: "actions/get-actions-cache-usage-for-enterprise",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#list-repositories-with-github-actions-cache-usage-for-an-organization


* List repositories with GitHub Actions cache usage for an organization
* Lists repositories and their GitHub Actions cache usage for an organization.
 * The data fetched using this API is refreshed approximately every 5 minutes, so values returned from this endpoint may take at least 5 minutes to get updated.
 * You must authenticate using an access token with the `read:org` scope to use this endpoint. GitHub Apps must have the `organization_admistration:read` permission to use this endpoint.
* @param org - The organization name. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const getActionsCacheUsageByRepoForOrg: ApiHeroEndpoint<
  { org: string; perPage?: number; page?: number },
  {
    total_count: number;
    repository_cache_usages: Array<ActionsCacheUsageByRepository>;
  },
  { Link: string }
> = {
  id: "actions/get-actions-cache-usage-by-repo-for-org",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#create-a-registration-token-for-an-organization


* Create a registration token for an organization
* Returns a token that you can pass to the `config` script. The token expires after one hour.
 * 
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
 * 
 * #### Example using registration token
 * 
 * Configure your self-hosted runner, replacing `TOKEN` with the registration token provided by this endpoint.
 * 
 * ```
 * ./config.sh --url https://github.com/octo-org --token TOKEN
 * ```
* @param org - The organization name. The name is not case sensitive. 
*/
export const createRegistrationTokenForOrg: ApiHeroEndpoint<{ org: string }, AuthenticationToken> =
  {
    id: "actions/create-registration-token-for-org",
    clientId: "github",
  };

/** 
* @see https://docs.github.com/rest/reference/actions#list-labels-for-a-self-hosted-runner-for-an-organization


* List labels for a self-hosted runner for an organization
* Lists all labels for a self-hosted runner configured in an organization.
 * 
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
* @param org - The organization name. The name is not case sensitive.
* @param runnerId - Unique identifier of the self-hosted runner. 
*/
export const listLabelsForSelfHostedRunnerForOrg: ApiHeroEndpoint<
  { org: string; runnerId: number },
  {
    labels: Array<RunnerLabel>;
    total_count: number;
  }
> = {
  id: "actions/list-labels-for-self-hosted-runner-for-org",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#add-custom-labels-to-a-self-hosted-runner-for-an-organization


* Add custom labels to a self-hosted runner for an organization
* Add custom labels to a self-hosted runner configured in an organization.
 * 
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
* @param org - The organization name. The name is not case sensitive.
* @param runnerId - Unique identifier of the self-hosted runner. 
*/
export const addCustomLabelsToSelfHostedRunnerForOrg: ApiHeroEndpoint<
  {
    org: string;
    runnerId: number;
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
  id: "actions/add-custom-labels-to-self-hosted-runner-for-org",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#set-custom-labels-for-a-self-hosted-runner-for-an-organization


* Set custom labels for a self-hosted runner for an organization
* Remove all previous custom labels and set the new custom labels for a specific
 * self-hosted runner configured in an organization.
 * 
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
* @param org - The organization name. The name is not case sensitive.
* @param runnerId - Unique identifier of the self-hosted runner. 
*/
export const setCustomLabelsForSelfHostedRunnerForOrg: ApiHeroEndpoint<
  {
    org: string;
    runnerId: number;
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
  id: "actions/set-custom-labels-for-self-hosted-runner-for-org",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#remove-all-custom-labels-from-a-self-hosted-runner-for-an-organization


* Remove all custom labels from a self-hosted runner for an organization
* Remove all custom labels from a self-hosted runner configured in an
 * organization. Returns the remaining read-only labels from the runner.
 * 
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
* @param org - The organization name. The name is not case sensitive.
* @param runnerId - Unique identifier of the self-hosted runner. 
*/
export const removeAllCustomLabelsFromSelfHostedRunnerForOrg: ApiHeroEndpoint<
  { org: string; runnerId: number },
  {
    labels: Array<RunnerLabel>;
    total_count: number;
  }
> = {
  id: "actions/remove-all-custom-labels-from-self-hosted-runner-for-org",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/actions/cache#delete-a-github-actions-cache-for-a-repository-using-a-cache-id


* Delete a GitHub Actions cache for a repository (using a cache ID)
* Deletes a GitHub Actions cache for a repository, using a cache ID.
 * 
 * You must authenticate using an access token with the `repo` scope to use this endpoint.
 * 
 * GitHub Apps must have the `actions:write` permission to use this endpoint.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param cacheId - The unique identifier of the GitHub Actions cache.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const deleteActionsCacheById: ApiHeroEndpoint<
  { owner: string; cacheId: number; repo: string },
  void
> = {
  id: "actions/delete-actions-cache-by-id",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#list-runner-applications-for-a-repository


* List runner applications for a repository
* Lists binaries for the runner application that you can download and run.
 * 
 * You must authenticate using an access token with the `repo` scope to use this endpoint.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const listRunnerApplicationsForRepo: ApiHeroEndpoint<
  { owner: string; repo: string },
  Array<RunnerApplication>
> = {
  id: "actions/list-runner-applications-for-repo",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#get-allowed-actions-for-an-organization


* Get allowed actions and reusable workflows for an organization
* Gets the selected actions and reusable workflows that are allowed in an organization. To use this endpoint, the organization permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization).""
 * 
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
* @param org - The organization name. The name is not case sensitive. 
*/
export const getAllowedActionsOrganization: ApiHeroEndpoint<{ org: string }, SelectedActions> = {
  id: "actions/get-allowed-actions-organization",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#set-allowed-actions-for-an-organization


* Set allowed actions and reusable workflows for an organization
* Sets the actions and reusable workflows that are allowed in an organization. To use this endpoint, the organization permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)."
 * 
 * If the organization belongs to an enterprise that has `selected` actions and reusable workflows set at the enterprise level, then you cannot override any of the enterprise's allowed actions and reusable workflows settings.
 * 
 * To use the `patterns_allowed` setting for private repositories, the organization must belong to an enterprise. If the organization does not belong to an enterprise, then the `patterns_allowed` setting only applies to public repositories in the organization.
 * 
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
* @param org - The organization name. The name is not case sensitive. 
*/
export const setAllowedActionsOrganization: ApiHeroEndpoint<
  { org: string; permission?: SelectedActions },
  void
> = {
  id: "actions/set-allowed-actions-organization",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#download-job-logs-for-a-workflow-run


* Download job logs for a workflow run
* Gets a redirect URL to download a plain text file of logs for a workflow job. This link expires after 1 minute. Look
 * for `Location:` in the response header to find the URL for the download. Anyone with read access to the repository can
 * use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must
 * have the `actions:read` permission to use this endpoint.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param jobId - The unique identifier of the job.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const downloadJobLogsForWorkflowRun: ApiHeroEndpoint<
  { owner: string; jobId: number; repo: string },
  void
> = {
  id: "actions/download-job-logs-for-workflow-run",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#get-workflow-access-level-to-a-repository


* Get the level of access for workflows outside of the repository
* Gets the level of access that workflows outside of the repository have to actions and reusable workflows in the repository.
 * This endpoint only applies to internal repositories. For more information, see "[Managing GitHub Actions settings for a repository](https://docs.github.com/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#allowing-access-to-components-in-an-internal-repository)."
 * 
 * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the
 * repository `administration` permission to use this endpoint.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const getWorkflowAccessToRepository: ApiHeroEndpoint<
  { owner: string; repo: string },
  ActionsWorkflowAccessToRepository
> = {
  id: "actions/get-workflow-access-to-repository",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#set-workflow-access-to-a-repository


* Set the level of access for workflows outside of the repository
* Sets the level of access that workflows outside of the repository have to actions and reusable workflows in the repository.
 * This endpoint only applies to internal repositories. For more information, see "[Managing GitHub Actions settings for a repository](https://docs.github.com/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#allowing-access-to-components-in-an-internal-repository)."
 * 
 * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the
 * repository `administration` permission to use this endpoint.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const setWorkflowAccessToRepository: ApiHeroEndpoint<
  { owner: string; repo: string; permission: ActionsWorkflowAccessToRepository },
  void
> = {
  id: "actions/set-workflow-access-to-repository",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#list-jobs-for-a-workflow-run


* List jobs for a workflow run
* Lists jobs for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/rest/overview/resources-in-the-rest-api#parameters).
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param runId - The unique identifier of the workflow run.
* @param repo - The name of the repository. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch.
* @param [filter] - Filters jobs by their `completed_at` timestamp. `latest` returns jobs from the most recent execution of the workflow run. `all` returns all jobs for a workflow run, including from old executions of the workflow run. 
*/
export const listJobsForWorkflowRun: ApiHeroEndpoint<
  {
    owner: string;
    runId: number;
    repo: string;
    perPage?: number;
    page?: number;
    filter?: "latest" | "all";
  },
  {
    jobs: Array<Job>;
    total_count: number;
  },
  { Link: string }
> = {
  id: "actions/list-jobs-for-workflow-run",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#download-workflow-run-logs


* Download workflow run logs
* Gets a redirect URL to download an archive of log files for a workflow run. This link expires after 1 minute. Look for
 * `Location:` in the response header to find the URL for the download. Anyone with read access to the repository can use
 * this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have
 * the `actions:read` permission to use this endpoint.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param runId - The unique identifier of the workflow run.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const downloadWorkflowRunLogs: ApiHeroEndpoint<
  { owner: string; runId: number; repo: string },
  void
> = {
  id: "actions/download-workflow-run-logs",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#delete-workflow-run-logs


* Delete workflow run logs
* Deletes all logs for a workflow run. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param runId - The unique identifier of the workflow run.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const deleteWorkflowRunLogs: ApiHeroEndpoint<
  { owner: string; runId: number; repo: string },
  void
> = {
  id: "actions/delete-workflow-run-logs",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#get-a-repository-public-key


* Get a repository public key
* Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `secrets` repository permission to use this endpoint.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const getRepoPublicKey: ApiHeroEndpoint<{ owner: string; repo: string }, ActionsPublicKey> =
  {
    id: "actions/get-repo-public-key",
    clientId: "github",
  };

/** 
* @see https://docs.github.com/rest/reference/actions#re-run-job-for-workflow-run


* Re-run a job from a workflow run
* Re-run a job and its dependent jobs in a workflow run. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param jobId - The unique identifier of the job.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const reRunJobForWorkflowRun: ApiHeroEndpoint<
  {
    owner: string;
    jobId: number;
    repo: string;
    rerun?: {
      /**
       * Whether to enable debug logging for the re-run.
       */
      enable_debug_logging?: boolean;
    } | null;
  },
  EmptyObject
> = {
  id: "actions/re-run-job-for-workflow-run",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#get-a-self-hosted-runner-for-a-repository


* Get a self-hosted runner for a repository
* Gets a specific self-hosted runner configured in a repository.
 * 
 * You must authenticate using an access token with the `repo` scope to use this
 * endpoint.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param runnerId - Unique identifier of the self-hosted runner.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const getSelfHostedRunnerForRepo: ApiHeroEndpoint<
  { owner: string; runnerId: number; repo: string },
  Runner
> = {
  id: "actions/get-self-hosted-runner-for-repo",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#delete-a-self-hosted-runner-from-a-repository


* Delete a self-hosted runner from a repository
* Forces the removal of a self-hosted runner from a repository. You can use this endpoint to completely remove the runner when the machine you were using no longer exists.
 * 
 * You must authenticate using an access token with the `repo`
 * scope to use this endpoint.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param runnerId - Unique identifier of the self-hosted runner.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const deleteSelfHostedRunnerFromRepo: ApiHeroEndpoint<
  { owner: string; runnerId: number; repo: string },
  void
> = {
  id: "actions/delete-self-hosted-runner-from-repo",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#re-run-a-workflow


* Re-run a workflow
* Re-runs your workflow run using its `id`. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param runId - The unique identifier of the workflow run.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const reRunWorkflow: ApiHeroEndpoint<
  {
    owner: string;
    runId: number;
    repo: string;
    rerun?: {
      /**
       * Whether to enable debug logging for the re-run.
       */
      enable_debug_logging?: boolean;
    } | null;
  },
  {}
> = {
  id: "actions/re-run-workflow",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#get-default-workflow-permissions-for-a-repository


* Get default workflow permissions for a repository
* Gets the default workflow permissions granted to the `GITHUB_TOKEN` when running workflows in a repository,
 * as well as if GitHub Actions can submit approving pull request reviews.
 * For more information, see "[Setting the permissions of the GITHUB_TOKEN for your repository](https://docs.github.com/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#setting-the-permissions-of-the-github_token-for-your-repository)."
 * 
 * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the repository `administration` permission to use this API.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const getGithubActionsDefaultWorkflowPermissionsRepository: ApiHeroEndpoint<
  { owner: string; repo: string },
  ActionsGetDefaultWorkflowPermissions
> = {
  id: "actions/get-github-actions-default-workflow-permissions-repository",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#set-default-workflow-permissions-for-a-repository


* Set default workflow permissions for a repository
* Sets the default workflow permissions granted to the `GITHUB_TOKEN` when running workflows in a repository, and sets if GitHub Actions
 * can submit approving pull request reviews.
 * For more information, see "[Setting the permissions of the GITHUB_TOKEN for your repository](https://docs.github.com/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#setting-the-permissions-of-the-github_token-for-your-repository)."
 * 
 * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the repository `administration` permission to use this API.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const setGithubActionsDefaultWorkflowPermissionsRepository: ApiHeroEndpoint<
  { owner: string; repo: string; permission: ActionsSetDefaultWorkflowPermissions },
  void
> = {
  id: "actions/set-github-actions-default-workflow-permissions-repository",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#create-a-remove-token-for-a-repository


* Create a remove token for a repository
* Returns a token that you can pass to remove a self-hosted runner from a repository. The token expires after one hour.
 * You must authenticate using an access token with the `repo` scope to use this endpoint.
 * 
 * #### Example using remove token
 * 
 * To remove your self-hosted runner from a repository, replace TOKEN with the remove token provided by this endpoint.
 * 
 * ```
 * ./config.sh remove --token TOKEN
 * ```
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const createRemoveTokenForRepo: ApiHeroEndpoint<
  { owner: string; repo: string },
  AuthenticationToken
> = {
  id: "actions/create-remove-token-for-repo",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#cancel-a-workflow-run


* Cancel a workflow run
* Cancels a workflow run using its `id`. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param runId - The unique identifier of the workflow run.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const cancelWorkflowRun: ApiHeroEndpoint<
  { owner: string; runId: number; repo: string },
  {}
> = {
  id: "actions/cancel-workflow-run",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#get-workflow-run-usage


* Get workflow run usage
* Gets the number of billable minutes and total run time for a specific workflow run. Billable minutes only apply to workflows in private repositories that use GitHub-hosted runners. Usage is listed for each GitHub-hosted runner operating system in milliseconds. Any job re-runs are also included in the usage. The usage does not include the multiplier for macOS and Windows runners and is not rounded up to the nearest whole minute. For more information, see "[Managing billing for GitHub Actions](https://docs.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)".
 * 
 * Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param runId - The unique identifier of the workflow run.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const getWorkflowRunUsage: ApiHeroEndpoint<
  { owner: string; runId: number; repo: string },
  WorkflowRunUsage
> = {
  id: "actions/get-workflow-run-usage",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#get-a-self-hosted-runner-group-for-an-organization


* Get a self-hosted runner group for an organization
* The self-hosted runner groups REST API is available with GitHub Enterprise Cloud. For more information, see "[GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products)."
 * 
 * Gets a specific self-hosted runner group for an organization.
 * 
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
* @param org - The organization name. The name is not case sensitive.
* @param runnerGroupId - Unique identifier of the self-hosted runner group. 
*/
export const getSelfHostedRunnerGroupForOrg: ApiHeroEndpoint<
  { org: string; runnerGroupId: number },
  RunnerGroupsOrg
> = {
  id: "actions/get-self-hosted-runner-group-for-org",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#delete-a-self-hosted-runner-group-from-an-organization


* Delete a self-hosted runner group from an organization
* The self-hosted runner groups REST API is available with GitHub Enterprise Cloud. For more information, see "[GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products)."
 * 
 * Deletes a self-hosted runner group for an organization.
 * 
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
* @param org - The organization name. The name is not case sensitive.
* @param runnerGroupId - Unique identifier of the self-hosted runner group. 
*/
export const deleteSelfHostedRunnerGroupFromOrg: ApiHeroEndpoint<
  { org: string; runnerGroupId: number },
  void
> = {
  id: "actions/delete-self-hosted-runner-group-from-org",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#update-a-self-hosted-runner-group-for-an-organization


* Update a self-hosted runner group for an organization
* The self-hosted runner groups REST API is available with GitHub Enterprise Cloud. For more information, see "[GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products)."
 * 
 * Updates the `name` and `visibility` of a self-hosted runner group in an organization.
 * 
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
* @param org - The organization name. The name is not case sensitive.
* @param runnerGroupId - Unique identifier of the self-hosted runner group. 
*/
export const updateSelfHostedRunnerGroupForOrg: ApiHeroEndpoint<
  {
    org: string;
    runnerGroupId: number;
    runnerGroup: {
      /**
       * Name of the runner group.
       */
      name: string;

      /**
       * Visibility of a runner group. You can select all repositories, select individual repositories, or all private repositories.
       */
      visibility?: "selected" | "all" | "private";

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
  RunnerGroupsOrg
> = {
  id: "actions/update-self-hosted-runner-group-for-org",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#approve-a-workflow-run-for-a-fork-pull-request


* Approve a workflow run for a fork pull request
* Approves a workflow run for a pull request from a public fork of a first time contributor. For more information, see ["Approving workflow runs from public forks](https://docs.github.com/actions/managing-workflow-runs/approving-workflow-runs-from-public-forks)."
 * 
 * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param runId - The unique identifier of the workflow run.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const approveWorkflowRun: ApiHeroEndpoint<
  { owner: string; runId: number; repo: string },
  EmptyObject
> = {
  id: "actions/approve-workflow-run",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#get-a-repository-secret


* Get a repository secret
* Gets a single repository secret without revealing its encrypted value. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param secretName - The name of the secret.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const getRepoSecret: ApiHeroEndpoint<
  { owner: string; secretName: string; repo: string },
  ActionsSecret
> = {
  id: "actions/get-repo-secret",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#create-or-update-a-repository-secret


* Create or update a repository secret
* Creates or updates a repository secret with an encrypted value. Encrypt your secret using
 * [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). You must authenticate using an access
 * token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use
 * this endpoint.
 * 
 * #### Example encrypting a secret using Node.js
 * 
 * Encrypt your secret using the [tweetsodium](https://github.com/github/tweetsodium) library.
 * 
 * ```
 * const sodium = require('tweetsodium');
 * 
 * const key = "base64-encoded-public-key";
 * const value = "plain-text-secret";
 * 
 * // Convert the message and key to Uint8Array's (Buffer implements that interface)
 * const messageBytes = Buffer.from(value);
 * const keyBytes = Buffer.from(key, 'base64');
 * 
 * // Encrypt using LibSodium.
 * const encryptedBytes = sodium.seal(messageBytes, keyBytes);
 * 
 * // Base64 the encrypted secret
 * const encrypted = Buffer.from(encryptedBytes).toString('base64');
 * 
 * console.log(encrypted);
 * ```
 * 
 * 
 * #### Example encrypting a secret using Python
 * 
 * Encrypt your secret using [pynacl](https://pynacl.readthedocs.io/en/latest/public/#nacl-public-sealedbox) with Python 3.
 * 
 * ```
 * from base64 import b64encode
 * from nacl import encoding, public
 * 
 * def encrypt(public_key: str, secret_value: str) -> str:
 * """Encrypt a Unicode string using the public key."""
 * public_key = public.PublicKey(public_key.encode("utf-8"), encoding.Base64Encoder())
 * sealed_box = public.SealedBox(public_key)
 * encrypted = sealed_box.encrypt(secret_value.encode("utf-8"))
 * return b64encode(encrypted).decode("utf-8")
 * ```
 * 
 * #### Example encrypting a secret using C#
 * 
 * Encrypt your secret using the [Sodium.Core](https://www.nuget.org/packages/Sodium.Core/) package.
 * 
 * ```
 * var secretValue = System.Text.Encoding.UTF8.GetBytes("mySecret");
 * var publicKey = Convert.FromBase64String("2Sg8iYjAxxmI2LvUXpJjkYrMxURPc8r+dB7TJyvvcCU=");
 * 
 * var sealedPublicKeyBox = Sodium.SealedPublicKeyBox.Create(secretValue, publicKey);
 * 
 * Console.WriteLine(Convert.ToBase64String(sealedPublicKeyBox));
 * ```
 * 
 * #### Example encrypting a secret using Ruby
 * 
 * Encrypt your secret using the [rbnacl](https://github.com/RubyCrypto/rbnacl) gem.
 * 
 * ```ruby
 * require "rbnacl"
 * require "base64"
 * 
 * key = Base64.decode64("+ZYvJDZMHUfBkJdyq5Zm9SKqeuBQ4sj+6sfjlH4CgG0=")
 * public_key = RbNaCl::PublicKey.new(key)
 * 
 * box = RbNaCl::Boxes::Sealed.from_public_key(public_key)
 * encrypted_secret = box.encrypt("my_secret")
 * 
 * # Print the base64 encoded secret
 * puts Base64.strict_encode64(encrypted_secret)
 * ```
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param secretName - The name of the secret.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const createOrUpdateRepoSecret: ApiHeroEndpoint<
  {
    owner: string;
    secretName: string;
    repo: string;
    secret: {
      /**
       * ID of the key you used to encrypt the secret.
       */
      key_id?: string;

      /**
       * Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get a repository public key](https://docs.github.com/rest/reference/actions#get-a-repository-public-key) endpoint.
       */
      encrypted_value?: string;
    };
  },
  {}
> = {
  id: "actions/create-or-update-repo-secret",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#delete-a-repository-secret


* Delete a repository secret
* Deletes a secret in a repository using the secret name. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param secretName - The name of the secret.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const deleteRepoSecret: ApiHeroEndpoint<
  { owner: string; secretName: string; repo: string },
  void
> = {
  id: "actions/delete-repo-secret",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/actions/oidc#get-the-opt-out-flag-of-an-oidc-subject-claim-customization-for-a-repository


* Get the opt-out flag of an OIDC subject claim customization for a repository
* Gets the `opt-out` flag of a GitHub Actions OpenID Connect (OIDC) subject claim customization for a repository.
 * You must authenticate using an access token with the `repo` scope to use this
 * endpoint. GitHub Apps must have the `organization_administration:read` permission to use this endpoint.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const getCustomOidcSubClaimForRepo: ApiHeroEndpoint<
  { owner: string; repo: string },
  OptOutOidcCustomSub
> = {
  id: "actions/get-custom-oidc-sub-claim-for-repo",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/actions/oidc#set-the-opt-out-flag-of-an-oidc-subject-claim-customization-for-a-repository


* Set the opt-out flag of an OIDC subject claim customization for a repository
* Sets the `opt-out` flag of a GitHub Actions OpenID Connect (OIDC) subject claim customization for a repository.
 * You must authenticate using an access token with the `repo` scope to use this
 * endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const setCustomOidcSubClaimForRepo: ApiHeroEndpoint<
  { owner: string; repo: string; customization: OptOutOidcCustomSub },
  EmptyObject
> = {
  id: "actions/set-custom-oidc-sub-claim-for-repo",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#remove-a-custom-label-from-a-self-hosted-runner-for-an-organization


* Remove a custom label from a self-hosted runner for an organization
* Remove a custom label from a self-hosted runner configured
 * in an organization. Returns the remaining labels from the runner.
 * 
 * This endpoint returns a `404 Not Found` status if the custom label is not
 * present on the runner.
 * 
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
* @param org - The organization name. The name is not case sensitive.
* @param name - The name of a self-hosted runner's custom label.
* @param runnerId - Unique identifier of the self-hosted runner. 
*/
export const removeCustomLabelFromSelfHostedRunnerForOrg: ApiHeroEndpoint<
  { org: string; name: string; runnerId: number },
  {
    labels: Array<RunnerLabel>;
    total_count: number;
  }
> = {
  id: "actions/remove-custom-label-from-self-hosted-runner-for-org",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#get-an-artifact


* Get an artifact
* Gets a specific artifact for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param artifactId - The unique identifier of the artifact.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const getArtifact: ApiHeroEndpoint<
  { owner: string; artifactId: number; repo: string },
  Artifact
> = {
  id: "actions/get-artifact",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#delete-an-artifact


* Delete an artifact
* Deletes an artifact for a workflow run. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param artifactId - The unique identifier of the artifact.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const deleteArtifact: ApiHeroEndpoint<
  { owner: string; artifactId: number; repo: string },
  void
> = {
  id: "actions/delete-artifact",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#get-the-review-history-for-a-workflow-run


* Get the review history for a workflow run
* Anyone with read access to the repository can use this endpoint. If the repository is private, you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param runId - The unique identifier of the workflow run.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const getReviewsForRun: ApiHeroEndpoint<
  { owner: string; runId: number; repo: string },
  Array<EnvironmentApprovals>
> = {
  id: "actions/get-reviews-for-run",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#list-workflow-run-artifacts


* List workflow run artifacts
* Lists artifacts for a workflow run. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param runId - The unique identifier of the workflow run.
* @param repo - The name of the repository. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listWorkflowRunArtifacts: ApiHeroEndpoint<
  { owner: string; runId: number; repo: string; perPage?: number; page?: number },
  {
    artifacts: Array<Artifact>;
    total_count: number;
  },
  { Link: string }
> = {
  id: "actions/list-workflow-run-artifacts",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#get-a-workflow


* Get a workflow
* Gets a specific workflow. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const getWorkflow: ApiHeroEndpoint<
  { owner: string; workflowId: number | string; repo: string },
  Workflow
> = {
  id: "actions/get-workflow",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#get-default-workflow-permissions-for-an-enterprise


* Get default workflow permissions for an enterprise
* Gets the default workflow permissions granted to the `GITHUB_TOKEN` when running workflows in an enterprise,
 * as well as whether GitHub Actions can submit approving pull request reviews. For more information, see
 * "[Enforcing a policy for workflow permissions in your enterprise](https://docs.github.com/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-workflow-permissions-in-your-enterprise)."
 * 
 * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
 * GitHub Apps must have the `enterprise_administration:write` permission to use this endpoint.
* @param enterprise - The slug version of the enterprise name. You can also substitute this value with the enterprise id. 
*/
export const getGithubActionsDefaultWorkflowPermissionsEnterprise: ApiHeroEndpoint<
  { enterprise: string },
  ActionsGetDefaultWorkflowPermissions
> = {
  id: "actions/get-github-actions-default-workflow-permissions-enterprise",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#set-default-workflow-permissions-for-an-enterprise


* Set default workflow permissions for an enterprise
* Sets the default workflow permissions granted to the `GITHUB_TOKEN` when running workflows in an enterprise, and sets
 * whether GitHub Actions can submit approving pull request reviews. For more information, see
 * "[Enforcing a policy for workflow permissions in your enterprise](https://docs.github.com/enterprise-cloud@latest/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-github-actions-in-your-enterprise#enforcing-a-policy-for-workflow-permissions-in-your-enterprise)."
 * 
 * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
 * GitHub Apps must have the `enterprise_administration:write` permission to use this endpoint.
* @param enterprise - The slug version of the enterprise name. You can also substitute this value with the enterprise id. 
*/
export const setGithubActionsDefaultWorkflowPermissionsEnterprise: ApiHeroEndpoint<
  { enterprise: string; permission: ActionsSetDefaultWorkflowPermissions },
  void
> = {
  id: "actions/set-github-actions-default-workflow-permissions-enterprise",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#list-selected-repositories-for-an-organization-secret


* List selected repositories for an organization secret
* Lists all repositories that have been selected when the `visibility` for repository access to a secret is set to `selected`. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
* @param org - The organization name. The name is not case sensitive.
* @param secretName - The name of the secret.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listSelectedReposForOrgSecret: ApiHeroEndpoint<
  { org: string; secretName: string; perPage?: number; page?: number },
  {
    total_count: number;
    repositories: Array<MinimalRepository>;
  }
> = {
  id: "actions/list-selected-repos-for-org-secret",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#set-selected-repositories-for-an-organization-secret


* Set selected repositories for an organization secret
* Replaces all repositories for an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/rest/reference/actions#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
* @param org - The organization name. The name is not case sensitive.
* @param secretName - The name of the secret. 
*/
export const setSelectedReposForOrgSecret: ApiHeroEndpoint<
  {
    org: string;
    secretName: string;
    payload: {
      /**
       * An array of repository ids that can access the organization secret. You can only provide a list of repository ids when the `visibility` is set to `selected`. You can add and remove individual repositories using the [Set selected repositories for an organization secret](https://docs.github.com/rest/reference/actions#set-selected-repositories-for-an-organization-secret) and [Remove selected repository from an organization secret](https://docs.github.com/rest/reference/actions#remove-selected-repository-from-an-organization-secret) endpoints.
       */
      selected_repository_ids: Array<number>;
    };
  },
  void
> = {
  id: "actions/set-selected-repos-for-org-secret",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#create-a-registration-token-for-a-repository


* Create a registration token for a repository
* Returns a token that you can pass to the `config` script. The token expires after one hour. You must authenticate
 * using an access token with the `repo` scope to use this endpoint.
 * 
 * #### Example using registration token
 * 
 * Configure your self-hosted runner, replacing `TOKEN` with the registration token provided by this endpoint.
 * 
 * ```
 * ./config.sh --url https://github.com/octo-org/octo-repo-artifacts --token TOKEN
 * ```
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const createRegistrationTokenForRepo: ApiHeroEndpoint<
  { owner: string; repo: string },
  AuthenticationToken
> = {
  id: "actions/create-registration-token-for-repo",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#list-labels-for-a-self-hosted-runner-for-a-repository


* List labels for a self-hosted runner for a repository
* Lists all labels for a self-hosted runner configured in a repository.
 * 
 * You must authenticate using an access token with the `repo` scope to use this
 * endpoint.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param runnerId - Unique identifier of the self-hosted runner.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const listLabelsForSelfHostedRunnerForRepo: ApiHeroEndpoint<
  { owner: string; runnerId: number; repo: string },
  {
    labels: Array<RunnerLabel>;
    total_count: number;
  }
> = {
  id: "actions/list-labels-for-self-hosted-runner-for-repo",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#add-custom-labels-to-a-self-hosted-runner-for-a-repository


* Add custom labels to a self-hosted runner for a repository
* Add custom labels to a self-hosted runner configured in a repository.
 * 
 * You must authenticate using an access token with the `repo` scope to use this
 * endpoint.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param runnerId - Unique identifier of the self-hosted runner.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const addCustomLabelsToSelfHostedRunnerForRepo: ApiHeroEndpoint<
  {
    owner: string;
    runnerId: number;
    repo: string;
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
  id: "actions/add-custom-labels-to-self-hosted-runner-for-repo",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#set-custom-labels-for-a-self-hosted-runner-for-a-repository


* Set custom labels for a self-hosted runner for a repository
* Remove all previous custom labels and set the new custom labels for a specific
 * self-hosted runner configured in a repository.
 * 
 * You must authenticate using an access token with the `repo` scope to use this
 * endpoint.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param runnerId - Unique identifier of the self-hosted runner.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const setCustomLabelsForSelfHostedRunnerForRepo: ApiHeroEndpoint<
  {
    owner: string;
    runnerId: number;
    repo: string;
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
  id: "actions/set-custom-labels-for-self-hosted-runner-for-repo",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#remove-all-custom-labels-from-a-self-hosted-runner-for-a-repository


* Remove all custom labels from a self-hosted runner for a repository
* Remove all custom labels from a self-hosted runner configured in a
 * repository. Returns the remaining read-only labels from the runner.
 * 
 * You must authenticate using an access token with the `repo` scope to use this
 * endpoint.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param runnerId - Unique identifier of the self-hosted runner.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const removeAllCustomLabelsFromSelfHostedRunnerForRepo: ApiHeroEndpoint<
  { owner: string; runnerId: number; repo: string },
  {
    labels: Array<RunnerLabel>;
    total_count: number;
  }
> = {
  id: "actions/remove-all-custom-labels-from-self-hosted-runner-for-repo",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#get-allowed-actions-for-a-repository


* Get allowed actions and reusable workflows for a repository
* Gets the settings for selected actions and reusable workflows that are allowed in a repository. To use this endpoint, the repository policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for a repository](#set-github-actions-permissions-for-a-repository)."
 * 
 * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration` repository permission to use this API.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const getAllowedActionsRepository: ApiHeroEndpoint<
  { owner: string; repo: string },
  SelectedActions
> = {
  id: "actions/get-allowed-actions-repository",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#set-allowed-actions-for-a-repository


* Set allowed actions and reusable workflows for a repository
* Sets the actions and reusable workflows that are allowed in a repository. To use this endpoint, the repository permission policy for `allowed_actions` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for a repository](#set-github-actions-permissions-for-a-repository)."
 * 
 * If the repository belongs to an organization or enterprise that has `selected` actions and reusable workflows set at the organization or enterprise levels, then you cannot override any of the allowed actions and reusable workflows settings.
 * 
 * To use the `patterns_allowed` setting for private repositories, the repository must belong to an enterprise. If the repository does not belong to an enterprise, then the `patterns_allowed` setting only applies to public repositories.
 * 
 * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `administration` repository permission to use this API.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const setAllowedActionsRepository: ApiHeroEndpoint<
  { owner: string; repo: string; permission?: SelectedActions },
  void
> = {
  id: "actions/set-allowed-actions-repository",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#list-workflow-runs


* List workflow runs
* List all workflow runs for a workflow. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/rest/overview/resources-in-the-rest-api#parameters).
 * 
 * Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch.
* @param [branch] - Returns workflow runs associated with a branch. Use the name of the branch of the `push`.
* @param [checkSuiteId] - Returns workflow runs with the `check_suite_id` that you specify.
* @param [excludePullRequests=false] - If `true` pull requests are omitted from the response (empty array).
* @param [created] - Returns workflow runs created within the given date-time range. For more information on the syntax, see "[Understanding the search syntax](https://docs.github.com/search-github/getting-started-with-searching-on-github/understanding-the-search-syntax#query-for-dates)."
* @param [actor] - Returns someone's workflow runs. Use the login for the user who created the `push` associated with the check suite or workflow run.
* @param [status] - Returns workflow runs with the check run `status` or `conclusion` that you specify. For example, a conclusion can be `success` or a status can be `in_progress`. Only GitHub can set a status of `waiting` or `requested`. For a list of the possible `status` and `conclusion` options, see "[Create a check run](https://docs.github.com/rest/reference/checks#create-a-check-run)."
* @param [event] - Returns workflow run triggered by the event you specify. For example, `push`, `pull_request` or `issue`. For more information, see "[Events that trigger workflows](https://docs.github.com/en/actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows)." 
*/
export const listWorkflowRuns: ApiHeroEndpoint<
  {
    owner: string;
    workflowId: number | string;
    repo: string;
    perPage?: number;
    page?: number;
    branch?: string;
    checkSuiteId?: number;
    excludePullRequests?: boolean;
    created?: string;
    actor?: string;
    status?:
      | "completed"
      | "action_required"
      | "cancelled"
      | "failure"
      | "neutral"
      | "skipped"
      | "stale"
      | "success"
      | "timed_out"
      | "in_progress"
      | "queued"
      | "requested"
      | "waiting";
    event?: string;
  },
  {
    total_count: number;
    workflow_runs: Array<WorkflowRun>;
  },
  { Link: string }
> = {
  id: "actions/list-workflow-runs",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions/oidc#set-actions-oidc-custom-issuer-policy-for-enterprise


* Set the GitHub Actions OIDC custom issuer policy for an enterprise
* Sets the GitHub Actions OpenID Connect (OIDC) custom issuer policy for an enterprise.
 * You must authenticate using an access token with the `admin:enterprise` scope to use this endpoint.
 * GitHub Apps must have the `enterprise_administration:write` permission to use this endpoint.
* @param enterprise - The slug version of the enterprise name. You can also substitute this value with the enterprise id. 
*/
export const setActionsOidcCustomIssuerPolicyForEnterprise: ApiHeroEndpoint<
  { enterprise: string; customization: ActionsOidcCustomIssuerPolicyForEnterprise },
  void
> = {
  id: "actions/set-actions-oidc-custom-issuer-policy-for-enterprise",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#list-self-hosted-runners-in-a-group-for-an-organization


* List self-hosted runners in a group for an organization
* The self-hosted runner groups REST API is available with GitHub Enterprise Cloud. For more information, see "[GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products)."
 * 
 * Lists self-hosted runners that are in a specific organization group.
 * 
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
* @param org - The organization name. The name is not case sensitive.
* @param runnerGroupId - Unique identifier of the self-hosted runner group.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listSelfHostedRunnersInGroupForOrg: ApiHeroEndpoint<
  { org: string; runnerGroupId: number; perPage?: number; page?: number },
  {
    runners: Array<Runner>;
    total_count: number;
  },
  { Link: string }
> = {
  id: "actions/list-self-hosted-runners-in-group-for-org",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#set-self-hosted-runners-in-a-group-for-an-organization


* Set self-hosted runners in a group for an organization
* The self-hosted runner groups REST API is available with GitHub Enterprise Cloud. For more information, see "[GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products)."
 * 
 * Replaces the list of self-hosted runners that are part of an organization runner group.
 * 
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
* @param org - The organization name. The name is not case sensitive.
* @param runnerGroupId - Unique identifier of the self-hosted runner group. 
*/
export const setSelfHostedRunnersInGroupForOrg: ApiHeroEndpoint<
  {
    org: string;
    runnerGroupId: number;
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
  id: "actions/set-self-hosted-runners-in-group-for-org",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#enable-a-selected-repository-for-github-actions-in-an-organization


* Enable a selected repository for GitHub Actions in an organization
* Adds a repository to the list of selected repositories that are enabled for GitHub Actions in an organization. To use this endpoint, the organization permission policy for `enabled_repositories` must be must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)."
 * 
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
* @param org - The organization name. The name is not case sensitive.
* @param repositoryId - The unique identifier of the repository. 
*/
export const enableSelectedRepositoryGithubActionsOrganization: ApiHeroEndpoint<
  { org: string; repositoryId: number },
  void
> = {
  id: "actions/enable-selected-repository-github-actions-organization",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#disable-a-selected-repository-for-github-actions-in-an-organization


* Disable a selected repository for GitHub Actions in an organization
* Removes a repository from the list of selected repositories that are enabled for GitHub Actions in an organization. To use this endpoint, the organization permission policy for `enabled_repositories` must be configured to `selected`. For more information, see "[Set GitHub Actions permissions for an organization](#set-github-actions-permissions-for-an-organization)."
 * 
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `administration` organization permission to use this API.
* @param org - The organization name. The name is not case sensitive.
* @param repositoryId - The unique identifier of the repository. 
*/
export const disableSelectedRepositoryGithubActionsOrganization: ApiHeroEndpoint<
  { org: string; repositoryId: number },
  void
> = {
  id: "actions/disable-selected-repository-github-actions-organization",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#enable-a-workflow


* Enable a workflow
* Enables a workflow and sets the `state` of the workflow to `active`. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`.
 * 
 * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const enableWorkflow: ApiHeroEndpoint<
  { owner: string; workflowId: number | string; repo: string },
  void
> = {
  id: "actions/enable-workflow",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#get-workflow-usage


* Get workflow usage
* Gets the number of billable minutes used by a specific workflow during the current billing cycle. Billable minutes only apply to workflows in private repositories that use GitHub-hosted runners. Usage is listed for each GitHub-hosted runner operating system in milliseconds. Any job re-runs are also included in the usage. The usage does not include the multiplier for macOS and Windows runners and is not rounded up to the nearest whole minute. For more information, see "[Managing billing for GitHub Actions](https://docs.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)".
 * 
 * You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const getWorkflowUsage: ApiHeroEndpoint<
  { owner: string; workflowId: number | string; repo: string },
  WorkflowUsage
> = {
  id: "actions/get-workflow-usage",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#re-run-workflow-failed-jobs


* Re-run failed jobs from a workflow run
* Re-run all of the failed jobs and their dependent jobs in a workflow run using the `id` of the workflow run. You must authenticate using an access token with the `repo` scope to use this endpoint.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param runId - The unique identifier of the workflow run.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const reRunWorkflowFailedJobs: ApiHeroEndpoint<
  {
    owner: string;
    runId: number;
    repo: string;
    rerunFailedJob?: {
      /**
       * Whether to enable debug logging for the re-run.
       */
      enable_debug_logging?: boolean;
    } | null;
  },
  EmptyObject
> = {
  id: "actions/re-run-workflow-failed-jobs",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#disable-a-workflow


* Disable a workflow
* Disables a workflow and sets the `state` of the workflow to `disabled_manually`. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`.
 * 
 * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const disableWorkflow: ApiHeroEndpoint<
  { owner: string; workflowId: number | string; repo: string },
  void
> = {
  id: "actions/disable-workflow",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#remove-a-custom-label-from-a-self-hosted-runner-for-a-repository


* Remove a custom label from a self-hosted runner for a repository
* Remove a custom label from a self-hosted runner configured
 * in a repository. Returns the remaining labels from the runner.
 * 
 * This endpoint returns a `404 Not Found` status if the custom label is not
 * present on the runner.
 * 
 * You must authenticate using an access token with the `repo` scope to use this
 * endpoint.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param name - The name of a self-hosted runner's custom label.
* @param runnerId - Unique identifier of the self-hosted runner.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const removeCustomLabelFromSelfHostedRunnerForRepo: ApiHeroEndpoint<
  { owner: string; name: string; runnerId: number; repo: string },
  {
    labels: Array<RunnerLabel>;
    total_count: number;
  }
> = {
  id: "actions/remove-custom-label-from-self-hosted-runner-for-repo",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#get-pending-deployments-for-a-workflow-run


* Get pending deployments for a workflow run
* Get all deployment environments for a workflow run that are waiting for protection rules to pass.
 * 
 * Anyone with read access to the repository can use this endpoint. If the repository is private, you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param runId - The unique identifier of the workflow run.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const getPendingDeploymentsForRun: ApiHeroEndpoint<
  { owner: string; runId: number; repo: string },
  Array<PendingDeployment>
> = {
  id: "actions/get-pending-deployments-for-run",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#review-pending-deployments-for-a-workflow-run


* Review pending deployments for a workflow run
* Approve or reject pending deployments that are waiting on approval by a required reviewer.
 * 
 * Required reviewers with read access to the repository contents and deployments can use this endpoint. Required reviewers must authenticate using an access token with the `repo` scope to use this endpoint.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param runId - The unique identifier of the workflow run.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const reviewPendingDeploymentsForRun: ApiHeroEndpoint<
  {
    owner: string;
    runId: number;
    repo: string;
    pendingDeployment: {
      /**
       * Whether to approve or reject deployment to the specified environments.
       *
       * @example
       * "approved"
       */
      state: "approved" | "rejected";

      /**
       * A comment to accompany the deployment review
       *
       * @example
       * "Ship it!"
       */
      comment: string;

      /**
       * The list of environment ids to approve or reject
       *
       * @example
       * [161171787]
       *
       * @example
       * [161171795]
       */
      environment_ids: Array<number>;
    };
  },
  Array<Deployment>
> = {
  id: "actions/review-pending-deployments-for-run",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#list-repository-access-to-a-self-hosted-runner-group-in-an-organization


* List repository access to a self-hosted runner group in an organization
* The self-hosted runner groups REST API is available with GitHub Enterprise Cloud and GitHub Enterprise Server. For more information, see "[GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products)."
 * 
 * Lists the repositories with access to a self-hosted runner group configured in an organization.
 * 
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
* @param org - The organization name. The name is not case sensitive.
* @param runnerGroupId - Unique identifier of the self-hosted runner group.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listRepoAccessToSelfHostedRunnerGroupInOrg: ApiHeroEndpoint<
  { org: string; runnerGroupId: number; perPage?: number; page?: number },
  {
    total_count: number;
    repositories: Array<MinimalRepository>;
  }
> = {
  id: "actions/list-repo-access-to-self-hosted-runner-group-in-org",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#set-repository-access-to-a-self-hosted-runner-group-in-an-organization


* Set repository access for a self-hosted runner group in an organization
* The self-hosted runner groups REST API is available with GitHub Enterprise Cloud. For more information, see "[GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products)."
 * 
 * Replaces the list of repositories that have access to a self-hosted runner group configured in an organization.
 * 
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
* @param org - The organization name. The name is not case sensitive.
* @param runnerGroupId - Unique identifier of the self-hosted runner group. 
*/
export const setRepoAccessToSelfHostedRunnerGroupInOrg: ApiHeroEndpoint<
  {
    org: string;
    runnerGroupId: number;
    payload: {
      /**
       * List of repository IDs that can access the runner group.
       * Unique identifier of the repository.
       */
      selected_repository_ids: Array<number>;
    };
  },
  void
> = {
  id: "actions/set-repo-access-to-self-hosted-runner-group-in-org",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#create-a-workflow-dispatch-event


* Create a workflow dispatch event
* You can use this endpoint to manually trigger a GitHub Actions workflow run. You can replace `workflow_id` with the workflow file name. For example, you could use `main.yaml`.
 * 
 * You must configure your GitHub Actions workflow to run when the [`workflow_dispatch` webhook](/developers/webhooks-and-events/webhook-events-and-payloads#workflow_dispatch) event occurs. The `inputs` are configured in the workflow file. For more information about how to configure the `workflow_dispatch` event in the workflow file, see "[Events that trigger workflows](/actions/reference/events-that-trigger-workflows#workflow_dispatch)."
 * 
 * You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `actions:write` permission to use this endpoint. For more information, see "[Creating a personal access token for the command line](https://docs.github.com/articles/creating-a-personal-access-token-for-the-command-line)."
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const createWorkflowDispatch: ApiHeroEndpoint<
  {
    owner: string;
    workflowId: number | string;
    repo: string;
    dispatch: {
      /**
       * The git reference for the workflow. The reference can be a branch or tag name.
       */
      ref: string;

      /**
       * Input keys and values configured in the workflow file. The maximum number of properties is 10. Any default properties configured in the workflow file will be used when `inputs` are omitted.
       */
      inputs?: Record<string, string>;
    };
  },
  void
> = {
  id: "actions/create-workflow-dispatch",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#get-a-workflow-run-attempt


* Get a workflow run attempt
* Gets a specific workflow run attempt. Anyone with read access to the repository
 * can use this endpoint. If the repository is private you must use an access token
 * with the `repo` scope. GitHub Apps must have the `actions:read` permission to
 * use this endpoint.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param attemptNumber - The attempt number of the workflow run.
* @param runId - The unique identifier of the workflow run.
* @param repo - The name of the repository. The name is not case sensitive.
* @param [excludePullRequests=false] - If `true` pull requests are omitted from the response (empty array). 
*/
export const getWorkflowRunAttempt: ApiHeroEndpoint<
  {
    owner: string;
    attemptNumber: number;
    runId: number;
    repo: string;
    excludePullRequests?: boolean;
  },
  WorkflowRun
> = {
  id: "actions/get-workflow-run-attempt",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#list-environment-secrets


* List environment secrets
* Lists all secrets available in an environment without revealing their encrypted values. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.
* @param repositoryId - The unique identifier of the repository.
* @param environmentName - The name of the environment
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listEnvironmentSecrets: ApiHeroEndpoint<
  { repositoryId: number; environmentName: string; perPage?: number; page?: number },
  {
    secrets: Array<ActionsSecret>;
    total_count: number;
  },
  { Link: string }
> = {
  id: "actions/list-environment-secrets",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#add-selected-repository-to-an-organization-secret


* Add selected repository to an organization secret
* Adds a repository to an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/rest/reference/actions#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
* @param org - The organization name. The name is not case sensitive.
* @param secretName - The name of the secret.
* @param repositoryId  
*/
export const addSelectedRepoToOrgSecret: ApiHeroEndpoint<
  { org: string; secretName: string; repositoryId: number },
  void
> = {
  id: "actions/add-selected-repo-to-org-secret",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#remove-selected-repository-from-an-organization-secret


* Remove selected repository from an organization secret
* Removes a repository from an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/rest/reference/actions#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `secrets` organization permission to use this endpoint.
* @param org - The organization name. The name is not case sensitive.
* @param secretName - The name of the secret.
* @param repositoryId  
*/
export const removeSelectedRepoFromOrgSecret: ApiHeroEndpoint<
  { org: string; secretName: string; repositoryId: number },
  void
> = {
  id: "actions/remove-selected-repo-from-org-secret",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#download-an-artifact


* Download an artifact
* Gets a redirect URL to download an archive for a repository. This URL expires after 1 minute. Look for `Location:` in
 * the response header to find the URL for the download. The `:archive_format` must be `zip`. Anyone with read access to
 * the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope.
 * GitHub Apps must have the `actions:read` permission to use this endpoint.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param archiveFormat 
* @param artifactId - The unique identifier of the artifact.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const downloadArtifact: ApiHeroEndpoint<
  { owner: string; archiveFormat: string; artifactId: number; repo: string },
  void
> = {
  id: "actions/download-artifact",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#add-a-self-hosted-runner-to-a-group-for-an-organization


* Add a self-hosted runner to a group for an organization
* The self-hosted runner groups REST API is available with GitHub Enterprise Cloud. For more information, see "[GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products)."
 * 
 * 
 * Adds a self-hosted runner to a runner group configured in an organization.
 * 
 * You must authenticate using an access token with the `admin:org`
 * scope to use this endpoint.
* @param org - The organization name. The name is not case sensitive.
* @param runnerId - Unique identifier of the self-hosted runner.
* @param runnerGroupId - Unique identifier of the self-hosted runner group. 
*/
export const addSelfHostedRunnerToGroupForOrg: ApiHeroEndpoint<
  { org: string; runnerId: number; runnerGroupId: number },
  void
> = {
  id: "actions/add-self-hosted-runner-to-group-for-org",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#remove-a-self-hosted-runner-from-a-group-for-an-organization


* Remove a self-hosted runner from a group for an organization
* The self-hosted runner groups REST API is available with GitHub Enterprise Cloud. For more information, see "[GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products)."
 * 
 * 
 * Removes a self-hosted runner from a group configured in an organization. The runner is then returned to the default group.
 * 
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
* @param org - The organization name. The name is not case sensitive.
* @param runnerId - Unique identifier of the self-hosted runner.
* @param runnerGroupId - Unique identifier of the self-hosted runner group. 
*/
export const removeSelfHostedRunnerFromGroupForOrg: ApiHeroEndpoint<
  { org: string; runnerId: number; runnerGroupId: number },
  void
> = {
  id: "actions/remove-self-hosted-runner-from-group-for-org",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#list-jobs-for-a-workflow-run-attempt


* List jobs for a workflow run attempt
* Lists jobs for a specific workflow run attempt. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `actions:read` permission to use this endpoint. You can use parameters to narrow the list of results. For more information about using parameters, see [Parameters](https://docs.github.com/rest/overview/resources-in-the-rest-api#parameters).
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param attemptNumber - The attempt number of the workflow run.
* @param runId - The unique identifier of the workflow run.
* @param repo - The name of the repository. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listJobsForWorkflowRunAttempt: ApiHeroEndpoint<
  {
    owner: string;
    attemptNumber: number;
    runId: number;
    repo: string;
    perPage?: number;
    page?: number;
  },
  {
    jobs: Array<Job>;
    total_count: number;
  },
  { Link: string }
> = {
  id: "actions/list-jobs-for-workflow-run-attempt",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#download-workflow-run-attempt-logs


* Download workflow run attempt logs
* Gets a redirect URL to download an archive of log files for a specific workflow run attempt. This link expires after
 * 1 minute. Look for `Location:` in the response header to find the URL for the download. Anyone with read access to
 * the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope.
 * GitHub Apps must have the `actions:read` permission to use this endpoint.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param attemptNumber - The attempt number of the workflow run.
* @param runId - The unique identifier of the workflow run.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const downloadWorkflowRunAttemptLogs: ApiHeroEndpoint<
  { owner: string; attemptNumber: number; runId: number; repo: string },
  void
> = {
  id: "actions/download-workflow-run-attempt-logs",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#add-repository-acess-to-a-self-hosted-runner-group-in-an-organization


* Add repository access to a self-hosted runner group in an organization
* The self-hosted runner groups REST API is available with GitHub Enterprise Cloud. For more information, see "[GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products)."
 * 
 * 
 * Adds a repository to the list of selected repositories that can access a self-hosted runner group. The runner group must have `visibility` set to `selected`. For more information, see "[Create a self-hosted runner group for an organization](#create-a-self-hosted-runner-group-for-an-organization)."
 * 
 * You must authenticate using an access token with the `admin:org`
 * scope to use this endpoint.
* @param org - The organization name. The name is not case sensitive.
* @param repositoryId - The unique identifier of the repository.
* @param runnerGroupId - Unique identifier of the self-hosted runner group. 
*/
export const addRepoAccessToSelfHostedRunnerGroupInOrg: ApiHeroEndpoint<
  { org: string; repositoryId: number; runnerGroupId: number },
  void
> = {
  id: "actions/add-repo-access-to-self-hosted-runner-group-in-org",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#remove-repository-access-to-a-self-hosted-runner-group-in-an-organization


* Remove repository access to a self-hosted runner group in an organization
* The self-hosted runner groups REST API is available with GitHub Enterprise Cloud. For more information, see "[GitHub's products](https://docs.github.com/github/getting-started-with-github/githubs-products)."
 * 
 * 
 * Removes a repository from the list of selected repositories that can access a self-hosted runner group. The runner group must have `visibility` set to `selected`. For more information, see "[Create a self-hosted runner group for an organization](#create-a-self-hosted-runner-group-for-an-organization)."
 * 
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
* @param org - The organization name. The name is not case sensitive.
* @param repositoryId - The unique identifier of the repository.
* @param runnerGroupId - Unique identifier of the self-hosted runner group. 
*/
export const removeRepoAccessToSelfHostedRunnerGroupInOrg: ApiHeroEndpoint<
  { org: string; repositoryId: number; runnerGroupId: number },
  void
> = {
  id: "actions/remove-repo-access-to-self-hosted-runner-group-in-org",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#get-an-environment-public-key


* Get an environment public key
* Get the public key for an environment, which you need to encrypt environment secrets. You need to encrypt a secret before you can create or update secrets. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `secrets` repository permission to use this endpoint.
* @param repositoryId - The unique identifier of the repository.
* @param environmentName - The name of the environment 
*/
export const getEnvironmentPublicKey: ApiHeroEndpoint<
  { repositoryId: number; environmentName: string },
  ActionsPublicKey
> = {
  id: "actions/get-environment-public-key",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#get-an-environment-secret


* Get an environment secret
* Gets a single environment secret without revealing its encrypted value. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.
* @param repositoryId - The unique identifier of the repository.
* @param environmentName - The name of the environment
* @param secretName - The name of the secret. 
*/
export const getEnvironmentSecret: ApiHeroEndpoint<
  { repositoryId: number; environmentName: string; secretName: string },
  ActionsSecret
> = {
  id: "actions/get-environment-secret",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#create-or-update-an-environment-secret


* Create or update an environment secret
* Creates or updates an environment secret with an encrypted value. Encrypt your secret using
 * [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). You must authenticate using an access
 * token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use
 * this endpoint.
 * 
 * #### Example encrypting a secret using Node.js
 * 
 * Encrypt your secret using the [tweetsodium](https://github.com/github/tweetsodium) library.
 * 
 * ```
 * const sodium = require('tweetsodium');
 * 
 * const key = "base64-encoded-public-key";
 * const value = "plain-text-secret";
 * 
 * // Convert the message and key to Uint8Array's (Buffer implements that interface)
 * const messageBytes = Buffer.from(value);
 * const keyBytes = Buffer.from(key, 'base64');
 * 
 * // Encrypt using LibSodium.
 * const encryptedBytes = sodium.seal(messageBytes, keyBytes);
 * 
 * // Base64 the encrypted secret
 * const encrypted = Buffer.from(encryptedBytes).toString('base64');
 * 
 * console.log(encrypted);
 * ```
 * 
 * 
 * #### Example encrypting a secret using Python
 * 
 * Encrypt your secret using [pynacl](https://pynacl.readthedocs.io/en/latest/public/#nacl-public-sealedbox) with Python 3.
 * 
 * ```
 * from base64 import b64encode
 * from nacl import encoding, public
 * 
 * def encrypt(public_key: str, secret_value: str) -> str:
 * """Encrypt a Unicode string using the public key."""
 * public_key = public.PublicKey(public_key.encode("utf-8"), encoding.Base64Encoder())
 * sealed_box = public.SealedBox(public_key)
 * encrypted = sealed_box.encrypt(secret_value.encode("utf-8"))
 * return b64encode(encrypted).decode("utf-8")
 * ```
 * 
 * #### Example encrypting a secret using C#
 * 
 * Encrypt your secret using the [Sodium.Core](https://www.nuget.org/packages/Sodium.Core/) package.
 * 
 * ```
 * var secretValue = System.Text.Encoding.UTF8.GetBytes("mySecret");
 * var publicKey = Convert.FromBase64String("2Sg8iYjAxxmI2LvUXpJjkYrMxURPc8r+dB7TJyvvcCU=");
 * 
 * var sealedPublicKeyBox = Sodium.SealedPublicKeyBox.Create(secretValue, publicKey);
 * 
 * Console.WriteLine(Convert.ToBase64String(sealedPublicKeyBox));
 * ```
 * 
 * #### Example encrypting a secret using Ruby
 * 
 * Encrypt your secret using the [rbnacl](https://github.com/RubyCrypto/rbnacl) gem.
 * 
 * ```ruby
 * require "rbnacl"
 * require "base64"
 * 
 * key = Base64.decode64("+ZYvJDZMHUfBkJdyq5Zm9SKqeuBQ4sj+6sfjlH4CgG0=")
 * public_key = RbNaCl::PublicKey.new(key)
 * 
 * box = RbNaCl::Boxes::Sealed.from_public_key(public_key)
 * encrypted_secret = box.encrypt("my_secret")
 * 
 * # Print the base64 encoded secret
 * puts Base64.strict_encode64(encrypted_secret)
 * ```
* @param repositoryId - The unique identifier of the repository.
* @param environmentName - The name of the environment
* @param secretName - The name of the secret. 
*/
export const createOrUpdateEnvironmentSecret: ApiHeroEndpoint<
  {
    repositoryId: number;
    environmentName: string;
    secretName: string;
    secret: {
      /**
       * ID of the key you used to encrypt the secret.
       */
      key_id: string;

      /**
       * Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get an environment public key](https://docs.github.com/rest/reference/actions#get-an-environment-public-key) endpoint.
       */
      encrypted_value: string;
    };
  },
  EmptyObject
> = {
  id: "actions/create-or-update-environment-secret",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/actions#delete-an-environment-secret


* Delete an environment secret
* Deletes a secret in an environment using the secret name. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `secrets` repository permission to use this endpoint.
* @param repositoryId - The unique identifier of the repository.
* @param environmentName - The name of the environment
* @param secretName - The name of the secret. 
*/
export const deleteEnvironmentSecret: ApiHeroEndpoint<
  { repositoryId: number; environmentName: string; secretName: string },
  void
> = {
  id: "actions/delete-environment-secret",
  clientId: "github",
};
