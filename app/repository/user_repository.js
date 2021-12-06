class ProdutoDAO {

    constructor(db) {
        this.collection = (async () => {
            return db.then(dbo => dbo.collection('produto'));
        })();
    }

    async searchAll() {
        return this.collection.then(dbo => dbo.find({},{projection: {_id: 0}}).toArray());
    }
}

module.exports = ProdutoDAO;