import { useState, useEffect } from 'react';
import './PhotoGalleryBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';
import Loading from './loading';  // import your Loading component
import galleryManifest from '../../../../assets/json/galleryManifest.json';

function PhotoGalleryBody() {
  const [selectedFolder, setSelectedFolder] = useState('');
  const [visibleCount, setVisibleCount] = useState(20);
  const [loadedCount, setLoadedCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const folders = Object.keys(galleryManifest);
  const images = selectedFolder ? galleryManifest[selectedFolder] || [] : [];
  const visibleImages = images.slice(0, visibleCount);

  // Reset loading states when folder or visibleCount changes
    useEffect(() => {
        if (selectedFolder) {
            setLoading(true);
            setLoadedCount(0);  // Reset when changing folder
        } else {
            setLoading(false);
        }
    }, [selectedFolder]);


    // Stop loading when loadedCount equals visible images length
    useEffect(() => {
    if (loadedCount === visibleImages.length && visibleImages.length > 0) {
        setLoading(false);
    }
    }, [loadedCount, visibleImages.length]);

  // When all visible images loaded, stop loading
  useEffect(() => {
    console.log(`Loaded ${loadedCount} of ${visibleImages.length} images`);
    if (loadedCount === visibleImages.length && loading) {
      setLoading(false);
    }
  }, [loadedCount, visibleImages.length, loading]);

  const handleImageLoad = () => {
    setLoadedCount(prev => {
      const newCount = prev + 1;
      console.log(`Image loaded, total loaded now: ${newCount}`);
      return newCount;
    });
  };

  return (
    <div className="photo-gallery-container">
      <div className="photo-gallery-page-title">
        <h1> Photo Gallery </h1>
      </div>

      <FadeIn>
        <div className="photo-gallery-content">
          <select
            className="gallery-dropdown"
            onChange={(e) => {
              setSelectedFolder(e.target.value);
              setVisibleCount(20);
            }}
            value={selectedFolder}
          >
            <option value="">Select a folder</option>
            {folders.map(folder => (
              <option key={folder} value={folder}>
                {folder}
              </option>
            ))}
          </select>

          {loading && <Loading />}

          <div className="gallery-grid" style={{ opacity: loading ? 0.5 : 1 }}>
            {visibleImages.map((src, index) => (
              <img
                key={index}
                src={src}
                alt=""
                className="gallery-image"
                onLoad={handleImageLoad}
                onError={handleImageLoad} // count errors as loaded so loading stops
              />
            ))}
          </div>

          {!loading && visibleCount < images.length && (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
              <button
                className="show-more-button"
                onClick={() => setVisibleCount(visibleCount + 20)}
              >
                Show More
              </button>
            </div>
          )}

          <CenteredLogo />
        </div>
      </FadeIn>
    </div>
  );
}

export default PhotoGalleryBody;
