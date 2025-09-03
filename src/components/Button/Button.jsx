import Text  from "../Text";
function Button({className, children, ...props}){

    return (
        <Text as="button" className={className? className : `bg-amber-50 cursor-pointer p-2 m-2 hover:bg-amber-100)`} {...props}>
            {children}
        </Text>
    )
}

export default Button