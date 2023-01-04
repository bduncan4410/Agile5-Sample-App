migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xu7tg109bqzq2io")

  // update
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

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "liugw0k4",
    "name": "completed",
    "type": "bool",
    "required": true,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
