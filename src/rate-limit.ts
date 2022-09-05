import { RateLimitOverview, ApiHeroEndpoint } from "./@types";

/** 
* @see https://docs.github.com/rest/reference/rate-limit#get-rate-limit-status-for-the-authenticated-user


* Get rate limit status for the authenticated user
* **Note:** Accessing this endpoint does not count against your REST API rate limit.
 * 
 * **Note:** The `rate` object is deprecated. If you're writing new API client code or updating existing code, you should use the `core` object instead of the `rate` object. The `core` object contains the same information that is present in the `rate` object. 
*/
export const getRateLimits: ApiHeroEndpoint<
  void,
  RateLimitOverview,
  { "X-RateLimit-Limit": number; "X-RateLimit-Reset": number; "X-RateLimit-Remaining": number }
> = {
  id: "rate-limit/get",
  clientId: "github",
};
