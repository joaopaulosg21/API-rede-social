function validate(obj,...values) {
    const keys = values;
    const response = new Promise((resolve,reject) => {
        for(let key of keys) {
            if(obj.hasOwnProperty(key) == false) {
                reject({message:`Must have all fields`,missing:key});
            }
        }
        resolve({msg:"Ok",key:null});
    });
    return response;
}

module.exports = validate;