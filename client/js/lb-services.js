// CommonJS package manager support
if (typeof module !== 'undefined' && typeof exports !== 'undefined' &&
  module.exports === exports) {
  // Export the *name* of this Angular module
  // Sample usage:
  //
  //   import lbServices from './lb-services';
  //   angular.module('app', [lbServices]);
  //
  module.exports = "lbServices";
}

(function(window, angular, undefined) {
  'use strict';

  var urlBase = "/api";
  var authHeader = 'authorization';

  function getHost(url) {
    var m = url.match(/^(?:https?:)?\/\/([^\/]+)/);
    return m ? m[1] : null;
  }

  var urlBaseHost = getHost(urlBase) || location.host;

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
  var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.Investigation
 * @header lbServices.Investigation
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Investigation` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Investigation",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector',
      function(Resource, LoopBackAuth, $injector) {
        var R = Resource(
        urlBase + "/investigations/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Investigation.variables.findById() instead.
            "prototype$__findById__variables": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/investigations/:id/variables/:fk",
              method: "GET",
            },

            // INTERNAL. Use Investigation.variables.destroyById() instead.
            "prototype$__destroyById__variables": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/investigations/:id/variables/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Investigation.variables.updateById() instead.
            "prototype$__updateById__variables": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/investigations/:id/variables/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Investigation.experts.findById() instead.
            "prototype$__findById__experts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/investigations/:id/experts/:fk",
              method: "GET",
            },

            // INTERNAL. Use Investigation.experts.destroyById() instead.
            "prototype$__destroyById__experts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/investigations/:id/experts/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Investigation.experts.updateById() instead.
            "prototype$__updateById__experts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/investigations/:id/experts/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Investigation.polls.findById() instead.
            "prototype$__findById__polls": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/investigations/:id/polls/:fk",
              method: "GET",
            },

            // INTERNAL. Use Investigation.polls.destroyById() instead.
            "prototype$__destroyById__polls": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/investigations/:id/polls/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Investigation.polls.updateById() instead.
            "prototype$__updateById__polls": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/investigations/:id/polls/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Investigation.variables() instead.
            "prototype$__get__variables": {
              isArray: true,
              url: urlBase + "/investigations/:id/variables",
              method: "GET",
            },

            // INTERNAL. Use Investigation.variables.create() instead.
            "prototype$__create__variables": {
              url: urlBase + "/investigations/:id/variables",
              method: "POST",
            },

            // INTERNAL. Use Investigation.variables.destroyAll() instead.
            "prototype$__delete__variables": {
              url: urlBase + "/investigations/:id/variables",
              method: "DELETE",
            },

            // INTERNAL. Use Investigation.variables.count() instead.
            "prototype$__count__variables": {
              url: urlBase + "/investigations/:id/variables/count",
              method: "GET",
            },

            // INTERNAL. Use Investigation.experts() instead.
            "prototype$__get__experts": {
              isArray: true,
              url: urlBase + "/investigations/:id/experts",
              method: "GET",
            },

            // INTERNAL. Use Investigation.experts.create() instead.
            "prototype$__create__experts": {
              url: urlBase + "/investigations/:id/experts",
              method: "POST",
            },

            // INTERNAL. Use Investigation.experts.destroyAll() instead.
            "prototype$__delete__experts": {
              url: urlBase + "/investigations/:id/experts",
              method: "DELETE",
            },

            // INTERNAL. Use Investigation.experts.count() instead.
            "prototype$__count__experts": {
              url: urlBase + "/investigations/:id/experts/count",
              method: "GET",
            },

            // INTERNAL. Use Investigation.polls() instead.
            "prototype$__get__polls": {
              isArray: true,
              url: urlBase + "/investigations/:id/polls",
              method: "GET",
            },

            // INTERNAL. Use Investigation.polls.create() instead.
            "prototype$__create__polls": {
              url: urlBase + "/investigations/:id/polls",
              method: "POST",
            },

            // INTERNAL. Use Investigation.polls.destroyAll() instead.
            "prototype$__delete__polls": {
              url: urlBase + "/investigations/:id/polls",
              method: "DELETE",
            },

            // INTERNAL. Use Investigation.polls.count() instead.
            "prototype$__count__polls": {
              url: urlBase + "/investigations/:id/polls/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Investigation#create
             * @methodOf lbServices.Investigation
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Investigation` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/investigations",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Investigation#createMany
             * @methodOf lbServices.Investigation
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Investigation` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/investigations",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Investigation#upsert
             * @methodOf lbServices.Investigation
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Investigation` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/investigations",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Investigation#replaceOrCreate
             * @methodOf lbServices.Investigation
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Investigation` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/investigations/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Investigation#upsertWithWhere
             * @methodOf lbServices.Investigation
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Investigation` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/investigations/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Investigation#exists
             * @methodOf lbServices.Investigation
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/investigations/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Investigation#findById
             * @methodOf lbServices.Investigation
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Investigation` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/investigations/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Investigation#replaceById
             * @methodOf lbServices.Investigation
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Investigation` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/investigations/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Investigation#find
             * @methodOf lbServices.Investigation
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Investigation` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/investigations",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Investigation#findOne
             * @methodOf lbServices.Investigation
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Investigation` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/investigations/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Investigation#updateAll
             * @methodOf lbServices.Investigation
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/investigations/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Investigation#deleteById
             * @methodOf lbServices.Investigation
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Investigation` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/investigations/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Investigation#count
             * @methodOf lbServices.Investigation
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/investigations/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Investigation#prototype$updateAttributes
             * @methodOf lbServices.Investigation
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Investigation` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/investigations/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Investigation#createChangeStream
             * @methodOf lbServices.Investigation
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/investigations/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Account.investigations.findById() instead.
            "::findById::Account::investigations": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Accounts/:id/investigations/:fk",
              method: "GET",
            },

            // INTERNAL. Use Account.investigations.destroyById() instead.
            "::destroyById::Account::investigations": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Accounts/:id/investigations/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Account.investigations.updateById() instead.
            "::updateById::Account::investigations": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Accounts/:id/investigations/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Account.investigations() instead.
            "::get::Account::investigations": {
              isArray: true,
              url: urlBase + "/Accounts/:id/investigations",
              method: "GET",
            },

            // INTERNAL. Use Account.investigations.create() instead.
            "::create::Account::investigations": {
              url: urlBase + "/Accounts/:id/investigations",
              method: "POST",
            },

            // INTERNAL. Use Account.investigations.createMany() instead.
            "::createMany::Account::investigations": {
              isArray: true,
              url: urlBase + "/Accounts/:id/investigations",
              method: "POST",
            },

            // INTERNAL. Use Account.investigations.destroyAll() instead.
            "::delete::Account::investigations": {
              url: urlBase + "/Accounts/:id/investigations",
              method: "DELETE",
            },

            // INTERNAL. Use Account.investigations.count() instead.
            "::count::Account::investigations": {
              url: urlBase + "/Accounts/:id/investigations/count",
              method: "GET",
            },

            // INTERNAL. Use Poll.investigation() instead.
            "::get::Poll::investigation": {
              url: urlBase + "/Polls/:id/investigation",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Investigation#patchOrCreate
             * @methodOf lbServices.Investigation
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Investigation` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Investigation#updateOrCreate
             * @methodOf lbServices.Investigation
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Investigation` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Investigation#patchOrCreateWithWhere
             * @methodOf lbServices.Investigation
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Investigation` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Investigation#update
             * @methodOf lbServices.Investigation
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Investigation#destroyById
             * @methodOf lbServices.Investigation
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Investigation` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Investigation#removeById
             * @methodOf lbServices.Investigation
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Investigation` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Investigation#patchAttributes
             * @methodOf lbServices.Investigation
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Investigation` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Investigation#modelName
        * @propertyOf lbServices.Investigation
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Investigation`.
        */
        R.modelName = "Investigation";

    /**
     * @ngdoc object
     * @name lbServices.Investigation.variables
     * @header lbServices.Investigation.variables
     * @object
     * @description
     *
     * The object `Investigation.variables` groups methods
     * manipulating `Variable` instances related to `Investigation`.
     *
     * Call {@link lbServices.Investigation#variables Investigation.variables()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Investigation#variables
             * @methodOf lbServices.Investigation
             *
             * @description
             *
             * Queries variables of Investigation.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Variable` object.)
             * </em>
             */
        R.variables = function() {
          var TargetResource = $injector.get("Variable");
          var action = TargetResource["::get::Investigation::variables"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Investigation.variables#count
             * @methodOf lbServices.Investigation.variables
             *
             * @description
             *
             * Counts variables of Investigation.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.variables.count = function() {
          var TargetResource = $injector.get("Variable");
          var action = TargetResource["::count::Investigation::variables"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Investigation.variables#create
             * @methodOf lbServices.Investigation.variables
             *
             * @description
             *
             * Creates a new instance in variables of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Variable` object.)
             * </em>
             */
        R.variables.create = function() {
          var TargetResource = $injector.get("Variable");
          var action = TargetResource["::create::Investigation::variables"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Investigation.variables#createMany
             * @methodOf lbServices.Investigation.variables
             *
             * @description
             *
             * Creates a new instance in variables of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Variable` object.)
             * </em>
             */
        R.variables.createMany = function() {
          var TargetResource = $injector.get("Variable");
          var action = TargetResource["::createMany::Investigation::variables"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Investigation.variables#destroyAll
             * @methodOf lbServices.Investigation.variables
             *
             * @description
             *
             * Deletes all variables of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.variables.destroyAll = function() {
          var TargetResource = $injector.get("Variable");
          var action = TargetResource["::delete::Investigation::variables"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Investigation.variables#destroyById
             * @methodOf lbServices.Investigation.variables
             *
             * @description
             *
             * Delete a related item by id for variables.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for variables
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.variables.destroyById = function() {
          var TargetResource = $injector.get("Variable");
          var action = TargetResource["::destroyById::Investigation::variables"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Investigation.variables#findById
             * @methodOf lbServices.Investigation.variables
             *
             * @description
             *
             * Find a related item by id for variables.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for variables
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Variable` object.)
             * </em>
             */
        R.variables.findById = function() {
          var TargetResource = $injector.get("Variable");
          var action = TargetResource["::findById::Investigation::variables"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Investigation.variables#updateById
             * @methodOf lbServices.Investigation.variables
             *
             * @description
             *
             * Update a related item by id for variables.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for variables
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Variable` object.)
             * </em>
             */
        R.variables.updateById = function() {
          var TargetResource = $injector.get("Variable");
          var action = TargetResource["::updateById::Investigation::variables"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Investigation.experts
     * @header lbServices.Investigation.experts
     * @object
     * @description
     *
     * The object `Investigation.experts` groups methods
     * manipulating `Expert` instances related to `Investigation`.
     *
     * Call {@link lbServices.Investigation#experts Investigation.experts()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Investigation#experts
             * @methodOf lbServices.Investigation
             *
             * @description
             *
             * Queries experts of Investigation.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Expert` object.)
             * </em>
             */
        R.experts = function() {
          var TargetResource = $injector.get("Expert");
          var action = TargetResource["::get::Investigation::experts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Investigation.experts#count
             * @methodOf lbServices.Investigation.experts
             *
             * @description
             *
             * Counts experts of Investigation.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.experts.count = function() {
          var TargetResource = $injector.get("Expert");
          var action = TargetResource["::count::Investigation::experts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Investigation.experts#create
             * @methodOf lbServices.Investigation.experts
             *
             * @description
             *
             * Creates a new instance in experts of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Expert` object.)
             * </em>
             */
        R.experts.create = function() {
          var TargetResource = $injector.get("Expert");
          var action = TargetResource["::create::Investigation::experts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Investigation.experts#createMany
             * @methodOf lbServices.Investigation.experts
             *
             * @description
             *
             * Creates a new instance in experts of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Expert` object.)
             * </em>
             */
        R.experts.createMany = function() {
          var TargetResource = $injector.get("Expert");
          var action = TargetResource["::createMany::Investigation::experts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Investigation.experts#destroyAll
             * @methodOf lbServices.Investigation.experts
             *
             * @description
             *
             * Deletes all experts of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.experts.destroyAll = function() {
          var TargetResource = $injector.get("Expert");
          var action = TargetResource["::delete::Investigation::experts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Investigation.experts#destroyById
             * @methodOf lbServices.Investigation.experts
             *
             * @description
             *
             * Delete a related item by id for experts.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for experts
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.experts.destroyById = function() {
          var TargetResource = $injector.get("Expert");
          var action = TargetResource["::destroyById::Investigation::experts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Investigation.experts#findById
             * @methodOf lbServices.Investigation.experts
             *
             * @description
             *
             * Find a related item by id for experts.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for experts
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Expert` object.)
             * </em>
             */
        R.experts.findById = function() {
          var TargetResource = $injector.get("Expert");
          var action = TargetResource["::findById::Investigation::experts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Investigation.experts#updateById
             * @methodOf lbServices.Investigation.experts
             *
             * @description
             *
             * Update a related item by id for experts.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for experts
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Expert` object.)
             * </em>
             */
        R.experts.updateById = function() {
          var TargetResource = $injector.get("Expert");
          var action = TargetResource["::updateById::Investigation::experts"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Investigation.polls
     * @header lbServices.Investigation.polls
     * @object
     * @description
     *
     * The object `Investigation.polls` groups methods
     * manipulating `Poll` instances related to `Investigation`.
     *
     * Call {@link lbServices.Investigation#polls Investigation.polls()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Investigation#polls
             * @methodOf lbServices.Investigation
             *
             * @description
             *
             * Queries polls of Investigation.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Poll` object.)
             * </em>
             */
        R.polls = function() {
          var TargetResource = $injector.get("Poll");
          var action = TargetResource["::get::Investigation::polls"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Investigation.polls#count
             * @methodOf lbServices.Investigation.polls
             *
             * @description
             *
             * Counts polls of Investigation.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.polls.count = function() {
          var TargetResource = $injector.get("Poll");
          var action = TargetResource["::count::Investigation::polls"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Investigation.polls#create
             * @methodOf lbServices.Investigation.polls
             *
             * @description
             *
             * Creates a new instance in polls of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Poll` object.)
             * </em>
             */
        R.polls.create = function() {
          var TargetResource = $injector.get("Poll");
          var action = TargetResource["::create::Investigation::polls"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Investigation.polls#createMany
             * @methodOf lbServices.Investigation.polls
             *
             * @description
             *
             * Creates a new instance in polls of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Poll` object.)
             * </em>
             */
        R.polls.createMany = function() {
          var TargetResource = $injector.get("Poll");
          var action = TargetResource["::createMany::Investigation::polls"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Investigation.polls#destroyAll
             * @methodOf lbServices.Investigation.polls
             *
             * @description
             *
             * Deletes all polls of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.polls.destroyAll = function() {
          var TargetResource = $injector.get("Poll");
          var action = TargetResource["::delete::Investigation::polls"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Investigation.polls#destroyById
             * @methodOf lbServices.Investigation.polls
             *
             * @description
             *
             * Delete a related item by id for polls.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for polls
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.polls.destroyById = function() {
          var TargetResource = $injector.get("Poll");
          var action = TargetResource["::destroyById::Investigation::polls"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Investigation.polls#findById
             * @methodOf lbServices.Investigation.polls
             *
             * @description
             *
             * Find a related item by id for polls.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for polls
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Poll` object.)
             * </em>
             */
        R.polls.findById = function() {
          var TargetResource = $injector.get("Poll");
          var action = TargetResource["::findById::Investigation::polls"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Investigation.polls#updateById
             * @methodOf lbServices.Investigation.polls
             *
             * @description
             *
             * Update a related item by id for polls.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for polls
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Poll` object.)
             * </em>
             */
        R.polls.updateById = function() {
          var TargetResource = $injector.get("Poll");
          var action = TargetResource["::updateById::Investigation::polls"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Variable
 * @header lbServices.Variable
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Variable` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Variable",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector',
      function(Resource, LoopBackAuth, $injector) {
        var R = Resource(
        urlBase + "/variables/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.Variable#create
             * @methodOf lbServices.Variable
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Variable` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/variables",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Variable#createMany
             * @methodOf lbServices.Variable
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Variable` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/variables",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Variable#upsert
             * @methodOf lbServices.Variable
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Variable` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/variables",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Variable#replaceOrCreate
             * @methodOf lbServices.Variable
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Variable` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/variables/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Variable#upsertWithWhere
             * @methodOf lbServices.Variable
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Variable` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/variables/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Variable#exists
             * @methodOf lbServices.Variable
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/variables/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Variable#findById
             * @methodOf lbServices.Variable
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Variable` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/variables/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Variable#replaceById
             * @methodOf lbServices.Variable
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Variable` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/variables/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Variable#find
             * @methodOf lbServices.Variable
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Variable` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/variables",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Variable#findOne
             * @methodOf lbServices.Variable
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Variable` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/variables/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Variable#updateAll
             * @methodOf lbServices.Variable
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/variables/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Variable#deleteById
             * @methodOf lbServices.Variable
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Variable` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/variables/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Variable#count
             * @methodOf lbServices.Variable
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/variables/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Variable#prototype$updateAttributes
             * @methodOf lbServices.Variable
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Variable` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/variables/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Variable#createChangeStream
             * @methodOf lbServices.Variable
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/variables/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Investigation.variables.findById() instead.
            "::findById::Investigation::variables": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/investigations/:id/variables/:fk",
              method: "GET",
            },

            // INTERNAL. Use Investigation.variables.destroyById() instead.
            "::destroyById::Investigation::variables": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/investigations/:id/variables/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Investigation.variables.updateById() instead.
            "::updateById::Investigation::variables": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/investigations/:id/variables/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Investigation.variables() instead.
            "::get::Investigation::variables": {
              isArray: true,
              url: urlBase + "/investigations/:id/variables",
              method: "GET",
            },

            // INTERNAL. Use Investigation.variables.create() instead.
            "::create::Investigation::variables": {
              url: urlBase + "/investigations/:id/variables",
              method: "POST",
            },

            // INTERNAL. Use Investigation.variables.createMany() instead.
            "::createMany::Investigation::variables": {
              isArray: true,
              url: urlBase + "/investigations/:id/variables",
              method: "POST",
            },

            // INTERNAL. Use Investigation.variables.destroyAll() instead.
            "::delete::Investigation::variables": {
              url: urlBase + "/investigations/:id/variables",
              method: "DELETE",
            },

            // INTERNAL. Use Investigation.variables.count() instead.
            "::count::Investigation::variables": {
              url: urlBase + "/investigations/:id/variables/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Variable#patchOrCreate
             * @methodOf lbServices.Variable
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Variable` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Variable#updateOrCreate
             * @methodOf lbServices.Variable
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Variable` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Variable#patchOrCreateWithWhere
             * @methodOf lbServices.Variable
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Variable` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Variable#update
             * @methodOf lbServices.Variable
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Variable#destroyById
             * @methodOf lbServices.Variable
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Variable` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Variable#removeById
             * @methodOf lbServices.Variable
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Variable` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Variable#patchAttributes
             * @methodOf lbServices.Variable
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Variable` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Variable#modelName
        * @propertyOf lbServices.Variable
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Variable`.
        */
        R.modelName = "Variable";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Account
 * @header lbServices.Account
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Account` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Account",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector',
      function(Resource, LoopBackAuth, $injector) {
        var R = Resource(
        urlBase + "/Accounts/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.Account#prototype$__findById__accessTokens
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Find a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Account` object.)
             * </em>
             */
            "prototype$__findById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Accounts/:id/accessTokens/:fk",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Account#prototype$__destroyById__accessTokens
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Delete a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroyById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Accounts/:id/accessTokens/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Account#prototype$__updateById__accessTokens
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Update a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Account` object.)
             * </em>
             */
            "prototype$__updateById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Accounts/:id/accessTokens/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Account.investigations.findById() instead.
            "prototype$__findById__investigations": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Accounts/:id/investigations/:fk",
              method: "GET",
            },

            // INTERNAL. Use Account.investigations.destroyById() instead.
            "prototype$__destroyById__investigations": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Accounts/:id/investigations/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Account.investigations.updateById() instead.
            "prototype$__updateById__investigations": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Accounts/:id/investigations/:fk",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Account#prototype$__get__accessTokens
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Queries accessTokens of Account.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Account` object.)
             * </em>
             */
            "prototype$__get__accessTokens": {
              isArray: true,
              url: urlBase + "/Accounts/:id/accessTokens",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Account#prototype$__create__accessTokens
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Creates a new instance in accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Account` object.)
             * </em>
             */
            "prototype$__create__accessTokens": {
              url: urlBase + "/Accounts/:id/accessTokens",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Account#prototype$__delete__accessTokens
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Deletes all accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__delete__accessTokens": {
              url: urlBase + "/Accounts/:id/accessTokens",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Account#prototype$__count__accessTokens
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Counts accessTokens of Account.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "prototype$__count__accessTokens": {
              url: urlBase + "/Accounts/:id/accessTokens/count",
              method: "GET",
            },

            // INTERNAL. Use Account.investigations() instead.
            "prototype$__get__investigations": {
              isArray: true,
              url: urlBase + "/Accounts/:id/investigations",
              method: "GET",
            },

            // INTERNAL. Use Account.investigations.create() instead.
            "prototype$__create__investigations": {
              url: urlBase + "/Accounts/:id/investigations",
              method: "POST",
            },

            // INTERNAL. Use Account.investigations.destroyAll() instead.
            "prototype$__delete__investigations": {
              url: urlBase + "/Accounts/:id/investigations",
              method: "DELETE",
            },

            // INTERNAL. Use Account.investigations.count() instead.
            "prototype$__count__investigations": {
              url: urlBase + "/Accounts/:id/investigations/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Account#create
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Account` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Accounts",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Account#createMany
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Account` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Accounts",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Account#upsert
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Account` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/Accounts",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Account#replaceOrCreate
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Account` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Accounts/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Account#upsertWithWhere
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Account` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Accounts/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Account#exists
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Accounts/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Account#findById
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Account` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Accounts/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Account#replaceById
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Account` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Accounts/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Account#find
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Account` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Accounts",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Account#findOne
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Account` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Accounts/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Account#updateAll
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/Accounts/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Account#deleteById
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Account` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Accounts/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Account#count
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Accounts/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Account#prototype$updateAttributes
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Account` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/Accounts/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Account#createChangeStream
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Accounts/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Account#login
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Login a user with username/email and password.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
             *   Default value: `user`.
             *
             *  - `rememberMe` - `boolean` - Whether the authentication credentials
             *     should be remembered in localStorage across app/browser restarts.
             *     Default: `true`.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The response body contains properties of the AccessToken created on login.
             * Depending on the value of `include` parameter, the body may contain additional properties:
             *   - `user` - `U+007BUserU+007D` - Data of the currently logged in user. (`include=user`)
             *
             */
            "login": {
              params: {
                include: 'user',
              },
              interceptor: {
                response: function(response) {
                  var accessToken = response.data;
                  LoopBackAuth.setUser(
                    accessToken.id, accessToken.userId, accessToken.user);
                  LoopBackAuth.rememberMe =
                    response.config.params.rememberMe !== false;
                  LoopBackAuth.save();
                  return response.resource;
                },
              },
              url: urlBase + "/Accounts/login",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Account#logout
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Logout a user with access token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "logout": {
              interceptor: {
                response: function(response) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return responseError.resource;
                },
              },
              url: urlBase + "/Accounts/logout",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Account#confirm
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Confirm a user registration with email verification token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `uid` – `{string}` -
             *
             *  - `token` – `{string}` -
             *
             *  - `redirect` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "confirm": {
              url: urlBase + "/Accounts/confirm",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Account#resetPassword
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Reset password for a user with email.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "resetPassword": {
              url: urlBase + "/Accounts/reset",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Account#getCurrent
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Get data of the currently logged user. Fail with HTTP result 401
             * when there is no user logged in.
             *
             * @param {function(Object,Object)=} successCb
             *    Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *    `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             */
            'getCurrent': {
              url: urlBase + "/Accounts" + '/:id',
              method: 'GET',
              params: {
                id: function() {
                  var id = LoopBackAuth.currentUserId;
                  if (id == null) id = '__anonymous__';
                  return id;
                },
              },
              interceptor: {
                response: function(response) {
                  LoopBackAuth.currentUserData = response.data;
                  return response.resource;
                },
              },
              __isGetCurrentUser__: true,
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Account#patchOrCreate
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Account` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Account#updateOrCreate
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Account` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Account#patchOrCreateWithWhere
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Account` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Account#update
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Account#destroyById
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Account` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Account#removeById
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Account` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Account#patchAttributes
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Account` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];

        /**
         * @ngdoc method
         * @name lbServices.Account#getCachedCurrent
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.Account#login} or
         * {@link lbServices.Account#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A Account instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Account#isAuthenticated
         * @methodOf lbServices.Account
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Account#getCurrentId
         * @methodOf lbServices.Account
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

        /**
        * @ngdoc property
        * @name lbServices.Account#modelName
        * @propertyOf lbServices.Account
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Account`.
        */
        R.modelName = "Account";

    /**
     * @ngdoc object
     * @name lbServices.Account.investigations
     * @header lbServices.Account.investigations
     * @object
     * @description
     *
     * The object `Account.investigations` groups methods
     * manipulating `Investigation` instances related to `Account`.
     *
     * Call {@link lbServices.Account#investigations Account.investigations()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Account#investigations
             * @methodOf lbServices.Account
             *
             * @description
             *
             * Queries investigations of Account.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Investigation` object.)
             * </em>
             */
        R.investigations = function() {
          var TargetResource = $injector.get("Investigation");
          var action = TargetResource["::get::Account::investigations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Account.investigations#count
             * @methodOf lbServices.Account.investigations
             *
             * @description
             *
             * Counts investigations of Account.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.investigations.count = function() {
          var TargetResource = $injector.get("Investigation");
          var action = TargetResource["::count::Account::investigations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Account.investigations#create
             * @methodOf lbServices.Account.investigations
             *
             * @description
             *
             * Creates a new instance in investigations of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Investigation` object.)
             * </em>
             */
        R.investigations.create = function() {
          var TargetResource = $injector.get("Investigation");
          var action = TargetResource["::create::Account::investigations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Account.investigations#createMany
             * @methodOf lbServices.Account.investigations
             *
             * @description
             *
             * Creates a new instance in investigations of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Investigation` object.)
             * </em>
             */
        R.investigations.createMany = function() {
          var TargetResource = $injector.get("Investigation");
          var action = TargetResource["::createMany::Account::investigations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Account.investigations#destroyAll
             * @methodOf lbServices.Account.investigations
             *
             * @description
             *
             * Deletes all investigations of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.investigations.destroyAll = function() {
          var TargetResource = $injector.get("Investigation");
          var action = TargetResource["::delete::Account::investigations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Account.investigations#destroyById
             * @methodOf lbServices.Account.investigations
             *
             * @description
             *
             * Delete a related item by id for investigations.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for investigations
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.investigations.destroyById = function() {
          var TargetResource = $injector.get("Investigation");
          var action = TargetResource["::destroyById::Account::investigations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Account.investigations#findById
             * @methodOf lbServices.Account.investigations
             *
             * @description
             *
             * Find a related item by id for investigations.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for investigations
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Investigation` object.)
             * </em>
             */
        R.investigations.findById = function() {
          var TargetResource = $injector.get("Investigation");
          var action = TargetResource["::findById::Account::investigations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Account.investigations#updateById
             * @methodOf lbServices.Account.investigations
             *
             * @description
             *
             * Update a related item by id for investigations.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for investigations
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Investigation` object.)
             * </em>
             */
        R.investigations.updateById = function() {
          var TargetResource = $injector.get("Investigation");
          var action = TargetResource["::updateById::Account::investigations"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Expert
 * @header lbServices.Expert
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Expert` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Expert",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector',
      function(Resource, LoopBackAuth, $injector) {
        var R = Resource(
        urlBase + "/Experts/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Expert.polls.findById() instead.
            "prototype$__findById__polls": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Experts/:id/polls/:fk",
              method: "GET",
            },

            // INTERNAL. Use Expert.polls.destroyById() instead.
            "prototype$__destroyById__polls": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Experts/:id/polls/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Expert.polls.updateById() instead.
            "prototype$__updateById__polls": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Experts/:id/polls/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Expert.polls.link() instead.
            "prototype$__link__polls": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Experts/:id/polls/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Expert.polls.unlink() instead.
            "prototype$__unlink__polls": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Experts/:id/polls/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Expert.polls.exists() instead.
            "prototype$__exists__polls": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Experts/:id/polls/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Expert.polls() instead.
            "prototype$__get__polls": {
              isArray: true,
              url: urlBase + "/Experts/:id/polls",
              method: "GET",
            },

            // INTERNAL. Use Expert.polls.create() instead.
            "prototype$__create__polls": {
              url: urlBase + "/Experts/:id/polls",
              method: "POST",
            },

            // INTERNAL. Use Expert.polls.destroyAll() instead.
            "prototype$__delete__polls": {
              url: urlBase + "/Experts/:id/polls",
              method: "DELETE",
            },

            // INTERNAL. Use Expert.polls.count() instead.
            "prototype$__count__polls": {
              url: urlBase + "/Experts/:id/polls/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Expert#create
             * @methodOf lbServices.Expert
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Expert` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Experts",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Expert#createMany
             * @methodOf lbServices.Expert
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Expert` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Experts",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Expert#upsert
             * @methodOf lbServices.Expert
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Expert` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/Experts",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Expert#replaceOrCreate
             * @methodOf lbServices.Expert
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Expert` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Experts/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Expert#upsertWithWhere
             * @methodOf lbServices.Expert
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Expert` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Experts/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Expert#exists
             * @methodOf lbServices.Expert
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Experts/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Expert#findById
             * @methodOf lbServices.Expert
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Expert` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Experts/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Expert#replaceById
             * @methodOf lbServices.Expert
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Expert` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Experts/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Expert#find
             * @methodOf lbServices.Expert
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Expert` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Experts",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Expert#findOne
             * @methodOf lbServices.Expert
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Expert` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Experts/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Expert#updateAll
             * @methodOf lbServices.Expert
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/Experts/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Expert#deleteById
             * @methodOf lbServices.Expert
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Expert` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Experts/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Expert#count
             * @methodOf lbServices.Expert
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Experts/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Expert#prototype$updateAttributes
             * @methodOf lbServices.Expert
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Expert` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/Experts/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Expert#createChangeStream
             * @methodOf lbServices.Expert
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Experts/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Investigation.experts.findById() instead.
            "::findById::Investigation::experts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/investigations/:id/experts/:fk",
              method: "GET",
            },

            // INTERNAL. Use Investigation.experts.destroyById() instead.
            "::destroyById::Investigation::experts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/investigations/:id/experts/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Investigation.experts.updateById() instead.
            "::updateById::Investigation::experts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/investigations/:id/experts/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Investigation.experts() instead.
            "::get::Investigation::experts": {
              isArray: true,
              url: urlBase + "/investigations/:id/experts",
              method: "GET",
            },

            // INTERNAL. Use Investigation.experts.create() instead.
            "::create::Investigation::experts": {
              url: urlBase + "/investigations/:id/experts",
              method: "POST",
            },

            // INTERNAL. Use Investigation.experts.createMany() instead.
            "::createMany::Investigation::experts": {
              isArray: true,
              url: urlBase + "/investigations/:id/experts",
              method: "POST",
            },

            // INTERNAL. Use Investigation.experts.destroyAll() instead.
            "::delete::Investigation::experts": {
              url: urlBase + "/investigations/:id/experts",
              method: "DELETE",
            },

            // INTERNAL. Use Investigation.experts.count() instead.
            "::count::Investigation::experts": {
              url: urlBase + "/investigations/:id/experts/count",
              method: "GET",
            },

            // INTERNAL. Use Poll.experts.findById() instead.
            "::findById::Poll::experts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Polls/:id/experts/:fk",
              method: "GET",
            },

            // INTERNAL. Use Poll.experts.destroyById() instead.
            "::destroyById::Poll::experts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Polls/:id/experts/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Poll.experts.updateById() instead.
            "::updateById::Poll::experts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Polls/:id/experts/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Poll.experts.link() instead.
            "::link::Poll::experts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Polls/:id/experts/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Poll.experts.unlink() instead.
            "::unlink::Poll::experts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Polls/:id/experts/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Poll.experts.exists() instead.
            "::exists::Poll::experts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Polls/:id/experts/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Poll.experts() instead.
            "::get::Poll::experts": {
              isArray: true,
              url: urlBase + "/Polls/:id/experts",
              method: "GET",
            },

            // INTERNAL. Use Poll.experts.create() instead.
            "::create::Poll::experts": {
              url: urlBase + "/Polls/:id/experts",
              method: "POST",
            },

            // INTERNAL. Use Poll.experts.createMany() instead.
            "::createMany::Poll::experts": {
              isArray: true,
              url: urlBase + "/Polls/:id/experts",
              method: "POST",
            },

            // INTERNAL. Use Poll.experts.destroyAll() instead.
            "::delete::Poll::experts": {
              url: urlBase + "/Polls/:id/experts",
              method: "DELETE",
            },

            // INTERNAL. Use Poll.experts.count() instead.
            "::count::Poll::experts": {
              url: urlBase + "/Polls/:id/experts/count",
              method: "GET",
            },

            // INTERNAL. Use Result.expert() instead.
            "::get::Result::expert": {
              url: urlBase + "/Results/:id/expert",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Expert#patchOrCreate
             * @methodOf lbServices.Expert
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Expert` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Expert#updateOrCreate
             * @methodOf lbServices.Expert
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Expert` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Expert#patchOrCreateWithWhere
             * @methodOf lbServices.Expert
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Expert` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Expert#update
             * @methodOf lbServices.Expert
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Expert#destroyById
             * @methodOf lbServices.Expert
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Expert` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Expert#removeById
             * @methodOf lbServices.Expert
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Expert` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Expert#patchAttributes
             * @methodOf lbServices.Expert
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Expert` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Expert#modelName
        * @propertyOf lbServices.Expert
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Expert`.
        */
        R.modelName = "Expert";

    /**
     * @ngdoc object
     * @name lbServices.Expert.polls
     * @header lbServices.Expert.polls
     * @object
     * @description
     *
     * The object `Expert.polls` groups methods
     * manipulating `Poll` instances related to `Expert`.
     *
     * Call {@link lbServices.Expert#polls Expert.polls()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Expert#polls
             * @methodOf lbServices.Expert
             *
             * @description
             *
             * Queries polls of Expert.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Poll` object.)
             * </em>
             */
        R.polls = function() {
          var TargetResource = $injector.get("Poll");
          var action = TargetResource["::get::Expert::polls"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Expert.polls#count
             * @methodOf lbServices.Expert.polls
             *
             * @description
             *
             * Counts polls of Expert.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.polls.count = function() {
          var TargetResource = $injector.get("Poll");
          var action = TargetResource["::count::Expert::polls"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Expert.polls#create
             * @methodOf lbServices.Expert.polls
             *
             * @description
             *
             * Creates a new instance in polls of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Poll` object.)
             * </em>
             */
        R.polls.create = function() {
          var TargetResource = $injector.get("Poll");
          var action = TargetResource["::create::Expert::polls"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Expert.polls#createMany
             * @methodOf lbServices.Expert.polls
             *
             * @description
             *
             * Creates a new instance in polls of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Poll` object.)
             * </em>
             */
        R.polls.createMany = function() {
          var TargetResource = $injector.get("Poll");
          var action = TargetResource["::createMany::Expert::polls"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Expert.polls#destroyAll
             * @methodOf lbServices.Expert.polls
             *
             * @description
             *
             * Deletes all polls of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.polls.destroyAll = function() {
          var TargetResource = $injector.get("Poll");
          var action = TargetResource["::delete::Expert::polls"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Expert.polls#destroyById
             * @methodOf lbServices.Expert.polls
             *
             * @description
             *
             * Delete a related item by id for polls.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for polls
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.polls.destroyById = function() {
          var TargetResource = $injector.get("Poll");
          var action = TargetResource["::destroyById::Expert::polls"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Expert.polls#exists
             * @methodOf lbServices.Expert.polls
             *
             * @description
             *
             * Check the existence of polls relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for polls
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Poll` object.)
             * </em>
             */
        R.polls.exists = function() {
          var TargetResource = $injector.get("Poll");
          var action = TargetResource["::exists::Expert::polls"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Expert.polls#findById
             * @methodOf lbServices.Expert.polls
             *
             * @description
             *
             * Find a related item by id for polls.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for polls
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Poll` object.)
             * </em>
             */
        R.polls.findById = function() {
          var TargetResource = $injector.get("Poll");
          var action = TargetResource["::findById::Expert::polls"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Expert.polls#link
             * @methodOf lbServices.Expert.polls
             *
             * @description
             *
             * Add a related item by id for polls.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for polls
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Poll` object.)
             * </em>
             */
        R.polls.link = function() {
          var TargetResource = $injector.get("Poll");
          var action = TargetResource["::link::Expert::polls"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Expert.polls#unlink
             * @methodOf lbServices.Expert.polls
             *
             * @description
             *
             * Remove the polls relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for polls
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.polls.unlink = function() {
          var TargetResource = $injector.get("Poll");
          var action = TargetResource["::unlink::Expert::polls"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Expert.polls#updateById
             * @methodOf lbServices.Expert.polls
             *
             * @description
             *
             * Update a related item by id for polls.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for polls
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Poll` object.)
             * </em>
             */
        R.polls.updateById = function() {
          var TargetResource = $injector.get("Poll");
          var action = TargetResource["::updateById::Expert::polls"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Poll
 * @header lbServices.Poll
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Poll` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Poll",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector',
      function(Resource, LoopBackAuth, $injector) {
        var R = Resource(
        urlBase + "/Polls/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Poll.investigation() instead.
            "prototype$__get__investigation": {
              url: urlBase + "/Polls/:id/investigation",
              method: "GET",
            },

            // INTERNAL. Use Poll.experts.findById() instead.
            "prototype$__findById__experts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Polls/:id/experts/:fk",
              method: "GET",
            },

            // INTERNAL. Use Poll.experts.destroyById() instead.
            "prototype$__destroyById__experts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Polls/:id/experts/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Poll.experts.updateById() instead.
            "prototype$__updateById__experts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Polls/:id/experts/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Poll.experts.link() instead.
            "prototype$__link__experts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Polls/:id/experts/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Poll.experts.unlink() instead.
            "prototype$__unlink__experts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Polls/:id/experts/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Poll.experts.exists() instead.
            "prototype$__exists__experts": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Polls/:id/experts/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Poll.results.findById() instead.
            "prototype$__findById__results": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Polls/:id/results/:fk",
              method: "GET",
            },

            // INTERNAL. Use Poll.results.destroyById() instead.
            "prototype$__destroyById__results": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Polls/:id/results/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Poll.results.updateById() instead.
            "prototype$__updateById__results": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Polls/:id/results/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Poll.experts() instead.
            "prototype$__get__experts": {
              isArray: true,
              url: urlBase + "/Polls/:id/experts",
              method: "GET",
            },

            // INTERNAL. Use Poll.experts.create() instead.
            "prototype$__create__experts": {
              url: urlBase + "/Polls/:id/experts",
              method: "POST",
            },

            // INTERNAL. Use Poll.experts.destroyAll() instead.
            "prototype$__delete__experts": {
              url: urlBase + "/Polls/:id/experts",
              method: "DELETE",
            },

            // INTERNAL. Use Poll.experts.count() instead.
            "prototype$__count__experts": {
              url: urlBase + "/Polls/:id/experts/count",
              method: "GET",
            },

            // INTERNAL. Use Poll.results() instead.
            "prototype$__get__results": {
              isArray: true,
              url: urlBase + "/Polls/:id/results",
              method: "GET",
            },

            // INTERNAL. Use Poll.results.create() instead.
            "prototype$__create__results": {
              url: urlBase + "/Polls/:id/results",
              method: "POST",
            },

            // INTERNAL. Use Poll.results.destroyAll() instead.
            "prototype$__delete__results": {
              url: urlBase + "/Polls/:id/results",
              method: "DELETE",
            },

            // INTERNAL. Use Poll.results.count() instead.
            "prototype$__count__results": {
              url: urlBase + "/Polls/:id/results/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Poll#create
             * @methodOf lbServices.Poll
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Poll` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Polls",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Poll#createMany
             * @methodOf lbServices.Poll
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Poll` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Polls",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Poll#upsert
             * @methodOf lbServices.Poll
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Poll` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/Polls",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Poll#replaceOrCreate
             * @methodOf lbServices.Poll
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Poll` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Polls/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Poll#upsertWithWhere
             * @methodOf lbServices.Poll
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Poll` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Polls/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Poll#exists
             * @methodOf lbServices.Poll
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Polls/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Poll#findById
             * @methodOf lbServices.Poll
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Poll` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Polls/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Poll#replaceById
             * @methodOf lbServices.Poll
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Poll` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Polls/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Poll#find
             * @methodOf lbServices.Poll
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Poll` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Polls",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Poll#findOne
             * @methodOf lbServices.Poll
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Poll` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Polls/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Poll#updateAll
             * @methodOf lbServices.Poll
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/Polls/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Poll#deleteById
             * @methodOf lbServices.Poll
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Poll` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Polls/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Poll#count
             * @methodOf lbServices.Poll
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Polls/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Poll#prototype$updateAttributes
             * @methodOf lbServices.Poll
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Poll` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/Polls/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Poll#createChangeStream
             * @methodOf lbServices.Poll
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Polls/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Poll#sendEmails
             * @methodOf lbServices.Poll
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `data` – `{*=}` -
             */
            "sendEmails": {
              url: urlBase + "/Polls/:id/sendEmails",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Poll#sendEmailsToExperts
             * @methodOf lbServices.Poll
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `pollId` – `{string=}` -
             *
             *  - `expertList` – `{*=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `data` – `{*=}` -
             */
            "sendEmailsToExperts": {
              url: urlBase + "/Polls/:pollId/sendEmailsToExperts",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Poll#getSuggestions
             * @methodOf lbServices.Poll
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `data` – `{Object=}` -
             */
            "getSuggestions": {
              url: urlBase + "/Polls/:id/getSuggestions",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Poll#getConcordance
             * @methodOf lbServices.Poll
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `kappa` – `{Object=}` -
             */
            "getConcordance": {
              url: urlBase + "/Polls/:id/getConcordance",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Poll#assignWeights
             * @methodOf lbServices.Poll
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `weights` – `{Object=}` -
             */
            "assignWeights": {
              url: urlBase + "/Polls/:id/assignWeights",
              method: "GET",
            },

            // INTERNAL. Use Investigation.polls.findById() instead.
            "::findById::Investigation::polls": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/investigations/:id/polls/:fk",
              method: "GET",
            },

            // INTERNAL. Use Investigation.polls.destroyById() instead.
            "::destroyById::Investigation::polls": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/investigations/:id/polls/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Investigation.polls.updateById() instead.
            "::updateById::Investigation::polls": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/investigations/:id/polls/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Investigation.polls() instead.
            "::get::Investigation::polls": {
              isArray: true,
              url: urlBase + "/investigations/:id/polls",
              method: "GET",
            },

            // INTERNAL. Use Investigation.polls.create() instead.
            "::create::Investigation::polls": {
              url: urlBase + "/investigations/:id/polls",
              method: "POST",
            },

            // INTERNAL. Use Investigation.polls.createMany() instead.
            "::createMany::Investigation::polls": {
              isArray: true,
              url: urlBase + "/investigations/:id/polls",
              method: "POST",
            },

            // INTERNAL. Use Investigation.polls.destroyAll() instead.
            "::delete::Investigation::polls": {
              url: urlBase + "/investigations/:id/polls",
              method: "DELETE",
            },

            // INTERNAL. Use Investigation.polls.count() instead.
            "::count::Investigation::polls": {
              url: urlBase + "/investigations/:id/polls/count",
              method: "GET",
            },

            // INTERNAL. Use Expert.polls.findById() instead.
            "::findById::Expert::polls": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Experts/:id/polls/:fk",
              method: "GET",
            },

            // INTERNAL. Use Expert.polls.destroyById() instead.
            "::destroyById::Expert::polls": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Experts/:id/polls/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Expert.polls.updateById() instead.
            "::updateById::Expert::polls": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Experts/:id/polls/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Expert.polls.link() instead.
            "::link::Expert::polls": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Experts/:id/polls/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Expert.polls.unlink() instead.
            "::unlink::Expert::polls": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Experts/:id/polls/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Expert.polls.exists() instead.
            "::exists::Expert::polls": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Experts/:id/polls/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Expert.polls() instead.
            "::get::Expert::polls": {
              isArray: true,
              url: urlBase + "/Experts/:id/polls",
              method: "GET",
            },

            // INTERNAL. Use Expert.polls.create() instead.
            "::create::Expert::polls": {
              url: urlBase + "/Experts/:id/polls",
              method: "POST",
            },

            // INTERNAL. Use Expert.polls.createMany() instead.
            "::createMany::Expert::polls": {
              isArray: true,
              url: urlBase + "/Experts/:id/polls",
              method: "POST",
            },

            // INTERNAL. Use Expert.polls.destroyAll() instead.
            "::delete::Expert::polls": {
              url: urlBase + "/Experts/:id/polls",
              method: "DELETE",
            },

            // INTERNAL. Use Expert.polls.count() instead.
            "::count::Expert::polls": {
              url: urlBase + "/Experts/:id/polls/count",
              method: "GET",
            },

            // INTERNAL. Use Result.poll() instead.
            "::get::Result::poll": {
              url: urlBase + "/Results/:id/poll",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Poll#patchOrCreate
             * @methodOf lbServices.Poll
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Poll` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Poll#updateOrCreate
             * @methodOf lbServices.Poll
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Poll` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Poll#patchOrCreateWithWhere
             * @methodOf lbServices.Poll
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Poll` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Poll#update
             * @methodOf lbServices.Poll
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Poll#destroyById
             * @methodOf lbServices.Poll
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Poll` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Poll#removeById
             * @methodOf lbServices.Poll
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Poll` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Poll#patchAttributes
             * @methodOf lbServices.Poll
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Poll` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Poll#modelName
        * @propertyOf lbServices.Poll
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Poll`.
        */
        R.modelName = "Poll";


            /**
             * @ngdoc method
             * @name lbServices.Poll#investigation
             * @methodOf lbServices.Poll
             *
             * @description
             *
             * Fetches belongsTo relation investigation.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Investigation` object.)
             * </em>
             */
        R.investigation = function() {
          var TargetResource = $injector.get("Investigation");
          var action = TargetResource["::get::Poll::investigation"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Poll.experts
     * @header lbServices.Poll.experts
     * @object
     * @description
     *
     * The object `Poll.experts` groups methods
     * manipulating `Expert` instances related to `Poll`.
     *
     * Call {@link lbServices.Poll#experts Poll.experts()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Poll#experts
             * @methodOf lbServices.Poll
             *
             * @description
             *
             * Queries experts of Poll.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Expert` object.)
             * </em>
             */
        R.experts = function() {
          var TargetResource = $injector.get("Expert");
          var action = TargetResource["::get::Poll::experts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Poll.experts#count
             * @methodOf lbServices.Poll.experts
             *
             * @description
             *
             * Counts experts of Poll.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.experts.count = function() {
          var TargetResource = $injector.get("Expert");
          var action = TargetResource["::count::Poll::experts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Poll.experts#create
             * @methodOf lbServices.Poll.experts
             *
             * @description
             *
             * Creates a new instance in experts of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Expert` object.)
             * </em>
             */
        R.experts.create = function() {
          var TargetResource = $injector.get("Expert");
          var action = TargetResource["::create::Poll::experts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Poll.experts#createMany
             * @methodOf lbServices.Poll.experts
             *
             * @description
             *
             * Creates a new instance in experts of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Expert` object.)
             * </em>
             */
        R.experts.createMany = function() {
          var TargetResource = $injector.get("Expert");
          var action = TargetResource["::createMany::Poll::experts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Poll.experts#destroyAll
             * @methodOf lbServices.Poll.experts
             *
             * @description
             *
             * Deletes all experts of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.experts.destroyAll = function() {
          var TargetResource = $injector.get("Expert");
          var action = TargetResource["::delete::Poll::experts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Poll.experts#destroyById
             * @methodOf lbServices.Poll.experts
             *
             * @description
             *
             * Delete a related item by id for experts.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for experts
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.experts.destroyById = function() {
          var TargetResource = $injector.get("Expert");
          var action = TargetResource["::destroyById::Poll::experts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Poll.experts#exists
             * @methodOf lbServices.Poll.experts
             *
             * @description
             *
             * Check the existence of experts relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for experts
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Expert` object.)
             * </em>
             */
        R.experts.exists = function() {
          var TargetResource = $injector.get("Expert");
          var action = TargetResource["::exists::Poll::experts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Poll.experts#findById
             * @methodOf lbServices.Poll.experts
             *
             * @description
             *
             * Find a related item by id for experts.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for experts
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Expert` object.)
             * </em>
             */
        R.experts.findById = function() {
          var TargetResource = $injector.get("Expert");
          var action = TargetResource["::findById::Poll::experts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Poll.experts#link
             * @methodOf lbServices.Poll.experts
             *
             * @description
             *
             * Add a related item by id for experts.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for experts
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Expert` object.)
             * </em>
             */
        R.experts.link = function() {
          var TargetResource = $injector.get("Expert");
          var action = TargetResource["::link::Poll::experts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Poll.experts#unlink
             * @methodOf lbServices.Poll.experts
             *
             * @description
             *
             * Remove the experts relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for experts
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.experts.unlink = function() {
          var TargetResource = $injector.get("Expert");
          var action = TargetResource["::unlink::Poll::experts"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Poll.experts#updateById
             * @methodOf lbServices.Poll.experts
             *
             * @description
             *
             * Update a related item by id for experts.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for experts
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Expert` object.)
             * </em>
             */
        R.experts.updateById = function() {
          var TargetResource = $injector.get("Expert");
          var action = TargetResource["::updateById::Poll::experts"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Poll.results
     * @header lbServices.Poll.results
     * @object
     * @description
     *
     * The object `Poll.results` groups methods
     * manipulating `Result` instances related to `Poll`.
     *
     * Call {@link lbServices.Poll#results Poll.results()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Poll#results
             * @methodOf lbServices.Poll
             *
             * @description
             *
             * Queries results of Poll.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Result` object.)
             * </em>
             */
        R.results = function() {
          var TargetResource = $injector.get("Result");
          var action = TargetResource["::get::Poll::results"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Poll.results#count
             * @methodOf lbServices.Poll.results
             *
             * @description
             *
             * Counts results of Poll.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.results.count = function() {
          var TargetResource = $injector.get("Result");
          var action = TargetResource["::count::Poll::results"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Poll.results#create
             * @methodOf lbServices.Poll.results
             *
             * @description
             *
             * Creates a new instance in results of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Result` object.)
             * </em>
             */
        R.results.create = function() {
          var TargetResource = $injector.get("Result");
          var action = TargetResource["::create::Poll::results"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Poll.results#createMany
             * @methodOf lbServices.Poll.results
             *
             * @description
             *
             * Creates a new instance in results of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Result` object.)
             * </em>
             */
        R.results.createMany = function() {
          var TargetResource = $injector.get("Result");
          var action = TargetResource["::createMany::Poll::results"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Poll.results#destroyAll
             * @methodOf lbServices.Poll.results
             *
             * @description
             *
             * Deletes all results of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.results.destroyAll = function() {
          var TargetResource = $injector.get("Result");
          var action = TargetResource["::delete::Poll::results"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Poll.results#destroyById
             * @methodOf lbServices.Poll.results
             *
             * @description
             *
             * Delete a related item by id for results.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for results
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.results.destroyById = function() {
          var TargetResource = $injector.get("Result");
          var action = TargetResource["::destroyById::Poll::results"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Poll.results#findById
             * @methodOf lbServices.Poll.results
             *
             * @description
             *
             * Find a related item by id for results.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for results
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Result` object.)
             * </em>
             */
        R.results.findById = function() {
          var TargetResource = $injector.get("Result");
          var action = TargetResource["::findById::Poll::results"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Poll.results#updateById
             * @methodOf lbServices.Poll.results
             *
             * @description
             *
             * Update a related item by id for results.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for results
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Result` object.)
             * </em>
             */
        R.results.updateById = function() {
          var TargetResource = $injector.get("Result");
          var action = TargetResource["::updateById::Poll::results"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Result
 * @header lbServices.Result
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Result` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Result",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector',
      function(Resource, LoopBackAuth, $injector) {
        var R = Resource(
        urlBase + "/Results/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Result.expert() instead.
            "prototype$__get__expert": {
              url: urlBase + "/Results/:id/expert",
              method: "GET",
            },

            // INTERNAL. Use Result.poll() instead.
            "prototype$__get__poll": {
              url: urlBase + "/Results/:id/poll",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Result#create
             * @methodOf lbServices.Result
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Result` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Results",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Result#createMany
             * @methodOf lbServices.Result
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Result` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Results",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Result#upsert
             * @methodOf lbServices.Result
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Result` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/Results",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Result#replaceOrCreate
             * @methodOf lbServices.Result
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Result` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Results/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Result#upsertWithWhere
             * @methodOf lbServices.Result
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Result` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Results/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Result#exists
             * @methodOf lbServices.Result
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Results/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Result#findById
             * @methodOf lbServices.Result
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Result` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Results/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Result#replaceById
             * @methodOf lbServices.Result
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Result` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Results/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Result#find
             * @methodOf lbServices.Result
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Result` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Results",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Result#findOne
             * @methodOf lbServices.Result
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Result` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Results/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Result#updateAll
             * @methodOf lbServices.Result
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/Results/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Result#deleteById
             * @methodOf lbServices.Result
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Result` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Results/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Result#count
             * @methodOf lbServices.Result
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Results/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Result#prototype$updateAttributes
             * @methodOf lbServices.Result
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Result` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/Results/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Result#createChangeStream
             * @methodOf lbServices.Result
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Results/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Poll.results.findById() instead.
            "::findById::Poll::results": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Polls/:id/results/:fk",
              method: "GET",
            },

            // INTERNAL. Use Poll.results.destroyById() instead.
            "::destroyById::Poll::results": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Polls/:id/results/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Poll.results.updateById() instead.
            "::updateById::Poll::results": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Polls/:id/results/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Poll.results() instead.
            "::get::Poll::results": {
              isArray: true,
              url: urlBase + "/Polls/:id/results",
              method: "GET",
            },

            // INTERNAL. Use Poll.results.create() instead.
            "::create::Poll::results": {
              url: urlBase + "/Polls/:id/results",
              method: "POST",
            },

            // INTERNAL. Use Poll.results.createMany() instead.
            "::createMany::Poll::results": {
              isArray: true,
              url: urlBase + "/Polls/:id/results",
              method: "POST",
            },

            // INTERNAL. Use Poll.results.destroyAll() instead.
            "::delete::Poll::results": {
              url: urlBase + "/Polls/:id/results",
              method: "DELETE",
            },

            // INTERNAL. Use Poll.results.count() instead.
            "::count::Poll::results": {
              url: urlBase + "/Polls/:id/results/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Result#patchOrCreate
             * @methodOf lbServices.Result
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Result` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Result#updateOrCreate
             * @methodOf lbServices.Result
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Result` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Result#patchOrCreateWithWhere
             * @methodOf lbServices.Result
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Result` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Result#update
             * @methodOf lbServices.Result
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Result#destroyById
             * @methodOf lbServices.Result
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Result` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Result#removeById
             * @methodOf lbServices.Result
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Result` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Result#patchAttributes
             * @methodOf lbServices.Result
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Result` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Result#modelName
        * @propertyOf lbServices.Result
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Result`.
        */
        R.modelName = "Result";


            /**
             * @ngdoc method
             * @name lbServices.Result#expert
             * @methodOf lbServices.Result
             *
             * @description
             *
             * Fetches belongsTo relation expert.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Expert` object.)
             * </em>
             */
        R.expert = function() {
          var TargetResource = $injector.get("Expert");
          var action = TargetResource["::get::Result::expert"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Result#poll
             * @methodOf lbServices.Result
             *
             * @description
             *
             * Fetches belongsTo relation poll.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Poll` object.)
             * </em>
             */
        R.poll = function() {
          var TargetResource = $injector.get("Poll");
          var action = TargetResource["::get::Result::poll"];
          return action.apply(R, arguments);
        };


        return R;
      }]);


  module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId', 'rememberMe'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    };

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    };

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      try {
        var key = propsPrefix + name;
        if (value == null) value = '';
        storage[key] = value;
      } catch (err) {
        console.log('Cannot access local/session storage:', err);
      }
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', ['$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {
          // filter out external requests
          var host = getHost(config.url);
          if (host && host !== urlBaseHost) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 }},
              status: 401,
              config: config,
              headers: function() { return undefined; },
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        },
      };
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the header name that is used for sending the authentication token.
     */
    this.getAuthHeader = function() {
      return authHeader;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
      urlBaseHost = getHost(urlBase) || location.host;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      var LoopBackResource = function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };

      LoopBackResource.getUrlBase = function() {
        return urlBase;
      };

      LoopBackResource.getAuthHeader = function() {
        return authHeader;
      };

      return LoopBackResource;
    }];
  });
})(window, window.angular);
