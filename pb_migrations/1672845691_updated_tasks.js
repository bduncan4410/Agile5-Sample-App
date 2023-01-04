migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xu7tg109bqzq2io")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bbuwrkob",
    "name": "start_date",
    "type": "date",
    "required": true,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "p1t1q3nd",
    "name": "end_date",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xu7tg109bqzq2io")

  // remove
  collection.schema.removeField("bbuwrkob")

  // remove
  collection.schema.removeField("p1t1q3nd")

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
})
