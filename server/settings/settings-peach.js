const fs = require("fs");
const { join } = require("path");
const merge = require("lodash/merge");
const baseLogger = require("../utils/logger");

const logger = baseLogger.child("electron");
const MFS = "settings.MFS.json";
const MFS_LOCAL = "settings.MFS.local.json";

/**
 * @param {string} filePath
 * @returns {object}
 */
const loadJson = filePath => JSON.parse(fs.readFileSync(filePath).toString());

module.exports = (appPath) => {
    const MFSFile = join(appPath, MFS);
    const MFSLocalFile = join(appPath, MFS_LOCAL);
    let content;
    let settings = { analytics: {}, MFS: {} };
    if (fs.existsSync(MFSFile)) {
        content = loadJson(MFSFile);
        logger.info("[SETTINGS] - settings-MFS", { MFSFile, content });
        settings = merge(settings, content);
    }
    if (fs.existsSync(MFSLocalFile)) {
        content = loadJson(MFSLocalFile);
        logger.info("[SETTINGS] - settings-MFS", { MFSLocalFile, content });
        settings = merge(settings, content);
    }
    return settings;
};
