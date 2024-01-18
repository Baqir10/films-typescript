import Row from "../row";


const Grid = (props: {
    title: string; 
    array: Record<string,string>[][]; 
    bg: string; 
    txtcol:string;
}) => {

    const listItems = props.array.map((array) => {
        console.log(array);
        return  props.txtcol == 'text-white' ?
                <div>
                    <Row array={array} bg='bg-white' txtcol='text-black'/>
                </div> :
                <div>
                    <Row array={array} bg='bg-black' txtcol='text-white'/>
                </div>
    });
    
    return <div className={props.bg}>
        <div className={`heading w-full text-center ${props.txtcol}`}>{props.title}</div>
        {listItems}

    </div>
}

export default Grid