// Generated by CoffeeScript 1.6.3
var CONFIG, colors, fs, path, project_dir;

require("js-yaml");

fs = require("fs");

path = require("path");

colors = require("colors");

project_dir = path.resolve('./', '../');

CONFIG = require("" + project_dir + "/etc/zonda.yml");
