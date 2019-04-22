"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (f) {
  if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object" && typeof module !== "undefined") {
    module.exports = f();
  } else if (typeof define === "function" && define.amd) {
    define([], f);
  } else {
    var g;

    if (typeof window !== "undefined") {
      g = window;
    } else if (typeof global !== "undefined") {
      g = global;
    } else if (typeof self !== "undefined") {
      g = self;
    } else {
      g = this;
    }

    g.ejs = f();
  }
})(function () {
  var define, module, exports;
  return function () {
    function e(t, n, r) {
      function s(o, u) {
        if (!n[o]) {
          if (!t[o]) {
            var a = typeof require == "function" && require;
            if (!u && a) return a(o, !0);
            if (i) return i(o, !0);
            var f = new Error("Cannot find module '" + o + "'");
            throw f.code = "MODULE_NOT_FOUND", f;
          }

          var l = n[o] = {
            exports: {}
          };
          t[o][0].call(l.exports, function (e) {
            var n = t[o][1][e];
            return s(n ? n : e);
          }, l, l.exports, e, t, n, r);
        }

        return n[o].exports;
      }

      var i = typeof require == "function" && require;

      for (var o = 0; o < r.length; o++) {
        s(r[o]);
      }

      return s;
    }

    return e;
  }()({
    1: [function (require, module, exports) {
      "use strict";

      var fs = require("fs");

      var path = require("path");

      var utils = require("./utils");

      var scopeOptionWarned = false;

      var _VERSION_STRING = require("../package.json").version;

      var _DEFAULT_DELIMITER = "%";
      var _DEFAULT_LOCALS_NAME = "locals";
      var _NAME = "ejs";
      var _REGEX_STRING = "(<%%|%%>|<%=|<%-|<%_|<%#|<%|%>|-%>|_%>)";
      var _OPTS_PASSABLE_WITH_DATA = ["delimiter", "scope", "context", "debug", "compileDebug", "client", "_with", "rmWhitespace", "strict", "filename", "async"];

      var _OPTS_PASSABLE_WITH_DATA_EXPRESS = _OPTS_PASSABLE_WITH_DATA.concat("cache");

      var _BOM = /^\uFEFF/;
      exports.cache = utils.cache;
      exports.fileLoader = fs.readFileSync;
      exports.localsName = _DEFAULT_LOCALS_NAME;
      exports.promiseImpl = new Function("return this;")().Promise;

      exports.resolveInclude = function (name, filename, isDir) {
        var dirname = path.dirname;
        var extname = path.extname;
        var resolve = path.resolve;
        var includePath = resolve(isDir ? filename : dirname(filename), name);
        var ext = extname(name);

        if (!ext) {
          includePath += ".ejs";
        }

        return includePath;
      };

      function getIncludePath(path, options) {
        var includePath;
        var filePath;
        var views = options.views;

        if (path.charAt(0) == "/") {
          includePath = exports.resolveInclude(path.replace(/^\/*/, ""), options.root || "/", true);
        } else {
          if (options.filename) {
            filePath = exports.resolveInclude(path, options.filename);

            if (fs.existsSync(filePath)) {
              includePath = filePath;
            }
          }

          if (!includePath) {
            if (Array.isArray(views) && views.some(function (v) {
              filePath = exports.resolveInclude(path, v, true);
              return fs.existsSync(filePath);
            })) {
              includePath = filePath;
            }
          }

          if (!includePath) {
            throw new Error('Could not find the include file "' + options.escapeFunction(path) + '"');
          }
        }

        return includePath;
      }

      function handleCache(options, template) {
        var func;
        var filename = options.filename;
        var hasTemplate = arguments.length > 1;

        if (options.cache) {
          if (!filename) {
            throw new Error("cache option requires a filename");
          }

          func = exports.cache.get(filename);

          if (func) {
            return func;
          }

          if (!hasTemplate) {
            template = fileLoader(filename).toString().replace(_BOM, "");
          }
        } else if (!hasTemplate) {
          if (!filename) {
            throw new Error("Internal EJS error: no file name or template " + "provided");
          }

          template = fileLoader(filename).toString().replace(_BOM, "");
        }

        func = exports.compile(template, options);

        if (options.cache) {
          exports.cache.set(filename, func);
        }

        return func;
      }

      function tryHandleCache(options, data, cb) {
        var result;

        if (!cb) {
          if (typeof exports.promiseImpl == "function") {
            return new exports.promiseImpl(function (resolve, reject) {
              try {
                result = handleCache(options)(data);
                resolve(result);
              } catch (err) {
                reject(err);
              }
            });
          } else {
            throw new Error("Please provide a callback function");
          }
        } else {
          try {
            result = handleCache(options)(data);
          } catch (err) {
            return cb(err);
          }

          cb(null, result);
        }
      }

      function fileLoader(filePath) {
        return exports.fileLoader(filePath);
      }

      function includeFile(path, options) {
        var opts = utils.shallowCopy({}, options);
        opts.filename = getIncludePath(path, opts);
        return handleCache(opts);
      }

      function includeSource(path, options) {
        var opts = utils.shallowCopy({}, options);
        var includePath;
        var template;
        includePath = getIncludePath(path, opts);
        template = fileLoader(includePath).toString().replace(_BOM, "");
        opts.filename = includePath;
        var templ = new Template(template, opts);
        templ.generateSource();
        return {
          source: templ.source,
          filename: includePath,
          template: template
        };
      }

      function rethrow(err, str, flnm, lineno, esc) {
        var lines = str.split("\n");
        var start = Math.max(lineno - 3, 0);
        var end = Math.min(lines.length, lineno + 3);
        var filename = esc(flnm);
        var context = lines.slice(start, end).map(function (line, i) {
          var curr = i + start + 1;
          return (curr == lineno ? " >> " : "    ") + curr + "| " + line;
        }).join("\n");
        err.path = filename;
        err.message = (filename || "ejs") + ":" + lineno + "\n" + context + "\n\n" + err.message;
        throw err;
      }

      function stripSemi(str) {
        return str.replace(/;(\s*$)/, "$1");
      }

      exports.compile = function compile(template, opts) {
        var templ;

        if (opts && opts.scope) {
          if (!scopeOptionWarned) {
            console.warn("`scope` option is deprecated and will be removed in EJS 3");
            scopeOptionWarned = true;
          }

          if (!opts.context) {
            opts.context = opts.scope;
          }

          delete opts.scope;
        }

        templ = new Template(template, opts);
        return templ.compile();
      };

      exports.render = function (template, d, o) {
        var data = d || {};
        var opts = o || {};

        if (arguments.length == 2) {
          utils.shallowCopyFromList(opts, data, _OPTS_PASSABLE_WITH_DATA);
        }

        return handleCache(opts, template)(data);
      };

      exports.renderFile = function () {
        var args = Array.prototype.slice.call(arguments);
        var filename = args.shift();
        var cb;
        var opts = {
          filename: filename
        };
        var data;
        var viewOpts;

        if (typeof arguments[arguments.length - 1] == "function") {
          cb = args.pop();
        }

        if (args.length) {
          data = args.shift();

          if (args.length) {
            utils.shallowCopy(opts, args.pop());
          } else {
            if (data.settings) {
              if (data.settings.views) {
                opts.views = data.settings.views;
              }

              if (data.settings["view cache"]) {
                opts.cache = true;
              }

              viewOpts = data.settings["view options"];

              if (viewOpts) {
                utils.shallowCopy(opts, viewOpts);
              }
            }

            utils.shallowCopyFromList(opts, data, _OPTS_PASSABLE_WITH_DATA_EXPRESS);
          }

          opts.filename = filename;
        } else {
          data = {};
        }

        return tryHandleCache(opts, data, cb);
      };

      exports.clearCache = function () {
        exports.cache.reset();
      };

      function Template(text, opts) {
        opts = opts || {};
        var options = {};
        this.templateText = text;
        this.mode = null;
        this.truncate = false;
        this.currentLine = 1;
        this.source = "";
        this.dependencies = [];
        options.client = opts.client || false;
        options.escapeFunction = opts.escape || utils.escapeXML;
        options.compileDebug = opts.compileDebug !== false;
        options.debug = !!opts.debug;
        options.filename = opts.filename;
        options.delimiter = opts.delimiter || exports.delimiter || _DEFAULT_DELIMITER;
        options.strict = opts.strict || false;
        options.context = opts.context;
        options.cache = opts.cache || false;
        options.rmWhitespace = opts.rmWhitespace;
        options.root = opts.root;
        options.outputFunctionName = opts.outputFunctionName;
        options.localsName = opts.localsName || exports.localsName || _DEFAULT_LOCALS_NAME;
        options.views = opts.views;
        options.async = opts.async;

        if (options.strict) {
          options._with = false;
        } else {
          options._with = typeof opts._with != "undefined" ? opts._with : true;
        }

        this.opts = options;
        this.regex = this.createRegex();
      }

      Template.modes = {
        EVAL: "eval",
        ESCAPED: "escaped",
        RAW: "raw",
        COMMENT: "comment",
        LITERAL: "literal"
      };
      Template.prototype = {
        createRegex: function createRegex() {
          var str = _REGEX_STRING;
          var delim = utils.escapeRegExpChars(this.opts.delimiter);
          str = str.replace(/%/g, delim);
          return new RegExp(str);
        },
        compile: function compile() {
          var src;
          var fn;
          var opts = this.opts;
          var prepended = "";
          var appended = "";
          var escapeFn = opts.escapeFunction;
          var asyncCtor;

          if (!this.source) {
            this.generateSource();
            prepended += "  var __output = [], __append = __output.push.bind(__output);" + "\n";

            if (opts.outputFunctionName) {
              prepended += "  var " + opts.outputFunctionName + " = __append;" + "\n";
            }

            if (opts._with !== false) {
              prepended += "  with (" + opts.localsName + " || {}) {" + "\n";
              appended += "  }" + "\n";
            }

            appended += '  return __output.join("");' + "\n";
            this.source = prepended + this.source + appended;
          }

          if (opts.compileDebug) {
            src = "var __line = 1" + "\n" + "  , __lines = " + JSON.stringify(this.templateText) + "\n" + "  , __filename = " + (opts.filename ? JSON.stringify(opts.filename) : "undefined") + ";" + "\n" + "try {" + "\n" + this.source + "} catch (e) {" + "\n" + "  rethrow(e, __lines, __filename, __line, escapeFn);" + "\n" + "}" + "\n";
          } else {
            src = this.source;
          }

          if (opts.client) {
            src = "escapeFn = escapeFn || " + escapeFn.toString() + ";" + "\n" + src;

            if (opts.compileDebug) {
              src = "rethrow = rethrow || " + rethrow.toString() + ";" + "\n" + src;
            }
          }

          if (opts.strict) {
            src = '"use strict";\n' + src;
          }

          if (opts.debug) {
            console.log(src);
          }

          try {
            if (opts.async) {
              try {
                asyncCtor = new Function("return (async function(){}).constructor;")();
              } catch (e) {
                if (e instanceof SyntaxError) {
                  throw new Error("This environment does not support async/await");
                } else {
                  throw e;
                }
              }
            } else {
              asyncCtor = Function;
            }

            fn = new asyncCtor(opts.localsName + ", escapeFn, include, rethrow", src);
          } catch (e) {
            if (e instanceof SyntaxError) {
              if (opts.filename) {
                e.message += " in " + opts.filename;
              }

              e.message += " while compiling ejs\n\n";
              e.message += "If the above error is not helpful, you may want to try EJS-Lint:\n";
              e.message += "https://github.com/RyanZim/EJS-Lint";

              if (!e.async) {
                e.message += "\n";
                e.message += "Or, if you meant to create an async function, pass async: true as an option.";
              }
            }

            throw e;
          }

          if (opts.client) {
            fn.dependencies = this.dependencies;
            return fn;
          }

          var returnedFn = function returnedFn(data) {
            var include = function include(path, includeData) {
              var d = utils.shallowCopy({}, data);

              if (includeData) {
                d = utils.shallowCopy(d, includeData);
              }

              return includeFile(path, opts)(d);
            };

            return fn.apply(opts.context, [data || {}, escapeFn, include, rethrow]);
          };

          returnedFn.dependencies = this.dependencies;
          return returnedFn;
        },
        generateSource: function generateSource() {
          var opts = this.opts;

          if (opts.rmWhitespace) {
            this.templateText = this.templateText.replace(/\r/g, "").replace(/^\s+|\s+$/gm, "");
          }

          this.templateText = this.templateText.replace(/[ \t]*<%_/gm, "<%_").replace(/_%>[ \t]*/gm, "_%>");
          var self = this;
          var matches = this.parseTemplateText();
          var d = this.opts.delimiter;

          if (matches && matches.length) {
            matches.forEach(function (line, index) {
              var opening;
              var closing;
              var include;
              var includeOpts;
              var includeObj;
              var includeSrc;

              if (line.indexOf("<" + d) === 0 && line.indexOf("<" + d + d) !== 0) {
                closing = matches[index + 2];

                if (!(closing == d + ">" || closing == "-" + d + ">" || closing == "_" + d + ">")) {
                  throw new Error('Could not find matching close tag for "' + line + '".');
                }
              }

              if (include = line.match(/^\s*include\s+(\S+)/)) {
                opening = matches[index - 1];

                if (opening && (opening == "<" + d || opening == "<" + d + "-" || opening == "<" + d + "_")) {
                  includeOpts = utils.shallowCopy({}, self.opts);
                  includeObj = includeSource(include[1], includeOpts);

                  if (self.opts.compileDebug) {
                    includeSrc = "    ; (function(){" + "\n" + "      var __line = 1" + "\n" + "      , __lines = " + JSON.stringify(includeObj.template) + "\n" + "      , __filename = " + JSON.stringify(includeObj.filename) + ";" + "\n" + "      try {" + "\n" + includeObj.source + "      } catch (e) {" + "\n" + "        rethrow(e, __lines, __filename, __line, escapeFn);" + "\n" + "      }" + "\n" + "    ; }).call(this)" + "\n";
                  } else {
                    includeSrc = "    ; (function(){" + "\n" + includeObj.source + "    ; }).call(this)" + "\n";
                  }

                  self.source += includeSrc;
                  self.dependencies.push(exports.resolveInclude(include[1], includeOpts.filename));
                  return;
                }
              }

              self.scanLine(line);
            });
          }
        },
        parseTemplateText: function parseTemplateText() {
          var str = this.templateText;
          var pat = this.regex;
          var result = pat.exec(str);
          var arr = [];
          var firstPos;

          while (result) {
            firstPos = result.index;

            if (firstPos !== 0) {
              arr.push(str.substring(0, firstPos));
              str = str.slice(firstPos);
            }

            arr.push(result[0]);
            str = str.slice(result[0].length);
            result = pat.exec(str);
          }

          if (str) {
            arr.push(str);
          }

          return arr;
        },
        _addOutput: function _addOutput(line) {
          if (this.truncate) {
            line = line.replace(/^(?:\r\n|\r|\n)/, "");
            this.truncate = false;
          } else if (this.opts.rmWhitespace) {
            line = line.replace(/^\n/, "");
          }

          if (!line) {
            return line;
          }

          line = line.replace(/\\/g, "\\\\");
          line = line.replace(/\n/g, "\\n");
          line = line.replace(/\r/g, "\\r");
          line = line.replace(/"/g, '\\"');
          this.source += '    ; __append("' + line + '")' + "\n";
        },
        scanLine: function scanLine(line) {
          var self = this;
          var d = this.opts.delimiter;
          var newLineCount = 0;
          newLineCount = line.split("\n").length - 1;

          switch (line) {
            case "<" + d:
            case "<" + d + "_":
              this.mode = Template.modes.EVAL;
              break;

            case "<" + d + "=":
              this.mode = Template.modes.ESCAPED;
              break;

            case "<" + d + "-":
              this.mode = Template.modes.RAW;
              break;

            case "<" + d + "#":
              this.mode = Template.modes.COMMENT;
              break;

            case "<" + d + d:
              this.mode = Template.modes.LITERAL;
              this.source += '    ; __append("' + line.replace("<" + d + d, "<" + d) + '")' + "\n";
              break;

            case d + d + ">":
              this.mode = Template.modes.LITERAL;
              this.source += '    ; __append("' + line.replace(d + d + ">", d + ">") + '")' + "\n";
              break;

            case d + ">":
            case "-" + d + ">":
            case "_" + d + ">":
              if (this.mode == Template.modes.LITERAL) {
                this._addOutput(line);
              }

              this.mode = null;
              this.truncate = line.indexOf("-") === 0 || line.indexOf("_") === 0;
              break;

            default:
              if (this.mode) {
                switch (this.mode) {
                  case Template.modes.EVAL:
                  case Template.modes.ESCAPED:
                  case Template.modes.RAW:
                    if (line.lastIndexOf("//") > line.lastIndexOf("\n")) {
                      line += "\n";
                    }

                }

                switch (this.mode) {
                  case Template.modes.EVAL:
                    this.source += "    ; " + line + "\n";
                    break;

                  case Template.modes.ESCAPED:
                    this.source += "    ; __append(escapeFn(" + stripSemi(line) + "))" + "\n";
                    break;

                  case Template.modes.RAW:
                    this.source += "    ; __append(" + stripSemi(line) + ")" + "\n";
                    break;

                  case Template.modes.COMMENT:
                    break;

                  case Template.modes.LITERAL:
                    this._addOutput(line);

                    break;
                }
              } else {
                this._addOutput(line);
              }

          }

          if (self.opts.compileDebug && newLineCount) {
            this.currentLine += newLineCount;
            this.source += "    ; __line = " + this.currentLine + "\n";
          }
        }
      };
      exports.escapeXML = utils.escapeXML;
      exports.__express = exports.renderFile;

      if (require.extensions) {
        require.extensions[".ejs"] = function (module, flnm) {
          var filename = flnm || module.filename;
          var options = {
            filename: filename,
            client: true
          };
          var template = fileLoader(filename).toString();
          var fn = exports.compile(template, options);

          module._compile("module.exports = " + fn.toString() + ";", filename);
        };
      }

      exports.VERSION = _VERSION_STRING;
      exports.name = _NAME;

      if (typeof window != "undefined") {
        window.ejs = exports;
      }
    }, {
      "../package.json": 6,
      "./utils": 2,
      fs: 3,
      path: 4
    }],
    2: [function (require, module, exports) {
      "use strict";

      var regExpChars = /[|\\{}()[\]^$+*?.]/g;

      exports.escapeRegExpChars = function (string) {
        if (!string) {
          return "";
        }

        return String(string).replace(regExpChars, "\\$&");
      };

      var _ENCODE_HTML_RULES = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&#34;",
        "'": "&#39;"
      };
      var _MATCH_HTML = /[&<>'"]/g;

      function encode_char(c) {
        return _ENCODE_HTML_RULES[c] || c;
      }

      var escapeFuncStr = "var _ENCODE_HTML_RULES = {\n" + '      "&": "&amp;"\n' + '    , "<": "&lt;"\n' + '    , ">": "&gt;"\n' + '    , \'"\': "&#34;"\n' + '    , "\'": "&#39;"\n' + "    }\n" + "  , _MATCH_HTML = /[&<>'\"]/g;\n" + "function encode_char(c) {\n" + "  return _ENCODE_HTML_RULES[c] || c;\n" + "};\n";

      exports.escapeXML = function (markup) {
        return markup == undefined ? "" : String(markup).replace(_MATCH_HTML, encode_char);
      };

      exports.escapeXML.toString = function () {
        return Function.prototype.toString.call(this) + ";\n" + escapeFuncStr;
      };

      exports.shallowCopy = function (to, from) {
        from = from || {};

        for (var p in from) {
          to[p] = from[p];
        }

        return to;
      };

      exports.shallowCopyFromList = function (to, from, list) {
        for (var i = 0; i < list.length; i++) {
          var p = list[i];

          if (typeof from[p] != "undefined") {
            to[p] = from[p];
          }
        }

        return to;
      };

      exports.cache = {
        _data: {},
        set: function set(key, val) {
          this._data[key] = val;
        },
        get: function get(key) {
          return this._data[key];
        },
        reset: function reset() {
          this._data = {};
        }
      };
    }, {}],
    3: [function (require, module, exports) {}, {}],
    4: [function (require, module, exports) {
      (function (process) {
        function normalizeArray(parts, allowAboveRoot) {
          var up = 0;

          for (var i = parts.length - 1; i >= 0; i--) {
            var last = parts[i];

            if (last === ".") {
              parts.splice(i, 1);
            } else if (last === "..") {
              parts.splice(i, 1);
              up++;
            } else if (up) {
              parts.splice(i, 1);
              up--;
            }
          }

          if (allowAboveRoot) {
            for (; up--; up) {
              parts.unshift("..");
            }
          }

          return parts;
        }

        var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;

        var splitPath = function splitPath(filename) {
          return splitPathRe.exec(filename).slice(1);
        };

        exports.resolve = function () {
          var resolvedPath = "",
              resolvedAbsolute = false;

          for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
            var path = i >= 0 ? arguments[i] : process.cwd();

            if (typeof path !== "string") {
              throw new TypeError("Arguments to path.resolve must be strings");
            } else if (!path) {
              continue;
            }

            resolvedPath = path + "/" + resolvedPath;
            resolvedAbsolute = path.charAt(0) === "/";
          }

          resolvedPath = normalizeArray(filter(resolvedPath.split("/"), function (p) {
            return !!p;
          }), !resolvedAbsolute).join("/");
          return (resolvedAbsolute ? "/" : "") + resolvedPath || ".";
        };

        exports.normalize = function (path) {
          var isAbsolute = exports.isAbsolute(path),
              trailingSlash = substr(path, -1) === "/";
          path = normalizeArray(filter(path.split("/"), function (p) {
            return !!p;
          }), !isAbsolute).join("/");

          if (!path && !isAbsolute) {
            path = ".";
          }

          if (path && trailingSlash) {
            path += "/";
          }

          return (isAbsolute ? "/" : "") + path;
        };

        exports.isAbsolute = function (path) {
          return path.charAt(0) === "/";
        };

        exports.join = function () {
          var paths = Array.prototype.slice.call(arguments, 0);
          return exports.normalize(filter(paths, function (p, index) {
            if (typeof p !== "string") {
              throw new TypeError("Arguments to path.join must be strings");
            }

            return p;
          }).join("/"));
        };

        exports.relative = function (from, to) {
          from = exports.resolve(from).substr(1);
          to = exports.resolve(to).substr(1);

          function trim(arr) {
            var start = 0;

            for (; start < arr.length; start++) {
              if (arr[start] !== "") break;
            }

            var end = arr.length - 1;

            for (; end >= 0; end--) {
              if (arr[end] !== "") break;
            }

            if (start > end) return [];
            return arr.slice(start, end - start + 1);
          }

          var fromParts = trim(from.split("/"));
          var toParts = trim(to.split("/"));
          var length = Math.min(fromParts.length, toParts.length);
          var samePartsLength = length;

          for (var i = 0; i < length; i++) {
            if (fromParts[i] !== toParts[i]) {
              samePartsLength = i;
              break;
            }
          }

          var outputParts = [];

          for (var i = samePartsLength; i < fromParts.length; i++) {
            outputParts.push("..");
          }

          outputParts = outputParts.concat(toParts.slice(samePartsLength));
          return outputParts.join("/");
        };

        exports.sep = "/";
        exports.delimiter = ":";

        exports.dirname = function (path) {
          var result = splitPath(path),
              root = result[0],
              dir = result[1];

          if (!root && !dir) {
            return ".";
          }

          if (dir) {
            dir = dir.substr(0, dir.length - 1);
          }

          return root + dir;
        };

        exports.basename = function (path, ext) {
          var f = splitPath(path)[2];

          if (ext && f.substr(-1 * ext.length) === ext) {
            f = f.substr(0, f.length - ext.length);
          }

          return f;
        };

        exports.extname = function (path) {
          return splitPath(path)[3];
        };

        function filter(xs, f) {
          if (xs.filter) return xs.filter(f);
          var res = [];

          for (var i = 0; i < xs.length; i++) {
            if (f(xs[i], i, xs)) res.push(xs[i]);
          }

          return res;
        }

        var substr = "ab".substr(-1) === "b" ? function (str, start, len) {
          return str.substr(start, len);
        } : function (str, start, len) {
          if (start < 0) start = str.length + start;
          return str.substr(start, len);
        };
      }).call(this, require("_process"));
    }, {
      _process: 5
    }],
    5: [function (require, module, exports) {
      var process = module.exports = {};
      var cachedSetTimeout;
      var cachedClearTimeout;

      function defaultSetTimout() {
        throw new Error("setTimeout has not been defined");
      }

      function defaultClearTimeout() {
        throw new Error("clearTimeout has not been defined");
      }

      (function () {
        try {
          if (typeof setTimeout === "function") {
            cachedSetTimeout = setTimeout;
          } else {
            cachedSetTimeout = defaultSetTimout;
          }
        } catch (e) {
          cachedSetTimeout = defaultSetTimout;
        }

        try {
          if (typeof clearTimeout === "function") {
            cachedClearTimeout = clearTimeout;
          } else {
            cachedClearTimeout = defaultClearTimeout;
          }
        } catch (e) {
          cachedClearTimeout = defaultClearTimeout;
        }
      })();

      function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) {
          return setTimeout(fun, 0);
        }

        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
          cachedSetTimeout = setTimeout;
          return setTimeout(fun, 0);
        }

        try {
          return cachedSetTimeout(fun, 0);
        } catch (e) {
          try {
            return cachedSetTimeout.call(null, fun, 0);
          } catch (e) {
            return cachedSetTimeout.call(this, fun, 0);
          }
        }
      }

      function runClearTimeout(marker) {
        if (cachedClearTimeout === clearTimeout) {
          return clearTimeout(marker);
        }

        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
          cachedClearTimeout = clearTimeout;
          return clearTimeout(marker);
        }

        try {
          return cachedClearTimeout(marker);
        } catch (e) {
          try {
            return cachedClearTimeout.call(null, marker);
          } catch (e) {
            return cachedClearTimeout.call(this, marker);
          }
        }
      }

      var queue = [];
      var draining = false;
      var currentQueue;
      var queueIndex = -1;

      function cleanUpNextTick() {
        if (!draining || !currentQueue) {
          return;
        }

        draining = false;

        if (currentQueue.length) {
          queue = currentQueue.concat(queue);
        } else {
          queueIndex = -1;
        }

        if (queue.length) {
          drainQueue();
        }
      }

      function drainQueue() {
        if (draining) {
          return;
        }

        var timeout = runTimeout(cleanUpNextTick);
        draining = true;
        var len = queue.length;

        while (len) {
          currentQueue = queue;
          queue = [];

          while (++queueIndex < len) {
            if (currentQueue) {
              currentQueue[queueIndex].run();
            }
          }

          queueIndex = -1;
          len = queue.length;
        }

        currentQueue = null;
        draining = false;
        runClearTimeout(timeout);
      }

      process.nextTick = function (fun) {
        var args = new Array(arguments.length - 1);

        if (arguments.length > 1) {
          for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
          }
        }

        queue.push(new Item(fun, args));

        if (queue.length === 1 && !draining) {
          runTimeout(drainQueue);
        }
      };

      function Item(fun, array) {
        this.fun = fun;
        this.array = array;
      }

      Item.prototype.run = function () {
        this.fun.apply(null, this.array);
      };

      process.title = "browser";
      process.browser = true;
      process.env = {};
      process.argv = [];
      process.version = "";
      process.versions = {};

      function noop() {}

      process.on = noop;
      process.addListener = noop;
      process.once = noop;
      process.off = noop;
      process.removeListener = noop;
      process.removeAllListeners = noop;
      process.emit = noop;
      process.prependListener = noop;
      process.prependOnceListener = noop;

      process.listeners = function (name) {
        return [];
      };

      process.binding = function (name) {
        throw new Error("process.binding is not supported");
      };

      process.cwd = function () {
        return "/";
      };

      process.chdir = function (dir) {
        throw new Error("process.chdir is not supported");
      };

      process.umask = function () {
        return 0;
      };
    }, {}],
    6: [function (require, module, exports) {
      module.exports = {
        name: "ejs",
        description: "Embedded JavaScript templates",
        keywords: ["template", "engine", "ejs"],
        version: "2.6.0",
        author: "Matthew Eernisse <mde@fleegix.org> (http://fleegix.org)",
        contributors: ["Timothy Gu <timothygu99@gmail.com> (https://timothygu.github.io)"],
        license: "Apache-2.0",
        main: "./lib/ejs.js",
        repository: {
          type: "git",
          url: "git://github.com/mde/ejs.git"
        },
        bugs: "https://github.com/mde/ejs/issues",
        homepage: "https://github.com/mde/ejs",
        dependencies: {},
        devDependencies: {
          browserify: "^13.1.1",
          eslint: "^4.14.0",
          "git-directory-deploy": "^1.5.1",
          istanbul: "~0.4.3",
          jake: "^8.0.16",
          jsdoc: "^3.4.0",
          "lru-cache": "^4.0.1",
          mocha: "^5.0.5",
          "uglify-js": "^3.3.16"
        },
        engines: {
          node: ">=0.10.0"
        },
        scripts: {
          test: "jake test",
          lint: 'eslint "**/*.js" Jakefile',
          coverage: "istanbul cover node_modules/mocha/bin/_mocha",
          doc: "jake doc",
          devdoc: "jake doc[dev]"
        }
      };
    }, {}]
  }, {}, [1])(1);
});
/*!
 * EventEmitter v5.2.6 - git.io/ee
 * Unlicense - http://unlicense.org/
 * Oliver Caldwell - https://oli.me.uk/
 * @preserve
 */


