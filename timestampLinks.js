

      var elements = document.getElementsByTagName("a");
      var timestampsLinks = [];
      for (var i = 0; i < elements.length; i++) {
        if (/[0-5][0-9][:][0-5][0-9]/.test(elements[i].innerHTML) ) {
          timestampsLinks.push(elements[i]);
        }
      }

    
    for (var i = 0; i < timestampsLinks.length; i++) {
        timestampsLinks[i].onclick = function() {
            
            var timestring = this.innerHTML.split(":");
            var seconds = timestring[0]*60+(+timestring[1]); // converting
            console.log(timestring)
            console.log(seconds)
            player.setCurrentTime(seconds);
        }
      }
