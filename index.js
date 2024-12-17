    let numberSelected = null;
    let tileSelected = null;
    let count = 0;

    let board = [
        "--74916-5",
        "2---6-3-9",
        "-----7-1-",
        "-586----4",
        "--3----9-",
        "--62--187",
        "9-4-7---2",
        "67-83----",
        "81--45---"
    ]

    let solution = [
        "387491625",
        "241568379",
        "569327418",
        "758619234",
        "123784596",
        "496253187",
        "934176852",
        "675832941",
        "812945763"
    ]
    
    window.onload = function(){
        setGame();
    }

    function setGame(){
        for(let i = 1; i <= 9 ; i++){
            let number = document.createElement("div");
            number.id = i;
            number.innerText = i;
            number.addEventListener("click", selectNumber)
            number.classList.add("number");
            document.getElementById("game--numbers").appendChild(number);
        }

        for(let j = 0; j < 9; j++){
            for(let k = 0; k < 9; k++){
                let tile = document.createElement("div");
                tile.id = j.toString() + "-" + k.toString();
                if(board[j][k]!="-"){
                    tile.innerText = board[j][k];
                    tile.classList.add("tile-start");
                }
                if(j==2||j==5)
                    tile.classList.add("horizontal-line");
                if(k==2||k==5)
                    tile.classList.add("vertical-line");
                tile.addEventListener("click", selectTile)
                tile.classList.add("tile");
                document.getElementById("game--board").appendChild(tile);
            }
        }
    }

    function selectNumber(){
        if(numberSelected != null){
            numberSelected.classList.remove("number-selected");
        }
        numberSelected = this;
        numberSelected.classList.add("number-selected");

    }

    function selectTile(){
        let gameStatus = document.getElementById("game--status");

        if(numberSelected){
            this.innerText = numberSelected.id;
            gameStatus.innerText = "";
        }
        else{
            gameStatus.innerHTML = "Please select a number!";
        }

        let coords = this.id.split("-");
        let r = parseInt(coords[0]);
        let c = parseInt(coords[1]);
        if(solution[r][c] == numberSelected.id){
            count = count + 1
        }
        if(count == 46){
            gameStatus.innerText = "You Won!";
        }
    }
