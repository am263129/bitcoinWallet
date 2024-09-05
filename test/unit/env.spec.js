const fs = require("fs");
const ini = require("ini");
const path = require("path");
const merge = require("lodash/merge");

const loadIni = filePath => ini.parse(fs.readFileSync(filePath, "utf-8"));
const loadJson = filePath => JSON.parse(fs.readFileSync(filePath).toString());

describe("Settings tests", () => {
    describe("Mainnet", () => {
        const settingsFileExists = fs.existsSync(path.join(__dirname, "../../settings.ini"));
        const MFSSettingsFileExists = fs.existsSync(path.join(__dirname, "../../settings.MFS.json"));

        it("settings.ini file exists", () => {
            expect(settingsFileExists).to.deep.equal(true);
        });

        it("settings.MFS.json file exists", () => {
            expect(MFSSettingsFileExists).to.deep.equal(true);
        });

        let settings = {};

        settings = merge(settings, loadIni(path.join(__dirname, "../../settings.ini")));
        settings = merge(settings, loadJson(path.join(__dirname, "../../settings.MFS.json")));

        it("devMode set to false", () => {
            expect(settings.backend.devMode).to.deep.equal(false);
        });

        it("correct database file name", () => {
            expect(settings.backend.dbFile).to.deep.equal("db.db");
        });

        it("correct lnd.init_listen port", () => {
            expect(settings.lnd.init_listen).to.deep.equal("9735");
        });

        it("correct lnd.rpc_listen port", () => {
            expect(settings.lnd.rpclisten).to.deep.equal("10009");
        });

        it("correct lnd.rest_listen port", () => {
            expect(settings.lnd.restlisten).to.deep.equal("10014");
        });

        it("lnd.maxpendingchannels is natural", () => {
            expect(parseInt(settings.lnd.maxpendingchannels, 10)).to.be.at.least(0);
        });

        it("lnd.no_macaroons set to true", () => {
            expect(settings.lnd.no_macaroons).to.deep.equal(false);
        });

        it("lnd.address_look_ahead in [100..1000]", () => {
            expect(parseInt(settings.lnd.address_look_ahead, 10)).to.be.at.least(100);
            expect(parseInt(settings.lnd.address_look_ahead, 10)).to.be.at.most(1000);
        });

        it("lnd.log_level set to info", () => {
            expect(settings.lnd.log_level).to.deep.equal("info");
        });

        it("bitcoin.active set to true", () => {
            expect(settings.bitcoin.active).to.deep.equal(true);
        });

        it("bitcoin.node is neutrino", () => {
            expect(settings.bitcoin.node).to.deep.equal("neutrino");
        });

        it("bitcoin.network is mainnet", () => {
            expect(settings.bitcoin.network).to.deep.equal("mainnet");
        });

        it("correct neutrino.connect url", () => {
            expect(settings.neutrino.connect).to.deep.equal("btcd-mainnet.lightning.computer");
        });

        it("autopilot active mode set to false", () => {
            expect(settings.autopilot.active).to.deep.equal(false);
        });

        it("wallet logger level set to info", () => {
            expect(settings.logger.level).to.deep.equal("INFO");
        });

        it("correct legal version", () => {
            expect(settings.version.legal).to.deep.equal("03/25/2019");
        });

        it("correct analytics trackingID", () => {
            expect(settings.analytics.trackingID).to.deep.equal("UA-117106160-4");
        });

        it("correct analytics appUrl", () => {
            expect(settings.analytics.appUrl).to.deep.equal("https://MFS-wallet.local.com");
        });

        it("correct MFS pubKey", () => {
            expect(settings.MFS.pubKey)
                .to.deep.equal("02a0bc43557fae6af7be8e3a29fdebda819e439bea9c0f8eb8ed6a0201f3471ca9");
        });

        it("correct MFS host", () => {
            expect(settings.MFS.host).to.deep.equal("hub.lightningMFS.com");
        });

        it("correct MFS peerPort", () => {
            expect(settings.MFS.peerPort).to.deep.equal("29735");
        });

        it("correct MFS replenishUrl", () => {
            expect(settings.MFS.replenishUrl).to.deep.equal("proxy.lightningMFS.com:7000");
        });

        it("correct MFS replenishTLS", () => {
            expect(settings.MFS.replenishTLS).to.deep.equal(true);
        });
    });

    describe("Testnet", () => {
        const settingsFileExists = fs.existsSync(path.join(__dirname, "../../settings.testnet.ini"));
        const MFSSettingsFileExists = fs.existsSync(path.join(__dirname, "../../settings.testnet.MFS.json"));

        it("settings.ini file exists", () => {
            expect(settingsFileExists).to.deep.equal(true);
        });

        it("settings.MFS.json file exists", () => {
            expect(MFSSettingsFileExists).to.deep.equal(true);
        });

        let settings = {};

        settings = merge(settings, loadIni(path.join(__dirname, "../../settings.testnet.ini")));
        settings = merge(settings, loadJson(path.join(__dirname, "../../settings.testnet.MFS.json")));

        it("devMode set to false", () => {
            expect(settings.backend.devMode).to.deep.equal(false);
        });

        it("correct database file name", () => {
            expect(settings.backend.dbFile).to.deep.equal("db.db");
        });

        it("correct lnd.init_listen port", () => {
            expect(settings.lnd.init_listen).to.deep.equal("9735");
        });

        it("correct lnd.rpc_listen port", () => {
            expect(settings.lnd.rpclisten).to.deep.equal("10009");
        });

        it("correct lnd.rest_listen port", () => {
            expect(settings.lnd.restlisten).to.deep.equal("10014");
        });

        it("lnd.maxpendingchannels is natural", () => {
            expect(parseInt(settings.lnd.maxpendingchannels, 10)).to.be.at.least(0);
        });

        it("lnd.no_macaroons set to true", () => {
            expect(settings.lnd.no_macaroons).to.deep.equal(false);
        });

        it("lnd.address_look_ahead in [100..1000]", () => {
            expect(parseInt(settings.lnd.address_look_ahead, 10)).to.be.at.least(100);
            expect(parseInt(settings.lnd.address_look_ahead, 10)).to.be.at.most(1000);
        });

        it("lnd.log_level set to info", () => {
            expect(settings.lnd.log_level).to.deep.equal("info");
        });

        it("bitcoin.active set to true", () => {
            expect(settings.bitcoin.active).to.deep.equal(true);
        });

        it("bitcoin.node is neutrino", () => {
            expect(settings.bitcoin.node).to.deep.equal("neutrino");
        });

        it("bitcoin.network is testnet", () => {
            expect(settings.bitcoin.network).to.deep.equal("testnet");
        });

        it("correct neutrino.connect url", () => {
            expect(settings.neutrino.connect).to.deep.equal("btcd-testnet.lightning.computer");
        });

        it("autopilot active mode set to false", () => {
            expect(settings.autopilot.active).to.deep.equal(false);
        });

        it("wallet logger level set to debug", () => {
            expect(settings.logger.level).to.deep.equal("DEBUG");
        });

        it("correct legal version", () => {
            expect(settings.version.legal).to.deep.equal("03/25/2019");
        });

        it("correct analytics trackingID", () => {
            expect(settings.analytics.trackingID).to.deep.equal("UA-117106160-2");
        });

        it("correct analytics appUrl", () => {
            expect(settings.analytics.appUrl).to.deep.equal("https://MFS-wallet.local.com");
        });

        it("correct MFS pubKey", () => {
            expect(settings.MFS.pubKey)
                .to.deep.equal("0389a4d10d30e6176ea7cd0a7060344108061fc9ca88b02fa52dacea4b0114b316");
        });

        it("correct MFS host", () => {
            expect(settings.MFS.host).to.deep.equal("testnetwallet.lightningMFS.com");
        });

        it("correct MFS peerPort", () => {
            expect(settings.MFS.peerPort).to.deep.equal("9735");
        });

        it("correct MFS replenishUrl", () => {
            expect(settings.MFS.replenishUrl).to.deep.equal("testnetwallet.lightningMFS.com");
        });

        it("correct MFS replenishTLS", () => {
            expect(settings.MFS.replenishTLS).to.deep.equal(true);
        });
    });
});
