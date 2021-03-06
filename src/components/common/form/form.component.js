import AppFormController from './form.controller'

const AppForm = {
  bindings: {
    campos : '<',
    onAdd : '&'
  },
  template: `
    <div class="row">
      <div class="col-sm-8 col-sm-offset-2">
        <form class="form-inline" name="appForm" ng-submit="$ctrl.submit()">
          <div ng-repeat="campo in $ctrl.campos">
            <div class="col-md-3">
              <label>{{campo.placeholder}}</label>
              <div class="form-group">
                <input type="text" 
                  ng-model="$ctrl.inputsData[campo.placeholder]" 
                  class="form-control" 
                  ng-required="{{campo.required}}"/>
              </div>
            </div>
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-primary">Add</button>
          </div>  
        </form>
      </div>
    </div>
  `,
  controller: AppFormController
}

export default AppForm