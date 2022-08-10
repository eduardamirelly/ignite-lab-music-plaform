import { isPast, format } from 'date-fns';
import { CheckCircle, Lock } from 'phosphor-react';
import ptBR from 'date-fns/locale/pt-BR';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

interface MusicProps {
  title: string;
  slug: string;
  availableAt: Date;
}

export function Music(props: MusicProps) {
  const { slug } = useParams<{ slug: string }>();

  const isMusicAvailable = isPast(props.availableAt);
  const availableDateFormatted = format(
    props.availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    {
      locale: ptBR,
    }
  );

  const isActiveMusic = slug === props.slug;

  return (
    <Link
      to={`${isMusicAvailable ? `/playlist/music/${props.slug}` : '/playlist'}`}
      className="group"
    >
      <span className="text-gray-300">{availableDateFormatted}</span>

      <div
        className={classNames(
          'rounded border border-gray-500 group-hover:border-brown-500 p-4 mt-2',
          {
            'bg-brown-500': isActiveMusic,
          }
        )}
      >
        <header className="flex items-center justify-between">
          {isMusicAvailable ? (
            <span
              className={classNames(
                'text-sm font-medium flex items-center gap-2',
                {
                  'text-brown-400': !isActiveMusic,
                  'text-white': isActiveMusic,
                }
              )}
            >
              <CheckCircle size={20} />
              Vídeo liberado
            </span>
          ) : (
            <span className="text-sm text-warning-500 font-medium flex items-center gap-2">
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span
            className={classNames(
              'text-xs uppercase rounded px-2 py-[0.125rem] text-white border font-bold',
              {
                'border-brown-500': !isActiveMusic,
                'border-white': isActiveMusic && isMusicAvailable,
              }
            )}
          >
            {!isActiveMusic ? 'Tocar' : 'Tocando'}
          </span>
        </header>

        <strong
          className={classNames('mt-5 block', {
            'text-white': isActiveMusic && isMusicAvailable,
            'text-gray-200': !isActiveMusic,
          })}
        >
          {props.title}
        </strong>
      </div>
    </Link>
  );
}
