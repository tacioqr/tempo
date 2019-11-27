$(document).ready(function(){
    $("#txtCidade").focusout(function(){
        var cidade = $("#txtCidade").val();
        var estado = $("#txtEstado").val();

        var urlStr2 = "https://api.hgbrasil.com/weather?format=json-cors&key=04fb742f&city_name="+ cidade + "," + estado;

        $.ajax({
            url : urlStr2,
            type : "get",
            dataType : "json",
            success : function(data){
                console.log(data);
                $("#txtTempAtual").val(data.city_name);
            },
            erro : function(erro2){
                console.log("erro2");
            }
         });
    });
});