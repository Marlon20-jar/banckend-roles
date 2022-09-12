window.onload = init;

function init(){
    if(!localStorage.getItem("token")){

    
    document.querySelector('.btn-secondary').addEventListener('click', function(){
        window.location.href = "Registro.html"
    });


        document.querySelector('.btn-primary').addEventListener('click', login)

    }
    else{
        window.location.href = "InterfazU.html";
    }
}

function login (){

    var mail = document.getElementById('input-mail').value;
    var pass = document.getElementById('input-password').value;

    axios({
        method: 'post',
        url: 'http://localhost:4000/api/auth/signin',
        data:{
            correo: mail,
            password: pass

        }
    }).then(function(res){
        if(res.data.code === 200 ){
            localStorage.setItem("token",res.data.message);
            window.location.href = "InterfazU.html";
        }
        else{
            alert("Usuario y/o contra incorrectos")
        }
    }).catch(function(err){
        console.log(err);
    });
};
