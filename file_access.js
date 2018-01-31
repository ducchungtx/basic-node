var fs = require('fs');

fs.open('data.txt', 'r+', function(err, file) {
    if(err) {
        console.log('Open file is error');
    }

    console.log('Open file is successfully!');
});


// var data = fs.readFileSync('data.txt');
// console.log(data.toString('utf-8'));

// fs.readFile('data.txt', function(err, data) {
//     if(err) {
//         console.log('Err read file!');
//     } else {
//         console.log(data.toString());
//     }
// })

// fs.writeFile('data.txt', 'New content file', function(err) {
//     if(err) {
//         console.log('Write file ERR');
//     } else {
//         fs.readFile('data.txt', function(err, data){
//             if(err) {
//                 console.log('Can not read file');
//             } else {
//                 console.log(data.toString());
//             }
//         })
//     }
// })

fs.mkdir('new_folder', function(err) {
    if(err) {
        console.log('Can not make directory');
    } else {
        console.log('Directory make successfully');
    }
})
