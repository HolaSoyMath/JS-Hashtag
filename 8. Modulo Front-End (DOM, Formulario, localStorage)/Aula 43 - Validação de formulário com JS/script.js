document.addEventListener('DOMContentLoaded', function() {
  const formulario = document.getElementById('meuFormulario');

  formulario.addEventListener('submit', function(event){
    validarCamposObrigatorios();
    function validarCamposObrigatorios() {
      let camposObrigatorios = document.querySelectorAll('.obrigatorio');
      console.log(camposObrigatorios)
    }
  })

})