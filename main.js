let postEmail = document.getElementById('firstbox');
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
// xhr.addEventListener('load');
xhr.responseType = 'json';
xhr.onload = () => {
    if(xhr.status === 200){
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