var makeDaysOldCalculator = function() {
  var myBirthDate;
  var cookieName = 'days-old-birthdate';
  var privateDaysOldCalculation = 0;
  var todaysDate = new Date();

  var birthdateField, TodaysDateField, DaysOldField;

  if(docCookies.hasItem(cookieName)) {
    myBirthDate = docCookies.getItem(cookieName);
  } else {
    myBirthDate = '1981 May 15';
    docCookies.setItem(cookieName,myBirthDate);
  }
  return {
    setup: function(birthdateFieldID, TodaysDateFieldID, DaysOldFieldID) {
      birthdateField = document.getElementById(birthdateFieldID);
      birthdateField.value=myBirthDate;
    },
    calculateDaysOld: function() {
      privateDaysOldCalculation = todaysDate;
    },
    getDaysOlds: function() {
      return privateDaysOldCalculation;
    }
  }
};

/* begin I wanted this to be in the index.md file, where the ids are defined, but Hugo tries to process it as html */
var DaysOldCalculator = makeDaysOldCalculator();

DaysOldCalculator.setup('startDate');

/* end I wanted this to be in the index.md file, where the ids are defined, but Hugo tries to process it as html */
