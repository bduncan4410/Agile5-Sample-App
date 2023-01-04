migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xu7tg109bqzq2io")

  collection.name = "tasks"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xu7tg109bqzq2io")

  collection.name = "db"

  return dao.saveCollection(collection)
})
