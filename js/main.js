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
  var $backgroundColorPicker = $('#backgroundColorPicker');
  var $timeFormatCheckbox = $('#timeFormatCheckbox');
  var $AppKeyEmptyBarFilled = $('#AppKeyEmptyBarFilled');
  var $AppKeyEmptyBarSameColor = $('#AppKeyEmptyBarSameColor');

  if (localStorage.agenthud) {
    $backgroundColorPicker[0].value = localStorage.agenthud.backgroundColor;
    $timeFormatCheckbox[0].checked = localStorage.agenthud.twentyFourHourFormat === 'true';
    $AppKeyEmptyBarFilled[0].checked = localStorage.agenthud.AppKeyEmptyBarFilled === 'true';
    $AppKeyEmptyBarSameColor[0].checked = localStorage.agenthud.AppKeyEmptyBarSameColor === 'true';
  }
}

function getAndStoreConfigData() {
  var $backgroundColorPicker = $('#backgroundColorPicker');
  var $timeFormatCheckbox = $('#timeFormatCheckbox');
  var $AppKeyEmptyBarFilled = $('#AppKeyEmptyBarFilled');
  var $AppKeyEmptyBarSameColor = $('#AppKeyEmptyBarSameColor');

  var options = {
    backgroundColor: $backgroundColorPicker.val(),
    twentyFourHourFormat: $timeFormatCheckbox[0].checked,
    AppKeyEmptyBarFilled: $AppKeyEmptyBarFilled[0].checked,
    AppKeyEmptyBarSameColor: $AppKeyEmptyBarSameColor[0].checked
  };

  localStorage.backgroundColor = options.backgroundColor;
  localStorage.twentyFourHourFormat = options.twentyFourHourFormat;
  localStorage.AppKeyEmptyBarFilled = options.AppKeyEmptyBarFilled;
  localStorage.AppKeyEmptyBarSameColor = options.AppKeyEmptyBarSameColor;

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
