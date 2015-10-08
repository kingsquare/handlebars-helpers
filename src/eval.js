module.exports = function (code, options) {
	code = code.replace(/([\s]|\\t)/g, ' ');
	try {
		with (options.data.root) {
			return eval(code);
		}
	} catch (e) {
		return '';
	}
};