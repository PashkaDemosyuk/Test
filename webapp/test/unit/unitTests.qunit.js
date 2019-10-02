/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ZDZM/ZDZM_TEST/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});