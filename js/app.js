$(document).ready(function(){
    $.ajax({
        type: 'GET',
        dataType: 'JSON',
        url: 'data/data.json',

        success: function(data){
            console.log(data);
        },

        error: function(err){
            console.log(err);
        },

        complete: function(){
            console.log('fin de la requete');
        },



    });


});