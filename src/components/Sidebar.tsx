import { gql, useQuery } from '@apollo/client';
import { Music } from './Music';

const GET_MUSICS_QUERY = gql`
  query GetMusics {
    musics(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      musicType
      availableAt
      title
      slug
    }
  }
`;

interface GetMusicsQueryResponse {
  musics: {
    id: string;
    title: string;
    slug: string;
    availableAt: string;
    musicType: 'play' | 'playing';
  }[];
}

export function Sidebar() {
  const { data } = useQuery<GetMusicsQueryResponse>(GET_MUSICS_QUERY);

  console.log(data);

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
              type={music.musicType}
            />
          );
        })}
      </div>
    </aside>
  );
}
