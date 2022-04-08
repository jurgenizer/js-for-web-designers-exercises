(function() {
  "use strict";


  document.addEventListener('DOMContentLoaded', function() {
    var c = document.getElementById('current-time');

   setInterval(updateTime, 1000);

    function updateTime(){

      var d = new Date();
      var hours = d.getHours(),
      minutes  = d.getMinutes(),
      ampm = 'AM';

      if (hours > 12){
        hours -= 12;
        ampm = 'PM';
      } else if ( hours === 0 ) {
        hours = 12;
      }

      if (minutes < 10 ) {
        minutes = '0' + minutes;
      }

      var sepClass = '';
      if (d.getSeconds() % 2 === 1) sepClass = 'trans';

      var sep = '<span class = "' + sepClass + '">:</span>';
 
       c.innerHTML = hours + sep + minutes + ' ' + ampm;
    }

    /* Challenge */
    var currentDate = document.getElementById('current-date');

    setInterval(updateDate, 1000);

    function updateDate(){

      var todaysDate = new Date();
      var month= todaysDate.getUTCMonth();
      var day = todaysDate.getUTCDate();

      switch (month) {
        case 0:
          month = "January";
          break;
        case 1:
          month = "February";
          break;
        case 2:
           month = "March";
          break;
        case 3:
          month = "April";
          break;
        case 4:
          month = "May";
          break;
        case 5:
          month = "June";
          break;
        case 6:
          month = "July";
          break;
        case 7:
          month = "August";
          break;
        case 8:
          month = "September";
          break;
        case 9:
          month = "October";
          break;
        case 10:
           month = "November";
           break;
        case 11:
           month = "December";
           break;
        default:
            text = "month should appear here!";
      }

     currentDate.innerHTML = month + ' ' + day;
    }

  })
})();
