export interface Range {
  min: number;
  max: number;
}

export const pricesGroups: {[key: string]: Range} = {
  '0-499': {min: 0, max: 499},
  '500-999': {min: 500, max: 999},
  '1000-1499': {min: 1000, max: 1499},
  '1500-2000': {min: 1500, max: 2000},
};
