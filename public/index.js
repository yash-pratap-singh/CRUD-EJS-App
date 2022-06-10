$('#add_user').submit(function(event){
    alert("Data Inserted Succcessfully");
})

$('#update_user').submit(async function(event){
    // Default behaviour of a form is to render the browser when you click the submit button, So :
    event.preventDefault();

    var unindexed_Array= $(this).serializeArray();
    var data={};

    $.map(unindexed_Array,function(n,i){
        data[n['name']]=n['value'];
    })
    await axios.patch(`/api/users/${data.id}`,data);
    alert("Data Updated Succesfully");
})


if(window.location.pathname=="/"){
   $ondelte=$(".table tbody td a.delete");
   $ondelte.click(async function(){
       var id=$(this).attr("data-id");
       await axios.delete(`/api/users/${id}`);
       alert("Data Deleted");
       location.reload();

   })
}
