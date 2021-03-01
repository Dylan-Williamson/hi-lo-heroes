// const clearCards = {
//     id: null,
//     name: "",
//     logo: "",
//     description: "",
//     github: "",
//     demo: "",
//     technologies: "",
//   }
  
  const initialState = {
      cards: [],
    //   selectedProject: clearProject,
    //   display: false
  }
    
  const cardsReducer = (state=initialState, action) => {
      switch (action.type){
        // case "SET_cards":
        //   return {...state, cards: action.payload}
        // case "SET_SELECTED_PROJECT":
        //   return {...state, selectedProject: action.payload}
        // case "RESET_PROJECT":
        //   return {...state, selectedProject: clearProject}
        default:
          return {...state}
      }
  }
  
  export default cardsReducer
  