;

(function (exports) {
  'use strict';
  /**
   * Class for managing events.
   * Can be extended to provide event functionality in other classes.
   *
   * @class EventEmitter Manages event registering and emitting.
   */

  function EventEmitter() {} // Shortcuts to improve speed and size


  var proto = EventEmitter.prototype;
  var originalGlobalValue = exports.EventEmitter;
  /**
   * Finds the index of the listener for the event in its storage array.
   *
   * @param {Function[]} listeners Array of listeners to search through.
   * @param {Function} listener Method to look for.
   * @return {Number} Index of the specified listener, -1 if not found
   * @api private
   */

  function indexOfListener(listeners, listener) {
    var i = listeners.length;

    while (i--) {
      if (listeners[i].listener === listener) {
        return i;
      }
    }

    return -1;
  }
  /**
   * Alias a method while keeping the context correct, to allow for overwriting of target method.
   *
   * @param {String} name The name of the target method.
   * @return {Function} The aliased method
   * @api private
   */


  function alias(name) {
    return function aliasClosure() {
      return this[name].apply(this, arguments);
    };
  }
  /**
   * Returns the listener array for the specified event.
   * Will initialise the event object and listener arrays if required.
   * Will return an object if you use a regex search. The object contains keys for each matched event. So /ba[rz]/ might return an object containing bar and baz. But only if you have either defined them with defineEvent or added some listeners to them.
   * Each property in the object response is an array of listener functions.
   *
   * @param {String|RegExp} evt Name of the event to return the listeners from.
   * @return {Function[]|Object} All listener functions for the event.
   */


  proto.getListeners = function getListeners(evt) {
    var events = this._getEvents();

    var response;
    var key; // Return a concatenated array of all matching events if
    // the selector is a regular expression.

    if (evt instanceof RegExp) {
      response = {};

      for (key in events) {
        if (events.hasOwnProperty(key) && evt.test(key)) {
          response[key] = events[key];
        }
      }
    } else {
      response = events[evt] || (events[evt] = []);
    }

    return response;
  };
  /**
   * Takes a list of listener objects and flattens it into a list of listener functions.
   *
   * @param {Object[]} listeners Raw listener objects.
   * @return {Function[]} Just the listener functions.
   */


  proto.flattenListeners = function flattenListeners(listeners) {
    var flatListeners = [];
    var i;

    for (i = 0; i < listeners.length; i += 1) {
      flatListeners.push(listeners[i].listener);
    }

    return flatListeners;
  };
  /**
   * Fetches the requested listeners via getListeners but will always return the results inside an object. This is mainly for internal use but others may find it useful.
   *
   * @param {String|RegExp} evt Name of the event to return the listeners from.
   * @return {Object} All listener functions for an event in an object.
   */


  proto.getListenersAsObject = function getListenersAsObject(evt) {
    var listeners = this.getListeners(evt);
    var response;

    if (listeners instanceof Array) {
      response = {};
      response[evt] = listeners;
    }

    return response || listeners;
  };

  function isValidListener(listener) {
    if (typeof listener === 'function' || listener instanceof RegExp) {
      return true;
    } else if (listener && _typeof(listener) === 'object') {
      return isValidListener(listener.listener);
    } else {
      return false;
    }
  }
  /**
   * Adds a listener function to the specified event.
   * The listener will not be added if it is a duplicate.
   * If the listener returns true then it will be removed after it is called.
   * If you pass a regular expression as the event name then the listener will be added to all events that match it.
   *
   * @param {String|RegExp} evt Name of the event to attach the listener to.
   * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
   * @return {Object} Current instance of EventEmitter for chaining.
   */


  proto.addListener = function addListener(evt, listener) {
    if (!isValidListener(listener)) {
      throw new TypeError('listener must be a function');
    }

    var listeners = this.getListenersAsObject(evt);
    var listenerIsWrapped = _typeof(listener) === 'object';
    var key;

    for (key in listeners) {
      if (listeners.hasOwnProperty(key) && indexOfListener(listeners[key], listener) === -1) {
        listeners[key].push(listenerIsWrapped ? listener : {
          listener: listener,
          once: false
        });
      }
    }

    return this;
  };
  /**
   * Alias of addListener
   */


  proto.on = alias('addListener');
  /**
   * Semi-alias of addListener. It will add a listener that will be
   * automatically removed after its first execution.
   *
   * @param {String|RegExp} evt Name of the event to attach the listener to.
   * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
   * @return {Object} Current instance of EventEmitter for chaining.
   */

  proto.addOnceListener = function addOnceListener(evt, listener) {
    return this.addListener(evt, {
      listener: listener,
      once: true
    });
  };
  /**
   * Alias of addOnceListener.
   */


  proto.once = alias('addOnceListener');
  /**
   * Defines an event name. This is required if you want to use a regex to add a listener to multiple events at once. If you don't do this then how do you expect it to know what event to add to? Should it just add to every possible match for a regex? No. That is scary and bad.
   * You need to tell it what event names should be matched by a regex.
   *
   * @param {String} evt Name of the event to create.
   * @return {Object} Current instance of EventEmitter for chaining.
   */

  proto.defineEvent = function defineEvent(evt) {
    this.getListeners(evt);
    return this;
  };
  /**
   * Uses defineEvent to define multiple events.
   *
   * @param {String[]} evts An array of event names to define.
   * @return {Object} Current instance of EventEmitter for chaining.
   */


  proto.defineEvents = function defineEvents(evts) {
    for (var i = 0; i < evts.length; i += 1) {
      this.defineEvent(evts[i]);
    }

    return this;
  };
  /**
   * Removes a listener function from the specified event.
   * When passed a regular expression as the event name, it will remove the listener from all events that match it.
   *
   * @param {String|RegExp} evt Name of the event to remove the listener from.
   * @param {Function} listener Method to remove from the event.
   * @return {Object} Current instance of EventEmitter for chaining.
   */


  proto.removeListener = function removeListener(evt, listener) {
    var listeners = this.getListenersAsObject(evt);
    var index;
    var key;

    for (key in listeners) {
      if (listeners.hasOwnProperty(key)) {
        index = indexOfListener(listeners[key], listener);

        if (index !== -1) {
          listeners[key].splice(index, 1);
        }
      }
    }

    return this;
  };
  /**
   * Alias of removeListener
   */


  proto.off = alias('removeListener');
  /**
   * Adds listeners in bulk using the manipulateListeners method.
   * If you pass an object as the first argument you can add to multiple events at once. The object should contain key value pairs of events and listeners or listener arrays. You can also pass it an event name and an array of listeners to be added.
   * You can also pass it a regular expression to add the array of listeners to all events that match it.
   * Yeah, this function does quite a bit. That's probably a bad thing.
   *
   * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add to multiple events at once.
   * @param {Function[]} [listeners] An optional array of listener functions to add.
   * @return {Object} Current instance of EventEmitter for chaining.
   */

  proto.addListeners = function addListeners(evt, listeners) {
    // Pass through to manipulateListeners
    return this.manipulateListeners(false, evt, listeners);
  };
  /**
   * Removes listeners in bulk using the manipulateListeners method.
   * If you pass an object as the first argument you can remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
   * You can also pass it an event name and an array of listeners to be removed.
   * You can also pass it a regular expression to remove the listeners from all events that match it.
   *
   * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to remove from multiple events at once.
   * @param {Function[]} [listeners] An optional array of listener functions to remove.
   * @return {Object} Current instance of EventEmitter for chaining.
   */


  proto.removeListeners = function removeListeners(evt, listeners) {
    // Pass through to manipulateListeners
    return this.manipulateListeners(true, evt, listeners);
  };
  /**
   * Edits listeners in bulk. The addListeners and removeListeners methods both use this to do their job. You should really use those instead, this is a little lower level.
   * The first argument will determine if the listeners are removed (true) or added (false).
   * If you pass an object as the second argument you can add/remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
   * You can also pass it an event name and an array of listeners to be added/removed.
   * You can also pass it a regular expression to manipulate the listeners of all events that match it.
   *
   * @param {Boolean} remove True if you want to remove listeners, false if you want to add.
   * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add/remove from multiple events at once.
   * @param {Function[]} [listeners] An optional array of listener functions to add/remove.
   * @return {Object} Current instance of EventEmitter for chaining.
   */


  proto.manipulateListeners = function manipulateListeners(remove, evt, listeners) {
    var i;
    var value;
    var single = remove ? this.removeListener : this.addListener;
    var multiple = remove ? this.removeListeners : this.addListeners; // If evt is an object then pass each of its properties to this method

    if (_typeof(evt) === 'object' && !(evt instanceof RegExp)) {
      for (i in evt) {
        if (evt.hasOwnProperty(i) && (value = evt[i])) {
          // Pass the single listener straight through to the singular method
          if (typeof value === 'function') {
            single.call(this, i, value);
          } else {
            // Otherwise pass back to the multiple function
            multiple.call(this, i, value);
          }
        }
      }
    } else {
      // So evt must be a string
      // And listeners must be an array of listeners
      // Loop over it and pass each one to the multiple method
      i = listeners.length;

      while (i--) {
        single.call(this, evt, listeners[i]);
      }
    }

    return this;
  };
  /**
   * Removes all listeners from a specified event.
   * If you do not specify an event then all listeners will be removed.
   * That means every event will be emptied.
   * You can also pass a regex to remove all events that match it.
   *
   * @param {String|RegExp} [evt] Optional name of the event to remove all listeners for. Will remove from every event if not passed.
   * @return {Object} Current instance of EventEmitter for chaining.
   */


  proto.removeEvent = function removeEvent(evt) {
    var type = _typeof(evt);

    var events = this._getEvents();

    var key; // Remove different things depending on the state of evt

    if (type === 'string') {
      // Remove all listeners for the specified event
      delete events[evt];
    } else if (evt instanceof RegExp) {
      // Remove all events matching the regex.
      for (key in events) {
        if (events.hasOwnProperty(key) && evt.test(key)) {
          delete events[key];
        }
      }
    } else {
      // Remove all listeners in all events
      delete this._events;
    }

    return this;
  };
  /**
   * Alias of removeEvent.
   *
   * Added to mirror the node API.
   */


  proto.removeAllListeners = alias('removeEvent');
  /**
   * Emits an event of your choice.
   * When emitted, every listener attached to that event will be executed.
   * If you pass the optional argument array then those arguments will be passed to every listener upon execution.
   * Because it uses `apply`, your array of arguments will be passed as if you wrote them out separately.
   * So they will not arrive within the array on the other side, they will be separate.
   * You can also pass a regular expression to emit to all events that match it.
   *
   * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
   * @param {Array} [args] Optional array of arguments to be passed to each listener.
   * @return {Object} Current instance of EventEmitter for chaining.
   */

  proto.emitEvent = function emitEvent(evt, args) {
    var listenersMap = this.getListenersAsObject(evt);
    var listeners;
    var listener;
    var i;
    var key;
    var response;

    for (key in listenersMap) {
      if (listenersMap.hasOwnProperty(key)) {
        listeners = listenersMap[key].slice(0);

        for (i = 0; i < listeners.length; i++) {
          // If the listener returns true then it shall be removed from the event
          // The function is executed either with a basic call or an apply if there is an args array
          listener = listeners[i];

          if (listener.once === true) {
            this.removeListener(evt, listener.listener);
          }

          response = listener.listener.apply(this, args || []);

          if (response === this._getOnceReturnValue()) {
            this.removeListener(evt, listener.listener);
          }
        }
      }
    }

    return this;
  };
  /**
   * Alias of emitEvent
   */


  proto.trigger = alias('emitEvent');
  /**
   * Subtly different from emitEvent in that it will pass its arguments on to the listeners, as opposed to taking a single array of arguments to pass on.
   * As with emitEvent, you can pass a regex in place of the event name to emit to all events that match it.
   *
   * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
   * @param {...*} Optional additional arguments to be passed to each listener.
   * @return {Object} Current instance of EventEmitter for chaining.
   */

  proto.emit = function emit(evt) {
    var args = Array.prototype.slice.call(arguments, 1);
    return this.emitEvent(evt, args);
  };
  /**
   * Sets the current value to check against when executing listeners. If a
   * listeners return value matches the one set here then it will be removed
   * after execution. This value defaults to true.
   *
   * @param {*} value The new value to check for when executing listeners.
   * @return {Object} Current instance of EventEmitter for chaining.
   */


  proto.setOnceReturnValue = function setOnceReturnValue(value) {
    this._onceReturnValue = value;
    return this;
  };
  /**
   * Fetches the current value to check against when executing listeners. If
   * the listeners return value matches this one then it should be removed
   * automatically. It will return true by default.
   *
   * @return {*|Boolean} The current value to check for or the default, true.
   * @api private
   */


  proto._getOnceReturnValue = function _getOnceReturnValue() {
    if (this.hasOwnProperty('_onceReturnValue')) {
      return this._onceReturnValue;
    } else {
      return true;
    }
  };
  /**
   * Fetches the events object and creates one if required.
   *
   * @return {Object} The events storage object.
   * @api private
   */


  proto._getEvents = function _getEvents() {
    return this._events || (this._events = {});
  };
  /**
   * Reverts the global {@link EventEmitter} to its previous value and returns a reference to this version.
   *
   * @return {Function} Non conflicting EventEmitter class.
   */


  EventEmitter.noConflict = function noConflict() {
    exports.EventEmitter = originalGlobalValue;
    return EventEmitter;
  }; // Expose the class either via AMD, CommonJS or the global object


  if (typeof define === 'function' && define.amd) {
    define(function () {
      return EventEmitter;
    });
  } else if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === 'object' && module.exports) {
    module.exports = EventEmitter;
  } else {
    exports.EventEmitter = EventEmitter;
  }
})(typeof window !== 'undefined' ? window : void 0 || {});
/* mousetrap v1.6.3 craig.is/killing/mice */


