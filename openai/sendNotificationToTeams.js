import axios from "axios";

const WEB_HOOK_URL = process.env.WEB_HOOK_URL;

const ERROR_USER_MAP = {
  "CMS Error": {
    userId: "rahul.bansal@sprinklr.com",
    userName: "Rahul Bansal",
  },
  "Code Error": {
    userId: "sanskarsantosh.totla@sprinklr.com",
    userName: "Sanskar Santosh Totla",
  },
  "Environment Error": {
    userId: "devansh.aryan@sprinklr.com",
    userName: "Devansh Aryan",
  },
  "Infrastructure Error": {
    userId: "gaurav.dash@sprinklr.com",
    userName: "Gaurav Dash",
  },
  "Other Error": { userId: "general", userName: "General" },
};

const getUser = (content) => {
  for (const errorCategory in ERROR_USER_MAP) {
    if (content.includes(errorCategory)) {
      return ERROR_USER_MAP[errorCategory];
    }
  }
  return {};
};

export const sendNotificationToTeams = async (content) => {
  try {
    const { userId, userName } = getUser(content);

    const message = {
      type: "message",
      attachments: [
        {
          contentType: "application/vnd.microsoft.card.adaptive",
          content: {
            type: "AdaptiveCard",
            version: "1.0",
            body: [
              {
                type: "TextBlock",
                text: `<at>${userName}</at>`,
                wrap: true,
              },
              {
                type: "TextBlock",
                text: content,
                wrap: true,
                markdown: true,
              },
            ],
            msteams: {
              width: "Full",
              entities: [
                {
                  type: "mention",
                  text: `<at>${userName}</at>`,
                  mentioned: {
                    id: userId,
                    name: userName,
                  },
                },
              ],
            },
          },
        },
      ],
    };

    await axios.post(WEB_HOOK_URL, message);
    console.log("Notification sent to Teams:");
  } catch (error) {
    console.error("Error sending notification to Teams:", error);
  }
};
