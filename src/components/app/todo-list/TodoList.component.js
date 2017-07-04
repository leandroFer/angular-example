import TodoListController from './TodoList.controller.js'

const TodoList = {
  template: `
    <div class="container-fluid" style="border:2px solid grey;margin:5px;">
      <div class="row text-center" >
        <h1>componente container</h1>
      </div>
      <app-form campos="$ctrl.campos" on-add="$ctrl.handleAdd($elem)"/>
      <app-table columns="$ctrl.columns" data="$ctrl.data" on-delete="$ctrl.handleDelete($element)"/>
    </div>
    `,
    controller: TodoListController
}

export default TodoList