import React , {useState} from 'react'
import ImageViewer from 'react-simple-image-viewer';
//components
import PhotoCollection from './PhotoCollection';
const Photos = () => {
    const [photos , setPhotos] = useState([
        "https://b.zmtcdn.com/data/pictures/chains/1/50691/96f5b8c9334548312fe1175c711be46e.jpg",
        "https://b.zmtcdn.com/data/pictures/chains/4/18854314/412947ce6b25e2f39861351f8366b5f1.jpg",
        "https://b.zmtcdn.com/data/pictures/chains/4/18854314/3949688248c310ab7d05f3474567c2e8.jpg"
    ]);
    const [isMenuOpen , setIsMenuOpen] = useState(false);
    const [CurrentImg , setCurrentImg] = useState(0);
    const closeViewer = () => setIsMenuOpen(false);
    
    const openViewer = () => setIsMenuOpen(true );
    return (
        <>
            {isMenuOpen && (
        <ImageViewer
          src={ photos}
          currentIndex={ CurrentImg }
          disableScroll={ false }
        //   closeOnClickOutside={ true }
          onClose={ closeViewer }
        />
      )}
       <div className="flex flex-wrap gap-2">
            {
               photos.map((photo) => (
                   <PhotoCollection image={photo} openViewer = {openViewer}/>
               ))}
       </div>
        </>
    )
}

export default Photos
