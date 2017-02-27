
const mockDB = new Set();

const logit = () => console.log([...mockDB]);

function save({ user_id }) {
    mockDB.add(user_id);
    logit();
}

function remove({ user_id }) {
    mockDB.delete(user_id);
    logit();
}

function find({user_id}) {
    logit();
    return [...mockDB].find(ui => ui === user_id);    
}

function getAll() {
    logit();
    return [...mockDB];
}

module.exports = {
    save,
    remove,
    find,
    getAll
};
