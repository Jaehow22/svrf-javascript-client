# svrf_api

SvrfApi - JavaScript client for svrf_api
# Getting Started  SVRF's API allows you to supercharge your project or app with the first and largest search engine for immersive experiences. We make it simple for any developer to incorporate highly immersive experiences with all kinds of applications: virtual reality, augmented reality, mixed reality, mobile, and web.  The SVRF API is based on REST principles, allowing it to integrate cross-platform. Our endpoints return responses in [JSON][]. We support [CORS][], allowing you to access immersive experiences indexed by SVRF on your own web domains. We provide a variety of resolutions, projections, and file formats to support most modern clients.  The SVRF API Documentation is available at [https://developers.svrf.com][SVRF Dev].  ## Access and API Keys  The SVRF API is currently in private beta and access is limited to select partners. If you are interested in using the SVRF API for your app or project, please contact us at [api@svrf.com][API Email]. We cannot guarantee immediate access for all requests, but we will announce a public release in the coming months.  See our [terms of service][TOS] for restrictions on using the SVRF API.  If you have any questions please contact us at [api@svrf.com][API Email]. Submit API corrections via [GitHub Issues][].  ## API Highlights  ### Search Endpoint  The [SVRF Search Endpoint][Docs Search] brings the power of immersive search found on [SVRF.com][SVRF] to your app or project. Our search engine enables your users to instantly find the immersive experience they are seeking. Content is sorted by the SVRF rating system, ensuring that the highest quality and most relevant search results are returned first.  ### Trending Endpoint  The [SVRF Trending Endpoint][Docs Trending] provides your app or project with the hottest immersive content - curated by real humans. The experiences returned mirror the [SVRF homepage][SVRF], from timely cultural content to trending pop-culture references. The experiences are updated regularly to ensure users always get a fresh list of immersive content.  ## Attribution  ### Authors and Site Credit  At SVRF, we believe in giving credit where credit is due. Do your best to provide attribution to the `authors` and `site` where the content originated. We suggest using the format: __by {authors} via {site}__.  If possible, provide a way for users to discover and visit the page the content originally came from (`url`).  ### Powered By SVRF  As per section 5a of the [terms of service][TOS], __we require all apps that use the SVRF API to conspicuously display \"Powered By SVRF\" attribution marks where the API is utilized.__  ## Rate Limits  The SVRF API has a generous rate limit to ensure the best experience for your users. We rate limit by IP address with a maximum of 100 requests per second. If you exceed this rate limit, requests will be blocked for 60 seconds. Requests blocked by the rate limit will return with status code `429`.  [API Email]: mailto:api@svrf.com [CORS]: https://en.wikipedia.org/wiki/Cross-origin_resource_sharing [Docs Search]: https://developers.svrf.com/#tag/Media/paths/~1vr~1search?q={q}/get [Docs Trending]: https://developers.svrf.com/#tag/Media/paths/~1vr~1trending/get [GitHub Issues]: https://github.com/Svrf/svrf-api/issues [JSON]: http://www.json.org/ [SVRF]: https://www.svrf.com [SVRF Dev]: https://developers.svrf.com [TOS]: https://www.svrf.com/terms 
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install svrf_api --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your svrf_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('svrf_api')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var SvrfApi = require('svrf_api');

var api = new SvrfApi.AuthenticateApi()

var body = new SvrfApi.Body(); // {Body} 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.appAuthenticatePost(body, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.svrf.com/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*SvrfApi.AuthenticateApi* | [**appAuthenticatePost**](docs/AuthenticateApi.md#appAuthenticatePost) | **POST** /app/authenticate | Authenticate application
*SvrfApi.MediaApi* | [**vrIdGet**](docs/MediaApi.md#vrIdGet) | **GET** /vr/{id} | Media by ID Endpoint
*SvrfApi.MediaApi* | [**vrSearchGet**](docs/MediaApi.md#vrSearchGet) | **GET** /vr/search | Search Endpoint
*SvrfApi.MediaApi* | [**vrTrendingGet**](docs/MediaApi.md#vrTrendingGet) | **GET** /vr/trending | Trending Endpoint


## Documentation for Models

 - [SvrfApi.APIKey](docs/APIKey.md)
 - [SvrfApi.Body](docs/Body.md)
 - [SvrfApi.ErrorResponse](docs/ErrorResponse.md)
 - [SvrfApi.Media](docs/Media.md)
 - [SvrfApi.MediaFiles](docs/MediaFiles.md)
 - [SvrfApi.MediaImages](docs/MediaImages.md)
 - [SvrfApi.MediaStereo](docs/MediaStereo.md)
 - [SvrfApi.MediaVideos](docs/MediaVideos.md)
 - [SvrfApi.SuccessResponse](docs/SuccessResponse.md)
 - [SvrfApi.AuthResponse](docs/AuthResponse.md)
 - [SvrfApi.RateLimitResponse](docs/RateLimitResponse.md)
 - [SvrfApi.SearchMediaResponse](docs/SearchMediaResponse.md)
 - [SvrfApi.SingleMediaResponse](docs/SingleMediaResponse.md)
 - [SvrfApi.TrendingResponse](docs/TrendingResponse.md)


## Documentation for Authorization


### XAppToken

- **Type**: API key
- **API key parameter name**: x-app-token
- **Location**: HTTP header

