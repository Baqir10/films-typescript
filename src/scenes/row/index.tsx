import Element from "../element";

const Row = (props: {
    array:Record<string,string>[];
    bg:string;
    txtcol:string;
}) => {
    let fir : Record<string,string> = props.array[0];
    let sec : Record<string,string> = (props.array.length > 1) ? props.array[1] : props.array[0];
    

    return <div className="Row"> 
            <div className="rowEle py-8">
                <Element title = {fir.title} url = {fir.url} dir={fir.dir} bg={props.bg} txtcol={props.txtcol}/>
            </div>
            <div className="rowEle py-8">
                {props.array.length > 1  ? <Element title = {sec.title} url = {sec.url} dir={sec.dir} bg={props.bg} txtcol={props.txtcol}/> : <div/> }
            </div>
    </div>
    
}

export default Row;