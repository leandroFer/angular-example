'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AppForm = {
  bindings: {
    campos: '<',
    onAdd: '&'
  },
  template: '\n    <div class="row">\n      <div class="col-sm-8 col-sm-offset-2">\n        <form class="form-inline" name="appForm" ng-submit="$ctrl.submit()">\n          <div ng-repeat="campo in $ctrl.campos">\n            <div class="col-md-3">\n              <label>{{campo.placeholder}}</label>\n              <div class="form-group">\n                <input type="text" \n                       ng-model="$ctrl.inputsData[campo.placeholder]" \n                       class="form-control" \n                       ng-required="{{campo.required}}"/>\n              </div>\n            </div>\n          </div>\n          <div class="form-group">\n            <button type="submit" class="btn btn-primary">Add</button>\n          </div>  \n        </form>\n      </div>\n    </div>\n  ',
  controller: function () {
    function AppForm() {
      _classCallCheck(this, AppForm);
    }

    _createClass(AppForm, [{
      key: 'submit',
      value: function submit() {
        this.onAdd({ $elem: {
            data: this.inputsData
          } });
      }
    }]);

    return AppForm;
  }()
};

exports.default = AppForm;