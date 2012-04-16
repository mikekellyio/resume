/* Author: Mike Kelly
set up skills filter
*/

$(function(){
	var toClassName = function(val){
		return val.toLowerCase().replace(/\W/g, "_")
	}
	
	var syncState = function(){
		$('#skills input[type=checkbox]').each(function(){
			$(this).attr('checked', $('section.position.'+$(this).val()+':visible').size() > 0)
		})
	}
	
	var togglePosition = function(skill, visible){
		if(visible){
			$('section.position.'+skill).show('fast', syncState)
		}else{
			$('section.position.'+skill).hide('fast', syncState)
		}
		
		
	}
	var skills = {}
	$('footer.skills ul li')
		.each(function(){ $(this).parents('section.position').addClass(toClassName($(this).text()))})
		.map(function(){return $(this).text()})
		.each(function(){skills[this] ? (skills[this] = skills[this] + 1) : (skills[this] = 0)})
		
	$('#skills ul').html($.map(skills, function(k,v){return v}).sort()
		.map(function(a){
			return "<li><label>"+a+"<input type='checkbox' value='"+toClassName(a)+"' checked='checked'/></label></li>"
		}).join(''))
	$('#skills ul input[type=checkbox]').click(function(){
		togglePosition($(this).val(), this.checked)
	})
	$('#skills a.select_all').click(function(){
		$('#skills ul input[type=checkbox]').attr("checked", true)
			.each(function(){
				togglePosition($(this).val(), this.checked)
			})
		return false;
	})
	$('#skills a.select_none').click(function(){
		$('#skills ul input[type=checkbox]').attr("checked", false)
			.each(function(){
				togglePosition($(this).val(), this.checked)
			})
		return false;
	})
})