import {
  Import,
  Link,
  Migration,
  MinimalRepository,
  PorterAuthor,
  PorterLargeFile,
  ApiHeroEndpoint,
} from "./@types";

/** 
* @see https://docs.github.com/rest/reference/migrations#list-user-migrations


* List user migrations
* Lists all migrations a user has started.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listForAuthenticatedUser: ApiHeroEndpoint<
  { perPage?: number; page?: number },
  Array<Migration>,
  { Link: Link }
> = {
  id: "migrations/list-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/migrations#start-a-user-migration


* Start a user migration
* Initiates the generation of a user migration archive. 
*/
export const startForAuthenticatedUser: ApiHeroEndpoint<
  {
    migration: {
      /**
       * Exclude attributes from the API response to improve performance
       * Allowed values that can be passed to the exclude param.
       *
       * @example
       * ["repositories"]
       */
      exclude?: Array<"repositories">;

      /**
       * Repository path, owner and name
       *
       * @example
       * "acme/widgets"
       */
      repositories: Array<string>;

      /**
       * Indicates whether the repository git data should be excluded from the migration.
       *
       * @example
       * true
       */
      exclude_git_data?: boolean;

      /**
       * Indicates whether metadata should be excluded and only git source should be included for the migration.
       *
       * @example
       * true
       */
      exclude_metadata?: boolean;

      /**
       * Do not include releases in the migration
       *
       * @example
       * true
       */
      exclude_releases?: boolean;

      /**
       * Lock the repositories being migrated at the start of the migration
       *
       * @example
       * true
       */
      lock_repositories?: boolean;

      /**
       * Indicates whether this should only include organization metadata (repositories array should be empty and will ignore other flags).
       *
       * @example
       * true
       */
      org_metadata_only?: boolean;

      /**
       * Do not include attachments in the migration
       *
       * @example
       * true
       */
      exclude_attachments?: boolean;

      /**
       * Indicates whether projects owned by the organization or users should be excluded.
       *
       * @example
       * true
       */
      exclude_owner_projects?: boolean;
    };
  },
  Migration
