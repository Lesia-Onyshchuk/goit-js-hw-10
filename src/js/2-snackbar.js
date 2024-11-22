const form = document.querySelector('.form');
const input = document.querySelector('input[name="choice"]:checked');
const button = document.querySelector('button')

button.addEventListener('click', submitFoo
    .then(value => console.log(value)),
    .catch(error => console.log(error)))

const submitFoo = (event) => {
    // Create promise
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (event.target.value === 'fulfilled') {
                resolve('Success! Value passed to resolve function');
            } else {
                reject('Error! Error passed to reject function');
            }
        }, 2000);
    });
}
// Registering promise callbacks
// promise
//     .then(event.target.value => console.log(input.value))
//         .catch (error => console.log(error))