(function (q, u, c) {
  function v(a, b, g) {
    a.addEventListener ? a.addEventListener(b, g, !1) : a.attachEvent("on" + b, g);
  }

  function z(a) {
    if ("keypress" == a.type) {
      var b = String.fromCharCode(a.which);
      a.shiftKey || (b = b.toLowerCase());
      return b;
    }

    return n[a.which] ? n[a.which] : r[a.which] ? r[a.which] : String.fromCharCode(a.which).toLowerCase();
  }

  function F(a) {
    var b = [];
    a.shiftKey && b.push("shift");
    a.altKey && b.push("alt");
    a.ctrlKey && b.push("ctrl");
    a.metaKey && b.push("meta");
    return b;
  }

  function w(a) {
    return "shift" == a || "ctrl" == a || "alt" == a || "meta" == a;
  }

  function A(a, b) {
    var g,
        d = [];
    var e = a;
    "+" === e ? e = ["+"] : (e = e.replace(/\+{2}/g, "+plus"), e = e.split("+"));

    for (g = 0; g < e.length; ++g) {
      var m = e[g];
      B[m] && (m = B[m]);
      b && "keypress" != b && C[m] && (m = C[m], d.push("shift"));
      w(m) && d.push(m);
    }

    e = m;
    g = b;

    if (!g) {
      if (!p) {
        p = {};

        for (var c in n) {
          95 < c && 112 > c || n.hasOwnProperty(c) && (p[n[c]] = c);
        }
      }

      g = p[e] ? "keydown" : "keypress";
    }

    "keypress" == g && d.length && (g = "keydown");
    return {
      key: m,
      modifiers: d,
      action: g
    };
  }

  function D(a, b) {
    return null === a || a === u ? !1 : a === b ? !0 : D(a.parentNode, b);
  }

  function d(a) {
    function b(a) {
      a = a || {};
      var b = !1,
          l;

      for (l in p) {
        a[l] ? b = !0 : p[l] = 0;
      }

      b || (x = !1);
    }

    function g(a, b, t, f, g, d) {
      var l,
          E = [],
          h = t.type;
      if (!k._callbacks[a]) return [];
      "keyup" == h && w(a) && (b = [a]);

      for (l = 0; l < k._callbacks[a].length; ++l) {
        var c = k._callbacks[a][l];

        if ((f || !c.seq || p[c.seq] == c.level) && h == c.action) {
          var e;
          (e = "keypress" == h && !t.metaKey && !t.ctrlKey) || (e = c.modifiers, e = b.sort().join(",") === e.sort().join(","));
          e && (e = f && c.seq == f && c.level == d, (!f && c.combo == g || e) && k._callbacks[a].splice(l, 1), E.push(c));
        }
      }

      return E;
    }

    function c(a, b, c, f) {
      k.stopCallback(b, b.target || b.srcElement, c, f) || !1 !== a(b, c) || (b.preventDefault ? b.preventDefault() : b.returnValue = !1, b.stopPropagation ? b.stopPropagation() : b.cancelBubble = !0);
    }

    function e(a) {
      "number" !== typeof a.which && (a.which = a.keyCode);
      var b = z(a);
      b && ("keyup" == a.type && y === b ? y = !1 : k.handleKey(b, F(a), a));
    }

    function m(a, g, t, f) {
      function h(c) {
        return function () {
          x = c;
          ++p[a];
          clearTimeout(q);
          q = setTimeout(b, 1E3);
        };
      }

      function l(g) {
        c(t, g, a);
        "keyup" !== f && (y = z(g));
        setTimeout(b, 10);
      }

      for (var d = p[a] = 0; d < g.length; ++d) {
        var e = d + 1 === g.length ? l : h(f || A(g[d + 1]).action);
        n(g[d], e, f, a, d);
      }
    }

    function n(a, b, c, f, d) {
      k._directMap[a + ":" + c] = b;
      a = a.replace(/\s+/g, " ");
      var e = a.split(" ");
      1 < e.length ? m(a, e, b, c) : (c = A(a, c), k._callbacks[c.key] = k._callbacks[c.key] || [], g(c.key, c.modifiers, {
        type: c.action
      }, f, a, d), k._callbacks[c.key][f ? "unshift" : "push"]({
        callback: b,
        modifiers: c.modifiers,
        action: c.action,
        seq: f,
        level: d,
        combo: a
      }));
    }

    var k = this;
    a = a || u;
    if (!(k instanceof d)) return new d(a);
    k.target = a;
    k._callbacks = {};
    k._directMap = {};
    var p = {},
        q,
        y = !1,
        r = !1,
        x = !1;

    k._handleKey = function (a, d, e) {
      var f = g(a, d, e),
          h;
      d = {};
      var k = 0,
          l = !1;

      for (h = 0; h < f.length; ++h) {
        f[h].seq && (k = Math.max(k, f[h].level));
      }

      for (h = 0; h < f.length; ++h) {
        f[h].seq ? f[h].level == k && (l = !0, d[f[h].seq] = 1, c(f[h].callback, e, f[h].combo, f[h].seq)) : l || c(f[h].callback, e, f[h].combo);
      }

      f = "keypress" == e.type && r;
      e.type != x || w(a) || f || b(d);
      r = l && "keydown" == e.type;
    };

    k._bindMultiple = function (a, b, c) {
      for (var d = 0; d < a.length; ++d) {
        n(a[d], b, c);
      }
    };

    v(a, "keypress", e);
    v(a, "keydown", e);
    v(a, "keyup", e);
  }

  if (q) {
    var n = {
      8: "backspace",
      9: "tab",
      13: "enter",
      16: "shift",
      17: "ctrl",
      18: "alt",
      20: "capslock",
      27: "esc",
      32: "space",
      33: "pageup",
      34: "pagedown",
      35: "end",
      36: "home",
      37: "left",
      38: "up",
      39: "right",
      40: "down",
      45: "ins",
      46: "del",
      91: "meta",
      93: "meta",
      224: "meta"
    },
        r = {
      106: "*",
      107: "+",
      109: "-",
      110: ".",
      111: "/",
      186: ";",
      187: "=",
      188: ",",
      189: "-",
      190: ".",
      191: "/",
      192: "`",
      219: "[",
      220: "\\",
      221: "]",
      222: "'"
    },
        C = {
      "~": "`",
      "!": "1",
      "@": "2",
      "#": "3",
      $: "4",
      "%": "5",
      "^": "6",
      "&": "7",
      "*": "8",
      "(": "9",
      ")": "0",
      _: "-",
      "+": "=",
      ":": ";",
      '"': "'",
      "<": ",",
      ">": ".",
      "?": "/",
      "|": "\\"
    },
        B = {
      option: "alt",
      command: "meta",
      "return": "enter",
      escape: "esc",
      plus: "+",
      mod: /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? "meta" : "ctrl"
    },
        p;

    for (c = 1; 20 > c; ++c) {
      n[111 + c] = "f" + c;
    }

    for (c = 0; 9 >= c; ++c) {
      n[c + 96] = c.toString();
    }

    d.prototype.bind = function (a, b, c) {
      a = a instanceof Array ? a : [a];

      this._bindMultiple.call(this, a, b, c);

      return this;
    };

    d.prototype.unbind = function (a, b) {
      return this.bind.call(this, a, function () {}, b);
    };

    d.prototype.trigger = function (a, b) {
      if (this._directMap[a + ":" + b]) this._directMap[a + ":" + b]({}, a);
      return this;
    };

    d.prototype.reset = function () {
      this._callbacks = {};
      this._directMap = {};
      return this;
    };

    d.prototype.stopCallback = function (a, b) {
      if (-1 < (" " + b.className + " ").indexOf(" mousetrap ") || D(b, this.target)) return !1;

      if ("composedPath" in a && "function" === typeof a.composedPath) {
        var c = a.composedPath()[0];
        c !== a.target && (b = c);
      }

      return "INPUT" == b.tagName || "SELECT" == b.tagName || "TEXTAREA" == b.tagName || b.isContentEditable;
    };

    d.prototype.handleKey = function () {
      return this._handleKey.apply(this, arguments);
    };

    d.addKeycodes = function (a) {
      for (var b in a) {
        a.hasOwnProperty(b) && (n[b] = a[b]);
      }

      p = null;
    };

    d.init = function () {
      var a = d(u),
          b;

      for (b in a) {
        "_" !== b.charAt(0) && (d[b] = function (b) {
          return function () {
            return a[b].apply(a, arguments);
          };
        }(b));
      }
    };

    d.init();
    q.Mousetrap = d;
    "undefined" !== typeof module && module.exports && (module.exports = d);
    "function" === typeof define && define.amd && define(function () {
      return d;
    });
  }
})("undefined" !== typeof window ? window : null, "undefined" !== typeof window ? document : null);
/**
 * Object.prototype.forEach() polyfill
 * https://gomakethings.com/looping-through-objects-with-es6/
 * @author Chris Ferdinandi
 * @license MIT
 */


