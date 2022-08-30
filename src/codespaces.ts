import {
  Codespace,
  CodespaceExportDetails,
  CodespaceMachine,
  CodespacesPublicKey,
  CodespacesSecret,
  CodespacesUserPublicKey,
  MinimalRepository,
  RepoCodespacesSecret,
  SimpleUser,
  ApiHeroEndpoint,
} from "./@types";

/** 
* @see https://docs.github.com/rest/reference/codespaces#list-codespaces-for-the-authenticated-user


* List codespaces for the authenticated user
* Lists the authenticated user's codespaces.
 * 
 * You must authenticate using an access token with the `codespace` scope to use this endpoint.
 * 
 * GitHub Apps must have read access to the `codespaces` repository permission to use this endpoint.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch.
* @param [repositoryId] - ID of the Repository to filter on 
*/
export const listForAuthenticatedUser: ApiHeroEndpoint<
  { perPage?: number; page?: number; repositoryId?: number },
  {
    codespaces: Array<Codespace>;
    total_count: number;
  }
> = {
  id: "codespaces/list-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/codespaces#create-a-codespace-for-the-authenticated-user


* Create a codespace for the authenticated user
* Creates a new codespace, owned by the authenticated user.
 * 
 * This endpoint requires either a `repository_id` OR a `pull_request` but not both.
 * 
 * You must authenticate using an access token with the `codespace` scope to use this endpoint.
 * 
 * GitHub Apps must have write access to the `codespaces` repository permission to use this endpoint. 
*/
export const createForAuthenticatedUser: ApiHeroEndpoint<
  {
    codespace:
      | {
          /**
           * Git ref (typically a branch name) for this codespace
           */
          ref?: string;

          /**
           * Machine type to use for this codespace
           */
          machine?: string;

          /**
           * Location for this codespace. Assigned by IP if not provided
           */
          location?: string;

          /**
           * IP for location auto-detection when proxying a request
           */
          client_ip?: string;

          /**
           * Display name for this codespace
           */
          display_name?: string;

          /**
           * Repository id for this codespace
           */
          repository_id: number;

          /**
           * Path to devcontainer.json config to use for this codespace
           */
          devcontainer_path?: string;

          /**
           * Working directory for this codespace
           */
          working_directory?: string;

          /**
           * Time in minutes before codespace stops from inactivity
           */
          idle_timeout_minutes?: number;

          /**
           * Duration in minutes after codespace has gone idle in which it will be deleted. Must be integer minutes between 0 and 43200 (30 days).
           */
          retention_period_minutes?: number;

          /**
           * Whether to authorize requested permissions from devcontainer.json
           */
          multi_repo_permissions_opt_out?: boolean;
        }
      | {
          /**
           * Machine type to use for this codespace
           */
          machine?: string;

          /**
           * Location for this codespace. Assigned by IP if not provided
           */
          location?: string;

          /**
           * Pull request number for this codespace
           */
          pull_request: {
            /**
             * Repository id for this codespace
             */
            repository_id: number;

            /**
             * Pull request number
             */
            pull_request_number: number;
          };

          /**
           * Path to devcontainer.json config to use for this codespace
           */
          devcontainer_path?: string;

          /**
           * Working directory for this codespace
           */
          working_directory?: string;

          /**
           * Time in minutes before codespace stops from inactivity
           */
          idle_timeout_minutes?: number;
        };
  },
  Codespace
> = {
  id: "codespaces/create-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/codespaces#list-in-organization


* List codespaces for the organization
* Lists the codespaces associated to a specified organization.
 * 
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
* @param org - The organization name. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listInOrganization: ApiHeroEndpoint<
  { org: string; perPage?: number; page?: number },
  {
    codespaces: Array<Codespace>;
    total_count: number;
  }
> = {
  id: "codespaces/list-in-organization",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/codespaces#list-secrets-for-the-authenticated-user


* List secrets for the authenticated user
* Lists all secrets available for a user's Codespaces without revealing their
 * encrypted values.
 * 
 * You must authenticate using an access token with the `codespace` or `codespace:secrets` scope to use this endpoint. User must have Codespaces access to use this endpoint.
 * 
 * GitHub Apps must have read access to the `codespaces_user_secrets` user permission to use this endpoint.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listSecretsForAuthenticatedUser: ApiHeroEndpoint<
  { perPage?: number; page?: number },
  {
    secrets: Array<CodespacesSecret>;
    total_count: number;
  },
  { Link: string }
> = {
  id: "codespaces/list-secrets-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/codespaces#list-codespaces-in-a-repository-for-the-authenticated-user


* List codespaces in a repository for the authenticated user
* Lists the codespaces associated to a specified repository and the authenticated user.
 * 
 * You must authenticate using an access token with the `codespace` scope to use this endpoint.
 * 
 * GitHub Apps must have read access to the `codespaces` repository permission to use this endpoint.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listInRepositoryForAuthenticatedUser: ApiHeroEndpoint<
  { owner: string; repo: string; perPage?: number; page?: number },
  {
    codespaces: Array<Codespace>;
    total_count: number;
  }
> = {
  id: "codespaces/list-in-repository-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/codespaces#create-a-codespace-in-a-repository


* Create a codespace in a repository
* Creates a codespace owned by the authenticated user in the specified repository.
 * 
 * You must authenticate using an access token with the `codespace` scope to use this endpoint.
 * 
 * GitHub Apps must have write access to the `codespaces` repository permission to use this endpoint.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const createWithRepoForAuthenticatedUser: ApiHeroEndpoint<
  {
    owner: string;
    repo: string;
    codespace: {
      /**
       * Git ref (typically a branch name) for this codespace
       */
      ref?: string;

      /**
       * Machine type to use for this codespace
       */
      machine?: string;

      /**
       * Location for this codespace. Assigned by IP if not provided
       */
      location?: string;

      /**
       * IP for location auto-detection when proxying a request
       */
      client_ip?: string;

      /**
       * Display name for this codespace
       */
      display_name?: string;

      /**
       * Path to devcontainer.json config to use for this codespace
       */
      devcontainer_path?: string;

      /**
       * Working directory for this codespace
       */
      working_directory?: string;

      /**
       * Time in minutes before codespace stops from inactivity
       */
      idle_timeout_minutes?: number;

      /**
       * Duration in minutes after codespace has gone idle in which it will be deleted. Must be integer minutes between 0 and 43200 (30 days).
       */
      retention_period_minutes?: number;

      /**
       * Whether to authorize requested permissions from devcontainer.json
       */
      multi_repo_permissions_opt_out?: boolean;
    } | null;
  },
  Codespace
> = {
  id: "codespaces/create-with-repo-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/codespaces#get-a-codespace-for-the-authenticated-user


* Get a codespace for the authenticated user
* Gets information about a user's codespace.
 * 
 * You must authenticate using an access token with the `codespace` scope to use this endpoint.
 * 
 * GitHub Apps must have read access to the `codespaces` repository permission to use this endpoint.
* @param codespaceName - The name of the codespace. 
*/
export const getForAuthenticatedUser: ApiHeroEndpoint<{ codespaceName: string }, Codespace> = {
  id: "codespaces/get-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/codespaces#delete-a-codespace-for-the-authenticated-user


* Delete a codespace for the authenticated user
* Deletes a user's codespace.
 * 
 * You must authenticate using an access token with the `codespace` scope to use this endpoint.
 * 
 * GitHub Apps must have write access to the `codespaces` repository permission to use this endpoint.
* @param codespaceName - The name of the codespace. 
*/
export const deleteForAuthenticatedUser: ApiHeroEndpoint<{ codespaceName: string }, {}> = {
  id: "codespaces/delete-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/codespaces#update-a-codespace-for-the-authenticated-user


* Update a codespace for the authenticated user
* Updates a codespace owned by the authenticated user. Currently only the codespace's machine type and recent folders can be modified using this endpoint.
 * 
 * If you specify a new machine type it will be applied the next time your codespace is started.
 * 
 * You must authenticate using an access token with the `codespace` scope to use this endpoint.
 * 
 * GitHub Apps must have write access to the `codespaces` repository permission to use this endpoint.
* @param codespaceName - The name of the codespace. 
*/
export const updateForAuthenticatedUser: ApiHeroEndpoint<
  {
    codespaceName: string;
    codespace?: {
      /**
       * A valid machine to transition this codespace to.
       */
      machine?: string;

      /**
       * Display name for this codespace
       */
      display_name?: string;

      /**
       * Recently opened folders inside the codespace. It is currently used by the clients to determine the folder path to load the codespace in.
       */
      recent_folders?: Array<string>;
    };
  },
  Codespace
> = {
  id: "codespaces/update-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/codespaces#get-public-key-for-the-authenticated-user


* Get public key for the authenticated user
* Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets.
 * 
 * You must authenticate using an access token with the `codespace` or `codespace:secrets` scope to use this endpoint. User must have Codespaces access to use this endpoint.
 * 
 * GitHub Apps must have read access to the `codespaces_user_secrets` user permission to use this endpoint. 
*/
export const getPublicKeyForAuthenticatedUser: ApiHeroEndpoint<void, CodespacesUserPublicKey> = {
  id: "codespaces/get-public-key-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/codespaces#preview-attributes-for-a-new-codespace


* Get default attributes for a codespace
* Gets the default attributes for codespaces created by the user with the repository.
 * 
 * You must authenticate using an access token with the `codespace` scope to use this endpoint.
 * 
 * GitHub Apps must have write access to the `codespaces` repository permission to use this endpoint.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param [ref] - The branch or commit to check for a default devcontainer path. If not specified, the default branch will be checked.
* @param [clientIp] - An alternative IP for default location auto-detection, such as when proxying a request. 
*/
export const preFlightWithRepoForAuthenticatedUser: ApiHeroEndpoint<
  { owner: string; repo: string; ref?: string; clientIp?: string },
  {
    defaults?: {
      location: string;
      devcontainer_path: string | null;
    };
    billable_owner?: SimpleUser;
  }
> = {
  id: "codespaces/pre-flight-with-repo-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/codespaces#get-a-secret-for-the-authenticated-user


* Get a secret for the authenticated user
* Gets a secret available to a user's codespaces without revealing its encrypted value.
 * 
 * You must authenticate using an access token with the `codespace` or `codespace:secrets` scope to use this endpoint. User must have Codespaces access to use this endpoint.
 * 
 * GitHub Apps must have read access to the `codespaces_user_secrets` user permission to use this endpoint.
* @param secretName - The name of the secret. 
*/
export const getSecretForAuthenticatedUser: ApiHeroEndpoint<
  { secretName: string },
  CodespacesSecret
> = {
  id: "codespaces/get-secret-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/codespaces#create-or-update-a-secret-for-the-authenticated-user


* Create or update a secret for the authenticated user
* Creates or updates a secret for a user's codespace with an encrypted value. Encrypt your secret using
 * [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages).
 * 
 * You must authenticate using an access token with the `codespace` or `codespace:secrets` scope to use this endpoint. User must also have Codespaces access to use this endpoint.
 * 
 * GitHub Apps must have read access to the `codespaces_user_secrets` user permission and `codespaces_secrets` repository permission on all referenced repositories to use this endpoint.
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
* @param secretName - The name of the secret. 
*/
export const createOrUpdateSecretForAuthenticatedUser: ApiHeroEndpoint<
  {
    secretName: string;
    secret: {
      /**
       * ID of the key you used to encrypt the secret.
       */
      key_id: string;

      /**
       * Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get the public key for the authenticated user](https://docs.github.com/rest/reference/codespaces#get-the-public-key-for-the-authenticated-user) endpoint.
       */
      encrypted_value?: string;

      /**
       * An array of repository ids that can access the user secret. You can manage the list of selected repositories using the [List selected repositories for a user secret](https://docs.github.com/rest/reference/codespaces#list-selected-repositories-for-a-user-secret), [Set selected repositories for a user secret](https://docs.github.com/rest/reference/codespaces#set-selected-repositories-for-a-user-secret), and [Remove a selected repository from a user secret](https://docs.github.com/rest/reference/codespaces#remove-a-selected-repository-from-a-user-secret) endpoints.
       */
      selected_repository_ids?: Array<string>;
    };
  },
  {}
> = {
  id: "codespaces/create-or-update-secret-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/codespaces#delete-a-secret-for-the-authenticated-user


* Delete a secret for the authenticated user
* Deletes a secret from a user's codespaces using the secret name. Deleting the secret will remove access from all codespaces that were allowed to access the secret.
 * 
 * You must authenticate using an access token with the `codespace` or `codespace:secrets` scope to use this endpoint. User must have Codespaces access to use this endpoint.
 * 
 * GitHub Apps must have write access to the `codespaces_user_secrets` user permission to use this endpoint.
* @param secretName - The name of the secret. 
*/
export const deleteSecretForAuthenticatedUser: ApiHeroEndpoint<{ secretName: string }, void> = {
  id: "codespaces/delete-secret-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/codespaces#stop-a-codespace-for-the-authenticated-user


* Stop a codespace for the authenticated user
* Stops a user's codespace.
 * 
 * You must authenticate using an access token with the `codespace` scope to use this endpoint.
 * 
 * GitHub Apps must have write access to the `codespaces_lifecycle_admin` repository permission to use this endpoint.
* @param codespaceName - The name of the codespace. 
*/
export const stopForAuthenticatedUser: ApiHeroEndpoint<{ codespaceName: string }, Codespace> = {
  id: "codespaces/stop-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/codespaces#start-a-codespace-for-the-authenticated-user


* Start a codespace for the authenticated user
* Starts a user's codespace.
 * 
 * You must authenticate using an access token with the `codespace` scope to use this endpoint.
 * 
 * GitHub Apps must have write access to the `codespaces_lifecycle_admin` repository permission to use this endpoint.
* @param codespaceName - The name of the codespace. 
*/
export const startForAuthenticatedUser: ApiHeroEndpoint<{ codespaceName: string }, Codespace> = {
  id: "codespaces/start-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/codespaces#list-repository-secrets


* List repository secrets
* Lists all secrets available in a repository without revealing their encrypted values. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `codespaces_secrets` repository permission to use this endpoint.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listRepoSecrets: ApiHeroEndpoint<
  { owner: string; repo: string; perPage?: number; page?: number },
  {
    secrets: Array<RepoCodespacesSecret>;
    total_count: number;
  },
  { Link: string }
> = {
  id: "codespaces/list-repo-secrets",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/codespaces#list-available-machine-types-for-a-repository


* List available machine types for a repository
* List the machine types available for a given repository based on its configuration.
 * 
 * You must authenticate using an access token with the `codespace` scope to use this endpoint.
 * 
 * GitHub Apps must have write access to the `codespaces_metadata` repository permission to use this endpoint.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param [location] - The location to check for available machines. Assigned by IP if not provided.
* @param [clientIp] - IP for location auto-detection when proxying a request 
*/
export const repoMachinesForAuthenticatedUser: ApiHeroEndpoint<
  { owner: string; repo: string; location?: string; clientIp?: string },
  {
    machines: Array<CodespaceMachine>;
    total_count: number;
  }
> = {
  id: "codespaces/repo-machines-for-authenticated-user",
  clientId: "github",
};

/** 


* Export a codespace for the authenticated user
* Triggers an export of the specified codespace and returns a URL and ID where the status of the export can be monitored.
 * 
 * You must authenticate using a personal access token with the `codespace` scope to use this endpoint.
 * 
 * GitHub Apps must have write access to the `codespaces_lifecycle_admin` repository permission to use this endpoint.
* @param codespaceName - The name of the codespace. 
*/
export const exportForAuthenticatedUser: ApiHeroEndpoint<
  { codespaceName: string },
  CodespaceExportDetails
> = {
  id: "codespaces/export-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/codespaces#list-machine-types-for-a-codespace


* List machine types for a codespace
* List the machine types a codespace can transition to use.
 * 
 * You must authenticate using an access token with the `codespace` scope to use this endpoint.
 * 
 * GitHub Apps must have read access to the `codespaces_metadata` repository permission to use this endpoint.
* @param codespaceName - The name of the codespace. 
*/
export const codespaceMachinesForAuthenticatedUser: ApiHeroEndpoint<
  { codespaceName: string },
  {
    machines: Array<CodespaceMachine>;
    total_count: number;
  }
> = {
  id: "codespaces/codespace-machines-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/codespaces#list-devcontainers-in-a-repository-for-the-authenticated-user


* List devcontainer configurations in a repository for the authenticated user
* Lists the devcontainer.json files associated with a specified repository and the authenticated user. These files
 * specify launchpoint configurations for codespaces created within the repository.
 * 
 * You must authenticate using an access token with the `codespace` scope to use this endpoint.
 * 
 * GitHub Apps must have read access to the `codespaces_metadata` repository permission to use this endpoint.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listDevcontainersInRepositoryForAuthenticatedUser: ApiHeroEndpoint<
  { owner: string; repo: string; perPage?: number; page?: number },
  {
    total_count: number;
    devcontainers: Array<{
      name?: string;
      path: string;
    }>;
  }
> = {
  id: "codespaces/list-devcontainers-in-repository-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/codespaces#get-a-repository-public-key


* Get a repository public key
* Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `codespaces_secrets` repository permission to use this endpoint.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const getRepoPublicKey: ApiHeroEndpoint<
  { owner: string; repo: string },
  CodespacesPublicKey
> = {
  id: "codespaces/get-repo-public-key",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/codespaces#list-selected-repositories-for-a-user-secret


* List selected repositories for a user secret
* List the repositories that have been granted the ability to use a user's codespace secret.
 * 
 * You must authenticate using an access token with the `codespace` or `codespace:secrets` scope to use this endpoint. User must have Codespaces access to use this endpoint.
 * 
 * GitHub Apps must have read access to the `codespaces_user_secrets` user permission and write access to the `codespaces_secrets` repository permission on all referenced repositories to use this endpoint.
* @param secretName - The name of the secret. 
*/
export const listRepositoriesForSecretForAuthenticatedUser: ApiHeroEndpoint<
  { secretName: string },
  {
    total_count: number;
    repositories: Array<MinimalRepository>;
  }
> = {
  id: "codespaces/list-repositories-for-secret-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/codespaces#set-selected-repositories-for-a-user-secret


* Set selected repositories for a user secret
* Select the repositories that will use a user's codespace secret.
 * 
 * You must authenticate using an access token with the `codespace` or `codespace:secrets` scope to use this endpoint. User must have Codespaces access to use this endpoint.
 * 
 * GitHub Apps must have write access to the `codespaces_user_secrets` user permission and write access to the `codespaces_secrets` repository permission on all referenced repositories to use this endpoint.
* @param secretName - The name of the secret. 
*/
export const setRepositoriesForSecretForAuthenticatedUser: ApiHeroEndpoint<
  {
    secretName: string;
    payload: {
      /**
       * An array of repository ids for which a codespace can access the secret. You can manage the list of selected repositories using the [List selected repositories for a user secret](https://docs.github.com/rest/reference/codespaces#list-selected-repositories-for-a-user-secret), [Add a selected repository to a user secret](https://docs.github.com/rest/reference/codespaces#add-a-selected-repository-to-a-user-secret), and [Remove a selected repository from a user secret](https://docs.github.com/rest/reference/codespaces#remove-a-selected-repository-from-a-user-secret) endpoints.
       */
      selected_repository_ids: Array<number>;
    };
  },
  void
> = {
  id: "codespaces/set-repositories-for-secret-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/codespaces#create-a-codespace-from-a-pull-request


* Create a codespace from a pull request
* Creates a codespace owned by the authenticated user for the specified pull request.
 * 
 * You must authenticate using an access token with the `codespace` scope to use this endpoint.
 * 
 * GitHub Apps must have write access to the `codespaces` repository permission to use this endpoint.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param pullNumber - The number that identifies the pull request.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const createWithPrForAuthenticatedUser: ApiHeroEndpoint<
  {
    owner: string;
    pullNumber: number;
    repo: string;
    codespace: {
      /**
       * Machine type to use for this codespace
       */
      machine?: string;

      /**
       * Location for this codespace. Assigned by IP if not provided
       */
      location?: string;

      /**
       * IP for location auto-detection when proxying a request
       */
      client_ip?: string;

      /**
       * Display name for this codespace
       */
      display_name?: string;

      /**
       * Path to devcontainer.json config to use for this codespace
       */
      devcontainer_path?: string;

      /**
       * Working directory for this codespace
       */
      working_directory?: string;

      /**
       * Time in minutes before codespace stops from inactivity
       */
      idle_timeout_minutes?: number;

      /**
       * Duration in minutes after codespace has gone idle in which it will be deleted. Must be integer minutes between 0 and 43200 (30 days).
       */
      retention_period_minutes?: number;

      /**
       * Whether to authorize requested permissions from devcontainer.json
       */
      multi_repo_permissions_opt_out?: boolean;
    } | null;
  },
  Codespace
> = {
  id: "codespaces/create-with-pr-for-authenticated-user",
  clientId: "github",
};

/** 


* Get details about a codespace export
* Gets information about an export of a codespace.
 * 
 * You must authenticate using a personal access token with the `codespace` scope to use this endpoint.
 * 
 * GitHub Apps must have read access to the `codespaces_lifecycle_admin` repository permission to use this endpoint.
* @param codespaceName - The name of the codespace.
* @param exportId - The ID of the export operation, or `latest`. Currently only `latest` is currently supported. 
*/
export const getExportDetailsForAuthenticatedUser: ApiHeroEndpoint<
  { codespaceName: string; exportId: string },
  CodespaceExportDetails
> = {
  id: "codespaces/get-export-details-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/codespaces#get-a-repository-secret


* Get a repository secret
* Gets a single repository secret without revealing its encrypted value. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `codespaces_secrets` repository permission to use this endpoint.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param secretName - The name of the secret.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const getRepoSecret: ApiHeroEndpoint<
  { owner: string; secretName: string; repo: string },
  RepoCodespacesSecret
> = {
  id: "codespaces/get-repo-secret",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/codespaces#create-or-update-a-repository-secret


* Create or update a repository secret
* Creates or updates a repository secret with an encrypted value. Encrypt your secret using
 * [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). You must authenticate using an access
 * token with the `repo` scope to use this endpoint. GitHub Apps must have the `codespaces_secrets` repository
 * permission to use this endpoint.
 * 
 * #### Example of encrypting a secret using Node.js
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
 * #### Example of encrypting a secret using Python
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
 * #### Example of encrypting a secret using C#
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
 * #### Example of encrypting a secret using Ruby
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
       * Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get a repository public key](https://docs.github.com/rest/reference/codespaces#get-a-repository-public-key) endpoint.
       */
      encrypted_value?: string;
    };
  },
  {}
> = {
  id: "codespaces/create-or-update-repo-secret",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/codespaces#delete-a-repository-secret


* Delete a repository secret
* Deletes a secret in a repository using the secret name. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `codespaces_secrets` repository permission to use this endpoint.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param secretName - The name of the secret.
* @param repo - The name of the repository. The name is not case sensitive. 
*/
export const deleteRepoSecret: ApiHeroEndpoint<
  { owner: string; secretName: string; repo: string },
  void
> = {
  id: "codespaces/delete-repo-secret",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/codespaces


* Delete a codespace from the organization
* Deletes a user's codespace.
 * 
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
* @param org - The organization name. The name is not case sensitive.
* @param username - The handle for the GitHub user account.
* @param codespaceName - The name of the codespace. 
*/
export const deleteFromOrganization: ApiHeroEndpoint<
  { org: string; username: string; codespaceName: string },
  {}
> = {
  id: "codespaces/delete-from-organization",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/codespaces


* Stop a codespace for an organization user
* Stops a user's codespace.
 * 
 * You must authenticate using an access token with the `admin:org` scope to use this endpoint.
* @param org - The organization name. The name is not case sensitive.
* @param username - The handle for the GitHub user account.
* @param codespaceName - The name of the codespace. 
*/
export const stopInOrganization: ApiHeroEndpoint<
  { org: string; username: string; codespaceName: string },
  Codespace
> = {
  id: "codespaces/stop-in-organization",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/codespaces#add-a-selected-repository-to-a-user-secret


* Add a selected repository to a user secret
* Adds a repository to the selected repositories for a user's codespace secret.
 * You must authenticate using an access token with the `codespace` or `codespace:secrets` scope to use this endpoint. User must have Codespaces access to use this endpoint.
 * GitHub Apps must have write access to the `codespaces_user_secrets` user permission and write access to the `codespaces_secrets` repository permission on the referenced repository to use this endpoint.
* @param repositoryId 
* @param secretName - The name of the secret. 
*/
export const addRepositoryForSecretForAuthenticatedUser: ApiHeroEndpoint<
  { repositoryId: number; secretName: string },
  void
> = {
  id: "codespaces/add-repository-for-secret-for-authenticated-user",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/codespaces#remove-a-selected-repository-from-a-user-secret


* Remove a selected repository from a user secret
* Removes a repository from the selected repositories for a user's codespace secret.
 * You must authenticate using an access token with the `codespace` or `codespace:secrets` scope to use this endpoint. User must have Codespaces access to use this endpoint.
 * GitHub Apps must have write access to the `codespaces_user_secrets` user permission to use this endpoint.
* @param repositoryId 
* @param secretName - The name of the secret. 
*/
export const removeRepositoryForSecretForAuthenticatedUser: ApiHeroEndpoint<
  { repositoryId: number; secretName: string },
  void
> = {
  id: "codespaces/remove-repository-for-secret-for-authenticated-user",
  clientId: "github",
};
