class TodoListController {
  constructor(){
    // instanciar servicios o otros imports de que use la clase, bindings NO ACCESIBLES
    this.campos = [{placeholder:'nombre',required:true},{placeholder:'apellido',required:true},{placeholder:'edad'}];
    this.columns = ['id','nombre','apellido','edad'];
    this.data = [{id:1,nombre:'Leandro',apellido:'Fernandez',edad:'22'},
                  {id:2,nombre:'Ezequiel',apellido:'Cabrera',edad:'30'}]
    this.nextId = this.data.slice(-1)[0].id + 1;
  }
  
  $onInit(){
    //acciones relacionadas con los bindings que recibe el componente 
  }
  
  handleAdd(elem) {
    this.data.push({
      id : this.nextId,
      nombre : elem.data.nombre,
      apellido : elem.data.apellido,
      edad : elem.data.edad
    })
    this.nextId++
  } 
  
  elementInData(id) {
    return this.data.find(element => element.id === id)
  }
  
  deleteElem(index) {
    this.data.splice(index,1);
  }
  
  handleDelete(element) {
    let index = this.elementInData(element.id);
    if(index){
      this.deleteElem(index)
    }
  }
}

export default TodoListController