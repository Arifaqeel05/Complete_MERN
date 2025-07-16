type Props={
    item:{
        name:string;
        price:number;
    }
}

const Menuitem=(props:Props)=>{
    return(
        <>
        <h2>{props.item.name}</h2>
        <p>{props.item.price}</p>
        </>
    )

}
export default Menuitem;