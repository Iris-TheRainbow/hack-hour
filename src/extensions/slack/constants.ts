import { assertEnv, Environment as GlobalEnv } from "../../lib/constants.js";

export const Environment = {
    ...GlobalEnv,

    // Server/Slack App
    SLACK_APP_TOKEN: assertEnv('SLACK_APP_TOKEN'),
    SLACK_BOT_TOKEN: assertEnv('SLACK_BOT_TOKEN'),
    SLACK_SIGNING_SECRET: assertEnv('SLACK_SIGNING_SECRET'),

    CLIENT_ID: assertEnv('CLIENT_ID'),
    CLIENT_SECRET: assertEnv('CLIENT_SECRET'),

    PORT: assertEnv('PORT'),

    // Slack Config
    MAIN_CHANNEL: assertEnv('MAIN_CHANNEL'),
    DEV_CHANNEL: assertEnv('DEV_CHANNEL'),
    INTERNAL_CHANNEL: assertEnv('INTERNAL_CHANNEL'),

    SHIP_CHANNEL: assertEnv('SHIP_CHANNEL'),

    PING_USERGROUP: assertEnv('PING_USERGROUP'),
    DEV_USERGROUP: assertEnv('DEV_USERGROUP'),

    SCRAPBOOK_CHANNEL: assertEnv('SCRAPBOOK_CHANNEL'),
};

// Commands
export const Commands = Environment.PROD ? {
    PAUSE: '/pause',
    START: '/start',
    EXTEND: '/extend',
    CANCEL: '/cancel',
    HACK: '/hack',
    STATS: '/mystats',
    SESSIONS: '/sessions',
    /*
    GOALS: '/goals',
    STATS: '/mystats',
    REMINDERS: '/reminders',
    EVENTS: '/picnics',
    INSTRUCTIONS: '/instructions'  
    */
} : {
    PAUSE: '/testpause',
    START: '/teststart',
    EXTEND: '/testextend',
    CANCEL: '/testcancel',
    HACK: '/testhack',
    STATS: '/teststats',
    SESSIONS: '/testsessions',
    /*
    GOALS: '/testgoals',
    STATS: '/testmystats',
    REMINDERS: '/testreminders',
    EVENTS: '/testpicnics',
    INSTRUCTIONS: '/testinstructions'
    */
};

export const Actions = {
    PAUSE: 'pause',
    RESUME: 'resume',
    EXTEND: 'extend',
    CANCEL: 'cancel',

    OPEN_GOAL: 'opengoal',
    SELECT_GOAL: 'selectgoal',
    CREATE_GOAL: 'creategoal',
    DELETE_GOAL: 'deletegoal',

    VIEW_STATS: 'viewstats',
};

export const Callbacks = {
//  EXTEND_HOUR: 'extendhour',

    MAIN_GOAL: 'maingoal',
    CREATE_GOAL: 'callback_creategoal',
    DELETE_GOAL: 'callback_deletegoal',

    STATS: 'stats',

    CANCEL: 'cancel',
};

//PUBLIC_DEV_CHANNEL: 'C0P5NE354',