> = {
  id: "migrations/start-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/migrations#list-organization-migrations


* List organization migrations
* Lists the most recent migrations.
* @param org - The organization name. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch.
* @param [exclude] - Exclude attributes from the API response to improve performance 
*/
export const listForOrg: ApiHeroEndpoint<
  { org: string; perPage?: number; page?: number; exclude?: Array<"repositories"> },
  Array<Migration>,
  { Link: Link }
> = {
  id: "migrations/list-for-org",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/migrations#start-an-organization-migration


* Start an organization migration
* Initiates the generation of a migration archive.
* @param org - The organization name. The name is not case sensitive. 
*/
export const startForOrg: ApiHeroEndpoint<
  {
    org: string;
    migration: {
      /**
       * Exclude related items from being returned in the response in order to improve performance of the request. The array can include any of: `"repositories"`.
       */
      exclude?: Array<"repositories">;

      /**
       * A list of arrays indicating which repositories should be migrated.
       */
      repositories: Array<string>;

      /**
       * Indicates whether the repository git data should be excluded from the migration.
       */
      exclude_git_data?: boolean;

      /**
       * Indicates whether metadata should be excluded and only git source should be included for the migration.
       */
      exclude_metadata?: boolean;

      /**
       * Indicates whether releases should be excluded from the migration (to reduce migration archive file size).
       *
       * @example
       * true
       */
      exclude_releases?: boolean;

      /**
       * Indicates whether repositories should be locked (to prevent manipulation) while migrating data.
       *
       * @example
       * true
       */
      lock_repositories?: boolean;

      /**
       * Indicates whether this should only include organization metadata (repositories array should be empty and will ignore other flags).
       *
       * @example
       * true
       */
      org_metadata_only?: boolean;

      /**
       * Indicates whether attachments should be excluded from the migration (to reduce migration archive file size).
       *
       * @example
       * true
       */
      exclude_attachments?: boolean;

      /**
       * Indicates whether projects owned by the organization or users should be excluded. from the migration.
       *
       * @example
       * true
       */
      exclude_owner_projects?: boolean;
    };
  },
  Migration
> = {
  id: "migrations/start-for-org",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/migrations#get-an-import-status


* Get an import status
* View the progress of an import.
 * 
 * **Import status**
 * 
 * This section includes details about the possible values of the `status` field of the Import Progress response.
 * 
 * An import that does not have errors will progress through these steps:
 * 
 * *   `detecting` - the "detection" step of the import is in progress because the request did not include a `vcs` parameter. The import is identifying the type of source control present at the URL.
 * *   `importing` - the "raw" step of the import is in progress. This is where commit data is fetched from the original repository. The import progress response will include `commit_count` (the total number of raw commits that will be imported) and `percent` (0 - 100, the current progress through the import).
 * *   `mapping` - the "rewrite" step of the import is in progress. This is where SVN branches are converted to Git branches, and where author updates are applied. The import progress response does not include progress information.
 * *   `pushing` - the "push" step of the import is in progress. This is where the importer updates the repository on GitHub. The import progress response will include `push_percent`, which is the percent value reported by `git push` when it is "Writing objects".
 * *   `complete` - the import is complete, and the repository is ready on GitHub.
 * 
 * If there are problems, you will see one of these in the `status` field:
 * 
 * *   `auth_failed` - the import requires authentication in order to connect to the original repository. To update authentication for the import, please see the [Update an import](https://docs.github.com/rest/reference/migrations#update-an-import) section.
 * *   `error` - the import encountered an error. The import progress response will include the `failed_step` and an error message. Contact [GitHub Support](https://support.github.com/contact?tags=dotcom-rest-api) for more information.
 * *   `detection_needs_auth` - the importer requires authentication for the originating repository to continue detection. To update authentication for the import, please see the [Update an import](https://docs.github.com/rest/reference/migrations#update-an-import) section.
 * *   `detection_found_nothing` - the importer didn't recognize any source control at the URL. To resolve, [Cancel the import](https://docs.github.com/rest/reference/migrations#cancel-an-import) and [retry](https://docs.github.com/rest/reference/migrations#start-an-import) with the correct URL.
 * *   `detection_found_multiple` - the importer found several projects or repositories at the provided URL. When this is the case, the Import Progress response will also include a `project_choices` field with the possible project choices as values. To update project choice, please see the [Update an import](https://docs.github.com/rest/reference/migrations#update-an-import) section.
 * 
 * **The project_choices field**
 * 
 * When multiple projects are found at the provided URL, the response hash will include a `project_choices` field, the value of which is an array of hashes each representing a project choice. The exact key/value pairs of the project hashes will differ depending on the version control type.
 * 
 * **Git LFS related fields**
 * 
 * This section includes details about Git LFS related fields that may be present in the Import Progress response.
 * 
 * *   `use_lfs` - describes whether the import has been opted in or out of using Git LFS. The value can be `opt_in`, `opt_out`, or `undecided` if no action has been taken.
 * *   `has_large_files` - the boolean value describing whether files larger than 100MB were found during the `importing` step.
 * *   `large_files_size` - the total size in gigabytes of files larger than 100MB found in the originating repository.
 * *   `large_files_count` - the total number of files larger than 100MB found in the originating repository. To see a list of these files, make a "Get Large Files" request.
* @param repo - The name of the repository. The name is not case sensitive.
* @param owner - The account owner of the repository. The name is not case sensitive. 
*/
export const getImportStatus: ApiHeroEndpoint<{ repo: string; owner: string }, Import> = {
  id: "migrations/get-import-status",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/migrations#start-an-import


* Start an import
* Start a source import to a GitHub repository using GitHub Importer.
* @param repo - The name of the repository. The name is not case sensitive.
* @param owner - The account owner of the repository. The name is not case sensitive. 
*/
export const startImport: ApiHeroEndpoint<
  {
    repo: string;
    owner: string;
    repo: {
      /**
       * The originating VCS type. Without this parameter, the import job will take additional time to detect the VCS type before beginning the import. This detection step will be reflected in the response.
       */
      vcs?: "subversion" | "git" | "mercurial" | "tfvc";

      /**
       * The URL of the originating repository.
       */
      vcs_url: string;

      /**
       * For a tfvc import, the name of the project that is being imported.
       */
      tfvc_project?: string;

      /**
       * If authentication is required, the password to provide to `vcs_url`.
       */
      vcs_password?: string;

      /**
       * If authentication is required, the username to provide to `vcs_url`.
       */
      vcs_username?: string;
    };
  },
  Import,
  { Location: string }
> = {
  id: "migrations/start-import",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/migrations#cancel-an-import


* Cancel an import
* Stop an import for a repository.
* @param repo - The name of the repository. The name is not case sensitive.
* @param owner - The account owner of the repository. The name is not case sensitive. 
*/
export const cancelImport: ApiHeroEndpoint<{ repo: string; owner: string }, void> = {
  id: "migrations/cancel-import",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/migrations#update-an-import


* Update an import
* An import can be updated with credentials or a project choice by passing in the appropriate parameters in this API
 * request. If no parameters are provided, the import will be restarted.
 * 
 * Some servers (e.g. TFS servers) can have several projects at a single URL. In those cases the import progress will
 * have the status `detection_found_multiple` and the Import Progress response will include a `project_choices` array.
 * You can select the project to import by providing one of the objects in the `project_choices` array in the update request.
* @param repo - The name of the repository. The name is not case sensitive.
* @param owner - The account owner of the repository. The name is not case sensitive. 
*/
export const updateImport: ApiHeroEndpoint<
  {
    repo: string;
    owner: string;
    repo?: {
      /**
       * The type of version control system you are migrating from.
       *
       * @example
       * "\"git\""
       */
      vcs?: "subversion" | "tfvc" | "git" | "mercurial";

      /**
       * For a tfvc import, the name of the project that is being imported.
       *
       * @example
       * "\"project1\""
       */
      tfvc_project?: string;

      /**
       * The password to provide to the originating repository.
       */
      vcs_password?: string;

      /**
       * The username to provide to the originating repository.
       */
      vcs_username?: string;
    } | null;
  },
  Import
> = {
  id: "migrations/update-import",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/migrations#get-a-user-migration-status


* Get a user migration status
* Fetches a single user migration. The response includes the `state` of the migration, which can be one of the following values:
 * 
 * *   `pending` - the migration hasn't started yet.
 * *   `exporting` - the migration is in progress.
 * *   `exported` - the migration finished successfully.
 * *   `failed` - the migration failed.
 * 
 * Once the migration has been `exported` you can [download the migration archive](https://docs.github.com/rest/reference/migrations#download-a-user-migration-archive).
* @param migrationId - The unique identifier of the migration.
* @param [exclude]  
*/
export const getStatusForAuthenticatedUser: ApiHeroEndpoint<
  { migrationId: number; exclude?: Array<string> },
  Migration
> = {
  id: "migrations/get-status-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/migrations#update-git-lfs-preference


* Update Git LFS preference
* You can import repositories from Subversion, Mercurial, and TFS that include files larger than 100MB. This ability is powered by [Git LFS](https://git-lfs.github.com). You can learn more about our LFS feature and working with large files [on our help site](https://docs.github.com/articles/versioning-large-files/).
* @param repo - The name of the repository. The name is not case sensitive.
* @param owner - The account owner of the repository. The name is not case sensitive. 
*/
export const setLfsPreference: ApiHeroEndpoint<
  {
    repo: string;
    owner: string;
    import: {
      /**
       * Whether to store large files during the import. `opt_in` means large files will be stored using Git LFS. `opt_out` means large files will be removed during the import.
       */
      use_lfs: "opt_in" | "opt_out";
    };
  },
  Import
> = {
  id: "migrations/set-lfs-preference",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/migrations#get-commit-authors


* Get commit authors
* Each type of source control system represents authors in a different way. For example, a Git commit author has a display name and an email address, but a Subversion commit author just has a username. The GitHub Importer will make the author information valid, but the author might not be correct. For example, it will change the bare Subversion username `hubot` into something like `hubot <hubot@12341234-abab-fefe-8787-fedcba987654>`.
 * 
 * This endpoint and the [Map a commit author](https://docs.github.com/rest/reference/migrations#map-a-commit-author) endpoint allow you to provide correct Git author information.
* @param repo - The name of the repository. The name is not case sensitive.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param [since] - A user ID. Only return users with an ID greater than this ID. 
*/
export const getCommitAuthors: ApiHeroEndpoint<
  { repo: string; owner: string; since?: number },
  Array<PorterAuthor>
> = {
  id: "migrations/get-commit-authors",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/migrations#get-an-organization-migration-status


* Get an organization migration status
* Fetches the status of a migration.
 * 
 * The `state` of a migration can be one of the following values:
 * 
 * *   `pending`, which means the migration hasn't started yet.
 * *   `exporting`, which means the migration is in progress.
 * *   `exported`, which means the migration finished successfully.
 * *   `failed`, which means the migration failed.
* @param org - The organization name. The name is not case sensitive.
* @param migrationId - The unique identifier of the migration.
* @param [exclude] - Exclude attributes from the API response to improve performance 
*/
export const getStatusForOrg: ApiHeroEndpoint<
  { org: string; migrationId: number; exclude?: Array<"repositories"> },
  Migration
> = {
  id: "migrations/get-status-for-org",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/migrations#download-a-user-migration-archive


* Download a user migration archive
* Fetches the URL to download the migration archive as a `tar.gz` file. Depending on the resources your repository uses, the migration archive can contain JSON files with data for these objects:
 * 
 * *   attachments
 * *   bases
 * *   commit\_comments
 * *   issue\_comments
 * *   issue\_events
 * *   issues
 * *   milestones
 * *   organizations
 * *   projects
 * *   protected\_branches
 * *   pull\_request\_reviews
 * *   pull\_requests
 * *   releases
 * *   repositories
 * *   review\_comments
 * *   schema
 * *   users
 * 
 * The archive will also contain an `attachments` directory that includes all attachment files uploaded to GitHub.com and a `repositories` directory that contains the repository's Git data.
* @param migrationId - The unique identifier of the migration. 
*/
export const getArchiveForAuthenticatedUser: ApiHeroEndpoint<{ migrationId: number }, void> = {
  id: "migrations/get-archive-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/migrations#delete-a-user-migration-archive


* Delete a user migration archive
* Deletes a previous migration archive. Downloadable migration archives are automatically deleted after seven days. Migration metadata, which is returned in the [List user migrations](https://docs.github.com/rest/reference/migrations#list-user-migrations) and [Get a user migration status](https://docs.github.com/rest/reference/migrations#get-a-user-migration-status) endpoints, will continue to be available even after an archive is deleted.
* @param migrationId - The unique identifier of the migration. 
*/
export const deleteArchiveForAuthenticatedUser: ApiHeroEndpoint<{ migrationId: number }, void> = {
  id: "migrations/delete-archive-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/migrations#get-large-files


* Get large files
* List files larger than 100MB found during the import
* @param repo - The name of the repository. The name is not case sensitive.
* @param owner - The account owner of the repository. The name is not case sensitive. 
*/
export const getLargeFiles: ApiHeroEndpoint<
  { repo: string; owner: string },
  Array<PorterLargeFile>
> = {
  id: "migrations/get-large-files",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/migrations#list-repositories-for-a-user-migration


* List repositories for a user migration
* Lists all the repositories for this user migration.
* @param migrationId - The unique identifier of the migration.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listReposForAuthenticatedUser: ApiHeroEndpoint<
  { migrationId: number; perPage?: number; page?: number },
  Array<MinimalRepository>,
  { Link: Link }
> = {
  id: "migrations/list-repos-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/migrations#download-an-organization-migration-archive


* Download an organization migration archive
* Fetches the URL to a migration archive.
* @param org - The organization name. The name is not case sensitive.
* @param migrationId - The unique identifier of the migration. 
*/
export const downloadArchiveForOrg: ApiHeroEndpoint<{ org: string; migrationId: number }, void> = {
  id: "migrations/download-archive-for-org",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/migrations#delete-an-organization-migration-archive


* Delete an organization migration archive
* Deletes a previous migration archive. Migration archives are automatically deleted after seven days.
* @param org - The organization name. The name is not case sensitive.
* @param migrationId - The unique identifier of the migration. 
*/
export const deleteArchiveForOrg: ApiHeroEndpoint<{ org: string; migrationId: number }, void> = {
  id: "migrations/delete-archive-for-org",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/migrations#map-a-commit-author


* Map a commit author
* Update an author's identity for the import. Your application can continue updating authors any time before you push new commits to the repository.
* @param repo - The name of the repository. The name is not case sensitive.
* @param authorId 
* @param owner - The account owner of the repository. The name is not case sensitive. 
*/
export const mapCommitAuthor: ApiHeroEndpoint<
  {
    repo: string;
    authorId: number;
    owner: string;
    author?: {
      /**
       * The new Git author name.
       */
      name?: string;

      /**
       * The new Git author email.
       */
      email?: string;
    };
  },
  PorterAuthor
> = {
  id: "migrations/map-commit-author",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/migrations#list-repositories-in-an-organization-migration


* List repositories in an organization migration
* List all the repositories for this organization migration.
* @param org - The organization name. The name is not case sensitive.
* @param migrationId - The unique identifier of the migration.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listReposForOrg: ApiHeroEndpoint<
  { org: string; migrationId: number; perPage?: number; page?: number },
  Array<MinimalRepository>,
  { Link: Link }
> = {
  id: "migrations/list-repos-for-org",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/migrations#unlock-a-user-repository


* Unlock a user repository
* Unlocks a repository. You can lock repositories when you [start a user migration](https://docs.github.com/rest/reference/migrations#start-a-user-migration). Once the migration is complete you can unlock each repository to begin using it again or [delete the repository](https://docs.github.com/rest/reference/repos#delete-a-repository) if you no longer need the source data. Returns a status of `404 Not Found` if the repository is not locked.
* @param migrationId - The unique identifier of the migration.
* @param repoName - repo_name parameter 
*/
export const unlockRepoForAuthenticatedUser: ApiHeroEndpoint<
  { migrationId: number; repoName: string },
  void
> = {
  id: "migrations/unlock-repo-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/migrations#unlock-an-organization-repository


* Unlock an organization repository
* Unlocks a repository that was locked for migration. You should unlock each migrated repository and [delete them](https://docs.github.com/rest/reference/repos#delete-a-repository) when the migration is complete and you no longer need the source data.
* @param org - The organization name. The name is not case sensitive.
* @param migrationId - The unique identifier of the migration.
* @param repoName - repo_name parameter 
*/
export const unlockRepoForOrg: ApiHeroEndpoint<
  { org: string; migrationId: number; repoName: string },
  void
> = {
  id: "migrations/unlock-repo-for-org",
  clientId: "github",
};
