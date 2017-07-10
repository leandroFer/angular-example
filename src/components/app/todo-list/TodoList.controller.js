class TodoListController {
  constructor(){
    // instanciar servicios o otros imports de que use la clase, bindings NO ACCESIBLES
    this.campos = [{placeholder:'nombre',required:true},{placeholder:'apellido',required:true},{placeholder:'edad'}];
    this.columns = ['id','nombre','apellido','edad'];
    this.data = [{id:1,nombre:'Leandro',apellido:'Fernandez',edad:'22'},
                  {id:2,nombre:'Ezequiel',apellido:'Cabrera',edad:'29'}]
    this.nextId = this.data.slice(-1)[0].id + 1;
  }
  
  $onInit(){
    //acciones relacionadas con los bindings que recibe el componente 
  }
  
  handleAdd({data}) {
    this.data.push({
      id : this.nextId,
      nombre : data.nombre,
      apellido : data.apellido,
      edad : data.edad
    })
    this.nextId++;
  } 
  
  deleteElem(index) {
    this.data.splice(index,1);
  }
  
  handleDelete({id}) {
    let index = this.data.map(elem => elem.id).indexOf(id)
    if(index !== -1){
      this.deleteElem(index)
    }
  }
}

export default TodoListController