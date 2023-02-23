const Event = require('events');

const Login = new Event();

// this will throw error
// Login.emit('error');
/*
Login.addListener('success', (username, country) => {
    console.log(`${username} logged in successfully from ${country}`);
})

Login.emit('success', 'Dhanesh', 'India'); //Dhanesh

Login.on('success', () => {
    console.log('added the logs in file');
})

Login.addListener('error', () => {
    console.log('error while logging in user');
})

Login.emit('success', 'Abhinav', 'India'); //Abhinav
// Login.emit('success', 'Dhanesh', 'India'); //Dhanesh
// Login.emit('success', 'Nimisha', 'India'); // Nimisha
*/

// signup flow

const SignUp = new Event();

const info = {}

const successSignup1 = (name) => {
    console.log(`first signup is successful for ${name}`);
}
const successSignup2 = (name) => {
    console.log(`second signup is successful second`);
}

SignUp.addListener('success', successSignup1);
SignUp.on('success', successSignup2);

// runs only one time
SignUp.once('success', () => {
    console.log('ruuning only once');
})

SignUp.emit('success', 'Abhinav');

// removeListener removes one listener whatever we pass as a second argument
// SignUp.removeListener('success', successSignup1);
// SignUp.off('success', successSignup1);

// removes all the listeners for that event
// SignUp.removeAllListeners('success');

SignUp.emit('success', 'sameer');

// deprecated
console.log(SignUp.listenerCount('success'));


// Login.emit('error');

// logging