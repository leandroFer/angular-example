const appModule = angular.module('app',[]);

appModule.component('appForm', {
  template: `
    <div class="row">
      <div class="col-sm-6 col-sm-offset-2">
        <div style="border:2px solid blue;margin:5px;">
          <h3>componente Form</h3>
        </div>
      </div>
    </div>
  `
});

appModule.component('appList', {
  template: `
    <div class="row">
      <div class="col-sm-6 col-sm-offset-2">
        <div style="border:2px solid red;margin:5px;">
          <h3>componente List</h3>
        </div>
      </div>
    </div>  
  `
});


appModule.component('appContainer', {
  template: `
    <div class="container-fluid" style="border:2px solid grey;margin:5px;">
      <div class="row text-center" >
        <h1>componente container</h1>
      </div>
      <app-form/>
      <app-list/>
    </div>
    `
});

