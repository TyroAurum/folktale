import React from "react";
import CardX from "../component/card";
import Footer from "../component/footer";
import SearchBar from "../component/searchbar";
import TitleBar from "../component/Titlebar";
import './verse.css';

const datas = [{'link':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz2vsqpqMG-LPUdN6idO0sipjhMxYklHnE7ENjC8BQZgNCt3SIqvW7WJDRX86ni3DxnXY&usqp=CAU','title':'India'},
            {'link':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz2vsqpqMG-LPUdN6idO0sipjhMxYklHnE7ENjC8BQZgNCt3SIqvW7WJDRX86ni3DxnXY&usqp=CAU','title':'China'},
            {'link':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz2vsqpqMG-LPUdN6idO0sipjhMxYklHnE7ENjC8BQZgNCt3SIqvW7WJDRX86ni3DxnXY&usqp=CAU','title':'Japan'},
            {'link':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz2vsqpqMG-LPUdN6idO0sipjhMxYklHnE7ENjC8BQZgNCt3SIqvW7WJDRX86ni3DxnXY&usqp=CAU','title':'France'},
            {'link':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz2vsqpqMG-LPUdN6idO0sipjhMxYklHnE7ENjC8BQZgNCt3SIqvW7WJDRX86ni3DxnXY&usqp=CAU','title':'Germany'},
            {'link':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz2vsqpqMG-LPUdN6idO0sipjhMxYklHnE7ENjC8BQZgNCt3SIqvW7WJDRX86ni3DxnXY&usqp=CAU','title':'Poland'},
            {'link':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz2vsqpqMG-LPUdN6idO0sipjhMxYklHnE7ENjC8BQZgNCt3SIqvW7WJDRX86ni3DxnXY&usqp=CAU','title':'Spain'},
            {'link':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz2vsqpqMG-LPUdN6idO0sipjhMxYklHnE7ENjC8BQZgNCt3SIqvW7WJDRX86ni3DxnXY&usqp=CAU','title':'Israel'},
            {'link':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz2vsqpqMG-LPUdN6idO0sipjhMxYklHnE7ENjC8BQZgNCt3SIqvW7WJDRX86ni3DxnXY&usqp=CAU','title':'Turkey'},
            {'link':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz2vsqpqMG-LPUdN6idO0sipjhMxYklHnE7ENjC8BQZgNCt3SIqvW7WJDRX86ni3DxnXY&usqp=CAU','title':'Somalia'},
]


const Verse = ()=>{
    return(
            <div className="verse-page">
                <TitleBar />
                <h2 className="verse-title">Explore Fables from around the world.</h2>
                <hr id="hr-1"/>
                <hr id="hr-2"/>
                <SearchBar />
                <div className="leafygreen-ui-1v4ednr">
                    {datas.map((data)=>(<CardX cardDetails={data} />))}
                </div>
                <Footer />
                
            </div>
    )
}

export default Verse;