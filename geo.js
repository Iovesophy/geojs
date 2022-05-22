const geoFmt       = "GEO: %s,%s";
const geoErrFmt    = "GEO: error: %s: %s";
const geoTag       = "a";
const geoLink      = "https://maps.google.co.jp/maps?q=%s";
const geoHrefFmt   = "%s,%s";
const geoLinkStyle = "color: blue";
const geoWaitMess  = "loading...";

// region: geo
const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
}

function success(pos) {
    var crd = pos.coords;
    let data = sprintf(geoFmt,crd.latitude,crd.longitude);
    let href = sprintf(geoHrefFmt,crd.latitude,crd.longitude);
    rewordHref(data,href);
}

function rewordTitle(data) {
    const title = document.querySelector(geoTag);
    title.textContent = data;
}

function rewordHref(data,href) {
    const title = document.querySelector(geoTag);
    title.textContent = data;
    title.href = sprintf(geoLink,href);
    title.style = geoLinkStyle;
}

function error(err) {
    rewordTitle(sprintf(geoErrFmt,err.code,err.message));
}
// endregion: geo

function getGeoVal() {
    rewordTitle(geoWaitMess);
    navigator.geolocation.getCurrentPosition(success, error, options);
}

function buttonClick(){
    getGeoVal();
}
