import $ from "jquery";
import "jquery-match-height";

$(function() {
	$('#item').matchHeight({
    byRow: true,
    property: 'height',
    target: null,
    remove: false
  });
});
