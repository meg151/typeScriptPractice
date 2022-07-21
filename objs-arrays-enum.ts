// const person: {
//     name: string;
//     age: number;
// } = {
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: 'Maximilia',
//     age: 30,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role{ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR};

const person = {
    name: 'Maximilia',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};

// person.role.push('admin'); 
//push 는 tuple 에서 exceptional 으로 가넝함 
// person.role[1] = 10;

// person.role=[0m 'admin', 'user'];

let favoriteActivities: string[]; //any[] very flexible, 되도록 쓰지 마셈
favoriteActivities= ['Sports']

console.log(person.name);

for (const hobby of person.hobbies){
    // console.log(hobby.toUpperCase); !!! ERROR !!! 
    
}


if(person.role === Role.ADMIN){
    console.log('is admin');
    
}
