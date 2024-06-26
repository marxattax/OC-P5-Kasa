import '../../styles/depliant.css'

function Click() {
  const depliants = document.querySelectorAll(".depliant")
  for(const depliant of depliants) {
  const depliantTitle = depliant.querySelector(".depliant-title")
  const depliantContent = depliant.querySelector(".depliant-content")
  const depliantArrow = depliant.querySelector(".depliant-arrow")

    depliantTitle.onclick = function() {
      if(depliantContent.style.display == "block") {
          depliantContent.style.display = "none"
          depliantArrow.style = "transform:rotate(0deg);transition:300ms linear;"
      }
      else {
          depliantContent.style.display = "block"
          depliantArrow.style = "transform:rotate(-180deg);transition:300ms linear;"
      }
    }
  }
}

function Depliant(props) {
  const target = props.target
    return <div>
      <div className="depliant">

      <div className="depliant-title" ref={Click}>
        {props.children[0]}
        <span className="depliant-arrow">^</span>
      </div>
      <div className="depliant-content">
        {props.children[1]}
      </div>
    </div>
  </div>
}

export default Depliant