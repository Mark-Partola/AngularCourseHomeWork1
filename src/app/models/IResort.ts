export type IMenuItem = {
  title: string,
  subtitle?: string,
  description: string,
  photos?: Array<string>,
  phone: string
};

export type IResort = {
  menu: Array<{title: string, handler: Function}>,
  items: Array<IMenuItem>,
  loading: boolean
};