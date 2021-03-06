describe("L.ScaleHandle", function() {
	var map,
		distortable,
		scaleHandle;

	beforeEach(function(done) {
		map = L.map(L.DomUtil.create('div', '', document.body)).setView([41.7896,-87.5996], 15);
		distortable = new L.DistortableImageOverlay('/examples/example.jpg', {
			corners: [
				new L.LatLng(41.7934, -87.6052),
				new L.LatLng(41.7934, -87.5852),
				new L.LatLng(41.7834, -87.5852),
				new L.LatLng(41.7834, -87.6052)
			]
		}).addTo(map);

		L.DomEvent.on(distortable._image, 'load', function() {
			scaleHandle = new L.ScaleHandle(distortable, 0);
			done();
		});
	});

	describe("_calculateScalingFactor", function() {
		it("Should return 1 when given the same latlng twice.", function() {
			var latlng = distortable._corners[0],
				scale = scaleHandle._calculateScalingFactor(latlng, latlng);

			expect(scale).to.equal(1);
		});
	});
});
