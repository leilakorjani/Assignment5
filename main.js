let postEmail = document.getElementById('firstbox');
let postUser = document.getElementById('secondbox');
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
// xhr.addEventListener('load');
xhr.responseType = 'json';
xhr.onload = () => {
    if(xhr.status === 200){
        // let data = JSON.parse(xhr.response);
        let data = xhr.response;
        let lenData = data.length;
        let cumEmail= '<ul>';
        for(let i=0; i<lenData ; i++){
            data.sort( function( a, b ) {
                return a.email < b.email ? -1 : a.email > b.email ? 1 : 0;
            });
            cumEmail += '<li>'+ data[i].email + '</li>';
        }
        console.log(cumEmail);
        cumEmail += '</ul>'
        postEmail.innerHTML = cumEmail;
    }else{
        console.log('error',xhr.statusText)
    };
};   
xhr.send();

fetch('https://jsonplaceholder.typicode.com/users')
.then(response =>{
    return response.json();
})
.then(responseData =>{
    let user = responseData;
    let lenUser = user.length;
    let cumUser = '<ul>';
    for(let i=0; i<lenUser ; i++){
        user.sort( function( a, b ) {
            return a.username.length - b.username.length;
        });
        cumUser += '<li>'+ user[i].username + '</li>';
    }
    console.log(cumUser);
    cumUser += '</ul>'
    postUser.innerHTML = cumUser;

});