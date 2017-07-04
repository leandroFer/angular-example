class AppTable {
    constructor(){}
    delete(item){
      this.onDelete({$element:{id: item.id}})
    }
  }

export default AppTable