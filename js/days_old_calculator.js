var makeDaysOldCalculator = function() {
  var myBirthDate;
  var cookieName = 'days-old-birthdate';
  var privateDaysOldCalculation = 0;
  var todaysDate = "10/09/2016"; // should be new Date(); but I don't know how to format the date yet

  var birthdateField, todaysDateField, daysOldField;

  if(docCookies.hasItem(cookieName)) {
    myBirthDate = docCookies.getItem(cookieName);
  } else {
    myBirthDate = '08/18/1888';
    docCookies.setItem(cookieName,myBirthDate);
  }

  var _calcDaysOld = function() {
      var startDate = birthdateField.value;
      var endDate = todaysDateField.value;
      daysOldField.innerHTML=rDate.getDiffDays(startDate, endDate);
    }
  return {
    setup: function(birthdateFieldID, todaysDateFieldID, daysOldFieldID) {
      birthdateField = document.getElementById(birthdateFieldID);
      todaysDateField = document.getElementById(todaysDateFieldID);
      daysOldField = document.getElementById(daysOldFieldID);

      // this is the only time we will write to the form;
      // from now on, we will read user-inputted values from the form
      birthdateField.value=myBirthDate;
      todaysDateField.value=todaysDate;

      birthdateField.oninput = _calcDaysOld;
      todaysDateField.oninput = _calcDaysOld;
    },
    calculateDaysOld: _calcDaysOld

  }
};

/* begin I wanted this to be in the index.md file, where the ids are defined, but Hugo tries to process it as html */
var DaysOldCalculator = makeDaysOldCalculator();

DaysOldCalculator.setup('startDate','endDate','daysOld');
DaysOldCalculator.calculateDaysOld();
/* end I wanted this to be in the index.md file, where the ids are defined, but Hugo tries to process it as html */
