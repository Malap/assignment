Search = {
  
}

Search.init = function () {
    this.initHandler()
}

Search.initHandler = function () {
  $('.dailer-button').on('click', function(){
    input = $('#dialer-input').val()
    console.log(input)

    key = $(this).attr('data-value');
    input = input + key
    $('#dialer-input').val(input)
    Search.getData()

  })

   
}

Search.getData = function(){
  $.ajax({
    data: {input: $('#dialer-input').val()},
    url: '/home/search',
    processData: true,
    method: "post",
    beforeSend: function () {
        
    },
    success: function (data) {
      $('.search-container').empty()
      $.each( data["contacts"], function( key, value ) {
        clone = $('.contact-clone').clone()
        clone.removeClass('contact-clone').addClass('contact-item')
        clone.find('.contact-number').html(value["number"])
        clone.find('.contact-name').html(value["name"])
        $('.search-container').append(clone)
      });
      $('.contact-item').on('click', function(){
        $('#dialer-input').val($(this).find('.contact-number').html())
      })  

    },
    error: function (data) {
        
    }

  })
}