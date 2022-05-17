export default function lockBody(isLocked) {
  isLocked === true
    ? (document.getElementsByTagName("body")[0].style.overflow = "hidden")
    : (document.getElementsByTagName("body")[0].style.overflow = "scroll");
}
