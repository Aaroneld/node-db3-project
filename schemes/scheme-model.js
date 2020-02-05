const db = require('../data/dbConfig.js');

module.exports = {

    find,
    findById,
    findSteps,
    add,
    update,
    remove
}

function find(){

    return db('schemes');
}

function findById(id){
    
    return db('schemes').where({ id: id });
}

function findSteps(id){

    let schemaSteps = db('steps as st')
                        .join('schemes as sc', 'st.scheme_id', '=', 'sc.id')
                        .select('st.id','st.instructions', 'sc.scheme_name', 'st.step_number')
                        .where({scheme_id: id});

    return schemaSteps;
}

function add(scheme){

    return  db('schemes').insert(scheme);
    
}

function update(changes, id){
    
    return db('schemes').where({id}).update(changes)
}

function remove(id){
 
    return db('schemes').where({ id: id}).del();
}