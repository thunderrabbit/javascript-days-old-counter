var makeDaysOldCalculator = function() {
  var myBirthDate;
  var cookieName = 'days-old-birthdate';
  var privateDaysOldCalculation = 0;
  var todaysDate = new Date();

  var birthdateField, todaysDateField, daysOldField;

  if(docCookies.hasItem(cookieName)) {
    myBirthDate = docCookies.getItem(cookieName);
  } else {
    myBirthDate = '1981 May 15';
    docCookies.setItem(cookieName,myBirthDate);
  }
  return {
    setup: function(birthdateFieldID, todaysDateFieldID, daysOldFieldID) {
      birthdateField = document.getElementById(birthdateFieldID);
      todaysDateField = document.getElementById(todaysDateFieldID);
      daysOldField = document.getElementById(daysOldFieldID);
      birthdateField.value=myBirthDate;
      todaysDateField.value=todaysDate;
      daysOldField.innerHTML="hard to know";
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

DaysOldCalculator.setup('startDate','endDate','daysOld');

/* end I wanted this to be in the index.md file, where the ids are defined, but Hugo tries to process it as html */
