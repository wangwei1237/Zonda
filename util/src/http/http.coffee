# Zonda Util Http
# - - -
# Encapsulate the $.ajax

define ( require, exports, module ) ->
  $ = require "jquery"

  Exception = require "../exception/exception"

  Http = (config) ->

    $.ajaxSetup
      dataType : "JSON"
      type : "POST"

      error : (error) ->
        config.caller.trigger "#{config.namespace}:HTTP:error",
          error,
          config.data

        Exception "network",
          caller: config.caller
          url: config.url
          status: error.status
          statusText: error.statusText
          responseText: error.responseText

      success: (respond) ->
        if (respond.status and respond.status isnt 1) or (respond.err and respond.err isnt null)
          console.log "ERROR" # TODO:ERROR

          config.caller.trigger "#{config.namespace}:HTTP:error",
            respond.info,
            config.data

        else
          config.caller.trigger "#{config.namespace}:HTTP:success",
            respond.data,
            config.data

    # END $.ajaxSetup

    if config.fake
      require.async "test/fake/server", (server) ->
        $.ajax config
        server config.url

    else
      return $.ajax config

  module.exports = Http
  
# END define