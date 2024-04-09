import React from "react";
import CardX from "../component/card";
import Footer from "../component/footer";
import SearchBar from "../component/searchbar";
import TitleBar from "../component/Titlebar";
import './verse.css';

const datas = [{'link':'https://pixabay.com/photos/holi-girl-indian-india-dance-fun-2416686/','title':'India'},
            {'link':'https://pixabay.com/photos/china-antiquity-maiden-1572774/','title':'China'},
            {'link':'https://pixabay.com/photos/kimono-woman-umbrella-parasol-1822520/','title':'Japan'},
            {'link':'https://pixabay.com/photos/france-lake-mountain-water-nature-4865938/','title':'France'},
            {'link':'https://pixabay.com/photos/berlin-pantomime-action-artist-4928453/','title':'Germany'},
            {'link':'https://pixabay.com/photos/musician-guitarist-streets-people-1284394/','title':'Poland'},
            {'link':'https://pixabay.com/photos/party-parade-people-spain-7767054/','title':'Spain'},
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