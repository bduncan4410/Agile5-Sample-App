migrate((db) => {
  const collection = new Collection({
    "id": "l4nv146sfo3yeai",
    "created": "2023-01-05 16:41:37.302Z",
    "updated": "2023-01-05 16:41:37.302Z",
    "name": "accounts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "cs2kcwcx",
        "name": "username",
        "type": "text",
        "required": true,
        "unique": true,
        "options": {
          "min": 2,
          "max": 32,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "xgn2i6gu",
        "name": "password",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 8,
          "max": 32,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "menwyzy4",
        "name": "firstName",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "tyayhi2u",
        "name": "lastName",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/"
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("l4nv146sfo3yeai");

  return dao.deleteCollection(collection);
})
