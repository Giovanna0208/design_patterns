//funções que retornam um objeto sem a  
//necessidade de chamá-las com new

function user() {
    return {
        name: 'Giovanna',
        lastname: 'Ramos'
    }
}

const u = user();
console.log(u);


//passando propriedades
function person(properties) {
    return {
        ...properties
    }
}

const newperson = person({name: 'Giovanna', lastname: 'Ramos', age: 17});
console.log(newperson);