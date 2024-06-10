import { app } from "../bolt.js";
import { emitter } from "../../../lib/emitter.js";
import { AllMiddlewareArgs, Middleware, SlackAction, SlackActionMiddlewareArgs, SlackCommandMiddlewareArgs } from "@slack/bolt";
import { StringIndexed } from "@slack/bolt/dist/types/helpers.js";
import { Environment } from "../constants.js";

export class BoltWrapper {
    public static async command(command: string, commandHandler: (payload: SlackCommandMiddlewareArgs & AllMiddlewareArgs<StringIndexed>) => void) {
        app.command(command, async (payload) => {
            const { command: event, ack, respond } = payload;
    
            await ack();
    
            try {
                await app.client.chat.postMessage({
                    channel: Environment.INTERNAL_CHANNEL,
                    blocks: [
                        {
                        type: "context",
                        elements: [
                            {
                            type: "mrkdwn",
                            text: `${command} ${event.text}`,
                            },
                        ],
                        },
                    ]
                })
                commandHandler(payload);
            } catch(error) {
                emitter.emit('error', error)
            }
        })
    }

    public static async action(actionId: string | RegExp, ...listeners: Middleware<SlackActionMiddlewareArgs<SlackAction>, StringIndexed>[]) {
        app.action(actionId, async (payload) => {
            const { action, ack, respond } = payload;
    
            await ack();
    
            try {
                await app.client.chat.postMessage({
                    channel: Environment.INTERNAL_CHANNEL,
                    blocks: [
                        {
                        type: "context",
                        elements: [
                            {
                            type: "mrkdwn",
                            text: `${actionId} ${action.type}`,
                            },
                        ],
                        },
                    ]
                })

                listeners.forEach((listener) => listener(payload));
            } catch(error) {
                emitter.emit('error', error)
            }
        })
    }

}