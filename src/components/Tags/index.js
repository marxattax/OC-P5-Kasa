function Tags(props) {
    const array = props.array
    return <span>
    {array.map((i) => (<span key={i} className="card-tags">{i}</span>))}
    </span>
}

export default Tags