/**
 * SVRF API
 * # Getting Started  SVRF's API allows you to supercharge your project or app with the first and largest search engine for immersive experiences. We make it simple for any developer to incorporate highly immersive experiences with all kinds of applications: virtual reality, augmented reality, mixed reality, mobile, and web.  The SVRF API is based on REST principles, allowing it to integrate cross-platform. Our endpoints return responses in [JSON][]. We support [CORS][], allowing you to access immersive experiences indexed by SVRF on your own web domains. We provide a variety of resolutions, projections, and file formats to support most modern clients.  The SVRF API Documentation is available at [https://developers.svrf.com][SVRF Dev].  ## Access and API Keys  The SVRF API is currently in private beta and access is limited to select partners. If you are interested in using the SVRF API for your app or project, please contact us at [api@svrf.com][API Email]. We cannot guarantee immediate access for all requests, but we will announce a public release in the coming months.  See our [terms of service][TOS] for restrictions on using the SVRF API.  If you have any questions please contact us at [api@svrf.com][API Email]. Submit API corrections via [GitHub Issues][].  ## API Highlights  ### Search Endpoint  The [SVRF Search Endpoint][Docs Search] brings the power of immersive search found on [SVRF.com][SVRF] to your app or project. Our search engine enables your users to instantly find the immersive experience they are seeking. Content is sorted by the SVRF rating system, ensuring that the highest quality and most relevant search results are returned first.  ### Trending Endpoint  The [SVRF Trending Endpoint][Docs Trending] provides your app or project with the hottest immersive content - curated by real humans. The experiences returned mirror the [SVRF homepage][SVRF], from timely cultural content to trending pop-culture references. The experiences are updated regularly to ensure users always get a fresh list of immersive content.  ## Attribution  ### Authors and Site Credit  At SVRF, we believe in giving credit where credit is due. Do your best to provide attribution to the `authors` and `site` where the content originated. We suggest using the format: __by {authors} via {site}__.  If possible, provide a way for users to discover and visit the page the content originally came from (`url`).  ### Powered By SVRF  As per section 5a of the [terms of service][TOS], __we require all apps that use the SVRF API to conspicuously display \"Powered By SVRF\" attribution marks where the API is utilized.__  ## Rate Limits  The SVRF API has a generous rate limit to ensure the best experience for your users. We rate limit by IP address with a maximum of 100 requests per second. If you exceed this rate limit, requests will be blocked for 60 seconds. Requests blocked by the rate limit will return with status code `429`.  [API Email]: mailto:api@svrf.com [CORS]: https://en.wikipedia.org/wiki/Cross-origin_resource_sharing [Docs Search]: https://developers.svrf.com/#tag/Media/paths/~1vr~1search?q={q}/get [Docs Trending]: https://developers.svrf.com/#tag/Media/paths/~1vr~1trending/get [GitHub Issues]: https://github.com/Svrf/svrf-api/issues [JSON]: http://www.json.org/ [SVRF]: https://www.svrf.com [SVRF Dev]: https://developers.svrf.com [TOS]: https://www.svrf.com/terms 
 *
 * OpenAPI spec version: 1.0.0
 * Contact: api@svrf.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/APIKey', 'model/Body', 'model/ErrorResponse', 'model/Media', 'model/MediaFiles', 'model/MediaImages', 'model/MediaStereo', 'model/MediaVideos', 'model/SuccessResponse', 'model/AuthResponse', 'model/RateLimitResponse', 'model/SearchMediaResponse', 'model/SingleMediaResponse', 'model/TrendingResponse', 'api/AuthenticateApi', 'api/MediaApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/APIKey'), require('./model/Body'), require('./model/ErrorResponse'), require('./model/Media'), require('./model/MediaFiles'), require('./model/MediaImages'), require('./model/MediaStereo'), require('./model/MediaVideos'), require('./model/SuccessResponse'), require('./model/AuthResponse'), require('./model/RateLimitResponse'), require('./model/SearchMediaResponse'), require('./model/SingleMediaResponse'), require('./model/TrendingResponse'), require('./api/AuthenticateApi'), require('./api/MediaApi'));
  }
}(function(ApiClient, APIKey, Body, ErrorResponse, Media, MediaFiles, MediaImages, MediaStereo, MediaVideos, SuccessResponse, AuthResponse, RateLimitResponse, SearchMediaResponse, SingleMediaResponse, TrendingResponse, AuthenticateApi, MediaApi) {
  'use strict';

  /**
   * _Getting_StartedSVRFs_API_allows_you_to_supercharge_your_project_or_app_with_the_first_and_largest_search_engine_for_immersive_experiences__We_make_it_simple_for_any_developer_to_incorporate_highly_immersive_experiences_with_all_kinds_of_applications_virtual_reality_augmented_reality_mixed_reality_mobile_and_web_The_SVRF_API_is_based_on_REST_principles_allowing_it_to_integrate_cross_platform__Our_endpoints_return_responses_in__JSON__We_support__CORS_allowing_you_to_access_immersive_experiences_indexed_by_SVRF_on_your_own_web_domains__We_provide_a_variety_of_resolutions_projections_and_file_formats_to_support_most_modern_clients_The_SVRF_API_Documentation_is_available_at__httpsdevelopers_svrf_com_SVRF_Dev__Access_and_API_KeysThe_SVRF_API_is_currently_in_private_beta_and_access_is_limited_to_select_partners__If_you_are_interested_in_using_the_SVRF_API_for_your_app_or_project_please_contact_us_at__apisvrf_com_API_Email__We_cannot_guarantee_immediate_access_for_all_requests_but_we_will_announce_a_public_release_in_the_coming_months_See_our__terms_of_service_TOS_for_restrictions_on_using_the_SVRF_API_If_you_have_any_questions_please_contact_us_at__apisvrf_com_API_Email__Submit_API_corrections_via__GitHub_Issues__API_Highlights_Search_EndpointThe__SVRF_Search_Endpoint_Docs_Search_brings_the_power_of_immersive_search_found_on__SVRF_com_SVRF_to_your_app_or_project__Our_search_engine_enables_your_users_to_instantly_find_the_immersive_experience_they_are_seeking__Content_is_sorted_by_the_SVRF_rating_system_ensuring_that_the_highest_quality_and_most_relevant_search_results_are_returned_first__Trending_EndpointThe__SVRF_Trending_Endpoint_Docs_Trending_provides_your_app_or_project_with_the_hottest_immersive_content___curated_by_real_humans__The_experiences_returned_mirror_the__SVRF_homepage_SVRF_from_timely_cultural_content_to_trending_pop_culture_references__The_experiences_are_updated_regularly_to_ensure_users_always_get_a_fresh_list_of_immersive_content__Attribution_Authors_and_Site_CreditAt_SVRF_we_believe_in_giving_credit_where_credit_is_due__Do_your_best_to_provide_attribution_to_the_authors_and_site_where_the_content_originated__We_suggest_using_the_format___by_authors_via_site___If_possible_provide_a_way_for_users_to_discover_and_visit_the_page_the_content_originally_came_from__url__Powered_By_SVRFAs_per_section_5a_of_the__terms_of_service_TOS___we_require_all_apps_that_use_the_SVRF_API_to_conspicuously_display_Powered_By_SVRF_attribution_marks_where_the_API_is_utilized____Rate_LimitsThe_SVRF_API_has_a_generous_rate_limit_to_ensure_the_best_experience_for_your_users__We_rate_limit_by_IP_address_with_a_maximum_of_100_requests_per_second__If_you_exceed_this_rate_limit_requests_will_be_blocked_for_60_seconds__Requests_blocked_by_the_rate_limit_will_return_with_status_code_429__API_Email_mailtoapisvrf_com_CORS_httpsen_wikipedia_orgwikiCross_origin_resource_sharing_Docs_Search_httpsdevelopers_svrf_comtagMediapaths1vr1searchqqget_Docs_Trending_httpsdevelopers_svrf_comtagMediapaths1vr1trendingget_GitHub_Issues_httpsgithub_comSvrfsvrf_apiissues_JSON_httpwww_json_org_SVRF_httpswww_svrf_com_SVRF_Dev_httpsdevelopers_svrf_com_TOS_httpswww_svrf_comterms.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var SvrfApi = require('index'); // See note below*.
   * var xxxSvc = new SvrfApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new SvrfApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new SvrfApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new SvrfApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.0.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The APIKey model constructor.
     * @property {module:model/APIKey}
     */
    APIKey: APIKey,
    /**
     * The Body model constructor.
     * @property {module:model/Body}
     */
    Body: Body,
    /**
     * The ErrorResponse model constructor.
     * @property {module:model/ErrorResponse}
     */
    ErrorResponse: ErrorResponse,
    /**
     * The Media model constructor.
     * @property {module:model/Media}
     */
    Media: Media,
    /**
     * The MediaFiles model constructor.
     * @property {module:model/MediaFiles}
     */
    MediaFiles: MediaFiles,
    /**
     * The MediaImages model constructor.
     * @property {module:model/MediaImages}
     */
    MediaImages: MediaImages,
    /**
     * The MediaStereo model constructor.
     * @property {module:model/MediaStereo}
     */
    MediaStereo: MediaStereo,
    /**
     * The MediaVideos model constructor.
     * @property {module:model/MediaVideos}
     */
    MediaVideos: MediaVideos,
    /**
     * The SuccessResponse model constructor.
     * @property {module:model/SuccessResponse}
     */
    SuccessResponse: SuccessResponse,
    /**
     * The AuthResponse model constructor.
     * @property {module:model/AuthResponse}
     */
    AuthResponse: AuthResponse,
    /**
     * The RateLimitResponse model constructor.
     * @property {module:model/RateLimitResponse}
     */
    RateLimitResponse: RateLimitResponse,
    /**
     * The SearchMediaResponse model constructor.
     * @property {module:model/SearchMediaResponse}
     */
    SearchMediaResponse: SearchMediaResponse,
    /**
     * The SingleMediaResponse model constructor.
     * @property {module:model/SingleMediaResponse}
     */
    SingleMediaResponse: SingleMediaResponse,
    /**
     * The TrendingResponse model constructor.
     * @property {module:model/TrendingResponse}
     */
    TrendingResponse: TrendingResponse,
    /**
     * The AuthenticateApi service constructor.
     * @property {module:api/AuthenticateApi}
     */
    AuthenticateApi: AuthenticateApi,
    /**
     * The MediaApi service constructor.
     * @property {module:api/MediaApi}
     */
    MediaApi: MediaApi
  };

  return exports;
}));