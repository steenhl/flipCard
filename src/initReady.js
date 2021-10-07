class initReady {
  ready(fn) {
    let d = document;
    d.readyState === "loading"
      ? d.addEventListener("DOMContentLoaded", fn)
      : fn();
  }
}
export default initReady;
