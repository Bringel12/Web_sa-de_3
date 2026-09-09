/* =========================
   MENU MOBILE
========================= */

const sidebar = document.querySelector(".sidebar");
const mobileMenu = document.querySelector(".mobile-menu");

mobileMenu.addEventListener("click", () => {
    sidebar.classList.toggle("open");
});


/* =========================
   MENU ATIVO
========================= */

const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach(item => {

    item.addEventListener("click", function (event) {

        event.preventDefault();

        menuItems.forEach(menu => {
            menu.classList.remove("active");
        });

        this.classList.add("active");

    });

});


/* =========================
   GRÁFICO DE RECEITA
========================= */

const revenueCanvas = document.getElementById("revenueChart");

const revenueChart = new Chart(revenueCanvas, {

    type: "line",

    data: {

        labels: [
            "01/06",
            "05/06",
            "10/06",
            "15/06",
            "20/06",
            "25/06",
            "30/06"
        ],

        datasets: [

            {
                label: "Receita",

                data: [
                    28000,
                    35000,
                    33000,
                    27000,
                    42000,
                    38000,
                    46850
                ],

                borderColor: "#527ee5",

                backgroundColor: "rgba(82, 126, 229, 0.08)",

                borderWidth: 2,

                pointRadius: 3,

                pointHoverRadius: 5,

                tension: 0.35,

                fill: true
            }

        ]

    },

    options: {

        responsive: true,

        maintainAspectRatio: false,

        plugins: {

            legend: {
                display: false
            }

        },

        scales: {

            x: {
                grid: {
                    display: false
                },

                ticks: {
                    font: {
                        size: 8
                    },

                    color: "#9aa3b1"
                }
            },

            y: {

                beginAtZero: false,

                grid: {
                    color: "#edf0f4"
                },

                ticks: {
                    font: {
                        size: 8
                    },

                    color: "#9aa3b1",

                    callback: function(value) {

                        return "R$ " +
                            (value / 1000).toFixed(0) +
                            "k";

                    }

                }
            }

        }

    }

});


/* =========================
   GRÁFICO DE ESPECIALIDADES
========================= */

const specialtyCanvas =
    document.getElementById("specialtyChart");

const specialtyChart = new Chart(specialtyCanvas, {

    type: "doughnut",

    data: {

        labels: [
            "Psicologia",
            "Nutrição",
            "Fisioterapia",
            "Fonoaudiologia",
            "Outros"
        ],

        datasets: [

            {

                data: [
                    482,
                    236,
                    168,
                    98,
                    75
                ],

                backgroundColor: [
                    "#6a6ee5",
                    "#36a68f",
                    "#f4a83a",
                    "#53a6dd",
                    "#b4b9c4"
                ],

                borderWidth: 0,

                hoverOffset: 5

            }

        ]

    },

    options: {

        responsive: true,

        maintainAspectRatio: false,

        cutout: "65%",

        plugins: {

            legend: {
                display: false
            }

        }

    }

});


/* =========================
   BOTÃO VER TODOS
========================= */

const viewAllButtons =
    document.querySelectorAll(".view-all, .bottom-link");

viewAllButtons.forEach(button => {

    button.addEventListener("click", () => {

        alert("Página de atendimentos em desenvolvimento.");

    });

});


/* =========================
   FILTRO DE DATA
========================= */

const dateFilter =
    document.querySelector(".date-filter");

dateFilter.addEventListener("click", () => {

    alert("Aqui podemos colocar o filtro de período.");

});


/* =========================
   NOTIFICAÇÕES
========================= */

const notificationButtons =
    document.querySelectorAll(".notification");

notificationButtons.forEach(button => {

    button.addEventListener("click", () => {

        alert("Você possui novas notificações.");

    });

});


/* =========================
   PESQUISA
========================= */

const searchButton =
    document.querySelector(".icon-button");

searchButton.addEventListener("click", () => {

    const pesquisa = prompt(
        "Digite o que deseja pesquisar:"
    );

    if (pesquisa) {

        console.log(
            "Pesquisa realizada:",
            pesquisa
        );

    }

});