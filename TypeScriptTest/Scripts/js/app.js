"use strict";

window.onload = function (e) {
    const setings = {
        a: 20, b: 10, c: 5
    };
    setings.a = -5;
    setings.d = 1;
    for (let i = 0; i < 5; i++) {
    }
    console.log(typeof i);
    console.log(setings);
    console.log(typeof setings);
    let str = some('test', 'lastname', 7, 3, 4);
    document.querySelector('.res').innerHTML = str;

    let nz = (x, y) => x + y;
    //let nz = function (x, y) {
    //    return x + y;
    //}

    //let t1 = new MyTimer(100);
    //let t1 = new MyTimer2(10);
    let t1 = new ConsolTime(10);
    t1.run();

    let items = document.querySelectorAll('.items .item');
    for (let item of items) {
        //this.console.log(item);

        //item.onclick = (e)=> {this.classList.toggle('item-active');} - потеряет контекст
        item.onclick = function () { this.classList.toggle('item-active'); }
    }

}
class MyTimer2 {
    constructor(t) {
        this.time = t;
    }
    tick() {
        this.time--;
    }
    run() {
        setInterval(() => { this.tick(); }, 1000);
    }
}

class ConsolTime extends MyTimer2 {
    tick() {
        super.tick();
        console.log(this.time);
    }
}

function MyTimer(t) {
    this.time = t;

    this.tick = function () {
        this.time--;
        console.log(this.time);
    }

    this.run = function () {
        setInterval(() => { this.tick(); }, 1000);
    }
}

function some(name, lastname, ...marks) {
    console.log(name);
    console.log(lastname);
    console.log(marks);
    for (let i in marks) {
        console.log(i);
    }
    let sum = 0;
    for (let i of marks) {
        console.log(i);
        sum += i;
    }
    let avg = (sum / marks.length).toFixed(2);
    let res = `<div>${name} ${lastname} <strong>${avg}</strong></div>`;
    return res;
}

