

exports.for = function (API) {

	var exports = {};

	exports.normalize = function (config) {

		// TODO: Validate input config. Complete missing data. Generate uniform output config.

		return {
			"pinf.logic-for-dns~0": config
		};
	}

	return exports;
}

