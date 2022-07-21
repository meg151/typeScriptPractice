let uerInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';
if(typeof userInput === 'string'){
    userName = userInput;
}

function generateError(message: string, code: number): never{
    throw {message: MessageChannel, errorCode: code};
}

generateError('An error occcurred!', 500)