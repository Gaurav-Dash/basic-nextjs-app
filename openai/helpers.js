import { openai } from "./openai.js";

export const functions = {
  cmsErrorHandler: async ({ slug }) => {
    console.log(slug, "slug");
    return `Data related to this page path is here and now identify which field is missing from these data and suggest fix for it 
    {
      contentType: 'page',
      id: '6tAwLPsUACzavQsnjSuMm3',
      name: 'Page A',
      slug: ${slug}
    }
    `;
  },
};

export const getCompletion = async (messages, retries=2) => {
  retries--;
  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages,
    functions: [
      {
        name: "cmsErrorHandler",
        description:
          "Handles cases of CMS errors by identifying the page and missing fields.",
        parameters: {
          type: "object",
          properties: {
            slug: {
              type: "string",
              description: "The page path of where the error happened.",
            },
            fields: {
              type: "object",
              description: "The fields missing or broken in CMS.",
            },
          },
          required: ["slug"],
        },
      },
    ],
    temperature: 0,
  });
  if(retries<=0)return response;
  messages.push({
    role:"assistant",
    content:`Recheck the solution provided with ${response.data}, if it works with the given data and verify there are not any other problems. Finaly give best possible option of the error occurance and its solution and any other likely solution.
     `
  })
  
  return getCompletion(messages,retries)

  // return response;
};
