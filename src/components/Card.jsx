function Card(props) {
    return (
        <div style={{ backgroundColor: props.bgcolor }} className="p-3 border rounded-md text-center text-2xl my-5 py-5 px-10 mx-5 grow">
            <p className="text-2xl font-medium">{props.title}</p>
            <p className="text-2xl font-medium">{props.subtitle}</p>
        </div>
    );
}

export default Card;
