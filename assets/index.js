// document.querySelector('#btTarjetaFim').addEventListener('click', validaForm);

function validaForm() {
    let answered = 0;
    const checks = document.querySelectorAll('.tarjetaContainer .required');
    for (let i = 0; i < checks.length; i++) {
        const element = checks[i];
        if (element.value != "") {
            answered++
        } else {
            document.querySelector('.modal-erro-form').style.display = "block";
            break
        }
    }
    if (answered == 5) {
        document.querySelector('.tarjetaContainer').style.display = "none";
    }

}

function exibeProximo(e) {
    console.log(e)
    const proximo = document.querySelector(`#${e}`);
    proximo.style.display = "block";
    proximo.scrollIntoView({ behavior: "smooth" })
}

function validaUltimaResposta(resposta) {
    if (resposta == 0) {
        document.querySelector('.erro-tablet').style.display = "block";
    } else if (resposta == 1) {
        document.querySelector("#declaracao-conteudo").style.display = "block";
        document.querySelector("#declaracao-conteudo").scrollIntoView({ behavior: "smooth" });

        // tooltip
        setTimeout(() => {
            document.querySelector('.tooltip-3').style.display = "block";
            document.querySelector('.tooltip-msg-3').style.display = "block";
        }, 500);
    }
    // $(".dbv-container").scrollTop($(".dbv-position").height())
    // $(".dbv-position").scrollTop($("#dbvAltura").height() + $("#page-title").height());
}

document.querySelectorAll('.modal-feedback-dbv button').forEach(element => {
    element.addEventListener('click', function () {
        element.parentElement.style.display = "none";
    });
});

document.querySelector('#continuar-recibo').addEventListener('click', function () {
    document.querySelector('.edbv-correto').style.display = "block";
    document.querySelector('#tabela-recibo').style.display = "none";
    document.querySelector('#tabela-nada-declarar').style.display = "block";
});

document.querySelector('#continuar-nada-declarar').addEventListener('click', function () {
    document.querySelector('.dbv-container').style.display = "none";
    document.querySelector('.infografico-container').style.display = "block"
});

document.querySelector('#finaliza-infografico').addEventListener('click', function () {
    document.querySelector('.infografico-container').style.display = "none";
});

function alternativaErrada(e) {
    console.log(e)
    const alternativaSelecionada = e;
    const alternativaContainer = alternativaSelecionada.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
    console.log(alternativaContainer);
    alternativaContainer.classList.add('errado');

    setTimeout(() => {
        alternativaContainer.classList.remove('errado');
    }, 1500);
};

function mostraModal(target) {

    switch (target) {
        case 1:
            document.querySelector('.tarjetaContainer').style.display = "block";
            setTimeout(() => {
                document.querySelector('.tooltip-1').style.display = "block";
                document.querySelector('.tooltip-msg-1').style.display = "block";
            }, 750);
            break;
        case 2:
            document.querySelector('.dbv-container').style.display = "block";
            break;
        case 3:
            document.querySelector('.infografico-container').style.display = "block";
            break;
    }
};

document.querySelector('.tooltip-msg-1 button').addEventListener('click', function (e) {
    const parentTooltip = document.querySelector('.tooltip-1');
    const nextTooltip = document.querySelector('.tooltip-2');
    document.querySelector('.tooltip-msg-1').style.display = "none";
    setTimeout(() => {
        document.querySelector('.tooltip-msg-2').style.display = "block";
    }, 500);
    parentTooltip.style.display = "none";
    nextTooltip.style.display = "block";
    nextTooltip.scrollIntoView({ behavior: "smooth" })
});

document.querySelector('.tooltip-msg-2 button').addEventListener('click', function () {
    document.querySelector('.tooltip-2').style.display = "none";
    document.querySelector('.tooltip-msg-2').style.display = "none";
    setTimeout(() => {
        document.querySelector('.tarjetaContainer').style.display = "none";
    }, 750);
});

document.querySelector('.tooltip-msg-3 button').addEventListener('click', function () {

    const vGrupo = document.querySelector('#grupo');
    const vSubgrupo = document.querySelector('#subgrupo');
    const vMarca = document.querySelector('#marca');
    const vModelo = document.querySelector('#modelo');
    const vNrSerie = document.querySelector('#numeroSerie');
    const vQtd = document.querySelector('#quantidade');
    const vMoeda = document.querySelector('#moeda');
    const vValor = document.querySelector('#valor');


    document.querySelector('#edbv-g1').style.display = "none";
    document.querySelector('#declaracao-conteudo').style.display = "none";
    document.querySelector("#dados-pessoa").style.display = "block";
    document.querySelector('.dbv-container').scrollTo(0, 0);

    document.querySelector('#sub-grupo').innerHTML = `<p>${vSubgrupo.value}</p>`
    document.querySelector('#desc-bem').innerHTML = `<p>${vMarca.value}; ${vModelo.value}; ${vNrSerie.value}</p>`
    document.querySelector('#quantidade-target').innerHTML = `<p>${vQtd.value}</p>`
    document.querySelector('#valor-unitario').innerHTML = `<p>${vValor.value}</p>`
    document.querySelector('#moeda-target').innerHTML = `<p>${vMoeda.value}</p>`
    document.querySelector('#valor1').innerHTML = `<p>${vValor.value}</p>`
    document.querySelector('#valor2').innerHTML = `<p>${vValor.value}</p>`

    document.querySelector('.tooltip-msg-3').style.display = "none";
    document.querySelector('.tooltip-3').style.display = "none";
    document.querySelector('.tooltip-msg-4').style.display = "block";
    document.querySelector('.tooltip-4').style.display = "block";

});

document.querySelector('.tooltip-msg-4 button').addEventListener('click', function () {
    document.querySelector('.tooltip-msg-4').style.display = "none";
    document.querySelector('.tooltip-4').style.display = "none";
    document.querySelector('#dados-pessoa').style.display = "none";
    document.querySelector('#tabela-desc-conteudo').style.display = "block";
    document.querySelector('.dbv-container').scrollTo(0, 0);
    document.querySelector('.tooltip-msg-5').style.display = "block";
    document.querySelector('.tooltip-5').style.display = "block";
});

document.querySelector('.tooltip-msg-5 button').addEventListener('click', function () {
    document.querySelector('.tooltip-msg-5').style.display = "none";
    document.querySelector('.tooltip-5').style.display = "none";
    document.querySelector('#tabela-desc-conteudo').style.display = "none";
    document.querySelector('#tabela-recibo').style.display = "block";
    document.querySelector('.dbv-container').scrollTo(0, 0);
    document.querySelector('.tooltip-msg-6').style.display = "block";
    document.querySelector('.tooltip-6').style.display = "block";
});

document.querySelector('.tooltip-msg-6 button').addEventListener('click', function () {
    document.querySelector('.tooltip-msg-6').style.display = "none";
    document.querySelector('.tooltip-6').style.display = "none";
    document.querySelector('.edbv-correto').style.display = "block";
    document.querySelector('#tabela-recibo').style.display = "none";
    document.querySelector('#tabela-nada-declarar').style.display = "block";

});
