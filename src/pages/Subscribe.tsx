import { Logo } from '../components/Logo';

export function Subscribe() {
  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <Logo />
          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Uma <strong className="text-brown-400">aplicação completa</strong>,
            do zero, com <strong className="text-brown-400">React JS</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Ao invés de um site de eventos criado na Ignite Lab, este projeto
            tem uma pegada mais musical, liberando músicas em vez de aulas pra
            dar uma diferenciada.
          </p>
        </div>
        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="text-2xl mb-6 block">
            Inscreva-se gratuitamente
          </strong>

          <form action="" className="flex flex-col gap-2 w-full">
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="text"
              placeholder="Seu nome completo"
            />
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="email"
              placeholder="Digite seu e-mail"
            />

            <button
              type="submit"
              className="mt-4 bg-brown-500 py-4 rounded font-bold text-sm hover:bg-brown-600 transition-colors uppercase"
            >
              Garantir playlist da vez
            </button>
          </form>
        </div>
      </div>

      <img src="/src/assets/code-mockup.png" className="mt-10" alt="" />
    </div>
  );
}
