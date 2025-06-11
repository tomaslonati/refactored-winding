
/**
 * Helper function to get the correct asset path considering Vite's base URL
 * @param {string} assetPath - The asset path relative to public folder (e.g., 'assets/brand/logo.png')
 * @returns {string} - The complete asset URL
 */
export const getAssetUrl = (assetPath) => {
  // Remove leading slash if present
  const cleanPath = assetPath.startsWith('/') ? assetPath.slice(1) : assetPath;
  
  // Use Vite's base URL
  return `${import.meta.env.BASE_URL}${cleanPath}`;
};

// Pre-defined asset paths for common images
export const ASSETS = {
  brand: {
    logo: getAssetUrl('assets/brand/shortcut.png'),
    logoWhite: getAssetUrl('assets/brand/blanco.png'),
  },
  home: {
    electricidadIcon: getAssetUrl('assets/home/electricidad-icon.png'),
    ahorroIcon: getAssetUrl('assets/home/ahorro-icon.png'),
    solucionesIcon: getAssetUrl('assets/home/soluciones-icon.png'),
    ahorroFacIcon: getAssetUrl('assets/home/ahorro-fac-icon.png'),
    locationIcon: getAssetUrl('assets/home/locationIcon.png'),
    reconocimientoIcon: getAssetUrl('assets/home/reconocimiento-icon.png'),
    genImg: getAssetUrl('assets/home/gen.png'),
    sherpaImg: getAssetUrl('assets/home/sherpa.png'),
    argFlag: getAssetUrl('assets/home/arg_flag.png'),
    mantenimientoCard: getAssetUrl('assets/home/mantenimiento-card.png'),
    monitoreoCard: getAssetUrl('assets/home/monitoreo-card.png'),
    instalacionCard: getAssetUrl('assets/home/instalacion-card.png'),
    logos: {
      estela: getAssetUrl('assets/home/04_estela.png'),
      glaciarium: getAssetUrl('assets/home/04_glaciarium.png'),
      hieloAv: getAssetUrl('assets/home/04_hielo_av.png'),
      laLechuza: getAssetUrl('assets/home/04_la_lechuza.png'),
      muni: getAssetUrl('assets/home/04_muni.png'),
      nibepo: getAssetUrl('assets/home/04_nibepo.png'),
      oca: getAssetUrl('assets/home/04_oca.png'),
      south: getAssetUrl('assets/home/04_south.png'),
      tecnolab: getAssetUrl('assets/home/04_tecnolab.png'),
    },
    gallery: {
      img1: getAssetUrl('assets/home/gallery/1.png'),
      img2: getAssetUrl('assets/home/gallery/2.png'),
      img3: getAssetUrl('assets/home/gallery/3.png'),
      img4: getAssetUrl('assets/home/gallery/4.png'),
      img5: getAssetUrl('assets/home/gallery/5.png'),
      img6: getAssetUrl('assets/home/gallery/6.png'),
      img7: getAssetUrl('assets/home/gallery/7.png'),
      img8: getAssetUrl('assets/home/gallery/8.png'),
      img10: getAssetUrl('assets/home/gallery/10.png'),
      img11: getAssetUrl('assets/home/gallery/11.png'),
      img12: getAssetUrl('assets/home/gallery/12.png'),
      img13: getAssetUrl('assets/home/gallery/13.png'),
      img14: getAssetUrl('assets/home/gallery/14.png'),
      img15: getAssetUrl('assets/home/gallery/15.png'),
      img17: getAssetUrl('assets/home/gallery/17.png'),
      img19: getAssetUrl('assets/home/gallery/19.png'),
      img20: getAssetUrl('assets/home/gallery/20.png'),
      img21: getAssetUrl('assets/home/gallery/21.png'),
      img22: getAssetUrl('assets/home/gallery/22.png'),
    }
  },
  common: {
    rightArrow: getAssetUrl('assets/common/right.svg'),
  }
};
