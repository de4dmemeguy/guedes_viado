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
        documentacao: formData.get('documentacaocivil'),
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
            SCU: formData.get('situacaoCadastroUnico'),
        },
        grupo: [
            {
                nome: formData.get('nome'),
                vinculo: formData.get('vinculo'),
                idade: formData.get('idade'),
                docProvi: formData.get('documentoProvidenciado'),
                escolaridade: formData.get('escolaridade_grupo'),
                pcd: formData.get('pcd'),
            }
        ],
        encaminhamento: {
            doc_encaminhamento: formData.get('encaminhamentosAgendados'),
            nome_tecnico: formData.get('nomeCompletoTec')
        }
    }

    
    localStorage.setItem("dadosPessoa", JSON.stringify(dadosPessoa));
    const armazenar = localStorage.getItem(dadosPessoa);

    /*window.location.href = "tabelasocio.html"*/

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
