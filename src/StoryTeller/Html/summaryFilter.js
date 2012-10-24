$(document).ready(function(){
	var lifecycleFilterBox = $("<select id='filterLifecycle'></select>")
		.append("<option value='All'>All</option>")
		.append("<option value='Regression'>Regression</option>")
		.append("<option value='Acceptance'>Acceptance</option>")
		.change(filterResults);
	var resultFilterBox = $("<select id='filterResult'></select>")
		.append("<option value='All'>All</option>")
		.append("<option value='pass'>pass</option>")
		.append("<option value='fail'>fail</option>")
		.change(filterResults);
	$("table:first").before(lifecycleFilterBox).before(resultFilterBox);
    if ($("table:first tr.fail").length > 0){
        resultFilterBox.val("fail").change();
    }});

function filterResults(){
	var lifecycle = $("#filterLifecycle").val();
	var result = $("#filterResult").val();
	$("tbody tr").each(function(){
		var showForLifecycle = (lifecycle == "All") || (lifecycle == $("td:eq(1)", this).text());
		var showForResult = (result == "All") || $(this).hasClass(result);
		if (showForLifecycle && showForResult) {
			$(this).show(); 
	    } else {
			$(this).hide();
		}
	});
}