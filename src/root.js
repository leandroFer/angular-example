import TodoList from './components/app/todo-list/TodoList.component'
import AppForm from './components/common/form/form.component'
import AppTable from './components/common/table/table.component'

const appModule = angular.module('app',[]);

appModule.component('appForm', AppForm);

appModule.component('appTable', AppTable);

appModule.component('appContainer', TodoList);