export interface BaseData {
  message: string;
  enumData: EnumData;
}

export enum EnumData {
  ERROR = 'error',
  INFO = 'info'
}
