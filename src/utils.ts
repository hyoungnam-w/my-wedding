export const getInViewFadeInStyle = (inView: boolean) => {
  return `transition-opacity duration-1000 ${
    inView ? "opacity-100" : "opacity-0"
  }`;
};
