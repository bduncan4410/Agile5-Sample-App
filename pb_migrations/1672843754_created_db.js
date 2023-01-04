migrate((db) => {
  const collection = new Collection({
    "id": "xu7tg109bqzq2io",
    "created": "2023-01-04 14:49:14.702Z",
    "updated": "2023-01-04 14:49:14.702Z",
    "name": "db",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "j1e98dje",
        "name": "field",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("xu7tg109bqzq2io");

  return dao.deleteCollection(collection);
})
