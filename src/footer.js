export function footerYear() {
  let footerYear = "@ 2022 - " + new Date().getFullYear();
  document.getElementById("footeryear").innerHTML = footerYear;
}
