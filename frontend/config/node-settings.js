const MFS_API_PROTOCOL = `http${window.MFS.replenishTLS ? "s" : ""}`;
export const MFS_API_HOST = `${MFS_API_PROTOCOL}://${window.MFS.replenishUrl}`;
export const { NODE_ENV } = window.env;
export const {
    ANALYTICS,
    MFS,
    BITCOIN_SETTINGS,
    DB,
    INIT_LISTEN_PORT,
    DEV_MODE,
} = window;
