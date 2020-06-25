//a instância mantém uma coleção de objetos e
//notifica todos eles quando ocorrem mudanças
//no estado.

class observable {
    constructor() {
        this.observables = [];
    }

    subscribe(fn) {
        this.observables.push(fn);
    }

    notify(data) {
        this.observables.forEach(fn => fn(data));
    }
    
    unsubscribe(fn) {
        this.observables = this.observables.filter(obs => obs !== fn);
    }
}

const o = new observable();

const logdata1 = data => console.log(`Subscribe 1: ${data}`);
const logdata2 = data => console.log(`Subscribe 2: ${data}`);
const logdata3 = data => console.log(`Subscribe 3: ${data}`);

o.subscribe(logdata1);
o.subscribe(logdata2);
o.subscribe(logdata3);

o.notify('notified 1');

o.unsubscribe(logdata1);
o.unsubscribe(logdata2);

o.notify('notified 2');