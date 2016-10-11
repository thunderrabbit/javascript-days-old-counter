var makeDaysOldCalculator = function() {
  var myCookieGUID;
  var cookieName = 'days-old-cookie';
  var privateDaysOldCalculator = 0;

  Parse.initialize(config.app_id, config.js_key);
  if(docCookies.hasItem(cookieName)) {
    myCookieGUID = docCookies.getItem(cookieName);
  } else {
    myCookieGUID = guid();
    docCookies.setItem(cookieName,myCookieGUID);
  }
  return {
    doDaysOld: function() {
      privateDaysOldCalculator++;
    },
    saveDaysOlds: function() {
      var PushupsPerformedBy = Parse.Object.extend("PushupsPerformedBy");
      var myPushupCounts = new PushupsPerformedBy();
      myPushupCounts.save({guid: myCookieGUID, pushups:privateDaysOldCalculator}, {
        success: function(object) {
          privateDaysOldCalculator = 0;
        },
        error: function(model, error) {
          $(".error").show();
        }
      });
    },
    getDaysOlds: function() {
      return privateDaysOldCalculator;
    }
  }
};