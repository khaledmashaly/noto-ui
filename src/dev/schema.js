module.exports = {
  "type": "object",
  "properties": {
    "notes": {
      "type": "array",
      "minItems": 10,
      "maxItems": 25,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "autoIncrement": true
          },
          "title": {
            "type": "string"
          },
          "body": {
            "type": "string",
            "faker": {
              "lorem.paragraph": [10]
            }
          }
        },
        "required": [
          "id",
          "title"
        ]
      }
    }
  },
  "required": [
    "notes"
  ]
};