set_theme(localStorage.getItem("background"),localStorage.getItem("white"),localStorage.getItem("black"),localStorage.getItem("blue"),localStorage.getItem("gray"),localStorage.getItem("invert"),localStorage.getItem("invert-hover"),localStorage.getItem("enable-color"),localStorage.getItem("brightness"),localStorage.getItem("hue-rotate"));

function set_theme(background, white, black, blue, gray, invert, inverthover, enablecolor, brightness, huerotate){
  var body = document.querySelector("body");
  document.body.style.setProperty("--background",background);
  document.body.style.setProperty("--white",white);
  document.body.style.setProperty("--black",black);
  document.body.style.setProperty("--blue",blue);
  document.body.style.setProperty("--gray",gray);
  document.body.style.setProperty("--invert",invert);
  document.body.style.setProperty("--invert-hover",inverthover);
  document.body.style.setProperty("--enable-color",enablecolor);
  document.body.style.setProperty("--brightness",brightness);
  document.body.style.setProperty("--hue-rotate",huerotate);

  localStorage.setItem("background",background);
  localStorage.setItem("white",white);
  localStorage.setItem("black",black);
  localStorage.setItem("blue",blue);
  localStorage.setItem("gray",gray);
  localStorage.setItem("invert",invert);
  localStorage.setItem("invert-hover",inverthover);
  localStorage.setItem("enable-color",enablecolor);
  localStorage.setItem("brightness",brightness);
  localStorage.setItem("hue-rotate",huerotate);
}