function pintarRespuesta(items){
    let myTable="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].email+"</td>";
        myTable+="<td>"+items[i].password+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td>"+items[i].age+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado1").append(myTable);
}

function getClientes(){
    $.ajax({
        url:"http://localhost:8080/api/Client/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta(respuesta);
        }

    });

}

function postClientes(){
    if ($("#email").val().length==0 || $("#password").val().length==0 || $("#name").val().length==0 || $("#age").val().length==0 ){
        alert("Todos los campos son obligatorios para actualizar los datos");
}else{
        
    let cajas = {
        email:$("#email").val(),
        password:$("#password").val(),
        name:$("#name").val(),
        age:$("#age").val()
    };
    
    $.ajax({
        url:"http://localhost:8080/api/Client/save",
        type:"POST",
        datatype:"JSON",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(cajas),
        success:function(respuesta){
            alert("se creo correctamente el cliente");
            window.location.reload();
        }
    });

}

function putClientes(idBotonActualizar){
    console.log(idBotonActualizar);

    if ($("#email").val().length==0 || $("#password").val().length==0 || $("#name").val().length==0 || $("#age").val().length==0 ){
        alert("Todos los campos son obligatorios para actualizar los datos");
}else{

let cajas = {
    idCliente:idBotonActualizar,
    email:$("#email").val(),
    password:$("#password").val(),
    name:$("#name").val(),
    age:$("#age").val()
};

$.ajax({
    url:"http://localhost:8080/api/Clientes/update",
    type:"PUT",
    datatype:"JSON",
    contentType: "application/json",
    data: JSON.stringify(cajas),
    success:function(respuesta){
        alert("se actualizo correctamente el cliente");
        window.location.reload();
    }
});
}

}




function deleteClientes(idBoton){
    let myData={
        id:idBoton
    };
    $.ajax({
        url:"http://localhost:8080/api/Clientes/"+idBoton,
        type:"DELETE",
        datatype:"JSON",
        data:JSON.stringify(myData),
        contentType: "application/json",
        success:function(respuesta){
            alert("se ha borrado correctamente el cliente")
            window.location.reload();
        }

    });
    
}

}