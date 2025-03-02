import Type from "./Type";

interface BookCardProps {
    id: number;
    titulo: string;
    autor: string;
    genero: string;
    preco: number;
    sinopse: string;
    capa: string;
    type: Type;
}



export default BookCardProps;
