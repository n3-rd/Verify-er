$('#main-input').val(localStorage.getItem('lastPhone'))
$('.verified').html(localStorage.getItem('lastPhoneInfo'))
$('.back').click(function(){
    console.log('back clicked')
})

// your Rapid Api Key Here


$('#verify-button').click(function(){
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://veriphone.p.rapidapi.com/verify?phone="+$('#main-input').val(),
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "veriphone.p.rapidapi.com",
                "x-rapidapi-key": "4d28f8767fmsh77c6703eafddd9fp1dc387jsn58cdd45aac27"
            }
        }
        
        $.ajax(settings).done(function (response) {
            if(response.phone_valid == true){
                $('.verified').html(`<ul> 
                <li> <b>Phone</b> <br>`+response.phone+`</li>
                <li> <b>Carrier</b> <br>`+response.carrier+`</li>
                <li> <b>International Number</b> <br>`+response.international_number+`</li>
                <li> <b>Local Number</b> <br>`+response.local_number+`</li>
                <li> <b>Country</b> <br>`+response.country+`</li>
                <li> <b>Country Code</b> <br>`+response.country_code+`</li>
                <li> <b>Country Prefix</b> <br>`+response.country_prefix+`</li>
                <li> <b>Phone Type</b> <br>`+response.phone_type+`</li>
                <li> <b>e164</b> <br>`+response.e164+`</li>
                 <ul>`)

                 localStorage.setItem('lastPhoneInfo', $('.verified').html())
                 localStorage.setItem('lastPhone', $('#main-input').val())
            }
            else{
                alert('Input A Valid Number')
            }
          
        });
})
        
