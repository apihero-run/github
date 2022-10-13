import {
  ActionsBillingUsage,
  AdvancedSecurityActiveCommitters,
  CombinedBillingUsage,
  PackagesBillingUsage,
  ApiHeroEndpoint,
} from "./@types";

/** 
* @see https://docs.github.com/rest/reference/billing#get-github-actions-billing-for-an-organization


* Get GitHub Actions billing for an organization
* Gets the summary of the free and paid GitHub Actions minutes used.
 * 
 * Paid minutes only apply to workflows in private repositories that use GitHub-hosted runners. Minutes used is listed for each GitHub-hosted runner operating system. Any job re-runs are also included in the usage. The usage returned includes any minute multipliers for macOS and Windows runners, and is rounded up to the nearest whole minute. For more information, see "[Managing billing for GitHub Actions](https://docs.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)".
 * 
 * Access tokens must have the `repo` or `admin:org` scope.
* @param org - The organization name. The name is not case sensitive. 
*/
export const getGithubActionsBillingOrg: ApiHeroEndpoint<{ org: string }, ActionsBillingUsage> = {
  id: "billing/get-github-actions-billing-org",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/billing#get-github-packages-billing-for-an-organization


* Get GitHub Packages billing for an organization
* Gets the free and paid storage used for GitHub Packages in gigabytes.
 * 
 * Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://docs.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."
 * 
 * Access tokens must have the `repo` or `admin:org` scope.
* @param org - The organization name. The name is not case sensitive. 
*/
export const getGithubPackagesBillingOrg: ApiHeroEndpoint<{ org: string }, PackagesBillingUsage> = {
  id: "billing/get-github-packages-billing-org",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/billing#get-github-actions-billing-for-a-user


* Get GitHub Actions billing for a user
* Gets the summary of the free and paid GitHub Actions minutes used.
 * 
 * Paid minutes only apply to workflows in private repositories that use GitHub-hosted runners. Minutes used is listed for each GitHub-hosted runner operating system. Any job re-runs are also included in the usage. The usage returned includes any minute multipliers for macOS and Windows runners, and is rounded up to the nearest whole minute. For more information, see "[Managing billing for GitHub Actions](https://docs.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)".
 * 
 * Access tokens must have the `user` scope.
* @param username - The handle for the GitHub user account. 
*/
export const getGithubActionsBillingUser: ApiHeroEndpoint<
  { username: string },
  ActionsBillingUsage
> = {
  id: "billing/get-github-actions-billing-user",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/billing#get-shared-storage-billing-for-an-organization


* Get shared storage billing for an organization
* Gets the estimated paid and estimated total storage used for GitHub Actions and GitHub Packages.
 * 
 * Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://docs.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."
 * 
 * Access tokens must have the `repo` or `admin:org` scope.
* @param org - The organization name. The name is not case sensitive. 
*/
export const getSharedStorageBillingOrg: ApiHeroEndpoint<{ org: string }, CombinedBillingUsage> = {
  id: "billing/get-shared-storage-billing-org",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/billing#get-github-packages-billing-for-a-user


* Get GitHub Packages billing for a user
* Gets the free and paid storage used for GitHub Packages in gigabytes.
 * 
 * Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://docs.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."
 * 
 * Access tokens must have the `user` scope.
* @param username - The handle for the GitHub user account. 
*/
export const getGithubPackagesBillingUser: ApiHeroEndpoint<
  { username: string },
  PackagesBillingUsage
> = {
  id: "billing/get-github-packages-billing-user",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/billing#get-github-advanced-security-active-committers-for-an-organization


* Get GitHub Advanced Security active committers for an organization
* Gets the GitHub Advanced Security active committers for an organization per repository.
 * 
 * Each distinct user login across all repositories is counted as a single Advanced Security seat, so the `total_advanced_security_committers` is not the sum of advanced_security_committers for each repository.
 * 
 * If this organization defers to an enterprise for billing, the `total_advanced_security_committers` returned from the organization API may include some users that are in more than one organization, so they will only consume a single Advanced Security seat at the enterprise level.
 * 
 * The total number of repositories with committer information is tracked by the `total_count` field.
* @param org - The organization name. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const getGithubAdvancedSecurityBillingOrg: ApiHeroEndpoint<
  { org: string; perPage?: number; page?: number },
  AdvancedSecurityActiveCommitters
> = {
  id: "billing/get-github-advanced-security-billing-org",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/billing#get-shared-storage-billing-for-a-user


* Get shared storage billing for a user
* Gets the estimated paid and estimated total storage used for GitHub Actions and GitHub Packages.
 * 
 * Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://docs.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."
 * 
 * Access tokens must have the `user` scope.
* @param username - The handle for the GitHub user account. 
*/
export const getSharedStorageBillingUser: ApiHeroEndpoint<
  { username: string },
  CombinedBillingUsage
> = {
  id: "billing/get-shared-storage-billing-user",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/billing#get-github-actions-billing-for-an-enterprise


* Get GitHub Actions billing for an enterprise
* Gets the summary of the free and paid GitHub Actions minutes used.
 * 
 * Paid minutes only apply to workflows in private repositories that use GitHub-hosted runners. Minutes used is listed for each GitHub-hosted runner operating system. Any job re-runs are also included in the usage. The usage does not include the multiplier for macOS and Windows runners and is not rounded up to the nearest whole minute. For more information, see "[Managing billing for GitHub Actions](https://docs.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)".
 * 
 * The authenticated user must be an enterprise admin.
* @param enterprise - The slug version of the enterprise name. You can also substitute this value with the enterprise id. 
*/
export const getGithubActionsBillingGhe: ApiHeroEndpoint<
  { enterprise: string },
  ActionsBillingUsage
> = {
  id: "billing/get-github-actions-billing-ghe",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/billing#get-github-packages-billing-for-an-enterprise


* Get GitHub Packages billing for an enterprise
* Gets the free and paid storage used for GitHub Packages in gigabytes.
 * 
 * Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://docs.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."
 * 
 * The authenticated user must be an enterprise admin.
* @param enterprise - The slug version of the enterprise name. You can also substitute this value with the enterprise id. 
*/
export const getGithubPackagesBillingGhe: ApiHeroEndpoint<
  { enterprise: string },
  PackagesBillingUsage
> = {
  id: "billing/get-github-packages-billing-ghe",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/billing#get-shared-storage-billing-for-an-enterprise


* Get shared storage billing for an enterprise
* Gets the estimated paid and estimated total storage used for GitHub Actions and GitHub Packages.
 * 
 * Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://docs.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."
 * 
 * The authenticated user must be an enterprise admin.
* @param enterprise - The slug version of the enterprise name. You can also substitute this value with the enterprise id. 
*/
export const getSharedStorageBillingGhe: ApiHeroEndpoint<
  { enterprise: string },
  CombinedBillingUsage
> = {
  id: "billing/get-shared-storage-billing-ghe",
  clientId: "github",
  version: "1.1.5",
};

/** 
* @see https://docs.github.com/rest/reference/billing#export-advanced-security-active-committers-data-for-enterprise


* Get GitHub Advanced Security active committers for an enterprise
* Gets the GitHub Advanced Security active committers for an enterprise per repository.
 * 
 * Each distinct user login across all repositories is counted as a single Advanced Security seat, so the `total_advanced_security_committers` is not the sum of active_users for each repository.
 * 
 * The total number of repositories with committer information is tracked by the `total_count` field.
* @param enterprise - The slug version of the enterprise name. You can also substitute this value with the enterprise id.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const getGithubAdvancedSecurityBillingGhe: ApiHeroEndpoint<
  { enterprise: string; perPage?: number; page?: number },
  AdvancedSecurityActiveCommitters
> = {
  id: "billing/get-github-advanced-security-billing-ghe",
  clientId: "github",
  version: "1.1.5",
};
