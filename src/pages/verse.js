import React from "react";
import CardX from "../component/card";
import Footer from "../component/footer";
import SearchBar from "../component/searchbar";
import TitleBar from "../component/Titlebar";
import './verse.css';

const datas = [{'link':'https://cdn.pixabay.com/photo/2017/06/18/18/26/holi-2416686_1280.jpg','title':'India'},
            {'link':'https://cdn.pixabay.com/photo/2016/08/05/17/43/china-1572774_1280.jpg','title':'China'},
            {'link':'https://cdn.pixabay.com/photo/2016/11/14/03/43/kimono-1822520_1280.jpg','title':'Japan'},
            {'link':'https://cdn.pixabay.com/photo/2020/02/20/21/15/france-4865938_1280.jpg','title':'France'},
            {'link':'https://cdn.pixabay.com/photo/2020/03/13/16/29/berlin-4928453_1280.jpg','title':'Germany'},
            {'link':'https://cdn.pixabay.com/photo/2016/03/27/21/44/musician-1284394_1280.jpg','title':'Poland'},
            {'link':'https://cdn.pixabay.com/photo/2023/02/04/12/22/party-7767054_1280.jpg','title':'Spain'},
            // {'link':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz2vsqpqMG-LPUdN6idO0sipjhMxYklHnE7ENjC8BQZgNCt3SIqvW7WJDRX86ni3DxnXY&usqp=CAU','title':'Israel'},
            // {'link':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz2vsqpqMG-LPUdN6idO0sipjhMxYklHnE7ENjC8BQZgNCt3SIqvW7WJDRX86ni3DxnXY&usqp=CAU','title':'Turkey'},
            // {'link':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz2vsqpqMG-LPUdN6idO0sipjhMxYklHnE7ENjC8BQZgNCt3SIqvW7WJDRX86ni3DxnXY&usqp=CAU','title':'Somalia'},
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