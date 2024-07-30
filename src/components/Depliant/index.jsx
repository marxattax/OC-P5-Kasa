import '../../styles/depliant.css'


function Click() {
  const depliants = document.querySelectorAll(".depliant")
  for(const depliant of depliants) {
  const depliantTitle = depliant.querySelector(".depliant-title")
  const depliantContent = depliant.querySelector(".depliant-content")
  const depliantArrow = depliant.querySelector(".depliant-arrow")

    depliantTitle.onclick = function() {
      if(depliantContent.style.visibility === "visible") {
          depliantContent.style = "visibility: hidden; height:0; transform: translateY(-30%); transition: all 300ms linear;"
          depliantArrow.style = "transform:rotate(45deg);transition:300ms linear;"
          depliantTitle.style = "border-radius: 10px;"
      }
      else {
          depliantContent.style = "visibility: visible; height: 100%; transform: translateY(0); transition: all 300ms linear;"
          depliantArrow.style = "top: 17px;transform:rotate(-135deg);transition:300ms linear;"
          depliantTitle.style = "border-radius: 10px 10px 0 0"
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