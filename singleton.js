//cria única instância de uma função construtora
//e retorna quando for necessário utilizá-la

function person() {
    if (!person.instance) {
        person.instance = this;
    }

    return person.instance
}

const p = person.call({name: 'Giovanna'});
const p2 = person.call({name: 'other name'});

console.log(p);
console.log(p2);