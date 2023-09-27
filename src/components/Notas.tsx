interface noteProps { // tipo de dado
    id: number,
    content: string
  }  

export function Notas(not: noteProps) {
    return (
        <div className="bg-zinc-900 w-full h-10 text- rounded m-2 flex items-center justify-center">
            Nota: {not.content}
        </div>
    )
}