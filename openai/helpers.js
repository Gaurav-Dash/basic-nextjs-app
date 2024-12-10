import { openai } from "./openai.js";
import { fetchPageData } from "./lib/contentful/utils.js";

export const functions = {
  cmsErrorHandler: async ({ slug }) => {
    console.log(slug, "slug");
    const pageData = await fetchPageData({ slug });

    console.log(JSON.stringify(pageData, null, 2));

    const schema = {};

    return `
          Analyze the error logs provided above and
          compare them with the provided pageData. 
          Identify missing or broken fields, and construct the respective CMS links.
          Here is the page data from the cms for this slug: ${slug},
          pageData: ${JSON.stringify(pageData, null, 2)}
          Contentful Model Schema: ${JSON.stringify(schema, null, 2)}
          validate pageData with contentful model schema, if you find issues with pageData 
    `;
  },
};

export const getCompletion = async (messages) => {
  const response = await openai.chat.completions.create({
    model: "gpt-4-turbo",
    messages,
    functions: [
      {
        name: "cmsErrorHandler",
        description:
          "Handle cases of CMS errors by identifying the page and missing fields.",
        parameters: {
          type: "object",
          properties: {
            slug: {
              type: "string",
              description: "The page path of where the error happened.",
            },
            fields: {
              type: "array",
              description: "list of missing or broken fields in the CMS.",
              items: {
                type: "string",
              },
            },
          },
          required: ["slug"],
        },
      },
    ],
    temperature: 0,
  });

  return response;
};
