'use strict';
const name = 'Extérieur'

const obj = {
    name: 'Intérieur',
    runGreet() {
        console.log(this, this.name)
        process.nextTick(function() {
            console.log(this, this.name)
        })
    }
}

obj.runGreet();