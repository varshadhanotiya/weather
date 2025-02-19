function importAll() {
  const images = import.meta.glob('../assets/icons/*.png', { eager: true });
  return images;
}

export function weatherIcon(imageName) {
  const allWeatherIcons = importAll();

  // Access the image module directly and return its default export
  const iconPath = allWeatherIcons[`../assets/icons/${imageName}`];
  
  return iconPath ? iconPath.default : ''; // return the correct path or an empty string if not found
}












// function importAll() {
//   const images = import.meta.glob('../assets/icons/*.png', { eager: true });
//   return images;
// }

// export function weatherIcon(imageName) {
//   const allWeatherIcons = importAll();

//   return allWeatherIcons[`../assets/icons/${imageName}.png`];
// }
