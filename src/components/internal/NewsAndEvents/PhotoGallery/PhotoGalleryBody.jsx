import { useState } from 'react';
import './PhotoGalleryBody.css';
import FadeIn from '../../../fadeinsection/FadeIn';
import CenteredLogo from '../../../CenteredLogo';
import galleryManifest from '../../../../assets/json/galleryManifest.json';

function PhotoGalleryBody() {
  const [selectedFolder, setSelectedFolder] = useState('');
  const [visibleCount, setVisibleCount] = useState(20);

  const folders = Object.keys(galleryManifest);
  const images = selectedFolder ? galleryManifest[selectedFolder] || [] : [];

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

          <div className="gallery-grid">
            {images.slice(0, visibleCount).map((src, index) => (
              <img key={index} src={src} alt="" className="gallery-image" />
            ))}
          </div>

          {visibleCount < images.length && (
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
