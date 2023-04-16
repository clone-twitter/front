export interface IAvatar {
  data: {
    id: number;
    attributes: {
      alternativeText: string;
      caption: string;
      createdAt: Date;
      ext: string;
      formats: {
        large?: IFormat;
        medium?: IFormat;
        small?: IFormat;
        thumbnail?: IFormat;
      };
      hash: string;
      height: number;
      mime: string;
      name: string;
      previewUrl: string;
      provider: string;
      provider_metadata: string;
      size: number;
      updatedAt: Date;
      url: string;
      width: number;
    }
  }
}

interface IFormat {
  ext: string;
  hash: string;
  height: number;
  mime: string;
  name: string;
  path: string;
  size: number;
  url: string;
  width: number;
}