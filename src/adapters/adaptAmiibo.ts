
interface RawAmiibo {
    name: string;
    image: string;
    gameSeries: string;
    type: string;
    
  }
  
  interface AmiiboAPIResponse {
    amiibo: RawAmiibo[];
  }
  
  interface AmiiboStructure {
    name: string;
    image: string;
    game: string;
  }

  export function adaptAmiibo(singleAmiibo: RawAmiibo): AmiiboStructure {
    return {
      name: singleAmiibo.name,
      image: singleAmiibo.image,
      game: singleAmiibo.gameSeries,
    };
  }
  
  export const apiToAmiibo = (amiiboData: AmiiboAPIResponse): AmiiboStructure[] => {
    return amiiboData.amiibo
    .filter(amiibo => amiibo.type !== "Card")
    .map(adaptAmiibo);
  };
  