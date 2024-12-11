export const DATA = `
{
  "contentType": "page",
  "id": "tx7ditrXycsUoV77cd5MA",
  "name": "Page 2",
  "slug": "/page/2/",
  "content": { "contentType": "widgetRenderer", "id": "3ZJCMyvTzFrJxRGTFCa2M4" }
}

`;

export const SCHEMA = `
[
  {
    "name": "Page",
    "description": "main page model",
    "displayField": "name",
    "fields": [
      {
        "id": "name",
        "name": "Name ",
        "type": "Symbol",
        "localized": false,
        "required": false,
        "validations": [],
        "disabled": false,
        "omitted": false
      },
      {
        "id": "slug",
        "name": "Slug",
        "type": "Symbol",
        "localized": false,
        "required": true,
        "validations": [
          {
            "unique": true
          }
        ],
        "disabled": false,
        "omitted": false
      },
      {
        "id": "content",
        "name": "Content",
        "type": "Link",
        "localized": false,
        "required": false,
        "validations": [
          {
            "linkContentType": ["widgetRenderer"]
          }
        ],
        "disabled": false,
        "omitted": false,
        "linkType": "Entry"
      }
    ],
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "mogwu7jad5q5"
        }
      },
      "id": "page",
      "type": "ContentType",
      "createdAt": "2024-12-09T14:52:46.150Z",
      "updatedAt": "2024-12-10T11:16:44.074Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 31,
      "publishedAt": "2024-12-10T11:16:44.074Z",
      "firstPublishedAt": "2024-12-09T14:52:47.204Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "2Y4JotVeBV4iRV9qpny5gx"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "2Y4JotVeBV4iRV9qpny5gx"
        }
      },
      "publishedCounter": 16,
      "version": 32,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "2Y4JotVeBV4iRV9qpny5gx"
        }
      },
      "urn": "crn:contentful:::content:spaces/mogwu7jad5q5/environments/master/content_types/page"
    }
  },
  {
    "name": "Widget Renderer",
    "description": "",
    "displayField": "name",
    "fields": [
      {
        "id": "name",
        "name": "Name",
        "type": "Symbol",
        "localized": false,
        "required": false,
        "validations": [],
        "disabled": false,
        "omitted": false
      },
      {
        "id": "widgets",
        "name": "Widgets",
        "type": "Array",
        "localized": false,
        "required": true,
        "validations": [],
        "disabled": false,
        "omitted": false,
        "items": {
          "type": "Link",
          "validations": [],
          "linkType": "Entry"
        }
      }
    ],
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "mogwu7jad5q5"
        }
      },
      "id": "widgetRenderer",
      "type": "ContentType",
      "createdAt": "2024-12-10T11:15:52.517Z",
      "updatedAt": "2024-12-10T11:15:53.290Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "publishedVersion": 1,
      "publishedAt": "2024-12-10T11:15:53.290Z",
      "firstPublishedAt": "2024-12-10T11:15:53.290Z",
      "createdBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "2Y4JotVeBV4iRV9qpny5gx"
        }
      },
      "updatedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "2Y4JotVeBV4iRV9qpny5gx"
        }
      },
      "publishedCounter": 1,
      "version": 2,
      "publishedBy": {
        "sys": {
          "type": "Link",
          "linkType": "User",
          "id": "2Y4JotVeBV4iRV9qpny5gx"
        }
      },
      "urn": "crn:contentful:::content:spaces/mogwu7jad5q5/environments/master/content_types/widgetRenderer"
    }
  }
]
`;