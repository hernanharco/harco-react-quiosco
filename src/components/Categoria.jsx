
import useQuiosco from "../hooks/useQuiosco"

export default function Categoria({categoria}) {

    const { handlerClickCategoria, categoriaActual } = useQuiosco();
    // console.log(props);
    const { icono, id,  nombre } = categoria
    // console.log(icono)
    const resaltarCategoriaActual = () => categoriaActual.id === id ? "bg-amber-400" : 'bg-white'

  return (
    <div className={`${resaltarCategoriaActual()} flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursor-pointer`}>
        <img 
            src={`/img/icono_${icono}.svg`} 
            alt="Imagen Icono"
            className="w-12"
        />

        <button 
          className="text-lg fon-bold cursor-pointer truncate"
          type="button"
          onClick={() => handlerClickCategoria(id)}
          >
            {nombre}
          </button>
    </div>
  )
}
