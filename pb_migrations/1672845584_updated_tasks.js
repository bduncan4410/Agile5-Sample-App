migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xu7tg109bqzq2io")

  // remove
  collection.schema.removeField("j1e98dje")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gm5ngl0n",
    "name": "name",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "utfpxxn5",
    "name": "description",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "liugw0k4",
    "name": "completed",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xu7tg109bqzq2io")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // remove
  collection.schema.removeField("gm5ngl0n")

  // remove
  collection.schema.removeField("utfpxxn5")

  // remove
  collection.schema.removeField("liugw0k4")

  return dao.saveCollection(collection)
})
