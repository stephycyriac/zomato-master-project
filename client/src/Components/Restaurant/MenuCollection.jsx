import React , {useState} from 'react'
import ImageViewer from 'react-simple-image-viewer';

const MenuCollection = (props) => {
    const [isMenuOpen , setIsMenuOpen] = useState(false);
    const [CurrentImg , setCurrentImg] = useState(0);
    const closeViewer = () => setIsMenuOpen(false);
    const openViewer = () => setIsMenuOpen(true );
     
    return (
        <>   
      {isMenuOpen && (
        <ImageViewer
          src={ props.image}
          currentIndex={ CurrentImg }
          disableScroll={ false }
        //   closeOnClickOutside={ true }
          onClose={ closeViewer }
        />
      )}
  

           <div className="w-32 h-32 md:w-56 h-56 flex flex-col" onClick={openViewer}>
            <div className="w-full h-full overflow-hidden ">
                <img src={props.image[0]}
                     alt="menu"
                     className="w-full h-full rounded-lg transform transition duration-400 hover:scale-110"/>
            </div>
            <div>
                <strong>{props.menuTitle}</strong>
                <h6>{props.pages}</h6>

            </div>
           </div>
        </> 
    )
}

export default MenuCollection
