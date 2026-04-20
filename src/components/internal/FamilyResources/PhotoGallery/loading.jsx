import React from 'react';
import './loading.css';
import { useTranslation } from '../../../../hooks/useTranslation';

export default function Loading() {
  const { t } = useTranslation('familyResources');

  return (
    <div className="loading-container">
      <div className="spinner" />
      <p>{t('photoGallery.loadingMessage')}</p>
    </div>
  );
}
