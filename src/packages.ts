import { Package, PackageVersion, ApiHeroEndpoint } from "./@types";

/** 
* @see https://docs.github.com/rest/reference/packages#list-packages-for-the-authenticated-user


* List packages for the authenticated user's namespace
* Lists packages owned by the authenticated user within the user's namespace.
 * 
 * To use this endpoint, you must authenticate using an access token with the `packages:read` scope.
 * If `package_type` is not `container`, your token must also include the `repo` scope.
* @param packageType - The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
* @param [visibility] - The selected visibility of the packages. Only `container` package_types currently support `internal` visibility properly. For other ecosystems `internal` is synonymous with `private`. This parameter is optional and only filters an existing result set. 
*/
export const listPackagesForAuthenticatedUser: ApiHeroEndpoint<
  {
    packageType: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container";
    visibility?: "public" | "private" | "internal";
  },
  Array<Package>
> = {
  id: "packages/list-packages-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/packages#list-packages-for-an-organization


* List packages for an organization
* Lists all packages in an organization readable by the user.
 * 
 * To use this endpoint, you must authenticate using an access token with the `packages:read` scope.
 * If `package_type` is not `container`, your token must also include the `repo` scope.
* @param org - The organization name. The name is not case sensitive.
* @param packageType - The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
* @param [visibility] - The selected visibility of the packages. Only `container` package_types currently support `internal` visibility properly. For other ecosystems `internal` is synonymous with `private`. This parameter is optional and only filters an existing result set. 
*/
export const listPackagesForOrganization: ApiHeroEndpoint<
  {
    org: string;
    packageType: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container";
    visibility?: "public" | "private" | "internal";
  },
  Array<Package>
> = {
  id: "packages/list-packages-for-organization",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/packages#list-packages-for-user


* List packages for a user
* Lists all packages in a user's namespace for which the requesting user has access.
 * 
 * To use this endpoint, you must authenticate using an access token with the `packages:read` scope.
 * If `package_type` is not `container`, your token must also include the `repo` scope.
* @param username - The handle for the GitHub user account.
* @param packageType - The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
* @param [visibility] - The selected visibility of the packages. Only `container` package_types currently support `internal` visibility properly. For other ecosystems `internal` is synonymous with `private`. This parameter is optional and only filters an existing result set. 
*/
export const listPackagesForUser: ApiHeroEndpoint<
  {
    username: string;
    packageType: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container";
    visibility?: "public" | "private" | "internal";
  },
  Array<Package>
> = {
  id: "packages/list-packages-for-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/packages#get-a-package-for-the-authenticated-user


* Get a package for the authenticated user
* Gets a specific package for a package owned by the authenticated user.
 * 
 * To use this endpoint, you must authenticate using an access token with the `packages:read` scope.
 * If `package_type` is not `container`, your token must also include the `repo` scope.
* @param packageName - The name of the package.
* @param packageType - The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry. 
*/
export const getPackageForAuthenticatedUser: ApiHeroEndpoint<
  {
    packageName: string;
    packageType: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container";
  },
  Package
> = {
  id: "packages/get-package-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/packages#delete-a-package-for-the-authenticated-user


* Delete a package for the authenticated user
* Deletes a package owned by the authenticated user. You cannot delete a public package if any version of the package has more than 5,000 downloads. In this scenario, contact GitHub support for further assistance.
 * 
 * To use this endpoint, you must authenticate using an access token with the `packages:read` and `packages:delete` scopes.
 * If `package_type` is not `container`, your token must also include the `repo` scope.
* @param packageName - The name of the package.
* @param packageType - The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry. 
*/
export const deletePackageForAuthenticatedUser: ApiHeroEndpoint<
  {
    packageName: string;
    packageType: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container";
  },
  void
> = {
  id: "packages/delete-package-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/packages#get-a-package-for-an-organization


* Get a package for an organization
* Gets a specific package in an organization.
 * 
 * To use this endpoint, you must authenticate using an access token with the `packages:read` scope.
 * If `package_type` is not `container`, your token must also include the `repo` scope.
* @param org - The organization name. The name is not case sensitive.
* @param packageName - The name of the package.
* @param packageType - The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry. 
*/
export const getPackageForOrganization: ApiHeroEndpoint<
  {
    org: string;
    packageName: string;
    packageType: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container";
  },
  Package
> = {
  id: "packages/get-package-for-organization",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/packages#delete-a-package-for-an-organization


* Delete a package for an organization
* Deletes an entire package in an organization. You cannot delete a public package if any version of the package has more than 5,000 downloads. In this scenario, contact GitHub support for further assistance.
 * 
 * To use this endpoint, you must have admin permissions in the organization and authenticate using an access token with the `packages:read` and `packages:delete` scopes. In addition:
 * - If `package_type` is not `container`, your token must also include the `repo` scope.
 * - If `package_type` is `container`, you must also have admin permissions to the container you want to delete.
* @param org - The organization name. The name is not case sensitive.
* @param packageName - The name of the package.
* @param packageType - The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry. 
*/
export const deletePackageForOrg: ApiHeroEndpoint<
  {
    org: string;
    packageName: string;
    packageType: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container";
  },
  void
> = {
  id: "packages/delete-package-for-org",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/packages#restore-a-package-for-the-authenticated-user


* Restore a package for the authenticated user
* Restores a package owned by the authenticated user.
 * 
 * You can restore a deleted package under the following conditions:
 * - The package was deleted within the last 30 days.
 * - The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first.
 * 
 * To use this endpoint, you must authenticate using an access token with the `packages:read` and `packages:write` scopes. If `package_type` is not `container`, your token must also include the `repo` scope.
* @param packageName - The name of the package.
* @param packageType - The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
* @param [token] - package token 
*/
export const restorePackageForAuthenticatedUser: ApiHeroEndpoint<
  {
    packageName: string;
    packageType: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container";
    token?: string;
  },
  void
> = {
  id: "packages/restore-package-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/packages#get-all-package-versions-for-a-package-owned-by-the-authenticated-user


* Get all package versions for a package owned by the authenticated user
* Returns all package versions for a package owned by the authenticated user.
 * 
 * To use this endpoint, you must authenticate using an access token with the `packages:read` scope.
 * If `package_type` is not `container`, your token must also include the `repo` scope.
* @param packageName - The name of the package.
* @param packageType - The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch.
* @param [state] - The state of the package, either active or deleted. 
*/
export const getAllPackageVersionsForPackageOwnedByAuthenticatedUser: ApiHeroEndpoint<
  {
    packageName: string;
    packageType: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container";
    perPage?: number;
    page?: number;
    state?: "active" | "deleted";
  },
  Array<PackageVersion>
> = {
  id: "packages/get-all-package-versions-for-package-owned-by-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/packages#get-a-package-for-a-user


* Get a package for a user
* Gets a specific package metadata for a public package owned by a user.
 * 
 * To use this endpoint, you must authenticate using an access token with the `packages:read` scope.
 * If `package_type` is not `container`, your token must also include the `repo` scope.
* @param username - The handle for the GitHub user account.
* @param packageName - The name of the package.
* @param packageType - The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry. 
*/
export const getPackageForUser: ApiHeroEndpoint<
  {
    username: string;
    packageName: string;
    packageType: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container";
  },
  Package
> = {
  id: "packages/get-package-for-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/packages#delete-a-package-for-a-user


* Delete a package for a user
* Deletes an entire package for a user. You cannot delete a public package if any version of the package has more than 5,000 downloads. In this scenario, contact GitHub support for further assistance.
 * 
 * To use this endpoint, you must authenticate using an access token with the `packages:read` and `packages:delete` scopes. In addition:
 * - If `package_type` is not `container`, your token must also include the `repo` scope.
 * - If `package_type` is `container`, you must also have admin permissions to the container you want to delete.
* @param username - The handle for the GitHub user account.
* @param packageName - The name of the package.
* @param packageType - The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry. 
*/
export const deletePackageForUser: ApiHeroEndpoint<
  {
    username: string;
    packageName: string;
    packageType: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container";
  },
  void
> = {
  id: "packages/delete-package-for-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/packages#restore-a-package-for-an-organization


* Restore a package for an organization
* Restores an entire package in an organization.
 * 
 * You can restore a deleted package under the following conditions:
 * - The package was deleted within the last 30 days.
 * - The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first.
 * 
 * To use this endpoint, you must have admin permissions in the organization and authenticate using an access token with the `packages:read` and `packages:write` scopes. In addition:
 * - If `package_type` is not `container`, your token must also include the `repo` scope.
 * - If `package_type` is `container`, you must also have admin permissions to the container that you want to restore.
* @param org - The organization name. The name is not case sensitive.
* @param packageName - The name of the package.
* @param packageType - The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
* @param [token] - package token 
*/
export const restorePackageForOrg: ApiHeroEndpoint<
  {
    org: string;
    packageName: string;
    packageType: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container";
    token?: string;
  },
  void
> = {
  id: "packages/restore-package-for-org",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/packages#get-all-package-versions-for-a-package-owned-by-an-organization


* Get all package versions for a package owned by an organization
* Returns all package versions for a package owned by an organization.
 * 
 * To use this endpoint, you must authenticate using an access token with the `packages:read` scope.
 * If `package_type` is not `container`, your token must also include the `repo` scope.
* @param org - The organization name. The name is not case sensitive.
* @param packageName - The name of the package.
* @param packageType - The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch.
* @param [state] - The state of the package, either active or deleted. 
*/
export const getAllPackageVersionsForPackageOwnedByOrg: ApiHeroEndpoint<
  {
    org: string;
    packageName: string;
    packageType: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container";
    perPage?: number;
    page?: number;
    state?: "active" | "deleted";
  },
  Array<PackageVersion>
> = {
  id: "packages/get-all-package-versions-for-package-owned-by-org",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/packages#restore-a-package-for-a-user


* Restore a package for a user
* Restores an entire package for a user.
 * 
 * You can restore a deleted package under the following conditions:
 * - The package was deleted within the last 30 days.
 * - The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first.
 * 
 * To use this endpoint, you must authenticate using an access token with the `packages:read` and `packages:write` scopes. In addition:
 * - If `package_type` is not `container`, your token must also include the `repo` scope.
 * - If `package_type` is `container`, you must also have admin permissions to the container that you want to restore.
* @param username - The handle for the GitHub user account.
* @param packageName - The name of the package.
* @param packageType - The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
* @param [token] - package token 
*/
export const restorePackageForUser: ApiHeroEndpoint<
  {
    username: string;
    packageName: string;
    packageType: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container";
    token?: string;
  },
  void
> = {
  id: "packages/restore-package-for-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/packages#get-all-package-versions-for-a-package-owned-by-a-user


* Get all package versions for a package owned by a user
* Returns all package versions for a public package owned by a specified user.
 * 
 * To use this endpoint, you must authenticate using an access token with the `packages:read` scope.
 * If `package_type` is not `container`, your token must also include the `repo` scope.
* @param username - The handle for the GitHub user account.
* @param packageName - The name of the package.
* @param packageType - The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry. 
*/
export const getAllPackageVersionsForPackageOwnedByUser: ApiHeroEndpoint<
  {
    username: string;
    packageName: string;
    packageType: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container";
  },
  Array<PackageVersion>
> = {
  id: "packages/get-all-package-versions-for-package-owned-by-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/packages#get-a-package-version-for-the-authenticated-user


* Get a package version for the authenticated user
* Gets a specific package version for a package owned by the authenticated user.
 * 
 * To use this endpoint, you must authenticate using an access token with the `packages:read` scope.
 * If `package_type` is not `container`, your token must also include the `repo` scope.
* @param packageName - The name of the package.
* @param packageType - The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
* @param packageVersionId - Unique identifier of the package version. 
*/
export const getPackageVersionForAuthenticatedUser: ApiHeroEndpoint<
  {
    packageName: string;
    packageType: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container";
    packageVersionId: number;
  },
  PackageVersion
> = {
  id: "packages/get-package-version-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/packages#delete-a-package-version-for-the-authenticated-user


* Delete a package version for the authenticated user
* Deletes a specific package version for a package owned by the authenticated user.  If the package is public and the package version has more than 5,000 downloads, you cannot delete the package version. In this scenario, contact GitHub support for further assistance.
 * 
 * To use this endpoint, you must have admin permissions in the organization and authenticate using an access token with the `packages:read` and `packages:delete` scopes.
 * If `package_type` is not `container`, your token must also include the `repo` scope.
* @param packageName - The name of the package.
* @param packageType - The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
* @param packageVersionId - Unique identifier of the package version. 
*/
export const deletePackageVersionForAuthenticatedUser: ApiHeroEndpoint<
  {
    packageName: string;
    packageType: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container";
    packageVersionId: number;
  },
  void
> = {
  id: "packages/delete-package-version-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/packages#get-a-package-version-for-an-organization


* Get a package version for an organization
* Gets a specific package version in an organization.
 * 
 * You must authenticate using an access token with the `packages:read` scope.
 * If `package_type` is not `container`, your token must also include the `repo` scope.
* @param org - The organization name. The name is not case sensitive.
* @param packageName - The name of the package.
* @param packageType - The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
* @param packageVersionId - Unique identifier of the package version. 
*/
export const getPackageVersionForOrganization: ApiHeroEndpoint<
  {
    org: string;
    packageName: string;
    packageType: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container";
    packageVersionId: number;
  },
  PackageVersion
> = {
  id: "packages/get-package-version-for-organization",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/packages#delete-a-package-version-for-an-organization


* Delete package version for an organization
* Deletes a specific package version in an organization. If the package is public and the package version has more than 5,000 downloads, you cannot delete the package version. In this scenario, contact GitHub support for further assistance.
 * 
 * To use this endpoint, you must have admin permissions in the organization and authenticate using an access token with the `packages:read` and `packages:delete` scopes. In addition:
 * - If `package_type` is not `container`, your token must also include the `repo` scope.
 * - If `package_type` is `container`, you must also have admin permissions to the container you want to delete.
* @param org - The organization name. The name is not case sensitive.
* @param packageName - The name of the package.
* @param packageType - The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
* @param packageVersionId - Unique identifier of the package version. 
*/
export const deletePackageVersionForOrg: ApiHeroEndpoint<
  {
    org: string;
    packageName: string;
    packageType: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container";
    packageVersionId: number;
  },
  void
> = {
  id: "packages/delete-package-version-for-org",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/packages#restore-a-package-version-for-the-authenticated-user


* Restore a package version for the authenticated user
* Restores a package version owned by the authenticated user.
 * 
 * You can restore a deleted package version under the following conditions:
 * - The package was deleted within the last 30 days.
 * - The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first.
 * 
 * To use this endpoint, you must authenticate using an access token with the `packages:read` and `packages:write` scopes. If `package_type` is not `container`, your token must also include the `repo` scope.
* @param packageName - The name of the package.
* @param packageType - The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
* @param packageVersionId - Unique identifier of the package version. 
*/
export const restorePackageVersionForAuthenticatedUser: ApiHeroEndpoint<
  {
    packageName: string;
    packageType: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container";
    packageVersionId: number;
  },
  void
> = {
  id: "packages/restore-package-version-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/packages#get-a-package-version-for-a-user


* Get a package version for a user
* Gets a specific package version for a public package owned by a specified user.
 * 
 * At this time, to use this endpoint, you must authenticate using an access token with the `packages:read` scope.
 * If `package_type` is not `container`, your token must also include the `repo` scope.
* @param username - The handle for the GitHub user account.
* @param packageName - The name of the package.
* @param packageType - The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
* @param packageVersionId - Unique identifier of the package version. 
*/
export const getPackageVersionForUser: ApiHeroEndpoint<
  {
    username: string;
    packageName: string;
    packageType: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container";
    packageVersionId: number;
  },
  PackageVersion
> = {
  id: "packages/get-package-version-for-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/packages#delete-a-package-version-for-a-user


* Delete package version for a user
* Deletes a specific package version for a user. If the package is public and the package version has more than 5,000 downloads, you cannot delete the package version. In this scenario, contact GitHub support for further assistance.
 * 
 * To use this endpoint, you must authenticate using an access token with the `packages:read` and `packages:delete` scopes. In addition:
 * - If `package_type` is not `container`, your token must also include the `repo` scope.
 * - If `package_type` is `container`, you must also have admin permissions to the container you want to delete.
* @param username - The handle for the GitHub user account.
* @param packageName - The name of the package.
* @param packageType - The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
* @param packageVersionId - Unique identifier of the package version. 
*/
export const deletePackageVersionForUser: ApiHeroEndpoint<
  {
    username: string;
    packageName: string;
    packageType: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container";
    packageVersionId: number;
  },
  void
> = {
  id: "packages/delete-package-version-for-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/packages#restore-a-package-version-for-an-organization


* Restore package version for an organization
* Restores a specific package version in an organization.
 * 
 * You can restore a deleted package under the following conditions:
 * - The package was deleted within the last 30 days.
 * - The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first.
 * 
 * To use this endpoint, you must have admin permissions in the organization and authenticate using an access token with the `packages:read` and `packages:write` scopes. In addition:
 * - If `package_type` is not `container`, your token must also include the `repo` scope.
 * - If `package_type` is `container`, you must also have admin permissions to the container that you want to restore.
* @param org - The organization name. The name is not case sensitive.
* @param packageName - The name of the package.
* @param packageType - The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
* @param packageVersionId - Unique identifier of the package version. 
*/
export const restorePackageVersionForOrg: ApiHeroEndpoint<
  {
    org: string;
    packageName: string;
    packageType: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container";
    packageVersionId: number;
  },
  void
> = {
  id: "packages/restore-package-version-for-org",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/packages#restore-a-package-version-for-a-user


* Restore package version for a user
* Restores a specific package version for a user.
 * 
 * You can restore a deleted package under the following conditions:
 * - The package was deleted within the last 30 days.
 * - The same package namespace and version is still available and not reused for a new package. If the same package namespace is not available, you will not be able to restore your package. In this scenario, to restore the deleted package, you must delete the new package that uses the deleted package's namespace first.
 * 
 * To use this endpoint, you must authenticate using an access token with the `packages:read` and `packages:write` scopes. In addition:
 * - If `package_type` is not `container`, your token must also include the `repo` scope.
 * - If `package_type` is `container`, you must also have admin permissions to the container that you want to restore.
* @param username - The handle for the GitHub user account.
* @param packageName - The name of the package.
* @param packageType - The type of supported package. Packages in GitHub's Gradle registry have the type `maven`. Docker images pushed to GitHub's Container registry (`ghcr.io`) have the type `container`. You can use the type `docker` to find images that were pushed to GitHub's Docker registry (`docker.pkg.github.com`), even if these have now been migrated to the Container registry.
* @param packageVersionId - Unique identifier of the package version. 
*/
export const restorePackageVersionForUser: ApiHeroEndpoint<
  {
    username: string;
    packageName: string;
    packageType: "npm" | "maven" | "rubygems" | "docker" | "nuget" | "container";
    packageVersionId: number;
  },
  void
> = {
  id: "packages/restore-package-version-for-user",
  clientId: "github",
};
