// This checks if the console is present, and if not it 
// sets it to an object with a blank function called log to
// prevent any error. Remove logging for production.
if(!window.console){ window.console = {log: function(){} }; } 

(function() {
	Qv.AddExtension('ReadVariables', function() {
		console.log('ReadVariables eXtension loaded');

		var container = $('<div />').css({
				height: this.GetHeight(),
				width: this.GetWidth(),
				overflow: 'auto',
				'font-family': 'Helvetica',
				'font-size': '0.8em'
			}).appendTo($(this.Element).empty());

		Qv.GetCurrentDocument().GetAllVariables(function(vars) {
			$.each(vars, function(index, varObj) {
				container.append($('<div>' + varObj.name + ' = ' + varObj.value + '</div>'));
			});
		});
	});	
})();