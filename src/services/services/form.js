//PESSOAS
/*
const nomeCompleto = document.querySelector("#nomeCompleto");
const cpf = document.querySelector("#cpf");
const dataNascimento = document.querySelector("#dataNascimento");
const numeroNIS = document.querySelector("#numeroNIS");
const icor_raca = document.querySelector(".cor_raca");
const ioutro_cor_raca = document.querySelector(".outro_cor_raca");
const iescolaridade = document.querySelector(".escolaridade");
const ifve = document.querySelector(".fve");
const ioutro_fve = document.querySelector(".outro_fve");
const ibenesociais = document.querySelector(".benesociais");
const ioutro_benesociais = document.querySelector(".outro_benesociais");
const iscu = document.querySelector(".scu");
const genero = document.querySelector("#genero");
const estadoCivil = document.querySelector('input[name="estadoCivil"]');
const ioutro_estadocivil = document.querySelector(".outro_estadocivil");
const inacionalidade = document.querySelector(".nacionalidade");
const ioutro_nacionalidade = document.querySelector(".outro_nacionalidade");
const inaturalidade = document.querySelector(".naturalidade");
const iprofissao = document.querySelector(".profissao");
const irenda = document.querySelector(".renda");
*/

let formPessoa = document.getElementById("formPessoa");

formPessoa.addEventListener("submit", (e) => {
    e.preventDefault();

    let formData = new FormData(e.target)

    let dadosPessoa = {
        nome: formData.get('nomeCompleto'),
        cpf: formData.get('cpf'),
        datanasc: formData.get('dataNascimento'),
        num_nis: formData.get('numeroNIS'),
        cor_raca: formData.get('cor'),
        escolaridade: formData.get('escolaridade'),
        fve: formData.get('ocupacao'),
        outro_fve: formData.get('outraOcupacao'),
        genero: formData.get('genero'),
        estadocivil: formData.get('estadoCivil'),
        nacionalidade: formData.get('nacionalidade'),
        naturalidade: formData.get('naturalidade'),
        profissao: formData.get('profissao'),
        renda: formData.get('renda'),
        endereco: {
            cep: formData.get('cep'),
            rua: formData.get('rua'),
            bairro: formData.get('bairro'),
            pont_referen: formData.get('referencia'),
            telcontato: formData.get('telefone'),
            gp_whapp: formData.get('aceitaWhatsapp'),
            tiporesi: formData.get('tipoResidencia'),
            tipoestru: formData.get('tipoEstrutura'),
            outro_tipoestru: formData.get('outrosMateriais'),
            ener_ele: formData.get('energiaEletrica'),
            abasteciagua: formData.get('abastecimentoAgua'),
            outro_abasteciagua: formData.get('outraFormaAgua'),
            escoasanita: formData.get('escoamentoSanitario'),
            outro_escoasanita: formData.get('outraFormaEsgoto'),
            benefi_sociais: formData.get('beneficiosSociais'),
            outro_benefi_sociais: formData.get('outroBeneficio'),
            SCU: formData.get('situacaoCadastroUnico')
        }
    }

    console.log(dadosPessoa)
    cadastrar(dadosPessoa)
  });

function cadastrar(dadosPessoa) {
    axios.post("http://localhost:8080/api/pessoas", dadosPessoa)
    .then(function (res) {
        console.log("Sucesso!")
        console.log(res)
    })
    .catch(function (res) { 
        console.log("Erro!")
        console.log(res) 
    })
}

//ENDERECOS
/*
const inome = document.querySelector(".nome");
const icpf = document.querySelector(".cpf");
const idatanasc = document.querySelector(".datanasc");
const inum_nis = document.querySelector(".num_nis");
const icor_raca = document.querySelector(".cor_raca");
const ioutro_cor_raca = document.querySelector(".outro_cor_raca");
const iescolaridade = document.querySelector(".escolaridade");
const ifve = document.querySelector(".fve");
const ioutro_fve = document.querySelector(".outro_fve");
const ibenesociais = document.querySelector(".benesociais");
const ioutro_benesociais = document.querySelector(".outro_benesociais");
const iscu = document.querySelector(".scu");
const igenero = document.querySelector(".genero");
const ioutro_genero = document.querySelector(".outro_genero");
const iestadocivil = document.querySelector(".estadocivil");
const ioutro_estadocivil = document.querySelector(".outro_estadocivil");
const inacionalidade = document.querySelector(".nacionalidade");
const ioutro_nacionalidade = document.querySelector(".outro_nacionalidade");
const inaturalidade = document.querySelector(".naturalidade");
const iprofissao = document.querySelector(".profissao");
const irenda = document.querySelector(".renda");
function cadastrar_endereco() {
    fetch("http://localhost:8080/api/enderecos",
        {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                nome: inome.value,
                cpf: icpf.value,
                datanasc: idatanasc.value,
                num_nis: inum_nis.value,
                cor_raca: icor_raca.value,
                outro_cor_raca: ioutro_cor_raca.value,
                escolaridade: iescolaridade.value,
                fve: ifve.value,
                outro_fve: ioutro_fve.value,
                benesociais: ibenesociais.value,
                outro_benesociais: ioutro_benesociais.value,
                scu: iscu.value,
                genero: igenero.value,
                outro_genero: ioutro_genero.value,
                estadocivil: iestadocivil.value,
                outro_estadocivil: ioutro_estadocivil.value,
                nacionalidade: inacionalidade.value,
                outro_nacionalidade: ioutro_nacionalidade.value,
                nacionalidade: inaturalidade.value,
                profissao: iprofissao.value,
                renda: irenda.value
            })
        })
        .then(function (res) { console.log(res) })
        .catch(function (res) { console.log(res) })
}

function limpar() {
    inome.value = "",
        icpf.value = "",
        idatanasc.value = "",
        inum_nis.value = "",
        icor_raca.value = "",
        ioutro_cor_raca.value = "",
        iescolaridade.value = "",
        ifve.value = "",
        ioutro_fve.value = "",
        ibenesociais.value = "",
        ioutro_benesociais = "",
        iscu.value = "",
        igenero.value = "",
        ioutro_genero.value = "",
        iestadocivil.value = "",
        ioutro_estadocivil.value = "",
        inacionalidade.value = "",
        ioutro_nacionalidade.value = ""
        inacionalidade.value = "",
        iprofissao.value = "",
        irenda.value = ""
}


formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    cadastrar();
    limpar;
});

*/
