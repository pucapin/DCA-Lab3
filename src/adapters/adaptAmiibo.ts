import { AmiiboAPIResponse, AmiiboStructure, RawAmiibo, DetailStructure } from "../Types";
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