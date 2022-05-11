const { createApp } = Vue

createApp({
    data() {
        return {
            show: false,
            canavar: 100,
            num: 5
        }
    },


    methods: {

        Hucum() {
            Math.floor(Math.random() * this.canavar--);
            // Math.floor(Math.random() * this.canavar);
            // canavar--;
        }


    }



}).mount('#app');


// var random;
// var max = 8

// function findRandom() {
//     random = Math.floor(Math.random() * max) //Finds number between 0 - max
//     console.log(random)
// }
// findRandom()