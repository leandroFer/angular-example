class AppFormController {
    constructor(){}
    
    submit() {
      this.onAdd({$elem : {
        data: this.inputsData
      }})
    }
  }

export default AppFormController