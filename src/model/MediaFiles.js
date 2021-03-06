/**
 * SVRF API
 * # Getting Started  SVRF's API allows you to supercharge your project or app with the first and largest search engine for immersive experiences. We make it simple for any developer to incorporate highly immersive experiences with all kinds of applications: virtual reality, augmented reality, mixed reality, mobile, and web.  The SVRF API is based on REST principles, allowing it to integrate cross-platform. Our endpoints return responses in [JSON][]. We support [CORS][], allowing you to access immersive experiences indexed by SVRF on your own web domains. We provide a variety of resolutions, projections, and file formats to support most modern clients.  The SVRF API Documentation is available at [https://developers.svrf.com][SVRF Dev].  ## Access and API Keys  The SVRF API is currently in private beta and access is limited to select partners. If you are interested in using the SVRF API for your app or project, please contact us at [api@svrf.com][API Email]. We cannot guarantee immediate access for all requests, but we will announce a public release in the coming months.  See our [terms of service][TOS] for restrictions on using the SVRF API.  If you have any questions please contact us at [api@svrf.com][API Email]. Submit API corrections via [GitHub Issues][].  ## API Highlights  ### Search Endpoint  The [SVRF Search Endpoint][Docs Search] brings the power of immersive search found on [SVRF.com][SVRF] to your app or project. Our search engine enables your users to instantly find the immersive experience they are seeking. Content is sorted by the SVRF rating system, ensuring that the highest quality and most relevant search results are returned first.  ### Trending Endpoint  The [SVRF Trending Endpoint][Docs Trending] provides your app or project with the hottest immersive content - curated by real humans. The experiences returned mirror the [SVRF homepage][SVRF], from timely cultural content to trending pop-culture references. The experiences are updated regularly to ensure users always get a fresh list of immersive content.  ## API Libraries  You can use SVRF API libraries to encapsulate endpoint requests: * [C#][CSharp] * [Java][Java] * [JavaScript][JavaScript] * [Objective C][Objective C] * [Swift][Swift]  ## Attribution  ### Authors and Site Credit  At SVRF, we believe in giving credit where credit is due. Do your best to provide attribution to the `authors` and `site` where the content originated. We suggest using the format: __by {authors} via {site}__.  If possible, provide a way for users to discover and visit the page the content originally came from (`url`).  ### Powered By SVRF  As per section 5a of the [terms of service][TOS], __we require all apps that use the SVRF API to conspicuously display \"Powered By SVRF\" attribution marks where the API is utilized.__  ## Rate Limits  The SVRF API has a generous rate limit to ensure the best experience for your users. We rate limit by IP address with a maximum of 100 requests per second. If you exceed this rate limit, requests will be blocked for 60 seconds. Requests blocked by the rate limit will return with status code `429`.  [API Email]: mailto:api@svrf.com [CORS]: https://en.wikipedia.org/wiki/Cross-origin_resource_sharing [CSharp]: https://www.nuget.org/packages/SVRF.Client [Docs Search]: https://developers.svrf.com/#tag/Media/paths/~1vr~1search?q={q}/get [Docs Trending]: https://developers.svrf.com/#tag/Media/paths/~1vr~1trending/get [GitHub Issues]: https://github.com/Svrf/svrf-api/issues [Java]: https://mvnrepository.com/artifact/com.svrf/svrf-client [JavaScript]: https://www.npmjs.com/package/svrf-client [JSON]: http://www.json.org/ [Objective C]: https://cocoapods.org/pods/SVRFClient [SVRF]: https://www.svrf.com [SVRF Dev]: https://developers.svrf.com [Swift]: https://cocoapods.org/pods/SVRFClientSwift [TOS]: https://www.svrf.com/terms 
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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/MediaImages', 'model/MediaStereo', 'model/MediaVideos'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MediaImages'), require('./MediaStereo'), require('./MediaVideos'));
  } else {
    // Browser globals (root is window)
    if (!root.SVRF) {
      root.SVRF = {};
    }
    root.SVRF.MediaFiles = factory(root.SVRF.ApiClient, root.SVRF.MediaImages, root.SVRF.MediaStereo, root.SVRF.MediaVideos);
  }
}(this, function(ApiClient, MediaImages, MediaStereo, MediaVideos) {
  'use strict';




  /**
   * The MediaFiles model module.
   * @module model/MediaFiles
   * @version 1.3.0
   */

  /**
   * Constructs a new <code>MediaFiles</code>.
   * Various sizes of images and resolutions for the Media. They will never be larger than the Media source&#39;s original resolution.
   * @alias module:model/MediaFiles
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>MediaFiles</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MediaFiles} obj Optional instance to populate.
   * @return {module:model/MediaFiles} The populated <code>MediaFiles</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('glb')) {
        obj['glb'] = ApiClient.convertToType(data['glb'], 'String');
      }
      if (data.hasOwnProperty('glb-draco')) {
        obj['glb-draco'] = ApiClient.convertToType(data['glb-draco'], 'String');
      }
      if (data.hasOwnProperty('gltf')) {
        obj['gltf'] = ApiClient.convertToType(data['gltf'], {'String': 'String'});
      }
      if (data.hasOwnProperty('images')) {
        obj['images'] = MediaImages.constructFromObject(data['images']);
      }
      if (data.hasOwnProperty('stereo')) {
        obj['stereo'] = MediaStereo.constructFromObject(data['stereo']);
      }
      if (data.hasOwnProperty('videos')) {
        obj['videos'] = MediaVideos.constructFromObject(data['videos']);
      }
    }
    return obj;
  }

  /**
   * This is the binary glTF format that should be used by clients if the Media is a 3D object. This is the preferred format to use on end-user devices.
   * @member {String} glb
   */
  exports.prototype['glb'] = undefined;
  /**
   * This is the binary glTF format, with additional DRACO compression, that should be used by clients if the Media is a 3D object. Your renderer must support the KHR_draco_mesh_compression extension to use this model.
   * @member {String} glb-draco
   */
  exports.prototype['glb-draco'] = undefined;
  /**
   * A map of file names to urls where those files are hosted. The file names are relative and their name heirarchy should be respected when saving them locally.
   * @member {Object.<String, String>} gltf
   */
  exports.prototype['gltf'] = undefined;
  /**
   * @member {module:model/MediaImages} images
   */
  exports.prototype['images'] = undefined;
  /**
   * @member {module:model/MediaStereo} stereo
   */
  exports.prototype['stereo'] = undefined;
  /**
   * @member {module:model/MediaVideos} videos
   */
  exports.prototype['videos'] = undefined;



  return exports;
}));


