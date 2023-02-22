const Event = require('events');

const Login = new Event();
const SignUp = new Event()

// this will throw error
// Login.emit('error');

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


// Login.emit('error');

// logging