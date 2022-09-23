import { DependencyGraphDiff, Snapshot, ApiHeroEndpoint } from "./@types";

/** 
* @see https://docs.github.com/rest/reference/dependency-graph#create-a-snapshot-of-dependencies-for-a-repository


* Create a snapshot of dependencies for a repository
* Create a new snapshot of a repository's dependencies. You must authenticate using an access token with the `repo` scope to use this endpoint for a repository that the requesting user has access to.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const createRepositorySnapshot: ApiHeroEndpoint<
  { owner: string; repo: string; snapshot: Snapshot },
  {
    /**
     * ID of the created snapshot.
     */
    id: number;

    /**
     * Either "SUCCESS", "ACCEPTED", or "INVALID". "SUCCESS" indicates that the snapshot was successfully created and the repository's dependencies were updated. "ACCEPTED" indicates that the snapshot was successfully created, but the repository's dependencies were not updated. "INVALID" indicates that the snapshot was malformed.
     */
    result: string;

    /**
     * A message providing further details about the result, such as why the dependencies were not updated.
     */
    message: string;

    /**
     * The time at which the snapshot was created.
     */
    created_at: string;
  }
> = {
  id: "dependency-graph/create-repository-snapshot",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/dependency-graph#get-a-diff-of-the-dependencies-between-commits


* Get a diff of the dependencies between commits
* Gets the diff of the dependency changes between two commits of a repository, based on the changes to the dependency manifests made in those commits.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param basehead - The base and head Git revisions to compare. The Git revisions will be resolved to commit SHAs. Named revisions will be resolved to their corresponding HEAD commits, and an appropriate merge base will be determined. This parameter expects the format `{base}...{head}`.
* @param [name] - The full path, relative to the repository root, of the dependency manifest file. 
*/
export const diffRange: ApiHeroEndpoint<
  { owner: string; repo: string; basehead: string; name?: string },
  DependencyGraphDiff,
  { Link: string }
> = {
  id: "dependency-graph/diff-range",
  clientId: "github",
};
