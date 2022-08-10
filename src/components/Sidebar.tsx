import { useGetMusicsQuery } from '../graphql/generated';
import { Music } from './Music';

export function Sidebar() {
  const { data } = useGetMusicsQuery();

  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Playlist de Músicas
      </span>

      <div className="flex flex-col gap-8">
        {data?.musics.map((music) => {
          return (
            <Music
              key={music.id}
              title={music.title}
              slug={music.slug}
              availableAt={new Date(music.availableAt)}
            />
          );
        })}
      </div>
    </aside>
  );
}
