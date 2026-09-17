// ========================================
// OINANCE MARKETS
// V1 INTERACTIVE SYSTEM
// ========================================


// SEARCH
const searchInput = document.querySelector(".search-box input");
const marketRows = document.querySelectorAll(".market-row");

if (searchInput) {

    searchInput.addEventListener("input", function () {

        const searchTerm = this.value.toLowerCase().trim();

        marketRows.forEach(function (row) {

            const text = row.textContent.toLowerCase();

            if (text.includes(searchTerm)) {
                row.style.display = "grid";
            } else {
                row.style.display = "none";
            }

        });

    });

}


// MOBILE MENU
const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".navigation");

if (menuButton) {

    menuButton.addEventListener("click", function () {

        if (navigation.style.display === "flex") {

            navigation.style.display = "";

        } else {

            navigation.style.display = "flex";
            navigation.style.flexDirection = "column";
            navigation.style.position = "absolute";
            navigation.style.top = "78px";
            navigation.style.right = "5%";
            navigation.style.background = "#fff";
            navigation.style.padding = "20px";
            navigation.style.border = "1px solid #ddd";
            navigation.style.zIndex = "1000";

        }

    });

}


// VIEW ALL BUTTONS
const viewButtons = document.querySelectorAll(".view-button");

viewButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        alert(
            "OINANCE Markets is preparing the full market list.\n\n" +
            "100+ assets will be available here when the market database is connected."
        );

    });

});


// MARKET ROW CLICK
marketRows.forEach(function (row) {

    row.addEventListener("click", function () {

        const asset = row.querySelector(".asset strong");

        if (asset) {

            alert(
                asset.textContent +
                "\n\nOINANCE Markets asset page coming soon."
            );

        }

    });

});
