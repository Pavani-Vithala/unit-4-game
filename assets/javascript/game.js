<!-- Controls (Superpower Visibility) -->
          <div id="visibilityControls" class="card">
            <h4 class="card-header">Superpowers - Invisiblity!</h4>
            <div class="card-body">
              <div class="text-center">
                <button class="btn btn-dark btn-lg vis-button">
                  <span class="fa fa-eye"></span> Visible</button>
                <button class="btn btn-info btn-lg invis-button">
                  <span class="fa fa-eye-slash"></span> Invisible</button>
              </div>
            </div>
          </div>

          <!-- Controls (Stretch) -->
          <div id="stretchControls" class="card">
            <h4 class="card-header">Superpowers - Stretch!</h4>
            <div class="card-body">
              <div class="text-center">
                <button class="btn btn-dark btn-lg unstretch-btn">
                  <span class="fa fa-compress"></span> Normal</button>
                <button class="btn btn-primary btn-lg stretch-btn">
                  <span class="fa fa-expand"></span> Stretch</button>
              </div>
            </div>
          </div>

          <!-- Controls (Superpower Move Controls) -->
          <div id="moveControls" class="card">
            <h4 class="card-header">Move Controls</h4>
            <div class="card-body">
              <div class="text-center mb-1">
                <button class="btn btn-dark btn-lg fa fa-arrow-up up-button">Up</button>
              </div>
              <div class="text-center">
                <button class="btn btn-dark btn-lg fa fa-arrow-left left-button">Left</button>
                <button class="btn btn-dark btn-lg fa fa-arrow-down down-button">Down</button>
                <button class="btn btn-dark btn-lg fa fa-arrow-right right-button">Right</button>
              </div>
              <br>
              <div class="text-center">
                <button class="btn btn-dark btn-lg back-button">
                  <span class="fa fa-comment"></span> Go Planet!</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Card (Captain Planet Hero)-->
        <div class="col-lg-6">

          <!-- Captain Planet Image -->
          <img src="assets/captain-planet.jpg" alt="" class="img captain-planet" style="position:absolute; top:50px; left: 80px; z-index: -20; height: 300px">
        </div>
      </div>
    </div>

    <script>

      // JavaScript function that wraps everything
      $(document).ready(function() {

        var captainPlanet = $(".captain-planet");

        // Gets Link for Theme Song
        var audioElement = document.createElement("audio");
        audioElement.setAttribute("src", "assets/captainplanet24.mp3");

        // Theme Button
        $(".theme-button").on("click", function() {
          audioElement.play();
        });
        $(".pause-button").on("click", function() {
          audioElement.pause();
        });

        // Size Buttons
        $(".normal-button").on("click", function() {
          captainPlanet.animate({ height: "300px" });
        });
        $(".grow-button").on("click", function() {
          captainPlanet.animate({ height: "500px" });
        });
        $(".shrink-button").on("click", function() {
          captainPlanet.animate({ height: "100px" });
        });

        // Visibility Buttons
        $(".vis-button").on("click", function() {
          captainPlanet.animate({ opacity: "1" });
        });
        $(".invis-button").on("click", function() {
          captainPlanet.animate({ opacity: "0.05" });
        });

        // Stretch Buttons
        $(".stretch-btn").on("click", function() {
          captainPlanet.animate({ height: "1000px", width: "200px" });
        });
        $(".unstretch-btn").on("click", function() {
          captainPlanet.animate({ height: "300px", width: "450px" });
        });

        // Move Buttons
        $(".up-button").on("click", function() {
          captainPlanet.animate({ top: "-=200px" }, "normal");
        });
        $(".down-button").on("click", function() {
          captainPlanet.animate({ top: "+=200px" }, "normal");
        });
        $(".left-button").on("click", function() {
          captainPlanet.animate({ left: "-=200px" }, "normal");
        });
        $(".right-button").on("click", function() {
          captainPlanet.animate({ left: "+=200px" }, "normal");
        });
        $(".back-button").on("click", function() {
          captainPlanet.animate({ top: "50px", left: "80px" }, "fast");
        });

        // Keyboard move controls
        $(document).keyup(function(e) {
          switch (e.which) {

          // Move Buttons (Keyboard Down)
          case 40:
            captainPlanet.animate({ top: "+=200px" }, "normal");
            break;

            // Move Buttons (Keyboard Right)
          case 39:
            captainPlanet.animate({ left: "+=200px" }, "normal");
            break;

            // Move Buttons (Keyboard Up)
          case 38:
            captainPlanet.animate({ top: "-=200px" }, "normal");
            break;

            // Move Buttons (Keyboard Left)
          case 37:
            captainPlanet.animate({ left: "-=200px" }, "normal");
            break;

          default:
            break;
          }
        });
      });

    </script>