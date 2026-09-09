const formulario = document.querySelector(".login-form");

const botaoLogin = formulario.querySelector('button[type="submit"]');

formulario.addEventListener("submit", async (event) => {

    event.preventDefault();

    const email = document.getElementById("email").value.trim();

    const senha = document.getElementById("password").value;

    console.log("Tentando fazer login...");
    console.log("E-mail:", email);


    // =========================
    // VALIDAÇÃO
    // =========================

    if (email === "") {

        alert("Digite seu e-mail.");

        return;
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValido.test(email)) {

        alert("Digite um e-mail válido.");

        return;
    }

    if (senha === "") {

        alert("Digite sua senha.");

        return;
    }


    // =========================
    // CARREGAMENTO
    // =========================

    botaoLogin.disabled = true;

    botaoLogin.textContent = "Entrando...";


    try {

        const resposta = await fetch("http://localhost:3000/login", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                email: email,
                senha: senha
            })

        });


        console.log("Servidor respondeu:", resposta.status);


        // =========================
        // VERIFICAR RESPOSTA
        // =========================

        const tipoConteudo = resposta.headers.get("content-type");

        let dados;


        if (
            tipoConteudo &&
            tipoConteudo.includes("application/json")
        ) {

            dados = await resposta.json();

        } else {

            const texto = await resposta.text();

            console.error("Resposta recebida:", texto);

            alert("O servidor não retornou uma resposta válida.");

            return;
        }


        console.log("Resposta do servidor:", dados);


        // =========================
        // ERRO NO LOGIN
        // =========================

        if (!resposta.ok) {

            alert(
                dados.mensagem ||
                "E-mail ou senha incorretos."
            );

            return;
        }


        // =========================
        // SUCESSO
        // =========================

        console.log(
            "Usuário logado:",
            dados.usuario
        );

        // alert("Login realizado com sucesso!");
        window.location.href = "modelo/principal.html";


    } catch (error) {

        console.error(
            "ERRO COMPLETO:",
            error
        );

        alert(
            "Erro ao conectar com o servidor. Veja o Console (F12)."
        );


    } finally {

        botaoLogin.disabled = false;

        botaoLogin.textContent = "Entrar";

    }

});