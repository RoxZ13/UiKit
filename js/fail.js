/*Datepicker */

$(function () {
  $("#datepicker").datepicker({
    showOn: "button",
    buttonImage: "img/expand_more",
    buttonImageOnly: true,
    buttonText: "Select date",
  });
});


/*Spinner*/

$(function () {
  var spinner = $("#spinner").spinner();

  $("#disable").on("click", function () {
    if (spinner.spinner("option", "disabled")) {
      spinner.spinner("enable");
    } else {
      spinner.spinner("disable");
    }
  });
  $("#destroy").on("click", function () {
    if (spinner.spinner("instance")) {
      spinner.spinner("destroy");
    } else {
      spinner.spinner();
    }
  });
  $("#getvalue").on("click", function () {
    alert(spinner.spinner("value"));
  });
  $("#setvalue").on("click", function () {
    spinner.spinner("value", 5);
  });

  $("button").button();
});


/*slider-range*/
$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
  } );


 

 

$(function () {
        $("#slider-range").slider({
          range: true,
          min: 0,
          max: 15000,
          values: [5000, 10000],
          slide: function (event, ui) {
            $("#amount").val(ui.values[0] + "Р - " + ui.values[1] + "Р");
          },
        });
        $("#amount").val(
          $("#slider-range").slider("values", 0) +
            "Р - " +
            $("#slider-range").slider("values", 1) +
            "Р"
        );
      });

      $(function () {
        $("input").checkboxradio();
        $("fieldset").controlgroup();
      });
 
      $( function() {
        $( ".widget button" )
          .eq( 0 ).button()
          .end().eq( 1 ).button( {
            icon: "ui-icon-gear",
            showLabel: false
          } ).end().eq( 2 ).button( {
            icon: "ui-icon-gear"
          } ).end().eq( 3 ).button( {
            icon: "ui-icon-gear",
            iconPosition: "end"
          } ).end().eq( 4 ).button( {
            icon: "ui-icon-gear",
            iconPosition: "top"
          } ).end().eq( 5 ).button( {
            icon: "ui-icon-gear",
            iconPosition: "bottom"
          } );
      } );
    
        
  

 /* Datepicker*/


 $.datepicker.regional['ru'] = {
	closeText: 'Закрыть',
	prevText: 'Предыдущий',
	nextText: 'Следующий',
	currentText: 'Сегодня',
	monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
	monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
	dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
	dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
	dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
	weekHeader: 'Не',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''
};
$.datepicker.setDefaults($.datepicker.regional['ru']);


$(function(){
	$("#datepicker").datepicker({
		onSelect: function(date){
			$('#datepicker_value').val(date)
		}
	});
	$("#datepicker").datepicker("setDate", $('#datepicker_value').val());
});


$(function(){
	$("#datepicker").datepicker({
		minDate: 0
	});
});



/*Counter*/ 

$(document).ready(function() {
  var i = $(".counter").val();
  $(".plus").click(function(){
      $(".counter").val(++i);
  });
  $(".minus").click(function(){
      $(".counter").val(--i);
  });
});



