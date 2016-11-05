const collection = (db) => { return db.collection('projects') };

const getAllProjects = (db) => {
    return collection(db).find().toArray();
};

const getProjectById = (db, id) => {
    console.log(id);
    if(typeof(id) !== 'number')
        return Promise.reject(new TypeError());
    return collection(db).find({id: id}).toArray();
};

module.exports = { getAllProjects, getProjectById };