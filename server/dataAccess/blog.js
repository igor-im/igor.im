const collection = (db) => { return db.collection('posts') };

const getAllPosts = (db) => {
    return collection(db).find().toArray();
};

const getPostById = (db, id) => {
    console.log(id);
    if(typeof(id) !== 'number')
        return Promise.reject(new TypeError());
    return collection(db).find({id: id}).toArray();
};

module.exports = { getAllPosts, getPostById };