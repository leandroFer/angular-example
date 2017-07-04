import AppTableController from './table.controller'

const AppTable = {
  bindings: {
    columns : '<',
    data : '<',
    onDelete : '&'
  },
  template: `
    <div class="row">
      <div class="col-sm-8 col-sm-offset-2">
        <table class="table table-hover">
          <thead>
            <tr>
              <th ng-repeat="col in $ctrl.columns">{{col}}</th>
            </tr>
          </thead>
          <tbody>
            <tr ng-repeat="item in $ctrl.data">
              <td>{{item.id}}</td>
              <td>{{item.nombre}}</td>
              <td>{{item.apellido}}</td>
              <td>{{item.edad}}</td>
              <td><button class="btn btn-danger btn-xs" ng-click="$ctrl.delete(item)">DELETE</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>  
  `,
  controller: AppTableController
}

export default AppTable