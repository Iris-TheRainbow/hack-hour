import { Slack } from "../../../lib/bolt.js";
import { Commands } from "../../../lib/constants.js";
import { prisma } from "../../../lib/prisma.js";
import { t } from "../../../lib/templates.js";
import { Loading } from "../views/loading.js";

Slack.command(Commands.API, async ({ body, client }) => {
    const view = await Slack.views.open({
        trigger_id: body.trigger_id,
        view: Loading.loading()
    });

    const user = await prisma.slackUser.findUnique({
        where: {
            slackId: body.user_id
        },
        select: {
            user: true
        }
    });

    if (!user) {
        await Slack.views.update({
            view_id: view?.view?.id,
            view: Loading.error(t('error.generic', {}))
        });

        return;
    }

    await Slack.views.update({
        view_id: view?.view?.id,
        view: {
            "type": "modal",
            "title": {
                "type": "plain_text",
                "text": "your api token O:",
                "emoji": true
            },
            "submit": {
                "type": "plain_text",
                "text": "Submit",
                "emoji": true
            },
            "close": {
                "type": "plain_text",
                "text": "Cancel",
                "emoji": true
            },
            "blocks": [
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": "here is your secret key to ~paradise~ arcade. don't share this with ANYONE."
                    }
                },
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": `\`\`\`${user.user.apiKey}\`\`\``
                    }
                },
                {
                    "type": "context",
                    "elements": [
                        {
                            "type": "mrkdwn",
                            "text": t('api', {})
                        }
                    ]
                }
            ]
        }
    });
});