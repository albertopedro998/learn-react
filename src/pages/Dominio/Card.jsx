export default function Card({children, className}) {
    
    return (
        <div className={"shadow-md rounded "+className}>
            {children}
        </div>
    )
}