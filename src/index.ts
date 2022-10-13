import * as migrations from "./migrations";
import * as oauthAuthorizations from "./oauthAuthorizations";
import * as oidc from "./oidc";
import * as orgs from "./orgs";
import * as packages from "./packages";
import * as projects from "./projects";
import * as pulls from "./pulls";
import * as rateLimit from "./rateLimit";
import * as reactions from "./reactions";
import * as repos from "./repos";
import * as scim from "./scim";
import * as search from "./search";
import * as secretScanning from "./secretScanning";
import * as serverStatistics from "./serverStatistics";
import * as teams from "./teams";
import * as users from "./users";
import * as actions from "./actions";
import * as activity from "./activity";
import * as apps from "./apps";
import * as billing from "./billing";
import * as checks from "./checks";
import * as codeScanning from "./codeScanning";
import * as codesOfConduct from "./codesOfConduct";
import * as codespaces from "./codespaces";
import * as emojis from "./emojis";
import * as enterpriseAdmin from "./enterpriseAdmin";
import * as dependabot from "./dependabot";
import * as dependencyGraph from "./dependencyGraph";
import * as gists from "./gists";
import * as git from "./git";
import * as gitignore from "./gitignore";
import * as interactions from "./interactions";
import * as issues from "./issues";
import * as licenses from "./licenses";
import * as markdown from "./markdown";
import * as meta from "./meta";

export {
  migrations,
  oauthAuthorizations,
  oidc,
  orgs,
  packages,
  projects,
  pulls,
  rateLimit,
  reactions,
  repos,
  scim,
  search,
  secretScanning,
  serverStatistics,
  teams,
  users,
  actions,
  activity,
  apps,
  billing,
  checks,
  codeScanning,
  codesOfConduct,
  codespaces,
  emojis,
  enterpriseAdmin,
  dependabot,
  dependencyGraph,
  gists,
  git,
  gitignore,
  interactions,
  issues,
  licenses,
  markdown,
  meta,
};

export * from "./@types";