if (!Object.prototype.forEach) {
  Object.defineProperty(Object.prototype, 'forEach', {
    value: function value(callback, thisArg) {
      if (this == null) {
        throw new TypeError('Not an object');
      }

      thisArg = thisArg || window;

      for (var key in this) {
        if (this.hasOwnProperty(key)) {
          callback.call(thisArg, this[key], key, this);
        }
      }
    }
  });
}
/* PrismJS 1.16.0
https://prismjs.com/download.html#themes=prism-tomorrow&languages=markup+css+clike+javascript+arff+markup-templating+ejs+handlebars+php+json+scss+sass+pug&plugins=line-highlight+line-numbers */


var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
    Prism = function (g) {
  var c = /\blang(?:uage)?-([\w-]+)\b/i,
      a = 0,
      C = {
    manual: g.Prism && g.Prism.manual,
    disableWorkerMessageHandler: g.Prism && g.Prism.disableWorkerMessageHandler,
    util: {
      encode: function encode(e) {
        return e instanceof M ? new M(e.type, C.util.encode(e.content), e.alias) : Array.isArray(e) ? e.map(C.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
      },
      type: function type(e) {
        return Object.prototype.toString.call(e).slice(8, -1);
      },
      objId: function objId(e) {
        return e.__id || Object.defineProperty(e, "__id", {
          value: ++a
        }), e.__id;
      },
      clone: function t(e, n) {
        var r,
            a,
            i = C.util.type(e);

        switch (n = n || {}, i) {
          case "Object":
            if (a = C.util.objId(e), n[a]) return n[a];

            for (var l in r = {}, n[a] = r, e) {
              e.hasOwnProperty(l) && (r[l] = t(e[l], n));
            }

            return r;

          case "Array":
            return a = C.util.objId(e), n[a] ? n[a] : (r = [], n[a] = r, e.forEach(function (e, a) {
              r[a] = t(e, n);
            }), r);

          default:
            return e;
        }
      }
    },
    languages: {
      extend: function extend(e, a) {
        var t = C.util.clone(C.languages[e]);

        for (var n in a) {
          t[n] = a[n];
        }

        return t;
      },
      insertBefore: function insertBefore(t, e, a, n) {
        var r = (n = n || C.languages)[t],
            i = {};

        for (var l in r) {
          if (r.hasOwnProperty(l)) {
            if (l == e) for (var o in a) {
              a.hasOwnProperty(o) && (i[o] = a[o]);
            }
            a.hasOwnProperty(l) || (i[l] = r[l]);
          }
        }

        var s = n[t];
        return n[t] = i, C.languages.DFS(C.languages, function (e, a) {
          a === s && e != t && (this[e] = i);
        }), i;
      },
      DFS: function e(a, t, n, r) {
        r = r || {};
        var i = C.util.objId;

        for (var l in a) {
          if (a.hasOwnProperty(l)) {
            t.call(a, l, a[l], n || l);
            var o = a[l],
                s = C.util.type(o);
            "Object" !== s || r[i(o)] ? "Array" !== s || r[i(o)] || (r[i(o)] = !0, e(o, t, l, r)) : (r[i(o)] = !0, e(o, t, null, r));
          }
        }
      }
    },
    plugins: {},
    highlightAll: function highlightAll(e, a) {
      C.highlightAllUnder(document, e, a);
    },
    highlightAllUnder: function highlightAllUnder(e, a, t) {
      var n = {
        callback: t,
        selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
      };
      C.hooks.run("before-highlightall", n);

      for (var r, i = n.elements || e.querySelectorAll(n.selector), l = 0; r = i[l++];) {
        C.highlightElement(r, !0 === a, n.callback);
      }
    },
    highlightElement: function highlightElement(e, a, t) {
      for (var n, r, i = e; i && !c.test(i.className);) {
        i = i.parentNode;
      }

      i && (n = (i.className.match(c) || [, ""])[1].toLowerCase(), r = C.languages[n]), e.className = e.className.replace(c, "").replace(/\s+/g, " ") + " language-" + n, e.parentNode && (i = e.parentNode, /pre/i.test(i.nodeName) && (i.className = i.className.replace(c, "").replace(/\s+/g, " ") + " language-" + n));

      var l = {
        element: e,
        language: n,
        grammar: r,
        code: e.textContent
      },
          o = function o(e) {
        l.highlightedCode = e, C.hooks.run("before-insert", l), l.element.innerHTML = l.highlightedCode, C.hooks.run("after-highlight", l), C.hooks.run("complete", l), t && t.call(l.element);
      };

      if (C.hooks.run("before-sanity-check", l), l.code) {
        if (C.hooks.run("before-highlight", l), l.grammar) {
          if (a && g.Worker) {
            var s = new Worker(C.filename);
            s.onmessage = function (e) {
              o(e.data);
            }, s.postMessage(JSON.stringify({
              language: l.language,
              code: l.code,
              immediateClose: !0
            }));
          } else o(C.highlight(l.code, l.grammar, l.language));
        } else o(C.util.encode(l.code));
      } else C.hooks.run("complete", l);
    },
    highlight: function highlight(e, a, t) {
      var n = {
        code: e,
        grammar: a,
        language: t
      };
      return C.hooks.run("before-tokenize", n), n.tokens = C.tokenize(n.code, n.grammar), C.hooks.run("after-tokenize", n), M.stringify(C.util.encode(n.tokens), n.language);
    },
    matchGrammar: function matchGrammar(e, a, t, n, r, i, l) {
      for (var o in t) {
        if (t.hasOwnProperty(o) && t[o]) {
          if (o == l) return;
          var s = t[o];
          s = "Array" === C.util.type(s) ? s : [s];

          for (var g = 0; g < s.length; ++g) {
            var c = s[g],
                u = c.inside,
                h = !!c.lookbehind,
                f = !!c.greedy,
                d = 0,
                m = c.alias;

            if (f && !c.pattern.global) {
              var p = c.pattern.toString().match(/[imuy]*$/)[0];
              c.pattern = RegExp(c.pattern.source, p + "g");
            }

            c = c.pattern || c;

            for (var y = n, v = r; y < a.length; v += a[y].length, ++y) {
              var k = a[y];
              if (a.length > e.length) return;

              if (!(k instanceof M)) {
                if (f && y != a.length - 1) {
                  if (c.lastIndex = v, !(x = c.exec(e))) break;

                  for (var b = x.index + (h ? x[1].length : 0), w = x.index + x[0].length, A = y, P = v, O = a.length; A < O && (P < w || !a[A].type && !a[A - 1].greedy); ++A) {
                    (P += a[A].length) <= b && (++y, v = P);
                  }

                  if (a[y] instanceof M) continue;
                  N = A - y, k = e.slice(v, P), x.index -= v;
                } else {
                  c.lastIndex = 0;
                  var x = c.exec(k),
                      N = 1;
                }

                if (x) {
                  h && (d = x[1] ? x[1].length : 0);
                  w = (b = x.index + d) + (x = x[0].slice(d)).length;
                  var j = k.slice(0, b),
                      S = k.slice(w),
                      E = [y, N];
                  j && (++y, v += j.length, E.push(j));

                  var _ = new M(o, u ? C.tokenize(x, u) : x, m, x, f);

                  if (E.push(_), S && E.push(S), Array.prototype.splice.apply(a, E), 1 != N && C.matchGrammar(e, a, t, y, v, !0, o), i) break;
                } else if (i) break;
              }
            }
          }
        }
      }
    },
    tokenize: function tokenize(e, a) {
      var t = [e],
          n = a.rest;

      if (n) {
        for (var r in n) {
          a[r] = n[r];
        }

        delete a.rest;
      }

      return C.matchGrammar(e, t, a, 0, 0, !1), t;
    },
    hooks: {
      all: {},
      add: function add(e, a) {
        var t = C.hooks.all;
        t[e] = t[e] || [], t[e].push(a);
      },
      run: function run(e, a) {
        var t = C.hooks.all[e];
        if (t && t.length) for (var n, r = 0; n = t[r++];) {
          n(a);
        }
      }
    },
    Token: M
  };

  function M(e, a, t, n, r) {
    this.type = e, this.content = a, this.alias = t, this.length = 0 | (n || "").length, this.greedy = !!r;
  }

  if (g.Prism = C, M.stringify = function (e, a) {
    if ("string" == typeof e) return e;
    if (Array.isArray(e)) return e.map(function (e) {
      return M.stringify(e, a);
    }).join("");
    var t = {
      type: e.type,
      content: M.stringify(e.content, a),
      tag: "span",
      classes: ["token", e.type],
      attributes: {},
      language: a
    };

    if (e.alias) {
      var n = Array.isArray(e.alias) ? e.alias : [e.alias];
      Array.prototype.push.apply(t.classes, n);
    }

    C.hooks.run("wrap", t);
    var r = Object.keys(t.attributes).map(function (e) {
      return e + '="' + (t.attributes[e] || "").replace(/"/g, "&quot;") + '"';
    }).join(" ");
    return "<" + t.tag + ' class="' + t.classes.join(" ") + '"' + (r ? " " + r : "") + ">" + t.content + "</" + t.tag + ">";
  }, !g.document) return g.addEventListener && (C.disableWorkerMessageHandler || g.addEventListener("message", function (e) {
    var a = JSON.parse(e.data),
        t = a.language,
        n = a.code,
        r = a.immediateClose;
    g.postMessage(C.highlight(n, C.languages[t], t)), r && g.close();
  }, !1)), C;
  var e = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
  return e && (C.filename = e.src, C.manual || e.hasAttribute("data-manual") || ("loading" !== document.readyState ? window.requestAnimationFrame ? window.requestAnimationFrame(C.highlightAll) : window.setTimeout(C.highlightAll, 16) : document.addEventListener("DOMContentLoaded", C.highlightAll))), C;
}(_self);

"undefined" != typeof module && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism);
Prism.languages.markup = {
  comment: /<!--[\s\S]*?-->/,
  prolog: /<\?[\s\S]+?\?>/,
  doctype: /<!DOCTYPE[\s\S]+?>/i,
  cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
  tag: {
    pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,
    greedy: !0,
    inside: {
      tag: {
        pattern: /^<\/?[^\s>\/]+/i,
        inside: {
          punctuation: /^<\/?/,
          namespace: /^[^\s>\/:]+:/
        }
      },
      "attr-value": {
        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
        inside: {
          punctuation: [/^=/, {
            pattern: /^(\s*)["']|["']$/,
            lookbehind: !0
          }]
        }
      },
      punctuation: /\/?>/,
      "attr-name": {
        pattern: /[^\s>\/]+/,
        inside: {
          namespace: /^[^\s>\/:]+:/
        }
      }
    }
  },
  entity: /&#?[\da-z]{1,8};/i
}, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, Prism.hooks.add("wrap", function (a) {
  "entity" === a.type && (a.attributes.title = a.content.replace(/&amp;/, "&"));
}), Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
  value: function value(a, e) {
    var s = {};
    s["language-" + e] = {
      pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
      lookbehind: !0,
      inside: Prism.languages[e]
    }, s.cdata = /^<!\[CDATA\[|\]\]>$/i;
    var n = {
      "included-cdata": {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        inside: s
      }
    };
    n["language-" + e] = {
      pattern: /[\s\S]+/,
      inside: Prism.languages[e]
    };
    var i = {};
    i[a] = {
      pattern: RegExp("(<__[\\s\\S]*?>)(?:<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\s*|[\\s\\S])*?(?=<\\/__>)".replace(/__/g, a), "i"),
      lookbehind: !0,
      greedy: !0,
      inside: n
    }, Prism.languages.insertBefore("markup", "cdata", i);
  }
}), Prism.languages.xml = Prism.languages.extend("markup", {}), Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup;
!function (s) {
  var e = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
  s.languages.css = {
    comment: /\/\*[\s\S]*?\*\//,
    atrule: {
      pattern: /@[\w-]+?[\s\S]*?(?:;|(?=\s*\{))/i,
      inside: {
        rule: /@[\w-]+/
      }
    },
    url: RegExp("url\\((?:" + e.source + "|.*?)\\)", "i"),
    selector: RegExp("[^{}\\s](?:[^{};\"']|" + e.source + ")*?(?=\\s*\\{)"),
    string: {
      pattern: e,
      greedy: !0
    },
    property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
    important: /!important\b/i,
    "function": /[-a-z0-9]+(?=\()/i,
    punctuation: /[(){};:,]/
  }, s.languages.css.atrule.inside.rest = s.languages.css;
  var a = s.languages.markup;
  a && (a.tag.addInlined("style", "css"), s.languages.insertBefore("inside", "attr-value", {
    "style-attr": {
      pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
      inside: {
        "attr-name": {
          pattern: /^\s*style/i,
          inside: a.tag.inside
        },
        punctuation: /^\s*=\s*['"]|['"]\s*$/,
        "attr-value": {
          pattern: /.+/i,
          inside: s.languages.css
        }
      },
      alias: "language-css"
    }
  }, a.tag));
}(Prism);
Prism.languages.clike = {
  comment: [{
    pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
    lookbehind: !0
  }, {
    pattern: /(^|[^\\:])\/\/.*/,
    lookbehind: !0,
    greedy: !0
  }],
  string: {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: !0
  },
  "class-name": {
    pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
    lookbehind: !0,
    inside: {
      punctuation: /[.\\]/
    }
  },
  keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
  "boolean": /\b(?:true|false)\b/,
  "function": /\w+(?=\()/,
  number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
  operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
  punctuation: /[{}[\];(),.:]/
};
Prism.languages.javascript = Prism.languages.extend("clike", {
  "class-name": [Prism.languages.clike["class-name"], {
    pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
    lookbehind: !0
  }],
  keyword: [{
    pattern: /((?:^|})\s*)(?:catch|finally)\b/,
    lookbehind: !0
  }, {
    pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
    lookbehind: !0
  }],
  number: /\b(?:(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+)n?|\d+n|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
  "function": /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
}), Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/, Prism.languages.insertBefore("javascript", "keyword", {
  regex: {
    pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,
    lookbehind: !0,
    greedy: !0
  },
  "function-variable": {
    pattern: /[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
    alias: "function"
  },
  parameter: [{
    pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
    lookbehind: !0,
    inside: Prism.languages.javascript
  }, {
    pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
    inside: Prism.languages.javascript
  }, {
    pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
    lookbehind: !0,
    inside: Prism.languages.javascript
  }, {
    pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
    lookbehind: !0,
    inside: Prism.languages.javascript
  }],
  constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
}), Prism.languages.insertBefore("javascript", "string", {
  "template-string": {
    pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|[^\\`])*`/,
    greedy: !0,
    inside: {
      interpolation: {
        pattern: /\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
        inside: {
          "interpolation-punctuation": {
            pattern: /^\${|}$/,
            alias: "punctuation"
          },
          rest: Prism.languages.javascript
        }
      },
      string: /[\s\S]+/
    }
  }
}), Prism.languages.markup && Prism.languages.markup.tag.addInlined("script", "javascript"), Prism.languages.js = Prism.languages.javascript;
Prism.languages.arff = {
  comment: /%.*/,
  string: {
    pattern: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
    greedy: !0
  },
  keyword: /@(?:attribute|data|end|relation)\b/i,
  number: /\b\d+(?:\.\d+)?\b/,
  punctuation: /[{},]/
};
!function (h) {
  function v(e, n) {
    return "___" + e.toUpperCase() + n + "___";
  }

  Object.defineProperties(h.languages["markup-templating"] = {}, {
    buildPlaceholders: {
      value: function value(a, r, e, o) {
        if (a.language === r) {
          var c = a.tokenStack = [];
          a.code = a.code.replace(e, function (e) {
            if ("function" == typeof o && !o(e)) return e;

            for (var n, t = c.length; -1 !== a.code.indexOf(n = v(r, t));) {
              ++t;
            }

            return c[t] = e, n;
          }), a.grammar = h.languages.markup;
        }
      }
    },
    tokenizePlaceholders: {
      value: function value(p, k) {
        if (p.language === k && p.tokenStack) {
          p.grammar = h.languages[k];
          var m = 0,
              d = Object.keys(p.tokenStack);
          !function e(n) {
            for (var t = 0; t < n.length && !(m >= d.length); t++) {
              var a = n[t];

              if ("string" == typeof a || a.content && "string" == typeof a.content) {
                var r = d[m],
                    o = p.tokenStack[r],
                    c = "string" == typeof a ? a : a.content,
                    i = v(k, r),
                    u = c.indexOf(i);

                if (-1 < u) {
                  ++m;
                  var g = c.substring(0, u),
                      l = new h.Token(k, h.tokenize(o, p.grammar), "language-" + k, o),
                      s = c.substring(u + i.length),
                      f = [];
                  g && f.push.apply(f, e([g])), f.push(l), s && f.push.apply(f, e([s])), "string" == typeof a ? n.splice.apply(n, [t, 1].concat(f)) : a.content = f;
                }
              } else a.content && e(a.content);
            }

            return n;
          }(p.tokens);
        }
      }
    }
  });
}(Prism);
!function (a) {
  a.languages.ejs = {
    delimiter: {
      pattern: /^<%[-_=]?|[-_]?%>$/,
      alias: "punctuation"
    },
    comment: /^#[\s\S]*/,
    "language-javascript": {
      pattern: /[\s\S]+/,
      inside: a.languages.javascript
    }
  }, a.hooks.add("before-tokenize", function (e) {
    a.languages["markup-templating"].buildPlaceholders(e, "ejs", /<%(?!%)[\s\S]+?%>/g);
  }), a.hooks.add("after-tokenize", function (e) {
    a.languages["markup-templating"].tokenizePlaceholders(e, "ejs");
  });
}(Prism);
!function (e) {
  e.languages.handlebars = {
    comment: /\{\{![\s\S]*?\}\}/,
    delimiter: {
      pattern: /^\{\{\{?|\}\}\}?$/i,
      alias: "punctuation"
    },
    string: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
    number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
    "boolean": /\b(?:true|false)\b/,
    block: {
      pattern: /^(\s*~?\s*)[#\/]\S+?(?=\s*~?\s*$|\s)/i,
      lookbehind: !0,
      alias: "keyword"
    },
    brackets: {
      pattern: /\[[^\]]+\]/,
      inside: {
        punctuation: /\[|\]/,
        variable: /[\s\S]+/
      }
    },
    punctuation: /[!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]/,
    variable: /[^!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~\s]+/
  }, e.hooks.add("before-tokenize", function (a) {
    e.languages["markup-templating"].buildPlaceholders(a, "handlebars", /\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g);
  }), e.hooks.add("after-tokenize", function (a) {
    e.languages["markup-templating"].tokenizePlaceholders(a, "handlebars");
  });
}(Prism);
!function (n) {
  n.languages.php = n.languages.extend("clike", {
    keyword: /\b(?:__halt_compiler|abstract|and|array|as|break|callable|case|catch|class|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|eval|exit|extends|final|finally|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|namespace|new|or|parent|print|private|protected|public|require|require_once|return|static|switch|throw|trait|try|unset|use|var|while|xor|yield)\b/i,
    "boolean": {
      pattern: /\b(?:false|true)\b/i,
      alias: "constant"
    },
    constant: [/\b[A-Z_][A-Z0-9_]*\b/, /\b(?:null)\b/i],
    comment: {
      pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
      lookbehind: !0
    }
  }), n.languages.insertBefore("php", "string", {
    "shell-comment": {
      pattern: /(^|[^\\])#.*/,
      lookbehind: !0,
      alias: "comment"
    }
  }), n.languages.insertBefore("php", "comment", {
    delimiter: {
      pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i,
      alias: "important"
    }
  }), n.languages.insertBefore("php", "keyword", {
    variable: /\$+(?:\w+\b|(?={))/i,
    "package": {
      pattern: /(\\|namespace\s+|use\s+)[\w\\]+/,
      lookbehind: !0,
      inside: {
        punctuation: /\\/
      }
    }
  }), n.languages.insertBefore("php", "operator", {
    property: {
      pattern: /(->)[\w]+/,
      lookbehind: !0
    }
  });
  var e = {
    pattern: /{\$(?:{(?:{[^{}]+}|[^{}]+)}|[^{}])+}|(^|[^\\{])\$+(?:\w+(?:\[.+?]|->\w+)*)/,
    lookbehind: !0,
    inside: {
      rest: n.languages.php
    }
  };
  n.languages.insertBefore("php", "string", {
    "nowdoc-string": {
      pattern: /<<<'([^']+)'(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;/,
      greedy: !0,
      alias: "string",
      inside: {
        delimiter: {
          pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
          alias: "symbol",
          inside: {
            punctuation: /^<<<'?|[';]$/
          }
        }
      }
    },
    "heredoc-string": {
      pattern: /<<<(?:"([^"]+)"(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;|([a-z_]\w*)(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\2;)/i,
      greedy: !0,
      alias: "string",
      inside: {
        delimiter: {
          pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
          alias: "symbol",
          inside: {
            punctuation: /^<<<"?|[";]$/
          }
        },
        interpolation: e
      }
    },
    "single-quoted-string": {
      pattern: /'(?:\\[\s\S]|[^\\'])*'/,
      greedy: !0,
      alias: "string"
    },
    "double-quoted-string": {
      pattern: /"(?:\\[\s\S]|[^\\"])*"/,
      greedy: !0,
      alias: "string",
      inside: {
        interpolation: e
      }
    }
  }), delete n.languages.php.string, n.hooks.add("before-tokenize", function (e) {
    if (/<\?/.test(e.code)) {
      n.languages["markup-templating"].buildPlaceholders(e, "php", /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#)(?:[^?\n\r]|\?(?!>))*|\/\*[\s\S]*?(?:\*\/|$))*?(?:\?>|$)/gi);
    }
  }), n.hooks.add("after-tokenize", function (e) {
    n.languages["markup-templating"].tokenizePlaceholders(e, "php");
  });
}(Prism);
Prism.languages.json = {
  comment: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
  property: {
    pattern: /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
    greedy: !0
  },
  string: {
    pattern: /"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
    greedy: !0
  },
  number: /-?\d+\.?\d*(e[+-]?\d+)?/i,
  punctuation: /[{}[\],]/,
  operator: /:/,
  "boolean": /\b(?:true|false)\b/,
  "null": {
    pattern: /\bnull\b/,
    alias: "keyword"
  }
};
Prism.languages.scss = Prism.languages.extend("css", {
  comment: {
    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
    lookbehind: !0
  },
  atrule: {
    pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,
    inside: {
      rule: /@[\w-]+/
    }
  },
  url: /(?:[-a-z]+-)*url(?=\()/i,
  selector: {
    pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()]|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m,
    inside: {
      parent: {
        pattern: /&/,
        alias: "important"
      },
      placeholder: /%[-\w]+/,
      variable: /\$[-\w]+|#\{\$[-\w]+\}/
    }
  },
  property: {
    pattern: /(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/,
    inside: {
      variable: /\$[-\w]+|#\{\$[-\w]+\}/
    }
  }
}), Prism.languages.insertBefore("scss", "atrule", {
  keyword: [/@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i, {
    pattern: /( +)(?:from|through)(?= )/,
    lookbehind: !0
  }]
}), Prism.languages.insertBefore("scss", "important", {
  variable: /\$[-\w]+|#\{\$[-\w]+\}/
}), Prism.languages.insertBefore("scss", "function", {
  placeholder: {
    pattern: /%[-\w]+/,
    alias: "selector"
  },
  statement: {
    pattern: /\B!(?:default|optional)\b/i,
    alias: "keyword"
  },
  "boolean": /\b(?:true|false)\b/,
  "null": {
    pattern: /\bnull\b/,
    alias: "keyword"
  },
  operator: {
    pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
    lookbehind: !0
  }
}), Prism.languages.scss.atrule.inside.rest = Prism.languages.scss;
!function (e) {
  e.languages.sass = e.languages.extend("css", {
    comment: {
      pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t]+.+)*/m,
      lookbehind: !0
    }
  }), e.languages.insertBefore("sass", "atrule", {
    "atrule-line": {
      pattern: /^(?:[ \t]*)[@+=].+/m,
      inside: {
        atrule: /(?:@[\w-]+|[+=])/m
      }
    }
  }), delete e.languages.sass.atrule;
  var t = /\$[-\w]+|#\{\$[-\w]+\}/,
      a = [/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/, {
    pattern: /(\s+)-(?=\s)/,
    lookbehind: !0
  }];
  e.languages.insertBefore("sass", "property", {
    "variable-line": {
      pattern: /^[ \t]*\$.+/m,
      inside: {
        punctuation: /:/,
        variable: t,
        operator: a
      }
    },
    "property-line": {
      pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s]+.*)/m,
      inside: {
        property: [/[^:\s]+(?=\s*:)/, {
          pattern: /(:)[^:\s]+/,
          lookbehind: !0
        }],
        punctuation: /:/,
        variable: t,
        operator: a,
        important: e.languages.sass.important
      }
    }
  }), delete e.languages.sass.property, delete e.languages.sass.important, e.languages.insertBefore("sass", "punctuation", {
    selector: {
      pattern: /([ \t]*)\S(?:,?[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,?[^,\r\n]+)*)*/,
      lookbehind: !0
    }
  });
}(Prism);
!function (e) {
  e.languages.pug = {
    comment: {
      pattern: /(^([\t ]*))\/\/.*(?:(?:\r?\n|\r)\2[\t ]+.+)*/m,
      lookbehind: !0
    },
    "multiline-script": {
      pattern: /(^([\t ]*)script\b.*\.[\t ]*)(?:(?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/m,
      lookbehind: !0,
      inside: {
        rest: e.languages.javascript
      }
    },
    filter: {
      pattern: /(^([\t ]*)):.+(?:(?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/m,
      lookbehind: !0,
      inside: {
        "filter-name": {
          pattern: /^:[\w-]+/,
          alias: "variable"
        }
      }
    },
    "multiline-plain-text": {
      pattern: /(^([\t ]*)[\w\-#.]+\.[\t ]*)(?:(?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/m,
      lookbehind: !0
    },
    markup: {
      pattern: /(^[\t ]*)<.+/m,
      lookbehind: !0,
      inside: {
        rest: e.languages.markup
      }
    },
    doctype: {
      pattern: /((?:^|\n)[\t ]*)doctype(?: .+)?/,
      lookbehind: !0
    },
    "flow-control": {
      pattern: /(^[\t ]*)(?:if|unless|else|case|when|default|each|while)\b(?: .+)?/m,
      lookbehind: !0,
      inside: {
        each: {
          pattern: /^each .+? in\b/,
          inside: {
            keyword: /\b(?:each|in)\b/,
            punctuation: /,/
          }
        },
        branch: {
          pattern: /^(?:if|unless|else|case|when|default|while)\b/,
          alias: "keyword"
        },
        rest: e.languages.javascript
      }
    },
    keyword: {
      pattern: /(^[\t ]*)(?:block|extends|include|append|prepend)\b.+/m,
      lookbehind: !0
    },
    mixin: [{
      pattern: /(^[\t ]*)mixin .+/m,
      lookbehind: !0,
      inside: {
        keyword: /^mixin/,
        "function": /\w+(?=\s*\(|\s*$)/,
        punctuation: /[(),.]/
      }
    }, {
      pattern: /(^[\t ]*)\+.+/m,
      lookbehind: !0,
      inside: {
        name: {
          pattern: /^\+\w+/,
          alias: "function"
        },
        rest: e.languages.javascript
      }
    }],
    script: {
      pattern: /(^[\t ]*script(?:(?:&[^(]+)?\([^)]+\))*[\t ]+).+/m,
      lookbehind: !0,
      inside: {
        rest: e.languages.javascript
      }
    },
    "plain-text": {
      pattern: /(^[\t ]*(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?[\t ]+).+/m,
      lookbehind: !0
    },
    tag: {
      pattern: /(^[\t ]*)(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?:?/m,
      lookbehind: !0,
      inside: {
        attributes: [{
          pattern: /&[^(]+\([^)]+\)/,
          inside: {
            rest: e.languages.javascript
          }
        }, {
          pattern: /\([^)]+\)/,
          inside: {
            "attr-value": {
              pattern: /(=\s*)(?:\{[^}]*\}|[^,)\r\n]+)/,
              lookbehind: !0,
              inside: {
                rest: e.languages.javascript
              }
            },
            "attr-name": /[\w-]+(?=\s*!?=|\s*[,)])/,
            punctuation: /[!=(),]+/
          }
        }],
        punctuation: /:/
      }
    },
    code: [{
      pattern: /(^[\t ]*(?:-|!?=)).+/m,
      lookbehind: !0,
      inside: {
        rest: e.languages.javascript
      }
    }],
    punctuation: /[.\-!=|]+/
  };

  for (var t = [{
    filter: "atpl",
    language: "twig"
  }, {
    filter: "coffee",
    language: "coffeescript"
  }, "ejs", "handlebars", "less", "livescript", "markdown", {
    filter: "sass",
    language: "scss"
  }, "stylus"], n = {}, a = 0, i = t.length; a < i; a++) {
    var r = t[a];
    r = "string" == typeof r ? {
      filter: r,
      language: r
    } : r, e.languages[r.language] && (n["filter-" + r.filter] = {
      pattern: RegExp("(^([\t ]*)):{{filter_name}}(?:(?:\r?\n|\r(?!\n))(?:\\2[\t ]+.+|\\s*?(?=\r?\n|\r)))+".replace("{{filter_name}}", r.filter), "m"),
      lookbehind: !0,
      inside: {
        "filter-name": {
          pattern: /^:[\w-]+/,
          alias: "variable"
        },
        rest: e.languages[r.language]
      }
    });
  }

  e.languages.insertBefore("pug", "filter", n);
}(Prism);
!function () {
  if ("undefined" != typeof self && self.Prism && self.document && document.querySelector) {
    var t,
        h = function h() {
      if (void 0 === t) {
        var e = document.createElement("div");
        e.style.fontSize = "13px", e.style.lineHeight = "1.5", e.style.padding = 0, e.style.border = 0, e.innerHTML = "&nbsp;<br />&nbsp;", document.body.appendChild(e), t = 38 === e.offsetHeight, document.body.removeChild(e);
      }

      return t;
    },
        l = 0;

    Prism.hooks.add("before-sanity-check", function (e) {
      var t = e.element.parentNode,
          n = t && t.getAttribute("data-line");

      if (t && n && /pre/i.test(t.nodeName)) {
        var i = 0;
        r(".line-highlight", t).forEach(function (e) {
          i += e.textContent.length, e.parentNode.removeChild(e);
        }), i && /^( \n)+$/.test(e.code.slice(-i)) && (e.code = e.code.slice(0, -i));
      }
    }), Prism.hooks.add("complete", function e(t) {
      var n = t.element.parentNode,
          i = n && n.getAttribute("data-line");

      if (n && i && /pre/i.test(n.nodeName)) {
        clearTimeout(l);
        var r = Prism.plugins.lineNumbers,
            o = t.plugins && t.plugins.lineNumbers;
        g(n, "line-numbers") && r && !o ? Prism.hooks.add("line-numbers", e) : (a(n, i), l = setTimeout(s, 1));
      }
    }), window.addEventListener("hashchange", s), window.addEventListener("resize", function () {
      var e = document.querySelectorAll("pre[data-line]");
      Array.prototype.forEach.call(e, function (e) {
        a(e);
      });
    });
  }

  function r(e, t) {
    return Array.prototype.slice.call((t || document).querySelectorAll(e));
  }

  function g(e, t) {
    return t = " " + t + " ", -1 < (" " + e.className + " ").replace(/[\n\t]/g, " ").indexOf(t);
  }

  function a(e, t, n) {
    for (var i, r = (t = "string" == typeof t ? t : e.getAttribute("data-line")).replace(/\s+/g, "").split(","), o = +e.getAttribute("data-line-offset") || 0, l = (h() ? parseInt : parseFloat)(getComputedStyle(e).lineHeight), a = g(e, "line-numbers"), s = 0; i = r[s++];) {
      var d = i.split("-"),
          u = +d[0],
          c = +d[1] || u,
          m = e.querySelector('.line-highlight[data-range="' + i + '"]') || document.createElement("div");

      if (m.setAttribute("aria-hidden", "true"), m.setAttribute("data-range", i), m.className = (n || "") + " line-highlight", a && Prism.plugins.lineNumbers) {
        var p = Prism.plugins.lineNumbers.getLine(e, u),
            f = Prism.plugins.lineNumbers.getLine(e, c);
        p && (m.style.top = p.offsetTop + "px"), f && (m.style.height = f.offsetTop - p.offsetTop + f.offsetHeight + "px");
      } else m.setAttribute("data-start", u), u < c && m.setAttribute("data-end", c), m.style.top = (u - o - 1) * l + "px", m.textContent = new Array(c - u + 2).join(" \n");

      a ? e.appendChild(m) : (e.querySelector("code") || e).appendChild(m);
    }
  }

  function s() {
    var e = location.hash.slice(1);
    r(".temporary.line-highlight").forEach(function (e) {
      e.parentNode.removeChild(e);
    });
    var t = (e.match(/\.([\d,-]+)$/) || [, ""])[1];

    if (t && !document.getElementById(e)) {
      var n = e.slice(0, e.lastIndexOf(".")),
          i = document.getElementById(n);
      i && (i.hasAttribute("data-line") || i.setAttribute("data-line", ""), a(i, t, "temporary "), document.querySelector(".temporary.line-highlight").scrollIntoView());
    }
  }
}();
!function () {
  if ("undefined" != typeof self && self.Prism && self.document) {
    var l = "line-numbers",
        c = /\n(?!$)/g,
        m = function m(e) {
      var t = a(e)["white-space"];

      if ("pre-wrap" === t || "pre-line" === t) {
        var n = e.querySelector("code"),
            r = e.querySelector(".line-numbers-rows"),
            s = e.querySelector(".line-numbers-sizer"),
            i = n.textContent.split(c);
        s || ((s = document.createElement("span")).className = "line-numbers-sizer", n.appendChild(s)), s.style.display = "block", i.forEach(function (e, t) {
          s.textContent = e || "\n";
          var n = s.getBoundingClientRect().height;
          r.children[t].style.height = n + "px";
        }), s.textContent = "", s.style.display = "none";
      }
    },
        a = function a(e) {
      return e ? window.getComputedStyle ? getComputedStyle(e) : e.currentStyle || null : null;
    };

    window.addEventListener("resize", function () {
      Array.prototype.forEach.call(document.querySelectorAll("pre." + l), m);
    }), Prism.hooks.add("complete", function (e) {
      if (e.code) {
        var t = e.element,
            n = t.parentNode;

        if (n && /pre/i.test(n.nodeName) && !t.querySelector(".line-numbers-rows")) {
          for (var r = !1, s = /(?:^|\s)line-numbers(?:\s|$)/, i = t; i; i = i.parentNode) {
            if (s.test(i.className)) {
              r = !0;
              break;
            }
          }

          if (r) {
            t.className = t.className.replace(s, " "), s.test(n.className) || (n.className += " line-numbers");
            var l,
                a = e.code.match(c),
                o = a ? a.length + 1 : 1,
                u = new Array(o + 1).join("<span></span>");
            (l = document.createElement("span")).setAttribute("aria-hidden", "true"), l.className = "line-numbers-rows", l.innerHTML = u, n.hasAttribute("data-start") && (n.style.counterReset = "linenumber " + (parseInt(n.getAttribute("data-start"), 10) - 1)), e.element.appendChild(l), m(n), Prism.hooks.run("line-numbers", e);
          }
        }
      }
    }), Prism.hooks.add("line-numbers", function (e) {
      e.plugins = e.plugins || {}, e.plugins.lineNumbers = !0;
    }), Prism.plugins.lineNumbers = {
      getLine: function getLine(e, t) {
        if ("PRE" === e.tagName && e.classList.contains(l)) {
          var n = e.querySelector(".line-numbers-rows"),
              r = parseInt(e.getAttribute("data-start"), 10) || 1,
              s = r + (n.children.length - 1);
          t < r && (t = r), s < t && (t = s);
          var i = t - r;
          return n.children[i];
        }
      }
    };
  }
}();
/*
 * A javascript-based implementation of Spatial Navigation.
 *
 * Copyright (c) 2017 Luke Chang.
 * https://github.com/luke-chang/js-spatial-navigation
 *
 * Licensed under the MPL 2.0.
 */

;

(function ($) {
  'use strict';
  /************************/

  /* Global Configuration */

  /************************/
  // Note: an <extSelector> can be one of following types:
  // - a valid selector string for "querySelectorAll" or jQuery (if it exists)
  // - a NodeList or an array containing DOM elements
  // - a single DOM element
  // - a jQuery object
  // - a string "@<sectionId>" to indicate the specified section
  // - a string "@" to indicate the default section

  var GlobalConfig = {
    selector: '',
    // can be a valid <extSelector> except "@" syntax.
    straightOnly: false,
    straightOverlapThreshold: 0.5,
    rememberSource: false,
    disabled: false,
    defaultElement: '',
    // <extSelector> except "@" syntax.
    enterTo: '',
    // '', 'last-focused', 'default-element'
    leaveFor: null,
    // {left: <extSelector>, right: <extSelector>,
    //  up: <extSelector>, down: <extSelector>}
    restrict: 'self-first',
    // 'self-first', 'self-only', 'none'
    tabIndexIgnoreList: 'a, input, select, textarea, button, iframe, [contentEditable=true]',
    navigableFilter: null
  };
  /*********************/

  /* Constant Variable */

  /*********************/

  var KEYMAPPING = {
    '37': 'left',
    '38': 'up',
    '39': 'right',
    '40': 'down'
  };
  var REVERSE = {
    'left': 'right',
    'up': 'down',
    'right': 'left',
    'down': 'up'
  };
  var EVENT_PREFIX = 'sn:';
  var ID_POOL_PREFIX = 'section-';
  /********************/

  /* Private Variable */

  /********************/

  var _idPool = 0;
  var _ready = false;
  var _pause = false;
  var _sections = {};
  var _sectionCount = 0;
  var _defaultSectionId = '';
  var _lastSectionId = '';
  var _duringFocusChange = false;
  /************/

  /* Polyfill */

  /************/

  var elementMatchesSelector = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || function (selector) {
    var matchedNodes = (this.parentNode || this.document).querySelectorAll(selector);
    return [].slice.call(matchedNodes).indexOf(this) >= 0;
  };
  /*****************/

  /* Core Function */

  /*****************/


  function getRect(elem) {
    var cr = elem.getBoundingClientRect();
    var rect = {
      left: cr.left,
      top: cr.top,
      right: cr.right,
      bottom: cr.bottom,
      width: cr.width,
      height: cr.height
    };
    rect.element = elem;
    rect.center = {
      x: rect.left + Math.floor(rect.width / 2),
      y: rect.top + Math.floor(rect.height / 2)
    };
    rect.center.left = rect.center.right = rect.center.x;
    rect.center.top = rect.center.bottom = rect.center.y;
    return rect;
  }

  function partition(rects, targetRect, straightOverlapThreshold) {
    var groups = [[], [], [], [], [], [], [], [], []];

    for (var i = 0; i < rects.length; i++) {
      var rect = rects[i];
      var center = rect.center;
      var x, y, groupId;

      if (center.x < targetRect.left) {
        x = 0;
      } else if (center.x <= targetRect.right) {
        x = 1;
      } else {
        x = 2;
      }

      if (center.y < targetRect.top) {
        y = 0;
      } else if (center.y <= targetRect.bottom) {
        y = 1;
      } else {
        y = 2;
      }

      groupId = y * 3 + x;
      groups[groupId].push(rect);

      if ([0, 2, 6, 8].indexOf(groupId) !== -1) {
        var threshold = straightOverlapThreshold;

        if (rect.left <= targetRect.right - targetRect.width * threshold) {
          if (groupId === 2) {
            groups[1].push(rect);
          } else if (groupId === 8) {
            groups[7].push(rect);
          }
        }

        if (rect.right >= targetRect.left + targetRect.width * threshold) {
          if (groupId === 0) {
            groups[1].push(rect);
          } else if (groupId === 6) {
            groups[7].push(rect);
          }
        }

        if (rect.top <= targetRect.bottom - targetRect.height * threshold) {
          if (groupId === 6) {
            groups[3].push(rect);
          } else if (groupId === 8) {
            groups[5].push(rect);
          }
        }

        if (rect.bottom >= targetRect.top + targetRect.height * threshold) {
          if (groupId === 0) {
            groups[3].push(rect);
          } else if (groupId === 2) {
            groups[5].push(rect);
          }
        }
      }
    }

    return groups;
  }

  function generateDistanceFunction(targetRect) {
    return {
      nearPlumbLineIsBetter: function nearPlumbLineIsBetter(rect) {
        var d;

        if (rect.center.x < targetRect.center.x) {
          d = targetRect.center.x - rect.right;
        } else {
          d = rect.left - targetRect.center.x;
        }

        return d < 0 ? 0 : d;
      },
      nearHorizonIsBetter: function nearHorizonIsBetter(rect) {
        var d;

        if (rect.center.y < targetRect.center.y) {
          d = targetRect.center.y - rect.bottom;
        } else {
          d = rect.top - targetRect.center.y;
        }

        return d < 0 ? 0 : d;
      },
      nearTargetLeftIsBetter: function nearTargetLeftIsBetter(rect) {
        var d;

        if (rect.center.x < targetRect.center.x) {
          d = targetRect.left - rect.right;
        } else {
          d = rect.left - targetRect.left;
        }

        return d < 0 ? 0 : d;
      },
      nearTargetTopIsBetter: function nearTargetTopIsBetter(rect) {
        var d;

        if (rect.center.y < targetRect.center.y) {
          d = targetRect.top - rect.bottom;
        } else {
          d = rect.top - targetRect.top;
        }

        return d < 0 ? 0 : d;
      },
      topIsBetter: function topIsBetter(rect) {
        return rect.top;
      },
      bottomIsBetter: function bottomIsBetter(rect) {
        return -1 * rect.bottom;
      },
      leftIsBetter: function leftIsBetter(rect) {
        return rect.left;
      },
      rightIsBetter: function rightIsBetter(rect) {
        return -1 * rect.right;
      }
    };
  }

  function prioritize(priorities) {
    var destPriority = null;

    for (var i = 0; i < priorities.length; i++) {
      if (priorities[i].group.length) {
        destPriority = priorities[i];
        break;
      }
    }

    if (!destPriority) {
      return null;
    }

    var destDistance = destPriority.distance;
    destPriority.group.sort(function (a, b) {
      for (var i = 0; i < destDistance.length; i++) {
        var distance = destDistance[i];
        var delta = distance(a) - distance(b);

        if (delta) {
          return delta;
        }
      }

      return 0;
    });
    return destPriority.group;
  }

  function navigate(target, direction, candidates, config) {
    if (!target || !direction || !candidates || !candidates.length) {
      return null;
    }

    var rects = [];

    for (var i = 0; i < candidates.length; i++) {
      var rect = getRect(candidates[i]);

      if (rect) {
        rects.push(rect);
      }
    }

    if (!rects.length) {
      return null;
    }

    var targetRect = getRect(target);

    if (!targetRect) {
      return null;
    }

    var distanceFunction = generateDistanceFunction(targetRect);
    var groups = partition(rects, targetRect, config.straightOverlapThreshold);
    var internalGroups = partition(groups[4], targetRect.center, config.straightOverlapThreshold);
    var priorities;

    switch (direction) {
      case 'left':
        priorities = [{
          group: internalGroups[0].concat(internalGroups[3]).concat(internalGroups[6]),
          distance: [distanceFunction.nearPlumbLineIsBetter, distanceFunction.topIsBetter]
        }, {
          group: groups[3],
          distance: [distanceFunction.nearPlumbLineIsBetter, distanceFunction.topIsBetter]
        }, {
          group: groups[0].concat(groups[6]),
          distance: [distanceFunction.nearHorizonIsBetter, distanceFunction.rightIsBetter, distanceFunction.nearTargetTopIsBetter]
        }];
        break;

      case 'right':
        priorities = [{
          group: internalGroups[2].concat(internalGroups[5]).concat(internalGroups[8]),
          distance: [distanceFunction.nearPlumbLineIsBetter, distanceFunction.topIsBetter]
        }, {
          group: groups[5],
          distance: [distanceFunction.nearPlumbLineIsBetter, distanceFunction.topIsBetter]
        }, {
          group: groups[2].concat(groups[8]),
          distance: [distanceFunction.nearHorizonIsBetter, distanceFunction.leftIsBetter, distanceFunction.nearTargetTopIsBetter]
        }];
        break;

      case 'up':
        priorities = [{
          group: internalGroups[0].concat(internalGroups[1]).concat(internalGroups[2]),
          distance: [distanceFunction.nearHorizonIsBetter, distanceFunction.leftIsBetter]
        }, {
          group: groups[1],
          distance: [distanceFunction.nearHorizonIsBetter, distanceFunction.leftIsBetter]
        }, {
          group: groups[0].concat(groups[2]),
          distance: [distanceFunction.nearPlumbLineIsBetter, distanceFunction.bottomIsBetter, distanceFunction.nearTargetLeftIsBetter]
        }];
        break;

      case 'down':
        priorities = [{
          group: internalGroups[6].concat(internalGroups[7]).concat(internalGroups[8]),
          distance: [distanceFunction.nearHorizonIsBetter, distanceFunction.leftIsBetter]
        }, {
          group: groups[7],
          distance: [distanceFunction.nearHorizonIsBetter, distanceFunction.leftIsBetter]
        }, {
          group: groups[6].concat(groups[8]),
          distance: [distanceFunction.nearPlumbLineIsBetter, distanceFunction.topIsBetter, distanceFunction.nearTargetLeftIsBetter]
        }];
        break;

      default:
        return null;
    }

    if (config.straightOnly) {
      priorities.pop();
    }

    var destGroup = prioritize(priorities);

    if (!destGroup) {
      return null;
    }

    var dest = null;

    if (config.rememberSource && config.previous && config.previous.destination === target && config.previous.reverse === direction) {
      for (var j = 0; j < destGroup.length; j++) {
        if (destGroup[j].element === config.previous.target) {
          dest = destGroup[j].element;
          break;
        }
      }
    }

    if (!dest) {
      dest = destGroup[0].element;
    }

    return dest;
  }
  /********************/

  /* Private Function */

  /********************/


  function generateId() {
    var id;

    while (true) {
      id = ID_POOL_PREFIX + String(++_idPool);

      if (!_sections[id]) {
        break;
      }
    }

    return id;
  }

  function parseSelector(selector) {
    var result;

    if ($) {
      result = $(selector).get();
    } else if (typeof selector === 'string') {
      result = [].slice.call(document.querySelectorAll(selector));
    } else if (_typeof(selector) === 'object' && selector.length) {
      result = [].slice.call(selector);
    } else if (_typeof(selector) === 'object' && selector.nodeType === 1) {
      result = [selector];
    } else {
      result = [];
    }

    return result;
  }

  function matchSelector(elem, selector) {
    if ($) {
      return $(elem).is(selector);
    } else if (typeof selector === 'string') {
      return elementMatchesSelector.call(elem, selector);
    } else if (_typeof(selector) === 'object' && selector.length) {
      return selector.indexOf(elem) >= 0;
    } else if (_typeof(selector) === 'object' && selector.nodeType === 1) {
      return elem === selector;
    }

    return false;
  }

  function getCurrentFocusedElement() {
    var activeElement = document.activeElement;

    if (activeElement && activeElement !== document.body) {
      return activeElement;
    }
  }

  function extend(out) {
    out = out || {};

    for (var i = 1; i < arguments.length; i++) {
      if (!arguments[i]) {
        continue;
      }

      for (var key in arguments[i]) {
        if (arguments[i].hasOwnProperty(key) && arguments[i][key] !== undefined) {
          out[key] = arguments[i][key];
        }
      }
    }

    return out;
  }

  function exclude(elemList, excludedElem) {
    if (!Array.isArray(excludedElem)) {
      excludedElem = [excludedElem];
    }

    for (var i = 0, index; i < excludedElem.length; i++) {
      index = elemList.indexOf(excludedElem[i]);

      if (index >= 0) {
        elemList.splice(index, 1);
      }
    }

    return elemList;
  }

  function isNavigable(elem, sectionId, verifySectionSelector) {
    if (!elem || !sectionId || !_sections[sectionId] || _sections[sectionId].disabled) {
      return false;
    }

    if (elem.offsetWidth <= 0 && elem.offsetHeight <= 0 || elem.hasAttribute('disabled')) {
      return false;
    }

    if (verifySectionSelector && !matchSelector(elem, _sections[sectionId].selector)) {
      return false;
    }

    if (typeof _sections[sectionId].navigableFilter === 'function') {
      if (_sections[sectionId].navigableFilter(elem, sectionId) === false) {
        return false;
      }
    } else if (typeof GlobalConfig.navigableFilter === 'function') {
      if (GlobalConfig.navigableFilter(elem, sectionId) === false) {
        return false;
      }
    }

    return true;
  }

  function getSectionId(elem) {
    for (var id in _sections) {
      if (!_sections[id].disabled && matchSelector(elem, _sections[id].selector)) {
        return id;
      }
    }
  }

  function getSectionNavigableElements(sectionId) {
    return parseSelector(_sections[sectionId].selector).filter(function (elem) {
      return isNavigable(elem, sectionId);
    });
  }

  function getSectionDefaultElement(sectionId) {
    var defaultElement = _sections[sectionId].defaultElement;

    if (!defaultElement) {
      return null;
    }

    if (typeof defaultElement === 'string') {
      defaultElement = parseSelector(defaultElement)[0];
    } else if ($ && defaultElement instanceof $) {
      defaultElement = defaultElement.get(0);
    }

    if (isNavigable(defaultElement, sectionId, true)) {
      return defaultElement;
    }

    return null;
  }

  function getSectionLastFocusedElement(sectionId) {
    var lastFocusedElement = _sections[sectionId].lastFocusedElement;

    if (!isNavigable(lastFocusedElement, sectionId, true)) {
      return null;
    }

    return lastFocusedElement;
  }

  function fireEvent(elem, type, details, cancelable) {
    if (arguments.length < 4) {
      cancelable = true;
    }

    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(EVENT_PREFIX + type, true, cancelable, details);
    return elem.dispatchEvent(evt);
  }

  function focusElement(elem, sectionId, direction) {
    if (!elem) {
      return false;
    }

    var currentFocusedElement = getCurrentFocusedElement();

    var silentFocus = function silentFocus() {
      if (currentFocusedElement) {
        currentFocusedElement.blur();
      }

      elem.focus();
      focusChanged(elem, sectionId);
    };

    if (_duringFocusChange) {
      silentFocus();
      return true;
    }

    _duringFocusChange = true;

    if (_pause) {
      silentFocus();
      _duringFocusChange = false;
      return true;
    }

    if (currentFocusedElement) {
      var unfocusProperties = {
        nextElement: elem,
        nextSectionId: sectionId,
        direction: direction,
        "native": false
      };

      if (!fireEvent(currentFocusedElement, 'willunfocus', unfocusProperties)) {
        _duringFocusChange = false;
        return false;
      }

      currentFocusedElement.blur();
      fireEvent(currentFocusedElement, 'unfocused', unfocusProperties, false);
    }

    var focusProperties = {
      previousElement: currentFocusedElement,
      sectionId: sectionId,
      direction: direction,
      "native": false
    };

    if (!fireEvent(elem, 'willfocus', focusProperties)) {
      _duringFocusChange = false;
      return false;
    }

    elem.focus();
    fireEvent(elem, 'focused', focusProperties, false);
    _duringFocusChange = false;
    focusChanged(elem, sectionId);
    return true;
  }

  function focusChanged(elem, sectionId) {
    if (!sectionId) {
      sectionId = getSectionId(elem);
    }

    if (sectionId) {
      _sections[sectionId].lastFocusedElement = elem;
      _lastSectionId = sectionId;
    }
  }

  function focusExtendedSelector(selector, direction) {
    if (selector.charAt(0) == '@') {
      if (selector.length == 1) {
        return focusSection();
      } else {
        var sectionId = selector.substr(1);
        return focusSection(sectionId);
      }
    } else {
      var next = parseSelector(selector)[0];

      if (next) {
        var nextSectionId = getSectionId(next);

        if (isNavigable(next, nextSectionId)) {
          return focusElement(next, nextSectionId, direction);
        }
      }
    }

    return false;
  }

  function focusSection(sectionId) {
    var range = [];

    var addRange = function addRange(id) {
      if (id && range.indexOf(id) < 0 && _sections[id] && !_sections[id].disabled) {
        range.push(id);
      }
    };

    if (sectionId) {
      addRange(sectionId);
    } else {
      addRange(_defaultSectionId);
      addRange(_lastSectionId);
      Object.keys(_sections).map(addRange);
    }

    for (var i = 0; i < range.length; i++) {
      var id = range[i];
      var next;

      if (_sections[id].enterTo == 'last-focused') {
        next = getSectionLastFocusedElement(id) || getSectionDefaultElement(id) || getSectionNavigableElements(id)[0];
      } else {
        next = getSectionDefaultElement(id) || getSectionLastFocusedElement(id) || getSectionNavigableElements(id)[0];
      }

      if (next) {
        return focusElement(next, id);
      }
    }

    return false;
  }

  function fireNavigatefailed(elem, direction) {
    fireEvent(elem, 'navigatefailed', {
      direction: direction
    }, false);
  }

  function gotoLeaveFor(sectionId, direction) {
    if (_sections[sectionId].leaveFor && _sections[sectionId].leaveFor[direction] !== undefined) {
      var next = _sections[sectionId].leaveFor[direction];

      if (typeof next === 'string') {
        if (next === '') {
          return null;
        }

        return focusExtendedSelector(next, direction);
      }

      if ($ && next instanceof $) {
        next = next.get(0);
      }

      var nextSectionId = getSectionId(next);

      if (isNavigable(next, nextSectionId)) {
        return focusElement(next, nextSectionId, direction);
      }
    }

    return false;
  }

  function focusNext(direction, currentFocusedElement, currentSectionId) {
    var extSelector = currentFocusedElement.getAttribute('data-sn-' + direction);

    if (typeof extSelector === 'string') {
      if (extSelector === '' || !focusExtendedSelector(extSelector, direction)) {
        fireNavigatefailed(currentFocusedElement, direction);
        return false;
      }

      return true;
    }

    var sectionNavigableElements = {};
    var allNavigableElements = [];

    for (var id in _sections) {
      sectionNavigableElements[id] = getSectionNavigableElements(id);
      allNavigableElements = allNavigableElements.concat(sectionNavigableElements[id]);
    }

    var config = extend({}, GlobalConfig, _sections[currentSectionId]);
    var next;

    if (config.restrict == 'self-only' || config.restrict == 'self-first') {
      var currentSectionNavigableElements = sectionNavigableElements[currentSectionId];
      next = navigate(currentFocusedElement, direction, exclude(currentSectionNavigableElements, currentFocusedElement), config);

      if (!next && config.restrict == 'self-first') {
        next = navigate(currentFocusedElement, direction, exclude(allNavigableElements, currentSectionNavigableElements), config);
      }
    } else {
      next = navigate(currentFocusedElement, direction, exclude(allNavigableElements, currentFocusedElement), config);
    }

    if (next) {
      _sections[currentSectionId].previous = {
        target: currentFocusedElement,
        destination: next,
        reverse: REVERSE[direction]
      };
      var nextSectionId = getSectionId(next);

      if (currentSectionId != nextSectionId) {
        var result = gotoLeaveFor(currentSectionId, direction);

        if (result) {
          return true;
        } else if (result === null) {
          fireNavigatefailed(currentFocusedElement, direction);
          return false;
        }

        var enterToElement;

        switch (_sections[nextSectionId].enterTo) {
          case 'last-focused':
            enterToElement = getSectionLastFocusedElement(nextSectionId) || getSectionDefaultElement(nextSectionId);
            break;

          case 'default-element':
            enterToElement = getSectionDefaultElement(nextSectionId);
            break;
        }

        if (enterToElement) {
          next = enterToElement;
        }
      }

      return focusElement(next, nextSectionId, direction);
    } else if (gotoLeaveFor(currentSectionId, direction)) {
      return true;
    }

    fireNavigatefailed(currentFocusedElement, direction);
    return false;
  }

  function onKeyDown(evt) {
    if (!_sectionCount || _pause || evt.altKey || evt.ctrlKey || evt.metaKey || evt.shiftKey) {
      return;
    }

    var currentFocusedElement;

    var preventDefault = function preventDefault() {
      evt.preventDefault();
      evt.stopPropagation();
      return false;
    };

    var direction = KEYMAPPING[evt.keyCode];

    if (!direction) {
      if (evt.keyCode == 13) {
        currentFocusedElement = getCurrentFocusedElement();

        if (currentFocusedElement && getSectionId(currentFocusedElement)) {
          if (!fireEvent(currentFocusedElement, 'enter-down')) {
            return preventDefault();
          }
        }
      }

      return;
    }

    currentFocusedElement = getCurrentFocusedElement();

    if (!currentFocusedElement) {
      if (_lastSectionId) {
        currentFocusedElement = getSectionLastFocusedElement(_lastSectionId);
      }

      if (!currentFocusedElement) {
        focusSection();
        return preventDefault();
      }
    }

    var currentSectionId = getSectionId(currentFocusedElement);

    if (!currentSectionId) {
      return;
    }

    var willmoveProperties = {
      direction: direction,
      sectionId: currentSectionId,
      cause: 'keydown'
    };

    if (fireEvent(currentFocusedElement, 'willmove', willmoveProperties)) {
      focusNext(direction, currentFocusedElement, currentSectionId);
    }

    return preventDefault();
  }

  function onKeyUp(evt) {
    if (evt.altKey || evt.ctrlKey || evt.metaKey || evt.shiftKey) {
      return;
    }

    if (!_pause && _sectionCount && evt.keyCode == 13) {
      var currentFocusedElement = getCurrentFocusedElement();

      if (currentFocusedElement && getSectionId(currentFocusedElement)) {
        if (!fireEvent(currentFocusedElement, 'enter-up')) {
          evt.preventDefault();
          evt.stopPropagation();
        }
      }
    }
  }

  function onFocus(evt) {
    var target = evt.target;

    if (target !== window && target !== document && _sectionCount && !_duringFocusChange) {
      var sectionId = getSectionId(target);

      if (sectionId) {
        if (_pause) {
          focusChanged(target, sectionId);
          return;
        }

        var focusProperties = {
          sectionId: sectionId,
          "native": true
        };

        if (!fireEvent(target, 'willfocus', focusProperties)) {
          _duringFocusChange = true;
          target.blur();
          _duringFocusChange = false;
        } else {
          fireEvent(target, 'focused', focusProperties, false);
          focusChanged(target, sectionId);
        }
      }
    }
  }

  function onBlur(evt) {
    var target = evt.target;

    if (target !== window && target !== document && !_pause && _sectionCount && !_duringFocusChange && getSectionId(target)) {
      var unfocusProperties = {
        "native": true
      };

      if (!fireEvent(target, 'willunfocus', unfocusProperties)) {
        _duringFocusChange = true;
        setTimeout(function () {
          target.focus();
          _duringFocusChange = false;
        });
      } else {
        fireEvent(target, 'unfocused', unfocusProperties, false);
      }
    }
  }
  /*******************/

  /* Public Function */

  /*******************/


  var SpatialNavigation = {
    init: function init() {
      if (!_ready) {
        window.addEventListener('keydown', onKeyDown);
        window.addEventListener('keyup', onKeyUp);
        window.addEventListener('focus', onFocus, true);
        window.addEventListener('blur', onBlur, true);
        _ready = true;
      }
    },
    uninit: function uninit() {
      window.removeEventListener('blur', onBlur, true);
      window.removeEventListener('focus', onFocus, true);
      window.removeEventListener('keyup', onKeyUp);
      window.removeEventListener('keydown', onKeyDown);
      SpatialNavigation.clear();
      _idPool = 0;
      _ready = false;
    },
    clear: function clear() {
      _sections = {};
      _sectionCount = 0;
      _defaultSectionId = '';
      _lastSectionId = '';
      _duringFocusChange = false;
    },
    // set(<config>);
    // set(<sectionId>, <config>);
    set: function set() {
      var sectionId, config;

      if (_typeof(arguments[0]) === 'object') {
        config = arguments[0];
      } else if (typeof arguments[0] === 'string' && _typeof(arguments[1]) === 'object') {
        sectionId = arguments[0];
        config = arguments[1];

        if (!_sections[sectionId]) {
          throw new Error('Section "' + sectionId + '" doesn\'t exist!');
        }
      } else {
        return;
      }

      for (var key in config) {
        if (GlobalConfig[key] !== undefined) {
          if (sectionId) {
            _sections[sectionId][key] = config[key];
          } else if (config[key] !== undefined) {
            GlobalConfig[key] = config[key];
          }
        }
      }

      if (sectionId) {
        // remove "undefined" items
        _sections[sectionId] = extend({}, _sections[sectionId]);
      }
    },
    // add(<config>);
    // add(<sectionId>, <config>);
    add: function add() {
      var sectionId;
      var config = {};

      if (_typeof(arguments[0]) === 'object') {
        config = arguments[0];
      } else if (typeof arguments[0] === 'string' && _typeof(arguments[1]) === 'object') {
        sectionId = arguments[0];
        config = arguments[1];
      }

      if (!sectionId) {
        sectionId = typeof config.id === 'string' ? config.id : generateId();
      }

      if (_sections[sectionId]) {
        throw new Error('Section "' + sectionId + '" has already existed!');
      }

      _sections[sectionId] = {};
      _sectionCount++;
      SpatialNavigation.set(sectionId, config);
      return sectionId;
    },
    remove: function remove(sectionId) {
      if (!sectionId || typeof sectionId !== 'string') {
        throw new Error('Please assign the "sectionId"!');
      }

      if (_sections[sectionId]) {
        _sections[sectionId] = undefined;
        _sections = extend({}, _sections);
        _sectionCount--;

        if (_lastSectionId === sectionId) {
          _lastSectionId = '';
        }

        return true;
      }

      return false;
    },
    disable: function disable(sectionId) {
      if (_sections[sectionId]) {
        _sections[sectionId].disabled = true;
        return true;
      }

      return false;
    },
    enable: function enable(sectionId) {
      if (_sections[sectionId]) {
        _sections[sectionId].disabled = false;
        return true;
      }

      return false;
    },
    pause: function pause() {
      _pause = true;
    },
    resume: function resume() {
      _pause = false;
    },
    // focus([silent])
    // focus(<sectionId>, [silent])
    // focus(<extSelector>, [silent])
    // Note: "silent" is optional and default to false
    focus: function focus(elem, silent) {
      var result = false;

      if (silent === undefined && typeof elem === 'boolean') {
        silent = elem;
        elem = undefined;
      }

      var autoPause = !_pause && silent;

      if (autoPause) {
        SpatialNavigation.pause();
      }

      if (!elem) {
        result = focusSection();
      } else {
        if (typeof elem === 'string') {
          if (_sections[elem]) {
            result = focusSection(elem);
          } else {
            result = focusExtendedSelector(elem);
          }
        } else {
          if ($ && elem instanceof $) {
            elem = elem.get(0);
          }

          var nextSectionId = getSectionId(elem);

          if (isNavigable(elem, nextSectionId)) {
            result = focusElement(elem, nextSectionId);
          }
        }
      }

      if (autoPause) {
        SpatialNavigation.resume();
      }

      return result;
    },
    // move(<direction>)
    // move(<direction>, <selector>)
    move: function move(direction, selector) {
      direction = direction.toLowerCase();

      if (!REVERSE[direction]) {
        return false;
      }

      var elem = selector ? parseSelector(selector)[0] : getCurrentFocusedElement();

      if (!elem) {
        return false;
      }

      var sectionId = getSectionId(elem);

      if (!sectionId) {
        return false;
      }

      var willmoveProperties = {
        direction: direction,
        sectionId: sectionId,
        cause: 'api'
      };

      if (!fireEvent(elem, 'willmove', willmoveProperties)) {
        return false;
      }

      return focusNext(direction, elem, sectionId);
    },
    // makeFocusable()
    // makeFocusable(<sectionId>)
    makeFocusable: function makeFocusable(sectionId) {
      var doMakeFocusable = function doMakeFocusable(section) {
        var tabIndexIgnoreList = section.tabIndexIgnoreList !== undefined ? section.tabIndexIgnoreList : GlobalConfig.tabIndexIgnoreList;
        parseSelector(section.selector).forEach(function (elem) {
          if (!matchSelector(elem, tabIndexIgnoreList)) {
            if (!elem.getAttribute('tabindex')) {
              elem.setAttribute('tabindex', '-1');
            }
          }
        });
      };

      if (sectionId) {
        if (_sections[sectionId]) {
          doMakeFocusable(_sections[sectionId]);
        } else {
          throw new Error('Section "' + sectionId + '" doesn\'t exist!');
        }
      } else {
        for (var id in _sections) {
          doMakeFocusable(_sections[id]);
        }
      }
    },
    setDefaultSection: function setDefaultSection(sectionId) {
      if (!sectionId) {
        _defaultSectionId = '';
      } else if (!_sections[sectionId]) {
        throw new Error('Section "' + sectionId + '" doesn\'t exist!');
      } else {
        _defaultSectionId = sectionId;
      }
    }
  };
  window.SpatialNavigation = SpatialNavigation;
  /**********************/

  /* CommonJS Interface */

  /**********************/

  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === 'object') {
    module.exports = SpatialNavigation;
  }
  /********************/

  /* jQuery Interface */

  /********************/


  if ($) {
    $.SpatialNavigation = function () {
      SpatialNavigation.init();

      if (arguments.length > 0) {
        if ($.isPlainObject(arguments[0])) {
          return SpatialNavigation.add(arguments[0]);
        } else if ($.type(arguments[0]) === 'string' && $.isFunction(SpatialNavigation[arguments[0]])) {
          return SpatialNavigation[arguments[0]].apply(SpatialNavigation, [].slice.call(arguments, 1));
        }
      }

      return $.extend({}, SpatialNavigation);
    };

    $.fn.SpatialNavigation = function () {
      var config;

      if ($.isPlainObject(arguments[0])) {
        config = arguments[0];
      } else {
        config = {
          id: arguments[0]
        };
      }

      config.selector = this;
      SpatialNavigation.init();

      if (config.id) {
        SpatialNavigation.remove(config.id);
      }

      SpatialNavigation.add(config);
      SpatialNavigation.makeFocusable(config.id);
      return this;
    };
  }
})(window.jQuery);