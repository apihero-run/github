import {
  DependabotPublicKey,
  DependabotSecret,
  EmptyObject,
  Link,
  MinimalRepository,
  OrganizationDependabotSecret,
  ApiHeroEndpoint,
} from "./@types";

/** 
* @see https://docs.github.com/rest/reference/dependabot#list-organization-secrets


* List organization secrets
* Lists all secrets available in an organization without revealing their encrypted values. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` organization permission to use this endpoint.
* @param org - The organization name. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listOrgSecrets: ApiHeroEndpoint<
  { org: string; perPage?: number; page?: number },
  {
    secrets: Array<OrganizationDependabotSecret>;
    total_count: number;
  },
  { Link: Link }
> = {
  id: "dependabot/list-org-secrets",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/dependabot#list-repository-secrets


* List repository secrets
* Lists all secrets available in a repository without revealing their encrypted values. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` repository permission to use this endpoint.
* @param repo - The name of the repository. The name is not case sensitive.
* @param owner - The account owner of the repository. The name is not case sensitive.
* @param [perPage=30] - The number of results per page (max 100).
* @param [page=1] - Page number of the results to fetch. 
*/
export const listRepoSecrets: ApiHeroEndpoint<
  { repo: string; owner: string; perPage?: number; page?: number },
  {
    secrets: Array<DependabotSecret>;
    total_count: number;
  },
  { Link: Link }
