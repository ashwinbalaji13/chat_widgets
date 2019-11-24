const dialogflow = require("dialogflow");

let projectId = "trutimecalculator";

// let privateKey = (process.env.NODE_ENV == "production") ? JSON.parse(process.env.DIALOGFLOW_PRIVATE_KEY) : process.env.DIALOGFLOW_PRIVATE_KEY
// let clientEmail = process.env.DIALOGFLOW_CLIENT_EMAIL
let config = {
  credentials: {
    private_key:
      "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDYHICV4NKZy7Ol\nTLXkenwjPVKWUGpt7W2H53tkAKv+3YggwEMu5vk7k4wyhz6B6ckKlCzAu2TB9eeA\nNKszn5whoHLDgswP2tnh8Q0AeC9S4oikog1+egfnuvU7xtDOLc6T2RqnQ3dz5owh\nKv+G/zoI/Dp+/sCyHZyeeUP8ULrGUBsaDUxUhz9XOloOzIm8f0W6dKY06oeseW7F\nQWnbzKEyx2fSypiZy2XwaKTescQUGqV2jqsfDib1lhvF43m3avpiBHB+wMvJY23J\nf5ZYYBUPVikSCdHljk3dvkyV4s17VX4vez1wDfBJ8VJ1yWrWOmznUxlnffcTu2U7\n7834m+6zAgMBAAECggEAEgfZJjTlrVI+PbTkQIwdmyN5jM2bZTeLGdMs5Tkouhdw\nM526HTz4UpZ3x7SnLCSkX7JHXf8xVv0Pk9x3fW08LawOCmGsnK5up+sglODyJdd9\nShGBNoOzV1iuyQ5IWDA6ZsIVQ+fqAyzOYgTZ4MDSB6Z8fofK7csKfBUnBtnfc3GO\nv6CTBcIP0WRcX8tylExpwOBlksutwi6v2ZiRpaLurp7oE+TRAf3NQ7lt2dZ5oRN/\nEoD5+XEzTIL4cp7z+qvxO660enjumV3a+apu0LGPLRWusXZ4OAityF/mUb3o7za7\nClaNZ96DdUWBQ9M5EpgBVhMnwjA9TPgL4LSRCsNBHQKBgQD/1oY5nyipf8c2qm/A\n5Eyd3gsZHqOCklYi0p9KmDq2rkrlLJxcT3urILOMRoQIg7Z34I7N2AmQrWXvMLca\nBvFEQpbZ7wNMtDR997tZ1/Y8wCAIIvnhNsJpe326uhM1E0haC37AV1CgebNb/OCi\nsxJr9HQG3RSP4KsOeNJjpoGZbQKBgQDYP4mghocxOvkoi09VskoEDCkNJCbsVQds\nigGzU+3tkoJUef0bywUySDgTxg9MIOCYtQYhNeIp/C3wKKz2G3qEN7FDACH5skHv\nEb5yHMs3GefVsuDpYQCqVxPSGyLz1TmOOBv7RtdKSh9KRsDEFQEGlizoLoaCxUbE\npd6vdhG0nwKBgFcNjAa3XYKvc/3p6LTd+iQNlgEqJ8EaQiz/NiyPuArJK7rnfxz5\n/r6wFeg5ZlvvVXtc8bqhNEACgJjvHp7AlgAAGIx3g8vp1aK3VQyxK5xoU33xSM2V\ncHmsB5AuGLMKqKfbGXohO9IfFyTJ2zYBcNdDCuf6+jAq5om6GvzFf3vRAoGBAKMT\nFyh1CtJ3VJncpJFNiD+RJAwC7U9ft9+EG1AuxMhZqesmq1cgPOT0TUWsILEaQgUm\nzl6REeLzh3kKU5SsmDHJBeYu3XA9mzc8PFA1opIE+S3QXYfhXO0YCZxyVmNmsqar\nbX6Kp6QgTYRn4sp7xHBBI9Bb9Zf8SSfWph3Pff6lAoGAOi0iigfh/Y/CSUbxlVc4\nUk5zk7/P1//LppuYDStuKrCuP17csllsi8CMmaZD9CR7/19mgov5ZiWP2Cw+N3Mc\n+MNyIXPdRlAYGTiEuK7j7YMtYmW2OceKpY28aF006bWsd/zXn3am1G6j3lgzM3TS\nmNaw2pcg4GStvzkn9WIlQ2k=\n-----END PRIVATE KEY-----\n",
    client_email: "dialogflow-qlvrqo@trutimecalculator.iam.gserviceaccount.com"
    // client_email: process.env.client_email
  }
};

let sessionClient = new dialogflow.SessionsClient(config);

async function sendTextMessageToDialogFlow(textMessage, sessionId) {
  // Define session path
  console.log("in", config, sessionId);

  const sessionPath = sessionClient.sessionPath(projectId, sessionId);
  console.log("TCL: sendTextMessageToDialogFlow -> sessionPath", sessionPath);
  // The text query request.
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: textMessage,
        languageCode: "en"
      }
    }
  };
  console.log("TCL: sendTextMessageToDialogFlow -> request", request);
  try {
    return await sessionClient.detectIntent(request);

    // let responses = await this.sessionClient.detectIntent(request)
    // console.log('DialogFlow.sendTextMessageToDialogFlow: Detected intent', responses);
    // return responses
  } catch (err) {
    console.error("DialogFlow.sendTextMessageToDialogFlow ERROR:", err);
    throw err;
  }
}

module.exports = {
  sendTextMessageToDialogFlow
};
