import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../components/Logo';
import { useCreateSubscriberMutation } from '../graphql/generated';

import imgCodeMockup from '/src/assets/code-mockup.png';

export function Subscribe() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [createSubscriber, { loading }] = useCreateSubscriberMutation();

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault();

    await createSubscriber({
      variables: {
        name,
        email,
      },
    });

    navigate('/playlist');
  }

  return (
    <div className="px-6 min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
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

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col gap-2 w-full"
          >
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="text"
              placeholder="Seu nome completo"
              onChange={(event) => setName(event.target.value)}
            />
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="email"
              placeholder="Digite seu e-mail"
              onChange={(event) => setEmail(event.target.value)}
            />

            <button
              type="submit"
              disabled={loading}
              className="mt-4 bg-brown-500 py-4 rounded font-bold text-sm hover:bg-brown-600 transition-colors uppercase disabled:opacity-50"
            >
              Garantir playlist da vez
            </button>
          </form>
        </div>
      </div>

      <img src={imgCodeMockup} className="mt-10" alt="" />
    </div>
  );
}
