declare module 'iso-3166-1' {
  export interface Country {
    country: string;
    alpha2: string;
    alpha3: string;
    numeric: string;
  }
  export function whereNumeric(code: string | number): Country | undefined;
}
