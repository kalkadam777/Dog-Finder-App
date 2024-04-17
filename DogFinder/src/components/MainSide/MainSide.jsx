import './MainSide.css'
import search from '../../assets/search.svg'
import expand2 from '../../assets/expand2.svg'
import dog from '../../assets/dog.svg'



export const MainSide = ({getDogs, setInputText, inputRef, inputText}) => {
    return (
        <div className='main_container'>
            <div className='div1'>
                <div className='main_text'>Every Pet Deserves a Loving Home. <span className='adopt'>Adopt</span> a Pet Today</div>
                <div className='mini_text'>Browse our available animals and learn more about the adoption process. Together, we can <span className='short_text'>rescue, rehabilitate, and rehome pets in need.</span> Thank you for supporting our mission to bring joy to families through pet adoption.</div>
            </div>

            <div className='div2'>

                <div className='main_panel'>
                    <div className='dogs_menu'>
                        <img src={dog} alt="" />
                        <p>Dogs</p>
                        <img src={expand2} alt="" />
                    </div>

                    <div class="search-container">
                        <div class="search-box">
                            <input type="text" placeholder="Search dogs..." value={inputText} onChange={(event)=>setInputText(event.target.value)} className='input_search' ref={inputRef}/>
                        </div>

                        <div>
                            <button className='btn_search' onClick={getDogs}>
                                <img src={search} alt="" />
                                Search
                            </button>
                        </div>
                    </div>
                </div>

                <div className='name_breeds'>
                    <p>Frequent: <span className='underline_text'>germanshepherd</span>, <span className='underline_text'>husky</span>, <span className='underline_text'>retriever</span></p>
                </div>
            </div>            

        </div>
    )
}