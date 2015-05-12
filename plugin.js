

exports.for = function (API) {

	var exports = {};

	exports.normalize = function (config) {

		// TODO: Validate input config. Complete missing data. Generate uniform output config.

		var validatedConfig = {
			records: {}
		};

		for (var name in config.records) {
			if (config.records[name].domain) {
				config.records[name].domain = config.records[name].domain.toLowerCase();
			}
			if (config.records[name].data) {
				config.records[name].data = config.records[name].data.toLowerCase();
			}
			validatedConfig.records[name.toLowerCase()] = config.records[name];
		}

		return {
			"pinf.logic-for-dns~0": validatedConfig
		};
	}

	return exports;
}

