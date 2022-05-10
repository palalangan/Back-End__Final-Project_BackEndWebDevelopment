

$("#add_user").submit(function(event){
    alert("Data berhasil disimpan")
})

$("#update_user").submit(function(event){
    event.preventDefault();
    var data = {}

    var unindexed_array = $(this).serializeArray();
    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })
    
    console.log(data);

    var request = {
        "url" : `http://localhost:3000/api/users/${data.id}`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        alert("Data berhasil diubah")
    })

})

if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url" : `http://localhost:3000/api/users/${id}`,
            "method" : "DELETE",
        }

        if(confirm("Apakah anda ingin menghapus file ini?")){
            $.ajax(request).done(function(response){
                alert("Data berhasil dihapus");
                location.reload();
            })
        }
    })
}