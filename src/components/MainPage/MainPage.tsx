import './MainPage.css';
import mainImage from "../../images/mainImage.png"

function MainPage() {
    return (
        <div className='main-page'>
            <div>
                 <div>
                    <h1>Rick and Morty</h1>
                    <p>The show revolves around the adventures of the members of the Smith household, which consists of parents Jerry and Beth, their children Summer and Morty, and Beth's father, Rick Sanchez, who lives with them as a guest. According to Justin Roiland, the family lives outside of Seattle, Washington.The adventures of Rick and Morty, however, take place across an infinite number of realities, with the characters travelling to other planets and dimensions through portals and Rick's flying saucer.</p>
                </div>
                <div>
                    <button>Library</button>
                    <button>Quiz</button>
                </div>
                <div>
                    <img src={mainImage} alt="RickAndMorty" />
                </div>
            </div>

            <div>
                    
            </div>
        </div>
    )
}
export default MainPage;