document.getElementById('btn').addEventListener('click', function() {
    fetch('https://jsonplaceholder.typicode.com/users/')
        .then (function (response){
            return response.json();
        })
        .then (function(data){
            document.getElementById("api-data").innerHTML = JSON.stringify(data);
        
        // data.forEach(function(user){
        //     document.body.innerHTML += `<p>Name: h${user.name}</p>`;
        // });

        // data.forEach(function(user){
        //     document.body.innerHTML += `<p>Email: ${user.email}</p>`;
        // });
    });
});

