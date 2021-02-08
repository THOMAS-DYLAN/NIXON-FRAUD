let nixonVotes = 0;
let governVotes = 0;
let nixonScam = 0;

function voteNixon() {
    nixonVotes += 3;
}
let main = document.getElementById("main");
nixonButton = document.createElement("button");
nixonButton.id = "nixonButton";
voteButtonChecker = document.createElement("button");
voteButtonChecker.id = "voteButton";
main.appendChild(voteButtonChecker);
voteButtonChecker.textContent = "SEE VOTES";
flag = "";
flag1 = document.createElement("div");
main.appendChild(flag1);
flag1.id = "star";
for (i = 0; i < 3; i++) {
    flag = document.createElement("div");
    main.appendChild(flag);
    flag.id = "line";
}
main.addEventListener("mousemove", function() {
    nixonVotes += 2;
    governVotes++;
    console.log("NIXON " + nixonVotes)
    console.log("GOVERN " + governVotes)
})
window.addEventListener('load', (event) => {
    nixonVotes += 500000;
    governVotes = nixonVotes / 5;
});
nixonButton.textContent = ("VOTE FOR NIXON");
main.appendChild(nixonButton);
nixonButton.addEventListener("mouseover", function() {
    nixonVotes += nixonScam * 2;
    governVotes++;
    nixonScam += 5;
});
nixonButton.addEventListener("mouseleave", function() {
    nixonVotes += 5;
});
nixonButton.addEventListener("click", function() {
    nixonVotes += nixonScam;
    nixonScam += 2;
    nixonButton.textContent = "That's right... walk awaaaay."
})

function changeBack() {
    document.getElementById("load").style.backgroundImage = "url('flag/Nixon.jpg')";
}
main.addEventListener("contextmenu", changeBack)

function governButtonFunction() {
    nixonVotes += 2,
        governVotes += 1;
    governButton.removeEventListener("click", governButtonFunction);
    governButton.textContent = ("YOU TOTALLY VOTED :)");
}
let governButton = document.createElement("button")
governButton.addEventListener("click", governButtonFunction)
governButton.textContent = ("VOTE GOVERN LOSER");
governButton.id = "governButton";
main.appendChild(governButton);
governButton.addEventListener("mouseover", function() {
    nixonVotes += 5 + nixonScam;
    governVotes++;
    nixonScam += 2;
});
setInterval(simulate, 100);

function simulate() {
    nixonVotes += 5;
    governVotes++;
}
setInterval(check, 1)

function check() {}
let multX = 1
let multY = 1
voteButtonChecker.onmousemove = function(event) {
    let random = Math.ceil(Math.random() * 3)
    if (random >= 2) {
        //find the window relative main coordinates
        // let voteButtonCheckerCords = this.getBoundingClientRect();
        let voteButtonCheckerCords = {
            top: event.clientY - 50 * multY,
            left: event.clientX - 50 * multX
        }
        console.log(voteButtonCheckerCords.top)
        console.log(voteButtonCheckerCords.left)
        if (voteButtonCheckerCords.top < 0) {
            voteButtonCheckerCords.top = 0;
            multY = -1;
        }
        if (voteButtonCheckerCords.left < 0) {
            voteButtonCheckerCords.left = 0;
            multX = -1;
        }
        if (voteButtonCheckerCords.top > 650) {
            voteButtonCheckerCords.top = 650;
            multY = 1;
        }
        if (voteButtonCheckerCords.left > 1345) {
            voteButtonCheckerCords.left > 1345;
            multX = 1;
        }
        voteButtonChecker.style.left = voteButtonCheckerCords.left + "px";
        voteButtonChecker.style.top = voteButtonCheckerCords.top + "px";
    }
}

//vote click overboard
flag1.addEventListener("click", function() {
    nixonVotes * 5;
})