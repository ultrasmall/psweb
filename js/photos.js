(function(html) {
const id = document.currentScript.getAttribute('data-photo-id');
const url = document.currentScript.getAttribute('data-photo-url');
const target = document.currentScript.getAttribute('data-target-id');
const container = document.querySelector(`#${target}`);
container.innerHTML = html;
openPhoto(id, url);
lazyload();
})(`
<li class="item " id="4" style="background-image: url('/psweb/photos/tint/4-65ba1d.jpg')" title="4">
  <img class="lazyload" data-src="/psweb/photos/thumbnail/4-ccf4df.jpg" src="/psweb/photos/tint/4-65ba1d.jpg" height="5175" width="7758" />
  <span class="full">
    <span style="background-image: url('/psweb/photos/large/4-686656.jpg')"></span>
  </span>
  <a class="open" href="/psweb/4" data-target="4">Open</a>
  <a class="close" href="/psweb/">Close</a>
  <!-- Here up -->
  <a href="/psweb/2" data-target="2" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/3200</li>
    <li><span class="aperture"><em>f</em>/</span>2.0</li>
	</ul> -->
</li>
<li class="item " id="2" style="background-image: url('/psweb/photos/tint/2-65ba1d.jpg')" title="2">
  <img class="lazyload" data-src="/psweb/photos/thumbnail/2-ccf4df.jpg" src="/psweb/photos/tint/2-65ba1d.jpg" height="6778" width="4521" />
  <span class="full">
    <span style="background-image: url('/psweb/photos/large/2-686656.jpg')"></span>
  </span>
  <a class="open" href="/psweb/2" data-target="2">Open</a>
  <a class="close" href="/psweb/">Close</a>
  <!-- Here up -->
  <a href="/psweb/4" data-target="4" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/psweb/6" data-target="6" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/160</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="6" style="background-image: url('/psweb/photos/tint/6-65ba1d.jpg')" title="6">
  <img class="lazyload" data-src="/psweb/photos/thumbnail/6-ccf4df.jpg" src="/psweb/photos/tint/6-65ba1d.jpg" height="7952" width="5304" />
  <span class="full">
    <span style="background-image: url('/psweb/photos/large/6-686656.jpg')"></span>
  </span>
  <a class="open" href="/psweb/6" data-target="6">Open</a>
  <a class="close" href="/psweb/">Close</a>
  <!-- Here up -->
  <a href="/psweb/2" data-target="2" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/psweb/5" data-target="5" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/4000</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="5" style="background-image: url('/psweb/photos/tint/5-65ba1d.jpg')" title="5">
  <img class="lazyload" data-src="/psweb/photos/thumbnail/5-ccf4df.jpg" src="/psweb/photos/tint/5-65ba1d.jpg" height="5974" width="3985" />
  <span class="full">
    <span style="background-image: url('/psweb/photos/large/5-686656.jpg')"></span>
  </span>
  <a class="open" href="/psweb/5" data-target="5">Open</a>
  <a class="close" href="/psweb/">Close</a>
  <!-- Here up -->
  <a href="/psweb/6" data-target="6" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/psweb/1" data-target="1" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/4000</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="1" style="background-image: url('/psweb/photos/tint/1-65ba1d.jpg')" title="1">
  <img class="lazyload" data-src="/psweb/photos/thumbnail/1-ccf4df.jpg" src="/psweb/photos/tint/1-65ba1d.jpg" height="7690" width="5129" />
  <span class="full">
    <span style="background-image: url('/psweb/photos/large/1-686656.jpg')"></span>
  </span>
  <a class="open" href="/psweb/1" data-target="1">Open</a>
  <a class="close" href="/psweb/">Close</a>
  <!-- Here up -->
  <a href="/psweb/5" data-target="5" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/psweb/3" data-target="3" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/8000</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="3" style="background-image: url('/psweb/photos/tint/3-65ba1d.jpg')" title="3">
  <img class="lazyload" data-src="/psweb/photos/thumbnail/3-ccf4df.jpg" src="/psweb/photos/tint/3-65ba1d.jpg" height="5185" width="7774" />
  <span class="full">
    <span style="background-image: url('/psweb/photos/large/3-686656.jpg')"></span>
  </span>
  <a class="open" href="/psweb/3" data-target="3">Open</a>
  <a class="close" href="/psweb/">Close</a>
  <!-- Here up -->
  <a href="/psweb/1" data-target="1" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/psweb/7" data-target="7" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/1250</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
<li class="item " id="7" style="background-image: url('/psweb/photos/tint/7-65ba1d.jpg')" title="7">
  <img class="lazyload" data-src="/psweb/photos/thumbnail/7-ccf4df.jpg" src="/psweb/photos/tint/7-65ba1d.jpg" height="6276" width="4186" />
  <span class="full">
    <span style="background-image: url('/psweb/photos/large/7-686656.jpg')"></span>
  </span>
  <a class="open" href="/psweb/7" data-target="7">Open</a>
  <a class="close" href="/psweb/">Close</a>
  <!-- Here up -->
  <a href="/psweb/3" data-target="3" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <!-- <ul class="meta">
    <li>ILCE-7RM3</li>
    <li>1/30</li>
    <li><span class="aperture"><em>f</em>/</span>1.8</li>
	</ul> -->
</li>
`);