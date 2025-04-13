
interface RawAmiibo {
    series: string;
    character: string;
    gameSeries: string;
    head: string;
    image: string;
    name: string;
    release: {
      jp: string
    }
    tail: string;
    type: string;
    
  }
  
  interface AmiiboAPIResponse {
    amiibo: RawAmiibo[];
  }
  
  export interface AmiiboStructure {
    name: string;
    image: string;
    game: string;
    id: string;
    release: {
      jp?: string
    }
  }
  export interface DetailStructure {
    name: string;
    image: string;
    game: string;
    character: string;
    release: {
      jp: string;
    }
  }
  export function adaptAmiibo(singleAmiibo: RawAmiibo): AmiiboStructure {
    return {
      name: singleAmiibo.name,
      image: singleAmiibo.image,
      game: singleAmiibo.gameSeries,
      id: singleAmiibo.head + singleAmiibo.tail,
      release: {
        jp: singleAmiibo.release.jp
      }
      
    };
  }
  
  export const apiToAmiibo = (amiiboData: AmiiboAPIResponse): AmiiboStructure[] => {
    return amiiboData.amiibo
    .filter(amiibo => amiibo.type !== "Card")
    .map(adaptAmiibo);
  };
  
  export function amiiboDetail(detailAmiibo: RawAmiibo): DetailStructure {
    return {
      name: detailAmiibo.name,
      image: detailAmiibo.image,
      game: detailAmiibo.gameSeries,
      character: detailAmiibo.character,
      release: {
        jp: detailAmiibo.release.jp
      }
    }
  }