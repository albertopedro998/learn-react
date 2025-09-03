
function Images({image, title}){
    return (
        <>
            <img src={image} alt={title} />
            <h1 style={{color: "red"}}>
                Você não entendeu ainda?
            </h1>
        </>

    )
}

export default Images;