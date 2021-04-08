'use strict';

var React = require('react');
require('./TestComponent.scss.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var TestComponent = function (_a) {
    var theme = _a.theme;
    var _b = React.useState(0), number = _b[0], setNumber = _b[1];
    return (React__default['default'].createElement("div", { "data-testid": "test-component", className: "test-component test-component-" + theme },
        React__default['default'].createElement("h1", { className: "heading" }, "I'm the test component"),
        React__default['default'].createElement("h2", null, "Made with love by Harvey"),
        number,
        React__default['default'].createElement("button", { onClick: function () { return setNumber(number + 1); } }, "Change State")));
};

module.exports = TestComponent;
//# sourceMappingURL=TestComponent.js.map
