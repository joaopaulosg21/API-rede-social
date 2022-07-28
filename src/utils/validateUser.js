function validateUser(user) {
    const keys = ["name","email","password","birthday"];
    const response = new Promise((resolve,reject) => {
        for(let key of keys) {
            if(user.hasOwnProperty(key) == false) {
                reject({message:`User must have all fields`,missing:key});
            }
        }
        resolve({msg:"Ok",key:null});
    });
    return response;
}

module.exports = validateUser;