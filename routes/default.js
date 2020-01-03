const dialogflow = require('dialogflow');
const uuid = require('uuid');
const express = require("express");
const router = express.Router();

const projectId = 'quetzi';
const sessionId = uuid.v4();
const queries = [
    'Hola',
    'Qué haces', // Tell the bot when the meeting is taking place
    'No te entiendo' // Rooms are defined on the Dialogflow agent, default options are A, B, or C
]
const languageCode = 'es';

const sessionClient = new dialogflow.SessionsClient();

async function detectIntent(
    projectId,
    sessionId,
    query,
    contexts,
    languageCode
) {
    // The path to identify the agent that owns the created intent.
    const sessionPath = sessionClient.sessionPath(projectId, sessionId);

    // The text query request.
    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                text: query,
                languageCode: languageCode,
            },
        },
    };

    if (contexts && contexts.length > 0) {
        request.queryParams = {
            contexts: contexts,
        };
    }

    const responses = await sessionClient.detectIntent(request);
    return responses[0];
}

async function executeQueries(projectId, sessionId, queries, languageCode) {
    // Keeping the context across queries let's us simulate an ongoing conversation with the bot
    let context;
    let intentResponse;
    for (const query of queries) {
        try {
            console.log(`Sending Query: ${query}`);
            intentResponse = await detectIntent(
                projectId,
                sessionId,
                query,
                context,
                languageCode
            );
            console.log('Detected intent');
            console.log(
                `Fulfillment Text: ${intentResponse.queryResult.fulfillmentText}`
            );
            // Use the context from this response for next queries
            context = intentResponse.queryResult.outputContexts;
        } catch (error) {
            console.log(error);
        }
    }
}

router.route("/")
    .get(function (req, res) {
        // executeQueries(projectId, sessionId, queries, languageCode);
        res.render('index', {
            projectId: projectId
        })
    })

module.exports = router;