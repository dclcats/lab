export interface PUBLICATION_INFO {
  title: string;
  author: string;
  address: string;
}

export interface PUBLICATION_STRUCT {
  year: string;
  info: PUBLICATION_INFO[];
}
