function init() {
    const playerTitle = document.querySelector(".playerTitle");
    const rematchBtn = document.querySelector(".rematch");
    const items = document.querySelectorAll(".item");
    const gridArray = Array.from(items);
    let tracking = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let currentPlayer = "player1";
  
    // looping through all the board items.
    items.forEach((item) =>
      item.addEventListener("click", (e) => {
        // Player Move
        const index = gridArray.indexOf(e.target);
        if (
          items[index].classList.contains("player1") ||
          items[index].classList.contains("computer")
        ) {
          return;
        }
  
        items[index].classList.add("player1");
        const spliceNr = tracking.indexOf(index + 1);
        // slicing out the move from the tracking list
        tracking.splice(spliceNr, 1);
  
        // win check for player
        if (winCheck("player1", items)) {
          playerTitle.innerHTML = "Player1 Win!!🎆🎇";
          document.body.classList.add("over");
          return;
        }
  
        // check for draw
        if (tracking.length === 0) {
          playerTitle.innerHTML = "You are Tuff, It's Draw";
          document.body.classList.add("over");
          console.log("Nothing Left");
          return;
        }
  
        // Computer Move
        console.log("computer move");
        const random = Math.floor(Math.random() * tracking.length);
        const computerIndex = tracking[random];
        items[computerIndex - 1].classList.add("computer");
  
        // Splicing out the move from the tracking list
        tracking.splice(random, 1);
  
        // win check for the computer
        if (winCheck("computer", items)) {
          playerTitle.innerHTML = "Computer Win!!🎆🎇";
          document.body.classList.add("over");
          return;
        }
      })
    );
  
    // rematch reload event
    rematchBtn.addEventListener("click", () => {
      location.reload();
    });
  }
  
  // win check function
  function winCheck(player, items) {
    // let allItems = items;
    function check(pos1, pos2, pos3) {
      console.log(items);
      if (
        items[pos1].classList.contains(player) &
        items[pos2].classList.contains(player) &
        items[pos3].classList.contains(player)
      ) {
        return true;
      } else {
        return false;
      }
    }
  
    if (check(0, 3, 6)) return true;
    else if (check(1, 4, 7)) return true;
    else if (check(2, 5, 8)) return true;
    else if (check(0, 1, 2)) return true;
    else if (check(3, 4, 5)) return true;
    else if (check(6, 7, 8)) return true;
    else if (check(0, 4, 8)) return true;
    else if (check(2, 4, 6)) return true;
  }
  
  // initializing the game
  init();
  