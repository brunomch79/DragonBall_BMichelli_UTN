export function Tarjeta({ item }) {

  return (
    <div
      className=" flex flex-col items-center w-[200px] h-[330px] border-3 rounded bg-red-700 border-black mt-5 text-white shadow transform transition duration-300 hover:scale-105">
      <h3>{item?.name}</h3>

      <img
        className="w-[200px] h-[280px] object-contain bg-amber-400 "
        src={item?.image} />

      <p>ki: {item?.ki}</p>
    </div>
  )
}

