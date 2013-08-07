// Generated by CoffeeScript 1.6.3
var CONFIG, colors, exec, fs, mustache, path, project_dir, tpl;

require("js-yaml");

fs = require("fs");

path = require("path");

colors = require("colors");

mustache = require("mustache");

exec = require('child_process').exec;

console.log("\n\n Zonda Tool".bold + ":  Deploy...");

project_dir = path.resolve('./', '../');

CONFIG = require("" + project_dir + "/etc/zonda.yml");

tpl = readFileSync("" + project_dir + "/tool/deploy/fragment.html");

console.log(tpl);
