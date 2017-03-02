L.mapbox.accessToken = 'pk.eyJ1IjoicmlkaXhjciIsImEiOiJ1cDdkcU5BIn0.V-0Q657lFqPBZ3IaHGsDng';
/*
L.RotatedMarker = L.Marker.extend({
    options: {angle: 0},
    _setPos: function (pos) {
        L.Marker.prototype._setPos.call(this, pos);
        if (L.DomUtil.TRANSFORM) {
            // use the CSS transform rule if available
            this._icon.style[L.DomUtil.TRANSFORM] += ' rotate(' + this.options.angle + 'deg)';
        } else if (L.Browser.ie) {
            // fallback for IE6, IE7, IE8
            var rad = this.options.angle * L.LatLng.DEG_TO_RAD,
                    costheta = Math.cos(rad),
                    sintheta = Math.sin(rad);
            this._icon.style.filter += ' progid:DXImageTransform.Microsoft.Matrix(sizingMethod=\'auto expand\', M11=' +
                    costheta + ', M12=' + (-sintheta) + ', M21=' + sintheta + ', M22=' + costheta + ')';
        }
    }
});*/

//var map = L.mapbox.map('map', 'ridixcr.njkiadh3');
var map = L.mapbox.map({container: 'map',
    	style: 'mapbox://styles/mapbox/basic-v9',
	center: [-13.14629, -74.22053],
	zoom: 17
});
/*
var marker = L.rotatedMarker(new L.LatLng(-74.2204, -13.1436), {
    icon: L.icon({
        iconUrl: 'https://www.mapbox.com/maki/renders/airport-24@2x.png',
        iconSize: [24, 24],
    }),
    draggable: true
});*/

ab = document.getElementById('filter-ab'),
        c = document.getElementById('filter-c'),
        ad = document.getElementById('filter-ad'),
        e = document.getElementById('filter-e'),
        h = document.getElementById('filter-h'),
        j = document.getElementById('filter-j'),
        r = document.getElementById('filter-r'),
        u = document.getElementById('filter-u'),
        t = document.getElementById('filter-t'),
        w = document.getElementById('filter-w'),
        p = document.getElementById('filter-p'),
        none = document.getElementById('filter-nothing'),
        all = document.getElementById('filter-all');

map.attributionControl.setPosition('bottomleft');

var directions = L.mapbox.directions({
    profile: 'mapbox.walking'
});
var directionsLayer = L.mapbox.directions.layer(directions).addTo(map);
//var directionsInputControl = L.mapbox.directions.inputControl('inputs', directions).addTo(map);
var directionsErrorsControl = L.mapbox.directions.errorsControl('errors', directions).addTo(map);
var directionsRoutesControl = L.mapbox.directions.routesControl('routes', directions).addTo(map);
var directionsInstructionsControl = L.mapbox.directions.instructionsControl('instructions', directions).addTo(map);

