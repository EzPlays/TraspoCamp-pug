const btnEliminarEmpresa = (id => {
    Swal.fire({
        title: '¿Está seguro?',
        text: "¡No podrás revertir esto!",
        icon: 'warning',
        width: 600,
        padding: '4em',
        backdrop: `
            rgba(0,0,123,0.4)
            url("https://sweetalert2.github.io/images/nyan-cat.gif")
            left top
            no-repeat
        `,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '¡Sí, bórralo!',
        cancelButtonText: '¡No, Cancelar!'
      }).then((result) => {
        if (result.isConfirmed) {

          Swal.fire(
            '¡Eliminado!',
            'Su archivo ha sido eliminado.',
            'success'
          );
          setTimeout(() => {
                window.location = `/borrar-empresas/${id}`
            },1200);
        }
      })
})