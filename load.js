var loader = function (moduleName, libs) {
	var module = moduleName + '.js';

	// carrega o modulo
	head.load('modules/' + module);

	// quando modulo estiver carregado, carrega libs desejadas
	head.ready(module, function () {
    	
    	var libsUsed = [];

		libs.forEach(function (lib) {
			var arrLib     = lib.split('_'),
				libName    = arrLib[0],
				libVersion = arrLib[1];

			moduleLibs.forEach (function (lib) {
				if (lib.name === libName && lib.version === libVersion) {
					libsUsed.push('vendor/' + libName + '/' + libVersion + '/' + libName + '.min.js');
					return;
				}
			});
		});

		head.load(libsUsed);
    });
};