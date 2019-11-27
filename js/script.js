$(document).ready(function(){
    $("#txtCep").focusout(function(){
        var cep = $("#txtCep").val();
        cep = cep.replace("-", "");

        var urlStr = "https://viacep.com.br/ws/"+ cep +"/json/";

        $.ajax({
            url : urlStr,
            type : "get",
            dataType : "json",
            success : function(data){
                console.log(data);
                $("#txtCidade").val(data.localidade);
                $("#txtEstado").val(data.uf);
                $("#txtBairro").val(data.bairro);
                $("#txtRua").val(data.logradouro);
                $("#txtIbge").val(data.ibge);
            },
            erro : function(erro){
                console.log("erro");
            }
         });
    });
});

$(document).ready(function(){
    $("#txtCep").focusout(function(){
        var cidade = $("#txtCidade").val();
        var estado = $("#txtEstado").val();

        var urlStr2 = "https://api.hgbrasil.com/weather?format=json-cors&key=04fb742f&city_name="+ cidade + "," + estado;

        $.ajax({
            url : urlStr2,
            type : "get",
            dataType : "json",
            success : function(data){
                console.log(data);
                $("#txtData").val(data.results.date);
                $("#txtHora").val(data.results.time);
                $("#txtSituacao").val(data.results.description);
                $("#txtPeriodo").val(data.results.currently);
                $("#txtUmidade").val(data.results.humidity);
                $("#txtTempAtual").val(data.results.temp);
                $("#txtVelocidadeVento").val(data.results.wind_speedy);
                $("#txtHoraOnSol").val(data.results.sunrise);
                $("#txtHoraOffSol").val(data.results.sunset);
                
            },
            erro : function(erro){
                console.log("erro");
            }
         });
    });
});