ad.onclick = function (ex) {
    all.className = '';
    e.className = '';
    c.className = '';
    h.className = '';
    ab.className = '';
    u.className = '';
    r.className = '';
    none.className = '';
    t.className = '';
    w.className = '';
    p.className = '';
    this.className = 'active';

    map.featureLayer.setFilter(function (f) {
        return f.properties['title'] === 'PABELLON - AD'
                || f.properties['marker-symbol'] === 'warehouse'
                || f.properties['title'] === 'PERIMETRO';

    });
    return false;
};
ab.onclick = function (ex) {
    all.className = '';
    e.className = '';
    ad.className = '';
    c.className = '';
    h.className = '';
    j.className = '';
    u.className = '';
    r.className = '';
    t.className = '';
    w.className = '';
    p.className = '';
    none.className = '';
    this.className = 'active';
    map.featureLayer.setFilter(function (f) {
        return f.properties['title'] === 'PABELLON - AB'
                || f.properties['marker-symbol'] === 'warehouse'
                || f.properties['title'] === 'PERIMETRO';
    });
    return false;
};
c.onclick = function (ex) {
    all.className = '';
    e.className = '';
    ad.className = '';
    h.className = '';
    ab.className = '';
    j.className = '';
    u.className = '';
    none.className = '';
    r.className = '';
    t.className = '';
    w.className = '';
    p.className = '';
    this.className = 'active';
    map.featureLayer.setFilter(function (f) {
        return f.properties['title'] === 'PABELLON - C'
                || f.properties['marker-symbol'] === 'warehouse'
                || f.properties['title'] === 'PERIMETRO';
    });
    return false;
};
e.onclick = function (ex) {
    all.className = '';
    c.className = '';
    ad.className = '';
    h.className = '';
    ab.className = '';
    j.className = '';
    u.className = '';
    none.className = '';
    r.className = '';
    t.className = '';
    w.className = '';
    p.className = '';
    this.className = 'active';
    map.featureLayer.setFilter(function (f) {
        return f.properties['title'] === 'PABELLON - E'
                || f.properties['marker-symbol'] === 'warehouse'
                || f.properties['title'] === 'PERIMETRO';
    });
    return false;
};
h.onclick = function (ex) {
    all.className = '';
    c.className = '';
    e.className = '';
    ad.className = '';
    ab.className = '';
    j.className = '';
    u.className = '';
    none.className = '';
    r.className = '';
    t.className = '';
    w.className = '';
    p.className = '';
    this.className = 'active';
    map.featureLayer.setFilter(function (f) {        
        var c = (f.properties['title'] === 'PABELLON - H'
                || f.properties['marker-symbol'] === 'warehouse'
                || f.properties['title'] === 'PERIMETRO');
            if(c){
                f.properties['description']="FACULTAD DE MINAS, GEOLOGÍA Y CIVIL";
                f.properties['title']="PABELLÓN - H";
            }
        
        return c;
    });
    return false;
};
j.onclick = function (ex) {
    all.className = '';
    c.className = '';
    e.className = '';
    ad.className = '';
    h.className = '';
    ab.className = '';
    u.className = '';
    none.className = '';
    r.className = '';
    t.className = '';
    w.className = '';
    p.className = '';
    this.className = 'active';
    map.featureLayer.setFilter(function (f) {
        return f.properties['title'] === 'PABELLON -  J'
                || f.properties['marker-symbol'] === 'warehouse'
                || f.properties['title'] === 'PERIMETRO';
    });
    return false;
};
u.onclick = function (ex) {
    all.className = '';
    none.className = '';
    c.className = '';
    e.className = '';
    ad.className = '';
    h.className = '';
    ab.className = '';
    j.className = '';
    r.className = '';
    t.className = '';
    w.className = '';
    p.className = '';
    this.className = 'active';
    map.featureLayer.setFilter(function (f) {
        return f.properties['title'] === 'PABELLON - U'
                || f.properties['marker-symbol'] === 'warehouse'
                || f.properties['title'] === 'PERIMETRO';
    });
    return false;
};
r.onclick = function (ex) {
    all.className = '';
    c.className = '';
    e.className = '';
    ad.className = '';
    h.className = '';
    ab.className = '';
    u.className = '';
    j.className = '';
    t.className = '';
    w.className = '';
    p.className = '';
    none.className = '';
    this.className = 'active';
    map.featureLayer.setFilter(function (f) {
        return f.properties['title'] === 'PABELLON - R'
                || f.properties['marker-symbol'] === 'warehouse'
                || f.properties['title'] === 'PERIMETRO';
    });
    return false;
};
t.onclick = function (ex) {
    all.className = '';
    c.className = '';
    e.className = '';
    ad.className = '';
    h.className = '';
    ab.className = '';
    u.className = '';
    j.className = '';
    w.className = '';
    p.className = '';
    none.className = '';
    this.className = 'active';
    map.featureLayer.setFilter(function (f) {
        return f.properties['title'] === 'PABELLON - T'
                || f.properties['marker-symbol'] === 'warehouse'
                || f.properties['title'] === 'PERIMETRO';
    });
    return false;
};
w.onclick = function (ex) {
    all.className = '';
    c.className = '';
    e.className = '';
    ad.className = '';
    h.className = '';
    ab.className = '';
    u.className = '';
    j.className = '';
    t.className = '';
    p.className = '';
    none.className = '';
    this.className = 'active';
    map.featureLayer.setFilter(function (f) {
        return f.properties['title'] === 'PABELLON - W'
                || f.properties['marker-symbol'] === 'warehouse'
                || f.properties['title'] === 'PERIMETRO';
    });
    return false;
};
p.onclick = function (ex) {
    all.className = '';
    c.className = '';
    e.className = '';
    ad.className = '';
    h.className = '';
    ab.className = '';
    u.className = '';
    j.className = '';
    t.className = '';
    w.className = '';
    none.className = '';
    this.className = 'active';
    map.featureLayer.setFilter(function (f) {
        return f.properties['title'] === 'PABELLON - P'
                || f.properties['marker-symbol'] === 'warehouse'
                || f.properties['title'] === 'PERIMETRO';
    });
    return false;
};

all.onclick = function () {
    e.className = '';
    ad.className = '';
    ab.className = '';
    c.className = '';
    h.className = '';
    j.className = '';
    u.className = '';
    r.className = '';
    t.className = '';
    p.className = '';
    none.className = '';
    this.className = 'active';
    map.featureLayer.setFilter(function (f) {
        return true;
    });

    return false;
};
none.onclick = function (ex) {
    all.className = '';
    c.className = '';
    e.className = '';
    ad.className = '';
    h.className = '';
    ab.className = '';
    u.className = '';
    j.className = '';
    r.className = '';
    p.className = '';
    t.className = '';
    this.className = 'active';
    map.featureLayer.setFilter(function (f) {
        return false
                || f.properties['marker-symbol'] === 'warehouse'
                || f.properties['title'] === 'PERIMETRO';
    });
    return false;
};
var cssIcon = L.divIcon({
    className: 'css-icon',
    iconSize: [40, 40]

});

map.locate({
    enableHighAccuracy: true
});

map.on('locationfound', onLocationFound);

function onLocationFound(position) {
    var mycoor = position.latlng;
    var marker = L.marker([mycoor.lat, mycoor.lng], {icon: cssIcon});
    map.addLayer(marker);
    marker.bindPopup("UD. ESTA AQUÍ");
}
