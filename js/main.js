(function() {
  loadOptions();
  submitHandler();
})();

function submitHandler() {
  var $submitButton = $('#submitButton');

  $submitButton.on('click', function() {
    console.log('Submit');

    var return_to = getQueryParam('return_to', 'pebblejs://close#');
    document.location = return_to + encodeURIComponent(JSON.stringify(getAndStoreConfigData()));
  });
}

function loadOptions() {
  var $AppKeyTwentyFourHourFormat = $('#AppKeyTwentyFourHourFormat');
  var $AppKeyBackgroundColor = $('#AppKeyBackgroundColor');
  var $AppKeyLabelColor = $('#AppKeyLabelColor');
  var $AppKeyValueColor = $('#AppKeyValueColor');
  var $AppKeyEmptyBarFilled = $('#AppKeyEmptyBarFilled');
  var $AppKeyEmptyBarSameColor = $('#AppKeyEmptyBarSameColor');

  if (localStorage.agenthud) {
    $AppKeyTwentyFourHourFormat[0].checked = localStorage.agenthud.AppKeyTwentyFourHourFormat === 'true';
    $AppKeyBackgroundColor[0].value = localStorage.agenthud.AppKeyBackgroundColor;
    $AppKeyLabelColor[0].value = localStorage.agenthud.AppKeyLabelColor;
    $AppKeyValueColor[0].value = localStorage.agenthud.AppKeyValueColor;
    $AppKeyEmptyBarFilled[0].checked = localStorage.agenthud.AppKeyEmptyBarFilled === 'true';
    $AppKeyEmptyBarSameColor[0].checked = localStorage.agenthud.AppKeyEmptyBarSameColor === 'true';
  }
}

function getAndStoreConfigData() {
  var $AppKeyTwentyFourHourFormat = $('#AppKeyTwentyFourHourFormat');
  var $AppKeyBackgroundColor = $('#AppKeyBackgroundColor');
  var $AppKeyLabelColor = $('#AppKeyLabelColor');
  var $AppKeyValueColor = $('#AppKeyValueColor');
  var $AppKeyEmptyBarFilled = $('#AppKeyEmptyBarFilled');
  var $AppKeyEmptyBarSameColor = $('#AppKeyEmptyBarSameColor');

  var options = {
    AppKeyTwentyFourHourFormat: $AppKeyTwentyFourHourFormat[0].checked,
    AppKeyBackgroundColor: $AppKeyBackgroundColor.val(),
    AppKeyLabelColor: $AppKeyLabelColor.val(),
    AppKeyValueColor: $AppKeyValueColor.val(),
    AppKeyEmptyBarFilled: $AppKeyEmptyBarFilled[0].checked,
    AppKeyEmptyBarSameColor: $AppKeyEmptyBarSameColor[0].checked
  };

  localStorage.agenthud.AppKeyTwentyFourHourFormat = options.AppKeyTwentyFourHourFormat;
  localStorage.agenthud.AppKeyBackgroundColor = options.AppKeyBackgroundColor;
  localStorage.agenthud.AppKeyLabelColor = options.AppKeyLabelColor;
  localStorage.agenthud.AppKeyValueColor = options.AppKeyValueColor;
  localStorage.agenthud.AppKeyEmptyBarFilled = options.AppKeyEmptyBarFilled;
  localStorage.agenthud.AppKeyEmptyBarSameColor = options.AppKeyEmptyBarSameColor;

  console.log('Got options: ' + JSON.stringify(options));
  return options;
}

function getQueryParam(variable, defaultValue) {
  var query = location.search.substring(1);
  var vars = query.split('&');
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    if (pair[0] === variable) {
      return decodeURIComponent(pair[1]);
    }
  }
  return defaultValue || false;
}
