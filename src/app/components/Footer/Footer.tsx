export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>© Covenant LX Wedding Photography 2016 - {currentYear}</footer>
  );
}
