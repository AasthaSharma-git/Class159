AFRAME.registerComponent("cursor-listener", {
  schema: {
    selectedItemId: { default: "", type: "string" },
  },
  init: function () {
    this.handleClickEvents();
    this.handleMouseEnterEvents();
    this.handleMouseLeaveEvents();
  },
  handlePlacesListState: function (state) {
    const id = this.el.getAttribute("id");
   
    const placesId = ["taj-mahal", "budapest", "new-york-city", "eiffel-tower"];
    if (placesId.includes(id)) {
      if(state=="enter"){
        const placeContainer = document.querySelector("#places-container");
       
        placeContainer.setAttribute("cursor-listener", {
          selectedItemId: id,
        });
        console.log(this.el)
        this.el.setAttribute("material", {
          color: "#D76B30",
          opacity: 1,
        });
      }
      if(state=="leave"){
        const placeContainer = document.querySelector("#places-container");
        placeContainer.setAttribute("cursor-listener", {
          selectedItemId: id,
        });
        this.el.setAttribute("material", {
          color: "#0077CC",
          opacity: 1,
        });
      }
     
    }
  },
  handleMouseEnterEvents: function () {
    //Cursor 'mouseenter' Events
    this.el.addEventListener("mouseenter", () => {
      this.handlePlacesListState("enter");
    });
  },
  handleMouseLeaveEvents: function () {
    //Cursor 'mouseleave' Events
    this.el.addEventListener("mouseleave", () => {
      this.handlePlacesListState("leave");
      
    });
  },
  handleClickEvents:function(){
      this.el.addEventListener("click",e=>{
      const placesContainer=document.querySelector("#places-container")
      const {state} = placesContainer.getAttribute("tour")
      
      if(state=="places-list"){
        const id = this.el.getAttribute("id")
        const placesId = ["taj-mahal", "budapest", "new-york-city", "eiffel-tower"];

        if(placesId.includes(id)){
          placesContainer.setAttribute("tour",{
            state:"view",selectedCard:id
          })
        }
      }
    })
  }
});
