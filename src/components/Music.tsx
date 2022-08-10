import { CheckCircle, Lock } from 'phosphor-react';

interface MusicProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'play' | 'playing';
}

export function Music(props: MusicProps) {
  const isMusicAvailable = false;

  return (
    <a href="#">
      <span className="text-gray-300">{props.availableAt.toString()}</span>

      <div className="rounded border border-gray-500 p-4 mt-2">
        <header className="flex items-center justify-between">
          {isMusicAvailable ? (
            <span className="text-sm text-brown-400 font-medium flex items-center gap-2">
              <CheckCircle size={20} />
              Vídeo liberado
            </span>
          ) : (
            <span className="text-sm text-warning-500 font-medium flex items-center gap-2">
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span className="text-xs uppercase rounded px-2 py-[0.125rem] text-white border border-brown-500 font-bold">
            {props.type === 'play' ? 'Tocar' : 'Tocando'}
          </span>
        </header>

        <strong className="text-gray-200 mt-5 block">{props.title}</strong>
      </div>
    </a>
  );
}
