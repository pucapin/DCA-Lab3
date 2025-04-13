
 export interface RawAmiibo {
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
  
  export interface AmiiboAPIResponse {
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

