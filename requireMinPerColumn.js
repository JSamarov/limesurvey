<script type="text/javascript" charset="utf-8">

$(document).ready(function() {

// Call the requireMinPerColumn function when next or submit button is clicked.

var qID = '13';
var inputNum = 1;

// note your theme should have these id's for next and submit buttons.
var moveBtnIds = '#ls-button-submit';
requireMinPerColumn(qID, inputNum, moveBtnIds);

function requireMinPerColumn(qID, inputNum, moveBtnIds) {

// Interrupt next/submit function

$(moveBtnIds).click(function(){

var msg1 = 'Make sure you have selected at least ' + inputNum +' option per Column.';

// Test the input

var table = $('#question'+qID+' table.ls-answers');
var cols = table.find('thead tr.ls-heading th');
var body = table.find('tbody');
var passed = true;

cols.each(function(){
var dataindex = $(this).index();
//var dataindex = '9';
console.log('dataindex: ' + dataindex);
var answered = body.find('tr:not(:last-child) td:nth-child(' + (dataindex + 1) + ') input[type=checkbox]:checked').length;
if(answered < inputNum){
passed = false;
$(this).css({ 'background':'pink' });
} else {
$(this).css({ 'background':'' });
}
});

if(passed == false) {
alert(msg1);
return false;
}

else {
return true;
}

});

}

});

</script>
