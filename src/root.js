const appModule = angular.module('app',[]);

appModule.component('appForm', {
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
  controller: function() {
    this.submit = function() {
      this.onAdd({$elem : {
        data: this.inputsData
      }})
    }
  }
});

appModule.component('appTable', {
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
  controller: function() {
    this.delete = function(item){
      this.onDelete({$element:{id: item.id}})
    }
  }
});


appModule.component('appContainer', {
  template: `
    <div class="container-fluid" style="border:2px solid grey;margin:5px;">
      <div class="row text-center" >
        <h1>componente container</h1>
      </div>
      <app-form campos="$ctrl.campos" on-add="$ctrl.handleAdd($elem)"/>
      <app-table columns="$ctrl.columns" data="$ctrl.data" on-delete="$ctrl.handleDelete($element)"/>
    </div>
    `,
    controller: function() {
      this.$onInit = function(){
          this.campos = [{placeholder:'nombre',required:true},{placeholder:'apellido',required:true},{placeholder:'edad'}];
          this.columns = ['id','nombre','apellido','edad'];
          this.data = [{id:1,nombre:'Leandro',apellido:'Fernandez',edad:'22'},
                        {id:2,nombre:'Ezequiel',apellido:'Cabrera',edad:'30'}];
          this.nextId = this.data.slice(-1)[0].id + 1
      }
      
      this.handleAdd = function(elem) {
        this.data.push({
          id : this.nextId,
          nombre : elem.data.nombre,
          apellido : elem.data.apellido,
          edad : elem.data.edad
        })
        this.nextId++
      } 
      
      this.elementInData = function(id) {
        return this.data.find(function(element){
          return (element.id === id)
        })
      }
      
      this.deleteElem = function(index) {
        this.data.splice(index,1);
      }
      
      this.handleDelete = function(element) {
        let index = this.elementInData(element.id);
        if(index){
          this.deleteElem(index)
        }
      }
    }
});






