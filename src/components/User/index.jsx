function User(props) {
    const target = props.target
    return <div className={props.className}>
        <span className="user-name">{target.name}</span>
        <img src={target.picture} alt={target.name} />
        </div>
}

function split() {
    const name = document.querySelector(".user-name").innerText
        name.split(' ').join('<br />')
        console.log(name)
}

export default User