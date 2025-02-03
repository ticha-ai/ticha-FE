export interface OptionBlockType {
  title: string;
  valueKey: string | number;
  description: string;
  subDescription: string;
  isRecommend: boolean;
}

export interface OptionSectionType {
  title: string;
  optionKey: string;
  description: string;
  options: OptionBlockType[];
}
