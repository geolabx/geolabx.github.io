function randomBgColorEachId() {
    var a;
    do {
        a = 100*Math.random();
    } while(a>256);
    console.log(Math.round(a));

    // Searching Id in element
    var allElements = document.getElementsByTagName("*");
    var allIds = [];
    for (var i = 0, n = allElements.length; i < n; ++i) {
        var el = allElements[i];
        if (el.id) { allIds.push(el.id); }
    }
    
    // Put border line in each id with random color
    for (var i=0; i<allIds.length; i++) {
        // console.log(allIds[i]);
        document.getElementById(allIds[i]).setAttribute("style","border: 1px solid " + a);
    }
}