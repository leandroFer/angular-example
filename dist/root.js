'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var appModule = angular.module('app', []);

appModule.component('appForm', {
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
});

appModule.component('appTable', {
  bindings: {
    columns: '<',
    data: '<',
    onDelete: '&'
  },
  template: '\n    <div class="row">\n      <div class="col-sm-8 col-sm-offset-2">\n        <table class="table table-hover">\n          <thead>\n            <tr>\n              <th ng-repeat="col in $ctrl.columns">{{col}}</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr ng-repeat="item in $ctrl.data">\n              <td>{{item.id}}</td>\n              <td>{{item.nombre}}</td>\n              <td>{{item.apellido}}</td>\n              <td>{{item.edad}}</td>\n              <td><button class="btn btn-danger btn-xs" ng-click="$ctrl.delete(item)">DELETE</button></td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>  \n  ',
  controller: function () {
    function AppTable() {
      _classCallCheck(this, AppTable);
    }

    _createClass(AppTable, [{
      key: 'delete',
      value: function _delete(item) {
        this.onDelete({ $element: { id: item.id } });
      }
    }]);

    return AppTable;
  }()
});

appModule.component('appContainer', {
  template: '\n    <div class="container-fluid" style="border:2px solid grey;margin:5px;">\n      <div class="row text-center" >\n        <h1>componente container</h1>\n      </div>\n      <app-form campos="$ctrl.campos" on-add="$ctrl.handleAdd($elem)"/>\n      <app-table columns="$ctrl.columns" data="$ctrl.data" on-delete="$ctrl.handleDelete($element)"/>\n    </div>\n    ',
  controller: function () {
    function AppContainer() {
      _classCallCheck(this, AppContainer);

      // instanciar servicios o otros imports de que use la clase, bindings NO ACCESIBLES
      this.campos = [{ placeholder: 'nombre', required: true }, { placeholder: 'apellido', required: true }, { placeholder: 'edad' }];
      this.columns = ['id', 'nombre', 'apellido', 'edad'];
      this.data = [{ id: 1, nombre: 'Leandro', apellido: 'Fernandez', edad: '22' }, { id: 2, nombre: 'Ezequiel', apellido: 'Cabrera', edad: '30' }];
    }

    _createClass(AppContainer, [{
      key: '$onInit',
      value: function $onInit() {
        //acciones relacionadas con los bindings que recibe el componente 
      }
    }, {
      key: 'handleAdd',
      value: function handleAdd(elem) {
        var newId = this.data.slice(1)[0].id + 1;
        this.data.push({
          id: newId,
          nombre: elem.data.nombre,
          apellido: elem.data.apellido,
          edad: elem.data.edad
        });
      }
    }, {
      key: 'elementInData',
      value: function elementInData(id) {
        return this.data.find(function (element) {
          return element.id === id;
        });
      }
    }, {
      key: 'deleteElem',
      value: function deleteElem(index) {
        this.data.splice(index, 1);
      }
    }, {
      key: 'handleDelete',
      value: function handleDelete(element) {
        var index = this.elementInData(element.id);
        if (index) {
          this.deleteElem(index);
        }
      }
    }]);

    return AppContainer;
  }()
});