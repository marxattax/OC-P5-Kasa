import '../../styles/depliant.css'


function Click() {
  const depliants = document.querySelectorAll(".depliant")
  for(const depliant of depliants) {
  const depliantTitle = depliant.querySelector(".depliant-title")
  const depliantContent = depliant.querySelector(".depliant-content")
  const depliantArrow = depliant.querySelector(".depliant-arrow")

    depliantTitle.onclick = function() {
      if(depliantContent.style.height === "100%") {
          depliantContent.style.height = "0"
          depliantContent.style.opacity = "0"
          depliantContent.style.padding = "0"
          depliantArrow.style = "transform:rotate(45deg);transition:300ms linear;"
      }
      else {
          depliantContent.style.height = "100%"
          depliantContent.style.opacity = "1"
          depliantContent.style.padding = "15px"
          depliantArrow.style = "top: 17px;transform:rotate(-135deg);transition:300ms linear;"
      }
    }
  }
}

function Depliant(props) {
    return <div>
      <div className="depliant">

      <div className="depliant-title" ref={Click}>
        {props.children[0]}
        <span className="depliant-arrow"></span>
      </div>
      <div className="depliant-content">
        {props.children[1]}
      </div>
    </div>
  </div>
}

export default Depliant