> = {
  id: "dependabot/list-repo-secrets",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/dependabot#get-an-organization-public-key


* Get an organization public key
* Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` organization permission to use this endpoint.
* @param org - The organization name. The name is not case sensitive. 
*/
export const getOrgPublicKey: ApiHeroEndpoint<{ org: string }, DependabotPublicKey> = {
  id: "dependabot/get-org-public-key",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/dependabot#get-an-organization-secret


* Get an organization secret
* Gets a single organization secret without revealing its encrypted value. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` organization permission to use this endpoint.
* @param org - The organization name. The name is not case sensitive.
* @param secretName - The name of the secret. 
*/
export const getOrgSecret: ApiHeroEndpoint<
  { org: string; secretName: string },
  OrganizationDependabotSecret
> = {
  id: "dependabot/get-org-secret",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/dependabot#create-or-update-an-organization-secret


* Create or update an organization secret
* Creates or updates an organization secret with an encrypted value. Encrypt your secret using
 * [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). You must authenticate using an access
 * token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` organization
 * permission to use this endpoint.
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
       * Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get an organization public key](https://docs.github.com/rest/reference/dependabot#get-an-organization-public-key) endpoint.
       */
      encrypted_value?: string;

      /**
       * An array of repository ids that can access the organization secret. You can only provide a list of repository ids when the `visibility` is set to `selected`. You can manage the list of selected repositories using the [List selected repositories for an organization secret](https://docs.github.com/rest/reference/dependabot#list-selected-repositories-for-an-organization-secret), [Set selected repositories for an organization secret](https://docs.github.com/rest/reference/dependabot#set-selected-repositories-for-an-organization-secret), and [Remove selected repository from an organization secret](https://docs.github.com/rest/reference/dependabot#remove-selected-repository-from-an-organization-secret) endpoints.
       */
      selected_repository_ids?: Array<string>;
    };
  },
  EmptyObject
> = {
  id: "dependabot/create-or-update-org-secret",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/dependabot#delete-an-organization-secret


* Delete an organization secret
* Deletes a secret in an organization using the secret name. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` organization permission to use this endpoint.
* @param org - The organization name. The name is not case sensitive.
* @param secretName - The name of the secret. 
*/
export const deleteOrgSecret: ApiHeroEndpoint<{ org: string; secretName: string }, void> = {
  id: "dependabot/delete-org-secret",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/dependabot#get-a-repository-public-key


* Get a repository public key
* Gets your public key, which you need to encrypt secrets. You need to encrypt a secret before you can create or update secrets. Anyone with read access to the repository can use this endpoint. If the repository is private you must use an access token with the `repo` scope. GitHub Apps must have the `dependabot_secrets` repository permission to use this endpoint.
* @param repo - The name of the repository. The name is not case sensitive.
* @param owner - The account owner of the repository. The name is not case sensitive. 
*/
export const getRepoPublicKey: ApiHeroEndpoint<
  { repo: string; owner: string },
  DependabotPublicKey
> = {
  id: "dependabot/get-repo-public-key",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/dependabot#get-a-repository-secret


* Get a repository secret
* Gets a single repository secret without revealing its encrypted value. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` repository permission to use this endpoint.
* @param repo - The name of the repository. The name is not case sensitive.
* @param secretName - The name of the secret.
* @param owner - The account owner of the repository. The name is not case sensitive. 
*/
export const getRepoSecret: ApiHeroEndpoint<
  { repo: string; secretName: string; owner: string },
  DependabotSecret
> = {
  id: "dependabot/get-repo-secret",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/dependabot#create-or-update-a-repository-secret


* Create or update a repository secret
* Creates or updates a repository secret with an encrypted value. Encrypt your secret using
 * [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages). You must authenticate using an access
 * token with the `repo` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` repository
 * permission to use this endpoint.
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
* @param repo - The name of the repository. The name is not case sensitive.
* @param secretName - The name of the secret.
* @param owner - The account owner of the repository. The name is not case sensitive. 
*/
export const createOrUpdateRepoSecret: ApiHeroEndpoint<
  {
    repo: string;
    secretName: string;
    owner: string;
    secret: {
      /**
       * ID of the key you used to encrypt the secret.
       */
      key_id?: string;

      /**
       * Value for your secret, encrypted with [LibSodium](https://libsodium.gitbook.io/doc/bindings_for_other_languages) using the public key retrieved from the [Get a repository public key](https://docs.github.com/rest/reference/dependabot#get-a-repository-public-key) endpoint.
       */
      encrypted_value?: string;
    };
  },
  EmptyObject
> = {
  id: "dependabot/create-or-update-repo-secret",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/dependabot#delete-a-repository-secret


* Delete a repository secret
* Deletes a secret in a repository using the secret name. You must authenticate using an access token with the `repo` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` repository permission to use this endpoint.
* @param repo - The name of the repository. The name is not case sensitive.
* @param secretName - The name of the secret.
* @param owner - The account owner of the repository. The name is not case sensitive. 
*/
export const deleteRepoSecret: ApiHeroEndpoint<
  { repo: string; secretName: string; owner: string },
  void
> = {
  id: "dependabot/delete-repo-secret",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/dependabot#list-selected-repositories-for-an-organization-secret


* List selected repositories for an organization secret
* Lists all repositories that have been selected when the `visibility` for repository access to a secret is set to `selected`. You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` organization permission to use this endpoint.
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
  id: "dependabot/list-selected-repos-for-org-secret",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/dependabot#set-selected-repositories-for-an-organization-secret


* Set selected repositories for an organization secret
* Replaces all repositories for an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/rest/reference/dependabot#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` organization permission to use this endpoint.
* @param org - The organization name. The name is not case sensitive.
* @param secretName - The name of the secret. 
*/
export const setSelectedReposForOrgSecret: ApiHeroEndpoint<
  {
    org: string;
    secretName: string;
    secretName: {
      /**
       * An array of repository ids that can access the organization secret. You can only provide a list of repository ids when the `visibility` is set to `selected`. You can add and remove individual repositories using the [Set selected repositories for an organization secret](https://docs.github.com/rest/reference/dependabot#set-selected-repositories-for-an-organization-secret) and [Remove selected repository from an organization secret](https://docs.github.com/rest/reference/dependabot#remove-selected-repository-from-an-organization-secret) endpoints.
       */
      selected_repository_ids: Array<number>;
    };
  },
  void
> = {
  id: "dependabot/set-selected-repos-for-org-secret",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/dependabot#add-selected-repository-to-an-organization-secret


* Add selected repository to an organization secret
* Adds a repository to an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/rest/reference/dependabot#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` organization permission to use this endpoint.
* @param org - The organization name. The name is not case sensitive.
* @param secretName - The name of the secret.
* @param repositoryId  
*/
export const addSelectedRepoToOrgSecret: ApiHeroEndpoint<
  { org: string; secretName: string; repositoryId: number },
  void
> = {
  id: "dependabot/add-selected-repo-to-org-secret",
  clientId: "github",
};

/** 
* @see https://docs.github.com/rest/reference/dependabot#remove-selected-repository-from-an-organization-secret


* Remove selected repository from an organization secret
* Removes a repository from an organization secret when the `visibility` for repository access is set to `selected`. The visibility is set when you [Create or update an organization secret](https://docs.github.com/rest/reference/dependabot#create-or-update-an-organization-secret). You must authenticate using an access token with the `admin:org` scope to use this endpoint. GitHub Apps must have the `dependabot_secrets` organization permission to use this endpoint.
* @param org - The organization name. The name is not case sensitive.
* @param secretName - The name of the secret.
* @param repositoryId  
*/
export const removeSelectedRepoFromOrgSecret: ApiHeroEndpoint<
  { org: string; secretName: string; repositoryId: number },
  void
> = {
  id: "dependabot/remove-selected-repo-from-org-secret",
  clientId: "github",
};
