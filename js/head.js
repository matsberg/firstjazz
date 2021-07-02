  var metatag = document.createElement('meta');
  metatag.setAttribute('name', 'viewport');
  metatag.content = "width=device-width, initial-scale=1.0";
  document.getElementsByTagName('head')[0].appendChild(metatag);

 var linktag = document.createElement('link');
  linktag.setAttribute('rel', 'stylesheet');
  linktag.href = "css/style.css";
  document.getElementsByTagName('head')[0].appendChild(linktag);
